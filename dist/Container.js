"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containerFilter = exports.containerClear = exports.containerSort = exports.containerOut = exports.containerIn = exports.containerConst = void 0;

var _Reader = require("./Reader");

var _Writer = require("./Writer");

var _funcText = require("./core/funcText");

var _compare = require("./utils/compare");

var containerConst = function containerConst() {
  var container = [];
  return container;
};

exports.containerConst = containerConst;

var containerIn = function containerIn(container, reader) {
  while (!(0, _Reader.fileEmpty)(reader)) {
    var tmp = (0, _Reader.readLine)(reader);
    (0, _funcText.inText)(tmp, container);
  }
};

exports.containerIn = containerIn;

var containerOut = function containerOut(container, writer) {
  var c = container.length;
  (0, _Writer.writeLine)(writer, "Container contains: ".concat(c, ", elements!"));
  if (c > 0) for (var i = 0; i < c; i++) {
    if (containerFilter(container, i)) {
      (0, _funcText.outText)(container, i, writer);
    }
  }
};

exports.containerOut = containerOut;

var containerSort = function containerSort(container) {
  container.sort(function (a, b) {
    if ((0, _compare.compare)(a.text, b.text)) {
      return 1;
    } else {
      return -1;
    }
  });
};

exports.containerSort = containerSort;

var containerClear = function containerClear(container) {
  container = [];
};

exports.containerClear = containerClear;

var containerFilter = function containerFilter(container, i) {
  if (Object.keys(container[i])[1] === "replacement") {
    return true;
  }
};

exports.containerFilter = containerFilter;