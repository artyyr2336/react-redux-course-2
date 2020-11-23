"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = void 0;

var _redux = require("redux");

var _appReducer = require("./appReducer");

var _postsReducer = require("./postsReducer");

var rootReducer = (0, _redux.combineReducers)({
  posts: _postsReducer.postsReducer,
  app: _appReducer.appReducer
});
exports.rootReducer = rootReducer;