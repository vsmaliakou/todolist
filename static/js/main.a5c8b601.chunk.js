(this["webpackJsonptodo-16"]=this["webpackJsonptodo-16"]||[]).push([[0],{103:function(t,e,a){},104:function(t,e,a){},128:function(t,e,a){"use strict";a.r(e);var n,i,o=a(3),s=a(0),c=a.n(s),r=a(9),d=a.n(r),l=(a(103),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;a(t),n(t),i(t),o(t),s(t)}))}),u=(a(104),a(172)),j=a(173),b=a(174),f=a(165),O=a(130),h=a(168),p=a(176),m=a(177),g=a(175),x=a(16),v=a(20),k=a(80),C=a.n(k).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"15f7a0a9-64c3-4a6a-9f8f-a55a7d8541a6"}}),T=function(){return C.get("todo-lists")},y=function(t){return C.post("todo-lists",{title:t})},I=function(t){return C.delete("todo-lists/".concat(t))},A=function(t,e){return C.put("todo-lists/".concat(t),{title:e})},w=function(t){return C.get("todo-lists/".concat(t,"/tasks"))},S=function(t,e){return C.delete("todo-lists/".concat(t,"/tasks/").concat(e))},F=function(t,e){return C.post("todo-lists/".concat(t,"/tasks"),{title:e})},L=function(t,e,a){return C.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},E=function(t){return C.post("auth/login",t)},P=function(){return C.get("auth/me")},N=function(){return C.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var D=function(t,e){t.messages.length?e(K({error:t.messages[0]})):e(K({error:"Some error occurred"})),e(J({status:"failed"}))},z=function(t,e){e(K({error:t.message?t.message:"Some error occurred"})),e(J({status:"failed"}))},M=a(28),R=Object(M.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),U=R.reducer,B=R.actions.setIsLoggedInAC,H=Object(M.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setAppInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),Z=H.reducer,q=H.actions,J=q.setAppStatusAC,K=q.setAppErrorAC,_=q.setAppInitializedAC,G=Object(M.b)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(v.a)(Object(v.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),V=G.reducer,Y=G.actions,$=Y.removeTodolistAC,Q=Y.addTodolistAC,W=Y.changeTodolistTitleAC,X=Y.changeTodolistFilterAC,tt=Y.changeTodolistEntityStatusAC,et=Y.setTodolistsAC,at=Object(M.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(v.a)(Object(v.a)({},a[n]),e.payload.model))},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks}},extraReducers:function(t){t.addCase(Q,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase($,(function(t,e){delete t[e.payload.id]})),t.addCase(et,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))}))}}),nt=at.reducer,it=at.actions,ot=it.removeTaskAC,st=it.addTaskAC,ct=it.updateTaskAC,rt=it.setTasksAC,dt=function(t,e,a){return function(n,i){var o=i().tasks[a].find((function(e){return e.id===t}));if(o){var s=Object(v.a)({deadline:o.deadline,description:o.description,priority:o.priority,startDate:o.startDate,title:o.title,status:o.status},e);L(a,t,s).then((function(i){if(0===i.data.resultCode){var o=ct({taskId:t,model:e,todolistId:a});n(o)}else D(i.data,n)})).catch((function(t){z(t,n)}))}else console.warn("task not found in the state")}},lt=a(169),ut=a(129),jt=a(44),bt=a(178),ft=a(166),Ot=c.a.memo((function(t){var e=t.addItem,a=t.disabled,n=void 0!==a&&a;console.log("AddItemForm called");var i=Object(s.useState)(""),c=Object(jt.a)(i,2),r=c[0],d=c[1],l=Object(s.useState)(null),u=Object(jt.a)(l,2),j=u[0],b=u[1],O=function(){""!==r.trim()?(e(r),d("")):b("Title is required")};return Object(o.jsxs)("div",{children:[Object(o.jsx)(bt.a,{variant:"outlined",disabled:n,error:!!j,value:r,onChange:function(t){d(t.currentTarget.value)},onKeyPress:function(t){null!==j&&b(null),13===t.charCode&&O()},label:"Title",helperText:j}),Object(o.jsx)(f.a,{color:"primary",onClick:O,disabled:n,children:Object(o.jsx)(ft.a,{})})]})})),ht=a(87),pt=c.a.memo((function(t){console.log("EditableSpan called");var e=Object(s.useState)(!1),a=Object(jt.a)(e,2),n=a[0],i=a[1],c=Object(s.useState)(t.value),r=Object(jt.a)(c,2),d=r[0],l=r[1];return n?Object(o.jsx)(bt.a,{value:d,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(d)}}):Object(o.jsx)("span",{onDoubleClick:function(){i(!0),l(t.value)},children:t.value})})),mt=a(167),gt=a(180),xt=c.a.memo((function(t){var e=Object(s.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(s.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?n.Completed:n.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(s.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(o.jsxs)("div",{className:t.task.status===n.Completed?"is-done":"",children:[Object(o.jsx)(gt.a,{checked:t.task.status===n.Completed,color:"primary",onChange:a}),Object(o.jsx)(pt,{value:t.task.title,onChange:i}),Object(o.jsx)(f.a,{onClick:e,children:Object(o.jsx)(mt.a,{})})]},t.task.id)})),vt=c.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(ht.a)(t,["demo"]);console.log("Todolist called");var c=Object(x.b)();Object(s.useEffect)((function(){if(!a){var t,e=(t=i.todolist.id,function(e){e(J({status:"loading"})),w(t).then((function(a){var n=a.data.items;e(rt({tasks:n,todolistId:t})),e(J({status:"succeeded"}))}))});c(e)}}),[]);var r=Object(s.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),d=Object(s.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),l=Object(s.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(s.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(s.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===n.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===n.Completed}))),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)(pt,{value:i.todolist.title,onChange:d}),Object(o.jsx)(f.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(o.jsx)(mt.a,{})})]}),Object(o.jsx)(Ot,{addItem:r,disabled:"loading"===i.todolist.entityStatus}),Object(o.jsx)("div",{children:b.map((function(t){return Object(o.jsx)(xt,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(o.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(o.jsx)(h.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:l,color:"default",children:"All"}),Object(o.jsx)(h.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(o.jsx)(h.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),kt=a(13),Ct=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(x.c)((function(t){return t.todolists})),i=Object(x.c)((function(t){return t.tasks})),c=Object(x.c)((function(t){return t.auth.isLoggedIn})),r=Object(x.b)();Object(s.useEffect)((function(){if(!a&&c){var t=function(t){t(J({status:"loading"})),T().then((function(e){t(et({todolists:e.data})),t(J({status:"succeeded"}))}))};r(t)}}),[]);var d=Object(s.useCallback)((function(t,e){var a=function(t,e){return function(a){S(e,t).then((function(n){var i=ot({taskId:t,todolistId:e});a(i)}))}}(t,e);r(a)}),[]),l=Object(s.useCallback)((function(t,e){var a=function(t,e){return function(a){a(J({status:"loading"})),F(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,n=st({task:e});a(n),a(J({status:"succeeded"}))}else D(t.data,a)})).catch((function(t){z(t,a)}))}}(t,e);r(a)}),[]),u=Object(s.useCallback)((function(t,e,a){var n=dt(t,{status:e},a);r(n)}),[]),j=Object(s.useCallback)((function(t,e,a){var n=dt(t,{title:e},a);r(n)}),[]),b=Object(s.useCallback)((function(t,e){var a=X({id:e,filter:t});r(a)}),[]),f=Object(s.useCallback)((function(t){var e,a=(e=t,function(t){t(J({status:"loading"})),t(tt({id:e,status:"loading"})),I(e).then((function(a){t($({id:e})),t(J({status:"succeeded"}))}))});r(a)}),[]),O=Object(s.useCallback)((function(t,e){var a=function(t,e){return function(a){A(t,e).then((function(n){a(W({id:t,title:e}))}))}}(t,e);r(a)}),[]),h=Object(s.useCallback)((function(t){var e=function(t){return function(e){e(J({status:"loading"})),y(t).then((function(t){e(Q({todolist:t.data.data.item})),e(J({status:"succeeded"}))}))}}(t);r(e)}),[r]);return c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(lt.a,{container:!0,style:{padding:"20px"},children:Object(o.jsx)(Ot,{addItem:h})}),Object(o.jsx)(lt.a,{container:!0,spacing:3,children:n.map((function(t){var e=i[t.id];return Object(o.jsx)(lt.a,{item:!0,children:Object(o.jsx)(ut.a,{style:{padding:"10px"},children:Object(o.jsx)(vt,{todolist:t,tasks:e,removeTask:d,changeFilter:b,addTask:l,changeTaskStatus:u,removeTodolist:f,changeTaskTitle:j,changeTodolistTitle:O,demo:a})})},t.id)}))})]}):Object(o.jsx)(kt.a,{to:"/login"})},Tt=a(182),yt=a(179);function It(t){return Object(o.jsx)(yt.a,Object(v.a)({elevation:6,variant:"filled"},t))}function At(){var t=Object(x.c)((function(t){return t.app.error})),e=Object(x.b)(),a=function(t,a){"clickaway"!==a&&e(K({error:null}))},n=null!==t;return Object(o.jsx)(Tt.a,{open:n,autoHideDuration:6e3,onClose:a,children:Object(o.jsx)(It,{onClose:a,severity:"error",children:t})})}var wt=a(183),St=a(164),Ft=a(170),Lt=a(171),Et=a(86),Pt=function(){var t=Object(x.b)(),e=Object(x.c)((function(t){return t.auth.isLoggedIn})),a=Object(Et.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="\u041f\u043e\u043b\u0435 email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",t.password?t.password.length<3&&(e.password="\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):e.password="Required",e},onSubmit:function(e){var n;t((n=e,function(t){t(J({status:"loading"})),E(n).then((function(e){0===e.data.resultCode?(t(B({value:!0})),t(J({status:"succeeded"}))):D(e.data,t)})).catch((function(e){z(e,t)}))})),a.resetForm()}});return e?Object(o.jsx)(kt.a,{to:"/"}):Object(o.jsx)(lt.a,{container:!0,justify:"center",children:Object(o.jsx)(lt.a,{item:!0,xs:4,children:Object(o.jsx)("form",{onSubmit:a.handleSubmit,children:Object(o.jsxs)(wt.a,{children:[Object(o.jsxs)(St.a,{children:[Object(o.jsxs)("p",{children:["To log in get registered",Object(o.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(o.jsx)("p",{children:"or use common test account credentials:"}),Object(o.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(o.jsx)("p",{children:"Password: free"})]}),Object(o.jsxs)(Ft.a,{children:[Object(o.jsx)(bt.a,Object(v.a)({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email&&Object(o.jsx)("div",{style:{color:"red"},children:a.errors.email}),Object(o.jsx)(bt.a,Object(v.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.email&&a.errors.password&&Object(o.jsx)("div",{style:{color:"red"},children:a.errors.password}),Object(o.jsx)(Lt.a,{label:"Remember me",control:Object(o.jsx)(gt.a,Object(v.a)({},a.getFieldProps("rememberMe")))}),Object(o.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})};var Nt=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(x.c)((function(t){return t.app.isInitialized})),i=Object(x.c)((function(t){return t.app.status})),c=Object(x.c)((function(t){return t.auth.isLoggedIn})),r=Object(x.b)();return Object(s.useEffect)((function(){r((function(t){P().then((function(e){0===e.data.resultCode&&t(B({value:!0}))})).finally((function(){t(_({isInitialized:!0}))}))}))})),n?Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(At,{}),Object(o.jsxs)(j.a,{position:"static",children:[Object(o.jsxs)(b.a,{children:[Object(o.jsx)(f.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(o.jsx)(g.a,{})}),Object(o.jsx)(O.a,{variant:"h6",children:"News"}),c&&Object(o.jsx)(h.a,{color:"inherit",onClick:function(){r((function(t){t(J({status:"loading"})),N().then((function(e){0===e.data.resultCode?(t(B({value:!1})),t(J({status:"succeeded"}))):D(e.data,t)})).catch((function(e){z(e,t)}))}))},children:"Logout"})]}),"loading"===i&&Object(o.jsx)(p.a,{})]}),Object(o.jsx)(m.a,{fixed:!0,children:Object(o.jsxs)(kt.d,{children:[Object(o.jsx)(kt.b,{exact:!0,path:"/",render:function(){return Object(o.jsx)(Ct,{demo:a})}}),Object(o.jsx)(kt.b,{path:"/login",render:function(){return Object(o.jsx)(Pt,{})}}),Object(o.jsx)(kt.b,{path:"/404",render:function(){return Object(o.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(o.jsx)(kt.a,{from:"*",to:"/404"})]})})]}):Object(o.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(o.jsx)(u.a,{})})},Dt=a(23),zt=a(47),Mt=Object(Dt.c)({tasks:nt,todolists:V,app:Z,auth:U}),Rt=Object(M.a)({reducer:Mt,middleware:function(t){return t().prepend(zt.a)}});window.store=Rt;var Ut=a(46);d.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x.a,{store:Rt,children:Object(o.jsx)(Ut.a,{children:Object(o.jsx)(Nt,{})})})}),document.getElementById("root")),l()}},[[128,1,2]]]);
//# sourceMappingURL=main.a5c8b601.chunk.js.map