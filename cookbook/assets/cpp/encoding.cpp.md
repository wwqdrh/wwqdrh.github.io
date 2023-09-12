
## title 向文件写入内容
```cpp
void writeFileFromString(const string &filename, const string &body)
{
ofstream ofile(filename);
ofile<<body;
ofile.close();
}
```
## title 读取json文件
```cpp
Json::Value readJsonFile(const string &filename)
{
ifstream ifile;
ifile.open(filename);
Json::CharReaderBuilder ReaderBuilder;
ReaderBuilder["emitUTF8"] = true;
Json::Value root;
```
