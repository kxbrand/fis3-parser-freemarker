## fis3-parser-freemarker

freemarker parser for fis3


### INSTALL

```bash
npm install -g fis3-parser-freemarker
```

### USEAGE


```
fis.match('**.ftl', {
	parser: fis.plugin('freemarker'),
	rExt: '.html'
});
```



### mock数据

* 初始mock数据直接读取同名mock.json文件，其他数据或动态数据参照fis3文档。


### 感谢

依赖于freemarker.js，特对作者ijse表示感谢。