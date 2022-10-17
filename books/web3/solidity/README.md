## 简介

智能协议传上以太坊之后，它就变得不可更改, 这种永固性意味着你的代码永远不能被调整或更新。

指定合约的“所有权” - 就是说，给它指定一个主人（没错，就是您），只有主人对它享有特权。

在 Solidity 中，你的用户想要每次执行你的 DApp 都需要支付一定的 gas，gas 可以用以太币购买，因此，用户每次跑 DApp 都得花费以太币。

一个 DApp 收取多少 gas 取决于功能逻辑的复杂程度。每个操作背后，都在计算完成这个操作所需要的计算资源，（比如，存储数据就比做个加法运算贵得多）， 一次操作所需要花费的 gas 等于这个操作背后的所有运算花销的总和。
由于运行你的程序需要花费用户的真金白银，在以太坊中代码的编程语言，比其他任何编程语言都更强调优化。同样的功能，使用笨拙的代码开发的程序，比起经过精巧优化的代码来，运行花费更高，这显然会给成千上万的用户带来大量不必要的开销。

为什么要用 gas 来驱动？


以太坊就像一个巨大、缓慢、但非常安全的电脑。当你运行一个程序的时候，网络上的每一个节点都在进行相同的运算，以验证它的输出 —— 这就是所谓的“去中心化” 由于数以千计的节点同时在验证着每个功能的运行，这可以确保它的数据不会被被监控，或者被刻意修改。
可能会有用户用无限循环堵塞网络，抑或用密集运算来占用大量的网络资源，为了防止这种事情的发生，以太坊的创建者为以太坊上的资源制定了价格，想要在以太坊上运算或者存储，你需要先付费。
注意：如果你使用侧链，倒是不一定需要付费，比如咱们在 Loom Network 上构建的 CryptoZombies 就免费。你不会想要在以太坊主网上玩儿“魔兽世界”吧？ - 所需要的 gas 可能会买到你破产。但是你可以找个算法理念不同的侧链来玩它。我们将在以后的课程中咱们会讨论到，什么样的 DApp 应该部署在太坊主链上，什么又最好放在侧链。

在 Solidity 里，当你定义一个 public变量的时候， 它将自动定义一个公开的 "getter" 同名方法， 所以如果你像要查看 id 为 15 的僵尸，你可以像一个函数一样调用它： zombies(15).

## 语法

代码注释

netspec标准注释

```solidity
/// @title 一个简单的基础运算合约
/// @author ~~
/// @notice 现在，这个合约只添加一个乘法
contractMath{
  /// @notice 两个数相乘
/// @param x 第一个 uint
/// @param y  第二个 uint
/// @return z  (x * y) 的结果
/// @dev 现在这个方法不检查溢出
functionmultiply(uintx, uinty) returns(uintz) {
    // 这只是个普通的注释，不会被 natspec 解释
z = x * y;
  }
}
```

### 关键字

在 Solidity 中，功能执行始终需要从外部调用者开始。 一个合约只会在区块链上什么也不做，除非有人调用其中的函数。所以 msg.sender总是存在的。

Solidity 并不支持原生的字符串比较, 我们只能通过比较 // 两字符串的 keccak256 哈希值来进行判断

Storage 变量是指永久存储在区块链中的变量。 Memory 变量则是临时的，当外部函数对某合约调用完成时，内存型变量即被移除。（大多数时候你都用不到这些关键字，默认情况下 Solidity 会自动处理它们。 状态变量（在函数之外声明的变量）默认为“存储”形式，并永久写入区块链；而在函数内部声明的变量是“内存”型的，它们函数调用结束后消失。，而也有一些情况下，你需要手动声明存储类型，主要用于处理函数内的 _ 结构体 _ 和 _ 数组 _ 时）

internal 和 private 类似，不过， 如果某个合约继承自其父合约，这个合约即可以访问父合约中定义的“内部”函数

external 与public 类似，只不过这些函数只能在合约之外调用 - 它们不能被合约内的其他函数调用(只能被外部使用，离谱)

构造函数，与合约同名，只会在合约最初被创建的时候才会执行

interface(与其他合约交互的接口)，不过关键字还是contract，只不过在内部定义的方法没有括号。初始化接口的时候需要传入合约在以太坊上的地址

modifier(函数修饰符，用来修饰其他函数的，在执行前用于检查，修饰符函数最后一行是`_;`表示修饰符调用结束，可以用来判断合约方法是否是创建者在调用,函数修饰符也可以带参数，在修饰的地方可以添加函数传递的参数，可以用多个修饰 空格隔开) 

indexed(为了筛选仅和当前用户相关的事件，我们的 Solidity 合约将必须使用 indexed 关键字，就像我们在 ERC721 实现中的Transfer 事件中那样)

payable(修饰符，可以接收以太的特殊函数，可以用来要求支付了钱才能执行某一个函数，如果没有标记，调用这个函数发送以太会被拒绝) ether(以太币)

可见性: public private internal external pure view storage memory

### 数据结构

contract string mapping bool address uint [] struct event(前端可以获取这个通知) 

### 全局函数

keccak256 msg.sender msg.value(向合约发送了多少以太) now(时间单位，uint类型，unix时间戳，用32位的会有2038问题，unix会溢出，如果用64位则会让用户消耗更多的gas) seconds minutes hours days weeks years(这些时间都是支持直接加减以及比较大小的)

### 流程控制

reuqire is(合约的继承，可以多重继承用逗号隔开) 

if (比较大小需要加上括号) 

for  using…for(引入库之后的声明，例如using SafeMath for for uint256, 这样就可以让uint256调用add、mul、div等方法) 

library(声明库，与using一起使用的，扩展基础类型的方法) 

assert(assert 和 require 区别在于，require 若失败则会返还给用户剩下的 gas， assert 则不会。所以大部分情况下，你写代码的时候会比较喜欢 require，assert 只在代码可能出现严重错误的时候使用，比如 uint 溢出。)

## 实践

### 如何省gas

如果一个 struct 中有多个 uint，则尽可能使用较小的 uint, Solidity 会将这些 uint 打包在一起，从而占用较少的存储空间。而单独的使用uint或者uint8都会使用256位的存储空间

所以，当 uint 定义在一个 struct 中的时候，尽量使用最小的整数子类型以节约空间。 并且把同样类型的变量放一起（即在 struct 中将把变量按照类型依次放置），这样 Solidity 可以将存储空间最小化。例如，有两个 struct：
uint c; uint32 a; uint32 b; 和 uint32 a; uint c; uint32 b;
前者比后者需要的gas更少，因为前者把uint32放一起了。

使用view，不会做修改，所以节省gas

在内存中声明数组 memory.在数组后面加上 memory关键字， 表明这个数组是仅仅在内存中创建，不需要写入外部存储，并且在函数调用结束时它就解散了。

### 交易

payable(修饰符，可以接收以太的特殊函数，可以用来要求支付了钱才能执行某一个函数，如果没有标记，调用这个函数发送以太会被拒绝)

每个address都有transfer，可以调用用来付钱

This.balance, 当前智能合约地址被冻结的钱

在你发送以太之后，它将被存储进以合约的以太坊账户中， 并冻结在哪里 —— 除非你添加一个函数来从合约中把以太提现。
你可以写一个函数来从合约中提现以太，类似这样

```solidity
contract GetPaid Is Ownable{ 
    function withdraw() external onlyOwner{ 
        owner.transfer(this.balance); 
    } 
}
```

注意 ERC721 规范有两种不同的方法来转移代币：

- `function transfer(address_to, uint256_tokenId) public;`
- `function approve(address_to, uint256_tokenId) public;`
- `function takeOwnership(uint256_tokenId) public;`

1. 第一种方法是代币的拥有者调用transfer 方法，传入他想转移到的 address 和他想转移的代币的 _tokenId。
2. 第二种方法是代币拥有者首先调用 approve，然后传入与以上相同的参数。
3. 第三种,合约会存储谁被允许提取代币，通常存储到一个 mapping (uint256 => address) 里。然后，当有人调用 takeOwnership 时，合约会检查 msg.sender 是否得到拥有者的批准来提取代币，如果是，则将代币转移给他。

### 如何实现安全的随机数

阅读 这个 [StackOverflow 上的讨论](https://ethereum.stackexchange.com/questions/191/how-can-i-securely-generate-a-random-number-in-my-smart-contract) 来获得一些主意。 一个方法是利用 oracle 来访问以太坊区块链之外的随机数函数。

### 如何防止溢出和下溢

为了防止这些情况，OpenZeppelin 建立了一个叫做 SafeMath 的 _库_(library， 特殊的合约)，默认情况下可以防止这些问题。

### 代币

- ERC20
- ERC721: 不能互换，，唯一不可分割(NFT)

这些代币也是合约，因此也可以引入

```solidity
contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);
  function balanceOf(address _owner) public view returns (uint256 _balance);
  function ownerOf(uint256 _tokenId) public view returns (address _owner);
  function transfer(address _to, uint256 _tokenId) public;
  function approve(address _to, uint256 _tokenId) public;
  function takeOwnership(uint256 _tokenId) public;
}
```

一个 _代币_ 在以太坊基本上就是一个遵循一些共同规则的智能合约——即它实现了所有其他代币合约共享的一组标准函数，例如 transfer(address _to, uint256 _value) 和 balanceOf(address _owner).
在智能合约内部，通常有一个映射， mapping(address => uint256) balances，用于追踪每个地址还有多少余额。
所以基本上一个代币只是一个追踪谁拥有多少该代币的合约，和一些可以让那些用户将他们的代币转移到其他地址的函数。

由于所有 ERC20 代币共享具有相同名称的同一组函数，它们都可以以相同的方式进行交互。
这意味着如果你构建的应用程序能够与一个 ERC20 代币进行交互，那么它就也能够与任何 ERC20 代币进行交互。 这样一来，将来你就可以轻松地将更多的代币添加到你的应用中，而无需进行自定义编码。 你可以简单地插入新的代币合约地址，然后哗啦，你的应用程序有另一个它可以使用的代币了。
其中一个例子就是交易所。 当交易所添加一个新的 ERC20 代币时，实际上它只需要添加与之对话的另一个智能合约。 用户可以让那个合约将代币发送到交易所的钱包地址，然后交易所可以让合约在用户要求取款时将代币发送回给他们。
交易所只需要实现这种转移逻辑一次，然后当它想要添加一个新的 ERC20 代币时，只需将新的合约地址添加到它的数据库即可。

## 前端

Web3.js, `npm i web3`

以太坊网络是由节点组成的，每一个节点都包含了区块链的一份拷贝。当你想要调用一份智能合约的一个方法，你需要从其中一个节点中查找并告诉它:

1. 智能合约的地址
2. 你想调用的方法，以及
3. 你想传入那个方法的参数

以太坊节点只能识别一种叫做 JSON-RPC 的语言。这种语言直接读起来并不好懂。当你你想调用一个合约的方法的时候，需要发送的查询语句将会是这样的：

```json
{
    "jsonrpc":"2.0",
    "method":"eth_sendTransaction",
    "params":[
        {
            "from":"0xb60e8dd61c5d32be8058bb8eb970870f07233155",
            "to":"0xd46e8dd67c5d32be8058bb8eb970870f07244567",
            "gas":"0x76c0",
            "gasPrice":"0x9184e72a000",
            "value":"0x9184e72a","data":"0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
        }
    ],
    "id":1,
}
```

幸运的是 Web3.js 把这些令人讨厌的查询语句都隐藏起来了， 所以你只需要与方便易懂的 JavaScript 界面进行交互即可。
你不需要构建上面的查询语句，在你的代码中调用一个函数看起来将是这样：
`CryptoZombies.methods.createRandomZombie("Vitalik Nakamoto 🤔")
  .send({ from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155", gas:"3000000"})`

### 初始化节点

选择provider，即由哪个节点来处理请求，可以使用infura

`var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws"));`

metamask帮我们做了一切工作，包括管理用户的私钥和公钥

```javascript
window.addEventListener('load', function() { // 检查web3是否已经注入到(Mist/MetaMask) 
    if (typeof web3 !== 'undefined') { // 使用 Mist/MetaMask 的提供者 
        web3js = new Web3(web3.currentProvider); 
    } else { 
        // 处理用户没安装的情况， 比如显示一个消息 
        // 告诉他们要安装 MetaMask 来使用我们的应用 
    } 
    
    // 现在你可以启动你的应用并自由访问 Web3.js: 
    startApp() 
}
)

var userAccount = web3.eth.accounts[0] // 当前激活的账户
```

### 通讯

需要合约地址以及合约ABI(ABI 意为应用二进制接口（Application Binary Interface）。 基本上，它是以 JSON 格式表示合约的方法，告诉 Web3.js 如何以合同理解的方式格式化函数调用。一般是js文件，在html中直接引入)

`var myContract = new web3js.eth.Contract(myABI, myContractAddress);`

Call: 用来调用view、pure函数，它只运行在本地节点，不会在区块链上创建事务。

Send: 将创建一个事务并改变区块链上的数据。你需要用 send 来调用任何非 view 或者 pure 的函数。

send 一个事务需要一个 from 地址来表明谁在调用这个函数（也就是你 Solidity 代码里的 msg.sender )。 我们需要这是我们 DApp 的用户，这样一来 MetaMask 才会弹出提示让他们对事务签名。
send 一个事务将花费 gas
在用户 send 一个事务到该事务对区块链产生实际影响之间有一个不可忽略的延迟。这是因为我们必须等待事务被包含进一个区块里，以太坊上一个区块的时间平均下来是15秒左右。如果当前在以太坊上有大量挂起事务或者用户发送了过低的 gas 价格，我们的事务可能需要等待数个区块才能被包含进去，往往可能花费数分钟。
所以在我们的代码中我们需要编写逻辑来处理这部分异步特性。

在有payable合约方法的地方，需要web3js.utils.toWei传递eth费用

```solidity
cryptoZombies.methods.levelUp(zombieId).send({ 
    from: userAccount, 
    value: web3js.utils.toWei("0.001","ether") 
})
```

### 订阅事件

与智能合约中的event相对应,getPastEvents 查询过去的事件，并用过滤器 fromBlock 和 toBlock 给 Solidity 一个事件日志的时间范围("block" 在这里代表以太坊区块编号）,用事件可以作为更便宜的存储(这里的短板是，事件不能从智能合约本身读取。但是，如果你有一些数据需要永久性地记录在区块链中以便可以在应用的前端中读取，这将是一个很好的用例。这些数据不会影响智能合约向前的状态。举个栗子，我们可以用事件来作为僵尸战斗的历史纪录——我们可以在每次僵尸攻击别人以及有一方胜出的时候产生一个事件。智能合约不需要这些数据来计算任何接下来的事情，但是这对我们在前端向用户展示来说是非常有用的东西。)

```solidity
cryptoZombies.events.NewZombie().on("data", function(event) { 
    let zombie = event.returnValues; 
    console.log("一个新僵尸诞生了！", zombie.zombieId, zombie.name, zombie.dna); 
}).on('error', console.error);
```

所以现在我们必须使用一个单独 Web3 提供者，它针对事件提供了WebSockets支持。 我们可以用 Infura 来像实例化第二份拷贝：

```js
var web3Infura = new Web3(newWeb3.providers.WebsocketProvider("wss://mainnet.infura.io/ws"));

var czEvents = new web3Infura.eth.Contract(cryptoZombiesABI, cryptoZombiesAddress);
```

然后我们将使用 czEvents.events.Transfer 来监听事件，而不再使用 cryptoZombies.events.Transfer。将来，在 MetaMask 升级了 API 支持 Web3.js 后，我们就不用这么做了。但是现在我们还是要这么做，以使用 Web3.js 更好的最新语法来监听事件。

```js
var web3Infura = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws"));

var czEvents = new web3Infura.eth.Contract(cryptoZombiesABI, cryptoZombiesAddress);

czEvents.events.Transfer({ filter: { _to: userAccount } })
.on("data", function(event) {
  let data = event.returnValues;
  // 当前用户更新了一个僵尸！更新界面来显示
  getZombiesByOwner(userAccount).then(displayZombies);
}).on('error', console.error);
```

## 链端

- truffle
- hardhat