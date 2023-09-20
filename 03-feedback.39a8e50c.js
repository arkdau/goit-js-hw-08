let e;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={save:(e,t)=>{try{let o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},r={},a="Expected a function",n=0/0,i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,d=u||m||Function("return this")(),g=Object.prototype.toString,v=Math.max,b=Math.min,p=function(){return d.Date.now()};/**
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
 */function h(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==g.call(t))return n;if(y(e)){var t,o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=s.test(e);return r||f.test(e)?c(e.slice(2),r?2:8):l.test(e)?n:+e}r=/**
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
 */function(e,t,o){var r=!0,n=!0;if("function"!=typeof e)throw TypeError(a);return y(o)&&(r="leading"in o?!!o.leading:r,n="trailing"in o?!!o.trailing:n),/**
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
 */function(e,t,o){var r,n,i,l,s,f,c=0,u=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(a);function g(t){var o=r,a=n;return r=n=void 0,c=t,l=e.apply(a,o)}function S(e){var o=e-f,r=e-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===f||o>=t||o<0||m&&r>=i}function k(){var e,o,r,a=p();if(S(a))return j(a);// Restart the timer.
s=setTimeout(k,(e=a-f,o=a-c,r=t-e,m?b(r,i-o):r))}function j(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(s=void 0,d&&r)?g(e):(r=n=void 0,l))}function T(){var e,o=p(),a=S(o);if(r=arguments,n=this,f=o,a){if(void 0===s)return(// Reset any `maxWait` timer.
c=e=f,// Start the timer for the trailing edge.
s=setTimeout(k,t),u?g(e):l);if(m)return(// Handle invocations in a tight loop.
s=setTimeout(k,t),g(f))}return void 0===s&&(s=setTimeout(k,t)),l}return t=h(t)||0,y(o)&&(u=!!o.leading,i=(m="maxWait"in o)?v(h(o.maxWait)||0,t):i,d="trailing"in o?!!o.trailing:d),T.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=f=n=s=void 0},T.flush=function(){return void 0===s?l:j(p())},T}(e,t,{leading:r,maxWait:t,trailing:n})};const S=document.querySelector(".feedback-form input"),k=document.querySelector(".feedback-form textarea"),j=document.querySelector(".feedback-form");let T={email:"",message:""};!0==(void 0!=(e=o.load("feedback-form-state"))&&(T=e,!0))&&(S.value=T.email,k.value=T.message),console.log("input: ",j),j[0].addEventListener("input",r(()=>{// if (e.currentTarget != null) {
// const form = e.currentTarget;
// msg.email = e.currentTarget.value;
T.email=S.value,o.save("feedback-form-state",T),console.log(T.email);// }
},500)),j[1].addEventListener("input",r(()=>{// if (e.currentTarget != null) {
// msg.message = e.currentTarget.value;
T.message=k.value,o.save("feedback-form-state",T),console.log(T.message);// }
},500)),j.addEventListener("submit",e=>{e.preventDefault();let t=e.currentTarget;T.email=t.elements.email.value,T.message=t.elements.message.value,o.save("feedback-form-state",T),""===T.email?console.log("email - error "):""===T.message?console.log("message - error"):(console.log("cache: feedback-form-state = ",T),console.log("localStorage: feedback-form-state = ",o.load("feedback-form-state")),o.remove("feedback-form-state"),t.reset())}),console.log(T);//# sourceMappingURL=03-feedback.39a8e50c.js.map

//# sourceMappingURL=03-feedback.39a8e50c.js.map
