'use strict';
var Freemarker = require('freemarker.js');
var root = fis.project.getProjectPath();
var fm = new Freemarker({
  viewRoot: root,
  options: {
    /** for fmpp */
  }
});
function mockData(file){
  var mockJson,mockFile = fis.file(root,file.subpathNoExt+'.mock.json');
  if(mockFile.exists()){
    try {
      mockJson = JSON.parse(mockFile.getContent());
    } catch (e) {
    }
    return mockJson;
  }else{
    return {};
  }
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