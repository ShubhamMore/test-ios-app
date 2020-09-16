(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/primeng/components/button/button.js":
/*!**********************************************************!*\
  !*** ./node_modules/primeng/components/button/button.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(el) {
        this.el = el;
        this.iconPos = 'left';
        this.cornerStyleClass = 'ui-corner-all';
    }
    ButtonDirective.prototype.ngAfterViewInit = function () {
        domhandler_1.DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            var iconElement = document.createElement("span");
            iconElement.setAttribute("aria-hidden", "true");
            var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-clickable ' + this.icon;
            this.el.nativeElement.appendChild(iconElement);
        }
        var labelElement = document.createElement("span");
        labelElement.className = 'ui-button-text ui-clickable';
        labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    };
    ButtonDirective.prototype.getStyleClass = function () {
        var styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
        if (this.icon) {
            if (this.label != null && this.label != undefined) {
                if (this.iconPos == 'left')
                    styleClass = styleClass + ' ui-button-text-icon-left';
                else
                    styleClass = styleClass + ' ui-button-text-icon-right';
            }
            else {
                styleClass = styleClass + ' ui-button-icon-only';
            }
        }
        else {
            if (this.label) {
                styleClass = styleClass + ' ui-button-text-only';
            }
            else {
                styleClass = styleClass + ' ui-button-text-empty';
            }
        }
        return styleClass;
    };
    Object.defineProperty(ButtonDirective.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            this._label = val;
            if (this.initialized) {
                domhandler_1.DomHandler.findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label;
                if (!this.icon) {
                    if (this._label) {
                        domhandler_1.DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-empty');
                        domhandler_1.DomHandler.addClass(this.el.nativeElement, 'ui-button-text-only');
                    }
                    else {
                        domhandler_1.DomHandler.addClass(this.el.nativeElement, 'ui-button-text-empty');
                        domhandler_1.DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-only');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (val) {
            this._icon = val;
            if (this.initialized) {
                var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
                domhandler_1.DomHandler.findSingle(this.el.nativeElement, '.ui-clickable').className =
                    iconPosClass + ' ui-clickable ' + this.icon;
            }
        },
        enumerable: true,
        configurable: true
    });
    ButtonDirective.prototype.ngOnDestroy = function () {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }
        this.initialized = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonDirective.prototype, "iconPos", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonDirective.prototype, "cornerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonDirective.prototype, "label", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonDirective.prototype, "icon", null);
    ButtonDirective = __decorate([
        core_1.Directive({
            selector: '[pButton]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ButtonDirective);
    return ButtonDirective;
}());
exports.ButtonDirective = ButtonDirective;
var Button = /** @class */ (function () {
    function Button() {
        this.iconPos = 'left';
        this.onClick = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "iconPos", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Button.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Button.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Button.prototype, "styleClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Button.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Button.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Button.prototype, "onBlur", void 0);
    Button = __decorate([
        core_1.Component({
            selector: 'p-button',
            template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [style]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-button ui-widget ui-state-default ui-corner-all':true,\n                        'ui-button-icon-only': (icon && !label),\n                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),\n                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),\n                        'ui-button-text-only': (!icon && label),\n                        'ui-button-text-empty': (!icon && !label),\n                        'ui-state-disabled': disabled}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\">\n            <ng-content></ng-content>\n            <span [ngClass]=\"{'ui-clickable': true,\n                        'ui-button-icon-left': (iconPos === 'left'), \n                        'ui-button-icon-right': (iconPos === 'right')}\"\n                        [class]=\"icon\" *ngIf=\"icon\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{label||'ui-btn'}}</span>\n        </button>\n    "
        })
    ], Button);
    return Button;
}());
exports.Button = Button;
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [ButtonDirective, Button],
            declarations: [ButtonDirective, Button]
        })
    ], ButtonModule);
    return ButtonModule;
}());
exports.ButtonModule = ButtonModule;
//# sourceMappingURL=button.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dom/domhandler.js":
/*!***********************************************************!*\
  !*** ./node_modules/primeng/components/dom/domhandler.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomHandler = /** @class */ (function () {
    function DomHandler() {
    }
    DomHandler.addClass = function (element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    };
    DomHandler.addMultipleClasses = function (element, className) {
        if (element.classList) {
            var styles = className.split(' ');
            for (var i = 0; i < styles.length; i++) {
                element.classList.add(styles[i]);
            }
        }
        else {
            var styles = className.split(' ');
            for (var i = 0; i < styles.length; i++) {
                element.className += ' ' + styles[i];
            }
        }
    };
    DomHandler.removeClass = function (element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };
    DomHandler.hasClass = function (element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    };
    DomHandler.siblings = function (element) {
        return Array.prototype.filter.call(element.parentNode.children, function (child) {
            return child !== element;
        });
    };
    DomHandler.find = function (element, selector) {
        return Array.from(element.querySelectorAll(selector));
    };
    DomHandler.findSingle = function (element, selector) {
        if (element) {
            return element.querySelector(selector);
        }
        return null;
    };
    DomHandler.index = function (element) {
        var children = element.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == element)
                return num;
            if (children[i].nodeType == 1)
                num++;
        }
        return -1;
    };
    DomHandler.indexWithinGroup = function (element, attributeName) {
        var children = element.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == element)
                return num;
            if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
                num++;
        }
        return -1;
    };
    DomHandler.relativePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var top, left;
        if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
            top = -1 * (elementDimensions.height);
            if (targetOffset.top + top < 0) {
                top = -1 * targetOffset.top;
            }
        }
        else {
            top = targetHeight;
        }
        if (elementDimensions.width > viewport.width) {
            // element wider then viewport and cannot fit on screen (align at left side of viewport)
            left = targetOffset.left * -1;
        }
        else if ((targetOffset.left + elementDimensions.width) > viewport.width) {
            // element wider then viewport but can be fit on screen (align at right side of viewport)
            left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        }
        else {
            // element fits on screen (align with target)
            left = 0;
        }
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    DomHandler.absolutePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top, left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            if (top < 0) {
                top = windowScrollTop;
            }
        }
        else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }
        if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width)
            left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
            left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    DomHandler.getHiddenElementOuterHeight = function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementHeight;
    };
    DomHandler.getHiddenElementOuterWidth = function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementWidth;
    };
    DomHandler.getHiddenElementDimensions = function (element) {
        var dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return dimensions;
    };
    DomHandler.scrollInView = function (container, item) {
        var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        var containerRect = container.getBoundingClientRect();
        var itemRect = item.getBoundingClientRect();
        var offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        var scroll = container.scrollTop;
        var elementHeight = container.clientHeight;
        var itemHeight = this.getOuterHeight(item);
        if (offset < 0) {
            container.scrollTop = scroll + offset;
        }
        else if ((offset + itemHeight) > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    };
    DomHandler.fadeIn = function (element, duration) {
        element.style.opacity = 0;
        var last = +new Date();
        var opacity = 0;
        var tick = function () {
            opacity = +element.style.opacity.replace(",", ".") + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();
            if (+opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    };
    DomHandler.fadeOut = function (element, ms) {
        var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
        var fading = setInterval(function () {
            opacity = opacity - gap;
            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }
            element.style.opacity = opacity;
        }, interval);
    };
    DomHandler.getWindowScrollTop = function () {
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    };
    DomHandler.getWindowScrollLeft = function () {
        var doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    };
    DomHandler.matches = function (element, selector) {
        var p = Element.prototype;
        var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(element, selector);
    };
    DomHandler.getOuterWidth = function (el, margin) {
        var width = el.offsetWidth;
        if (margin) {
            var style = getComputedStyle(el);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        return width;
    };
    DomHandler.getHorizontalPadding = function (el) {
        var style = getComputedStyle(el);
        return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    };
    DomHandler.getHorizontalMargin = function (el) {
        var style = getComputedStyle(el);
        return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    };
    DomHandler.innerWidth = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    DomHandler.width = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    DomHandler.getInnerHeight = function (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return height;
    };
    DomHandler.getOuterHeight = function (el, margin) {
        var height = el.offsetHeight;
        if (margin) {
            var style = getComputedStyle(el);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
    };
    DomHandler.getHeight = function (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        return height;
    };
    DomHandler.getWidth = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        return width;
    };
    DomHandler.getViewport = function () {
        var win = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
    };
    DomHandler.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
    };
    DomHandler.replaceElementWith = function (element, replacementElement) {
        var parentNode = element.parentNode;
        if (!parentNode)
            throw "Can't replace element";
        return parentNode.replaceChild(replacementElement, element);
    };
    DomHandler.getUserAgent = function () {
        return navigator.userAgent;
    };
    DomHandler.isIE = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return true;
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
        }
        // other browser
        return false;
    };
    DomHandler.isIOS = function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    };
    DomHandler.isAndroid = function () {
        return /(android)/i.test(navigator.userAgent);
    };
    DomHandler.appendChild = function (element, target) {
        if (this.isElement(target))
            target.appendChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.appendChild(element);
        else
            throw 'Cannot append ' + target + ' to ' + element;
    };
    DomHandler.removeChild = function (element, target) {
        if (this.isElement(target))
            target.removeChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.removeChild(element);
        else
            throw 'Cannot remove ' + element + ' from ' + target;
    };
    DomHandler.isElement = function (obj) {
        return (typeof HTMLElement === "object" ? obj instanceof HTMLElement :
            obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string");
    };
    DomHandler.calculateScrollbarWidth = function (el) {
        if (el) {
            var style = getComputedStyle(el);
            return (el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth));
        }
        else {
            if (this.calculatedScrollbarWidth !== null)
                return this.calculatedScrollbarWidth;
            var scrollDiv = document.createElement("div");
            scrollDiv.className = "ui-scrollbar-measure";
            document.body.appendChild(scrollDiv);
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            this.calculatedScrollbarWidth = scrollbarWidth;
            return scrollbarWidth;
        }
    };
    DomHandler.calculateScrollbarHeight = function () {
        if (this.calculatedScrollbarHeight !== null)
            return this.calculatedScrollbarHeight;
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "ui-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarHeight;
        return scrollbarHeight;
    };
    DomHandler.invokeElementMethod = function (element, methodName, args) {
        element[methodName].apply(element, args);
    };
    DomHandler.clearSelection = function () {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            }
            else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        }
        else if (document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            }
            catch (error) {
                //ignore IE bug
            }
        }
    };
    DomHandler.getBrowser = function () {
        if (!this.browser) {
            var matched = this.resolveUserAgent();
            this.browser = {};
            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser['version'] = matched.version;
            }
            if (this.browser['chrome']) {
                this.browser['webkit'] = true;
            }
            else if (this.browser['webkit']) {
                this.browser['safari'] = true;
            }
        }
        return this.browser;
    };
    DomHandler.resolveUserAgent = function () {
        var ua = navigator.userAgent.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };
    DomHandler.isInteger = function (value) {
        if (Number.isInteger) {
            return Number.isInteger(value);
        }
        else {
            return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
        }
    };
    DomHandler.isHidden = function (element) {
        return element.offsetParent === null;
    };
    DomHandler.zindex = 1000;
    DomHandler.calculatedScrollbarWidth = null;
    DomHandler.calculatedScrollbarHeight = null;
    return DomHandler;
}());
exports.DomHandler = DomHandler;
//# sourceMappingURL=domhandler.js.map

/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function() { return RenderType_FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function() { return View_FooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function() { return View_FooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function() { return FooterComponentNgFactory; });
/* harmony import */ var _footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.scss.shim.ngstyle */ "./src/app/@theme/components/footer/footer.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



var styles_FooterComponent = [_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FooterComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "created-by"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2020 \u00A9 by Eduatlas"]))], null, null); }
function View_FooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], [], null, null)], null, null); }
var FooterComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-footer", _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], View_FooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [".btn-submit[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2vw 0vw; }\nnb-card-header[_ngcontent-%COMP%] {\n  background: none; }\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-titlebar[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n  color: #ffffff !important; }\n\n\n.nb-theme-default   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 2rem; }\n.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      padding: 0.4rem;\n      color: #8f9bb3;\n      transition: color ease-out 0.1s; }\n.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n        color: #222b45; }\n@media (max-width: 575.98px) {\n    .nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n      font-size: 1.5rem; } }\n\n.nb-theme-dark   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 2rem; }\n.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      padding: 0.4rem;\n      color: #8f9bb3;\n      transition: color ease-out 0.1s; }\n.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n        color: #ffffff; }\n@media (max-width: 575.98px) {\n    .nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n      font-size: 1.5rem; } }\n\n.nb-theme-cosmic   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 2rem; }\n.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      padding: 0.4rem;\n      color: #b4b4db;\n      transition: color ease-out 0.1s; }\n.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n        color: #ffffff; }\n@media (max-width: 575.98px) {\n    .nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n      font-size: 1.5rem; } }\n\n.nb-theme-corporate   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 2rem; }\n.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      padding: 0.4rem;\n      color: #8f9bb3;\n      transition: color ease-out 0.1s; }\n.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n        color: #222b45; }\n@media (max-width: 575.98px) {\n    .nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n      font-size: 1.5rem; } }"];



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/@theme/components/header/header.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/fesm5/index.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony import */ var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/auth-services/auth.service */ "./src/app/services/auth-services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _core_utils_layout_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@core/utils/layout.service */ "./src/app/@core/utils/layout.service.ts");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/institute.service */ "./src/app/services/institute.service.ts");
/* harmony import */ var _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/role/role-assign.service */ "./src/app/services/role/role-assign.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_local_notifications_ngx_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx/index */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



















var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown.space" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("keydown.enter" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[3, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit._id, ""); _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.basicInfo.name; _ck(_v, 2, 0, currVal_4); });
}
function View_HeaderComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "nb-card", [["class", "mt-4"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 2, 13, "nb-select", [["fullWidth", ""], ["placeholder", "Select Institute"], ["status", "primary"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "selectedChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.selectedInstitute = $event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.setInstitutes() !== false);
                ad = (pd_1 && ad);
            }
            if (("selectedChange" === en)) {
                var pd_2 = (_co.onSelect($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], { status: [0, "status"], fullWidth: [1, "fullWidth"], placeholder: [2, "placeholder"] }, { selectedChange: "selectedChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { customLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown.space" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("keydown.enter" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 180224, [[3, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Select Institute"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_HeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_47 = "primary"; var currVal_48 = ""; var currVal_49 = "Select Institute"; _ck(_v, 3, 0, currVal_47, currVal_48, currVal_49); var currVal_50 = _co.selectedInstitute; _ck(_v, 7, 0, currVal_50); var currVal_54 = ""; _ck(_v, 12, 0, currVal_54); var currVal_55 = _co.institutes; _ck(_v, 15, 0, currVal_55); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).outline; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).filled; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).hero; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).fullWidth; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isOpen; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).tiny; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).small; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).giant; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).primary; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).info; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).success; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).warning; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).danger; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).basic; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).control; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).rectangle; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).round; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).semiRound; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 2, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46]); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).selectedClass; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabledAttribute; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tabindex; _ck(_v, 11, 0, currVal_51, currVal_52, currVal_53); });
}
function View_HeaderComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "nb-action", [["class", "control-item"], ["icon", "email-outline"], ["nbPopoverPlacement", "bottom"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.getMembers() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbActionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], [], { icon: [0, "icon"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlay"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlayHandler"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlayHandler"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4931584, [[2, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPopoverDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlayHandler"]], { content: [0, "content"], position: [1, "position"] }, null)], function (_ck, _v) { var currVal_1 = "email-outline"; _ck(_v, 1, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 25); var currVal_3 = "bottom"; _ck(_v, 4, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0); });
}
function View_HeaderComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "nb-action", [["badgePosition", "top right"], ["badgeStatus", "danger"], ["class", "control-item"], ["icon", "bell-outline"], ["nbPopoverPlacement", "bottom"]], [[2, "disabled", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbActionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], [], { icon: [0, "icon"], badgeText: [1, "badgeText"], badgeStatus: [2, "badgeStatus"], badgePosition: [3, "badgePosition"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlay"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlayHandler"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlayHandler"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4931584, [[2, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPopoverDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlayHandler"]], { content: [0, "content"], position: [1, "position"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "bell-outline"; var currVal_2 = _co.notificationCount; var currVal_3 = "danger"; var currVal_4 = "top right"; _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 26); var currVal_6 = "bottom"; _ck(_v, 4, 0, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0); }); }
function View_HeaderComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "nb-action", [["class", "user-action"]], [[2, "disabled", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbActionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 4, "nb-user", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null], [2, "context-menu-host", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbUserComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbUserComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlay"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlayHandler"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlayHandler"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4931584, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDynamicOverlayHandler"]], { items: [0, "items"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.name; _ck(_v, 3, 0, currVal_10); var currVal_11 = _co.userMenu; _ck(_v, 6, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).tiny; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).small; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).giant; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).rectangle; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).semiRound; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).round; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).contextMenuHost; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_HeaderComponent_9(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-list-item", [], [[8, "hidden", 0], [1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "nb-user", [["style", "cursor: pointer"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openChatBox(_v.context.$implicit, null) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbUserComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbUserComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_10 = _v.context.$implicit.basicDetails.name; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.filterOut; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).tiny; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).small; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).giant; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).rectangle; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).semiRound; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).round; _ck(_v, 2, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); });
}
function View_HeaderComponent_8(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "nb-list", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 8, "nb-list-item", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 6, "input", [["fullWidth", ""], ["nbInput", ""], ["placeholder", "Search Chat"], ["status", "basic"], ["type", "text"]], [[2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.employeeChatFilter = $event) !== false);
                ad = (pd_4 && ad);
            }
            if (("input" === en)) {
                var pd_5 = (_co.filterChatsForEmployee() !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { status: [0, "status"], fullWidth: [1, "fullWidth"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_25 = "basic"; var currVal_26 = ""; _ck(_v, 5, 0, currVal_25, currVal_26); var currVal_27 = _co.employeeChatFilter; _ck(_v, 8, 0, currVal_27); var currVal_28 = _co.chatMembers.employeeDetails; _ck(_v, 12, 0, currVal_28); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).role; _ck(_v, 2, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fullWidth; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).tiny; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).medium; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).large; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).giant; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).primary; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).info; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).success; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).warning; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).danger; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).basic; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).control; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).rectangle; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).semiRound; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).round; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 4, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24]); });
}
function View_HeaderComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-tab", [["tabTitle", "Teachers"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[5, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabComponent"], [], { tabTitle: [0, "tabTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "Teachers"; _ck(_v, 1, 0, currVal_2); var currVal_3 = _co.chatMembers; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 28); _ck(_v, 3, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).activeValue; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_HeaderComponent_12(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-list-item", [], [[8, "hidden", 0], [1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "nb-user", [["style", "cursor: pointer"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openChatBox(_v.context.$implicit, null) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbUserComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbUserComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_10 = _v.context.$implicit.basicDetails.name; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.filterOut; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).tiny; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).small; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).giant; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).rectangle; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).semiRound; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).round; _ck(_v, 2, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); });
}
function View_HeaderComponent_11(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "nb-list", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 8, "nb-list-item", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 6, "input", [["fullWidth", ""], ["nbInput", ""], ["placeholder", "Search Chat"], ["status", "basic"], ["type", "text"]], [[2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.studentChatFilter = $event) !== false);
                ad = (pd_4 && ad);
            }
            if (("input" === en)) {
                var pd_5 = (_co.filterChatsForStudents() !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { status: [0, "status"], fullWidth: [1, "fullWidth"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_25 = "basic"; var currVal_26 = ""; _ck(_v, 5, 0, currVal_25, currVal_26); var currVal_27 = _co.studentChatFilter; _ck(_v, 8, 0, currVal_27); var currVal_28 = _co.chatMembers.studentsDetails; _ck(_v, 12, 0, currVal_28); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).role; _ck(_v, 2, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fullWidth; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).tiny; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).medium; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).large; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).giant; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).primary; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).info; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).success; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).warning; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).danger; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).basic; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).control; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).rectangle; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).semiRound; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).round; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 4, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24]); });
}
function View_HeaderComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-tab", [["tabTitle", "Students"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[5, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabComponent"], [], { tabTitle: [0, "tabTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "Students"; _ck(_v, 1, 0, currVal_2); var currVal_3 = _co.chatMembers; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 28); _ck(_v, 3, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).activeValue; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_HeaderComponent_15(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-list-item", [], [[8, "hidden", 0], [1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "nb-user", [["style", "cursor: pointer"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openChatBox(_v.context.$implicit, "teacherDetails") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbUserComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbUserComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_10 = _v.context.$implicit.teachers.name; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.filterOut; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).tiny; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).small; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).giant; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).rectangle; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).semiRound; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).round; _ck(_v, 2, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); });
}
function View_HeaderComponent_14(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "nb-list", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 8, "nb-list-item", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 6, "input", [["fullWidth", ""], ["nbInput", ""], ["placeholder", "Search Chat"], ["status", "basic"], ["type", "text"]], [[2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.employeeChatFilter = $event) !== false);
                ad = (pd_4 && ad);
            }
            if (("input" === en)) {
                var pd_5 = (_co.filterChatsForEmployee() !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { status: [0, "status"], fullWidth: [1, "fullWidth"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_25 = "basic"; var currVal_26 = ""; _ck(_v, 5, 0, currVal_25, currVal_26); var currVal_27 = _co.employeeChatFilter; _ck(_v, 8, 0, currVal_27); var currVal_28 = _co.chatMembers.teacherDetails; _ck(_v, 12, 0, currVal_28); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).role; _ck(_v, 2, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fullWidth; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).tiny; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).medium; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).large; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).giant; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).primary; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).info; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).success; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).warning; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).danger; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).basic; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).control; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).rectangle; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).semiRound; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).round; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 4, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24]); });
}
function View_HeaderComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-tab", [["tabTitle", "Teachers"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[5, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabComponent"], [], { tabTitle: [0, "tabTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "Teachers"; _ck(_v, 1, 0, currVal_2); var currVal_3 = _co.chatMembers; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 28); _ck(_v, 3, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).activeValue; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_HeaderComponent_18(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-list-item", [], [[8, "hidden", 0], [1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "nb-user", [["style", "cursor: pointer"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openChatBox(_v.context.$implicit, "instituteList") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbUserComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbUserComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_10 = _v.context.$implicit.instituteUsers.name; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.filterOut; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).tiny; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).small; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).giant; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).rectangle; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).semiRound; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).round; _ck(_v, 2, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); });
}
function View_HeaderComponent_17(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "nb-list", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 8, "nb-list-item", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 6, "input", [["fullWidth", ""], ["nbInput", ""], ["placeholder", "Search Chat"], ["status", "basic"], ["type", "text"]], [[2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.studentChatFilter = $event) !== false);
                ad = (pd_4 && ad);
            }
            if (("input" === en)) {
                var pd_5 = (_co.filterChatsForStudents() !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { status: [0, "status"], fullWidth: [1, "fullWidth"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_25 = "basic"; var currVal_26 = ""; _ck(_v, 5, 0, currVal_25, currVal_26); var currVal_27 = _co.studentChatFilter; _ck(_v, 8, 0, currVal_27); var currVal_28 = _co.chatMembers.instituteDetails; _ck(_v, 12, 0, currVal_28); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).role; _ck(_v, 2, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fullWidth; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).tiny; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).medium; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).large; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).giant; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).primary; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).info; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).success; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).warning; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).danger; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).basic; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).control; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).rectangle; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).semiRound; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).round; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 4, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24]); });
}
function View_HeaderComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-tab", [["tabTitle", "Institute"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[5, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabComponent"], [], { tabTitle: [0, "tabTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "Institute"; _ck(_v, 1, 0, currVal_2); var currVal_3 = _co.chatMembers; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 28); _ck(_v, 3, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).activeValue; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_HeaderComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "chatPopup"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "nb-tabset", [["fullWidth", ""]], [[2, "full-width", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbTabsetComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbTabsetComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1097728, null, 1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabsetComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { fullWidth: [0, "fullWidth"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ""; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.chatMembers.employeeDetails; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.chatMembers.studentsDetails; _ck(_v, 7, 0, currVal_3); var currVal_4 = _co.chatMembers.teacherDetails; _ck(_v, 9, 0, currVal_4); var currVal_5 = _co.chatMembers.instituteDetails; _ck(_v, 11, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).fullWidthValue; _ck(_v, 1, 0, currVal_0); }); }
function View_HeaderComponent_21(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "nb-list-item", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 8, "div", [["style", "cursor: pointer; position: relative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["style", "font-weight: bold"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openNotificationBox(_v.context.$implicit, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 29)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["class", "notificationText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" (", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["style", "position: absolute; right: 0px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-trash"], ["style", "font-size: 18px"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.deleteNotification(_v.context.$implicit._id, _v.context.index, _v.context.$implicit.seen) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], function (_ck, _v) { var currVal_1 = (!_v.context.$implicit.seen ? "newNotification" : ""); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).role; _ck(_v, 0, 0, currVal_0); var currVal_2 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.message; _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.constructDate(_v.context.$implicit.date); _ck(_v, 10, 0, currVal_4); });
}
function View_HeaderComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-list", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.notifications; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; _ck(_v, 0, 0, currVal_0); }); }
function View_HeaderComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "chatPopup"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.notifications && (_co.notifications.length > 0)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 30); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_HeaderComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "nb-chat-message", [], [[40, "@flyInOut", 0], [2, "not-reply", null], [2, "reply", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbChatMessageComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbChatMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[6, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbChatMessageComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { reply: [0, "reply"], message: [1, "message"], sender: [2, "sender"], date: [3, "date"], files: [4, "files"], avatar: [5, "avatar"], type: [6, "type"] }, null)], function (_ck, _v) { var currVal_3 = _v.context.$implicit.reply; var currVal_4 = _v.context.$implicit.text; var currVal_5 = _v.context.$implicit.user.name; var currVal_6 = _v.context.$implicit.date; var currVal_7 = _v.context.$implicit.files; var currVal_8 = _v.context.$implicit.user.avatar; var currVal_9 = _v.context.$implicit.type; _ck(_v, 1, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).flyInOut; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).notReply; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).reply; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_HeaderComponent_22(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "nb-chat", [["size", "small"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-success", null], [2, "status-info", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbChatComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbChatComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 5816320, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbChatComponent"], [], { size: [0, "size"], status: [1, "status"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { messages: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { chatForm: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 1, "nb-chat-form", [], [[2, "file-over", null]], [[null, "send"], [null, "drop"], [null, "dragover"], [null, "dragleave"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("drop" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onDrop($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("dragover" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onDragOver() !== false);
                ad = (pd_1 && ad);
            }
            if (("dragleave" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onDragLeave() !== false);
                ad = (pd_2 && ad);
            }
            if (("send" === en)) {
                var pd_3 = (_co.sendMessage(_co.chatmessage[_v.context.$implicit.userId].messages, $event, _v.context.$implicit) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbChatFormComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbChatFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 49152, [[7, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbChatFormComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], null, { send: "send" })], function (_ck, _v) { var _co = _v.component; var currVal_12 = "small"; var currVal_13 = _co.chatmessage[_v.context.$implicit.userId].status; _ck(_v, 2, 0, currVal_12, currVal_13); var currVal_14 = _co.chatmessage[_v.context.$implicit.userId].messages; _ck(_v, 6, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).success; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).info; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).control; _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).fileOver; _ck(_v, 7, 0, currVal_15); });
}
function View_HeaderComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-5 mb-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Record Found"]))], null, null); }
function View_HeaderComponent_25(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 1, 3, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "div", [["class", "notificationModal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 3, 4, "nb-card-footer", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardFooterComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardFooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "button", [["class", "float-right"], ["nbButton", ""]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_v.context.dialogRef.close() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Close Dialog"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_20 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_20); var currVal_21 = _v.context.$implicit.message; _ck(_v, 8, 0, currVal_21); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).filled; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).outline; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ghost; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).hero; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).fullWidth; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tabbable; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tiny; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).small; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).medium; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).large; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).giant; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).primary; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).info; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).success; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).warning; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).danger; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).basic; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).control; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).rectangle; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).round; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).semiRound; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).iconLeft; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).iconRight; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).transitions; _ck(_v, 11, 1, [currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47]); });
}
function View_HeaderComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-5 mb-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Notifications Found"]))], null, null); }
function View_HeaderComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { chatWindow: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { chatPopup: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "header-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "logo-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "a", [["class", "sidebar-toggle"], ["href", "#"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleSidebar() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "nb-icon", [["icon", "menu-2-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "a", [["class", "logo"], ["href", "#"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.navigateHome() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["src", "assets/img/eduatlas.png"], ["width", "100%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a", [["class", "mobileLogo"], ["href", "#"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.navigateHome() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "img", [["src", "assets/img/EA FAVI.png"], ["width", "40px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 11, "div", [["class", "header-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 10, "nb-actions", [["size", "small"]], [[2, "full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbActionsComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], [], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 1, "nb-action", [["class", "control-item"], ["icon", "power"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.logout() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbActionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], [], { icon: [0, "icon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_HeaderComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 147456, null, 0, _nebular_security__WEBPACK_IMPORTED_MODULE_8__["NbIsGrantedDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _nebular_security__WEBPACK_IMPORTED_MODULE_8__["NbAccessChecker"]], { nbIsGranted: [0, "nbIsGranted"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](24, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["chatPopup", 2]], null, 0, null, View_HeaderComponent_6)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["notificationPopup", 2]], null, 0, null, View_HeaderComponent_19)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[1, 2], ["chatWindow", 2]], null, 0, null, View_HeaderComponent_22)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noChatMembers", 2]], null, 0, null, View_HeaderComponent_24)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["notificationDialog", 2]], null, 0, null, View_HeaderComponent_25)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noNotifications", 2]], null, 0, null, View_HeaderComponent_26))], function (_ck, _v) { var _co = _v.component; var currVal_8 = "menu-2-outline"; _ck(_v, 6, 0, currVal_8); var currVal_9 = (_co.user.role !== "admin"); _ck(_v, 12, 0, currVal_9); var currVal_16 = "small"; _ck(_v, 15, 0, currVal_16); var currVal_17 = (_co.user.role !== "admin"); _ck(_v, 17, 0, currVal_17); var currVal_18 = (_co.user.role !== "admin"); _ck(_v, 19, 0, currVal_18); var currVal_20 = "power"; _ck(_v, 21, 0, currVal_20); var currVal_21 = _ck(_v, 24, 0, "view", "user"); _ck(_v, 23, 0, currVal_21); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).html; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).primary; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).info; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).success; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).warning; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).danger; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).basic; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).control; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).fullWidth; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).tiny; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).small; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).medium; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).large; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).giant; _ck(_v, 14, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled; _ck(_v, 20, 0, currVal_19); });
}
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], [_services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"], _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _services_student_service__WEBPACK_IMPORTED_MODULE_12__["StudentService"], _core_utils_layout_service__WEBPACK_IMPORTED_MODULE_13__["LayoutService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_institute_service__WEBPACK_IMPORTED_MODULE_14__["InstituteService"], _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_15__["RoleAssignService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbWindowService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_16__["SocketioService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["MenuController"], _ionic_native_local_notifications_ngx_index__WEBPACK_IMPORTED_MODULE_18__["LocalNotifications"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-header", _header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [".btn-submit[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2vw 0vw; }\nnb-card-header[_ngcontent-%COMP%] {\n  background: none; }\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-titlebar[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n  color: #ffffff !important; }\n\n.nb-theme-default   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n.nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: calc(16rem - 1.25rem); }\n.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    align-content: center; }\n.nb-theme-default   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n    cursor: pointer; }\n.nb-theme-default   [_nghost-%COMP%]     nb-search button {\n    padding: 0 !important; }\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: auto; }\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n      text-decoration: none;\n      color: #8f9bb3; }\n[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n        padding-right: 1.25rem; }\n[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n        padding-left: 1.25rem; }\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n        font-size: 1.75rem; }\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      white-space: nowrap;\n      text-decoration: none; }\n[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n        border-left: 1px solid #edf1f7; }\n[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n        border-right: 1px solid #edf1f7; }\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .mobileLogo[_ngcontent-%COMP%] {\n      font-size: 1.75rem;\n      white-space: nowrap;\n      text-decoration: none;\n      display: none; }\n@media (max-width: 767.98px) {\n    .nb-theme-default   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n      border: none;\n      padding: 0; } }\n@media (max-width: 575.98px) {\n    .nb-theme-default   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n      display: none; }\n    .nb-theme-default   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n      display: none; }\n    .nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n      width: 100%; }\n    .nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]   .mobileLogo[_ngcontent-%COMP%] {\n      display: unset; } }\n\n.nb-theme-dark   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n.nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: calc(16rem - 1.25rem); }\n.nb-theme-dark   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    align-content: center; }\n.nb-theme-dark   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n    cursor: pointer; }\n.nb-theme-dark   [_nghost-%COMP%]     nb-search button {\n    padding: 0 !important; }\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: auto; }\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n      text-decoration: none;\n      color: #8f9bb3; }\n[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n        padding-right: 1.25rem; }\n[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n        padding-left: 1.25rem; }\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n        font-size: 1.75rem; }\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      white-space: nowrap;\n      text-decoration: none; }\n[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n        border-left: 1px solid #151a30; }\n[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n        border-right: 1px solid #151a30; }\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .mobileLogo[_ngcontent-%COMP%] {\n      font-size: 1.75rem;\n      white-space: nowrap;\n      text-decoration: none;\n      display: none; }\n@media (max-width: 767.98px) {\n    .nb-theme-dark   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n      border: none;\n      padding: 0; } }\n@media (max-width: 575.98px) {\n    .nb-theme-dark   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n      display: none; }\n    .nb-theme-dark   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n      display: none; }\n    .nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n      width: 100%; }\n    .nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]   .mobileLogo[_ngcontent-%COMP%] {\n      display: unset; } }\n\n.nb-theme-cosmic   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n.nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: calc(16rem - 1.25rem); }\n.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    align-content: center; }\n.nb-theme-cosmic   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n    cursor: pointer; }\n.nb-theme-cosmic   [_nghost-%COMP%]     nb-search button {\n    padding: 0 !important; }\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: auto; }\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n      text-decoration: none;\n      color: #b4b4db; }\n[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n        padding-right: 1.25rem; }\n[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n        padding-left: 1.25rem; }\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n        font-size: 1.75rem; }\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      white-space: nowrap;\n      text-decoration: none; }\n[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n        border-left: 1px solid #1b1b38; }\n[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n        border-right: 1px solid #1b1b38; }\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .mobileLogo[_ngcontent-%COMP%] {\n      font-size: 1.75rem;\n      white-space: nowrap;\n      text-decoration: none;\n      display: none; }\n@media (max-width: 767.98px) {\n    .nb-theme-cosmic   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n      border: none;\n      padding: 0; } }\n@media (max-width: 575.98px) {\n    .nb-theme-cosmic   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n      display: none; }\n    .nb-theme-cosmic   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n      display: none; }\n    .nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n      width: 100%; }\n    .nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]   .mobileLogo[_ngcontent-%COMP%] {\n      display: unset; } }\n\n.nb-theme-corporate   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n.nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: calc(16rem - 1.25rem); }\n.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    align-content: center; }\n.nb-theme-corporate   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n    cursor: pointer; }\n.nb-theme-corporate   [_nghost-%COMP%]     nb-search button {\n    padding: 0 !important; }\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: auto; }\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n      text-decoration: none;\n      color: #8f9bb3; }\n[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n        padding-right: 1.25rem; }\n[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n        padding-left: 1.25rem; }\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n        font-size: 1.75rem; }\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      white-space: nowrap;\n      text-decoration: none; }\n[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n        border-left: 1px solid #edf1f7; }\n[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n        border-right: 1px solid #edf1f7; }\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .mobileLogo[_ngcontent-%COMP%] {\n      font-size: 1.75rem;\n      white-space: nowrap;\n      text-decoration: none;\n      display: none; }\n@media (max-width: 767.98px) {\n    .nb-theme-corporate   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n      border: none;\n      padding: 0; } }\n@media (max-width: 575.98px) {\n    .nb-theme-corporate   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n      display: none; }\n    .nb-theme-corporate   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n      display: none; }\n    .nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n      width: 100%; }\n    .nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]   .mobileLogo[_ngcontent-%COMP%] {\n      display: unset; } }\n.chatPopup[_ngcontent-%COMP%] {\n  width: 320px;\n  max-height: 600px;\n  overflow-y: auto; }\n.newNotification[_ngcontent-%COMP%] {\n  background-color: #bbbbbb; }\n.notificationModal[_ngcontent-%COMP%] {\n  display: block; }\n.notificationText[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: inline-block;\n  white-space: nowrap;\n  width: 250px; }"];



/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/@theme/layouts/one-column/one-column.layout.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_OneColumnLayoutComponent, View_OneColumnLayoutComponent_0, View_OneColumnLayoutComponent_Host_0, OneColumnLayoutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_OneColumnLayoutComponent", function() { return RenderType_OneColumnLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_OneColumnLayoutComponent_0", function() { return View_OneColumnLayoutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_OneColumnLayoutComponent_Host_0", function() { return View_OneColumnLayoutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponentNgFactory", function() { return OneColumnLayoutComponentNgFactory; });
/* harmony import */ var _one_column_layout_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-column.layout.scss.shim.ngstyle */ "./src/app/@theme/layouts/one-column/one-column.layout.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component.ngfactory */ "./src/app/@theme/components/header/header.component.ngfactory.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony import */ var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth-services/auth.service */ "./src/app/services/auth-services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _core_utils_layout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@core/utils/layout.service */ "./src/app/@core/utils/layout.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/institute.service */ "./src/app/services/institute.service.ts");
/* harmony import */ var _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/role/role-assign.service */ "./src/app/services/role/role-assign.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_local_notifications_ngx_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx/index */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/footer/footer.component.ngfactory */ "./src/app/@theme/components/footer/footer.component.ngfactory.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony import */ var _one_column_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./one-column.layout */ "./src/app/@theme/layouts/one-column/one-column.layout.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



















var styles_OneColumnLayoutComponent = [_one_column_layout_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_OneColumnLayoutComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_OneColumnLayoutComponent, data: {} });

function View_OneColumnLayoutComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "ion-menu", [["class", "menu_main"], ["content-id", "content"], ["menuId", "first"], ["side", "start"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "ion-header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "ion-toolbar", [["color", "primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "ion-title", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "ion-content", [["overflow-scroll", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "nb-sidebar", [["class", "menu-sidebar"], ["tag", "menu-sidebar"]], [[2, "fixed", null], [2, "right", null], [2, "left", null], [2, "start", null], [2, "end", null], [2, "expanded", null], [2, "collapsed", null], [2, "compacted", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSidebarComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 770048, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tag: [0, "tag"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](1, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "ion-menu-controller", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 13, "ion-content", [["id", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 12, "nb-layout", [["windowMode", ""]], [[2, "window-mode", null], [2, "with-scroll", null], [2, "with-subheader", null]], [["window", "scroll"], ["window", "resize"]], function (_v, en, $event) {
            var ad = true;
            if (("window:scroll" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("window:resize" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onResize($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbLayoutComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbLayoutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4374528, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_WINDOW"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutScrollService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutRulerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayContainerAdapter"]], { windowMode: [0, "windowMode"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "nb-layout-header", [["fixed", ""], ["style", "background-color:#ffd500;"]], [[2, "fixed", null], [2, "subheader", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbLayoutHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbLayoutHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutHeaderComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"]], { fixed: [0, "fixed"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "ngx-header", [], null, null, null, _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HeaderComponent_0"], _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 245760, null, 0, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], [_services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"], _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"], _core_utils_layout_service__WEBPACK_IMPORTED_MODULE_9__["LayoutService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _services_institute_service__WEBPACK_IMPORTED_MODULE_11__["InstituteService"], _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_12__["RoleAssignService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbWindowService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_13__["SocketioService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["MenuController"], _ionic_native_local_notifications_ngx_index__WEBPACK_IMPORTED_MODULE_15__["LocalNotifications"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 3, 2, "nb-layout-column", [], [[2, "left", null], [2, "start", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbLayoutColumnComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbLayoutColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](0, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 4, 3, "nb-layout-footer", [["fixed", ""]], [[2, "fixed", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbLayoutFooterComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbLayoutFooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutFooterComponent"], [], { fixed: [0, "fixed"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 1, "ngx-footer", [], null, null, null, _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_FooterComponent_0"], _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 49152, null, 0, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], [], null, null)], function (_ck, _v) { var currVal_8 = "menu-sidebar"; _ck(_v, 8, 0, currVal_8); var currVal_12 = ""; _ck(_v, 13, 0, currVal_12); var currVal_15 = ""; _ck(_v, 15, 0, currVal_15); _ck(_v, 17, 0); var currVal_19 = ""; _ck(_v, 22, 0, currVal_19); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).fixedValue; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).rightValue; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).leftValue; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).startValue; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).endValue; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).expanded; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).collapsed; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).compacted; _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).windowModeValue; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).withScrollValue; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).withSubheader; _ck(_v, 12, 0, currVal_9, currVal_10, currVal_11); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).fixedValue; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).subheaderValue; _ck(_v, 14, 0, currVal_13, currVal_14); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).leftValue; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).startValue; _ck(_v, 18, 0, currVal_16, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).fixedValue; _ck(_v, 21, 0, currVal_18); });
}
function View_OneColumnLayoutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-one-column-layout", [], null, null, null, View_OneColumnLayoutComponent_0, RenderType_OneColumnLayoutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _one_column_layout__WEBPACK_IMPORTED_MODULE_18__["OneColumnLayoutComponent"], [], null, null)], null, null); }
var OneColumnLayoutComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-one-column-layout", _one_column_layout__WEBPACK_IMPORTED_MODULE_18__["OneColumnLayoutComponent"], View_OneColumnLayoutComponent_Host_0, {}, {}, ["nb-menu", "router-outlet"]);



/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/@theme/layouts/one-column/one-column.layout.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [".btn-submit[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2vw 0vw; }\nnb-card-header[_ngcontent-%COMP%] {\n  background: none; }\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-titlebar[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n  color: #ffffff !important; }\n\n\n.nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n  padding-bottom: 5rem; }\n\n.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n  padding-bottom: 5rem; }\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n  padding-bottom: 5rem; }\n\n.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n  padding-bottom: 5rem; }\n.menu_main[_ngcontent-%COMP%] {\n  --width: 16rem; }"];



/***/ })

}]);