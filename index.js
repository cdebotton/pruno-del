"use strict";

var del = require('del');

function DelTask(params) {
  this.params = (params || {});
};

DelTask.displayName = 'DelTask';

DelTask.getDefaults = function() {
  return {
    dirs: ['::dist'],
    watch: false
  };
};

DelTask.prototype.enqueue = function(gulp, params, callback) {
  del.sync(params.dirs);
  if (callback) callback();
};

DelTask.prototype.generateWatcher = function(gulp, params, callback) {
  return params.watch ? true : false;
}

module.exports = DelTask;
