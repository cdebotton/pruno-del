"use strict";

var del = require('del');

function DelTask(params) {
  this.params = (params || {});
};

DelTask.displayName = 'DelTask';

DelTask.getDefaults = function() {
  return {dirs: ['::dist']};
};

DelTask.prototype.enqueue = function(gulp, params) {
  return del(params.dirs);
};

module.exports = DelTask;
