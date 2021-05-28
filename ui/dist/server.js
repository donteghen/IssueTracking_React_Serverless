/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_src_About_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/src/About.jsx */ "./src/About.jsx");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.js */ "./server/template.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_template_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_browser_components_Page_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/browser/components/Page.jsx */ "./src/browser/components/Page.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);
const React = __webpack_require__(/*! react */ "react");






function render(req, res) {
  const element = /*#__PURE__*/React.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {
    context: {},
    location: req.url
  }, /*#__PURE__*/React.createElement(_src_browser_components_Page_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null));
  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_0___default().renderToString(element);
  res.send(_template_js__WEBPACK_IMPORTED_MODULE_2___default()(body));
}

/***/ }),

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/***/ ((module) => {

module.exports = template = body => {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Page Title</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    </head>
    <body>
        <div id="container">${body}</div>
        <script src="/env.js"></script>
        <script src="/vendor.bundle.js"></script>
        <script src="/app.bundle.js"></script>
    </body>
    </html>`;
};

/***/ }),

/***/ "./src/About.jsx":
/*!***********************!*\
  !*** ./src/About.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Issue Tracker version 0.9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "API version 1.0"));
}

/***/ }),

/***/ "./src/browser/components/Content.jsx":
/*!********************************************!*\
  !*** ./src/browser/components/Content.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../About.jsx */ "./src/About.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/browser/components/IssueEdit.jsx");
/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueList.jsx */ "./src/browser/components/IssueList.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/browser/components/IssueReport.jsx");







const PageNotFound = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "You seam lost. No content to show you :)");
};

function Content() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
    exact: true,
    from: "/",
    to: "/issues"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/issues/:id/edit",
    component: _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_3__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/issues",
    component: _IssueList_jsx__WEBPACK_IMPORTED_MODULE_4__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/report",
    component: _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_5__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/about",
    component: _About_jsx__WEBPACK_IMPORTED_MODULE_2__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__);




function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
    bg: "light",
    expand: "lg",
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {
    className: "justify-content-start mx-1 px-1"
  }, "Issue Tracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {
    "aria-controls": "navbar-nav"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {
    id: "navbar-nav",
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
    className: "d-flex justify-content-middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, {
    to: "/",
    className: "mx-2 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, {
    to: "/issues",
    className: "mx-2 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, null, "Issues List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, {
    to: "/report",
    className: "mx-2 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, null, "Report")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, {
    to: "/about",
    className: "mx-2 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, null, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, {
    to: "/issues"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, null, "Issues List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, {
    to: "/report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, null, "Report")))));
}

/***/ }),

/***/ "./src/browser/components/IssueAdd.jsx":
/*!*********************************************!*\
  !*** ./src/browser/components/IssueAdd.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueAdd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);


function IssueAdd(props) {
  const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container-fluid bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Issue creation form"), showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    name: "issueAdd",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control py-2 my-2",
    type: "text",
    name: "owner",
    placeholder: "Owner"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control py-2 my-2",
    type: "text",
    name: "title",
    placeholder: "Title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control py-2 my-2",
    type: "number",
    name: "effort",
    placeholder: "Effort Level"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control py-2 my-2",
    type: "date",
    name: "due",
    placeholder: "Due Date"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "form-control py-2 my-2",
    name: "description",
    placeholder: " Issue Description"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-success my-2",
    type: "submit"
  }, "Add")), !showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-2 p-2 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-primary",
    onClick: () => setShowForm(true)
  }, "Click to create a new issue ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: "plus-circle"
  })))));
}

/***/ }),

/***/ "./src/browser/components/IssueDetail.jsx":
/*!************************************************!*\
  !*** ./src/browser/components/IssueDetail.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);


const uri = 'http://localhost:3000/graphql';
function IssueDetail() {
  const [issue, setIssus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    id
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadData();
  }, [id]);

  const loadData = () => {
    const query = `
        query {
            issue(id:${id}){
                description 
            }
        }
        `;
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json()).then(result => {
      console.log(result);
      setIssus(result.data.issue);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, issue.description));
}

/***/ }),

/***/ "./src/browser/components/IssueEdit.jsx":
/*!**********************************************!*\
  !*** ./src/browser/components/IssueEdit.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _specializedComponents_NumberInput_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../specializedComponents/NumberInput.jsx */ "./src/browser/specializedComponents/NumberInput.jsx");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/browser/env.js");




function IssueEdit() {
  var _issue$status, _issue$owner, _issue$effort, _issue$due, _issue$title, _issue$description;

  const [issue, setIssue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadData();
  }, [id]);

  const loadData = () => {
    const query = `
        query {
            issue(id:${id}){
                id effort due owner description status created title
            }
        }
        `;
    fetch(_env__WEBPACK_IMPORTED_MODULE_3__.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json()).then(result => {
      //console.log(result);
      setIssue(result.data.issue);
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const {
      status,
      description,
      due,
      owner,
      effort
    } = issue;
    const query = `
        mutation {
            updateIssue(id:${id}, status:"${status}", description:"${description}", due:"${due}", owner:"${owner}", effort:${effort}){
                title description id owner status due created effort
            }
        }
        `;
    fetch(_env__WEBPACK_IMPORTED_MODULE_3__.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json()).then(result => {
      console.log(result);
      setIssue(result.data.updateIssue);
    });
  }

  function onChange(e) {
    // if(newValue && newValue !== e.target.value){
    //     setIssue({...issue, [name] : newValue})
    // }
    const {
      name,
      value
    } = e.target;
    setIssue({ ...issue,
      [name]: value
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, !issue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "No issue with provided id was found") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, `Editing issue: ${id}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Created:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.created ? issue.created : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "status",
    value: (_issue$status = issue.status) !== null && _issue$status !== void 0 ? _issue$status : '',
    onChange: onChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "New"
  }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Assigned"
  }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Fixed"
  }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Closed"
  }, "Closed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Owner:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "owner",
    value: (_issue$owner = issue.owner) !== null && _issue$owner !== void 0 ? _issue$owner : '',
    onChange: onChange
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Effort:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    onChange: onChange,
    value: (_issue$effort = issue.effort) !== null && _issue$effort !== void 0 ? _issue$effort : '',
    name: "effort",
    type: "number"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Due:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "due",
    value: (_issue$due = issue.due) !== null && _issue$due !== void 0 ? _issue$due : '',
    onChange: onChange
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Title:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    size: 50,
    name: "title",
    value: (_issue$title = issue.title) !== null && _issue$title !== void 0 ? _issue$title : '',
    onChange: onChange
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    rows: 8,
    cols: 50,
    name: "description",
    value: (_issue$description = issue.description) !== null && _issue$description !== void 0 ? _issue$description : '',
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Submit"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: `/issues/${Number(id) - 1}/edit`
  }, "Prev"), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: `/issues/${Number(id) + 1}/edit`
  }, "Next")));
}

/***/ }),

/***/ "./src/browser/components/IssueFilter.jsx":
/*!************************************************!*\
  !*** ./src/browser/components/IssueFilter.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


function IssueFilter() {
  const [minEffort, setMinEffort] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [maxEffort, setMaxEffort] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();

  const handleSelectionChange = e => {
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

  const resetFilter = () => {
    setMaxEffort('');
    setMinEffort('');
    setStatus('');
    history.push('/issues');
  };

  const applyFilter = () => {
    history.push(`/issues?status=${status}&minEffort=${minEffort}&maxEffort=${maxEffort}`);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row my-4 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-sm-12 col-lg-3 my-2 py-2"
  }, "status :", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    style: {
      border: '1px #0275d8 solid',
      borderRadius: '25px',
      outline: 'none'
    },
    name: "status",
    onChange: handleSelectionChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "New"
  }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Assigned"
  }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Fixed"
  }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Closed"
  }, "Closed"))), '  ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-sm-12 col-lg-9 my-2 py-2"
  }, "Effort Between ", ' :  ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    style: {
      border: '1px #0275d8 solid',
      borderRadius: '25px',
      outline: 'none'
    },
    name: "minEffort",
    value: minEffort,
    type: "number",
    onChange: handleSelectionChange
  }), ' - ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    style: {
      border: '1px #0275d8 solid',
      borderRadius: '25px',
      outline: 'none'
    },
    name: "maxEffort",
    value: maxEffort,
    type: "number",
    onChange: handleSelectionChange
  }), '    ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary",
    onClick: applyFilter
  }, "Apply"), ' <=> ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/browser/components/IssueFilter.jsx");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/browser/components/IssueTable.jsx");
/* harmony import */ var _IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueAdd.jsx */ "./src/browser/components/IssueAdd.jsx");
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/browser/components/IssueDetail.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);







function IssueList(props) {
  function useQuery() {
    return new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)().search);
  }

  const param = useQuery();
  const status = param.get('status') ? param.get('status') : 'All';
  const minEffort = param.get('minEffort') ? param.get('minEffort') : 1;
  const maxEffort = param.get('maxEffort') ? param.get('maxEffort') : 100;
  const [issues, setIssues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const uri = 'http://localhost:3000/graphql';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadData();
  }, [status, minEffort, maxEffort]);

  function loadData() {
    const query = `query {
issueList(status:"${status}", minEffort:${minEffort}, maxEffort:${maxEffort}) {
id title status owner created effort due
}
}`;
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(response => response.json()).then(result => {
      console.log(result.data.issueList.map(i => i.effort));
      setIssues(result.data.issueList);
    });
  }

  function createIssue(issue) {
    const query = `
      mutation {
        createIssue(owner:"${issue.owner}", title:"${issue.title}", due:"${issue.due}", effort:${issue.effort}, description:"${issue.description}"){
          id title owner effort due
        }
      }
      `;
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(response => response.json()).then(result => {
      loadData();
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    issues: issues
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    createIssue: createIssue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueReport)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function IssueReport() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Placeholder for issue report");
}

/***/ }),

/***/ "./src/browser/components/IssueRow.jsx":
/*!*********************************************!*\
  !*** ./src/browser/components/IssueRow.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env */ "./src/browser/env.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);




function IssueRow(props) {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  const issue = props.issue;

  const deleteIssueById = () => {
    const query = `
      mutation {
          deleteIssue(id:${issue.id}){
              id title
          }
      }
      `;
    fetch(_env__WEBPACK_IMPORTED_MODULE_2__.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json()).then(result => {
      history.push('/');
    });
  };

  const closeIssueById = () => {
    const query = `
    mutation {
        closeIssue(id:${issue.id}){
            id title
        }
    }
    `;
    fetch(_env__WEBPACK_IMPORTED_MODULE_2__.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json()).then(result => {
      history.push('/');
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.owner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.created), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.effort), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.due ? issue.due : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: `/issues/${issue.id}/edit`
  }, "Edit"), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: `/issues/${issue.id}`
  }, "Details"), ' - ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-warning",
    onClick: () => closeIssueById()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: "times-circle"
  })), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-danger",
    onClick: () => deleteIssueById()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: "trash"
  }))));
}

/***/ }),

/***/ "./src/browser/components/IssueTable.jsx":
/*!***********************************************!*\
  !*** ./src/browser/components/IssueTable.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IssueRow_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueRow.jsx */ "./src/browser/components/IssueRow.jsx");


function IssueTable(props) {
  const issueRows = props.issues.map(issue => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueRow_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    key: issue.id,
    issue: issue
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-responsive my-2 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped table-bordered table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Effort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Due Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, issueRows)));
}

/***/ }),

/***/ "./src/browser/components/Page.jsx":
/*!*****************************************!*\
  !*** ./src/browser/components/Page.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.jsx */ "./src/browser/components/Header.jsx");
/* harmony import */ var _Content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.jsx */ "./src/browser/components/Content.jsx");



function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null));
}

/***/ }),

/***/ "./src/browser/env.js":
/*!****************************!*\
  !*** ./src/browser/env.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRAPHQL_URI": () => (/* binding */ GRAPHQL_URI)
/* harmony export */ });
const GRAPHQL_URI = "http://localhost:3000/graphql";

/***/ }),

/***/ "./src/browser/specializedComponents/NumberInput.jsx":
/*!***********************************************************!*\
  !*** ./src/browser/specializedComponents/NumberInput.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NumberInput(props) {
  //const {value,onchange} = props
  //console.log(value)
  //const [numValue, setValue] = useState(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(props);
    setValue(props.value);
  }); //console.log(numValue)

  const handleOnchange = e => {
    setValue(e.target.value);
  };

  const handleOnBlur = e => {
    console.log(e.target.value);
    props.onchange(e, e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: props.value,
    onChange: handleOnchange,
    type: "number",
    onBlur: handleOnBlur
  }));
}

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const nodeExternals = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");

browserConfig = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: ['./src/browser/App.jsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              ie: '11',
              edge: '15',
              safari: '10',
              firefox: '50',
              chrome: '49'
            }
          }], '@babel/preset-react']
        }
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  }
};
const serverConfig = {
  mode: 'development',
  entry: {
    server: ['./src/server/uiserver.js']
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              node: '10'
            }
          }], '@babel/preset-react']
        }
      }
    }]
  },
  devtool: 'source-map'
};
module.exports = [browserConfig, serverConfig];

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-proxy-middleware");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");;

/***/ }),

/***/ "react-router-bootstrap":
/*!*****************************************!*\
  !*** external "react-router-bootstrap" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-bootstrap");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-node-externals");;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/server/uiserver.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_render_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/render.jsx */ "./server/render.jsx");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack */ "webpack");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _webpack_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webpack.config */ "./webpack.config.js");
/* harmony import */ var _webpack_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_webpack_config__WEBPACK_IMPORTED_MODULE_7__);








const app = express__WEBPACK_IMPORTED_MODULE_0___default()();

if (false) {}

app.use(express__WEBPACK_IMPORTED_MODULE_0___default().static('public'));
app.get('/about', _server_render_jsx__WEBPACK_IMPORTED_MODULE_3__.default);
app.get('*', (req, res) => {
  console.log('reuwstes');
  res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default().resolve('public/index.html'));
});
app.use('/graphql', (0,http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1__.createProxyMiddleware)({
  target: 'http://localhost:4000/',
  changeOrigin: true
}));
app.listen(3000, function () {
  console.log('App started on port 3000');
});
})();

/******/ })()
;
//# sourceMappingURL=server.js.map