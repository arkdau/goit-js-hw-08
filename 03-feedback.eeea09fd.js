let e;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={save:(e,t)=>{try{let r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},o={},a="Expected a function",n=0/0,i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,d=u||m||Function("return this")(),g=Object.prototype.toString,v=Math.max,b=Math.min,p=function(){return d.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function T(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==g.call(t))return n;if(y(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=f.test(e);return o||c.test(e)?s(e.slice(2),o?2:8):l.test(e)?n:+e}o=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,r){var o=!0,n=!0;if("function"!=typeof e)throw TypeError(a);return y(r)&&(o="leading"in r?!!r.leading:o,n="trailing"in r?!!r.trailing:n),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,r){var o,n,i,l,f,c,s=0,u=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(a);function g(t){var r=o,a=n;return o=n=void 0,s=t,l=e.apply(a,r)}function h(e){var r=e-c,o=e-s;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===c||r>=t||r<0||m&&o>=i}function S(){var e,r,o,a=p();if(h(a))return k(a);// Restart the timer.
f=setTimeout(S,(e=a-c,r=a-s,o=t-e,m?b(o,i-r):o))}function k(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(f=void 0,d&&o)?g(e):(o=n=void 0,l))}function j(){var e,r=p(),a=h(r);if(o=arguments,n=this,c=r,a){if(void 0===f)return(// Reset any `maxWait` timer.
s=e=c,// Start the timer for the trailing edge.
f=setTimeout(S,t),u?g(e):l);if(m)return(// Handle invocations in a tight loop.
f=setTimeout(S,t),g(c))}return void 0===f&&(f=setTimeout(S,t)),l}return t=T(t)||0,y(r)&&(u=!!r.leading,i=(m="maxWait"in r)?v(T(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),j.cancel=function(){void 0!==f&&clearTimeout(f),s=0,o=c=n=f=void 0},j.flush=function(){return void 0===f?l:k(p())},j}(e,t,{leading:o,maxWait:t,trailing:n})};const h=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea"),k=document.querySelector(".feedback-form");let j={email:"",message:""};!0==(void 0!=(e=r.load("feedback-form-state"))&&(j=e,!0))&&(h.value=j.email,S.value=j.message),// textInput.addEventListener(
//   "change",
//   _throttle((e) => {
//     if (e.currentTarget != null) {
//       // const form = e.currentTarget;
//       msg.email = e.currentTarget.value;
//       localStorage.save("feedback-form-state", msg);
//       console.log(msg.email);
//     }
//   }, 500),
// );
h.addEventListener("input",o(e=>{null!=e.currentTarget&&(// const form = e.currentTarget;
j.email=e.currentTarget.value,r.save("feedback-form-state",j),console.log(j.email))},500)),// textAreaInput.addEventListener(
//   "change",
//   _throttle((e) => {
//     if (e.currentTarget != null) {
//       msg.message = e.currentTarget.value;
//       localStorage.save("feedback-form-state", msg);
//       console.log(msg.message);
//     }
//   }, 500),
// );
S.addEventListener("input",o(e=>{null!=e.currentTarget&&(j.message=e.currentTarget.value,r.save("feedback-form-state",j),console.log(j.message))},500)),k.addEventListener("submit",e=>{e.preventDefault();let t=e.currentTarget;j.email=t.elements.email.value,j.message=t.elements.message.value,r.save("feedback-form-state",j),console.log("localStorage: feedback-form-state = ",r.load("feedback-form-state")),r.remove("feedback-form-state"),t.reset(),console.log("cache: feedback-form-state = ",j)}),console.log(j);//# sourceMappingURL=03-feedback.eeea09fd.js.map

//# sourceMappingURL=03-feedback.eeea09fd.js.map
