===tag=实践
===description=ssh环境配置
===pinned=false


```bash
yum install openssh-server

vim /etc/ssh/sshd_config # 修改配置文件

ps -e | grep sshd # 检测是否已经开启sshd

netstat -an | grep 22 # 检查22端口是否开启命令

systemctl start sshd.service # 启动sshd

systemctl enable sshd.service  # 设置为开机自启动
```

保存git pull账号密码

```bash
git config --global credential.helper store
// git pull 输入账号密码后面就不需要了

如果要清除用户名和密码

运行一下命令缓存输入的用户名和密码

git config --global credential.helper wincred
```

