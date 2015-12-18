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

* 为便于和后端工程师沟通，特将同名mock文件作为测试数据的配置文件，如页面不需要测试数据，同名mock文件可不存在。
* mock文件格式为：

	```
	{
		"init": ["/test/common.json", "/test/index.json", "/test/subfolder/head.json"],
		"other": ["/test/test.js", "/test/dynamic.js "]
	}
	```

* 其中init（页面初始数据）为必须项且为数组格式,数组文件中的同名键值后面覆盖前面；other（页面动态数据或其他数据）,设立此项主要用于后端工程师了解页面所用数据，无实质性意义。
* 在fis3环境中，动态数据参照fis3用户文档。



### 感谢

依赖于freemarker.js，特对作者ijse表示感谢。