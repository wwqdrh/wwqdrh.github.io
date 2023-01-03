/**
 * 
 * @param {*} seed 
 * @returns 
 */

// 从谷歌V8引擎抄来的 https://github.com/v8/v8/blob/dae6dfe08ba9810abbe7eee81f7c58e999ae8525/src/math.js#L144
class Random {
    constructor(seed = new Date().getTime()) {
        this._setRngstate(seed)
    }

    // seed可以是字符串
    _setRngstate(seed) {
        // JS真没有好判断字符串是数字的办法
        if (/^-?\d{1,10}$/.test(seed) && seed >= -0x80000000 && seed <= 0x7FFFFFFF) {
            seed = parseInt(seed)
        } else {
            seed = this._hashCode(seed)
        }
        this._rngstate = [seed & 0xFFFF, seed >>> 16]
    }

    // 抄Java的
    _hashCode(str) {
        let hash = 0
        // JS的字符串是UTF-16编码
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) & 0xFFFFFFFF
        }
        return hash
    }

    // 返回[0, 1)
    random() {
        let r0 = (Math.imul(18030, this._rngstate[0] & 0xFFFF) + (this._rngstate[0] >>> 16)) | 0
        this._rngstate[0] = r0
        let r1 = (Math.imul(36969, this._rngstate[1] & 0xFFFF) + (this._rngstate[1] >>> 16)) | 0
        this._rngstate[1] = r1
        let x = ((r0 << 16) + (r1 & 0xFFFF)) | 0
        // Division by 0x100000000 through multiplication by reciprocal.
        return (x < 0 ? (x + 0x100000000) : x) * 2.3283064365386962890625e-10
    }

    // 返回[min, max]的整数
    randint(min, max) {
        return Math.floor(min + this.random() * (max - min + 1))
    }
}

// 生成[0, length)的随机序列，每次调用next()返回和之前不重复的值，直到[0, length)用完
class RandomSequence {
    constructor(length, seed) {
        this._rng = new Random(seed)
        this._list = new Array(length)
        for (let i = 0; i < length; i++) {
            this._list[i] = i
        }
        this._nextMin = 0
    }

    next() {
        if (this._nextMin >= this._list.length) {
            this._nextMin = 0
        }
        let index = this._rng.randint(this._nextMin, this._list.length - 1)
        let result = this._list[index]
        this._list[index] = this._list[this._nextMin]
        this._list[this._nextMin] = result
        this._nextMin++
        return result
    }
}

let config = {
    enableEncryption: true,
    enableDecryption: true,
    noWaterMark: true,
    codecName: 'ShuffleBlockCodec',
    randomSeed: '123456',
    postProcess: ''
}

const setseed = (seed) => {
    config.randomSeed = seed
}

const getConfig = () => {
    return config
}


function decryptall(seed) {
    let images = document.querySelectorAll("image")
    for (let item of images) {
        decrypt(item, seed)
    }
}

/**
 * 入口处，设置token
 * @param {*} img 
 * @param {*} seed 
 * @returns 
 */
function decrypt(img, seed) {
    setseed(seed)

    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')

    return doCodecCommon(canvas, ctx, img, imgData => {
        imgData = Codec.createCodec(ctx, getConfig(seed).codecName, imgData).decrypt()
        postProcess(imgData, seed)
        return imgData
    })
}

// 加密解密通用的部分，返回处理后的data URL。handleImgData传入imgData，返回新的imgData
function doCodecCommon(canvas, ctx, img, handleImgData) {
    [canvas.width, canvas.height] = [img.width, img.height]
    // 微博会把透明图片和白色混合
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, img.width, img.height)
    ctx.drawImage(img, 0, 0)
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    imgData = handleImgData(imgData);
    [canvas.width, canvas.height] = [imgData.width, imgData.height]
    ctx.putImageData(imgData, 0, 0)
    return canvas.toDataURL()
}


// 解密后的处理，比如滤波
function postProcess(imgData, seed) {
    switch (getConfig(seed).postProcess) {
        case 'gaussianBlur':
            gaussianBlur(imgData)
            break
        case 'medianBlur':
            medianBlur(imgData)
            break
    }
}


class Codec {
    constructor(ctx, imgData) {
        this._imgData = imgData
        this._ctx = ctx
    }
    // 加密，返回加密后的imgData
    encrypt() { }
    // 解密，返回解密后的imgData
    decrypt() { }
}
Codec._codecClasses = {}
Codec.createCodec = function (ctx, name, imgData) {
    let CodecClass = name in Codec._codecClasses ? Codec._codecClasses[name] : Codec._codecClasses.Move8x8BlockCodec
    return new CodecClass(ctx, imgData)
}

// 反色
class InvertCodec extends Codec {
    encrypt() { return this._invertColor() }
    decrypt() { return this._invertColor() }
    _invertColor() {
        let data = this._imgData.data
        for (let i = 0; i < data.length; i += 4) {
            data[i] = ~data[i] & 0xFF
            data[i + 1] = ~data[i + 1] & 0xFF
            data[i + 2] = ~data[i + 2] & 0xFF
        }
        return this._imgData
    }
}
Codec._codecClasses.InvertCodec = InvertCodec

// RGB随机置乱
class ShuffleRgbCodec extends Codec {
    encrypt() {
        let data = this._imgData.data
        let nRgbs = data.length / 4 * 3
        let seq = new RandomSequence(nRgbs, getConfig().randomSeed)
        let buffer = new Uint8ClampedArray(nRgbs)
        // 每一个RGB值放到新的位置
        for (let i = 0; i < data.length; i += 4) {
            buffer[seq.next()] = data[i]
            buffer[seq.next()] = data[i + 1]
            buffer[seq.next()] = data[i + 2]
        }
        for (let i = 0, j = 0; i < data.length; i += 4, j += 3) {
            data[i] = buffer[j]
            data[i + 1] = buffer[j + 1]
            data[i + 2] = buffer[j + 2]
        }
        return this._imgData
    }

    decrypt() {
        let data = this._imgData.data
        let nRgbs = data.length / 4 * 3
        let buffer = new Uint8ClampedArray(nRgbs)
        for (let i = 0, j = 0; i < data.length; i += 4, j += 3) {
            buffer[j] = data[i]
            buffer[j + 1] = data[i + 1]
            buffer[j + 2] = data[i + 2]
        }
        let seq = new RandomSequence(nRgbs, getConfig().randomSeed)
        // 取新的位置，放回原来的位置
        for (let i = 0; i < data.length; i += 4) {
            data[i] = buffer[seq.next()]
            data[i + 1] = buffer[seq.next()]
            data[i + 2] = buffer[seq.next()]
        }
        return this._imgData
    }
}
Codec._codecClasses.ShuffleRgbCodec = ShuffleRgbCodec

// 块随机置乱
// 由于JPEG是分成8x8的块在块内压缩，分成8x8块处理可以避免压缩再解密造成的高频噪声
class ShuffleBlockCodec extends Codec {
    encrypt() {
        return this._doCommon((result, blockX, blockY, newBlockX, newBlockY) =>
            this._copyBlock(result, newBlockX, newBlockY, this._imgData, blockX, blockY)
        )
    }

    decrypt() {
        return this._doCommon((result, blockX, blockY, newBlockX, newBlockY) =>
            this._copyBlock(result, blockX, blockY, this._imgData, newBlockX, newBlockY)
        )
    }

    _doCommon(handleCopy) {
        // 尺寸不是8的倍数则去掉边界
        let blockWidth = Math.floor(this._imgData.width / 8)
        let blockHeight = Math.floor(this._imgData.height / 8)
        let result = this._ctx.createImageData(blockWidth * 8, blockHeight * 8)
        let seq = new RandomSequence(blockWidth * blockHeight, getConfig().randomSeed)
        for (let blockY = 0; blockY < blockHeight; blockY++) {
            for (let blockX = 0; blockX < blockWidth; blockX++) {
                let index = seq.next()
                let newBlockX = index % blockWidth
                let newBlockY = Math.floor(index / blockWidth)
                handleCopy(result, blockX, blockY, newBlockX, newBlockY)
            }
        }
        return result
    }

    _copyBlock(dstImgData, dstBlockX, dstBlockY, srcImgData, srcBlockX, srcBlockY) {
        let iDstStart = (dstBlockY * dstImgData.width + dstBlockX) * 8 * 4
        let iSrcStart = (srcBlockY * srcImgData.width + srcBlockX) * 8 * 4
        for (let y = 0; y < 8; y++) {
            for (let i = 0; i < 8 * 4; i++) {
                dstImgData.data[iDstStart + i] = srcImgData.data[iSrcStart + i]
            }
            iDstStart += dstImgData.width * 4
            iSrcStart += srcImgData.width * 4
        }
    }
}
Codec._codecClasses.ShuffleBlockCodec = ShuffleBlockCodec

// 半反色
class HalfInvertCodec extends Codec {
    encrypt() { return this._halfInvertColor() }
    decrypt() { return this._halfInvertColor() }

    _halfInvertColor() {
        let invertFirst = true
        for (let y = 0; y < this._imgData.height; y += 8) {
            let height = Math.min(8, this._imgData.height - y)
            for (let x = invertFirst ? 0 : 8; x < this._imgData.width; x += 16) {
                let width = Math.min(8, this._imgData.width - x)
                this._invertColor(x, y, width, height)
            }
            invertFirst = !invertFirst
        }
        return this._imgData
    }

    _invertColor(x, y, width, height) {
        let data = this._imgData.data
        let iStart = (y * this._imgData.width + x) * 4
        for (let y = 0; y < height; y++) {
            for (let i = 0; i < width * 4; i += 4) {
                data[iStart + i] = ~data[iStart + i] & 0xFF
                data[iStart + i + 1] = ~data[iStart + i + 1] & 0xFF
                data[iStart + i + 2] = ~data[iStart + i + 2] & 0xFF
            }
            iStart += this._imgData.width * 4
        }
    }
}
Codec._codecClasses.HalfInvertCodec = HalfInvertCodec


window.$wwqdrh = {
    'resource': {
        decryptall,
        decrypt
    }
}