var Keyboard=function(e){function t(l){if(n[l])return n[l].exports;var a=n[l]={exports:{},id:l,loaded:!1};return e[l].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var l=n(3);e.exports=l["default"]||l},function(e,t){e.exports=React},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=l(a),o=function(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,l=e.width,a=void 0===l?24:l,o=e.height,s=void 0===o?24:o,u=e.fill,r=e.classes;return i["default"].createElement("svg",{width:a,height:s,fill:u,classes:r,viewBox:n},i["default"].createElement("path",{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"}))};t["default"]=o},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),u=n(1),r=l(u),c=n(4),d=l(c),f=n(6),p=l(f),h=n(5),y=l(h),v=n(7),m=l(v),b=n(2),k=l(b),g=n(8),C=l(g),w=n(9),E=l(w),B=function(e){function t(e){a(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentLanguage:"latin",showSymbols:!1,uppercase:!0},n.handleLetterButtonClick=n.handleLetterButtonClick.bind(n),n.handleBackspaceClick=n.handleBackspaceClick.bind(n),n.handleLanguageClick=n.handleLanguageClick.bind(n),n.handleShiftClick=n.handleShiftClick.bind(n),n.handleSymbolsClick=n.handleSymbolsClick.bind(n),n.getSymbolsKeyValue=n.getSymbolsKeyValue.bind(n),n.getKeys=n.getKeys.bind(n),n}return o(t,e),s(t,[{key:"handleLanguageClick",value:function(){this.setState({currentLanguage:"latin"===this.state.currentLanguage?"cyrrilic":"latin"})}},{key:"handleShiftClick",value:function(){this.setState({uppercase:!this.state.uppercase})}},{key:"handleSymbolsClick",value:function(){this.setState({showSymbols:!this.state.showSymbols})}},{key:"handleLetterButtonClick",value:function(e){var t=this,n=this.props.inputNode,l=n.value,a=n.selectionStart,i=n.selectionEnd,o=l.substring(0,a)+e+l.substring(i);this.props.onClick(o),setTimeout(function(){t.props.inputNode.focus(),t.props.inputNode.setSelectionRange(a+1,a+1)},0),this.setState({uppercase:!1})}},{key:"handleBackspaceClick",value:function(){var e=this,t=this.props.inputNode,n=t.value,l=t.selectionStart,a=t.selectionEnd,i=void 0,o=void 0;l===a?(i=n.substring(0,l-1)+n.substring(a),o=l-1):(i=n.substring(0,l)+n.substring(a),o=l),o=o>0?o:0,this.props.onClick(i),setTimeout(function(){e.props.inputNode.focus(),e.props.inputNode.setSelectionRange(o,o)},0),this.setState({uppercase:!i.length})}},{key:"getKeys",value:function(){var e=void 0;return e=this.state.showSymbols?m["default"]:"latin"===this.state.currentLanguage?p["default"]:y["default"],this.state.uppercase?e.map(function(e){return e.map(function(e){return e.toUpperCase()})}):e}},{key:"getSymbolsKeyValue",value:function(){var e=void 0;return e=this.state.showSymbols?"latin"===this.state.currentLanguage?"Abc":"Абв":".?!&"}},{key:"render",value:function(){var e=this,t=this.props,n=t.handleLeftBottomClick,l=t.handleRightBottomClick,a=t.leftBottomValue,i=t.rightBottomValue,o=this.getKeys(),s=[1,2,3,4,5,6,7,8,9,0],u=this.getSymbolsKeyValue(),c=n&&a,f=l&&i;return r["default"].createElement("div",{className:"keyboard"},r["default"].createElement("div",{className:"row"},s.map(function(t){return r["default"].createElement(d["default"],{value:t,onClick:e.handleLetterButtonClick,classes:"numberButton",index:t})}),r["default"].createElement(d["default"],{value:r["default"].createElement(k["default"],null),classes:"styles.button",onClick:this.handleBackspaceClick})),r["default"].createElement("div",{className:styles.row},o[0].map(function(t){return r["default"].createElement(d["default"],{value:t,onClick:e.handleLetterButtonClick,index:t})})),r["default"].createElement("div",{className:styles.row},r["default"].createElement("div",{className:styles.halfButton}),o[1].map(function(t){return r["default"].createElement(d["default"],{value:t,onClick:e.handleLetterButtonClick,index:t})}),r["default"].createElement("div",{className:styles.halfButton})),r["default"].createElement("div",{className:styles.row},r["default"].createElement(d["default"],{value:r["default"].createElement(E["default"],null),classes:"styles.button",onClick:this.handleShiftClick}),o[2].map(function(t){return r["default"].createElement(d["default"],{value:t,onClick:e.handleLetterButtonClick,index:t})}),r["default"].createElement(d["default"],{value:u,classes:"styles.button",onClick:this.handleSymbolsClick})),r["default"].createElement("div",{className:styles.row},c?r["default"].createElement(d["default"],{value:a,classes:"styles.leftBottomButton",onClick:this.handleLeftBottomClick}):null,r["default"].createElement(d["default"],{value:r["default"].createElement(C["default"],null),classes:"styles.button",onClick:this.handleLanguageClick}),r["default"].createElement(d["default"],{value:" ",classes:"styles.space",onClick:this.handleLetterButtonClick}),f?r["default"].createElement(d["default"],{value:i,classes:"styles.rightBottomButton",onClick:this.handleRightBottomClick}):null))}}]),t}(u.Component);B.propTypes={leftBottomValue:u.PropTypes.oneOfType([u.PropTypes.string.isRequired,,u.PropTypes.node.isRequired]),rightBottomValue:u.PropTypes.oneOfType([u.PropTypes.string.isRequired,,u.PropTypes.node.isRequired]),handleLeftBottomClick:u.PropTypes.func.isRequired,handleRightBottomClick:u.PropTypes.func.isRequired,inputNode:u.PropTypes.any.isRequired,onClick:u.PropTypes.func.isRequired},t["default"]=B,t["default"]=B},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),u=n(1),r=l(u),c=function(e){function t(e){a(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return o(t,e),s(t,[{key:"handleClick",value:function(){this.props.onClick(this.props.value)}},{key:"render",value:function(){return r["default"].createElement("button",{className:"styles.button "+this.props.classes,onClick:this.handleClick},this.props.value)}}]),t}(u.Component);c.propTypes={value:u.PropTypes.oneOfType([u.PropTypes.string.isRequired,,u.PropTypes.node.isRequired]),classes:u.PropTypes.string,onClick:u.PropTypes.func.isRequired},t["default"]=c,t["default"]=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[["й","ц","у","к","е","н","г","ш","щ","з","х","ъ"],["ф","ы","в","а","п","р","о","л","д","ж","э"],["я","ч","с","м","и","т","ь","б","ю"]]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m"]]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[["=","+","%","*","[","]","{","}","<",">"],["@",":",";","_","-","#","(",")","/","\\"],[".",",","?","!","'",'"']]},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=l(a),o=function(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,l=e.width,a=void 0===l?24:l,o=e.height,s=void 0===o?24:o,u=e.fill,r=e.classes;return i["default"].createElement("svg",{width:a,height:s,fill:u,classes:r,viewBox:n},i["default"].createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}))};t["default"]=o},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=l(a),o=function(e){var t=e.viewBox,n=void 0===t?"0 0 32 32":t,l=e.width,a=void 0===l?24:l,o=e.height,s=void 0===o?24:o,u=e.fill,r=e.classes;return i["default"].createElement("svg",{width:a,height:s,fill:u,classes:r,viewBox:n},i["default"].createElement("path",{d:"M21 28h-10c-0.552 0-1-0.448-1-1v-11h-4c-0.404 0-0.769-0.244-0.924-0.617s-0.069-0.804 0.217-1.090l10-10c0.391-0.39 1.024-0.39 1.414 0l10 10c0.286 0.286 0.372 0.716 0.217 1.090s-0.519 0.617-0.924 0.617h-4v11c0 0.552-0.448 1-1 1zM12 26h8v-11c0-0.552 0.448-1 1-1h2.586l-7.586-7.586-7.586 7.586h2.586c0.552 0 1 0.448 1 1v11z"}))};t["default"]=o}]);
//# sourceMappingURL=Keyboard.js.map