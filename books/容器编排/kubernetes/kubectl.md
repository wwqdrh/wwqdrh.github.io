1. 设置快捷别名

有一些命令的使用频率非常高，可以为其设置短一点的别名，提高输入效率。

```bash
alias kc="kubectl"
alias ka="kubectl apply -f"
alias kd="kubectl delete -f"
```

1. 设置自动补全

想进一步提高输入效率，那么自动补全也少不了。

# 在 bash 中设置当前 shell 的自动补全，要先安装 bash-completion 包。
`source <(kubectl completion bash)`

# 在您的 bash shell 中永久的添加自动补全
`echo "source <(kubectl completion bash)" >> ~/.bashrc`
设置完后，你使用 kubectl 就可以自动补全一些子命令。

3. 别名也设置补全

上面的自动补全只适用于 kubectl 原生命令，若要想让别名命令也能使用补全，需要执行如下命令

`complete -F __start_kubectl kc`