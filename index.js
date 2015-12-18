'use strict';
var Freemarker = require('freemarker.js');
var root = fis.project.getProjectPath();
var views = fis.get('freemarker.views') || "views";
var fm = new Freemarker({
  viewRoot: root,
  options: {
    /** for fmpp */
  }
});
function _getInitData(filePath){
  var json,initFile = fis.file(root,filePath);
  if(initFile.exists()){
    try {
      json = JSON.parse(initFile.getContent());
    } catch (e) {
      json = {};
    }
  }
  return json;
}
function mockData(file){
  var data = {},mockJson,mockFile = fis.file(root,file.subpathNoExt+'.mock');
  if(mockFile.exists()){
    try {
      mockJson = JSON.parse(mockFile.getContent());
      for(var i = 0;i < mockJson.init.length;i++){
        data = fis.util.merge(data,_getInitData(mockJson.init[i]));
      }
    } catch (e) {
    }
  }else{
    data = {};
  }
  return data;
}
module.exports = function(content, file, conf){
  try {
    content = fm.renderSync(file.subpath,mockData(file));
  } catch (e) {
    fis.log.warn('Got error: %s while parsing `%s`.%s', e.message.red, file.subpath, e.detail || '');
    fis.log.debug(e.stack);
  }
  return content;
};