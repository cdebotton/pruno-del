"use strict";

var pruno = module.parent.require('pruno');
var del = require('del');

function DelTask(params) {
  this.params = (params || {});
};

DelTask.displayName = 'DelTask';

DelTask.getDefaults = function() {
  return {dirs: ['::dist']};
};

DelTask.prototype.enqueue = function(gulp, params) {
  pruno.notify(DelTask.displayName, 'Deleting', params.dirs.join(', '));
  return del(params.dirs);
};

module.exports = pruno.extend(DelTask);
