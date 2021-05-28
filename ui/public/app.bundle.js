/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/About.jsx":
/*!***********************!*\
  !*** ./src/About.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Issue Tracker version 0.9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "API version 1.0"));
}

/***/ }),

/***/ "./src/browser/App.jsx":
/*!*****************************!*\
  !*** ./src/browser/App.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Page_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Page.jsx */ "./src/browser/components/Page.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");












_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.fab, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faCheckSquare, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faCoffee, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTimesCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTrash, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPlusCircle);
var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Page_jsx__WEBPACK_IMPORTED_MODULE_5__.default, null));
var domContainer = document.querySelector('#container');
react_dom__WEBPACK_IMPORTED_MODULE_3__.hydrate(element, domContainer);

/***/ }),

/***/ "./src/browser/components/Content.jsx":
/*!********************************************!*\
  !*** ./src/browser/components/Content.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../About.jsx */ "./src/About.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/browser/components/IssueEdit.jsx");
/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueList.jsx */ "./src/browser/components/IssueList.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/browser/components/IssueReport.jsx");







var PageNotFound = function PageNotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "You seam lost. No content to show you :)");
};

function Content() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {
    exact: true,
    from: "/",
    to: "/issues"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/issues/:id/edit",
    component: _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_2__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/issues",
    component: _IssueList_jsx__WEBPACK_IMPORTED_MODULE_3__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/report",
    component: _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_4__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/about",
    component: _About_jsx__WEBPACK_IMPORTED_MODULE_1__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "*",
    component: PageNotFound
  }));
}

/***/ }),

/***/ "./src/browser/components/Header.jsx":
/*!*******************************************!*\
  !*** ./src/browser/components/Header.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/NavItem.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");




function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
    bg: "light",
    expand: "lg",
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Brand, {
    className: "justify-content-start mx-1 px-1"
  }, "Issue Tracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Toggle, {
    "aria-controls": "navbar-nav"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Collapse, {
    id: "navbar-nav",
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "d-flex justify-content-middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/",
    className: "mx-2 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/issues",
    className: "mx-2 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, "Issues List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/report",
    className: "mx-2 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, "Report")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/about",
    className: "mx-2 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/issues"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, "Issues List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, "Report")))));
}

/***/ }),

/***/ "./src/browser/components/IssueAdd.jsx":
/*!*********************************************!*\
  !*** ./src/browser/components/IssueAdd.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueAdd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function IssueAdd(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showForm = _useState2[0],
      setShowForm = _useState2[1];

  function handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.issueAdd;
    var issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: form.due.value,
      effort: form.effort.value,
      description: form.description.value
    };
    props.createIssue(issue);
    form.owner.value = "";
    form.title.value = "";
    form.due.value = "";
    form.effort.value = "";
    form.description.value = '';
    setShowForm(false);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Issue creation form"), showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    name: "issueAdd",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-control py-2 my-2",
    type: "text",
    name: "owner",
    placeholder: "Owner"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-control py-2 my-2",
    type: "text",
    name: "title",
    placeholder: "Title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-control py-2 my-2",
    type: "number",
    name: "effort",
    placeholder: "Effort Level"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-control py-2 my-2",
    type: "date",
    name: "due",
    placeholder: "Due Date"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    className: "form-control py-2 my-2",
    name: "description",
    placeholder: " Issue Description"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success my-2",
    type: "submit"
  }, "Add")), !showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "m-2 p-2 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-outline-primary",
    onClick: function onClick() {
      return setShowForm(true);
    }
  }, "Click to create a new issue ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: "plus-circle"
  })))));
}

/***/ }),

/***/ "./src/browser/components/IssueDetail.jsx":
/*!************************************************!*\
  !*** ./src/browser/components/IssueDetail.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var uri = 'http://localhost:3000/graphql';
function IssueDetail() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      issue = _useState2[0],
      setIssus = _useState2[1];

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
      id = _useParams.id;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadData();
  }, [id]);

  var loadData = function loadData() {
    var query = "\n        query {\n            issue(id:".concat(id, "){\n                description \n            }\n        }\n        ");
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      console.log(result);
      setIssus(result.data.issue);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, issue.description));
}

/***/ }),

/***/ "./src/browser/components/IssueEdit.jsx":
/*!**********************************************!*\
  !*** ./src/browser/components/IssueEdit.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _specializedComponents_NumberInput_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../specializedComponents/NumberInput.jsx */ "./src/browser/specializedComponents/NumberInput.jsx");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env */ "./src/browser/env.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function IssueEdit() {
  var _issue$status, _issue$owner, _issue$effort, _issue$due, _issue$title, _issue$description;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      issue = _useState2[0],
      setIssue = _useState2[1];

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
      id = _useParams.id;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadData();
  }, [id]);

  var loadData = function loadData() {
    var query = "\n        query {\n            issue(id:".concat(id, "){\n                id effort due owner description status created title\n            }\n        }\n        ");
    fetch(_env__WEBPACK_IMPORTED_MODULE_2__.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      //console.log(result);
      setIssue(result.data.issue);
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    var status = issue.status,
        description = issue.description,
        due = issue.due,
        owner = issue.owner,
        effort = issue.effort;
    var query = "\n        mutation {\n            updateIssue(id:".concat(id, ", status:\"").concat(status, "\", description:\"").concat(description, "\", due:\"").concat(due, "\", owner:\"").concat(owner, "\", effort:").concat(effort, "){\n                title description id owner status due created effort\n            }\n        }\n        ");
    fetch(_env__WEBPACK_IMPORTED_MODULE_2__.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      console.log(result);
      setIssue(result.data.updateIssue);
    });
  }

  function onChange(e) {
    // if(newValue && newValue !== e.target.value){
    //     setIssue({...issue, [name] : newValue})
    // }
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setIssue(_objectSpread(_objectSpread({}, issue), {}, _defineProperty({}, name, value)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !issue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "No issue with provided id was found") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Editing issue: ".concat(id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Created:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.created ? issue.created : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    name: "status",
    value: (_issue$status = issue.status) !== null && _issue$status !== void 0 ? _issue$status : '',
    onChange: onChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "New"
  }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Assigned"
  }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Fixed"
  }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Closed"
  }, "Closed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Owner:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    name: "owner",
    value: (_issue$owner = issue.owner) !== null && _issue$owner !== void 0 ? _issue$owner : '',
    onChange: onChange
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Effort:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: onChange,
    value: (_issue$effort = issue.effort) !== null && _issue$effort !== void 0 ? _issue$effort : '',
    name: "effort",
    type: "number"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Due:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    name: "due",
    value: (_issue$due = issue.due) !== null && _issue$due !== void 0 ? _issue$due : '',
    onChange: onChange
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Title:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    size: 50,
    name: "title",
    value: (_issue$title = issue.title) !== null && _issue$title !== void 0 ? _issue$title : '',
    onChange: onChange
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    rows: 8,
    cols: 50,
    name: "description",
    value: (_issue$description = issue.description) !== null && _issue$description !== void 0 ? _issue$description : '',
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "Submit"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/issues/".concat(Number(id) - 1, "/edit")
  }, "Prev"), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/issues/".concat(Number(id) + 1, "/edit")
  }, "Next")));
}

/***/ }),

/***/ "./src/browser/components/IssueFilter.jsx":
/*!************************************************!*\
  !*** ./src/browser/components/IssueFilter.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function IssueFilter() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      minEffort = _useState2[0],
      setMinEffort = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      maxEffort = _useState4[0],
      setMaxEffort = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      status = _useState6[0],
      setStatus = _useState6[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();

  var handleSelectionChange = function handleSelectionChange(e) {
    console.log(e.target.name, e.target.value);

    if (e.target.name === 'minEffort') {
      setMinEffort(e.target.value);
    }

    if (e.target.name === 'maxEffort') {
      setMaxEffort(e.target.value);
    }

    if (e.target.name === 'status') {
      setStatus(e.target.value);
    }
  };

  var resetFilter = function resetFilter() {
    setMaxEffort('');
    setMinEffort('');
    setStatus('');
    history.push('/issues');
  };

  var applyFilter = function applyFilter() {
    history.push("/issues?status=".concat(status, "&minEffort=").concat(minEffort, "&maxEffort=").concat(maxEffort));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row my-4 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12 col-lg-3 my-2 py-2"
  }, "status :", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    style: {
      border: '1px #0275d8 solid',
      borderRadius: '25px',
      outline: 'none'
    },
    name: "status",
    onChange: handleSelectionChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "New"
  }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Assigned"
  }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Fixed"
  }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "Closed"
  }, "Closed"))), '  ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12 col-lg-9 my-2 py-2"
  }, "Effort Between ", ' :  ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    style: {
      border: '1px #0275d8 solid',
      borderRadius: '25px',
      outline: 'none'
    },
    name: "minEffort",
    value: minEffort,
    type: "number",
    onChange: handleSelectionChange
  }), ' - ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    style: {
      border: '1px #0275d8 solid',
      borderRadius: '25px',
      outline: 'none'
    },
    name: "maxEffort",
    value: maxEffort,
    type: "number",
    onChange: handleSelectionChange
  }), '    ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-primary",
    onClick: applyFilter
  }, "Apply"), ' <=> ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-warning",
    onClick: resetFilter
  }, "reset"))));
}

/***/ }),

/***/ "./src/browser/components/IssueList.jsx":
/*!**********************************************!*\
  !*** ./src/browser/components/IssueList.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/browser/components/IssueFilter.jsx");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/browser/components/IssueTable.jsx");
/* harmony import */ var _IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueAdd.jsx */ "./src/browser/components/IssueAdd.jsx");
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/browser/components/IssueDetail.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function IssueList(props) {
  function useQuery() {
    return new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)().search);
  }

  var param = useQuery();
  var status = param.get('status') ? param.get('status') : 'All';
  var minEffort = param.get('minEffort') ? param.get('minEffort') : 1;
  var maxEffort = param.get('maxEffort') ? param.get('maxEffort') : 100;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      issues = _useState2[0],
      setIssues = _useState2[1];

  var uri = 'http://localhost:3000/graphql';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadData();
  }, [status, minEffort, maxEffort]);

  function loadData() {
    var query = "query {\nissueList(status:\"".concat(status, "\", minEffort:").concat(minEffort, ", maxEffort:").concat(maxEffort, ") {\nid title status owner created effort due\n}\n}");
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    }).then(function (response) {
      return response.json();
    }).then(function (result) {
      console.log(result.data.issueList.map(function (i) {
        return i.effort;
      }));
      setIssues(result.data.issueList);
    });
  }

  function createIssue(issue) {
    var query = "\n      mutation {\n        createIssue(owner:\"".concat(issue.owner, "\", title:\"").concat(issue.title, "\", due:\"").concat(issue.due, "\", effort:").concat(issue.effort, ", description:\"").concat(issue.description, "\"){\n          id title owner effort due\n        }\n      }\n      ");
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    }).then(function (response) {
      return response.json();
    }).then(function (result) {
      loadData();
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    issues: issues
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    createIssue: createIssue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/issues/:id",
    component: _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_4__.default
  }));
}

/***/ }),

/***/ "./src/browser/components/IssueReport.jsx":
/*!************************************************!*\
  !*** ./src/browser/components/IssueReport.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueReport)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function IssueReport() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Placeholder for issue report");
}

/***/ }),

/***/ "./src/browser/components/IssueRow.jsx":
/*!*********************************************!*\
  !*** ./src/browser/components/IssueRow.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env */ "./src/browser/env.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




function IssueRow(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  var issue = props.issue;

  var deleteIssueById = function deleteIssueById() {
    var query = "\n      mutation {\n          deleteIssue(id:".concat(issue.id, "){\n              id title\n          }\n      }\n      ");
    fetch(_env__WEBPACK_IMPORTED_MODULE_1__.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      history.push('/');
    });
  };

  var closeIssueById = function closeIssueById() {
    var query = "\n    mutation {\n        closeIssue(id:".concat(issue.id, "){\n            id title\n        }\n    }\n    ");
    fetch(_env__WEBPACK_IMPORTED_MODULE_1__.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      history.push('/');
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.owner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.created), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.effort), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.due ? issue.due : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/issues/".concat(issue.id, "/edit")
  }, "Edit"), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: "/issues/".concat(issue.id)
  }, "Details"), ' - ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-warning",
    onClick: function onClick() {
      return closeIssueById();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: "times-circle"
  })), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-danger",
    onClick: function onClick() {
      return deleteIssueById();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: "trash"
  }))));
}

/***/ }),

/***/ "./src/browser/components/IssueTable.jsx":
/*!***********************************************!*\
  !*** ./src/browser/components/IssueTable.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _IssueRow_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueRow.jsx */ "./src/browser/components/IssueRow.jsx");


function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IssueRow_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: issue.id,
      issue: issue
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "table-responsive my-2 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table table-striped table-bordered table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Effort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Due Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, issueRows)));
}

/***/ }),

/***/ "./src/browser/components/Page.jsx":
/*!*****************************************!*\
  !*** ./src/browser/components/Page.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.jsx */ "./src/browser/components/Header.jsx");
/* harmony import */ var _Content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.jsx */ "./src/browser/components/Content.jsx");



function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Content_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null));
}

/***/ }),

/***/ "./src/browser/env.js":
/*!****************************!*\
  !*** ./src/browser/env.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRAPHQL_URI": () => (/* binding */ GRAPHQL_URI)
/* harmony export */ });
var GRAPHQL_URI = "http://localhost:3000/graphql";

/***/ }),

/***/ "./src/browser/specializedComponents/NumberInput.jsx":
/*!***********************************************************!*\
  !*** ./src/browser/specializedComponents/NumberInput.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function NumberInput(props) {
  //const {value,onchange} = props
  //console.log(value)
  //const [numValue, setValue] = useState(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(props);
    setValue(props.value);
  }); //console.log(numValue)

  var handleOnchange = function handleOnchange(e) {
    setValue(e.target.value);
  };

  var handleOnBlur = function handleOnBlur(e) {
    console.log(e.target.value);
    props.onchange(e, e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: props.value,
    onChange: handleOnchange,
    type: "number",
    onBlur: handleOnBlur
  }));
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhello_world_serverless_ui_server"] = self["webpackChunkhello_world_serverless_ui_server"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/browser/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map