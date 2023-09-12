
## title 获取目录下所有文件
```cpp
std::vector<std::string> File::get_folders() const {
std::vector<std::string> folders;
for (const auto &entry : std::filesystem::directory_iterator(path)) {
if (entry.is_directory()) {
folders.push_back(entry.path().string());
}
}
return folders;
}
```
## title 获取当前路径所有文件的方法
```cpp
std::vector<std::string> File::get_files() const {
std::vector<std::string> files;
for (const auto &entry : std::filesystem::directory_iterator(path)) {
if (entry.is_regular_file()) {
files.push_back(entry.path().string());
}
}
return files;
}
```
## title 获取某个文件的内容
```cpp
std::string File::get_content(const std::string &filename) const {
std::string content;
std::ifstream in(filename);
if (in) {
std::string line;
while (std::getline(in, line)) {
content += line + "n";
}
in.close();
} else {
throw std::runtime_error("Failed to open file: " + filename);
}
return content;
}
} // namespace cppkit::os
```
