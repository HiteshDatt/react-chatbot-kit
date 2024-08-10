(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Chatbot:()=>B,createChatBotMessage:()=>i,createClientMessage:()=>u,createCustomMessage:()=>l,default:()=>H,useChatbot:()=>T});const r=require("react");var a=e.n(r);const n=require("react-conditionally-render");var o=e.n(n),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},c=function(e,t){return{message:e,type:t,id:Math.round(Date.now()*Math.random())}},i=function(e,t){return s(s(s({},c(e,"bot")),t),{loading:void 0===t.loading||t.loading})},l=function(e,t,r){return s(s({},c(e,t)),r)},u=function(e,t){return s(s({},c(e,"user")),t)},m=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(e)return e.apply(void 0,t)};function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},g.apply(this,arguments)}const d=({styles:e={},...t})=>a().createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),a().createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})),f=function(e){var t=e.message,r=e.customComponents;return a().createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},a().createElement(o(),{condition:!!r.userChatMessage,show:m(r.userChatMessage,{message:t}),elseShow:a().createElement("div",{className:"react-chatbot-kit-user-chat-message"},t,a().createElement("div",{className:"react-chatbot-kit-user-chat-message-arrow"}))}),a().createElement(o(),{condition:!!r.userAvatar,show:m(r.userAvatar),elseShow:a().createElement("div",{className:"react-chatbot-kit-user-avatar"},a().createElement("div",{className:"react-chatbot-kit-user-avatar-container"},a().createElement(d,{className:"react-chatbot-kit-user-avatar-icon"})))}))},h=function(){return a().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},a().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},a().createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"B")))},p=function(){return a().createElement("div",{className:"chatbot-loader-container"},a().createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a().createElement("g",{stroke:"none",fill:"none"},a().createElement("g",{id:"chatbot-loader",fill:"#fff"},a().createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),a().createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),a().createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))};var v=function(){return v=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},v.apply(this,arguments)};const y=function(e){var t=e.message,n=e.withAvatar,s=void 0===n||n,c=e.loading,i=e.messages,l=e.customComponents,u=e.setState,g=e.customStyles,d=e.delay,f=e.id,y=(0,r.useState)(!1),b=y[0],w=y[1];(0,r.useEffect)((function(){var e;return function(t,r){var a=750;d&&(a+=d),e=setTimeout((function(){var e=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}([],t,!0).map((function(e){return e.id===f?v(v({},e),{loading:!1,delay:void 0}):e}));r((function(t){return v(v({},t),{messages:e})}))}),a)}(i,u),function(){clearTimeout(e)}}),[d,f]),(0,r.useEffect)((function(){d?setTimeout((function(){return w(!0)}),d):w(!0)}),[d]);var E={backgroundColor:""},S={borderRightColor:""};return g&&(E.backgroundColor=g.backgroundColor,S.borderRightColor=g.backgroundColor),a().createElement(o(),{condition:b,show:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},a().createElement(o(),{condition:s,show:a().createElement(o(),{condition:!!(null==l?void 0:l.botAvatar),show:m(null==l?void 0:l.botAvatar),elseShow:a().createElement(h,null)})}),a().createElement(o(),{condition:!!(null==l?void 0:l.botChatMessage),show:m(null==l?void 0:l.botChatMessage,{message:t,loader:a().createElement(p,null)}),elseShow:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:E},a().createElement(o(),{condition:c,show:a().createElement(p,null),elseShow:a().createElement("span",null,t)}),a().createElement(o(),{condition:s,show:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message-arrow",style:S})}))}))})};function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(this,arguments)}const w=({styles:e={},...t})=>a().createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),a().createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}));var E=function(){return E=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},E.apply(this,arguments)},S=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const P=function(e){var t=e.state,n=e.setState,s=e.widgetRegistry,i=e.messageParser,l=e.parse,u=e.customComponents,m=e.actionProvider,g=e.botName,d=e.customStyles,h=e.headerText,p=e.customMessages,v=e.placeholderText,b=e.validator,P=e.disableScrollToBottom,O=e.messageHistory,k=e.actions,M=e.messageContainerRef,C=t.messages,N=(0,r.useState)(""),x=N[0],j=N[1],T=function(){setTimeout((function(){var e;M.current&&(M.current.scrollTop=null===(e=null==M?void 0:M.current)||void 0===e?void 0:e.scrollHeight)}),50)};(0,r.useEffect)((function(){P||T()}));var A=function(e){if(e.preventDefault(),b&&"function"==typeof b){if(b(x)){if(B(),l)return l(x);i.parse(x)}}else{if(B(),l)return l(x);i.parse(x)}},B=function(){n((function(e){return E(E({},e),{messages:S(S([],e.messages,!0),[c(x,"user")],!1)})})),T(),j("")},H={backgroundColor:""};d&&d.chatButton&&(H.backgroundColor=d.chatButton.backgroundColor);var I="Conversation with "+g;h&&(I=h);var R="Write your message here";v&&(R=v);var W=a().createElement("form",{className:"react-chatbot-kit-chat-input-form",onSubmit:A},a().createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:R,value:x,onChange:function(e){return j(e.target.value)}}),a().createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:H},a().createElement(w,{className:"react-chatbot-kit-chat-btn-send-icon"})));return a().createElement("div",{className:"react-chatbot-kit-chat-container"},a().createElement("div",{className:"react-chatbot-kit-chat-inner-container"},a().createElement(o(),{condition:!!u.header,show:u.header&&u.header(m),elseShow:a().createElement("div",{className:"react-chatbot-kit-chat-header"},I)}),a().createElement("div",{className:"react-chatbot-kit-chat-message-container",ref:M},a().createElement(o(),{condition:"string"==typeof O&&Boolean(O),show:a().createElement("div",{dangerouslySetInnerHTML:{__html:O}})}),C.map((function(e,r){return"bot"===e.type?a().createElement(a().Fragment,{key:e.id},function(e,r){var c;c=e.withAvatar?e.withAvatar:function(e,t){if(0===t)return!0;var r=e[t-1];return!("bot"===r.type&&!r.widget)}(C,r);var i=E(E({},e),{setState:n,state:t,customComponents:u,widgetRegistry:s,messages:C,actions:k});if(e.widget){var l=s.getWidget(i.widget,E(E({},t),{scrollIntoView:T,payload:e.payload,actions:k}));return a().createElement(a().Fragment,null,a().createElement(y,E({customStyles:d.botMessageBox,withAvatar:c},i,{key:e.id})),a().createElement(o(),{condition:!i.loading,show:l||null}))}return a().createElement(y,E({customStyles:d.botMessageBox,key:e.id,withAvatar:c},i,{customComponents:u,messages:C,setState:n}))}(e,r)):"user"===e.type?a().createElement(a().Fragment,{key:e.id},function(e){var r=s.getWidget(e.widget,E(E({},t),{scrollIntoView:T,payload:e.payload,actions:k}));return a().createElement(a().Fragment,null,a().createElement(f,{message:e.message,key:e.id,customComponents:u}),r||null)}(e)):function(e,t){return!!t[e.type]}(e,p)?a().createElement(a().Fragment,{key:e.id},function(e){var r=p[e.type],o={setState:n,state:t,scrollIntoView:T,actionProvider:m,payload:e.payload,actions:k};if(e.widget){var c=s.getWidget(e.widget,E(E({},t),{scrollIntoView:T,payload:e.payload,actions:k}));return a().createElement(a().Fragment,null,r(o),c||null)}return r(o)}(e)):void 0})),a().createElement("div",{style:{paddingBottom:"15px"}})),a().createElement("div",{className:"react-chatbot-kit-chat-input-container"},a().createElement(o(),{condition:!!u.inputMessage,show:u.inputMessage&&u.inputMessage({input:x,setInputValue:j,handleSubmit:A,placeholder:R}),elseShow:W}))))},O=function(e){var t=e.message;return a().createElement("div",{className:"react-chatbot-kit-error"},a().createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),a().createElement("div",{className:"react-chatbot-kit-error-container"},a().createElement(y,{message:t,withAvatar:!0,loading:!1,id:1,customStyles:{backgroundColor:""},messages:[]})),a().createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))};var k=function(e){return e.widgets?e.widgets:[]},M=function(e){try{new e}catch(e){return!1}return!0},C=function(){return C=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},C.apply(this,arguments)};const N=function(e,t){var r=this;this.addWidget=function(e,t){var a=e.widgetName,n=e.widgetFunc,o=e.mapStateToProps,s=e.props;r[a]={widget:n,props:s,mapStateToProps:o,parentProps:C({},t)}},this.getWidget=function(e,t){var a=r[e];if(a){var n,o=C(C(C(C({scrollIntoView:t.scrollIntoView},a.parentProps),"object"==typeof(n=a.props)?n:{}),r.mapStateToProps(a.mapStateToProps,t)),{setState:r.setState,actionProvider:r.actionProvider||t.actions,actions:t.actions,state:t,payload:t.payload});return a.widget(o)||null}},this.mapStateToProps=function(e,t){if(e)return e.reduce((function(e,r){return e[r]=t[r],e}),{})},this.setState=e,this.actionProvider=t};var x=function(){return x=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},x.apply(this,arguments)},j=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const T=function(e){var t=e.config,n=e.actionProvider,o=e.messageParser,s=e.messageHistory,c=e.runInitialMessagesWithHistory,m=e.saveMessages,g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["config","actionProvider","messageParser","messageHistory","runInitialMessagesWithHistory","saveMessages"]),d="",f="";if(!t||!n||!o)return{configurationError:d="I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"};var h=function(e,t){var r=[];return e.initialMessages||r.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."),r}(t);if(h.length)return{invalidPropsError:f=h.reduce((function(e,t){return e+t}),"")};var p=function(e){return e.state?e.state:{}}(t);s&&Array.isArray(s)?t.initialMessages=j([],s,!0):"string"==typeof s&&Boolean(s)&&(c||(t.initialMessages=[]));var v,y,b,w=a().useState(x({messages:j([],t.initialMessages,!0)},p)),E=w[0],S=w[1],P=a().useRef(E.messages),O=a().useRef(),C=a().useRef();(0,r.useEffect)((function(){P.current=E.messages})),(0,r.useEffect)((function(){s&&Array.isArray(s)&&S((function(e){return x(x({},e),{messages:s})}))}),[]),(0,r.useEffect)((function(){var e=C.current;return function(){if(m&&"function"==typeof m){var t=e.innerHTML.toString();m(P.current,t)}}}),[]),(0,r.useEffect)((function(){O.current=E}),[E]);var T=n,A=o;return M(T)&&M(A)?(v=new n(i,S,u,O.current,l,g),y=new N(S,v),b=new o(v,O.current),k(t).forEach((function(e){return null==y?void 0:y.addWidget(e,g)}))):(v=n,b=o,y=new N(S,null),k(t).forEach((function(e){return null==y?void 0:y.addWidget(e,g)}))),{widgetRegistry:y,actionProv:v,messagePars:b,configurationError:d,invalidPropsError:f,state:E,setState:S,messageContainerRef:C,ActionProvider:T,MessageParser:A}};var A=function(){return A=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},A.apply(this,arguments)};const B=function(e){var t=e.actionProvider,r=e.messageParser,n=e.config,o=e.headerText,s=e.placeholderText,c=e.saveMessages,l=e.messageHistory,u=e.runInitialMessagesWithHistory,m=e.disableScrollToBottom,g=e.validator,d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["actionProvider","messageParser","config","headerText","placeholderText","saveMessages","messageHistory","runInitialMessagesWithHistory","disableScrollToBottom","validator"]),f=T(A({config:n,actionProvider:t,messageParser:r,messageHistory:l,saveMessages:c,runInitialMessagesWithHistory:u},d)),h=f.configurationError,p=f.invalidPropsError,v=f.ActionProvider,y=f.MessageParser,b=f.widgetRegistry,w=f.messageContainerRef,E=f.actionProv,S=f.messagePars,k=f.state,C=f.setState;if(h)return a().createElement(O,{message:h});if(p.length)return a().createElement(O,{message:p});var N=function(e){return e.customStyles?e.customStyles:{}}(n),x=function(e){return e.customComponents?e.customComponents:{}}(n),j=function(e){return e.botName?e.botName:"Bot"}(n),B=function(e){return e.customMessages?e.customMessages:{}}(n);return M(v)&&M(y)?a().createElement(P,{state:k,setState:C,widgetRegistry:b,actionProvider:E,messageParser:S,customMessages:B,customComponents:A({},x),botName:j,customStyles:A({},N),headerText:o,placeholderText:s,validator:g,messageHistory:l,disableScrollToBottom:m,messageContainerRef:w}):a().createElement(v,{state:k,setState:C,createChatBotMessage:i},a().createElement(y,null,a().createElement(P,{state:k,setState:C,widgetRegistry:b,actionProvider:v,messageParser:y,customMessages:B,customComponents:A({},x),botName:j,customStyles:A({},N),headerText:o,placeholderText:s,validator:g,messageHistory:l,disableScrollToBottom:m,messageContainerRef:w})))},H=B;module.exports=t})();