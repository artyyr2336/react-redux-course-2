"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPost = createPost;
exports.showLoader = showLoader;
exports.hideLoader = hideLoader;
exports.fetchPosts = fetchPosts;

var _types = require("./types");

function createPost(post) {
  return {
    type: _types.CREATE_POST,
    payload: post
  };
}

function showLoader() {
  return {
    type: _types.SHOW_LOADER
  };
}

function hideLoader() {
  return {
    type: _types.HIDE_LOADER
  };
}

function fetchPosts() {
  return function _callee(dispatch) {
    var response, json;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(showLoader());
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            json = _context.sent;
            dispatch({
              type: _types.FETCH_POSTS,
              payload: json
            });
            dispatch(hideLoader());

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}