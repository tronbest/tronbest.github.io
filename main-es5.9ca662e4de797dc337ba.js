function _defineProperty(e,t,n){return t in
e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function
_slicedToArray(e,t){return
_arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function
_nonIterableRest(){throw new TypeError("Invalid attempt to destructure
non-iterable instance.\nIn order to be iterable, non-array objects must have a
[Symbol.iterator]() method.")}function
_iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in
Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var
o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw
a}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function
_toConsumableArray(e){return
_arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function
_nonIterableSpread(){throw new TypeError("Invalid attempt to spread
non-iterable instance.\nIn order to be iterable, non-array objects must have a
[Symbol.iterator]() method.")}function
_iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in
Object(e))return Array.from(e)}function
_arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function
_createForOfIteratorHelper(e,t){var n;if("undefined"==typeof
Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof
e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return
r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw
e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable
instance.\nIn order to be iterable, non-array objects must have a
[Symbol.iterator]() method.")}var
a,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var
e=n.next();return
o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw
a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof
e)return _arrayLikeToArray(e,t);var
n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void
0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var
n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function
_construct(e,t,n){return(_construct=_isNativeReflectConstruct()?Reflect.construct:function(e,t,n){var
r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return
n&&_setPrototypeOf(i,n.prototype),i}).apply(null,arguments)}function
_get(e,t,n){return(_get="undefined"!=typeof
Reflect&&Reflect.get?Reflect.get:function(e,t,n){var
r=_superPropBase(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return
i.get?i.get.call(n):i.value}})(e,t,n||e)}function
_superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return
e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new
TypeError("Super expression must either be null or a
function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function
_setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return
e.__proto__=t,e})(e,t)}function _createSuper(e){var
t=_isNativeReflectConstruct();return function(){var
n,r=_getPrototypeOf(e);if(t){var
i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else
n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function
_possibleConstructorReturn(e,t){return!t||"object"!=typeof
t&&"function"!=typeof t?_assertThisInitialized(e):t}function
_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return e}function
_isNativeReflectConstruct(){if("undefined"==typeof
Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof
Proxy)return!0;try{return
Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function
_getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return
e.__proto__||Object.getPrototypeOf(e)})(e)}function
_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a
class as a function")}function _defineProperties(e,t){for(var
n=0;n<t.length;n++){var
r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in
r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function
_createClass(e,t,n){return
t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("zUnb")},zUnb:function(e,t,n){"use
strict";function r(e){return"function"==typeof e}n.r(t);var
i=!1,a={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){var
t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated
synchronous error handling behavior by code at: \n"+t.stack)}else
i&&console.log("RxJS: Back to a better error behavior. Thank you.
<3");i=e},get useDeprecatedSynchronousErrorHandling(){return i}};function
o(e){setTimeout((function(){throw e}),0)}var
s={closed:!0,next:function(e){},error:function(e){if(a.useDeprecatedSynchronousErrorHandling)throw
e;o(e)},complete:function(){}},u=Array.isArray||function(e){return
e&&"number"==typeof e.length};function l(e){return null!==e&&"object"==typeof
e}var c,h=function(){function e(e){return
Error.call(this),this.message=e?"".concat(e.length," errors occurred during
unsubscription:\n").concat(e.map((function(e,t){return"".concat(t+1,")
").concat(e.toString())})).join("\n 
")):"",this.name="UnsubscriptionError",this.errors=e,this}return
e.prototype=Object.create(Error.prototype),e}(),f=((c=function(){function
e(t){_classCallCheck(this,e),this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return
_createClass(e,[{key:"unsubscribe",value:function(){var t;if(!this.closed){var
n=this._parentOrParents,i=this._unsubscribe,a=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n
instanceof e)n.remove(this);else if(null!==n)for(var
o=0;o<n.length;++o)n[o].remove(this);if(r(i))try{i.call(this)}catch(v){t=v
instanceof h?d(v.errors):[v]}if(u(a))for(var s=-1,c=a.length;++s<c;){var
f=a[s];if(l(f))try{f.unsubscribe()}catch(v){t=t||[],v instanceof
h?t=t.concat(d(v.errors)):t.push(v)}}if(t)throw new
h(t)}}},{key:"add",value:function(t){var n=t;if(!t)return
e.EMPTY;switch(typeof t){case"function":n=new
e(t);case"object":if(n===this||n.closed||"function"!=typeof
n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n
instanceof e)){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new
Error("unrecognized teardown "+t+" added to Subscription.")}var
i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof
e){if(i===this)return
n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return
n;i.push(this)}var a=this._subscriptions;return
null===a?this._subscriptions=[n]:a.push(n),n}},{key:"remove",value:function(e){var
t=this._subscriptions;if(t){var
n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}]),e}()).EMPTY=function(e){return
e.closed=!0,e}(new c),c);function d(e){return e.reduce((function(e,t){return
e.concat(t instanceof h?t.errors:t)}),[])}var v="function"==typeof
Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),p=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var
a;switch(_classCallCheck(this,n),(a=t.call(this)).syncErrorValue=null,a.syncErrorThrown=!1,a.syncErrorThrowable=!1,a.isStopped=!1,arguments.length){case
0:a.destination=s;break;case
1:if(!e){a.destination=s;break}if("object"==typeof e){e instanceof
n?(a.syncErrorThrowable=e.syncErrorThrowable,a.destination=e,e.add(_assertThisInitialized(a))):(a.syncErrorThrowable=!0,a.destination=new
y(_assertThisInitialized(a),e));break}default:a.syncErrorThrowable=!0,a.destination=new
y(_assertThisInitialized(a),e,r,i)}return a}return
_createClass(n,[{key:v,value:function(){return
this}},{key:"next",value:function(e){this.isStopped||this._next(e)}},{key:"error",value:function(e){this.isStopped||(this.isStopped=!0,this._error(e))}},{key:"complete",value:function(){this.isStopped||(this.isStopped=!0,this._complete())}},{key:"unsubscribe",value:function(){this.closed||(this.isStopped=!0,_get(_getPrototypeOf(n.prototype),"unsubscribe",this).call(this))}},{key:"_next",value:function(e){this.destination.next(e)}},{key:"_error",value:function(e){this.destination.error(e),this.unsubscribe()}},{key:"_complete",value:function(){this.destination.complete(),this.unsubscribe()}},{key:"_unsubscribeAndRecycle",value:function(){var
e=this._parentOrParents;return
this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}],[{key:"create",value:function(e,t,r){var
i=new n(e,t,r);return
i.syncErrorThrowable=!1,i}}]),n}(f),y=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,i,a,o){var
u,l;_classCallCheck(this,n),(u=t.call(this))._parentSubscriber=e;var
c=_assertThisInitialized(u);return
r(i)?l=i:i&&(l=i.next,a=i.error,o=i.complete,i!==s&&(r((c=Object.create(i)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(_assertThisInitialized(u)))),u._context=c,u._next=l,u._error=a,u._complete=o,u}return
_createClass(n,[{key:"next",value:function(e){if(!this.isStopped&&this._next){var
t=this._parentSubscriber;a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}},{key:"error",value:function(e){if(!this.isStopped){var
t=this._parentSubscriber,n=a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else
if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):o(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw
e;o(e)}}}},{key:"complete",value:function(){var e=this;if(!this.isStopped){var
t=this._parentSubscriber;if(this._complete){var n=function(){return
e._complete.call(e._context)};a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else
this.unsubscribe()}}},{key:"__tryOrUnsub",value:function(e,t){try{e.call(this._context,t)}catch(n){if(this.unsubscribe(),a.useDeprecatedSynchronousErrorHandling)throw
n;o(n)}}},{key:"__tryOrSetError",value:function(e,t,n){if(!a.useDeprecatedSynchronousErrorHandling)throw
new Error("bad call");try{t.call(this._context,n)}catch(r){return
a.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=r,e.syncErrorThrown=!0,!0):(o(r),!0)}return!1}},{key:"_unsubscribe",value:function(){var
e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}]),n}(p),m="function"==typeof
Symbol&&Symbol.observable||"@@observable";function g(e){return e}function
_(){for(var e=arguments.length,t=new
Array(e),n=0;n<e;n++)t[n]=arguments[n];return k(t)}function k(e){return
0===e.length?g:1===e.length?e[0]:function(t){return
e.reduce((function(e,t){return t(e)}),t)}}var C,w=((C=function(){function
e(t){_classCallCheck(this,e),this._isScalar=!1,t&&(this._subscribe=t)}return
_createClass(e,[{key:"lift",value:function(t){var n=new e;return
n.source=this,n.operator=t,n}},{key:"subscribe",value:function(e,t,n){var
r=this.operator,i=function(e,t,n){if(e){if(e instanceof p)return
e;if(e[v])return e[v]()}return e||t||n?new p(e,t,n):new
p(s)}(e,t,n);if(i.add(r?r.call(i,this.source):this.source||a.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),a.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw
i.syncErrorValue;return i}},{key:"_trySubscribe",value:function(e){try{return
this._subscribe(e)}catch(t){a.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){var
t=e,n=t.closed,r=t.destination,i=t.isStopped;if(n||i)return!1;e=r&&r
instanceof
p?r:null}return!0}(e)?e.error(t):console.warn(t)}}},{key:"forEach",value:function(e,t){var
n=this;return new(t=b(t))((function(t,r){var
i;i=n.subscribe((function(t){try{e(t)}catch(n){r(n),i&&i.unsubscribe()}}),r,t)}))}},{key:"_subscribe",value:function(e){var
t=this.source;return t&&t.subscribe(e)}},{key:m,value:function(){return
this}},{key:"pipe",value:function(){for(var e=arguments.length,t=new
Array(e),n=0;n<e;n++)t[n]=arguments[n];return
0===t.length?this:k(t)(this)}},{key:"toPromise",value:function(e){var
t=this;return new(e=b(e))((function(e,n){var r;t.subscribe((function(e){return
r=e}),(function(e){return n(e)}),(function(){return
e(r)}))}))}}]),e}()).create=function(e){return new C(e)},C);function
b(e){if(e||(e=a.Promise||Promise),!e)throw new Error("no Promise impl
found");return e}var S,E=function(){function e(){return
Error.call(this),this.message="object
unsubscribed",this.name="ObjectUnsubscribedError",this}return
e.prototype=Object.create(Error.prototype),e}(),T=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this)).subject=e,i.subscriber=r,i.closed=!1,i}return
_createClass(n,[{key:"unsubscribe",value:function(){if(!this.closed){this.closed=!0;var
e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var
n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}}}]),n}(f),x=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){var r;return
_classCallCheck(this,n),(r=t.call(this,e)).destination=e,r}return
n}(p),A=((S=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var
e;return
_classCallCheck(this,n),(e=t.call(this)).observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return
_createClass(n,[{key:v,value:function(){return new
x(this)}},{key:"lift",value:function(e){var t=new O(this,this);return
t.operator=e,t}},{key:"next",value:function(e){if(this.closed)throw new
E;if(!this.isStopped)for(var
t=this.observers,n=t.length,r=t.slice(),i=0;i<n;i++)r[i].next(e)}},{key:"error",value:function(e){if(this.closed)throw
new E;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var
t=this.observers,n=t.length,r=t.slice(),i=0;i<n;i++)r[i].error(e);this.observers.length=0}},{key:"complete",value:function(){if(this.closed)throw
new E;this.isStopped=!0;for(var
e=this.observers,t=e.length,n=e.slice(),r=0;r<t;r++)n[r].complete();this.observers.length=0}},{key:"unsubscribe",value:function(){this.isStopped=!0,this.closed=!0,this.observers=null}},{key:"_trySubscribe",value:function(e){if(this.closed)throw
new E;return
_get(_getPrototypeOf(n.prototype),"_trySubscribe",this).call(this,e)}},{key:"_subscribe",value:function(e){if(this.closed)throw
new E;return
this.hasError?(e.error(this.thrownError),f.EMPTY):this.isStopped?(e.complete(),f.EMPTY):(this.observers.push(e),new
T(this,e))}},{key:"asObservable",value:function(){var e=new w;return
e.source=this,e}}]),n}(w)).create=function(e,t){return new
O(e,t)},S),O=function(e){_inherits(n,e);var t=_createSuper(n);function
n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this)).destination=e,i.source=r,i}return
_createClass(n,[{key:"next",value:function(e){var
t=this.destination;t&&t.next&&t.next(e)}},{key:"error",value:function(e){var
t=this.destination;t&&t.error&&this.destination.error(e)}},{key:"complete",value:function(){var
e=this.destination;e&&e.complete&&this.destination.complete()}},{key:"_subscribe",value:function(e){return
this.source?this.source.subscribe(e):f.EMPTY}}]),n}(A);function R(e){return
e&&"function"==typeof e.schedule}var I=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this)).parent=e,a.outerValue=r,a.outerIndex=i,a.index=0,a}return
_createClass(n,[{key:"_next",value:function(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)}},{key:"_error",value:function(e){this.parent.notifyError(e,this),this.unsubscribe()}},{key:"_complete",value:function(){this.parent.notifyComplete(this),this.unsubscribe()}}]),n}(p),P=function(e){return
function(t){for(var
n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()}};var
N="function"==typeof
Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator",D=function(e){return
e&&"number"==typeof e.length&&"function"!=typeof e};function
V(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}var
j=function(e){if(e&&"function"==typeof e[m])return r=e,function(e){var
t=r[m]();if("function"!=typeof t.subscribe)throw new TypeError("Provided
object does not correctly implement Symbol.observable");return
t.subscribe(e)};if(D(e))return P(e);if(V(e))return n=e,function(e){return
n.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return
e.error(t)})).then(null,o),e};if(e&&"function"==typeof e[N])return
t=e,function(e){for(var n=t[N]();;){var
r=n.next();if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof
n.return&&e.add((function(){n.return&&n.return()})),e};var t,n,r,i=l(e)?"an
invalid object":"'".concat(e,"'");throw new TypeError("You provided
".concat(i," where a stream was expected. You can provide an Observable,
Promise, Array, or Iterable."))};function F(e,t,n,r){var
i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new
I(e,n,r);if(!i.closed)return t instanceof w?t.subscribe(i):j(t)(i)}var
M=function(e){_inherits(n,e);var t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"notifyNext",value:function(e,t,n,r,i){this.destination.next(t)}},{key:"notifyError",value:function(e,t){this.destination.error(e)}},{key:"notifyComplete",value:function(e){this.destination.complete()}}]),n}(p);function
L(e,t){return function(n){if("function"!=typeof e)throw new
TypeError("argument is not a function. Are you looking for `mapTo()`?");return
n.lift(new U(e,t))}}var U=function(){function
e(t,n){_classCallCheck(this,e),this.project=t,this.thisArg=n}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
H(e,this.project,this.thisArg))}}]),e}(),H=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this,e)).project=r,a.count=0,a.thisArg=i||_assertThisInitialized(a),a}return
_createClass(n,[{key:"_next",value:function(e){var
t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(n){return void
this.destination.error(n)}this.destination.next(t)}}]),n}(p);function
z(e,t){return new w((function(n){var r=new f,i=0;return
r.add(t.schedule((function(){i!==e.length?(n.next(e[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}function
B(e,t){return t?function(e,t){if(null!=e){if(function(e){return
e&&"function"==typeof e[m]}(e))return function(e,t){return new
w((function(n){var r=new f;return r.add(t.schedule((function(){var
i=e[m]();r.add(i.subscribe({next:function(e){r.add(t.schedule((function(){return
n.next(e)})))},error:function(e){r.add(t.schedule((function(){return
n.error(e)})))},complete:function(){r.add(t.schedule((function(){return
n.complete()})))}}))}))),r}))}(e,t);if(V(e))return function(e,t){return new
w((function(n){var r=new f;return r.add(t.schedule((function(){return
e.then((function(e){r.add(t.schedule((function(){n.next(e),r.add(t.schedule((function(){return
n.complete()})))})))}),(function(e){r.add(t.schedule((function(){return
n.error(e)})))}))}))),r}))}(e,t);if(D(e))return z(e,t);if(function(e){return
e&&"function"==typeof e[N]}(e)||"string"==typeof e)return
function(e,t){if(!e)throw new Error("Iterable cannot be null");return new
w((function(n){var r,i=new f;return i.add((function(){r&&"function"==typeof
r.return&&r.return()})),i.add(t.schedule((function(){r=e[N](),i.add(t.schedule((function(){if(!n.closed){var
e,t;try{var i=r.next();e=i.value,t=i.done}catch(a){return void
n.error(a)}t?n.complete():(n.next(e),this.schedule())}})))}))),i}))}(e,t)}throw
new TypeError((null!==e&&typeof e||e)+" is not observable")}(e,t):e instanceof
w?e:new w(j(e))}function q(e,t){var n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:Number.POSITIVE_INFINITY;return"function"==typeof
t?function(r){return r.pipe(q((function(n,r){return
B(e(n,r)).pipe(L((function(e,i){return t(n,e,r,i)})))}),n))}:("number"==typeof
t&&(n=t),function(t){return t.lift(new W(e,n))})}var W=function(){function
e(t){var n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY;_classCallCheck(this,e),this.project=t,this.concurrent=n}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
G(e,this.project,this.concurrent))}}]),e}(),G=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i,a=arguments.length>2&&void
0!==arguments[2]?arguments[2]:Number.POSITIVE_INFINITY;return
_classCallCheck(this,n),(i=t.call(this,e)).project=r,i.concurrent=a,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return
_createClass(n,[{key:"_next",value:function(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)}},{key:"_tryNext",value:function(e){var
t,n=this.index++;try{t=this.project(e,n)}catch(r){return void
this.destination.error(r)}this.active++,this._innerSub(t,e,n)}},{key:"_innerSub",value:function(e,t,n){var
r=new I(this,t,n),i=this.destination;i.add(r);var a=F(this,e,void 0,void
0,r);a!==r&&i.add(a)}},{key:"_complete",value:function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}},{key:"notifyNext",value:function(e,t,n,r,i){this.destination.next(t)}},{key:"notifyComplete",value:function(e){var
t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}]),n}(M);function
Q(){var e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY;return q(g,e)}function
Z(e,t){return t?z(e,t):new w(P(e))}function K(){return function(e){return
e.lift(new J(e))}}var $,J=function(){function
e(t){_classCallCheck(this,e),this.connectable=t}return
_createClass(e,[{key:"call",value:function(e,t){var
n=this.connectable;n._refCount++;var r=new X(e,n),i=t.subscribe(r);return
r.closed||(r.connection=n.connect()),i}}]),e}(),X=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).connectable=r,i}return
_createClass(n,[{key:"_unsubscribe",value:function(){var
e=this.connectable;if(e){this.connectable=null;var
t=e._refCount;if(t<=0)this.connection=null;else
if(e._refCount=t-1,t>1)this.connection=null;else{var
n=this.connection,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else
this.connection=null}}]),n}(p),Y={operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:($=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this)).source=e,i.subjectFactory=r,i._refCount=0,i._isComplete=!1,i}return
_createClass(n,[{key:"_subscribe",value:function(e){return
this.getSubject().subscribe(e)}},{key:"getSubject",value:function(){var
e=this._subject;return
e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject}},{key:"connect",value:function(){var
e=this._connection;return e||(this._isComplete=!1,(e=this._connection=new
f).add(this.source.subscribe(new
ee(this.getSubject(),this))),e.closed&&(this._connection=null,e=f.EMPTY)),e}},{key:"refCount",value:function(){return
K()(this)}}]),n}(w).prototype)._subscribe},_isComplete:{value:$._isComplete,writable:!0},getSubject:{value:$.getSubject},connect:{value:$.connect},refCount:{value:$.refCount}},ee=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).connectable=r,i}return
_createClass(n,[{key:"_error",value:function(e){this._unsubscribe(),_get(_getPrototypeOf(n.prototype),"_error",this).call(this,e)}},{key:"_complete",value:function(){this.connectable._isComplete=!0,this._unsubscribe(),_get(_getPrototypeOf(n.prototype),"_complete",this).call(this)}},{key:"_unsubscribe",value:function(){var
e=this.connectable;if(e){this.connectable=null;var
t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}}}]),n}(x);function
te(){return new A}function ne(e){return{toString:e}.toString()}function
re(e,t,n){return ne((function(){var r=function(e){return function(){if(e){var
t=e.apply(void 0,arguments);for(var n in t)this[n]=t[n]}}}(t);function
i(){for(var e=arguments.length,t=new
Array(e),n=0;n<e;n++)t[n]=arguments[n];if(this instanceof i)return
r.apply(this,t),this;var a=_construct(i,t);return o.annotation=a,o;function
o(e,t,n){for(var
r=e.hasOwnProperty("__parameters__")?e.__parameters__:Object.defineProperty(e,"__parameters__",{value:[]}).__parameters__;r.length<=n;)r.push(null);return(r[n]=r[n]||[]).push(a),e}}return
n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=e,i.annotationCls=i,i}))}var
ie=re("Inject",(function(e){return{token:e}})),ae=re("Optional"),oe=re("Self"),se=re("SkipSelf"),ue=function(e){return
e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}({});function
le(e){for(var t in e)if(e[t]===le)return t;throw Error("Could not find renamed
property on target object.")}function ce(e,t){for(var n in
t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function
he(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void
0}}function
fe(e){return{factory:e.factory,providers:e.providers||[],imports:e.imports||[]}}function
de(e){return ve(e,e[ye])||ve(e,e[_e])}function ve(e,t){return
t&&t.token===e?t:null}function pe(e){return
e&&(e.hasOwnProperty(me)||e.hasOwnProperty(ke))?e[me]:null}var
ye=le({"\u0275prov":le}),me=le({"\u0275inj":le}),ge=le({"\u0275provFallback":le}),_e=le({ngInjectableDef:le}),ke=le({ngInjectorDef:le});function
Ce(e){if("string"==typeof e)return
e;if(Array.isArray(e))return"["+e.map(Ce).join(",
")+"]";if(null==e)return""+e;if(e.overriddenName)return""+e.overriddenName;if(e.name)return""+e.name;var
t=e.toString();if(null==t)return""+t;var
n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function we(e,t){return
null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}var
be=le({__forward_ref__:le});function Se(e){return
e.__forward_ref__=Se,e.toString=function(){return Ce(this())},e}function
Ee(e){return Te(e)?e():e}function Te(e){return"function"==typeof
e&&e.hasOwnProperty(be)&&e.__forward_ref__===Se}var xe,Ae="undefined"!=typeof
globalThis&&globalThis,Oe="undefined"!=typeof
window&&window,Re="undefined"!=typeof self&&"undefined"!=typeof
WorkerGlobalScope&&self instanceof
WorkerGlobalScope&&self,Ie="undefined"!=typeof
global&&global,Pe=Ae||Ie||Oe||Re,Ne=le({"\u0275cmp":le}),De=le({"\u0275dir":le}),Ve=le({"\u0275pipe":le}),je=le({"\u0275mod":le}),Fe=le({"\u0275loc":le}),Me=le({"\u0275fac":le}),Le=le({__NG_ELEMENT_ID__:le}),Ue=function(){function
e(t,n){_classCallCheck(this,e),this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void
0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void
0!==n&&(this.\u0275prov=he({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}return
_createClass(e,[{key:"toString",value:function(){return"InjectionToken
"+this._desc}}]),e}(),He=new
Ue("INJECTOR",-1),ze={},Be=/\n/gm,qe=le({provide:String,useValue:le}),We=void
0;function Ge(e){var t=We;return We=e,t}function Qe(e){var t=xe;return
xe=e,t}function Ze(e){var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:ue.Default;if(void 0===We)throw new
Error("inject() must be called from an injection context");return
null===We?$e(e,void 0,t):We.get(e,t&ue.Optional?null:void 0,t)}function
Ke(e){var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:ue.Default;return(xe||Ze)(Ee(e),t)}function
$e(e,t,n){var r=de(e);if(r&&"root"==r.providedIn)return void
0===r.value?r.value=r.factory():r.value;if(n&ue.Optional)return null;if(void
0!==t)return t;throw new Error("Injector: NOT_FOUND
[".concat(Ce(e),"]"))}function Je(e){for(var t=[],n=0;n<e.length;n++){var
r=Ee(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments
array must have arguments.");for(var i=void
0,a=ue.Default,o=0;o<r.length;o++){var s=r[o];s instanceof
ae||"Optional"===s.ngMetadataName||s===ae?a|=ue.Optional:s instanceof
se||"SkipSelf"===s.ngMetadataName||s===se?a|=ue.SkipSelf:s instanceof
oe||"Self"===s.ngMetadataName||s===oe?a|=ue.Self:i=s instanceof
ie||s===ie?s.token:s}t.push(Ke(i,a))}else t.push(Ke(r))}return t}var
Xe=function(){function e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"get",value:function(e){var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:ze;if(t===ze){var n=new
Error("NullInjectorError: No provider for ".concat(Ce(e),"!"));throw
n.name="NullInjectorError",n}return t}}]),e}(),Ye=function
e(){_classCallCheck(this,e)},et=function e(){_classCallCheck(this,e)};function
tt(e,t){e.forEach((function(e){return
Array.isArray(e)?tt(e,t):t(e)}))}function
nt(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function rt(e,t){return
t>=e.length-1?e.pop():e.splice(t,1)[0]}function it(e,t,n){var r=ot(e,t);return
r>=0?e[1|r]=n:function(e,t,n,r){var i=e.length;if(i==t)e.push(n,r);else
if(1===i)e.push(r,e[0]),e[0]=n;else{for(i--,e.push(e[i-1],e[i]);i>t;)e[i]=e[i-2],i--;e[t]=n,e[t+1]=r}}(e,r=~r,t,n),r}function
at(e,t){var n=ot(e,t);if(n>=0)return e[1|n]}function ot(e,t){return
function(e,t,n){for(var r=0,i=e.length>>1;i!==r;){var
a=r+(i-r>>1),o=e[a<<1];if(t===o)return
a<<1;o>t?i=a:r=a+1}return~(i<<1)}(e,t)}var st=function(){var
e={OnPush:0,Default:1};return
e[e.OnPush]="OnPush",e[e.Default]="Default",e}(),ut=function(){var
e={Emulated:0,Native:1,None:2,ShadowDom:3};return
e[e.Emulated]="Emulated",e[e.Native]="Native",e[e.None]="None",e[e.ShadowDom]="ShadowDom",e}(),lt={},ct=[],ht=0;function
ft(e){return ne((function(){var
t=e.type,n=t.prototype,r={},i={type:t,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onChanges:null,onInit:n.ngOnInit||null,doCheck:n.ngDoCheck||null,afterContentInit:n.ngAfterContentInit||null,afterContentChecked:n.ngAfterContentChecked||null,afterViewInit:n.ngAfterViewInit||null,afterViewChecked:n.ngAfterViewChecked||null,onDestroy:n.ngOnDestroy||null,onPush:e.changeDetection===st.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||ct,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||ut.Emulated,id:"c",styles:e.styles||ct,_:null,setInput:null,schemas:e.schemas||null,tView:null},a=e.directives,o=e.features,s=e.pipes;return
i.id+=ht++,i.inputs=mt(e.inputs,r),i.outputs=mt(e.outputs),o&&o.forEach((function(e){return
e(i)})),i.directiveDefs=a?function(){return("function"==typeof
a?a():a).map(dt)}:null,i.pipeDefs=s?function(){return("function"==typeof
s?s():s).map(vt)}:null,i}))}function dt(e){return _t(e)||function(e){return
e[De]||null}(e)}function vt(e){return function(e){return e[Ve]||null}(e)}var
pt={};function yt(e){var
t={type:e.type,bootstrap:e.bootstrap||ct,declarations:e.declarations||ct,imports:e.imports||ct,exports:e.exports||ct,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return
null!=e.id&&ne((function(){pt[e.id]=e.type})),t}function
mt(e,t){if(null==e)return lt;var n={};for(var r in
e)if(e.hasOwnProperty(r)){var
i=e[r],a=i;Array.isArray(i)&&(a=i[1],i=i[0]),n[i]=r,t&&(t[i]=a)}return n}var
gt=ft;function _t(e){return e[Ne]||null}function kt(e,t){return
e.hasOwnProperty(Me)?e[Me]:null}function Ct(e,t){var
n=e[je]||null;if(!n&&!0===t)throw new Error("Type ".concat(Ce(e)," does not
have '\u0275mod' property."));return n}function wt(e){return
Array.isArray(e)&&"object"==typeof e[1]}function bt(e){return
Array.isArray(e)&&!0===e[1]}function St(e){return 0!=(8&e.flags)}function
Et(e){return 2==(2&e.flags)}function Tt(e){return 1==(1&e.flags)}function
xt(e){return null!==e.template}function At(e){return 0!=(512&e[2])}var Ot=void
0;function Rt(){return void 0!==Ot?Ot:"undefined"!=typeof
document?document:void 0}function It(e){return!!e.listen}var
Pt={createRenderer:function(e,t){return Rt()}};function
Nt(e){for(;Array.isArray(e);)e=e[0];return e}function Dt(e,t){return
Nt(t[e+20])}function Vt(e,t){return Nt(t[e.index])}function jt(e,t){return
e.data[t+20]}function Ft(e,t){var n=t[e];return wt(n)?n:n[0]}function
Mt(e){var t=function(e){return e.__ngContext__||null}(e);return
t?Array.isArray(t)?t:t.lView:null}function Lt(e){return
128==(128&e[2])}function Ut(e,t){return null===e||null==t?null:e[t]}function
Ht(e){e[18]=0}function zt(e,t){e[5]+=t;for(var
n=e,r=e[3];null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]}var
Bt={lFrame:ln(null),bindingsEnabled:!0,checkNoChangesMode:!1};function
qt(){return Bt.bindingsEnabled}function Wt(){return Bt.lFrame.lView}function
Gt(){return Bt.lFrame.tView}function Qt(){return
Bt.lFrame.previousOrParentTNode}function
Zt(e,t){Bt.lFrame.previousOrParentTNode=e,Bt.lFrame.isParent=t}function
Kt(){return Bt.lFrame.isParent}function $t(){Bt.lFrame.isParent=!1}function
Jt(){return Bt.checkNoChangesMode}function
Xt(e){Bt.checkNoChangesMode=e}function Yt(){return
Bt.lFrame.bindingIndex++}function en(e){var
t=Bt.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function
tn(e,t){var n=Bt.lFrame;n.bindingIndex=n.bindingRootIndex=e,nn(t)}function
nn(e){Bt.lFrame.currentDirectiveIndex=e}function rn(e){var
t=Bt.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}function
an(e){Bt.lFrame.currentQueryIndex=e}function on(e,t){var
n=un();Bt.lFrame=n,n.previousOrParentTNode=t,n.lView=e}function sn(e,t){var
n=un(),r=e[1];Bt.lFrame=n,n.previousOrParentTNode=t,n.lView=e,n.tView=r,n.contextLView=e,n.bindingIndex=r.bindingStartIndex}function
un(){var e=Bt.lFrame,t=null===e?null:e.child;return null===t?ln(e):t}function
ln(e){var
t={previousOrParentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:0,contextLView:null,elementDepthCount:0,currentNamespace:null,currentSanitizer:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null};return
null!==e&&(e.child=t),t}function cn(){var e=Bt.lFrame;return
Bt.lFrame=e.parent,e.previousOrParentTNode=null,e.lView=null,e}var
hn=cn;function fn(){var
e=cn();e.isParent=!0,e.tView=null,e.selectedIndex=0,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.currentSanitizer=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function
dn(){return Bt.lFrame.selectedIndex}function
vn(e){Bt.lFrame.selectedIndex=e}function pn(){var e=Bt.lFrame;return
jt(e.tView,e.selectedIndex)}function yn(e,t){for(var
n=t.directiveStart,r=t.directiveEnd;n<r;n++){var
i=e.data[n];i.afterContentInit&&(e.contentHooks||(e.contentHooks=[])).push(-n,i.afterContentInit),i.afterContentChecked&&((e.contentHooks||(e.contentHooks=[])).push(n,i.afterContentChecked),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,i.afterContentChecked)),i.afterViewInit&&(e.viewHooks||(e.viewHooks=[])).push(-n,i.afterViewInit),i.afterViewChecked&&((e.viewHooks||(e.viewHooks=[])).push(n,i.afterViewChecked),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,i.afterViewChecked)),null!=i.onDestroy&&(e.destroyHooks||(e.destroyHooks=[])).push(n,i.onDestroy)}}function
mn(e,t,n){kn(e,t,3,n)}function gn(e,t,n,r){(3&e[2])===n&&kn(e,t,n,r)}function
_n(e,t){var n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function
kn(e,t,n,r){for(var i=null!=r?r:-1,a=0,o=void
0!==r?65535&e[18]:0;o<t.length;o++)if("number"==typeof
t[o+1]){if(a=t[o],null!=r&&a>=r)break}else
t[o]<0&&(e[18]+=65536),(a<i||-1==i)&&(Cn(e,n,t,o),e[18]=(4294901760&e[18])+o+2),o++}function
Cn(e,t,n,r){var
i=n[r]<0,a=n[r+1],o=e[i?-n[r]:n[r]];i?e[2]>>11<e[18]>>16&&(3&e[2])===t&&(e[2]+=2048,a.call(o)):a.call(o)}var
wn=function
e(t,n,r){_classCallCheck(this,e),this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r};function
bn(e,t,n){for(var r=It(e),i=0;i<n.length;){var a=n[i];if("number"==typeof
a){if(0!==a)break;i++;var
o=n[i++],s=n[i++],u=n[i++];r?e.setAttribute(t,s,u,o):t.setAttributeNS(o,s,u)}else{var
l=a,c=n[++i];En(l)?r&&e.setProperty(t,l,c):r?e.setAttribute(t,l,c):t.setAttribute(l,c),i++}}return
i}function Sn(e){return 3===e||4===e||6===e}function En(e){return
64===e.charCodeAt(0)}function Tn(e,t){if(null===t||0===t.length);else
if(null===e||0===e.length)e=t.slice();else for(var
n=-1,r=0;r<t.length;r++){var i=t[r];"number"==typeof
i?n=i:0===n||xn(e,n,i,null,-1===n||2===n?t[++r]:null)}return e}function
xn(e,t,n,r,i){var a=0,o=e.length;if(-1===t)o=-1;else for(;a<e.length;){var
s=e[a++];if("number"==typeof
s){if(s===t){o=-1;break}if(s>t){o=a-1;break}}}for(;a<e.length;){var
u=e[a];if("number"==typeof u)break;if(u===n){if(null===r)return
void(null!==i&&(e[a+1]=i));if(r===e[a+1])return
void(e[a+2]=i)}a++,null!==r&&a++,null!==i&&a++}-1!==o&&(e.splice(o,0,t),a=o+1),e.splice(a++,0,n),null!==r&&e.splice(a++,0,r),null!==i&&e.splice(a++,0,i)}function
An(e){return-1!==e}function On(e){return 32767&e}function Rn(e){return
e>>16}function In(e,t){for(var n=Rn(e),r=t;n>0;)r=r[15],n--;return r}function
Pn(e){return"string"==typeof e?e:null==e?"":""+e}function
Nn(e){return"function"==typeof e?e.name||e.toString():"object"==typeof
e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():Pn(e)}var
Dn=("undefined"!=typeof
requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Pe);function
Vn(e){return e instanceof Function?e():e}var jn=!0;function Fn(e){var
t=jn;return jn=e,t}var Mn=0;function Ln(e,t){var n=Hn(e,t);if(-1!==n)return
n;var
r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Un(r.data,e),Un(t,null),Un(r.blueprint,null));var
i=zn(e,t),a=e.injectorIndex;if(An(i))for(var
o=On(i),s=In(i,t),u=s[1].data,l=0;l<8;l++)t[a+l]=s[o+l]|u[o+l];return
t[a+8]=i,a}function Un(e,t){e.push(0,0,0,0,0,0,0,0,t)}function
Hn(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null==t[e.injectorIndex+8]?-1:e.injectorIndex}function
zn(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return
e.parent.injectorIndex;for(var
n=t[6],r=1;n&&-1===n.injectorIndex;)n=(t=t[15])?t[6]:null,r++;return
n?n.injectorIndex|r<<16:-1}function Bn(e,t,n){!function(e,t,n){var
r="string"!=typeof n?n[Le]:n.charCodeAt(0)||0;null==r&&(r=n[Le]=Mn++);var
i=255&r,a=1<<i,o=64&i,s=32&i,u=t.data;128&i?o?s?u[e+7]|=a:u[e+6]|=a:s?u[e+5]|=a:u[e+4]|=a:o?s?u[e+3]|=a:u[e+2]|=a:s?u[e+1]|=a:u[e]|=a}(e,t,n)}function
qn(e,t,n){var r=arguments.length>3&&void
0!==arguments[3]?arguments[3]:ue.Default,i=arguments.length>4?arguments[4]:void
0;if(null!==e){var a=function(e){if("string"==typeof e)return
e.charCodeAt(0)||0;var t=e[Le];return"number"==typeof
t&&t>0?255&t:t}(n);if("function"==typeof a){on(t,e);try{var
o=a();if(null!=o||r&ue.Optional)return o;throw new Error("No provider for
".concat(Nn(n),"!"))}finally{hn()}}else if("number"==typeof
a){if(-1===a)return new $n(e,t);var
s=null,u=Hn(e,t),l=-1,c=r&ue.Host?t[16][6]:null;for((-1===u||r&ue.SkipSelf)&&(l=-1===u?zn(e,t):t[u+8],Kn(r,!1)?(s=t[1],u=On(l),t=In(l,t)):u=-1);-1!==u;){l=t[u+8];var
h=t[1];if(Zn(a,u,h.data)){var f=Gn(u,t,n,s,r,c);if(f!==Wn)return
f}Kn(r,t[1].data[u+8]===c)&&Zn(a,u,t)?(s=h,u=On(l),t=In(l,t)):u=-1}}}if(r&ue.Optional&&void
0===i&&(i=null),0==(r&(ue.Self|ue.Host))){var d=t[9],v=Qe(void 0);try{return
d?d.get(n,i,r&ue.Optional):$e(n,i,r&ue.Optional)}finally{Qe(v)}}if(r&ue.Optional)return
i;throw new Error("NodeInjector: NOT_FOUND [".concat(Nn(n),"]"))}var
Wn={};function Gn(e,t,n,r,i,a){var
o=t[1],s=o.data[e+8],u=function(e,t,n,r,i){for(var
a=e.providerIndexes,o=t.data,s=65535&a,u=e.directiveStart,l=a>>16,c=i?s+l:e.directiveEnd,h=r?s:s+l;h<c;h++){var
f=o[h];if(h<u&&n===f||h>=u&&f.type===n)return h}if(i){var
d=o[u];if(d&&xt(d)&&d.type===n)return u}return
null}(s,o,n,null==r?Et(s)&&jn:r!=o&&3===s.type,i&ue.Host&&a===s);return
null!==u?Qn(t,o,u,s):Wn}function Qn(e,t,n,r){var i=e[n],a=t.data;if(i
instanceof wn){var o=i;if(o.resolving)throw new Error("Circular dep for
"+Nn(a[n]));var
s,u=Fn(o.canSeeViewProviders);o.resolving=!0,o.injectImpl&&(s=Qe(o.injectImpl)),on(e,r);try{i=e[n]=o.factory(void
0,a,e,r),t.firstCreatePass&&n>=r.directiveStart&&function(e,t,n){var
r=t.onChanges,i=t.onInit,a=t.doCheck;r&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,r)),i&&(n.preOrderHooks||(n.preOrderHooks=[])).push(-e,i),a&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,a),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,a))}(n,a[n],t)}finally{o.injectImpl&&Qe(s),Fn(u),o.resolving=!1,hn()}}return
i}function Zn(e,t,n){var
r=64&e,i=32&e;return!!((128&e?r?i?n[t+7]:n[t+6]:i?n[t+5]:n[t+4]:r?i?n[t+3]:n[t+2]:i?n[t+1]:n[t])&1<<e)}function
Kn(e,t){return!(e&ue.Self||e&ue.Host&&t)}var $n=function(){function
e(t,n){_classCallCheck(this,e),this._tNode=t,this._lView=n}return
_createClass(e,[{key:"get",value:function(e,t){return
qn(this._tNode,this._lView,e,void 0,t)}}]),e}();function Jn(e){return
ne((function(){var
t=Object.getPrototypeOf(e.prototype).constructor,n=t[Me]||function e(t){var
n=t;if(Te(t))return function(){var t=e(Ee(n));return t?t():null};var
r=kt(n);if(null===r){var i=pe(n);r=i&&i.factory}return r||null}(t);return
null!==n?n:function(e){return new e}}))}function Xn(e){return
e.ngDebugContext}function Yn(e){return e.ngOriginalError}function
er(e){for(var t=arguments.length,n=new
Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e.error.apply(e,n)}var
tr=function(){function
e(){_classCallCheck(this,e),this._console=console}return
_createClass(e,[{key:"handleError",value:function(e){var
t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return
e.ngErrorLogger||er}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL
ERROR",t),n&&r(this._console,"ERROR
CONTEXT",n)}},{key:"_findContext",value:function(e){return
e?Xn(e)?Xn(e):this._findContext(Yn(e)):null}},{key:"_findOriginalError",value:function(e){for(var
t=Yn(e);t&&Yn(t);)t=Yn(t);return t}}]),e}(),nr=function(){function
e(t){_classCallCheck(this,e),this.changingThisBreaksApplicationSecurity=t}return
_createClass(e,[{key:"toString",value:function(){return"SafeValue must use
[property]=binding: "+this.changingThisBreaksApplicationSecurity+" (see
http://g.co/ng/security#xss)"}}]),e}(),rr=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"getTypeName",value:function(){return"HTML"}}]),n}(nr),ir=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"getTypeName",value:function(){return"Style"}}]),n}(nr),ar=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"getTypeName",value:function(){return"Script"}}]),n}(nr),or=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"getTypeName",value:function(){return"URL"}}]),n}(nr),sr=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"getTypeName",value:function(){return"ResourceURL"}}]),n}(nr);function
ur(e){return e instanceof
nr?e.changingThisBreaksApplicationSecurity:e}function lr(e,t){var
n=cr(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new
Error("Required a safe ".concat(t,", got a ").concat(n," (see
http://g.co/ng/security#xss)"))}return n===t}function cr(e){return e
instanceof nr&&e.getTypeName()||null}var hr=!0,fr=!1;function dr(){return
fr=!0,hr}var vr=function(){function
e(t){_classCallCheck(this,e),this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");var
n=this.inertDocument.body;if(null==n){var
r=this.inertDocument.createElement("html");this.inertDocument.appendChild(r),n=this.inertDocument.createElement("body"),r.appendChild(n)}n.innerHTML='<svg><g
onload="this.parentNode.remove()"></g></svg>',!n.querySelector||n.querySelector("svg")?(n.innerHTML='<svg><p><style><img
src="</style><img src=x
onerror=alert(1)//">',this.getInertBodyElement=n.querySelector&&n.querySelector("svg
img")&&function(){try{return!!window.DOMParser}catch(e){return!1}}()?this.getInertBodyElement_DOMParser:this.getInertBodyElement_InertDocument):this.getInertBodyElement=this.getInertBodyElement_XHR}return
_createClass(e,[{key:"getInertBodyElement_XHR",value:function(e){e="<body><remove></remove>"+e+"</body>";try{e=encodeURI(e)}catch(r){return
null}var t=new
XMLHttpRequest;t.responseType="document",t.open("GET","data:text/html;charset=utf-8,"+e,!1),t.send(void
0);var n=t.response.body;return
n.removeChild(n.firstChild),n}},{key:"getInertBodyElement_DOMParser",value:function(e){e="<body><remove></remove>"+e+"</body>";try{var
t=(new window.DOMParser).parseFromString(e,"text/html").body;return
t.removeChild(t.firstChild),t}catch(n){return
null}}},{key:"getInertBodyElement_InertDocument",value:function(e){var
t=this.inertDocument.createElement("template");if("content"in t)return
t.innerHTML=e,t;var n=this.inertDocument.createElement("body");return
n.innerHTML=e,this.defaultDoc.documentMode&&this.stripCustomNsAttrs(n),n}},{key:"stripCustomNsAttrs",value:function(e){for(var
t=e.attributes,n=t.length-1;0<n;n--){var
r=t.item(n).name;"xmlns:ns1"!==r&&0!==r.indexOf("ns1:")||e.removeAttribute(r)}for(var
i=e.firstChild;i;)i.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(i),i=i.nextSibling}}]),e}(),pr=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,yr=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function
mr(e){return(e=String(e)).match(pr)||e.match(yr)?e:(dr()&&console.warn("WARNING:
sanitizing unsafe URL value ".concat(e," (see
http://g.co/ng/security#xss)")),"unsafe:"+e)}function gr(e){var
t,n={},r=_createForOfIteratorHelper(e.split(","));try{for(r.s();!(t=r.n()).done;){n[t.value]=!0}}catch(i){r.e(i)}finally{r.f()}return
n}function _r(){for(var e={},t=arguments.length,n=new
Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i=0,a=n;i<a.length;i++){var
o=a[i];for(var s in o)o.hasOwnProperty(s)&&(e[s]=!0)}return e}var
kr,Cr=gr("area,br,col,hr,img,wbr"),wr=gr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),br=gr("rp,rt"),Sr=_r(br,wr),Er=_r(Cr,_r(wr,gr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),_r(br,gr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Sr),Tr=gr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),xr=gr("srcset"),Ar=_r(Tr,xr,gr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),gr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),Or=gr("script,style,template"),Rr=function(){function
e(){_classCallCheck(this,e),this.sanitizedSomething=!1,this.buf=[]}return
_createClass(e,[{key:"sanitizeChildren",value:function(e){for(var
t=e.firstChild,n=!0;t;)if(t.nodeType===Node.ELEMENT_NODE?n=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,n&&t.firstChild)t=t.firstChild;else
for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);var
r=this.checkClobberedElement(t,t.nextSibling);if(r){t=r;break}t=this.checkClobberedElement(t,t.parentNode)}return
this.buf.join("")}},{key:"startElement",value:function(e){var
t=e.nodeName.toLowerCase();if(!Er.hasOwnProperty(t))return
this.sanitizedSomething=!0,!Or.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);for(var
n,r=e.attributes,i=0;i<r.length;i++){var
a=r.item(i),o=a.name,s=o.toLowerCase();if(Ar.hasOwnProperty(s)){var
u=a.value;Tr[s]&&(u=mr(u)),xr[s]&&(n=u,u=(n=String(n)).split(",").map((function(e){return
mr(e.trim())})).join(", ")),this.buf.push(" ",o,'="',Nr(u),'"')}else
this.sanitizedSomething=!0}return
this.buf.push(">"),!0}},{key:"endElement",value:function(e){var
t=e.nodeName.toLowerCase();Er.hasOwnProperty(t)&&!Cr.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}},{key:"chars",value:function(e){this.buf.push(Nr(e))}},{key:"checkClobberedElement",value:function(e,t){if(t&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw
new Error("Failed to sanitize html because the element is clobbered:
"+e.outerHTML);return
t}}]),e}(),Ir=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Pr=/([^\#-~ |!])/g;function
Nr(e){return
e.replace(/&/g,"&amp;").replace(Ir,(function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"})).replace(Pr,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function
Dr(e,t){var n=null;try{kr=kr||new vr(e);var
r=t?String(t):"";n=kr.getInertBodyElement(r);var i=5,a=r;do{if(0===i)throw new
Error("Failed to sanitize html because the input is
unstable");i--,r=a,a=n.innerHTML,n=kr.getInertBodyElement(r)}while(r!==a);var
o=new Rr,s=o.sanitizeChildren(Vr(n)||n);return
dr()&&o.sanitizedSomething&&console.warn("WARNING: sanitizing HTML stripped
some content, see http://g.co/ng/security#xss"),s}finally{if(n)for(var
u=Vr(n)||n;u.firstChild;)u.removeChild(u.firstChild)}}function
Vr(e){return"content"in e&&function(e){return
e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}(e)?e.content:null}var
jr=function(){var
e={NONE:0,HTML:1,STYLE:2,SCRIPT:3,URL:4,RESOURCE_URL:5};return
e[e.NONE]="NONE",e[e.HTML]="HTML",e[e.STYLE]="STYLE",e[e.SCRIPT]="SCRIPT",e[e.URL]="URL",e[e.RESOURCE_URL]="RESOURCE_URL",e}(),Fr=new
RegExp("^([-,.\"'%_!#
a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%,
#a-zA-Z]+\\))$","g"),Mr=/^url\(([^)]+)\)$/;function Lr(e){var t=Hr();return
t?t.sanitize(jr.HTML,e)||"":lr(e,"HTML")?ur(e):Dr(Rt(),Pn(e))}function
Ur(e){var t=Hr();return
t?t.sanitize(jr.URL,e)||"":lr(e,"URL")?ur(e):mr(Pn(e))}function Hr(){var
e=Wt();return e&&e[12]}function zr(e,t){e.__ngContext__=t}function Br(e){throw
new Error("Multiple components match node with tagname "+e.tagName)}function
qr(){throw new Error("Cannot mix multi providers and regular
providers")}function Wr(e,t,n){for(var r=e.length;;){var
i=e.indexOf(t,n);if(-1===i)return i;if(0===i||e.charCodeAt(i-1)<=32){var
a=t.length;if(i+a===r||e.charCodeAt(i+a)<=32)return i}n=i+1}}function
Gr(e,t,n){for(var r=0;r<e.length;){var
i=e[r++];if(n&&"class"===i){if(-1!==Wr((i=e[r]).toLowerCase(),t,0))return!0}else
if(1===i){for(;r<e.length&&"string"==typeof(i=e[r++]);)if(i.toLowerCase()===t)return!0;return!1}}return!1}function
Qr(e){return 0===e.type&&"ng-template"!==e.tagName}function Zr(e,t,n){return
t===(0!==e.type||n?e.tagName:"ng-template")}function Kr(e,t,n){for(var
r=4,i=e.attrs||[],a=function(e){for(var t=0;t<e.length;t++)if(Sn(e[t]))return
t;return e.length}(i),o=!1,s=0;s<t.length;s++){var u=t[s];if("number"!=typeof
u){if(!o)if(4&r){if(r=2|1&r,""!==u&&!Zr(e,u,n)||""===u&&1===t.length){if($r(r))return!1;o=!0}}else{var
l=8&r?u:t[++s];if(8&r&&null!==e.attrs){if(!Gr(e.attrs,l,n)){if($r(r))return!1;o=!0}continue}var
c=Jr(8&r?"class":u,i,Qr(e),n);if(-1===c){if($r(r))return!1;o=!0;continue}if(""!==l){var
h;h=c>a?"":i[c+1].toLowerCase();var
f=8&r?h:null;if(f&&-1!==Wr(f,l,0)||2&r&&l!==h){if($r(r))return!1;o=!0}}}}else{if(!o&&!$r(r)&&!$r(u))return!1;if(o&&$r(u))continue;o=!1,r=u|1&r}}return
$r(r)||o}function $r(e){return 0==(1&e)}function
Jr(e,t,n,r){if(null===t)return-1;var i=0;if(r||!n){for(var
a=!1;i<t.length;){var o=t[i];if(o===e)return
i;if(3===o||6===o)a=!0;else{if(1===o||2===o){for(var s=t[++i];"string"==typeof
s;)s=t[++i];continue}if(4===o)break;if(0===o){i+=4;continue}}i+=a?1:2}return-1}return
function(e,t){var n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){var
r=e[n];if("number"==typeof r)return-1;if(r===t)return
n;n++}return-1}(t,e)}function Xr(e,t){for(var n=arguments.length>2&&void
0!==arguments[2]&&arguments[2],r=0;r<t.length;r++)if(Kr(e,t[r],n))return!0;return!1}function
Yr(e,t){return e?":not("+t.trim()+")":t}function ei(e){for(var
t=e[0],n=1,r=2,i="",a=!1;n<e.length;){var o=e[n];if("string"==typeof
o)if(2&r){var s=e[++n];i+="["+o+(s.length>0?'="'+s+'"':"")+"]"}else
8&r?i+="."+o:4&r&&(i+="
"+o);else""===i||$r(o)||(t+=Yr(a,i),i=""),r=o,a=a||!$r(r);n++}return""!==i&&(t+=Yr(a,i)),t}var
ti={};function ni(e){var t=e[3];return bt(t)?t[3]:t}function ri(e){return
ai(e[13])}function ii(e){return ai(e[4])}function
ai(e){for(;null!==e&&!bt(e);)e=e[4];return e}function
oi(e){si(Gt(),Wt(),dn()+e,Jt())}function si(e,t,n,r){if(!r)if(3==(3&t[2])){var
i=e.preOrderCheckHooks;null!==i&&mn(t,i,n)}else{var
a=e.preOrderHooks;null!==a&&gn(t,a,0,n)}vn(n)}function ui(e,t){return
e<<17|t<<2}function li(e){return e>>17&32767}function ci(e){return
2|e}function hi(e){return(131068&e)>>2}function
fi(e,t){return-131069&e|t<<2}function di(e){return 1|e}function vi(e,t){var
n=e.contentQueries;if(null!==n)for(var r=0;r<n.length;r+=2){var
i=n[r],a=n[r+1];if(-1!==a){var
o=e.data[a];an(i),o.contentQueries(2,t[a],a)}}}function pi(e,t,n){return
It(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function
yi(e,t,n,r,i,a,o,s,u,l){var c=t.blueprint.slice();return
c[0]=i,c[2]=140|r,Ht(c),c[3]=c[15]=e,c[8]=n,c[10]=o||e&&e[10],c[11]=s||e&&e[11],c[12]=u||e&&e[12]||null,c[9]=l||e&&e[9]||null,c[6]=a,c[16]=2==t.type?e[16]:c,c}function
mi(e,t,n,r,i,a){var o=n+20,s=e.data[o]||function(e,t,n,r,i,a){var
o=Qt(),s=Kt(),u=s?o:o&&o.parent,l=e.data[n]=xi(0,u&&u!==t?u:null,r,n,i,a);return
null===e.firstChild&&(e.firstChild=l),o&&(!s||null!=o.child||null===l.parent&&2!==o.type?s||(o.next=l):o.child=l),l}(e,t,o,r,i,a);return
Zt(s,!0),s}function gi(e,t,n){sn(t,t[6]);try{var
r=e.viewQuery;null!==r&&Ki(1,r,n);var
i=e.template;null!==i&&Ci(e,t,i,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&vi(e,t),e.staticViewQueries&&Ki(2,e.viewQuery,n);var
a=e.components;null!==a&&function(e,t){for(var
n=0;n<t.length;n++)qi(e,t[n])}(t,a)}catch(o){throw
e.firstCreatePass&&(e.incompleteFirstPass=!0),o}finally{t[2]&=-5,fn()}}function
_i(e,t,n,r){var i=t[2];if(256!=(256&i)){sn(t,t[6]);var
a=Jt();try{Ht(t),Bt.lFrame.bindingIndex=e.bindingStartIndex,null!==n&&Ci(e,t,n,2,r);var
o=3==(3&i);if(!a)if(o){var
s=e.preOrderCheckHooks;null!==s&&mn(t,s,null)}else{var
u=e.preOrderHooks;null!==u&&gn(t,u,0,null),_n(t,0)}if(function(e){for(var
t=ri(e);null!==t;t=ii(t))if(t[2])for(var n=t[9],r=0;r<n.length;r++){var
i=n[r],a=i[3];0==(1024&i[2])&&zt(a,1),i[2]|=1024}}(t),function(e){for(var
t=ri(e);null!==t;t=ii(t))for(var n=10;n<t.length;n++){var
r=t[n],i=r[1];Lt(r)&&_i(i,r,i.template,r[8])}}(t),null!==e.contentQueries&&vi(e,t),!a)if(o){var
l=e.contentCheckHooks;null!==l&&mn(t,l)}else{var
c=e.contentHooks;null!==c&&gn(t,c,1),_n(t,1)}!function(e,t){try{var
n=e.expandoInstructions;if(null!==n)for(var
r=e.expandoStartIndex,i=-1,a=0;a<n.length;a++){var o=n[a];"number"==typeof
o?o<=0?(vn(0-o),i=r+=9+n[++a]):r+=o:(null!==o&&(tn(r,i),o(2,t[i])),i++)}}finally{vn(-1)}}(e,t);var
h=e.components;null!==h&&function(e,t){for(var
n=0;n<t.length;n++)Bi(e,t[n])}(t,h);var
f=e.viewQuery;if(null!==f&&Ki(2,f,r),!a)if(o){var
d=e.viewCheckHooks;null!==d&&mn(t,d)}else{var
v=e.viewHooks;null!==v&&gn(t,v,2),_n(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),a||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,zt(t[3],-1))}finally{fn()}}}function
ki(e,t,n,r){var
i=t[10],a=!Jt(),o=4==(4&t[2]);try{a&&!o&&i.begin&&i.begin(),o&&gi(e,t,r),_i(e,t,n,r)}finally{a&&!o&&i.end&&i.end()}}function
Ci(e,t,n,r,i){var
a=dn();try{vn(-1),2&r&&t.length>20&&si(e,t,0,Jt()),n(r,i)}finally{vn(a)}}function
wi(e,t,n){if(St(t))for(var r=t.directiveEnd,i=t.directiveStart;i<r;i++){var
a=e.data[i];a.contentQueries&&a.contentQueries(1,n[i],i)}}function
bi(e,t,n){qt()&&(function(e,t,n,r){var
i=n.directiveStart,a=n.directiveEnd;e.firstCreatePass||Ln(n,t),zr(r,t);for(var
o=n.initialInputs,s=i;s<a;s++){var u=e.data[s],l=xt(u);l&&Li(t,n,u);var
c=Qn(t,e,s,n);zr(c,t),null!==o&&Ui(0,s-i,c,u,0,o),l&&(Ft(n.index,t)[8]=c)}}(e,t,n,Vt(n,t)),128==(128&n.flags)&&function(e,t,n){var
r=n.directiveStart,i=n.directiveEnd,a=e.expandoInstructions,o=e.firstCreatePass,s=n.index-20,u=Bt.lFrame.currentDirectiveIndex;try{vn(s);for(var
l=r;l<i;l++){var
c=e.data[l],h=t[l];nn(l),null!==c.hostBindings||0!==c.hostVars||null!==c.hostAttrs?Ni(c,h):o&&a.push(null)}}finally{vn(-1),nn(u)}}(e,t,n))}function
Si(e,t){var n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:Vt,r=t.localNames;if(null!==r)for(var
i=t.index+1,a=0;a<r.length;a+=2){var
o=r[a+1],s=-1===o?n(t,e):e[o];e[i++]=s}}function Ei(e){var t=e.tView;return
null===t||t.incompleteFirstPass?e.tView=Ti(1,-1,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function
Ti(e,t,n,r,i,a,o,s,u,l){var c=20+r,h=c+i,f=function(e,t){for(var
n=[],r=0;r<t;r++)n.push(r<e?null:ti);return n}(c,h);return
f[1]={type:e,id:t,blueprint:f,template:n,queries:null,viewQuery:s,node:null,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:h,expandoInstructions:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof
a?a():a,pipeRegistry:"function"==typeof
o?o():o,firstChild:null,schemas:u,consts:l,incompleteFirstPass:!1}}function
xi(e,t,n,r,i,a){return{type:n,index:r,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,tagName:i,attrs:a,mergedAttrs:null,localNames:null,initialInputs:void
0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void
0,classes:null,classesWithoutHost:null,residualClasses:void
0,classBindings:0,styleBindings:0}}function Ai(e,t,n){for(var r in
e)if(e.hasOwnProperty(r)){var
i=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,i):n[r]=[t,i]}return
n}function Oi(e,t,n,r,i,a,o,s){var
u,l,c=Vt(t,n),h=t.inputs;!s&&null!=h&&(u=h[r])?(Yi(e,n,u,r,i),Et(t)&&function(e,t){var
n=Ft(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3===t.type&&(r="class"===(l=r)?"className":"for"===l?"htmlFor":"formaction"===l?"formAction":"innerHtml"===l?"innerHTML":"readonly"===l?"readOnly":"tabindex"===l?"tabIndex":l,i=null!=o?o(i,t.tagName||"",r):i,It(a)?a.setProperty(c,r,i):En(r)||(c.setProperty?c.setProperty(r,i):c[r]=i))}function
Ri(e,t,n,r){var i=!1;if(qt()){var a=function(e,t,n){var
r=e.directiveRegistry,i=null;if(r)for(var a=0;a<r.length;a++){var
o=r[a];Xr(n,o.selectors,!1)&&(i||(i=[]),Bn(Ln(n,t),e,o.type),xt(o)?(2&n.flags&&Br(n),Vi(e,n),i.unshift(o)):i.push(o))}return
i}(e,t,n),o=null===r?null:{"":-1};if(null!==a){var
s=0;i=!0,Fi(n,e.data.length,a.length);for(var u=0;u<a.length;u++){var
l=a[u];l.providersResolver&&l.providersResolver(l)}Di(e,n,a.length);for(var
c=!1,h=!1,f=0;f<a.length;f++){var
d=a[f];n.mergedAttrs=Tn(n.mergedAttrs,d.hostAttrs),Mi(e,t,d),ji(e.data.length-1,d,o),null!==d.contentQueries&&(n.flags|=8),null===d.hostBindings&&null===d.hostAttrs&&0===d.hostVars||(n.flags|=128),!c&&(d.onChanges||d.onInit||d.doCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index-20),c=!0),h||!d.onChanges&&!d.doCheck||((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index-20),h=!0),Ii(e,d),s+=d.hostVars}!function(e,t){for(var
n=t.directiveEnd,r=e.data,i=t.attrs,a=[],o=null,s=null,u=t.directiveStart;u<n;u++){var
l=r[u],c=l.inputs,h=null===i||Qr(t)?null:Hi(c,i);a.push(h),o=Ai(c,u,o),s=Ai(l.outputs,u,s)}null!==o&&(o.hasOwnProperty("class")&&(t.flags|=16),o.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=a,t.inputs=o,t.outputs=s}(e,n),Pi(e,t,s)}o&&function(e,t,n){if(t)for(var
r=e.localNames=[],i=0;i<t.length;i+=2){var a=n[t[i+1]];if(null==a)throw new
Error("Export of name '".concat(t[i+1],"' not
found!"));r.push(t[i],a)}}(n,r,o)}return
n.mergedAttrs=Tn(n.mergedAttrs,n.attrs),i}function Ii(e,t){var
n=e.expandoInstructions;n.push(t.hostBindings),0!==t.hostVars&&n.push(t.hostVars)}function
Pi(e,t,n){for(var
r=0;r<n;r++)t.push(ti),e.blueprint.push(ti),e.data.push(null)}function
Ni(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Di(e,t,n){var
r=20-t.index,i=e.data.length-(65535&t.providerIndexes);(e.expandoInstructions||(e.expandoInstructions=[])).push(r,i,n)}function
Vi(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function
ji(e,t,n){if(n){if(t.exportAs)for(var
r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;xt(t)&&(n[""]=e)}}function
Fi(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function
Mi(e,t,n){e.data.push(n);var r=n.factory||(n.factory=kt(n.type)),i=new
wn(r,xt(n),null);e.blueprint.push(i),t.push(i)}function Li(e,t,n){var
r=Vt(t,e),i=Ei(n),a=e[10],o=Wi(e,yi(e,i,null,n.onPush?64:16,r,t,a,a.createRenderer(r,n)));e[t.index]=o}function
Ui(e,t,n,r,i,a){var o=a[t];if(null!==o)for(var
s=r.setInput,u=0;u<o.length;){var
l=o[u++],c=o[u++],h=o[u++];null!==s?r.setInput(n,h,l,c):n[c]=h}}function
Hi(e,t){for(var n=null,r=0;r<t.length;){var
i=t[r];if(0!==i)if(5!==i){if("number"==typeof
i)break;e.hasOwnProperty(i)&&(null===n&&(n=[]),n.push(i,e[i],t[r+1])),r+=2}else
r+=2;else r+=4}return n}function zi(e,t,n,r){return new
Array(e,!0,!1,t,null,0,r,n,null,null)}function Bi(e,t){var
n=Ft(t,e);if(Lt(n)){var
r=n[1];80&n[2]?_i(r,n,r.template,n[8]):n[5]>0&&function e(t){for(var
n=ri(t);null!==n;n=ii(n))for(var r=10;r<n.length;r++){var
i=n[r];if(1024&i[2]){var a=i[1];_i(a,i,a.template,i[8])}else i[5]>0&&e(i)}var
o=t[1].components;if(null!==o)for(var s=0;s<o.length;s++){var
u=Ft(o[s],t);Lt(u)&&u[5]>0&&e(u)}}(n)}}function qi(e,t){var
n=Ft(t,e),r=n[1];!function(e,t){for(var
n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(r,n),gi(r,n,n[8])}function
Wi(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function
Gi(e){for(;e;){e[2]|=64;var t=ni(e);if(At(e)&&!t)return e;e=t}return
null}function Qi(e,t,n){var
r=t[10];r.begin&&r.begin();try{_i(e,t,e.template,n)}catch(i){throw
Xi(t,i),i}finally{r.end&&r.end()}}function Zi(e){!function(e){for(var
t=0;t<e.components.length;t++){var
n=e.components[t],r=Mt(n),i=r[1];ki(i,r,i.template,n)}}(e[8])}function
Ki(e,t,n){an(0),t(e,n)}var $i=Promise.resolve(null);function Ji(e){return
e[7]||(e[7]=[])}function Xi(e,t){var
n=e[9],r=n?n.get(tr,null):null;r&&r.handleError(t)}function
Yi(e,t,n,r,i){for(var a=0;a<n.length;){var
o=n[a++],s=n[a++],u=t[o],l=e.data[o];null!==l.setInput?l.setInput(u,i,r,s):u[s]=i}}function
ea(e,t,n){var r=Dt(t,e),i=e[11];It(i)?i.setValue(r,n):r.textContent=n}function
ta(e,t){var n=t[3];return-1===e.index?bt(n)?n:null:n}function na(e,t){var
n=ta(e,t);return n?da(t[11],n[7]):null}function ra(e,t,n,r,i){if(null!=r){var
a,o=!1;bt(r)?a=r:wt(r)&&(o=!0,r=r[0]);var
s=Nt(r);0===e&&null!==n?null==i?ha(t,n,s):ca(t,n,s,i||null):1===e&&null!==n?ca(t,n,s,i||null):2===e?function(e,t,n){var
r=da(e,t);r&&function(e,t,n,r){It(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,s,o):3===e&&t.destroyNode(s),null!=a&&function(e,t,n,r,i){var
a=n[7];a!==Nt(n)&&ra(t,e,r,a,i);for(var o=10;o<n.length;o++){var
s=n[o];ma(s[1],s,e,t,r,a)}}(t,e,a,n,i)}}function ia(e,t,n,r){var
i=na(e.node,t);i&&ma(e,t,t[11],n?1:2,i,r)}function aa(e,t){var
n=e[9],r=n.indexOf(t);1024&t[2]&&zt(t[3],-1),n.splice(r,1)}function
oa(e,t){if(!(e.length<=10)){var n=10+t,r=e[n];if(r){var
i=r[17];null!==i&&i!==e&&aa(i,r),t>0&&(e[n-1][4]=r[4]);var
a=rt(e,10+t);ia(r[1],r,!1,null);var
o=a[19];null!==o&&o.detachView(a[1]),r[3]=null,r[4]=null,r[2]&=-129}return
r}}function sa(e,t){if(!(256&t[2])){var
n=t[11];It(n)&&n.destroyNode&&ma(e,t,n,3,null,null),function(e){var
t=e[13];if(!t)return la(e[1],e);for(;t;){var n=null;if(wt(t))n=t[13];else{var
r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)wt(t)&&la(t[1],t),t=ua(t,e);null===t&&(t=e),wt(t)&&la(t[1],t),n=t&&t[4]}t=n}}(t)}}function
ua(e,t){var n;return
wt(e)&&(n=e[6])&&2===n.type?ta(n,e):e[3]===t?null:e[3]}function
la(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){var
n;if(null!=e&&null!=(n=e.destroyHooks))for(var r=0;r<n.length;r+=2){var
i=t[n[r]];if(!(i instanceof wn)){var a=n[r+1];if(Array.isArray(a))for(var
o=0;o<a.length;o+=2)a[o+1].call(i[a[o]]);else
a.call(i)}}}(e,t),function(e,t){var n=e.cleanup;if(null!==n){for(var
r=t[7],i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){var
a=n[i+1],o="function"==typeof
a?a(t):Nt(t[a]),s=r[n[i+2]],u=n[i+3];"boolean"==typeof
u?o.removeEventListener(n[i],s,u):u>=0?r[u]():r[-u].unsubscribe(),i+=2}else
n[i].call(r[n[i+1]]);t[7]=null}}(e,t);var
n=t[6];n&&3===n.type&&It(t[11])&&t[11].destroy();var
r=t[17];if(null!==r&&bt(t[3])){r!==t[3]&&aa(r,t);var
i=t[19];null!==i&&i.detachView(e)}}}function
ca(e,t,n,r){It(e)?e.insertBefore(t,n,r):t.insertBefore(n,r,!0)}function
ha(e,t,n){It(e)?e.appendChild(t,n):t.appendChild(n)}function
fa(e,t,n,r){null!==r?ca(e,t,n,r):ha(e,t,n)}function da(e,t){return
It(e)?e.parentNode(t):t.parentNode}function va(e,t,n,r){var
i=function(e,t,n){for(var
r=t.parent;null!=r&&(4===r.type||5===r.type);)r=(t=r).parent;if(null==r){var
i=n[6];return 2===i.type?na(i,n):n[0]}if(t&&5===t.type&&4&t.flags)return
Vt(t,n).parentNode;if(2&r.flags){var
a=e.data,o=a[a[r.index].directiveStart].encapsulation;if(o!==ut.ShadowDom&&o!==ut.Native)return
null}return Vt(r,n)}(e,r,t);if(null!=i){var
a=t[11],o=function(e,t){if(2===e.type){var n=ta(e,t);return
null===n?null:pa(n.indexOf(t,10)-10,n)}return
4===e.type||5===e.type?Vt(e,t):null}(r.parent||t[6],t);if(Array.isArray(n))for(var
s=0;s<n.length;s++)fa(a,i,n[s],o);else fa(a,i,n,o)}}function pa(e,t){var
n=10+e+1;if(n<t.length){var r=t[n],i=r[1].firstChild;if(null!==i)return
function e(t,n){if(null!==n){var r=n.type;if(3===r)return
Vt(n,t);if(0===r)return pa(-1,t[n.index]);if(4===r||5===r){var
i=n.child;if(null!==i)return e(t,i);var a=t[n.index];return
bt(a)?pa(-1,a):Nt(a)}var
o=t[16],s=o[6],u=ni(o),l=s.projection[n.projection];return
null!=l?e(u,l):e(t,n.next)}return null}(r,i)}return t[7]}function
ya(e,t,n,r,i,a,o){for(;null!=n;){var
s=r[n.index],u=n.type;o&&0===t&&(s&&zr(Nt(s),r),n.flags|=4),64!=(64&n.flags)&&(4===u||5===u?(ya(e,t,n.child,r,i,a,!1),ra(t,e,i,s,a)):1===u?ga(e,t,r,n,i,a):ra(t,e,i,s,a)),n=o?n.projectionNext:n.next}}function
ma(e,t,n,r,i,a){ya(n,r,e.node.child,t,i,a,!1)}function ga(e,t,n,r,i,a){var
o=n[16],s=o[6].projection[r.projection];if(Array.isArray(s))for(var
u=0;u<s.length;u++)ra(t,e,i,s[u],a);else ya(e,t,s,o[3],i,a,!0)}function
_a(e,t,n){It(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function
ka(e,t,n){It(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}var
Ca,wa,ba,Sa=function(){function
e(t,n){_classCallCheck(this,e),this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._viewContainerRef=null}return
_createClass(e,[{key:"destroy",value:function(){if(this._appRef)this._appRef.detachView(this);else
if(this._viewContainerRef){var
e=this._viewContainerRef.indexOf(this);e>-1&&this._viewContainerRef.detach(e),this._viewContainerRef=null}sa(this._lView[1],this._lView)}},{key:"onDestroy",value:function(e){var
t,n,r;t=this._lView[1],r=e,Ji(n=this._lView).push(r),t.firstCreatePass&&function(e){return
e.cleanup||(e.cleanup=[])}(t).push(n[7].length-1,null)}},{key:"markForCheck",value:function(){Gi(this._cdRefInjectingView||this._lView)}},{key:"detach",value:function(){this._lView[2]&=-129}},{key:"reattach",value:function(){this._lView[2]|=128}},{key:"detectChanges",value:function(){Qi(this._lView[1],this._lView,this.context)}},{key:"checkNoChanges",value:function(){!function(e,t,n){Xt(!0);try{Qi(e,t,n)}finally{Xt(!1)}}(this._lView[1],this._lView,this.context)}},{key:"attachToViewContainerRef",value:function(e){if(this._appRef)throw
new Error("This view is already attached directly to the
ApplicationRef!");this._viewContainerRef=e}},{key:"detachFromAppRef",value:function(){var
e;this._appRef=null,ma(this._lView[1],e=this._lView,e[11],2,null,null)}},{key:"attachToAppRef",value:function(e){if(this._viewContainerRef)throw
new Error("This view is already attached to a
ViewContainer!");this._appRef=e}},{key:"rootNodes",get:function(){var
e=this._lView;return null==e[0]?function e(t,n,r,i){for(var
a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];null!==r;){var
o=n[r.index];if(null!==o&&i.push(Nt(o)),bt(o))for(var s=10;s<o.length;s++){var
u=o[s],l=u[1].firstChild;null!==l&&e(u[1],u,l,i)}var
c=r.type;if(4===c||5===c)e(t,n,r.child,i);else if(1===c){var
h=n[16],f=h[6].projection[r.projection];if(Array.isArray(f))i.push.apply(i,_toConsumableArray(f));else{var
d=ni(h);e(d[1],d,f,i,!0)}}r=a?r.projectionNext:r.next}return
i}(e[1],e,e[6].child,[]):[]}},{key:"context",get:function(){return
this._lView[8]}},{key:"destroyed",get:function(){return
256==(256&this._lView[2])}}]),e}(),Ea=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){var r;return
_classCallCheck(this,n),(r=t.call(this,e))._view=e,r}return
_createClass(n,[{key:"detectChanges",value:function(){Zi(this._view)}},{key:"checkNoChanges",value:function(){!function(e){Xt(!0);try{Zi(e)}finally{Xt(!1)}}(this._view)}},{key:"context",get:function(){return
null}}]),n}(Sa);function Ta(e,t,n){return
Ca||(Ca=function(e){_inherits(n,e);var t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return n}(e)),new
Ca(Vt(t,n))}var xa=function(){var e=function
e(){_classCallCheck(this,e)};return e.__NG_ELEMENT_ID__=function(){return
Aa()},e}(),Aa=function(){var e=arguments.length>0&&void
0!==arguments[0]&&arguments[0];return function(e,t,n){if(!n&&Et(e)){var
r=Ft(e.index,t);return new Sa(r,r)}return
3===e.type||0===e.type||4===e.type||5===e.type?new
Sa(t[16],t):null}(Qt(),Wt(),e)},Oa=new Ue("Set Injector
scope."),Ra={},Ia={},Pa=[],Na=void 0;function Da(){return void 0===Na&&(Na=new
Xe),Na}function Va(e){var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void
0;return new ja(e,n,t||Da(),r)}var ja=function(){function e(t,n,r){var
i=this,a=arguments.length>3&&void
0!==arguments[3]?arguments[3]:null;_classCallCheck(this,e),this.parent=r,this.records=new
Map,this.injectorDefTypes=new Set,this.onDestroy=new
Set,this._destroyed=!1;var o=[];n&&tt(n,(function(e){return
i.processProvider(e,t,n)})),tt([t],(function(e){return
i.processInjectorType(e,[],o)})),this.records.set(He,La(void 0,this));var
s=this.records.get(Oa);this.scope=null!=s?s.value:null,this.source=a||("object"==typeof
t?null:Ce(t))}return
_createClass(e,[{key:"destroy",value:function(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach((function(e){return
e.ngOnDestroy()}))}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}},{key:"get",value:function(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:ze,n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:ue.Default;this.assertNotDestroyed();var
r,i=Ge(this);try{if(!(n&ue.SkipSelf)){var a=this.records.get(e);if(void
0===a){var o=("function"==typeof(r=e)||"object"==typeof r&&r instanceof
Ue)&&de(e);a=o&&this.injectableDefInScope(o)?La(Fa(e),Ra):null,this.records.set(e,a)}if(null!=a)return
this.hydrate(e,a)}return(n&ue.Self?Da():this.parent).get(e,t=n&ue.Optional&&t===ze?null:t)}catch(s){if("NullInjectorError"===s.name){if((s.ngTempTokenPath=s.ngTempTokenPath||[]).unshift(Ce(e)),i)throw
s;return function(e,t,n,r){var i=e.ngTempTokenPath;throw
t.__source&&i.unshift(t.__source),e.message=function(e,t,n){var
r=arguments.length>3&&void
0!==arguments[3]?arguments[3]:null;e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;var
i=Ce(t);if(Array.isArray(t))i=t.map(Ce).join(" -> ");else if("object"==typeof
t){var a=[];for(var o in t)if(t.hasOwnProperty(o)){var
s=t[o];a.push(o+":"+("string"==typeof
s?JSON.stringify(s):Ce(s)))}i="{".concat(a.join(",
"),"}")}return"".concat(n).concat(r?"("+r+")":"","[").concat(i,"]:
").concat(e.replace(Be,"\n 
"))}("\n"+e.message,i,"R3InjectorError",r),e.ngTokenPath=i,e.ngTempTokenPath=null,e}(s,e,0,this.source)}throw
s}finally{Ge(i)}}},{key:"_resolveInjectorDefTypes",value:function(){var
e=this;this.injectorDefTypes.forEach((function(t){return
e.get(t)}))}},{key:"toString",value:function(){var e=[];return
this.records.forEach((function(t,n){return
e.push(Ce(n))})),"R3Injector[".concat(e.join(",
"),"]")}},{key:"assertNotDestroyed",value:function(){if(this._destroyed)throw
new Error("Injector has already been
destroyed.")}},{key:"processInjectorType",value:function(e,t,n){var
r=this;if(!(e=Ee(e)))return!1;var i=pe(e),a=null==i&&e.ngModule||void 0,o=void
0===a?e:a,s=-1!==n.indexOf(o);if(void
0!==a&&(i=pe(a)),null==i)return!1;if(null!=i.imports&&!s){var
u;n.push(o);try{tt(i.imports,(function(e){r.processInjectorType(e,t,n)&&(void
0===u&&(u=[]),u.push(e))}))}finally{}if(void 0!==u)for(var l=function(e){var
t=u[e],n=t.ngModule,i=t.providers;tt(i,(function(e){return
r.processProvider(e,n,i||Pa)}))},c=0;c<u.length;c++)l(c)}this.injectorDefTypes.add(o),this.records.set(o,La(i.factory,Ra));var
h=i.providers;if(null!=h&&!s){var f=e;tt(h,(function(e){return
r.processProvider(e,f,h)}))}return void 0!==a&&void
0!==e.providers}},{key:"processProvider",value:function(e,t,n){var
r=Ha(e=Ee(e))?e:Ee(e&&e.provide),i=function(e,t,n){return Ua(e)?La(void
0,e.useValue):La(Ma(e,t,n),Ra)}(e,t,n);if(Ha(e)||!0!==e.multi){var
a=this.records.get(r);a&&void 0!==a.multi&&qr()}else{var
o=this.records.get(r);o?void 0===o.multi&&qr():((o=La(void
0,Ra,!0)).factory=function(){return
Je(o.multi)},this.records.set(r,o)),r=e,o.multi.push(e)}this.records.set(r,i)}},{key:"hydrate",value:function(e,t){var
n;return t.value===Ia?function(e){throw new Error("Cannot instantiate cyclic
dependency!
"+e)}(Ce(e)):t.value===Ra&&(t.value=Ia,t.value=t.factory()),"object"==typeof
t.value&&t.value&&null!==(n=t.value)&&"object"==typeof n&&"function"==typeof
n.ngOnDestroy&&this.onDestroy.add(t.value),t.value}},{key:"injectableDefInScope",value:function(e){return!!e.providedIn&&("string"==typeof
e.providedIn?"any"===e.providedIn||e.providedIn===this.scope:this.injectorDefTypes.has(e.providedIn))}},{key:"destroyed",get:function(){return
this._destroyed}}]),e}();function Fa(e){var
t=de(e),n=null!==t?t.factory:kt(e);if(null!==n)return n;var
r=pe(e);if(null!==r)return r.factory;if(e instanceof Ue)throw new Error("Token
".concat(Ce(e)," is missing a \u0275prov definition."));if(e instanceof
Function)return function(e){var t=e.length;if(t>0){var n=function(e,t){for(var
n=[],r=0;r<e;r++)n.push("?");return n}(t);throw new Error("Can't resolve all
parameters for ".concat(Ce(e),": (").concat(n.join(", "),")."))}var
r=function(e){var t=e&&(e[ye]||e[_e]||e[ge]&&e[ge]());if(t){var
n=function(e){if(e.hasOwnProperty("name"))return e.name;var
t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return
console.warn('DEPRECATED: DI is instantiating a token "'.concat(n,'" that
inherits its @Injectable decorator but does not provide one itself.\nThis will
become an error in v10. Please add @Injectable() to the "').concat(n,'"
class.')),t}return null}(e);return null!==r?function(){return
r.factory(e)}:function(){return new e}}(e);throw new
Error("unreachable")}function Ma(e,t,n){var r,i=void 0;if(Ha(e)){var
a=Ee(e);return kt(a)||Fa(a)}if(Ua(e))i=function(){return Ee(e.useValue)};else
if((r=e)&&r.useFactory)i=function(){return
e.useFactory.apply(e,_toConsumableArray(Je(e.deps||[])))};else
if(function(e){return!(!e||!e.useExisting)}(e))i=function(){return
Ke(Ee(e.useExisting))};else{var
o=Ee(e&&(e.useClass||e.provide));if(o||function(e,t,n){var r="";throw
e&&t&&(r=" - only instances of Provider and Type are allowed, got:
[".concat(t.map((function(e){return e==n?"?"+n+"?":"..."})).join(",
"),"]")),new Error("Invalid provider for the NgModule
'".concat(Ce(e),"'")+r)}(t,n,e),!function(e){return!!e.deps}(e))return
kt(o)||Fa(o);i=function(){return
_construct(o,_toConsumableArray(Je(e.deps)))}}return i}function La(e,t){var
n=arguments.length>2&&void
0!==arguments[2]&&arguments[2];return{factory:e,value:t,multi:n?[]:void
0}}function Ua(e){return null!==e&&"object"==typeof e&&qe in e}function
Ha(e){return"function"==typeof e}var za=function(e,t,n){return function(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void
0,i=Va(e,t,n,r);return
i._resolveInjectorDefTypes(),i}({name:n},t,e,n)},Ba=function(){var
e=function(){function e(){_classCallCheck(this,e)}return
_createClass(e,null,[{key:"create",value:function(e,t){return
Array.isArray(e)?za(e,t,""):za(e.providers,e.parent,e.name||"")}}]),e}();return
e.THROW_IF_NOT_FOUND=ze,e.NULL=new
Xe,e.\u0275prov=he({token:e,providedIn:"any",factory:function(){return
Ke(He)}}),e.__NG_ELEMENT_ID__=-1,e}(),qa=new
Ue("AnalyzeForEntryComponents"),Wa=new Map,Ga=new Set;function
Qa(e){return"string"==typeof e?e:e.text()}function Za(e,t,n){var
r=n?e.styles:null,i=n?e.classes:null,a=0;if(null!==t)for(var
o=0;o<t.length;o++){var s=t[o];"number"==typeof
s?a=s:1==a?i=we(i,s):2==a&&(r=we(r,s+":
"+t[++o]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=i:e.classesWithoutHost=i}var
Ka=null;function $a(){if(!Ka){var
e=Pe.Symbol;if(e&&e.iterator)Ka=e.iterator;else for(var
t=Object.getOwnPropertyNames(Map.prototype),n=0;n<t.length;++n){var
r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Ka=r)}}return
Ka}function Ja(e,t){return e===t||"number"==typeof e&&"number"==typeof
t&&isNaN(e)&&isNaN(t)}function Xa(e){return!!Ya(e)&&(Array.isArray(e)||!(e
instanceof Map)&&$a()in e)}function Ya(e){return null!==e&&("function"==typeof
e||"object"==typeof e)}function
eo(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function to(e,t,n,r){var
i=Wt();return eo(i,Yt(),t)&&(Gt(),function(e,t,n,r,i,a){var
o=Vt(e,t),s=t[11];if(null==r)It(s)?s.removeAttribute(o,n,a):o.removeAttribute(n);else{var
u=null==i?Pn(r):i(r,e.tagName||"",n);It(s)?s.setAttribute(o,n,u,a):a?o.setAttributeNS(a,n,u):o.setAttribute(n,u)}}(pn(),i,e,t,n,r)),to}function
no(e,t,n,r){return eo(e,Yt(),n)?t+Pn(n)+r:ti}function ro(e,t,n,r,i,a,o,s){var
u=Wt(),l=Gt(),c=e+20,h=l.firstCreatePass?function(e,t,n,r,i,a,o,s,u){var
l=t.consts,c=mi(t,n[6],e,0,o||null,Ut(l,s));Ri(t,n,c,Ut(l,u)),yn(t,c);var
h=c.tViews=Ti(2,-1,r,i,a,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l),f=xi(0,null,2,-1,null,null);return
f.injectorIndex=c.injectorIndex,h.node=f,null!==t.queries&&(t.queries.template(t,c),h.queries=t.queries.embeddedTView(c)),c}(e,l,u,t,n,r,i,a,o):l.data[c];Zt(h,!1);var
f=u[11].createComment("");va(l,u,f,h),zr(f,u),Wi(u,u[c]=zi(f,u,f,h)),Tt(h)&&bi(l,u,h),null!=o&&Si(u,h,s)}function
io(e){var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:ue.Default,n=Wt();return
null==n?Ke(e,t):qn(Qt(),n,Ee(e),t)}function ao(){throw new
Error("invalid")}function oo(e,t,n){var r=Wt();return
eo(r,Yt(),t)&&Oi(Gt(),pn(),r,e,t,r[11],n,!1),oo}function so(e,t,n,r,i){var
a=i?"class":"style";Yi(e,n,t.inputs[a],a,r)}function uo(e,t,n,r){var
i=Wt(),a=Gt(),o=20+e,s=i[11],u=i[o]=pi(t,s,Bt.lFrame.currentNamespace),l=a.firstCreatePass?function(e,t,n,r,i,a,o){var
s=t.consts,u=Ut(s,a),l=mi(t,n[6],e,3,i,u);return
Ri(t,n,l,Ut(s,o)),null!==l.attrs&&Za(l,l.attrs,!1),null!==l.mergedAttrs&&Za(l,l.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,l),l}(e,a,i,0,t,n,r):a.data[o];Zt(l,!0);var
c=l.mergedAttrs;null!==c&&bn(s,u,c);var h=l.classes;null!==h&&ka(s,u,h);var
f=l.styles;null!==f&&_a(s,u,f),va(a,i,u,l),0===Bt.lFrame.elementDepthCount&&zr(u,i),Bt.lFrame.elementDepthCount++,Tt(l)&&(bi(a,i,l),wi(a,l,i)),null!==r&&Si(i,l)}function
lo(){var e=Qt();Kt()?$t():Zt(e=e.parent,!1);var
t=e;Bt.lFrame.elementDepthCount--;var
n=Gt();n.firstCreatePass&&(yn(n,e),St(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return
0!=(16&e.flags)}(t)&&so(n,t,Wt(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return
0!=(32&e.flags)}(t)&&so(n,t,Wt(),t.stylesWithoutHost,!1)}function
co(e,t,n,r){uo(e,t,n,r),lo()}function ho(e){return!!e&&"function"==typeof
e.then}function fo(e){return!!e&&"function"==typeof e.subscribe}function
vo(e,t){var n=arguments.length>2&&void
0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void
0,i=Wt(),a=Gt(),o=Qt();return function(e,t,n,r,i,a){var
o=arguments.length>6&&void
0!==arguments[6]&&arguments[6],s=arguments.length>7?arguments[7]:void
0,u=Tt(r),l=e.firstCreatePass&&(e.cleanup||(e.cleanup=[])),c=Ji(t),h=!0;if(3===r.type){var
f=Vt(r,t),d=s?s(f):lt,v=d.target||f,p=c.length,y=s?function(e){return
s(Nt(e[r.index])).target}:r.index;if(It(n)){var
m=null;if(!s&&u&&(m=function(e,t,n,r){var i=e.cleanup;if(null!=i)for(var
a=0;a<i.length-1;a+=2){var o=i[a];if(o===n&&i[a+1]===r){var
s=t[7],u=i[a+2];return s.length>u?s[u]:null}"string"==typeof o&&(a+=2)}return
null}(e,t,i,r.index)),null!==m)(m.__ngLastListenerFn__||m).__ngNextListenerFn__=a,m.__ngLastListenerFn__=a,h=!1;else{a=yo(r,t,a,!1);var
g=n.listen(d.name||v,i,a);c.push(a,g),l&&l.push(i,y,p,p+1)}}else
a=yo(r,t,a,!0),v.addEventListener(i,a,o),c.push(a),l&&l.push(i,y,p,o)}var
_,k=r.outputs;if(h&&null!==k&&(_=k[i])){var C=_.length;if(C)for(var
w=0;w<C;w+=2){var
b=t[_[w]][_[w+1]].subscribe(a),S=c.length;c.push(a,b),l&&l.push(i,r.index,S,-(S+1))}}}(a,i,i[11],o,e,t,n,r),vo}function
po(e,t,n){try{return!1!==t(n)}catch(r){return Xi(e,r),!1}}function
yo(e,t,n,r){return function i(a){if(a===Function)return n;var
o=2&e.flags?Ft(e.index,t):t;0==(32&t[2])&&Gi(o);for(var
s=po(t,n,a),u=i.__ngNextListenerFn__;u;)s=po(t,u,a)&&s,u=u.__ngNextListenerFn__;return
r&&!1===s&&(a.preventDefault(),a.returnValue=!1),s}}function mo(){var
e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return
function(e){return(Bt.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return
t}(e,Bt.lFrame.contextLView))[8]}(e)}function go(e,t,n){return
_o(e,"",t,"",n),go}function _o(e,t,n,r,i){var a=Wt(),o=no(a,t,n,r);return
o!==ti&&Oi(Gt(),pn(),a,e,o,a[11],i,!1),_o}var ko=[];function
Co(e,t,n,r,i){for(var
a=e[n+1],o=null===t,s=r?li(a):hi(a),u=!1;0!==s&&(!1===u||o);){var
l=e[s+1];wo(e[s],t)&&(u=!0,e[s+1]=r?di(l):ci(l)),s=r?li(l):hi(l)}u&&(e[n+1]=r?ci(a):di(a))}function
wo(e,t){return
null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof
t)&&ot(e,t)>=0}var bo={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function
So(e){return e.substring(bo.key,bo.keyEnd)}function Eo(e,t){var
n=bo.textEnd;return
n===t?-1:(t=bo.keyEnd=function(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return
t}(e,bo.key=t,n),To(e,t,n))}function
To(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function
xo(e,t,n){return Io(e,t,n,!1),xo}function Ao(e,t){return
Io(e,t,null,!0),Ao}function Oo(e){!function(e,t,n,r){var
i=Gt(),a=en(2);i.firstUpdatePass&&No(i,null,a,!0);var
o=Wt();if(n!==ti&&eo(o,a,n)){var s=i.data[dn()+20];if(Lo(s,!0)&&!Po(i,a)){var
u=s.classesWithoutHost;null!==u&&(n=we(u,n||"")),so(i,s,o,n,!0)}else!function(e,t,n,r,i,a,o,s){i===ti&&(i=ko);for(var
u=0,l=0,c=0<i.length?i[0]:null,h=0<a.length?a[0]:null;null!==c||null!==h;){var
f=u<i.length?i[u+1]:void 0,d=l<a.length?a[l+1]:void 0,v=null,p=void
0;c===h?(u+=2,l+=2,f!==d&&(v=h,p=d)):null===h||null!==c&&c<h?(u+=2,v=c):(l+=2,v=h,p=d),null!==v&&jo(e,t,n,r,v,p,!0,s),c=u<i.length?i[u]:null,h=l<a.length?a[l]:null}}(i,s,o,o[11],o[a+1],o[a+1]=function(e,t,n){if(null==n||""===n)return
ko;var r=[],i=ur(n);if(Array.isArray(i))for(var
a=0;a<i.length;a++)e(r,i[a],!0);else if("object"==typeof i)for(var o in
i)i.hasOwnProperty(o)&&e(r,o,i[o]);else"string"==typeof i&&t(r,i);return
r}(e,t,n),0,a)}}(it,Ro,e)}function Ro(e,t){for(var n=function(e){return
function(e){bo.key=0,bo.keyEnd=0,bo.value=0,bo.valueEnd=0,bo.textEnd=e.length}(e),Eo(e,To(e,0,bo.textEnd))}(t);n>=0;n=Eo(t,n))it(e,So(t),!0)}function
Io(e,t,n,r){var
i,a,o=Wt(),s=Gt(),u=en(2);(s.firstUpdatePass&&No(s,e,u,r),t!==ti&&eo(o,u,t))&&(null==n&&(i=null===(a=Bt.lFrame)?null:a.currentSanitizer)&&(n=i),jo(s,s.data[dn()+20],o,o[11],e,o[u+1]=function(e,t){return
null==e||("function"==typeof t?e=t(e):"string"==typeof t?e+=t:"object"==typeof
e&&(e=Ce(ur(e)))),e}(t,n),r,u))}function Po(e,t){return
t>=e.expandoStartIndex}function No(e,t,n,r){var i=e.data;if(null===i[n+1]){var
a=i[dn()+20],o=Po(e,n);Lo(a,r)&&null===t&&!o&&(t=!1),t=function(e,t,n,r){var
i=rn(e),a=r?t.residualClasses:t.residualStyles;if(null===i)0===(r?t.classBindings:t.styleBindings)&&(n=Vo(n=Do(null,e,t,n,r),t.attrs,r),a=null);else{var
o=t.directiveStylingLast;if(-1===o||e[o]!==i)if(n=Do(i,e,t,n,r),null===a){var
s=function(e,t,n){var r=n?t.classBindings:t.styleBindings;if(0!==hi(r))return
e[li(r)]}(e,t,r);void
0!==s&&Array.isArray(s)&&function(e,t,n,r){e[li(n?t.classBindings:t.styleBindings)]=r}(e,t,r,s=Vo(s=Do(null,e,t,s[1],r),t.attrs,r))}else
a=function(e,t,n){for(var r=void
0,i=t.directiveEnd,a=1+t.directiveStylingLast;a<i;a++)r=Vo(r,e[a].hostAttrs,n);return
Vo(r,t.attrs,n)}(e,t,r)}return void
0!==a&&(r?t.residualClasses=a:t.residualStyles=a),n}(i,a,t,r),function(e,t,n,r,i,a){var
o=a?t.classBindings:t.styleBindings,s=li(o),u=hi(o);e[r]=n;var
l,c=!1;if(Array.isArray(n)){var h=n;(null===(l=h[1])||ot(h,l)>0)&&(c=!0)}else
l=n;if(i)if(0!==u){var
f=li(e[s+1]);e[r+1]=ui(f,s),0!==f&&(e[f+1]=fi(e[f+1],r)),e[s+1]=131071&e[s+1]|r<<17}else
e[r+1]=ui(s,0),0!==s&&(e[s+1]=fi(e[s+1],r)),s=r;else
e[r+1]=ui(u,0),0===s?s=r:e[u+1]=fi(e[u+1],r),u=r;c&&(e[r+1]=ci(e[r+1])),Co(e,l,r,!0),Co(e,l,r,!1),function(e,t,n,r,i){var
a=i?e.residualClasses:e.residualStyles;null!=a&&"string"==typeof
t&&ot(a,t)>=0&&(n[r+1]=di(n[r+1]))}(t,l,e,r,a),o=ui(s,u),a?t.classBindings=o:t.styleBindings=o}(i,a,t,n,o,r)}}function
Do(e,t,n,r,i){var
a=null,o=n.directiveEnd,s=n.directiveStylingLast;for(-1===s?s=n.directiveStart:s++;s<o&&(r=Vo(r,(a=t[s]).hostAttrs,i),a!==e);)s++;return
null!==e&&(n.directiveStylingLast=s),r}function Vo(e,t,n){var
r=n?1:2,i=-1;if(null!==t)for(var a=0;a<t.length;a++){var
o=t[a];"number"==typeof o?i=o:i===r&&(Array.isArray(e)||(e=void
0===e?[]:["",e]),it(e,o,!!n||t[++a]))}return void 0===e?null:e}function
jo(e,t,n,r,i,a,o,s){if(3===t.type){var
u=e.data,l=u[s+1];Mo(1==(1&l)?Fo(u,t,n,i,hi(l),o):void
0)||(Mo(a)||2==(2&l)&&(a=Fo(u,null,n,i,s,o)),function(e,t,n,r,i){var
a=It(e);if(t)i?a?e.addClass(n,r):n.classList.add(r):a?e.removeClass(n,r):n.classList.remove(r);else{var
o=-1==r.indexOf("-")?void
0:2;null==i?a?e.removeStyle(n,r,o):n.style.removeProperty(r):a?e.setStyle(n,r,i,o):n.style.setProperty(r,i)}}(r,o,Dt(dn(),n),i,a))}}function
Fo(e,t,n,r,i,a){for(var o=null===t,s=void 0;i>0;){var
u=e[i],l=Array.isArray(u),c=l?u[1]:u,h=null===c,f=n[i+1];f===ti&&(f=h?ko:void
0);var d=h?at(f,r):c===r?f:void
0;if(l&&!Mo(d)&&(d=at(u,r)),Mo(d)&&(s=d,o))return s;var
v=e[i+1];i=o?li(v):hi(v)}if(null!==t){var
p=a?t.residualClasses:t.residualStyles;null!=p&&(s=at(p,r))}return s}function
Mo(e){return void 0!==e}function Lo(e,t){return
0!=(e.flags&(t?16:32))}function Uo(e){var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:"",n=Wt(),r=Gt(),i=e+20,a=r.firstCreatePass?mi(r,n[6],e,3,null,null):r.data[i],o=n[i]=function(e,t){return
It(t)?t.createText(e):t.createTextNode(e)}(t,n[11]);va(r,n,o,a),Zt(a,!1)}function
Ho(e){return zo("",e,""),Ho}function zo(e,t,n){var r=Wt(),i=no(r,e,t,n);return
i!==ti&&ea(r,dn(),i),zo}function Bo(e,t,n,r,i){var
a=Wt(),o=function(e,t,n,r,i,a){var o=function(e,t,n,r){var i=eo(e,t,n);return
eo(e,t+1,r)||i}(e,Bt.lFrame.bindingIndex,n,i);return
en(2),o?t+Pn(n)+r+Pn(i)+a:ti}(a,e,t,n,r,i);return
o!==ti&&ea(a,dn(),o),Bo}function qo(e,t,n){var r=Wt();if(eo(r,Yt(),t)){var
i=Gt(),a=pn();Oi(i,a,r,e,t,function(e,t,n){return(null===e||xt(e))&&(n=function(e){for(;Array.isArray(e);){if("object"==typeof
e[1])return e;e=e[0]}return
null}(n[t.index])),n[11]}(rn(i.data),a,r),n,!0)}return qo}function Wo(e,t){var
n=Mt(e)[1],r=n.data.length-1;yn(n,{directiveStart:r,directiveEnd:r+1})}function
Go(e){for(var
t=Object.getPrototypeOf(e.type.prototype).constructor,n=!0,r=[e];t;){var
i=void 0;if(xt(e))i=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new
Error("Directives cannot inherit
Components");i=t.\u0275dir}if(i){if(n){r.push(i);var
a=e;a.inputs=Qo(e.inputs),a.declaredInputs=Qo(e.declaredInputs),a.outputs=Qo(e.outputs);var
o=i.hostBindings;o&&$o(e,o);var
s=i.viewQuery,u=i.contentQueries;if(s&&Zo(e,s),u&&Ko(e,u),ce(e.inputs,i.inputs),ce(e.declaredInputs,i.declaredInputs),ce(e.outputs,i.outputs),xt(i)&&i.data.animation){var
l=e.data;l.animation=(l.animation||[]).concat(i.data.animation)}a.afterContentChecked=a.afterContentChecked||i.afterContentChecked,a.afterContentInit=e.afterContentInit||i.afterContentInit,a.afterViewChecked=e.afterViewChecked||i.afterViewChecked,a.afterViewInit=e.afterViewInit||i.afterViewInit,a.doCheck=e.doCheck||i.doCheck,a.onDestroy=e.onDestroy||i.onDestroy,a.onInit=e.onInit||i.onInit}var
c=i.features;if(c)for(var h=0;h<c.length;h++){var
f=c[h];f&&f.ngInherit&&f(e),f===Go&&(n=!1)}}t=Object.getPrototypeOf(t)}!function(e){for(var
t=0,n=null,r=e.length-1;r>=0;r--){var
i=e[r];i.hostVars=t+=i.hostVars,i.hostAttrs=Tn(i.hostAttrs,n=Tn(n,i.hostAttrs))}}(r)}function
Qo(e){return e===lt?{}:e===ct?[]:e}function Zo(e,t){var
n=e.viewQuery;e.viewQuery=n?function(e,r){t(e,r),n(e,r)}:t}function
Ko(e,t){var
n=e.contentQueries;e.contentQueries=n?function(e,r,i){t(e,r,i),n(e,r,i)}:t}function
$o(e,t){var
n=e.hostBindings;e.hostBindings=n?function(e,r){t(e,r),n(e,r)}:t}var
Jo=function(){function
e(t,n,r){_classCallCheck(this,e),this.previousValue=t,this.currentValue=n,this.firstChange=r}return
_createClass(e,[{key:"isFirstChange",value:function(){return
this.firstChange}}]),e}();function
Xo(e){e.type.prototype.ngOnChanges&&(e.setInput=Yo,e.onChanges=function(){var
e=es(this),t=e&&e.current;if(t){var n=e.previous;if(n===lt)e.previous=t;else
for(var r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}})}function
Yo(e,t,n,r){var i=es(e)||function(e,t){return
e.__ngSimpleChanges__=t}(e,{previous:lt,current:null}),a=i.current||(i.current={}),o=i.previous,s=this.declaredInputs[n],u=o[s];a[s]=new
Jo(u&&u.currentValue,t,o===lt),e[r]=t}function es(e){return
e.__ngSimpleChanges__||null}function
ts(e,t,n,r,i){if(e=Ee(e),Array.isArray(e))for(var
a=0;a<e.length;a++)ts(e[a],t,n,r,i);else{var
o=Gt(),s=Wt(),u=Ha(e)?e:Ee(e.provide),l=Ma(e),c=Qt(),h=65535&c.providerIndexes,f=c.directiveStart,d=c.providerIndexes>>16;if(Ha(e)||!e.multi){var
v=new
wn(l,i,io),p=is(u,t,i?h:h+d,f);-1===p?(Bn(Ln(c,s),o,u),ns(o,e,t.length),t.push(u),c.directiveStart++,c.directiveEnd++,i&&(c.providerIndexes+=65536),n.push(v),s.push(v)):(n[p]=v,s[p]=v)}else{var
y=is(u,t,h+d,f),m=is(u,t,h,h+d),g=y>=0&&n[y],_=m>=0&&n[m];if(i&&!_||!i&&!g){Bn(Ln(c,s),o,u);var
k=function(e,t,n,r,i){var a=new wn(e,n,io);return
a.multi=[],a.index=t,a.componentProviders=0,rs(a,i,r&&!n),a}(i?os:as,n.length,i,r,l);!i&&_&&(n[m].providerFactory=k),ns(o,e,t.length,0),t.push(u),c.directiveStart++,c.directiveEnd++,i&&(c.providerIndexes+=65536),n.push(k),s.push(k)}else
ns(o,e,y>-1?y:m,rs(n[i?m:y],l,!i&&r));!i&&r&&_&&n[m].componentProviders++}}}function
ns(e,t,n,r){var i=Ha(t);if(i||t.useClass){var
a=(t.useClass||t).prototype.ngOnDestroy;if(a){var
o=e.destroyHooks||(e.destroyHooks=[]);if(!i&&t.multi){var
s=o.indexOf(n);-1===s?o.push(n,[r,a]):o[s+1].push(r,a)}else
o.push(n,a)}}}function rs(e,t,n){return
n&&e.componentProviders++,e.multi.push(t)-1}function is(e,t,n,r){for(var
i=n;i<r;i++)if(t[i]===e)return i;return-1}function as(e,t,n,r){return
ss(this.multi,[])}function os(e,t,n,r){var
i,a=this.multi;if(this.providerFactory){var
o=this.providerFactory.componentProviders,s=Qn(n,n[1],this.providerFactory.index,r);ss(a,i=s.slice(0,o));for(var
u=o;u<s.length;u++)i.push(s[u])}else ss(a,i=[]);return i}function
ss(e,t){for(var n=0;n<e.length;n++)t.push((0,e[n])());return t}function
us(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return
function(n){n.providersResolver=function(n,r){return function(e,t,n){var
r=Gt();if(r.firstCreatePass){var
i=xt(e);ts(n,r.data,r.blueprint,i,!0),ts(t,r.data,r.blueprint,i,!1)}}(n,r?r(e):e,t)}}}Xo.ngInherit=!0;var
ls=function e(){_classCallCheck(this,e)},cs=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"resolveComponentFactory",value:function(e){throw
function(e){var t=Error("No component factory found for ".concat(Ce(e),". Did
you add it to @NgModule.entryComponents?"));return
t.ngComponent=e,t}(e)}}]),e}(),hs=function(){var e=function
e(){_classCallCheck(this,e)};return e.NULL=new cs,e}(),fs=function(){var
e=function e(t){_classCallCheck(this,e),this.nativeElement=t};return
e.__NG_ELEMENT_ID__=function(){return ds(e)},e}(),ds=function(e){return
Ta(e,Qt(),Wt())},vs=function e(){_classCallCheck(this,e)},ps=function(){var
e={Important:1,DashCase:2};return
e[e.Important]="Important",e[e.DashCase]="DashCase",e}(),ys=function(){var
e=function e(){_classCallCheck(this,e)};return
e.__NG_ELEMENT_ID__=function(){return ms()},e}(),ms=function(){var
e=Wt(),t=Ft(Qt().index,e);return function(e){var t=e[11];if(It(t))return
t;throw new Error("Cannot inject Renderer2 when the application uses
Renderer3!")}(wt(t)?t:e)},gs=function(){var e=function
e(){_classCallCheck(this,e)};return
e.\u0275prov=he({token:e,providedIn:"root",factory:function(){return
null}}),e}(),_s=new function
e(t){_classCallCheck(this,e),this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}("9.1.11"),ks=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"supports",value:function(e){return
Xa(e)}},{key:"create",value:function(e){return new
ws(e)}}]),e}(),Cs=function(e,t){return t},ws=function(){function
e(t){_classCallCheck(this,e),this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||Cs}return
_createClass(e,[{key:"forEachItem",value:function(e){var
t;for(t=this._itHead;null!==t;t=t._next)e(t)}},{key:"forEachOperation",value:function(e){for(var
t=this._itHead,n=this._removalsHead,r=0,i=null;t||n;){var
a=!n||t&&t.currentIndex<Ts(n,r,i)?t:n,o=Ts(a,r,i),s=a.currentIndex;if(a===n)r--,n=n._nextRemoved;else
if(t=t._next,null==a.previousIndex)r++;else{i||(i=[]);var
u=o-r,l=s-r;if(u!=l){for(var c=0;c<u;c++){var
h=c<i.length?i[c]:i[c]=0,f=h+c;l<=f&&f<u&&(i[c]=h+1)}i[a.previousIndex]=l-u}}o!==s&&e(a,o,s)}}},{key:"forEachPreviousItem",value:function(e){var
t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}},{key:"forEachAddedItem",value:function(e){var
t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}},{key:"forEachMovedItem",value:function(e){var
t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}},{key:"forEachRemovedItem",value:function(e){var
t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}},{key:"forEachIdentityChange",value:function(e){var
t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}},{key:"diff",value:function(e){if(null==e&&(e=[]),!Xa(e))throw
new Error("Error trying to diff '".concat(Ce(e),"'. Only arrays and iterables
are allowed"));return
this.check(e)?this:null}},{key:"onDestroy",value:function(){}},{key:"check",value:function(e){var
t=this;this._reset();var
n,r,i,a=this._itHead,o=!1;if(Array.isArray(e)){this.length=e.length;for(var
s=0;s<this.length;s++)r=e[s],i=this._trackByFn(s,r),null!==a&&Ja(a.trackById,i)?(o&&(a=this._verifyReinsertion(a,r,i,s)),Ja(a.item,r)||this._addIdentityChange(a,r)):(a=this._mismatch(a,r,i,s),o=!0),a=a._next}else
n=0,function(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n]);else
for(var
r,i=e[$a()]();!(r=i.next()).done;)t(r.value)}(e,(function(e){i=t._trackByFn(n,e),null!==a&&Ja(a.trackById,i)?(o&&(a=t._verifyReinsertion(a,e,i,n)),Ja(a.item,e)||t._addIdentityChange(a,e)):(a=t._mismatch(a,e,i,n),o=!0),a=a._next,n++})),this.length=n;return
this._truncate(a),this.collection=e,this.isDirty}},{key:"_reset",value:function(){if(this.isDirty){var
e,t;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=t)e.previousIndex=e.currentIndex,t=e._nextMoved;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}},{key:"_mismatch",value:function(e,t,n,r){var
i;return
null===e?i=this._itTail:(i=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Ja(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,i,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Ja(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,i,r)):e=this._addAfter(new
bs(t,n),i,r),e}},{key:"_verifyReinsertion",value:function(e,t,n,r){var
i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return
null!==i?e=this._reinsertAfter(i,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}},{key:"_truncate",value:function(e){for(;null!==e;){var
t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}},{key:"_reinsertAfter",value:function(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);var
r=e._prevRemoved,i=e._nextRemoved;return
null===r?this._removalsHead=i:r._nextRemoved=i,null===i?this._removalsTail=r:i._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}},{key:"_moveAfter",value:function(e,t,n){return
this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}},{key:"_addAfter",value:function(e,t,n){return
this._insertAfter(e,t,n),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}},{key:"_insertAfter",value:function(e,t,n){var
r=null===t?this._itHead:t._next;return
e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new
Es),this._linkedRecords.put(e),e.currentIndex=n,e}},{key:"_remove",value:function(e){return
this._addToRemovals(this._unlink(e))}},{key:"_unlink",value:function(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);var
t=e._prev,n=e._next;return
null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}},{key:"_addToMoves",value:function(e,t){return
e.previousIndex===t||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}},{key:"_addToRemovals",value:function(e){return
null===this._unlinkedRecords&&(this._unlinkedRecords=new
Es),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}},{key:"_addIdentityChange",value:function(e,t){return
e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}},{key:"isDirty",get:function(){return
null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}}]),e}(),bs=function
e(t,n){_classCallCheck(this,e),this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null},Ss=function(){function
e(){_classCallCheck(this,e),this._head=null,this._tail=null}return
_createClass(e,[{key:"add",value:function(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}},{key:"get",value:function(e,t){var
n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&Ja(n.trackById,e))return
n;return null}},{key:"remove",value:function(e){var
t=e._prevDup,n=e._nextDup;return
null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}]),e}(),Es=function(){function
e(){_classCallCheck(this,e),this.map=new Map}return
_createClass(e,[{key:"put",value:function(e){var
t=e.trackById,n=this.map.get(t);n||(n=new
Ss,this.map.set(t,n)),n.add(e)}},{key:"get",value:function(e,t){var
n=this.map.get(e);return
n?n.get(e,t):null}},{key:"remove",value:function(e){var t=e.trackById;return
this.map.get(t).remove(e)&&this.map.delete(t),e}},{key:"clear",value:function(){this.map.clear()}},{key:"isEmpty",get:function(){return
0===this.map.size}}]),e}();function Ts(e,t,n){var
r=e.previousIndex;if(null===r)return r;var i=0;return
n&&r<n.length&&(i=n[r]),r+t+i}var xs=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"supports",value:function(e){return e instanceof
Map||Ya(e)}},{key:"create",value:function(){return new
As}}]),e}(),As=function(){function
e(){_classCallCheck(this,e),this._records=new
Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}return
_createClass(e,[{key:"forEachItem",value:function(e){var
t;for(t=this._mapHead;null!==t;t=t._next)e(t)}},{key:"forEachPreviousItem",value:function(e){var
t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}},{key:"forEachChangedItem",value:function(e){var
t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}},{key:"forEachAddedItem",value:function(e){var
t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}},{key:"forEachRemovedItem",value:function(e){var
t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}},{key:"diff",value:function(e){if(e){if(!(e
instanceof Map||Ya(e)))throw new Error("Error trying to diff
'".concat(Ce(e),"'. Only maps and objects are allowed"))}else e=new Map;return
this.check(e)?this:null}},{key:"onDestroy",value:function(){}},{key:"check",value:function(e){var
t=this;this._reset();var
n=this._mapHead;if(this._appendAfter=null,this._forEach(e,(function(e,r){if(n&&n.key===r)t._maybeAddToChanges(n,e),t._appendAfter=n,n=n._next;else{var
i=t._getOrCreateRecordForKey(r,e);n=t._insertBeforeOrAppend(n,i)}})),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(var
r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return
this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}},{key:"_insertBeforeOrAppend",value:function(e,t){if(e){var
n=e._prev;return
t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return
this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}},{key:"_getOrCreateRecordForKey",value:function(e,t){if(this._records.has(e)){var
n=this._records.get(e);this._maybeAddToChanges(n,t);var
r=n._prev,i=n._next;return
r&&(r._next=i),i&&(i._prev=r),n._next=null,n._prev=null,n}var a=new
Os(e);return
this._records.set(e,a),a.currentValue=t,this._addToAdditions(a),a}},{key:"_reset",value:function(){if(this.isDirty){var
e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}},{key:"_maybeAddToChanges",value:function(e,t){Ja(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}},{key:"_addToAdditions",value:function(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}},{key:"_addToChanges",value:function(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}},{key:"_forEach",value:function(e,t){e
instanceof Map?e.forEach(t):Object.keys(e).forEach((function(n){return
t(e[n],n)}))}},{key:"isDirty",get:function(){return
null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}}]),e}(),Os=function
e(t){_classCallCheck(this,e),this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null},Rs=function(){var
e=function(){function e(t){_classCallCheck(this,e),this.factories=t}return
_createClass(e,[{key:"find",value:function(e){var
t,n=this.factories.find((function(t){return t.supports(e)}));if(null!=n)return
n;throw new Error("Cannot find a differ supporting object '".concat(e,"' of
type '").concat((t=e).name||typeof
t,"'"))}}],[{key:"create",value:function(t,n){if(null!=n){var
r=n.factories.slice();t=t.concat(r)}return new
e(t)}},{key:"extend",value:function(t){return{provide:e,useFactory:function(n){if(!n)throw
new Error("Cannot extend IterableDiffers without a parent injector");return
e.create(t,n)},deps:[[e,new se,new ae]]}}}]),e}();return
e.\u0275prov=he({token:e,providedIn:"root",factory:function(){return new
e([new ks])}}),e}(),Is=function(){var e=function(){function
e(t){_classCallCheck(this,e),this.factories=t}return
_createClass(e,[{key:"find",value:function(e){var
t=this.factories.find((function(t){return t.supports(e)}));if(t)return t;throw
new Error("Cannot find a differ supporting object
'".concat(e,"'"))}}],[{key:"create",value:function(t,n){if(n){var
r=n.factories.slice();t=t.concat(r)}return new
e(t)}},{key:"extend",value:function(t){return{provide:e,useFactory:function(n){if(!n)throw
new Error("Cannot extend KeyValueDiffers without a parent injector");return
e.create(t,n)},deps:[[e,new se,new ae]]}}}]),e}();return
e.\u0275prov=he({token:e,providedIn:"root",factory:function(){return new
e([new xs])}}),e}(),Ps=[new xs],Ns=new Rs([new ks]),Ds=new
Is(Ps),Vs=function(){var e=function e(){_classCallCheck(this,e)};return
e.__NG_ELEMENT_ID__=function(){return js(e,fs)},e}(),js=function(e,t){return
function(e,t,n,r){return wa||(wa=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this))._declarationView=e,a._declarationTContainer=r,a.elementRef=i,a}return
_createClass(n,[{key:"createEmbeddedView",value:function(e){var
t=this._declarationTContainer.tViews,n=yi(this._declarationView,t,e,16,null,t.node);n[17]=this._declarationView[this._declarationTContainer.index];var
r=this._declarationView[19];return
null!==r&&(n[19]=r.createEmbeddedView(t)),gi(t,n,e),new
Sa(n)}}]),n}(e)),0===n.type?new
wa(r,n,Ta(t,n,r)):null}(e,t,Qt(),Wt())},Fs=function(){var e=function
e(){_classCallCheck(this,e)};return e.__NG_ELEMENT_ID__=function(){return
Ms(e,fs)},e}(),Ms=function(e,t){return function(e,t,n,r){var
i;ba||(ba=function(e){_inherits(r,e);var n=_createSuper(r);function
r(e,t,i){var a;return
_classCallCheck(this,r),(a=n.call(this))._lContainer=e,a._hostTNode=t,a._hostView=i,a}return
_createClass(r,[{key:"clear",value:function(){for(;this.length>0;)this.remove(this.length-1)}},{key:"get",value:function(e){return
null!==this._lContainer[8]&&this._lContainer[8][e]||null}},{key:"createEmbeddedView",value:function(e,t,n){var
r=e.createEmbeddedView(t||{});return
this.insert(r,n),r}},{key:"createComponent",value:function(e,t,n,r,i){var
a=n||this.parentInjector;if(!i&&null==e.ngModule&&a){var
o=a.get(Ye,null);o&&(i=o)}var s=e.create(a,r,void 0,i);return
this.insert(s.hostView,t),s}},{key:"insert",value:function(e,t){var
n=e._lView,r=n[1];if(e.destroyed)throw new Error("Cannot insert a destroyed
View in a ViewContainer!");if(this.allocateContainerIfNeeded(),bt(n[3])){var
i=this.indexOf(e);if(-1!==i)this.detach(i);else{var a=n[3],o=new
ba(a,a[6],a[3]);o.detach(o.indexOf(e))}}var s=this._adjustIndex(t);return
function(e,t,n,r){var
i=10+r,a=n.length;r>0&&(n[i-1][4]=t),r<a-10?(t[4]=n[i],nt(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;var
o=t[17];null!==o&&n!==o&&function(e,t){var
n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(o,t);var
s=t[19];null!==s&&s.insertView(e),t[2]|=128}(r,n,this._lContainer,s),ia(r,n,!0,pa(s,this._lContainer)),e.attachToViewContainerRef(this),nt(this._lContainer[8],s,e),e}},{key:"move",value:function(e,t){if(e.destroyed)throw
new Error("Cannot move a destroyed View in a ViewContainer!");return
this.insert(e,t)}},{key:"indexOf",value:function(e){var
t=this._lContainer[8];return
null!==t?t.indexOf(e):-1}},{key:"remove",value:function(e){this.allocateContainerIfNeeded();var
t=this._adjustIndex(e,-1);!function(e,t){var
n=oa(e,t);n&&sa(n[1],n)}(this._lContainer,t),rt(this._lContainer[8],t)}},{key:"detach",value:function(e){this.allocateContainerIfNeeded();var
t=this._adjustIndex(e,-1),n=oa(this._lContainer,t);return
n&&null!=rt(this._lContainer[8],t)?new
Sa(n):null}},{key:"_adjustIndex",value:function(e){var
t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return
null==e?this.length+t:e}},{key:"allocateContainerIfNeeded",value:function(){null===this._lContainer[8]&&(this._lContainer[8]=[])}},{key:"element",get:function(){return
Ta(t,this._hostTNode,this._hostView)}},{key:"injector",get:function(){return
new
$n(this._hostTNode,this._hostView)}},{key:"parentInjector",get:function(){var
e=zn(this._hostTNode,this._hostView),t=In(e,this._hostView),n=function(e,t,n){if(n.parent&&-1!==n.parent.injectorIndex){for(var
r=n.parent.injectorIndex,i=n.parent;null!=i.parent&&r==i.parent.injectorIndex;)i=i.parent;return
i}for(var a=Rn(e),o=t,s=t[6];a>1;)s=(o=o[15])[6],a--;return
s}(e,this._hostView,this._hostTNode);return An(e)&&null!=n?new $n(n,t):new
$n(null,this._hostView)}},{key:"length",get:function(){return
this._lContainer.length-10}}]),r}(e));var a=r[n.index];if(bt(a))i=a;else{var
o;if(4===n.type)o=Nt(a);else if(o=r[11].createComment(""),At(r)){var
s=r[11],u=Vt(n,r);ca(s,da(s,u),o,function(e,t){return
It(e)?e.nextSibling(t):t.nextSibling}(s,u))}else
va(r[1],r,o,n);r[n.index]=i=zi(a,r,o,n),Wi(r,i)}return new
ba(i,n,r)}(e,t,Qt(),Wt())},Ls={},Us=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){var r;return
_classCallCheck(this,n),(r=t.call(this)).ngModule=e,r}return
_createClass(n,[{key:"resolveComponentFactory",value:function(e){var
t=_t(e);return new Bs(t,this.ngModule)}}]),n}(hs);function Hs(e){var
t=[];for(var n in
e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}var
zs=new Ue("SCHEDULER_TOKEN",{providedIn:"root",factory:function(){return
Dn}}),Bs=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var
i;return
_classCallCheck(this,n),(i=t.call(this)).componentDef=e,i.ngModule=r,i.componentType=e.type,i.selector=e.selectors.map(ei).join(","),i.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],i.isBoundToModule=!!r,i}return
_createClass(n,[{key:"create",value:function(e,t,n,r){var
i,a,o=(r=r||this.ngModule)?function(e,t){return{get:function(n,r,i){var
a=e.get(n,Ls,i);return
a!==Ls||r===Ls?a:t.get(n,r,i)}}}(e,r.injector):e,s=o.get(vs,Pt),u=o.get(gs,null),l=s.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",h=n?function(e,t,n){if(It(e))return
e.selectRootElement(t,n===ut.ShadowDom);var r="string"==typeof
t?e.querySelector(t):t;return
r.textContent="",r}(l,n,this.componentDef.encapsulation):pi(c,s.createRenderer(null,this.componentDef),function(e){var
t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(c)),f=this.componentDef.onPush?576:528,d="string"==typeof
n&&/^#root-ng-internal-isolated-\d+/.test(n),v={components:[],scheduler:Dn,clean:$i,playerHandler:null,flags:0},p=Ti(0,-1,null,1,0,null,null,null,null,null),y=yi(null,p,v,f,null,null,s,l,u,o);sn(y,null);try{var
m=function(e,t,n,r,i,a){var o=n[1];n[20]=e;var
s=mi(o,null,0,3,null,null),u=s.mergedAttrs=t.hostAttrs;null!==u&&(Za(s,u,!0),null!==e&&(bn(i,e,u),null!==s.classes&&ka(i,e,s.classes),null!==s.styles&&_a(i,e,s.styles)));var
l=r.createRenderer(e,t),c=yi(n,Ei(t),null,t.onPush?64:16,n[20],s,r,l,void
0);return
o.firstCreatePass&&(Bn(Ln(s,n),o,t.type),Vi(o,s),Fi(s,n.length,1)),Wi(n,c),n[20]=c}(h,this.componentDef,y,s,l);if(h)if(n)bn(l,h,["ng-version",_s.full]);else{var
g=function(e){for(var t=[],n=[],r=1,i=2;r<e.length;){var
a=e[r];if("string"==typeof
a)2===i?""!==a&&t.push(a,e[++r]):8===i&&n.push(a);else{if(!$r(i))break;i=a}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]),_=g.attrs,k=g.classes;_&&bn(l,h,_),k&&k.length>0&&ka(l,h,k.join("
"))}if(a=jt(p,0),void 0!==t)for(var
C=a.projection=[],w=0;w<this.ngContentSelectors.length;w++){var
b=t[w];C.push(null!=b?Array.from(b):null)}i=function(e,t,n,r,i){var
a=n[1],o=function(e,t,n){var
r=Qt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Di(e,r,1),Mi(e,t,n));var
i=Qn(t,e,t.length-1,r);zr(i,t);var a=Vt(r,t);return
a&&zr(a,t),i}(a,n,t);r.components.push(o),e[8]=o,i&&i.forEach((function(e){return
e(o,t)})),t.contentQueries&&t.contentQueries(1,o,n.length-1);var
s=Qt();if(a.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){vn(s.index-20);var
u=n[1];Ii(u,t),Pi(u,n,t.hostVars),Ni(t,o)}return
o}(m,this.componentDef,y,v,[Wo]),gi(p,y,null)}finally{fn()}var S=new
qs(this.componentType,i,Ta(fs,a,y),y,a);return
n&&!d||(p.node.child=a),S}},{key:"inputs",get:function(){return
Hs(this.componentDef.inputs)}},{key:"outputs",get:function(){return
Hs(this.componentDef.outputs)}}]),n}(ls),qs=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a,o){var s,u,l,c;return
_classCallCheck(this,n),(s=t.call(this)).location=i,s._rootLView=a,s._tNode=o,s.destroyCbs=[],s.instance=r,s.hostView=s.changeDetectorRef=new
Ea(a),u=a[1],l=a,null==(c=u.node)&&(u.node=c=xi(0,null,2,-1,null,null)),l[6]=c,s.componentType=e,s}return
_createClass(n,[{key:"destroy",value:function(){this.destroyCbs&&(this.destroyCbs.forEach((function(e){return
e()})),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}},{key:"onDestroy",value:function(e){this.destroyCbs&&this.destroyCbs.push(e)}},{key:"injector",get:function(){return
new $n(this._tNode,this._rootLView)}}]),n}(function(){return function
e(){_classCallCheck(this,e)}}()),Ws=void
0,Gs=["en",[["a","p"],["AM","PM"],Ws],[["AM","PM"],Ws,Ws],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Ws,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Ws,[["B","A"],["BC","AD"],["Before
Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM
d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1},
{0}",Ws,"{1} 'at'
{0}",Ws],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US
Dollar",{},"ltr",function(e){var
t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return
1===t&&0===n?1:5}],Qs={};function Zs(e){return e in
Qs||(Qs[e]=Pe.ng&&Pe.ng.common&&Pe.ng.common.locales&&Pe.ng.common.locales[e]),Qs[e]}var
Ks=function(){var
e={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};return
e[e.LocaleId]="LocaleId",e[e.DayPeriodsFormat]="DayPeriodsFormat",e[e.DayPeriodsStandalone]="DayPeriodsStandalone",e[e.DaysFormat]="DaysFormat",e[e.DaysStandalone]="DaysStandalone",e[e.MonthsFormat]="MonthsFormat",e[e.MonthsStandalone]="MonthsStandalone",e[e.Eras]="Eras",e[e.FirstDayOfWeek]="FirstDayOfWeek",e[e.WeekendRange]="WeekendRange",e[e.DateFormat]="DateFormat",e[e.TimeFormat]="TimeFormat",e[e.DateTimeFormat]="DateTimeFormat",e[e.NumberSymbols]="NumberSymbols",e[e.NumberFormats]="NumberFormats",e[e.CurrencyCode]="CurrencyCode",e[e.CurrencySymbol]="CurrencySymbol",e[e.CurrencyName]="CurrencyName",e[e.Currencies]="Currencies",e[e.Directionality]="Directionality",e[e.PluralCase]="PluralCase",e[e.ExtraData]="ExtraData",e}();function
$s(e){var t;null==(t=e)&&function(e,t,n,r){throw new Error("ASSERTION ERROR:
Expected localeId to be defined"+" [Expected=> null != ".concat(t,"
<=Actual]"))}(0,t),"string"==typeof e&&e.toLowerCase().replace(/_/g,"-")}var
Js=new Map,Xs=function(e){_inherits(n,e);var t=_createSuper(n);function
n(e,r){var
i;_classCallCheck(this,n),(i=t.call(this))._parent=r,i._bootstrapComponents=[],i.injector=_assertThisInitialized(i),i.destroyCbs=[],i.componentFactoryResolver=new
Us(_assertThisInitialized(i));var a=Ct(e),o=e[Fe]||null;return
o&&$s(o),i._bootstrapComponents=Vn(a.bootstrap),i._r3Injector=Va(e,r,[{provide:Ye,useValue:_assertThisInitialized(i)},{provide:hs,useValue:i.componentFactoryResolver}],Ce(e)),i._r3Injector._resolveInjectorDefTypes(),i.instance=i.get(e),i}return
_createClass(n,[{key:"get",value:function(e){var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:Ba.THROW_IF_NOT_FOUND,n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:ue.Default;return
e===Ba||e===Ye||e===He?this:this._r3Injector.get(e,t,n)}},{key:"destroy",value:function(){var
e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach((function(e){return
e()})),this.destroyCbs=null}},{key:"onDestroy",value:function(e){this.destroyCbs.push(e)}}]),n}(Ye),Ys=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){var r;return
_classCallCheck(this,n),(r=t.call(this)).moduleType=e,null!==Ct(e)&&function
e(t){if(null!==t.\u0275mod.id){var
n=t.\u0275mod.id;(function(e,t,n){if(t&&t!==n)throw new Error("Duplicate
module registered for ".concat(e," - ").concat(Ce(t)," vs
").concat(Ce(t.name)))})(n,Js.get(n),t),Js.set(n,t)}var
r=t.\u0275mod.imports;r instanceof
Function&&(r=r()),r&&r.forEach((function(t){return e(t)}))}(e),r}return
_createClass(n,[{key:"create",value:function(e){return new
Xs(this.moduleType,e)}}]),n}(et),eu=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){var e,r=arguments.length>0&&void
0!==arguments[0]&&arguments[0];return
_classCallCheck(this,n),(e=t.call(this)).__isAsync=r,e}return
_createClass(n,[{key:"emit",value:function(e){_get(_getPrototypeOf(n.prototype),"next",this).call(this,e)}},{key:"subscribe",value:function(e,t,r){var
i,a=function(e){return null},o=function(){return null};e&&"object"==typeof
e?(i=this.__isAsync?function(t){setTimeout((function(){return
e.next(t)}))}:function(t){e.next(t)},e.error&&(a=this.__isAsync?function(t){setTimeout((function(){return
e.error(t)}))}:function(t){e.error(t)}),e.complete&&(o=this.__isAsync?function(){setTimeout((function(){return
e.complete()}))}:function(){e.complete()})):(i=this.__isAsync?function(t){setTimeout((function(){return
e(t)}))}:function(t){e(t)},t&&(a=this.__isAsync?function(e){setTimeout((function(){return
t(e)}))}:function(e){t(e)}),r&&(o=this.__isAsync?function(){setTimeout((function(){return
r()}))}:function(){r()}));var
s=_get(_getPrototypeOf(n.prototype),"subscribe",this).call(this,i,a,o);return
e instanceof f&&e.add(s),s}}]),n}(A),tu=new Ue("Application
Initializer"),nu=function(){var e=function(){function e(t){var
n=this;_classCallCheck(this,e),this.appInits=t,this.initialized=!1,this.done=!1,this.donePromise=new
Promise((function(e,t){n.resolve=e,n.reject=t}))}return
_createClass(e,[{key:"runInitializers",value:function(){var
e=this;if(!this.initialized){var
t=[],n=function(){e.done=!0,e.resolve()};if(this.appInits)for(var
r=0;r<this.appInits.length;r++){var
i=this.appInits[r]();ho(i)&&t.push(i)}Promise.all(t).then((function(){n()})).catch((function(t){e.reject(t)})),0===t.length&&n(),this.initialized=!0}}}]),e}();return
e.\u0275fac=function(t){return
new(t||e)(Ke(tu,8))},e.\u0275prov=he({token:e,factory:e.\u0275fac}),e}(),ru=new
Ue("AppId"),iu={provide:ru,useFactory:function(){return"".concat(au()).concat(au()).concat(au())},deps:[]};function
au(){return String.fromCharCode(97+Math.floor(25*Math.random()))}var ou=new
Ue("Platform Initializer"),su=new Ue("Platform ID"),uu=new
Ue("appBootstrapListener"),lu=function(){var e=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"log",value:function(e){console.log(e)}},{key:"warn",value:function(e){console.warn(e)}}]),e}();return
e.\u0275fac=function(t){return
new(t||e)},e.\u0275prov=he({token:e,factory:e.\u0275fac}),e}(),cu=new
Ue("LocaleId"),hu=new Ue("DefaultCurrencyCode"),fu=function
e(t,n){_classCallCheck(this,e),this.ngModuleFactory=t,this.componentFactories=n},du=function(e){return
new Ys(e)},vu=du,pu=function(e){return
Promise.resolve(du(e))},yu=function(e){var
t=du(e),n=Vn(Ct(e).declarations).reduce((function(e,t){var n=_t(t);return
n&&e.push(new Bs(n)),e}),[]);return new fu(t,n)},mu=yu,gu=function(e){return
Promise.resolve(yu(e))},_u=function(){var e=function(){function
e(){_classCallCheck(this,e),this.compileModuleSync=vu,this.compileModuleAsync=pu,this.compileModuleAndAllComponentsSync=mu,this.compileModuleAndAllComponentsAsync=gu}return
_createClass(e,[{key:"clearCache",value:function(){}},{key:"clearCacheFor",value:function(e){}},{key:"getModuleId",value:function(e){}}]),e}();return
e.\u0275fac=function(t){return
new(t||e)},e.\u0275prov=he({token:e,factory:e.\u0275fac}),e}(),ku=new
Ue("compilerOptions"),Cu=Promise.resolve(0);function wu(e){"undefined"==typeof
Zone?Cu.then((function(){e&&e.apply(null,null)})):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}var
bu=function(){function e(t){var n,r,i=t.enableLongStackTrace,a=void
0!==i&&i,o=t.shouldCoalesceEventChangeDetection,s=void
0!==o&&o;if(_classCallCheck(this,e),this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new
eu(!1),this.onMicrotaskEmpty=new eu(!1),this.onStable=new
eu(!1),this.onError=new eu(!1),"undefined"==typeof Zone)throw new Error("In
this configuration Angular requires
Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.wtfZoneSpec&&(this._inner=this._inner.fork(Zone.wtfZoneSpec)),Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new
Zone.TaskTrackingZoneSpec)),a&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=s,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){var
e=Pe.requestAnimationFrame,t=Pe.cancelAnimationFrame;if("undefined"!=typeof
Zone&&e&&t){var n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);var
r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,r=!!(n=this).shouldCoalesceEventChangeDetection&&n.nativeRequestAnimationFrame&&function(){!function(e){-1===e.lastRequestAnimationFrameId&&(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Pe,(function(){e.lastRequestAnimationFrameId=-1,xu(e),Tu(e)})),xu(e))}(n)},n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:r},onInvokeTask:function(e,t,i,a,o,s){try{return
Au(n),e.invokeTask(i,a,o,s)}finally{r&&"eventTask"===a.type&&r(),Ou(n)}},onInvoke:function(e,t,r,i,a,o,s){try{return
Au(n),e.invoke(r,i,a,o,s)}finally{Ou(n)}},onHasTask:function(e,t,r,i){e.hasTask(r,i),t===r&&("microTask"==i.change?(n._hasPendingMicrotasks=i.microTask,xu(n),Tu(n)):"macroTask"==i.change&&(n.hasPendingMacrotasks=i.macroTask))},onHandleError:function(e,t,r,i){return
e.handleError(r,i),n.runOutsideAngular((function(){return
n.onError.emit(i)})),!1}})}return
_createClass(e,[{key:"run",value:function(e,t,n){return
this._inner.run(e,t,n)}},{key:"runTask",value:function(e,t,n,r){var
i=this._inner,a=i.scheduleEventTask("NgZoneEvent: "+r,e,Eu,Su,Su);try{return
i.runTask(a,t,n)}finally{i.cancelTask(a)}}},{key:"runGuarded",value:function(e,t,n){return
this._inner.runGuarded(e,t,n)}},{key:"runOutsideAngular",value:function(e){return
this._outer.run(e)}}],[{key:"isInAngularZone",value:function(){return!0===Zone.current.get("isAngularZone")}},{key:"assertInAngularZone",value:function(){if(!e.isInAngularZone())throw
new Error("Expected to be in Angular Zone, but it is
not!")}},{key:"assertNotInAngularZone",value:function(){if(e.isInAngularZone())throw
new Error("Expected to not be in Angular Zone, but it is!")}}]),e}();function
Su(){}var Eu={};function
Tu(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular((function(){return
e.onStable.emit(null)}))}finally{e.isStable=!0}}}function
xu(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId)}function
Au(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function
Ou(e){e._nesting--,Tu(e)}var Ru,Iu=function(){function
e(){_classCallCheck(this,e),this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new
eu,this.onMicrotaskEmpty=new eu,this.onStable=new eu,this.onError=new
eu}return _createClass(e,[{key:"run",value:function(e,t,n){return
e.apply(t,n)}},{key:"runGuarded",value:function(e,t,n){return
e.apply(t,n)}},{key:"runOutsideAngular",value:function(e){return
e()}},{key:"runTask",value:function(e,t,n,r){return
e.apply(t,n)}}]),e}(),Pu=function(){var e=function(){function e(t){var
n=this;_classCallCheck(this,e),this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run((function(){n.taskTrackingZone="undefined"==typeof
Zone?null:Zone.current.get("TaskTrackingZone")}))}return
_createClass(e,[{key:"_watchAngularEvents",value:function(){var
e=this;this._ngZone.onUnstable.subscribe({next:function(){e._didWork=!0,e._isZoneStable=!1}}),this._ngZone.runOutsideAngular((function(){e._ngZone.onStable.subscribe({next:function(){bu.assertNotInAngularZone(),wu((function(){e._isZoneStable=!0,e._runCallbacksIfReady()}))}})}))}},{key:"increasePendingRequestCount",value:function(){return
this._pendingCount+=1,this._didWork=!0,this._pendingCount}},{key:"decreasePendingRequestCount",value:function(){if(this._pendingCount-=1,this._pendingCount<0)throw
new Error("pending async requests below zero");return
this._runCallbacksIfReady(),this._pendingCount}},{key:"isStable",value:function(){return
this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}},{key:"_runCallbacksIfReady",value:function(){var
e=this;if(this.isStable())wu((function(){for(;0!==e._callbacks.length;){var
t=e._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(e._didWork)}e._didWork=!1}));else{var
t=this.getPendingTasks();this._callbacks=this._callbacks.filter((function(e){return!e.updateCb||!e.updateCb(t)||(clearTimeout(e.timeoutId),!1)})),this._didWork=!0}}},{key:"getPendingTasks",value:function(){return
this.taskTrackingZone?this.taskTrackingZone.macroTasks.map((function(e){return{source:e.source,creationLocation:e.creationLocation,data:e.data}})):[]}},{key:"addCallback",value:function(e,t,n){var
r=this,i=-1;t&&t>0&&(i=setTimeout((function(){r._callbacks=r._callbacks.filter((function(e){return
e.timeoutId!==i})),e(r._didWork,r.getPendingTasks())}),t)),this._callbacks.push({doneCb:e,timeoutId:i,updateCb:n})}},{key:"whenStable",value:function(e,t,n){if(n&&!this.taskTrackingZone)throw
new Error('Task tracking zone is required when passing an update callback to
whenStable(). Is "zone.js/dist/task-tracking.js"
loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}},{key:"getPendingRequestCount",value:function(){return
this._pendingCount}},{key:"findProviders",value:function(e,t,n){return[]}}]),e}();return
e.\u0275fac=function(t){return
new(t||e)(Ke(bu))},e.\u0275prov=he({token:e,factory:e.\u0275fac}),e}(),Nu=function(){var
e=function(){function e(){_classCallCheck(this,e),this._applications=new
Map,Du.addToWindow(this)}return
_createClass(e,[{key:"registerApplication",value:function(e,t){this._applications.set(e,t)}},{key:"unregisterApplication",value:function(e){this._applications.delete(e)}},{key:"unregisterAllApplications",value:function(){this._applications.clear()}},{key:"getTestability",value:function(e){return
this._applications.get(e)||null}},{key:"getAllTestabilities",value:function(){return
Array.from(this._applications.values())}},{key:"getAllRootElements",value:function(){return
Array.from(this._applications.keys())}},{key:"findTestabilityInTree",value:function(e){var
t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return
Du.findTestabilityInTree(this,e,t)}}]),e}();return
e.\u0275fac=function(t){return
new(t||e)},e.\u0275prov=he({token:e,factory:e.\u0275fac}),e}(),Du=new(function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"addToWindow",value:function(e){}},{key:"findTestabilityInTree",value:function(e,t,n){return
null}}]),e}()),Vu=function(e,t,n){var r=e.get(ku,[]).concat(t),i=new
Ys(n);if(0===Wa.size)return Promise.resolve(i);var
a,o,s=(a=r.map((function(e){return
e.providers})),o=[],a.forEach((function(e){return
e&&o.push.apply(o,_toConsumableArray(e))})),o);if(0===s.length)return
Promise.resolve(i);var u=function(){var
e=Pe.ng;if(!e||!e.\u0275compilerFacade)throw new Error("Angular JIT
compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is
discouraged for production use-cases! Consider AOT mode instead.\n  - Did you
bootstrap using '@angular/platform-browser-dynamic' or
'@angular/platform-server'?\n  - Alternatively provide the compiler with
'import \"@angular/compiler\";' before bootstrapping.");return
e.\u0275compilerFacade}(),l=Ba.create({providers:s}).get(u.ResourceLoader);return
function(e){var t=[],n=new Map;function r(e){var t=n.get(e);if(!t){var
r=function(e){return
Promise.resolve(l.get(e))}(e);n.set(e,t=r.then(Qa))}return t}return
Wa.forEach((function(e,n){var
i=[];e.templateUrl&&i.push(r(e.templateUrl).then((function(t){e.template=t})));var
a=e.styleUrls,o=e.styles||(e.styles=[]),s=e.styles.length;a&&a.forEach((function(t,n){o.push(""),i.push(r(t).then((function(r){o[s+n]=r,a.splice(a.indexOf(t),1),0==a.length&&(e.styleUrls=void
0)})))}));var u=Promise.all(i).then((function(){return
function(e){Ga.delete(e)}(n)}));t.push(u)})),Wa=new
Map,Promise.all(t).then((function(){}))}().then((function(){return
i}))},ju=new Ue("AllowMultipleToken"),Fu=function
e(t,n){_classCallCheck(this,e),this.name=t,this.token=n};function Mu(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r="Platform:
"+t,i=new Ue(r);return function(){var t=arguments.length>0&&void
0!==arguments[0]?arguments[0]:[],a=Lu();if(!a||a.injector.get(ju,!1))if(e)e(n.concat(t).concat({provide:i,useValue:!0}));else{var
o=n.concat(t).concat({provide:i,useValue:!0},{provide:Oa,useValue:"platform"});!function(e){if(Ru&&!Ru.destroyed&&!Ru.injector.get(ju,!1))throw
new Error("There can be only one platform. Destroy the previous one to create
a new one.");Ru=e.get(Uu);var
t=e.get(ou,null);t&&t.forEach((function(e){return
e()}))}(Ba.create({providers:o,name:r}))}return function(e){var
t=Lu();if(!t)throw new Error("No platform
exists!");if(!t.injector.get(e,null))throw new Error("A platform with a
different configuration has been created. Please destroy it first.");return
t}(i)}}function Lu(){return Ru&&!Ru.destroyed?Ru:null}var Uu=function(){var
e=function(){function
e(t){_classCallCheck(this,e),this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}return
_createClass(e,[{key:"bootstrapModuleFactory",value:function(e,t){var
n,r,i=this,a=(n=t?t.ngZone:void
0,r=t&&t.ngZoneEventCoalescing||!1,"noop"===n?new Iu:("zone.js"===n?void
0:n)||new
bu({enableLongStackTrace:dr(),shouldCoalesceEventChangeDetection:r})),o=[{provide:bu,useValue:a}];return
a.run((function(){var
t=Ba.create({providers:o,parent:i.injector,name:e.moduleType.name}),n=e.create(t),r=n.injector.get(tr,null);if(!r)throw
new Error("No ErrorHandler. Is platform module (BrowserModule)
included?");return n.onDestroy((function(){return
qu(i._modules,n)})),a.runOutsideAngular((function(){return
a.onError.subscribe({next:function(e){r.handleError(e)}})})),function(e,t,r){try{var
a=((o=n.injector.get(nu)).runInitializers(),o.donePromise.then((function(){return
$s(n.injector.get(cu,"en-US")||"en-US"),i._moduleDoBootstrap(n),n})));return
ho(a)?a.catch((function(n){throw t.runOutsideAngular((function(){return
e.handleError(n)})),n})):a}catch(s){throw
t.runOutsideAngular((function(){return e.handleError(s)})),s}var
o}(r,a)}))}},{key:"bootstrapModule",value:function(e){var
t=this,n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:[],r=Hu({},n);return
Vu(this.injector,r,e).then((function(e){return
t.bootstrapModuleFactory(e,r)}))}},{key:"_moduleDoBootstrap",value:function(e){var
t=e.injector.get(Bu);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach((function(e){return
t.bootstrap(e)}));else{if(!e.instance.ngDoBootstrap)throw new Error("The
module ".concat(Ce(e.instance.constructor),' was bootstrapped, but it does not
declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please
define one of
these.'));e.instance.ngDoBootstrap(t)}this._modules.push(e)}},{key:"onDestroy",value:function(e){this._destroyListeners.push(e)}},{key:"destroy",value:function(){if(this._destroyed)throw
new Error("The platform has already been
destroyed!");this._modules.slice().forEach((function(e){return
e.destroy()})),this._destroyListeners.forEach((function(e){return
e()})),this._destroyed=!0}},{key:"injector",get:function(){return
this._injector}},{key:"destroyed",get:function(){return
this._destroyed}}]),e}();return e.\u0275fac=function(t){return
new(t||e)(Ke(Ba))},e.\u0275prov=he({token:e,factory:e.\u0275fac}),e}();function
Hu(e,t){return
Array.isArray(t)?t.reduce(Hu,e):Object.assign(Object.assign({},e),t)}var
zu,Bu=((zu=function(){function e(t,n,r,i,a,o){var
s=this;_classCallCheck(this,e),this._zone=t,this._console=n,this._injector=r,this._exceptionHandler=i,this._componentFactoryResolver=a,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=dr(),this._zone.onMicrotaskEmpty.subscribe({next:function(){s._zone.run((function(){s.tick()}))}});var
u=new
w((function(e){s._stable=s._zone.isStable&&!s._zone.hasPendingMacrotasks&&!s._zone.hasPendingMicrotasks,s._zone.runOutsideAngular((function(){e.next(s._stable),e.complete()}))})),l=new
w((function(e){var
t;s._zone.runOutsideAngular((function(){t=s._zone.onStable.subscribe((function(){bu.assertNotInAngularZone(),wu((function(){s._stable||s._zone.hasPendingMacrotasks||s._zone.hasPendingMicrotasks||(s._stable=!0,e.next(!0))}))}))}));var
n=s._zone.onUnstable.subscribe((function(){bu.assertInAngularZone(),s._stable&&(s._stable=!1,s._zone.runOutsideAngular((function(){e.next(!1)})))}));return
function(){t.unsubscribe(),n.unsubscribe()}}));this.isStable=function(){for(var
e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var
r=Number.POSITIVE_INFINITY,i=null,a=t[t.length-1];return
R(a)?(i=t.pop(),t.length>1&&"number"==typeof
t[t.length-1]&&(r=t.pop())):"number"==typeof
a&&(r=t.pop()),null===i&&1===t.length&&t[0]instanceof
w?t[0]:Q(r)(Z(t,i))}(u,l.pipe((function(e){return K()((t=te,function(e){var
n;n="function"==typeof t?t:function(){return t};var
r=Object.create(e,Y);return r.source=e,r.subjectFactory=n,r})(e));var
t})))}return _createClass(e,[{key:"bootstrap",value:function(e,t){var
n,r=this;if(!this._initStatus.done)throw new Error("Cannot bootstrap as there
are still asynchronous initializers running. Bootstrap components in the
`ngDoBootstrap` method of the root module.");n=e instanceof
ls?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);var
i=n.isBoundToModule?void
0:this._injector.get(Ye),a=n.create(Ba.NULL,[],t||n.selector,i);a.onDestroy((function(){r._unloadComponent(a)}));var
o=a.injector.get(Pu,null);return
o&&a.injector.get(Nu).registerApplication(a.location.nativeElement,o),this._loadComponent(a),dr()&&this._console.log("Angular
is running in the development mode. Call enableProdMode() to enable the
production mode."),a}},{key:"tick",value:function(){var
e=this;if(this._runningTick)throw new Error("ApplicationRef.tick is called
recursively");try{this._runningTick=!0;var
t,n=_createForOfIteratorHelper(this._views);try{for(n.s();!(t=n.n()).done;)t.value.detectChanges()}catch(a){n.e(a)}finally{n.f()}if(this._enforceNoNewChanges){var
r,i=_createForOfIteratorHelper(this._views);try{for(i.s();!(r=i.n()).done;)r.value.checkNoChanges()}catch(a){i.e(a)}finally{i.f()}}}catch(o){this._zone.runOutsideAngular((function(){return
e._exceptionHandler.handleError(o)}))}finally{this._runningTick=!1}}},{key:"attachView",value:function(e){var
t=e;this._views.push(t),t.attachToAppRef(this)}},{key:"detachView",value:function(e){var
t=e;qu(this._views,t),t.detachFromAppRef()}},{key:"_loadComponent",value:function(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(uu,[]).concat(this._bootstrapListeners).forEach((function(t){return
t(e)}))}},{key:"_unloadComponent",value:function(e){this.detachView(e.hostView),qu(this.components,e)}},{key:"ngOnDestroy",value:function(){this._views.slice().forEach((function(e){return
e.destroy()}))}},{key:"viewCount",get:function(){return
this._views.length}}]),e}()).\u0275fac=function(e){return
new(e||zu)(Ke(bu),Ke(lu),Ke(Ba),Ke(tr),Ke(hs),Ke(nu))},zu.\u0275prov=he({token:zu,factory:zu.\u0275fac}),zu);function
qu(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}var Wu=function
e(){_classCallCheck(this,e)},Gu=function
e(){_classCallCheck(this,e)},Qu={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"},Zu=function(){var
e=function(){function
e(t,n){_classCallCheck(this,e),this._compiler=t,this._config=n||Qu}return
_createClass(e,[{key:"load",value:function(e){return
this.loadAndCompile(e)}},{key:"loadAndCompile",value:function(e){var
t=this,r=_slicedToArray(e.split("#"),2),i=r[0],a=r[1];return void
0===a&&(a="default"),n("zn8P")(i).then((function(e){return
e[a]})).then((function(e){return Ku(e,i,a)})).then((function(e){return
t._compiler.compileModuleAsync(e)}))}},{key:"loadFactory",value:function(e){var
t=_slicedToArray(e.split("#"),2),r=t[0],i=t[1],a="NgFactory";return void
0===i&&(i="default",a=""),n("zn8P")(this._config.factoryPathPrefix+r+this._config.factoryPathSuffix).then((function(e){return
e[i+a]})).then((function(e){return Ku(e,r,i)}))}}]),e}();return
e.\u0275fac=function(t){return
new(t||e)(Ke(_u),Ke(Gu,8))},e.\u0275prov=he({token:e,factory:e.\u0275fac}),e}();function
Ku(e,t,n){if(!e)throw new Error("Cannot find '".concat(n,"' in
'").concat(t,"'"));return e}var
$u=Mu(null,"core",[{provide:su,useValue:"unknown"},{provide:Uu,deps:[Ba]},{provide:Nu,deps:[]},{provide:lu,deps:[]}]),Ju=[{provide:Bu,useClass:Bu,deps:[bu,lu,Ba,tr,hs,nu]},{provide:zs,deps:[bu],useFactory:function(e){var
t=[];return
e.onStable.subscribe((function(){for(;t.length;)t.pop()()})),function(e){t.push(e)}}},{provide:nu,useClass:nu,deps:[[new
ae,tu]]},{provide:_u,useClass:_u,deps:[]},iu,{provide:Rs,useFactory:function(){return
Ns},deps:[]},{provide:Is,useFactory:function(){return
Ds},deps:[]},{provide:cu,useFactory:function(e){return
$s(e=e||"undefined"!=typeof
$localize&&$localize.locale||"en-US"),e},deps:[[new ie(cu),new ae,new
se]]},{provide:hu,useValue:"USD"}],Xu=function(){var e=function
e(t){_classCallCheck(this,e)};return
e.\u0275mod=yt({type:e}),e.\u0275inj=fe({factory:function(t){return
new(t||e)(Ke(Bu))},providers:Ju}),e}(),Yu=null;function el(){return Yu}var
tl,nl=new Ue("DocumentToken"),rl=((tl=function
e(){_classCallCheck(this,e)}).\u0275fac=function(e){return
new(e||tl)},tl.\u0275prov=he({factory:il,token:tl,providedIn:"platform"}),tl);function
il(){return Ke(sl)}var al,ol=new Ue("Location
Initialized"),sl=((al=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){var r;return
_classCallCheck(this,n),(r=t.call(this))._doc=e,r._init(),r}return
_createClass(n,[{key:"_init",value:function(){this.location=el().getLocation(),this._history=el().getHistory()}},{key:"getBaseHrefFromDOM",value:function(){return
el().getBaseHref(this._doc)}},{key:"onPopState",value:function(e){el().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",e,!1)}},{key:"onHashChange",value:function(e){el().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",e,!1)}},{key:"pushState",value:function(e,t,n){ul()?this._history.pushState(e,t,n):this.location.hash=n}},{key:"replaceState",value:function(e,t,n){ul()?this._history.replaceState(e,t,n):this.location.hash=n}},{key:"forward",value:function(){this._history.forward()}},{key:"back",value:function(){this._history.back()}},{key:"getState",value:function(){return
this._history.state}},{key:"href",get:function(){return
this.location.href}},{key:"protocol",get:function(){return
this.location.protocol}},{key:"hostname",get:function(){return
this.location.hostname}},{key:"port",get:function(){return
this.location.port}},{key:"pathname",get:function(){return
this.location.pathname},set:function(e){this.location.pathname=e}},{key:"search",get:function(){return
this.location.search}},{key:"hash",get:function(){return
this.location.hash}}]),n}(rl)).\u0275fac=function(e){return
new(e||al)(Ke(nl))},al.\u0275prov=he({factory:ll,token:al,providedIn:"platform"}),al);function
ul(){return!!window.history.pushState}function ll(){return new
sl(Ke(nl))}function cl(e,t){if(0==e.length)return t;if(0==t.length)return
e;var n=0;return
e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function
hl(e){var t=e.match(/#|\?|$/),n=t&&t.index||e.length;return
e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function fl(e){return
e&&"?"!==e[0]?"?"+e:e}var dl,vl=((dl=function
e(){_classCallCheck(this,e)}).\u0275fac=function(e){return
new(e||dl)},dl.\u0275prov=he({factory:pl,token:dl,providedIn:"root"}),dl);function
pl(e){var t=Ke(nl).location;return new kl(Ke(rl),t&&t.origin||"")}var
yl,ml,gl,_l=new Ue("appBaseHref"),kl=((gl=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var
i;if(_classCallCheck(this,n),(i=t.call(this))._platformLocation=e,null==r&&(r=i._platformLocation.getBaseHrefFromDOM()),null==r)throw
new Error("No base href set. Please provide a value for the APP_BASE_HREF
token or add a base element to the document.");return
i._baseHref=r,_possibleConstructorReturn(i)}return
_createClass(n,[{key:"onPopState",value:function(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}},{key:"getBaseHref",value:function(){return
this._baseHref}},{key:"prepareExternalUrl",value:function(e){return
cl(this._baseHref,e)}},{key:"path",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]&&arguments[0],t=this._platformLocation.pathname+fl(this._platformLocation.search),n=this._platformLocation.hash;return
n&&e?"".concat(t).concat(n):t}},{key:"pushState",value:function(e,t,n,r){var
i=this.prepareExternalUrl(n+fl(r));this._platformLocation.pushState(e,t,i)}},{key:"replaceState",value:function(e,t,n,r){var
i=this.prepareExternalUrl(n+fl(r));this._platformLocation.replaceState(e,t,i)}},{key:"forward",value:function(){this._platformLocation.forward()}},{key:"back",value:function(){this._platformLocation.back()}}]),n}(vl)).\u0275fac=function(e){return
new(e||gl)(Ke(rl),Ke(_l,8))},gl.\u0275prov=he({token:gl,factory:gl.\u0275fac}),gl),Cl=((ml=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this))._platformLocation=e,i._baseHref="",null!=r&&(i._baseHref=r),i}return
_createClass(n,[{key:"onPopState",value:function(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}},{key:"getBaseHref",value:function(){return
this._baseHref}},{key:"path",value:function(){arguments.length>0&&void
0!==arguments[0]&&arguments[0];var e=this._platformLocation.hash;return
null==e&&(e="#"),e.length>0?e.substring(1):e}},{key:"prepareExternalUrl",value:function(e){var
t=cl(this._baseHref,e);return
t.length>0?"#"+t:t}},{key:"pushState",value:function(e,t,n,r){var
i=this.prepareExternalUrl(n+fl(r));0==i.length&&(i=this._platformLocation.pathname),this._platformLocation.pushState(e,t,i)}},{key:"replaceState",value:function(e,t,n,r){var
i=this.prepareExternalUrl(n+fl(r));0==i.length&&(i=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,i)}},{key:"forward",value:function(){this._platformLocation.forward()}},{key:"back",value:function(){this._platformLocation.back()}}]),n}(vl)).\u0275fac=function(e){return
new(e||ml)(Ke(rl),Ke(_l,8))},ml.\u0275prov=he({token:ml,factory:ml.\u0275fac}),ml),wl=((yl=function(){function
e(t,n){var r=this;_classCallCheck(this,e),this._subject=new
eu,this._urlChangeListeners=[],this._platformStrategy=t;var
i=this._platformStrategy.getBaseHref();this._platformLocation=n,this._baseHref=hl(Sl(i)),this._platformStrategy.onPopState((function(e){r._subject.emit({url:r.path(!0),pop:!0,state:e.state,type:e.type})}))}return
_createClass(e,[{key:"path",value:function(){var e=arguments.length>0&&void
0!==arguments[0]&&arguments[0];return
this.normalize(this._platformStrategy.path(e))}},{key:"getState",value:function(){return
this._platformLocation.getState()}},{key:"isCurrentPathEqualTo",value:function(e){var
t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return
this.path()==this.normalize(e+fl(t))}},{key:"normalize",value:function(t){return
e.stripTrailingSlash(function(e,t){return
e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,Sl(t)))}},{key:"prepareExternalUrl",value:function(e){return
e&&"/"!==e[0]&&(e="/"+e),this._platformStrategy.prepareExternalUrl(e)}},{key:"go",value:function(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:null;this._platformStrategy.pushState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+fl(t)),n)}},{key:"replaceState",value:function(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:null;this._platformStrategy.replaceState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+fl(t)),n)}},{key:"forward",value:function(){this._platformStrategy.forward()}},{key:"back",value:function(){this._platformStrategy.back()}},{key:"onUrlChange",value:function(e){var
t=this;this._urlChangeListeners.push(e),this.subscribe((function(e){t._notifyUrlChangeListeners(e.url,e.state)}))}},{key:"_notifyUrlChangeListeners",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void
0;this._urlChangeListeners.forEach((function(n){return
n(e,t)}))}},{key:"subscribe",value:function(e,t,n){return
this._subject.subscribe({next:e,error:t,complete:n})}}]),e}()).\u0275fac=function(e){return
new(e||yl)(Ke(vl),Ke(rl))},yl.normalizeQueryParams=fl,yl.joinWithSlash=cl,yl.stripTrailingSlash=hl,yl.\u0275prov=he({factory:bl,token:yl,providedIn:"root"}),yl);function
bl(){return new wl(Ke(vl),Ke(rl))}function Sl(e){return
e.replace(/\/index.html$/,"")}var El,Tl=function(){var
e={Zero:0,One:1,Two:2,Few:3,Many:4,Other:5};return
e[e.Zero]="Zero",e[e.One]="One",e[e.Two]="Two",e[e.Few]="Few",e[e.Many]="Many",e[e.Other]="Other",e}(),xl=function
e(){_classCallCheck(this,e)},Al=((El=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){var r;return
_classCallCheck(this,n),(r=t.call(this)).locale=e,r}return
_createClass(n,[{key:"getPluralCategory",value:function(e,t){switch(function(e){return
function(e){var t=function(e){return
e.toLowerCase().replace(/_/g,"-")}(e),n=Zs(t);if(n)return n;var
r=t.split("-")[0];if(n=Zs(r))return n;if("en"===r)return Gs;throw new
Error('Missing locale data for the locale
"'.concat(e,'".'))}(e)[Ks.PluralCase]}(t||this.locale)(e)){case
Tl.Zero:return"zero";case Tl.One:return"one";case Tl.Two:return"two";case
Tl.Few:return"few";case
Tl.Many:return"many";default:return"other"}}}]),n}(xl)).\u0275fac=function(e){return
new(e||El)(Ke(cu))},El.\u0275prov=he({token:El,factory:El.\u0275fac}),El);function
Ol(e,t){t=encodeURIComponent(t);var
n,r=_createForOfIteratorHelper(e.split(";"));try{for(r.s();!(n=r.n()).done;){var
i=n.value,a=i.indexOf("="),o=_slicedToArray(-1==a?[i,""]:[i.slice(0,a),i.slice(a+1)],2),s=o[0],u=o[1];if(s.trim()===t)return
decodeURIComponent(u)}}catch(l){r.e(l)}finally{r.f()}return null}var
Rl,Il=((Rl=function(){function
e(t,n){_classCallCheck(this,e),this._viewContainer=t,this._context=new
Pl,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}return
_createClass(e,[{key:"_updateView",value:function(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}},{key:"ngIf",set:function(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}},{key:"ngIfThen",set:function(e){Nl("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}},{key:"ngIfElse",set:function(e){Nl("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}}],[{key:"ngTemplateContextGuard",value:function(e,t){return!0}}]),e}()).\u0275fac=function(e){return
new(e||Rl)(io(Fs),io(Vs))},Rl.\u0275dir=gt({type:Rl,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),Rl),Pl=function
e(){_classCallCheck(this,e),this.$implicit=null,this.ngIf=null};function
Nl(e,t){if(t&&!t.createEmbeddedView)throw new Error("".concat(e," must be a
TemplateRef, but received '").concat(Ce(t),"'."))}var
Dl,Vl,jl,Fl,Ml,Ll,Ul=((Vl=function
e(){_classCallCheck(this,e)}).\u0275mod=yt({type:Vl}),Vl.\u0275inj=fe({factory:function(e){return
new(e||Vl)},providers:[{provide:xl,useClass:Al}]}),Vl),Hl=((Dl=function
e(){_classCallCheck(this,e)}).\u0275prov=he({token:Dl,providedIn:"root",factory:function(){return
new zl(Ke(nl),window,Ke(tr))}}),Dl),zl=function(){function
e(t,n,r){_classCallCheck(this,e),this.document=t,this.window=n,this.errorHandler=r,this.offset=function(){return[0,0]}}return
_createClass(e,[{key:"setOffset",value:function(e){this.offset=Array.isArray(e)?function(){return
e}:e}},{key:"getScrollPosition",value:function(){return
this.supportScrollRestoration()?[this.window.scrollX,this.window.scrollY]:[0,0]}},{key:"scrollToPosition",value:function(e){this.supportScrollRestoration()&&this.window.scrollTo(e[0],e[1])}},{key:"scrollToAnchor",value:function(e){if(this.supportScrollRestoration()){e=this.window.CSS&&this.window.CSS.escape?this.window.CSS.escape(e):e.replace(/(\"|\'\
|:|\.|\[|\]|,|=)/g,"\\$1");try{var
t=this.document.querySelector("#"+e);if(t)return void
this.scrollToElement(t);var
n=this.document.querySelector("[name='".concat(e,"']"));if(n)return void
this.scrollToElement(n)}catch(r){this.errorHandler.handleError(r)}}}},{key:"setHistoryScrollRestoration",value:function(e){if(this.supportScrollRestoration()){var
t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=e)}}},{key:"scrollToElement",value:function(e){var
t=e.getBoundingClientRect(),n=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(n-i[0],r-i[1])}},{key:"supportScrollRestoration",value:function(){try{return!!this.window&&!!this.window.scrollTo}catch(e){return!1}}}]),e}(),Bl=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"getProperty",value:function(e,t){return
e[t]}},{key:"log",value:function(e){window.console&&window.console.log&&window.console.log(e)}},{key:"logGroup",value:function(e){window.console&&window.console.group&&window.console.group(e)}},{key:"logGroupEnd",value:function(){window.console&&window.console.groupEnd&&window.console.groupEnd()}},{key:"onAndCancel",value:function(e,t,n){return
e.addEventListener(t,n,!1),function(){e.removeEventListener(t,n,!1)}}},{key:"dispatchEvent",value:function(e,t){e.dispatchEvent(t)}},{key:"remove",value:function(e){return
e.parentNode&&e.parentNode.removeChild(e),e}},{key:"getValue",value:function(e){return
e.value}},{key:"createElement",value:function(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}},{key:"createHtmlDocument",value:function(){return
document.implementation.createHTMLDocument("fakeTitle")}},{key:"getDefaultDocument",value:function(){return
document}},{key:"isElementNode",value:function(e){return
e.nodeType===Node.ELEMENT_NODE}},{key:"isShadowRoot",value:function(e){return
e instanceof
DocumentFragment}},{key:"getGlobalEventTarget",value:function(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}},{key:"getHistory",value:function(){return
window.history}},{key:"getLocation",value:function(){return
window.location}},{key:"getBaseHref",value:function(e){var
t,n=ql||(ql=document.querySelector("base"))?ql.getAttribute("href"):null;return
null==n?null:(t=n,jl||(jl=document.createElement("a")),jl.setAttribute("href",t),"/"===jl.pathname.charAt(0)?jl.pathname:"/"+jl.pathname)}},{key:"resetBaseElement",value:function(){ql=null}},{key:"getUserAgent",value:function(){return
window.navigator.userAgent}},{key:"performanceNow",value:function(){return
window.performance&&window.performance.now?window.performance.now():(new
Date).getTime()}},{key:"supportsCookies",value:function(){return!0}},{key:"getCookie",value:function(e){return
Ol(document.cookie,e)}}],[{key:"makeCurrent",value:function(){var e;e=new
n,Yu||(Yu=e)}}]),n}(function(e){_inherits(n,e);var t=_createSuper(n);function
n(){return _classCallCheck(this,n),t.call(this)}return
_createClass(n,[{key:"supportsDOMEvents",value:function(){return!0}}]),n}(function(){return
function e(){_classCallCheck(this,e)}}())),ql=null,Wl=new
Ue("TRANSITION_ID"),Gl=[{provide:tu,useFactory:function(e,t,n){return
function(){n.get(nu).donePromise.then((function(){var
n=el();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter((function(t){return
t.getAttribute("ng-transition")===e})).forEach((function(e){return
n.remove(e)}))}))}},deps:[Wl,nl,Ba],multi:!0}],Ql=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"addToWindow",value:function(e){Pe.getAngularTestability=function(t){var
n=!(arguments.length>1&&void
0!==arguments[1])||arguments[1],r=e.findTestabilityInTree(t,n);if(null==r)throw
new Error("Could not find testability for element.");return
r},Pe.getAllAngularTestabilities=function(){return
e.getAllTestabilities()},Pe.getAllAngularRootElements=function(){return
e.getAllRootElements()},Pe.frameworkStabilizers||(Pe.frameworkStabilizers=[]),Pe.frameworkStabilizers.push((function(e){var
t=Pe.getAllAngularTestabilities(),n=t.length,r=!1,i=function(t){r=r||t,0==--n&&e(r)};t.forEach((function(e){e.whenStable(i)}))}))}},{key:"findTestabilityInTree",value:function(e,t,n){if(null==t)return
null;var r=e.getTestability(t);return
null!=r?r:n?el().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}],[{key:"init",value:function(){var
t;t=new e,Du=t}}]),e}(),Zl=new
Ue("EventManagerPlugins"),Kl=((Fl=function(){function e(t,n){var
r=this;_classCallCheck(this,e),this._zone=n,this._eventNameToPlugin=new
Map,t.forEach((function(e){return
e.manager=r})),this._plugins=t.slice().reverse()}return
_createClass(e,[{key:"addEventListener",value:function(e,t,n){return
this._findPluginFor(t).addEventListener(e,t,n)}},{key:"addGlobalEventListener",value:function(e,t,n){return
this._findPluginFor(t).addGlobalEventListener(e,t,n)}},{key:"getZone",value:function(){return
this._zone}},{key:"_findPluginFor",value:function(e){var
t=this._eventNameToPlugin.get(e);if(t)return t;for(var
n=this._plugins,r=0;r<n.length;r++){var i=n[r];if(i.supports(e))return
this._eventNameToPlugin.set(e,i),i}throw new Error("No event manager plugin
found for event "+e)}}]),e}()).\u0275fac=function(e){return
new(e||Fl)(Ke(Zl),Ke(bu))},Fl.\u0275prov=he({token:Fl,factory:Fl.\u0275fac}),Fl),$l=function(){function
e(t){_classCallCheck(this,e),this._doc=t}return
_createClass(e,[{key:"addGlobalEventListener",value:function(e,t,n){var
r=el().getGlobalEventTarget(this._doc,e);if(!r)throw new Error("Unsupported
event target ".concat(r," for event ").concat(t));return
this.addEventListener(r,t,n)}}]),e}(),Jl=((Ll=function(){function
e(){_classCallCheck(this,e),this._stylesSet=new Set}return
_createClass(e,[{key:"addStyles",value:function(e){var t=this,n=new
Set;e.forEach((function(e){t._stylesSet.has(e)||(t._stylesSet.add(e),n.add(e))})),this.onStylesAdded(n)}},{key:"onStylesAdded",value:function(e){}},{key:"getAllStyles",value:function(){return
Array.from(this._stylesSet)}}]),e}()).\u0275fac=function(e){return
new(e||Ll)},Ll.\u0275prov=he({token:Ll,factory:Ll.\u0275fac}),Ll),Xl=((Ml=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){var r;return
_classCallCheck(this,n),(r=t.call(this))._doc=e,r._hostNodes=new
Set,r._styleNodes=new Set,r._hostNodes.add(e.head),r}return
_createClass(n,[{key:"_addStylesToHost",value:function(e,t){var
n=this;e.forEach((function(e){var
r=n._doc.createElement("style");r.textContent=e,n._styleNodes.add(t.appendChild(r))}))}},{key:"addHost",value:function(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)}},{key:"removeHost",value:function(e){this._hostNodes.delete(e)}},{key:"onStylesAdded",value:function(e){var
t=this;this._hostNodes.forEach((function(n){return
t._addStylesToHost(e,n)}))}},{key:"ngOnDestroy",value:function(){this._styleNodes.forEach((function(e){return
el().remove(e)}))}}]),n}(Jl)).\u0275fac=function(e){return
new(e||Ml)(Ke(nl))},Ml.\u0275prov=he({token:Ml,factory:Ml.\u0275fac}),Ml),Yl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ec=/%COMP%/g;function
tc(e,t,n){for(var r=0;r<t.length;r++){var
i=t[r];Array.isArray(i)?tc(e,i,n):(i=i.replace(ec,e),n.push(i))}return
n}function nc(e){return function(t){if("__ngUnwrap__"===t)return
e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}var
rc,ic,ac,oc,sc,uc,lc=((rc=function(){function
e(t,n,r){_classCallCheck(this,e),this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.rendererByCompId=new
Map,this.defaultRenderer=new cc(t)}return
_createClass(e,[{key:"createRenderer",value:function(e,t){if(!e||!t)return
this.defaultRenderer;switch(t.encapsulation){case ut.Emulated:var
n=this.rendererByCompId.get(t.id);return n||(n=new
hc(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n;case
ut.Native:case ut.ShadowDom:return new
fc(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){var
r=tc(t.id,t.styles,[]);this.sharedStylesHost.addStyles(r),this.rendererByCompId.set(t.id,this.defaultRenderer)}return
this.defaultRenderer}}},{key:"begin",value:function(){}},{key:"end",value:function(){}}]),e}()).\u0275fac=function(e){return
new(e||rc)(Ke(Kl),Ke(Xl),Ke(ru))},rc.\u0275prov=he({token:rc,factory:rc.\u0275fac}),rc),cc=function(){function
e(t){_classCallCheck(this,e),this.eventManager=t,this.data=Object.create(null)}return
_createClass(e,[{key:"destroy",value:function(){}},{key:"createElement",value:function(e,t){return
t?document.createElementNS(Yl[t]||t,e):document.createElement(e)}},{key:"createComment",value:function(e){return
document.createComment(e)}},{key:"createText",value:function(e){return
document.createTextNode(e)}},{key:"appendChild",value:function(e,t){e.appendChild(t)}},{key:"insertBefore",value:function(e,t,n){e&&e.insertBefore(t,n)}},{key:"removeChild",value:function(e,t){e&&e.removeChild(t)}},{key:"selectRootElement",value:function(e,t){var
n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error('The
selector "'.concat(e,'" did not match any elements'));return
t||(n.textContent=""),n}},{key:"parentNode",value:function(e){return
e.parentNode}},{key:"nextSibling",value:function(e){return
e.nextSibling}},{key:"setAttribute",value:function(e,t,n,r){if(r){t=r+":"+t;var
i=Yl[r];i?e.setAttributeNS(i,t,n):e.setAttribute(t,n)}else
e.setAttribute(t,n)}},{key:"removeAttribute",value:function(e,t,n){if(n){var
r=Yl[n];r?e.removeAttributeNS(r,t):e.removeAttribute("".concat(n,":").concat(t))}else
e.removeAttribute(t)}},{key:"addClass",value:function(e,t){e.classList.add(t)}},{key:"removeClass",value:function(e,t){e.classList.remove(t)}},{key:"setStyle",value:function(e,t,n,r){r&ps.DashCase?e.style.setProperty(t,n,r&ps.Important?"important":""):e.style[t]=n}},{key:"removeStyle",value:function(e,t,n){n&ps.DashCase?e.style.removeProperty(t):e.style[t]=""}},{key:"setProperty",value:function(e,t,n){e[t]=n}},{key:"setValue",value:function(e,t){e.nodeValue=t}},{key:"listen",value:function(e,t,n){return"string"==typeof
e?this.eventManager.addGlobalEventListener(e,t,nc(n)):this.eventManager.addEventListener(e,t,nc(n))}}]),e}(),hc=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var
o;_classCallCheck(this,n),(o=t.call(this,e)).component=i;var
s,u=tc(a+"-"+i.id,i.styles,[]);return
r.addStyles(u),o.contentAttr="_ngcontent-%COMP%".replace(ec,a+"-"+i.id),o.hostAttr=(s=a+"-"+i.id,"_nghost-%COMP%".replace(ec,s)),o}return
_createClass(n,[{key:"applyToHost",value:function(e){_get(_getPrototypeOf(n.prototype),"setAttribute",this).call(this,e,this.hostAttr,"")}},{key:"createElement",value:function(e,t){var
r=_get(_getPrototypeOf(n.prototype),"createElement",this).call(this,e,t);return
_get(_getPrototypeOf(n.prototype),"setAttribute",this).call(this,r,this.contentAttr,""),r}}]),n}(cc),fc=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var
o;_classCallCheck(this,n),(o=t.call(this,e)).sharedStylesHost=r,o.hostEl=i,o.component=a,o.shadowRoot=a.encapsulation===ut.ShadowDom?i.attachShadow({mode:"open"}):i.createShadowRoot(),o.sharedStylesHost.addHost(o.shadowRoot);for(var
s=tc(a.id,a.styles,[]),u=0;u<s.length;u++){var
l=document.createElement("style");l.textContent=s[u],o.shadowRoot.appendChild(l)}return
o}return _createClass(n,[{key:"nodeOrShadowRoot",value:function(e){return
e===this.hostEl?this.shadowRoot:e}},{key:"destroy",value:function(){this.sharedStylesHost.removeHost(this.shadowRoot)}},{key:"appendChild",value:function(e,t){return
_get(_getPrototypeOf(n.prototype),"appendChild",this).call(this,this.nodeOrShadowRoot(e),t)}},{key:"insertBefore",value:function(e,t,r){return
_get(_getPrototypeOf(n.prototype),"insertBefore",this).call(this,this.nodeOrShadowRoot(e),t,r)}},{key:"removeChild",value:function(e,t){return
_get(_getPrototypeOf(n.prototype),"removeChild",this).call(this,this.nodeOrShadowRoot(e),t)}},{key:"parentNode",value:function(e){return
this.nodeOrShadowRoot(_get(_getPrototypeOf(n.prototype),"parentNode",this).call(this,this.nodeOrShadowRoot(e)))}}]),n}(cc),dc=((ic=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){return
_classCallCheck(this,n),t.call(this,e)}return
_createClass(n,[{key:"supports",value:function(e){return!0}},{key:"addEventListener",value:function(e,t,n){var
r=this;return e.addEventListener(t,n,!1),function(){return
r.removeEventListener(e,t,n)}}},{key:"removeEventListener",value:function(e,t,n){return
e.removeEventListener(t,n)}}]),n}($l)).\u0275fac=function(e){return
new(e||ic)(Ke(nl))},ic.\u0275prov=he({token:ic,factory:ic.\u0275fac}),ic),vc=["alt","control","meta","shift"],pc={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yc={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},mc={alt:function(e){return
e.altKey},control:function(e){return e.ctrlKey},meta:function(e){return
e.metaKey},shift:function(e){return
e.shiftKey}},gc=((sc=function(e){_inherits(n,e);var t=_createSuper(n);function
n(e){return _classCallCheck(this,n),t.call(this,e)}return
_createClass(n,[{key:"supports",value:function(e){return
null!=n.parseEventName(e)}},{key:"addEventListener",value:function(e,t,r){var
i=n.parseEventName(t),a=n.eventCallback(i.fullKey,r,this.manager.getZone());return
this.manager.getZone().runOutsideAngular((function(){return
el().onAndCancel(e,i.domEventName,a)}))}}],[{key:"parseEventName",value:function(e){var
t=e.toLowerCase().split("."),r=t.shift();if(0===t.length||"keydown"!==r&&"keyup"!==r)return
null;var i=n._normalizeKey(t.pop()),a="";if(vc.forEach((function(e){var
n=t.indexOf(e);n>-1&&(t.splice(n,1),a+=e+".")})),a+=i,0!=t.length||0===i.length)return
null;var o={};return
o.domEventName=r,o.fullKey=a,o}},{key:"getEventFullKey",value:function(e){var
t="",n=function(e){var
t=e.key;if(null==t){if(null==(t=e.keyIdentifier))return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&yc.hasOwnProperty(t)&&(t=yc[t]))}return
pc[t]||t}(e);return"
"===(n=n.toLowerCase())?n="space":"."===n&&(n="dot"),vc.forEach((function(r){r!=n&&(0,mc[r])(e)&&(t+=r+".")})),t+=n}},{key:"eventCallback",value:function(e,t,r){return
function(i){n.getEventFullKey(i)===e&&r.runGuarded((function(){return
t(i)}))}}},{key:"_normalizeKey",value:function(e){switch(e){case"esc":return"escape";default:return
e}}}]),n}($l)).\u0275fac=function(e){return
new(e||sc)(Ke(nl))},sc.\u0275prov=he({token:sc,factory:sc.\u0275fac}),sc),_c=((oc=function
e(){_classCallCheck(this,e)}).\u0275fac=function(e){return
new(e||oc)},oc.\u0275prov=he({factory:function(){return
Ke(kc)},token:oc,providedIn:"root"}),oc),kc=((ac=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){var r;return
_classCallCheck(this,n),(r=t.call(this))._doc=e,r}return
_createClass(n,[{key:"sanitize",value:function(e,t){if(null==t)return
null;switch(e){case jr.NONE:return t;case jr.HTML:return
lr(t,"HTML")?ur(t):Dr(this._doc,String(t));case jr.STYLE:return
lr(t,"Style")?ur(t):function(e){if(!(e=String(e).trim()))return"";var
t=e.match(Mr);return t&&mr(t[1])===t[1]||e.match(Fr)&&function(e){for(var
t=!0,n=!0,r=0;r<e.length;r++){var
i=e.charAt(r);"'"===i&&n?t=!t:'"'===i&&t&&(n=!n)}return
t&&n}(e)?e:(dr()&&console.warn("WARNING: sanitizing unsafe style value
".concat(e," (see http://g.co/ng/security#xss).")),"unsafe")}(t);case
jr.SCRIPT:if(lr(t,"Script"))return ur(t);throw new Error("unsafe value used in
a script context");case jr.URL:return
cr(t),lr(t,"URL")?ur(t):mr(String(t));case
jr.RESOURCE_URL:if(lr(t,"ResourceURL"))return ur(t);throw new Error("unsafe
value used in a resource URL context (see
http://g.co/ng/security#xss)");default:throw new Error("Unexpected
SecurityContext ".concat(e," (see
http://g.co/ng/security#xss)"))}}},{key:"bypassSecurityTrustHtml",value:function(e){return
new rr(e)}},{key:"bypassSecurityTrustStyle",value:function(e){return new
ir(e)}},{key:"bypassSecurityTrustScript",value:function(e){return new
ar(e)}},{key:"bypassSecurityTrustUrl",value:function(e){return new
or(e)}},{key:"bypassSecurityTrustResourceUrl",value:function(e){return new
sr(e)}}]),n}(_c)).\u0275fac=function(e){return
new(e||ac)(Ke(nl))},ac.\u0275prov=he({factory:function(){return e=Ke(He),new
kc(e.get(nl));var
e},token:ac,providedIn:"root"}),ac),Cc=Mu($u,"browser",[{provide:su,useValue:"browser"},{provide:ou,useValue:function(){Bl.makeCurrent(),Ql.init()},multi:!0},{provide:nl,useFactory:function(){return
function(e){Ot=e}(document),document},deps:[]}]),wc=[[],{provide:Oa,useValue:"root"},{provide:tr,useFactory:function(){return
new
tr},deps:[]},{provide:Zl,useClass:dc,multi:!0,deps:[nl,bu,su]},{provide:Zl,useClass:gc,multi:!0,deps:[nl]},[],{provide:lc,useClass:lc,deps:[Kl,Xl,ru]},{provide:vs,useExisting:lc},{provide:Jl,useExisting:Xl},{provide:Xl,useClass:Xl,deps:[nl]},{provide:Pu,useClass:Pu,deps:[bu]},{provide:Kl,useClass:Kl,deps:[Zl,bu]},[]],bc=((uc=function(){function
e(t){if(_classCallCheck(this,e),t)throw new Error("BrowserModule has already
been loaded. If you need access to common directives such as NgIf and NgFor
from a lazy loaded module, import CommonModule instead.")}return
_createClass(e,null,[{key:"withServerTransition",value:function(t){return{ngModule:e,providers:[{provide:ru,useValue:t.appId},{provide:Wl,useExisting:ru},Gl]}}}]),e}()).\u0275mod=yt({type:uc}),uc.\u0275inj=fe({factory:function(e){return
new(e||uc)(Ke(uc,12))},providers:wc,imports:[Ul,Xu]}),uc);function
Sc(){for(var e=arguments.length,t=new
Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[t.length-1];return
R(r)?(t.pop(),z(t,r)):Z(t)}function Ec(e,t){return q(e,t,1)}function
Tc(e,t){return function(n){return n.lift(new xc(e,t))}}"undefined"!=typeof
window&&window;var xc=function(){function
e(t,n){_classCallCheck(this,e),this.predicate=t,this.thisArg=n}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
Ac(e,this.predicate,this.thisArg))}}]),e}(),Ac=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this,e)).predicate=r,a.thisArg=i,a.count=0,a}return
_createClass(n,[{key:"_next",value:function(e){var
t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(n){return void
this.destination.error(n)}t&&this.destination.next(e)}}]),n}(p),Oc=function
e(){_classCallCheck(this,e)},Rc=function
e(){_classCallCheck(this,e)},Ic=function(){function e(t){var
n=this;_classCallCheck(this,e),this.normalizedNames=new
Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof
t?function(){n.headers=new Map,t.split("\n").forEach((function(e){var
t=e.indexOf(":");if(t>0){var
r=e.slice(0,t),i=r.toLowerCase(),a=e.slice(t+1).trim();n.maybeSetNormalizedName(r,i),n.headers.has(i)?n.headers.get(i).push(a):n.headers.set(i,[a])}}))}:function(){n.headers=new
Map,Object.keys(t).forEach((function(e){var
r=t[e],i=e.toLowerCase();"string"==typeof
r&&(r=[r]),r.length>0&&(n.headers.set(i,r),n.maybeSetNormalizedName(e,i))}))}:this.headers=new
Map}return _createClass(e,[{key:"has",value:function(e){return
this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var
t=this.headers.get(e.toLowerCase());return
t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return
this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return
this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return
this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return
this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return
this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var
t=this;this.lazyInit&&(this.lazyInit instanceof
e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((function(e){return
t.applyUpdate(e)})),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var
t=this;e.init(),Array.from(e.headers.keys()).forEach((function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))}))}},{key:"clone",value:function(t){var
n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof
e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}},{key:"applyUpdate",value:function(e){var
t=e.name.toLowerCase();switch(e.op){case"a":case"s":var
n=e.value;if("string"==typeof
n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var
r=("a"===e.op?this.headers.get(t):void
0)||[];r.push.apply(r,_toConsumableArray(n)),this.headers.set(t,r);break;case"d":var
i=e.value;if(i){var
a=this.headers.get(t);if(!a)return;0===(a=a.filter((function(e){return-1===i.indexOf(e)}))).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}else
this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var
t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach((function(n){return
e(t.normalizedNames.get(n),t.headers.get(n))}))}}]),e}(),Pc=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"encodeKey",value:function(e){return
Nc(e)}},{key:"encodeValue",value:function(e){return
Nc(e)}},{key:"decodeKey",value:function(e){return
decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return
decodeURIComponent(e)}}]),e}();function Nc(e){return
encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var
Dc=function(){function e(){var t=this,n=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};if(_classCallCheck(this,e),this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new
Pc,n.fromString){if(n.fromObject)throw new Error("Cannot specify both
fromString and fromObject.");this.map=function(e,t){var n=new Map;return
e.length>0&&e.split("&").forEach((function(e){var
r=e.indexOf("="),i=_slicedToArray(-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],2),a=i[0],o=i[1],s=n.get(a)||[];s.push(o),n.set(a,s)})),n}(n.fromString,this.encoder)}else
n.fromObject?(this.map=new
Map,Object.keys(n.fromObject).forEach((function(e){var
r=n.fromObject[e];t.map.set(e,Array.isArray(r)?r:[r])}))):this.map=null}return
_createClass(e,[{key:"has",value:function(e){return
this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var
t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return
this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return
this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return
this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return
this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return
this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var
e=this;return this.init(),this.keys().map((function(t){var
n=e.encoder.encodeKey(t);return e.map.get(t).map((function(t){return
n+"="+e.encoder.encodeValue(t)})).join("&")})).filter((function(e){return""!==e})).join("&")}},{key:"clone",value:function(t){var
n=new e({encoder:this.encoder});return
n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n}},{key:"init",value:function(){var
e=this;null===this.map&&(this.map=new
Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((function(t){return
e.map.set(t,e.cloneFrom.map.get(t))})),this.updates.forEach((function(t){switch(t.op){case"a":case"s":var
n=("a"===t.op?e.map.get(t.param):void
0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void
0===t.value){e.map.delete(t.param);break}var
r=e.map.get(t.param)||[],i=r.indexOf(t.value);-1!==i&&r.splice(i,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}})),this.cloneFrom=this.updates=null)}}]),e}();function
Vc(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function
jc(e){return"undefined"!=typeof Blob&&e instanceof Blob}function
Fc(e){return"undefined"!=typeof FormData&&e instanceof FormData}var
Mc=function(){function e(t,n,r,i){var
a;if(_classCallCheck(this,e),this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||i?(this.body=void
0!==r?r:null,a=i):a=r,a&&(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.params&&(this.params=a.params)),this.headers||(this.headers=new
Ic),this.params){var
o=this.params.toString();if(0===o.length)this.urlWithParams=n;else{var
s=n.indexOf("?");this.urlWithParams=n+(-1===s?"?":s<n.length-1?"&":"")+o}}else
this.params=new Dc,this.urlWithParams=n}return
_createClass(e,[{key:"serializeBody",value:function(){return
null===this.body?null:Vc(this.body)||jc(this.body)||Fc(this.body)||"string"==typeof
this.body?this.body:this.body instanceof
Dc?this.body.toString():"object"==typeof this.body||"boolean"==typeof
this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return
null===this.body||Fc(this.body)?null:jc(this.body)?this.body.type||null:Vc(this.body)?null:"string"==typeof
this.body?"text/plain":this.body instanceof
Dc?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof
this.body||"number"==typeof
this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var
t=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{},n=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,a=void
0!==t.body?t.body:this.body,o=void
0!==t.withCredentials?t.withCredentials:this.withCredentials,s=void
0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,l=t.params||this.params;return
void
0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((function(e,n){return
e.set(n,t.setHeaders[n])}),u)),t.setParams&&(l=Object.keys(t.setParams).reduce((function(e,n){return
e.set(n,t.setParams[n])}),l)),new
e(n,r,a,{params:l,headers:u,reportProgress:s,responseType:i,withCredentials:o})}}]),e}(),Lc=function(){var
e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return
e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}(),Uc=function
e(t){var n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void
0!==arguments[2]?arguments[2]:"OK";_classCallCheck(this,e),this.headers=t.headers||new
Ic,this.status=void
0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300},Hc=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){var e,r=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};return
_classCallCheck(this,n),(e=t.call(this,r)).type=Lc.ResponseHeader,e}return
_createClass(n,[{key:"clone",value:function(){var e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};return new
n({headers:e.headers||this.headers,status:void
0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void
0})}}]),n}(Uc),zc=function(e){_inherits(n,e);var t=_createSuper(n);function
n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return
_classCallCheck(this,n),(e=t.call(this,r)).type=Lc.Response,e.body=void
0!==r.body?r.body:null,e}return
_createClass(n,[{key:"clone",value:function(){var e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};return new n({body:void
0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void
0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void
0})}}]),n}(Uc),Bc=function(e){_inherits(n,e);var t=_createSuper(n);function
n(e){var r;return _classCallCheck(this,n),(r=t.call(this,e,0,"Unknown
Error")).name="HttpErrorResponse",r.ok=!1,r.message=r.status>=200&&r.status<300?"Http
failure during parsing for "+(e.url||"(unknown url)"):"Http failure response
for ".concat(e.url||"(unknown url)",": ").concat(e.status,"
").concat(e.statusText),r.error=e.error||null,r}return n}(Uc);function
qc(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var
Wc,Gc,Qc,Zc,Kc,$c,Jc,Xc,Yc,eh=((Wc=function(){function
e(t){_classCallCheck(this,e),this.handler=t}return
_createClass(e,[{key:"request",value:function(e,t){var
n,r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e
instanceof Mc)n=e;else{var a=void 0;a=i.headers instanceof Ic?i.headers:new
Ic(i.headers);var o=void 0;i.params&&(o=i.params instanceof Dc?i.params:new
Dc({fromObject:i.params})),n=new Mc(e,t,void
0!==i.body?i.body:null,{headers:a,params:o,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials})}var
s=Sc(n).pipe(Ec((function(e){return r.handler.handle(e)})));if(e instanceof
Mc||"events"===i.observe)return s;var u=s.pipe(Tc((function(e){return e
instanceof
zc})));switch(i.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return
u.pipe(L((function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw
new Error("Response is not an ArrayBuffer.");return
e.body})));case"blob":return u.pipe(L((function(e){if(null!==e.body&&!(e.body
instanceof Blob))throw new Error("Response is not a Blob.");return
e.body})));case"text":return
u.pipe(L((function(e){if(null!==e.body&&"string"!=typeof e.body)throw new
Error("Response is not a string.");return e.body})));case"json":default:return
u.pipe(L((function(e){return e.body})))}case"response":return u;default:throw
new Error("Unreachable: unhandled observe type
".concat(i.observe,"}"))}}},{key:"delete",value:function(e){var
t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return
this.request("DELETE",e,t)}},{key:"get",value:function(e){var
t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return
this.request("GET",e,t)}},{key:"head",value:function(e){var
t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return
this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return
this.request("JSONP",e,{params:(new
Dc).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var
t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return
this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return
this.request("PATCH",e,qc(n,t))}},{key:"post",value:function(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return
this.request("POST",e,qc(n,t))}},{key:"put",value:function(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return
this.request("PUT",e,qc(n,t))}}]),e}()).\u0275fac=function(e){return
new(e||Wc)(Ke(Oc))},Wc.\u0275prov=he({token:Wc,factory:Wc.\u0275fac}),Wc),th=function(){function
e(t,n){_classCallCheck(this,e),this.next=t,this.interceptor=n}return
_createClass(e,[{key:"handle",value:function(e){return
this.interceptor.intercept(e,this.next)}}]),e}(),nh=new
Ue("HTTP_INTERCEPTORS"),rh=((Gc=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"intercept",value:function(e,t){return
t.handle(e)}}]),e}()).\u0275fac=function(e){return
new(e||Gc)},Gc.\u0275prov=he({token:Gc,factory:Gc.\u0275fac}),Gc),ih=/^\)\]\}',?\n/,ah=function
e(){_classCallCheck(this,e)},oh=((Zc=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"build",value:function(){return new
XMLHttpRequest}}]),e}()).\u0275fac=function(e){return
new(e||Zc)},Zc.\u0275prov=he({token:Zc,factory:Zc.\u0275fac}),Zc),sh=((Qc=function(){function
e(t){_classCallCheck(this,e),this.xhrFactory=t}return
_createClass(e,[{key:"handle",value:function(e){var
t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp
request without JsonpClientModule installed.");return new w((function(n){var
r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((function(e,t){return
r.setRequestHeader(e,t.join(","))})),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json,
text/plain, */*"),!e.headers.has("Content-Type")){var
i=e.detectContentTypeHeader();null!==i&&r.setRequestHeader("Content-Type",i)}if(e.responseType){var
a=e.responseType.toLowerCase();r.responseType="json"!==a?a:"text"}var
o=e.serializeBody(),s=null,u=function(){if(null!==s)return s;var
t=1223===r.status?204:r.status,n=r.statusText||"OK",i=new
Ic(r.getAllResponseHeaders()),a=function(e){return"responseURL"in
e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return
s=new Hc({headers:i,status:t,statusText:n,url:a})},l=function(){var
t=u(),i=t.headers,a=t.status,o=t.statusText,s=t.url,l=null;204!==a&&(l=void
0===r.response?r.responseText:r.response),0===a&&(a=l?200:0);var
c=a>=200&&a<300;if("json"===e.responseType&&"string"==typeof l){var
h=l;l=l.replace(ih,"");try{l=""!==l?JSON.parse(l):null}catch(f){l=h,c&&(c=!1,l={error:f,text:l})}}c?(n.next(new
zc({body:l,headers:i,status:a,statusText:o,url:s||void
0})),n.complete()):n.error(new
Bc({error:l,headers:i,status:a,statusText:o,url:s||void
0}))},c=function(e){var t=u().url,i=new
Bc({error:e,status:r.status||0,statusText:r.statusText||"Unknown
Error",url:t||void
0});n.error(i)},h=!1,f=function(t){h||(n.next(u()),h=!0);var
i={type:Lc.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(i.total=t.total),"text"===e.responseType&&r.responseText&&(i.partialText=r.responseText),n.next(i)},d=function(e){var
t={type:Lc.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return
r.addEventListener("load",l),r.addEventListener("error",c),e.reportProgress&&(r.addEventListener("progress",f),null!==o&&r.upload&&r.upload.addEventListener("progress",d)),r.send(o),n.next({type:Lc.Sent}),function(){r.removeEventListener("error",c),r.removeEventListener("load",l),e.reportProgress&&(r.removeEventListener("progress",f),null!==o&&r.upload&&r.upload.removeEventListener("progress",d)),r.abort()}}))}}]),e}()).\u0275fac=function(e){return
new(e||Qc)(Ke(ah))},Qc.\u0275prov=he({token:Qc,factory:Qc.\u0275fac}),Qc),uh=new
Ue("XSRF_COOKIE_NAME"),lh=new Ue("XSRF_HEADER_NAME"),ch=function
e(){_classCallCheck(this,e)},hh=((Yc=function(){function
e(t,n,r){_classCallCheck(this,e),this.doc=t,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return
_createClass(e,[{key:"getToken",value:function(){if("server"===this.platform)return
null;var e=this.doc.cookie||"";return
e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ol(e,this.cookieName),this.lastCookieString=e),this.lastToken}}]),e}()).\u0275fac=function(e){return
new(e||Yc)(Ke(nl),Ke(su),Ke(uh))},Yc.\u0275prov=he({token:Yc,factory:Yc.\u0275fac}),Yc),fh=((Xc=function(){function
e(t,n){_classCallCheck(this,e),this.tokenService=t,this.headerName=n}return
_createClass(e,[{key:"intercept",value:function(e,t){var
n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return
t.handle(e);var r=this.tokenService.getToken();return
null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}]),e}()).\u0275fac=function(e){return
new(e||Xc)(Ke(ch),Ke(lh))},Xc.\u0275prov=he({token:Xc,factory:Xc.\u0275fac}),Xc),dh=((Jc=function(){function
e(t,n){_classCallCheck(this,e),this.backend=t,this.injector=n,this.chain=null}return
_createClass(e,[{key:"handle",value:function(e){if(null===this.chain){var
t=this.injector.get(nh,[]);this.chain=t.reduceRight((function(e,t){return new
th(e,t)}),this.backend)}return
this.chain.handle(e)}}]),e}()).\u0275fac=function(e){return
new(e||Jc)(Ke(Rc),Ke(Ba))},Jc.\u0275prov=he({token:Jc,factory:Jc.\u0275fac}),Jc),vh=(($c=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,null,[{key:"disable",value:function(){return{ngModule:e,providers:[{provide:fh,useClass:rh}]}}},{key:"withOptions",value:function(){var
t=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[t.cookieName?{provide:uh,useValue:t.cookieName}:[],t.headerName?{provide:lh,useValue:t.headerName}:[]]}}}]),e}()).\u0275mod=yt({type:$c}),$c.\u0275inj=fe({factory:function(e){return
new(e||$c)},providers:[fh,{provide:nh,useExisting:fh,multi:!0},{provide:ch,useClass:hh},{provide:uh,useValue:"XSRF-TOKEN"},{provide:lh,useValue:"X-XSRF-TOKEN"}]}),$c),ph=((Kc=function
e(){_classCallCheck(this,e)}).\u0275mod=yt({type:Kc}),Kc.\u0275inj=fe({factory:function(e){return
new(e||Kc)},providers:[eh,{provide:Oc,useClass:dh},sh,{provide:Rc,useExisting:sh},oh,{provide:ah,useExisting:oh}],imports:[[vh.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),Kc),yh=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){var r;return
_classCallCheck(this,n),(r=t.call(this))._value=e,r}return
_createClass(n,[{key:"_subscribe",value:function(e){var
t=_get(_getPrototypeOf(n.prototype),"_subscribe",this).call(this,e);return
t&&!t.closed&&e.next(this._value),t}},{key:"getValue",value:function(){if(this.hasError)throw
this.thrownError;if(this.closed)throw new E;return
this._value}},{key:"next",value:function(e){_get(_getPrototypeOf(n.prototype),"next",this).call(this,this._value=e)}},{key:"value",get:function(){return
this.getValue()}}]),n}(A),mh=function(){function e(){return
Error.call(this),this.message="no elements in
sequence",this.name="EmptyError",this}return
e.prototype=Object.create(Error.prototype),e}(),gh={},_h=function(){function
e(t){_classCallCheck(this,e),this.resultSelector=t}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
kh(e,this.resultSelector))}}]),e}(),kh=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).resultSelector=r,i.active=0,i.values=[],i.observables=[],i}return
_createClass(n,[{key:"_next",value:function(e){this.values.push(gh),this.observables.push(e)}},{key:"_complete",value:function(){var
e=this.observables,t=e.length;if(0===t)this.destination.complete();else{this.active=t,this.toRespond=t;for(var
n=0;n<t;n++){var
r=e[n];this.add(F(this,r,r,n))}}}},{key:"notifyComplete",value:function(e){0==(this.active-=1)&&this.destination.complete()}},{key:"notifyNext",value:function(e,t,n,r,i){var
a=this.values,o=this.toRespond?a[n]===gh?--this.toRespond:this.toRespond:0;a[n]=t,0===o&&(this.resultSelector?this._tryResultSelector(a):this.destination.next(a.slice()))}},{key:"_tryResultSelector",value:function(e){var
t;try{t=this.resultSelector.apply(this,e)}catch(n){return void
this.destination.error(n)}this.destination.next(t)}}]),n}(M),Ch=new
w((function(e){return e.complete()}));function wh(e){return
e?function(e){return new w((function(t){return e.schedule((function(){return
t.complete()}))}))}(e):Ch}function bh(e){return new w((function(t){var
n;try{n=e()}catch(r){return void
t.error(r)}return(n?B(n):wh()).subscribe(t)}))}function Sh(){return Q(1)}var
Eh=function(){function e(){return Error.call(this),this.message="argument out
of range",this.name="ArgumentOutOfRangeError",this}return
e.prototype=Object.create(Error.prototype),e}();function Th(e){return
function(t){return 0===e?wh():t.lift(new xh(e))}}var xh=function(){function
e(t){if(_classCallCheck(this,e),this.total=t,this.total<0)throw new Eh}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
Ah(e,this.total))}}]),e}(),Ah=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).total=r,i.ring=new
Array,i.count=0,i}return _createClass(n,[{key:"_next",value:function(e){var
t=this.ring,n=this.total,r=this.count++;t.length<n?t.push(e):t[r%n]=e}},{key:"_complete",value:function(){var
e=this.destination,t=this.count;if(t>0)for(var
n=this.count>=this.total?this.total:this.count,r=this.ring,i=0;i<n;i++){var
a=t++%n;e.next(r[a])}e.complete()}}]),n}(p);function Oh(){var
e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ph;return
function(t){return t.lift(new Rh(e))}}var Rh=function(){function
e(t){_classCallCheck(this,e),this.errorFactory=t}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
Ih(e,this.errorFactory))}}]),e}(),Ih=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).errorFactory=r,i.hasValue=!1,i}return
_createClass(n,[{key:"_next",value:function(e){this.hasValue=!0,this.destination.next(e)}},{key:"_complete",value:function(){if(this.hasValue)return
this.destination.complete();var
e;try{e=this.errorFactory()}catch(t){e=t}this.destination.error(e)}}]),n}(p);function
Ph(){return new mh}function Nh(){var e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:null;return function(t){return t.lift(new
Dh(e))}}var Dh=function(){function
e(t){_classCallCheck(this,e),this.defaultValue=t}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
Vh(e,this.defaultValue))}}]),e}(),Vh=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).defaultValue=r,i.isEmpty=!0,i}return
_createClass(n,[{key:"_next",value:function(e){this.isEmpty=!1,this.destination.next(e)}},{key:"_complete",value:function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}]),n}(p);function
jh(e,t){var n=arguments.length>=2;return function(r){return
r.pipe(e?Tc((function(t,n){return
e(t,n,r)})):g,Th(1),n?Nh(t):Oh((function(){return new mh})))}}function
Fh(e){return function(t){var n=new Mh(e),r=t.lift(n);return n.caught=r}}var
Mh=function(){function e(t){_classCallCheck(this,e),this.selector=t}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
Lh(e,this.selector,this.caught))}}]),e}(),Lh=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this,e)).selector=r,a.caught=i,a}return
_createClass(n,[{key:"error",value:function(e){if(!this.isStopped){var
t;try{t=this.selector(e,this.caught)}catch(a){return void
_get(_getPrototypeOf(n.prototype),"error",this).call(this,a)}this._unsubscribeAndRecycle();var
r=new I(this,void 0,void 0);this.add(r);var i=F(this,t,void 0,void
0,r);i!==r&&this.add(i)}}}]),n}(M);function Uh(e){return function(t){return
0===e?wh():t.lift(new Hh(e))}}var Hh=function(){function
e(t){if(_classCallCheck(this,e),this.total=t,this.total<0)throw new Eh}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
zh(e,this.total))}}]),e}(),zh=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).total=r,i.count=0,i}return
_createClass(n,[{key:"_next",value:function(e){var
t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))}}]),n}(p);function
Bh(e,t){var n=arguments.length>=2;return function(r){return
r.pipe(e?Tc((function(t,n){return
e(t,n,r)})):g,Uh(1),n?Nh(t):Oh((function(){return new mh})))}}var
qh=function(){function
e(t,n,r){_classCallCheck(this,e),this.predicate=t,this.thisArg=n,this.source=r}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
Wh(e,this.predicate,this.thisArg,this.source))}}]),e}(),Wh=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var o;return
_classCallCheck(this,n),(o=t.call(this,e)).predicate=r,o.thisArg=i,o.source=a,o.index=0,o.thisArg=i||_assertThisInitialized(o),o}return
_createClass(n,[{key:"notifyComplete",value:function(e){this.destination.next(e),this.destination.complete()}},{key:"_next",value:function(e){var
t=!1;try{t=this.predicate.call(this.thisArg,e,this.index++,this.source)}catch(n){return
void
this.destination.error(n)}t||this.notifyComplete(!1)}},{key:"_complete",value:function(){this.notifyComplete(!0)}}]),n}(p);function
Gh(e,t){return"function"==typeof t?function(n){return
n.pipe(Gh((function(n,r){return B(e(n,r)).pipe(L((function(e,i){return
t(n,e,r,i)})))})))}:function(t){return t.lift(new Qh(e))}}var
Qh=function(){function e(t){_classCallCheck(this,e),this.project=t}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
Zh(e,this.project))}}]),e}(),Zh=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).project=r,i.index=0,i}return
_createClass(n,[{key:"_next",value:function(e){var
t,n=this.index++;try{t=this.project(e,n)}catch(r){return void
this.destination.error(r)}this._innerSub(t,e,n)}},{key:"_innerSub",value:function(e,t,n){var
r=this.innerSubscription;r&&r.unsubscribe();var i=new
I(this,t,n),a=this.destination;a.add(i),this.innerSubscription=F(this,e,void
0,void
0,i),this.innerSubscription!==i&&a.add(this.innerSubscription)}},{key:"_complete",value:function(){var
e=this.innerSubscription;e&&!e.closed||_get(_getPrototypeOf(n.prototype),"_complete",this).call(this),this.unsubscribe()}},{key:"_unsubscribe",value:function(){this.innerSubscription=null}},{key:"notifyComplete",value:function(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&_get(_getPrototypeOf(n.prototype),"_complete",this).call(this)}},{key:"notifyNext",value:function(e,t,n,r,i){this.destination.next(t)}}]),n}(M);function
Kh(){return Sh()(Sc.apply(void 0,arguments))}function $h(e,t){var n=!1;return
arguments.length>=2&&(n=!0),function(r){return r.lift(new Jh(e,t,n))}}var
Jh=function(){function e(t,n){var r=arguments.length>2&&void
0!==arguments[2]&&arguments[2];_classCallCheck(this,e),this.accumulator=t,this.seed=n,this.hasSeed=r}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
Xh(e,this.accumulator,this.seed,this.hasSeed))}}]),e}(),Xh=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var o;return
_classCallCheck(this,n),(o=t.call(this,e)).accumulator=r,o._seed=i,o.hasSeed=a,o.index=0,o}return
_createClass(n,[{key:"_next",value:function(e){if(this.hasSeed)return
this._tryNext(e);this.seed=e,this.destination.next(e)}},{key:"_tryNext",value:function(e){var
t,n=this.index++;try{t=this.accumulator(this.seed,e,n)}catch(r){this.destination.error(r)}this.seed=t,this.destination.next(t)}},{key:"seed",get:function(){return
this._seed},set:function(e){this.hasSeed=!0,this._seed=e}}]),n}(p);function
Yh(){}function ef(e,t,n){return function(r){return r.lift(new nf(e,t,n))}}var
tf,nf=function(){function
e(t,n,r){_classCallCheck(this,e),this.nextOrObserver=t,this.error=n,this.complete=r}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
rf(e,this.nextOrObserver,this.error,this.complete))}}]),e}(),rf=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,i,a,o){var s;return
_classCallCheck(this,n),(s=t.call(this,e))._tapNext=Yh,s._tapError=Yh,s._tapComplete=Yh,s._tapError=a||Yh,s._tapComplete=o||Yh,r(i)?(s._context=_assertThisInitialized(s),s._tapNext=i):i&&(s._context=i,s._tapNext=i.next||Yh,s._tapError=i.error||Yh,s._tapComplete=i.complete||Yh),s}return
_createClass(n,[{key:"_next",value:function(e){try{this._tapNext.call(this._context,e)}catch(t){return
void
this.destination.error(t)}this.destination.next(e)}},{key:"_error",value:function(e){try{this._tapError.call(this._context,e)}catch(e){return
void
this.destination.error(e)}this.destination.error(e)}},{key:"_complete",value:function(){try{this._tapComplete.call(this._context)}catch(e){return
void this.destination.error(e)}return
this.destination.complete()}}]),n}(p),af=function(){function
e(t){_classCallCheck(this,e),this.callback=t}return
_createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new
of(e,this.callback))}}]),e}(),of=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).add(new f(r)),i}return
n}(p),sf=function
e(t,n){_classCallCheck(this,e),this.id=t,this.url=n},uf=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i,a=arguments.length>2&&void
0!==arguments[2]?arguments[2]:"imperative",o=arguments.length>3&&void
0!==arguments[3]?arguments[3]:null;return
_classCallCheck(this,n),(i=t.call(this,e,r)).navigationTrigger=a,i.restoredState=o,i}return
_createClass(n,[{key:"toString",value:function(){return"NavigationStart(id:
".concat(this.id,", url:
'").concat(this.url,"')")}}]),n}(sf),lf=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this,e,r)).urlAfterRedirects=i,a}return
_createClass(n,[{key:"toString",value:function(){return"NavigationEnd(id:
".concat(this.id,", url: '").concat(this.url,"', urlAfterRedirects:
'").concat(this.urlAfterRedirects,"')")}}]),n}(sf),cf=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this,e,r)).reason=i,a}return
_createClass(n,[{key:"toString",value:function(){return"NavigationCancel(id:
".concat(this.id,", url:
'").concat(this.url,"')")}}]),n}(sf),hf=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this,e,r)).error=i,a}return
_createClass(n,[{key:"toString",value:function(){return"NavigationError(id:
".concat(this.id,", url: '").concat(this.url,"', error:
").concat(this.error,")")}}]),n}(sf),ff=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var o;return
_classCallCheck(this,n),(o=t.call(this,e,r)).urlAfterRedirects=i,o.state=a,o}return
_createClass(n,[{key:"toString",value:function(){return"RoutesRecognized(id:
".concat(this.id,", url: '").concat(this.url,"', urlAfterRedirects:
'").concat(this.urlAfterRedirects,"', state:
").concat(this.state,")")}}]),n}(sf),df=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var o;return
_classCallCheck(this,n),(o=t.call(this,e,r)).urlAfterRedirects=i,o.state=a,o}return
_createClass(n,[{key:"toString",value:function(){return"GuardsCheckStart(id:
".concat(this.id,", url: '").concat(this.url,"', urlAfterRedirects:
'").concat(this.urlAfterRedirects,"', state:
").concat(this.state,")")}}]),n}(sf),vf=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a,o){var s;return
_classCallCheck(this,n),(s=t.call(this,e,r)).urlAfterRedirects=i,s.state=a,s.shouldActivate=o,s}return
_createClass(n,[{key:"toString",value:function(){return"GuardsCheckEnd(id:
".concat(this.id,", url: '").concat(this.url,"', urlAfterRedirects:
'").concat(this.urlAfterRedirects,"', state: ").concat(this.state,",
shouldActivate:
").concat(this.shouldActivate,")")}}]),n}(sf),pf=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var o;return
_classCallCheck(this,n),(o=t.call(this,e,r)).urlAfterRedirects=i,o.state=a,o}return
_createClass(n,[{key:"toString",value:function(){return"ResolveStart(id:
".concat(this.id,", url: '").concat(this.url,"', urlAfterRedirects:
'").concat(this.urlAfterRedirects,"', state:
").concat(this.state,")")}}]),n}(sf),yf=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var o;return
_classCallCheck(this,n),(o=t.call(this,e,r)).urlAfterRedirects=i,o.state=a,o}return
_createClass(n,[{key:"toString",value:function(){return"ResolveEnd(id:
".concat(this.id,", url: '").concat(this.url,"', urlAfterRedirects:
'").concat(this.urlAfterRedirects,"', state:
").concat(this.state,")")}}]),n}(sf),mf=function(){function
e(t){_classCallCheck(this,e),this.route=t}return
_createClass(e,[{key:"toString",value:function(){return"RouteConfigLoadStart(path:
".concat(this.route.path,")")}}]),e}(),gf=function(){function
e(t){_classCallCheck(this,e),this.route=t}return
_createClass(e,[{key:"toString",value:function(){return"RouteConfigLoadEnd(path:
".concat(this.route.path,")")}}]),e}(),_f=function(){function
e(t){_classCallCheck(this,e),this.snapshot=t}return
_createClass(e,[{key:"toString",value:function(){return"ChildActivationStart(path:
'".concat(this.snapshot.routeConfig&&this.snapshot.routeConfig.path||"","')")}}]),e}(),kf=function(){function
e(t){_classCallCheck(this,e),this.snapshot=t}return
_createClass(e,[{key:"toString",value:function(){return"ChildActivationEnd(path:
'".concat(this.snapshot.routeConfig&&this.snapshot.routeConfig.path||"","')")}}]),e}(),Cf=function(){function
e(t){_classCallCheck(this,e),this.snapshot=t}return
_createClass(e,[{key:"toString",value:function(){return"ActivationStart(path:
'".concat(this.snapshot.routeConfig&&this.snapshot.routeConfig.path||"","')")}}]),e}(),wf=function(){function
e(t){_classCallCheck(this,e),this.snapshot=t}return
_createClass(e,[{key:"toString",value:function(){return"ActivationEnd(path:
'".concat(this.snapshot.routeConfig&&this.snapshot.routeConfig.path||"","')")}}]),e}(),bf=function(){function
e(t,n,r){_classCallCheck(this,e),this.routerEvent=t,this.position=n,this.anchor=r}return
_createClass(e,[{key:"toString",value:function(){return"Scroll(anchor:
'".concat(this.anchor,"', position:
'").concat(this.position?"".concat(this.position[0],",
").concat(this.position[1]):null,"')")}}]),e}(),Sf=((tf=function
e(){_classCallCheck(this,e)}).\u0275fac=function(e){return
new(e||tf)},tf.\u0275cmp=ft({type:tf,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&co(0,"router-outlet")},directives:function(){return[Av]},encapsulation:2}),tf),Ef=function(){function
e(t){_classCallCheck(this,e),this.params=t||{}}return
_createClass(e,[{key:"has",value:function(e){return
this.params.hasOwnProperty(e)}},{key:"get",value:function(e){if(this.has(e)){var
t=this.params[e];return Array.isArray(t)?t[0]:t}return
null}},{key:"getAll",value:function(e){if(this.has(e)){var
t=this.params[e];return
Array.isArray(t)?t:[t]}return[]}},{key:"keys",get:function(){return
Object.keys(this.params)}}]),e}();function Tf(e){return new Ef(e)}function
xf(e){var t=Error("NavigationCancelingError: "+e);return
t.ngNavigationCancelingError=!0,t}function Af(e,t,n){var
r=n.path.split("/");if(r.length>e.length)return
null;if("full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return
null;for(var i={},a=0;a<r.length;a++){var
o=r[a],s=e[a];if(o.startsWith(":"))i[o.substring(1)]=s;else
if(o!==s.path)return null}return{consumed:e.slice(0,r.length),posParams:i}}var
Of=function
e(t,n){_classCallCheck(this,e),this.routes=t,this.module=n};function
Rf(e){for(var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:"",n=0;n<e.length;n++){var
r=e[n];If(r,Pf(t,r))}}function If(e,t){if(!e)throw new Error("\n      Invalid
configuration of route '".concat(t,"': Encountered undefined route.\n      The
reason might be an extra comma.\n\n      Example:\n      const routes: Routes
= [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n     
  { path: 'dashboard',  component: DashboardComponent },, << two commas\n     
  { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n   
"));if(Array.isArray(e))throw new Error("Invalid configuration of route
'".concat(t,"': Array cannot be
specified"));if(!e.component&&!e.children&&!e.loadChildren&&e.outlet&&"primary"!==e.outlet)throw
new Error("Invalid configuration of route '".concat(t,"': a componentless
route without children or loadChildren cannot have a named outlet
set"));if(e.redirectTo&&e.children)throw new Error("Invalid configuration of
route '".concat(t,"': redirectTo and children cannot be used
together"));if(e.redirectTo&&e.loadChildren)throw new Error("Invalid
configuration of route '".concat(t,"': redirectTo and loadChildren cannot be
used together"));if(e.children&&e.loadChildren)throw new Error("Invalid
configuration of route '".concat(t,"': children and loadChildren cannot be
used together"));if(e.redirectTo&&e.component)throw new Error("Invalid
configuration of route '".concat(t,"': redirectTo and component cannot be used
together"));if(e.path&&e.matcher)throw new Error("Invalid configuration of
route '".concat(t,"': path and matcher cannot be used together"));if(void
0===e.redirectTo&&!e.component&&!e.children&&!e.loadChildren)throw new
Error("Invalid configuration of route '".concat(t,"'. One of the following
must be provided: component, redirectTo, children or loadChildren"));if(void
0===e.path&&void 0===e.matcher)throw new Error("Invalid configuration of route
'".concat(t,"': routes must have either a path or a matcher
specified"));if("string"==typeof e.path&&"/"===e.path.charAt(0))throw new
Error("Invalid configuration of route '".concat(t,"': path cannot start with a
slash"));if(""===e.path&&void 0!==e.redirectTo&&void 0===e.pathMatch)throw new
Error("Invalid configuration of route '{path: \"".concat(t,'", redirectTo:
"').concat(e.redirectTo,"\"}': please provide 'pathMatch'. The default value
of 'pathMatch' is 'prefix', but often the intent is to use 'full'."));if(void
0!==e.pathMatch&&"full"!==e.pathMatch&&"prefix"!==e.pathMatch)throw new
Error("Invalid configuration of route '".concat(t,"': pathMatch can only be
set to 'prefix' or 'full'"));e.children&&Rf(e.children,t)}function
Pf(e,t){return
t?e||t.path?e&&!t.path?e+"/":!e&&t.path?t.path:"".concat(e,"/").concat(t.path):"":e}function
Nf(e){var
t=e.children&&e.children.map(Nf),n=t?Object.assign(Object.assign({},e),{children:t}):Object.assign({},e);return!n.component&&(t||n.loadChildren)&&n.outlet&&"primary"!==n.outlet&&(n.component=Sf),n}function
Df(e,t){var
n,r=Object.keys(e),i=Object.keys(t);if(!r||!i||r.length!=i.length)return!1;for(var
a=0;a<r.length;a++)if(!Vf(e[n=r[a]],t[n]))return!1;return!0}function
Vf(e,t){return
Array.isArray(e)&&Array.isArray(t)?e.length==t.length&&e.every((function(e){return
t.indexOf(e)>-1})):e===t}function jf(e){return
Array.prototype.concat.apply([],e)}function Ff(e){return
e.length>0?e[e.length-1]:null}function Mf(e,t){for(var n in
e)e.hasOwnProperty(n)&&t(e[n],n)}function Lf(e){return
fo(e)?e:ho(e)?B(Promise.resolve(e)):Sc(e)}function Uf(e,t,n){return
n?function(e,t){return Df(e,t)}(e.queryParams,t.queryParams)&&function
e(t,n){if(!qf(t.segments,n.segments))return!1;if(t.numberOfChildren!==n.numberOfChildren)return!1;for(var
r in
n.children){if(!t.children[r])return!1;if(!e(t.children[r],n.children[r]))return!1}return!0}(e.root,t.root):function(e,t){return
Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every((function(n){return
Vf(e[n],t[n])}))}(e.queryParams,t.queryParams)&&function e(t,n){return
function
t(n,r,i){if(n.segments.length>i.length)return!!qf(n.segments.slice(0,i.length),i)&&!r.hasChildren();if(n.segments.length===i.length){if(!qf(n.segments,i))return!1;for(var
a in
r.children){if(!n.children[a])return!1;if(!e(n.children[a],r.children[a]))return!1}return!0}var
o=i.slice(0,n.segments.length),s=i.slice(n.segments.length);return!!qf(n.segments,o)&&!!n.children.primary&&t(n.children.primary,r,s)}(t,n,n.segments)}(e.root,t.root)}var
Hf=function(){function
e(t,n,r){_classCallCheck(this,e),this.root=t,this.queryParams=n,this.fragment=r}return
_createClass(e,[{key:"toString",value:function(){return
Zf.serialize(this)}},{key:"queryParamMap",get:function(){return
this._queryParamMap||(this._queryParamMap=Tf(this.queryParams)),this._queryParamMap}}]),e}(),zf=function(){function
e(t,n){var
r=this;_classCallCheck(this,e),this.segments=t,this.children=n,this.parent=null,Mf(n,(function(e,t){return
e.parent=r}))}return
_createClass(e,[{key:"hasChildren",value:function(){return
this.numberOfChildren>0}},{key:"toString",value:function(){return
Kf(this)}},{key:"numberOfChildren",get:function(){return
Object.keys(this.children).length}}]),e}(),Bf=function(){function
e(t,n){_classCallCheck(this,e),this.path=t,this.parameters=n}return
_createClass(e,[{key:"toString",value:function(){return
td(this)}},{key:"parameterMap",get:function(){return
this._parameterMap||(this._parameterMap=Tf(this.parameters)),this._parameterMap}}]),e}();function
qf(e,t){return e.length===t.length&&e.every((function(e,n){return
e.path===t[n].path}))}function Wf(e,t){var n=[];return
Mf(e.children,(function(e,r){"primary"===r&&(n=n.concat(t(e,r)))})),Mf(e.children,(function(e,r){"primary"!==r&&(n=n.concat(t(e,r)))})),n}var
Gf=function e(){_classCallCheck(this,e)},Qf=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"parse",value:function(e){var t=new od(e);return new
Hf(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}},{key:"serialize",value:function(e){return"".concat("/"+function
e(t,n){if(!t.hasChildren())return Kf(t);if(n){var
r=t.children.primary?e(t.children.primary,!1):"",i=[];return
Mf(t.children,(function(t,n){"primary"!==n&&i.push("".concat(n,":").concat(e(t,!1)))})),i.length>0?"".concat(r,"(").concat(i.join("//"),")"):r}var
a=Wf(t,(function(n,r){return"primary"===r?[e(t.children.primary,!1)]:["".concat(r,":").concat(e(n,!1))]}));return"".concat(Kf(t),"/(").concat(a.join("//"),")")}(e.root,!0)).concat((t=e.queryParams,n=Object.keys(t).map((function(e){var
n=t[e];return
Array.isArray(n)?n.map((function(t){return"".concat(Jf(e),"=").concat(Jf(t))})).join("&"):"".concat(Jf(e),"=").concat(Jf(n))})),n.length?"?"+n.join("&"):"")).concat("string"==typeof
e.fragment?"#"+encodeURI(e.fragment):"");var t,n}}]),e}(),Zf=new Qf;function
Kf(e){return e.segments.map((function(e){return td(e)})).join("/")}function
$f(e){return
encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function
Jf(e){return $f(e).replace(/%3B/gi,";")}function Xf(e){return
$f(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function
Yf(e){return decodeURIComponent(e)}function ed(e){return
Yf(e.replace(/\+/g,"%20"))}function
td(e){return"".concat(Xf(e.path)).concat((t=e.parameters,Object.keys(t).map((function(e){return";".concat(Xf(e),"=").concat(Xf(t[e]))})).join("")));var
t}var nd=/^[^\/()?;=#]+/;function rd(e){var t=e.match(nd);return t?t[0]:""}var
id=/^[^=?&#]+/,ad=/^[^?&#]+/,od=function(){function
e(t){_classCallCheck(this,e),this.url=t,this.remaining=t}return
_createClass(e,[{key:"parseRootSegment",value:function(){return
this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new
zf([],{}):new
zf([],this.parseChildren())}},{key:"parseQueryParams",value:function(){var
e={};if(this.consumeOptional("?"))do{this.parseQueryParam(e)}while(this.consumeOptional("&"));return
e}},{key:"parseFragment",value:function(){return
this.consumeOptional("#")?decodeURIComponent(this.remaining):null}},{key:"parseChildren",value:function(){if(""===this.remaining)return{};this.consumeOptional("/");var
e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());var
t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));var
n={};return
this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n.primary=new
zf(e,t)),n}},{key:"parseSegment",value:function(){var
e=rd(this.remaining);if(""===e&&this.peekStartsWith(";"))throw new
Error("Empty path url segment cannot have parameters:
'".concat(this.remaining,"'."));return this.capture(e),new
Bf(Yf(e),this.parseMatrixParams())}},{key:"parseMatrixParams",value:function(){for(var
e={};this.consumeOptional(";");)this.parseParam(e);return
e}},{key:"parseParam",value:function(e){var
t=rd(this.remaining);if(t){this.capture(t);var
n="";if(this.consumeOptional("=")){var
r=rd(this.remaining);r&&(n=r,this.capture(n))}e[Yf(t)]=Yf(n)}}},{key:"parseQueryParam",value:function(e){var
t=function(e){var t=e.match(id);return
t?t[0]:""}(this.remaining);if(t){this.capture(t);var
n="";if(this.consumeOptional("=")){var r=function(e){var t=e.match(ad);return
t?t[0]:""}(this.remaining);r&&(n=r,this.capture(n))}var
i=ed(t),a=ed(n);if(e.hasOwnProperty(i)){var
o=e[i];Array.isArray(o)||(o=[o],e[i]=o),o.push(a)}else
e[i]=a}}},{key:"parseParens",value:function(e){var
t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){var
n=rd(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw
new Error("Cannot parse url '".concat(this.url,"'"));var i=void
0;n.indexOf(":")>-1?(i=n.substr(0,n.indexOf(":")),this.capture(i),this.capture(":")):e&&(i="primary");var
a=this.parseChildren();t[i]=1===Object.keys(a).length?a.primary:new
zf([],a),this.consumeOptional("//")}return
t}},{key:"peekStartsWith",value:function(e){return
this.remaining.startsWith(e)}},{key:"consumeOptional",value:function(e){return!!this.peekStartsWith(e)&&(this.remaining=this.remaining.substring(e.length),!0)}},{key:"capture",value:function(e){if(!this.consumeOptional(e))throw
new Error('Expected "'.concat(e,'".'))}}]),e}(),sd=function(){function
e(t){_classCallCheck(this,e),this._root=t}return
_createClass(e,[{key:"parent",value:function(e){var
t=this.pathFromRoot(e);return
t.length>1?t[t.length-2]:null}},{key:"children",value:function(e){var
t=ud(e,this._root);return t?t.children.map((function(e){return
e.value})):[]}},{key:"firstChild",value:function(e){var
t=ud(e,this._root);return
t&&t.children.length>0?t.children[0].value:null}},{key:"siblings",value:function(e){var
t=ld(e,this._root);return
t.length<2?[]:t[t.length-2].children.map((function(e){return
e.value})).filter((function(t){return
t!==e}))}},{key:"pathFromRoot",value:function(e){return
ld(e,this._root).map((function(e){return
e.value}))}},{key:"root",get:function(){return
this._root.value}}]),e}();function ud(e,t){if(e===t.value)return t;var
n,r=_createForOfIteratorHelper(t.children);try{for(r.s();!(n=r.n()).done;){var
i=ud(e,n.value);if(i)return i}}catch(a){r.e(a)}finally{r.f()}return
null}function ld(e,t){if(e===t.value)return[t];var
n,r=_createForOfIteratorHelper(t.children);try{for(r.s();!(n=r.n()).done;){var
i=ld(e,n.value);if(i.length)return
i.unshift(t),i}}catch(a){r.e(a)}finally{r.f()}return[]}var
cd=function(){function
e(t,n){_classCallCheck(this,e),this.value=t,this.children=n}return
_createClass(e,[{key:"toString",value:function(){return"TreeNode(".concat(this.value,")")}}]),e}();function
hd(e){var t={};return e&&e.children.forEach((function(e){return
t[e.value.outlet]=e})),t}var fd=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,e)).snapshot=r,gd(_assertThisInitialized(i),e),i}return
_createClass(n,[{key:"toString",value:function(){return
this.snapshot.toString()}}]),n}(sd);function dd(e,t){var n=function(e,t){var
n=new yd([],{},{},"",{},"primary",t,null,e.root,-1,{});return new md("",new
cd(n,[]))}(e,t),r=new yh([new Bf("",{})]),i=new yh({}),a=new yh({}),o=new
yh({}),s=new yh(""),u=new vd(r,i,o,s,a,"primary",t,n.root);return
u.snapshot=n.root,new fd(new cd(u,[]),n)}var vd=function(){function
e(t,n,r,i,a,o,s,u){_classCallCheck(this,e),this.url=t,this.params=n,this.queryParams=r,this.fragment=i,this.data=a,this.outlet=o,this.component=s,this._futureSnapshot=u}return
_createClass(e,[{key:"toString",value:function(){return
this.snapshot?this.snapshot.toString():"Future(".concat(this._futureSnapshot,")")}},{key:"routeConfig",get:function(){return
this._futureSnapshot.routeConfig}},{key:"root",get:function(){return
this._routerState.root}},{key:"parent",get:function(){return
this._routerState.parent(this)}},{key:"firstChild",get:function(){return
this._routerState.firstChild(this)}},{key:"children",get:function(){return
this._routerState.children(this)}},{key:"pathFromRoot",get:function(){return
this._routerState.pathFromRoot(this)}},{key:"paramMap",get:function(){return
this._paramMap||(this._paramMap=this.params.pipe(L((function(e){return
Tf(e)})))),this._paramMap}},{key:"queryParamMap",get:function(){return
this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(L((function(e){return
Tf(e)})))),this._queryParamMap}}]),e}();function pd(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:"emptyOnly",n=e.pathFromRoot,r=0;if("always"!==t)for(r=n.length-1;r>=1;){var
i=n[r],a=n[r-1];if(i.routeConfig&&""===i.routeConfig.path)r--;else{if(a.component)break;r--}}return
function(e){return
e.reduce((function(e,t){return{params:Object.assign(Object.assign({},e.params),t.params),data:Object.assign(Object.assign({},e.data),t.data),resolve:Object.assign(Object.assign({},e.resolve),t._resolvedData)}}),{params:{},data:{},resolve:{}})}(n.slice(r))}var
yd=function(){function
e(t,n,r,i,a,o,s,u,l,c,h){_classCallCheck(this,e),this.url=t,this.params=n,this.queryParams=r,this.fragment=i,this.data=a,this.outlet=o,this.component=s,this.routeConfig=u,this._urlSegment=l,this._lastPathIndex=c,this._resolve=h}return
_createClass(e,[{key:"toString",value:function(){return"Route(url:'".concat(this.url.map((function(e){return
e.toString()})).join("/"),"',
path:'").concat(this.routeConfig?this.routeConfig.path:"","')")}},{key:"root",get:function(){return
this._routerState.root}},{key:"parent",get:function(){return
this._routerState.parent(this)}},{key:"firstChild",get:function(){return
this._routerState.firstChild(this)}},{key:"children",get:function(){return
this._routerState.children(this)}},{key:"pathFromRoot",get:function(){return
this._routerState.pathFromRoot(this)}},{key:"paramMap",get:function(){return
this._paramMap||(this._paramMap=Tf(this.params)),this._paramMap}},{key:"queryParamMap",get:function(){return
this._queryParamMap||(this._queryParamMap=Tf(this.queryParams)),this._queryParamMap}}]),e}(),md=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this,r)).url=e,gd(_assertThisInitialized(i),r),i}return
_createClass(n,[{key:"toString",value:function(){return
_d(this._root)}}]),n}(sd);function
gd(e,t){t.value._routerState=e,t.children.forEach((function(t){return
gd(e,t)}))}function _d(e){var t=e.children.length>0?" {
".concat(e.children.map(_d).join(", ")," }
"):"";return"".concat(e.value).concat(t)}function kd(e){if(e.snapshot){var
t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Df(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),Df(t.params,n.params)||e.params.next(n.params),function(e,t){if(e.length!==t.length)return!1;for(var
n=0;n<e.length;++n)if(!Df(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),Df(t.data,n.data)||e.data.next(n.data)}else
e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function
Cd(e,t){var n,r;return
Df(e.params,t.params)&&qf(n=e.url,r=t.url)&&n.every((function(e,t){return
Df(e.parameters,r[t].parameters)}))&&!(!e.parent!=!t.parent)&&(!e.parent||Cd(e.parent,t.parent))}function
wd(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function
bd(e,t,n,r,i){var a={};return
r&&Mf(r,(function(e,t){a[t]=Array.isArray(e)?e.map((function(e){return""+e})):""+e})),new
Hf(n.root===e?t:function e(t,n,r){var i={};return
Mf(t.children,(function(t,a){i[a]=t===n?r:e(t,n,r)})),new
zf(t.segments,i)}(n.root,e,t),a,i)}var Sd=function(){function
e(t,n,r){if(_classCallCheck(this,e),this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&wd(r[0]))throw
new Error("Root segment cannot have matrix parameters");var
i=r.find((function(e){return"object"==typeof
e&&null!=e&&e.outlets}));if(i&&i!==Ff(r))throw new Error("{outlets:{}} has to
be the last command")}return
_createClass(e,[{key:"toRoot",value:function(){return
this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}]),e}(),Ed=function
e(t,n,r){_classCallCheck(this,e),this.segmentGroup=t,this.processChildren=n,this.index=r};function
Td(e){return"object"==typeof
e&&null!=e&&e.outlets?e.outlets.primary:""+e}function xd(e,t,n){if(e||(e=new
zf([],{})),0===e.segments.length&&e.hasChildren())return Ad(e,t,n);var
r=function(e,t,n){for(var
r=0,i=t,a={match:!1,pathIndex:0,commandIndex:0};i<e.segments.length;){if(r>=n.length)return
a;var o=e.segments[i],s=Td(n[r]),u=r<n.length-1?n[r+1]:null;if(i>0&&void
0===s)break;if(s&&u&&"object"==typeof u&&void
0===u.outlets){if(!Pd(s,u,o))return a;r+=2}else{if(!Pd(s,{},o))return
a;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}(e,t,n),i=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){var
a=new zf(e.segments.slice(0,r.pathIndex),{});return a.children.primary=new
zf(e.segments.slice(r.pathIndex),e.children),Ad(a,0,i)}return
r.match&&0===i.length?new
zf(e.segments,{}):r.match&&!e.hasChildren()?Od(e,t,n):r.match?Ad(e,0,i):Od(e,t,n)}function
Ad(e,t,n){if(0===n.length)return new zf(e.segments,{});var
r=function(e){return"object"!=typeof e[0]||void
0===e[0].outlets?{primary:e}:e[0].outlets}(n),i={};return
Mf(r,(function(n,r){null!==n&&(i[r]=xd(e.children[r],t,n))})),Mf(e.children,(function(e,t){void
0===r[t]&&(i[t]=e)})),new zf(e.segments,i)}function Od(e,t,n){for(var
r=e.segments.slice(0,t),i=0;i<n.length;){if("object"==typeof n[i]&&void
0!==n[i].outlets){var a=Rd(n[i].outlets);return new
zf(r,a)}if(0===i&&wd(n[0]))r.push(new
Bf(e.segments[t].path,n[0])),i++;else{var
o=Td(n[i]),s=i<n.length-1?n[i+1]:null;o&&s&&wd(s)?(r.push(new
Bf(o,Id(s))),i+=2):(r.push(new Bf(o,{})),i++)}}return new zf(r,{})}function
Rd(e){var t={};return Mf(e,(function(e,n){null!==e&&(t[n]=Od(new
zf([],{}),0,e))})),t}function Id(e){var t={};return Mf(e,(function(e,n){return
t[n]=""+e})),t}function Pd(e,t,n){return e==n.path&&Df(t,n.parameters)}var
Nd=function(){function
e(t,n,r,i){_classCallCheck(this,e),this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=i}return
_createClass(e,[{key:"activate",value:function(e){var
t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),kd(this.futureState.root),this.activateChildRoutes(t,n,e)}},{key:"deactivateChildRoutes",value:function(e,t,n){var
r=this,i=hd(t);e.children.forEach((function(e){var
t=e.value.outlet;r.deactivateRoutes(e,i[t],n),delete
i[t]})),Mf(i,(function(e,t){r.deactivateRouteAndItsChildren(e,n)}))}},{key:"deactivateRoutes",value:function(e,t,n){var
r=e.value,i=t?t.value:null;if(r===i)if(r.component){var
a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(e,t,a.children)}else
this.deactivateChildRoutes(e,t,n);else
i&&this.deactivateRouteAndItsChildren(t,n)}},{key:"deactivateRouteAndItsChildren",value:function(e,t){this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}},{key:"detachAndStoreRouteSubtree",value:function(e,t){var
n=t.getContext(e.value.outlet);if(n&&n.outlet){var
r=n.outlet.detach(),i=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:r,route:e,contexts:i})}}},{key:"deactivateRouteAndOutlet",value:function(e,t){var
n=this,r=t.getContext(e.value.outlet);if(r){var
i=hd(e),a=e.value.component?r.children:t;Mf(i,(function(e,t){return
n.deactivateRouteAndItsChildren(e,a)})),r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated())}}},{key:"activateChildRoutes",value:function(e,t,n){var
r=this,i=hd(t);e.children.forEach((function(e){r.activateRoutes(e,i[e.value.outlet],n),r.forwardEvent(new
wf(e.value.snapshot))})),e.children.length&&this.forwardEvent(new
kf(e.value.snapshot))}},{key:"activateRoutes",value:function(e,t,n){var
r=e.value,i=t?t.value:null;if(kd(r),r===i)if(r.component){var
a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,a.children)}else
this.activateChildRoutes(e,t,n);else if(r.component){var
o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){var
s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),Dd(s.route)}else{var
u=function(e){for(var t=e.parent;t;t=t.parent){var
n=t.routeConfig;if(n&&n._loadedConfig)return
n._loadedConfig;if(n&&n.component)return null}return
null}(r.snapshot),l=u?u.module.componentFactoryResolver:null;o.attachRef=null,o.route=r,o.resolver=l,o.outlet&&o.outlet.activateWith(r,l),this.activateChildRoutes(e,null,o.children)}}else
this.activateChildRoutes(e,null,n)}}]),e}();function
Dd(e){kd(e.value),e.children.forEach(Dd)}function
Vd(e){return"function"==typeof e}function jd(e){return e instanceof Hf}var
Fd=function
e(t){_classCallCheck(this,e),this.segmentGroup=t||null},Md=function
e(t){_classCallCheck(this,e),this.urlTree=t};function Ld(e){return new
w((function(t){return t.error(new Fd(e))}))}function Ud(e){return new
w((function(t){return t.error(new Md(e))}))}function Hd(e){return new
w((function(t){return t.error(new Error("Only absolute redirects can have
named outlets. redirectTo: '".concat(e,"'")))}))}var zd=function(){function
e(t,n,r,i,a){_classCallCheck(this,e),this.configLoader=n,this.urlSerializer=r,this.urlTree=i,this.config=a,this.allowRedirects=!0,this.ngModule=t.get(Ye)}return
_createClass(e,[{key:"apply",value:function(){var e=this;return
this.expandSegmentGroup(this.ngModule,this.config,this.urlTree.root,"primary").pipe(L((function(t){return
e.createUrlTree(t,e.urlTree.queryParams,e.urlTree.fragment)}))).pipe(Fh((function(t){if(t
instanceof Md)return e.allowRedirects=!1,e.match(t.urlTree);if(t instanceof
Fd)throw e.noMatchError(t);throw t})))}},{key:"match",value:function(e){var
t=this;return
this.expandSegmentGroup(this.ngModule,this.config,e.root,"primary").pipe(L((function(n){return
t.createUrlTree(n,e.queryParams,e.fragment)}))).pipe(Fh((function(e){if(e
instanceof Fd)throw t.noMatchError(e);throw
e})))}},{key:"noMatchError",value:function(e){return new Error("Cannot match
any routes. URL Segment:
'".concat(e.segmentGroup,"'"))}},{key:"createUrlTree",value:function(e,t,n){var
r=e.segments.length>0?new zf([],{primary:e}):e;return new
Hf(r,t,n)}},{key:"expandSegmentGroup",value:function(e,t,n,r){return
0===n.segments.length&&n.hasChildren()?this.expandChildren(e,t,n).pipe(L((function(e){return
new
zf([],e)}))):this.expandSegment(e,n,t,n.segments,r,!0)}},{key:"expandChildren",value:function(e,t,n){var
r=this;return function(n,i){if(0===Object.keys(n).length)return Sc({});var
a=[],o=[],s={};return Mf(n,(function(n,i){var
u,l,c=(u=i,l=n,r.expandSegmentGroup(e,t,l,u)).pipe(L((function(e){return
s[i]=e})));"primary"===i?a.push(c):o.push(c)})),Sc.apply(null,a.concat(o)).pipe(Sh(),jh(),L((function(){return
s})))}(n.children)}},{key:"expandSegment",value:function(e,t,n,r,i,a){var
o=this;return Sc.apply(void
0,_toConsumableArray(n)).pipe(L((function(s){return
o.expandSegmentAgainstRoute(e,t,n,s,r,i,a).pipe(Fh((function(e){if(e
instanceof Fd)return Sc(null);throw
e})))})),Sh(),Bh((function(e){return!!e})),Fh((function(e,n){if(e instanceof
mh||"EmptyError"===e.name){if(o.noLeftoversInUrl(t,r,i))return Sc(new
zf([],{}));throw new Fd(t)}throw
e})))}},{key:"noLeftoversInUrl",value:function(e,t,n){return
0===t.length&&!e.children[n]}},{key:"expandSegmentAgainstRoute",value:function(e,t,n,r,i,a,o){return
Gd(r)!==a?Ld(t):void
0===r.redirectTo?this.matchSegmentAgainstRoute(e,t,r,i):o&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,t,n,r,i,a):Ld(t)}},{key:"expandSegmentAgainstRouteUsingRedirect",value:function(e,t,n,r,i,a){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,n,r,a):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,r,i,a)}},{key:"expandWildCardWithParamsAgainstRouteUsingRedirect",value:function(e,t,n,r){var
i=this,a=this.applyRedirectCommands([],n.redirectTo,{});return
n.redirectTo.startsWith("/")?Ud(a):this.lineralizeSegments(n,a).pipe(q((function(n){var
a=new zf(n,{});return
i.expandSegment(e,a,t,n,r,!1)})))}},{key:"expandRegularSegmentAgainstRouteUsingRedirect",value:function(e,t,n,r,i,a){var
o=this,s=Bd(t,r,i),u=s.matched,l=s.consumedSegments,c=s.lastChild,h=s.positionalParamSegments;if(!u)return
Ld(t);var f=this.applyRedirectCommands(l,r.redirectTo,h);return
r.redirectTo.startsWith("/")?Ud(f):this.lineralizeSegments(r,f).pipe(q((function(r){return
o.expandSegment(e,t,n,r.concat(i.slice(c)),a,!1)})))}},{key:"matchSegmentAgainstRoute",value:function(e,t,n,r){var
i=this;if("**"===n.path)return
n.loadChildren?this.configLoader.load(e.injector,n).pipe(L((function(e){return
n._loadedConfig=e,new zf(r,{})}))):Sc(new zf(r,{}));var
a=Bd(t,n,r),o=a.matched,s=a.consumedSegments,u=a.lastChild;if(!o)return
Ld(t);var l=r.slice(u);return
this.getChildConfig(e,n,r).pipe(q((function(e){var
n=e.module,r=e.routes,a=function(e,t,n,r){return
n.length>0&&function(e,t,n){return n.some((function(n){return
Wd(e,t,n)&&"primary"!==Gd(n)}))}(e,n,r)?{segmentGroup:qd(new
zf(t,function(e,t){var n={};n.primary=t;var
r,i=_createForOfIteratorHelper(e);try{for(i.s();!(r=i.n()).done;){var
a=r.value;""===a.path&&"primary"!==Gd(a)&&(n[Gd(a)]=new
zf([],{}))}}catch(o){i.e(o)}finally{i.f()}return n}(r,new
zf(n,e.children)))),slicedSegments:[]}:0===n.length&&function(e,t,n){return
n.some((function(n){return Wd(e,t,n)}))}(e,n,r)?{segmentGroup:qd(new
zf(e.segments,function(e,t,n,r){var
i,a={},o=_createForOfIteratorHelper(n);try{for(o.s();!(i=o.n()).done;){var
s=i.value;Wd(e,t,s)&&!r[Gd(s)]&&(a[Gd(s)]=new
zf([],{}))}}catch(u){o.e(u)}finally{o.f()}return
Object.assign(Object.assign({},r),a)}(e,n,r,e.children))),slicedSegments:n}:{segmentGroup:e,slicedSegments:n}}(t,s,l,r),o=a.segmentGroup,u=a.slicedSegments;return
0===u.length&&o.hasChildren()?i.expandChildren(n,r,o).pipe(L((function(e){return
new zf(s,e)}))):0===r.length&&0===u.length?Sc(new
zf(s,{})):i.expandSegment(n,o,r,u,"primary",!0).pipe(L((function(e){return new
zf(s.concat(e.segments),e.children)})))})))}},{key:"getChildConfig",value:function(e,t,n){var
r=this;return t.children?Sc(new Of(t.children,e)):t.loadChildren?void
0!==t._loadedConfig?Sc(t._loadedConfig):function(e,t,n){var
r,i=t.canLoad;return i&&0!==i.length?B(i).pipe(L((function(r){var
i,a=e.get(r);if(function(e){return
e&&Vd(e.canLoad)}(a))i=a.canLoad(t,n);else{if(!Vd(a))throw new Error("Invalid
CanLoad guard");i=a(t,n)}return
Lf(i)}))).pipe(Sh(),(r=function(e){return!0===e},function(e){return e.lift(new
qh(r,void 0,e))})):Sc(!0)}(e.injector,t,n).pipe(q((function(n){return
n?r.configLoader.load(e.injector,t).pipe(L((function(e){return
t._loadedConfig=e,e}))):function(e){return new w((function(t){return
t.error(xf("Cannot load children because the guard of the route \"path:
'".concat(e.path,"'\" returned false")))}))}(t)}))):Sc(new
Of([],e))}},{key:"lineralizeSegments",value:function(e,t){for(var
n=[],r=t.root;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return
Sc(n);if(r.numberOfChildren>1||!r.children.primary)return
Hd(e.redirectTo);r=r.children.primary}}},{key:"applyRedirectCommands",value:function(e,t,n){return
this.applyRedirectCreatreUrlTree(t,this.urlSerializer.parse(t),e,n)}},{key:"applyRedirectCreatreUrlTree",value:function(e,t,n,r){var
i=this.createSegmentGroup(e,t.root,n,r);return new
Hf(i,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}},{key:"createQueryParams",value:function(e,t){var
n={};return Mf(e,(function(e,r){if("string"==typeof e&&e.startsWith(":")){var
i=e.substring(1);n[r]=t[i]}else
n[r]=e})),n}},{key:"createSegmentGroup",value:function(e,t,n,r){var
i=this,a=this.createSegments(e,t.segments,n,r),o={};return
Mf(t.children,(function(t,a){o[a]=i.createSegmentGroup(e,t,n,r)})),new
zf(a,o)}},{key:"createSegments",value:function(e,t,n,r){var i=this;return
t.map((function(t){return
t.path.startsWith(":")?i.findPosParam(e,t,r):i.findOrReturn(t,n)}))}},{key:"findPosParam",value:function(e,t,n){var
r=n[t.path.substring(1)];if(!r)throw new Error("Cannot redirect to
'".concat(e,"'. Cannot find '").concat(t.path,"'."));return
r}},{key:"findOrReturn",value:function(e,t){var
n,r=0,i=_createForOfIteratorHelper(t);try{for(i.s();!(n=i.n()).done;){var
a=n.value;if(a.path===e.path)return
t.splice(r),a;r++}}catch(o){i.e(o)}finally{i.f()}return e}}]),e}();function
Bd(e,t,n){if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}:{matched:!0,consumedSegments:[],lastChild:0,positionalParamSegments:{}};var
r=(t.matcher||Af)(n,e,t);return
r?{matched:!0,consumedSegments:r.consumed,lastChild:r.consumed.length,positionalParamSegments:r.posParams}:{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}}function
qd(e){if(1===e.numberOfChildren&&e.children.primary){var
t=e.children.primary;return new
zf(e.segments.concat(t.segments),t.children)}return e}function
Wd(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void
0!==n.redirectTo}function Gd(e){return e.outlet||"primary"}var Qd=function
e(t){_classCallCheck(this,e),this.path=t,this.route=this.path[this.path.length-1]},Zd=function
e(t,n){_classCallCheck(this,e),this.component=t,this.route=n};function
Kd(e,t,n){var r=function(e){if(!e)return null;for(var
t=e.parent;t;t=t.parent){var n=t.routeConfig;if(n&&n._loadedConfig)return
n._loadedConfig}return null}(t);return(r?r.module.injector:n).get(e)}function
$d(e,t,n){var
r=hd(e),i=e.value;Mf(r,(function(e,r){$d(e,i.component?t?t.children.getContext(r):null:t,n)})),n.canDeactivateChecks.push(new
Zd(i.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,i))}var
Jd=Symbol("INITIAL_VALUE");function Xd(){return
Gh((function(e){return(function(){for(var e=arguments.length,t=new
Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=null,i=null;return
R(t[t.length-1])&&(i=t.pop()),"function"==typeof
t[t.length-1]&&(r=t.pop()),1===t.length&&u(t[0])&&(t=t[0]),Z(t,i).lift(new
_h(r))}).apply(void 0,_toConsumableArray(e.map((function(e){return
e.pipe(Uh(1),function(){for(var e=arguments.length,t=new
Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[t.length-1];return
R(r)?(t.pop(),function(e){return Kh(t,e,r)}):function(e){return
Kh(t,e)}}(Jd))})))).pipe($h((function(e,t){var n=!1;return
t.reduce((function(e,r,i){if(e!==Jd)return
e;if(r===Jd&&(n=!0),!n){if(!1===r)return r;if(i===t.length-1||jd(r))return
r}return e}),e)}),Jd),Tc((function(e){return e!==Jd})),L((function(e){return
jd(e)?e:!0===e})),Uh(1))}))}function Yd(e,t){return null!==e&&t&&t(new
Cf(e)),Sc(!0)}function ev(e,t){return null!==e&&t&&t(new
_f(e)),Sc(!0)}function tv(e,t,n){var
r=t.routeConfig?t.routeConfig.canActivate:null;return
r&&0!==r.length?Sc(r.map((function(r){return bh((function(){var
i,a=Kd(r,t,n);if(function(e){return
e&&Vd(e.canActivate)}(a))i=Lf(a.canActivate(t,e));else{if(!Vd(a))throw new
Error("Invalid CanActivate guard");i=Lf(a(t,e))}return
i.pipe(Bh())}))}))).pipe(Xd()):Sc(!0)}function nv(e,t,n){var
r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map((function(e){return
function(e){var t=e.routeConfig?e.routeConfig.canActivateChild:null;return
t&&0!==t.length?{node:e,guards:t}:null}(e)})).filter((function(e){return
null!==e})).map((function(t){return bh((function(){return
Sc(t.guards.map((function(i){var a,o=Kd(i,t.node,n);if(function(e){return
e&&Vd(e.canActivateChild)}(o))a=Lf(o.canActivateChild(r,e));else{if(!Vd(o))throw
new Error("Invalid CanActivateChild guard");a=Lf(o(r,e))}return
a.pipe(Bh())}))).pipe(Xd())}))}));return Sc(i).pipe(Xd())}var rv=function
e(){_classCallCheck(this,e)},iv=function(){function
e(t,n,r,i,a,o){_classCallCheck(this,e),this.rootComponentType=t,this.config=n,this.urlTree=r,this.url=i,this.paramsInheritanceStrategy=a,this.relativeLinkResolution=o}return
_createClass(e,[{key:"recognize",value:function(){try{var
e=sv(this.urlTree.root,[],[],this.config,this.relativeLinkResolution).segmentGroup,t=this.processSegmentGroup(this.config,e,"primary"),n=new
yd([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},"primary",this.rootComponentType,null,this.urlTree.root,-1,{}),r=new
cd(n,t),i=new md(this.url,r);return
this.inheritParamsAndData(i._root),Sc(i)}catch(a){return new
w((function(e){return
e.error(a)}))}}},{key:"inheritParamsAndData",value:function(e){var
t=this,n=e.value,r=pd(n,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),e.children.forEach((function(e){return
t.inheritParamsAndData(e)}))}},{key:"processSegmentGroup",value:function(e,t,n){return
0===t.segments.length&&t.hasChildren()?this.processChildren(e,t):this.processSegment(e,t,t.segments,n)}},{key:"processChildren",value:function(e,t){var
n,r=this,i=Wf(t,(function(t,n){return r.processSegmentGroup(e,t,n)}));return
n={},i.forEach((function(e){var t=n[e.value.outlet];if(t){var
r=t.url.map((function(e){return
e.toString()})).join("/"),i=e.value.url.map((function(e){return
e.toString()})).join("/");throw new Error("Two segments cannot have the same
outlet name: '".concat(r,"' and
'").concat(i,"'."))}n[e.value.outlet]=e.value})),i.sort((function(e,t){return"primary"===e.value.outlet?-1:"primary"===t.value.outlet?1:e.value.outlet.localeCompare(t.value.outlet)})),i}},{key:"processSegment",value:function(e,t,n,r){var
i,a=_createForOfIteratorHelper(e);try{for(a.s();!(i=a.n()).done;){var
o=i.value;try{return this.processSegmentAgainstRoute(o,t,n,r)}catch(s){if(!(s
instanceof rv))throw
s}}}catch(u){a.e(u)}finally{a.f()}if(this.noLeftoversInUrl(t,n,r))return[];throw
new rv}},{key:"noLeftoversInUrl",value:function(e,t,n){return
0===t.length&&!e.children[n]}},{key:"processSegmentAgainstRoute",value:function(e,t,n,r){if(e.redirectTo)throw
new rv;if((e.outlet||"primary")!==r)throw new rv;var
i,a=[],o=[];if("**"===e.path){var s=n.length>0?Ff(n).parameters:{};i=new
yd(n,s,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,cv(e),r,e.component,e,av(t),ov(t)+n.length,hv(e))}else{var
u=function(e,t,n){if(""===t.path){if("full"===t.pathMatch&&(e.hasChildren()||n.length>0))throw
new rv;return{consumedSegments:[],lastChild:0,parameters:{}}}var
r=(t.matcher||Af)(n,e,t);if(!r)throw new rv;var
i={};Mf(r.posParams,(function(e,t){i[t]=e.path}));var
a=r.consumed.length>0?Object.assign(Object.assign({},i),r.consumed[r.consumed.length-1].parameters):i;return{consumedSegments:r.consumed,lastChild:r.consumed.length,parameters:a}}(t,e,n);a=u.consumedSegments,o=n.slice(u.lastChild),i=new
yd(a,u.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,cv(e),r,e.component,e,av(t),ov(t)+a.length,hv(e))}var
l=function(e){return
e.children?e.children:e.loadChildren?e._loadedConfig.routes:[]}(e),c=sv(t,a,o,l,this.relativeLinkResolution),h=c.segmentGroup,f=c.slicedSegments;if(0===f.length&&h.hasChildren()){var
d=this.processChildren(l,h);return[new
cd(i,d)]}if(0===l.length&&0===f.length)return[new cd(i,[])];var
v=this.processSegment(l,h,f,"primary");return[new cd(i,v)]}}]),e}();function
av(e){for(var t=e;t._sourceSegment;)t=t._sourceSegment;return t}function
ov(e){for(var
t=e,n=t._segmentIndexShift?t._segmentIndexShift:0;t._sourceSegment;)n+=(t=t._sourceSegment)._segmentIndexShift?t._segmentIndexShift:0;return
n-1}function sv(e,t,n,r,i){if(n.length>0&&function(e,t,n){return
n.some((function(n){return uv(e,t,n)&&"primary"!==lv(n)}))}(e,n,r)){var a=new
zf(t,function(e,t,n,r){var
i={};i.primary=r,r._sourceSegment=e,r._segmentIndexShift=t.length;var
a,o=_createForOfIteratorHelper(n);try{for(o.s();!(a=o.n()).done;){var
s=a.value;if(""===s.path&&"primary"!==lv(s)){var u=new
zf([],{});u._sourceSegment=e,u._segmentIndexShift=t.length,i[lv(s)]=u}}}catch(l){o.e(l)}finally{o.f()}return
i}(e,t,r,new zf(n,e.children)));return
a._sourceSegment=e,a._segmentIndexShift=t.length,{segmentGroup:a,slicedSegments:[]}}if(0===n.length&&function(e,t,n){return
n.some((function(n){return uv(e,t,n)}))}(e,n,r)){var o=new
zf(e.segments,function(e,t,n,r,i,a){var
o,s={},u=_createForOfIteratorHelper(r);try{for(u.s();!(o=u.n()).done;){var
l=o.value;if(uv(e,n,l)&&!i[lv(l)]){var c=new
zf([],{});c._sourceSegment=e,c._segmentIndexShift="legacy"===a?e.segments.length:t.length,s[lv(l)]=c}}}catch(h){u.e(h)}finally{u.f()}return
Object.assign(Object.assign({},i),s)}(e,t,n,r,e.children,i));return
o._sourceSegment=e,o._segmentIndexShift=t.length,{segmentGroup:o,slicedSegments:n}}var
s=new zf(e.segments,e.children);return
s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:n}}function
uv(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void
0===n.redirectTo}function lv(e){return e.outlet||"primary"}function
cv(e){return e.data||{}}function hv(e){return e.resolve||{}}function
fv(e,t,n,r){var i=Kd(e,t,r);return
Lf(i.resolve?i.resolve(t,n):i(t,n))}function dv(e){return function(t){return
t.pipe(Gh((function(t){var n=e(t);return n?B(n).pipe(L((function(){return
t}))):B([t])})))}}var vv=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"shouldDetach",value:function(e){return!1}},{key:"store",value:function(e,t){}},{key:"shouldAttach",value:function(e){return!1}},{key:"retrieve",value:function(e){return
null}},{key:"shouldReuseRoute",value:function(e,t){return
e.routeConfig===t.routeConfig}}]),e}(),pv=new
Ue("ROUTES"),yv=function(){function
e(t,n,r,i){_classCallCheck(this,e),this.loader=t,this.compiler=n,this.onLoadStartListener=r,this.onLoadEndListener=i}return
_createClass(e,[{key:"load",value:function(e,t){var n=this;return
this.onLoadStartListener&&this.onLoadStartListener(t),this.loadModuleFactory(t.loadChildren).pipe(L((function(r){n.onLoadEndListener&&n.onLoadEndListener(t);var
i=r.create(e);return new
Of(jf(i.injector.get(pv)).map(Nf),i)})))}},{key:"loadModuleFactory",value:function(e){var
t=this;return"string"==typeof
e?B(this.loader.load(e)):Lf(e()).pipe(q((function(e){return e instanceof
et?Sc(e):B(t.compiler.compileModuleAsync(e))})))}}]),e}(),mv=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"shouldProcessUrl",value:function(e){return!0}},{key:"extract",value:function(e){return
e}},{key:"merge",value:function(e,t){return e}}]),e}();function gv(e){throw
e}function _v(e,t,n){return t.parse("/")}function kv(e,t){return Sc(null)}var
Cv,wv,bv,Sv,Ev=((Cv=function(){function e(t,n,r,i,a,o,s,u){var
l=this;_classCallCheck(this,e),this.rootComponentType=t,this.urlSerializer=n,this.rootContexts=r,this.location=i,this.config=u,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new
A,this.errorHandler=gv,this.malformedUriErrorHandler=_v,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:kv,afterPreactivation:kv},this.urlHandlingStrategy=new
mv,this.routeReuseStrategy=new
vv,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="legacy",this.ngModule=a.get(Ye),this.console=a.get(lu);var
c=a.get(bu);this.isNgZoneEnabled=c instanceof
bu,this.resetConfig(u),this.currentUrlTree=new Hf(new
zf([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new
yv(o,s,(function(e){return l.triggerEvent(new mf(e))}),(function(e){return
l.triggerEvent(new
gf(e))})),this.routerState=dd(this.currentUrlTree,this.rootComponentType),this.transitions=new
yh({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}return
_createClass(e,[{key:"setupNavigations",value:function(e){var
t=this,n=this.events;return e.pipe(Tc((function(e){return
0!==e.id})),L((function(e){return
Object.assign(Object.assign({},e),{extractedUrl:t.urlHandlingStrategy.extract(e.rawUrl)})})),Gh((function(e){var
r,i,a,o,s=!1,u=!1;return
Sc(e).pipe(ef((function(e){t.currentNavigation={id:e.id,initialUrl:e.currentRawUrl,extractedUrl:e.extractedUrl,trigger:e.source,extras:e.extras,previousNavigation:t.lastSuccessfulNavigation?Object.assign(Object.assign({},t.lastSuccessfulNavigation),{previousNavigation:null}):null}})),Gh((function(e){var
r,i,a,o,s=!t.navigated||e.extractedUrl.toString()!==t.browserUrlTree.toString();if(("reload"===t.onSameUrlNavigation||s)&&t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl))return
Sc(e).pipe(Gh((function(e){var r=t.transitions.getValue();return n.next(new
uf(e.id,t.serializeUrl(e.extractedUrl),e.source,e.restoredState)),r!==t.transitions.getValue()?Ch:[e]})),Gh((function(e){return
Promise.resolve(e)})),(r=t.ngModule.injector,i=t.configLoader,a=t.urlSerializer,o=t.config,function(e){return
e.pipe(Gh((function(e){return function(e,t,n,r,i){return new
zd(e,t,n,r,i).apply()}(r,i,a,e.extractedUrl,o).pipe(L((function(t){return
Object.assign(Object.assign({},e),{urlAfterRedirects:t})})))})))}),ef((function(e){t.currentNavigation=Object.assign(Object.assign({},t.currentNavigation),{finalUrl:e.urlAfterRedirects})})),function(e,n,r,i,a){return
function(r){return r.pipe(q((function(r){return function(e,t,n,r){var
i=arguments.length>4&&void
0!==arguments[4]?arguments[4]:"emptyOnly",a=arguments.length>5&&void
0!==arguments[5]?arguments[5]:"legacy";return new
iv(e,t,n,r,i,a).recognize()}(e,n,r.urlAfterRedirects,(o=r.urlAfterRedirects,t.serializeUrl(o)),i,a).pipe(L((function(e){return
Object.assign(Object.assign({},r),{targetSnapshot:e})})));var
o})))}}(t.rootComponentType,t.config,0,t.paramsInheritanceStrategy,t.relativeLinkResolution),ef((function(e){"eager"===t.urlUpdateStrategy&&(e.extras.skipLocationChange||t.setBrowserUrl(e.urlAfterRedirects,!!e.extras.replaceUrl,e.id,e.extras.state),t.browserUrlTree=e.urlAfterRedirects)})),ef((function(e){var
r=new
ff(e.id,t.serializeUrl(e.extractedUrl),t.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);n.next(r)})));if(s&&t.rawUrlTree&&t.urlHandlingStrategy.shouldProcessUrl(t.rawUrlTree)){var
u=e.id,l=e.extractedUrl,c=e.source,h=e.restoredState,f=e.extras,d=new
uf(u,t.serializeUrl(l),c,h);n.next(d);var
v=dd(l,t.rootComponentType).snapshot;return
Sc(Object.assign(Object.assign({},e),{targetSnapshot:v,urlAfterRedirects:l,extras:Object.assign(Object.assign({},f),{skipLocationChange:!1,replaceUrl:!1})}))}return
t.rawUrlTree=e.rawUrl,t.browserUrlTree=e.urlAfterRedirects,e.resolve(null),Ch})),dv((function(e){var
n=e.targetSnapshot,r=e.id,i=e.extractedUrl,a=e.rawUrl,o=e.extras,s=o.skipLocationChange,u=o.replaceUrl;return
t.hooks.beforePreactivation(n,{navigationId:r,appliedUrlTree:i,rawUrlTree:a,skipLocationChange:!!s,replaceUrl:!!u})})),ef((function(e){var
n=new
df(e.id,t.serializeUrl(e.extractedUrl),t.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);t.triggerEvent(n)})),L((function(e){return
Object.assign(Object.assign({},e),{guards:(n=e.targetSnapshot,r=e.currentSnapshot,i=t.rootContexts,a=n._root,function
e(t,n,r,i){var a=arguments.length>4&&void
0!==arguments[4]?arguments[4]:{canDeactivateChecks:[],canActivateChecks:[]},o=hd(n);return
t.children.forEach((function(t){!function(t,n,r,i){var
a=arguments.length>4&&void
0!==arguments[4]?arguments[4]:{canDeactivateChecks:[],canActivateChecks:[]},o=t.value,s=n?n.value:null,u=r?r.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){var
l=function(e,t,n){if("function"==typeof n)return
n(e,t);switch(n){case"pathParamsChange":return!qf(e.url,t.url);case"pathParamsOrQueryParamsChange":return!qf(e.url,t.url)||!Df(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Cd(e,t)||!Df(e.queryParams,t.queryParams);case"paramsChange":default:return!Cd(e,t)}}(s,o,o.routeConfig.runGuardsAndResolvers);l?a.canActivateChecks.push(new
Qd(i)):(o.data=s.data,o._resolvedData=s._resolvedData),e(t,n,o.component?u?u.children:null:r,i,a),l&&a.canDeactivateChecks.push(new
Zd(u&&u.outlet&&u.outlet.component||null,s))}else
s&&$d(n,u,a),a.canActivateChecks.push(new
Qd(i)),e(t,null,o.component?u?u.children:null:r,i,a)}(t,o[t.value.outlet],r,i.concat([t.value]),a),delete
o[t.value.outlet]})),Mf(o,(function(e,t){return
$d(e,r.getContext(t),a)})),a}(a,r?r._root:null,i,[a.value]))});var
n,r,i,a})),function(e,t){return function(n){return n.pipe(q((function(n){var
r=n.targetSnapshot,i=n.currentSnapshot,a=n.guards,o=a.canActivateChecks,s=a.canDeactivateChecks;return
0===s.length&&0===o.length?Sc(Object.assign(Object.assign({},n),{guardsResult:!0})):function(e,t,n,r){return
B(e).pipe(q((function(e){return function(e,t,n,r,i){var
a=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return
a&&0!==a.length?Sc(a.map((function(a){var o,s=Kd(a,t,i);if(function(e){return
e&&Vd(e.canDeactivate)}(s))o=Lf(s.canDeactivate(e,t,n,r));else{if(!Vd(s))throw
new Error("Invalid CanDeactivate guard");o=Lf(s(e,t,n,r))}return
o.pipe(Bh())}))).pipe(Xd()):Sc(!0)}(e.component,e.route,n,t,r)})),Bh((function(e){return!0!==e}),!0))}(s,r,i,e).pipe(q((function(n){return
n&&"boolean"==typeof n?function(e,t,n,r){return
B(t).pipe(Ec((function(t){return
B([ev(t.route.parent,r),Yd(t.route,r),nv(e,t.path,n),tv(e,t.route,n)]).pipe(Sh(),Bh((function(e){return!0!==e}),!0))})),Bh((function(e){return!0!==e}),!0))}(r,o,e,t):Sc(n)})),L((function(e){return
Object.assign(Object.assign({},n),{guardsResult:e})})))})))}}(t.ngModule.injector,(function(e){return
t.triggerEvent(e)})),ef((function(e){if(jd(e.guardsResult)){var
n=xf('Redirecting to "'.concat(t.serializeUrl(e.guardsResult),'"'));throw
n.url=e.guardsResult,n}})),ef((function(e){var n=new
vf(e.id,t.serializeUrl(e.extractedUrl),t.serializeUrl(e.urlAfterRedirects),e.targetSnapshot,!!e.guardsResult);t.triggerEvent(n)})),Tc((function(e){if(!e.guardsResult){t.resetUrlToCurrentUrlTree();var
r=new cf(e.id,t.serializeUrl(e.extractedUrl),"");return
n.next(r),e.resolve(!1),!1}return!0})),dv((function(e){if(e.guards.canActivateChecks.length)return
Sc(e).pipe(ef((function(e){var n=new
pf(e.id,t.serializeUrl(e.extractedUrl),t.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);t.triggerEvent(n)})),(n=t.paramsInheritanceStrategy,r=t.ngModule.injector,function(e){return
e.pipe(q((function(e){var
t=e.targetSnapshot,i=e.guards.canActivateChecks;return
i.length?B(i).pipe(Ec((function(e){return function(e,t,n,r){return
function(e,t,n,r){var i=Object.keys(e);if(0===i.length)return
Sc({});if(1===i.length){var a=i[0];return
fv(e[a],t,n,r).pipe(L((function(e){return _defineProperty({},a,e)})))}var
o={};return B(i).pipe(q((function(i){return
fv(e[i],t,n,r).pipe(L((function(e){return
o[i]=e,e})))}))).pipe(jh(),L((function(){return
o})))}(e._resolve,e,t,r).pipe(L((function(t){return
e._resolvedData=t,e.data=Object.assign(Object.assign({},e.data),pd(e,n).resolve),null})))}(e.route,t,n,r)})),function(e,t){return
arguments.length>=2?function(n){return
_($h(e,t),Th(1),Nh(t))(n)}:function(t){return _($h((function(t,n,r){return
e(t,n,r+1)})),Th(1))(t)}}((function(e,t){return e})),L((function(t){return
e}))):Sc(e)})))}),ef((function(e){var n=new
yf(e.id,t.serializeUrl(e.extractedUrl),t.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);t.triggerEvent(n)})));var
n,r})),dv((function(e){var
n=e.targetSnapshot,r=e.id,i=e.extractedUrl,a=e.rawUrl,o=e.extras,s=o.skipLocationChange,u=o.replaceUrl;return
t.hooks.afterPreactivation(n,{navigationId:r,appliedUrlTree:i,rawUrlTree:a,skipLocationChange:!!s,replaceUrl:!!u})})),L((function(e){var
n=function(e,t,n){var r=function
e(t,n,r){if(r&&t.shouldReuseRoute(n.value,r.value.snapshot)){var
i=r.value;i._futureSnapshot=n.value;var a=function(t,n,r){return
n.children.map((function(n){var
i,a=_createForOfIteratorHelper(r.children);try{for(a.s();!(i=a.n()).done;){var
o=i.value;if(t.shouldReuseRoute(o.value.snapshot,n.value))return
e(t,n,o)}}catch(s){a.e(s)}finally{a.f()}return e(t,n)}))}(t,n,r);return new
cd(i,a)}var o=t.retrieve(n.value);if(o){var s=o.route;return function
e(t,n){if(t.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot
reattach ActivatedRouteSnapshot created from a different
route");if(t.children.length!==n.children.length)throw new Error("Cannot
reattach ActivatedRouteSnapshot with a different number of
children");n.value._futureSnapshot=t.value;for(var
r=0;r<t.children.length;++r)e(t.children[r],n.children[r])}(n,s),s}var u,l=new
vd(new yh((u=n.value).url),new yh(u.params),new yh(u.queryParams),new
yh(u.fragment),new
yh(u.data),u.outlet,u.component,u),c=n.children.map((function(n){return
e(t,n)}));return new cd(l,c)}(e,t._root,n?n._root:void 0);return new
fd(r,t)}(t.routeReuseStrategy,e.targetSnapshot,e.currentRouterState);return
Object.assign(Object.assign({},e),{targetRouterState:n})})),ef((function(e){t.currentUrlTree=e.urlAfterRedirects,t.rawUrlTree=t.urlHandlingStrategy.merge(t.currentUrlTree,e.rawUrl),t.routerState=e.targetRouterState,"deferred"===t.urlUpdateStrategy&&(e.extras.skipLocationChange||t.setBrowserUrl(t.rawUrlTree,!!e.extras.replaceUrl,e.id,e.extras.state),t.browserUrlTree=e.urlAfterRedirects)})),(i=t.rootContexts,a=t.routeReuseStrategy,o=function(e){return
t.triggerEvent(e)},L((function(e){return new
Nd(a,e.targetRouterState,e.currentRouterState,o).activate(i),e}))),ef({next:function(){s=!0},complete:function(){s=!0}}),(r=function(){if(!s&&!u){t.resetUrlToCurrentUrlTree();var
r=new cf(e.id,t.serializeUrl(e.extractedUrl),"Navigation ID ".concat(e.id," is
not equal to the current navigation id
").concat(t.navigationId));n.next(r),e.resolve(!1)}t.currentNavigation=null},function(e){return
e.lift(new
af(r))}),Fh((function(r){if(u=!0,(s=r)&&s.ngNavigationCancelingError){var
i=jd(r.url);i||(t.navigated=!0,t.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl));var
a=new
cf(e.id,t.serializeUrl(e.extractedUrl),r.message);n.next(a),i?setTimeout((function(){var
n=t.urlHandlingStrategy.merge(r.url,t.rawUrlTree);return
t.scheduleNavigation(n,"imperative",null,{skipLocationChange:e.extras.skipLocationChange,replaceUrl:"eager"===t.urlUpdateStrategy},{resolve:e.resolve,reject:e.reject,promise:e.promise})}),0):e.resolve(!1)}else{t.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl);var
o=new
hf(e.id,t.serializeUrl(e.extractedUrl),r);n.next(o);try{e.resolve(t.errorHandler(r))}catch(l){e.reject(l)}}var
s;return
Ch})))})))}},{key:"resetRootComponentType",value:function(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}},{key:"getTransition",value:function(){var
e=this.transitions.value;return
e.urlAfterRedirects=this.browserUrlTree,e}},{key:"setTransition",value:function(e){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),e))}},{key:"initialNavigation",value:function(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}},{key:"setUpLocationChangeListener",value:function(){var
e=this;this.locationSubscription||(this.locationSubscription=this.location.subscribe((function(t){var
n=e.parseUrl(t.url),r="popstate"===t.type?"popstate":"hashchange",i=t.state&&t.state.navigationId?t.state:null;setTimeout((function(){e.scheduleNavigation(n,r,i,{replaceUrl:!0})}),0)})))}},{key:"getCurrentNavigation",value:function(){return
this.currentNavigation}},{key:"triggerEvent",value:function(e){this.events.next(e)}},{key:"resetConfig",value:function(e){Rf(e),this.config=e.map(Nf),this.navigated=!1,this.lastSuccessfulId=-1}},{key:"ngOnDestroy",value:function(){this.dispose()}},{key:"dispose",value:function(){this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=null)}},{key:"createUrlTree",value:function(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{},n=t.relativeTo,r=t.queryParams,i=t.fragment,a=t.preserveQueryParams,o=t.queryParamsHandling,s=t.preserveFragment;dr()&&a&&console&&console.warn&&console.warn("preserveQueryParams
is deprecated, use queryParamsHandling instead.");var
u=n||this.routerState.root,l=s?this.currentUrlTree.fragment:i,c=null;if(o)switch(o){case"merge":c=Object.assign(Object.assign({},this.currentUrlTree.queryParams),r);break;case"preserve":c=this.currentUrlTree.queryParams;break;default:c=r||null}else
c=a?this.currentUrlTree.queryParams:r||null;return
null!==c&&(c=this.removeEmptyProps(c)),function(e,t,n,r,i){if(0===n.length)return
bd(t.root,t.root,t,r,i);var a=function(e){if("string"==typeof
e[0]&&1===e.length&&"/"===e[0])return new Sd(!0,0,e);var
t=0,n=!1,r=e.reduce((function(e,r,i){if("object"==typeof
r&&null!=r){if(r.outlets){var a={};return
Mf(r.outlets,(function(e,t){a[t]="string"==typeof
e?e.split("/"):e})),[].concat(_toConsumableArray(e),[{outlets:a}])}if(r.segmentPath)return[].concat(_toConsumableArray(e),[r.segmentPath])}return"string"!=typeof
r?[].concat(_toConsumableArray(e),[r]):0===i?(r.split("/").forEach((function(r,i){0==i&&"."===r||(0==i&&""===r?n=!0:".."===r?t++:""!=r&&e.push(r))})),e):[].concat(_toConsumableArray(e),[r])}),[]);return
new Sd(n,t,r)}(n);if(a.toRoot())return bd(t.root,new zf([],{}),t,r,i);var
o=function(e,t,n){if(e.isAbsolute)return new
Ed(t.root,!0,0);if(-1===n.snapshot._lastPathIndex)return new
Ed(n.snapshot._urlSegment,!0,0);var r=wd(e.commands[0])?0:1;return
function(e,t,n){for(var r=e,i=t,a=n;a>i;){if(a-=i,!(r=r.parent))throw new
Error("Invalid number of '../'");i=r.segments.length}return new
Ed(r,!1,i-a)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,e.numberOfDoubleDots)}(a,t,e),s=o.processChildren?Ad(o.segmentGroup,o.index,a.commands):xd(o.segmentGroup,o.index,a.commands);return
bd(o.segmentGroup,s,t,r,i)}(u,this.currentUrlTree,e,c,l)}},{key:"navigateByUrl",value:function(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{skipLocationChange:!1};dr()&&this.isNgZoneEnabled&&!bu.isInAngularZone()&&this.console.warn("Navigation
triggered outside Angular zone, did you forget to call 'ngZone.run()'?");var
n=jd(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return
this.scheduleNavigation(r,"imperative",null,t)}},{key:"navigate",value:function(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{skipLocationChange:!1};return
function(e){for(var t=0;t<e.length;t++){var n=e[t];if(null==n)throw new
Error("The requested path contains ".concat(n," segment at index
").concat(t))}}(e),this.navigateByUrl(this.createUrlTree(e,t),t)}},{key:"serializeUrl",value:function(e){return
this.urlSerializer.serialize(e)}},{key:"parseUrl",value:function(e){var
t;try{t=this.urlSerializer.parse(e)}catch(n){t=this.malformedUriErrorHandler(n,this.urlSerializer,e)}return
t}},{key:"isActive",value:function(e,t){if(jd(e))return
Uf(this.currentUrlTree,e,t);var n=this.parseUrl(e);return
Uf(this.currentUrlTree,n,t)}},{key:"removeEmptyProps",value:function(e){return
Object.keys(e).reduce((function(t,n){var r=e[n];return
null!=r&&(t[n]=r),t}),{})}},{key:"processNavigations",value:function(){var
e=this;this.navigations.subscribe((function(t){e.navigated=!0,e.lastSuccessfulId=t.id,e.events.next(new
lf(t.id,e.serializeUrl(t.extractedUrl),e.serializeUrl(e.currentUrlTree))),e.lastSuccessfulNavigation=e.currentNavigation,e.currentNavigation=null,t.resolve(!0)}),(function(t){e.console.warn("Unhandled
Navigation Error:
")}))}},{key:"scheduleNavigation",value:function(e,t,n,r,i){var
a,o,s,u=this.getTransition();if(u&&"imperative"!==t&&"imperative"===u.source&&u.rawUrl.toString()===e.toString())return
Promise.resolve(!0);if(u&&"hashchange"==t&&"popstate"===u.source&&u.rawUrl.toString()===e.toString())return
Promise.resolve(!0);if(u&&"popstate"==t&&"hashchange"===u.source&&u.rawUrl.toString()===e.toString())return
Promise.resolve(!0);i?(a=i.resolve,o=i.reject,s=i.promise):s=new
Promise((function(e,t){a=e,o=t}));var l=++this.navigationId;return
this.setTransition({id:l,source:t,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:r,resolve:a,reject:o,promise:s,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),s.catch((function(e){return
Promise.reject(e)}))}},{key:"setBrowserUrl",value:function(e,t,n,r){var
i=this.urlSerializer.serialize(e);r=r||{},this.location.isCurrentPathEqualTo(i)||t?this.location.replaceState(i,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(i,"",Object.assign(Object.assign({},r),{navigationId:n}))}},{key:"resetStateAndUrl",value:function(e,t,n){this.routerState=e,this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}},{key:"resetUrlToCurrentUrlTree",value:function(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}},{key:"url",get:function(){return
this.serializeUrl(this.currentUrlTree)}}]),e}()).\u0275fac=function(e){ao()},Cv.\u0275dir=gt({type:Cv}),Cv),Tv=function
e(){_classCallCheck(this,e),this.outlet=null,this.route=null,this.resolver=null,this.children=new
xv,this.attachRef=null},xv=function(){function
e(){_classCallCheck(this,e),this.contexts=new Map}return
_createClass(e,[{key:"onChildOutletCreated",value:function(e,t){var
n=this.getOrCreateContext(e);n.outlet=t,this.contexts.set(e,n)}},{key:"onChildOutletDestroyed",value:function(e){var
t=this.getContext(e);t&&(t.outlet=null)}},{key:"onOutletDeactivated",value:function(){var
e=this.contexts;return this.contexts=new
Map,e}},{key:"onOutletReAttached",value:function(e){this.contexts=e}},{key:"getOrCreateContext",value:function(e){var
t=this.getContext(e);return t||(t=new
Tv,this.contexts.set(e,t)),t}},{key:"getContext",value:function(e){return
this.contexts.get(e)||null}}]),e}(),Av=((wv=function(){function
e(t,n,r,i,a){_classCallCheck(this,e),this.parentContexts=t,this.location=n,this.resolver=r,this.changeDetector=a,this.activated=null,this._activatedRoute=null,this.activateEvents=new
eu,this.deactivateEvents=new
eu,this.name=i||"primary",t.onChildOutletCreated(this.name,this)}return
_createClass(e,[{key:"ngOnDestroy",value:function(){this.parentContexts.onChildOutletDestroyed(this.name)}},{key:"ngOnInit",value:function(){if(!this.activated){var
e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.resolver||null))}}},{key:"detach",value:function(){if(!this.activated)throw
new Error("Outlet is not activated");this.location.detach();var
e=this.activated;return
this.activated=null,this._activatedRoute=null,e}},{key:"attach",value:function(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView)}},{key:"deactivate",value:function(){if(this.activated){var
e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}},{key:"activateWith",value:function(e,t){if(this.isActivated)throw
new Error("Cannot activate an already activated
outlet");this._activatedRoute=e;var
n=(t=t||this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,i=new
Ov(e,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,i),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}},{key:"isActivated",get:function(){return!!this.activated}},{key:"component",get:function(){if(!this.activated)throw
new Error("Outlet is not activated");return
this.activated.instance}},{key:"activatedRoute",get:function(){if(!this.activated)throw
new Error("Outlet is not activated");return
this._activatedRoute}},{key:"activatedRouteData",get:function(){return
this._activatedRoute?this._activatedRoute.snapshot.data:{}}}]),e}()).\u0275fac=function(e){return
new(e||wv)(io(xv),io(Fs),io(hs),function(e,t){var n=e.attrs;if(n)for(var
r=n.length,i=0;i<r;){var a=n[i];if(Sn(a))break;if(0===a)i+=2;else
if("number"==typeof a)for(i++;i<r&&"string"==typeof
n[i];)i++;else{if("name"===a)return n[i+1];i+=2}}return
null}(Qt()),io(xa))},wv.\u0275dir=gt({type:wv,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),wv),Ov=function(){function
e(t,n,r){_classCallCheck(this,e),this.route=t,this.childContexts=n,this.parent=r}return
_createClass(e,[{key:"get",value:function(e,t){return
e===vd?this.route:e===xv?this.childContexts:this.parent.get(e,t)}}]),e}(),Rv=function
e(){_classCallCheck(this,e)},Iv=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"preload",value:function(e,t){return
Sc(null)}}]),e}(),Pv=((Sv=function(){function
e(t,n,r,i,a){_classCallCheck(this,e),this.router=t,this.injector=i,this.preloadingStrategy=a,this.loader=new
yv(n,r,(function(e){return t.triggerEvent(new mf(e))}),(function(e){return
t.triggerEvent(new gf(e))}))}return
_createClass(e,[{key:"setUpPreloading",value:function(){var
e=this;this.subscription=this.router.events.pipe(Tc((function(e){return e
instanceof lf})),Ec((function(){return
e.preload()}))).subscribe((function(){}))}},{key:"preload",value:function(){var
e=this.injector.get(Ye);return
this.processRoutes(e,this.router.config)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"processRoutes",value:function(e,t){var
n,r=[],i=_createForOfIteratorHelper(t);try{for(i.s();!(n=i.n()).done;){var
a=n.value;if(a.loadChildren&&!a.canLoad&&a._loadedConfig){var
o=a._loadedConfig;r.push(this.processRoutes(o.module,o.routes))}else
a.loadChildren&&!a.canLoad?r.push(this.preloadConfig(e,a)):a.children&&r.push(this.processRoutes(e,a.children))}}catch(s){i.e(s)}finally{i.f()}return
B(r).pipe(Q(),L((function(e){})))}},{key:"preloadConfig",value:function(e,t){var
n=this;return this.preloadingStrategy.preload(t,(function(){return
n.loader.load(e.injector,t).pipe(q((function(e){return
t._loadedConfig=e,n.processRoutes(e.module,e.routes)})))}))}}]),e}()).\u0275fac=function(e){return
new(e||Sv)(Ke(Ev),Ke(Wu),Ke(_u),Ke(Ba),Ke(Rv))},Sv.\u0275prov=he({token:Sv,factory:Sv.\u0275fac}),Sv),Nv=((bv=function(){function
e(t,n){var r=arguments.length>2&&void
0!==arguments[2]?arguments[2]:{};_classCallCheck(this,e),this.router=t,this.viewportScroller=n,this.options=r,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},r.scrollPositionRestoration=r.scrollPositionRestoration||"disabled",r.anchorScrolling=r.anchorScrolling||"disabled"}return
_createClass(e,[{key:"init",value:function(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}},{key:"createScrollEvents",value:function(){var
e=this;return this.router.events.subscribe((function(t){t instanceof
uf?(e.store[e.lastId]=e.viewportScroller.getScrollPosition(),e.lastSource=t.navigationTrigger,e.restoredId=t.restoredState?t.restoredState.navigationId:0):t
instanceof
lf&&(e.lastId=t.id,e.scheduleScrollEvent(t,e.router.parseUrl(t.urlAfterRedirects).fragment))}))}},{key:"consumeScrollEvents",value:function(){var
e=this;return this.router.events.subscribe((function(t){t instanceof
bf&&(t.position?"top"===e.options.scrollPositionRestoration?e.viewportScroller.scrollToPosition([0,0]):"enabled"===e.options.scrollPositionRestoration&&e.viewportScroller.scrollToPosition(t.position):t.anchor&&"enabled"===e.options.anchorScrolling?e.viewportScroller.scrollToAnchor(t.anchor):"disabled"!==e.options.scrollPositionRestoration&&e.viewportScroller.scrollToPosition([0,0]))}))}},{key:"scheduleScrollEvent",value:function(e,t){this.router.triggerEvent(new
bf(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,t))}},{key:"ngOnDestroy",value:function(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}]),e}()).\u0275fac=function(e){ao()},bv.\u0275dir=gt({type:bv}),bv),Dv=new
Ue("ROUTER_CONFIGURATION"),Vv=new
Ue("ROUTER_FORROOT_GUARD"),jv=[wl,{provide:Gf,useClass:Qf},{provide:Ev,useFactory:function(e,t,n,r,i,a,o){var
s=arguments.length>7&&void
0!==arguments[7]?arguments[7]:{},u=arguments.length>8?arguments[8]:void
0,l=arguments.length>9?arguments[9]:void 0,c=new
Ev(null,e,t,n,r,i,a,jf(o));if(u&&(c.urlHandlingStrategy=u),l&&(c.routeReuseStrategy=l),s.errorHandler&&(c.errorHandler=s.errorHandler),s.malformedUriErrorHandler&&(c.malformedUriErrorHandler=s.malformedUriErrorHandler),s.enableTracing){var
h=el();c.events.subscribe((function(e){h.logGroup("Router Event:
"+e.constructor.name),h.log(e.toString()),h.log(e),h.logGroupEnd()}))}return
s.onSameUrlNavigation&&(c.onSameUrlNavigation=s.onSameUrlNavigation),s.paramsInheritanceStrategy&&(c.paramsInheritanceStrategy=s.paramsInheritanceStrategy),s.urlUpdateStrategy&&(c.urlUpdateStrategy=s.urlUpdateStrategy),s.relativeLinkResolution&&(c.relativeLinkResolution=s.relativeLinkResolution),c},deps:[Gf,xv,wl,Ba,Wu,_u,pv,Dv,[function(){return
function e(){_classCallCheck(this,e)}}(),new ae],[function(){return function
e(){_classCallCheck(this,e)}}(),new
ae]]},xv,{provide:vd,useFactory:function(e){return
e.routerState.root},deps:[Ev]},{provide:Wu,useClass:Zu},Pv,Iv,function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"preload",value:function(e,t){return
t().pipe(Fh((function(){return
Sc(null)})))}}]),e}(),{provide:Dv,useValue:{enableTracing:!1}}];function
Fv(){return new Fu("Router",Ev)}var Mv,Lv=((Mv=function(){function
e(t,n){_classCallCheck(this,e)}return
_createClass(e,null,[{key:"forRoot",value:function(t,n){return{ngModule:e,providers:[jv,Bv(t),{provide:Vv,useFactory:zv,deps:[[Ev,new
ae,new
se]]},{provide:Dv,useValue:n||{}},{provide:vl,useFactory:Hv,deps:[rl,[new
ie(_l),new
ae],Dv]},{provide:Nv,useFactory:Uv,deps:[Ev,Hl,Dv]},{provide:Rv,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:Iv},{provide:Fu,multi:!0,useFactory:Fv},[Wv,{provide:tu,multi:!0,useFactory:Gv,deps:[Wv]},{provide:Zv,useFactory:Qv,deps:[Wv]},{provide:uu,multi:!0,useExisting:Zv}]]}}},{key:"forChild",value:function(t){return{ngModule:e,providers:[Bv(t)]}}}]),e}()).\u0275mod=yt({type:Mv}),Mv.\u0275inj=fe({factory:function(e){return
new(e||Mv)(Ke(Vv,8),Ke(Ev,8))}}),Mv);function Uv(e,t,n){return
n.scrollOffset&&t.setOffset(n.scrollOffset),new Nv(e,t,n)}function Hv(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return
n.useHash?new Cl(e,t):new kl(e,t)}function zv(e){if(e)throw new
Error("RouterModule.forRoot() called twice. Lazy loaded modules should use
RouterModule.forChild() instead.");return"guarded"}function
Bv(e){return[{provide:qa,multi:!0,useValue:e},{provide:pv,multi:!0,useValue:e}]}var
qv,Wv=((qv=function(){function
e(t){_classCallCheck(this,e),this.injector=t,this.initNavigation=!1,this.resultOfPreactivationDone=new
A}return _createClass(e,[{key:"appInitializer",value:function(){var
e=this;return this.injector.get(ol,Promise.resolve(null)).then((function(){var
t=null,n=new Promise((function(e){return
t=e})),r=e.injector.get(Ev),i=e.injector.get(Dv);if(e.isLegacyDisabled(i)||e.isLegacyEnabled(i))t(!0);else
if("disabled"===i.initialNavigation)r.setUpLocationChangeListener(),t(!0);else{if("enabled"!==i.initialNavigation)throw
new Error("Invalid initialNavigation options:
'".concat(i.initialNavigation,"'"));r.hooks.afterPreactivation=function(){return
e.initNavigation?Sc(null):(e.initNavigation=!0,t(!0),e.resultOfPreactivationDone)},r.initialNavigation()}return
n}))}},{key:"bootstrapListener",value:function(e){var
t=this.injector.get(Dv),n=this.injector.get(Pv),r=this.injector.get(Nv),i=this.injector.get(Ev),a=this.injector.get(Bu);e===a.components[0]&&(this.isLegacyEnabled(t)?i.initialNavigation():this.isLegacyDisabled(t)&&i.setUpLocationChangeListener(),n.setUpPreloading(),r.init(),i.resetRootComponentType(a.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}},{key:"isLegacyEnabled",value:function(e){return"legacy_enabled"===e.initialNavigation||!0===e.initialNavigation||void
0===e.initialNavigation}},{key:"isLegacyDisabled",value:function(e){return"legacy_disabled"===e.initialNavigation||!1===e.initialNavigation}}]),e}()).\u0275fac=function(e){return
new(e||qv)(Ke(Ba))},qv.\u0275prov=he({token:qv,factory:qv.\u0275fac}),qv);function
Gv(e){return e.appInitializer.bind(e)}function Qv(e){return
e.bootstrapListener.bind(e)}var Zv=new Ue("Router Initializer");function
Kv(e,t,n,r){return new(n||(n=Promise))((function(i,a){function
o(e){try{u(r.next(e))}catch(t){a(t)}}function
s(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var
t;e.done?i(e.value):(t=e.value,t instanceof n?t:new
n((function(e){e(t)}))).then(o,s)}u((r=r.apply(e,t||[])).next())}))}var
$v=function e(){_classCallCheck(this,e)};function Jv(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:null;return{type:4,styles:t,timings:e}}function
Xv(e){var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:null;return{type:2,steps:e,options:t}}function
Yv(e){return{type:6,styles:e,offset:null}}function
ep(e,t,n){return{type:0,name:e,styles:t,options:n}}function tp(e,t){var
n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:null;return{type:1,expr:e,animation:t,options:n}}function
np(e){Promise.resolve(null).then(e)}var rp=function(){function e(){var
t=arguments.length>0&&void
0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:0;_classCallCheck(this,e),this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this.parentPlayer=null,this.totalTime=t+n}return
_createClass(e,[{key:"_onFinish",value:function(){this._finished||(this._finished=!0,this._onDoneFns.forEach((function(e){return
e()})),this._onDoneFns=[])}},{key:"onStart",value:function(e){this._onStartFns.push(e)}},{key:"onDone",value:function(e){this._onDoneFns.push(e)}},{key:"onDestroy",value:function(e){this._onDestroyFns.push(e)}},{key:"hasStarted",value:function(){return
this._started}},{key:"init",value:function(){}},{key:"play",value:function(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}},{key:"triggerMicrotask",value:function(){var
e=this;np((function(){return
e._onFinish()}))}},{key:"_onStart",value:function(){this._onStartFns.forEach((function(e){return
e()})),this._onStartFns=[]}},{key:"pause",value:function(){}},{key:"restart",value:function(){}},{key:"finish",value:function(){this._onFinish()}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach((function(e){return
e()})),this._onDestroyFns=[])}},{key:"reset",value:function(){}},{key:"setPosition",value:function(e){}},{key:"getPosition",value:function(){return
0}},{key:"triggerCallback",value:function(e){var
t="start"==e?this._onStartFns:this._onDoneFns;t.forEach((function(e){return
e()})),t.length=0}}]),e}(),ip=function(){function e(t){var
n=this;_classCallCheck(this,e),this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;var
r=0,i=0,a=0,o=this.players.length;0==o?np((function(){return
n._onFinish()})):this.players.forEach((function(e){e.onDone((function(){++r==o&&n._onFinish()})),e.onDestroy((function(){++i==o&&n._onDestroy()})),e.onStart((function(){++a==o&&n._onStart()}))})),this.totalTime=this.players.reduce((function(e,t){return
Math.max(e,t.totalTime)}),0)}return
_createClass(e,[{key:"_onFinish",value:function(){this._finished||(this._finished=!0,this._onDoneFns.forEach((function(e){return
e()})),this._onDoneFns=[])}},{key:"init",value:function(){this.players.forEach((function(e){return
e.init()}))}},{key:"onStart",value:function(e){this._onStartFns.push(e)}},{key:"_onStart",value:function(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach((function(e){return
e()})),this._onStartFns=[])}},{key:"onDone",value:function(e){this._onDoneFns.push(e)}},{key:"onDestroy",value:function(e){this._onDestroyFns.push(e)}},{key:"hasStarted",value:function(){return
this._started}},{key:"play",value:function(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach((function(e){return
e.play()}))}},{key:"pause",value:function(){this.players.forEach((function(e){return
e.pause()}))}},{key:"restart",value:function(){this.players.forEach((function(e){return
e.restart()}))}},{key:"finish",value:function(){this._onFinish(),this.players.forEach((function(e){return
e.finish()}))}},{key:"destroy",value:function(){this._onDestroy()}},{key:"_onDestroy",value:function(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach((function(e){return
e.destroy()})),this._onDestroyFns.forEach((function(e){return
e()})),this._onDestroyFns=[])}},{key:"reset",value:function(){this.players.forEach((function(e){return
e.reset()})),this._destroyed=!1,this._finished=!1,this._started=!1}},{key:"setPosition",value:function(e){var
t=e*this.totalTime;this.players.forEach((function(e){var
n=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(n)}))}},{key:"getPosition",value:function(){var
e=0;return this.players.forEach((function(t){var
n=t.getPosition();e=Math.min(n,e)})),e}},{key:"beforeDestroy",value:function(){this.players.forEach((function(e){e.beforeDestroy&&e.beforeDestroy()}))}},{key:"triggerCallback",value:function(e){var
t="start"==e?this._onStartFns:this._onDoneFns;t.forEach((function(e){return
e()})),t.length=0}}]),e}(),ap=["toast-component",""];function
op(e,t){if(1&e){var n=Wt();uo(0,"button",5),vo("click",(function(){return
Bt.lFrame.contextLView=n,mo().remove()})),uo(1,"span",6),Uo(2,"\xd7"),lo(),lo()}}function
sp(e,t){if(1&e&&(function(e,t,n){var
r=Wt(),i=Gt(),a=i.firstCreatePass?function(e,t,n,r,i){var
a=t.consts,o=Ut(a,void 0),s=mi(t,n[6],0,4,"ng-container",o);return
null!==o&&Za(s,o,!0),Ri(t,n,s,Ut(a,void
0)),null!==t.queries&&t.queries.elementStart(t,s),s}(0,i,r):i.data[20];Zt(a,!0);var
o=r[20]=r[11].createComment("");va(i,r,o,a),zr(o,r),Tt(a)&&(bi(i,r,a),wi(i,a,r))}(),Uo(1),r=Qt(),i=Gt(),Kt()?$t():Zt(r=r.parent,!1),i.firstCreatePass&&(yn(i,r),St(r)&&i.queries.elementEnd(r))),2&e){var
n=mo(2);oi(1),zo("[",n.duplicatesCount+1,"]")}var r,i}function
up(e,t){if(1&e&&(uo(0,"div"),Uo(1),ro(2,sp,2,1,"ng-container",4),lo()),2&e){var
n=mo();Oo(n.options.titleClass),to("aria-label",n.title),oi(1),zo("
",n.title," "),oi(1),oo("ngIf",n.duplicatesCount)}}function
lp(e,t){if(1&e&&co(0,"div",7),2&e){var
n=mo();Oo(n.options.messageClass),oo("innerHTML",n.message,Lr)}}function
cp(e,t){if(1&e&&(uo(0,"div",8),Uo(1),lo()),2&e){var
n=mo();Oo(n.options.messageClass),to("aria-label",n.message),oi(1),zo("
",n.message," ")}}function
hp(e,t){if(1&e&&(uo(0,"div"),co(1,"div",9),lo()),2&e){var
n=mo();oi(1),xo("width",n.width+"%")}}var
fp,dp,vp,pp,yp,mp,gp,_p,kp=function(){function e(t,n,r,i,a,o){var
s=this;_classCallCheck(this,e),this.toastId=t,this.config=n,this.message=r,this.title=i,this.toastType=a,this.toastRef=o,this._onTap=new
A,this._onAction=new
A,this.toastRef.afterClosed().subscribe((function(){s._onAction.complete(),s._onTap.complete()}))}return
_createClass(e,[{key:"triggerTap",value:function(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}},{key:"onTap",value:function(){return
this._onTap.asObservable()}},{key:"triggerAction",value:function(e){this._onAction.next(e)}},{key:"onAction",value:function(){return
this._onAction.asObservable()}}]),e}(),Cp=new
Ue("ToastConfig"),wp=function(){function
e(t,n){_classCallCheck(this,e),this.component=t,this.injector=n}return
_createClass(e,[{key:"attach",value:function(e,t){return
this._attachedHost=e,e.attach(this,t)}},{key:"detach",value:function(){var
e=this._attachedHost;if(e)return this._attachedHost=void
0,e.detach()}},{key:"setAttachedHost",value:function(e){this._attachedHost=e}},{key:"isAttached",get:function(){return
null!=this._attachedHost}}]),e}(),bp=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this))._hostDomElement=e,a._componentFactoryResolver=r,a._appRef=i,a}return
_createClass(n,[{key:"attachComponentPortal",value:function(e,t){var
n,r=this,i=this._componentFactoryResolver.resolveComponentFactory(e.component);return
n=i.create(e.injector),this._appRef.attachView(n.hostView),this.setDisposeFn((function(){r._appRef.detachView(n.hostView),n.destroy()})),t?this._hostDomElement.insertBefore(this._getComponentRootNode(n),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(n)),n}},{key:"_getComponentRootNode",value:function(e){return
e.hostView.rootNodes[0]}}]),n}(function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"attach",value:function(e,t){return
this._attachedPortal=e,this.attachComponentPortal(e,t)}},{key:"detach",value:function(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void
0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void
0)}},{key:"setDisposeFn",value:function(e){this._disposeFn=e}}]),e}()),Sp=((fp=function(){function
e(t){_classCallCheck(this,e),this._document=t}return
_createClass(e,[{key:"ngOnDestroy",value:function(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}},{key:"getContainerElement",value:function(){return
this._containerElement||this._createContainer(),this._containerElement}},{key:"_createContainer",value:function(){var
e=this._document.createElement("div");e.classList.add("overlay-container"),this._document.body.appendChild(e),this._containerElement=e}}]),e}()).\u0275fac=function(e){return
new(e||fp)(Ke(nl))},fp.\u0275prov=he({factory:function(){return new
fp(Ke(nl))},token:fp,providedIn:"root"}),fp),Ep=function(){function
e(t){_classCallCheck(this,e),this._portalHost=t}return
_createClass(e,[{key:"attach",value:function(e){var
t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return
this._portalHost.attach(e,t)}},{key:"detach",value:function(){return
this._portalHost.detach()}}]),e}(),Tp=((dp=function(){function
e(t,n,r,i){_classCallCheck(this,e),this._overlayContainer=t,this._componentFactoryResolver=n,this._appRef=r,this._document=i,this._paneElements=new
Map}return _createClass(e,[{key:"create",value:function(e,t){return
this._createOverlayRef(this.getPaneElement(e,t))}},{key:"getPaneElement",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void
0;return
this._paneElements.get(t)||this._paneElements.set(t,{}),this._paneElements.get(t)[e]||(this._paneElements.get(t)[e]=this._createPaneElement(e,t)),this._paneElements.get(t)[e]}},{key:"_createPaneElement",value:function(e,t){var
n=this._document.createElement("div");return
n.id="toast-container",n.classList.add(e),n.classList.add("toast-container"),t?t.getContainerElement().appendChild(n):this._overlayContainer.getContainerElement().appendChild(n),n}},{key:"_createPortalHost",value:function(e){return
new
bp(e,this._componentFactoryResolver,this._appRef)}},{key:"_createOverlayRef",value:function(e){return
new Ep(this._createPortalHost(e))}}]),e}()).\u0275fac=function(e){return
new(e||dp)(Ke(Sp),Ke(hs),Ke(Bu),Ke(nl))},dp.\u0275prov=he({factory:function(){return
new
dp(Ke(Sp),Ke(hs),Ke(Bu),Ke(nl))},token:dp,providedIn:"root"}),dp),xp=function(){function
e(t){_classCallCheck(this,e),this._overlayRef=t,this.duplicatesCount=0,this._afterClosed=new
A,this._activate=new A,this._manualClose=new A,this._resetTimeout=new
A,this._countDuplicate=new A}return
_createClass(e,[{key:"manualClose",value:function(){this._manualClose.next(),this._manualClose.complete()}},{key:"manualClosed",value:function(){return
this._manualClose.asObservable()}},{key:"timeoutReset",value:function(){return
this._resetTimeout.asObservable()}},{key:"countDuplicate",value:function(){return
this._countDuplicate.asObservable()}},{key:"close",value:function(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}},{key:"afterClosed",value:function(){return
this._afterClosed.asObservable()}},{key:"isInactive",value:function(){return
this._activate.isStopped}},{key:"activate",value:function(){this._activate.next(),this._activate.complete()}},{key:"afterActivate",value:function(){return
this._activate.asObservable()}},{key:"onDuplicate",value:function(e,t){e&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}}]),e}(),Ap=function(){function
e(t,n){_classCallCheck(this,e),this._toastPackage=t,this._parentInjector=n}return
_createClass(e,[{key:"get",value:function(e,t,n){return
e===kp?this._toastPackage:this._parentInjector.get(e,t,n)}}]),e}(),Op=((mp=function(){function
e(t,n,r,i,a){_classCallCheck(this,e),this.overlay=n,this._injector=r,this.sanitizer=i,this.ngZone=a,this.currentlyActive=0,this.toasts=[],this.index=0,this.toastrConfig=Object.assign(Object.assign({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=Object.assign(Object.assign({},t.default.iconClasses),t.config.iconClasses))}return
_createClass(e,[{key:"show",value:function(e,t){var n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void
0!==arguments[3]?arguments[3]:"";return
this._preBuildNotification(r,e,t,this.applyConfig(n))}},{key:"success",value:function(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return
this._preBuildNotification(this.toastrConfig.iconClasses.success||"",e,t,this.applyConfig(n))}},{key:"error",value:function(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return
this._preBuildNotification(this.toastrConfig.iconClasses.error||"",e,t,this.applyConfig(n))}},{key:"info",value:function(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return
this._preBuildNotification(this.toastrConfig.iconClasses.info||"",e,t,this.applyConfig(n))}},{key:"warning",value:function(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return
this._preBuildNotification(this.toastrConfig.iconClasses.warning||"",e,t,this.applyConfig(n))}},{key:"clear",value:function(e){var
t,n=_createForOfIteratorHelper(this.toasts);try{for(n.s();!(t=n.n()).done;){var
r=t.value;if(void 0!==e){if(r.toastId===e)return void
r.toastRef.manualClose()}else
r.toastRef.manualClose()}}catch(i){n.e(i)}finally{n.f()}}},{key:"remove",value:function(e){var
t=this._findToast(e);if(!t)return!1;if(t.activeToast.toastRef.close(),this.toasts.splice(t.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length)return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){var
n=this.toasts[this.currentlyActive].toastRef;n.isInactive()||(this.currentlyActive=this.currentlyActive+1,n.activate())}return!0}},{key:"findDuplicate",value:function(e,t,n){var
r,i=_createForOfIteratorHelper(this.toasts);try{for(i.s();!(r=i.n()).done;){var
a=r.value;if(a.message===e)return
a.toastRef.onDuplicate(t,n),a}}catch(o){i.e(o)}finally{i.f()}return
null}},{key:"applyConfig",value:function(){var e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};return
Object.assign(Object.assign({},this.toastrConfig),e)}},{key:"_findToast",value:function(e){for(var
t=0;t<this.toasts.length;t++)if(this.toasts[t].toastId===e)return{index:t,activeToast:this.toasts[t]};return
null}},{key:"_preBuildNotification",value:function(e,t,n,r){var i=this;return
r.onActivateTick?this.ngZone.run((function(){return
i._buildNotification(e,t,n,r)})):this._buildNotification(e,t,n,r)}},{key:"_buildNotification",value:function(e,t,n,r){if(!r.toastComponent)throw
new Error("toastComponent required");var
i=this.findDuplicate(t,this.toastrConfig.resetTimeoutOnDuplicate&&r.timeOut>0,this.toastrConfig.countDuplicates);if(t&&this.toastrConfig.preventDuplicates&&null!==i)return
i;this.previousToastMessage=t;var
a=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(a=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));var
o=this.overlay.create(r.positionClass,this.overlayContainer);this.index=this.index+1;var
s=t;t&&r.enableHtml&&(s=this.sanitizer.sanitize(jr.HTML,t));var u=new
xp(o),l=new kp(this.index,r,s,n,e,u),c=new Ap(l,this._injector),h=new
wp(r.toastComponent,c),f=o.attach(h,this.toastrConfig.newestOnTop);u.componentInstance=f.instance;var
d={toastId:this.index,message:t||"",toastRef:u,onShown:u.afterActivate(),onHidden:u.afterClosed(),onTap:l.onTap(),onAction:l.onAction(),portal:f};return
a||(this.currentlyActive=this.currentlyActive+1,setTimeout((function(){d.toastRef.activate()}))),this.toasts.push(d),d}}]),e}()).\u0275fac=function(e){return
new(e||mp)(Ke(Cp),Ke(Tp),Ke(Ba),Ke(_c),Ke(bu))},mp.\u0275prov=he({factory:function(){return
new
mp(Ke(Cp),Ke(Tp),Ke(He),Ke(_c),Ke(bu))},token:mp,providedIn:"root"}),mp),Rp=((yp=function(){function
e(t,n,r){var
i=this;_classCallCheck(this,e),this.toastrService=t,this.toastPackage=n,this.ngZone=r,this.width=-1,this.toastClasses="",this.state={value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}},this.message=n.message,this.title=n.title,this.options=n.config,this.originalTimeout=n.config.timeOut,this.toastClasses="".concat(n.toastType,"
").concat(n.config.toastClass),this.sub=n.toastRef.afterActivate().subscribe((function(){i.activateToast()})),this.sub1=n.toastRef.manualClosed().subscribe((function(){i.remove()})),this.sub2=n.toastRef.timeoutReset().subscribe((function(){i.resetTimeout()})),this.sub3=n.toastRef.countDuplicate().subscribe((function(e){i.duplicatesCount=e}))}return
_createClass(e,[{key:"ngOnDestroy",value:function(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}},{key:"activateToast",value:function(){var
e=this;this.state=Object.assign(Object.assign({},this.state),{value:"active"}),!0!==this.options.disableTimeOut&&"timeOut"!==this.options.disableTimeOut&&this.options.timeOut&&(this.outsideTimeout((function(){return
e.remove()}),this.options.timeOut),this.hideTime=(new
Date).getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval((function(){return
e.updateProgress()}),10))}},{key:"updateProgress",value:function(){if(0!==this.width&&100!==this.width&&this.options.timeOut){var
e=(new
Date).getTime();this.width=(this.hideTime-e)/this.options.timeOut*100,"increasing"===this.options.progressAnimation&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}}},{key:"resetTimeout",value:function(){var
e=this;clearTimeout(this.timeout),clearInterval(this.intervalId),this.state=Object.assign(Object.assign({},this.state),{value:"active"}),this.outsideTimeout((function(){return
e.remove()}),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=(new
Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval((function(){return
e.updateProgress()}),10)}},{key:"remove",value:function(){var
e=this;"removed"!==this.state.value&&(clearTimeout(this.timeout),this.state=Object.assign(Object.assign({},this.state),{value:"removed"}),this.outsideTimeout((function(){return
e.toastrService.remove(e.toastPackage.toastId)}),+this.toastPackage.config.easeTime))}},{key:"tapToast",value:function(){"removed"!==this.state.value&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}},{key:"stickAround",value:function(){"removed"!==this.state.value&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}},{key:"delayedHideToast",value:function(){var
e=this;!0!==this.options.disableTimeOut&&"extendedTimeOut"!==this.options.disableTimeOut&&0!==this.options.extendedTimeOut&&"removed"!==this.state.value&&(this.outsideTimeout((function(){return
e.remove()}),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=(new
Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval((function(){return
e.updateProgress()}),10))}},{key:"outsideTimeout",value:function(e,t){var
n=this;this.ngZone?this.ngZone.runOutsideAngular((function(){return
n.timeout=setTimeout((function(){return
n.runInsideAngular(e)}),t)})):this.timeout=setTimeout((function(){return
e()}),t)}},{key:"outsideInterval",value:function(e,t){var
n=this;this.ngZone?this.ngZone.runOutsideAngular((function(){return
n.intervalId=setInterval((function(){return
n.runInsideAngular(e)}),t)})):this.intervalId=setInterval((function(){return
e()}),t)}},{key:"runInsideAngular",value:function(e){this.ngZone?this.ngZone.run((function(){return
e()})):e()}},{key:"displayStyle",get:function(){if("inactive"===this.state.value)return"none"}}]),e}()).\u0275fac=function(e){return
new(e||yp)(io(Op),io(kp),io(bu))},yp.\u0275cmp=ft({type:yp,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,t){1&e&&vo("click",(function(){return
t.tapToast()}))("mouseenter",(function(){return
t.stickAround()}))("mouseleave",(function(){return
t.delayedHideToast()})),2&e&&(qo("@flyInOut",t.state),Oo(t.toastClasses),xo("display",t.displayStyle))},attrs:ap,decls:5,vars:5,consts:[["class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alertdialog","aria-live","polite",3,"class","innerHTML",4,"ngIf"],["role","alertdialog","aria-live","polite",3,"class",4,"ngIf"],[4,"ngIf"],["aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alertdialog","aria-live","polite",3,"innerHTML"],["role","alertdialog","aria-live","polite"],[1,"toast-progress"]],template:function(e,t){1&e&&(ro(0,op,3,0,"button",0),ro(1,up,3,5,"div",1),ro(2,lp,1,3,"div",2),ro(3,cp,2,4,"div",3),ro(4,hp,2,2,"div",4)),2&e&&(oo("ngIf",t.options.closeButton),oi(1),oo("ngIf",t.title),oi(1),oo("ngIf",t.message&&t.options.enableHtml),oi(1),oo("ngIf",t.message&&!t.options.enableHtml),oi(1),oo("ngIf",t.options.progressBar))},directives:[Il],encapsulation:2,data:{animation:[(vp="flyInOut",pp=[ep("inactive",Yv({opacity:0})),ep("active",Yv({opacity:1})),ep("removed",Yv({opacity:0})),tp("inactive
=> active",Jv("{{ easeTime }}ms {{ easing }}")),tp("active => removed",Jv("{{
easeTime }}ms {{ easing
}}"))],{type:7,name:vp,definitions:pp,options:{}})]}}),yp),Ip=Object.assign(Object.assign({},{maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"}),{toastComponent:Rp}),Pp=((_p=gp=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,null,[{key:"forRoot",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};return{ngModule:gp,providers:[{provide:Cp,useValue:{default:Ip,config:e}}]}}}]),e}()).\u0275mod=yt({type:_p}),_p.\u0275inj=fe({factory:function(e){return
new(e||_p)},imports:[[Ul]]}),_p);function Np(e,t){return new
w((function(n){var r=e.length;if(0!==r)for(var i=new
Array(r),a=0,o=0,s=function(s){var
u=B(e[s]),l=!1;n.add(u.subscribe({next:function(e){l||(l=!0,o++),i[s]=e},error:function(e){return
n.error(e)},complete:function(){++a!==r&&l||(o===r&&n.next(t?t.reduce((function(e,t,n){return
e[t]=i[n],e}),{}):i),n.complete())}}))},u=0;u<r;u++)s(u);else
n.complete()}))}var Dp,Vp,jp,Fp,Mp=new
Ue("NgValueAccessor"),Lp={provide:Mp,useExisting:Se((function(){return
Up})),multi:!0},Up=((Dp=function(){function
e(t,n){_classCallCheck(this,e),this._renderer=t,this._elementRef=n,this.onChange=function(e){},this.onTouched=function(){}}return
_createClass(e,[{key:"writeValue",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"checked",e)}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}]),e}()).\u0275fac=function(e){return
new(e||Dp)(io(ys),io(fs))},Dp.\u0275dir=gt({type:Dp,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(e,t){1&e&&vo("change",(function(e){return
t.onChange(e.target.checked)}))("blur",(function(){return
t.onTouched()}))},features:[us([Lp])]}),Dp),Hp={provide:Mp,useExisting:Se((function(){return
Bp})),multi:!0},zp=new Ue("CompositionEventMode"),Bp=((Fp=function(){function
e(t,n,r){var
i;_classCallCheck(this,e),this._renderer=t,this._elementRef=n,this._compositionMode=r,this.onChange=function(e){},this.onTouched=function(){},this._composing=!1,null==this._compositionMode&&(this._compositionMode=(i=el()?el().getUserAgent():"",!/android
(\d+)/.test(i.toLowerCase())))}return
_createClass(e,[{key:"writeValue",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==e?"":e)}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}},{key:"_handleInput",value:function(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}},{key:"_compositionStart",value:function(){this._composing=!0}},{key:"_compositionEnd",value:function(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}]),e}()).\u0275fac=function(e){return
new(e||Fp)(io(ys),io(fs),io(zp,8))},Fp.\u0275dir=gt({type:Fp,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,t){1&e&&vo("input",(function(e){return
t._handleInput(e.target.value)}))("blur",(function(){return
t.onTouched()}))("compositionstart",(function(){return
t._compositionStart()}))("compositionend",(function(e){return
t._compositionEnd(e.target.value)}))},features:[us([Hp])]}),Fp),qp=((jp=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"reset",value:function(e){this.control&&this.control.reset(e)}},{key:"hasError",value:function(e,t){return!!this.control&&this.control.hasError(e,t)}},{key:"getError",value:function(e,t){return
this.control?this.control.getError(e,t):null}},{key:"value",get:function(){return
this.control?this.control.value:null}},{key:"valid",get:function(){return
this.control?this.control.valid:null}},{key:"invalid",get:function(){return
this.control?this.control.invalid:null}},{key:"pending",get:function(){return
this.control?this.control.pending:null}},{key:"disabled",get:function(){return
this.control?this.control.disabled:null}},{key:"enabled",get:function(){return
this.control?this.control.enabled:null}},{key:"errors",get:function(){return
this.control?this.control.errors:null}},{key:"pristine",get:function(){return
this.control?this.control.pristine:null}},{key:"dirty",get:function(){return
this.control?this.control.dirty:null}},{key:"touched",get:function(){return
this.control?this.control.touched:null}},{key:"status",get:function(){return
this.control?this.control.status:null}},{key:"untouched",get:function(){return
this.control?this.control.untouched:null}},{key:"statusChanges",get:function(){return
this.control?this.control.statusChanges:null}},{key:"valueChanges",get:function(){return
this.control?this.control.valueChanges:null}},{key:"path",get:function(){return
null}}]),e}()).\u0275fac=function(e){return
new(e||jp)},jp.\u0275dir=gt({type:jp}),jp),Wp=((Vp=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"formDirective",get:function(){return
null}},{key:"path",get:function(){return
null}}]),n}(qp)).\u0275fac=function(e){return
Gp(e||Vp)},Vp.\u0275dir=gt({type:Vp,features:[Go]}),Vp),Gp=Jn(Wp);function
Qp(){throw new Error("unimplemented")}var Zp,Kp=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){var e;return
_classCallCheck(this,n),(e=t.apply(this,arguments))._parent=null,e.name=null,e.valueAccessor=null,e._rawValidators=[],e._rawAsyncValidators=[],e}return
_createClass(n,[{key:"validator",get:function(){return
Qp()}},{key:"asyncValidator",get:function(){return
Qp()}}]),n}(qp),$p=((Zp=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e){return
_classCallCheck(this,n),t.call(this,e)}return n}(function(){function
e(t){_classCallCheck(this,e),this._cd=t}return
_createClass(e,[{key:"ngClassUntouched",get:function(){return!!this._cd.control&&this._cd.control.untouched}},{key:"ngClassTouched",get:function(){return!!this._cd.control&&this._cd.control.touched}},{key:"ngClassPristine",get:function(){return!!this._cd.control&&this._cd.control.pristine}},{key:"ngClassDirty",get:function(){return!!this._cd.control&&this._cd.control.dirty}},{key:"ngClassValid",get:function(){return!!this._cd.control&&this._cd.control.valid}},{key:"ngClassInvalid",get:function(){return!!this._cd.control&&this._cd.control.invalid}},{key:"ngClassPending",get:function(){return!!this._cd.control&&this._cd.control.pending}}]),e}())).\u0275fac=function(e){return
new(e||Zp)(io(Kp,2))},Zp.\u0275dir=gt({type:Zp,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,t){2&e&&Ao("ng-untouched",t.ngClassUntouched)("ng-touched",t.ngClassTouched)("ng-pristine",t.ngClassPristine)("ng-dirty",t.ngClassDirty)("ng-valid",t.ngClassValid)("ng-invalid",t.ngClassInvalid)("ng-pending",t.ngClassPending)},features:[Go]}),Zp);function
Jp(e){return null==e||0===e.length}var Xp=new Ue("NgValidators"),Yp=new
Ue("NgAsyncValidators"),ey=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ty=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,null,[{key:"min",value:function(e){return
function(t){if(Jp(t.value)||Jp(e))return null;var
n=parseFloat(t.value);return!isNaN(n)&&n<e?{min:{min:e,actual:t.value}}:null}}},{key:"max",value:function(e){return
function(t){if(Jp(t.value)||Jp(e))return null;var
n=parseFloat(t.value);return!isNaN(n)&&n>e?{max:{max:e,actual:t.value}}:null}}},{key:"required",value:function(e){return
Jp(e.value)?{required:!0}:null}},{key:"requiredTrue",value:function(e){return!0===e.value?null:{required:!0}}},{key:"email",value:function(e){return
Jp(e.value)||ey.test(e.value)?null:{email:!0}}},{key:"minLength",value:function(e){return
function(t){if(Jp(t.value))return null;var n=t.value?t.value.length:0;return
n<e?{minlength:{requiredLength:e,actualLength:n}}:null}}},{key:"maxLength",value:function(e){return
function(t){var n=t.value?t.value.length:0;return
n>e?{maxlength:{requiredLength:e,actualLength:n}}:null}}},{key:"pattern",value:function(t){return
t?("string"==typeof
t?(r="","^"!==t.charAt(0)&&(r+="^"),r+=t,"$"!==t.charAt(t.length-1)&&(r+="$"),n=new
RegExp(r)):(r=t.toString(),n=t),function(e){if(Jp(e.value))return null;var
t=e.value;return
n.test(t)?null:{pattern:{requiredPattern:r,actualValue:t}}}):e.nullValidator;var
n,r}},{key:"nullValidator",value:function(e){return
null}},{key:"compose",value:function(e){if(!e)return null;var
t=e.filter(ny);return 0==t.length?null:function(e){return
iy(function(e,t){return t.map((function(t){return
t(e)}))}(e,t))}}},{key:"composeAsync",value:function(e){if(!e)return null;var
t=e.filter(ny);return 0==t.length?null:function(e){return function(){for(var
e=arguments.length,t=new
Array(e),n=0;n<e;n++)t[n]=arguments[n];if(1===t.length){var
r=t[0];if(u(r))return
Np(r,null);if(l(r)&&Object.getPrototypeOf(r)===Object.prototype){var
i=Object.keys(r);return Np(i.map((function(e){return
r[e]})),i)}}if("function"==typeof t[t.length-1]){var a=t.pop();return
Np(t=1===t.length&&u(t[0])?t[0]:t,null).pipe(L((function(e){return
a.apply(void 0,_toConsumableArray(e))})))}return
Np(t,null)}(function(e,t){return t.map((function(t){return
t(e)}))}(e,t).map(ry)).pipe(L(iy))}}}]),e}();function ny(e){return
null!=e}function ry(e){var t=ho(e)?B(e):e;if(!fo(t))throw new Error("Expected
validator to return Promise or Observable.");return t}function iy(e){var
t={};return
e.forEach((function(e){t=null!=e?Object.assign(Object.assign({},t),e):t})),0===Object.keys(t).length?null:t}function
ay(e){return e.validate?function(t){return e.validate(t)}:e}function
oy(e){return e.validate?function(t){return e.validate(t)}:e}var
sy,uy,ly,cy,hy,fy,dy={provide:Mp,useExisting:Se((function(){return
vy})),multi:!0},vy=((sy=function(){function
e(t,n){_classCallCheck(this,e),this._renderer=t,this._elementRef=n,this.onChange=function(e){},this.onTouched=function(){}}return
_createClass(e,[{key:"writeValue",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==e?"":e)}},{key:"registerOnChange",value:function(e){this.onChange=function(t){e(""==t?null:parseFloat(t))}}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}]),e}()).\u0275fac=function(e){return
new(e||sy)(io(ys),io(fs))},sy.\u0275dir=gt({type:sy,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,t){1&e&&vo("change",(function(e){return
t.onChange(e.target.value)}))("input",(function(e){return
t.onChange(e.target.value)}))("blur",(function(){return
t.onTouched()}))},features:[us([dy])]}),sy),py={provide:Mp,useExisting:Se((function(){return
my})),multi:!0},yy=((ly=function(){function
e(){_classCallCheck(this,e),this._accessors=[]}return
_createClass(e,[{key:"add",value:function(e,t){this._accessors.push([e,t])}},{key:"remove",value:function(e){for(var
t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===e)return void
this._accessors.splice(t,1)}},{key:"select",value:function(e){var
t=this;this._accessors.forEach((function(n){t._isSameGroup(n,e)&&n[1]!==e&&n[1].fireUncheck(e.value)}))}},{key:"_isSameGroup",value:function(e,t){return!!e[0].control&&e[0]._parent===t._control._parent&&e[1].name===t.name}}]),e}()).\u0275fac=function(e){return
new(e||ly)},ly.\u0275prov=he({token:ly,factory:ly.\u0275fac}),ly),my=((uy=function(){function
e(t,n,r,i){_classCallCheck(this,e),this._renderer=t,this._elementRef=n,this._registry=r,this._injector=i,this.onChange=function(){},this.onTouched=function(){}}return
_createClass(e,[{key:"ngOnInit",value:function(){this._control=this._injector.get(Kp),this._checkName(),this._registry.add(this._control,this)}},{key:"ngOnDestroy",value:function(){this._registry.remove(this)}},{key:"writeValue",value:function(e){this._state=e===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}},{key:"registerOnChange",value:function(e){var
t=this;this._fn=e,this.onChange=function(){e(t.value),t._registry.select(t)}}},{key:"fireUncheck",value:function(e){this.writeValue(e)}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}},{key:"_checkName",value:function(){this.name&&this.formControlName&&this.name!==this.formControlName&&this._throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}},{key:"_throwNameError",value:function(){throw
new Error('\n      If you define both a name and a formControlName attribute
on your radio button, their values\n      must match. Ex: <input type="radio"
formControlName="food" name="food">\n   
')}}]),e}()).\u0275fac=function(e){return
new(e||uy)(io(ys),io(fs),io(yy),io(Ba))},uy.\u0275dir=gt({type:uy,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(e,t){1&e&&vo("change",(function(){return
t.onChange()}))("blur",(function(){return
t.onTouched()}))},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[us([py])]}),uy),gy={provide:Mp,useExisting:Se((function(){return
_y})),multi:!0},_y=((cy=function(){function
e(t,n){_classCallCheck(this,e),this._renderer=t,this._elementRef=n,this.onChange=function(e){},this.onTouched=function(){}}return
_createClass(e,[{key:"writeValue",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(e))}},{key:"registerOnChange",value:function(e){this.onChange=function(t){e(""==t?null:parseFloat(t))}}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}]),e}()).\u0275fac=function(e){return
new(e||cy)(io(ys),io(fs))},cy.\u0275dir=gt({type:cy,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(e,t){1&e&&vo("change",(function(e){return
t.onChange(e.target.value)}))("input",(function(e){return
t.onChange(e.target.value)}))("blur",(function(){return
t.onTouched()}))},features:[us([gy])]}),cy),ky='\n    <div
[formGroup]="myGroup">\n       <div formGroupName="person">\n          <input
formControlName="firstName">\n       </div>\n    </div>\n\n    In your
class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({
firstName: new FormControl() })\n    });',Cy='\n    <form>\n       <div
ngModelGroup="person">\n          <input [(ngModel)]="person.name"
name="firstName">\n       </div>\n   
</form>',wy={provide:Mp,useExisting:Se((function(){return
by})),multi:!0},by=((hy=function(){function
e(t,n){_classCallCheck(this,e),this._renderer=t,this._elementRef=n,this._optionMap=new
Map,this._idCounter=0,this.onChange=function(e){},this.onTouched=function(){},this._compareWith=Ja}return
_createClass(e,[{key:"writeValue",value:function(e){this.value=e;var
t=this._getOptionId(e);null==t&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);var
n=function(e,t){return null==e?""+t:(t&&"object"==typeof
t&&(t="Object"),"".concat(e,":
").concat(t).slice(0,50))}(t,e);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}},{key:"registerOnChange",value:function(e){var
t=this;this.onChange=function(n){t.value=t._getOptionValue(n),e(t.value)}}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}},{key:"_registerOption",value:function(){return(this._idCounter++).toString()}},{key:"_getOptionId",value:function(e){for(var
t=0,n=Array.from(this._optionMap.keys());t<n.length;t++){var
r=n[t];if(this._compareWith(this._optionMap.get(r),e))return r}return
null}},{key:"_getOptionValue",value:function(e){var t=function(e){return
e.split(":")[0]}(e);return
this._optionMap.has(t)?this._optionMap.get(t):e}},{key:"compareWith",set:function(e){if("function"!=typeof
e)throw new Error("compareWith must be a function, but received
"+JSON.stringify(e));this._compareWith=e}}]),e}()).\u0275fac=function(e){return
new(e||hy)(io(ys),io(fs))},hy.\u0275dir=gt({type:hy,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,t){1&e&&vo("change",(function(e){return
t.onChange(e.target.value)}))("blur",(function(){return
t.onTouched()}))},inputs:{compareWith:"compareWith"},features:[us([wy])]}),hy),Sy={provide:Mp,useExisting:Se((function(){return
Ey})),multi:!0},Ey=((fy=function(){function
e(t,n){_classCallCheck(this,e),this._renderer=t,this._elementRef=n,this._optionMap=new
Map,this._idCounter=0,this.onChange=function(e){},this.onTouched=function(){},this._compareWith=Ja}return
_createClass(e,[{key:"writeValue",value:function(e){var
t,n=this;if(this.value=e,Array.isArray(e)){var r=e.map((function(e){return
n._getOptionId(e)}));t=function(e,t){e._setSelected(r.indexOf(t.toString())>-1)}}else
t=function(e,t){e._setSelected(!1)};this._optionMap.forEach(t)}},{key:"registerOnChange",value:function(e){var
t=this;this.onChange=function(n){var
r=[];if(n.hasOwnProperty("selectedOptions"))for(var
i=n.selectedOptions,a=0;a<i.length;a++){var
o=i.item(a),s=t._getOptionValue(o.value);r.push(s)}else for(var
u=n.options,l=0;l<u.length;l++){var c=u.item(l);if(c.selected){var
h=t._getOptionValue(c.value);r.push(h)}}t.value=r,e(r)}}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}},{key:"_registerOption",value:function(e){var
t=(this._idCounter++).toString();return
this._optionMap.set(t,e),t}},{key:"_getOptionId",value:function(e){for(var
t=0,n=Array.from(this._optionMap.keys());t<n.length;t++){var
r=n[t];if(this._compareWith(this._optionMap.get(r)._value,e))return r}return
null}},{key:"_getOptionValue",value:function(e){var t=function(e){return
e.split(":")[0]}(e);return
this._optionMap.has(t)?this._optionMap.get(t)._value:e}},{key:"compareWith",set:function(e){if("function"!=typeof
e)throw new Error("compareWith must be a function, but received
"+JSON.stringify(e));this._compareWith=e}}]),e}()).\u0275fac=function(e){return
new(e||fy)(io(ys),io(fs))},fy.\u0275dir=gt({type:fy,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,t){1&e&&vo("change",(function(e){return
t.onChange(e.target)}))("blur",(function(){return
t.onTouched()}))},inputs:{compareWith:"compareWith"},features:[us([Sy])]}),fy);function
Ty(e,t){return[].concat(_toConsumableArray(t.path),[e])}function
xy(e,t){e||Oy(t,"Cannot find control with"),t.valueAccessor||Oy(t,"No value
accessor for form control
with"),e.validator=ty.compose([e.validator,t.validator]),e.asyncValidator=ty.composeAsync([e.asyncValidator,t.asyncValidator]),t.valueAccessor.writeValue(e.value),function(e,t){t.valueAccessor.registerOnChange((function(n){e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Ay(e,t)}))}(e,t),function(e,t){e.registerOnChange((function(e,n){t.valueAccessor.writeValue(e),n&&t.viewToModelUpdate(e)}))}(e,t),function(e,t){t.valueAccessor.registerOnTouched((function(){e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Ay(e,t),"submit"!==e.updateOn&&e.markAsTouched()}))}(e,t),t.valueAccessor.setDisabledState&&e.registerOnDisabledChange((function(e){t.valueAccessor.setDisabledState(e)})),t._rawValidators.forEach((function(t){t.registerOnValidatorChange&&t.registerOnValidatorChange((function(){return
e.updateValueAndValidity()}))})),t._rawAsyncValidators.forEach((function(t){t.registerOnValidatorChange&&t.registerOnValidatorChange((function(){return
e.updateValueAndValidity()}))}))}function
Ay(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function
Oy(e,t){var n;throw n=e.path.length>1?"path: '".concat(e.path.join(" ->
"),"'"):e.path[0]?"name: '".concat(e.path,"'"):"unspecified name
attribute",new Error("".concat(t," ").concat(n))}function Ry(e){return
null!=e?ty.compose(e.map(ay)):null}function Iy(e){return
null!=e?ty.composeAsync(e.map(oy)):null}var Py=[Up,_y,vy,by,Ey,my];function
Ny(e){var t=Vy(e)?e.validators:e;return
Array.isArray(t)?Ry(t):t||null}function Dy(e,t){var
n=Vy(t)?t.asyncValidators:e;return Array.isArray(n)?Iy(n):n||null}function
Vy(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}var
jy,Fy,My,Ly,Uy,Hy,zy,By,qy,Wy,Gy,Qy=function(){function
e(t,n){_classCallCheck(this,e),this.validator=t,this.asyncValidator=n,this._onCollectionChange=function(){},this.pristine=!0,this.touched=!1,this._onDisabledChange=[]}return
_createClass(e,[{key:"setValidators",value:function(e){this.validator=Ny(e)}},{key:"setAsyncValidators",value:function(e){this.asyncValidator=Dy(e)}},{key:"clearValidators",value:function(){this.validator=null}},{key:"clearAsyncValidators",value:function(){this.asyncValidator=null}},{key:"markAsTouched",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}},{key:"markAllAsTouched",value:function(){this.markAsTouched({onlySelf:!0}),this._forEachChild((function(e){return
e.markAllAsTouched()}))}},{key:"markAsUntouched",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};this.touched=!1,this._pendingTouched=!1,this._forEachChild((function(e){e.markAsUntouched({onlySelf:!0})})),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}},{key:"markAsDirty",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}},{key:"markAsPristine",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};this.pristine=!0,this._pendingDirty=!1,this._forEachChild((function(e){e.markAsPristine({onlySelf:!0})})),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}},{key:"markAsPending",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};this.status="PENDING",!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}},{key:"disable",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{},t=this._parentMarkedDirty(e.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild((function(t){t.disable(Object.assign(Object.assign({},e),{onlySelf:!0}))})),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach((function(e){return
e(!0)}))}},{key:"enable",value:function(){var e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{},t=this._parentMarkedDirty(e.onlySelf);this.status="VALID",this._forEachChild((function(t){t.enable(Object.assign(Object.assign({},e),{onlySelf:!0}))})),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach((function(e){return
e(!1)}))}},{key:"_updateAncestors",value:function(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}},{key:"setParent",value:function(e){this._parent=e}},{key:"updateValueAndValidity",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}},{key:"_updateTreeValidity",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{emitEvent:!0};this._forEachChild((function(t){return
t._updateTreeValidity(e)})),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}},{key:"_setInitialStatus",value:function(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}},{key:"_runValidator",value:function(){return
this.validator?this.validator(this):null}},{key:"_runAsyncValidator",value:function(e){var
t=this;if(this.asyncValidator){this.status="PENDING";var
n=ry(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe((function(n){return
t.setErrors(n,{emitEvent:e})}))}}},{key:"_cancelExistingSubscription",value:function(){this._asyncValidationSubscription&&this._asyncValidationSubscription.unsubscribe()}},{key:"setErrors",value:function(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}},{key:"get",value:function(e){return
function(e,t,n){if(null==t)return
null;if(Array.isArray(t)||(t=t.split(".")),Array.isArray(t)&&0===t.length)return
null;var r=e;return t.forEach((function(e){r=r instanceof
Ky?r.controls.hasOwnProperty(e)?r.controls[e]:null:r instanceof
$y&&r.at(e)||null})),r}(this,e)}},{key:"getError",value:function(e,t){var
n=t?this.get(t):this;return
n&&n.errors?n.errors[e]:null}},{key:"hasError",value:function(e,t){return!!this.getError(e,t)}},{key:"_updateControlsErrors",value:function(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}},{key:"_initObservables",value:function(){this.valueChanges=new
eu,this.statusChanges=new eu}},{key:"_calculateStatus",value:function(){return
this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}},{key:"_anyControlsHaveStatus",value:function(e){return
this._anyControls((function(t){return
t.status===e}))}},{key:"_anyControlsDirty",value:function(){return
this._anyControls((function(e){return
e.dirty}))}},{key:"_anyControlsTouched",value:function(){return
this._anyControls((function(e){return
e.touched}))}},{key:"_updatePristine",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}},{key:"_updateTouched",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{};this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}},{key:"_isBoxedValue",value:function(e){return"object"==typeof
e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in
e}},{key:"_registerOnCollectionChange",value:function(e){this._onCollectionChange=e}},{key:"_setUpdateStrategy",value:function(e){Vy(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}},{key:"_parentMarkedDirty",value:function(e){return!e&&this._parent&&this._parent.dirty&&!this._parent._anyControlsDirty()}},{key:"parent",get:function(){return
this._parent}},{key:"valid",get:function(){return"VALID"===this.status}},{key:"invalid",get:function(){return"INVALID"===this.status}},{key:"pending",get:function(){return"PENDING"==this.status}},{key:"disabled",get:function(){return"DISABLED"===this.status}},{key:"enabled",get:function(){return"DISABLED"!==this.status}},{key:"dirty",get:function(){return!this.pristine}},{key:"untouched",get:function(){return!this.touched}},{key:"updateOn",get:function(){return
this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}},{key:"root",get:function(){for(var
e=this;e._parent;)e=e._parent;return
e}}]),e}(),Zy=function(e){_inherits(n,e);var t=_createSuper(n);function
n(){var e,r=arguments.length>0&&void
0!==arguments[0]?arguments[0]:null,i=arguments.length>1?arguments[1]:void
0,a=arguments.length>2?arguments[2]:void 0;return
_classCallCheck(this,n),(e=t.call(this,Ny(i),Dy(a,i)))._onChange=[],e._applyFormState(r),e._setUpdateStrategy(i),e.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),e._initObservables(),e}return
_createClass(n,[{key:"setValue",value:function(e){var
t=this,n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};this.value=this._pendingValue=e,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach((function(e){return
e(t.value,!1!==n.emitViewToModelChange)})),this.updateValueAndValidity(n)}},{key:"patchValue",value:function(e){var
t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};this.setValue(e,t)}},{key:"reset",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}},{key:"_updateValue",value:function(){}},{key:"_anyControls",value:function(e){return!1}},{key:"_allControlsDisabled",value:function(){return
this.disabled}},{key:"registerOnChange",value:function(e){this._onChange.push(e)}},{key:"_clearChangeFns",value:function(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=function(){}}},{key:"registerOnDisabledChange",value:function(e){this._onDisabledChange.push(e)}},{key:"_forEachChild",value:function(e){}},{key:"_syncPendingControls",value:function(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}},{key:"_applyFormState",value:function(e){this._isBoxedValue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}}]),n}(Qy),Ky=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this,Ny(r),Dy(i,r))).controls=e,a._initObservables(),a._setUpdateStrategy(r),a._setUpControls(),a.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),a}return
_createClass(n,[{key:"registerControl",value:function(e,t){return
this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}},{key:"addControl",value:function(e,t){this.registerControl(e,t),this.updateValueAndValidity(),this._onCollectionChange()}},{key:"removeControl",value:function(e){this.controls[e]&&this.controls[e]._registerOnCollectionChange((function(){})),delete
this.controls[e],this.updateValueAndValidity(),this._onCollectionChange()}},{key:"setControl",value:function(e,t){this.controls[e]&&this.controls[e]._registerOnCollectionChange((function(){})),delete
this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity(),this._onCollectionChange()}},{key:"contains",value:function(e){return
this.controls.hasOwnProperty(e)&&this.controls[e].enabled}},{key:"setValue",value:function(e){var
t=this,n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};this._checkAllValuesPresent(e),Object.keys(e).forEach((function(r){t._throwIfControlMissing(r),t.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:n.emitEvent})})),this.updateValueAndValidity(n)}},{key:"patchValue",value:function(e){var
t=this,n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach((function(r){t.controls[r]&&t.controls[r].patchValue(e[r],{onlySelf:!0,emitEvent:n.emitEvent})})),this.updateValueAndValidity(n)}},{key:"reset",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};this._forEachChild((function(n,r){n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})})),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}},{key:"getRawValue",value:function(){return
this._reduceChildren({},(function(e,t,n){return e[n]=t instanceof
Zy?t.value:t.getRawValue(),e}))}},{key:"_syncPendingControls",value:function(){var
e=this._reduceChildren(!1,(function(e,t){return!!t._syncPendingControls()||e}));return
e&&this.updateValueAndValidity({onlySelf:!0}),e}},{key:"_throwIfControlMissing",value:function(e){if(!Object.keys(this.controls).length)throw
new Error("\n        There are no form controls registered with this group
yet.  If you're using ngModel,\n        you may want to check next tick (e.g.
use setTimeout).\n      ");if(!this.controls[e])throw new Error("Cannot find
form control with name:
".concat(e,"."))}},{key:"_forEachChild",value:function(e){var
t=this;Object.keys(this.controls).forEach((function(n){return
e(t.controls[n],n)}))}},{key:"_setUpControls",value:function(){var
e=this;this._forEachChild((function(t){t.setParent(e),t._registerOnCollectionChange(e._onCollectionChange)}))}},{key:"_updateValue",value:function(){this.value=this._reduceValue()}},{key:"_anyControls",value:function(e){var
t=this,n=!1;return
this._forEachChild((function(r,i){n=n||t.contains(i)&&e(r)})),n}},{key:"_reduceValue",value:function(){var
e=this;return
this._reduceChildren({},(function(t,n,r){return(n.enabled||e.disabled)&&(t[r]=n.value),t}))}},{key:"_reduceChildren",value:function(e,t){var
n=e;return
this._forEachChild((function(e,r){n=t(n,e,r)})),n}},{key:"_allControlsDisabled",value:function(){for(var
e=0,t=Object.keys(this.controls);e<t.length;e++){var
n=t[e];if(this.controls[n].enabled)return!1}return
Object.keys(this.controls).length>0||this.disabled}},{key:"_checkAllValuesPresent",value:function(e){this._forEachChild((function(t,n){if(void
0===e[n])throw new Error("Must supply a value for form control with name:
'".concat(n,"'."))}))}}]),n}(Qy),$y=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this,Ny(r),Dy(i,r))).controls=e,a._initObservables(),a._setUpdateStrategy(r),a._setUpControls(),a.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),a}return
_createClass(n,[{key:"at",value:function(e){return
this.controls[e]}},{key:"push",value:function(e){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity(),this._onCollectionChange()}},{key:"insert",value:function(e,t){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity()}},{key:"removeAt",value:function(e){this.controls[e]&&this.controls[e]._registerOnCollectionChange((function(){})),this.controls.splice(e,1),this.updateValueAndValidity()}},{key:"setControl",value:function(e,t){this.controls[e]&&this.controls[e]._registerOnCollectionChange((function(){})),this.controls.splice(e,1),t&&(this.controls.splice(e,0,t),this._registerControl(t)),this.updateValueAndValidity(),this._onCollectionChange()}},{key:"setValue",value:function(e){var
t=this,n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};this._checkAllValuesPresent(e),e.forEach((function(e,r){t._throwIfControlMissing(r),t.at(r).setValue(e,{onlySelf:!0,emitEvent:n.emitEvent})})),this.updateValueAndValidity(n)}},{key:"patchValue",value:function(e){var
t=this,n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};e.forEach((function(e,r){t.at(r)&&t.at(r).patchValue(e,{onlySelf:!0,emitEvent:n.emitEvent})})),this.updateValueAndValidity(n)}},{key:"reset",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};this._forEachChild((function(n,r){n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})})),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}},{key:"getRawValue",value:function(){return
this.controls.map((function(e){return e instanceof
Zy?e.value:e.getRawValue()}))}},{key:"clear",value:function(){this.controls.length<1||(this._forEachChild((function(e){return
e._registerOnCollectionChange((function(){}))})),this.controls.splice(0),this.updateValueAndValidity())}},{key:"_syncPendingControls",value:function(){var
e=this.controls.reduce((function(e,t){return!!t._syncPendingControls()||e}),!1);return
e&&this.updateValueAndValidity({onlySelf:!0}),e}},{key:"_throwIfControlMissing",value:function(e){if(!this.controls.length)throw
new Error("\n        There are no form controls registered with this array
yet.  If you're using ngModel,\n        you may want to check next tick (e.g.
use setTimeout).\n      ");if(!this.at(e))throw new Error("Cannot find form
control at index
"+e)}},{key:"_forEachChild",value:function(e){this.controls.forEach((function(t,n){e(t,n)}))}},{key:"_updateValue",value:function(){var
e=this;this.value=this.controls.filter((function(t){return
t.enabled||e.disabled})).map((function(e){return
e.value}))}},{key:"_anyControls",value:function(e){return
this.controls.some((function(t){return
t.enabled&&e(t)}))}},{key:"_setUpControls",value:function(){var
e=this;this._forEachChild((function(t){return
e._registerControl(t)}))}},{key:"_checkAllValuesPresent",value:function(e){this._forEachChild((function(t,n){if(void
0===e[n])throw new Error("Must supply a value for form control at index:
".concat(n,"."))}))}},{key:"_allControlsDisabled",value:function(){var
e,t=_createForOfIteratorHelper(this.controls);try{for(t.s();!(e=t.n()).done;){if(e.value.enabled)return!1}}catch(n){t.e(n)}finally{t.f()}return
this.controls.length>0||this.disabled}},{key:"_registerControl",value:function(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}},{key:"length",get:function(){return
this.controls.length}}]),n}(Qy),Jy={provide:Wp,useExisting:Se((function(){return
Yy}))},Xy=Promise.resolve(null),Yy=((Fy=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this)).submitted=!1,i._directives=[],i.ngSubmit=new
eu,i.form=new Ky({},Ry(e),Iy(r)),i}return
_createClass(n,[{key:"ngAfterViewInit",value:function(){this._setUpdateStrategy()}},{key:"addControl",value:function(e){var
t=this;Xy.then((function(){var
n=t._findContainer(e.path);e.control=n.registerControl(e.name,e.control),xy(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),t._directives.push(e)}))}},{key:"getControl",value:function(e){return
this.form.get(e.path)}},{key:"removeControl",value:function(e){var
t=this;Xy.then((function(){var
n,r,i,a=t._findContainer(e.path);a&&a.removeControl(e.name),n=t._directives,r=e,(i=n.indexOf(r))>-1&&n.splice(i,1)}))}},{key:"addFormGroup",value:function(e){var
t=this;Xy.then((function(){var n=t._findContainer(e.path),r=new
Ky({});(function(e,t){null==e&&Oy(t,"Cannot find control
with"),e.validator=ty.compose([e.validator,t.validator]),e.asyncValidator=ty.composeAsync([e.asyncValidator,t.asyncValidator])})(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})}))}},{key:"removeFormGroup",value:function(e){var
t=this;Xy.then((function(){var
n=t._findContainer(e.path);n&&n.removeControl(e.name)}))}},{key:"getFormGroup",value:function(e){return
this.form.get(e.path)}},{key:"updateModel",value:function(e,t){var
n=this;Xy.then((function(){n.form.get(e.path).setValue(t)}))}},{key:"setValue",value:function(e){this.control.setValue(e)}},{key:"onSubmit",value:function(e){return
this.submitted=!0,t=this._directives,this.form._syncPendingControls(),t.forEach((function(e){var
t=e.control;"submit"===t.updateOn&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})),this.ngSubmit.emit(e),!1;var
t}},{key:"onReset",value:function(){this.resetForm()}},{key:"resetForm",value:function(e){this.form.reset(e),this.submitted=!1}},{key:"_setUpdateStrategy",value:function(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}},{key:"_findContainer",value:function(e){return
e.pop(),e.length?this.form.get(e):this.form}},{key:"formDirective",get:function(){return
this}},{key:"control",get:function(){return
this.form}},{key:"path",get:function(){return[]}},{key:"controls",get:function(){return
this.form.controls}}]),n}(Wp)).\u0275fac=function(e){return
new(e||Fy)(io(Xp,10),io(Yp,10))},Fy.\u0275dir=gt({type:Fy,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,t){1&e&&vo("submit",(function(e){return
t.onSubmit(e)}))("reset",(function(){return
t.onReset()}))},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[us([Jy]),Go]}),Fy),em=((jy=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"ngOnInit",value:function(){this._checkParentType(),this.formDirective.addFormGroup(this)}},{key:"ngOnDestroy",value:function(){this.formDirective&&this.formDirective.removeFormGroup(this)}},{key:"_checkParentType",value:function(){}},{key:"control",get:function(){return
this.formDirective.getFormGroup(this)}},{key:"path",get:function(){return
Ty(null==this.name?this.name:this.name.toString(),this._parent)}},{key:"formDirective",get:function(){return
this._parent?this._parent.formDirective:null}},{key:"validator",get:function(){return
Ry(this._validators)}},{key:"asyncValidator",get:function(){return
Iy(this._asyncValidators)}}]),n}(Wp)).\u0275fac=function(e){return
tm(e||jy)},jy.\u0275dir=gt({type:jy,features:[Go]}),jy),tm=Jn(em),nm=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,null,[{key:"modelParentException",value:function(){throw new
Error('\n      ngModel cannot be used to register form controls with a parent
formGroup directive.  Try using\n      formGroup\'s partner directive
"formControlName" instead.  Example:\n\n      \n    <div
[formGroup]="myGroup">\n      <input formControlName="firstName">\n   
</div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n      
firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid
registering this form control, indicate that it\'s standalone in
ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n
      <input formControlName="firstName">\n       <input
[(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n   
</div>\n  ')}},{key:"formGroupNameException",value:function(){throw new
Error("\n      ngModel cannot be used to register form controls with a parent
formGroupName or formArrayName directive.\n\n      Option 1: Use
formControlName instead of ngModel (reactive strategy):\n\n     
".concat(ky,"\n\n      Option 2:  Update ngModel's parent be ngModelGroup
(template-driven strategy):\n\n     
").concat(Cy))}},{key:"missingNameException",value:function(){throw new
Error('If ngModel is used within a form tag, either the name attribute must be
set or the form\n      control must be defined as \'standalone\' in
ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName"
name="first">\n      Example 2: <input [(ngModel)]="person.firstName"
[ngModelOptions]="{standalone:
true}">')}},{key:"modelGroupParentException",value:function(){throw new
Error("\n      ngModelGroup cannot be used with a parent formGroup
directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup
(reactive strategy):\n\n      ".concat(ky,"\n\n      Option 2:  Use a regular
form tag instead of the formGroup directive (template-driven strategy):\n\n   
  ").concat(Cy))}}]),e}(),rm={provide:Wp,useExisting:Se((function(){return
im}))},im=((My=function(e){_inherits(n,e);var t=_createSuper(n);function
n(e,r,i){var a;return
_classCallCheck(this,n),(a=t.call(this))._parent=e,a._validators=r,a._asyncValidators=i,a}return
_createClass(n,[{key:"_checkParentType",value:function(){this._parent
instanceof n||this._parent instanceof
Yy||nm.modelGroupParentException()}}]),n}(em)).\u0275fac=function(e){return
new(e||My)(io(Wp,5),io(Xp,10),io(Yp,10))},My.\u0275dir=gt({type:My,selectors:[["","ngModelGroup",""]],inputs:{name:["ngModelGroup","name"]},exportAs:["ngModelGroup"],features:[us([rm]),Go]}),My),am={provide:Kp,useExisting:Se((function(){return
sm}))},om=Promise.resolve(null),sm=((Hy=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var o;return
_classCallCheck(this,n),(o=t.call(this)).control=new
Zy,o._registered=!1,o.update=new
eu,o._parent=e,o._rawValidators=r||[],o._rawAsyncValidators=i||[],o.valueAccessor=function(e,t){if(!t)return
null;Array.isArray(t)||Oy(e,"Value accessor was not provided as an array for
form control with");var n=void 0,r=void 0,i=void 0;return
t.forEach((function(t){var
a;t.constructor===Bp?n=t:(a=t,Py.some((function(e){return
a.constructor===e}))?(r&&Oy(e,"More than one built-in value accessor matches
form control with"),r=t):(i&&Oy(e,"More than one custom value accessor matches
form control with"),i=t))})),i||r||n||(Oy(e,"No valid value accessor for form
control with"),null)}(_assertThisInitialized(o),a),o}return
_createClass(n,[{key:"ngOnChanges",value:function(e){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in
e&&this._updateDisabled(e),function(e,t){if(!e.hasOwnProperty("model"))return!1;var
n=e.model;return!!n.isFirstChange()||!Ja(t,n.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}},{key:"ngOnDestroy",value:function(){this.formDirective&&this.formDirective.removeControl(this)}},{key:"viewToModelUpdate",value:function(e){this.viewModel=e,this.update.emit(e)}},{key:"_setUpControl",value:function(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}},{key:"_setUpdateStrategy",value:function(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}},{key:"_isStandalone",value:function(){return!this._parent||!(!this.options||!this.options.standalone)}},{key:"_setUpStandalone",value:function(){xy(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}},{key:"_checkForErrors",value:function(){this._isStandalone()||this._checkParentType(),this._checkName()}},{key:"_checkParentType",value:function(){!(this._parent
instanceof im)&&this._parent instanceof
em?nm.formGroupNameException():this._parent instanceof im||this._parent
instanceof
Yy||nm.modelParentException()}},{key:"_checkName",value:function(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()||this.name||nm.missingNameException()}},{key:"_updateValue",value:function(e){var
t=this;om.then((function(){t.control.setValue(e,{emitViewToModelChange:!1})}))}},{key:"_updateDisabled",value:function(e){var
t=this,n=e.isDisabled.currentValue,r=""===n||n&&"false"!==n;om.then((function(){r&&!t.control.disabled?t.control.disable():!r&&t.control.disabled&&t.control.enable()}))}},{key:"path",get:function(){return
this._parent?Ty(this.name,this._parent):[this.name]}},{key:"formDirective",get:function(){return
this._parent?this._parent.formDirective:null}},{key:"validator",get:function(){return
Ry(this._rawValidators)}},{key:"asyncValidator",get:function(){return
Iy(this._rawAsyncValidators)}}]),n}(Kp)).\u0275fac=function(e){return
new(e||Hy)(io(Wp,9),io(Xp,10),io(Yp,10),io(Mp,10))},Hy.\u0275dir=gt({type:Hy,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[us([am]),Go,Xo]}),Hy),um=((Uy=function
e(){_classCallCheck(this,e)}).\u0275mod=yt({type:Uy}),Uy.\u0275inj=fe({factory:function(e){return
new(e||Uy)}}),Uy),lm=((Ly=function
e(){_classCallCheck(this,e)}).\u0275mod=yt({type:Ly}),Ly.\u0275inj=fe({factory:function(e){return
new(e||Ly)},providers:[yy],imports:[um]}),Ly),cm=function(){return(cm=Object.assign||function(e){for(var
t,n=1,r=arguments.length;n<r;n++)for(var i in
t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return
e}).apply(this,arguments)},hm=function(){function e(e,t,n){var
r=this;this.target=e,this.endVal=t,this.options=n,this.version="2.0.5",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(e){r.startTime||(r.startTime=e);var
t=e-r.startTime;r.remaining=r.duration-t,r.frameVal=r.useEasing?r.countDown?r.startVal-r.easingFn(t,0,r.startVal-r.endVal,r.duration):r.easingFn(t,r.startVal,r.endVal-r.startVal,r.duration):r.countDown?r.startVal-t/r.duration*(r.startVal-r.endVal):r.startVal+t/r.duration*(r.endVal-r.startVal),r.frameVal=r.countDown?r.frameVal<r.endVal?r.endVal:r.frameVal:r.frameVal>r.endVal?r.endVal:r.frameVal,r.frameVal=Math.round(r.frameVal*r.decimalMult)/r.decimalMult,r.printValue(r.frameVal),t<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.callback&&r.callback()},this.formatNumber=function(e){var
t,n,i,a,o,s=e<0?"-":"";if(t=Math.abs(e).toFixed(r.options.decimalPlaces),i=(n=(t+="").split("."))[0],a=n.length>1?r.options.decimal+n[1]:"",r.options.useGrouping){o="";for(var
u=0,l=i.length;u<l;++u)0!==u&&u%3==0&&(o=r.options.separator+o),o=i[l-u-1]+o;i=o}return
r.options.numerals&&r.options.numerals.length&&(i=i.replace(/[0-9]/g,(function(e){return
r.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return
r.options.numerals[+e]}))),s+r.options.prefix+i+a+r.options.suffix},this.easeOutExpo=function(e,t,n,r){return
n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=cm(cm({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof
e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp]
target is null or undefined"}return
e.prototype.determineDirectionAndSmartEasing=function(){var
e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold?(this.finalEndVal=e,this.endVal=e+(this.countDown?1:-1)*this.options.smartEasingAmount,this.duration=this.duration/2):(this.endVal=e,this.finalEndVal=null),this.useEasing=!this.finalEndVal&&this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var
t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof
e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return
this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value:
"+e,null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}(),fm=((By=function(){function
e(t,n,r){_classCallCheck(this,e),this.el=t,this.zone=n,this.platformId=r,this.options={},this.reanimateOnClick=!0,this.complete=new
eu}return
_createClass(e,[{key:"onClick",value:function(){this.reanimateOnClick&&this.animate()}},{key:"ngOnChanges",value:function(e){"browser"===this.platformId&&e.endVal&&void
0!==e.endVal.currentValue&&(void
0!==this.previousEndVal&&(this.options=Object.assign({},this.options,{startVal:this.previousEndVal})),this.countUp=new
hm(this.el.nativeElement,this.endVal,this.options),this.animate(),this.previousEndVal=this.endVal)}},{key:"animate",value:function(){var
e=this;this.zone.runOutsideAngular((function(){e.countUp.reset(),e.countUp.start((function(){e.zone.run((function(){e.complete.emit()}))}))}))}}]),e}()).\u0275fac=function(e){return
new(e||By)(io(fs),io(bu),io(su))},By.\u0275dir=gt({type:By,selectors:[["","countUp",""]],hostBindings:function(e,t){1&e&&vo("click",(function(){return
t.onClick()}))},inputs:{options:"options",reanimateOnClick:"reanimateOnClick",endVal:["countUp","endVal"]},outputs:{complete:"complete"},features:[Xo]}),By),dm=((zy=function
e(){_classCallCheck(this,e)}).\u0275mod=yt({type:zy}),zy.\u0275inj=fe({factory:function(e){return
new(e||zy)},imports:[[]]}),zy),vm=[{path:"**",component:(qy=function(){function
e(t,n){_classCallCheck(this,e),this.toastr=t,this.router=n,this.baseUrl=window.location.origin,this.telegramLink="https://t.me/tronbest",this.contractLink="https://tronscan.org/#/contract/TBrgoosVvwux7iMjSb9txNnyavG4MTNxVp/code",this.refAddress="TBrgoosVvwux7iMjSb9txNnyavG4MTNxVp",this.contractAddress="TBrgoosVvwux7iMjSb9txNnyavG4MTNxVp",this.roiPercent=50,this.monthlyProfitPercent=600,this.referralPercent=40,this.totalInvestedAmount="0",this.totalInvestors="0",this.totalReferralRewards="0",this.investTrxAmount=50,this.trxBalance=0,this.t1ReffererCount=0,this.t2ReffererCount=0,this.t3ReffererCount=0,this.t4ReffererCount=0,this.t5ReffererCount=0,this.t6ReffererCount=0,this.t7ReffererCount=0,this.t8ReffererCount=0,this.availableToWithdraw=0,this.userTotalPayout="0.0",this.userInvestment=0,this.usersTotalReferralRewards=0,this.isContract=!1,this.option={useEasing:!0,duration:2,decimalPlaces:6,separator:","},window.addEventListener("message",this.setAccountAddress.bind(this),!0),window.addEventListener("message",this.setEventServer.bind(this),!0),this.router.url.split("ref=")[1]&&(this.refAddress=this.router.url.split("ref=")[1])}return
_createClass(e,[{key:"ngOnInit",value:function(){var
e=this;this.interval=setInterval((function(){e.setAccountAddress()}),500)}},{key:"ngOnDestroy",value:function(){clearInterval(this.interval),clearInterval(this.profitInterval),clearInterval(this.userDataInterval),window.removeEventListener("message",this.setAccountAddress.bind(this),!0),window.removeEventListener("message",this.setEventServer.bind(this),!0)}},{key:"setContract",value:function(){return
Kv(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return
regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case
0:if(e.t0=global.tronWeb&&global.tronWeb,!e.t0){e.next=11;break}return
e.next=4,global.tronWeb.contract().at(this.contractAddress);case
4:this.contract=e.sent,this.isContract=!0,this.getPublicData(),this.getProfit(this.accountAddress),this.getUserData(this.accountAddress),this.userDataInterval=setInterval((function(){t.getUserData(t.accountAddress)}),1e4),this.profitInterval=setInterval((function(){t.getProfit(t.accountAddress)}),2e3);case
11:case"end":return
e.stop()}}),e,this)})))}},{key:"setEventServer",value:function(e){e.data.message&&"tabReply"==e.data.message.action&&(0==e.data.message.data.data.address?this.toastr.error("Please
Login to
TronLink"):e.data.message.data.data.node&&!e.data.message.data.data.node.name.includes("Mainnet")&&this.toastr.error("Please
switch to
Mainnet")),e.data.message&&"setNode"==e.data.message.action&&this.refresh()}},{key:"setAccountAddress",value:function(){global.tronWeb&&global.tronWeb.defaultAddress&&this.accountAddress!=global.tronWeb.defaultAddress.base58&&(this.accountAddress=global.tronWeb.defaultAddress.base58,this.getWalletBalance(this.accountAddress),this.isContract||this.setContract())}},{key:"getPublicData",value:function(){return
Kv(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r;return
regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case
0:return e.prev=0,e.next=3,this.contract.totalInvested().call();case 3:return
t=e.sent,n=parseInt(global.tronWeb.toDecimal(global.tronWeb.fromSun(t))),e.next=7,Math.round(global.tronWeb.fromSun(.15*global.tronWeb.toDecimal(t))).toLocaleString();case
7:return this.totalReferralRewards=e.sent,e.next=10,n.toLocaleString();case
10:return
this.totalInvestedAmount=e.sent,e.next=13,this.contract.totalPlayers().call();case
13:return r=e.sent,e.next=16,global.tronWeb.toDecimal(r).toLocaleString();case
16:this.totalInvestors=e.sent,e.next=22;break;case
19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return
e.stop()}}),e,this,[[0,19]])})))}},{key:"getWalletBalance",value:function(e){return
Kv(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return
regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case
0:return t.prev=0,t.next=3,global.tronWeb.trx.getBalance(e);case 3:return
n=t.sent,t.next=6,global.tronWeb.fromSun(n);case
6:this.trxBalance=t.sent,t.next=12;break;case
9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return
t.stop()}}),t,this,[[0,9]])})))}},{key:"getProfit",value:function(e){return
Kv(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return
regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case
0:return t.prev=0,t.next=3,this.contract.getProfit(e).call();case
3:n=t.sent,this.availableToWithdraw=global.tronWeb.fromSun(n),t.next=10;break;case
7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return
t.stop()}}),t,this,[[0,7]])})))}},{key:"getUserData",value:function(e){return
Kv(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return
regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case
0:return t.prev=0,t.next=3,this.contract.players(e).call();case
3:(n=t.sent)&&(this.t1ReffererCount=global.tronWeb.toDecimal(n.aff1sum),this.t2ReffererCount=global.tronWeb.toDecimal(n.aff2sum),this.t3ReffererCount=global.tronWeb.toDecimal(n.aff3sum),this.t4ReffererCount=global.tronWeb.toDecimal(n.aff4sum),this.t5ReffererCount=global.tronWeb.toDecimal(n.aff5sum),this.t6ReffererCount=global.tronWeb.toDecimal(n.aff6sum),this.t7ReffererCount=global.tronWeb.toDecimal(n.aff7sum),this.t8ReffererCount=global.tronWeb.toDecimal(n.aff8sum),this.userInvestment=global.tronWeb.fromSun(global.tronWeb.toDecimal(n.trxDeposit)),this.usersTotalReferralRewards=global.tronWeb.fromSun(global.tronWeb.toDecimal(n.affRewards)),this.userTotalPayout=global.tronWeb.fromSun(global.tronWeb.toDecimal(n.payoutSum)+global.tronWeb.toDecimal(n.affRewards)),this.userTotalPayout=parseFloat(this.userTotalPayout).toFixed(2)),t.next=10;break;case
7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return
t.stop()}}),t,this,[[0,7]])})))}},{key:"onInvest",value:function(){return
Kv(this,void 0,void 0,regeneratorRuntime.mark((function e(){var
t,n=this;return
regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case
0:if(!global.tronWeb||!global.tronWeb.defaultAddress.base58){e.next=20;break}if(t=global.tronWeb,e.prev=2,!(this.investTrxAmount<50)){e.next=7;break}this.toastr.error("Minimum
investment 50 TRX"),e.next=13;break;case
7:if(!(this.investTrxAmount>this.trxBalance)){e.next=11;break}this.toastr.warning("Low
Balance"),e.next=13;break;case 11:return
e.next=13,this.contract.deposit(this.refAddress).send({feeLimit:1e8,callValue:t.toHex(t.toSun(this.investTrxAmount))}).then((function(e){n.toastr.success("Deposit
Successfull!"),setTimeout((function(){n.refresh()}),2e3)}),(function(e){n.toastr.error(e)}));case
13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),"invalid
address"==JSON.parse(JSON.stringify(e.t0)).reason?this.toastr.error("Invalid
Referrer Address!"):this.toastr.error("Network Error!");case
18:e.next=21;break;case 20:this.toastr.error("Please switch to Mainnet");case
21:case"end":return
e.stop()}}),e,this,[[2,15]])})))}},{key:"onWithdraw",value:function(){return
Kv(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return
regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case
0:if(!global.tronWeb||!global.tronWeb.defaultAddress.base58){e.next=15;break}if(e.prev=1,!(this.availableToWithdraw<=0)){e.next=6;break}this.toastr.warning("Low
Balance!"),e.next=8;break;case 6:return
e.next=8,this.contract.withdraw().send({feeLimit:1e8,callValue:0}).then((function(e){e&&(t.toastr.success("Withdraw
Successfull!"),setTimeout((function(){}),2e3))}));case 8:e.next=13;break;case
10:e.prev=10,e.t0=e.catch(1),this.toastr.error("Network Error");case
13:e.next=16;break;case 15:this.toastr.error("Please switch to Mainnet");case
16:case"end":return
e.stop()}}),e,this,[[1,10]])})))}},{key:"onCompound",value:function(){return
Kv(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return
regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case
0:if(!global.tronWeb||!global.tronWeb.defaultAddress.base58){e.next=15;break}if(e.prev=1,!(this.availableToWithdraw<=0)){e.next=6;break}this.toastr.warning("Low
Balance!"),e.next=8;break;case 6:return
e.next=8,this.contract.reinvest().send({feeLimit:1e8,callValue:0}).then((function(e){t.toastr.success("ReInvested
Successfully!"),setTimeout((function(){t.refresh()}),2e3)}));case
8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("err:
",e.t0),this.toastr.error("Network Error");case 13:e.next=16;break;case
15:this.toastr.error("Please switch to Mainnet");case 16:case"end":return
e.stop()}}),e,this,[[1,10]])})))}},{key:"copyLink",value:function(){var
e=document.getElementById("refLink").textContent,t=document.createElement("textarea");t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.opacity="0",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.toastr.success("Copied
to
Clipboard")}},{key:"refresh",value:function(){window.location.reload()}}]),e}(),qy.\u0275fac=function(e){return
new(e||qy)(io(Op),io(Ev))},qy.\u0275cmp=ft({type:qy,selectors:[["app-home"]],decls:195,vars:27,consts:[["data-gr-c-s-loaded","true","cz-shortcut-listen","true"],["id","root"],[1,"App"],[1,"roi","ROI200"],["align","middle",1,"roiBackground"],["align","right",1,"roiHeader"],["src","../../assets/images/logo.png","alt","logo"],["align","left",1,"roiPromptSection"],[2,"color","rgb(36,
222,
215)"],["align","left",1,"linkSection"],[1,"checkContract"],["target","_blank","rel","noopener
noreferrer",1,"btn-grad",3,"href"],["src","../../assets/images/thumb.png",2,"height","35px","margin-right","10px"],[1,"checkContract",2,"margin-left","10px"],["src","../../assets/images/telegram-512.png",2,"height","35px","margin-right","10px"],[1,"ant-row-flex","ant-row-flex-space-around","ant-row-flex-middle","tierSection"],[1,"ant-col","ant-col-xs-24","ant-col-sm-24","ant-col-md-11"],["align","middle",1,"totalcount"],["align","middle",1,"tierDivision"],[1,"tiermanagement"],[2,"height","300px"],[1,"ant-row-flex","ant-row-flex-space-around","ant-row-flex-middle","roiSection"],["align","middle",1,"investSection"],[1,"investPrompt"],[1,"whitecard"],[2,"font-size","16px"],[1,"fixHeightDiv"],[1,"investInput"],[1,"ant-input-affix-wrapper","ant-input-affix-wrapper-lg"],[1,"ant-input-prefix"],["src","assets/images/trx.png","alt","trx","width","30px"],["type","text",1,"ant-input","ant-input-lg",3,"ngModel","value","ngModelChange"],[1,"ant-input-suffix"],[2,"color","black","font-size","18px","margin","0px","padding-left","10px"],["align","middle"],[1,"investButton",3,"click"],[1,"blueText"],[2,"font-weight","600","margin-top","20px","font-size","12px"],[2,"margin-left","10px"],[1,"withdrawSection"],[1,"withdrawPrompt"],[1,"withdrawable"],[1,"trxProfit"],[2,"display","inline-flex"],[3,"countUp","options"],[2,"margin-left","5px"],[1,"withdrawBottomPrompt"],["align","middle",1,"wth-buttons",2,"margin-top","20px"],[2,"font-size","20px","margin-right","10px"],[1,"withdrawButton","reInvestButton",3,"click"],[2,"color","white"],[1,"withdrawButton",2,"margin-left","10px",3,"click"],["align","middle",1,"blueText"],[1,"investSection","investReferral"],["align","middle",1,"refTitle"],["align","middle",1,"referralLinkSection"],[1,"ant-row-flex","ant-row-flex-center","ant-row-flex-top"],[1,"ant-col","ant-col-xs-16","ant-col-sm-16","ant-col-md-14"],["id","refLink",1,"referralLink",2,"color","black"],[1,"ant-col","ant-col-xs-2","ant-col-sm-2","ant-col-md-2"],[1,"ant-col","ant-col-xs-6","ant-col-sm-6","ant-col-md-4"],[1,"copyButton",3,"click"],[1,"ant-col","ant-col-xs-24","ant-col-sm-24","ant-col-md-14"],[2,"text-align","left","color","red"],[2,"text-align","left","color","black","margin-bottom","40px"],[1,"ant-col","ant-col-xs-0","ant-col-sm-0","ant-col-md-2"],[1,"ant-col","ant-col-xs-0","ant-col-sm-0","ant-col-md-4"],["align","middle",1,"referalstatus"],[1,"statusPrompt"],[1,"ant-row-flex","ant-row-flex-space-around","ant-row-flex-middle","referralStatus"],[1,"ant-col","ant-col-xs-5","ant-col-sm-5","ant-col-md-5",2,"text-align","left"],[1,"ant-col","ant-col-xs-6","ant-col-sm-6","ant-col-md-6",2,"text-align","right"],["align","middle",1,"ant-col","ant-col-xs-1","ant-col-sm-1","ant-col-md-1",2,"text-align","center"],["role","separator",1,"ant-divider","ant-divider-vertical",2,"background-color","rgb(68,
68,
68)","height","100px"],[1,"refRewards"],[1,"faq"]],template:function(e,t){1&e&&(uo(0,"body",0),uo(1,"noscript"),Uo(2,"You
need to enable JavaScript to run this
app."),lo(),uo(3,"div",1),uo(4,"div",2),uo(5,"div",3),uo(6,"div",4),uo(7,"div",5),co(8,"img",6),lo(),uo(9,"div",7),uo(10,"h1"),uo(11,"span",8),Uo(12),lo(),Uo(13,"Daily
ROI "),lo(),uo(14,"h2"),Uo(15," Upto
"),uo(16,"span",8),Uo(17,"infinity"),lo(),lo(),uo(18,"p"),Uo(19,"\xa0"),lo(),uo(20,"p"),Uo(21,"Fully
Verified and Open Source Smart
Contract"),lo(),uo(22,"div",9),uo(23,"div",10),uo(24,"a",11),co(25,"img",12),Uo(26,"Verify
Contract"),lo(),lo(),uo(27,"div",13),uo(28,"a",11),co(29,"img",14),Uo(30,"Telegram"),lo(),lo(),lo(),lo(),lo(),uo(31,"div",15),uo(32,"div",16),uo(33,"div",17),uo(34,"h1"),Uo(35),lo(),uo(36,"p"),Uo(37,"Invested
TRX"),lo(),uo(38,"h1"),Uo(39),lo(),uo(40,"p"),Uo(41,"Total Referral
Rewards"),lo(),uo(42,"h1"),Uo(43),lo(),uo(44,"p"),Uo(45,"Total
Investors"),lo(),lo(),lo(),uo(46,"div",16),uo(47,"div",18),uo(48,"h1"),uo(49,"span",8),Uo(50),lo(),Uo(51,"
Referral Rewards "),lo(),uo(52,"h1"),Uo(53," in "),uo(54,"span",8),Uo(55," 8
"),lo(),Uo(56," levels
"),lo(),uo(57,"div",19),uo(58,"div",20),Uo(59,"\xa0"),lo(),lo(),lo(),lo(),lo(),uo(60,"div",21),uo(61,"div",16),uo(62,"div",22),uo(63,"div",23),uo(64,"div",24),uo(65,"h2"),Uo(66),uo(67,"span",25),Uo(68,"/Day"),lo(),lo(),uo(69,"div",26),uo(70,"div"),uo(71,"h3"),Uo(72,"
Period: unlimited
"),lo(),lo(),uo(73,"div",27),uo(74,"span",28),uo(75,"span",29),co(76,"img",30),lo(),uo(77,"input",31),vo("ngModelChange",(function(e){return
t.investTrxAmount=e})),lo(),uo(78,"span",32),uo(79,"p",33),Uo(80," TRX
"),lo(),lo(),lo(),lo(),lo(),uo(81,"div",34),uo(82,"div",35),vo("click",(function(){return
t.onInvest()})),Uo(83,"Invest"),lo(),lo(),uo(84,"div",36),uo(85,"p",37),Uo(86,"
Balance of Your TRX:
"),uo(87,"span",38),Uo(88),lo(),lo(),lo(),lo(),lo(),lo(),lo(),uo(89,"div",16),uo(90,"div",39),uo(91,"div",40),uo(92,"div",24),uo(93,"h2"),Uo(94,"Dividends"),lo(),uo(95,"div",26),uo(96,"p",41),Uo(97,"Your
Investments"),lo(),uo(98,"h1"),Uo(99),lo(),uo(100,"p",41),Uo(101,"Available to
withdraw"),lo(),uo(102,"h1",42),uo(103,"span",43),co(104,"h1",44),uo(105,"h1",45),Uo(106,"TRX"),lo(),lo(),lo(),uo(107,"div",46),uo(108,"p"),Uo(109,"1-3
TRX transaction fee will be
applied"),lo(),lo(),lo(),uo(110,"div",47),co(111,"span",48),uo(112,"div",49),vo("click",(function(){return
t.onCompound()})),uo(113,"p",50),Uo(114,"Compound"),lo(),lo(),uo(115,"div",51),vo("click",(function(){return
t.onWithdraw()})),uo(116,"p"),Uo(117,"Withdraw"),lo(),lo(),lo(),uo(118,"div",52),uo(119,"p",37),Uo(120,"
Total Payout (Referral Rewards Included):
"),uo(121,"span",38),Uo(122),lo(),lo(),lo(),lo(),lo(),lo(),lo(),lo(),uo(123,"div",53),uo(124,"div",54),uo(125,"h2"),Uo(126,"Referral"),lo(),lo(),uo(127,"div",55),uo(128,"div",56),uo(129,"div",57),uo(130,"p",58),Uo(131),lo(),lo(),co(132,"div",59),uo(133,"div",60),uo(134,"div",61),vo("click",(function(){return
t.copyLink()})),uo(135,"span"),Uo(136,"Copy"),lo(),lo(),lo(),lo(),uo(137,"div",56),uo(138,"div",62),uo(139,"h6",63),Uo(140,"
You need to invest at least 50 TRX in Tron Express in order to activate the
referral link. "),lo(),uo(141,"h6",64),Uo(142," Referral rewards will be
transfered to your wallet directly. You do not need to manually withdraw them.
"),lo(),lo(),co(143,"div",65),co(144,"div",66),lo(),lo(),uo(145,"div",67),uo(146,"p",68),Uo(147,"Referral
Status"),lo(),uo(148,"div",69),uo(149,"div",70),uo(150,"p"),Uo(151,"Level 1
(20%)"),lo(),uo(152,"p"),Uo(153,"Level 3 (4%)"),lo(),uo(154,"p"),Uo(155,"Level
5 (2%)"),lo(),uo(156,"p"),Uo(157,"Level 7
(1%)"),lo(),lo(),uo(158,"div",71),uo(159,"p"),Uo(160),lo(),uo(161,"p"),Uo(162),lo(),uo(163,"p"),Uo(164),lo(),uo(165,"p"),Uo(166),lo(),lo(),uo(167,"div",72),co(168,"div",73),lo(),uo(169,"div",70),uo(170,"p"),Uo(171,"Level
2 (8%)"),lo(),uo(172,"p"),Uo(173,"Level 4
(2%)"),lo(),uo(174,"p"),Uo(175,"Level 6 (2%)"),lo(),uo(176,"p"),Uo(177,"Level
8
(1%)"),lo(),lo(),uo(178,"div",71),uo(179,"p"),Uo(180),lo(),uo(181,"p"),Uo(182),lo(),uo(183,"p"),Uo(184),lo(),uo(185,"p"),Uo(186),lo(),lo(),uo(187,"p",74),Uo(188),lo(),lo(),lo(),lo(),uo(189,"div",75),uo(190,"div",34),uo(191,"h1",8),Uo(192,"About\xa0Tron
Express"),lo(),uo(193,"p"),Uo(194),lo(),lo(),lo(),lo(),lo(),lo(),lo()),2&e&&(oi(12),zo("",t.roiPercent,"%
"),oi(12),go("href",t.contractLink,Ur),oi(4),go("href",t.telegramLink,Ur),oi(7),Ho(t.totalInvestedAmount),oi(4),Ho(t.totalReferralRewards),oi(4),Ho(t.totalInvestors),oi(7),zo("
",t.referralPercent,"%"),oi(16),zo("
",t.roiPercent,"%"),oi(11),go("value",t.investTrxAmount),oo("ngModel",t.investTrxAmount),oi(11),zo("",t.trxBalance,"
TRX"),oi(11),zo("",t.userInvestment,"
TRX"),oi(5),oo("countUp",t.availableToWithdraw)("options",t.option),oi(18),zo("",t.userTotalPayout,"
TRX"),oi(9),Bo(" ",t.baseUrl,"/?ref=",t.accountAddress,"
"),oi(29),zo("",t.t1ReffererCount,"
Referrals"),oi(2),zo("",t.t3ReffererCount,"
Referrals"),oi(2),zo("",t.t5ReffererCount,"
Referrals"),oi(2),zo("",t.t7ReffererCount,"
Referrals"),oi(14),zo("",t.t2ReffererCount,"
Referrals"),oi(2),zo("",t.t4ReffererCount,"
Referrals"),oi(2),zo("",t.t6ReffererCount,"
Referrals"),oi(2),zo("",t.t8ReffererCount," Referrals"),oi(2),zo(" Total
Referral Rewards: ",t.usersTotalReferralRewards," TRX "),oi(6),zo(" This is an
open source platform that is 100% transparent and fair to all depositor,
contract will continuously run on Tron blockchain. After every deposit, a
member can start withdrawing his earnings every minute as long as there is
fund available to withdraw, a ",t.roiPercent,"% daily ROI of your deposit will
be credited to your account, and this will continue forever if contract has
funds. There is no limit on deposits. The bigger your deposits the more you
earn, you can apply also the strategy of compounding for bigger profit. For
each deposit, contract gives 40% distributed to referrers. Referral commission
is transferred directly to referrer's account.
"))},directives:[Bp,$p,sm,fm],styles:[""]}),qy)}],pm=((Gy=function
e(){_classCallCheck(this,e)}).\u0275mod=yt({type:Gy}),Gy.\u0275inj=fe({factory:function(e){return
new(e||Gy)},imports:[[Lv.forRoot(vm)],Lv]}),Gy),ym=((Wy=function
e(){_classCallCheck(this,e),this.title="tronexpress"}).\u0275fac=function(e){return
new(e||Wy)},Wy.\u0275cmp=ft({type:Wy,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){1&e&&co(0,"router-outlet")},directives:[Av],styles:[""]}),Wy);function
mm(){return"undefined"!=typeof process&&"[object
process]"==={}.toString.call(process)}function gm(e){switch(e.length){case
0:return new rp;case 1:return e[0];default:return new ip(e)}}function
_m(e,t,n,r){var i=arguments.length>4&&void
0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void
0!==arguments[5]?arguments[5]:{},o=[],s=[],u=-1,l=null;if(r.forEach((function(e){var
n=e.offset,r=n==u,c=r&&l||{};Object.keys(e).forEach((function(n){var
r=n,s=e[n];if("offset"!==n)switch(r=t.normalizePropertyName(r,o),s){case"!":s=i[n];break;case"*":s=a[n];break;default:s=t.normalizeStyleValue(n,r,s,o)}c[r]=s})),r||s.push(c),l=c,u=n})),o.length){var
c="\n - ";throw new Error("Unable to animate due to the following
errors:".concat(c).concat(o.join(c)))}return s}function
km(e,t,n,r){switch(t){case"start":e.onStart((function(){return
r(n&&Cm(n,"start",e))}));break;case"done":e.onDone((function(){return
r(n&&Cm(n,"done",e))}));break;case"destroy":e.onDestroy((function(){return
r(n&&Cm(n,"destroy",e))}))}}function Cm(e,t,n){var
r=n.totalTime,i=wm(e.element,e.triggerName,e.fromState,e.toState,t||e.phaseName,null==r?e.totalTime:r,!!n.disabled),a=e._data;return
null!=a&&(i._data=a),i}function wm(e,t,n,r){var i=arguments.length>4&&void
0!==arguments[4]?arguments[4]:"",a=arguments.length>5&&void
0!==arguments[5]?arguments[5]:0,o=arguments.length>6?arguments[6]:void
0;return{element:e,triggerName:t,fromState:n,toState:r,phaseName:i,totalTime:a,disabled:!!o}}function
bm(e,t,n){var r;return e instanceof
Map?(r=e.get(t))||e.set(t,r=n):(r=e[t])||(r=e[t]=n),r}function Sm(e){var
t=e.indexOf(":");return[e.substring(1,t),e.substr(t+1)]}var
Em=function(e,t){return!1},Tm=function(e,t){return!1},xm=function(e,t,n){return[]},Am=mm();(Am||"undefined"!=typeof
Element)&&(Em=function(e,t){return
e.contains(t)},Tm=function(){if(Am||Element.prototype.matches)return
function(e,t){return e.matches(t)};var
e=Element.prototype,t=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;return
t?function(e,n){return t.apply(e,[n])}:Tm}(),xm=function(e,t,n){var
r=[];if(n)r.push.apply(r,_toConsumableArray(e.querySelectorAll(t)));else{var
i=e.querySelector(t);i&&r.push(i)}return r});var Om=null,Rm=!1;function
Im(e){Om||(Om=("undefined"!=typeof
document?document.body:null)||{},Rm=!!Om.style&&"WebkitAppearance"in
Om.style);var t=!0;return
Om.style&&!function(e){return"ebkit"==e.substring(1,6)}(e)&&(!(t=e in
Om.style)&&Rm)&&(t="Webkit"+e.charAt(0).toUpperCase()+e.substr(1)in
Om.style),t}var Pm=Tm,Nm=Em,Dm=xm;function Vm(e){var t={};return
Object.keys(e).forEach((function(n){var
r=n.replace(/([a-z])([A-Z])/g,"$1-$2");t[r]=e[n]})),t}var
jm,Fm=((jm=function(){function e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"validateStyleProperty",value:function(e){return
Im(e)}},{key:"matchesElement",value:function(e,t){return
Pm(e,t)}},{key:"containsElement",value:function(e,t){return
Nm(e,t)}},{key:"query",value:function(e,t,n){return
Dm(e,t,n)}},{key:"computeStyle",value:function(e,t,n){return
n||""}},{key:"animate",value:function(e,t,n,r,i){return
arguments.length>5&&void
0!==arguments[5]&&arguments[5],arguments.length>6&&arguments[6],new
rp(n,r)}}]),e}()).\u0275fac=function(e){return
new(e||jm)},jm.\u0275prov=he({token:jm,factory:jm.\u0275fac}),jm),Mm=function(){var
e=function e(){_classCallCheck(this,e)};return e.NOOP=new Fm,e}();function
Lm(e){if("number"==typeof e)return e;var
t=e.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:Um(parseFloat(t[1]),t[2])}function
Um(e,t){switch(t){case"s":return 1e3*e;default:return e}}function
Hm(e,t,n){return e.hasOwnProperty("duration")?e:function(e,t,n){var
r,i=0,a="";if("string"==typeof e){var
o=e.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===o)return
t.push('The provided timing value "'.concat(e,'" is
invalid.')),{duration:0,delay:0,easing:""};r=Um(parseFloat(o[1]),o[2]);var
s=o[3];null!=s&&(i=Um(parseFloat(s),o[4]));var u=o[5];u&&(a=u)}else
r=e;if(!n){var l=!1,c=t.length;r<0&&(t.push("Duration values below 0 are not
allowed for this animation step."),l=!0),i<0&&(t.push("Delay values below 0
are not allowed for this animation step."),l=!0),l&&t.splice(c,0,'The provided
timing value "'.concat(e,'" is
invalid.'))}return{duration:r,delay:i,easing:a}}(e,t,n)}function zm(e){var
t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return
Object.keys(e).forEach((function(n){t[n]=e[n]})),t}function Bm(e,t){var
n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t)for(var r in
e)n[r]=e[r];else zm(e,n);return n}function qm(e,t,n){return
n?t+":"+n+";":""}function Wm(e){for(var t="",n=0;n<e.style.length;n++){var
r=e.style.item(n);t+=qm(0,r,e.style.getPropertyValue(r))}for(var i in
e.style)e.style.hasOwnProperty(i)&&!i.startsWith("_")&&(t+=qm(0,i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e.style[i]));e.setAttribute("style",t)}function
Gm(e,t,n){e.style&&(Object.keys(t).forEach((function(r){var
i=eg(r);n&&!n.hasOwnProperty(r)&&(n[r]=e.style[i]),e.style[i]=t[r]})),mm()&&Wm(e))}function
Qm(e,t){e.style&&(Object.keys(t).forEach((function(t){var
n=eg(t);e.style[n]=""})),mm()&&Wm(e))}function Zm(e){return
Array.isArray(e)?1==e.length?e[0]:Xv(e):e}var Km=new
RegExp("{{\\s*(.+?)\\s*}}","g");function $m(e){var t=[];if("string"==typeof
e){for(var n;n=Km.exec(e);)t.push(n[1]);Km.lastIndex=0}return t}function
Jm(e,t,n){var r=e.toString(),i=r.replace(Km,(function(e,r){var i=t[r];return
t.hasOwnProperty(r)||(n.push("Please provide a value for the animation param
"+r),i=""),i.toString()}));return i==r?e:i}function Xm(e){for(var
t=[],n=e.next();!n.done;)t.push(n.value),n=e.next();return t}var
Ym=/-+([a-z0-9])/g;function eg(e){return e.replace(Ym,(function(){for(var
e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return
t[1].toUpperCase()}))}function tg(e,t){return 0===e||0===t}function
ng(e,t,n){var r=Object.keys(n);if(r.length&&t.length){var
i=t[0],a=[];if(r.forEach((function(e){i.hasOwnProperty(e)||a.push(e),i[e]=n[e]})),a.length)for(var
o=function(){var
n=t[s];a.forEach((function(t){n[t]=ig(e,t)}))},s=1;s<t.length;s++)o()}return
t}function rg(e,t,n){switch(t.type){case 7:return e.visitTrigger(t,n);case
0:return e.visitState(t,n);case 1:return e.visitTransition(t,n);case 2:return
e.visitSequence(t,n);case 3:return e.visitGroup(t,n);case 4:return
e.visitAnimate(t,n);case 5:return e.visitKeyframes(t,n);case 6:return
e.visitStyle(t,n);case 8:return e.visitReference(t,n);case 9:return
e.visitAnimateChild(t,n);case 10:return e.visitAnimateRef(t,n);case 11:return
e.visitQuery(t,n);case 12:return e.visitStagger(t,n);default:throw new
Error("Unable to resolve animation metadata node #"+t.type)}}function
ig(e,t){return window.getComputedStyle(e)[t]}var ag=new
Set(["true","1"]),og=new Set(["false","0"]);function sg(e,t){var
n=ag.has(e)||og.has(e),r=ag.has(t)||og.has(t);return function(i,a){var
o="*"==e||e==i,s="*"==t||t==a;return!o&&n&&"boolean"==typeof
i&&(o=i?ag.has(e):og.has(e)),!s&&r&&"boolean"==typeof
a&&(s=a?ag.has(t):og.has(t)),o&&s}}var ug=new
RegExp("s*:selfs*,?","g");function lg(e,t,n){return new cg(e).build(t,n)}var
cg=function(){function e(t){_classCallCheck(this,e),this._driver=t}return
_createClass(e,[{key:"build",value:function(e,t){var n=new hg(t);return
this._resetContextStyleTimingState(n),rg(this,Zm(e),n)}},{key:"_resetContextStyleTimingState",value:function(e){e.currentQuerySelector="",e.collectedStyles={},e.collectedStyles[""]={},e.currentTime=0}},{key:"visitTrigger",value:function(e,t){var
n=this,r=t.queryCount=0,i=t.depCount=0,a=[],o=[];return"@"==e.name.charAt(0)&&t.errors.push("animation
triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo',
[...]))"),e.definitions.forEach((function(e){if(n._resetContextStyleTimingState(t),0==e.type){var
s=e,u=s.name;u.toString().split(/\s*,\s*/).forEach((function(e){s.name=e,a.push(n.visitState(s,t))})),s.name=u}else
if(1==e.type){var
l=n.visitTransition(e,t);r+=l.queryCount,i+=l.depCount,o.push(l)}else
t.errors.push("only state() and transition() definitions can sit inside of a
trigger()")})),{type:7,name:e.name,states:a,transitions:o,queryCount:r,depCount:i,options:null}}},{key:"visitState",value:function(e,t){var
n=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(n.containsDynamicStyles){var
i=new Set,a=r||{};if(n.styles.forEach((function(e){if(fg(e)){var
t=e;Object.keys(t).forEach((function(e){$m(t[e]).forEach((function(e){a.hasOwnProperty(e)||i.add(e)}))}))}})),i.size){var
o=Xm(i.values());t.errors.push('state("'.concat(e.name,'", ...) must define
default values for all the following style substitutions: ').concat(o.join(",
")))}}return{type:0,name:e.name,style:n,options:r?{params:r}:null}}},{key:"visitTransition",value:function(e,t){t.queryCount=0,t.depCount=0;var
n,r,i,a=rg(this,Zm(e.animation),t);return{type:1,matchers:(n=e.expr,r=t.errors,i=[],"string"==typeof
n?n.split(/\s*,\s*/).forEach((function(e){return
function(e,t,n){if(":"==e[0]){var
r=function(e,t){switch(e){case":enter":return"void => *";case":leave":return"*
=> void";case":increment":return function(e,t){return
parseFloat(t)>parseFloat(e)};case":decrement":return function(e,t){return
parseFloat(t)<parseFloat(e)};default:return t.push('The transition alias value
"'.concat(e,'" is not supported')),"* => *"}}(e,n);if("function"==typeof
r)return void t.push(r);e=r}var
i=e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==i||i.length<4)return
n.push('The provided transition expression "'.concat(e,'" is not
supported')),t;var
a=i[1],o=i[2],s=i[3];t.push(sg(a,s)),"<"!=o[0]||"*"==a&&"*"==s||t.push(sg(s,a))}(e,i,r)})):i.push(n),i),animation:a,queryCount:t.queryCount,depCount:t.depCount,options:dg(e.options)}}},{key:"visitSequence",value:function(e,t){var
n=this;return{type:2,steps:e.steps.map((function(e){return
rg(n,e,t)})),options:dg(e.options)}}},{key:"visitGroup",value:function(e,t){var
n=this,r=t.currentTime,i=0,a=e.steps.map((function(e){t.currentTime=r;var
a=rg(n,e,t);return i=Math.max(i,t.currentTime),a}));return
t.currentTime=i,{type:3,steps:a,options:dg(e.options)}}},{key:"visitAnimate",value:function(e,t){var
n,r=function(e,t){var n=null;if(e.hasOwnProperty("duration"))n=e;else
if("number"==typeof e)return vg(Hm(e,t).duration,0,"");var
r=e;if(r.split(/\s+/).some((function(e){return"{"==e.charAt(0)&&"{"==e.charAt(1)}))){var
i=vg(0,0,"");return i.dynamic=!0,i.strValue=r,i}return
vg((n=n||Hm(r,t)).duration,n.delay,n.easing)}(e.timings,t.errors);t.currentAnimateTimings=r;var
i=e.styles?e.styles:Yv({});if(5==i.type)n=this.visitKeyframes(i,t);else{var
a=e.styles,o=!1;if(!a){o=!0;var
s={};r.easing&&(s.easing=r.easing),a=Yv(s)}t.currentTime+=r.duration+r.delay;var
u=this.visitStyle(a,t);u.isEmptyStep=o,n=u}return
t.currentAnimateTimings=null,{type:4,timings:r,style:n,options:null}}},{key:"visitStyle",value:function(e,t){var
n=this._makeStyleAst(e,t);return
this._validateStyleAst(n,t),n}},{key:"_makeStyleAst",value:function(e,t){var
n=[];Array.isArray(e.styles)?e.styles.forEach((function(e){"string"==typeof
e?"*"==e?n.push(e):t.errors.push("The provided style string value ".concat(e,"
is not allowed.")):n.push(e)})):n.push(e.styles);var r=!1,i=null;return
n.forEach((function(e){if(fg(e)){var t=e,n=t.easing;if(n&&(i=n,delete
t.easing),!r)for(var a in
t)if(t[a].toString().indexOf("{{")>=0){r=!0;break}}})),{type:6,styles:n,easing:i,offset:e.offset,containsDynamicStyles:r,options:null}}},{key:"_validateStyleAst",value:function(e,t){var
n=this,r=t.currentAnimateTimings,i=t.currentTime,a=t.currentTime;r&&a>0&&(a-=r.duration+r.delay),e.styles.forEach((function(e){"string"!=typeof
e&&Object.keys(e).forEach((function(r){if(n._driver.validateStyleProperty(r)){var
o,s,u,l,c,h=t.collectedStyles[t.currentQuerySelector],f=h[r],d=!0;f&&(a!=i&&a>=f.startTime&&i<=f.endTime&&(t.errors.push('The
CSS property "'.concat(r,'" that exists between the times of
"').concat(f.startTime,'ms" and "').concat(f.endTime,'ms" is also being
animated in a parallel animation between the times of "').concat(a,'ms" and
"').concat(i,'ms"')),d=!1),a=f.startTime),d&&(h[r]={startTime:a,endTime:i}),t.options&&(o=e[r],s=t.options,u=t.errors,l=s.params||{},(c=$m(o)).length&&c.forEach((function(e){l.hasOwnProperty(e)||u.push("Unable
to resolve the local animation param ".concat(e," in the given list of
values"))})))}else t.errors.push('The provided animation property
"'.concat(r,'" is not a supported CSS property for
animations'))}))}))}},{key:"visitKeyframes",value:function(e,t){var
n=this,r={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return
t.errors.push("keyframes() must be placed inside of a call to
animate()"),r;var i=0,a=[],o=!1,s=!1,u=0,l=e.steps.map((function(e){var
r=n._makeStyleAst(e,t),l=null!=r.offset?r.offset:function(e){if("string"==typeof
e)return null;var
t=null;if(Array.isArray(e))e.forEach((function(e){if(fg(e)&&e.hasOwnProperty("offset")){var
n=e;t=parseFloat(n.offset),delete n.offset}}));else
if(fg(e)&&e.hasOwnProperty("offset")){var n=e;t=parseFloat(n.offset),delete
n.offset}return t}(r.styles),c=0;return
null!=l&&(i++,c=r.offset=l),s=s||c<0||c>1,o=o||c<u,u=c,a.push(c),r}));s&&t.errors.push("Please
ensure that all keyframe offsets are between 0 and
1"),o&&t.errors.push("Please ensure that all keyframe offsets are in
order");var c=e.steps.length,h=0;i>0&&i<c?t.errors.push("Not all style() steps
within the declared keyframes() contain offsets"):0==i&&(h=1/(c-1));var
f=c-1,d=t.currentTime,v=t.currentAnimateTimings,p=v.duration;return
l.forEach((function(e,i){var
o=h>0?i==f?1:h*i:a[i],s=o*p;t.currentTime=d+v.delay+s,v.duration=s,n._validateStyleAst(e,t),e.offset=o,r.styles.push(e)})),r}},{key:"visitReference",value:function(e,t){return{type:8,animation:rg(this,Zm(e.animation),t),options:dg(e.options)}}},{key:"visitAnimateChild",value:function(e,t){return
t.depCount++,{type:9,options:dg(e.options)}}},{key:"visitAnimateRef",value:function(e,t){return{type:10,animation:this.visitReference(e.animation,t),options:dg(e.options)}}},{key:"visitQuery",value:function(e,t){var
n=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;var
i=_slicedToArray(function(e){var
t=!!e.split(/\s*,\s*/).find((function(e){return":self"==e}));return
t&&(e=e.replace(ug,"")),[e=e.replace(/@\*/g,".ng-trigger").replace(/@\w+/g,(function(e){return".ng-trigger-"+e.substr(1)})).replace(/:animating/g,".ng-animating"),t]}(e.selector),2),a=i[0],o=i[1];t.currentQuerySelector=n.length?n+"
"+a:a,bm(t.collectedStyles,t.currentQuerySelector,{});var
s=rg(this,Zm(e.animation),t);return
t.currentQuery=null,t.currentQuerySelector=n,{type:11,selector:a,limit:r.limit||0,optional:!!r.optional,includeSelf:o,animation:s,originalSelector:e.selector,options:dg(e.options)}}},{key:"visitStagger",value:function(e,t){t.currentQuery||t.errors.push("stagger()
can only be used inside of query()");var
n="full"===e.timings?{duration:0,delay:0,easing:"full"}:Hm(e.timings,t.errors,!0);return{type:12,animation:rg(this,Zm(e.animation),t),timings:n,options:null}}}]),e}(),hg=function
e(t){_classCallCheck(this,e),this.errors=t,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null};function
fg(e){return!Array.isArray(e)&&"object"==typeof e}function dg(e){var t;return
e?(e=zm(e)).params&&(e.params=(t=e.params)?zm(t):null):e={},e}function
vg(e,t,n){return{duration:e,delay:t,easing:n}}function pg(e,t,n,r,i,a){var
o=arguments.length>6&&void
0!==arguments[6]?arguments[6]:null,s=arguments.length>7&&void
0!==arguments[7]&&arguments[7];return{type:1,element:e,keyframes:t,preStyleProps:n,postStyleProps:r,duration:i,delay:a,totalTime:i+a,easing:o,subTimeline:s}}var
yg=function(){function e(){_classCallCheck(this,e),this._map=new Map}return
_createClass(e,[{key:"consume",value:function(e){var t=this._map.get(e);return
t?this._map.delete(e):t=[],t}},{key:"append",value:function(e,t){var
n,r=this._map.get(e);r||this._map.set(e,r=[]),(n=r).push.apply(n,_toConsumableArray(t))}},{key:"has",value:function(e){return
this._map.has(e)}},{key:"clear",value:function(){this._map.clear()}}]),e}(),mg=new
RegExp(":enter","g"),gg=new RegExp(":leave","g");function _g(e,t,n,r,i){var
a=arguments.length>5&&void
0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void
0!==arguments[6]?arguments[6]:{},s=arguments.length>7?arguments[7]:void
0,u=arguments.length>8?arguments[8]:void 0,l=arguments.length>9&&void
0!==arguments[9]?arguments[9]:[];return(new
kg).buildKeyframes(e,t,n,r,i,a,o,s,u,l)}var kg=function(){function
e(){_classCallCheck(this,e)}return
_createClass(e,[{key:"buildKeyframes",value:function(e,t,n,r,i,a,o,s,u){var
l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:[];u=u||new yg;var
c=new
wg(e,t,u,r,i,l,[]);c.options=s,c.currentTimeline.setStyles([a],null,c.errors,s),rg(this,n,c);var
h=c.timelines.filter((function(e){return
e.containsAnimation()}));if(h.length&&Object.keys(o).length){var
f=h[h.length-1];f.allowOnlyTimelineStyles()||f.setStyles([o],null,c.errors,s)}return
h.length?h.map((function(e){return
e.buildKeyframes()})):[pg(t,[],[],[],0,0,"",!1)]}},{key:"visitTrigger",value:function(e,t){}},{key:"visitState",value:function(e,t){}},{key:"visitTransition",value:function(e,t){}},{key:"visitAnimateChild",value:function(e,t){var
n=t.subInstructions.consume(t.element);if(n){var
r=t.createSubContext(e.options),i=t.currentTimeline.currentTime,a=this._visitSubInstructions(n,r,r.options);i!=a&&t.transformIntoNewTimeline(a)}t.previousNode=e}},{key:"visitAnimateRef",value:function(e,t){var
n=t.createSubContext(e.options);n.transformIntoNewTimeline(),this.visitReference(e.animation,n),t.transformIntoNewTimeline(n.currentTimeline.currentTime),t.previousNode=e}},{key:"_visitSubInstructions",value:function(e,t,n){var
r=t.currentTimeline.currentTime,i=null!=n.duration?Lm(n.duration):null,a=null!=n.delay?Lm(n.delay):null;return
0!==i&&e.forEach((function(e){var
n=t.appendInstructionToTimeline(e,i,a);r=Math.max(r,n.duration+n.delay)})),r}},{key:"visitReference",value:function(e,t){t.updateOptions(e.options,!0),rg(this,e.animation,t),t.previousNode=e}},{key:"visitSequence",value:function(e,t){var
n=this,r=t.subContextCount,i=t,a=e.options;if(a&&(a.params||a.delay)&&((i=t.createSubContext(a)).transformIntoNewTimeline(),null!=a.delay)){6==i.previousNode.type&&(i.currentTimeline.snapshotCurrentStyles(),i.previousNode=Cg);var
o=Lm(a.delay);i.delayNextStep(o)}e.steps.length&&(e.steps.forEach((function(e){return
rg(n,e,i)})),i.currentTimeline.applyStylesToKeyframe(),i.subContextCount>r&&i.transformIntoNewTimeline()),t.previousNode=e}},{key:"visitGroup",value:function(e,t){var
n=this,r=[],i=t.currentTimeline.currentTime,a=e.options&&e.options.delay?Lm(e.options.delay):0;e.steps.forEach((function(o){var
s=t.createSubContext(e.options);a&&s.delayNextStep(a),rg(n,o,s),i=Math.max(i,s.currentTimeline.currentTime),r.push(s.currentTimeline)})),r.forEach((function(e){return
t.currentTimeline.mergeTimelineCollectedStyles(e)})),t.transformIntoNewTimeline(i),t.previousNode=e}},{key:"_visitTiming",value:function(e,t){if(e.dynamic){var
n=e.strValue;return
Hm(t.params?Jm(n,t.params,t.errors):n,t.errors)}return{duration:e.duration,delay:e.delay,easing:e.easing}}},{key:"visitAnimate",value:function(e,t){var
n=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;n.delay&&(t.incrementTime(n.delay),r.snapshotCurrentStyles());var
i=e.style;5==i.type?this.visitKeyframes(i,t):(t.incrementTime(n.duration),this.visitStyle(i,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}},{key:"visitStyle",value:function(e,t){var
n=t.currentTimeline,r=t.currentAnimateTimings;!r&&n.getCurrentStyleProperties().length&&n.forwardFrame();var
i=r&&r.easing||e.easing;e.isEmptyStep?n.applyEmptyStep(i):n.setStyles(e.styles,i,t.errors,t.options),t.previousNode=e}},{key:"visitKeyframes",value:function(e,t){var
n=t.currentAnimateTimings,r=t.currentTimeline.duration,i=n.duration,a=t.createSubContext().currentTimeline;a.easing=n.easing,e.styles.forEach((function(e){a.forwardTime((e.offset||0)*i),a.setStyles(e.styles,e.easing,t.errors,t.options),a.applyStylesToKeyframe()})),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(r+i),t.previousNode=e}},{key:"visitQuery",value:function(e,t){var
n=this,r=t.currentTimeline.currentTime,i=e.options||{},a=i.delay?Lm(i.delay):0;a&&(6===t.previousNode.type||0==r&&t.currentTimeline.getCurrentStyleProperties().length)&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Cg);var
o=r,s=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!i.optional,t.errors);t.currentQueryTotal=s.length;var
u=null;s.forEach((function(r,i){t.currentQueryIndex=i;var
s=t.createSubContext(e.options,r);a&&s.delayNextStep(a),r===t.element&&(u=s.currentTimeline),rg(n,e.animation,s),s.currentTimeline.applyStylesToKeyframe(),o=Math.max(o,s.currentTimeline.currentTime)})),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),u&&(t.currentTimeline.mergeTimelineCollectedStyles(u),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}},{key:"visitStagger",value:function(e,t){var
n=t.parentContext,r=t.currentTimeline,i=e.timings,a=Math.abs(i.duration),o=a*(t.currentQueryTotal-1),s=a*t.currentQueryIndex;switch(i.duration<0?"reverse":i.easing){case"reverse":s=o-s;break;case"full":s=n.currentStaggerTime}var
u=t.currentTimeline;s&&u.delayNextStep(s);var
l=u.currentTime;rg(this,e.animation,t),t.previousNode=e,n.currentStaggerTime=r.currentTime-l+(r.startTime-n.currentTimeline.startTime)}}]),e}(),Cg={},wg=function(){function
e(t,n,r,i,a,o,s,u){_classCallCheck(this,e),this._driver=t,this.element=n,this.subInstructions=r,this._enterClassName=i,this._leaveClassName=a,this.errors=o,this.timelines=s,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Cg,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=u||new
bg(this._driver,n,0),s.push(this.currentTimeline)}return
_createClass(e,[{key:"updateOptions",value:function(e,t){var n=this;if(e){var
r=e,i=this.options;null!=r.duration&&(i.duration=Lm(r.duration)),null!=r.delay&&(i.delay=Lm(r.delay));var
a=r.params;if(a){var
o=i.params;o||(o=this.options.params={}),Object.keys(a).forEach((function(e){t&&o.hasOwnProperty(e)||(o[e]=Jm(a[e],o,n.errors))}))}}}},{key:"_copyOptions",value:function(){var
e={};if(this.options){var t=this.options.params;if(t){var
n=e.params={};Object.keys(t).forEach((function(e){n[e]=t[e]}))}}return
e}},{key:"createSubContext",value:function(){var t=arguments.length>0&&void
0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void
0,r=arguments.length>2?arguments[2]:void 0,i=n||this.element,a=new
e(this._driver,i,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(i,r||0));return
a.previousNode=this.previousNode,a.currentAnimateTimings=this.currentAnimateTimings,a.options=this._copyOptions(),a.updateOptions(t),a.currentQueryIndex=this.currentQueryIndex,a.currentQueryTotal=this.currentQueryTotal,a.parentContext=this,this.subContextCount++,a}},{key:"transformIntoNewTimeline",value:function(e){return
this.previousNode=Cg,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}},{key:"appendInstructionToTimeline",value:function(e,t,n){var
r={duration:null!=t?t:e.duration,delay:this.currentTimeline.currentTime+(null!=n?n:0)+e.delay,easing:""},i=new
Sg(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return
this.timelines.push(i),r}},{key:"incrementTime",value:function(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}},{key:"delayNextStep",value:function(e){e>0&&this.currentTimeline.delayNextStep(e)}},{key:"invokeQuery",value:function(e,t,n,r,i,a){var
o=[];if(r&&o.push(this.element),e.length>0){e=(e=e.replace(mg,"."+this._enterClassName)).replace(gg,"."+this._leaveClassName);var
s=this._driver.query(this.element,e,1!=n);0!==n&&(s=n<0?s.slice(s.length+n,s.length):s.slice(0,n)),o.push.apply(o,_toConsumableArray(s))}return
i||0!=o.length||a.push('`query("'.concat(t,'")` returned zero elements. (Use
`query("').concat(t,'", { optional: true })` if you wish to allow
this.)')),o}},{key:"params",get:function(){return
this.options.params}}]),e}(),bg=function(){function
e(t,n,r,i){_classCallCheck(this,e),this._driver=t,this.element=n,this.startTime=r,this._elementTimelineStylesLookup=i,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new
Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new
Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(n),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(n,this._localTimelineStyles)),this._loadKeyframe()}return
_createClass(e,[{key:"containsAnimation",value:function(){switch(this._keyframes.size){case
0:return!1;case 1:return
this.getCurrentStyleProperties().length>0;default:return!0}}},{key:"getCurrentStyleProperties",value:function(){return
Object.keys(this._currentKeyframe)}},{key:"delayNextStep",value:function(e){var
t=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}},{key:"fork",value:function(t,n){return
this.applyStylesToKeyframe(),new
e(this._driver,t,n||this.currentTime,this._elementTimelineStylesLookup)}},{key:"_loadKeyframe",value:function(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}},{key:"forwardFrame",value:function(){this.duration+=1,this._loadKeyframe()}},{key:"forwardTime",value:function(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}},{key:"_updateStyle",value:function(e,t){this._localTimelineStyles[e]=t,this._globalTimelineStyles[e]=t,this._styleSummary[e]={time:this.currentTime,value:t}}},{key:"allowOnlyTimelineStyles",value:function(){return
this._currentEmptyStepKeyframe!==this._currentKeyframe}},{key:"applyEmptyStep",value:function(e){var
t=this;e&&(this._previousKeyframe.easing=e),Object.keys(this._globalTimelineStyles).forEach((function(e){t._backFill[e]=t._globalTimelineStyles[e]||"*",t._currentKeyframe[e]="*"})),this._currentEmptyStepKeyframe=this._currentKeyframe}},{key:"setStyles",value:function(e,t,n,r){var
i=this;t&&(this._previousKeyframe.easing=t);var
a=r&&r.params||{},o=function(e,t){var n,r={};return
e.forEach((function(e){"*"===e?(n=n||Object.keys(t)).forEach((function(e){r[e]="*"})):Bm(e,!1,r)})),r}(e,this._globalTimelineStyles);Object.keys(o).forEach((function(e){var
t=Jm(o[e],a,n);i._pendingStyles[e]=t,i._localTimelineStyles.hasOwnProperty(e)||(i._backFill[e]=i._globalTimelineStyles.hasOwnProperty(e)?i._globalTimelineStyles[e]:"*"),i._updateStyle(e,t)}))}},{key:"applyStylesToKeyframe",value:function(){var
e=this,t=this._pendingStyles,n=Object.keys(t);0!=n.length&&(this._pendingStyles={},n.forEach((function(n){e._currentKeyframe[n]=t[n]})),Object.keys(this._localTimelineStyles).forEach((function(t){e._currentKeyframe.hasOwnProperty(t)||(e._currentKeyframe[t]=e._localTimelineStyles[t])})))}},{key:"snapshotCurrentStyles",value:function(){var
e=this;Object.keys(this._localTimelineStyles).forEach((function(t){var
n=e._localTimelineStyles[t];e._pendingStyles[t]=n,e._updateStyle(t,n)}))}},{key:"getFinalKeyframe",value:function(){return
this._keyframes.get(this.duration)}},{key:"mergeTimelineCollectedStyles",value:function(e){var
t=this;Object.keys(e._styleSummary).forEach((function(n){var
r=t._styleSummary[n],i=e._styleSummary[n];(!r||i.time>r.time)&&t._updateStyle(n,i.value)}))}},{key:"buildKeyframes",value:function(){var
e=this;this.applyStylesToKeyframe();var t=new Set,n=new
Set,r=1===this._keyframes.size&&0===this.duration,i=[];this._keyframes.forEach((function(a,o){var
s=Bm(a,!0);Object.keys(s).forEach((function(e){var
r=s[e];"!"==r?t.add(e):"*"==r&&n.add(e)})),r||(s.offset=o/e.duration),i.push(s)}));var
a=t.size?Xm(t.values()):[],o=n.size?Xm(n.values()):[];if(r){var
s=i[0],u=zm(s);s.offset=0,u.offset=1,i=[s,u]}return
pg(this.element,i,a,o,this.duration,this.startTime,this.easing,!1)}},{key:"currentTime",get:function(){return
this.startTime+this.duration}},{key:"properties",get:function(){var
e=[];for(var t in this._currentKeyframe)e.push(t);return
e}}]),e}(),Sg=function(e){_inherits(n,e);var t=_createSuper(n);function
n(e,r,i,a,o,s){var u,l=arguments.length>6&&void
0!==arguments[6]&&arguments[6];return
_classCallCheck(this,n),(u=t.call(this,e,r,s.delay)).element=r,u.keyframes=i,u.preStyleProps=a,u.postStyleProps=o,u._stretchStartingKeyframe=l,u.timings={duration:s.duration,delay:s.delay,easing:s.easing},u}return
_createClass(n,[{key:"containsAnimation",value:function(){return
this.keyframes.length>1}},{key:"buildKeyframes",value:function(){var
e=this.keyframes,t=this.timings,n=t.delay,r=t.duration,i=t.easing;if(this._stretchStartingKeyframe&&n){var
a=[],o=r+n,s=n/o,u=Bm(e[0],!1);u.offset=0,a.push(u);var
l=Bm(e[0],!1);l.offset=Eg(s),a.push(l);for(var c=e.length-1,h=1;h<=c;h++){var
f=Bm(e[h],!1);f.offset=Eg((n+f.offset*r)/o),a.push(f)}r=o,n=0,i="",e=a}return
pg(this.element,e,this.preStyleProps,this.postStyleProps,r,n,i,!0)}}]),n}(bg);function
Eg(e){var t=arguments.length>1&&void
0!==arguments[1]?arguments[1]:3,n=Math.pow(10,t-1);return
Math.round(e*n)/n}var Tg=function
e(){_classCallCheck(this,e)},xg=function(e){_inherits(n,e);var
t=_createSuper(n);function n(){return
_classCallCheck(this,n),t.apply(this,arguments)}return
_createClass(n,[{key:"normalizePropertyName",value:function(e,t){return
eg(e)}},{key:"normalizeStyleValue",value:function(e,t,n,r){var
i="",a=n.toString().trim();if(Ag[t]&&0!==n&&"0"!==n)if("number"==typeof
n)i="px";else{var
o=n.match(/^[+-]?[\d\.]+([a-z]*)$/);o&&0==o[1].length&&r.push("Please provide
a CSS unit value for ".concat(e,":").concat(n))}return
a+i}}]),n}(Tg),Ag=function(e){var t={};return e.forEach((function(e){return
t[e]=!0})),t}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(","));function
Og(e,t,n,r,i,a,o,s,u,l,c,h,f){return{type:0,element:e,triggerName:t,isRemovalTransition:i,fromState:n,fromStyles:a,toState:r,toStyles:o,timelines:s,queriedElements:u,preStyleProps:l,postStyleProps:c,totalTime:h,errors:f}}var
Rg={},Ig=function(){function
e(t,n,r){_classCallCheck(this,e),this._triggerName=t,this.ast=n,this._stateStyles=r}return
_createClass(e,[{key:"match",value:function(e,t,n,r){return
function(e,t,n,r,i){return e.some((function(e){return
e(t,n,r,i)}))}(this.ast.matchers,e,t,n,r)}},{key:"buildStyles",value:function(e,t,n){var
r=this._stateStyles["*"],i=this._stateStyles[e],a=r?r.buildStyles(t,n):{};return
i?i.buildStyles(t,n):a}},{key:"build",value:function(e,t,n,r,i,a,o,s,u,l){var
c=[],h=this.ast.options&&this.ast.options.params||Rg,f=this.buildStyles(n,o&&o.params||Rg,c),d=s&&s.params||Rg,v=this.buildStyles(r,d,c),p=new
Set,y=new Map,m=new
Map,g="void"===r,_={params:Object.assign(Object.assign({},h),d)},k=l?[]:_g(e,t,this.ast.animation,i,a,f,v,_,u,c),C=0;if(k.forEach((function(e){C=Math.max(e.duration+e.delay,C)})),c.length)return
Og(t,this._triggerName,n,r,g,f,v,[],[],y,m,C,c);k.forEach((function(e){var
n=e.element,r=bm(y,n,{});e.preStyleProps.forEach((function(e){return
r[e]=!0}));var i=bm(m,n,{});e.postStyleProps.forEach((function(e){return
i[e]=!0})),n!==t&&p.add(n)}));var w=Xm(p.values());return
Og(t,this._triggerName,n,r,g,f,v,k,w,y,m,C)}}]),e}(),Pg=function(){function
e(t,n){_classCallCheck(this,e),this.styles=t,this.defaultParams=n}return
_createClass(e,[{key:"buildStyles",value:function(e,t){var
n={},r=zm(this.defaultParams);return Object.keys(e).forEach((function(t){var
n=e[t];null!=n&&(r[t]=n)})),this.styles.styles.forEach((function(e){if("string"!=typeof
e){var i=e;Object.keys(i).forEach((function(e){var
a=i[e];a.length>1&&(a=Jm(a,r,t)),n[e]=a}))}})),n}}]),e}(),Ng=function(){function
e(t,n){var
r=this;_classCallCheck(this,e),this.name=t,this.ast=n,this.transitionFactories=[],this.states={},n.states.forEach((function(e){r.states[e.name]=new
Pg(e.style,e.options&&e.options.params||{})})),Dg(this.states,"true","1"),Dg(this.states,"false","0"),n.transitions.forEach((function(e){r.transitionFactories.push(new
Ig(t,e,r.states))})),this.fallbackTransition=new
Ig(t,{type:1,animation:{type:2,steps:[],options:null},matchers:[function(e,t){return!0}],options:null,queryCount:0,depCount:0},this.states)}return
_createClass(e,[{key:"matchTransition",value:function(e,t,n,r){return
this.transitionFactories.find((function(i){return
i.match(e,t,n,r)}))||null}},{key:"matchStyles",value:function(e,t,n){return
this.fallbackTransition.buildStyles(e,t,n)}},{key:"containsQueries",get:function(){return
this.ast.queryCount>0}}]),e}();function
Dg(e,t,n){e.hasOwnProperty(t)?e.hasOwnProperty(n)||(e[n]=e[t]):e.hasOwnProperty(n)&&(e[t]=e[n])}var
Vg=new yg,jg=function(){function
e(t,n,r){_classCallCheck(this,e),this.bodyNode=t,this._driver=n,this._normalizer=r,this._animations={},this._playersById={},this.players=[]}return
_createClass(e,[{key:"register",value:function(e,t){var
n=[],r=lg(this._driver,t,n);if(n.length)throw new Error("Unable to build the
animation due to the following errors:
"+n.join("\n"));this._animations[e]=r}},{key:"_buildPlayer",value:function(e,t,n){var
r=e.element,i=_m(0,this._normalizer,0,e.keyframes,t,n);return
this._driver.animate(r,i,e.duration,e.delay,e.easing,[],!0)}},{key:"create",value:function(e,t){var
n,r=this,i=arguments.length>2&&void
0!==arguments[2]?arguments[2]:{},a=[],o=this._animations[e],s=new
Map;if(o?(n=_g(this._driver,t,o,"ng-enter","ng-leave",{},{},i,Vg,a)).forEach((function(e){var
t=bm(s,e.element,{});e.postStyleProps.forEach((function(e){return
t[e]=null}))})):(a.push("The requested animation doesn't exist or has already
been destroyed"),n=[]),a.length)throw new Error("Unable to create the
animation due to the following errors:
"+a.join("\n"));s.forEach((function(e,t){Object.keys(e).forEach((function(n){e[n]=r._driver.computeStyle(t,n,"*")}))}));var
u=gm(n.map((function(e){var t=s.get(e.element);return
r._buildPlayer(e,{},t)})));return
this._playersById[e]=u,u.onDestroy((function(){return
r.destroy(e)})),this.players.push(u),u}},{key:"destroy",value:function(e){var
t=this._getPlayer(e);t.destroy(),delete this._playersById[e];var
n=this.players.indexOf(t);n>=0&&this.players.splice(n,1)}},{key:"_getPlayer",value:function(e){var
t=this._playersById[e];if(!t)throw new Error("Unable to find the timeline
player referenced by "+e);return t}},{key:"listen",value:function(e,t,n,r){var
i=wm(t,"","","");return
km(this._getPlayer(e),n,i,r),function(){}}},{key:"command",value:function(e,t,n,r){if("register"!=n)if("create"!=n){var
i=this._getPlayer(e);switch(n){case"play":i.play();break;case"pause":i.pause();break;case"reset":i.reset();break;case"restart":i.restart();break;case"finish":i.finish();break;case"init":i.init();break;case"setPosition":i.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e)}}else
this.create(e,t,r[0]||{});else
this.register(e,r[0])}}]),e}(),Fg=[],Mg={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Lg={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Ug=function(){function
e(t){var n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:"";_classCallCheck(this,e),this.namespaceId=n;var
r,i=t&&t.hasOwnProperty("value");if(this.value=null!=(r=i?t.value:t)?r:null,i){var
a=zm(t);delete a.value,this.options=a}else
this.options={};this.options.params||(this.options.params={})}return
_createClass(e,[{key:"absorbOptions",value:function(e){var
t=e.params;if(t){var
n=this.options.params;Object.keys(t).forEach((function(e){null==n[e]&&(n[e]=t[e])}))}}},{key:"params",get:function(){return
this.options.params}}]),e}(),Hg=new Ug("void"),zg=function(){function
e(t,n,r){_classCallCheck(this,e),this.id=t,this.hostElement=n,this._engine=r,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new
Map,this._hostClassName="ng-tns-"+t,Kg(n,this._hostClassName)}return
_createClass(e,[{key:"listen",value:function(e,t,n,r){var
i,a=this;if(!this._triggers.hasOwnProperty(t))throw new Error('Unable to
listen on the animation trigger event "'.concat(n,'" because the animation
trigger "').concat(t,"\" doesn't exist!"));if(null==n||0==n.length)throw new
Error('Unable to listen on the animation trigger "'.concat(t,'" because the
provided event is undefined!'));if("start"!=(i=n)&&"done"!=i)throw new
Error('The provided animation trigger event "'.concat(n,'" for the animation
trigger "').concat(t,'" is not supported!'));var
o=bm(this._elementListeners,e,[]),s={name:t,phase:n,callback:r};o.push(s);var
u=bm(this._engine.statesByElement,e,{});return
u.hasOwnProperty(t)||(Kg(e,"ng-trigger"),Kg(e,"ng-trigger-"+t),u[t]=Hg),function(){a._engine.afterFlush((function(){var
e=o.indexOf(s);e>=0&&o.splice(e,1),a._triggers[t]||delete
u[t]}))}}},{key:"register",value:function(e,t){return!this._triggers[e]&&(this._triggers[e]=t,!0)}},{key:"_getTrigger",value:function(e){var
t=this._triggers[e];if(!t)throw new Error('The provided animation trigger
"'.concat(e,'" has not been registered!'));return
t}},{key:"trigger",value:function(e,t,n){var
r=this,i=!(arguments.length>3&&void
0!==arguments[3])||arguments[3],a=this._getTrigger(t),o=new
qg(this.id,t,e),s=this._engine.statesByElement.get(e);s||(Kg(e,"ng-trigger"),Kg(e,"ng-trigger-"+t),this._engine.statesByElement.set(e,s={}));var
u=s[t],l=new
Ug(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&u&&l.absorbOptions(u.options),s[t]=l,u||(u=Hg),"void"===l.value||u.value!==l.value){var
c=bm(this._engine.playersByElement,e,[]);c.forEach((function(e){e.namespaceId==r.id&&e.triggerName==t&&e.queued&&e.destroy()}));var
h=a.matchTransition(u.value,l.value,e,l.params),f=!1;if(!h){if(!i)return;h=a.fallbackTransition,f=!0}return
this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:h,fromState:u,toState:l,player:o,isFallbackTransition:f}),f||(Kg(e,"ng-animate-queued"),o.onStart((function(){$g(e,"ng-animate-queued")}))),o.onDone((function(){var
t=r.players.indexOf(o);t>=0&&r.players.splice(t,1);var
n=r._engine.playersByElement.get(e);if(n){var
i=n.indexOf(o);i>=0&&n.splice(i,1)}})),this.players.push(o),c.push(o),o}if(!function(e,t){var
n=Object.keys(e),r=Object.keys(t);if(n.length!=r.length)return!1;for(var
i=0;i<n.length;i++){var
a=n[i];if(!t.hasOwnProperty(a)||e[a]!==t[a])return!1}return!0}(u.params,l.params)){var
d=[],v=a.matchStyles(u.value,u.params,d),p=a.matchStyles(l.value,l.params,d);d.length?this._engine.reportError(d):this._engine.afterFlush((function(){Qm(e,v),Gm(e,p)}))}}},{key:"deregister",value:function(e){var
t=this;delete
this._triggers[e],this._engine.statesByElement.forEach((function(t,n){delete
t[e]})),this._elementListeners.forEach((function(n,r){t._elementListeners.set(r,n.filter((function(t){return
t.name!=e})))}))}},{key:"clearElementCache",value:function(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);var
t=this._engine.playersByElement.get(e);t&&(t.forEach((function(e){return
e.destroy()})),this._engine.playersByElement.delete(e))}},{key:"_signalRemovalForInnerTriggers",value:function(e,t){var
n=this,r=this._engine.driver.query(e,".ng-trigger",!0);r.forEach((function(e){if(!e.__ng_removed){var
r=n._engine.fetchNamespacesByElement(e);r.size?r.forEach((function(n){return
n.triggerLeaveAnimation(e,t,!1,!0)})):n.clearElementCache(e)}})),this._engine.afterFlushAnimationsDone((function(){return
r.forEach((function(e){return
n.clearElementCache(e)}))}))}},{key:"triggerLeaveAnimation",value:function(e,t,n,r){var
i=this,a=this._engine.statesByElement.get(e);if(a){var
o=[];if(Object.keys(a).forEach((function(t){if(i._triggers[t]){var
n=i.trigger(e,t,"void",r);n&&o.push(n)}})),o.length)return
this._engine.markElementAsRemoved(this.id,e,!0,t),n&&gm(o).onDone((function(){return
i._engine.processLeaveNode(e)})),!0}return!1}},{key:"prepareLeaveAnimationListeners",value:function(e){var
t=this,n=this._elementListeners.get(e);if(n){var r=new
Set;n.forEach((function(n){var i=n.name;if(!r.has(i)){r.add(i);var
a=t._triggers[i].fallbackTransition,o=t._engine.statesByElement.get(e)[i]||Hg,s=new
Ug("void"),u=new
qg(t.id,i,e);t._engine.totalQueuedPlayers++,t._queue.push({element:e,triggerName:i,transition:a,fromState:o,toState:s,player:u,isFallbackTransition:!0})}}))}}},{key:"removeNode",value:function(e,t){var
n=this,r=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),!this.triggerLeaveAnimation(e,t,!0)){var
i=!1;if(r.totalAnimations){var
a=r.players.length?r.playersByQueriedElement.get(e):[];if(a&&a.length)i=!0;else
for(var
o=e;o=o.parentNode;)if(r.statesByElement.get(o)){i=!0;break}}if(this.prepareLeaveAnimationListeners(e),i)r.markElementAsRemoved(this.id,e,!1,t);else{var
s=e.__ng_removed;s&&s!==Mg||(r.afterFlush((function(){return
n.clearElementCache(e)})),r.destroyInnerAnimations(e),r._onRemovalComplete(e,t))}}}},{key:"insertNode",value:function(e,t){Kg(e,this._hostClassName)}},{key:"drainQueuedTransitions",value:function(e){var
t=this,n=[];return this._queue.forEach((function(r){var
i=r.player;if(!i.destroyed){var
a=r.element,o=t._elementListeners.get(a);o&&o.forEach((function(t){if(t.name==r.triggerName){var
n=wm(a,r.triggerName,r.fromState.value,r.toState.value);n._data=e,km(r.player,t.phase,n,t.callback)}})),i.markedForDestroy?t._engine.afterFlush((function(){i.destroy()})):n.push(r)}})),this._queue=[],n.sort((function(e,n){var
r=e.transition.ast.depCount,i=n.transition.ast.depCount;return
0==r||0==i?r-i:t._engine.driver.containsElement(e.element,n.element)?1:-1}))}},{key:"destroy",value:function(e){this.players.forEach((function(e){return
e.destroy()})),this._signalRemovalForInnerTriggers(this.hostElement,e)}},{key:"elementContainsData",value:function(e){var
t=!1;return
this._elementListeners.has(e)&&(t=!0),t=!!this._queue.find((function(t){return
t.element===e}))||t}}]),e}(),Bg=function(){function
e(t,n,r){_classCallCheck(this,e),this.bodyNode=t,this.driver=n,this._normalizer=r,this.players=[],this.newHostElements=new
Map,this.playersByElement=new Map,this.playersByQueriedElement=new
Map,this.statesByElement=new Map,this.disabledNodes=new
Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new
Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=function(e,t){}}return
_createClass(e,[{key:"_onRemovalComplete",value:function(e,t){this.onRemovalComplete(e,t)}},{key:"createNamespace",value:function(e,t){var
n=new zg(e,t,this);return
t.parentNode?this._balanceNamespaceList(n,t):(this.newHostElements.set(t,n),this.collectEnterElement(t)),this._namespaceLookup[e]=n}},{key:"_balanceNamespaceList",value:function(e,t){var
n=this._namespaceList.length-1;if(n>=0){for(var
r=!1,i=n;i>=0;i--)if(this.driver.containsElement(this._namespaceList[i].hostElement,t)){this._namespaceList.splice(i+1,0,e),r=!0;break}r||this._namespaceList.splice(0,0,e)}else
this._namespaceList.push(e);return
this.namespacesByHostElement.set(t,e),e}},{key:"register",value:function(e,t){var
n=this._namespaceLookup[e];return
n||(n=this.createNamespace(e,t)),n}},{key:"registerTrigger",value:function(e,t,n){var
r=this._namespaceLookup[e];r&&r.register(t,n)&&this.totalAnimations++}},{key:"destroy",value:function(e,t){var
n=this;if(e){var
r=this._fetchNamespace(e);this.afterFlush((function(){n.namespacesByHostElement.delete(r.hostElement),delete
n._namespaceLookup[e];var
t=n._namespaceList.indexOf(r);t>=0&&n._namespaceList.splice(t,1)})),this.afterFlushAnimationsDone((function(){return
r.destroy(t)}))}}},{key:"_fetchNamespace",value:function(e){return
this._namespaceLookup[e]}},{key:"fetchNamespacesByElement",value:function(e){var
t=new Set,n=this.statesByElement.get(e);if(n)for(var
r=Object.keys(n),i=0;i<r.length;i++){var a=n[r[i]].namespaceId;if(a){var
o=this._fetchNamespace(a);o&&t.add(o)}}return
t}},{key:"trigger",value:function(e,t,n,r){if(Wg(t)){var
i=this._fetchNamespace(e);if(i)return
i.trigger(t,n,r),!0}return!1}},{key:"insertNode",value:function(e,t,n,r){if(Wg(t)){var
i=t.__ng_removed;if(i&&i.setForRemoval){i.setForRemoval=!1,i.setForMove=!0;var
a=this.collectedLeaveElements.indexOf(t);a>=0&&this.collectedLeaveElements.splice(a,1)}if(e){var
o=this._fetchNamespace(e);o&&o.insertNode(t,n)}r&&this.collectEnterElement(t)}}},{key:"collectEnterElement",value:function(e){this.collectedEnterElements.push(e)}},{key:"markElementAsDisabled",value:function(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Kg(e,"ng-animate-disabled")):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),$g(e,"ng-animate-disabled"))}},{key:"removeNode",value:function(e,t,n,r){if(Wg(t)){var
i=e?this._fetchNamespace(e):null;if(i?i.removeNode(t,r):this.markElementAsRemoved(e,t,!1,r),n){var
a=this.namespacesByHostElement.get(t);a&&a.id!==e&&a.removeNode(t,r)}}else
this._onRemovalComplete(t,r)}},{key:"markElementAsRemoved",value:function(e,t,n,r){this.collectedLeaveElements.push(t),t.__ng_removed={namespaceId:e,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1}}},{key:"listen",value:function(e,t,n,r,i){return
Wg(t)?this._fetchNamespace(e).listen(t,n,r,i):function(){}}},{key:"_buildInstruction",value:function(e,t,n,r,i){return
e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,n,r,e.fromState.options,e.toState.options,t,i)}},{key:"destroyInnerAnimations",value:function(e){var
t=this,n=this.driver.query(e,".ng-trigger",!0);n.forEach((function(e){return
t.destroyActiveAnimationsForElement(e)})),0!=this.playersByQueriedElement.size&&(n=this.driver.query(e,".ng-animating",!0)).forEach((function(e){return
t.finishActiveQueriedAnimationOnElement(e)}))}},{key:"destroyActiveAnimationsForElement",value:function(e){var
t=this.playersByElement.get(e);t&&t.forEach((function(e){e.queued?e.markedForDestroy=!0:e.destroy()}))}},{key:"finishActiveQueriedAnimationOnElement",value:function(e){var
t=this.playersByQueriedElement.get(e);t&&t.forEach((function(e){return
e.finish()}))}},{key:"whenRenderingDone",value:function(){var e=this;return
new Promise((function(t){if(e.players.length)return
gm(e.players).onDone((function(){return
t()}));t()}))}},{key:"processLeaveNode",value:function(e){var
t=this,n=e.__ng_removed;if(n&&n.setForRemoval){if(e.__ng_removed=Mg,n.namespaceId){this.destroyInnerAnimations(e);var
r=this._fetchNamespace(n.namespaceId);r&&r.clearElementCache(e)}this._onRemovalComplete(e,n.setForRemoval)}this.driver.matchesElement(e,".ng-animate-disabled")&&this.markElementAsDisabled(e,!1),this.driver.query(e,".ng-animate-disabled",!0).forEach((function(e){t.markElementAsDisabled(e,!1)}))}},{key:"flush",value:function(){var
e=this,t=arguments.length>0&&void
0!==arguments[0]?arguments[0]:-1,n=[];if(this.newHostElements.size&&(this.newHostElements.forEach((function(t,n){return
e._balanceNamespaceList(t,n)})),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(var
r=0;r<this.collectedEnterElements.length;r++)Kg(this.collectedEnterElements[r],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){var
i=[];try{n=this._flushAnimations(i,t)}finally{for(var
a=0;a<i.length;a++)i[a]()}}else for(var
o=0;o<this.collectedLeaveElements.length;o++)this.processLeaveNode(this.collectedLeaveElements[o]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach((function(e){return
e()})),this._flushFns=[],this._whenQuietFns.length){var
s=this._whenQuietFns;this._whenQuietFns=[],n.length?gm(n).onDone((function(){s.forEach((function(e){return
e()}))})):s.forEach((function(e){return
e()}))}}},{key:"reportError",value:function(e){throw new Error("Unable to
process animations due to the following failed trigger transitions\n
"+e.join("\n"))}},{key:"_flushAnimations",value:function(e,t){var n=this,r=new
yg,i=[],a=new Map,o=[],s=new Map,u=new Map,l=new Map,c=new
Set;this.disabledNodes.forEach((function(e){c.add(e);for(var
t=n.driver.query(e,".ng-animate-queued",!0),r=0;r<t.length;r++)c.add(t[r])}));var
h=this.bodyNode,f=Array.from(this.statesByElement.keys()),d=Zg(f,this.collectedEnterElements),v=new
Map,p=0;d.forEach((function(e,t){var
n="ng-enter"+p++;v.set(t,n),e.forEach((function(e){return
Kg(e,n)}))}));for(var y=[],m=new Set,g=new
Set,_=0;_<this.collectedLeaveElements.length;_++){var
k=this.collectedLeaveElements[_],C=k.__ng_removed;C&&C.setForRemoval&&(y.push(k),m.add(k),C.hasAnimation?this.driver.query(k,".ng-star-inserted",!0).forEach((function(e){return
m.add(e)})):g.add(k))}var w=new
Map,b=Zg(f,Array.from(m));b.forEach((function(e,t){var
n="ng-leave"+p++;w.set(t,n),e.forEach((function(e){return
Kg(e,n)}))})),e.push((function(){d.forEach((function(e,t){var
n=v.get(t);e.forEach((function(e){return
$g(e,n)}))})),b.forEach((function(e,t){var
n=w.get(t);e.forEach((function(e){return
$g(e,n)}))})),y.forEach((function(e){n.processLeaveNode(e)}))}));for(var
S=[],E=[],T=this._namespaceList.length-1;T>=0;T--)this._namespaceList[T].drainQueuedTransitions(t).forEach((function(e){var
t=e.player,a=e.element;if(S.push(t),n.collectedEnterElements.length){var
c=a.__ng_removed;if(c&&c.setForMove)return void t.destroy()}var
f=!h||!n.driver.containsElement(h,a),d=w.get(a),p=v.get(a),y=n._buildInstruction(e,r,p,d,f);if(y.errors&&y.errors.length)E.push(y);else{if(f)return
t.onStart((function(){return
Qm(a,y.fromStyles)})),t.onDestroy((function(){return Gm(a,y.toStyles)})),void
i.push(t);if(e.isFallbackTransition)return t.onStart((function(){return
Qm(a,y.fromStyles)})),t.onDestroy((function(){return Gm(a,y.toStyles)})),void
i.push(t);y.timelines.forEach((function(e){return
e.stretchStartingKeyframe=!0})),r.append(a,y.timelines),o.push({instruction:y,player:t,element:a}),y.queriedElements.forEach((function(e){return
bm(s,e,[]).push(t)})),y.preStyleProps.forEach((function(e,t){var
n=Object.keys(e);if(n.length){var r=u.get(t);r||u.set(t,r=new
Set),n.forEach((function(e){return
r.add(e)}))}})),y.postStyleProps.forEach((function(e,t){var
n=Object.keys(e),r=l.get(t);r||l.set(t,r=new
Set),n.forEach((function(e){return r.add(e)}))}))}}));if(E.length){var
x=[];E.forEach((function(e){x.push("@".concat(e.triggerName," has failed due
to:\n")),e.errors.forEach((function(e){return x.push("-
".concat(e,"\n"))}))})),S.forEach((function(e){return
e.destroy()})),this.reportError(x)}var A=new Map,O=new
Map;o.forEach((function(e){var
t=e.element;r.has(t)&&(O.set(t,t),n._beforeAnimationBuild(e.player.namespaceId,e.instruction,A))})),i.forEach((function(e){var
t=e.element;n._getPreviousPlayers(t,!1,e.namespaceId,e.triggerName,null).forEach((function(e){bm(A,t,[]).push(e),e.destroy()}))}));var
R=y.filter((function(e){return Xg(e,u,l)})),I=new
Map;Qg(I,this.driver,g,l,"*").forEach((function(e){Xg(e,u,l)&&R.push(e)}));var
P=new Map;d.forEach((function(e,t){Qg(P,n.driver,new
Set(e),u,"!")})),R.forEach((function(e){var
t=I.get(e),n=P.get(e);I.set(e,Object.assign(Object.assign({},t),n))}));var
N=[],D=[],V={};o.forEach((function(e){var
t=e.element,o=e.player,s=e.instruction;if(r.has(t)){if(c.has(t))return
o.onDestroy((function(){return
Gm(t,s.toStyles)})),o.disabled=!0,o.overrideTotalTime(s.totalTime),void
i.push(o);var u=V;if(O.size>1){for(var l=t,h=[];l=l.parentNode;){var
f=O.get(l);if(f){u=f;break}h.push(l)}h.forEach((function(e){return
O.set(e,u)}))}var
d=n._buildAnimation(o.namespaceId,s,A,a,P,I);if(o.setRealPlayer(d),u===V)N.push(o);else{var
v=n.playersByElement.get(u);v&&v.length&&(o.parentPlayer=gm(v)),i.push(o)}}else
Qm(t,s.fromStyles),o.onDestroy((function(){return
Gm(t,s.toStyles)})),D.push(o),c.has(t)&&i.push(o)})),D.forEach((function(e){var
t=a.get(e.element);if(t&&t.length){var
n=gm(t);e.setRealPlayer(n)}})),i.forEach((function(e){e.parentPlayer?e.syncPlayerEvents(e.parentPlayer):e.destroy()}));for(var
j=0;j<y.length;j++){var
F=y[j],M=F.__ng_removed;if($g(F,"ng-leave"),!M||!M.hasAnimation){var
L=[];if(s.size){var
U=s.get(F);U&&U.length&&L.push.apply(L,_toConsumableArray(U));for(var
H=this.driver.query(F,".ng-animating",!0),z=0;z<H.length;z++){var
B=s.get(H[z]);B&&B.length&&L.push.apply(L,_toConsumableArray(B))}}var
q=L.filter((function(e){return!e.destroyed}));q.length?Jg(this,F,q):this.processLeaveNode(F)}}return
y.length=0,N.forEach((function(e){n.players.push(e),e.onDone((function(){e.destroy();var
t=n.players.indexOf(e);n.players.splice(t,1)})),e.play()})),N}},{key:"elementContainsData",value:function(e,t){var
n=!1,r=t.__ng_removed;return
r&&r.setForRemoval&&(n=!0),this.playersByElement.has(t)&&(n=!0),this.playersByQueriedElement.has(t)&&(n=!0),this.statesByElement.has(t)&&(n=!0),this._fetchNamespace(e).elementContainsData(t)||n}},{key:"afterFlush",value:function(e){this._flushFns.push(e)}},{key:"afterFlushAnimationsDone",value:function(e){this._whenQuietFns.push(e)}},{key:"_getPreviousPlayers",value:function(e,t,n,r,i){var
a=[];if(t){var o=this.playersByQueriedElement.get(e);o&&(a=o)}else{var
s=this.playersByElement.get(e);if(s){var
u=!i||"void"==i;s.forEach((function(e){e.queued||(u||e.triggerName==r)&&a.push(e)}))}}return(n||r)&&(a=a.filter((function(e){return!(n&&n!=e.namespaceId||r&&r!=e.triggerName)}))),a}},{key:"_beforeAnimationBuild",value:function(e,t,n){var
r,i=this,a=t.element,o=t.isRemovalTransition?void
0:e,s=t.isRemovalTransition?void
0:t.triggerName,u=_createForOfIteratorHelper(t.timelines);try{var
l=function(){var
e=r.value.element,u=e!==a,l=bm(n,e,[]);i._getPreviousPlayers(e,u,o,s,t.toState).forEach((function(e){var
t=e.getRealPlayer();t.beforeDestroy&&t.beforeDestroy(),e.destroy(),l.push(e)}))};for(u.s();!(r=u.n()).done;)l()}catch(c){u.e(c)}finally{u.f()}Qm(a,t.fromStyles)}},{key:"_buildAnimation",value:function(e,t,n,r,i,a){var
o=this,s=t.triggerName,u=t.element,l=[],c=new Set,h=new
Set,f=t.timelines.map((function(t){var f=t.element;c.add(f);var
d=f.__ng_removed;if(d&&d.removedBeforeQueried)return new
rp(t.duration,t.delay);var
v,p,y=f!==u,m=(v=(n.get(f)||Fg).map((function(e){return
e.getRealPlayer()})),p=[],function e(t,n){for(var r=0;r<t.length;r++){var
i=t[r];i instanceof
ip?e(i.players,n):n.push(i)}}(v,p),p).filter((function(e){return!!e.element&&e.element===f})),g=i.get(f),_=a.get(f),k=_m(0,o._normalizer,0,t.keyframes,g,_),C=o._buildPlayer(t,k,m);if(t.subTimeline&&r&&h.add(f),y){var
w=new qg(e,s,f);w.setRealPlayer(C),l.push(w)}return
C}));l.forEach((function(e){bm(o.playersByQueriedElement,e.element,[]).push(e),e.onDone((function(){return
function(e,t,n){var r;if(e instanceof Map){if(r=e.get(t)){if(r.length){var
i=r.indexOf(n);r.splice(i,1)}0==r.length&&e.delete(t)}}else
if(r=e[t]){if(r.length){var a=r.indexOf(n);r.splice(a,1)}0==r.length&&delete
e[t]}return
r}(o.playersByQueriedElement,e.element,e)}))})),c.forEach((function(e){return
Kg(e,"ng-animating")}));var d=gm(f);return
d.onDestroy((function(){c.forEach((function(e){return
$g(e,"ng-animating")})),Gm(u,t.toStyles)})),h.forEach((function(e){bm(r,e,[]).push(d)})),d}},{key:"_buildPlayer",value:function(e,t,n){return
t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,n):new
rp(e.duration,e.delay)}},{key:"queuedPlayers",get:function(){var e=[];return
this._namespaceList.forEach((function(t){t.players.forEach((function(t){t.queued&&e.push(t)}))})),e}}]),e}(),qg=function(){function
e(t,n,r){_classCallCheck(this,e),this.namespaceId=t,this.triggerName=n,this.element=r,this._player=new
rp,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}return
_createClass(e,[{key:"setRealPlayer",value:function(e){var
t=this;this._containsRealPlayer||(this._player=e,Object.keys(this._queuedCallbacks).forEach((function(n){t._queuedCallbacks[n].forEach((function(t){return
km(e,n,void
0,t)}))})),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}},{key:"getRealPlayer",value:function(){return
this._player}},{key:"overrideTotalTime",value:function(e){this.totalTime=e}},{key:"syncPlayerEvents",value:function(e){var
t=this,n=this._player;n.triggerCallback&&e.onStart((function(){return
n.triggerCallback("start")})),e.onDone((function(){return
t.finish()})),e.onDestroy((function(){return
t.destroy()}))}},{key:"_queueEvent",value:function(e,t){bm(this._queuedCallbacks,e,[]).push(t)}},{key:"onDone",value:function(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}},{key:"onStart",value:function(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}},{key:"onDestroy",value:function(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}},{key:"init",value:function(){this._player.init()}},{key:"hasStarted",value:function(){return!this.queued&&this._player.hasStarted()}},{key:"play",value:function(){!this.queued&&this._player.play()}},{key:"pause",value:function(){!this.queued&&this._player.pause()}},{key:"restart",value:function(){!this.queued&&this._player.restart()}},{key:"finish",value:function(){this._player.finish()}},{key:"destroy",value:function(){this.destroyed=!0,this._player.destroy()}},{key:"reset",value:function(){!this.queued&&this._player.reset()}},{key:"setPosition",value:function(e){this.queued||this._player.setPosition(e)}},{key:"getPosition",value:function(){return
this.queued?0:this._player.getPosition()}},{key:"triggerCallback",value:function(e){var
t=this._player;t.triggerCallback&&t.triggerCallback(e)}}]),e}();function
Wg(e){return e&&1===e.nodeType}function Gg(e,t){var n=e.style.display;return
e.style.display=null!=t?t:"none",n}function Qg(e,t,n,r,i){var
a=[];n.forEach((function(e){return a.push(Gg(e))}));var
o=[];r.forEach((function(n,r){var a={};n.forEach((function(e){var
n=a[e]=t.computeStyle(r,e,i);n&&0!=n.length||(r.__ng_removed=Lg,o.push(r))})),e.set(r,a)}));var
s=0;return n.forEach((function(e){return Gg(e,a[s++])})),o}function
Zg(e,t){var n=new Map;if(e.forEach((function(e){return
n.set(e,[])})),0==t.length)return n;var r=new Set(t),i=new Map;return
t.forEach((function(e){var t=function e(t){if(!t)return 1;var
a=i.get(t);if(a)return a;var o=t.parentNode;return
a=n.has(o)?o:r.has(o)?1:e(o),i.set(t,a),a}(e);1!==t&&n.get(t).push(e)})),n}function
Kg(e,t){if(e.classList)e.classList.add(t);else{var
n=e.$$classes;n||(n=e.$$classes={}),n[t]=!0}}function
$g(e,t){if(e.classList)e.classList.remove(t);else{var n=e.$$classes;n&&delete
n[t]}}function Jg(e,t,n){gm(n).onDone((function(){return
e.processLeaveNode(t)}))}function Xg(e,t,n){var r=n.get(e);if(!r)return!1;var
i=t.get(e);return i?r.forEach((function(e){return
i.add(e)})):t.set(e,r),n.delete(e),!0}var Yg=function(){function e(t,n,r){var
i=this;_classCallCheck(this,e),this.bodyNode=t,this._driver=n,this._triggerCache={},this.onRemovalComplete=function(e,t){},this._transitionEngine=new
Bg(t,n,r),this._timelineEngine=new
jg(t,n,r),this._transitionEngine.onRemovalComplete=function(e,t){return
i.onRemovalComplete(e,t)}}return
_createClass(e,[{key:"registerTrigger",value:function(e,t,n,r,i){var
a=e+"-"+r,o=this._triggerCache[a];if(!o){var
s=[],u=lg(this._driver,i,s);if(s.length)throw new Error('The animation trigger
"'.concat(r,'" has failed to build due to the following errors:\n -
').concat(s.join("\n - ")));o=function(e,t){return new
Ng(e,t)}(r,u),this._triggerCache[a]=o}this._transitionEngine.registerTrigger(t,r,o)}},{key:"register",value:function(e,t){this._transitionEngine.register(e,t)}},{key:"destroy",value:function(e,t){this._transitionEngine.destroy(e,t)}},{key:"onInsert",value:function(e,t,n,r){this._transitionEngine.insertNode(e,t,n,r)}},{key:"onRemove",value:function(e,t,n,r){this._transitionEngine.removeNode(e,t,r||!1,n)}},{key:"disableAnimations",value:function(e,t){this._transitionEngine.markElementAsDisabled(e,t)}},{key:"process",value:function(e,t,n,r){if("@"==n.charAt(0)){var
i=_slicedToArray(Sm(n),2),a=i[0],o=i[1];this._timelineEngine.command(a,t,o,r)}else
this._transitionEngine.trigger(e,t,n,r)}},{key:"listen",value:function(e,t,n,r,i){if("@"==n.charAt(0)){var
a=_slicedToArray(Sm(n),2),o=a[0],s=a[1];return
this._timelineEngine.listen(o,t,s,i)}return
this._transitionEngine.listen(e,t,n,r,i)}},{key:"flush",value:function(){var
e=arguments.length>0&&void
0!==arguments[0]?arguments[0]:-1;this._transitionEngine.flush(e)}},{key:"whenRenderingDone",value:function(){return
this._transitionEngine.whenRenderingDone()}},{key:"players",get:function(){return
this._transitionEngine.players.concat(this._timelineEngine.players)}}]),e}();function
e_(e,t){var n=null,r=null;return
Array.isArray(t)&&t.length?(n=n_(t[0]),t.length>1&&(r=n_(t[t.length-1]))):t&&(n=n_(t)),n||r?new
t_(e,n,r):null}var t_=function(){var e=function(){function
e(t,n,r){_classCallCheck(this,e),this._element=t,this._startStyles=n,this._endStyles=r,this._state=0;var
i=e.initialStylesByElement.get(t);i||e.initialStylesByElement.set(t,i={}),this._initialStyles=i}return
_createClass(e,[{key:"start",value:function(){this._state<1&&(this._startStyles&&Gm(this._element,this._startStyles,this._initialStyles),this._state=1)}},{key:"finish",value:function(){this.start(),this._state<2&&(Gm(this._element,this._initialStyles),this._endStyles&&(Gm(this._element,this._endStyles),this._endStyles=null),this._state=1)}},{key:"destroy",value:function(){this.finish(),this._state<3&&(e.initialStylesByElement.delete(this._element),this._startStyles&&(Qm(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Qm(this._element,this._endStyles),this._endStyles=null),Gm(this._element,this._initialStyles),this._state=3)}}]),e}();return
e.initialStylesByElement=new WeakMap,e}();function n_(e){for(var
t=null,n=Object.keys(e),r=0;r<n.length;r++){var
i=n[r];r_(i)&&((t=t||{})[i]=e[i])}return t}function
r_(e){return"display"===e||"position"===e}var i_=function(){function
e(t,n,r,i,a,o,s){var
u=this;_classCallCheck(this,e),this._element=t,this._name=n,this._duration=r,this._delay=i,this._easing=a,this._fillMode=o,this._onDoneFn=s,this._finished=!1,this._destroyed=!1,this._startTime=0,this._position=0,this._eventFn=function(e){return
u._handleCallback(e)}}return _createClass(e,[{key:"apply",value:function(){var
e,t,n;e=this._element,t="".concat(this._duration,"ms ").concat(this._easing,"
").concat(this._delay,"ms 1 normal ").concat(this._fillMode,"
").concat(this._name),(n=c_(e,"").trim()).length&&(function(e,t){for(var
n=0;n<e.length;n++)e.charAt(n)}(n),t="".concat(n,",
").concat(t)),l_(e,"",t),u_(this._element,this._eventFn,!1),this._startTime=Date.now()}},{key:"pause",value:function(){a_(this._element,this._name,"paused")}},{key:"resume",value:function(){a_(this._element,this._name,"running")}},{key:"setPosition",value:function(e){var
t=o_(this._element,this._name);this._position=e*this._duration,l_(this._element,"Delay","-".concat(this._position,"ms"),t)}},{key:"getPosition",value:function(){return
this._position}},{key:"_handleCallback",value:function(e){var
t=e._ngTestManualTimestamp||Date.now(),n=1e3*parseFloat(e.elapsedTime.toFixed(3));e.animationName==this._name&&Math.max(t-this._startTime,0)>=this._delay&&n>=this._duration&&this.finish()}},{key:"finish",value:function(){this._finished||(this._finished=!0,this._onDoneFn(),u_(this._element,this._eventFn,!0))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,this.finish(),function(e,t){var
n=c_(e,"").split(","),r=s_(n,t);r>=0&&(n.splice(r,1),l_(e,"",n.join(",")))}(this._element,this._name))}}]),e}();function
a_(e,t,n){l_(e,"PlayState",n,o_(e,t))}function o_(e,t){var n=c_(e,"");return
n.indexOf(",")>0?s_(n.split(","),t):s_([n],t)}function s_(e,t){for(var
n=0;n<e.length;n++)if(e[n].indexOf(t)>=0)return n;return-1}function
u_(e,t,n){n?e.removeEventListener("animationend",t):e.addEventListener("animationend",t)}function
l_(e,t,n,r){var i="animation"+t;if(null!=r){var a=e.style[i];if(a.length){var
o=a.split(",");o[r]=n,n=o.join(",")}}e.style[i]=n}function c_(e,t){return
e.style["animation"+t]}var h_=function(){function
e(t,n,r,i,a,o,s,u){_classCallCheck(this,e),this.element=t,this.keyframes=n,this.animationName=r,this._duration=i,this._delay=a,this._finalStyles=s,this._specialStyles=u,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this.currentSnapshot={},this._state=0,this.easing=o||"linear",this.totalTime=i+a,this._buildStyler()}return
_createClass(e,[{key:"onStart",value:function(e){this._onStartFns.push(e)}},{key:"onDone",value:function(e){this._onDoneFns.push(e)}},{key:"onDestroy",value:function(e){this._onDestroyFns.push(e)}},{key:"destroy",value:function(){this.init(),this._state>=4||(this._state=4,this._styler.destroy(),this._flushStartFns(),this._flushDoneFns(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach((function(e){return
e()})),this._onDestroyFns=[])}},{key:"_flushDoneFns",value:function(){this._onDoneFns.forEach((function(e){return
e()})),this._onDoneFns=[]}},{key:"_flushStartFns",value:function(){this._onStartFns.forEach((function(e){return
e()})),this._onStartFns=[]}},{key:"finish",value:function(){this.init(),this._state>=3||(this._state=3,this._styler.finish(),this._flushStartFns(),this._specialStyles&&this._specialStyles.finish(),this._flushDoneFns())}},{key:"setPosition",value:function(e){this._styler.setPosition(e)}},{key:"getPosition",value:function(){return
this._styler.getPosition()}},{key:"hasStarted",value:function(){return
this._state>=2}},{key:"init",value:function(){this._state>=1||(this._state=1,this._styler.apply(),this._delay&&this._styler.pause())}},{key:"play",value:function(){this.init(),this.hasStarted()||(this._flushStartFns(),this._state=2,this._specialStyles&&this._specialStyles.start()),this._styler.resume()}},{key:"pause",value:function(){this.init(),this._styler.pause()}},{key:"restart",value:function(){this.reset(),this.play()}},{key:"reset",value:function(){this._styler.destroy(),this._buildStyler(),this._styler.apply()}},{key:"_buildStyler",value:function(){var
e=this;this._styler=new
i_(this.element,this.animationName,this._duration,this._delay,this.easing,"forwards",(function(){return
e.finish()}))}},{key:"triggerCallback",value:function(e){var
t="start"==e?this._onStartFns:this._onDoneFns;t.forEach((function(e){return
e()})),t.length=0}},{key:"beforeDestroy",value:function(){var
e=this;this.init();var t={};if(this.hasStarted()){var
n=this._state>=3;Object.keys(this._finalStyles).forEach((function(r){"offset"!=r&&(t[r]=n?e._finalStyles[r]:ig(e.element,r))}))}this.currentSnapshot=t}}]),e}(),f_=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this)).element=e,i._startingStyles={},i.__initialized=!1,i._styles=Vm(r),i}return
_createClass(n,[{key:"init",value:function(){var
e=this;!this.__initialized&&this._startingStyles&&(this.__initialized=!0,Object.keys(this._styles).forEach((function(t){e._startingStyles[t]=e.element.style[t]})),_get(_getPrototypeOf(n.prototype),"init",this).call(this))}},{key:"play",value:function(){var
e=this;this._startingStyles&&(this.init(),Object.keys(this._styles).forEach((function(t){return
e.element.style.setProperty(t,e._styles[t])})),_get(_getPrototypeOf(n.prototype),"play",this).call(this))}},{key:"destroy",value:function(){var
e=this;this._startingStyles&&(Object.keys(this._startingStyles).forEach((function(t){var
n=e._startingStyles[t];n?e.element.style.setProperty(t,n):e.element.style.removeProperty(t)})),this._startingStyles=null,_get(_getPrototypeOf(n.prototype),"destroy",this).call(this))}}]),n}(rp),d_=function(){function
e(){_classCallCheck(this,e),this._count=0,this._head=document.querySelector("head"),this._warningIssued=!1}return
_createClass(e,[{key:"validateStyleProperty",value:function(e){return
Im(e)}},{key:"matchesElement",value:function(e,t){return
Pm(e,t)}},{key:"containsElement",value:function(e,t){return
Nm(e,t)}},{key:"query",value:function(e,t,n){return
Dm(e,t,n)}},{key:"computeStyle",value:function(e,t,n){return
window.getComputedStyle(e)[t]}},{key:"buildKeyframeElement",value:function(e,t,n){n=n.map((function(e){return
Vm(e)}));var r="@keyframes ".concat(t," {\n"),i="";n.forEach((function(e){i="
";var t=parseFloat(e.offset);r+="".concat(i).concat(100*t,"% {\n"),i+="
",Object.keys(e).forEach((function(t){var
n=e[t];switch(t){case"offset":return;case"easing":return
void(n&&(r+="".concat(i,"animation-timing-function:
").concat(n,";\n")));default:return void(r+="".concat(i).concat(t,":
").concat(n,";\n"))}})),r+=i+"}\n"})),r+="}\n";var
a=document.createElement("style");return
a.innerHTML=r,a}},{key:"animate",value:function(e,t,n,r,i){var
a=arguments.length>5&&void
0!==arguments[5]?arguments[5]:[],o=arguments.length>6?arguments[6]:void
0;o&&this._notifyFaultyScrubber();var s=a.filter((function(e){return e
instanceof h_})),u={};tg(n,r)&&s.forEach((function(e){var
t=e.currentSnapshot;Object.keys(t).forEach((function(e){return
u[e]=t[e]}))}));var l=function(e){var t={};return
e&&(Array.isArray(e)?e:[e]).forEach((function(e){Object.keys(e).forEach((function(n){"offset"!=n&&"easing"!=n&&(t[n]=e[n])}))})),t}(t=ng(e,t,u));if(0==n)return
new f_(e,l);var
c="gen_css_kf_"+this._count++,h=this.buildKeyframeElement(e,c,t);document.querySelector("head").appendChild(h);var
f=e_(e,t),d=new h_(e,t,c,n,r,i,l,f);return d.onDestroy((function(){var
e;(e=h).parentNode.removeChild(e)})),d}},{key:"_notifyFaultyScrubber",value:function(){this._warningIssued||(console.warn("@angular/animations:
please load the web-animations.js polyfill to allow programmatic
access...\n","  visit http://bit.ly/IWukam to learn more about using the
web-animation-js
polyfill."),this._warningIssued=!0)}}]),e}(),v_=function(){function
e(t,n,r,i){_classCallCheck(this,e),this.element=t,this.keyframes=n,this.options=r,this._specialStyles=i,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=r.duration,this._delay=r.delay||0,this.time=this._duration+this._delay}return
_createClass(e,[{key:"_onFinish",value:function(){this._finished||(this._finished=!0,this._onDoneFns.forEach((function(e){return
e()})),this._onDoneFns=[])}},{key:"init",value:function(){this._buildPlayer(),this._preparePlayerBeforeStart()}},{key:"_buildPlayer",value:function(){var
e=this;if(!this._initialized){this._initialized=!0;var
t=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,t,this.options),this._finalKeyframe=t.length?t[t.length-1]:{},this.domPlayer.addEventListener("finish",(function(){return
e._onFinish()}))}}},{key:"_preparePlayerBeforeStart",value:function(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}},{key:"_triggerWebAnimation",value:function(e,t,n){return
e.animate(t,n)}},{key:"onStart",value:function(e){this._onStartFns.push(e)}},{key:"onDone",value:function(e){this._onDoneFns.push(e)}},{key:"onDestroy",value:function(e){this._onDestroyFns.push(e)}},{key:"play",value:function(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach((function(e){return
e()})),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}},{key:"pause",value:function(){this.init(),this.domPlayer.pause()}},{key:"finish",value:function(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}},{key:"reset",value:function(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}},{key:"_resetDomPlayerState",value:function(){this.domPlayer&&this.domPlayer.cancel()}},{key:"restart",value:function(){this.reset(),this.play()}},{key:"hasStarted",value:function(){return
this._started}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach((function(e){return
e()})),this._onDestroyFns=[])}},{key:"setPosition",value:function(e){this.domPlayer.currentTime=e*this.time}},{key:"getPosition",value:function(){return
this.domPlayer.currentTime/this.time}},{key:"beforeDestroy",value:function(){var
e=this,t={};this.hasStarted()&&Object.keys(this._finalKeyframe).forEach((function(n){"offset"!=n&&(t[n]=e._finished?e._finalKeyframe[n]:ig(e.element,n))})),this.currentSnapshot=t}},{key:"triggerCallback",value:function(e){var
t="start"==e?this._onStartFns:this._onDoneFns;t.forEach((function(e){return
e()})),t.length=0}},{key:"totalTime",get:function(){return
this._delay+this._duration}}]),e}(),p_=function(){function
e(){_classCallCheck(this,e),this._isNativeImpl=/\{\s*\[native\s+code\]\s*\}/.test(y_().toString()),this._cssKeyframesDriver=new
d_}return
_createClass(e,[{key:"validateStyleProperty",value:function(e){return
Im(e)}},{key:"matchesElement",value:function(e,t){return
Pm(e,t)}},{key:"containsElement",value:function(e,t){return
Nm(e,t)}},{key:"query",value:function(e,t,n){return
Dm(e,t,n)}},{key:"computeStyle",value:function(e,t,n){return
window.getComputedStyle(e)[t]}},{key:"overrideWebAnimationsSupport",value:function(e){this._isNativeImpl=e}},{key:"animate",value:function(e,t,n,r,i){var
a=arguments.length>5&&void
0!==arguments[5]?arguments[5]:[],o=arguments.length>6?arguments[6]:void
0;if(!o&&!this._isNativeImpl)return
this._cssKeyframesDriver.animate(e,t,n,r,i,a);var
s={duration:n,delay:r,fill:0==r?"both":"forwards"};i&&(s.easing=i);var
u={},l=a.filter((function(e){return e instanceof
v_}));tg(n,r)&&l.forEach((function(e){var
t=e.currentSnapshot;Object.keys(t).forEach((function(e){return
u[e]=t[e]}))}));var c=e_(e,t=ng(e,t=t.map((function(e){return
Bm(e,!1)})),u));return new v_(e,t,s,c)}}]),e}();function
y_(){return"undefined"!=typeof window&&void
0!==window.document&&Element.prototype.animate||{}}var
m_,g_=((m_=function(e){_inherits(n,e);var t=_createSuper(n);function
n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this))._nextAnimationId=0,i._renderer=e.createRenderer(r.body,{id:"0",encapsulation:ut.None,styles:[],data:{animation:[]}}),i}return
_createClass(n,[{key:"build",value:function(e){var
t=this._nextAnimationId.toString();this._nextAnimationId++;var
n=Array.isArray(e)?Xv(e):e;return C_(this._renderer,null,t,"register",[n]),new
__(t,this._renderer)}}]),n}($v)).\u0275fac=function(e){return
new(e||m_)(Ke(vs),Ke(nl))},m_.\u0275prov=he({token:m_,factory:m_.\u0275fac}),m_),__=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r){var i;return
_classCallCheck(this,n),(i=t.call(this))._id=e,i._renderer=r,i}return
_createClass(n,[{key:"create",value:function(e,t){return new
k_(this._id,e,t||{},this._renderer)}}]),n}(function(){return function
e(){_classCallCheck(this,e)}}()),k_=function(){function
e(t,n,r,i){_classCallCheck(this,e),this.id=t,this.element=n,this._renderer=i,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",r)}return
_createClass(e,[{key:"_listen",value:function(e,t){return
this._renderer.listen(this.element,"@@".concat(this.id,":").concat(e),t)}},{key:"_command",value:function(e){for(var
t=arguments.length,n=new
Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return
C_(this._renderer,this.element,this.id,e,n)}},{key:"onDone",value:function(e){this._listen("done",e)}},{key:"onStart",value:function(e){this._listen("start",e)}},{key:"onDestroy",value:function(e){this._listen("destroy",e)}},{key:"init",value:function(){this._command("init")}},{key:"hasStarted",value:function(){return
this._started}},{key:"play",value:function(){this._command("play"),this._started=!0}},{key:"pause",value:function(){this._command("pause")}},{key:"restart",value:function(){this._command("restart")}},{key:"finish",value:function(){this._command("finish")}},{key:"destroy",value:function(){this._command("destroy")}},{key:"reset",value:function(){this._command("reset")}},{key:"setPosition",value:function(e){this._command("setPosition",e)}},{key:"getPosition",value:function(){return
0}}]),e}();function C_(e,t,n,r,i){return
e.setProperty(t,"@@".concat(n,":").concat(r),i)}var
w_,b_,S_,E_,T_=((w_=function(){function
e(t,n,r){_classCallCheck(this,e),this.delegate=t,this.engine=n,this._zone=r,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new
Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),n.onRemovalComplete=function(e,t){t&&t.parentNode(e)&&t.removeChild(e.parentNode,e)}}return
_createClass(e,[{key:"createRenderer",value:function(e,t){var
n=this,r=this.delegate.createRenderer(e,t);if(!(e&&t&&t.data&&t.data.animation)){var
i=this._rendererCache.get(r);return i||(i=new
x_("",r,this.engine),this._rendererCache.set(r,i)),i}var
a=t.id,o=t.id+"-"+this._currentId;return
this._currentId++,this.engine.register(o,e),t.data.animation.forEach((function
t(r){Array.isArray(r)?r.forEach(t):n.engine.registerTrigger(a,o,e,r.name,r)})),new
A_(this,o,r,this.engine)}},{key:"begin",value:function(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}},{key:"_scheduleCountTask",value:function(){var
e=this;this.promise.then((function(){e._microtaskId++}))}},{key:"scheduleListenerCallback",value:function(e,t,n){var
r=this;e>=0&&e<this._microtaskId?this._zone.run((function(){return
t(n)})):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then((function(){r._zone.run((function(){r._animationCallbacksBuffer.forEach((function(e){var
t=_slicedToArray(e,2);(0,t[0])(t[1])})),r._animationCallbacksBuffer=[]}))})),this._animationCallbacksBuffer.push([t,n]))}},{key:"end",value:function(){var
e=this;this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular((function(){e._scheduleCountTask(),e.engine.flush(e._microtaskId)})),this.delegate.end&&this.delegate.end()}},{key:"whenRenderingDone",value:function(){return
this.engine.whenRenderingDone()}}]),e}()).\u0275fac=function(e){return
new(e||w_)(Ke(vs),Ke(Yg),Ke(bu))},w_.\u0275prov=he({token:w_,factory:w_.\u0275fac}),w_),x_=function(){function
e(t,n,r){_classCallCheck(this,e),this.namespaceId=t,this.delegate=n,this.engine=r,this.destroyNode=this.delegate.destroyNode?function(e){return
n.destroyNode(e)}:null}return
_createClass(e,[{key:"destroy",value:function(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}},{key:"createElement",value:function(e,t){return
this.delegate.createElement(e,t)}},{key:"createComment",value:function(e){return
this.delegate.createComment(e)}},{key:"createText",value:function(e){return
this.delegate.createText(e)}},{key:"appendChild",value:function(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}},{key:"insertBefore",value:function(e,t,n){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,!0)}},{key:"removeChild",value:function(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate,n)}},{key:"selectRootElement",value:function(e,t){return
this.delegate.selectRootElement(e,t)}},{key:"parentNode",value:function(e){return
this.delegate.parentNode(e)}},{key:"nextSibling",value:function(e){return
this.delegate.nextSibling(e)}},{key:"setAttribute",value:function(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}},{key:"removeAttribute",value:function(e,t,n){this.delegate.removeAttribute(e,t,n)}},{key:"addClass",value:function(e,t){this.delegate.addClass(e,t)}},{key:"removeClass",value:function(e,t){this.delegate.removeClass(e,t)}},{key:"setStyle",value:function(e,t,n,r){this.delegate.setStyle(e,t,n,r)}},{key:"removeStyle",value:function(e,t,n){this.delegate.removeStyle(e,t,n)}},{key:"setProperty",value:function(e,t,n){"@"==t.charAt(0)&&"@.disabled"==t?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}},{key:"setValue",value:function(e,t){this.delegate.setValue(e,t)}},{key:"listen",value:function(e,t,n){return
this.delegate.listen(e,t,n)}},{key:"disableAnimations",value:function(e,t){this.engine.disableAnimations(e,t)}},{key:"data",get:function(){return
this.delegate.data}}]),e}(),A_=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i,a){var o;return
_classCallCheck(this,n),(o=t.call(this,r,i,a)).factory=e,o.namespaceId=r,o}return
_createClass(n,[{key:"setProperty",value:function(e,t,n){"@"==t.charAt(0)?"."==t.charAt(1)&&"@.disabled"==t?this.disableAnimations(e,n=void
0===n||!!n):this.engine.process(this.namespaceId,e,t.substr(1),n):this.delegate.setProperty(e,t,n)}},{key:"listen",value:function(e,t,n){var
r,i,a=this;if("@"==t.charAt(0)){var
o,s=function(e){switch(e){case"body":return
document.body;case"document":return document;case"window":return
window;default:return
e}}(e),u=t.substr(1),l="";return"@"!=u.charAt(0)&&(i=(r=u).indexOf("."),u=(o=_slicedToArray([r.substring(0,i),r.substr(i+1)],2))[0],l=o[1]),this.engine.listen(this.namespaceId,s,u,l,(function(e){a.factory.scheduleListenerCallback(e._data||-1,n,e)}))}return
this.delegate.listen(e,t,n)}}]),n}(x_),O_=((b_=function(e){_inherits(n,e);var
t=_createSuper(n);function n(e,r,i){return
_classCallCheck(this,n),t.call(this,e.body,r,i)}return
n}(Yg)).\u0275fac=function(e){return
new(e||b_)(Ke(nl),Ke(Mm),Ke(Tg))},b_.\u0275prov=he({token:b_,factory:b_.\u0275fac}),b_),R_=[{provide:Mm,useFactory:function(){return"function"==typeof
y_()?new p_:new d_}},{provide:new
Ue("AnimationModuleType"),useValue:"BrowserAnimations"},{provide:$v,useClass:g_},{provide:Tg,useFactory:function(){return
new
xg}},{provide:Yg,useClass:O_},{provide:vs,useFactory:function(e,t,n){return
new T_(e,t,n)},deps:[lc,Yg,bu]}],I_=((E_=function
e(){_classCallCheck(this,e)}).\u0275mod=yt({type:E_}),E_.\u0275inj=fe({factory:function(e){return
new(e||E_)},providers:R_,imports:[bc]}),E_),P_=((S_=function
e(){_classCallCheck(this,e)}).\u0275mod=yt({type:S_,bootstrap:[ym]}),S_.\u0275inj=fe({factory:function(e){return
new(e||S_)},providers:[],imports:[[bc,pm,ph,lm,I_,Pp.forRoot({maxOpened:2,timeOut:1e3,progressBar:!0,progressAnimation:"decreasing",tapToDismiss:!0,preventDuplicates:!0}),dm]]}),S_);(function(){if(fr)throw
new Error("Cannot enable prod mode after platform
setup.");hr=!1})(),Cc().bootstrapModule(P_).catch((function(e){return
console.error(e)}))},zn8P:function(e,t){function n(e){return
Promise.resolve().then((function(){var t=new Error("Cannot find module
'"+e+"'");throw
t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0]]]);