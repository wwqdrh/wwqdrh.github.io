===tag=操作系统
===description=shell工具
===pinned=false

# Makefile

= 是最基本的赋值  
:= 是覆盖之前的值  
?= 是如果没有被赋值过就赋予等号后面的值  
+= 是添加等号后面的值

.PHONY避免命令和文件夹下的文件名起冲突

`@` 表示不显示命令本身，而只显示它的结果


`bash -e pipefail`

pipeline中的命令出错了，把这个非零返回值往后传递，作为整行命令的返回值

# Bash

## 全局变量

```bash
第一个参数 : $1，第二个参数 :$2

$? 之前的命令是否运行成功

$! 最近执行命令的 PID

$$ 当前shell的pid

$# 参数个数

$* 以一个字符串形式输出所有传递到脚本的参数

$@ 以 $IFS 为分隔符列出所有传递到脚本中的参数
```

## 数据结构

```bash
echo ${variable:x:y} # 获取字符串变量的一部分 v[x:y]


echo '$PATH' # ' 当我们不希望把变量转换为值的时候使用它。
echo "$PATH" # " 会计算所有变量的值并用值代替。

${#variable} # 获取变量长度

echo ${variable: -5} # 变量的最后5个字符


echo ${variable//pattern/replacement} # 字符串替换


# 计算字符串中的单词个数
string='hello world aaa hhh !'
set ${string}
echo $# # 5
echo $string|tr -d " " # 去除字符串中的空格

# 数值计算
c=$((a+b))

c=`expr $a + $b`

c=`echo "$a+$b"|bc`

# 数组
array=("Hi" "my" "name" "is")
echo ${array[0]}
echo ${array[@]} # 打印数组的所有元素
echo ${!array[@]} # 输出元素的索引
```

## 流程控制

```bash
# for 循环 :
for i in $(ls);do 
echo item:$i
done

#while 循环 :
#!/bin/bash
COUNTER=0
while [ $COUNTER -lt 10 ]; do
echo The counter is $COUNTER
let COUNTER=COUNTER+1
done

#until 循环 :
#!/bin/bash
COUNTER=20
until [ $COUNTER -lt 10 ]; do
echo COUNTER $COUNTER
let COUNTER-=1
done


nohup command & # 后台运行脚本


# 循环0 3 6 9 ...
for i in {0..100..3}; do echo $i; done

for (( i=0; i<=100; i=i+3 )); do echo"Welcome $i times"; done

# 获取用户输入
read -p "Destination backup Server :" desthost
```

判断

```bash
# 是否存在某个文件
if [ -f /var/log/messages ]
then
echo "File exists"
fi

[ $a == $b ] # 用于字符串比较

[[ $string == abc* ]] # 检查字符串是否以字母"abc" 开头

[ $a -eq $b ] # 用于数字比较

[ $a -gt 12 ]
```

## 文本操作

```bash
head -10 file|tail -1 # 获取文本文件的第 10 行


awk'{ if ($1 == "FIND") print$2}' # 如果第一个元素是FIND，获取第二个元素

awk -F: '$3<100' /etc/passwd # 列出 UID 小于 100 的用户 

cat /etc/passwd|wc -l # 计算本地用户数

ls -d ?[ab]* # 列出第二个字母是 a 或 b 的文件

egrep "^ab|^wwq" /etc/passwd|cut -d: -f1 # 列出以 ab 或 wwq 开头的用户名
```

# 常见例子

筛选文件中满足条件的行

格式

- 123-123-1234
- (123) 123-1234

`grep -P '^(\d{3}|\(\d{3}\) )\d{3}-\d{4}$'`

批量修改文件后缀

```bash
for i in *.go; do mv "$i" "${i%.go}.md"; done
```

下载整个页面

`wget -l 1 -p -np -k http://www.baidu.com`

下载整站

`wget -c -r -nd -np -K -L -p http://www.baidu.com`