(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-select_3.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-select_3.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_select, ion_select_option, ion_select_popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_option", function() { return SelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_popover", function() { return SelectPopover; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm-es5/index-92848855.js");
/* harmony import */ var _ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-23e7365a.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-23e7365a.js");
/* harmony import */ var _helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-5c745fbd.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-5c745fbd.js");
/* harmony import */ var _hardware_back_button_7b6ede21_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hardware-back-button-7b6ede21.js */ "./node_modules/@ionic/core/dist/esm-es5/hardware-back-button-7b6ede21.js");
/* harmony import */ var _overlays_2cc140a1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-2cc140a1.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-2cc140a1.js");
/* harmony import */ var _theme_5641d27f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-5641d27f.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-5641d27f.js");







var watchForOptions = function (containerEl, tagName, onChange) {
    /* tslint:disable-next-line */
    if (typeof MutationObserver === 'undefined') {
        return;
    }
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.value === el.value; });
};
var selectIosCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}";
var selectMdCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}";
var Select = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.ionChange = Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionChange", 7);
        this.ionCancel = Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionCancel", 7);
        this.ionFocus = Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionFocus", 7);
        this.ionBlur = Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionBlur", 7);
        this.ionStyle = Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionStyle", 7);
        this.inputId = "ion-sel-" + selectIds++;
        this.didInit = false;
        this.isExpanded = false;
        /**
         * If `true`, the user cannot interact with the select.
         */
        this.disabled = false;
        /**
         * The text to display on the cancel button.
         */
        this.cancelText = 'Cancel';
        /**
         * The text to display on the ok button.
         */
        this.okText = 'OK';
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the select can accept multiple values.
         */
        this.multiple = false;
        /**
         * The interface the select should use: `action-sheet`, `popover` or `alert`.
         */
        this.interface = 'alert';
        /**
         * Any additional options that the `alert`, `action-sheet` or `popover` interface
         * can take. See the [ion-alert docs](../alert), the
         * [ion-action-sheet docs](../action-sheet) and the
         * [ion-popover docs](../popover) for the
         * create options for each interface.
         *
         * Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.
         */
        this.interfaceOptions = {};
        this.onClick = function (ev) {
            _this.setFocus();
            _this.open(ev);
        };
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
    }
    class_1.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    class_1.prototype.valueChanged = function () {
        this.emitStyle();
        if (this.didInit) {
            this.ionChange.emit({
                value: this.value,
            });
        }
    };
    class_1.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.updateOverlayOptions();
                this.emitStyle();
                this.mutationO = watchForOptions(this.el, 'ion-select-option', function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        this.updateOverlayOptions();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
        }
    };
    class_1.prototype.componentDidLoad = function () {
        this.didInit = true;
    };
    /**
     * Open the select overlay. The overlay is either an alert, action sheet, or popover,
     * depending on the `interface` property on the `ion-select`.
     *
     * @param event The user interface event that called the open.
     */
    class_1.prototype.open = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var overlay, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.disabled || this.isExpanded) {
                            return [2 /*return*/, undefined];
                        }
                        _a = this;
                        return [4 /*yield*/, this.createOverlay(event)];
                    case 1:
                        overlay = _a.overlay = _b.sent();
                        this.isExpanded = true;
                        overlay.onDidDismiss().then(function () {
                            _this.overlay = undefined;
                            _this.isExpanded = false;
                            _this.setFocus();
                        });
                        return [4 /*yield*/, overlay.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, overlay];
                }
            });
        });
    };
    class_1.prototype.createOverlay = function (ev) {
        var selectInterface = this.interface;
        if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
            console.warn("Select interface cannot be \"" + selectInterface + "\" with a multi-value select. Using the \"alert\" interface instead.");
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover' && !ev) {
            console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover') {
            return this.openPopover(ev);
        }
        if (selectInterface === 'action-sheet') {
            return this.openActionSheet();
        }
        return this.openAlert();
    };
    class_1.prototype.updateOverlayOptions = function () {
        var overlay = this.overlay;
        if (!overlay) {
            return;
        }
        var childOpts = this.childOpts;
        var value = this.value;
        switch (this.interface) {
            case 'action-sheet':
                overlay.buttons = this.createActionSheetButtons(childOpts, value);
                break;
            case 'popover':
                var popover = overlay.querySelector('ion-select-popover');
                if (popover) {
                    popover.options = this.createPopoverOptions(childOpts, value);
                }
                break;
            case 'alert':
                var inputType = (this.multiple ? 'checkbox' : 'radio');
                overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
                break;
        }
    };
    class_1.prototype.createActionSheetButtons = function (data, selectValue) {
        var _this = this;
        var actionSheetButtons = data.map(function (option) {
            var value = getOptionValue(option);
            // Remove hydrated before copying over classes
            var copyClasses = Array.from(option.classList).filter(function (cls) { return cls !== 'hydrated'; }).join(' ');
            var optClass = OPTION_CLASS + " " + copyClasses;
            return {
                role: (isOptionSelected(value, selectValue, _this.compareWith) ? 'selected' : ''),
                text: option.textContent,
                cssClass: optClass,
                handler: function () {
                    _this.value = value;
                }
            };
        });
        // Add "cancel" button
        actionSheetButtons.push({
            text: this.cancelText,
            role: 'cancel',
            handler: function () {
                _this.ionCancel.emit();
            }
        });
        return actionSheetButtons;
    };
    class_1.prototype.createAlertInputs = function (data, inputType, selectValue) {
        var _this = this;
        var alertInputs = data.map(function (option) {
            var value = getOptionValue(option);
            // Remove hydrated before copying over classes
            var copyClasses = Array.from(option.classList).filter(function (cls) { return cls !== 'hydrated'; }).join(' ');
            var optClass = OPTION_CLASS + " " + copyClasses;
            return {
                type: inputType,
                cssClass: optClass,
                label: option.textContent || '',
                value: value,
                checked: isOptionSelected(value, selectValue, _this.compareWith),
                disabled: option.disabled
            };
        });
        return alertInputs;
    };
    class_1.prototype.createPopoverOptions = function (data, selectValue) {
        var _this = this;
        var popoverOptions = data.map(function (option) {
            var value = getOptionValue(option);
            // Remove hydrated before copying over classes
            var copyClasses = Array.from(option.classList).filter(function (cls) { return cls !== 'hydrated'; }).join(' ');
            var optClass = OPTION_CLASS + " " + copyClasses;
            return {
                text: option.textContent || '',
                cssClass: optClass,
                value: value,
                checked: isOptionSelected(value, selectValue, _this.compareWith),
                disabled: option.disabled,
                handler: function () {
                    _this.value = value;
                    _this.close();
                }
            };
        });
        return popoverOptions;
    };
    class_1.prototype.openPopover = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var interfaceOptions, mode, value, popoverOpts;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                interfaceOptions = this.interfaceOptions;
                mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
                value = this.value;
                popoverOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], event: ev, componentProps: {
                        header: interfaceOptions.header,
                        subHeader: interfaceOptions.subHeader,
                        message: interfaceOptions.message,
                        value: value,
                        options: this.createPopoverOptions(this.childOpts, value)
                    } });
                return [2 /*return*/, _overlays_2cc140a1_js__WEBPACK_IMPORTED_MODULE_5__["c"].create(popoverOpts)];
            });
        });
    };
    class_1.prototype.openActionSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mode, interfaceOptions, actionSheetOpts;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
                interfaceOptions = this.interfaceOptions;
                actionSheetOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { buttons: this.createActionSheetButtons(this.childOpts, this.value), cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
                return [2 /*return*/, _overlays_2cc140a1_js__WEBPACK_IMPORTED_MODULE_5__["b"].create(actionSheetOpts)];
            });
        });
    };
    class_1.prototype.openAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var label, labelText, interfaceOptions, inputType, mode, alertOpts;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                label = this.getLabel();
                labelText = (label) ? label.textContent : null;
                interfaceOptions = this.interfaceOptions;
                inputType = (this.multiple ? 'checkbox' : 'radio');
                mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
                alertOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.createAlertInputs(this.childOpts, inputType, this.value), buttons: [
                        {
                            text: this.cancelText,
                            role: 'cancel',
                            handler: function () {
                                _this.ionCancel.emit();
                            }
                        },
                        {
                            text: this.okText,
                            handler: function (selectedValues) {
                                _this.value = selectedValues;
                            }
                        }
                    ], cssClass: ['select-alert', interfaceOptions.cssClass,
                        (this.multiple ? 'multiple-select-alert' : 'single-select-alert')] });
                return [2 /*return*/, _overlays_2cc140a1_js__WEBPACK_IMPORTED_MODULE_5__["a"].create(alertOpts)];
            });
        });
    };
    /**
     * Close the select interface.
     */
    class_1.prototype.close = function () {
        // TODO check !this.overlay || !this.isFocus()
        if (!this.overlay) {
            return Promise.resolve(false);
        }
        return this.overlay.dismiss();
    };
    class_1.prototype.getLabel = function () {
        return Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el);
    };
    class_1.prototype.hasValue = function () {
        return this.getText() !== '';
    };
    Object.defineProperty(class_1.prototype, "childOpts", {
        get: function () {
            return Array.from(this.el.querySelectorAll('ion-select-option'));
        },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.getText = function () {
        var selectedText = this.selectedText;
        if (selectedText != null && selectedText !== '') {
            return selectedText;
        }
        return generateText(this.childOpts, this.value, this.compareWith);
    };
    class_1.prototype.setFocus = function () {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    };
    class_1.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'select': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
            'select-disabled': this.disabled
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, placeholder = _b.placeholder, name = _b.name, disabled = _b.disabled, isExpanded = _b.isExpanded, value = _b.value, el = _b.el;
        var mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
        var labelId = this.inputId + '-lbl';
        var label = Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_3__["f"])(el);
        if (label) {
            label.id = labelId;
        }
        var addPlaceholderClass = false;
        var selectText = this.getText();
        if (selectText === '' && placeholder != null) {
            selectText = placeholder;
            addPlaceholderClass = true;
        }
        Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_3__["a"])(true, el, name, parseValue(value), disabled);
        var selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
        };
        var textPart = addPlaceholderClass ? 'placeholder' : 'text';
        return (Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, role: "listbox", "aria-haspopup": "dialog", "aria-disabled": disabled ? 'true' : null, "aria-expanded": "" + isExpanded, "aria-labelledby": labelId, class: (_a = {},
                _a[mode] = true,
                _a['in-item'] = Object(_theme_5641d27f_js__WEBPACK_IMPORTED_MODULE_6__["h"])('ion-item', el),
                _a['select-disabled'] = disabled,
                _a) }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: selectTextClasses, part: textPart }, selectText), Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "select-icon", role: "presentation", part: "icon" }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "select-icon-inner" })), Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled, ref: (function (btnEl) { return _this.buttonEl = btnEl; }) })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledChanged"],
                "placeholder": ["disabledChanged"],
                "value": ["valueChanged"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
var isOptionSelected = function (currentValue, compareValue, compareWith) {
    if (currentValue === undefined) {
        return false;
    }
    if (Array.isArray(currentValue)) {
        return currentValue.some(function (val) { return compareOptions(val, compareValue, compareWith); });
    }
    else {
        return compareOptions(currentValue, compareValue, compareWith);
    }
};
var getOptionValue = function (el) {
    var value = el.value;
    return (value === undefined)
        ? el.textContent || ''
        : value;
};
var parseValue = function (value) {
    if (value == null) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.join(',');
    }
    return value.toString();
};
var compareOptions = function (currentValue, compareValue, compareWith) {
    if (typeof compareWith === 'function') {
        return compareWith(currentValue, compareValue);
    }
    else if (typeof compareWith === 'string') {
        return currentValue[compareWith] === compareValue[compareWith];
    }
    else {
        return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
    }
};
var generateText = function (opts, value, compareWith) {
    if (value === undefined) {
        return '';
    }
    if (Array.isArray(value)) {
        return value
            .map(function (v) { return textForValue(opts, v, compareWith); })
            .filter(function (opt) { return opt !== null; })
            .join(', ');
    }
    else {
        return textForValue(opts, value, compareWith) || '';
    }
};
var textForValue = function (opts, value, compareWith) {
    var selectOpt = opts.find(function (opt) {
        return compareOptions(getOptionValue(opt), value, compareWith);
    });
    return selectOpt
        ? selectOpt.textContent
        : null;
};
var selectIds = 0;
var OPTION_CLASS = 'select-interface-option';
Select.style = {
    ios: selectIosCss,
    md: selectMdCss
};
var selectOptionCss = ":host{display:none}";
var SelectOption = /** @class */ (function () {
    function SelectOption(hostRef) {
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.inputId = "ion-selopt-" + selectOptionIds++;
        /**
         * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
         */
        this.disabled = false;
    }
    SelectOption.prototype.render = function () {
        return (Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "option", id: this.inputId, class: Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this) }));
    };
    Object.defineProperty(SelectOption.prototype, "el", {
        get: function () { return Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this); },
        enumerable: false,
        configurable: true
    });
    return SelectOption;
}());
var selectOptionIds = 0;
SelectOption.style = selectOptionCss;
var selectPopoverCss = ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
var SelectPopover = /** @class */ (function () {
    function SelectPopover(hostRef) {
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /** Array of options for the popover */
        this.options = [];
    }
    SelectPopover.prototype.onSelect = function (ev) {
        var option = this.options.find(function (o) { return o.value === ev.target.value; });
        if (option) {
            Object(_overlays_2cc140a1_js__WEBPACK_IMPORTED_MODULE_5__["s"])(option.handler);
        }
    };
    SelectPopover.prototype.render = function () {
        var checkedOption = this.options.find(function (o) { return o.checked; });
        var checkedValue = checkedOption ? checkedOption.value : undefined;
        return (Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this) }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-list", null, this.header !== undefined && Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
            Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-item", null, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-label", { class: "ion-text-wrap" }, this.subHeader !== undefined && Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("p", null, this.message))), Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-radio-group", { value: checkedValue }, this.options.map(function (option) { return Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-item", { class: Object(_theme_5641d27f_js__WEBPACK_IMPORTED_MODULE_6__["g"])(option.cssClass) }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-label", null, option.text), Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-radio", { value: option.value, disabled: option.disabled })); })))));
    };
    return SelectPopover;
}());
SelectPopover.style = selectPopoverCss;



/***/ })

}]);