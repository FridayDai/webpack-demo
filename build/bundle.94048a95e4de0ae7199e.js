webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(2);

var _test = __webpack_require__(3);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = document.getElementById('container'); /**
                                                       * Created by yi.dai on 2017/9/25.
                                                       */

var sumNode = document.createElement('div');
sumNode.id = 'test';
sumNode.text = _sum2.default.add(1, 2);
container.appendChild(sumNode);

var img = document.createElement('img');
img.src = _test2.default;
container.appendChild(img);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by yi.dai on 2017/9/25.
 */
exports.default = {
    add: function add(a, b) {
        return a + b;
    },
    plus: function plus(c, d) {
        return c + d;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"test":"_3gEbZ9_q_8R4lELBokH4m5"};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/test.a68b4cbe720f5414bbf52ef2a60a5682.jpeg";

/***/ })
],[0]);