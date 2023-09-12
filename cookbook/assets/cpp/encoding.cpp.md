
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
