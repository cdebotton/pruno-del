"use strict";

var pruno = module.parent.require('pruno');
var del = require('del');

function DelTask(params) {
  this.params = (params || {});
};

DelTask.getDefaults = function() {
  return {dirs: ['::dist']};
};

DelTask.prototype.enqueue = function(gulp, params) {
  return del(params.dirs);
};

module.exports = DelTask;
