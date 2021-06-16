(this["webpackJsonptodo-16"]=this["webpackJsonptodo-16"]||[]).push([[0],{105:function(t,e,a){},106:function(t,e,a){},131:function(t,e,a){"use strict";a.r(e);var n,i,o=a(3),s=a(0),r=a.n(s),c=a(9),d=a.n(c),l=(a(105),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;a(t),n(t),i(t),o(t),s(t)}))}),u=(a(106),a(175)),j=a(176),f=a(177),b=a(168),p=a(133),h=a(171),O=a(179),m=a(180),g=a(178),v=a(14),x=a(20),k=a(82),C=a.n(k).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"15f7a0a9-64c3-4a6a-9f8f-a55a7d8541a6"}}),y=function(){return C.get("todo-lists")},I=function(t){return C.post("todo-lists",{title:t})},T=function(t){return C.delete("todo-lists/".concat(t))},A=function(t,e){return C.put("todo-lists/".concat(t),{title:e})},w=function(t){return C.get("todo-lists/".concat(t,"/tasks"))},S=function(t,e){return C.delete("todo-lists/".concat(t,"/tasks/").concat(e))},F=function(t,e){return C.post("todo-lists/".concat(t,"/tasks"),{title:e})},E=function(t,e,a){return C.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},L=function(t){return C.post("auth/login",t)},P=function(){return C.get("auth/me")},N=function(){return C.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var D=a(29),z=a.n(D),M=a(40),R=function(t,e){t.messages.length?e(G({error:t.messages[0]})):e(G({error:"Some error occurred"})),e(_({status:"failed"}))},U=function(t,e){e(G({error:t.message?t.message:"Some error occurred"})),e(_({status:"failed"}))},B=a(24),H=Object(B.b)("auth/login",function(){var t=Object(M.a)(z.a.mark((function t(e,a){var n,i;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(_({status:"loading"})),t.prev=1,t.next=4,L(e);case 4:if(0!==(n=t.sent).data.resultCode){t.next=10;break}return a.dispatch(_({status:"succeeded"})),t.abrupt("return",{isLoggedIn:!0});case 10:return R(n.data,a.dispatch),t.abrupt("return",a.rejectWithValue({errors:n.data.messages,fieldsErrors:n.data.fieldsErrors}));case 12:t.next=19;break;case 14:return t.prev=14,t.t0=t.catch(1),i=t.t0,U(i,a.dispatch),t.abrupt("return",a.rejectWithValue({errors:[i.message],fieldsErrors:void 0}));case 19:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,a){return t.apply(this,arguments)}}()),V=Object(B.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}},extraReducers:function(t){t.addCase(H.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn}))}}),Z=V.reducer,q=V.actions.setIsLoggedInAC,J=Object(B.c)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setAppInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),K=J.reducer,W=J.actions,_=W.setAppStatusAC,G=W.setAppErrorAC,Y=W.setAppInitializedAC,$=Object(B.c)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(x.a)(Object(x.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(x.a)(Object(x.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),Q=$.reducer,X=$.actions,tt=X.removeTodolistAC,et=X.addTodolistAC,at=X.changeTodolistTitleAC,nt=X.changeTodolistFilterAC,it=X.changeTodolistEntityStatusAC,ot=X.setTodolistsAC,st=Object(B.b)("tasks/fetchTasks",function(){var t=Object(M.a)(z.a.mark((function t(e,a){var n,i;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(_({status:"loading"})),t.next=3,w(e);case 3:return n=t.sent,a.dispatch(_({status:"succeeded"})),i=n.data.items,t.abrupt("return",{tasks:i,todolistId:e});case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),rt=Object(B.b)("tasks/removeTask",function(){var t=Object(M.a)(z.a.mark((function t(e,a){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e.todolistId,e.taskId);case 2:return t.sent,t.abrupt("return",{taskId:e.taskId,todolistId:e.todolistId});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),ct=Object(B.c)({name:"tasks",initialState:{},reducers:{addTaskAC:function(t,e){t[e.payload.todoListId].unshift(e.payload)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(x.a)(Object(x.a)({},a[n]),e.payload.model))}},extraReducers:function(t){t.addCase(et,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(tt,(function(t,e){delete t[e.payload.id]})),t.addCase(ot,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})),t.addCase(st.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})),t.addCase(rt.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)}))}}),dt=ct.reducer,lt=ct.actions,ut=lt.addTaskAC,jt=lt.updateTaskAC,ft=function(t,e,a){return function(n,i){var o=i().tasks[a].find((function(e){return e.id===t}));if(o){var s=Object(x.a)({deadline:o.deadline,description:o.description,priority:o.priority,startDate:o.startDate,title:o.title,status:o.status},e);E(a,t,s).then((function(i){if(0===i.data.resultCode){var o=jt({taskId:t,model:e,todolistId:a});n(o)}else R(i.data,n)})).catch((function(t){U(t,n)}))}else console.warn("task not found in the state")}},bt=a(172),pt=a(132),ht=a(46),Ot=a(181),mt=a(169),gt=r.a.memo((function(t){var e=t.addItem,a=t.disabled,n=void 0!==a&&a;console.log("AddItemForm called");var i=Object(s.useState)(""),r=Object(ht.a)(i,2),c=r[0],d=r[1],l=Object(s.useState)(null),u=Object(ht.a)(l,2),j=u[0],f=u[1],p=function(){""!==c.trim()?(e(c),d("")):f("Title is required")};return Object(o.jsxs)("div",{children:[Object(o.jsx)(Ot.a,{variant:"outlined",disabled:n,error:!!j,value:c,onChange:function(t){d(t.currentTarget.value)},onKeyPress:function(t){null!==j&&f(null),13===t.charCode&&p()},label:"Title",helperText:j}),Object(o.jsx)(b.a,{color:"primary",onClick:p,disabled:n,children:Object(o.jsx)(mt.a,{})})]})})),vt=a(89),xt=r.a.memo((function(t){console.log("EditableSpan called");var e=Object(s.useState)(!1),a=Object(ht.a)(e,2),n=a[0],i=a[1],r=Object(s.useState)(t.value),c=Object(ht.a)(r,2),d=c[0],l=c[1];return n?Object(o.jsx)(Ot.a,{value:d,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(d)}}):Object(o.jsx)("span",{onDoubleClick:function(){i(!0),l(t.value)},children:t.value})})),kt=a(170),Ct=a(183),yt=r.a.memo((function(t){var e=Object(s.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(s.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?n.Completed:n.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(s.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(o.jsxs)("div",{className:t.task.status===n.Completed?"is-done":"",children:[Object(o.jsx)(Ct.a,{checked:t.task.status===n.Completed,color:"primary",onChange:a}),Object(o.jsx)(xt,{value:t.task.title,onChange:i}),Object(o.jsx)(b.a,{onClick:e,children:Object(o.jsx)(kt.a,{})})]},t.task.id)})),It=r.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(vt.a)(t,["demo"]);console.log("Todolist called");var r=Object(v.b)();Object(s.useEffect)((function(){if(!a){var t=st(i.todolist.id);r(t)}}),[]);var c=Object(s.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),d=Object(s.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),l=Object(s.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(s.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(s.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),f=i.tasks;return"active"===i.todolist.filter&&(f=i.tasks.filter((function(t){return t.status===n.New}))),"completed"===i.todolist.filter&&(f=i.tasks.filter((function(t){return t.status===n.Completed}))),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)(xt,{value:i.todolist.title,onChange:d}),Object(o.jsx)(b.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(o.jsx)(kt.a,{})})]}),Object(o.jsx)(gt,{addItem:c,disabled:"loading"===i.todolist.entityStatus}),Object(o.jsx)("div",{children:f.map((function(t){return Object(o.jsx)(yt,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(o.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(o.jsx)(h.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:l,color:"default",children:"All"}),Object(o.jsx)(h.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(o.jsx)(h.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),Tt=a(13),At=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(v.c)((function(t){return t.todolists})),i=Object(v.c)((function(t){return t.tasks})),r=Object(v.c)((function(t){return t.auth.isLoggedIn})),c=Object(v.b)();Object(s.useEffect)((function(){if(!a&&r){var t=function(t){t(_({status:"loading"})),y().then((function(e){t(ot({todolists:e.data})),t(_({status:"succeeded"}))}))};c(t)}}),[]);var d=Object(s.useCallback)((function(t,e){var a=rt({taskId:t,todolistId:e});c(a)}),[]),l=Object(s.useCallback)((function(t,e){var a=function(t,e){return function(a){a(_({status:"loading"})),F(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,n=ut(e);a(n),a(_({status:"succeeded"}))}else R(t.data,a)})).catch((function(t){U(t,a)}))}}(t,e);c(a)}),[]),u=Object(s.useCallback)((function(t,e,a){var n=ft(t,{status:e},a);c(n)}),[]),j=Object(s.useCallback)((function(t,e,a){var n=ft(t,{title:e},a);c(n)}),[]),f=Object(s.useCallback)((function(t,e){var a=nt({id:e,filter:t});c(a)}),[]),b=Object(s.useCallback)((function(t){var e,a=(e=t,function(t){t(_({status:"loading"})),t(it({id:e,status:"loading"})),T(e).then((function(a){t(tt({id:e})),t(_({status:"succeeded"}))}))});c(a)}),[]),p=Object(s.useCallback)((function(t,e){var a=function(t,e){return function(a){A(t,e).then((function(n){a(at({id:t,title:e}))}))}}(t,e);c(a)}),[]),h=Object(s.useCallback)((function(t){var e=function(t){return function(e){e(_({status:"loading"})),I(t).then((function(t){e(et({todolist:t.data.data.item})),e(_({status:"succeeded"}))}))}}(t);c(e)}),[c]);return r?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(bt.a,{container:!0,style:{padding:"20px"},children:Object(o.jsx)(gt,{addItem:h})}),Object(o.jsx)(bt.a,{container:!0,spacing:3,children:n.map((function(t){var e=i[t.id];return Object(o.jsx)(bt.a,{item:!0,children:Object(o.jsx)(pt.a,{style:{padding:"10px"},children:Object(o.jsx)(It,{todolist:t,tasks:e,removeTask:d,changeFilter:f,addTask:l,changeTaskStatus:u,removeTodolist:b,changeTaskTitle:j,changeTodolistTitle:p,demo:a})})},t.id)}))})]}):Object(o.jsx)(Tt.a,{to:"/login"})},wt=a(185),St=a(182);function Ft(t){return Object(o.jsx)(St.a,Object(x.a)({elevation:6,variant:"filled"},t))}function Et(){var t=Object(v.c)((function(t){return t.app.error})),e=Object(v.b)(),a=function(t,a){"clickaway"!==a&&e(G({error:null}))},n=null!==t;return Object(o.jsx)(wt.a,{open:n,autoHideDuration:6e3,onClose:a,children:Object(o.jsx)(Ft,{onClose:a,severity:"error",children:t})})}var Lt=a(186),Pt=a(167),Nt=a(173),Dt=a(174),zt=a(88),Mt=a(23),Rt=a(49),Ut=Object(Mt.c)({tasks:dt,todolists:Q,app:K,auth:Z}),Bt=Object(B.a)({reducer:Ut,middleware:function(t){return t().prepend(Rt.a)}});window.store=Bt;var Ht=function(){var t=Object(v.b)(),e=Object(v.c)((function(t){return t.auth.isLoggedIn})),a=Object(zt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="\u041f\u043e\u043b\u0435 email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",t.password?t.password.length<3&&(e.password="\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):e.password="Required",e},onSubmit:function(){var e=Object(M.a)(z.a.mark((function e(n,i){var o,s,r,c,d;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(H(n));case 2:o=e.sent,H.rejected.match(o)&&(null===(s=o.payload)||void 0===s||null===(r=s.fieldsErrors)||void 0===r?void 0:r.length)&&(d=null===(c=o.payload)||void 0===c?void 0:c.fieldsErrors[0],i.setFieldError(d.field,d.error)),a.resetForm();case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()});return e?Object(o.jsx)(Tt.a,{to:"/"}):Object(o.jsx)(bt.a,{container:!0,justify:"center",children:Object(o.jsx)(bt.a,{item:!0,xs:4,children:Object(o.jsx)("form",{onSubmit:a.handleSubmit,children:Object(o.jsxs)(Lt.a,{children:[Object(o.jsxs)(Pt.a,{children:[Object(o.jsxs)("p",{children:["To log in get registered",Object(o.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(o.jsx)("p",{children:"or use common test account credentials:"}),Object(o.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(o.jsx)("p",{children:"Password: free"})]}),Object(o.jsxs)(Nt.a,{children:[Object(o.jsx)(Ot.a,Object(x.a)({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email&&Object(o.jsx)("div",{style:{color:"red"},children:a.errors.email}),Object(o.jsx)(Ot.a,Object(x.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.email&&a.errors.password&&Object(o.jsx)("div",{style:{color:"red"},children:a.errors.password}),Object(o.jsx)(Dt.a,{label:"Remember me",control:Object(o.jsx)(Ct.a,Object(x.a)({},a.getFieldProps("rememberMe")))}),Object(o.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})};var Vt=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(v.c)((function(t){return t.app.isInitialized})),i=Object(v.c)((function(t){return t.app.status})),r=Object(v.c)((function(t){return t.auth.isLoggedIn})),c=Object(v.b)();return Object(s.useEffect)((function(){a||c((function(t){P().then((function(e){0===e.data.resultCode&&t(q({value:!0}))})).finally((function(){t(Y({isInitialized:!0}))}))}))})),n?Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(Et,{}),Object(o.jsxs)(j.a,{position:"static",children:[Object(o.jsxs)(f.a,{children:[Object(o.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(o.jsx)(g.a,{})}),Object(o.jsx)(p.a,{variant:"h6",children:"News"}),r&&Object(o.jsx)(h.a,{color:"inherit",onClick:function(){c((function(t){t(_({status:"loading"})),N().then((function(e){0===e.data.resultCode?(t(q({value:!1})),t(_({status:"succeeded"}))):R(e.data,t)})).catch((function(e){U(e,t)}))}))},children:"Logout"})]}),"loading"===i&&Object(o.jsx)(O.a,{})]}),Object(o.jsx)(m.a,{fixed:!0,children:Object(o.jsxs)(Tt.d,{children:[Object(o.jsx)(Tt.b,{exact:!0,path:"/",render:function(){return Object(o.jsx)(At,{demo:a})}}),Object(o.jsx)(Tt.b,{path:"/login",render:function(){return Object(o.jsx)(Ht,{})}}),Object(o.jsx)(Tt.b,{path:"/404",render:function(){return Object(o.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(o.jsx)(Tt.a,{from:"*",to:"/404"})]})})]}):Object(o.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(o.jsx)(u.a,{})})},Zt=a(48);d.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v.a,{store:Bt,children:Object(o.jsx)(Zt.a,{children:Object(o.jsx)(Vt,{})})})}),document.getElementById("root")),l()}},[[131,1,2]]]);
//# sourceMappingURL=main.133ae388.chunk.js.map