(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(9),r=n.n(i),s=(n(21),n(5)),c=n(6),o=n(8),l=n(7),u=n(12),d=n(3),b=function(){return Object(d.jsx)(d.Fragment,{children:"Hello this is my future partfolio"})},j=n(10),p=n(4),f=(n(23),function(t){var e=t.posts,n=t.liked;return Object(d.jsxs)("div",{className:"app-header d-flex",children:[Object(d.jsx)("h1",{children:"Artem Krawtsow"}),Object(d.jsxs)("h2",{children:[e," posts, liked ",n]})]})}),h=(n(24),function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={term:""},a.onChange=a.onChange.bind(Object(p.a)(a)),a}return Object(c.a)(n,[{key:"onChange",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.addTerm(e)}},{key:"render",value:function(){return Object(d.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",onChange:this.onChange})}}]),n}(a.Component)),m=(n(25),function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={filter:t.filter},a.button=[{name:"all",filter:"\u0412\u0441\u0435"},{name:"like",filter:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"}],a.onChangeFilter=a.onChangeFilter.bind(Object(p.a)(a)),a}return Object(c.a)(n,[{key:"onChangeFilter",value:function(t){this.setState({filter:t}),this.props.addFilter(t)}},{key:"render",value:function(){var t=this,e=this.button.map((function(e){var n=e.name,a=e.filter,i=n===t.state.filter?" btn btn-info":" btn btn-outline-secondary";return Object(d.jsx)("button",{type:"button",className:"btn ".concat(i),onClick:function(){return t.onChangeFilter(n)},children:a},n)}));return Object(d.jsx)("div",{className:"btn-group",children:e})}}]),n}(a.Component)),O=(n(26),function(t){var e=t.label,n=t.important,a=void 0!==n&&n,i=t.like,r=void 0!==i&&i,s=t.onDelete,c=t.onImportant,o=t.onLiked,l="app-list-item d-flex justify-content-between";return a&&(l+=" important"),r&&(l+=" like"),Object(d.jsxs)("div",{className:l,children:[Object(d.jsx)("span",{className:"app-list-item-label",onClick:o,children:e}),Object(d.jsxs)("div",{className:"d-flex justify-content-center align-item-center",children:[Object(d.jsx)("button",{type:"btn",className:"btn-star btn-sm",onClick:c,children:Object(d.jsx)("i",{className:"fa fa-star"})}),Object(d.jsx)("button",{type:"btn",className:"btn-trash btn-sm",onClick:s,children:Object(d.jsx)("i",{className:"fa fa-trash-o"})}),Object(d.jsx)("i",{className:"fa fa-heart"})]})]})}),x=(n(27),function(t){var e=t.posts,n=t.onDelete,a=t.onImportant,i=t.onLiked,r=e.map((function(t){return Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsx)(O,{label:t.label,important:t.important,like:t.like,onDelete:function(){return n(t.id)},onImportant:function(){return a(t.id)},onLiked:function(){return i(t.id)}})},t.id)}));return Object(d.jsx)("ul",{className:"app-list list-group",children:r})}),v=(n(28),function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).onTextChange=a.onTextChange.bind(Object(p.a)(a)),a.onAddItem=a.onAddItem.bind(Object(p.a)(a)),a.state={text:""},a}return Object(c.a)(n,[{key:"onTextChange",value:function(t){var e=t.target.value;this.setState({text:e})}},{key:"onAddItem",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(d.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onAddItem,children:[Object(d.jsx)("input",{type:"text",placeholder:"\u041e \u0447\u0435\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441",className:"form-control new-post-label",onChange:this.onTextChange,value:this.state.text}),Object(d.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(a.Component)),k=(n(29),function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={data:[{label:"Going to lern",important:!0,like:!0,id:1},{label:"Going ta lern",important:!0,like:!1,id:2},{label:"Going tb lern",important:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(p.a)(a)),a.addItem=a.addItem.bind(Object(p.a)(a)),a.toggleLiked=a.toggleLiked.bind(Object(p.a)(a)),a.toggleImportant=a.toggleImportant.bind(Object(p.a)(a)),a.updateTerm=a.updateTerm.bind(Object(p.a)(a)),a.updateFilter=a.updateFilter.bind(Object(p.a)(a)),a.maxId=4,a}return Object(c.a)(n,[{key:"searchPosts",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"filterPosts",value:function(t,e){return"like"===e?t.filter((function(t){return t.like})):t}},{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n.slice(0,a),r=n.slice(a+1);return{data:[].concat(Object(j.a)(i),Object(j.a)(r))}}))}},{key:"addItem",value:function(t){var e={label:t,important:!1,id:this.maxId++};this.setState((function(t){var n=t.data;return{data:[].concat(Object(j.a)(n),[e])}}))}},{key:"toggleLiked",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=!n[a].like;return n[a].like=i,{data:n}}))}},{key:"toggleImportant",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=!n[a].important;return n[a].important=i,{data:n}}))}},{key:"updateTerm",value:function(t){this.setState({term:t})}},{key:"updateFilter",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,a=t.filter,i=e.filter((function(t){return t.like})).length,r=e.length,s=this.filterPosts(this.searchPosts(e,n),a);return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(f,{posts:r,liked:i}),Object(d.jsxs)("div",{className:"search-panel d-flex",children:[Object(d.jsx)(h,{addTerm:this.updateTerm}),Object(d.jsx)(m,{filter:a,addFilter:this.updateFilter})]}),Object(d.jsx)(x,{posts:s,onDelete:this.deleteItem,onImportant:this.toggleImportant,onLiked:this.toggleLiked}),Object(d.jsx)(v,{onAdd:this.addItem})]})}}]),n}(a.Component)),g=(n(30),function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={app:null},t.onChouseApp=function(e){t.state.app===e?t.setState({app:null}):t.setState({app:e}),console.log(t.state.app)},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e="toDo"===this.state.app?Object(d.jsx)(k,{}):null;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.a,{children:Object(d.jsx)(b,{})}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){return t.onChouseApp("toDo")},children:"todoList"}),Object(d.jsx)("div",{children:e})]})]})}}]),n}(a.Component)),y=g;r.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8d6408a0.chunk.js.map