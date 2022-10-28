===tag=实践
===description=私人git服务搭建
===pinned=false
===create=2022-10-08


添加用户组

```bash
groupadd git

useradd git -g git # 使用adduser比较好，简单一点

mkdir /home/git # 使用useradd创建用户需要自己创建工作目录

# 这里之前用成了root，需要修改所有者
chown -R git:git /home/git

```

创建证书登录

收集所有需要登录服务器的本地用户公钥，公钥位于id_rsa.pub文件中，把我们的公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个。

```bash
su git

cd /home/git/

mkdir .ssh

chmod 755 .ssh

touch .ssh/authorized_keys

chmod 644 .ssh/authorized_keys

vim .ssh/authorized_keys # 将自己电脑上的公钥添加进去
```

出于安全考虑，第二步创建的git用户不允许登录shell，这可以通过编辑/etc/passwd文件完成

```bash
# /etc/passwd

git:x:1004:1004::/home/git:/bin/bash

# 修改

git:x:1004:1004::/home/git:/usr/bin/git-shell
```


```bash
# 在服务器上创建裸仓库

mkdir project

cd project

git init --bare specs.git

# 设置好用户和用户组，避免没有权限
chown -R git:git specs.git

# 将本地仓库上传到远程
git remote add origin ssh://git@43.142.26.74:22/home/git/project/specs.git
```
