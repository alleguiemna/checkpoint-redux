(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{26:function(t,e,n){},31:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(9),o=n.n(a),r=(n(26),n(11)),s=(n(27),n(7)),d=(n(31),"ADD_TASK"),j="EDIT_TASK",l="COMPLETE_TASK",u="DELETE_TASK",b=n(1),O=function(t){var e=t.handleClickAll,n=t.handleClickDone,i=t.handleClickNotDone,a=(Object(s.c)((function(t){return t.taskReducer.taskList})),Object(c.useState)("")),o=Object(r.a)(a,2),j=o[0],l=o[1],u=Object(s.b)();return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"add",children:[Object(b.jsx)("input",{type:"text",onChange:function(t){return l(t.target.value)},value:j}),Object(b.jsx)("button",{onClick:function(){var t;j?(u((t={id:Math.random(),description:j.trim(),isDone:!1},{type:d,payload:t})),l("")):alert("enter your task")},children:"Add Task"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:e,children:"All"}),")",Object(b.jsx)("button",{onClick:n,children:"Done"}),")",Object(b.jsx)("button",{onClick:i,children:"Not Done"})]})]})},h=n(37),p=n(38),f=function(t){var e=t.todo,n=Object(c.useState)(e.description),i=Object(r.a)(n,2),a=i[0],o=i[1],d=Object(c.useState)(!1),l=Object(r.a)(d,2),u=l[0],O=l[1],f=function(){return O(!1)},x=Object(s.b)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{variant:"primary",onClick:function(){return O(!0)},children:"Edit"}),Object(b.jsxs)(h.a,{show:u,onHide:f,children:[Object(b.jsx)(h.a.Header,{closeButton:!0,children:Object(b.jsx)(h.a.Title,{children:"Edit task"})}),Object(b.jsx)(h.a.Body,{children:Object(b.jsx)("input",{type:"text",className:"form-control",onChange:function(t){return o(t.target.value)},value:a})}),Object(b.jsxs)(h.a.Footer,{children:[Object(b.jsx)(p.a,{variant:"secondary",onClick:f,children:"Close"}),Object(b.jsx)(p.a,{variant:"primary",onClick:function(){var t;x((t=e.id,{type:j,payload:{id:t,value:a}})),f()},children:"Save Changes"})]})]})]})},x=function(t){var e=t.todo,n=Object(s.b)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"task",style:{textDecoration:e.isDone?"line-through":null},children:e.description}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("button",{onClick:function(){return n((t=e.id,{type:l,payload:t}));var t},children:[e.isDone?"Undo":"Complete"," "]}),Object(b.jsx)(f,{todo:e}),Object(b.jsx)("button",{onClick:function(){return n((t=e.id,{type:u,payload:t}));var t},children:"DELETE"})]})]})},k=function(t){var e=t.taskList,n=t.filter;return Object(b.jsx)("div",{children:"done"===n?e.filter((function(t){return t.isDone})).map((function(t){return Object(b.jsx)(x,{todo:t},t.id)})):"notDone"===n?e.filter((function(t){return!t.isDone})).map((function(t){return Object(b.jsx)(x,{todo:t},t.id)})):e.map((function(t){return Object(b.jsx)(x,{todo:t},t.id)}))})};var v=function(){var t=Object(s.c)((function(t){return t.taskReducer.taskList})),e=Object(c.useState)("all"),n=Object(r.a)(e,2),i=n[0],a=n[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Todo App"}),Object(b.jsx)(O,{handleClickAll:function(t){a("all")},handleClickDone:function(t){a("done")},handleClickNotDone:function(t){a("notDone")}}),Object(b.jsx)(k,{filter:i,taskList:t})]})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))},C=n(14),L=n(21),E=n(6),y={taskList:[{id:0,description:"Learn HTML and CSS ",isDone:!0},{id:1,description:"Learn ES6 ",isDone:!0},{id:2,description:"Learn node.js",isDone:!1}]},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case d:return Object(E.a)(Object(E.a)({},t),{},{taskList:[].concat(Object(L.a)(t.taskList),[c])});case l:return Object(E.a)(Object(E.a)({},t),{},{taskList:t.taskList.map((function(t){return t.id===c?Object(E.a)(Object(E.a)({},t),{},{isDone:!t.isDone}):t}))});case u:return Object(E.a)(Object(E.a)({},t),{},{taskList:t.taskList.filter((function(t){return t.id!==c}))});case j:return Object(E.a)(Object(E.a)({},t),{},{taskList:t.taskList.map((function(t){return t.id===c.id?Object(E.a)(Object(E.a)({},t),{},{description:c.value}):t}))});default:return t}},S=Object(C.a)({taskReducer:m}),T=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),_=Object(C.b)(S,T);o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(s.a,{store:_,children:Object(b.jsx)(v,{})})}),document.getElementById("root")),D()}},[[34,1,2]]]);
//# sourceMappingURL=main.aefa99b6.chunk.js.map