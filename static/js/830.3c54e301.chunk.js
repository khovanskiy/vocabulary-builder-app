"use strict";(self.webpackChunkvocabulary_expansion=self.webpackChunkvocabulary_expansion||[]).push([[830],{830:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var n=r(982),a=r(861),u=r(757);function i(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return(i=function(e){this.s=e,this.n=e.next}).prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var r=this.s.return;return void 0===r?Promise.resolve({value:e,done:!0}):t(r.apply(this.s,arguments))},throw:function(e){var r=this.s.return;return void 0===r?Promise.reject(e):t(r.apply(this.s,arguments))}},new i(e)}var o=function(){var e=(0,a.Z)(u.mark((function e(t,r){var a,c,s,l,f,p,v,h,d,b,y=arguments;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=y.length>2&&void 0!==y[2]?y[2]:t.name,c=y.length>3?y[3]:void 0,s=[],l=[],p=!1,v=!1,e.prev=4,h=function(){var e=d.value,n="".concat(a,"/").concat(e.name);"file"===e.kind?l.push(e.getFile().then((function(r){return r.directoryHandle=t,r.handle=e,Object.defineProperty(r,"webkitRelativePath",{configurable:!0,enumerable:!0,get:function(){return n}})}))):"directory"!==e.kind||!r||c&&c(e)||s.push(o(e,r,n,c))},b=function(e){var t,r,n,a=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,n=Symbol.iterator);a--;){if(r&&null!=(t=e[r]))return t.call(e);if(n&&null!=(t=e[n]))return new i(t.call(e));r="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}(t.values());case 7:return e.next=9,b.next();case 9:if(!(p=!(d=e.sent).done)){e.next=14;break}h();case 11:p=!1,e.next=7;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),v=!0,f=e.t0;case 19:if(e.prev=19,e.prev=20,e.t1=p&&null!=b.return,!e.t1){e.next=25;break}return e.next=25,b.return();case 25:if(e.prev=25,!v){e.next=28;break}throw f;case 28:return e.finish(25);case 29:return e.finish(19);case 30:return e.t2=[],e.t3=n.Z,e.next=34,Promise.all(s);case 34:return e.t4=e.sent.flat(),e.t5=(0,e.t3)(e.t4),e.t6=n.Z,e.next=39,Promise.all(l);case 39:return e.t7=e.sent,e.t8=(0,e.t6)(e.t7),e.abrupt("return",e.t2.concat.call(e.t2,e.t5,e.t8));case 42:case"end":return e.stop()}}),e,null,[[4,16,19,30],[20,,25,29]])})));return function(t,r){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)(u.mark((function e(){var t,r,n=arguments;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=n.length>0&&void 0!==n[0]?n[0]:{}).recursive=t.recursive||!1,e.next=4,window.showDirectoryPicker({id:t.id,startIn:t.startIn});case 4:return r=e.sent,e.abrupt("return",o(r,t.recursive,void 0,t.skipDirectory));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);