
## title 创建文件
```cpp
int createFile()
{
ofstream oFile;
oFile.open("test1.txt", ios::app);
if (!oFile)  //true则说明文件打开出错
cout << "error 1" << endl;
else
oFile.close();
return 0;
}
```
