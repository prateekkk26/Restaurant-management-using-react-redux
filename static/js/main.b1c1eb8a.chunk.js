(this["webpackJsonprestaurant-system"]=this["webpackJsonprestaurant-system"]||[]).push([[0],{1:function(e,t){e.exports={SELECT_TABLE:"SELECT_TABLE",TOGGLE_TABLE:"TOGGLE_TABLE",INCREMENT_MONEY_EARNED:"INCREMENT_MONEY_EARNED",ADD_TABLE_ITEM:"ADD_TABLE_ITEM",DELETE_TABLE_ITEM:"DELETE_TABLE_ITEM"}},10:function(e,t,n){e.exports=n(22)},22:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),c=n.n(r),i=n(3),o=n(2),u=function(e){for(var t=0,n=0;n<e.tableStatusData.length;n++)t+=e.tableStatusData[n];return l.a.createElement("div",{style:{textAlign:"center",padding:"15px",backgroundColor:"#000",color:"#fff"},className:"rounded text-center border-bottom border-info"},l.a.createElement("p",{className:"display-4"},"Cafe Triplets"),l.a.createElement("p",{className:"h4 text-center"},"Tables filled: ",t," / 16"),l.a.createElement("p",{className:"h4 text-center"},"Money earned: ",e.moneyEarned))},d=Object(o.b)((function(e){return{moneyEarned:e.moneyEarned,tableStatusData:e.tableStatusData}}),null)(u),E=function(e){return null===e.selectedTable?null:(console.log(e),l.a.createElement("div",{style:{textAlign:"left",marginLeft:20,display:"flex",flexDirection:"column"}},e.items.map((function(t,n){return l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-dark",onClick:function(){return e.onDelete(e.selectedTable,n)}},"x"),"\xa0 ",t.name," | $",t.price,l.a.createElement("br",null))}))))},s=n(1),m=function(e,t){return{type:s.DELETE_TABLE_ITEM,tableId:e,id:t}},b=Object(o.b)((function(e){return{selectedTable:e.selectedTable,items:e.tableData[e.selectedTable]}}),(function(e){return{onDelete:function(t,n){console.log(t),e(m(t,n))}}}))(E),f=function(e){return l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-dark",style:{padding:"10px",boxShadow:"none"},disabled:null===e.selectedTable,onClick:function(){return e.onToggle(e.selectedTable,e.tableData)}},e.tableStatus?"Check Out":"Check In"))},T=function(e){return{type:s.TOGGLE_TABLE,id:e}},p=function(e){return{type:s.INCREMENT_MONEY_EARNED,amount:e}},h=Object(o.b)((function(e){return{selectedTable:e.selectedTable,tableStatus:e.tableStatusData[e.selectedTable],tableData:e.tableData}}),(function(e){return{onToggle:function(t,n){for(var a=0,l=0;l<n[t].length;l++)a+=n[t][l].price;e(T(t)),e(p(a))}}}))(f),g=function(e){var t=0;if(null!==e.selectedTable)for(var n=0;n<e.items.length;n++)t+=e.items[n].price;return l.a.createElement("div",{style:{width:190,height:480,backgroundColor:"#cde9d0",textAlign:"center",paddingTop:"20px"}},l.a.createElement("h2",null,"Table #: ",e.selectedTable),l.a.createElement("br",null),l.a.createElement(h,null),l.a.createElement("br",null),l.a.createElement("h2",null,"Bill Total: ",t),l.a.createElement("h2",null,"Orders: "),l.a.createElement(b,null))},v=Object(o.b)((function(e){return{selectedTable:e.selectedTable,items:e.tableData[e.selectedTable]}}),null)(g),D=function(e){var t={width:80,height:80,margin:25,border:e.selectedTable===e.id?"3px solid red":null,backgroundColor:e.tableStatusData[e.id]?"red":null,marginTop:"10px",outline:"none",boxShadow:"none"};return l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.onSelect(e.id)},style:t},e.id))},y=function(e){return{type:s.SELECT_TABLE,id:e}},_=Object(o.b)((function(e){return{selectedTable:e.selectedTable,tableStatusData:e.tableStatusData}}),(function(e){return{onSelect:function(t){e(y(t))}}}))(D),A=function(){return l.a.createElement("div",{style:{display:"flex",alignContent:"center",justifyContent:"center",flexWrap:"wrap",width:640,height:480,backgroundColor:"#000"}},l.a.createElement(_,{id:0}),l.a.createElement(_,{id:1}),l.a.createElement(_,{id:2}),l.a.createElement(_,{id:3}),l.a.createElement(_,{id:4}),l.a.createElement(_,{id:5}),l.a.createElement(_,{id:6}),l.a.createElement(_,{id:7}),l.a.createElement(_,{id:8}),l.a.createElement(_,{id:9}),l.a.createElement(_,{id:10}),l.a.createElement(_,{id:11}),l.a.createElement(_,{id:12}),l.a.createElement(_,{id:13}),l.a.createElement(_,{id:14}),l.a.createElement(_,{id:15}))},L=function(e){return l.a.createElement("div",null,l.a.createElement("button",{disabled:null===e.selectedTable||!1===e.tableStatusData[e.selectedTable],onClick:function(){return e.onAdd(e.name,e.price,e.selectedTable)},style:{width:105,height:80,backgroundColor:"#cde9d0",boxShadow:"none",outline:"none"}},"$",e.price," ",e.name))},x=function(e,t,n){return{type:s.ADD_TABLE_ITEM,tableId:n,item:{name:e,price:t}}},S=Object(o.b)((function(e){return{selectedTable:e.selectedTable,tableStatusData:e.tableStatusData}}),(function(e){return{onAdd:function(t,n,a){e(x(t,n,a))}}}))(L),C=function(){return l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignContent:"space-around",width:210,height:480,backgroundColor:"#000"}},l.a.createElement(S,{name:"Burger",price:5}),l.a.createElement(S,{name:"Pizza",price:3}),l.a.createElement(S,{name:"Fries",price:1}),l.a.createElement(S,{name:"Water",price:0}),l.a.createElement(S,{name:"Donut",price:1}),l.a.createElement(S,{name:"Tea",price:1}),l.a.createElement(S,{name:"Pork",price:4}),l.a.createElement(S,{name:"Steak",price:7}),l.a.createElement(S,{name:"Milk",price:2}),l.a.createElement(S,{name:"Salad",price:3}),l.a.createElement(S,{name:"Fruit",price:2}),l.a.createElement(S,{name:"Eggs",price:1}))},N=function(){return l.a.createElement("div",{style:{display:"flex",flex:1},class:"container justify-content-center\t"},l.a.createElement(v,null),l.a.createElement("br",null),l.a.createElement(A,null),l.a.createElement(C,null))};var w=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(d,null),l.a.createElement(N,null))};n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));for(var k=[],B=0;B<16;B++)k.push([]);var O=new Array(16).fill(!1),I=Object(i.b)({moneyEarned:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.INCREMENT_MONEY_EARNED:return e+t.amount;default:return e}},selectedTable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.SELECT_TABLE:return e===t.id?null:t.id;default:return e}},tableStatusData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.TOGGLE_TABLE:var n=e.slice();return n[t.id]=!n[t.id],n;default:return e}},tableData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.ADD_TABLE_ITEM:for(var n=[],a=0;a<16;a++)n.push(e[a].slice());return n[t.tableId].push(t.item),n;case s.DELETE_TABLE_ITEM:n=[];for(var l=0;l<16;l++)n.push(e[l].slice());return console.log(t),n[t.tableId].splice(t.id,1),n;case s.TOGGLE_TABLE:n=[];for(var r=0;r<16;r++)n.push(e[r].slice());return n[t.id]=[],n;default:return e}}}),M=Object(i.c)(I);c.a.render(l.a.createElement(o.a,{store:M},l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b1c1eb8a.chunk.js.map