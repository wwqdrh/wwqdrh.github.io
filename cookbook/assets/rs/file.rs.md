
## title 创建文件
```rust
fn createFile() -> std::io::Result<()> {
let mut file = File::create("foo.txt")?;
file.write_all(b"Hello, world!")?;
Ok(())
}
```
## title 读取文件
```rust
fn cat(path: &Path) -> std::io::Result<String> {
let mut f = File::open(path)?;
let mut s = String::new();
f.read_to_string(&mut s)?;
Ok(s)
}
```
## title 删除文件
```rust
fn deleteFile() -> std::io::Result<()> {
fs::remove_file("foo.txt")?;
Ok(())
}
```
## title 创建文件夹
```rust
fn createFolder() -> std::io::Result<()> {
fs::create_dir("bar")?;
fs::create_dir_all("a/b/c")?;
Ok(())
}
```
## title 删除文件夹
```rust
fn deleteFolder() -> std::io::Result<()> {
fs::remove_dir("bar")?;
fs::remove_dir_all("a")?;
Ok(())
```
