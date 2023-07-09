* [首页](/ "简介")
## title: 读取文件
```rust
fn cat(path: &amp;Path) -&gt; std::io::Result&lt;String&gt; {
let mut f = File::open(path)?;
let mut s = String::new();
f.read_to_string(&amp;mut s)?;
Ok(s)
}
```
