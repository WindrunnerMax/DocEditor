(this["webpackJsonpdoc-editor-light"]=this["webpackJsonpdoc-editor-light"]||[]).push([[0],{116:function(e,t,n){},142:function(e,t,n){},180:function(e,t,n){},182:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){},206:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){},305:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){"use strict";function r(){var e=this;Object(p.a)(this,r),this.plugins=void 0,this.commands=void 0,this.add=function(){var t;(t=e.plugins).push.apply(t,arguments)},this.getCommands=function(){return e.commands},this.apply=function(){var t=[],n=[],r=[],i=[];return e.plugins.sort((function(e,t){return(t.priority||0)-(e.priority||0)})),e.plugins.forEach((function(c){c.type===g.BLOCK?t.push(c):c.type===g.INLINE&&n.push(c),c.command&&x(c.key,c.command,e.commands),c.isVoid&&r.push(c.key),c.onKeyDown&&i.push(c)})),{renderElement:function(e){var n,r={props:e,classList:[],element:e.element,children:e.children},i=Object(j.a)(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;if(c.match(e)&&c.render){r.children=Object(O.jsxs)(O.Fragment,{children:[e.children,Object(O.jsx)("div",{contentEditable:!1,children:c.render(r)})]});break}}}catch(e){i.e(e)}finally{i.f()}for(var o=t.length-1;0<=o;o--){var a=t[o];a.match(e)&&a.renderLine&&(r.children=a.renderLine(r))}return Object(O.jsx)("div",Object(m.a)(Object(m.a)({},e.attributes),{},{className:r.classList.join(" "),children:r.children}))},renderLeaf:function(e){var t,r={props:e,element:e.text,classList:[],children:e.children},i=Object(j.a)(n);try{for(i.s();!(t=i.n()).done;){var c=t.value;c.match(e)&&c.render&&(r.children=c.render(r))}}catch(e){i.e(e)}finally{i.f()}return Object(O.jsx)("span",Object(m.a)(Object(m.a)({},e.attributes),{},{className:r.classList.join(" "),children:r.children}))},onKeyDown:function(e){if(!e.nativeEvent.isComposing){var t,n=Object(j.a)(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.onKeyDown&&r.onKeyDown(e)===y.STOP)break}}catch(e){n.e(e)}finally{n.f()}}},withVoidElements:function(e){return e.isVoid=function(e){var t,n=Object(j.a)(r);try{for(n.s();!(t=n.n()).done;)if(e[t.value])return!0}catch(e){n.e(e)}finally{n.f()}return!1},e},commands:e.commands}};for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.plugins=n,this.commands={}}function i(e){return null==e}n.r(t);t=n(14);var c=n.n(t),o=n(171),a=n(86),l=n(2),d=(n(180),n(0)),s=n(1),u=n(23),h=n(311),b=n(167),f=n(144),m=n(27),j=n(9),p=n(43),x=function(e,t,n){n[e]=t},v=function(e,t,n,r){return t[n]&&t[n](e,n,r)},O=n(3),g={BLOCK:"BLOCK",INLINE:"INLINE"},y={STOP:!0},k=n(21),N=(n(182),Object.prototype.toString);function w(e){return"[object Object]"===N.call(e)}function K(e,t){return s.a.isBlock(e,t)}function C(e){return s.h.isText(e)}var I=n(145),E=function(e){return(e=q(e))&&2<=e.path.length},L=function(e,t,n,r){t=t.split(".");var i=(t=Object(I.a)(t))[0],c=t.slice(1);if(!(t=q(e,{at:r,key:i})))return!1;for(var o=t.block[i],a=0,l=c.length;a<l;++a){if(!w(o))return!1;o=o[c[a]]}return o===n},D=function(e){return!s.a.isEditor(e)&&s.b.isElement(e)},S=function(e){return!(e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e.selection)||s.g.isCollapsed(e)},P=function(e,t){return t=s.a.start(e,t),S(e,e.selection)&&s.f.equals(t,e.selection.anchor)},B=function(e){e=e.key;for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return-1<n.indexOf(e)};function T(e,t,n){t=1<arguments.length&&void 0!==t?t:"last";var r=(n=2<arguments.length?n:void 0).at,i=n.wrapKey,c=n.itemKey;i=n.wrapNode||q(e,{at:r,key:i}),n=n.itemNode||q(e,{at:r,key:c});if(i&&n&&i.block.children.length)return e=i.block.children,"last"===t?e[e.length-1]===n.block:"first"===t?e[0]===n.block:e[0]===n.block||e[e.length-1]===n.block}function M(e,t){var n=t.at,r=t.wrapKey,i=t.itemKey;r=t.wrapNode||q(e,{at:n,key:r}),t=t.itemNode||q(e,{at:n,key:i});return r&&t&&r.block.children.length&&-1<r.block.children.indexOf(t.block)}function A(e){var t=Object(u.f)(),n=Object(d.useRef)(!1),r=Object(d.useRef)(null),i=Object(d.useState)(!1),c=(i=Object(l.a)(i,2))[0],o=i[1],a=(i=Object(d.useState)(!1),(i=Object(l.a)(i,2))[0]),b=i[1],f=(Object(d.useEffect)((function(){var e,t=r.current;t&&(a&&!c?(e=Ee())&&(t.style.opacity="1",t.style.top="".concat(e.top+window.pageYOffset-t.offsetHeight-10,"px"),t.style.left="".concat(e.left+window.pageXOffset-t.offsetWidth/2+e.width/2,"px")):Ie(t))}),[c,a,t]),Object(d.useEffect)((function(){var e,t;if(r.current)return e=function(){n.current||o(!1)},t=function(){n.current||o(!0)},document.addEventListener("mouseup",e),document.addEventListener("mousedown",t),function(){document.removeEventListener("mouseup",e),document.removeEventListener("mousedown",t)}}),[]),Object(d.useEffect)((function(){!t.selection||S(t)||""===s.a.string(t,t.selection)?b(!1):b(!0)}),[t,t.selection]),Object(h.a)((function(i,c){function o(){r.current&&Ie(r.current),J(t)}i=i.split(".");var a=(i=Object(l.a)(i,2))[0],d=(i=i[1],{left:0,top:0});(a=(r.current&&(d.top=r.current.offsetTop+r.current.offsetHeight/2,d.left=r.current.offsetLeft+r.current.offsetWidth/2),v(t,e.commands,a,{extraKey:i,event:c,position:d})))?(n.current=!0,a.then((function(){n.current=!1,o()}))):o()})));i=Object(d.useMemo)((function(){return Object(O.jsx)(ie.a,{className:"menu-toolbar-menu-container",onClickMenuItem:f,selectable:!1,onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},mode:"vertical",children:De})}),[f]);return e.isRender?null:Object(O.jsx)(Le,{children:Object(O.jsx)("div",{ref:r,className:"hover-menu-container",children:i})})}function R(e){var t=Object(We.a)(),n=(t=Object(l.a)(t,1)[0],i(e.top)?0:e.top+30),r=i(e.left)?0:e.left-150,c=e.top||e.left?"absolute":void 0;return Object(O.jsx)("div",{className:"hyper-link-menu",style:{left:r,top:n,position:c},children:Object(O.jsxs)(qe.a,{initialValues:e.config,form:t,size:"small",labelCol:{span:7,offset:0},wrapperCol:{span:17,offset:0},labelAlign:"left",onSubmit:function(t){return e.onConfirm&&e.onConfirm(t)},children:[Object(O.jsx)(qe.a.Item,{label:"\u94fe\u63a5\u5730\u5740",field:"href",children:Object(O.jsx)(Ve.a,{placeholder:"Enter href"})}),Object(O.jsxs)(qe.a.Item,{className:"hyper-link-menu-row",wrapperCol:{span:24,offset:0},children:[Object(O.jsx)(qe.a.Item,{label:"\u65b0\u9875\u9762\u6253\u5f00",field:"blank",children:Object(O.jsx)(Re.a,{defaultChecked:e.config.blank})}),Object(O.jsx)(qe.a.Item,{className:"hyper-link-menu-submit",children:Object(O.jsx)(Ae.a,{htmlType:"submit",type:"primary",children:"\u786e\u5b9a"})})]})]})})}var q=function(e){var t=(r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).at,n=r.key,r=r.above;return(t=s.a.above(e,{match:function(t){return s.a.isBlock(e,t)&&(!n||W(t,n))},at:t,mode:r?"highest":"lowest"}))?{block:(r=Object(l.a)(t,2))[0],path:r[1]}:null},V=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n={};return e.forEach((function(e){return-1===t.indexOf(e)&&(n[e]=void 0)})),{record:n,list:Object.keys(n)}},W=function(e,t){return D(e)&&!!e[t]},J=function(e,t,n){u.b.focus(e),t?(s.i.select(e,t),s.i.collapse(e,{edge:n||"end"})):s.i.collapse(e,{edge:"focus"})},F=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.at,i=n.node,c=n.key;i?s.i.setNodes(e,t,{match:function(e){return e===i}}):s.i.setNodes(e,t,{at:r,match:function(t){return K(e,t)&&(!c||W(t,c))}})},G=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.at,i=n.node,c=n.key;i?s.i.unsetNodes(e,t,{match:function(e){return e===i}}):s.i.unsetNodes(e,t,{at:r,match:function(t){return K(e,t)&&(!c||W(t,c))}})},H=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.at,i=n.node;i?s.i.setNodes(e,t,{match:function(e){return e===i},split:!0}):s.i.setNodes(e,t,{match:C,split:!0,at:r})},Z=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.at,i=n.node;i?s.i.unsetNodes(e,t,{match:function(e){return e===i}}):s.i.unsetNodes(e,t,{match:C,split:!0,at:r})},z=function(e,t,n){var r=(3<arguments.length&&void 0!==arguments[3]?arguments[3]:{}).at;t=Object(m.a)(Object(m.a)({},t),{},{children:[]});s.i.wrapNodes(e,t,{match:function(t){return K(e,t)},at:r}),F(e,n,{at:r})},X=function(e,t){G(e,[t.itemKey],{key:t.itemKey}),s.i.unwrapNodes(e,{match:function(e){return W(e,t.wrapKey)},split:!0})},Y=function(e,t,n,r){t&&!n?s.i.unwrapNodes(e,{match:function(e){return e===t.block},split:!0}):!t&&n&&G(e,[r],{node:n.block})},$=(n(58),n(26)),_=n(153),Q=n(152),U=n(151),ee=n(150),te=n(149),ne=n(148),re=n(147),ie=(n(143),n(18)),ce=n(146),oe=(n(116),function(e){var t=Object(d.useState)(!1),n=(t=Object(l.a)(t,2))[0],r=t[1],i=Object(O.jsxs)(ie.a,{onClickMenuItem:function(t){r(!1);t=t.split(".");var n=(t=Object(l.a)(t,2))[0],i=(t=t[1],u.b.findPath(e.editor,e.element));J(e.editor,i),v(e.editor,e.commands,n,{extraKey:t,path:i})},className:"doc-menu-popup",children:[Object(O.jsxs)(ie.a.Item,{children:[Object(O.jsx)(ce.a,{}),"\u4e00\u7ea7\u6807\u9898"]},"heading.h1"),Object(O.jsxs)(ie.a.Item,{children:[Object(O.jsx)(re.a,{}),"\u4e8c\u7ea7\u6807\u9898"]},"heading.h2"),Object(O.jsxs)(ie.a.Item,{children:[Object(O.jsx)(ne.a,{}),"\u4e09\u7ea7\u6807\u9898"]},"heading.h3"),Object(O.jsxs)(ie.a.Item,{children:[Object(O.jsx)(te.a,{}),"\u5757\u7ea7\u5f15\u7528"]},"quote-block"),Object(O.jsxs)(ie.a.Item,{children:[Object(O.jsx)(ee.a,{}),"\u9ad8\u4eae\u5757"]},"highlight-block"),Object(O.jsxs)(ie.a.Item,{children:[Object(O.jsx)(U.a,{}),"\u6709\u5e8f\u5217\u8868"]},"ordered-list"),Object(O.jsxs)(ie.a.Item,{children:[Object(O.jsx)(Q.a,{}),"\u65e0\u5e8f\u5217\u8868"]},"unordered-list"),Object(O.jsxs)(ie.a.Item,{children:[Object(O.jsx)(a.a,{}),"\u5206\u5272\u7ebf"]},"dividing-line")]});return Object(O.jsx)($.b,{popup:function(){return i},position:"bottom",popupVisible:n,onVisibleChange:r,children:Object(O.jsx)("span",{className:"doc-icon-plus",onMouseDown:function(e){return e.preventDefault()},children:Object(O.jsx)(_.a,{})})})}),ae=["quote-block","ordered-list","unordered-list","dividing-line","highlight-block"],le={"quote-block-item":12,"highlight-block-item":8},de=n(10),se=(n(197),n(312)),ue="Backspace",he="Enter",be=" ",fe="Tab",me="heading",je=function(e,t,n){w(n)&&n.path&&(L(e,"".concat(me,".type"),n.extraKey)?G(e,[me],{at:n.path}):F(e,Object(de.a)({},t,{type:n.extraKey,id:Object(se.a)().slice(0,8)}),{at:n.path}))},pe="bold",xe=(t=n(163),n(162)),ve=n(161),Oe=n(112),ge=n(160),ye=n(159),ke=n(158),Ne=n(157),we=n(156),Ke=n(155),Ce=n(154),Ie=function(e){e.style.opacity="0",e.style.left="-1000px",e.style.top="-1000px"},Ee=function(){var e=window.getSelection();return e?e.getRangeAt(0).getBoundingClientRect():null},Le=function(e){return e=e.children,"object"==typeof document?c.a.createPortal(e,document.body):null},De=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)(Ce.a,{})},"paragraph"),Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)(Ke.a,{})},"bold"),Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)(we.a,{})},"italic"),Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)(Ne.a,{})},"under-line"),Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)(ke.a,{})},"strike-through"),Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)(ye.a,{})},"inline-code"),Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)(ge.a,{})},"link"),Object(O.jsxs)(ie.a.SubMenu,{title:Object(O.jsx)(Oe.a,{}),popup:!0,triggerProps:{trigger:"click",position:"bottom"},children:[Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)("div",{className:"align-menu-center",children:Object(O.jsx)(Oe.a,{})})},"align.left"),Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)("div",{className:"align-menu-center",children:Object(O.jsx)(ve.a,{})})},"align.center"),Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)("div",{className:"align-menu-center",children:Object(O.jsx)(xe.a,{})})},"align.right"),Object(O.jsx)(ie.a.Item,{children:Object(O.jsx)("div",{className:"align-menu-center",children:Object(O.jsx)(t.a,{})})},"align.justify")]},"align")]}),Se=(n(198),"quote-block"),Pe="quote-block-item",Be=function(e,t,n){w(n)&&n.path&&(L(e,Se,!0,n.path)?X(e,{wrapKey:Se,itemKey:Pe}):E(e)||z(e,Object(de.a)({},Se,!0),Object(de.a)({},Pe,!0)))},Te=n(164),Me=(n(199),function(){function e(){Object(p.a)(this,e),this.id=void 0,this.container=void 0,this.mask=void 0,this.node=void 0,this.id=Object(se.a)(),this.container=document.createElement("div"),this.container.id=this.id,this.container.className="popup-container",this.mask=document.createElement("div"),this.container.appendChild(this.mask),this.mask.className="popup-container-mask",this.node=document.createElement("div"),this.container.appendChild(this.node),this.node.className="popup-container-node",document.body.appendChild(this.container)}return Object(Te.a)(e,[{key:"mount",value:function(e){this.node&&c.a.render(e,this.node)}},{key:"onMaskClick",value:function(e){var t=this;this.mask&&(this.mask.onclick=function(){e(),t.destroy()})}},{key:"close",value:function(){this.node&&c.a.unmountComponentAtNode(this.node)}},{key:"destroy",value:function(){this.close(),this.node&&this.container&&this.mask&&(this.container.removeChild(this.mask),this.container.removeChild(this.node),document.body.removeChild(this.container)),this.container=this.mask=this.node=null}}]),e}()),Ae=(n(93),n(40)),Re=(n(200),n(173)),qe=(n(308),n(56)),Ve=(n(204),n(172)),We=(n(206),n(55)),Je=(R.defaultProps={},R);function Fe(e){if(i(e))throw new Error("assert value is empty");return e}function Ge(e,t,n){var r=[],i={};W(t,rt)&&(t.children.forEach((function(t,c){var o,a;!K(e,t)||(t=t[it])&&(o=t.level,t=t.start,i[o]=(i[o]||0)+1,(a=i[o])!==t&&r.push((function(){F(e,Object(de.a)({},it,{level:o,start:a}),{at:[].concat(Object(k.a)(n),[c])})})))})),r.forEach((function(e){return e()})))}function He(e){var t=Object(d.useMemo)((function(){return Object(b.a)(Object(u.h)(Object(s.j)()))}),[]),n=ht,i=Object(h.a)(Object(f.debounce)((function(e){}),500)),c=(x=Object(d.useMemo)((function(){var n,i,c,o,a,d,u,h,b,f,p,x,K=new r({key:"paragraph",type:g.BLOCK,priority:11,match:function(){return!0},renderLine:function(e){return Object(O.jsx)("div",{className:"doc-line",onClick:function(e){return e.stopPropagation()},children:e.children})},command:function(e){if(e.selection){for(var t=[],n=s.a.fragment(e,e.selection),r=[Object(l.a)(n,1)[0]];r.length;){var i=r.shift();i&&(c=i.children,"[object Array]"===N.call(c)&&r.push.apply(r,Object(k.a)(i.children)),i.text&&(c=Object.keys(i),t.push.apply(t,Object(k.a)(V(c,["text"]).list))))}Z(e,t)}var c}},(u=t,{key:me,type:g.BLOCK,command:je,match:function(e){return!!e.element[me]},renderLine:function(e){var t=e.props.element[me];if(!t)return e.children;var n=t.id;switch(t.type){case"h1":return Object(O.jsx)("h1",{className:"doc-heading",id:n,children:e.children});case"h2":return Object(O.jsx)("h2",{className:"doc-heading",id:n,children:e.children});case"h3":return Object(O.jsx)("h3",{className:"doc-heading",id:n,children:e.children});default:return e.children}},onKeyDown:function(e){if(B(e,ue,he)&&S(u,u.selection)){if(n=q(u)){var t=n.block,n=n.path;if(!t[me])return;D(t)&&(e.key===ue&&P(u,n)&&(G(u,[me],{at:n}),e.preventDefault()),e.key===he&&function(e,t){return t=s.a.end(e,t),S(e,e.selection)&&s.f.equals(t,e.selection.anchor)}(u,n)&&(n=function(e,t){if(!e)return{};var n=t||[],r=(n.push("children"),{});return Object.keys(e).filter((function(e){return-1===n.indexOf(e)})).forEach((function(t){return r[t]=e[t]})),r}(t,[me]),E(u)?(s.i.insertNodes(u,Object(m.a)(Object(m.a)({},n),{},{children:[{text:" "}]}),{at:u.selection.focus,select:!1}),s.i.move(u,{distance:1}),Promise.resolve().then((function(){return u.deleteForward("character")}))):s.i.insertNodes(u,Object(m.a)(Object(m.a)({},n),{},{children:[{text:""}]})),e.preventDefault()))}return y.STOP}}}),{key:pe,type:g.INLINE,match:function(e){return!!e.leaf[pe]},command:function(e,t){s.i.setNodes(e,Object(de.a)({},t,!0),{match:function(e){return s.h.isText(e)},split:!0})},render:function(e){return Object(O.jsx)("strong",{children:e.children})}},(d=t,{key:Se,type:g.BLOCK,match:function(e){return!!e.element[Se]},renderLine:function(e){return Object(O.jsx)("blockquote",{className:"doc-quote-block",children:e.children})},command:Be,onKeyDown:function(e){if(B(e,ue,he)&&S(d,d.selection)){var t=q(d,{key:Se}),n=q(d,{key:Pe});if(Y(d,t,n,Pe),n&&t&&M(d,{wrapNode:t,itemNode:n}))return P(d,n.path)&&T(d,"or",{wrapNode:t,itemNode:n})&&(X(d,{wrapKey:Se,itemKey:Pe}),e.preventDefault()),y.STOP}}}),(a=e.isRender,{key:Xe,type:g.INLINE,match:function(e){return!!e.leaf[Xe]},command:function(e,t,n){var r,i={href:"",blank:!0};if(n&&n.position)return r=n.position,new Promise((function(n){var c=new Me;c.onMaskClick((function(){return n()})),c.mount(Object(O.jsx)(Je,{config:i,left:r.left,top:r.top,onConfirm:function(r){i.href=r.href,i.blank=r.blank,H(e,Object(de.a)({},t,i)),c.destroy(),n()}}))})).catch((function(){}))},render:function(e){var t=Fe(e.props.leaf[Xe]);return a?Object(O.jsx)("a",{className:"hyper-link",href:t.href,target:t.blank?"_blank":void 0,children:e.children}):Object(O.jsx)(Ye,{config:t,element:e.element,children:e.children})}}),{key:$e,type:g.INLINE,match:function(e){return!!e.leaf[$e]},command:function(e,t){H(e,Object(de.a)({},t,!0))},render:function(e){return Object(O.jsx)("u",{children:e.children})}},{key:_e,type:g.INLINE,match:function(e){return!!e.leaf[_e]},command:function(e,t){H(e,Object(de.a)({},t,!0))},render:function(e){return Object(O.jsx)("del",{children:e.children})}},{key:Qe,type:g.INLINE,match:function(e){return!!e.leaf[Qe]},command:function(e,t){H(e,Object(de.a)({},t,!0))},render:function(e){return Object(O.jsx)("em",{children:e.children})}},{key:Ue,type:g.INLINE,match:function(e){return!!e.leaf[Ue]},command:function(e,t){H(e,Object(de.a)({},t,!0))},render:function(e){return Object(O.jsx)("code",{className:"slate-inline-code",children:e.children})}},(o=t,{key:rt,type:g.BLOCK,match:function(e){return W(e.element,rt)||W(e.element,it)},renderLine:function(e){var t;return W(e.element,rt)?Object(O.jsx)("ol",{className:"doc-ordered-list",children:e.children}):(t=Fe(e.element[it]),Object(O.jsx)("li",{className:"doc-ordered-item ordered-li-".concat(t.level),value:t.start,children:e.children}))},command:ct,onKeyDown:function(e){if(B(e,ue,he,fe)&&S(o,o.selection)){var t=q(o,{key:rt}),n=q(o,{key:it});if(Y(o,t,n,it),n&&t&&M(o,{wrapNode:t,itemNode:n})){var r=(i=Fe(n.block[it])).level,i=i.start;if(e.key===fe)return r<3&&F(o,Object(de.a)({},it,{start:i,level:r+1}),{node:n.block}),tt(o),e.preventDefault(),y.STOP;if(P(o,n.path)){if(1<r)return F(o,Object(de.a)({},it,{start:i,level:r-1}),{node:n.block}),tt(o),e.preventDefault(),y.STOP;if(T(o,"or",{wrapNode:t,itemNode:n}))return X(o,{wrapKey:rt,itemKey:it}),nt(o),e.preventDefault(),y.STOP;if(B(e,ue))return o.deleteBackward("block"),tt(o),e.preventDefault(),y.STOP}return e.key===he&&(s.i.splitNodes(o,{always:!0}),tt(o),e.preventDefault()),y.STOP}}}}),(c=t,{key:ot,type:g.BLOCK,match:function(e){return W(e.element,ot)||W(e.element,at)},renderLine:function(e){var t;return W(e.element,ot)?Object(O.jsx)("ul",{className:"doc-unordered-list",children:e.children}):(t=Fe(e.element[at]),Object(O.jsx)("li",{className:"doc-unordered-item unordered-li-".concat(t.level),children:e.children}))},command:lt,onKeyDown:function(e){if(B(e,ue,he,fe)&&S(c,c.selection)){var t,n=q(c,{key:ot}),r=q(c,{key:at});if(Y(c,n,r,at),r&&n&&M(c,{wrapNode:n,itemNode:r}))return t=Fe(r.block[at]).level,e.key===fe?(t<3&&F(c,Object(de.a)({},at,{level:t+1}),{node:r.block}),e.preventDefault()):P(c,r.path)&&(1<t?(F(c,Object(de.a)({},at,{level:t-1}),{node:r.block}),e.preventDefault()):T(c,"or",{wrapNode:n,itemNode:r})&&(X(c,{wrapKey:ot,itemKey:at}),e.preventDefault())),y.STOP}}}),{key:st,isVoid:!0,type:g.BLOCK,command:function(e,t){var n;s.i.insertNodes(e,(n={},Object(de.a)(n,t,!0),Object(de.a)(n,"children",[{text:""}]),n)),s.i.insertNodes(e,{children:[{text:""}]})},match:function(e){return W(e.element,st)},render:function(){return Object(O.jsx)(ut,{})}},{key:bt,type:g.BLOCK,command:ft,match:function(e){return!!e.element[bt]},renderLine:function(e){var t=e.props.element[bt];return t&&"left"!==t&&e.classList.push("align-"+t),e.children}},(n=t,i=e.isRender,{key:pt,type:g.BLOCK,match:function(e){return!!e.element[pt]},renderLine:function(e){var t=Fe(e.props.element[pt]);return Object(O.jsx)(jt,{editor:n,element:e.element,config:t,isRender:i,children:e.children})},command:function(e,t,n){w(n)&&n.path&&(L(e,pt,!0,n.path)?X(e,{wrapKey:pt,itemKey:xt}):E(e)||z(e,Object(de.a)({},pt,{border:mt[0].border,background:mt[0].background}),Object(de.a)({},xt,!0)))},onKeyDown:function(e){if(B(e,ue,he)&&S(n,n.selection)){var t=q(n,{key:pt}),r=q(n,{key:xt});if(Y(n,t,r,xt),r&&t&&M(n,{wrapNode:t,itemNode:r}))return P(n,r.path)&&T(n,"or",{wrapNode:t,itemNode:r})&&(X(n,{wrapKey:pt,itemKey:xt}),e.preventDefault()),y.STOP}}})),C=K.getCommands();return K.add((f=t,p=e.isRender,x=C,{key:"doc-toolbar",priority:13,type:g.BLOCK,match:function(){return!0},renderLine:function(e){if(p)return e.children;var t,n=Object(j.a)(ae);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e.element[r])return e.children}}catch(e){n.e(e)}finally{n.f()}for(var i=0,c=0,o=Object.keys(le);c<o.length;c++){var a=o[c];if(e.element[a]){i=le[a]||0;break}}return Object(O.jsx)($.b,{popup:function(){return Object(O.jsx)(oe,{editor:f,commands:x,element:e.element})},position:"left",popupAlign:{left:i},mouseLeaveDelay:200,mouseEnterDelay:200,children:Object(O.jsx)("div",{children:e.children})})}}),(h=t,b=C,{key:"shortcut",type:g.BLOCK,priority:50,match:function(){return!1},onKeyDown:function(e){var t,n,r;B(e,be)&&S(h,h.selection)&&(t=q(h))&&(n=h.selection.anchor,t=t.path,n={anchor:n,focus:s.a.start(h,t)},r=s.a.string(h,n),(r=et[r.trim()])&&(s.i.select(h,n),s.i.delete(h),n=r.split("."),n=(r=Object(l.a)(n,2))[0],r=r[1],v(h,b,n,{extraKey:r,path:t}),e.preventDefault()))}})),K.apply()}),[t,e.isRender])).renderElement,o=x.renderLeaf,a=x.onKeyDown,p=x.withVoidElements,x=x.commands,K=Object(d.useMemo)((function(){return p(t)}),[t,p]);return Object(O.jsxs)(u.c,{editor:K,value:n,onChange:i,children:[Object(O.jsx)(A,{isRender:e.isRender,commands:x}),Object(O.jsx)(u.a,{renderElement:c,renderLeaf:o,readOnly:e.isRender,placeholder:"Enter text ...",onKeyDown:a})]})}function Ze(e){return String(e).replace(/-storage$/g,"")+"-storage"}function ze(){var e=Object(d.useState)(vt().get(Ot)||0),t=(e=Object(l.a)(e,2))[0],n=e[1];return Object(d.useEffect)((function(){switch(t){case 0:gt.matches?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme"),gt.onchange=kt;break;case 1:gt.onchange=null,document.body.removeAttribute("arco-theme");break;case 2:gt.onchange=null,document.body.setAttribute("arco-theme","dark")}}),[t]),Object(O.jsx)("div",{onClick:function(){var e=(t+1)%yt.length;n(e),vt().set(Ot,e)},children:yt[t]})}var Xe="link",Ye=function(e){function t(t){o(!1);var n=u.b.findPath(r,e.element);H(r,Object(de.a)({},Xe,t),{at:n})}var n=e.config,r=Object(u.g)(),i=Object(d.useState)(!1),c=(i=Object(l.a)(i,2))[0],o=i[1];return Object(O.jsx)($.b,{popup:function(){return Object(O.jsx)(Je,{config:n,onConfirm:t})},position:"bottom",trigger:"click",popupVisible:c,onVisibleChange:o,children:Object(O.jsx)("span",{className:"hyper-link",onClick:function(e){e.preventDefault()},children:e.children})})},$e="under-line",_e="strike-through",Qe="italic",Ue=(n(302),"inline-code"),et={"1.":"ordered-list","-":"unordered-list","*":"unordered-list",">":"quote-block","#":"heading.h1","##":"heading.h2","###":"heading.h3","---":"dividing-line"},tt=(n(303),function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e.selection;S(e,t)&&(t=q(e,{key:rt}))&&Ge(e,t.block,t=t.path)}),nt=function(e){var t;S(e,e.selection)&&(t=q(e,{at:e.selection}))&&(t=function(e){var t=(r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).at,n=r.key,r=r.above;return(t=s.a.next(e,{match:function(t){return s.a.isBlock(e,t)&&(!n||W(t,n))},at:t,mode:r?"highest":"lowest"}))?{block:(r=Object(l.a)(t,2))[0],path:r[1]}:null}(e,{at:t.path,key:rt}))&&Ge(e,t.block,t.path)},rt="ordered-list",it="ordered-list-item",ct=function(e,t,n){w(n)&&n.path&&(L(e,rt,!0,n.path)?(X(e,{wrapKey:rt,itemKey:it}),nt(e)):z(e,Object(de.a)({},rt,!0),Object(de.a)({},it,{start:1,level:1})))},ot=(n(304),"unordered-list"),at="unordered-list-item",lt=function(e,t,n){w(n)&&n.path&&(L(e,ot,!0,n.path)?X(e,{wrapKey:ot,itemKey:at}):z(e,Object(de.a)({},ot,!0),Object(de.a)({},at,{level:1})))},dt=(n(305),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return"[object String]"===N.call(e)})).join(" ")}),st="dividing-line",ut=function(){var e=Object(u.e)(),t=Object(u.d)();return Object(O.jsx)("div",{className:dt("dividing-line",t&&e&&"selected")})},ht=[{children:[{text:"\u6587\u6863\u7f16\u8f91\u5668"}],heading:{id:"01f0de8f",type:"h1"},align:"center"},{children:[{text:"Github",link:{href:"https://github.com/WindrunnerMax/DocEditor",blank:!0}},{text:" \uff5c "},{text:"Editor DEMO",link:{href:"https://windrunnermax.github.io/DocEditor/",blank:!0}},{text:" \uff5c "},{text:"BLOG",link:{href:"https://github.com/WindrunnerMax/EveryDay/blob/master/Plugin/\u57fa\u4e8eslate\u6784\u5efa\u6587\u6863\u7f16\u8f91\u5668.md",blank:!0}}],align:"center"},{children:[{text:"\u57fa\u4e8e"},{text:"slate.js","inline-code":!0},{text:"\u6784\u5efa\u7684\u6587\u6863\u7f16\u8f91\u5668\uff0c\u6240\u6709\u529f\u80fd\u90fd\u662f\u57fa\u4e8e\u63d2\u4ef6\u5b9a\u4e49\u5b9e\u73b0\uff0c\u901a\u8fc7\u53f3\u4e0a\u89d2\u6309\u94ae\u5207\u6362\u7f16\u8f91\u6a21\u5f0f\u4e0e\u9884\u89c8\u6a21\u5f0f\uff0c\u6240\u89c1\u5373\u6240\u5f97\uff0c\u5f53\u524d\u9875\u9762\u4e5f\u5b9e\u73b0\u4e86\u4eae\u8272\u4e0e\u6697\u8272\u6a21\u5f0f\u7684\u9002\u914d\u3002"}]},{children:[{text:"\u884c\u5185\u5143\u7d20"}],heading:{type:"h2",id:"83ddface"}},{children:[{text:"\u652f\u6301"},{text:"\u52a0\u7c97",bold:!0},{text:"\u3001"},{text:"\u659c\u4f53",italic:!0},{text:"\u3001"},{text:"\u4e0b\u5212\u7ebf","under-line":!0},{text:"\u3001"},{text:"\u5220\u9664\u7ebf","strike-through":!0},{text:"\u3001"},{text:"\u884c\u5185\u4ee3\u7801\u5757","inline-code":!0},{text:"\u3001"},{text:"\u8d85\u94fe\u63a5",link:{href:"https://github.com/WindrunnerMax/DocEditor",blank:!0}},{text:"\u3001\u6587\u5b57\u5bf9\u9f50\u3002"}],align:"center"},{children:[{text:"\u5757\u7ea7\u5143\u7d20"}],heading:{id:"4644b757",type:"h2"}},{children:[{text:"\u6807\u9898"}],heading:{type:"h3",id:"213e6703"}},{children:[{text:"\u652f\u6301"},{text:"h1~h3","inline-code":!0},{text:"\u7684\u4e09\u7ea7\u6807\u9898\uff0c\u5feb\u6377\u952e\u5524\u8d77 \u4e00\u7ea7\u6807\u9898"},{text:"# ","inline-code":!0},{text:"\u3001\u4e8c\u7ea7\u6807\u9898"},{text:"## ","inline-code":!0},{text:"\u3001\u4e09\u7ea7\u6807\u9898"},{text:"### ","inline-code":!0},{text:"\u3002"}]},{children:[{text:"\u5f15\u7528\u5757"}],heading:{type:"h3",id:"8426a51b"}},{"quote-block":!0,children:[{children:[{text:"\u652f\u6301\u5f15\u7528\u5757\u3002"}],"quote-block-item":!0},{"unordered-list":!0,children:[{"quote-block-item":!0,children:[{text:"\u53ef\u4ee5\u5d4c\u5957\u5176\u4ed6\u683c\u5f0f\u3002"}],"unordered-list-item":{level:1}},{"quote-block-item":!0,"unordered-list-item":{level:1},children:[{text:"\u652f\u6301\u5feb\u6377\u952e"},{text:"> ","inline-code":!0},{text:"\u3002"}]}]}]},{children:[{text:"\u65e0\u5e8f\u5217\u8868"}],heading:{type:"h3",id:"a764a9a0"}},{children:[{text:"\u652f\u6301"},{text:"3","inline-code":!0},{text:"\u7ea7\u65e0\u5e8f\u5217\u8868\uff0c\u5feb\u6377\u952e\u5524\u8d77\u65e0\u5e8f\u5217\u8868"},{text:"* ","inline-code":!0},{text:"\u3001"},{text:"- ","inline-code":!0},{text:"\uff0c\u4e0b\u4e00\u7ea7\u65e0\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"unordered-list":!0,children:[{children:[{text:"\u4e00\u7ea7\u65e0\u5e8f\u5217\u8868\u3002"}],"unordered-list-item":{level:1}},{"unordered-list-item":{level:2},children:[{text:"\u4e8c\u7ea7\u65e0\u5e8f\u5217\u8868\u3002"}]},{"unordered-list-item":{level:3},children:[{text:"\u4e09\u7ea7\u65e0\u5e8f\u5217\u8868\u3002"}]}]},{children:[{text:"\u6709\u5e8f\u5217\u8868"}],heading:{type:"h3",id:"400aa7e1"}},{children:[{text:"\u652f\u6301"},{text:"3","inline-code":!0},{text:"\u7ea7\u6709\u5e8f\u5217\u8868\uff0c\u6709\u5e8f\u5217\u8868\u5404\u7ea7\u5355\u72ec\u8ba1\u6570\uff0c\u5feb\u6377\u952e\u5524\u8d77\u6709\u5e8f\u5217\u8868"},{text:"1. ","inline-code":!0},{text:"\uff0c\u4e0b\u4e00\u7ea7\u6709\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"ordered-list":!0,children:[{children:[{text:"\u4e00\u7ea7\u6709\u5e8f\u5217\u8868\u3002"}],"ordered-list-item":{start:1,level:1}},{"ordered-list-item":{level:2,start:1},children:[{text:"\u4e8c\u7ea7\u6709\u5e8f\u5217\u8868\u3002"}]},{"ordered-list-item":{level:3,start:1},children:[{text:"\u4e09\u7ea7\u6709\u5e8f\u5217\u8868\u3002"}]}]},{children:[{text:"\u5206\u5272\u7ebf"}],heading:{type:"h3",id:"5ab77ffb"}},{children:[{text:"\u652f\u6301\u5206\u5272\u7ebf\uff0c\u5feb\u6377\u952e"},{text:"--- ","inline-code":!0},{text:"\u3002"}]},{"dividing-line":!0,children:[{text:""}]},{children:[{text:"\u9ad8\u4eae\u5757"}],heading:{type:"h3",id:"af869b51"}},{"highlight-block":{border:"var(--blue-6)",background:"var(--blue-3)"},children:[{children:[{text:"\ud83c\udf30 "},{text:"\u4e3e\u4e2a\u6817\u5b50",bold:!0}],"highlight-block-item":!0},{"highlight-block-item":!0,children:[{text:"\u652f\u6301\u9ad8\u4eae\u5757 \u53ef\u4ee5\u7528\u4e8e\u63d0\u793a\u6587\u6863\u4e2d\u7684\u91cd\u8981\u5185\u5bb9"}]}]},{"highlight-block":{background:"var(--green-3)",border:"var(--green-6)"},children:[{children:[{text:"\ud83c\udfdd \u53ef\u4ee5\u4e3a\u9ad8\u4eae\u5757\u66f4\u6362\u4e3b\u9898"}],"highlight-block-item":!0}]},{heading:{type:"h2",id:"82651426"},children:[{text:"\u5feb\u6377\u529f\u80fd"}]},{children:[{text:"\u5feb\u6377\u952e"}],heading:{type:"h3",id:"614d6a4c"}},{children:[{text:"\u652f\u6301\u5feb\u6377\u952e: "}]},{"unordered-list":!0,children:[{children:[{text:"\u4e00\u7ea7\u6807\u9898"},{text:"# ","inline-code":!0},{text:"\u3001\u4e8c\u7ea7\u6807\u9898"},{text:"## ","inline-code":!0},{text:"\u3001\u4e09\u7ea7\u6807\u9898"},{text:"### ","inline-code":!0},{text:"\u3002"}],"unordered-list-item":{level:1}},{"unordered-list":!0,children:[{"unordered-list-item":{level:1},children:[{text:"\u5f15\u7528\u5757"},{text:"> ","inline-code":!0},{text:"\u3002"}]}]},{"unordered-list-item":{level:1},children:[{text:"\u591a\u7ea7\u65e0\u5e8f\u5217\u8868"},{text:"* ","inline-code":!0},{text:"\u3001"},{text:"- ","inline-code":!0},{text:"\uff0c\u4e0b\u7ea7\u65e0\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"unordered-list-item":{level:1},children:[{text:"\u591a\u7ea7\u6709\u5e8f\u5217\u8868"},{text:"1. ","inline-code":!0},{text:"\uff0c\u4e0b\u7ea7\u6709\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"unordered-list-item":{level:1},children:[{text:"\u5206\u5272\u7ebf"},{text:"--- ","inline-code":!0},{text:"\u3002"}]},{"unordered-list-item":{level:1},children:[{text:"\u64a4\u9500"},{text:"Ctrl + Z","inline-code":!0},{text:"\uff0c\u524d\u8fdb"},{text:"Ctrl + Shift + Z","inline-code":!0},{text:"\u3002"}]}]},{children:[{text:"\u5de5\u5177\u680f"}],heading:{type:"h3",id:"0f8a5d9e"}},{children:[{text:"\u5de6\u4fa7\u5de5\u5177\u680f\u53ef\u4ee5\u5524\u8d77\u5feb\u6377\u64cd\u4f5c\uff0c\u9009\u4e2d\u6587\u5b57\u540e\u53ef\u4ee5\u5f39\u51fa\u9876\u90e8\u5de5\u5177\u680f\u3002"}]},{children:[{text:"\u5176\u4ed6"}],heading:{type:"h2",id:"3e92c207"}},{children:[{text:"\u540e\u7eed\u652f\u6301\u5b8c\u5584\u4e2d..."}]}],bt=(n(306),"align"),ft=function(e,t,n){!w(n)||L(e,bt,n.extraKey)||F(e,Object(de.a)({},t,n.extraKey))},mt=(n(142),[{background:"var(--blue-3)",border:"var(--blue-6)"},{background:"var(--green-3)",border:"var(--green-6)"},{background:"var(--orange-3)",border:"var(--orange-6)"},{background:"var(--red-3)",border:"var(--red-6)"},{background:"var(--purple-3)",border:"var(--purple-6)"},{background:"var(--gray-3)",border:"var(--gray-6)"},{background:"var(--magenta-3)",border:"var(--magenta-6)"},{background:"var(--pinkpurple-3)",border:"var(--pinkpurple-6)"},{background:"var(--orangered-3)",border:"var(--orangered-6)"},{background:"var(--cyan-3)",border:"var(--cyan-6)"},{background:"var(--lime-3)",border:"var(--lime-6)"},{background:"var(--gold-3)",border:"var(--gold-6)"},{background:"var(--yellow-3)",border:"var(--yellow-6)"}]),jt=function(e){var t=e.editor,n=e.element,r=e.config,i=e.isRender,c=Object(h.a)((function(e){var r=u.b.findPath(t,n);F(t,Object(de.a)({},pt,mt[e]),{at:r,key:pt})})),o=Object(d.useMemo)((function(){return Object(O.jsx)("div",{className:"highlight-block-selector",children:mt.map((function(e,t){return Object(O.jsx)("div",{className:"selector-item",onClick:function(){return c(t)},style:{borderColor:"rgb(".concat(e.border,")"),backgroundColor:"rgb(".concat(e.background,", 0.4)")}},t)}))})}),[c]);r=Object(O.jsx)("div",{className:"doc-highlight-block",style:{backgroundColor:"rgb(".concat(r.background,", 0.4)"),borderColor:"rgb(".concat(r.border,")")},children:e.children});return i?r:Object(O.jsx)($.b,{position:"top",popup:function(){return o},popupAlign:{top:3},children:r})},pt="highlight-block",xt="highlight-block-item",vt=(Ce=n(170),Ke=n(169),we=n(168),function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"local",t="local"===e||"l"===e?window.localStorage:window.sessionStorage;return{has:function(e){return e=Ze(e),!!t.getItem(e)},get:function(e){e=Ze(e);var n=t.getItem(e);return null===n?null:(n=function(e){try{var t=JSON.parse(e);return Number.isNaN(t.expire)||t.expire&&(new Date).getTime()>t.expire?null:t.origin}catch(e){return null}}(n),null===n&&this.remove(e),n)},set:function(e,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;e=Ze(e),n=function(e,t){return e={origin:e,expire:null},t&&(e.expire=t.getTime()),JSON.stringify(e)}(n,r);return t.setItem(e,n)},remove:function(e){return e=Ze(e),t.removeItem(e)},clear:function(){return t.clear()}}}),Ot="theme-index",gt=window.matchMedia("(prefers-color-scheme: dark)"),yt=[Object(O.jsx)(we.a,{}),Object(O.jsx)(Ke.a,{}),Object(O.jsx)(Ce.a,{})],kt=function(e){e.matches?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme")};c.a.render(Object(O.jsx)((function(){var e=Object(d.useState)(!1),t=(e=Object(l.a)(e,2))[0],n=e[1];return Object(O.jsxs)("div",{className:"doc-editor-container",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("span",{className:"left",children:"Editor"}),Object(O.jsxs)("div",{className:"right",children:[Object(O.jsx)("div",{onClick:function(){return n(!t)},children:t?Object(O.jsx)(a.a,{}):Object(O.jsx)(o.a,{})}),Object(O.jsx)(ze,{})]})]}),Object(O.jsx)("div",{className:"gap"}),Object(O.jsx)("div",{className:dt("editor",t&&"render"),children:Object(O.jsx)("div",{className:"slate-editor",children:Object(O.jsx)(He,{isRender:t})})})]})}),{}),document.getElementById("root"))}},[[307,1,2]]]);