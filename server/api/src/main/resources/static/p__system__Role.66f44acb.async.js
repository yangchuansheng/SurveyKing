(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[7905],{19540:function(mt,se,N){"use strict";N.r(se),N.d(se,{default:function(){return xt}});var Nt=N(57663),J=N(71577),E=N(39428),I=N(3182),kt=N(34792),H=N(48086),Dt=N(71194),Q=N(50146),Kt=N(77576),Ee=N(12028),M=N(94657),$=N(3980),Te=N(57119),Pe=N(49101),Oe=N(36450),B=N(91186),ie=N(80582),b=N(67294),G=N(93224),D=N(11849),w=N(32059),X=N(69610),q=N(54941),T=N(3372),_=N(43028),ee=N(15818),we=N(94184),j=N.n(we),z=N(45598),de=b.createContext(null),je=N(45916),y=N(85893),Le=["className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","expanded","selected","checked","halfChecked"],le="open",ce="close",Ie="---",$e=function(f){(0,_.Z)(h,f);var i=(0,ee.Z)(h);function h(){var e;(0,X.Z)(this,h);for(var o=arguments.length,v=new Array(o),s=0;s<o;s++)v[s]=arguments[s];return e=i.call.apply(i,[this].concat(v)),e.state={dragNodeHighlight:!1},e.selectHandle=void 0,e.onSelectorClick=function(t){var n=e.props.context.onNodeClick;n(t,(0,T.Z)(e)),e.isSelectable()?e.onSelect(t):e.onCheck(t)},e.onSelectorDoubleClick=function(t){var n=e.props.context.onNodeDoubleClick;n(t,(0,T.Z)(e))},e.onSelect=function(t){if(!e.isDisabled()){var n=e.props.context.onNodeSelect;t.preventDefault(),n(t,(0,T.Z)(e))}},e.onCheck=function(t){if(!e.isDisabled()){var n=e.props,a=n.disableCheckbox,l=n.checked,r=e.props.context.onNodeCheck;if(!(!e.isCheckable()||a)){t.preventDefault();var c=!l;r(t,(0,T.Z)(e),c)}}},e.onMouseEnter=function(t){var n=e.props.context.onNodeMouseEnter;n(t,(0,T.Z)(e))},e.onMouseLeave=function(t){var n=e.props.context.onNodeMouseLeave;n(t,(0,T.Z)(e))},e.onContextMenu=function(t){var n=e.props.context.onNodeContextMenu;n(t,(0,T.Z)(e))},e.onDragStart=function(t){var n=e.props.context.onNodeDragStart;t.stopPropagation(),e.setState({dragNodeHighlight:!0}),n(t,(0,T.Z)(e));try{t.dataTransfer.setData("text/plain","")}catch(a){}},e.onDragEnter=function(t){var n=e.props.context.onNodeDragEnter;t.preventDefault(),t.stopPropagation(),n(t,(0,T.Z)(e))},e.onDragOver=function(t){var n=e.props.context.onNodeDragOver;t.preventDefault(),t.stopPropagation(),n(t,(0,T.Z)(e))},e.onDragLeave=function(t){var n=e.props.context.onNodeDragLeave;t.stopPropagation(),n(t,(0,T.Z)(e))},e.onDragEnd=function(t){var n=e.props.context.onNodeDragEnd;t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,(0,T.Z)(e))},e.onDrop=function(t){var n=e.props.context.onNodeDrop;t.preventDefault(),t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,(0,T.Z)(e))},e.onExpand=function(t){var n=e.props.context.onNodeExpand;n(t,(0,T.Z)(e))},e.setSelectHandle=function(t){e.selectHandle=t},e.getNodeChildren=function(){var t=e.props.children,n=(0,z.Z)(t).filter(function(l){return l}),a=ve(n);return n.length!==a.length&&fe(),a},e.getNodeState=function(){var t=e.props.expanded;return e.isLeaf()?null:t?le:ce},e.isLeaf=function(){var t=e.props,n=t.isLeaf,a=t.loaded,l=e.props.context.loadData,r=e.getNodeChildren().length!==0;return n===!1?!1:n||!l&&!r||l&&a&&!r},e.isDisabled=function(){var t=e.props.disabled,n=e.props.context.disabled;return t===!1?!1:!!(n||t)},e.isCheckable=function(){var t=e.props.checkable,n=e.props.context.checkable;return!n||t===!1?!1:n},e.syncLoadData=function(t){var n=t.expanded,a=t.loading,l=t.loaded,r=e.props.context,c=r.loadData,u=r.onNodeLoad;if(!a&&c&&n&&!e.isLeaf()){var d=e.getNodeChildren().length!==0;!d&&!l&&u((0,T.Z)(e))}},e.renderSwitcher=function(){var t=e.props,n=t.expanded,a=t.switcherIcon,l=e.props.context,r=l.prefixCls,c=l.switcherIcon,u=a||c;if(e.isLeaf())return(0,y.jsx)("span",{className:j()("".concat(r,"-switcher"),"".concat(r,"-switcher-noop")),children:typeof u=="function"?u((0,D.Z)((0,D.Z)({},e.props),{},{isLeaf:!0})):u});var d=j()("".concat(r,"-switcher"),"".concat(r,"-switcher_").concat(n?le:ce));return(0,y.jsx)("span",{onClick:e.onExpand,className:d,children:typeof u=="function"?u((0,D.Z)((0,D.Z)({},e.props),{},{isLeaf:!1})):u})},e.renderCheckbox=function(){var t=e.props,n=t.checked,a=t.halfChecked,l=t.disableCheckbox,r=e.props.context.prefixCls,c=e.isDisabled(),u=e.isCheckable();if(!u)return null;var d=typeof u!="boolean"?u:null;return(0,y.jsx)("span",{className:j()("".concat(r,"-checkbox"),n&&"".concat(r,"-checkbox-checked"),!n&&a&&"".concat(r,"-checkbox-indeterminate"),(c||l)&&"".concat(r,"-checkbox-disabled")),onClick:e.onCheck,children:d})},e.renderIcon=function(){var t=e.props.loading,n=e.props.context.prefixCls;return(0,y.jsx)("span",{className:j()("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(e.getNodeState()||"docu"),t&&"".concat(n,"-icon_loading"))})},e.renderSelector=function(){var t=e.state.dragNodeHighlight,n=e.props,a=n.title,l=n.selected,r=n.icon,c=n.loading,u=e.props.context,d=u.prefixCls,p=u.showIcon,x=u.icon,C=u.draggable,m=u.loadData,g=e.isDisabled(),k="".concat(d,"-node-content-wrapper"),K;if(p){var Z=r||x;K=Z?(0,y.jsx)("span",{className:j()("".concat(d,"-iconEle"),"".concat(d,"-icon__customize")),children:typeof Z=="function"?Z(e.props):Z}):e.renderIcon()}else m&&c&&(K=e.renderIcon());var P=(0,y.jsx)("span",{className:"".concat(d,"-title"),children:a});return(0,y.jsxs)("span",{ref:e.setSelectHandle,title:typeof a=="string"?a:"",className:j()("".concat(k),"".concat(k,"-").concat(e.getNodeState()||"normal"),!g&&(l||t)&&"".concat(d,"-node-selected"),!g&&C&&"draggable"),draggable:!g&&C||void 0,"aria-grabbed":!g&&C||void 0,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick,onDragStart:C?e.onDragStart:void 0,children:[K,P]})},e.renderChildren=function(){var t=e.props,n=t.expanded,a=t.pos,l=e.props.context,r=l.prefixCls,c=l.motion,u=l.renderTreeNode,d=e.getNodeChildren();if(d.length===0)return null;var p=!0;return d.forEach(function(x){x.props.children.length>0&&(p=!1)}),(0,y.jsx)(je.ZP,(0,D.Z)((0,D.Z)({visible:n},c),{},{children:function(C){var m=C.style,g=C.className;return(0,y.jsx)("ul",{className:j()(g,"".concat(r,"-child-tree"),n&&"".concat(r,"-child-tree-open")),style:(0,D.Z)((0,D.Z)({},m),{},{display:p?"flex":""}),"data-expanded":n,role:"group",children:ge(d,function(k,K){return u(k,K,a)})})}}))},e}return(0,q.Z)(h,[{key:"componentDidMount",value:function(){var o=this.props,v=o.eventKey,s=o.context.registerTreeNode;this.syncLoadData(this.props),s(v,this)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"componentWillUnmount",value:function(){var o=this.props,v=o.eventKey,s=o.context.registerTreeNode;s(v,null)}},{key:"isSelectable",value:function(){var o=this.props.selectable,v=this.props.context.selectable;return typeof o=="boolean"?o:v}},{key:"render",value:function(){var o,v=this.props.loading,s=this.props,t=s.className,n=s.style,a=s.dragOver,l=s.dragOverGapTop,r=s.dragOverGapBottom,c=s.isLeaf,u=s.expanded,d=s.selected,p=s.checked,x=s.halfChecked,C=(0,G.Z)(s,Le),m=this.props.context,g=m.prefixCls,k=m.filterTreeNode,K=m.draggable,Z=this.isDisabled(),P=De(C);return(0,y.jsxs)("li",(0,D.Z)((0,D.Z)({className:j()(t,(o={},(0,w.Z)(o,"".concat(g,"-treenode-disabled"),Z),(0,w.Z)(o,"".concat(g,"-treenode-switcher-").concat(u?"open":"close"),!c),(0,w.Z)(o,"".concat(g,"-treenode-checkbox-checked"),p),(0,w.Z)(o,"".concat(g,"-treenode-checkbox-indeterminate"),x),(0,w.Z)(o,"".concat(g,"-treenode-selected"),d),(0,w.Z)(o,"".concat(g,"-treenode-loading"),v),(0,w.Z)(o,"drag-over",!Z&&a),(0,w.Z)(o,"drag-over-gap-top",!Z&&l),(0,w.Z)(o,"drag-over-gap-bottom",!Z&&r),(0,w.Z)(o,"filter-node",k&&k(this)),o)),style:n,role:"treeitem",onDragEnter:K?this.onDragEnter:void 0,onDragOver:K?this.onDragOver:void 0,onDragLeave:K?this.onDragLeave:void 0,onDrop:K?this.onDrop:void 0,onDragEnd:K?this.onDragEnd:void 0},P),{},{children:[this.renderSwitcher(),this.renderCheckbox(),this.renderSelector(),this.renderChildren()]}))}}]),h}(b.Component),te=function(i){return(0,y.jsx)(de.Consumer,{children:function(e){return(0,y.jsx)($e,(0,D.Z)((0,D.Z)({},i),{},{context:e}))}})};te.defaultProps={title:Ie},te.isTreeNode=1;var ne=te,Re=["children"],Fe=.25,Ae=2,ue=!1;function fe(){ue||(ue=!0)}function R(f,i){var h=f.slice(),e=h.indexOf(i);return e>=0&&h.splice(e,1),h}function F(f,i){var h=f.slice();return h.indexOf(i)===-1&&h.push(i),h}function Me(f){return f.split("-")}function he(f,i){return"".concat(f,"-").concat(i)}function Ue(f){return f&&f.type&&f.type.isTreeNode}function ve(f){return(0,z.Z)(f).filter(Ue)}function A(f){var i=f.props||{},h=i.disabled,e=i.disableCheckbox,o=i.checkable;return!!(h||e)||o===!1}function pe(f,i){function h(e,o,v){var s=e?e.props.children:f,t=e?he(v.pos,o):0,n=ve(s);if(e){var a={node:e,index:o,pos:t,key:e.key||t,parentPos:v.node?v.pos:null};i(a)}b.Children.forEach(n,function(l,r){h(l,r,{node:e,pos:t})})}h(null)}function ge(f,i){var h=(0,z.Z)(f).map(i);return h.length===1?h[0]:h}function He(f,i){var h=i.props,e=h.eventKey,o=h.pos,v=[];return pe(f,function(s){var t=s.key;v.push(t)}),v.push(e||o),v}function ye(f,i){var h=f.clientY,e=i.selectHandle.getBoundingClientRect(),o=e.top,v=e.bottom,s=e.height,t=Math.max(s*Fe,Ae);return h<=o+t?-1:h>=v-t?1:0}function xe(f,i){if(!!f){var h=i.multiple;return h?f.slice():f.length?[f[0]]:f}}function Ce(f){return f&&f.map(function(i){return String(i)})}var Be=function(i){return i};function me(f,i){if(!f)return[];var h=i||{},e=h.processProps,o=e===void 0?Be:e,v=Array.isArray(f)?f:[f];return v.map(function(s){var t=s.children,n=(0,G.Z)(s,Re),a=me(t,i);return(0,y.jsx)(ne,(0,D.Z)((0,D.Z)({},o(n)),{},{children:a}))})}function Ge(f){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.initWrapper,e=i.processEntity,o=i.onProcessFinished,v={},s={},t={posEntities:v,keyEntities:s};return h&&(t=h(t)||t),pe(f,function(n){var a=n.node,l=n.index,r=n.pos,c=n.key,u=n.parentPos,d={node:a,index:l,key:c,pos:r};v[r]=d,s[c]=d,d.parent=v[u],d.parent&&(d.parent.children=d.parent.children||[],d.parent.children.push(d)),e&&e(d,t)}),o&&o(t),t}function re(f){if(!f)return null;var i;if(Array.isArray(f))i={checkedKeys:f,halfCheckedKeys:void 0};else if(typeof f=="object")i={checkedKeys:f.checked||void 0,halfCheckedKeys:f.halfChecked||void 0};else return null;return i.checkedKeys=Ce(i.checkedKeys),i.halfCheckedKeys=Ce(i.halfCheckedKeys),i}function Ne(f,i,h){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o={},v={};(e.checkedKeys||[]).forEach(function(r){o[r]=!0}),(e.halfCheckedKeys||[]).forEach(function(r){v[r]=!0});function s(r){if(o[r]!==i){var c=h[r];if(!!c){var u=c.children,d=c.parent,p=c.node;if(!A(p)){var x=!0,C=!1;(u||[]).filter(function(m){return!A(m.node)}).forEach(function(m){var g=m.key,k=o[g],K=v[g];(k||K)&&(C=!0),k||(x=!1)}),i?o[r]=x:o[r]=!1,v[r]=C,d&&s(d.key)}}}}function t(r){if(o[r]!==i){var c=h[r];if(!!c){var u=c.children,d=c.node;A(d)||(o[r]=i,(u||[]).forEach(function(p){t(p.key)}))}}}function n(r){var c=h[r];if(!!c){var u=c.children,d=c.parent,p=c.node;o[r]=i,!A(p)&&((u||[]).filter(function(x){return!A(x.node)}).forEach(function(x){t(x.key)}),d&&s(d.key))}}(f||[]).forEach(function(r){n(r)});var a=[],l=[];return Object.keys(o).forEach(function(r){o[r]&&a.push(r)}),Object.keys(v).forEach(function(r){!o[r]&&v[r]&&l.push(r)}),{checkedKeys:a,halfCheckedKeys:l}}function ke(f,i){var h={};function e(o){if(!h[o]){var v=i[o];if(!!v){h[o]=!0;var s=v.parent,t=v.node;A(t)||s&&e(s.key)}}}return(f||[]).forEach(function(o){e(o)}),Object.keys(h)}function De(f){return Object.keys(f).reduce(function(i,h){return(h.substr(0,5)==="data-"||h.substr(0,5)==="aria-")&&(i[h]=f[h]),i},{})}var Ke=function(f){(0,_.Z)(h,f);var i=(0,ee.Z)(h);function h(){var e;(0,X.Z)(this,h);for(var o=arguments.length,v=new Array(o),s=0;s<o;s++)v[s]=arguments[s];return e=i.call.apply(i,[this].concat(v)),e.domTreeNodes={},e.delayedDragEnterLogic=void 0,e.state={keyEntities:{},selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],dragNodesKeys:[],dragOverNodeKey:null,dropPosition:null,treeNode:[],prevProps:null},e.dragNode=void 0,e.onNodeDragStart=function(t,n){var a=e.state.expandedKeys,l=e.props.onDragStart,r=n.props,c=r.eventKey,u=r.children;e.dragNode=n,e.setState({dragNodesKeys:He(u,n),expandedKeys:R(a,c)}),l&&l({event:t,node:n})},e.onNodeDragEnter=function(t,n){var a=e.state.expandedKeys,l=e.props.onDragEnter,r=n.props,c=r.pos,u=r.eventKey;if(!!e.dragNode){var d=ye(t,n);if(e.dragNode.props.eventKey===u&&d===0){e.setState({dragOverNodeKey:"",dropPosition:null});return}setTimeout(function(){e.setState({dragOverNodeKey:u,dropPosition:d}),e.delayedDragEnterLogic||(e.delayedDragEnterLogic={}),Object.keys(e.delayedDragEnterLogic).forEach(function(p){clearTimeout(e.delayedDragEnterLogic[p])}),e.delayedDragEnterLogic[c]=window.setTimeout(function(){var p=F(a,u);"expandedKeys"in e.props||e.setState({expandedKeys:p}),l&&l({event:t,node:n,expandedKeys:p})},400)},0)}},e.onNodeDragOver=function(t,n){var a=e.props.onDragOver,l=n.props.eventKey;if(e.dragNode&&l===e.state.dragOverNodeKey){var r=ye(t,n);if(r===e.state.dropPosition)return;e.setState({dropPosition:r})}a&&a({event:t,node:n})},e.onNodeDragLeave=function(t,n){var a=e.props.onDragLeave;e.setState({dragOverNodeKey:""}),a&&a({event:t,node:n})},e.onNodeDragEnd=function(t,n){var a=e.props.onDragEnd;e.setState({dragOverNodeKey:""}),a&&a({event:t,node:n}),e.dragNode=null},e.onNodeDrop=function(t,n){var a=e.state,l=a.dragNodesKeys,r=l===void 0?[]:l,c=a.dropPosition,u=e.props.onDrop,d=n.props,p=d.eventKey,x=d.pos;if(e.setState({dragOverNodeKey:""}),r.indexOf(p)===-1){var C=Me(x),m={event:t,node:n,dragNode:e.dragNode,dragNodesKeys:r.slice(),dropPosition:c+Number(C[C.length-1]),dropToGap:!1};c!==0&&(m.dropToGap=!0),u&&u(m),e.dragNode=null}},e.onNodeClick=function(t,n){var a=e.props.onClick;a&&a(t,n)},e.onNodeDoubleClick=function(t,n){var a=e.props.onDoubleClick;a&&a(t,n)},e.onNodeSelect=function(t,n){var a=e.state.selectedKeys,l=e.state.keyEntities,r=e.props,c=r.onSelect,u=r.multiple,d=n.props,p=d.selected,x=d.eventKey,C=!p;C?u?a=F(a,x):a=[x]:a=R(a,x);var m=a.map(function(g){var k=l[g];return k?k.node:null}).filter(function(g){return g});e.setUncontrolledState({selectedKeys:a}),c&&c(a,{event:"select",selected:C,node:n,selectedNodes:m,nativeEvent:t.nativeEvent})},e.onNodeCheck=function(t,n,a){var l=e.state,r=l.keyEntities,c=l.checkedKeys,u=l.halfCheckedKeys,d=e.props,p=d.checkStrictly,x=d.onCheck,C=n.props.eventKey,m,g={event:"check",node:n,checked:a,nativeEvent:t.nativeEvent};if(p){var k=a?F(c,C):R(c,C),K=R(u,C);m={checked:k,halfChecked:K},g.checkedNodes=k.map(function(S){return r[S]}).filter(function(S){return S}).map(function(S){return S.node}),e.setUncontrolledState({checkedKeys:k})}else{var Z=Ne([C],a,r,{checkedKeys:c,halfCheckedKeys:u}),P=Z.checkedKeys,O=Z.halfCheckedKeys;m=P,g.checkedNodes=[],g.checkedNodesPositions=[],g.halfCheckedKeys=O,P.forEach(function(S){var U=r[S];if(!!U){var Y=U.node,Ct=U.pos;g.checkedNodes.push(Y),g.checkedNodesPositions.push({node:Y,pos:Ct})}}),e.setUncontrolledState({checkedKeys:P,halfCheckedKeys:O})}x&&x(m,g)},e.onNodeLoad=function(t){return new Promise(function(n){e.setState(function(a){var l=a.loadedKeys,r=l===void 0?[]:l,c=a.loadingKeys,u=c===void 0?[]:c,d=e.props,p=d.loadData,x=d.onLoad,C=t.props.eventKey;if(!p||r.indexOf(C)!==-1||u.indexOf(C)!==-1)return{};var m=p(t);return m.then(function(){var g=e.state,k=g.loadedKeys,K=g.loadingKeys,Z=F(k,C),P=R(K,C);x&&x(Z,{event:"load",node:t}),e.setUncontrolledState({loadedKeys:Z}),e.setState({loadingKeys:P}),n()}),{loadingKeys:F(u,C)}})})},e.onNodeExpand=function(t,n){var a=e.state.expandedKeys,l=e.props,r=l.onExpand,c=l.loadData,u=n.props,d=u.eventKey,p=u.expanded,x=a.indexOf(d),C=!p;if(C?a=F(a,d):a=R(a,d),e.setUncontrolledState({expandedKeys:a}),r&&r(a,{node:n,expanded:C,nativeEvent:t.nativeEvent}),C&&c){var m=e.onNodeLoad(n);return m?m.then(function(){e.setUncontrolledState({expandedKeys:a})}):null}return null},e.onNodeMouseEnter=function(t,n){var a=e.props.onMouseEnter;a&&a({event:t,node:n})},e.onNodeMouseLeave=function(t,n){var a=e.props.onMouseLeave;a&&a({event:t,node:n})},e.onNodeContextMenu=function(t,n){var a=e.props.onRightClick;a&&(t.preventDefault(),a({event:t,node:n}))},e.setUncontrolledState=function(t){var n=!1,a={};Object.keys(t).forEach(function(l){l in e.props||(n=!0,a[l]=t[l])}),n&&e.setState(a)},e.registerTreeNode=function(t,n){n?e.domTreeNodes[t]=n:delete e.domTreeNodes[t]},e.isKeyChecked=function(t){var n=e.state.checkedKeys,a=n===void 0?[]:n;return a.indexOf(t)!==-1},e.renderTreeNode=function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,l=e.state,r=l.keyEntities,c=l.expandedKeys,u=c===void 0?[]:c,d=l.selectedKeys,p=d===void 0?[]:d,x=l.halfCheckedKeys,C=x===void 0?[]:x,m=l.loadedKeys,g=m===void 0?[]:m,k=l.loadingKeys,K=k===void 0?[]:k,Z=l.dragOverNodeKey,P=l.dropPosition,O=he(a,n),S=t.key||O;return r[S]?b.cloneElement(t,{key:S,eventKey:S,expanded:u.indexOf(S)!==-1,selected:p.indexOf(S)!==-1,loaded:g.indexOf(S)!==-1,loading:K.indexOf(S)!==-1,checked:e.isKeyChecked(S),halfChecked:C.indexOf(S)!==-1,pos:O,dragOver:Z===S&&P===0,dragOverGapTop:Z===S&&P===-1,dragOverGapBottom:Z===S&&P===1}):(fe(),null)},e}return(0,q.Z)(h,[{key:"render",value:function(){var o=this,v=this.state.treeNode,s=this.props,t=s.prefixCls,n=s.className,a=s.focusable,l=s.style,r=s.showLine,c=s.tabIndex,u=c===void 0?0:c,d=s.selectable,p=s.showIcon,x=s.icon,C=s.switcherIcon,m=s.draggable,g=s.checkable,k=s.checkStrictly,K=s.disabled,Z=s.motion,P=s.loadData,O=s.filterTreeNode,S=De(this.props);return a&&(S.tabIndex=u),(0,y.jsx)(de.Provider,{value:{prefixCls:t,selectable:d,showIcon:p,icon:x,switcherIcon:C,draggable:m,checkable:g,checkStrictly:k,disabled:K,motion:Z,loadData:P,filterTreeNode:O,renderTreeNode:this.renderTreeNode,isKeyChecked:this.isKeyChecked,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop,registerTreeNode:this.registerTreeNode},children:(0,y.jsx)("ul",(0,D.Z)((0,D.Z)({},S),{},{className:j()(t,n,(0,w.Z)({},"".concat(t,"-show-line"),r)),style:l,role:"tree",unselectable:"on",children:ge(v,function(U,Y){return o.renderTreeNode(U,Y)})}))})}}],[{key:"getDerivedStateFromProps",value:function(o,v){var s=v.prevProps,t={prevProps:o};function n(g){return!s&&g in o||s&&s[g]!==o[g]}var a=null;if(n("treeData")?a=me(o.treeData):n("children")&&(a=(0,z.Z)(o.children)),a){t.treeNode=a;var l=Ge(a);t.keyEntities=l.keyEntities}var r=t.keyEntities||v.keyEntities;if(n("expandedKeys")||s&&n("autoExpandParent")?t.expandedKeys=o.autoExpandParent||!s&&o.defaultExpandParent?ke(o.expandedKeys,r):o.expandedKeys:!s&&o.defaultExpandAll?t.expandedKeys=Object.keys(r):!s&&o.defaultExpandedKeys&&(t.expandedKeys=o.autoExpandParent||o.defaultExpandParent?ke(o.defaultExpandedKeys,r):o.defaultExpandedKeys),o.selectable&&(n("selectedKeys")?t.selectedKeys=xe(o.selectedKeys,o):!s&&o.defaultSelectedKeys&&(t.selectedKeys=xe(o.defaultSelectedKeys,o))),o.checkable){var c;if(n("checkedKeys")?c=re(o.checkedKeys)||{}:!s&&o.defaultCheckedKeys?c=re(o.defaultCheckedKeys)||{}:a&&(c=re(o.checkedKeys)||{checkedKeys:v.checkedKeys,halfCheckedKeys:v.halfCheckedKeys}),c){var u=c,d=u.checkedKeys,p=d===void 0?[]:d,x=u.halfCheckedKeys,C=x===void 0?[]:x;if(!o.checkStrictly){var m=Ne(p,!0,r);p=m.checkedKeys,C=m.halfCheckedKeys}t.checkedKeys=p,t.halfCheckedKeys=C}}return n("loadedKeys")&&(t.loadedKeys=o.loadedKeys),t}}]),h}(b.Component);Ke.defaultProps={prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[]};var ze=Ke,Ze=ze;Ze.TreeNode=ne;var We=Ze,ae=function(){return{height:0,opacity:0}},Se=function(i){return{height:i.scrollHeight,opacity:1}},Ve=function(i){return{height:i.offsetHeight}},Ye={motionName:"ant-motion-collapse",onAppearStart:ae,onEnterStart:ae,onAppearActive:Se,onEnterActive:Se,onLeaveStart:Ve,onLeaveActive:ae},Je=Ye,be=N(16165),Qe=N(46133),Xe=N.n(Qe),qe=N(3361),_e=N.n(qe),et=N(31929),W=N(83279),tt=["value","flatTreeData","onChange","readonly"],nt=function(i){var h=i.value,e=h===void 0?[]:h,o=i.flatTreeData,v=i.onChange,s=i.readonly,t=(0,G.Z)(i,tt);return(0,y.jsx)(oe,(0,D.Z)({checkable:!0,showIcon:!0,defaultCheckedKeys:e,checkedKeys:e,checkStrictly:!0,defaultExpandAll:!0,onCheck:function(a,l){var r=a.checked,c=l.node.props.eventKey;if(!(!c||!v||s)){var u=(o==null?void 0:o.filter(function(d){return d.key.startsWith(c)}).map(function(d){return d.key}))||[];if(l.checked){v((0,W.Z)(new Set([].concat((0,W.Z)(r),(0,W.Z)(u)))));return}if(!l.checked){v(r.filter(function(d){return!u.includes(d)}));return}}}},t))},oe=function(f){(0,_.Z)(h,f);var i=(0,ee.Z)(h);function h(){var e;(0,X.Z)(this,h);for(var o=arguments.length,v=new Array(o),s=0;s<o;s++)v[s]=arguments[s];return e=i.call.apply(i,[this].concat(v)),e.tree=void 0,e.renderSwitcherIcon=function(t,n,a){var l=a.isLeaf,r=a.expanded,c=a.loading,u=e.props.showLine;if(c)return(0,y.jsx)(be.Z,{type:"loading",className:"".concat(t,"-switcher-loading-icon")});if(l)return u?(0,y.jsx)(be.Z,{type:"file",className:"".concat(t,"-switcher-line-icon")}):null;var d="".concat(t,"-switcher-icon");return n?b.cloneElement(n,{className:j()(n.props.className||"",d)}):r?(0,y.jsx)(Xe(),{className:d}):(0,y.jsx)(_e(),{className:d})},e.setTreeRef=function(t){e.tree=t},e.renderTree=function(t){var n,a=t.getPrefixCls,l=(0,T.Z)(e),r=l.props,c=r.prefixCls,u=r.className,d=r.showIcon,p=r.switcherIcon,x=r.blockNode,C=r.children,m=r.checkable,g="ant3-tree";return(0,y.jsx)(We,(0,D.Z)((0,D.Z)({ref:e.setTreeRef},r),{},{prefixCls:g,className:j()(u,(n={},(0,w.Z)(n,"".concat(g,"-icon-hide"),!d),(0,w.Z)(n,"".concat(g,"-block-node"),x),n)),checkable:m&&(0,y.jsx)("span",{className:"".concat(g,"-checkbox-inner")}),switcherIcon:function(K){return e.renderSwitcherIcon(g,p,K)},children:C}))},e}return(0,q.Z)(h,[{key:"render",value:function(){return(0,y.jsx)(et.ConfigConsumer,{children:this.renderTree})}}]),h}(b.Component);oe.TreeNode=ne,oe.defaultProps={checkable:!1,showIcon:!1,motion:(0,D.Z)((0,D.Z)({},Je),{},{motionAppear:!1}),blockNode:!1};var rt=N(52125),at=N(57551),L=N(82837),ot=N(64284),st=["treeData","flatTreeData","readonly"];function it(f){for(var i=f.split(":"),h=[],e=0;e<i.length;e++)e>0?h.push("".concat(h[e-1],":").concat(i[e])):h.push(i[0]);return h}var V={list:"1",detail:"2",create:"3",update:"4",delete:"5",import:"6",export:"7"},dt=function f(i,h){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"parentKey",o=i.filter(function(s){return s[e]===h}),v=o.filter(function(s){return Object.keys(V).includes(s.key.toLowerCase().split(":").slice(-1)[0])}).length>0;return v&&o.sort(function(s,t){var n=V[s.key.toLowerCase().split(":").slice(-1)[0]]||s,a=V[t.key.toLowerCase().split(":").slice(-1)[0]]||t;return n>a?1:n<a?-1:0}),o.map(function(s){return(0,D.Z)((0,D.Z)({},s),{},{children:f(i,s.key)})})},lt=function(i){var h=i.treeData,e=i.flatTreeData,o=i.readonly,v=(0,G.Z)(i,st);return(0,y.jsx)(L.ZP.Item,(0,D.Z)((0,D.Z)({},v),{},{children:(0,y.jsx)(nt,(0,D.Z)({treeData:h,flatTreeData:e},i.fieldProps))}))},ct=(0,ie.Pi)(function(f){var i=f.onOk,h=f.onClose,e=f.role,o=(0,b.useRef)(),v=!!(e!=null&&e.id),s=(0,ot.Z)(),t=(0,$.m2)(),n=[];t.permissions.filter(function(l){return!l.code.startsWith("ROLE_")}).forEach(function(l){it(l.code).forEach(function(r,c,u){var d=l.name||s.formatMessage({id:"authority.".concat(r.replaceAll(":",".")),defaultMessage:r});if(!n.find(function(x){return x.key===r})){var p=Object.keys(V).includes(r.toLowerCase().split(":").slice(-1)[0]);n.push({key:r,title:d,icon:p?(0,y.jsx)(rt.Z,{}):(0,y.jsx)(at.Z,{}),parentKey:u[c-1]})}})});var a=dt(n,void 0);return(0,y.jsxs)(L.aN,{title:v?e!=null&&e.id?"\u4FEE\u6539\u89D2\u8272":"\u65B0\u589E\u89D2\u8272":"\u67E5\u770B\u89D2\u8272",formRef:o,open:!0,initialValues:e,drawerProps:{forceRender:!0,destroyOnClose:!0,onClose:function(){h()}},onFinish:function(){var l=(0,I.Z)((0,E.Z)().mark(function r(c){var u;return(0,E.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(!((e==null?void 0:e.code)==="admin"&&c.code!=="admin")){p.next=3;break}return H.default.error("\u9ED8\u8BA4\u7BA1\u7406\u5458\u89D2\u8272\u7F16\u7801\u4E0D\u80FD\u4FEE\u6539"),p.abrupt("return");case 3:return p.next=5,t.saveOrUpdateRole((0,D.Z)((0,D.Z)({},e),c));case 5:u=p.sent,u.success&&i();case 7:case"end":return p.stop()}},r)}));return function(r){return l.apply(this,arguments)}}(),children:[(0,y.jsxs)(L.ZP.Group,{children:[(0,y.jsx)(L.V,{name:"name",width:"md",label:"\u89D2\u8272\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",required:!0,rules:[{required:!0,message:"\u89D2\u8272\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,y.jsx)(L.V,{width:"md",name:"code",label:"\u89D2\u8272\u7F16\u7801",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801",rules:[{required:!0,message:"\u89D2\u8272\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],required:!0}),(0,y.jsx)(L._I,{width:"md",name:"status",label:"\u72B6\u6001",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272\u72B6\u6001"}],fieldProps:{options:[{label:"\u6B63\u5E38",value:1},{label:"\u505C\u7528",value:0}]},required:!0})]}),(0,y.jsx)(L.ZP.Group,{children:(0,y.jsx)(L.$J,{name:"remark",width:"xl",label:"\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u63CF\u8FF0\u4FE1\u606F"})}),(0,y.jsx)(L.ZP.Group,{children:(0,y.jsx)(lt,{name:"authorities",label:"\u89D2\u8272\u6388\u6743",treeData:a,flatTreeData:n})})]})}),Zt=N(57338),ut=N(273),St=N(62350),ft=N(24565),ht=N(37809),vt=N(96642),pt=function(i){var h=i.onClose,e=i.role,o=(0,b.useRef)(),v=(0,b.useState)([]),s=(0,M.Z)(v,2),t=s[0],n=s[1],a=[{title:"\u7EC4\u7EC7\u673A\u6784",dataIndex:"deptName",hideInSearch:!0,width:150},{title:"\u59D3\u540D",dataIndex:"name",ellipsis:!0,width:120},{title:"\u624B\u673A",dataIndex:"phone",width:150,search:!1},{title:"\u72B6\u6001",dataIndex:"status",search:!1,width:100,valueEnum:{0:{text:"\u5931\u6D3B",status:"Default"},1:{text:"\u6FC0\u6D3B",status:"Processing"}}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createAt",width:150,valueType:"dateTime",hideInSearch:!0}];return(0,y.jsx)(Q.Z,{title:"\u9009\u62E9\u7528\u6237",open:!0,width:950,onCancel:function(){return h()},okText:"\u6279\u91CF\u6DFB\u52A0",okButtonProps:{disabled:t.length===0},onOk:(0,I.Z)((0,E.Z)().mark(function l(){var r,c;return(0,E.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,$.hi.updateRole({id:e.id,userIds:t});case 2:if(r=d.sent,!r.success){d.next=9;break}return(c=o.current)===null||c===void 0||c.reload(),n([]),d.abrupt("return",!0);case 9:return H.default.error(r.message||"\u6DFB\u52A0\u5931\u8D25"),d.abrupt("return",!1);case 11:case"end":return d.stop()}},l)})),children:(0,y.jsx)(B.ZP,{columns:a,bordered:!0,actionRef:o,params:{neRoleId:e.id},request:function(){var l=(0,I.Z)((0,E.Z)().mark(function r(c){return(0,E.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",$.hi.loadUsers(c));case 1:case"end":return d.stop()}},r)}));return function(r){return l.apply(this,arguments)}}(),rowKey:"id",pagination:{defaultPageSize:10},rowSelection:{selectedRowKeys:t,onChange:function(r){n(r)}}})})},gt=function(i){var h=i.onClose,e=i.role,o=(0,b.useRef)(),v=(0,b.useState)([]),s=(0,M.Z)(v,2),t=s[0],n=s[1],a=(0,b.useState)(),l=(0,M.Z)(a,2),r=l[0],c=l[1],u=function(){var p=(0,I.Z)((0,E.Z)().mark(function x(){var C,m,g,k,K,Z=arguments;return(0,E.Z)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:for(C=Z.length,m=new Array(C),g=0;g<C;g++)m[g]=Z[g];return O.next=3,$.hi.updateRole({id:e.id,evictUserIds:m});case 3:if(k=O.sent,!k.success){O.next=9;break}return(K=o.current)===null||K===void 0||K.reload(),O.abrupt("return",!0);case 9:return H.default.error(k.message||"\u53D6\u6D88\u5931\u8D25"),O.abrupt("return",!1);case 11:case"end":return O.stop()}},x)}));return function(){return p.apply(this,arguments)}}(),d=[{title:"\u7EC4\u7EC7\u673A\u6784",dataIndex:"deptName",hideInSearch:!0,width:150},{title:"\u59D3\u540D",dataIndex:"name",ellipsis:!0,width:120},{title:"\u624B\u673A",dataIndex:"phone",width:150,search:!1},{title:"\u72B6\u6001",dataIndex:"status",search:!1,width:100,valueEnum:{0:{text:"\u5931\u6D3B",status:"Default"},1:{text:"\u6FC0\u6D3B",status:"Processing"}}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createAt",width:180,hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",render:function(x,C){return[(0,y.jsx)(ft.Z,{title:(0,y.jsxs)(y.Fragment,{children:["\u786E\u5B9A\u53D6\u6D88\u7528\u6237 ",(0,y.jsx)("b",{children:e.name})," \u89D2\u8272\u5417\uFF1F"]}),onConfirm:(0,I.Z)((0,E.Z)().mark(function m(){return(0,E.Z)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:u(C.id);case 1:case"end":return k.stop()}},m)})),children:(0,y.jsx)("a",{children:"\u53D6\u6D88\u6388\u6743"},"editable")})]}}];return(0,y.jsxs)(ut.Z,{title:"\u5206\u914D\u7528\u6237",onClose:h,open:!0,width:1e3,children:[(0,y.jsx)(B.ZP,{columns:d,bordered:!0,actionRef:o,params:{roleId:e.id},request:function(){var p=(0,I.Z)((0,E.Z)().mark(function x(C){return(0,E.Z)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",$.hi.loadUsers(C));case 1:case"end":return g.stop()}},x)}));return function(x){return p.apply(this,arguments)}}(),rowKey:"id",pagination:{defaultPageSize:10},rowSelection:{selectedRowKeys:t,onChange:function(x){n(x)}},toolBarRender:function(){return[(0,y.jsx)(J.Z,{icon:(0,y.jsx)(ht.Z,{}),type:"primary",onClick:function(){c(!0)},children:"\u6DFB\u52A0\u7528\u6237"},"batchAdd"),(0,y.jsx)(J.Z,{danger:!0,disabled:t.length===0,icon:(0,y.jsx)(vt.Z,{}),type:"primary",onClick:(0,I.Z)((0,E.Z)().mark(function x(){return(0,E.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,u.apply(void 0,(0,W.Z)(t));case 2:n([]);case 3:case"end":return m.stop()}},x)})),children:"\u6279\u91CF\u53D6\u6D88\u6388\u6743"},"batchCancel")]}}),r&&(0,y.jsx)(pt,{role:e,onClose:function(){var x;c(!1),(x=o.current)===null||x===void 0||x.reload()}})]})},yt=(0,ie.Pi)(function(){var f=(0,$.m2)(),i=(0,b.useRef)(),h=(0,b.useState)(),e=(0,M.Z)(h,2),o=e[0],v=e[1],s=(0,b.useState)(),t=(0,M.Z)(s,2),n=t[0],a=t[1];(0,b.useEffect)(function(){f.loadPermissions()},[f]);var l=[{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"name",ellipsis:!0,width:150},{title:"\u7F16\u7801",dataIndex:"code",hideInSearch:!0,width:150},{title:"\u63CF\u8FF0",dataIndex:"remark",search:!1},{title:"\u72B6\u6001",dataIndex:"status",search:!1,renderText:function(c,u,d,p){return(0,y.jsx)(Ee.Z,{checked:c===1,onChange:function(C){$.hi.updateRole({id:u.id,status:C?1:0}).then(function(m){if(m.success){var g;(g=i.current)===null||g===void 0||g.reload()}})}})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createAt",valueType:"dateTime",hideInSearch:!0,width:200},{title:"\u64CD\u4F5C",valueType:"option",width:200,render:function(c,u){return[(0,y.jsx)("a",{onClick:function(){a({current:u,visible:!0})},children:"\u7F16\u8F91"},"edit"),(0,y.jsx)(B.zI,{onSelect:function(p){if(p==="delete"){if(u.id==="1"){Q.Z.info({title:"\u63D0\u793A",content:"\u5185\u7F6E\u89D2\u8272\u4E0D\u80FD\u5220\u9664"});return}Q.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u5F53\u524D\u89D2\u8272?",icon:(0,y.jsx)(Te.Z,{}),onOk:function(){f.deleteRole(u.id).then(function(C){if(C.success){var m;H.default.success("\u5220\u9664\u6210\u529F"),(m=i.current)===null||m===void 0||m.reload()}})}})}else p==="roleUser"&&v(u)},menus:u.code==="admin"?[{key:"roleUser",name:"\u5206\u914D\u7528\u6237"}]:[{key:"roleUser",name:"\u5206\u914D\u7528\u6237"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}];return(0,y.jsxs)(Oe._z,{title:!1,children:[(0,y.jsx)(B.ZP,{columns:l,bordered:!0,actionRef:i,dataSource:f.roles,request:function(){var r=(0,I.Z)((0,E.Z)().mark(function c(u){return(0,E.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",f.loadRoles(u));case 1:case"end":return p.stop()}},c)}));return function(c){return r.apply(this,arguments)}}(),scroll:{x:800},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"id",search:{labelWidth:"auto"},pagination:{defaultPageSize:5},dateFormatter:"string",headerTitle:"\u7CFB\u7EDF\u89D2\u8272\u5217\u8868",toolBarRender:function(){return[(0,y.jsx)(J.Z,{icon:(0,y.jsx)(Pe.Z,{}),type:"primary",onClick:function(){a({visible:!0})},children:"\u65B0\u5EFA"},"button")]}}),(n==null?void 0:n.visible)&&(0,y.jsx)(ct,{onClose:function(){a(void 0)},onOk:function(){var c;a(void 0),(c=i.current)===null||c===void 0||c.reload()},role:n.current}),o&&(0,y.jsx)(gt,{role:o,onClose:function(){return v(void 0)}})]})}),xt=yt}}]);
