(this.webpackJsonpyoutuebtop20=this.webpackJsonpyoutuebtop20||[]).push([[12],{156:function(e,t,a){"use strict";var n=a(1),c=a(52),o=a(0),r=(a(9),a(53)),i=a(72),l=a(80),s=a(89),d=a(54),u=a(245),p=o.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,p=e.checkedIcon,m=e.classes,b=e.className,f=e.defaultChecked,h=e.disabled,O=e.icon,j=e.id,y=e.inputProps,v=e.inputRef,g=e.name,k=e.onBlur,x=e.onChange,E=e.onFocus,C=e.readOnly,S=e.required,I=e.tabIndex,N=e.type,w=e.value,T=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),F=Object(l.a)({controlled:d,default:Boolean(f),name:"SwitchBase",state:"checked"}),_=Object(i.a)(F,2),P=_[0],B=_[1],D=Object(s.a)(),R=h;D&&"undefined"===typeof R&&(R=D.disabled);var z="checkbox"===N||"radio"===N;return o.createElement(u.a,Object(n.a)({component:"span",className:Object(r.a)(m.root,b,P&&m.checked,R&&m.disabled),disabled:R,tabIndex:null,role:void 0,onFocus:function(e){E&&E(e),D&&D.onFocus&&D.onFocus(e)},onBlur:function(e){k&&k(e),D&&D.onBlur&&D.onBlur(e)},ref:t},T),o.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:f,className:m.input,disabled:R,id:z&&j,name:g,onChange:function(e){var t=e.target.checked;B(t),x&&x(e,t)},readOnly:C,ref:v,required:S,tabIndex:I,type:N,value:w},y)),P?p:O)})),m=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p),b=a(62),f=Object(b.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=Object(b.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),O=a(68),j=Object(b.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),y=a(56),v=o.createElement(h,null),g=o.createElement(f,null),k=o.createElement(j,null),x=o.forwardRef((function(e,t){var a=e.checkedIcon,i=void 0===a?v:a,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.icon,p=void 0===u?g:u,b=e.indeterminate,f=void 0!==b&&b,h=e.indeterminateIcon,O=void 0===h?k:h,j=e.inputProps,x=e.size,E=void 0===x?"medium":x,C=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=f?O:p,I=f?O:i;return o.createElement(m,Object(n.a)({type:"checkbox",classes:{root:Object(r.a)(l.root,l["color".concat(Object(y.a)(d))],f&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":f},j),icon:o.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===E?E:S.props.fontSize}),checkedIcon:o.cloneElement(I,{fontSize:void 0===I.props.fontSize&&"small"===E?E:I.props.fontSize}),ref:t},C))}));t.a=Object(d.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(O.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(O.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(x)},212:function(e,t,a){"use strict";var n=a(1),c=a(52),o=a(0),r=(a(9),a(53)),i=a(89),l=a(54),s=a(246),d=a(56),u=o.forwardRef((function(e,t){e.checked;var a=e.classes,l=e.className,u=e.control,p=e.disabled,m=(e.inputRef,e.label),b=e.labelPlacement,f=void 0===b?"end":b,h=(e.name,e.onChange,e.value,Object(c.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),O=Object(i.a)(),j=p;"undefined"===typeof j&&"undefined"!==typeof u.props.disabled&&(j=u.props.disabled),"undefined"===typeof j&&O&&(j=O.disabled);var y={disabled:j};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])})),o.createElement("label",Object(n.a)({className:Object(r.a)(a.root,l,"end"!==f&&a["labelPlacement".concat(Object(d.a)(f))],j&&a.disabled),ref:t},h),o.cloneElement(u,y),o.createElement(s.a,{component:"span",className:Object(r.a)(a.label,j&&a.disabled)},m))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},249:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a(26),c=a(2),o=a(17),r=a.n(o),i=a(24),l=a(60),s=a(0),d=a(264),u=a(201),p=a(200),m=a(251),b=a(4),f=a(121),h=a.n(f),O=a(246),j=a(199),y=a(250),v=a(22),g=a(58),k=a(156),x=a(212),E=a(258),C=a(3),S=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(1,0,2)}}}));function I(){var e,t,a=S(),o=Object(b.f)(),f=Object(s.useState)(!1),j=Object(l.a)(f,2),I=j[0],N=(j[1],Object(v.c)((function(e){return e.globalData.colorState}))),w=Object(v.b)(),T=Object(s.useState)(!1),F=Object(l.a)(T,2),_=F[0],P=F[1];Object(s.useEffect)((function(){w(Object(g.g)(o.location.pathname))}),[]);var B=Object(s.useState)(null),D=Object(l.a)(B,2),R=D[0],z=(D[1],Object(s.useState)({userName:"",email:"",password:"",confirmPassword:""})),L=Object(l.a)(z,2),H=L[0],A=L[1],M=H.userName,V=H.password,$=H.email,G=H.confirmPassword,U=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){A(Object(c.a)(Object(c.a)({},H),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(C.jsxs)(y.a,{component:"main",maxWidth:"xs",className:"signupclass",children:[Object(C.jsx)(m.a,{}),Object(C.jsxs)("div",{className:a.paper,children:[Object(C.jsx)(d.a,{className:a.avatar,style:{background:N?"black":"#3F51B5"},children:Object(C.jsx)(h.a,{})}),Object(C.jsx)(O.a,{component:"h1",variant:"h5",style:{color:N?"white":"black"},children:"Sign Up"}),Object(C.jsxs)("form",{className:a.form,noValidate:!0,children:[Object(C.jsx)("input",(e={placeholder:"Full Name",className:N?"customInputFieldsDark":"customInputFields",name:"userName",value:M,autoFocus:!0,autoComplete:"off"},Object(n.a)(e,"autoFocus",!0),Object(n.a)(e,"onChange",W),e)),Object(C.jsx)("input",(t={placeholder:"User Email",className:N?"customInputFieldsDark":"customInputFields",name:"email",value:$,autoFocus:!0,autoComplete:"off"},Object(n.a)(t,"autoFocus",!0),Object(n.a)(t,"onChange",W),t)),Object(C.jsx)("input",{placeholder:"Password",className:N?"customInputFieldsDark":"customInputFields",name:"password",type:_?"text":"password",value:V,autoFocus:!0,autoComplete:"off",onChange:W}),Object(C.jsx)("input",{placeholder:"Confirm Password",className:N?"customInputFieldsDark":"customInputFields",name:"confirmPassword",value:G,type:_?"text":"password",autoFocus:!0,autoComplete:"off",onChange:W}),Object(C.jsx)(x.a,{control:Object(C.jsx)(k.a,{checked:_,onChange:function(e){P(e.target.checked)},name:"checked",style:{color:N?"white":"#3F51B5"}}),style:{color:N?"white":"#3F51B5",marginTop:"-10px"},label:"Show Password"}),Object(C.jsx)(E.a,{variant:"filled",severity:"error",style:{display:R?"flex":"none"},children:R&&R}),Object(C.jsx)(u.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,className:a.submit,onClick:U,style:{background:N?"black":"#3F51B5"},startIcon:Object(C.jsx)(p.a,{disableShrink:!0,style:{color:"white",width:"20px",height:"20px",display:I?"flex":"none"}}),children:"Sign Up"})]})]})]})}},58:function(e,t,a){"use strict";a.d(t,"j",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"g",(function(){return l})),a.d(t,"i",(function(){return s})),a.d(t,"h",(function(){return d})),a.d(t,"f",(function(){return u})),a.d(t,"k",(function(){return p})),a.d(t,"c",(function(){return m}));var n=function(e){return{type:"SET_TOP_20_VIDEOS",payload:e}},c=function(e){return{type:"SET_HOT_20_VIDEOS",payload:e}},o=function(e){return{type:"REGIONS_DATA",payload:e}},r=function(e){return{type:"SET_COMPONENT_HEIGHT",payload:e}},i=function(e){return{type:"SET_COMPONENT_MODE",payload:e}},l=function(e){return{type:"SET_HISTORY",payload:e}},s=function(e){return{type:"SET_TAB_VALUE",payload:e}},d=function(e){return{type:"SET_SELECTOR_TEXT",payload:e}},u=function(e){return{type:"SET_CALL_USER_LOCATION",payload:e}},p=function(e){return{type:"SET_TOP_20_NEW",payload:e}},m=function(e){return{type:"GET_GLOBAL_TRENDING",payload:e}}},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),c=n.createContext();var o=c;function r(){return n.useContext(o)}}}]);
//# sourceMappingURL=12.c415bad0.chunk.js.map