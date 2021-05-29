(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/background-mode/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/background-mode/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: BackgroundMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundMode", function() { return BackgroundMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




var BackgroundMode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BackgroundMode, _super);
    function BackgroundMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundMode.prototype.enable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enable", { "sync": true }, arguments); };
    BackgroundMode.prototype.disable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disable", { "sync": true }, arguments); };
    BackgroundMode.prototype.setEnabled = function (enable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setEnabled", { "sync": true }, arguments); };
    BackgroundMode.prototype.fireEvent = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "fireEvent", { "sync": true }, arguments);
    };
    BackgroundMode.prototype.isEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isEnabled", { "sync": true }, arguments); };
    BackgroundMode.prototype.isActive = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isActive", { "sync": true }, arguments); };
    BackgroundMode.prototype.setDefaults = function (overrides) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDefaults", { "platforms": ["Android"] }, arguments); };
    BackgroundMode.prototype.configure = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "configure", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.on = function (event) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    BackgroundMode.prototype.un = function (event, callback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "un", {}, arguments); };
    BackgroundMode.prototype.moveToBackground = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "moveToBackground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.disableWebViewOptimizations = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disableWebViewOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.moveToForeground = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "moveToForeground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.overrideBackButton = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "overrideBackButton", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.excludeFromTaskList = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "excludeFromTaskList", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.isScreenOff = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isScreenOff", { "platforms": ["Android"] }, arguments); };
    BackgroundMode.prototype.wakeUp = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "wakeUp", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.unlock = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "unlock", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.disableBatteryOptimizations = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disableBatteryOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.pluginName = "BackgroundMode";
    BackgroundMode.plugin = "cordova-plugin-background-mode";
    BackgroundMode.pluginRef = "cordova.plugins.backgroundMode";
    BackgroundMode.repo = "https://github.com/katzer/cordova-plugin-background-mode";
    BackgroundMode.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "Windows"];
    BackgroundMode = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BackgroundMode);
    return BackgroundMode;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tncm91bmQtbW9kZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZFRSxrQ0FBaUI7Ozs7SUFRbkQsK0JBQU07SUFTTixnQ0FBTztJQWNQLG1DQUFVLGFBQUMsTUFBZTtJQWExQixrQ0FBUyxhQUFDLEtBQWE7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7O0lBV3ZDLGtDQUFTO0lBV1QsaUNBQVE7SUFhUixvQ0FBVyxhQUFDLFNBQXVDO0lBV25ELGtDQUFTLGFBQUMsT0FBcUM7SUFhL0MsMkJBQUUsYUFBQyxLQUFhO0lBV2hCLDJCQUFFLGFBQUMsS0FBYSxFQUFFLFFBQWtDO0lBV3BELHlDQUFnQjtJQVNoQixvREFBMkI7SUFTM0IseUNBQWdCO0lBU2hCLDJDQUFrQjtJQVNsQiw0Q0FBbUI7SUFVbkIsb0NBQVcsYUFBQyxFQUEyQjtJQVN2QywrQkFBTTtJQVNOLCtCQUFNO0lBU04sb0RBQTJCOzs7Ozs7SUF0TWhCLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkEvRTNCO0VBK0VvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb25zIGl0ZW1zIHRoYXQgY2FuIGJlIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSBiYWNrZ3JvdW5kIHRhc2tcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBvZiBiYWNrZ3JvdW5kIHRhc2tcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBsb29rIGZvciBgPGljb24gbmFtZT4ucG5nYCBpbiBwbGF0Zm9ybXMvYW5kcm9pZC9yZXMvZHJhd2FibGV8bWlwbWFwXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIG5vdGlmaWNhdGlvbiBjaXJjbGVcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBhcHAgd2lsbCBjb21lIHRvIGZvcmVncm91bmQgd2hlbiB0YXBwaW5nIG9uIHRoZSBub3RpZmljYXRpb24uIElmIGZhbHNlLCBwbHVnaW4gd29uJ3QgY29tZSB0byBmb3JlZ3JvdW5kIHdoZW4gdGFwcGVkLlxuICAgKi9cbiAgcmVzdW1lPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hlbiBzZXQgdG8gZmFsc2UgbWFrZXMgdGhlIG5vdGlmaWNhdGlvbnMgdmlzaWJsZSBvbiBsb2NrIHNjcmVlbiAoQW5kcm9pZCA1LjArKVxuICAgKi9cbiAgaGlkZGVuPzogYm9vbGVhbjtcblxuICAvKiogQmlnIHRleHQgKi9cbiAgYmlnVGV4dD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRoYXQgc2Nyb2xscyBpdHNlbGYgb24gc3RhdHVzYmFyXG4gICAqL1xuICB0aWNrZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlmIHRydWUgcGx1Z2luIHdpbGwgbm90IGRpc3BsYXkgYSBub3RpZmljYXRpb24uIERlZmF1bHQgaXMgZmFsc2UuXG4gICAqL1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhY2tncm91bmQgTW9kZVxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBwcmV2ZW50IHRoZSBhcHAgZnJvbSBnb2luZyB0byBzbGVlcCB3aGlsZSBpbiBiYWNrZ3JvdW5kLlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZS4gRm9yIG1vcmUgaW5mbyBhYm91dCBwbHVnaW4sIHZpc2l0OiBodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYWNrZ3JvdW5kTW9kZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFja2dyb3VuZC1tb2RlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZ3JvdW5kTW9kZTogQmFja2dyb3VuZE1vZGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYmFja2dyb3VuZE1vZGUuZW5hYmxlKCk7XG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFja2dyb3VuZE1vZGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLW1vZGUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYmFja2dyb3VuZE1vZGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLW1vZGUnLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kTW9kZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxuICAgKiBPbmNlIGNhbGxlZCwgcHJldmVudHMgdGhlIGFwcCBmcm9tIGJlaW5nIHBhdXNlZCB3aGlsZSBpbiBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgZW5hYmxlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxuICAgKiBPbmNlIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaGFzIGJlZW4gZGlzYWJsZWQsIHRoZSBhcHAgd2lsbCBiZSBwYXVzZWQgd2hlbiBpbiBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGJhY2tncm91bmQgbW9kZS5cbiAgICpcbiAgICogQHBhcmFtIGVuYWJsZSB7Ym9vbGVhbn0gVGhlIHN0YXR1cyB0byBzZXQgZm9yLlxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgc2V0RW5hYmxlZChlbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZpcmUgZXZlbnQgd2l0aCBnaXZlbiBhcmd1bWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQncyBuYW1lLlxuICAgKiBAcGFyYW0gYXJncyB7YXJyYXl9IFRoZSBjYWxsYmFjaydzIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgZmlyZUV2ZW50KGV2ZW50OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGJhY2tncm91bmQgbW9kZSBpcyBlbmFibGVkIG9yIG5vdC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybnMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaXMgZW5hYmxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gZ2V0IHRoZSBpbmZvcm1hdGlvbiBpZiB0aGUgYmFja2dyb3VuZCBtb2RlIGlzIGFjdGl2ZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybnMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaXMgYWN0aXZlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZSB0aGUgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIEFuZHJvaWQgcGxhdGZvcm0uXG4gICAqIEBwYXJhbSBvdmVycmlkZXMge0JhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbn0gRGljdCBvZiBvcHRpb25zIHRvIGJlIG92ZXJyaWRkZW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBzZXREZWZhdWx0cyhvdmVycmlkZXM/OiBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIE1vZGlmeSB0aGUgZGlzcGxheWVkIGluZm9ybWF0aW9uLlxuICAgKiBBdmFpbGFibGUgb25seSBmb3IgQW5kcm9pZCBwbGF0Zm9ybS5cbiAgICogQHBhcmFtIHtCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb259IFtvcHRpb25zXSBBbnkgb3B0aW9ucyB5b3Ugd2FudCB0byB1cGRhdGUuIFNlZSB0YWJsZSBiZWxvdy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgY29uZmlndXJlKG9wdGlvbnM/OiBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGNhbGxiYWNrIGZvciBnaXZlbiBldmVudC5cbiAgICogPiBBdmFpbGFibGUgZXZlbnRzIGFyZSBgZW5hYmxlYCwgYGRpc2FibGVgLCBgYWN0aXZhdGVgLCBgZGVhY3RpdmF0ZWAgYW5kIGBmYWlsdXJlYC5cbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICd1bicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZVxuICB9KVxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuIGZvciBldmVudHMgdGhhdCB0aGUgcGx1Z2luIGZpcmVzLiBBdmFpbGFibGUgZXZlbnRzIGFyZSBgZW5hYmxlYCwgYGRpc2FibGVgLCBgYWN0aXZhdGVgLCBgZGVhY3RpdmF0ZWAgYW5kIGBmYWlsdXJlYC5cbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gVGhlIGZ1bmN0aW9uIHRvIGJlIGV4ZWMgYXMgY2FsbGJhY2suXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQW5kcm9pZCBhbGxvd3MgdG8gcHJvZ3JhbW1hdGljYWxseSBtb3ZlIGZyb20gZm9yZWdyb3VuZCB0byBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBtb3ZlVG9CYWNrZ3JvdW5kKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRW5hYmxlIEdQUy10cmFja2luZyBpbiBiYWNrZ3JvdW5kIChBbmRyb2lkKS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgZGlzYWJsZVdlYlZpZXdPcHRpbWl6YXRpb25zKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQW5kcm9pZCBhbGxvd3MgdG8gcHJvZ3JhbW1hdGljYWxseSBtb3ZlIGZyb20gYmFja2dyb3VuZCB0byBmb3JlZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBtb3ZlVG9Gb3JlZ3JvdW5kKCk6IHZvaWQge31cblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgdG8gZ28gdG8gYmFja2dyb3VuZCBpbnN0ZWFkIG9mIGNsb3NpbmcgdGhlIGFwcC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgb3ZlcnJpZGVCYWNrQnV0dG9uKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRXhjbHVkZSB0aGUgYXBwIGZyb20gdGhlIHJlY2VudCB0YXNrIGxpc3QuIFdvcmtzIG9uIEFuZHJvaWQgNS4wKy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgZXhjbHVkZUZyb21UYXNrTGlzdCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIHRoZSBzY3JlZW4gaXMgb2ZmLlxuICAgKiBAcGFyYW0gZm4ge2Z1bmN0aW9ufSBDYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugd2l0aCBib29sZWFuIGFyZy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBpc1NjcmVlbk9mZihmbjogKGFyZzA6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFR1cm4gc2NyZWVuIG9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIHdha2VVcCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFR1cm4gc2NyZWVuIG9uIGFuZCBzaG93IGFwcCBldmVuIGxvY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICB1bmxvY2soKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBiYXR0ZXJ5IG9wdGltYXphdGlvbiBtb2RlIGZvciB0aGUgYXBwIChhbmRyb2lkIG9ubHkpXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGRpc2FibGVCYXR0ZXJ5T3B0aW1pemF0aW9ucygpOiB2b2lkIHt9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/angular-page-visibility/fesm2015/angular-page-visibility.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/angular-page-visibility/fesm2015/angular-page-visibility.js ***!
  \**********************************************************************************/
/*! exports provided: AngularPageVisibilityModule, AngularPageVisibilityService, AngularPageVisibilityStateEnum, OnPageHidden, OnPagePrerender, OnPageUnloaded, OnPageVisibilityChange, OnPageVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPageVisibilityModule", function() { return AngularPageVisibilityModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPageVisibilityService", function() { return AngularPageVisibilityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPageVisibilityStateEnum", function() { return AngularPageVisibilityStateEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnPageHidden", function() { return OnPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnPagePrerender", function() { return OnPagePrerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnPageUnloaded", function() { return OnPageUnloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnPageVisibilityChange", function() { return OnPageVisibilityChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnPageVisible", function() { return OnPageVisible; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AngularPageVisibilityStateEnum = {
    VISIBLE: 0,
    HIDDEN: 1,
    PRERENDER: 2,
    UNLOADED: 3,
};
AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.VISIBLE] = 'VISIBLE';
AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.HIDDEN] = 'HIDDEN';
AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.PRERENDER] = 'PRERENDER';
AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.UNLOADED] = 'UNLOADED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HiddenKeyConstant {
}
HiddenKeyConstant.DEFAULT = "hidden";
HiddenKeyConstant.MS = "msHidden";
HiddenKeyConstant.WEB_KIT = "webkitHidden";
class VisibilityStatusConstant {
}
VisibilityStatusConstant.VISIBLE = "visible";
VisibilityStatusConstant.HIDDEN = "hidden";
VisibilityStatusConstant.PRERENDER = "prerender";
VisibilityStatusConstant.UNLOADED = "unloaded";
class AngularPageVisibilityService {
    constructor() {
        this.onPageVisibleSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onPageHiddenSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onPagePrerenderSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onPageUnloadedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onPageVisibilityChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.$onPageVisible = this.onPageVisibleSource.asObservable();
        this.$onPageHidden = this.onPageHiddenSource.asObservable();
        this.$onPagePrerender = this.onPagePrerenderSource.asObservable();
        this.$onPageUnloaded = this.onPageUnloadedSource.asObservable();
        this.$onPageVisibilityChange = this.onPageVisibilityChangeSource.asObservable();
        this.addEventListenerVibilityChange();
    }
    /**
     * @return {?}
     */
    isPageVisible() {
        return (VisibilityStatusConstant.VISIBLE === this.getVisibilityState() ||
            !this.isHidden());
    }
    /**
     * @return {?}
     */
    isPageHidden() {
        return (VisibilityStatusConstant.HIDDEN === this.getVisibilityState() ||
            this.isHidden());
    }
    /**
     * @return {?}
     */
    isPagePrerender() {
        return VisibilityStatusConstant.PRERENDER === this.getVisibilityState();
    }
    /**
     * @return {?}
     */
    isPageUnloaded() {
        return VisibilityStatusConstant.UNLOADED === this.getVisibilityState();
    }
    /**
     * @private
     * @return {?}
     */
    isHidden() {
        return document[this.hidden];
    }
    /**
     * @private
     * @return {?}
     */
    getVisibilityState() {
        return document[this.visibilityState];
    }
    /**
     * @private
     * @return {?}
     */
    defineBrowserSupport() {
        if (typeof document[HiddenKeyConstant.DEFAULT] !== "undefined") {
            // Opera 12.10 and Firefox 18 and later support
            this.hidden = HiddenKeyConstant.DEFAULT;
            this.visibilityChange = "visibilitychange";
            this.visibilityState = "visibilityState";
        }
        else if (typeof document[HiddenKeyConstant.MS] !== "undefined") {
            this.hidden = HiddenKeyConstant.MS;
            this.visibilityChange = "msvisibilitychange";
            this.visibilityState = "msVisibilityState";
        }
        else if (typeof document[HiddenKeyConstant.WEB_KIT] !== "undefined") {
            this.hidden = HiddenKeyConstant.WEB_KIT;
            this.visibilityChange = "webkitvisibilitychange";
            this.visibilityState = "webkitVisibilityState";
        }
    }
    /**
     * @private
     * @return {?}
     */
    addEventListenerVibilityChange() {
        this.defineBrowserSupport();
        document.addEventListener(this.visibilityChange, (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const vibilityState = this.getVisibilityState();
            switch (vibilityState) {
                case VisibilityStatusConstant.VISIBLE:
                    this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.VISIBLE);
                    this.onPageVisibleSource.next();
                    break;
                case VisibilityStatusConstant.HIDDEN:
                    this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.HIDDEN);
                    this.onPageHiddenSource.next();
                    break;
                case VisibilityStatusConstant.PRERENDER:
                    this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.PRERENDER);
                    this.onPagePrerenderSource.next();
                    break;
                case VisibilityStatusConstant.UNLOADED:
                    this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.UNLOADED);
                    this.onPageUnloadedSource.next();
                    break;
                default:
                    if (this.isHidden()) {
                        this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.HIDDEN);
                        this.onPageHiddenSource.next();
                    }
                    else {
                        this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.VISIBLE);
                        this.onPageVisibleSource.next();
                    }
            }
        }), false);
    }
}
AngularPageVisibilityService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
AngularPageVisibilityService.ctorParameters = () => [];
/** @nocollapse */ AngularPageVisibilityService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AngularPageVisibilityService_Factory() { return new AngularPageVisibilityService(); }, token: AngularPageVisibilityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const providers = [AngularPageVisibilityService];
/** @type {?} */
const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate(providers);
/** @type {?} */
const pageVisibilityService = injector.get(AngularPageVisibilityService);
/**
 * @return {?}
 */
function OnPageVisibilityChange() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPageHiddenSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageHiddenSubscription = pageVisibilityService.$onPageVisibilityChange
                .subscribe((/**
             * @param {?} visibilityState
             * @return {?}
             */
            (visibilityState) => originalMethod.call(this, [visibilityState])));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageHiddenSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}
/**
 * @return {?}
 */
function OnPageHidden() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPageHiddenSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageHiddenSubscription = pageVisibilityService.$onPageHidden.subscribe((/**
             * @return {?}
             */
            () => originalMethod.call(this)));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageHiddenSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}
/**
 * @return {?}
 */
function OnPageVisible() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPageVisibleSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageVisibleSubscription = pageVisibilityService.$onPageVisible.subscribe((/**
             * @return {?}
             */
            () => originalMethod.call(this)));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageVisibleSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}
/**
 * @return {?}
 */
function OnPagePrerender() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPagePrerenderSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPagePrerenderSubscription = pageVisibilityService.$onPagePrerender.subscribe((/**
             * @return {?}
             */
            () => originalMethod.call(this)));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPagePrerenderSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}
/**
 * @return {?}
 */
function OnPageUnloaded() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPageUnloadedSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageUnloadedSubscription = pageVisibilityService.$onPageUnloaded.subscribe((/**
             * @return {?}
             */
            () => originalMethod.call(this)));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageUnloadedSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularPageVisibilityModule {
}
AngularPageVisibilityModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [],
                declarations: [],
                providers: [AngularPageVisibilityService],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-page-visibility.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecalho titulo=\"CriptoArbitragem\" [permiteVoltar]=\"false\">\n</app-cabecalho>\n\n<ion-content>\n  <div class=\"table-responsive\" *ngIf=\"existemOportunidadesAbitragem\">\n    <table class=\"table table-bordered table-sm\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th>Compre em</th>\n          <th>Venda em</th>\n          <th>Lucro</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let arbitragem of arbitragens; let indice = index\"\n          (click)=\"detalharOportunidadeArbitragem(indice)\"\n        >\n          <td>{{ arbitragem.corretoraVenda.nome }}</td>\n          <td>{{ arbitragem.corretoraCompra.nome }}</td>\n          <td>\n            R$ {{ arbitragem.lucro | number: PRECISAO_REAL }}\n            ({{ arbitragem.porcentagemLucro | number: PRECISAO_REAL }}%)\n            <ion-icon name=\"arrow-forward\" mode=\"ios\"></ion-icon>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div *ngIf=\"!existemOportunidadesAbitragem\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Não há oportunidades de arbitragem de acordo com os parâmetros\n          informados na configuração.\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <app-rodape></app-rodape>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _comum_comum_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comum/comum.module */ "./src/app/comum/comum.module.ts");
/* harmony import */ var _tarefas_oportunidades_arbitragem_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tarefas/oportunidades-arbitragem.service */ "./src/app/home/tarefas/oportunidades-arbitragem.service.ts");










let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                }
            ]),
            _comum_comum_module__WEBPACK_IMPORTED_MODULE_8__["ComumModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]],
        providers: [_ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_6__["BackgroundMode"], _tarefas_oportunidades_arbitragem_service__WEBPACK_IMPORTED_MODULE_9__["OportunidadesArbitragemService"]],
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\n  text-align: center;\n}\n\ntbody tr {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NyaXB0b2FyYml0cmFnZW0vY3JpcHRvYXJiaXRyYWdlbS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGJvZHkgdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCJ0aCwgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRib2R5IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angular_page_visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-page-visibility */ "./node_modules/angular-page-visibility/fesm2015/angular-page-visibility.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comum_comunicacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comum/comunicacao.service */ "./src/app/comum/comunicacao.service.ts");
/* harmony import */ var _tarefas_oportunidades_arbitragem_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tarefas/oportunidades-arbitragem.service */ "./src/app/home/tarefas/oportunidades-arbitragem.service.ts");








let HomePage = class HomePage {
    constructor(comunicacao, router, loadingController, changeDetectorRef, oportunidadesArbitragemService) {
        this.comunicacao = comunicacao;
        this.router = router;
        this.loadingController = loadingController;
        this.changeDetectorRef = changeDetectorRef;
        this.oportunidadesArbitragemService = oportunidadesArbitragemService;
        this.PRECISAO_REAL = '1.2-2';
        this.carregamento = null;
        this.paginaAtiva = false;
        this.arbitragens = [];
        this.tempoRestantePararTarefa = null;
        this.iniciarTarefaVerificarOportunidadesArbitragem();
    }
    ngOnInit() {
        if (this.paginaAtiva) {
            return;
        }
        this.encerrarTempoRestantePararTarefa();
        this.paginaAtiva = true;
        this.exibirMensagemPaginaCarregando();
        this.propagadorPaginaVisivel.next(true);
        this.oportunidadesArbitragemService.criarTarefa();
    }
    ionViewWillEnter() {
        this.ngOnInit();
    }
    ngOnDestroy() {
        this.paginaAtiva = false;
        if (!this.tempoRestantePararTarefa) {
            this.tempoRestantePararTarefa = setTimeout(() => {
                this.arbitragensVerificadas = false;
                this.oportunidadesArbitragemService.pararTarefa();
                this.arbitragens = [];
                this.oportunidadesArbitragemService.habilitarInicioImediato();
                this.encerrarTempoRestantePararTarefa();
            }, this.oportunidadesArbitragemService.UM_MINUTO_EM_MILISEGUNDOS);
        }
    }
    ionViewWillLeave() {
        this.ngOnDestroy();
    }
    onPaginaVisivel() {
        this.propagadorPaginaVisivel.next(true);
    }
    onPaginaNaoVisivel() {
        this.propagadorPaginaVisivel.next(false);
    }
    iniciarTarefaVerificarOportunidadesArbitragem() {
        this.propagadorPaginaVisivel = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.propagadorPaginaVisivel.subscribe(this.oportunidadesArbitragemService.observadorPaginaVisivel());
        this.oportunidadesArbitragemService.inscrever((arbitragens) => {
            this.arbitragens = arbitragens;
            this.arbitragensVerificadas = true;
            this.fecharMensagemPaginaCarregando();
            this.changeDetectorRef.detectChanges();
        });
    }
    encerrarTempoRestantePararTarefa() {
        if (this.tempoRestantePararTarefa) {
            clearTimeout(this.tempoRestantePararTarefa);
        }
        this.tempoRestantePararTarefa = null;
    }
    exibirMensagemPaginaCarregando() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.carregamento = yield this.loadingController.create({
                message: 'Carregando...',
            });
            yield this.carregamento.present();
            if (this.arbitragensVerificadas) {
                this.fecharMensagemPaginaCarregando();
            }
        });
    }
    fecharMensagemPaginaCarregando() {
        if (this.carregamento) {
            this.carregamento.dismiss();
            this.carregamento = null;
        }
    }
    get existemOportunidadesAbitragem() {
        return this.arbitragens.length > 0;
    }
    detalharOportunidadeArbitragem(indice) {
        const arbitragem = this.arbitragens[indice];
        this.comunicacao.modificarObjeto(arbitragem);
        this.router.navigate([
            '/arbitragem',
            arbitragem.corretoraVenda.id,
            arbitragem.corretoraCompra.id,
        ]);
    }
};
HomePage.ctorParameters = () => [
    { type: _comum_comunicacao_service__WEBPACK_IMPORTED_MODULE_6__["ComunicacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _tarefas_oportunidades_arbitragem_service__WEBPACK_IMPORTED_MODULE_7__["OportunidadesArbitragemService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HomePage.prototype, "ngOnDestroy", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(angular_page_visibility__WEBPACK_IMPORTED_MODULE_4__["OnPageVisible"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HomePage.prototype, "onPaginaVisivel", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(angular_page_visibility__WEBPACK_IMPORTED_MODULE_4__["OnPageHidden"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HomePage.prototype, "onPaginaNaoVisivel", null);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_comum_comunicacao_service__WEBPACK_IMPORTED_MODULE_6__["ComunicacaoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _tarefas_oportunidades_arbitragem_service__WEBPACK_IMPORTED_MODULE_7__["OportunidadesArbitragemService"]])
], HomePage);



/***/ }),

/***/ "./src/app/home/tarefas/oportunidades-arbitragem.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/tarefas/oportunidades-arbitragem.service.ts ***!
  \******************************************************************/
/*! exports provided: OportunidadesArbitragemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OportunidadesArbitragemService", function() { return OportunidadesArbitragemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracoes_configuracoes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configuracoes/configuracoes.service */ "./src/app/configuracoes/configuracoes.service.ts");
/* harmony import */ var _arbitragem_arbitragem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../arbitragem/arbitragem.service */ "./src/app/arbitragem/arbitragem.service.ts");
/* harmony import */ var _comum_notificacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../comum/notificacao.service */ "./src/app/comum/notificacao.service.ts");








let OportunidadesArbitragemService = class OportunidadesArbitragemService {
    constructor(oportunidades, configuracoes, notificacaoService, backgroundMode, platform) {
        this.oportunidades = oportunidades;
        this.configuracoes = configuracoes;
        this.notificacaoService = notificacaoService;
        this.backgroundMode = backgroundMode;
        this.platform = platform;
        this.UM_MINUTO_EM_MILISEGUNDOS = 1000 * 60;
        this.NOTIFICACAO_TITULO = 'Oportunidade de arbitragem';
        this.NOTIFICACAO_MENSAGEM = ('Há novas oportunidades de arbitragem que podem ser do seu interesse');
        this.configuracao = this.configuracoes.configuracao;
        this.tarefaFoiExecutada = false;
        this.paginaVisivel = false;
        this.enableBackgroundMode();
        this.propagador = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    enableBackgroundMode() {
        if (this.platform.is('cordova')) {
            this.backgroundMode.enable();
            this.backgroundMode.on('activate').subscribe(() => {
                this.recriarTarefa();
            });
            this.backgroundMode.on('deactivate').subscribe(() => {
                this.recriarTarefa();
            });
        }
    }
    criarTarefa() {
        if (this.tempoRestanteNovaVerificacao) {
            clearTimeout(this.tempoRestanteNovaVerificacao);
            this.tempoRestanteNovaVerificacao = null;
        }
        if (!this.tarefaVerificarOportunidadesArbitragem) {
            this.tarefaVerificarOportunidadesArbitragem = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.UM_MINUTO_EM_MILISEGUNDOS).subscribe(() => {
                if (this.paginaVisivel || this.configuracao.permitirNotificar) {
                    this.verificarOportunidadesArbitragem();
                }
            });
            if (!this.tarefaFoiExecutada) {
                this.verificarOportunidadesArbitragem();
            }
        }
    }
    pararTarefa() {
        if (this.tarefaVerificarOportunidadesArbitragem) {
            this.tarefaVerificarOportunidadesArbitragem.unsubscribe();
            this.tarefaVerificarOportunidadesArbitragem = null;
        }
    }
    recriarTarefa() {
        this.pararTarefa();
        this.criarTarefa();
    }
    verificarOportunidadesArbitragem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.tarefaFoiExecutada = true;
            this.oportunidades.verificarOportunidadesArbitragem().then((arbitragens) => {
                if ((this.configuracao.permitirNotificar)
                    && (arbitragens.length > 0)
                    && ((!this.paginaVisivel)
                        || ((this.platform.is('cordova'))
                            && (this.backgroundMode.isActive() === true)))) {
                    this.notificacaoService.notificar(this.NOTIFICACAO_TITULO, this.NOTIFICACAO_MENSAGEM);
                    this.pararTarefa();
                    this.tempoRestanteNovaVerificacao = setTimeout(() => {
                        this.criarTarefa();
                    }, (this.UM_MINUTO_EM_MILISEGUNDOS
                        * this.configuracao.tempoEntreNotificacoes));
                }
                this.propagador.next(arbitragens);
            });
        });
    }
    inscrever(funcao) {
        return this.propagador.subscribe(funcao);
    }
    observadorPaginaVisivel() {
        return ((paginaVisivel) => this.paginaVisivel = paginaVisivel);
    }
    habilitarInicioImediato() {
        this.tarefaFoiExecutada = false;
    }
};
OportunidadesArbitragemService.ctorParameters = () => [
    { type: _arbitragem_arbitragem_service__WEBPACK_IMPORTED_MODULE_6__["ArbitragemService"] },
    { type: _configuracoes_configuracoes_service__WEBPACK_IMPORTED_MODULE_5__["ConfiguracoesService"] },
    { type: _comum_notificacao_service__WEBPACK_IMPORTED_MODULE_7__["NotificacaoService"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_3__["BackgroundMode"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
OportunidadesArbitragemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_arbitragem_arbitragem_service__WEBPACK_IMPORTED_MODULE_6__["ArbitragemService"],
        _configuracoes_configuracoes_service__WEBPACK_IMPORTED_MODULE_5__["ConfiguracoesService"],
        _comum_notificacao_service__WEBPACK_IMPORTED_MODULE_7__["NotificacaoService"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_3__["BackgroundMode"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], OportunidadesArbitragemService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map