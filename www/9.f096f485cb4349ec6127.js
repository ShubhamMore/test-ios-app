(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js ***!
  \****************************************************************************/
/*! exports provided: AngularEditorComponent, AngularEditorModule, AngularEditorService, AngularEditorToolbarComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorComponent", function() { return AngularEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorModule", function() { return AngularEditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorService", function() { return AngularEditorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorToolbarComponent", function() { return AngularEditorToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AeSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function UploadResponse() { }
if (false) {}
var AngularEditorService = /** @class */ /*@__PURE__*/ (function () {
    function AngularEditorService(http, doc) {
        var _this = this;
        this.http = http;
        this.doc = doc;
        /**
         * save selection when the editor is focussed out
         */
        this.saveSelection = ( /**
         * @return {?}
         */function () {
            if (_this.doc.getSelection) {
                /** @type {?} */
                var sel = _this.doc.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    _this.savedSelection = sel.getRangeAt(0);
                    _this.selectedText = sel.toString();
                }
            }
            else if (_this.doc.getSelection && _this.doc.createRange) {
                _this.savedSelection = document.createRange();
            }
            else {
                _this.savedSelection = null;
            }
        });
    }
    /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param command string from triggerCommand
     */
    /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    AngularEditorService.prototype.executeCommand = /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param {?} command string from triggerCommand
     * @return {?}
     */
        function (command) {
            /** @type {?} */
            var commands = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre'];
            if (commands.includes(command)) {
                this.doc.execCommand('formatBlock', false, command);
                return;
            }
            this.doc.execCommand(command, false, null);
        };
    /**
     * Create URL link
     * @param url string from UI prompt
     */
    /**
     * Create URL link
     * @param {?} url string from UI prompt
     * @return {?}
     */
    AngularEditorService.prototype.createLink = /**
     * Create URL link
     * @param {?} url string from UI prompt
     * @return {?}
     */
        function (url) {
            if (!url.includes('http')) {
                this.doc.execCommand('createlink', false, url);
            }
            else {
                /** @type {?} */
                var newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + '</a>';
                this.insertHtml(newUrl);
            }
        };
    /**
     * insert color either font or background
     *
     * @param color color to be inserted
     * @param where where the color has to be inserted either text/background
     */
    /**
     * insert color either font or background
     *
     * @param {?} color color to be inserted
     * @param {?} where where the color has to be inserted either text/background
     * @return {?}
     */
    AngularEditorService.prototype.insertColor = /**
     * insert color either font or background
     *
     * @param {?} color color to be inserted
     * @param {?} where where the color has to be inserted either text/background
     * @return {?}
     */
        function (color, where) {
            /** @type {?} */
            var restored = this.restoreSelection();
            if (restored) {
                if (where === 'textColor') {
                    this.doc.execCommand('foreColor', false, color);
                }
                else {
                    this.doc.execCommand('hiliteColor', false, color);
                }
            }
        };
    /**
     * Set font name
     * @param fontName string
     */
    /**
     * Set font name
     * @param {?} fontName string
     * @return {?}
     */
    AngularEditorService.prototype.setFontName = /**
     * Set font name
     * @param {?} fontName string
     * @return {?}
     */
        function (fontName) {
            this.doc.execCommand('fontName', false, fontName);
        };
    /**
     * Set font size
     * @param fontSize string
     */
    /**
     * Set font size
     * @param {?} fontSize string
     * @return {?}
     */
    AngularEditorService.prototype.setFontSize = /**
     * Set font size
     * @param {?} fontSize string
     * @return {?}
     */
        function (fontSize) {
            this.doc.execCommand('fontSize', false, fontSize);
        };
    /**
     * Create raw HTML
     * @param html HTML string
     */
    /**
     * Create raw HTML
     * @param {?} html HTML string
     * @return {?}
     */
    AngularEditorService.prototype.insertHtml = /**
     * Create raw HTML
     * @param {?} html HTML string
     * @return {?}
     */
        function (html) {
            /** @type {?} */
            var isHTMLInserted = this.doc.execCommand('insertHTML', false, html);
            if (!isHTMLInserted) {
                throw new Error('Unable to perform the operation');
            }
        };
    /**
     * restore selection when the editor is focused in
     *
     * saved selection when the editor is focused out
     */
    /**
     * restore selection when the editor is focused in
     *
     * saved selection when the editor is focused out
     * @return {?}
     */
    AngularEditorService.prototype.restoreSelection = /**
     * restore selection when the editor is focused in
     *
     * saved selection when the editor is focused out
     * @return {?}
     */
        function () {
            if (this.savedSelection) {
                if (this.doc.getSelection) {
                    /** @type {?} */
                    var sel = this.doc.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(this.savedSelection);
                    return true;
                }
                else if (this.doc.getSelection /*&& this.savedSelection.select*/) {
                    // this.savedSelection.select();
                    return true;
                }
            }
            else {
                return false;
            }
        };
    /**
     * setTimeout used for execute 'saveSelection' method in next event loop iteration
     */
    /**
     * setTimeout used for execute 'saveSelection' method in next event loop iteration
     * @param {?} callbackFn
     * @param {?=} timeout
     * @return {?}
     */
    AngularEditorService.prototype.executeInNextQueueIteration = /**
     * setTimeout used for execute 'saveSelection' method in next event loop iteration
     * @param {?} callbackFn
     * @param {?=} timeout
     * @return {?}
     */
        function (callbackFn, timeout) {
            if (timeout === void 0) {
                timeout = 1e2;
            }
            setTimeout(callbackFn, timeout);
        };
    /** check any selection is made or not */
    /**
     * check any selection is made or not
     * @private
     * @return {?}
     */
    AngularEditorService.prototype.checkSelection = /**
     * check any selection is made or not
     * @private
     * @return {?}
     */
        function () {
            /** @type {?} */
            var selectedText = this.savedSelection.toString();
            if (selectedText.length === 0) {
                throw new Error('No Selection Made');
            }
            return true;
        };
    /**
     * Upload file to uploadUrl
     * @param file The file
     */
    /**
     * Upload file to uploadUrl
     * @param {?} file The file
     * @return {?}
     */
    AngularEditorService.prototype.uploadImage = /**
     * Upload file to uploadUrl
     * @param {?} file The file
     * @return {?}
     */
        function (file) {
            /** @type {?} */
            var uploadData = new FormData();
            uploadData.append('file', file, file.name);
            return this.http.post(this.uploadUrl, uploadData, {
                reportProgress: true,
                observe: 'events',
                withCredentials: this.uploadWithCredentials,
            });
        };
    /**
     * Insert image with Url
     * @param imageUrl The imageUrl.
     */
    /**
     * Insert image with Url
     * @param {?} imageUrl The imageUrl.
     * @return {?}
     */
    AngularEditorService.prototype.insertImage = /**
     * Insert image with Url
     * @param {?} imageUrl The imageUrl.
     * @return {?}
     */
        function (imageUrl) {
            this.doc.execCommand('insertImage', false, imageUrl);
        };
    /**
     * @param {?} separator
     * @return {?}
     */
    AngularEditorService.prototype.setDefaultParagraphSeparator = /**
     * @param {?} separator
     * @return {?}
     */
        function (separator) {
            this.doc.execCommand('defaultParagraphSeparator', false, separator);
        };
    /**
     * @param {?} customClass
     * @return {?}
     */
    AngularEditorService.prototype.createCustomClass = /**
     * @param {?} customClass
     * @return {?}
     */
        function (customClass) {
            /** @type {?} */
            var newTag = this.selectedText;
            if (customClass) {
                /** @type {?} */
                var tagName = customClass.tag ? customClass.tag : 'span';
                newTag = '<' + tagName + ' class="' + customClass.class + '">' + this.selectedText + '</' + tagName + '>';
            }
            this.insertHtml(newTag);
        };
    /**
     * @param {?} videoUrl
     * @return {?}
     */
    AngularEditorService.prototype.insertVideo = /**
     * @param {?} videoUrl
     * @return {?}
     */
        function (videoUrl) {
            if (videoUrl.match('www.youtube.com')) {
                this.insertYouTubeVideoTag(videoUrl);
            }
            if (videoUrl.match('vimeo.com')) {
                this.insertVimeoVideoTag(videoUrl);
            }
        };
    /**
     * @private
     * @param {?} videoUrl
     * @return {?}
     */
    AngularEditorService.prototype.insertYouTubeVideoTag = /**
     * @private
     * @param {?} videoUrl
     * @return {?}
     */
        function (videoUrl) {
            /** @type {?} */
            var id = videoUrl.split('v=')[1];
            /** @type {?} */
            var imageUrl = "https://img.youtube.com/vi/" + id + "/0.jpg";
            /** @type {?} */
            var thumbnail = "\n      <div style='position: relative'>\n        <img style='position: absolute; left:200px; top:140px'\n             src=\"https://img.icons8.com/color/96/000000/youtube-play.png\"/>\n        <a href='" + videoUrl + "' target='_blank'>\n          <img src=\"" + imageUrl + "\" alt=\"click to watch\"/>\n        </a>\n      </div>";
            this.insertHtml(thumbnail);
        };
    /**
     * @private
     * @param {?} videoUrl
     * @return {?}
     */
    AngularEditorService.prototype.insertVimeoVideoTag = /**
     * @private
     * @param {?} videoUrl
     * @return {?}
     */
        function (videoUrl) {
            var _this = this;
            /** @type {?} */
            var sub = this.http.get("https://vimeo.com/api/oembed.json?url=" + videoUrl).subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                /** @type {?} */
                var imageUrl = data.thumbnail_url_with_play_button;
                /** @type {?} */
                var thumbnail = "<div>\n        <a href='" + videoUrl + "' target='_blank'>\n          <img src=\"" + imageUrl + "\" alt=\"" + data.title + "\"/>\n        </a>\n      </div>";
                _this.insertHtml(thumbnail);
                sub.unsubscribe();
            }));
        };
    /**
     * @param {?} node
     * @return {?}
     */
    AngularEditorService.prototype.nextNode = /**
     * @param {?} node
     * @return {?}
     */
        function (node) {
            if (node.hasChildNodes()) {
                return node.firstChild;
            }
            else {
                while (node && !node.nextSibling) {
                    node = node.parentNode;
                }
                if (!node) {
                    return null;
                }
                return node.nextSibling;
            }
        };
    /**
     * @param {?} range
     * @param {?} includePartiallySelectedContainers
     * @return {?}
     */
    AngularEditorService.prototype.getRangeSelectedNodes = /**
     * @param {?} range
     * @param {?} includePartiallySelectedContainers
     * @return {?}
     */
        function (range, includePartiallySelectedContainers) {
            /** @type {?} */
            var node = range.startContainer;
            /** @type {?} */
            var endNode = range.endContainer;
            /** @type {?} */
            var rangeNodes = [];
            // Special case for a range that is contained within a single node
            if (node === endNode) {
                rangeNodes = [node];
            }
            else {
                // Iterate nodes until we hit the end container
                while (node && node !== endNode) {
                    rangeNodes.push(node = this.nextNode(node));
                }
                // Add partially selected nodes at the start of the range
                node = range.startContainer;
                while (node && node !== range.commonAncestorContainer) {
                    rangeNodes.unshift(node);
                    node = node.parentNode;
                }
            }
            // Add ancestors of the range container, if required
            if (includePartiallySelectedContainers) {
                node = range.commonAncestorContainer;
                while (node) {
                    rangeNodes.push(node);
                    node = node.parentNode;
                }
            }
            return rangeNodes;
        };
    /**
     * @return {?}
     */
    AngularEditorService.prototype.getSelectedNodes = /**
     * @return {?}
     */
        function () {
            /** @type {?} */
            var nodes = [];
            if (this.doc.getSelection) {
                /** @type {?} */
                var sel = this.doc.getSelection();
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
                }
            }
            return nodes;
        };
    /**
     * @param {?} el
     * @return {?}
     */
    AngularEditorService.prototype.replaceWithOwnChildren = /**
     * @param {?} el
     * @return {?}
     */
        function (el) {
            /** @type {?} */
            var parent = el.parentNode;
            while (el.hasChildNodes()) {
                parent.insertBefore(el.firstChild, el);
            }
            parent.removeChild(el);
        };
    /**
     * @param {?} tagNames
     * @return {?}
     */
    AngularEditorService.prototype.removeSelectedElements = /**
     * @param {?} tagNames
     * @return {?}
     */
        function (tagNames) {
            var _this = this;
            /** @type {?} */
            var tagNamesArray = tagNames.toLowerCase().split(',');
            this.getSelectedNodes().forEach(( /**
             * @param {?} node
             * @return {?}
             */function (node) {
                if (node.nodeType === 1 &&
                    tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
                    // Remove the node and replace it with its children
                    _this.replaceWithOwnChildren(node);
                }
            }));
        };
    /** @nocollapse */ AngularEditorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AngularEditorService_Factory() { return new AngularEditorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: AngularEditorService, providedIn: "root" });
    return AngularEditorService;
}());
if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CustomClass() { }
if (false) {}
/**
 * @record
 */
function Font() { }
if (false) {}
/**
 * @record
 */
function AngularEditorConfig() { }
if (false) {}
/** @type {?} */
var angularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    outline: true,
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularEditorToolbarComponent = /** @class */ /*@__PURE__*/ (function () {
    function AngularEditorToolbarComponent(r, editorService, doc) {
        this.r = r;
        this.editorService = editorService;
        this.doc = doc;
        this.htmlMode = false;
        this.linkSelected = false;
        this.block = 'default';
        this.fontName = 'Times New Roman';
        this.fontSize = '3';
        this.headings = [
            {
                label: 'Heading 1',
                value: 'h1',
            },
            {
                label: 'Heading 2',
                value: 'h2',
            },
            {
                label: 'Heading 3',
                value: 'h3',
            },
            {
                label: 'Heading 4',
                value: 'h4',
            },
            {
                label: 'Heading 5',
                value: 'h5',
            },
            {
                label: 'Heading 6',
                value: 'h6',
            },
            {
                label: 'Heading 7',
                value: 'h7',
            },
            {
                label: 'Paragraph',
                value: 'p',
            },
            {
                label: 'Predefined',
                value: 'pre'
            },
            {
                label: 'Standard',
                value: 'div'
            },
            {
                label: 'default',
                value: 'default'
            }
        ];
        this.fontSizes = [
            {
                label: '1',
                value: '1',
            },
            {
                label: '2',
                value: '2',
            },
            {
                label: '3',
                value: '3',
            },
            {
                label: '4',
                value: '4',
            },
            {
                label: '5',
                value: '5',
            },
            {
                label: '6',
                value: '6',
            },
            {
                label: '7',
                value: '7',
            }
        ];
        this.customClassId = '-1';
        this.customClassList = [{ label: '', value: '' }];
        // uploadUrl: string;
        this.tagMap = {
            BLOCKQUOTE: 'indent',
            A: 'link'
        };
        this.select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];
        this.buttons = ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter',
            'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList', 'link'];
        this.fonts = [{ label: '', value: '' }];
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(AngularEditorToolbarComponent.prototype, "customClasses", {
        set: /**
         * @param {?} classes
         * @return {?}
         */ function (classes) {
            if (classes) {
                this._customClasses = classes;
                this.customClassList = this._customClasses.map(( /**
                 * @param {?} x
                 * @param {?} i
                 * @return {?}
                 */function (x, i) { return ({ label: x.name, value: i.toString() }); }));
                this.customClassList.unshift({ label: 'Clear Class', value: '-1' });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularEditorToolbarComponent.prototype, "defaultFontName", {
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            if (value) {
                this.fontName = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularEditorToolbarComponent.prototype, "defaultFontSize", {
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            if (value) {
                this.fontSize = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularEditorToolbarComponent.prototype, "isLinkButtonDisabled", {
        get: /**
         * @return {?}
         */ function () {
            return this.htmlMode || !Boolean(this.editorService.selectedText);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Trigger command from editor header buttons
     * @param command string from toolbar buttons
     */
    /**
     * Trigger command from editor header buttons
     * @param {?} command string from toolbar buttons
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerCommand = /**
     * Trigger command from editor header buttons
     * @param {?} command string from toolbar buttons
     * @return {?}
     */
        function (command) {
            this.execute.emit(command);
        };
    /**
     * highlight editor buttons when cursor moved or positioning
     */
    /**
     * highlight editor buttons when cursor moved or positioning
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerButtons = /**
     * highlight editor buttons when cursor moved or positioning
     * @return {?}
     */
        function () {
            var _this = this;
            if (!this.showToolbar) {
                return;
            }
            this.buttons.forEach(( /**
             * @param {?} e
             * @return {?}
             */function (e) {
                /** @type {?} */
                var result = _this.doc.queryCommandState(e);
                /** @type {?} */
                var elementById = _this.doc.getElementById(e + '-' + _this.id);
                if (result) {
                    _this.r.addClass(elementById, 'active');
                }
                else {
                    _this.r.removeClass(elementById, 'active');
                }
            }));
        };
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     */
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     * @param {?} nodes
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerBlocks = /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     * @param {?} nodes
     * @return {?}
     */
        function (nodes) {
            var _this = this;
            if (!this.showToolbar) {
                return;
            }
            this.linkSelected = nodes.findIndex(( /**
             * @param {?} x
             * @return {?}
             */function (x) { return x.nodeName === 'A'; })) > -1;
            /** @type {?} */
            var found = false;
            this.select.forEach(( /**
             * @param {?} y
             * @return {?}
             */function (y) {
                /** @type {?} */
                var node = nodes.find(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.nodeName === y; }));
                if (node !== undefined && y === node.nodeName) {
                    if (found === false) {
                        _this.block = node.nodeName.toLowerCase();
                        found = true;
                    }
                }
                else if (found === false) {
                    _this.block = 'default';
                }
            }));
            found = false;
            if (this._customClasses) {
                this._customClasses.forEach(( /**
                 * @param {?} y
                 * @param {?} index
                 * @return {?}
                 */function (y, index) {
                    /** @type {?} */
                    var node = nodes.find(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) {
                        if (x instanceof Element) {
                            return x.className === y.class;
                        }
                    }));
                    if (node !== undefined) {
                        if (found === false) {
                            _this.customClassId = index.toString();
                            found = true;
                        }
                    }
                    else if (found === false) {
                        _this.customClassId = '-1';
                    }
                }));
            }
            Object.keys(this.tagMap).map(( /**
             * @param {?} e
             * @return {?}
             */function (e) {
                /** @type {?} */
                var elementById = _this.doc.getElementById(_this.tagMap[e] + '-' + _this.id);
                /** @type {?} */
                var node = nodes.find(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.nodeName === e; }));
                if (node !== undefined && e === node.nodeName) {
                    _this.r.addClass(elementById, 'active');
                }
                else {
                    _this.r.removeClass(elementById, 'active');
                }
            }));
            this.foreColour = this.doc.queryCommandValue('ForeColor');
            this.fontSize = this.doc.queryCommandValue('FontSize');
            this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
            this.backColor = this.doc.queryCommandValue('backColor');
        };
    /**
     * insert URL link
     */
    /**
     * insert URL link
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertUrl = /**
     * insert URL link
     * @return {?}
     */
        function () {
            /** @type {?} */
            var url = 'https:\/\/';
            /** @type {?} */
            var selection = this.editorService.savedSelection;
            if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
                /** @type {?} */
                var parent_1 = ( /** @type {?} */(selection.commonAncestorContainer.parentElement));
                if (parent_1.href !== '') {
                    url = parent_1.href;
                }
            }
            url = prompt('Insert URL link', url);
            if (url && url !== '' && url !== 'https://') {
                this.editorService.createLink(url);
            }
        };
    /**
     * insert Video link
     */
    /**
     * insert Video link
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertVideo = /**
     * insert Video link
     * @return {?}
     */
        function () {
            this.execute.emit('');
            /** @type {?} */
            var url = prompt('Insert Video link', "https://");
            if (url && url !== '' && url !== "https://") {
                this.editorService.insertVideo(url);
            }
        };
    /** insert color */
    /**
     * insert color
     * @param {?} color
     * @param {?} where
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertColor = /**
     * insert color
     * @param {?} color
     * @param {?} where
     * @return {?}
     */
        function (color, where) {
            this.editorService.insertColor(color, where);
            this.execute.emit('');
        };
    /**
     * set font Name/family
     * @param foreColor string
     */
    /**
     * set font Name/family
     * @param {?} foreColor string
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setFontName = /**
     * set font Name/family
     * @param {?} foreColor string
     * @return {?}
     */
        function (foreColor) {
            this.editorService.setFontName(foreColor);
            this.execute.emit('');
        };
    /**
     * set font Size
     * @param fontSize string
     */
    /**
     * set font Size
     * @param {?} fontSize string
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setFontSize = /**
     * set font Size
     * @param {?} fontSize string
     * @return {?}
     */
        function (fontSize) {
            this.editorService.setFontSize(fontSize);
            this.execute.emit('');
        };
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param m boolean
     */
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param {?} m boolean
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setEditorMode = /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param {?} m boolean
     * @return {?}
     */
        function (m) {
            /** @type {?} */
            var toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);
            if (m) {
                this.r.addClass(toggleEditorModeButton, 'active');
            }
            else {
                this.r.removeClass(toggleEditorModeButton, 'active');
            }
            this.htmlMode = m;
        };
    /**
     * Upload image when file is selected
     */
    /**
     * Upload image when file is selected
     * @param {?} event
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.onFileChanged = /**
     * Upload image when file is selected
     * @param {?} event
     * @return {?}
     */
        function (event) {
            var _this = this;
            /** @type {?} */
            var file = event.target.files[0];
            if (file.type.includes('image/')) {
                if (this.uploadUrl) {
                    this.editorService.uploadImage(file).subscribe(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) {
                        if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                            _this.editorService.insertImage(e.body.imageUrl);
                            event.srcElement.value = null;
                        }
                    }));
                }
                else {
                    /** @type {?} */
                    var reader = new FileReader();
                    reader.onload = ( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) {
                        /** @type {?} */
                        var fr = ( /** @type {?} */(e.currentTarget));
                        _this.editorService.insertImage(fr.result.toString());
                    });
                    reader.readAsDataURL(file);
                }
            }
        };
    /**
     * Set custom class
     */
    /**
     * Set custom class
     * @param {?} classId
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setCustomClass = /**
     * Set custom class
     * @param {?} classId
     * @return {?}
     */
        function (classId) {
            if (classId === '-1') {
                this.execute.emit('clear');
            }
            else {
                this.editorService.createCustomClass(this._customClasses[+classId]);
            }
        };
    /**
     * @param {?} name
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.isButtonHidden = /**
     * @param {?} name
     * @return {?}
     */
        function (name) {
            var e_1, _a;
            if (!name) {
                return false;
            }
            if (!(this.hiddenButtons instanceof Array)) {
                return false;
            }
            /** @type {?} */
            var result;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(this.hiddenButtons), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var arr = _c.value;
                    if (arr instanceof Array) {
                        result = arr.find(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) { return item === name; }));
                    }
                    if (result) {
                        break;
                    }
                }
            }
            catch (e_1_1) {
                e_1 = { error: e_1_1 };
            }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return))
                        _a.call(_b);
                }
                finally {
                    if (e_1)
                        throw e_1.error;
                }
            }
            return result !== undefined;
        };
    return AngularEditorToolbarComponent;
}());
if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularEditorComponent = /** @class */ /*@__PURE__*/ (function () {
    function AngularEditorComponent(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
        this.r = r;
        this.editorService = editorService;
        this.doc = doc;
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.autoFocus = autoFocus;
        this.modeVisual = true;
        this.showPlaceholder = false;
        this.disabled = false;
        this.focused = false;
        this.touched = false;
        this.changed = false;
        this.id = '';
        this.config = angularEditorConfig;
        this.placeholder = '';
        this.viewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emits `blur` event when focused out from the textarea
         */
        // tslint:disable-next-line:no-output-native no-output-rename
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emits `focus` event when focused in to the textarea
         */
        // tslint:disable-next-line:no-output-rename no-output-native
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabindex = -1;
        /** @type {?} */
        var parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    }
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.onFocus = /**
     * @return {?}
     */
        function () {
            this.focus();
        };
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : angularEditorConfig.toolbarPosition;
        };
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
        function () {
            if (isDefined(this.autoFocus)) {
                this.focus();
            }
        };
    /**
     * Executed command from editor header buttons
     * @param command string from triggerCommand
     */
    /**
     * Executed command from editor header buttons
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    AngularEditorComponent.prototype.executeCommand = /**
     * Executed command from editor header buttons
     * @param {?} command string from triggerCommand
     * @return {?}
     */
        function (command) {
            this.focus();
            if (command === 'toggleEditorMode') {
                this.toggleEditorMode(this.modeVisual);
            }
            else if (command !== '') {
                if (command === 'clear') {
                    this.editorService.removeSelectedElements(this.getCustomTags());
                    this.onContentChange(this.textArea.nativeElement);
                }
                else if (command === 'default') {
                    this.editorService.removeSelectedElements('h1,h2,h3,h4,h5,h6,p,pre');
                    this.onContentChange(this.textArea.nativeElement);
                }
                else {
                    this.editorService.executeCommand(command);
                }
                this.exec();
            }
        };
    /**
     * focus event
     */
    /**
     * focus event
     * @param {?} event
     * @return {?}
     */
    AngularEditorComponent.prototype.onTextAreaFocus = /**
     * focus event
     * @param {?} event
     * @return {?}
     */
        function (event) {
            var _this = this;
            if (this.focused) {
                event.stopPropagation();
                return;
            }
            this.focused = true;
            this.focusEvent.emit(event);
            if (!this.touched || !this.changed) {
                this.editorService.executeInNextQueueIteration(( /**
                 * @return {?}
                 */function () {
                    _this.configure();
                    _this.touched = true;
                }));
            }
        };
    /**
     * @description fires when cursor leaves textarea
     */
    /**
     * \@description fires when cursor leaves textarea
     * @param {?} event
     * @return {?}
     */
    AngularEditorComponent.prototype.onTextAreaMouseOut = /**
     * \@description fires when cursor leaves textarea
     * @param {?} event
     * @return {?}
     */
        function (event) {
            this.editorService.saveSelection();
        };
    /**
     * blur event
     */
    /**
     * blur event
     * @param {?} event
     * @return {?}
     */
    AngularEditorComponent.prototype.onTextAreaBlur = /**
     * blur event
     * @param {?} event
     * @return {?}
     */
        function (event) {
            /**
             * save selection if focussed out
             */
            this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
            if (typeof this.onTouched === 'function') {
                this.onTouched();
            }
            if (event.relatedTarget !== null) {
                /** @type {?} */
                var parent_1 = (( /** @type {?} */(event.relatedTarget))).parentElement;
                if (!parent_1.classList.contains('angular-editor-toolbar-set') && !parent_1.classList.contains('ae-picker')) {
                    this.blurEvent.emit(event);
                    this.focused = false;
                }
            }
        };
    /**
     *  focus the text area when the editor is focused
     */
    /**
     *  focus the text area when the editor is focused
     * @return {?}
     */
    AngularEditorComponent.prototype.focus = /**
     *  focus the text area when the editor is focused
     * @return {?}
     */
        function () {
            if (this.modeVisual) {
                this.textArea.nativeElement.focus();
            }
            else {
                /** @type {?} */
                var sourceText = this.doc.getElementById('sourceText' + this.id);
                sourceText.focus();
                this.focused = true;
            }
        };
    /**
     * Executed from the contenteditable section while the input property changes
     * @param element html element from contenteditable
     */
    /**
     * Executed from the contenteditable section while the input property changes
     * @param {?} element html element from contenteditable
     * @return {?}
     */
    AngularEditorComponent.prototype.onContentChange = /**
     * Executed from the contenteditable section while the input property changes
     * @param {?} element html element from contenteditable
     * @return {?}
     */
        function (element) {
            /** @type {?} */
            var html = '';
            if (this.modeVisual) {
                html = element.innerHTML;
            }
            else {
                html = element.innerText;
            }
            if ((!html || html === '<br>')) {
                html = '';
            }
            if (typeof this.onChange === 'function') {
                this.onChange(this.config.sanitize || this.config.sanitize === undefined ?
                    this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, html) : html);
                if ((!html) !== this.showPlaceholder) {
                    this.togglePlaceholder(this.showPlaceholder);
                }
            }
            this.changed = true;
        };
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param fn a function
     */
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    AngularEditorComponent.prototype.registerOnChange = /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param {?} fn a function
     * @return {?}
     */
        function (fn) {
            this.onChange = ( /**
             * @param {?} e
             * @return {?}
             */function (e) { return (e === '<br>' ? fn('') : fn(e)); });
        };
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param fn a function
     */
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    AngularEditorComponent.prototype.registerOnTouched = /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param {?} fn a function
     * @return {?}
     */
        function (fn) {
            this.onTouched = fn;
        };
    /**
     * Write a new value to the element.
     *
     * @param value value to be executed when there is a change in contenteditable
     */
    /**
     * Write a new value to the element.
     *
     * @param {?} value value to be executed when there is a change in contenteditable
     * @return {?}
     */
    AngularEditorComponent.prototype.writeValue = /**
     * Write a new value to the element.
     *
     * @param {?} value value to be executed when there is a change in contenteditable
     * @return {?}
     */
        function (value) {
            if ((!value || value === '<br>' || value === '') !== this.showPlaceholder) {
                this.togglePlaceholder(this.showPlaceholder);
            }
            if (value === undefined || value === '' || value === '<br>') {
                value = null;
            }
            this.refreshView(value);
        };
    /**
     * refresh view/HTML of the editor
     *
     * @param value html string from the editor
     */
    /**
     * refresh view/HTML of the editor
     *
     * @param {?} value html string from the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.refreshView = /**
     * refresh view/HTML of the editor
     *
     * @param {?} value html string from the editor
     * @return {?}
     */
        function (value) {
            /** @type {?} */
            var normalizedValue = value === null ? '' : value;
            this.r.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
            return;
        };
    /**
     * toggles placeholder based on input string
     *
     * @param value A HTML string from the editor
     */
    /**
     * toggles placeholder based on input string
     *
     * @param {?} value A HTML string from the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.togglePlaceholder = /**
     * toggles placeholder based on input string
     *
     * @param {?} value A HTML string from the editor
     * @return {?}
     */
        function (value) {
            if (!value) {
                this.r.addClass(this.editorWrapper.nativeElement, 'show-placeholder');
                this.showPlaceholder = true;
            }
            else {
                this.r.removeClass(this.editorWrapper.nativeElement, 'show-placeholder');
                this.showPlaceholder = false;
            }
        };
    /**
     * Implements disabled state for this element
     *
     * @param isDisabled Disabled flag
     */
    /**
     * Implements disabled state for this element
     *
     * @param {?} isDisabled Disabled flag
     * @return {?}
     */
    AngularEditorComponent.prototype.setDisabledState = /**
     * Implements disabled state for this element
     *
     * @param {?} isDisabled Disabled flag
     * @return {?}
     */
        function (isDisabled) {
            /** @type {?} */
            var div = this.textArea.nativeElement;
            /** @type {?} */
            var action = isDisabled ? 'addClass' : 'removeClass';
            this.r[action](div, 'disabled');
            this.disabled = isDisabled;
        };
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param bToSource A boolean value from the editor
     */
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param {?} bToSource A boolean value from the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.toggleEditorMode = /**
     * toggles editor mode based on bToSource bool
     *
     * @param {?} bToSource A boolean value from the editor
     * @return {?}
     */
        function (bToSource) {
            var _this = this;
            /** @type {?} */
            var oContent;
            /** @type {?} */
            var editableElement = this.textArea.nativeElement;
            if (bToSource) {
                oContent = this.r.createText(editableElement.innerHTML);
                this.r.setProperty(editableElement, 'innerHTML', '');
                this.r.setProperty(editableElement, 'contentEditable', false);
                /** @type {?} */
                var oPre = this.r.createElement('pre');
                this.r.setStyle(oPre, 'margin', '0');
                this.r.setStyle(oPre, 'outline', 'none');
                /** @type {?} */
                var oCode = this.r.createElement('code');
                this.r.setProperty(oCode, 'id', 'sourceText' + this.id);
                this.r.setStyle(oCode, 'display', 'block');
                this.r.setStyle(oCode, 'white-space', 'pre-wrap');
                this.r.setStyle(oCode, 'word-break', 'keep-all');
                this.r.setStyle(oCode, 'outline', 'none');
                this.r.setStyle(oCode, 'margin', '0');
                this.r.setStyle(oCode, 'background-color', '#fff5b9');
                this.r.setProperty(oCode, 'contentEditable', true);
                this.r.appendChild(oCode, oContent);
                this.focusInstance = this.r.listen(oCode, 'focus', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onTextAreaFocus(event); }));
                this.blurInstance = this.r.listen(oCode, 'blur', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onTextAreaBlur(event); }));
                this.r.appendChild(oPre, oCode);
                this.r.appendChild(editableElement, oPre);
                // ToDo move to service
                this.doc.execCommand('defaultParagraphSeparator', false, 'div');
                this.modeVisual = false;
                this.viewMode.emit(false);
                oCode.focus();
            }
            else {
                if (this.doc.querySelectorAll) {
                    this.r.setProperty(editableElement, 'innerHTML', editableElement.innerText);
                }
                else {
                    oContent = this.doc.createRange();
                    oContent.selectNodeContents(editableElement.firstChild);
                    this.r.setProperty(editableElement, 'innerHTML', oContent.toString());
                }
                this.r.setProperty(editableElement, 'contentEditable', true);
                this.modeVisual = true;
                this.viewMode.emit(true);
                this.onContentChange(editableElement);
                editableElement.focus();
            }
            this.editorToolbar.setEditorMode(!this.modeVisual);
        };
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     */
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.exec = /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     * @return {?}
     */
        function () {
            this.editorToolbar.triggerButtons();
            /** @type {?} */
            var userSelection;
            if (this.doc.getSelection) {
                userSelection = this.doc.getSelection();
                this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
            }
            /** @type {?} */
            var a = userSelection.focusNode;
            /** @type {?} */
            var els = [];
            while (a && a.id !== 'editor') {
                els.unshift(a);
                a = a.parentNode;
            }
            this.editorToolbar.triggerBlocks(els);
        };
    /**
     * @private
     * @return {?}
     */
    AngularEditorComponent.prototype.configure = /**
     * @private
     * @return {?}
     */
        function () {
            this.editorService.uploadUrl = this.config.uploadUrl;
            this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;
            if (this.config.defaultParagraphSeparator) {
                this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
            }
            if (this.config.defaultFontName) {
                this.editorService.setFontName(this.config.defaultFontName);
            }
            if (this.config.defaultFontSize) {
                this.editorService.setFontSize(this.config.defaultFontSize);
            }
        };
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.getFonts = /**
     * @return {?}
     */
        function () {
            /** @type {?} */
            var fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
            return fonts.map(( /**
             * @param {?} x
             * @return {?}
             */function (x) {
                return { label: x.name, value: x.name };
            }));
        };
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.getCustomTags = /**
     * @return {?}
     */
        function () {
            /** @type {?} */
            var tags = ['span'];
            this.config.customClasses.forEach(( /**
             * @param {?} x
             * @return {?}
             */function (x) {
                if (x.tag !== undefined) {
                    if (!tags.includes(x.tag)) {
                        tags.push(x.tag);
                    }
                }
            }));
            return tags.join(',');
        };
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            if (this.blurInstance) {
                this.blurInstance();
            }
            if (this.focusInstance) {
                this.focusInstance();
            }
        };
    /**
     * @param {?} html
     * @return {?}
     */
    AngularEditorComponent.prototype.filterStyles = /**
     * @param {?} html
     * @return {?}
     */
        function (html) {
            html = html.replace('position: fixed;', '');
            return html;
        };
    return AngularEditorComponent;
}());
if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SelectOption() { }
if (false) {}
var AeSelectComponent = /** @class */ /*@__PURE__*/ (function () {
    function AeSelectComponent(elRef, r) {
        this.elRef = elRef;
        this.r = r;
        this.options = [];
        this.disabled = false;
        this.optionId = 0;
        this.opened = false;
        this.hidden = 'inline-block';
        // tslint:disable-next-line:no-output-native no-output-rename
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = ( /**
         * @return {?}
         */function () {
        });
        this.onTouched = ( /**
         * @return {?}
         */function () {
        });
    }
    Object.defineProperty(AeSelectComponent.prototype, "label", {
        get: /**
         * @return {?}
         */ function () {
            return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AeSelectComponent.prototype, "value", {
        get: /**
         * @return {?}
         */ function () {
            return this.selectedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
        function () {
            this.selectedOption = this.options[0];
            if (isDefined(this.isHidden) && this.isHidden) {
                this.hide();
            }
        };
    /**
     * @return {?}
     */
    AeSelectComponent.prototype.hide = /**
     * @return {?}
     */
        function () {
            this.hidden = 'none';
        };
    /**
     * @param {?} option
     * @param {?} event
     * @return {?}
     */
    AeSelectComponent.prototype.optionSelect = /**
     * @param {?} option
     * @param {?} event
     * @return {?}
     */
        function (option, event) {
            event.stopPropagation();
            this.setValue(option.value);
            this.onChange(this.selectedOption.value);
            this.changeEvent.emit(this.selectedOption.value);
            this.onTouched();
            this.opened = false;
        };
    /**
     * @param {?} event
     * @return {?}
     */
    AeSelectComponent.prototype.toggleOpen = /**
     * @param {?} event
     * @return {?}
     */
        function (event) {
            // event.stopPropagation();
            if (this.disabled) {
                return;
            }
            this.opened = !this.opened;
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            if (!this.elRef.nativeElement.contains($event.target)) {
                this.close();
            }
        };
    /**
     * @return {?}
     */
    AeSelectComponent.prototype.close = /**
     * @return {?}
     */
        function () {
            this.opened = false;
        };
    Object.defineProperty(AeSelectComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */ function () {
            return this.opened;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    AeSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
        function (value) {
            if (!value || typeof value !== 'string') {
                return;
            }
            this.setValue(value);
        };
    /**
     * @param {?} value
     * @return {?}
     */
    AeSelectComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
        function (value) {
            /** @type {?} */
            var index = 0;
            /** @type {?} */
            var selectedEl = this.options.find(( /**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */function (el, i) {
                index = i;
                return el.value === value;
            }));
            if (selectedEl) {
                this.selectedOption = selectedEl;
                this.optionId = index;
            }
        };
    /**
     * @param {?} fn
     * @return {?}
     */
    AeSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
        function (fn) {
            this.onChange = fn;
        };
    /**
     * @param {?} fn
     * @return {?}
     */
    AeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
        function (fn) {
            this.onTouched = fn;
        };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    AeSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
        function (isDisabled) {
            this.labelButton.nativeElement.disabled = isDisabled;
            /** @type {?} */
            var div = this.labelButton.nativeElement;
            /** @type {?} */
            var action = isDisabled ? 'addClass' : 'removeClass';
            this.r[action](div, 'disabled');
            this.disabled = isDisabled;
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype.handleKeyDown = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            if (!this.opened) {
                return;
            }
            // console.log($event.key);
            // if (KeyCode[$event.key]) {
            switch ($event.key) {
                case 'ArrowDown':
                    this._handleArrowDown($event);
                    break;
                case 'ArrowUp':
                    this._handleArrowUp($event);
                    break;
                case 'Space':
                    this._handleSpace($event);
                    break;
                case 'Enter':
                    this._handleEnter($event);
                    break;
                case 'Tab':
                    this._handleTab($event);
                    break;
                case 'Escape':
                    this.close();
                    $event.preventDefault();
                    break;
                case 'Backspace':
                    this._handleBackspace();
                    break;
            }
            // } else if ($event.key && $event.key.length === 1) {
            // this._keyPress$.next($event.key.toLocaleLowerCase());
            // }
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleArrowDown = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            if (this.optionId < this.options.length - 1) {
                this.optionId++;
            }
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleArrowUp = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            if (this.optionId >= 1) {
                this.optionId--;
            }
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleSpace = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleEnter = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
            this.optionSelect(this.options[this.optionId], $event);
        };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleTab = /**
     * @param {?} $event
     * @return {?}
     */
        function ($event) {
        };
    /**
     * @return {?}
     */
    AeSelectComponent.prototype._handleBackspace = /**
     * @return {?}
     */
        function () {
        };
    return AeSelectComponent;
}());
if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularEditorModule = /** @class */ /*@__PURE__*/ (function () {
    function AngularEditorModule() {
    }
    return AngularEditorModule;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

//# sourceMappingURL=kolkov-angular-editor.js.map


/***/ }),

/***/ "./node_modules/@kolkov/angular-editor/kolkov-angular-editor.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@kolkov/angular-editor/kolkov-angular-editor.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: AngularEditorModuleNgFactory, RenderType_AngularEditorComponent, View_AngularEditorComponent_0, View_AngularEditorComponent_Host_0, AngularEditorComponentNgFactory, RenderType_AngularEditorToolbarComponent, View_AngularEditorToolbarComponent_0, View_AngularEditorToolbarComponent_Host_0, AngularEditorToolbarComponentNgFactory, RenderType_ɵa, View_ɵa_0, View_ɵa_Host_0, ɵaNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorModuleNgFactory", function() { return AngularEditorModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AngularEditorComponent", function() { return RenderType_AngularEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AngularEditorComponent_0", function() { return View_AngularEditorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AngularEditorComponent_Host_0", function() { return View_AngularEditorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorComponentNgFactory", function() { return AngularEditorComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AngularEditorToolbarComponent", function() { return RenderType_AngularEditorToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AngularEditorToolbarComponent_0", function() { return View_AngularEditorToolbarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AngularEditorToolbarComponent_Host_0", function() { return View_AngularEditorToolbarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorToolbarComponentNgFactory", function() { return AngularEditorToolbarComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵa", function() { return RenderType_ɵa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵa_0", function() { return View_ɵa_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵa_Host_0", function() { return View_ɵa_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵaNgFactory", function() { return ɵaNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */






var AngularEditorModuleNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorModule"], [])]); });

var styles_AngularEditorComponent = ["@charset \"UTF-8\";@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse[_ngcontent-%COMP%]{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical[_ngcontent-%COMP%]{-webkit-transform:scale(1,-1);transform:scale(1,-1)}[_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%]{-webkit-filter:none;filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:\"\uF000\"}.fa-music[_ngcontent-%COMP%]:before{content:\"\uF001\"}.fa-search[_ngcontent-%COMP%]:before{content:\"\uF002\"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:\"\uF003\"}.fa-heart[_ngcontent-%COMP%]:before{content:\"\uF004\"}.fa-star[_ngcontent-%COMP%]:before{content:\"\uF005\"}.fa-star-o[_ngcontent-%COMP%]:before{content:\"\uF006\"}.fa-user[_ngcontent-%COMP%]:before{content:\"\uF007\"}.fa-film[_ngcontent-%COMP%]:before{content:\"\uF008\"}.fa-th-large[_ngcontent-%COMP%]:before{content:\"\uF009\"}.fa-th[_ngcontent-%COMP%]:before{content:\"\uF00A\"}.fa-th-list[_ngcontent-%COMP%]:before{content:\"\uF00B\"}.fa-check[_ngcontent-%COMP%]:before{content:\"\uF00C\"}.fa-close[_ngcontent-%COMP%]:before, .fa-remove[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:\"\uF00D\"}.fa-search-plus[_ngcontent-%COMP%]:before{content:\"\uF00E\"}.fa-search-minus[_ngcontent-%COMP%]:before{content:\"\uF010\"}.fa-power-off[_ngcontent-%COMP%]:before{content:\"\uF011\"}.fa-signal[_ngcontent-%COMP%]:before{content:\"\uF012\"}.fa-cog[_ngcontent-%COMP%]:before, .fa-gear[_ngcontent-%COMP%]:before{content:\"\uF013\"}.fa-trash-o[_ngcontent-%COMP%]:before{content:\"\uF014\"}.fa-home[_ngcontent-%COMP%]:before{content:\"\uF015\"}.fa-file-o[_ngcontent-%COMP%]:before{content:\"\uF016\"}.fa-clock-o[_ngcontent-%COMP%]:before{content:\"\uF017\"}.fa-road[_ngcontent-%COMP%]:before{content:\"\uF018\"}.fa-download[_ngcontent-%COMP%]:before{content:\"\uF019\"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:\"\uF01A\"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:\"\uF01B\"}.fa-inbox[_ngcontent-%COMP%]:before{content:\"\uF01C\"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:\"\uF01D\"}.fa-repeat[_ngcontent-%COMP%]:before, .fa-rotate-right[_ngcontent-%COMP%]:before{content:\"\uF01E\"}.fa-refresh[_ngcontent-%COMP%]:before{content:\"\uF021\"}.fa-list-alt[_ngcontent-%COMP%]:before{content:\"\uF022\"}.fa-lock[_ngcontent-%COMP%]:before{content:\"\uF023\"}.fa-flag[_ngcontent-%COMP%]:before{content:\"\uF024\"}.fa-headphones[_ngcontent-%COMP%]:before{content:\"\uF025\"}.fa-volume-off[_ngcontent-%COMP%]:before{content:\"\uF026\"}.fa-volume-down[_ngcontent-%COMP%]:before{content:\"\uF027\"}.fa-volume-up[_ngcontent-%COMP%]:before{content:\"\uF028\"}.fa-qrcode[_ngcontent-%COMP%]:before{content:\"\uF029\"}.fa-barcode[_ngcontent-%COMP%]:before{content:\"\uF02A\"}.fa-tag[_ngcontent-%COMP%]:before{content:\"\uF02B\"}.fa-tags[_ngcontent-%COMP%]:before{content:\"\uF02C\"}.fa-book[_ngcontent-%COMP%]:before{content:\"\uF02D\"}.fa-bookmark[_ngcontent-%COMP%]:before{content:\"\uF02E\"}.fa-print[_ngcontent-%COMP%]:before{content:\"\uF02F\"}.fa-camera[_ngcontent-%COMP%]:before{content:\"\uF030\"}.fa-font[_ngcontent-%COMP%]:before{content:\"\uF031\"}.fa-bold[_ngcontent-%COMP%]:before{content:\"\uF032\"}.fa-italic[_ngcontent-%COMP%]:before{content:\"\uF033\"}.fa-text-height[_ngcontent-%COMP%]:before{content:\"\uF034\"}.fa-text-width[_ngcontent-%COMP%]:before{content:\"\uF035\"}.fa-align-left[_ngcontent-%COMP%]:before{content:\"\uF036\"}.fa-align-center[_ngcontent-%COMP%]:before{content:\"\uF037\"}.fa-align-right[_ngcontent-%COMP%]:before{content:\"\uF038\"}.fa-align-justify[_ngcontent-%COMP%]:before{content:\"\uF039\"}.fa-list[_ngcontent-%COMP%]:before{content:\"\uF03A\"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:\"\uF03B\"}.fa-indent[_ngcontent-%COMP%]:before{content:\"\uF03C\"}.fa-video-camera[_ngcontent-%COMP%]:before{content:\"\uF03D\"}.fa-image[_ngcontent-%COMP%]:before, .fa-photo[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:\"\uF03E\"}.fa-pencil[_ngcontent-%COMP%]:before{content:\"\uF040\"}.fa-map-marker[_ngcontent-%COMP%]:before{content:\"\uF041\"}.fa-adjust[_ngcontent-%COMP%]:before{content:\"\uF042\"}.fa-tint[_ngcontent-%COMP%]:before{content:\"\uF043\"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:\"\uF044\"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:\"\uF045\"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:\"\uF046\"}.fa-arrows[_ngcontent-%COMP%]:before{content:\"\uF047\"}.fa-step-backward[_ngcontent-%COMP%]:before{content:\"\uF048\"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:\"\uF049\"}.fa-backward[_ngcontent-%COMP%]:before{content:\"\uF04A\"}.fa-play[_ngcontent-%COMP%]:before{content:\"\uF04B\"}.fa-pause[_ngcontent-%COMP%]:before{content:\"\uF04C\"}.fa-stop[_ngcontent-%COMP%]:before{content:\"\uF04D\"}.fa-forward[_ngcontent-%COMP%]:before{content:\"\uF04E\"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:\"\uF050\"}.fa-step-forward[_ngcontent-%COMP%]:before{content:\"\uF051\"}.fa-eject[_ngcontent-%COMP%]:before{content:\"\uF052\"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:\"\uF053\"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:\"\uF054\"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:\"\uF055\"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:\"\uF056\"}.fa-times-circle[_ngcontent-%COMP%]:before{content:\"\uF057\"}.fa-check-circle[_ngcontent-%COMP%]:before{content:\"\uF058\"}.fa-question-circle[_ngcontent-%COMP%]:before{content:\"\uF059\"}.fa-info-circle[_ngcontent-%COMP%]:before{content:\"\uF05A\"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:\"\uF05B\"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05C\"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05D\"}.fa-ban[_ngcontent-%COMP%]:before{content:\"\uF05E\"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF060\"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF061\"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF062\"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF063\"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:\"\uF064\"}.fa-expand[_ngcontent-%COMP%]:before{content:\"\uF065\"}.fa-compress[_ngcontent-%COMP%]:before{content:\"\uF066\"}.fa-plus[_ngcontent-%COMP%]:before{content:\"\uF067\"}.fa-minus[_ngcontent-%COMP%]:before{content:\"\uF068\"}.fa-asterisk[_ngcontent-%COMP%]:before{content:\"\uF069\"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:\"\uF06A\"}.fa-gift[_ngcontent-%COMP%]:before{content:\"\uF06B\"}.fa-leaf[_ngcontent-%COMP%]:before{content:\"\uF06C\"}.fa-fire[_ngcontent-%COMP%]:before{content:\"\uF06D\"}.fa-eye[_ngcontent-%COMP%]:before{content:\"\uF06E\"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:\"\uF070\"}.fa-exclamation-triangle[_ngcontent-%COMP%]:before, .fa-warning[_ngcontent-%COMP%]:before{content:\"\uF071\"}.fa-plane[_ngcontent-%COMP%]:before{content:\"\uF072\"}.fa-calendar[_ngcontent-%COMP%]:before{content:\"\uF073\"}.fa-random[_ngcontent-%COMP%]:before{content:\"\uF074\"}.fa-comment[_ngcontent-%COMP%]:before{content:\"\uF075\"}.fa-magnet[_ngcontent-%COMP%]:before{content:\"\uF076\"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:\"\uF077\"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:\"\uF078\"}.fa-retweet[_ngcontent-%COMP%]:before{content:\"\uF079\"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:\"\uF07A\"}.fa-folder[_ngcontent-%COMP%]:before{content:\"\uF07B\"}.fa-folder-open[_ngcontent-%COMP%]:before{content:\"\uF07C\"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:\"\uF07D\"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:\"\uF07E\"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:\"\uF080\"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:\"\uF081\"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:\"\uF082\"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:\"\uF083\"}.fa-key[_ngcontent-%COMP%]:before{content:\"\uF084\"}.fa-cogs[_ngcontent-%COMP%]:before, .fa-gears[_ngcontent-%COMP%]:before{content:\"\uF085\"}.fa-comments[_ngcontent-%COMP%]:before{content:\"\uF086\"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:\"\uF087\"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:\"\uF088\"}.fa-star-half[_ngcontent-%COMP%]:before{content:\"\uF089\"}.fa-heart-o[_ngcontent-%COMP%]:before{content:\"\uF08A\"}.fa-sign-out[_ngcontent-%COMP%]:before{content:\"\uF08B\"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:\"\uF08C\"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:\"\uF08D\"}.fa-external-link[_ngcontent-%COMP%]:before{content:\"\uF08E\"}.fa-sign-in[_ngcontent-%COMP%]:before{content:\"\uF090\"}.fa-trophy[_ngcontent-%COMP%]:before{content:\"\uF091\"}.fa-github-square[_ngcontent-%COMP%]:before{content:\"\uF092\"}.fa-upload[_ngcontent-%COMP%]:before{content:\"\uF093\"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:\"\uF094\"}.fa-phone[_ngcontent-%COMP%]:before{content:\"\uF095\"}.fa-square-o[_ngcontent-%COMP%]:before{content:\"\uF096\"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:\"\uF097\"}.fa-phone-square[_ngcontent-%COMP%]:before{content:\"\uF098\"}.fa-twitter[_ngcontent-%COMP%]:before{content:\"\uF099\"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:\"\uF09A\"}.fa-github[_ngcontent-%COMP%]:before{content:\"\uF09B\"}.fa-unlock[_ngcontent-%COMP%]:before{content:\"\uF09C\"}.fa-credit-card[_ngcontent-%COMP%]:before{content:\"\uF09D\"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:\"\uF09E\"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:\"\uF0A0\"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:\"\uF0A1\"}.fa-bell[_ngcontent-%COMP%]:before{content:\"\uF0F3\"}.fa-certificate[_ngcontent-%COMP%]:before{content:\"\uF0A3\"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:\"\uF0A4\"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:\"\uF0A5\"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:\"\uF0A6\"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:\"\uF0A7\"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:\"\uF0A8\"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:\"\uF0A9\"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:\"\uF0AA\"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:\"\uF0AB\"}.fa-globe[_ngcontent-%COMP%]:before{content:\"\uF0AC\"}.fa-wrench[_ngcontent-%COMP%]:before{content:\"\uF0AD\"}.fa-tasks[_ngcontent-%COMP%]:before{content:\"\uF0AE\"}.fa-filter[_ngcontent-%COMP%]:before{content:\"\uF0B0\"}.fa-briefcase[_ngcontent-%COMP%]:before{content:\"\uF0B1\"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:\"\uF0B2\"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:\"\uF0C0\"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:\"\uF0C1\"}.fa-cloud[_ngcontent-%COMP%]:before{content:\"\uF0C2\"}.fa-flask[_ngcontent-%COMP%]:before{content:\"\uF0C3\"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:\"\uF0C4\"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:\"\uF0C5\"}.fa-paperclip[_ngcontent-%COMP%]:before{content:\"\uF0C6\"}.fa-floppy-o[_ngcontent-%COMP%]:before, .fa-save[_ngcontent-%COMP%]:before{content:\"\uF0C7\"}.fa-square[_ngcontent-%COMP%]:before{content:\"\uF0C8\"}.fa-bars[_ngcontent-%COMP%]:before, .fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before{content:\"\uF0C9\"}.fa-list-ul[_ngcontent-%COMP%]:before{content:\"\uF0CA\"}.fa-list-ol[_ngcontent-%COMP%]:before{content:\"\uF0CB\"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:\"\uF0CC\"}.fa-underline[_ngcontent-%COMP%]:before{content:\"\uF0CD\"}.fa-table[_ngcontent-%COMP%]:before{content:\"\uF0CE\"}.fa-magic[_ngcontent-%COMP%]:before{content:\"\uF0D0\"}.fa-truck[_ngcontent-%COMP%]:before{content:\"\uF0D1\"}.fa-pinterest[_ngcontent-%COMP%]:before{content:\"\uF0D2\"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:\"\uF0D3\"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0D4\"}.fa-google-plus[_ngcontent-%COMP%]:before{content:\"\uF0D5\"}.fa-money[_ngcontent-%COMP%]:before{content:\"\uF0D6\"}.fa-caret-down[_ngcontent-%COMP%]:before{content:\"\uF0D7\"}.fa-caret-up[_ngcontent-%COMP%]:before{content:\"\uF0D8\"}.fa-caret-left[_ngcontent-%COMP%]:before{content:\"\uF0D9\"}.fa-caret-right[_ngcontent-%COMP%]:before{content:\"\uF0DA\"}.fa-columns[_ngcontent-%COMP%]:before{content:\"\uF0DB\"}.fa-sort[_ngcontent-%COMP%]:before, .fa-unsorted[_ngcontent-%COMP%]:before{content:\"\uF0DC\"}.fa-sort-desc[_ngcontent-%COMP%]:before, .fa-sort-down[_ngcontent-%COMP%]:before{content:\"\uF0DD\"}.fa-sort-asc[_ngcontent-%COMP%]:before, .fa-sort-up[_ngcontent-%COMP%]:before{content:\"\uF0DE\"}.fa-envelope[_ngcontent-%COMP%]:before{content:\"\uF0E0\"}.fa-linkedin[_ngcontent-%COMP%]:before{content:\"\uF0E1\"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:\"\uF0E2\"}.fa-gavel[_ngcontent-%COMP%]:before, .fa-legal[_ngcontent-%COMP%]:before{content:\"\uF0E3\"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:\"\uF0E4\"}.fa-comment-o[_ngcontent-%COMP%]:before{content:\"\uF0E5\"}.fa-comments-o[_ngcontent-%COMP%]:before{content:\"\uF0E6\"}.fa-bolt[_ngcontent-%COMP%]:before, .fa-flash[_ngcontent-%COMP%]:before{content:\"\uF0E7\"}.fa-sitemap[_ngcontent-%COMP%]:before{content:\"\uF0E8\"}.fa-umbrella[_ngcontent-%COMP%]:before{content:\"\uF0E9\"}.fa-clipboard[_ngcontent-%COMP%]:before, .fa-paste[_ngcontent-%COMP%]:before{content:\"\uF0EA\"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:\"\uF0EB\"}.fa-exchange[_ngcontent-%COMP%]:before{content:\"\uF0EC\"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:\"\uF0ED\"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:\"\uF0EE\"}.fa-user-md[_ngcontent-%COMP%]:before{content:\"\uF0F0\"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:\"\uF0F1\"}.fa-suitcase[_ngcontent-%COMP%]:before{content:\"\uF0F2\"}.fa-bell-o[_ngcontent-%COMP%]:before{content:\"\uF0A2\"}.fa-coffee[_ngcontent-%COMP%]:before{content:\"\uF0F4\"}.fa-cutlery[_ngcontent-%COMP%]:before{content:\"\uF0F5\"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:\"\uF0F6\"}.fa-building-o[_ngcontent-%COMP%]:before{content:\"\uF0F7\"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:\"\uF0F8\"}.fa-ambulance[_ngcontent-%COMP%]:before{content:\"\uF0F9\"}.fa-medkit[_ngcontent-%COMP%]:before{content:\"\uF0FA\"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:\"\uF0FB\"}.fa-beer[_ngcontent-%COMP%]:before{content:\"\uF0FC\"}.fa-h-square[_ngcontent-%COMP%]:before{content:\"\uF0FD\"}.fa-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0FE\"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:\"\uF100\"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:\"\uF101\"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:\"\uF102\"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:\"\uF103\"}.fa-angle-left[_ngcontent-%COMP%]:before{content:\"\uF104\"}.fa-angle-right[_ngcontent-%COMP%]:before{content:\"\uF105\"}.fa-angle-up[_ngcontent-%COMP%]:before{content:\"\uF106\"}.fa-angle-down[_ngcontent-%COMP%]:before{content:\"\uF107\"}.fa-desktop[_ngcontent-%COMP%]:before{content:\"\uF108\"}.fa-laptop[_ngcontent-%COMP%]:before{content:\"\uF109\"}.fa-tablet[_ngcontent-%COMP%]:before{content:\"\uF10A\"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:\"\uF10B\"}.fa-circle-o[_ngcontent-%COMP%]:before{content:\"\uF10C\"}.fa-quote-left[_ngcontent-%COMP%]:before{content:\"\uF10D\"}.fa-quote-right[_ngcontent-%COMP%]:before{content:\"\uF10E\"}.fa-spinner[_ngcontent-%COMP%]:before{content:\"\uF110\"}.fa-circle[_ngcontent-%COMP%]:before{content:\"\uF111\"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:\"\uF112\"}.fa-github-alt[_ngcontent-%COMP%]:before{content:\"\uF113\"}.fa-folder-o[_ngcontent-%COMP%]:before{content:\"\uF114\"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:\"\uF115\"}.fa-smile-o[_ngcontent-%COMP%]:before{content:\"\uF118\"}.fa-frown-o[_ngcontent-%COMP%]:before{content:\"\uF119\"}.fa-meh-o[_ngcontent-%COMP%]:before{content:\"\uF11A\"}.fa-gamepad[_ngcontent-%COMP%]:before{content:\"\uF11B\"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:\"\uF11C\"}.fa-flag-o[_ngcontent-%COMP%]:before{content:\"\uF11D\"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:\"\uF11E\"}.fa-terminal[_ngcontent-%COMP%]:before{content:\"\uF120\"}.fa-code[_ngcontent-%COMP%]:before{content:\"\uF121\"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:\"\uF122\"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:\"\uF123\"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:\"\uF124\"}.fa-crop[_ngcontent-%COMP%]:before{content:\"\uF125\"}.fa-code-fork[_ngcontent-%COMP%]:before{content:\"\uF126\"}.fa-chain-broken[_ngcontent-%COMP%]:before, .fa-unlink[_ngcontent-%COMP%]:before{content:\"\uF127\"}.fa-question[_ngcontent-%COMP%]:before{content:\"\uF128\"}.fa-info[_ngcontent-%COMP%]:before{content:\"\uF129\"}.fa-exclamation[_ngcontent-%COMP%]:before{content:\"\uF12A\"}.fa-superscript[_ngcontent-%COMP%]:before{content:\"\uF12B\"}.fa-subscript[_ngcontent-%COMP%]:before{content:\"\uF12C\"}.fa-eraser[_ngcontent-%COMP%]:before{content:\"\uF12D\"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:\"\uF12E\"}.fa-microphone[_ngcontent-%COMP%]:before{content:\"\uF130\"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:\"\uF131\"}.fa-shield[_ngcontent-%COMP%]:before{content:\"\uF132\"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:\"\uF133\"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:\"\uF134\"}.fa-rocket[_ngcontent-%COMP%]:before{content:\"\uF135\"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:\"\uF136\"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:\"\uF137\"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:\"\uF138\"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:\"\uF139\"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:\"\uF13A\"}.fa-html5[_ngcontent-%COMP%]:before{content:\"\uF13B\"}.fa-css3[_ngcontent-%COMP%]:before{content:\"\uF13C\"}.fa-anchor[_ngcontent-%COMP%]:before{content:\"\uF13D\"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:\"\uF13E\"}.fa-bullseye[_ngcontent-%COMP%]:before{content:\"\uF140\"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:\"\uF141\"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:\"\uF142\"}.fa-rss-square[_ngcontent-%COMP%]:before{content:\"\uF143\"}.fa-play-circle[_ngcontent-%COMP%]:before{content:\"\uF144\"}.fa-ticket[_ngcontent-%COMP%]:before{content:\"\uF145\"}.fa-minus-square[_ngcontent-%COMP%]:before{content:\"\uF146\"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:\"\uF147\"}.fa-level-up[_ngcontent-%COMP%]:before{content:\"\uF148\"}.fa-level-down[_ngcontent-%COMP%]:before{content:\"\uF149\"}.fa-check-square[_ngcontent-%COMP%]:before{content:\"\uF14A\"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:\"\uF14B\"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:\"\uF14C\"}.fa-share-square[_ngcontent-%COMP%]:before{content:\"\uF14D\"}.fa-compass[_ngcontent-%COMP%]:before{content:\"\uF14E\"}.fa-caret-square-o-down[_ngcontent-%COMP%]:before, .fa-toggle-down[_ngcontent-%COMP%]:before{content:\"\uF150\"}.fa-caret-square-o-up[_ngcontent-%COMP%]:before, .fa-toggle-up[_ngcontent-%COMP%]:before{content:\"\uF151\"}.fa-caret-square-o-right[_ngcontent-%COMP%]:before, .fa-toggle-right[_ngcontent-%COMP%]:before{content:\"\uF152\"}.fa-eur[_ngcontent-%COMP%]:before, .fa-euro[_ngcontent-%COMP%]:before{content:\"\uF153\"}.fa-gbp[_ngcontent-%COMP%]:before{content:\"\uF154\"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:\"\uF155\"}.fa-inr[_ngcontent-%COMP%]:before, .fa-rupee[_ngcontent-%COMP%]:before{content:\"\uF156\"}.fa-cny[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before{content:\"\uF157\"}.fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before, .fa-ruble[_ngcontent-%COMP%]:before{content:\"\uF158\"}.fa-krw[_ngcontent-%COMP%]:before, .fa-won[_ngcontent-%COMP%]:before{content:\"\uF159\"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:\"\uF15A\"}.fa-file[_ngcontent-%COMP%]:before{content:\"\uF15B\"}.fa-file-text[_ngcontent-%COMP%]:before{content:\"\uF15C\"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:\"\uF15D\"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:\"\uF15E\"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:\"\uF160\"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:\"\uF161\"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:\"\uF162\"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:\"\uF163\"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:\"\uF164\"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:\"\uF165\"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:\"\uF166\"}.fa-youtube[_ngcontent-%COMP%]:before{content:\"\uF167\"}.fa-xing[_ngcontent-%COMP%]:before{content:\"\uF168\"}.fa-xing-square[_ngcontent-%COMP%]:before{content:\"\uF169\"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:\"\uF16A\"}.fa-dropbox[_ngcontent-%COMP%]:before{content:\"\uF16B\"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:\"\uF16C\"}.fa-instagram[_ngcontent-%COMP%]:before{content:\"\uF16D\"}.fa-flickr[_ngcontent-%COMP%]:before{content:\"\uF16E\"}.fa-adn[_ngcontent-%COMP%]:before{content:\"\uF170\"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:\"\uF171\"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:\"\uF172\"}.fa-tumblr[_ngcontent-%COMP%]:before{content:\"\uF173\"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:\"\uF174\"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF175\"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF176\"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF177\"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF178\"}.fa-apple[_ngcontent-%COMP%]:before{content:\"\uF179\"}.fa-windows[_ngcontent-%COMP%]:before{content:\"\uF17A\"}.fa-android[_ngcontent-%COMP%]:before{content:\"\uF17B\"}.fa-linux[_ngcontent-%COMP%]:before{content:\"\uF17C\"}.fa-dribbble[_ngcontent-%COMP%]:before{content:\"\uF17D\"}.fa-skype[_ngcontent-%COMP%]:before{content:\"\uF17E\"}.fa-foursquare[_ngcontent-%COMP%]:before{content:\"\uF180\"}.fa-trello[_ngcontent-%COMP%]:before{content:\"\uF181\"}.fa-female[_ngcontent-%COMP%]:before{content:\"\uF182\"}.fa-male[_ngcontent-%COMP%]:before{content:\"\uF183\"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:\"\uF184\"}.fa-sun-o[_ngcontent-%COMP%]:before{content:\"\uF185\"}.fa-moon-o[_ngcontent-%COMP%]:before{content:\"\uF186\"}.fa-archive[_ngcontent-%COMP%]:before{content:\"\uF187\"}.fa-bug[_ngcontent-%COMP%]:before{content:\"\uF188\"}.fa-vk[_ngcontent-%COMP%]:before{content:\"\uF189\"}.fa-weibo[_ngcontent-%COMP%]:before{content:\"\uF18A\"}.fa-renren[_ngcontent-%COMP%]:before{content:\"\uF18B\"}.fa-pagelines[_ngcontent-%COMP%]:before{content:\"\uF18C\"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:\"\uF18D\"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:\"\uF18E\"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:\"\uF190\"}.fa-caret-square-o-left[_ngcontent-%COMP%]:before, .fa-toggle-left[_ngcontent-%COMP%]:before{content:\"\uF191\"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:\"\uF192\"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:\"\uF193\"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:\"\uF194\"}.fa-try[_ngcontent-%COMP%]:before, .fa-turkish-lira[_ngcontent-%COMP%]:before{content:\"\uF195\"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:\"\uF196\"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:\"\uF197\"}.fa-slack[_ngcontent-%COMP%]:before{content:\"\uF198\"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:\"\uF199\"}.fa-wordpress[_ngcontent-%COMP%]:before{content:\"\uF19A\"}.fa-openid[_ngcontent-%COMP%]:before{content:\"\uF19B\"}.fa-bank[_ngcontent-%COMP%]:before, .fa-institution[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:\"\uF19C\"}.fa-graduation-cap[_ngcontent-%COMP%]:before, .fa-mortar-board[_ngcontent-%COMP%]:before{content:\"\uF19D\"}.fa-yahoo[_ngcontent-%COMP%]:before{content:\"\uF19E\"}.fa-google[_ngcontent-%COMP%]:before{content:\"\uF1A0\"}.fa-reddit[_ngcontent-%COMP%]:before{content:\"\uF1A1\"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:\"\uF1A2\"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:\"\uF1A3\"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:\"\uF1A4\"}.fa-delicious[_ngcontent-%COMP%]:before{content:\"\uF1A5\"}.fa-digg[_ngcontent-%COMP%]:before{content:\"\uF1A6\"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:\"\uF1A7\"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:\"\uF1A8\"}.fa-drupal[_ngcontent-%COMP%]:before{content:\"\uF1A9\"}.fa-joomla[_ngcontent-%COMP%]:before{content:\"\uF1AA\"}.fa-language[_ngcontent-%COMP%]:before{content:\"\uF1AB\"}.fa-fax[_ngcontent-%COMP%]:before{content:\"\uF1AC\"}.fa-building[_ngcontent-%COMP%]:before{content:\"\uF1AD\"}.fa-child[_ngcontent-%COMP%]:before{content:\"\uF1AE\"}.fa-paw[_ngcontent-%COMP%]:before{content:\"\uF1B0\"}.fa-spoon[_ngcontent-%COMP%]:before{content:\"\uF1B1\"}.fa-cube[_ngcontent-%COMP%]:before{content:\"\uF1B2\"}.fa-cubes[_ngcontent-%COMP%]:before{content:\"\uF1B3\"}.fa-behance[_ngcontent-%COMP%]:before{content:\"\uF1B4\"}.fa-behance-square[_ngcontent-%COMP%]:before{content:\"\uF1B5\"}.fa-steam[_ngcontent-%COMP%]:before{content:\"\uF1B6\"}.fa-steam-square[_ngcontent-%COMP%]:before{content:\"\uF1B7\"}.fa-recycle[_ngcontent-%COMP%]:before{content:\"\uF1B8\"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:\"\uF1B9\"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:\"\uF1BA\"}.fa-tree[_ngcontent-%COMP%]:before{content:\"\uF1BB\"}.fa-spotify[_ngcontent-%COMP%]:before{content:\"\uF1BC\"}.fa-deviantart[_ngcontent-%COMP%]:before{content:\"\uF1BD\"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:\"\uF1BE\"}.fa-database[_ngcontent-%COMP%]:before{content:\"\uF1C0\"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:\"\uF1C1\"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:\"\uF1C2\"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:\"\uF1C3\"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:\"\uF1C4\"}.fa-file-image-o[_ngcontent-%COMP%]:before, .fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before{content:\"\uF1C5\"}.fa-file-archive-o[_ngcontent-%COMP%]:before, .fa-file-zip-o[_ngcontent-%COMP%]:before{content:\"\uF1C6\"}.fa-file-audio-o[_ngcontent-%COMP%]:before, .fa-file-sound-o[_ngcontent-%COMP%]:before{content:\"\uF1C7\"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:\"\uF1C8\"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:\"\uF1C9\"}.fa-vine[_ngcontent-%COMP%]:before{content:\"\uF1CA\"}.fa-codepen[_ngcontent-%COMP%]:before{content:\"\uF1CB\"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:\"\uF1CC\"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before{content:\"\uF1CD\"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:\"\uF1CE\"}.fa-ra[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before{content:\"\uF1D0\"}.fa-empire[_ngcontent-%COMP%]:before, .fa-ge[_ngcontent-%COMP%]:before{content:\"\uF1D1\"}.fa-git-square[_ngcontent-%COMP%]:before{content:\"\uF1D2\"}.fa-git[_ngcontent-%COMP%]:before{content:\"\uF1D3\"}.fa-hacker-news[_ngcontent-%COMP%]:before, .fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before{content:\"\uF1D4\"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:\"\uF1D5\"}.fa-qq[_ngcontent-%COMP%]:before{content:\"\uF1D6\"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:\"\uF1D7\"}.fa-paper-plane[_ngcontent-%COMP%]:before, .fa-send[_ngcontent-%COMP%]:before{content:\"\uF1D8\"}.fa-paper-plane-o[_ngcontent-%COMP%]:before, .fa-send-o[_ngcontent-%COMP%]:before{content:\"\uF1D9\"}.fa-history[_ngcontent-%COMP%]:before{content:\"\uF1DA\"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:\"\uF1DB\"}.fa-header[_ngcontent-%COMP%]:before{content:\"\uF1DC\"}.fa-paragraph[_ngcontent-%COMP%]:before{content:\"\uF1DD\"}.fa-sliders[_ngcontent-%COMP%]:before{content:\"\uF1DE\"}.fa-share-alt[_ngcontent-%COMP%]:before{content:\"\uF1E0\"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:\"\uF1E1\"}.fa-bomb[_ngcontent-%COMP%]:before{content:\"\uF1E2\"}.fa-futbol-o[_ngcontent-%COMP%]:before, .fa-soccer-ball-o[_ngcontent-%COMP%]:before{content:\"\uF1E3\"}.fa-tty[_ngcontent-%COMP%]:before{content:\"\uF1E4\"}.fa-binoculars[_ngcontent-%COMP%]:before{content:\"\uF1E5\"}.fa-plug[_ngcontent-%COMP%]:before{content:\"\uF1E6\"}.fa-slideshare[_ngcontent-%COMP%]:before{content:\"\uF1E7\"}.fa-twitch[_ngcontent-%COMP%]:before{content:\"\uF1E8\"}.fa-yelp[_ngcontent-%COMP%]:before{content:\"\uF1E9\"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:\"\uF1EA\"}.fa-wifi[_ngcontent-%COMP%]:before{content:\"\uF1EB\"}.fa-calculator[_ngcontent-%COMP%]:before{content:\"\uF1EC\"}.fa-paypal[_ngcontent-%COMP%]:before{content:\"\uF1ED\"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:\"\uF1EE\"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:\"\uF1F0\"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:\"\uF1F1\"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:\"\uF1F2\"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:\"\uF1F3\"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:\"\uF1F4\"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:\"\uF1F5\"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:\"\uF1F6\"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:\"\uF1F7\"}.fa-trash[_ngcontent-%COMP%]:before{content:\"\uF1F8\"}.fa-copyright[_ngcontent-%COMP%]:before{content:\"\uF1F9\"}.fa-at[_ngcontent-%COMP%]:before{content:\"\uF1FA\"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:\"\uF1FB\"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:\"\uF1FC\"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:\"\uF1FD\"}.fa-area-chart[_ngcontent-%COMP%]:before{content:\"\uF1FE\"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:\"\uF200\"}.fa-line-chart[_ngcontent-%COMP%]:before{content:\"\uF201\"}.fa-lastfm[_ngcontent-%COMP%]:before{content:\"\uF202\"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:\"\uF203\"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:\"\uF204\"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:\"\uF205\"}.fa-bicycle[_ngcontent-%COMP%]:before{content:\"\uF206\"}.fa-bus[_ngcontent-%COMP%]:before{content:\"\uF207\"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:\"\uF208\"}.fa-angellist[_ngcontent-%COMP%]:before{content:\"\uF209\"}.fa-cc[_ngcontent-%COMP%]:before{content:\"\uF20A\"}.fa-ils[_ngcontent-%COMP%]:before, .fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before{content:\"\uF20B\"}.fa-meanpath[_ngcontent-%COMP%]:before{content:\"\uF20C\"}.fa-buysellads[_ngcontent-%COMP%]:before{content:\"\uF20D\"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:\"\uF20E\"}.fa-dashcube[_ngcontent-%COMP%]:before{content:\"\uF210\"}.fa-forumbee[_ngcontent-%COMP%]:before{content:\"\uF211\"}.fa-leanpub[_ngcontent-%COMP%]:before{content:\"\uF212\"}.fa-sellsy[_ngcontent-%COMP%]:before{content:\"\uF213\"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:\"\uF214\"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:\"\uF215\"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:\"\uF216\"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:\"\uF217\"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF218\"}.fa-diamond[_ngcontent-%COMP%]:before{content:\"\uF219\"}.fa-ship[_ngcontent-%COMP%]:before{content:\"\uF21A\"}.fa-user-secret[_ngcontent-%COMP%]:before{content:\"\uF21B\"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:\"\uF21C\"}.fa-street-view[_ngcontent-%COMP%]:before{content:\"\uF21D\"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:\"\uF21E\"}.fa-venus[_ngcontent-%COMP%]:before{content:\"\uF221\"}.fa-mars[_ngcontent-%COMP%]:before{content:\"\uF222\"}.fa-mercury[_ngcontent-%COMP%]:before{content:\"\uF223\"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:\"\uF224\"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:\"\uF225\"}.fa-venus-double[_ngcontent-%COMP%]:before{content:\"\uF226\"}.fa-mars-double[_ngcontent-%COMP%]:before{content:\"\uF227\"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:\"\uF228\"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:\"\uF229\"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:\"\uF22A\"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:\"\uF22B\"}.fa-neuter[_ngcontent-%COMP%]:before{content:\"\uF22C\"}.fa-genderless[_ngcontent-%COMP%]:before{content:\"\uF22D\"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:\"\uF230\"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:\"\uF231\"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:\"\uF232\"}.fa-server[_ngcontent-%COMP%]:before{content:\"\uF233\"}.fa-user-plus[_ngcontent-%COMP%]:before{content:\"\uF234\"}.fa-user-times[_ngcontent-%COMP%]:before{content:\"\uF235\"}.fa-bed[_ngcontent-%COMP%]:before, .fa-hotel[_ngcontent-%COMP%]:before{content:\"\uF236\"}.fa-viacoin[_ngcontent-%COMP%]:before{content:\"\uF237\"}.fa-train[_ngcontent-%COMP%]:before{content:\"\uF238\"}.fa-subway[_ngcontent-%COMP%]:before{content:\"\uF239\"}.fa-medium[_ngcontent-%COMP%]:before{content:\"\uF23A\"}.fa-y-combinator[_ngcontent-%COMP%]:before, .fa-yc[_ngcontent-%COMP%]:before{content:\"\uF23B\"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:\"\uF23C\"}.fa-opencart[_ngcontent-%COMP%]:before{content:\"\uF23D\"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:\"\uF23E\"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before{content:\"\uF240\"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF241\"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:\"\uF242\"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:\"\uF243\"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:\"\uF244\"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:\"\uF245\"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:\"\uF246\"}.fa-object-group[_ngcontent-%COMP%]:before{content:\"\uF247\"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:\"\uF248\"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:\"\uF249\"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:\"\uF24A\"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:\"\uF24B\"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:\"\uF24C\"}.fa-clone[_ngcontent-%COMP%]:before{content:\"\uF24D\"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:\"\uF24E\"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:\"\uF250\"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:\"\uF251\"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:\"\uF252\"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:\"\uF253\"}.fa-hourglass[_ngcontent-%COMP%]:before{content:\"\uF254\"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:\"\uF255\"}.fa-hand-paper-o[_ngcontent-%COMP%]:before, .fa-hand-stop-o[_ngcontent-%COMP%]:before{content:\"\uF256\"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:\"\uF257\"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:\"\uF258\"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:\"\uF259\"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:\"\uF25A\"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:\"\uF25B\"}.fa-trademark[_ngcontent-%COMP%]:before{content:\"\uF25C\"}.fa-registered[_ngcontent-%COMP%]:before{content:\"\uF25D\"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:\"\uF25E\"}.fa-gg[_ngcontent-%COMP%]:before{content:\"\uF260\"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:\"\uF261\"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:\"\uF262\"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:\"\uF263\"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:\"\uF264\"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:\"\uF265\"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:\"\uF266\"}.fa-safari[_ngcontent-%COMP%]:before{content:\"\uF267\"}.fa-chrome[_ngcontent-%COMP%]:before{content:\"\uF268\"}.fa-firefox[_ngcontent-%COMP%]:before{content:\"\uF269\"}.fa-opera[_ngcontent-%COMP%]:before{content:\"\uF26A\"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:\"\uF26B\"}.fa-television[_ngcontent-%COMP%]:before, .fa-tv[_ngcontent-%COMP%]:before{content:\"\uF26C\"}.fa-contao[_ngcontent-%COMP%]:before{content:\"\uF26D\"}.fa-500px[_ngcontent-%COMP%]:before{content:\"\uF26E\"}.fa-amazon[_ngcontent-%COMP%]:before{content:\"\uF270\"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:\"\uF271\"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:\"\uF272\"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:\"\uF273\"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:\"\uF274\"}.fa-industry[_ngcontent-%COMP%]:before{content:\"\uF275\"}.fa-map-pin[_ngcontent-%COMP%]:before{content:\"\uF276\"}.fa-map-signs[_ngcontent-%COMP%]:before{content:\"\uF277\"}.fa-map-o[_ngcontent-%COMP%]:before{content:\"\uF278\"}.fa-map[_ngcontent-%COMP%]:before{content:\"\uF279\"}.fa-commenting[_ngcontent-%COMP%]:before{content:\"\uF27A\"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:\"\uF27B\"}.fa-houzz[_ngcontent-%COMP%]:before{content:\"\uF27C\"}.fa-vimeo[_ngcontent-%COMP%]:before{content:\"\uF27D\"}.fa-black-tie[_ngcontent-%COMP%]:before{content:\"\uF27E\"}.fa-fonticons[_ngcontent-%COMP%]:before{content:\"\uF280\"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:\"\uF281\"}.fa-edge[_ngcontent-%COMP%]:before{content:\"\uF282\"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:\"\uF283\"}.fa-codiepie[_ngcontent-%COMP%]:before{content:\"\uF284\"}.fa-modx[_ngcontent-%COMP%]:before{content:\"\uF285\"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:\"\uF286\"}.fa-usb[_ngcontent-%COMP%]:before{content:\"\uF287\"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:\"\uF288\"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:\"\uF289\"}.fa-scribd[_ngcontent-%COMP%]:before{content:\"\uF28A\"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:\"\uF28B\"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28C\"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:\"\uF28D\"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28E\"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:\"\uF290\"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:\"\uF291\"}.fa-hashtag[_ngcontent-%COMP%]:before{content:\"\uF292\"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:\"\uF293\"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:\"\uF294\"}.fa-percent[_ngcontent-%COMP%]:before{content:\"\uF295\"}.fa-gitlab[_ngcontent-%COMP%]:before{content:\"\uF296\"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:\"\uF297\"}.fa-wpforms[_ngcontent-%COMP%]:before{content:\"\uF298\"}.fa-envira[_ngcontent-%COMP%]:before{content:\"\uF299\"}.fa-universal-access[_ngcontent-%COMP%]:before{content:\"\uF29A\"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:\"\uF29B\"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:\"\uF29C\"}.fa-blind[_ngcontent-%COMP%]:before{content:\"\uF29D\"}.fa-audio-description[_ngcontent-%COMP%]:before{content:\"\uF29E\"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:\"\uF2A0\"}.fa-braille[_ngcontent-%COMP%]:before{content:\"\uF2A1\"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before, .fa-asl-interpreting[_ngcontent-%COMP%]:before{content:\"\uF2A3\"}.fa-deaf[_ngcontent-%COMP%]:before, .fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before{content:\"\uF2A4\"}.fa-glide[_ngcontent-%COMP%]:before{content:\"\uF2A5\"}.fa-glide-g[_ngcontent-%COMP%]:before{content:\"\uF2A6\"}.fa-sign-language[_ngcontent-%COMP%]:before, .fa-signing[_ngcontent-%COMP%]:before{content:\"\uF2A7\"}.fa-low-vision[_ngcontent-%COMP%]:before{content:\"\uF2A8\"}.fa-viadeo[_ngcontent-%COMP%]:before{content:\"\uF2A9\"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:\"\uF2AA\"}.fa-snapchat[_ngcontent-%COMP%]:before{content:\"\uF2AB\"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:\"\uF2AC\"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:\"\uF2AD\"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:\"\uF2AE\"}.fa-first-order[_ngcontent-%COMP%]:before{content:\"\uF2B0\"}.fa-yoast[_ngcontent-%COMP%]:before{content:\"\uF2B1\"}.fa-themeisle[_ngcontent-%COMP%]:before{content:\"\uF2B2\"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:\"\uF2B3\"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:\"\uF2B4\"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:\"\uF2B5\"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:\"\uF2B6\"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:\"\uF2B7\"}.fa-linode[_ngcontent-%COMP%]:before{content:\"\uF2B8\"}.fa-address-book[_ngcontent-%COMP%]:before{content:\"\uF2B9\"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:\"\uF2BA\"}.fa-address-card[_ngcontent-%COMP%]:before, .fa-vcard[_ngcontent-%COMP%]:before{content:\"\uF2BB\"}.fa-address-card-o[_ngcontent-%COMP%]:before, .fa-vcard-o[_ngcontent-%COMP%]:before{content:\"\uF2BC\"}.fa-user-circle[_ngcontent-%COMP%]:before{content:\"\uF2BD\"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:\"\uF2BE\"}.fa-user-o[_ngcontent-%COMP%]:before{content:\"\uF2C0\"}.fa-id-badge[_ngcontent-%COMP%]:before{content:\"\uF2C1\"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:\"\uF2C2\"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:\"\uF2C3\"}.fa-quora[_ngcontent-%COMP%]:before{content:\"\uF2C4\"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:\"\uF2C5\"}.fa-telegram[_ngcontent-%COMP%]:before{content:\"\uF2C6\"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before{content:\"\uF2C7\"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF2C8\"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:\"\uF2C9\"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:\"\uF2CA\"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:\"\uF2CB\"}.fa-shower[_ngcontent-%COMP%]:before{content:\"\uF2CC\"}.fa-bath[_ngcontent-%COMP%]:before, .fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before{content:\"\uF2CD\"}.fa-podcast[_ngcontent-%COMP%]:before{content:\"\uF2CE\"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:\"\uF2D0\"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:\"\uF2D1\"}.fa-window-restore[_ngcontent-%COMP%]:before{content:\"\uF2D2\"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:\"\uF2D3\"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:\"\uF2D4\"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:\"\uF2D5\"}.fa-grav[_ngcontent-%COMP%]:before{content:\"\uF2D6\"}.fa-etsy[_ngcontent-%COMP%]:before{content:\"\uF2D7\"}.fa-imdb[_ngcontent-%COMP%]:before{content:\"\uF2D8\"}.fa-ravelry[_ngcontent-%COMP%]:before{content:\"\uF2D9\"}.fa-eercast[_ngcontent-%COMP%]:before{content:\"\uF2DA\"}.fa-microchip[_ngcontent-%COMP%]:before{content:\"\uF2DB\"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:\"\uF2DC\"}.fa-superpowers[_ngcontent-%COMP%]:before{content:\"\uF2DD\"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:\"\uF2DE\"}.fa-meetup[_ngcontent-%COMP%]:before{content:\"\uF2E0\"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:rgba(255,255,255,.5)}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]){display:inline-block}.angular-editor[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]     [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]     blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]     p{margin-bottom:0}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.show-placeholder[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:block}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5;pointer-events:none}"];
var RenderType_AngularEditorComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_AngularEditorComponent, data: {} });

function View_AngularEditorComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "angular-editor-toolbar", [], null, [[null, "execute"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("execute" === en)) {
                var pd_0 = (_co.executeCommand($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_AngularEditorToolbarComponent_0, RenderType_AngularEditorToolbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, [[3, 4], ["editorToolbar", 4]], 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorToolbarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], { id: [0, "id"], uploadUrl: [1, "uploadUrl"], showToolbar: [2, "showToolbar"], fonts: [3, "fonts"], customClasses: [4, "customClasses"], defaultFontName: [5, "defaultFontName"], defaultFontSize: [6, "defaultFontSize"], hiddenButtons: [7, "hiddenButtons"] }, { execute: "execute" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; var currVal_1 = _co.config.uploadUrl; var currVal_2 = ((_co.config.showToolbar !== undefined) ? _co.config.showToolbar : true); var currVal_3 = _co.getFonts(); var currVal_4 = _co.config.customClasses; var currVal_5 = _co.config.defaultFontName; var currVal_6 = _co.config.defaultFontSize; var currVal_7 = _co.config.toolbarHiddenButtons; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, null);
}
function View_AngularEditorComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "angular-editor-toolbar", [], null, [[null, "execute"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("execute" === en)) {
                var pd_0 = (_co.executeCommand($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_AngularEditorToolbarComponent_0, RenderType_AngularEditorToolbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, [[3, 4], ["editorToolbar", 4]], 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorToolbarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], { id: [0, "id"], uploadUrl: [1, "uploadUrl"], showToolbar: [2, "showToolbar"], fonts: [3, "fonts"], customClasses: [4, "customClasses"], defaultFontName: [5, "defaultFontName"], defaultFontSize: [6, "defaultFontSize"], hiddenButtons: [7, "hiddenButtons"] }, { execute: "execute" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; var currVal_1 = _co.config.uploadUrl; var currVal_2 = ((_co.config.showToolbar !== undefined) ? _co.config.showToolbar : true); var currVal_3 = _co.getFonts(); var currVal_4 = _co.config.customClasses; var currVal_5 = _co.config.defaultFontName; var currVal_6 = _co.config.defaultFontSize; var currVal_7 = _co.config.toolbarHiddenButtons; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, null);
}
function View_AngularEditorComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { textArea: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { editorWrapper: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 3, { editorToolbar: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, [["angularEditor", 1]], null, 8, "div", [["class", "angular-editor"]], [[4, "width", null], [4, "minWidth", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AngularEditorComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, [[2, 0], ["editorWrapper", 1]], null, 3, "div", [["class", "angular-editor-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, [[1, 0], ["editor", 1]], null, 0, "div", [["class", "angular-editor-textarea"]], [[1, "contenteditable", 0], [1, "tabindex", 0], [1, "translate", 0], [1, "spellcheck", 0], [4, "height", null], [4, "minHeight", null], [4, "maxHeight", null], [4, "outline", null]], [[null, "input"], [null, "focus"], [null, "blur"], [null, "click"], [null, "keyup"], [null, "mouseout"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_co.onContentChange($event.target) !== false);
                ad = (pd_0 && ad);
            }
            if (("focus" === en)) {
                var pd_1 = (_co.onTextAreaFocus($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("blur" === en)) {
                var pd_2 = (_co.onTextAreaBlur($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("click" === en)) {
                var pd_3 = (_co.exec() !== false);
                ad = (pd_3 && ad);
            }
            if (("keyup" === en)) {
                var pd_4 = (_co.exec() !== false);
                ad = (pd_4 && ad);
            }
            if (("mouseout" === en)) {
                var pd_5 = (_co.onTextAreaMouseOut($event) !== false);
                ad = (pd_5 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "span", [["class", "angular-editor-placeholder"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AngularEditorComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = (_co.config.toolbarPosition === "top"); _ck(_v, 5, 0, currVal_2); var currVal_12 = (_co.config.toolbarPosition === "bottom"); _ck(_v, 11, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.config.width; var currVal_1 = _co.config.minWidth; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = _co.config.editable; var currVal_4 = (_co.disabled ? (0 - 1) : _co.tabIndex); var currVal_5 = _co.config.translate; var currVal_6 = _co.config.spellcheck; var currVal_7 = _co.config.height; var currVal_8 = _co.config.minHeight; var currVal_9 = _co.config.maxHeight; var currVal_10 = ((_co.config.outline === false) ? "none" : undefined); _ck(_v, 7, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = (_co.placeholder || _co.config["placeholder"]); _ck(_v, 9, 0, currVal_11); });
}
function View_AngularEditorComponent_Host_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "angular-editor", [], [[1, "tabindex", 0]], [[null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).onFocus() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_AngularEditorComponent_0, RenderType_AngularEditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4440064, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [8, null], [8, null]], null, { focusEvent: "focus" })], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).tabindex; _ck(_v, 0, 0, currVal_0); });
}
var AngularEditorComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("angular-editor", _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorComponent"], View_AngularEditorComponent_Host_0, { id: "id", config: "config", placeholder: "placeholder", tabIndex: "tabIndex" }, { html: "html", viewMode: "viewMode", blurEvent: "blur", focusEvent: "focus" }, []);

var styles_AngularEditorToolbarComponent = ["@charset \"UTF-8\";@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse[_ngcontent-%COMP%]{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical[_ngcontent-%COMP%]{-webkit-transform:scale(1,-1);transform:scale(1,-1)}[_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%]{-webkit-filter:none;filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:\"\uF000\"}.fa-music[_ngcontent-%COMP%]:before{content:\"\uF001\"}.fa-search[_ngcontent-%COMP%]:before{content:\"\uF002\"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:\"\uF003\"}.fa-heart[_ngcontent-%COMP%]:before{content:\"\uF004\"}.fa-star[_ngcontent-%COMP%]:before{content:\"\uF005\"}.fa-star-o[_ngcontent-%COMP%]:before{content:\"\uF006\"}.fa-user[_ngcontent-%COMP%]:before{content:\"\uF007\"}.fa-film[_ngcontent-%COMP%]:before{content:\"\uF008\"}.fa-th-large[_ngcontent-%COMP%]:before{content:\"\uF009\"}.fa-th[_ngcontent-%COMP%]:before{content:\"\uF00A\"}.fa-th-list[_ngcontent-%COMP%]:before{content:\"\uF00B\"}.fa-check[_ngcontent-%COMP%]:before{content:\"\uF00C\"}.fa-close[_ngcontent-%COMP%]:before, .fa-remove[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:\"\uF00D\"}.fa-search-plus[_ngcontent-%COMP%]:before{content:\"\uF00E\"}.fa-search-minus[_ngcontent-%COMP%]:before{content:\"\uF010\"}.fa-power-off[_ngcontent-%COMP%]:before{content:\"\uF011\"}.fa-signal[_ngcontent-%COMP%]:before{content:\"\uF012\"}.fa-cog[_ngcontent-%COMP%]:before, .fa-gear[_ngcontent-%COMP%]:before{content:\"\uF013\"}.fa-trash-o[_ngcontent-%COMP%]:before{content:\"\uF014\"}.fa-home[_ngcontent-%COMP%]:before{content:\"\uF015\"}.fa-file-o[_ngcontent-%COMP%]:before{content:\"\uF016\"}.fa-clock-o[_ngcontent-%COMP%]:before{content:\"\uF017\"}.fa-road[_ngcontent-%COMP%]:before{content:\"\uF018\"}.fa-download[_ngcontent-%COMP%]:before{content:\"\uF019\"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:\"\uF01A\"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:\"\uF01B\"}.fa-inbox[_ngcontent-%COMP%]:before{content:\"\uF01C\"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:\"\uF01D\"}.fa-repeat[_ngcontent-%COMP%]:before, .fa-rotate-right[_ngcontent-%COMP%]:before{content:\"\uF01E\"}.fa-refresh[_ngcontent-%COMP%]:before{content:\"\uF021\"}.fa-list-alt[_ngcontent-%COMP%]:before{content:\"\uF022\"}.fa-lock[_ngcontent-%COMP%]:before{content:\"\uF023\"}.fa-flag[_ngcontent-%COMP%]:before{content:\"\uF024\"}.fa-headphones[_ngcontent-%COMP%]:before{content:\"\uF025\"}.fa-volume-off[_ngcontent-%COMP%]:before{content:\"\uF026\"}.fa-volume-down[_ngcontent-%COMP%]:before{content:\"\uF027\"}.fa-volume-up[_ngcontent-%COMP%]:before{content:\"\uF028\"}.fa-qrcode[_ngcontent-%COMP%]:before{content:\"\uF029\"}.fa-barcode[_ngcontent-%COMP%]:before{content:\"\uF02A\"}.fa-tag[_ngcontent-%COMP%]:before{content:\"\uF02B\"}.fa-tags[_ngcontent-%COMP%]:before{content:\"\uF02C\"}.fa-book[_ngcontent-%COMP%]:before{content:\"\uF02D\"}.fa-bookmark[_ngcontent-%COMP%]:before{content:\"\uF02E\"}.fa-print[_ngcontent-%COMP%]:before{content:\"\uF02F\"}.fa-camera[_ngcontent-%COMP%]:before{content:\"\uF030\"}.fa-font[_ngcontent-%COMP%]:before{content:\"\uF031\"}.fa-bold[_ngcontent-%COMP%]:before{content:\"\uF032\"}.fa-italic[_ngcontent-%COMP%]:before{content:\"\uF033\"}.fa-text-height[_ngcontent-%COMP%]:before{content:\"\uF034\"}.fa-text-width[_ngcontent-%COMP%]:before{content:\"\uF035\"}.fa-align-left[_ngcontent-%COMP%]:before{content:\"\uF036\"}.fa-align-center[_ngcontent-%COMP%]:before{content:\"\uF037\"}.fa-align-right[_ngcontent-%COMP%]:before{content:\"\uF038\"}.fa-align-justify[_ngcontent-%COMP%]:before{content:\"\uF039\"}.fa-list[_ngcontent-%COMP%]:before{content:\"\uF03A\"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:\"\uF03B\"}.fa-indent[_ngcontent-%COMP%]:before{content:\"\uF03C\"}.fa-video-camera[_ngcontent-%COMP%]:before{content:\"\uF03D\"}.fa-image[_ngcontent-%COMP%]:before, .fa-photo[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:\"\uF03E\"}.fa-pencil[_ngcontent-%COMP%]:before{content:\"\uF040\"}.fa-map-marker[_ngcontent-%COMP%]:before{content:\"\uF041\"}.fa-adjust[_ngcontent-%COMP%]:before{content:\"\uF042\"}.fa-tint[_ngcontent-%COMP%]:before{content:\"\uF043\"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:\"\uF044\"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:\"\uF045\"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:\"\uF046\"}.fa-arrows[_ngcontent-%COMP%]:before{content:\"\uF047\"}.fa-step-backward[_ngcontent-%COMP%]:before{content:\"\uF048\"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:\"\uF049\"}.fa-backward[_ngcontent-%COMP%]:before{content:\"\uF04A\"}.fa-play[_ngcontent-%COMP%]:before{content:\"\uF04B\"}.fa-pause[_ngcontent-%COMP%]:before{content:\"\uF04C\"}.fa-stop[_ngcontent-%COMP%]:before{content:\"\uF04D\"}.fa-forward[_ngcontent-%COMP%]:before{content:\"\uF04E\"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:\"\uF050\"}.fa-step-forward[_ngcontent-%COMP%]:before{content:\"\uF051\"}.fa-eject[_ngcontent-%COMP%]:before{content:\"\uF052\"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:\"\uF053\"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:\"\uF054\"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:\"\uF055\"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:\"\uF056\"}.fa-times-circle[_ngcontent-%COMP%]:before{content:\"\uF057\"}.fa-check-circle[_ngcontent-%COMP%]:before{content:\"\uF058\"}.fa-question-circle[_ngcontent-%COMP%]:before{content:\"\uF059\"}.fa-info-circle[_ngcontent-%COMP%]:before{content:\"\uF05A\"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:\"\uF05B\"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05C\"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05D\"}.fa-ban[_ngcontent-%COMP%]:before{content:\"\uF05E\"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF060\"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF061\"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF062\"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF063\"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:\"\uF064\"}.fa-expand[_ngcontent-%COMP%]:before{content:\"\uF065\"}.fa-compress[_ngcontent-%COMP%]:before{content:\"\uF066\"}.fa-plus[_ngcontent-%COMP%]:before{content:\"\uF067\"}.fa-minus[_ngcontent-%COMP%]:before{content:\"\uF068\"}.fa-asterisk[_ngcontent-%COMP%]:before{content:\"\uF069\"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:\"\uF06A\"}.fa-gift[_ngcontent-%COMP%]:before{content:\"\uF06B\"}.fa-leaf[_ngcontent-%COMP%]:before{content:\"\uF06C\"}.fa-fire[_ngcontent-%COMP%]:before{content:\"\uF06D\"}.fa-eye[_ngcontent-%COMP%]:before{content:\"\uF06E\"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:\"\uF070\"}.fa-exclamation-triangle[_ngcontent-%COMP%]:before, .fa-warning[_ngcontent-%COMP%]:before{content:\"\uF071\"}.fa-plane[_ngcontent-%COMP%]:before{content:\"\uF072\"}.fa-calendar[_ngcontent-%COMP%]:before{content:\"\uF073\"}.fa-random[_ngcontent-%COMP%]:before{content:\"\uF074\"}.fa-comment[_ngcontent-%COMP%]:before{content:\"\uF075\"}.fa-magnet[_ngcontent-%COMP%]:before{content:\"\uF076\"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:\"\uF077\"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:\"\uF078\"}.fa-retweet[_ngcontent-%COMP%]:before{content:\"\uF079\"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:\"\uF07A\"}.fa-folder[_ngcontent-%COMP%]:before{content:\"\uF07B\"}.fa-folder-open[_ngcontent-%COMP%]:before{content:\"\uF07C\"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:\"\uF07D\"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:\"\uF07E\"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:\"\uF080\"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:\"\uF081\"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:\"\uF082\"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:\"\uF083\"}.fa-key[_ngcontent-%COMP%]:before{content:\"\uF084\"}.fa-cogs[_ngcontent-%COMP%]:before, .fa-gears[_ngcontent-%COMP%]:before{content:\"\uF085\"}.fa-comments[_ngcontent-%COMP%]:before{content:\"\uF086\"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:\"\uF087\"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:\"\uF088\"}.fa-star-half[_ngcontent-%COMP%]:before{content:\"\uF089\"}.fa-heart-o[_ngcontent-%COMP%]:before{content:\"\uF08A\"}.fa-sign-out[_ngcontent-%COMP%]:before{content:\"\uF08B\"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:\"\uF08C\"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:\"\uF08D\"}.fa-external-link[_ngcontent-%COMP%]:before{content:\"\uF08E\"}.fa-sign-in[_ngcontent-%COMP%]:before{content:\"\uF090\"}.fa-trophy[_ngcontent-%COMP%]:before{content:\"\uF091\"}.fa-github-square[_ngcontent-%COMP%]:before{content:\"\uF092\"}.fa-upload[_ngcontent-%COMP%]:before{content:\"\uF093\"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:\"\uF094\"}.fa-phone[_ngcontent-%COMP%]:before{content:\"\uF095\"}.fa-square-o[_ngcontent-%COMP%]:before{content:\"\uF096\"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:\"\uF097\"}.fa-phone-square[_ngcontent-%COMP%]:before{content:\"\uF098\"}.fa-twitter[_ngcontent-%COMP%]:before{content:\"\uF099\"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:\"\uF09A\"}.fa-github[_ngcontent-%COMP%]:before{content:\"\uF09B\"}.fa-unlock[_ngcontent-%COMP%]:before{content:\"\uF09C\"}.fa-credit-card[_ngcontent-%COMP%]:before{content:\"\uF09D\"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:\"\uF09E\"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:\"\uF0A0\"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:\"\uF0A1\"}.fa-bell[_ngcontent-%COMP%]:before{content:\"\uF0F3\"}.fa-certificate[_ngcontent-%COMP%]:before{content:\"\uF0A3\"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:\"\uF0A4\"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:\"\uF0A5\"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:\"\uF0A6\"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:\"\uF0A7\"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:\"\uF0A8\"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:\"\uF0A9\"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:\"\uF0AA\"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:\"\uF0AB\"}.fa-globe[_ngcontent-%COMP%]:before{content:\"\uF0AC\"}.fa-wrench[_ngcontent-%COMP%]:before{content:\"\uF0AD\"}.fa-tasks[_ngcontent-%COMP%]:before{content:\"\uF0AE\"}.fa-filter[_ngcontent-%COMP%]:before{content:\"\uF0B0\"}.fa-briefcase[_ngcontent-%COMP%]:before{content:\"\uF0B1\"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:\"\uF0B2\"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:\"\uF0C0\"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:\"\uF0C1\"}.fa-cloud[_ngcontent-%COMP%]:before{content:\"\uF0C2\"}.fa-flask[_ngcontent-%COMP%]:before{content:\"\uF0C3\"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:\"\uF0C4\"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:\"\uF0C5\"}.fa-paperclip[_ngcontent-%COMP%]:before{content:\"\uF0C6\"}.fa-floppy-o[_ngcontent-%COMP%]:before, .fa-save[_ngcontent-%COMP%]:before{content:\"\uF0C7\"}.fa-square[_ngcontent-%COMP%]:before{content:\"\uF0C8\"}.fa-bars[_ngcontent-%COMP%]:before, .fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before{content:\"\uF0C9\"}.fa-list-ul[_ngcontent-%COMP%]:before{content:\"\uF0CA\"}.fa-list-ol[_ngcontent-%COMP%]:before{content:\"\uF0CB\"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:\"\uF0CC\"}.fa-underline[_ngcontent-%COMP%]:before{content:\"\uF0CD\"}.fa-table[_ngcontent-%COMP%]:before{content:\"\uF0CE\"}.fa-magic[_ngcontent-%COMP%]:before{content:\"\uF0D0\"}.fa-truck[_ngcontent-%COMP%]:before{content:\"\uF0D1\"}.fa-pinterest[_ngcontent-%COMP%]:before{content:\"\uF0D2\"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:\"\uF0D3\"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0D4\"}.fa-google-plus[_ngcontent-%COMP%]:before{content:\"\uF0D5\"}.fa-money[_ngcontent-%COMP%]:before{content:\"\uF0D6\"}.fa-caret-down[_ngcontent-%COMP%]:before{content:\"\uF0D7\"}.fa-caret-up[_ngcontent-%COMP%]:before{content:\"\uF0D8\"}.fa-caret-left[_ngcontent-%COMP%]:before{content:\"\uF0D9\"}.fa-caret-right[_ngcontent-%COMP%]:before{content:\"\uF0DA\"}.fa-columns[_ngcontent-%COMP%]:before{content:\"\uF0DB\"}.fa-sort[_ngcontent-%COMP%]:before, .fa-unsorted[_ngcontent-%COMP%]:before{content:\"\uF0DC\"}.fa-sort-desc[_ngcontent-%COMP%]:before, .fa-sort-down[_ngcontent-%COMP%]:before{content:\"\uF0DD\"}.fa-sort-asc[_ngcontent-%COMP%]:before, .fa-sort-up[_ngcontent-%COMP%]:before{content:\"\uF0DE\"}.fa-envelope[_ngcontent-%COMP%]:before{content:\"\uF0E0\"}.fa-linkedin[_ngcontent-%COMP%]:before{content:\"\uF0E1\"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:\"\uF0E2\"}.fa-gavel[_ngcontent-%COMP%]:before, .fa-legal[_ngcontent-%COMP%]:before{content:\"\uF0E3\"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:\"\uF0E4\"}.fa-comment-o[_ngcontent-%COMP%]:before{content:\"\uF0E5\"}.fa-comments-o[_ngcontent-%COMP%]:before{content:\"\uF0E6\"}.fa-bolt[_ngcontent-%COMP%]:before, .fa-flash[_ngcontent-%COMP%]:before{content:\"\uF0E7\"}.fa-sitemap[_ngcontent-%COMP%]:before{content:\"\uF0E8\"}.fa-umbrella[_ngcontent-%COMP%]:before{content:\"\uF0E9\"}.fa-clipboard[_ngcontent-%COMP%]:before, .fa-paste[_ngcontent-%COMP%]:before{content:\"\uF0EA\"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:\"\uF0EB\"}.fa-exchange[_ngcontent-%COMP%]:before{content:\"\uF0EC\"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:\"\uF0ED\"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:\"\uF0EE\"}.fa-user-md[_ngcontent-%COMP%]:before{content:\"\uF0F0\"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:\"\uF0F1\"}.fa-suitcase[_ngcontent-%COMP%]:before{content:\"\uF0F2\"}.fa-bell-o[_ngcontent-%COMP%]:before{content:\"\uF0A2\"}.fa-coffee[_ngcontent-%COMP%]:before{content:\"\uF0F4\"}.fa-cutlery[_ngcontent-%COMP%]:before{content:\"\uF0F5\"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:\"\uF0F6\"}.fa-building-o[_ngcontent-%COMP%]:before{content:\"\uF0F7\"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:\"\uF0F8\"}.fa-ambulance[_ngcontent-%COMP%]:before{content:\"\uF0F9\"}.fa-medkit[_ngcontent-%COMP%]:before{content:\"\uF0FA\"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:\"\uF0FB\"}.fa-beer[_ngcontent-%COMP%]:before{content:\"\uF0FC\"}.fa-h-square[_ngcontent-%COMP%]:before{content:\"\uF0FD\"}.fa-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0FE\"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:\"\uF100\"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:\"\uF101\"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:\"\uF102\"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:\"\uF103\"}.fa-angle-left[_ngcontent-%COMP%]:before{content:\"\uF104\"}.fa-angle-right[_ngcontent-%COMP%]:before{content:\"\uF105\"}.fa-angle-up[_ngcontent-%COMP%]:before{content:\"\uF106\"}.fa-angle-down[_ngcontent-%COMP%]:before{content:\"\uF107\"}.fa-desktop[_ngcontent-%COMP%]:before{content:\"\uF108\"}.fa-laptop[_ngcontent-%COMP%]:before{content:\"\uF109\"}.fa-tablet[_ngcontent-%COMP%]:before{content:\"\uF10A\"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:\"\uF10B\"}.fa-circle-o[_ngcontent-%COMP%]:before{content:\"\uF10C\"}.fa-quote-left[_ngcontent-%COMP%]:before{content:\"\uF10D\"}.fa-quote-right[_ngcontent-%COMP%]:before{content:\"\uF10E\"}.fa-spinner[_ngcontent-%COMP%]:before{content:\"\uF110\"}.fa-circle[_ngcontent-%COMP%]:before{content:\"\uF111\"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:\"\uF112\"}.fa-github-alt[_ngcontent-%COMP%]:before{content:\"\uF113\"}.fa-folder-o[_ngcontent-%COMP%]:before{content:\"\uF114\"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:\"\uF115\"}.fa-smile-o[_ngcontent-%COMP%]:before{content:\"\uF118\"}.fa-frown-o[_ngcontent-%COMP%]:before{content:\"\uF119\"}.fa-meh-o[_ngcontent-%COMP%]:before{content:\"\uF11A\"}.fa-gamepad[_ngcontent-%COMP%]:before{content:\"\uF11B\"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:\"\uF11C\"}.fa-flag-o[_ngcontent-%COMP%]:before{content:\"\uF11D\"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:\"\uF11E\"}.fa-terminal[_ngcontent-%COMP%]:before{content:\"\uF120\"}.fa-code[_ngcontent-%COMP%]:before{content:\"\uF121\"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:\"\uF122\"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:\"\uF123\"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:\"\uF124\"}.fa-crop[_ngcontent-%COMP%]:before{content:\"\uF125\"}.fa-code-fork[_ngcontent-%COMP%]:before{content:\"\uF126\"}.fa-chain-broken[_ngcontent-%COMP%]:before, .fa-unlink[_ngcontent-%COMP%]:before{content:\"\uF127\"}.fa-question[_ngcontent-%COMP%]:before{content:\"\uF128\"}.fa-info[_ngcontent-%COMP%]:before{content:\"\uF129\"}.fa-exclamation[_ngcontent-%COMP%]:before{content:\"\uF12A\"}.fa-superscript[_ngcontent-%COMP%]:before{content:\"\uF12B\"}.fa-subscript[_ngcontent-%COMP%]:before{content:\"\uF12C\"}.fa-eraser[_ngcontent-%COMP%]:before{content:\"\uF12D\"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:\"\uF12E\"}.fa-microphone[_ngcontent-%COMP%]:before{content:\"\uF130\"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:\"\uF131\"}.fa-shield[_ngcontent-%COMP%]:before{content:\"\uF132\"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:\"\uF133\"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:\"\uF134\"}.fa-rocket[_ngcontent-%COMP%]:before{content:\"\uF135\"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:\"\uF136\"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:\"\uF137\"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:\"\uF138\"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:\"\uF139\"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:\"\uF13A\"}.fa-html5[_ngcontent-%COMP%]:before{content:\"\uF13B\"}.fa-css3[_ngcontent-%COMP%]:before{content:\"\uF13C\"}.fa-anchor[_ngcontent-%COMP%]:before{content:\"\uF13D\"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:\"\uF13E\"}.fa-bullseye[_ngcontent-%COMP%]:before{content:\"\uF140\"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:\"\uF141\"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:\"\uF142\"}.fa-rss-square[_ngcontent-%COMP%]:before{content:\"\uF143\"}.fa-play-circle[_ngcontent-%COMP%]:before{content:\"\uF144\"}.fa-ticket[_ngcontent-%COMP%]:before{content:\"\uF145\"}.fa-minus-square[_ngcontent-%COMP%]:before{content:\"\uF146\"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:\"\uF147\"}.fa-level-up[_ngcontent-%COMP%]:before{content:\"\uF148\"}.fa-level-down[_ngcontent-%COMP%]:before{content:\"\uF149\"}.fa-check-square[_ngcontent-%COMP%]:before{content:\"\uF14A\"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:\"\uF14B\"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:\"\uF14C\"}.fa-share-square[_ngcontent-%COMP%]:before{content:\"\uF14D\"}.fa-compass[_ngcontent-%COMP%]:before{content:\"\uF14E\"}.fa-caret-square-o-down[_ngcontent-%COMP%]:before, .fa-toggle-down[_ngcontent-%COMP%]:before{content:\"\uF150\"}.fa-caret-square-o-up[_ngcontent-%COMP%]:before, .fa-toggle-up[_ngcontent-%COMP%]:before{content:\"\uF151\"}.fa-caret-square-o-right[_ngcontent-%COMP%]:before, .fa-toggle-right[_ngcontent-%COMP%]:before{content:\"\uF152\"}.fa-eur[_ngcontent-%COMP%]:before, .fa-euro[_ngcontent-%COMP%]:before{content:\"\uF153\"}.fa-gbp[_ngcontent-%COMP%]:before{content:\"\uF154\"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:\"\uF155\"}.fa-inr[_ngcontent-%COMP%]:before, .fa-rupee[_ngcontent-%COMP%]:before{content:\"\uF156\"}.fa-cny[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before{content:\"\uF157\"}.fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before, .fa-ruble[_ngcontent-%COMP%]:before{content:\"\uF158\"}.fa-krw[_ngcontent-%COMP%]:before, .fa-won[_ngcontent-%COMP%]:before{content:\"\uF159\"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:\"\uF15A\"}.fa-file[_ngcontent-%COMP%]:before{content:\"\uF15B\"}.fa-file-text[_ngcontent-%COMP%]:before{content:\"\uF15C\"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:\"\uF15D\"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:\"\uF15E\"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:\"\uF160\"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:\"\uF161\"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:\"\uF162\"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:\"\uF163\"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:\"\uF164\"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:\"\uF165\"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:\"\uF166\"}.fa-youtube[_ngcontent-%COMP%]:before{content:\"\uF167\"}.fa-xing[_ngcontent-%COMP%]:before{content:\"\uF168\"}.fa-xing-square[_ngcontent-%COMP%]:before{content:\"\uF169\"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:\"\uF16A\"}.fa-dropbox[_ngcontent-%COMP%]:before{content:\"\uF16B\"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:\"\uF16C\"}.fa-instagram[_ngcontent-%COMP%]:before{content:\"\uF16D\"}.fa-flickr[_ngcontent-%COMP%]:before{content:\"\uF16E\"}.fa-adn[_ngcontent-%COMP%]:before{content:\"\uF170\"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:\"\uF171\"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:\"\uF172\"}.fa-tumblr[_ngcontent-%COMP%]:before{content:\"\uF173\"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:\"\uF174\"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF175\"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF176\"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF177\"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF178\"}.fa-apple[_ngcontent-%COMP%]:before{content:\"\uF179\"}.fa-windows[_ngcontent-%COMP%]:before{content:\"\uF17A\"}.fa-android[_ngcontent-%COMP%]:before{content:\"\uF17B\"}.fa-linux[_ngcontent-%COMP%]:before{content:\"\uF17C\"}.fa-dribbble[_ngcontent-%COMP%]:before{content:\"\uF17D\"}.fa-skype[_ngcontent-%COMP%]:before{content:\"\uF17E\"}.fa-foursquare[_ngcontent-%COMP%]:before{content:\"\uF180\"}.fa-trello[_ngcontent-%COMP%]:before{content:\"\uF181\"}.fa-female[_ngcontent-%COMP%]:before{content:\"\uF182\"}.fa-male[_ngcontent-%COMP%]:before{content:\"\uF183\"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:\"\uF184\"}.fa-sun-o[_ngcontent-%COMP%]:before{content:\"\uF185\"}.fa-moon-o[_ngcontent-%COMP%]:before{content:\"\uF186\"}.fa-archive[_ngcontent-%COMP%]:before{content:\"\uF187\"}.fa-bug[_ngcontent-%COMP%]:before{content:\"\uF188\"}.fa-vk[_ngcontent-%COMP%]:before{content:\"\uF189\"}.fa-weibo[_ngcontent-%COMP%]:before{content:\"\uF18A\"}.fa-renren[_ngcontent-%COMP%]:before{content:\"\uF18B\"}.fa-pagelines[_ngcontent-%COMP%]:before{content:\"\uF18C\"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:\"\uF18D\"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:\"\uF18E\"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:\"\uF190\"}.fa-caret-square-o-left[_ngcontent-%COMP%]:before, .fa-toggle-left[_ngcontent-%COMP%]:before{content:\"\uF191\"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:\"\uF192\"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:\"\uF193\"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:\"\uF194\"}.fa-try[_ngcontent-%COMP%]:before, .fa-turkish-lira[_ngcontent-%COMP%]:before{content:\"\uF195\"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:\"\uF196\"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:\"\uF197\"}.fa-slack[_ngcontent-%COMP%]:before{content:\"\uF198\"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:\"\uF199\"}.fa-wordpress[_ngcontent-%COMP%]:before{content:\"\uF19A\"}.fa-openid[_ngcontent-%COMP%]:before{content:\"\uF19B\"}.fa-bank[_ngcontent-%COMP%]:before, .fa-institution[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:\"\uF19C\"}.fa-graduation-cap[_ngcontent-%COMP%]:before, .fa-mortar-board[_ngcontent-%COMP%]:before{content:\"\uF19D\"}.fa-yahoo[_ngcontent-%COMP%]:before{content:\"\uF19E\"}.fa-google[_ngcontent-%COMP%]:before{content:\"\uF1A0\"}.fa-reddit[_ngcontent-%COMP%]:before{content:\"\uF1A1\"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:\"\uF1A2\"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:\"\uF1A3\"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:\"\uF1A4\"}.fa-delicious[_ngcontent-%COMP%]:before{content:\"\uF1A5\"}.fa-digg[_ngcontent-%COMP%]:before{content:\"\uF1A6\"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:\"\uF1A7\"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:\"\uF1A8\"}.fa-drupal[_ngcontent-%COMP%]:before{content:\"\uF1A9\"}.fa-joomla[_ngcontent-%COMP%]:before{content:\"\uF1AA\"}.fa-language[_ngcontent-%COMP%]:before{content:\"\uF1AB\"}.fa-fax[_ngcontent-%COMP%]:before{content:\"\uF1AC\"}.fa-building[_ngcontent-%COMP%]:before{content:\"\uF1AD\"}.fa-child[_ngcontent-%COMP%]:before{content:\"\uF1AE\"}.fa-paw[_ngcontent-%COMP%]:before{content:\"\uF1B0\"}.fa-spoon[_ngcontent-%COMP%]:before{content:\"\uF1B1\"}.fa-cube[_ngcontent-%COMP%]:before{content:\"\uF1B2\"}.fa-cubes[_ngcontent-%COMP%]:before{content:\"\uF1B3\"}.fa-behance[_ngcontent-%COMP%]:before{content:\"\uF1B4\"}.fa-behance-square[_ngcontent-%COMP%]:before{content:\"\uF1B5\"}.fa-steam[_ngcontent-%COMP%]:before{content:\"\uF1B6\"}.fa-steam-square[_ngcontent-%COMP%]:before{content:\"\uF1B7\"}.fa-recycle[_ngcontent-%COMP%]:before{content:\"\uF1B8\"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:\"\uF1B9\"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:\"\uF1BA\"}.fa-tree[_ngcontent-%COMP%]:before{content:\"\uF1BB\"}.fa-spotify[_ngcontent-%COMP%]:before{content:\"\uF1BC\"}.fa-deviantart[_ngcontent-%COMP%]:before{content:\"\uF1BD\"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:\"\uF1BE\"}.fa-database[_ngcontent-%COMP%]:before{content:\"\uF1C0\"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:\"\uF1C1\"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:\"\uF1C2\"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:\"\uF1C3\"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:\"\uF1C4\"}.fa-file-image-o[_ngcontent-%COMP%]:before, .fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before{content:\"\uF1C5\"}.fa-file-archive-o[_ngcontent-%COMP%]:before, .fa-file-zip-o[_ngcontent-%COMP%]:before{content:\"\uF1C6\"}.fa-file-audio-o[_ngcontent-%COMP%]:before, .fa-file-sound-o[_ngcontent-%COMP%]:before{content:\"\uF1C7\"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:\"\uF1C8\"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:\"\uF1C9\"}.fa-vine[_ngcontent-%COMP%]:before{content:\"\uF1CA\"}.fa-codepen[_ngcontent-%COMP%]:before{content:\"\uF1CB\"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:\"\uF1CC\"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before{content:\"\uF1CD\"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:\"\uF1CE\"}.fa-ra[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before{content:\"\uF1D0\"}.fa-empire[_ngcontent-%COMP%]:before, .fa-ge[_ngcontent-%COMP%]:before{content:\"\uF1D1\"}.fa-git-square[_ngcontent-%COMP%]:before{content:\"\uF1D2\"}.fa-git[_ngcontent-%COMP%]:before{content:\"\uF1D3\"}.fa-hacker-news[_ngcontent-%COMP%]:before, .fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before{content:\"\uF1D4\"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:\"\uF1D5\"}.fa-qq[_ngcontent-%COMP%]:before{content:\"\uF1D6\"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:\"\uF1D7\"}.fa-paper-plane[_ngcontent-%COMP%]:before, .fa-send[_ngcontent-%COMP%]:before{content:\"\uF1D8\"}.fa-paper-plane-o[_ngcontent-%COMP%]:before, .fa-send-o[_ngcontent-%COMP%]:before{content:\"\uF1D9\"}.fa-history[_ngcontent-%COMP%]:before{content:\"\uF1DA\"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:\"\uF1DB\"}.fa-header[_ngcontent-%COMP%]:before{content:\"\uF1DC\"}.fa-paragraph[_ngcontent-%COMP%]:before{content:\"\uF1DD\"}.fa-sliders[_ngcontent-%COMP%]:before{content:\"\uF1DE\"}.fa-share-alt[_ngcontent-%COMP%]:before{content:\"\uF1E0\"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:\"\uF1E1\"}.fa-bomb[_ngcontent-%COMP%]:before{content:\"\uF1E2\"}.fa-futbol-o[_ngcontent-%COMP%]:before, .fa-soccer-ball-o[_ngcontent-%COMP%]:before{content:\"\uF1E3\"}.fa-tty[_ngcontent-%COMP%]:before{content:\"\uF1E4\"}.fa-binoculars[_ngcontent-%COMP%]:before{content:\"\uF1E5\"}.fa-plug[_ngcontent-%COMP%]:before{content:\"\uF1E6\"}.fa-slideshare[_ngcontent-%COMP%]:before{content:\"\uF1E7\"}.fa-twitch[_ngcontent-%COMP%]:before{content:\"\uF1E8\"}.fa-yelp[_ngcontent-%COMP%]:before{content:\"\uF1E9\"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:\"\uF1EA\"}.fa-wifi[_ngcontent-%COMP%]:before{content:\"\uF1EB\"}.fa-calculator[_ngcontent-%COMP%]:before{content:\"\uF1EC\"}.fa-paypal[_ngcontent-%COMP%]:before{content:\"\uF1ED\"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:\"\uF1EE\"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:\"\uF1F0\"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:\"\uF1F1\"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:\"\uF1F2\"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:\"\uF1F3\"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:\"\uF1F4\"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:\"\uF1F5\"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:\"\uF1F6\"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:\"\uF1F7\"}.fa-trash[_ngcontent-%COMP%]:before{content:\"\uF1F8\"}.fa-copyright[_ngcontent-%COMP%]:before{content:\"\uF1F9\"}.fa-at[_ngcontent-%COMP%]:before{content:\"\uF1FA\"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:\"\uF1FB\"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:\"\uF1FC\"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:\"\uF1FD\"}.fa-area-chart[_ngcontent-%COMP%]:before{content:\"\uF1FE\"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:\"\uF200\"}.fa-line-chart[_ngcontent-%COMP%]:before{content:\"\uF201\"}.fa-lastfm[_ngcontent-%COMP%]:before{content:\"\uF202\"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:\"\uF203\"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:\"\uF204\"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:\"\uF205\"}.fa-bicycle[_ngcontent-%COMP%]:before{content:\"\uF206\"}.fa-bus[_ngcontent-%COMP%]:before{content:\"\uF207\"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:\"\uF208\"}.fa-angellist[_ngcontent-%COMP%]:before{content:\"\uF209\"}.fa-cc[_ngcontent-%COMP%]:before{content:\"\uF20A\"}.fa-ils[_ngcontent-%COMP%]:before, .fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before{content:\"\uF20B\"}.fa-meanpath[_ngcontent-%COMP%]:before{content:\"\uF20C\"}.fa-buysellads[_ngcontent-%COMP%]:before{content:\"\uF20D\"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:\"\uF20E\"}.fa-dashcube[_ngcontent-%COMP%]:before{content:\"\uF210\"}.fa-forumbee[_ngcontent-%COMP%]:before{content:\"\uF211\"}.fa-leanpub[_ngcontent-%COMP%]:before{content:\"\uF212\"}.fa-sellsy[_ngcontent-%COMP%]:before{content:\"\uF213\"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:\"\uF214\"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:\"\uF215\"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:\"\uF216\"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:\"\uF217\"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF218\"}.fa-diamond[_ngcontent-%COMP%]:before{content:\"\uF219\"}.fa-ship[_ngcontent-%COMP%]:before{content:\"\uF21A\"}.fa-user-secret[_ngcontent-%COMP%]:before{content:\"\uF21B\"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:\"\uF21C\"}.fa-street-view[_ngcontent-%COMP%]:before{content:\"\uF21D\"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:\"\uF21E\"}.fa-venus[_ngcontent-%COMP%]:before{content:\"\uF221\"}.fa-mars[_ngcontent-%COMP%]:before{content:\"\uF222\"}.fa-mercury[_ngcontent-%COMP%]:before{content:\"\uF223\"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:\"\uF224\"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:\"\uF225\"}.fa-venus-double[_ngcontent-%COMP%]:before{content:\"\uF226\"}.fa-mars-double[_ngcontent-%COMP%]:before{content:\"\uF227\"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:\"\uF228\"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:\"\uF229\"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:\"\uF22A\"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:\"\uF22B\"}.fa-neuter[_ngcontent-%COMP%]:before{content:\"\uF22C\"}.fa-genderless[_ngcontent-%COMP%]:before{content:\"\uF22D\"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:\"\uF230\"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:\"\uF231\"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:\"\uF232\"}.fa-server[_ngcontent-%COMP%]:before{content:\"\uF233\"}.fa-user-plus[_ngcontent-%COMP%]:before{content:\"\uF234\"}.fa-user-times[_ngcontent-%COMP%]:before{content:\"\uF235\"}.fa-bed[_ngcontent-%COMP%]:before, .fa-hotel[_ngcontent-%COMP%]:before{content:\"\uF236\"}.fa-viacoin[_ngcontent-%COMP%]:before{content:\"\uF237\"}.fa-train[_ngcontent-%COMP%]:before{content:\"\uF238\"}.fa-subway[_ngcontent-%COMP%]:before{content:\"\uF239\"}.fa-medium[_ngcontent-%COMP%]:before{content:\"\uF23A\"}.fa-y-combinator[_ngcontent-%COMP%]:before, .fa-yc[_ngcontent-%COMP%]:before{content:\"\uF23B\"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:\"\uF23C\"}.fa-opencart[_ngcontent-%COMP%]:before{content:\"\uF23D\"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:\"\uF23E\"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before{content:\"\uF240\"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF241\"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:\"\uF242\"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:\"\uF243\"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:\"\uF244\"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:\"\uF245\"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:\"\uF246\"}.fa-object-group[_ngcontent-%COMP%]:before{content:\"\uF247\"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:\"\uF248\"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:\"\uF249\"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:\"\uF24A\"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:\"\uF24B\"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:\"\uF24C\"}.fa-clone[_ngcontent-%COMP%]:before{content:\"\uF24D\"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:\"\uF24E\"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:\"\uF250\"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:\"\uF251\"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:\"\uF252\"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:\"\uF253\"}.fa-hourglass[_ngcontent-%COMP%]:before{content:\"\uF254\"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:\"\uF255\"}.fa-hand-paper-o[_ngcontent-%COMP%]:before, .fa-hand-stop-o[_ngcontent-%COMP%]:before{content:\"\uF256\"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:\"\uF257\"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:\"\uF258\"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:\"\uF259\"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:\"\uF25A\"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:\"\uF25B\"}.fa-trademark[_ngcontent-%COMP%]:before{content:\"\uF25C\"}.fa-registered[_ngcontent-%COMP%]:before{content:\"\uF25D\"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:\"\uF25E\"}.fa-gg[_ngcontent-%COMP%]:before{content:\"\uF260\"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:\"\uF261\"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:\"\uF262\"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:\"\uF263\"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:\"\uF264\"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:\"\uF265\"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:\"\uF266\"}.fa-safari[_ngcontent-%COMP%]:before{content:\"\uF267\"}.fa-chrome[_ngcontent-%COMP%]:before{content:\"\uF268\"}.fa-firefox[_ngcontent-%COMP%]:before{content:\"\uF269\"}.fa-opera[_ngcontent-%COMP%]:before{content:\"\uF26A\"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:\"\uF26B\"}.fa-television[_ngcontent-%COMP%]:before, .fa-tv[_ngcontent-%COMP%]:before{content:\"\uF26C\"}.fa-contao[_ngcontent-%COMP%]:before{content:\"\uF26D\"}.fa-500px[_ngcontent-%COMP%]:before{content:\"\uF26E\"}.fa-amazon[_ngcontent-%COMP%]:before{content:\"\uF270\"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:\"\uF271\"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:\"\uF272\"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:\"\uF273\"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:\"\uF274\"}.fa-industry[_ngcontent-%COMP%]:before{content:\"\uF275\"}.fa-map-pin[_ngcontent-%COMP%]:before{content:\"\uF276\"}.fa-map-signs[_ngcontent-%COMP%]:before{content:\"\uF277\"}.fa-map-o[_ngcontent-%COMP%]:before{content:\"\uF278\"}.fa-map[_ngcontent-%COMP%]:before{content:\"\uF279\"}.fa-commenting[_ngcontent-%COMP%]:before{content:\"\uF27A\"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:\"\uF27B\"}.fa-houzz[_ngcontent-%COMP%]:before{content:\"\uF27C\"}.fa-vimeo[_ngcontent-%COMP%]:before{content:\"\uF27D\"}.fa-black-tie[_ngcontent-%COMP%]:before{content:\"\uF27E\"}.fa-fonticons[_ngcontent-%COMP%]:before{content:\"\uF280\"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:\"\uF281\"}.fa-edge[_ngcontent-%COMP%]:before{content:\"\uF282\"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:\"\uF283\"}.fa-codiepie[_ngcontent-%COMP%]:before{content:\"\uF284\"}.fa-modx[_ngcontent-%COMP%]:before{content:\"\uF285\"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:\"\uF286\"}.fa-usb[_ngcontent-%COMP%]:before{content:\"\uF287\"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:\"\uF288\"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:\"\uF289\"}.fa-scribd[_ngcontent-%COMP%]:before{content:\"\uF28A\"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:\"\uF28B\"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28C\"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:\"\uF28D\"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28E\"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:\"\uF290\"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:\"\uF291\"}.fa-hashtag[_ngcontent-%COMP%]:before{content:\"\uF292\"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:\"\uF293\"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:\"\uF294\"}.fa-percent[_ngcontent-%COMP%]:before{content:\"\uF295\"}.fa-gitlab[_ngcontent-%COMP%]:before{content:\"\uF296\"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:\"\uF297\"}.fa-wpforms[_ngcontent-%COMP%]:before{content:\"\uF298\"}.fa-envira[_ngcontent-%COMP%]:before{content:\"\uF299\"}.fa-universal-access[_ngcontent-%COMP%]:before{content:\"\uF29A\"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:\"\uF29B\"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:\"\uF29C\"}.fa-blind[_ngcontent-%COMP%]:before{content:\"\uF29D\"}.fa-audio-description[_ngcontent-%COMP%]:before{content:\"\uF29E\"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:\"\uF2A0\"}.fa-braille[_ngcontent-%COMP%]:before{content:\"\uF2A1\"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before, .fa-asl-interpreting[_ngcontent-%COMP%]:before{content:\"\uF2A3\"}.fa-deaf[_ngcontent-%COMP%]:before, .fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before{content:\"\uF2A4\"}.fa-glide[_ngcontent-%COMP%]:before{content:\"\uF2A5\"}.fa-glide-g[_ngcontent-%COMP%]:before{content:\"\uF2A6\"}.fa-sign-language[_ngcontent-%COMP%]:before, .fa-signing[_ngcontent-%COMP%]:before{content:\"\uF2A7\"}.fa-low-vision[_ngcontent-%COMP%]:before{content:\"\uF2A8\"}.fa-viadeo[_ngcontent-%COMP%]:before{content:\"\uF2A9\"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:\"\uF2AA\"}.fa-snapchat[_ngcontent-%COMP%]:before{content:\"\uF2AB\"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:\"\uF2AC\"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:\"\uF2AD\"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:\"\uF2AE\"}.fa-first-order[_ngcontent-%COMP%]:before{content:\"\uF2B0\"}.fa-yoast[_ngcontent-%COMP%]:before{content:\"\uF2B1\"}.fa-themeisle[_ngcontent-%COMP%]:before{content:\"\uF2B2\"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:\"\uF2B3\"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:\"\uF2B4\"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:\"\uF2B5\"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:\"\uF2B6\"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:\"\uF2B7\"}.fa-linode[_ngcontent-%COMP%]:before{content:\"\uF2B8\"}.fa-address-book[_ngcontent-%COMP%]:before{content:\"\uF2B9\"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:\"\uF2BA\"}.fa-address-card[_ngcontent-%COMP%]:before, .fa-vcard[_ngcontent-%COMP%]:before{content:\"\uF2BB\"}.fa-address-card-o[_ngcontent-%COMP%]:before, .fa-vcard-o[_ngcontent-%COMP%]:before{content:\"\uF2BC\"}.fa-user-circle[_ngcontent-%COMP%]:before{content:\"\uF2BD\"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:\"\uF2BE\"}.fa-user-o[_ngcontent-%COMP%]:before{content:\"\uF2C0\"}.fa-id-badge[_ngcontent-%COMP%]:before{content:\"\uF2C1\"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:\"\uF2C2\"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:\"\uF2C3\"}.fa-quora[_ngcontent-%COMP%]:before{content:\"\uF2C4\"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:\"\uF2C5\"}.fa-telegram[_ngcontent-%COMP%]:before{content:\"\uF2C6\"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before{content:\"\uF2C7\"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF2C8\"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:\"\uF2C9\"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:\"\uF2CA\"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:\"\uF2CB\"}.fa-shower[_ngcontent-%COMP%]:before{content:\"\uF2CC\"}.fa-bath[_ngcontent-%COMP%]:before, .fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before{content:\"\uF2CD\"}.fa-podcast[_ngcontent-%COMP%]:before{content:\"\uF2CE\"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:\"\uF2D0\"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:\"\uF2D1\"}.fa-window-restore[_ngcontent-%COMP%]:before{content:\"\uF2D2\"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:\"\uF2D3\"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:\"\uF2D4\"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:\"\uF2D5\"}.fa-grav[_ngcontent-%COMP%]:before{content:\"\uF2D6\"}.fa-etsy[_ngcontent-%COMP%]:before{content:\"\uF2D7\"}.fa-imdb[_ngcontent-%COMP%]:before{content:\"\uF2D8\"}.fa-ravelry[_ngcontent-%COMP%]:before{content:\"\uF2D9\"}.fa-eercast[_ngcontent-%COMP%]:before{content:\"\uF2DA\"}.fa-microchip[_ngcontent-%COMP%]:before{content:\"\uF2DB\"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:\"\uF2DC\"}.fa-superpowers[_ngcontent-%COMP%]:before{content:\"\uF2DD\"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:\"\uF2DE\"}.fa-meetup[_ngcontent-%COMP%]:before{content:\"\uF2E0\"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:rgba(255,255,255,.5)}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]), .select-button[_ngcontent-%COMP%]{display:inline-block}.select-button.disabled[_ngcontent-%COMP%]{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}"];
var RenderType_AngularEditorToolbarComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_AngularEditorToolbarComponent, data: {} });

function View_AngularEditorToolbarComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "ae-select", [["class", "select-custom-style"], ["tabindex", "-1"]], [[4, "display", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], ["document", "click"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("document:click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleKeyDown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.customClassId = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("change" === en)) {
                var pd_3 = (_co.setCustomClass(_co.customClassId) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { options: [0, "options"], isHidden: [1, "isHidden"] }, { changeEvent: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.customClassList; var currVal_9 = _co.isButtonHidden("customClasses"); _ck(_v, 2, 0, currVal_8, currVal_9); var currVal_10 = _co.htmlMode; var currVal_11 = _co.customClassId; _ck(_v, 4, 0, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).hidden; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); });
}
function View_AngularEditorToolbarComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 87, "div", [["class", "angular-editor-toolbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Undo"], ["type", "button"]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("undo") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-undo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Redo"], ["type", "button"]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("redo") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-repeat"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 12, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Bold"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("bold") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Italic"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("italic") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fa fa-italic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Underline"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("underline") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "i", [["class", "fa fa-underline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Strikethrough"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("strikeThrough") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fa fa-strikethrough"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Subscript"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("subscript") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "i", [["class", "fa fa-subscript"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Superscript"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("superscript") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "i", [["class", "fa fa-superscript"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 8, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Justify Left"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("justifyLeft") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 0, "i", [["class", "fa fa-align-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Justify Center"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("justifyCenter") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "i", [["class", "fa fa-align-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Justify Right"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("justifyRight") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "i", [["class", "fa fa-align-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Justify Full"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("justifyFull") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 0, "i", [["class", "fa fa-align-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 4, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Indent"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("indent") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 0, "i", [["class", "fa fa-indent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Outdent"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("outdent") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 0, "i", [["class", "fa fa-outdent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 4, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Unordered List"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("insertUnorderedList") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 0, "i", [["class", "fa fa-list-ul"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Ordered List"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("insertOrderedList") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 0, "i", [["class", "fa fa-list-ol"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 6, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 5, "ae-select", [["class", "select-heading"], ["tabindex", "-1"]], [[4, "display", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], ["document", "click"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("document:click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).handleKeyDown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.block = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("change" === en)) {
                var pd_3 = (_co.triggerCommand(_co.block) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 114688, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { options: [0, "options"], isHidden: [1, "isHidden"] }, { changeEvent: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 6, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 5, "ae-select", [["class", "select-font"], ["tabindex", "-1"]], [[4, "display", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], ["document", "click"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("document:click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).handleKeyDown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.fontName = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("change" === en)) {
                var pd_3 = (_co.setFontName(_co.fontName) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 114688, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { options: [0, "options"], isHidden: [1, "isHidden"] }, { changeEvent: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](51, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 6, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 5, "ae-select", [["class", "select-font-size"], ["tabindex", "-1"]], [[4, "display", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], ["document", "click"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("document:click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).handleKeyDown($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.fontSize = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("change" === en)) {
                var pd_3 = (_co.setFontSize(_co.fontSize) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 114688, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { options: [0, "options"], isHidden: [1, "isHidden"] }, { changeEvent: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 8, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, [["fgInput", 1]], null, 0, "input", [["style", "display: none"], ["type", "color"]], null, [[null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_co.insertColor(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 60).value, "textColor") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 2, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Text Color"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 60).click() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 1, "span", [["class", "color-label foreground"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 0, "i", [["class", "fa fa-font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, [["bgInput", 1]], null, 0, "input", [["style", "display: none"], ["type", "color"]], null, [[null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_co.insertColor(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64).value, "backgroundColor") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 2, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Background Color"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64).click() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 1, "span", [["class", "color-label background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 0, "i", [["class", "fa fa-font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AngularEditorToolbarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 11, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Insert Link"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.insertUrl() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 0, "i", [["class", "fa fa-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Unlink"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("unlink") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 0, "i", [["class", "fa fa-chain-broken"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, [[1, 0], ["fileInput", 1]], null, 0, "input", [["accept", "image/*"], ["style", "display: none"], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_co.onFileChanged($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Insert Image"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).click() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 0, "i", [["class", "fa fa-image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Insert Video"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.insertVideo() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 0, "i", [["class", "fa fa-video-camera"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Horizontal Line"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("insertHorizontalRule") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 0, "i", [["class", "fa fa-minus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 2, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "Clear Formatting"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("removeFormat") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 0, "i", [["class", "fa fa-remove"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 2, "div", [["class", "angular-editor-toolbar-set"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 1, "button", [["class", "angular-editor-button"], ["tabindex", "-1"], ["title", "HTML Code"], ["type", "button"]], [[8, "id", 0], [8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.triggerCommand("toggleEditorMode") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 0, "i", [["class", "fa fa-code"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_52 = _co.headings; var currVal_53 = _co.isButtonHidden("heading"); _ck(_v, 40, 0, currVal_52, currVal_53); var currVal_54 = _co.htmlMode; var currVal_55 = _co.block; _ck(_v, 42, 0, currVal_54, currVal_55); var currVal_64 = _co.fonts; var currVal_65 = _co.isButtonHidden("fontName"); _ck(_v, 47, 0, currVal_64, currVal_65); var currVal_66 = _co.htmlMode; var currVal_67 = _co.fontName; _ck(_v, 49, 0, currVal_66, currVal_67); var currVal_76 = _co.fontSizes; var currVal_77 = _co.isButtonHidden("fontSize"); _ck(_v, 54, 0, currVal_76, currVal_77); var currVal_78 = _co.htmlMode; var currVal_79 = _co.fontSize; _ck(_v, 56, 0, currVal_78, currVal_79); var currVal_86 = _co._customClasses; _ck(_v, 69, 0, currVal_86); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isButtonHidden("undo"); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.isButtonHidden("redo"); _ck(_v, 4, 0, currVal_1); var currVal_2 = ("bold-" + _co.id); var currVal_3 = _co.htmlMode; var currVal_4 = _co.isButtonHidden("bold"); _ck(_v, 7, 0, currVal_2, currVal_3, currVal_4); var currVal_5 = ("italic-" + _co.id); var currVal_6 = _co.htmlMode; var currVal_7 = _co.isButtonHidden("italic"); _ck(_v, 9, 0, currVal_5, currVal_6, currVal_7); var currVal_8 = ("underline-" + _co.id); var currVal_9 = _co.htmlMode; var currVal_10 = _co.isButtonHidden("underline"); _ck(_v, 11, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = ("strikeThrough-" + _co.id); var currVal_12 = _co.htmlMode; var currVal_13 = _co.isButtonHidden("strikeThrough"); _ck(_v, 13, 0, currVal_11, currVal_12, currVal_13); var currVal_14 = ("subscript-" + _co.id); var currVal_15 = _co.htmlMode; var currVal_16 = _co.isButtonHidden("subscript"); _ck(_v, 15, 0, currVal_14, currVal_15, currVal_16); var currVal_17 = ("superscript-" + _co.id); var currVal_18 = _co.htmlMode; var currVal_19 = _co.isButtonHidden("superscript"); _ck(_v, 17, 0, currVal_17, currVal_18, currVal_19); var currVal_20 = ("justifyLeft-" + _co.id); var currVal_21 = _co.htmlMode; var currVal_22 = _co.isButtonHidden("justifyLeft"); _ck(_v, 20, 0, currVal_20, currVal_21, currVal_22); var currVal_23 = ("justifyCenter-" + _co.id); var currVal_24 = _co.htmlMode; var currVal_25 = _co.isButtonHidden("justifyCenter"); _ck(_v, 22, 0, currVal_23, currVal_24, currVal_25); var currVal_26 = ("justifyRight-" + _co.id); var currVal_27 = _co.htmlMode; var currVal_28 = _co.isButtonHidden("justifyRight"); _ck(_v, 24, 0, currVal_26, currVal_27, currVal_28); var currVal_29 = ("justifyFull-" + _co.id); var currVal_30 = _co.htmlMode; var currVal_31 = _co.isButtonHidden("justifyFull"); _ck(_v, 26, 0, currVal_29, currVal_30, currVal_31); var currVal_32 = ("indent-" + _co.id); var currVal_33 = _co.htmlMode; var currVal_34 = _co.isButtonHidden("indent"); _ck(_v, 29, 0, currVal_32, currVal_33, currVal_34); var currVal_35 = ("outdent-" + _co.id); var currVal_36 = _co.htmlMode; var currVal_37 = _co.isButtonHidden("outdent"); _ck(_v, 31, 0, currVal_35, currVal_36, currVal_37); var currVal_38 = ("insertUnorderedList-" + _co.id); var currVal_39 = _co.htmlMode; var currVal_40 = _co.isButtonHidden("insertUnorderedList"); _ck(_v, 34, 0, currVal_38, currVal_39, currVal_40); var currVal_41 = ("insertOrderedList-" + _co.id); var currVal_42 = _co.htmlMode; var currVal_43 = _co.isButtonHidden("insertOrderedList"); _ck(_v, 36, 0, currVal_41, currVal_42, currVal_43); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).hidden; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassUntouched; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassTouched; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassPristine; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassDirty; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassValid; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassInvalid; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).ngClassPending; _ck(_v, 39, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).hidden; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).ngClassUntouched; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).ngClassTouched; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).ngClassPristine; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).ngClassDirty; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).ngClassValid; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).ngClassInvalid; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).ngClassPending; _ck(_v, 46, 0, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).hidden; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassUntouched; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassTouched; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassPristine; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassDirty; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassValid; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassInvalid; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).ngClassPending; _ck(_v, 53, 0, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75); var currVal_80 = ("foregroundColorPicker-" + _co.id); var currVal_81 = _co.htmlMode; var currVal_82 = _co.isButtonHidden("textColor"); _ck(_v, 61, 0, currVal_80, currVal_81, currVal_82); var currVal_83 = ("backgroundColorPicker-" + _co.id); var currVal_84 = _co.htmlMode; var currVal_85 = _co.isButtonHidden("backgroundColor"); _ck(_v, 65, 0, currVal_83, currVal_84, currVal_85); var currVal_87 = ("link-" + _co.id); var currVal_88 = _co.isLinkButtonDisabled; var currVal_89 = _co.isButtonHidden("link"); _ck(_v, 71, 0, currVal_87, currVal_88, currVal_89); var currVal_90 = ("unlink-" + _co.id); var currVal_91 = (_co.htmlMode || !_co.linkSelected); var currVal_92 = _co.isButtonHidden("unlink"); _ck(_v, 73, 0, currVal_90, currVal_91, currVal_92); var currVal_93 = ("insertImage-" + _co.id); var currVal_94 = _co.htmlMode; var currVal_95 = _co.isButtonHidden("insertImage"); _ck(_v, 76, 0, currVal_93, currVal_94, currVal_95); var currVal_96 = ("insertVideo-" + _co.id); var currVal_97 = _co.htmlMode; var currVal_98 = _co.isButtonHidden("insertVideo"); _ck(_v, 78, 0, currVal_96, currVal_97, currVal_98); var currVal_99 = ("insertHorizontalRule-" + _co.id); var currVal_100 = _co.htmlMode; var currVal_101 = _co.isButtonHidden("insertHorizontalRule"); _ck(_v, 80, 0, currVal_99, currVal_100, currVal_101); var currVal_102 = ("clearFormatting-" + _co.id); var currVal_103 = _co.htmlMode; var currVal_104 = _co.isButtonHidden("removeFormat"); _ck(_v, 83, 0, currVal_102, currVal_103, currVal_104); var currVal_105 = ("toggleEditorMode-" + _co.id); var currVal_106 = _co.isButtonHidden("toggleEditorMode"); _ck(_v, 86, 0, currVal_105, currVal_106); });
}
function View_AngularEditorToolbarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { myInputFile: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AngularEditorToolbarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showToolbar; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AngularEditorToolbarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "angular-editor-toolbar", [], null, null, null, View_AngularEditorToolbarComponent_0, RenderType_AngularEditorToolbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorToolbarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], null, null)], null, null); }
var AngularEditorToolbarComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("angular-editor-toolbar", _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditorToolbarComponent"], View_AngularEditorToolbarComponent_Host_0, { id: "id", uploadUrl: "uploadUrl", showToolbar: "showToolbar", fonts: "fonts", customClasses: "customClasses", defaultFontName: "defaultFontName", defaultFontSize: "defaultFontSize", hiddenButtons: "hiddenButtons" }, { execute: "execute" }, []);

var styles_ɵa = [".ae-font.ae-picker{color:#444;display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:26px;vertical-align:middle;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;float:left;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:-webkit-gradient(linear,left top,right top,from(white),to(#fff));background:linear-gradient(to right,#fff,#fff 100%)}.ae-font .ae-picker-label:focus{outline:0}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.ae-font .ae-picker-label:hover:before{background:-webkit-gradient(linear,left top,right top,color-stop(100%,#f5f5f5),to(#fff));background:linear-gradient(to right,#f5f5f5 100%,#fff 100%)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:-webkit-gradient(linear,left top,right top,color-stop(100%,#f5f5f5),to(#fff));background:linear-gradient(to right,#f5f5f5 100%,#fff 100%)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"];
var RenderType_ɵa = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵa, data: {} });

function View_ɵa_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "button", [["class", "ae-picker-item"], ["role", "button"], ["tabindex", "-1"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.optionSelect(_v.context.$implicit, $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { "selected": 0, "focused": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "ae-picker-item"; var currVal_1 = _ck(_v, 3, 0, (_v.context.$implicit.value === _co.value), (_v.context.index === _co.optionId)); _ck(_v, 2, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.label; _ck(_v, 4, 0, currVal_2); });
}
function View_ɵa_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "dropdown-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No items for select"]))], null, null); }
function View_ɵa_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { labelButton: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 13, "span", [["class", "ae-font ae-picker"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, { "ae-expanded": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, [[1, 0], ["labelButton", 1]], null, 4, "button", [["class", "ae-picker-label"], ["role", "button"], ["tabindex", "0"], ["type", "button"]], [[8, "tabIndex", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleOpen($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, ":svg:svg", [["viewBox", "0 0 18 18"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, ":svg:polygon", [["class", "ae-stroke"], ["points", "7 11 9 13 11 11 7 11"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, ":svg:polygon", [["class", "ae-stroke"], ["points", "7 7 9 5 11 7 7 7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 4, "span", [["class", "ae-picker-options"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "ae-font ae-picker"; var currVal_1 = _ck(_v, 4, 0, _co.isOpen); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = _co.options; _ck(_v, 12, 0, currVal_4); var currVal_5 = !_co.options.length; _ck(_v, 14, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = (0 - 1); _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.label; _ck(_v, 6, 0, currVal_3); });
}
function View_ɵa_Host_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ae-select", [], [[4, "display", null]], [["document", "click"], [null, "keydown"]], function (_v, en, $event) {
            var ad = true;
            if (("document:click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleKeyDown($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).hidden; _ck(_v, 0, 0, currVal_0); });
}
var ɵaNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ae-select", _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_1__["ɵa"], View_ɵa_Host_0, { options: "options", isHidden: "hidden" }, { changeEvent: "change" }, []);



/***/ }),

/***/ "./src/app/config/editor.config.ts":
/*!*****************************************!*\
  !*** ./src/app/config/editor.config.ts ***!
  \*****************************************/
/*! exports provided: editorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorConfig", function() { return editorConfig; });
var editorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
        {
            name: 'quote',
            class: 'quote',
        },
        {
            name: 'redText',
            class: 'redText',
        },
        {
            name: 'titleText',
            class: 'titleText',
            tag: 'h1',
        },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
};


/***/ }),

/***/ "./src/app/pages/communication/announcements/announcements.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/communication/announcements/announcements.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_AnnouncementsComponent, View_AnnouncementsComponent_0, View_AnnouncementsComponent_Host_0, AnnouncementsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AnnouncementsComponent", function() { return RenderType_AnnouncementsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AnnouncementsComponent_0", function() { return View_AnnouncementsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AnnouncementsComponent_Host_0", function() { return View_AnnouncementsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsComponentNgFactory", function() { return AnnouncementsComponentNgFactory; });
/* harmony import */ var _announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcements.component.scss.shim.ngstyle */ "./src/app/pages/communication/announcements/announcements.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@kolkov/angular-editor/kolkov-angular-editor.ngfactory */ "./node_modules/@kolkov/angular-editor/kolkov-angular-editor.ngfactory.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pipe/safe-html.pipe */ "./src/app/pipe/safe-html.pipe.ts");
/* harmony import */ var _announcements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./announcements.component */ "./src/app/pages/communication/announcements/announcements.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/communication/announcement.service */ "./src/app/services/communication/announcement.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */















var styles_AnnouncementsComponent = [_announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AnnouncementsComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AnnouncementsComponent, data: {} });

function View_AnnouncementsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "input-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "small", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*Title is required"]))], null, null); }
function View_AnnouncementsComponent_3(_l) {
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
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[2, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.batchCode, ""); _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.batchCode; _ck(_v, 2, 0, currVal_4); });
}
function View_AnnouncementsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "input-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "small", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*Batch Code is required"]))], null, null); }
function View_AnnouncementsComponent_5(_l) {
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
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[4, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit; _ck(_v, 2, 0, currVal_4); });
}
function View_AnnouncementsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "input-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "small", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*Category is required"]))], null, null); }
function View_AnnouncementsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "input-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "small", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*Date is required"]))], null, null); }
function View_AnnouncementsComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 96, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 1, 94, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "h5", [["style", "color: #ffd500"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["START NEW THREAD"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 89, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("submit" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (("submit" === en)) {
                var pd_2 = (_co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 11, "div", [["class", "form-group-inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "label", [["for", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TITLE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "input", [["formControlName", "title"], ["fullWidth", ""], ["id", "title"], ["nbInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { status: [0, "status"], fullWidth: [1, "fullWidth"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AnnouncementsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 6, "angular-editor", [["formControlName", "text"], ["placeholder", "Enter text here..."]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onFocus() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_AngularEditorComponent_0"], _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_AngularEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 4440064, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], [8, null]], { config: [0, "config"], placeholder: [1, "placeholder"] }, { focusEvent: "focus" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SELECT ATTACHMENT"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, [[1, 0], ["pickedFile", 1]], null, 1, "input", [["fullWidth", ""], ["nbInput", ""], ["status", "basic"], ["type", "file"], ["value", "select Attachment"]], [[2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_co.onFilePicked($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { status: [0, "status"], fullWidth: [1, "fullWidth"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 57, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 52, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 22, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 16, "div", [["class", "col-sm-6 pb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 13, "nb-select", [["formControlName", "batchCodes"], ["fullWidth", ""], ["multiple", ""], ["placeholder", "Select Batches"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "selectedChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("selectedChange" === en)) {
                var pd_0 = (_co.onSelectBatch($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], { status: [0, "status"], fullWidth: [1, "fullWidth"], placeholder: [2, "placeholder"], multiple: [3, "multiple"] }, { selectedChange: "selectedChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { customLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, 1, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown.space" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onClick($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("keydown.enter" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onClick($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 180224, [[2, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["--Select Batch--"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AnnouncementsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AnnouncementsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 4, "div", [["class", "col-sm-6 pb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 3, "nb-checkbox", [["status", "warning"]], [[2, "status-primary", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-info", null], [2, "status-basic", null], [2, "status-control", null]], [[null, "checkedChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("checkedChange" === en)) {
                var pd_0 = (_co.check($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCheckboxComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCheckboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { status: [0, "status"] }, { checkedChange: "checkedChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["SELECT ALL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 27, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 16, "div", [["class", "col-sm-6 pb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 13, "nb-select", [["formControlName", "categories"], ["fullWidth", ""], ["multiple", ""], ["placeholder", "Select Category Tags"], ["status", "warning"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "selectedChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("selectedChange" === en)) {
                var pd_0 = (_co.onSelectCategory($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], { status: [0, "status"], fullWidth: [1, "fullWidth"], placeholder: [2, "placeholder"], multiple: [3, "multiple"] }, { selectedChange: "selectedChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { customLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, 1, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown.space" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).onClick($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("keydown.enter" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).onClick($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 180224, [[4, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["--Select Category--"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AnnouncementsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AnnouncementsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 9, "div", [["class", "col-sm-6 pb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 6, "input", [["formControlName", "date"], ["fullWidth", ""], ["nbInput", ""], ["placeholder", "Select Date"], ["type", "date"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { status: [0, "status"], fullWidth: [1, "fullWidth"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AnnouncementsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 3, "div", [["class", "col-sm-2 pt-5"], ["style", "border-left: 1px solid lightgrey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 2, "button", [["class", "btn btn-yellow-black float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Announce \u00A0\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 0, "img", [["height", "20px"], ["src", "assets/img/rarrow.png"], ["width", "20px"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_27 = _co.announcementForm; _ck(_v, 9, 0, currVal_27); var currVal_51 = "title"; _ck(_v, 18, 0, currVal_51); var currVal_52 = ((_co.announcementForm.get("title").touched && _co.announcementForm.get("title").invalid) ? "danger" : "basic"); var currVal_53 = ""; _ck(_v, 21, 0, currVal_52, currVal_53); var currVal_54 = (_co.announcementForm.get("title").invalid && _co.announcementForm.get("title").touched); _ck(_v, 23, 0, currVal_54); var currVal_63 = _co.editorConfig; var currVal_64 = "Enter text here..."; _ck(_v, 27, 0, currVal_63, currVal_64); var currVal_65 = "text"; _ck(_v, 29, 0, currVal_65); var currVal_82 = "basic"; var currVal_83 = ""; _ck(_v, 37, 0, currVal_82, currVal_83); var currVal_111 = (_co.batchError ? "danger" : "basic"); var currVal_112 = ""; var currVal_113 = "Select Batches"; var currVal_114 = ""; _ck(_v, 44, 0, currVal_111, currVal_112, currVal_113, currVal_114); var currVal_115 = "batchCodes"; _ck(_v, 48, 0, currVal_115); var currVal_119 = undefined; _ck(_v, 53, 0, currVal_119); var currVal_120 = _co.batches; _ck(_v, 56, 0, currVal_120); var currVal_121 = _co.batchError; _ck(_v, 58, 0, currVal_121); var currVal_129 = "warning"; _ck(_v, 62, 0, currVal_129); var currVal_157 = (_co.categoryError ? "danger" : "basic"); var currVal_158 = ""; var currVal_159 = "Select Category Tags"; var currVal_160 = ""; _ck(_v, 68, 0, currVal_157, currVal_158, currVal_159, currVal_160); var currVal_161 = "categories"; _ck(_v, 72, 0, currVal_161); var currVal_165 = undefined; _ck(_v, 77, 0, currVal_165); var currVal_166 = _co.institute.category; _ck(_v, 80, 0, currVal_166); var currVal_167 = _co.categoryError; _ck(_v, 82, 0, currVal_167); var currVal_191 = "date"; _ck(_v, 87, 0, currVal_191); var currVal_192 = ((_co.announcementForm.get("date").touched && _co.announcementForm.get("date").invalid) ? "danger" : "basic"); var currVal_193 = ""; _ck(_v, 90, 0, currVal_192, currVal_193); var currVal_194 = (_co.announcementForm.get("date").invalid && _co.announcementForm.get("date").touched); _ck(_v, 92, 0, currVal_194); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending; _ck(_v, 7, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).fullWidth; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).tiny; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).small; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).medium; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).large; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).giant; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).primary; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).info; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).success; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).warning; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).danger; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).basic; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).control; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).rectangle; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).semiRound; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).round; _ck(_v, 15, 1, [currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50]); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).tabindex; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassUntouched; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassTouched; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPristine; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassDirty; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassValid; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassInvalid; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPending; _ck(_v, 25, 0, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62); var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).fullWidth; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).tiny; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).small; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).medium; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).large; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).giant; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).primary; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).info; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).success; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).warning; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).danger; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).basic; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).control; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).rectangle; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).semiRound; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).round; _ck(_v, 36, 1, [currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81]); var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).outline; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).filled; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).hero; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).fullWidth; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).isOpen; var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).tiny; var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).small; var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).medium; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).large; var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).giant; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).primary; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).info; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).success; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).warning; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).danger; var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).basic; var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).control; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).rectangle; var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).round; var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).semiRound; var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassUntouched; var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassTouched; var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassPristine; var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassDirty; var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassValid; var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassInvalid; var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassPending; _ck(_v, 43, 1, [currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110]); var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).selectedClass; var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).disabledAttribute; var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).tabindex; _ck(_v, 52, 0, currVal_116, currVal_117, currVal_118); var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).primary; var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).success; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).warning; var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).danger; var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).info; var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).basic; var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).control; _ck(_v, 60, 0, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128); var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).outline; var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).filled; var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).hero; var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).fullWidth; var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).isOpen; var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).tiny; var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).small; var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).medium; var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).large; var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).giant; var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).primary; var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).info; var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).success; var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).warning; var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).danger; var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).basic; var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).control; var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).rectangle; var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).round; var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).semiRound; var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassUntouched; var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassTouched; var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassPristine; var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassDirty; var currVal_154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassValid; var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassInvalid; var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassPending; _ck(_v, 67, 1, [currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151, currVal_152, currVal_153, currVal_154, currVal_155, currVal_156]); var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).selectedClass; var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).disabledAttribute; var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).tabindex; _ck(_v, 76, 0, currVal_162, currVal_163, currVal_164); var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassUntouched; var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassTouched; var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPristine; var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassDirty; var currVal_172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassValid; var currVal_173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassInvalid; var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPending; var currVal_175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).fullWidth; var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).tiny; var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).small; var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).medium; var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).large; var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).giant; var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).primary; var currVal_182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).info; var currVal_183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).success; var currVal_184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).warning; var currVal_185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).danger; var currVal_186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).basic; var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).control; var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).rectangle; var currVal_189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).semiRound; var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).round; _ck(_v, 84, 1, [currVal_168, currVal_169, currVal_170, currVal_171, currVal_172, currVal_173, currVal_174, currVal_175, currVal_176, currVal_177, currVal_178, currVal_179, currVal_180, currVal_181, currVal_182, currVal_183, currVal_184, currVal_185, currVal_186, currVal_187, currVal_188, currVal_189, currVal_190]); });
}
function View_AnnouncementsComponent_10(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["class", "pointer"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openUrl(_v.parent.context.$implicit.attachment.secure_url) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.attachment.file_name; _ck(_v, 1, 0, currVal_0); });
}
function View_AnnouncementsComponent_9(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["Announcement ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AnnouncementsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "button", [["nbButton", ""], ["status", "danger"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.onDelete(_v.context.$implicit._id) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { status: [0, "status"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "span", [["class", "btnText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Delete "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "span", [["class", "btnIcon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "nb-icon", [["icon", "trash-2-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null)], function (_ck, _v) { var currVal_3 = _v.context.$implicit.attachment; _ck(_v, 12, 0, currVal_3); var currVal_30 = "danger"; _ck(_v, 15, 0, currVal_30); var currVal_39 = "trash-2-outline"; _ck(_v, 20, 0, currVal_39); }, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.text)); _ck(_v, 8, 0, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).filled; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).outline; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ghost; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).hero; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).fullWidth; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).tabbable; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).tiny; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).small; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).medium; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).large; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).giant; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).primary; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).info; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).success; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).warning; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).danger; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).basic; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).control; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).rectangle; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).round; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).semiRound; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).iconLeft; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).iconRight; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transitions; _ck(_v, 14, 1, [currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29]); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).html; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).primary; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).info; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).success; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).warning; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).danger; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).basic; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).control; _ck(_v, 19, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); });
}
function View_AnnouncementsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ID"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attachment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Delete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AnnouncementsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcements; _ck(_v, 16, 0, currVal_0); }, null); }
function View_AnnouncementsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Announcements"]))], null, null); }
function View_AnnouncementsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeHtmlPipe"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { pickedFile: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AnnouncementsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 9, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "nb-card-header", [["style", "background: #ffd500"]], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["DISCUSSION THREADS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_AnnouncementsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noAnnouncement", 2]], 0, 0, null, View_AnnouncementsComponent_11))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.display; _ck(_v, 3, 0, currVal_0); var currVal_21 = (_co.announcements.length > 0); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14); _ck(_v, 13, 0, currVal_21, currVal_22); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).tiny; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).small; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).medium; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).large; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).giant; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).primary; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).info; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).success; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).warning; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).danger; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).basic; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).control; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).hasAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).primaryAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).infoAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).successAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).warningAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).dangerAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).basicAccent; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).controlAccent; _ck(_v, 5, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]); }); }
function View_AnnouncementsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-announcements", [], null, null, null, View_AnnouncementsComponent_0, RenderType_AnnouncementsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _announcements_component__WEBPACK_IMPORTED_MODULE_11__["AnnouncementsComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_14__["AnnouncementService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AnnouncementsComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-announcements", _announcements_component__WEBPACK_IMPORTED_MODULE_11__["AnnouncementsComponent"], View_AnnouncementsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/communication/announcements/announcements.component.scss.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/communication/announcements/announcements.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************/
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
var styles = ["input[type='file'][_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%] {\n  border-color: #ffd500; }\n\n.error[_ngcontent-%COMP%] {\n  color: #f00;\n  font-size: 75%; }"];



/***/ }),

/***/ "./src/app/pages/communication/announcements/announcements.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/communication/announcements/announcements.component.ts ***!
  \******************************************************************************/
/*! exports provided: AnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsComponent", function() { return AnnouncementsComponent; });
/* harmony import */ var _config_editor_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../config/editor.config */ "./src/app/config/editor.config.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/communication/announcement.service */ "./src/app/services/communication/announcement.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var AnnouncementsComponent = /** @class */ /*@__PURE__*/ (function () {
    function AnnouncementsComponent(fb, toastrService, location, api, active, announceService) {
        this.fb = fb;
        this.toastrService = toastrService;
        this.location = location;
        this.api = api;
        this.active = active;
        this.announceService = announceService;
        this.announcements = [];
        this.display = false;
        this.editorConfig = _config_editor_config__WEBPACK_IMPORTED_MODULE_0__["editorConfig"];
    }
    AnnouncementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.InstituteId = this.active.snapshot.paramMap.get('id');
        this.active.queryParams.subscribe(function (data) {
            _this.announcementId = data.announcement;
            _this.edit = data.edit;
            _this.repeat = data.repeat;
        });
        this.batches = [];
        this.categoryError = false;
        this.batchError = false;
        this.announcementForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            text: [''],
            instituteId: [this.InstituteId],
            batchCodes: [],
            categories: [],
        });
        this.getInstitute(this.InstituteId);
        this.getAnnouncements(this.InstituteId);
    };
    AnnouncementsComponent.prototype.getBatches = function (id) {
        var _this = this;
        this.api.getBatches(id).subscribe(function (data) {
            _this.batches = data.batch;
            if (_this.edit || _this.repeat) {
                _this.getSingleAnnouncement(_this.announcementId);
            }
            else {
                _this.display = true;
            }
        });
    };
    AnnouncementsComponent.prototype.openUrl = function (url) {
        window.open(url, '_system');
    };
    AnnouncementsComponent.prototype.getAnnouncements = function (id) {
        var _this = this;
        this.announceService.getAnnouncements(id).subscribe(function (data) {
            _this.announcements = data;
        });
    };
    AnnouncementsComponent.prototype.getSingleAnnouncement = function (id) {
        var _this = this;
        this.announceService.getSingleAnnouncement(id).subscribe(function (res) {
            _this.announcement = res;
            _this.announcementForm.patchValue({
                title: res.title,
                date: res.date,
                text: res.text,
                batchCodes: res.batchCodes,
                categories: res.categories,
            });
            _this.display = true;
        }, function (err) {
            _this.location.back();
        });
    };
    AnnouncementsComponent.prototype.onFilePicked = function (event) {
        var file = event.target.files[0];
        this.file = file;
    };
    AnnouncementsComponent.prototype.getInstitute = function (id) {
        var _this = this;
        this.api.getInstitute(id).subscribe(function (data) {
            _this.institute = data.institute;
            _this.getBatches(_this.InstituteId);
        });
    };
    AnnouncementsComponent.prototype.check = function (event) {
        var batches = [];
        if (event) {
            this.batches.forEach(function (batch) { return batches.push(batch.batchCode); });
            this.announcementForm.patchValue({ batchCodes: batches });
        }
        else {
            this.announcementForm.patchValue({ batchCodes: batches });
        }
    };
    AnnouncementsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.announcementForm.markAllAsTouched();
        if (this.announcementForm.invalid) {
            this.showToast('top-right', 'danger', 'Fill announcement fields Correctly');
            return;
        }
        else if (this.announcementForm.value.batchCodes.length < 1) {
            this.showToast('top-right', 'danger', 'Select at least One Batch');
            return;
        }
        else if (this.announcementForm.value.categories.length < 1) {
            this.showToast('top-right', 'danger', 'Select at least One Category');
            return;
        }
        var announce = new FormData();
        announce.append('title', this.announcementForm.value.title);
        announce.append('date', this.announcementForm.value.date);
        announce.append('text', this.announcementForm.value.text);
        announce.append('instituteId', this.announcementForm.value.instituteId);
        announce.append('batchCodes', JSON.stringify(this.announcementForm.value.batchCodes));
        announce.append('categories', JSON.stringify(this.announcementForm.value.categories));
        if (this.file) {
            announce.append('announcement', this.file, this.announcementForm.value.title);
        }
        if (this.edit) {
            announce.append('_id', this.announcementId);
            this.announceService.editAnnouncement(announce).subscribe(function (res) {
                _this.showToast('top-right', 'success', 'Announcement Edited Successfully');
                _this.location.back();
            }, function (err) {
                _this.showToast('top-right', 'danger', err.err.message);
            });
        }
        else if (this.repeat) {
            this.announceService.postAnnouncement(announce).subscribe(function (res) {
                _this.showToast('top-right', 'success', 'Announcement Repeated Successfully');
                _this.location.back();
            }, function (err) {
                _this.showToast('top-right', 'danger', err.err.message);
            });
        }
        else {
            this.announceService.postAnnouncement(announce).subscribe(function (res) {
                _this.showToast('top-right', 'success', 'Announcement Added Successfully');
                _this.location.back();
            }, function (err) {
                _this.showToast('top-right', 'danger', err.err.message);
            });
        }
    };
    AnnouncementsComponent.prototype.onSelectBatch = function (batches) {
        if (batches.length === 0) {
            this.batchError = true;
        }
        else {
            this.batchError = false;
        }
    };
    AnnouncementsComponent.prototype.onSelectCategory = function (categories) {
        if (categories.length === 0) {
            this.categoryError = true;
        }
        else {
            this.categoryError = false;
        }
    };
    AnnouncementsComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.announceService.deleteAnnouncement(id, this.InstituteId).subscribe(function (res) {
            var i = _this.announcements.findIndex(function (e) { return e._id === id; });
            if (i !== -1) {
                _this.announcements.splice(i, 1);
                _this.showToast('top-right', 'success', 'Announcement Deleted Successfully');
            }
            _this.getAnnouncements(_this.InstituteId);
        }, function (err) {
            _this.showToast('top-right', 'danger', 'Announcement Deletion Failed');
        });
    };
    AnnouncementsComponent.prototype.showToast = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    return AnnouncementsComponent;
}());



/***/ }),

/***/ "./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.ngfactory.js":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.ngfactory.js ***!
  \********************************************************************************************************************/
/*! exports provided: RenderType_ManageAnnouncementsComponent, View_ManageAnnouncementsComponent_0, View_ManageAnnouncementsComponent_Host_0, ManageAnnouncementsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ManageAnnouncementsComponent", function() { return RenderType_ManageAnnouncementsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ManageAnnouncementsComponent_0", function() { return View_ManageAnnouncementsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ManageAnnouncementsComponent_Host_0", function() { return View_ManageAnnouncementsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAnnouncementsComponentNgFactory", function() { return ManageAnnouncementsComponentNgFactory; });
/* harmony import */ var _manage_announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-announcements.component.scss.shim.ngstyle */ "./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_announcements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-announcements.component */ "./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.ts");
/* harmony import */ var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/communication/announcement.service */ "./src/app/services/communication/announcement.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */









var styles_ManageAnnouncementsComponent = [_manage_announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ManageAnnouncementsComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ManageAnnouncementsComponent, data: {} });

function View_ManageAnnouncementsComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["href", "#"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openUrl(_v.parent.context.$implicit.attachment.secure_url) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.attachment.file_name; _ck(_v, 1, 0, currVal_0); });
}
function View_ManageAnnouncementsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["--"]))], null, null); }
function View_ManageAnnouncementsComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 43, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ManageAnnouncementsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ManageAnnouncementsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 28, "div", [["class", "text-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 6, "button", [["class", "mr-3 mb-2"], ["nbButton", ""]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.onView(_v.context.$implicit._id) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 1, "span", [["class", "btnText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" View "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 2, "span", [["class", "btnIcon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "nb-icon", [["icon", "eye-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 6, "button", [["class", "mr-3 mb-2 btn-yellow"], ["nbButton", ""]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.edit(_v.context.$implicit._id) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 1, "span", [["class", "btnText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Edit "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 2, "span", [["class", "btnIcon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "nb-icon", [["icon", "edit-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 6, "button", [["class", "mr-3 mb-2"], ["nbButton", ""], ["status", "success"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.repeat(_v.context.$implicit._id) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { status: [0, "status"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 1, "span", [["class", "btnText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Repeat "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 2, "span", [["class", "btnIcon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "nb-icon", [["icon", "refresh-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 6, "button", [["class", "mb-2"], ["nbButton", ""], ["status", "danger"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.onDelete(_v.context.$implicit._id) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { status: [0, "status"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, 0, 1, "span", [["class", "btnText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Delete "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 0, 2, "span", [["class", "btnIcon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "nb-icon", [["icon", "trash-2-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null)], function (_ck, _v) { var currVal_3 = _v.context.$implicit.attachment; _ck(_v, 12, 0, currVal_3); var currVal_4 = !_v.context.$implicit.attachment; _ck(_v, 14, 0, currVal_4); var currVal_39 = "eye-outline"; _ck(_v, 22, 0, currVal_39); var currVal_74 = "edit-outline"; _ck(_v, 29, 0, currVal_74); var currVal_101 = "success"; _ck(_v, 31, 0, currVal_101); var currVal_110 = "refresh-outline"; _ck(_v, 36, 0, currVal_110); var currVal_137 = "danger"; _ck(_v, 38, 0, currVal_137); var currVal_146 = "trash-2-outline"; _ck(_v, 43, 0, currVal_146); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.index + 1); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.formatDate(_v.context.$implicit.title); _ck(_v, 6, 0, currVal_1); var currVal_2 = _v.context.$implicit.date; _ck(_v, 9, 0, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).filled; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).outline; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ghost; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).hero; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).fullWidth; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).tabbable; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).tiny; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).small; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).medium; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).large; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).giant; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).primary; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).info; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).success; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).warning; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).danger; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).basic; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).control; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).rectangle; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).round; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).semiRound; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).iconLeft; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).iconRight; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).transitions; _ck(_v, 16, 1, [currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30]); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).html; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).primary; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).info; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).success; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).warning; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).danger; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).basic; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).control; _ck(_v, 21, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).filled; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).outline; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ghost; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).hero; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).fullWidth; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).tabbable; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).tiny; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).small; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).medium; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).large; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).giant; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).primary; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).info; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).success; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).warning; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).danger; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).basic; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).control; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).rectangle; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).round; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).semiRound; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).iconLeft; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).iconRight; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).transitions; _ck(_v, 23, 1, [currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65]); var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).html; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).primary; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).info; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).success; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).warning; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).danger; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).basic; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).control; _ck(_v, 28, 0, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73); var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).filled; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).outline; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ghost; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).hero; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).fullWidth; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).disabled; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).disabled; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).tabbable; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).tiny; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).small; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).medium; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).large; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).giant; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).primary; var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).info; var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).success; var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).warning; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).danger; var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).basic; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).control; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).rectangle; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).round; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).semiRound; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).iconLeft; var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).iconRight; var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transitions; _ck(_v, 30, 1, [currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100]); var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).html; var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).primary; var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).info; var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).success; var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).warning; var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).danger; var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).basic; var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).control; _ck(_v, 35, 0, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109); var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).filled; var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).outline; var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ghost; var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).hero; var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).fullWidth; var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled; var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled; var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).tabbable; var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).tiny; var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).small; var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).medium; var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).large; var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).giant; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).primary; var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).info; var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).success; var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).warning; var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).danger; var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).basic; var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).control; var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).rectangle; var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).round; var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).semiRound; var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).iconLeft; var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).iconRight; var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).transitions; _ck(_v, 37, 1, [currVal_111, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136]); var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).html; var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).primary; var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).info; var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).success; var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).warning; var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).danger; var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).basic; var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).control; _ck(_v, 42, 0, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145); });
}
function View_ManageAnnouncementsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 16, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 15, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 14, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ID"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attachment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ManageAnnouncementsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcements; _ck(_v, 18, 0, currVal_0); }, null); }
function View_ManageAnnouncementsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Announcements"]))], null, null); }
function View_ManageAnnouncementsComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "nb-card", [["class", "mobileFullHeight"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 5, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Announcements "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "button", [["class", "btn btn-yellow-black float-right"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ADD ANNOUNCEMENT "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ManageAnnouncementsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noAnnouncements", 2]], 0, 0, null, View_ManageAnnouncementsComponent_6))], function (_ck, _v) { var _co = _v.component; var currVal_20 = ("/pages/communication/add-announcements/" + _co.instituteId); _ck(_v, 6, 0, currVal_20); var currVal_21 = (_co.announcements.length > 0); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12); _ck(_v, 11, 0, currVal_21, currVal_22); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); });
}
function View_ManageAnnouncementsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ManageAnnouncementsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.display; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ManageAnnouncementsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-manage-announcements", [], null, null, null, View_ManageAnnouncementsComponent_0, RenderType_ManageAnnouncementsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _manage_announcements_component__WEBPACK_IMPORTED_MODULE_7__["ManageAnnouncementsComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_8__["AnnouncementService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ManageAnnouncementsComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-manage-announcements", _manage_announcements_component__WEBPACK_IMPORTED_MODULE_7__["ManageAnnouncementsComponent"], View_ManageAnnouncementsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.scss.shim.ngstyle.js":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************************************************/
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
var styles = ["@media only screen and (max-width: 600px) {\n  button[_ngcontent-%COMP%] {\n    display: inline !important;\n    padding: 8px !important; } }"];



/***/ }),

/***/ "./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ManageAnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAnnouncementsComponent", function() { return ManageAnnouncementsComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/communication/announcement.service */ "./src/app/services/communication/announcement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ManageAnnouncementsComponent = /** @class */ /*@__PURE__*/ (function () {
    function ManageAnnouncementsComponent(toastrService, router, route, announceService) {
        this.toastrService = toastrService;
        this.router = router;
        this.route = route;
        this.announceService = announceService;
        this.announcements = [];
        this.display = false;
    }
    ManageAnnouncementsComponent.prototype.ngOnInit = function () {
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.getAnnouncement(this.instituteId);
    };
    ManageAnnouncementsComponent.prototype.onView = function (id) {
        this.router.navigate(['/pages/communication/view-announcements/', this.instituteId], {
            queryParams: { announcement: id },
        });
    };
    ManageAnnouncementsComponent.prototype.openUrl = function (url) {
        window.open(url, '_system');
    };
    ManageAnnouncementsComponent.prototype.repeat = function (id) {
        this.router.navigate(['/pages/communication/add-announcements/', this.instituteId], {
            queryParams: { announcement: id, repeat: true },
        });
    };
    ManageAnnouncementsComponent.prototype.edit = function (id) {
        this.router.navigate(['/pages/communication/add-announcements/', this.instituteId], {
            queryParams: { announcement: id, edit: true },
        });
    };
    ManageAnnouncementsComponent.prototype.getAnnouncement = function (id) {
        var _this = this;
        this.announceService.getAnnouncements(id).subscribe(function (data) {
            _this.announcements = data;
            _this.display = true;
        });
    };
    ManageAnnouncementsComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.announceService.deleteAnnouncement(id, this.instituteId).subscribe(function (res) {
            var i = _this.announcements.findIndex(function (e) { return e._id === id; });
            if (i !== -1) {
                _this.announcements.splice(i, 1);
            }
            _this.showToast('top-right', 'success', 'Announcement Deleted Successfully');
        }, function (err) {
            _this.showToast('top-right', 'danger', 'Announcement Deletion Failed');
        });
    };
    ManageAnnouncementsComponent.prototype.formatDate = function (date) {
        return date.split('-').reverse().join('-');
    };
    ManageAnnouncementsComponent.prototype.showToast = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    return ManageAnnouncementsComponent;
}());



/***/ }),

/***/ "./src/app/pages/communication/announcements/view-announcements/view-announcements.component.ngfactory.js":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/communication/announcements/view-announcements/view-announcements.component.ngfactory.js ***!
  \****************************************************************************************************************/
/*! exports provided: RenderType_ViewAnnouncementsComponent, View_ViewAnnouncementsComponent_0, View_ViewAnnouncementsComponent_Host_0, ViewAnnouncementsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ViewAnnouncementsComponent", function() { return RenderType_ViewAnnouncementsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewAnnouncementsComponent_0", function() { return View_ViewAnnouncementsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewAnnouncementsComponent_Host_0", function() { return View_ViewAnnouncementsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAnnouncementsComponentNgFactory", function() { return ViewAnnouncementsComponentNgFactory; });
/* harmony import */ var _view_announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-announcements.component.scss.shim.ngstyle */ "./src/app/pages/communication/announcements/view-announcements/view-announcements.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pipe/safe-html.pipe */ "./src/app/pipe/safe-html.pipe.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _view_announcements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-announcements.component */ "./src/app/pages/communication/announcements/view-announcements/view-announcements.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/communication/announcement.service */ "./src/app/services/communication/announcement.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */










var styles_ViewAnnouncementsComponent = [_view_announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ViewAnnouncementsComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ViewAnnouncementsComponent, data: {} });

function View_ViewAnnouncementsComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["href", "#"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openUrl(_co.announcement.attachment.secure_url) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcement.attachment.file_name; _ck(_v, 2, 0, currVal_0); });
}
function View_ViewAnnouncementsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcement.batchCodes.join(","); _ck(_v, 1, 0, currVal_0); }); }
function View_ViewAnnouncementsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcement.categories.join(","); _ck(_v, 1, 0, currVal_0); }); }
function View_ViewAnnouncementsComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 30, "nb-card", [["class", "mobileFullHeight"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 22, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "button", [["class", "btn btn-yellow float-right"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.manageAnnouncement() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Back"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ViewAnnouncementsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 14, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Batches: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewAnnouncementsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Categories: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewAnnouncementsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 1, 5, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 1, "div", [["style", "font-weight: bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Announcement Details:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](30, 1)], function (_ck, _v) { var _co = _v.component; var currVal_21 = _co.announcement.attachment; _ck(_v, 9, 0, currVal_21); var currVal_23 = _co.announcement.batchCodes; _ck(_v, 19, 0, currVal_23); var currVal_24 = _co.announcement.categories; _ck(_v, 24, 0, currVal_24); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_20 = _co.announcement.title; _ck(_v, 7, 0, currVal_20); var currVal_22 = _co.announcement.date; _ck(_v, 14, 0, currVal_22); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 29, 0, _ck(_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.announcement.text)); _ck(_v, 29, 0, currVal_25); });
}
function View_ViewAnnouncementsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewAnnouncementsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.display; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ViewAnnouncementsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-view-announcements", [], null, null, null, View_ViewAnnouncementsComponent_0, RenderType_ViewAnnouncementsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _view_announcements_component__WEBPACK_IMPORTED_MODULE_7__["ViewAnnouncementsComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_9__["AnnouncementService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ViewAnnouncementsComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-view-announcements", _view_announcements_component__WEBPACK_IMPORTED_MODULE_7__["ViewAnnouncementsComponent"], View_ViewAnnouncementsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/communication/announcements/view-announcements/view-announcements.component.scss.shim.ngstyle.js":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/communication/announcements/view-announcements/view-announcements.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************************************/
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
var styles = [""];



/***/ }),

/***/ "./src/app/pages/communication/announcements/view-announcements/view-announcements.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/communication/announcements/view-announcements/view-announcements.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ViewAnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAnnouncementsComponent", function() { return ViewAnnouncementsComponent; });
/* harmony import */ var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../services/communication/announcement.service */ "./src/app/services/communication/announcement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ViewAnnouncementsComponent = /** @class */ /*@__PURE__*/ (function () {
    function ViewAnnouncementsComponent(toastrService, route, location, announceService) {
        this.toastrService = toastrService;
        this.route = route;
        this.location = location;
        this.announceService = announceService;
    }
    ViewAnnouncementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.display = false;
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe(function (data) {
            _this.announcementId = data.announcement;
        });
        if (this.announcementId) {
            this.getAnnouncement(this.announcementId);
        }
        else {
            this.location.back();
        }
    };
    ViewAnnouncementsComponent.prototype.getAnnouncement = function (id) {
        var _this = this;
        this.announceService.getSingleAnnouncement(this.announcementId).subscribe(function (res) {
            _this.announcement = res;
            _this.display = true;
        }, function (err) {
            _this.showToast('top-right', 'danger', 'Announcement Not Found');
            _this.location.back();
        });
    };
    ViewAnnouncementsComponent.prototype.manageAnnouncement = function () {
        this.location.back();
    };
    ViewAnnouncementsComponent.prototype.openUrl = function (url) {
        window.open(url, '_system');
    };
    ViewAnnouncementsComponent.prototype.showToast = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    return ViewAnnouncementsComponent;
}());



/***/ }),

/***/ "./src/app/pages/communication/communication.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/communication/communication.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_CommunicationComponent, View_CommunicationComponent_0, View_CommunicationComponent_Host_0, CommunicationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CommunicationComponent", function() { return RenderType_CommunicationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CommunicationComponent_0", function() { return View_CommunicationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CommunicationComponent_Host_0", function() { return View_CommunicationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComponentNgFactory", function() { return CommunicationComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _communication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communication.component */ "./src/app/pages/communication/communication.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



var styles_CommunicationComponent = [];
var RenderType_CommunicationComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CommunicationComponent, data: {} });

function View_CommunicationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_CommunicationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ngx-communication", [], null, null, null, View_CommunicationComponent_0, RenderType_CommunicationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _communication_component__WEBPACK_IMPORTED_MODULE_2__["CommunicationComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CommunicationComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ngx-communication", _communication_component__WEBPACK_IMPORTED_MODULE_2__["CommunicationComponent"], View_CommunicationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/communication/communication.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/communication/communication.component.ts ***!
  \****************************************************************/
/*! exports provided: CommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComponent", function() { return CommunicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CommunicationComponent = /** @class */ /*@__PURE__*/ (function () {
    function CommunicationComponent() {
    }
    CommunicationComponent.prototype.ngOnInit = function () { };
    return CommunicationComponent;
}());



/***/ }),

/***/ "./src/app/pages/communication/communication/comm-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/communication/communication/comm-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CommRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommRoutingModule", function() { return CommRoutingModule; });
/* harmony import */ var _announcements_view_announcements_view_announcements_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../announcements/view-announcements/view-announcements.component */ "./src/app/pages/communication/announcements/view-announcements/view-announcements.component.ts");
/* harmony import */ var _announcements_manage_announcements_manage_announcements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../announcements/manage-announcements/manage-announcements.component */ "./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _communication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../communication.component */ "./src/app/pages/communication/communication.component.ts");
/* harmony import */ var _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../announcements/announcements.component */ "./src/app/pages/communication/announcements/announcements.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forum/forum.component */ "./src/app/pages/communication/forum/forum.component.ts");
/* harmony import */ var _forum_add_forum_add_forum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forum/add-forum/add-forum.component */ "./src/app/pages/communication/forum/add-forum/add-forum.component.ts");
/* harmony import */ var _forum_my_forum_my_forum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forum/my-forum/my-forum.component */ "./src/app/pages/communication/forum/my-forum/my-forum.component.ts");
/* harmony import */ var _forum_forum_details_forum_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forum/forum-details/forum-details.component */ "./src/app/pages/communication/forum/forum-details/forum-details.component.ts");









var routes = [
    {
        path: '',
        component: _communication_component__WEBPACK_IMPORTED_MODULE_3__["CommunicationComponent"],
        children: [
            { path: 'announcements/:id', component: _announcements_manage_announcements_manage_announcements_component__WEBPACK_IMPORTED_MODULE_1__["ManageAnnouncementsComponent"] },
            { path: 'view-announcements/:id', component: _announcements_view_announcements_view_announcements_component__WEBPACK_IMPORTED_MODULE_0__["ViewAnnouncementsComponent"] },
            { path: 'add-announcements/:id', component: _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_4__["AnnouncementsComponent"] },
            { path: 'forum/:id', component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_5__["ForumComponent"] },
            { path: 'add-forum/:id', component: _forum_add_forum_add_forum_component__WEBPACK_IMPORTED_MODULE_6__["AddForumComponent"] },
            { path: 'my-forum/:id', component: _forum_my_forum_my_forum_component__WEBPACK_IMPORTED_MODULE_7__["MyForumComponent"] },
            { path: 'forum-detail/:id', component: _forum_forum_details_forum_details_component__WEBPACK_IMPORTED_MODULE_8__["ForumDetailsComponent"] },
        ],
    },
];
var CommRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function CommRoutingModule() {
    }
    return CommRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/communication/communication/communication.module.ngfactory.js":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/communication/communication/communication.module.ngfactory.js ***!
  \*************************************************************************************/
/*! exports provided: CommunicationModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationModuleNgFactory", function() { return CommunicationModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _communication_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication.module */ "./src/app/pages/communication/communication/communication.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _communication_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../communication.component.ngfactory */ "./src/app/pages/communication/communication.component.ngfactory.js");
/* harmony import */ var _announcements_manage_announcements_manage_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../announcements/manage-announcements/manage-announcements.component.ngfactory */ "./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.ngfactory.js");
/* harmony import */ var _announcements_view_announcements_view_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../announcements/view-announcements/view-announcements.component.ngfactory */ "./src/app/pages/communication/announcements/view-announcements/view-announcements.component.ngfactory.js");
/* harmony import */ var _announcements_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../announcements/announcements.component.ngfactory */ "./src/app/pages/communication/announcements/announcements.component.ngfactory.js");
/* harmony import */ var _forum_forum_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forum/forum.component.ngfactory */ "./src/app/pages/communication/forum/forum.component.ngfactory.js");
/* harmony import */ var _forum_add_forum_add_forum_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forum/add-forum/add-forum.component.ngfactory */ "./src/app/pages/communication/forum/add-forum/add-forum.component.ngfactory.js");
/* harmony import */ var _forum_my_forum_my_forum_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forum/my-forum/my-forum.component.ngfactory */ "./src/app/pages/communication/forum/my-forum/my-forum.component.ngfactory.js");
/* harmony import */ var _forum_forum_details_forum_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../forum/forum-details/forum-details.component.ngfactory */ "./src/app/pages/communication/forum/forum-details/forum-details.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _comm_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comm-routing.module */ "./src/app/pages/communication/communication/comm-routing.module.ts");
/* harmony import */ var _services_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/shared.module */ "./src/app/services/shared.module.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _communication_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../communication.component */ "./src/app/pages/communication/communication.component.ts");
/* harmony import */ var _announcements_manage_announcements_manage_announcements_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../announcements/manage-announcements/manage-announcements.component */ "./src/app/pages/communication/announcements/manage-announcements/manage-announcements.component.ts");
/* harmony import */ var _announcements_view_announcements_view_announcements_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../announcements/view-announcements/view-announcements.component */ "./src/app/pages/communication/announcements/view-announcements/view-announcements.component.ts");
/* harmony import */ var _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../announcements/announcements.component */ "./src/app/pages/communication/announcements/announcements.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../forum/forum.component */ "./src/app/pages/communication/forum/forum.component.ts");
/* harmony import */ var _forum_add_forum_add_forum_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../forum/add-forum/add-forum.component */ "./src/app/pages/communication/forum/add-forum/add-forum.component.ts");
/* harmony import */ var _forum_my_forum_my_forum_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../forum/my-forum/my-forum.component */ "./src/app/pages/communication/forum/my-forum/my-forum.component.ts");
/* harmony import */ var _forum_forum_details_forum_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../forum/forum-details/forum-details.component */ "./src/app/pages/communication/forum/forum-details/forum-details.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */































var CommunicationModuleNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_communication_module__WEBPACK_IMPORTED_MODULE_1__["CommunicationModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _communication_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CommunicationComponentNgFactory"], _announcements_manage_announcements_manage_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ManageAnnouncementsComponentNgFactory"], _announcements_view_announcements_view_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ViewAnnouncementsComponentNgFactory"], _announcements_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AnnouncementsComponentNgFactory"], _forum_forum_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ForumComponentNgFactory"], _forum_add_forum_add_forum_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AddForumComponentNgFactory"], _forum_my_forum_my_forum_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["MyForumComponentNgFactory"], _forum_forum_details_forum_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ForumDetailsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbRestoreScrollTopHelper"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _comm_routing_module__WEBPACK_IMPORTED_MODULE_17__["CommRoutingModule"], _comm_routing_module__WEBPACK_IMPORTED_MODULE_17__["CommRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["ɵc"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbIconModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _services_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _services_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_19__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_19__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCdkMappingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCdkMappingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCdkAdapterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCdkAdapterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbOverlayModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_22__["AngularEditorModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_22__["AngularEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _communication_module__WEBPACK_IMPORTED_MODULE_1__["CommunicationModule"], _communication_module__WEBPACK_IMPORTED_MODULE_1__["CommunicationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () { return [[{ path: "", component: _communication_component__WEBPACK_IMPORTED_MODULE_23__["CommunicationComponent"], children: [{ path: "announcements/:id", component: _announcements_manage_announcements_manage_announcements_component__WEBPACK_IMPORTED_MODULE_24__["ManageAnnouncementsComponent"] }, { path: "view-announcements/:id", component: _announcements_view_announcements_view_announcements_component__WEBPACK_IMPORTED_MODULE_25__["ViewAnnouncementsComponent"] }, { path: "add-announcements/:id", component: _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_26__["AnnouncementsComponent"] }, { path: "forum/:id", component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_27__["ForumComponent"] }, { path: "add-forum/:id", component: _forum_add_forum_add_forum_component__WEBPACK_IMPORTED_MODULE_28__["AddForumComponent"] }, { path: "my-forum/:id", component: _forum_my_forum_my_forum_component__WEBPACK_IMPORTED_MODULE_29__["MyForumComponent"] }, { path: "forum-detail/:id", component: _forum_forum_details_forum_details_component__WEBPACK_IMPORTED_MODULE_30__["ForumDetailsComponent"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/pages/communication/communication/communication.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/communication/communication/communication.module.ts ***!
  \***************************************************************************/
/*! exports provided: CommunicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationModule", function() { return CommunicationModule; });
var CommunicationModule = /** @class */ /*@__PURE__*/ (function () {
    function CommunicationModule() {
    }
    return CommunicationModule;
}());



/***/ }),

/***/ "./src/app/pages/communication/forum/add-forum/add-forum.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/communication/forum/add-forum/add-forum.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_AddForumComponent, View_AddForumComponent_0, View_AddForumComponent_Host_0, AddForumComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AddForumComponent", function() { return RenderType_AddForumComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddForumComponent_0", function() { return View_AddForumComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddForumComponent_Host_0", function() { return View_AddForumComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddForumComponentNgFactory", function() { return AddForumComponentNgFactory; });
/* harmony import */ var _add_forum_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-forum.component.scss.shim.ngstyle */ "./src/app/pages/communication/forum/add-forum/add-forum.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@kolkov/angular-editor/kolkov-angular-editor.ngfactory */ "./node_modules/@kolkov/angular-editor/kolkov-angular-editor.ngfactory.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _add_forum_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-forum.component */ "./src/app/pages/communication/forum/add-forum/add-forum.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/auth-services/auth.service */ "./src/app/services/auth-services/auth.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */














var styles_AddForumComponent = [_add_forum_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AddForumComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AddForumComponent, data: {} });

function View_AddForumComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*Topic Required"]))], null, null); }
function View_AddForumComponent_2(_l) {
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
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_3 = _v.context.$implicit._id; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_4); });
}
function View_AddForumComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*Description is Required"]))], null, null); }
function View_AddForumComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 63, "nb-card", [["class", "mobileFullHeight"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 6, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "button", [["class", "btn btn-yellow-black float-right"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.back() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Forum Page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [["style", "font-weight: bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Forum"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 1, 54, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 52, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("submit" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngSubmit" === en)) {
                var pd_2 = (_co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 29, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 11, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "label", [["for", "topic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*Topic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 6, "input", [["formControlName", "topic"], ["fullWidth", ""], ["id", "topic"], ["nbInput", ""], ["placeholder", "Topic"], ["status", "basic"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { status: [0, "status"], fullWidth: [1, "fullWidth"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddForumComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 16, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "label", [["for", "course"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 13, "nb-select", [["formControlName", "courseId"], ["fullWidth", "true"], ["id", "course"], ["placeholder", "Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], { status: [0, "status"], fullWidth: [1, "fullWidth"], placeholder: [2, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { customLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keydown.space" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onClick($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("keydown.enter" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onClick($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Select Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddForumComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 11, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "label", [["for", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["*Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 6, "angular-editor", [["formControlName", "description"], ["id", "description"], ["placeholder", "Enter text here..."], ["rows", "2"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("focus" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onFocus() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_AngularEditorComponent_0"], _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_AngularEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 4440064, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], [8, null]], { id: [0, "id"], placeholder: [1, "placeholder"] }, { focusEvent: "focus" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddForumComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 2, "div", [["style", "text-align: right; margin: 1rem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "button", [["class", "btn btn-yellow-black"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](63, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_27 = _co.forumForm; _ck(_v, 13, 0, currVal_27); var currVal_51 = "topic"; _ck(_v, 23, 0, currVal_51); var currVal_52 = ((_co.f.topic.errors && _co.submitted) ? "danger" : "basic"); var currVal_53 = ""; _ck(_v, 26, 0, currVal_52, currVal_53); var currVal_54 = (_co.f.topic.errors && _co.submitted); _ck(_v, 28, 0, currVal_54); var currVal_82 = "basic"; var currVal_83 = "true"; var currVal_84 = "Course"; _ck(_v, 33, 0, currVal_82, currVal_83, currVal_84); var currVal_85 = "courseId"; _ck(_v, 37, 0, currVal_85); var currVal_89 = ""; _ck(_v, 42, 0, currVal_89); var currVal_90 = _co.courses; _ck(_v, 45, 0, currVal_90); var currVal_99 = "description"; var currVal_100 = "Enter text here..."; _ck(_v, 54, 0, currVal_99, currVal_100); var currVal_101 = "description"; _ck(_v, 56, 0, currVal_101); var currVal_102 = (_co.f.description.errors && _co.submitted); _ck(_v, 60, 0, currVal_102); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).fullWidth; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).tiny; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).small; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).medium; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).large; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).giant; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).primary; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).info; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).success; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).warning; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).danger; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).basic; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).control; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).rectangle; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).semiRound; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).round; _ck(_v, 20, 1, [currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50]); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).outline; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).filled; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).hero; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).fullWidth; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).isOpen; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).tiny; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).small; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).medium; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).large; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).giant; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).primary; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).info; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).success; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).warning; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).danger; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).basic; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).control; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).rectangle; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).round; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).semiRound; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassUntouched; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassTouched; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassPristine; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassDirty; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassValid; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassInvalid; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassPending; _ck(_v, 32, 1, [currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81]); var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).selectedClass; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).disabledAttribute; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).tabindex; _ck(_v, 41, 0, currVal_86, currVal_87, currVal_88); var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).tabindex; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassUntouched; var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassTouched; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPristine; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassDirty; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassValid; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassInvalid; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPending; _ck(_v, 52, 0, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98); var currVal_103 = (_co.edit ? "Update" : "Add"); _ck(_v, 63, 0, currVal_103); });
}
function View_AddForumComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-add-forum", [], null, null, null, View_AddForumComponent_0, RenderType_AddForumComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_forum_component__WEBPACK_IMPORTED_MODULE_10__["AddForumComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddForumComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-add-forum", _add_forum_component__WEBPACK_IMPORTED_MODULE_10__["AddForumComponent"], View_AddForumComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/communication/forum/add-forum/add-forum.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/communication/forum/add-forum/add-forum.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
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
var styles = ["input[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%] {\n  display: block; }"];



/***/ }),

/***/ "./src/app/pages/communication/forum/add-forum/add-forum.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/communication/forum/add-forum/add-forum.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddForumComponent", function() { return AddForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth-services/auth.service */ "./src/app/services/auth-services/auth.service.ts");







var AddForumComponent = /** @class */ /*@__PURE__*/ (function () {
    function AddForumComponent(fb, api, active, router, toasterService, location, authService) {
        this.fb = fb;
        this.api = api;
        this.active = active;
        this.router = router;
        this.toasterService = toasterService;
        this.location = location;
        this.authService = authService;
        this.submitted = false;
    }
    AddForumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instituteId = this.active.snapshot.paramMap.get('id');
        this.active.queryParams.subscribe(function (data) {
            _this.forumId = data.forumId;
            _this.edit = data.edit;
            if (_this.edit === 'true') {
                _this.getForum();
            }
        });
        this.forumForm = this.fb.group({
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            courseId: [''],
        });
        this.getCourses();
    };
    AddForumComponent.prototype.getCourses = function () {
        var _this = this;
        this.api.getCourseTD(this.instituteId).subscribe(function (data) {
            _this.courses = data.course;
        }, function (err) { return console.error(err); });
    };
    AddForumComponent.prototype.getForum = function () {
        var _this = this;
        this.api.getSingleForum({ _id: this.forumId }).subscribe(function (data) {
            _this.forumForm.patchValue({
                topic: data.title,
                description: data.description,
                courseId: data.courseId,
            });
        }, function (err) { return console.error(err); });
    };
    Object.defineProperty(AddForumComponent.prototype, "f", {
        get: function () {
            return this.forumForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddForumComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.forumForm.markAllAsTouched();
        if (this.forumForm.invalid) {
            return;
        }
        var forumReq = {
            instituteId: this.instituteId,
            courseId: this.forumForm.get('courseId').value,
            createdBy: this.authService.getUser()._id,
            createdByName: this.authService.getUser().name,
            title: this.forumForm.get('topic').value,
            description: this.forumForm.get('description').value,
            _id: this.forumId,
        };
        if (this.edit === 'true') {
            this.api.updateForum(forumReq).subscribe(function (data) {
                _this.showToast('top-right', 'success', 'Forum Updated Successfully');
                _this.router.navigate(['/pages/communication/forum/', _this.instituteId]);
            }, function (err) {
                _this.showToast('top-right', 'danger', err.error.message);
            });
        }
        if (!this.edit) {
            this.api.addForum(forumReq).subscribe(function () {
                _this.showToast('top-right', 'success', 'Forum Added Successfully');
                _this.router.navigate(['/pages/communication/forum/', _this.instituteId]);
            }, function (err) {
                _this.showToast('top-right', 'danger', err.error.message);
            });
        }
    };
    AddForumComponent.prototype.back = function () {
        var confirm = true;
        if (this.forumForm.touched) {
            confirm = window.confirm('If you go back the data will be lost.');
        }
        if (confirm) {
            this.location.back();
        }
    };
    AddForumComponent.prototype.showToast = function (position, status, message) {
        this.toasterService.show(status, message, { position: position, status: status });
    };
    return AddForumComponent;
}());



/***/ }),

/***/ "./src/app/pages/communication/forum/forum-details/forum-details.component.ngfactory.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/communication/forum/forum-details/forum-details.component.ngfactory.js ***!
  \**********************************************************************************************/
/*! exports provided: RenderType_ForumDetailsComponent, View_ForumDetailsComponent_0, View_ForumDetailsComponent_Host_0, ForumDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ForumDetailsComponent", function() { return RenderType_ForumDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ForumDetailsComponent_0", function() { return View_ForumDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ForumDetailsComponent_Host_0", function() { return View_ForumDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumDetailsComponentNgFactory", function() { return ForumDetailsComponentNgFactory; });
/* harmony import */ var _forum_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forum-details.component.scss.shim.ngstyle */ "./src/app/pages/communication/forum/forum-details/forum-details.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../pipe/safe-html.pipe */ "./src/app/pipe/safe-html.pipe.ts");
/* harmony import */ var _forum_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum-details.component */ "./src/app/pages/communication/forum/forum-details/forum-details.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/auth-services/auth.service */ "./src/app/services/auth-services/auth.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */












var styles_ForumDetailsComponent = [_forum_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ForumDetailsComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ForumDetailsComponent, data: {} });

function View_ForumDetailsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course Name : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.forumCommentData.courseName; _ck(_v, 4, 0, currVal_0); }); }
function View_ForumDetailsComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "deleteComment"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.deleteComment(_v.parent.context.$implicit._id) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "nb-icon", [["icon", "trash-2-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null)], function (_ck, _v) { var currVal_8 = "trash-2-outline"; _ck(_v, 2, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).html; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).primary; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).info; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).success; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).warning; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).danger; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).basic; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).control; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); });
}
function View_ForumDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "commentBox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comment By : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comment At : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [["class", "my-4"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ForumDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = (_v.context.$implicit.userId == _co.authService.getUser()._id); _ck(_v, 15, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.userName; _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.getFormattedDateTime(_v.context.$implicit.commentDate); _ck(_v, 11, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.comment)); _ck(_v, 12, 0, currVal_2); }); }
function View_ForumDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["You Are The First One To Comment"]))], null, null); }
function View_ForumDetailsComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 46, "nb-card", [["status", "info"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], { status: [0, "status"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 22, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "div", [["class", "row mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "col-md-12"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Created By :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Created at :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ForumDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 1, 21, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ForumDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ForumDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 0, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 9, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "label", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Your Comment :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 6, "textarea", [["fullWidth", ""], ["nbInput", ""], ["placeholder", "Enter text here..."], ["rows", "2"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_4 = ((_co.userComment = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { fullWidth: [0, "fullWidth"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 1, "button", [["class", "float-right mt-3 btn btn-yellow-black"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.submitComment() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Submit "]))], function (_ck, _v) { var _co = _v.component; var currVal_20 = "info"; _ck(_v, 1, 0, currVal_20); var currVal_25 = _co.forumCommentData.courseName; _ck(_v, 24, 0, currVal_25); var currVal_26 = _co.forumCommentData.comments; _ck(_v, 29, 0, currVal_26); var currVal_27 = (_co.forumCommentData.comments.length === 0); _ck(_v, 31, 0, currVal_27); var currVal_51 = _co.userComment; _ck(_v, 40, 0, currVal_51); var currVal_52 = ""; _ck(_v, 43, 0, currVal_52); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_21 = _co.forumCommentData.title; _ck(_v, 7, 0, currVal_21); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), ("Description :" + _co.forumCommentData.description))); _ck(_v, 9, 0, currVal_22); var currVal_23 = _co.forumCommentData.createdByName; _ck(_v, 17, 0, currVal_23); var currVal_24 = _co.getFormattedDateTime(_co.forumCommentData.date); _ck(_v, 22, 0, currVal_24); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassUntouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassTouched; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassPristine; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassDirty; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassValid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassInvalid; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassPending; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).fullWidth; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).tiny; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).small; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).medium; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).large; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).giant; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).primary; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).info; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).success; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).warning; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).danger; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).basic; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).control; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).rectangle; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).semiRound; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).round; _ck(_v, 37, 1, [currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50]); });
}
function View_ForumDetailsComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeHtmlPipe"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "py-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "button", [["class", "btn btn-yellow-black float-right"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.back(_co.instituteId) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Back"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ForumDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.forumCommentData; _ck(_v, 7, 0, currVal_0); }, null);
}
function View_ForumDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-forum", [], null, null, null, View_ForumDetailsComponent_0, RenderType_ForumDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _forum_details_component__WEBPACK_IMPORTED_MODULE_8__["ForumDetailsComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ForumDetailsComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-forum", _forum_details_component__WEBPACK_IMPORTED_MODULE_8__["ForumDetailsComponent"], View_ForumDetailsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/communication/forum/forum-details/forum-details.component.scss.shim.ngstyle.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/communication/forum/forum-details/forum-details.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************************/
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
var styles = [".commentBox[_ngcontent-%COMP%] {\n  background-color: #f1efef;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 10px;\n  position: relative; }\n\n.commentBox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold; }\n\n.commentBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold; }\n\n.deleteComment[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  cursor: pointer; }\n\n.deleteComment[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: red; }"];



/***/ }),

/***/ "./src/app/pages/communication/forum/forum-details/forum-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/communication/forum/forum-details/forum-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: ForumDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumDetailsComponent", function() { return ForumDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth-services/auth.service */ "./src/app/services/auth-services/auth.service.ts");





var ForumDetailsComponent = /** @class */ /*@__PURE__*/ (function () {
    function ForumDetailsComponent(api, router, route, toasterService, authService) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.toasterService = toasterService;
        this.authService = authService;
        this.messages = [];
    }
    ForumDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe(function (data) {
            _this.forumId = data.forumId;
            _this.getForum();
        });
    };
    ForumDetailsComponent.prototype.getForum = function () {
        var _this = this;
        this.api.getSingleForum({ _id: this.forumId }).subscribe(function (data) {
            _this.forumCommentData = data;
        }, function (err) { return console.error(err); });
    };
    ForumDetailsComponent.prototype.submitComment = function () {
        var _this = this;
        if (!this.userComment) {
            return;
        }
        var comment = {
            userId: this.authService.getUser()._id,
            userName: this.authService.getUser().name,
            comment: this.userComment,
        };
        this.api.addComment({ _id: this.forumId, comment: comment }).subscribe(function (data) {
            _this.userComment = null;
            _this.showToast('top-right', 'success', 'Comment Added Succesfully');
            _this.getForum();
        }, function (err) { return console.error(err); });
    };
    ForumDetailsComponent.prototype.getFormattedDateTime = function (dateTime) {
        var date = new Date(dateTime);
        return (date.getDate() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getFullYear() +
            ' : ' +
            date.getHours() +
            ':' +
            date.getMinutes());
    };
    ForumDetailsComponent.prototype.back = function (id) {
        this.router.navigate(["/pages/communication/forum/" + this.instituteId], {
            queryParams: { forumId: id, edit: true },
        });
    };
    ForumDetailsComponent.prototype.deleteComment = function (commentId) {
        var _this = this;
        if (window.confirm('Do you want to delete your comment ?')) {
            this.api
                .deleteComment({ _id: this.forumId, commentId: commentId, userId: this.authService.getUser()._id })
                .subscribe(function (data) {
                _this.showToast('top-right', 'success', 'Comment Deleted Succesfully');
                _this.getForum();
            }, function (err) { return _this.showToast('top-right', 'danger', err.error.message); });
        }
    };
    ForumDetailsComponent.prototype.showToast = function (position, status, message) {
        this.toasterService.show(status, message, { position: position, status: status });
    };
    return ForumDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/communication/forum/forum.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/pages/communication/forum/forum.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_ForumComponent, View_ForumComponent_0, View_ForumComponent_Host_0, ForumComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ForumComponent", function() { return RenderType_ForumComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ForumComponent_0", function() { return View_ForumComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ForumComponent_Host_0", function() { return View_ForumComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponentNgFactory", function() { return ForumComponentNgFactory; });
/* harmony import */ var _forum_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forum.component.scss.shim.ngstyle */ "./src/app/pages/communication/forum/forum.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _forum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forum.component */ "./src/app/pages/communication/forum/forum.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */










var styles_ForumComponent = [_forum_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ForumComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ForumComponent, data: {} });

function View_ForumComponent_2(_l) {
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
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_3 = _v.context.$implicit._id; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_4); });
}
function View_ForumComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "row mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Forum"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 11, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("selectedChange" === en)) {
                var pd_0 = (_co.onSelectCourse($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], { status: [0, "status"], fullWidth: [1, "fullWidth"], placeholder: [2, "placeholder"] }, { selectedChange: "selectedChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { customLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
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
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["All"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_ForumComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_20 = "basic"; var currVal_21 = ""; var currVal_22 = "Select Course"; _ck(_v, 7, 0, currVal_20, currVal_21, currVal_22); var currVal_26 = ""; _ck(_v, 12, 0, currVal_26); var currVal_27 = _co.courses; _ck(_v, 15, 0, currVal_27); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).outline; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).filled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).hero; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).fullWidth; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).isOpen; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).tiny; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).small; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).medium; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).large; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).giant; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).primary; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).info; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).success; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).warning; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).danger; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).basic; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).control; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).rectangle; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).round; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).semiRound; _ck(_v, 5, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).selectedClass; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabledAttribute; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tabindex; _ck(_v, 11, 0, currVal_23, currVal_24, currVal_25); });
}
function View_ForumComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "td", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "button", [["class", "mr-3 mb-2 btn btn-yellow-black"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.comment(_v.context.$implicit._id) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "btnText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Comment "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "span", [["class", "btnIcon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "nb-icon", [["icon", "message-square-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null)], function (_ck, _v) { var currVal_12 = "message-square-outline"; _ck(_v, 15, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.courseId; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.date; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.createdByName; _ck(_v, 8, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).html; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).control; _ck(_v, 14, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); });
}
function View_ForumComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "table", [["class", "table table-borderless text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Created By"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ForumComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.allForums; _ck(_v, 13, 0, currVal_0); }, null); }
function View_ForumComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-5 mb-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Record Found"]))], null, null); }
function View_ForumComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 5, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "button", [["class", "btn btn-yellow-black float-right"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addForum() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add Forum Thread"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 1, "button", [["class", "btn btn-yellow-black float-right paddingBtn"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.myForum() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" My Forums "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 10, "nb-card", [["class", "mobileFullHeight"], ["status", "info"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], { status: [0, "status"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 3, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ForumComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ForumComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noForums", 2]], 0, 0, null, View_ForumComponent_5))], function (_ck, _v) { var _co = _v.component; var currVal_40 = "info"; _ck(_v, 9, 0, currVal_40); var currVal_41 = _co.courses; _ck(_v, 13, 0, currVal_41); var currVal_42 = (_co.allForums.length > 0); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18); _ck(_v, 17, 0, currVal_42, currVal_43); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).tiny; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).small; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).medium; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).large; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).giant; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).primary; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).info; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).success; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).warning; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).danger; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).basic; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).control; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).hasAccent; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).primaryAccent; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).infoAccent; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).successAccent; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).warningAccent; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).dangerAccent; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).basicAccent; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).controlAccent; _ck(_v, 8, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]); });
}
function View_ForumComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-forum", [], null, null, null, View_ForumComponent_0, RenderType_ForumComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _forum_component__WEBPACK_IMPORTED_MODULE_7__["ForumComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ForumComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-forum", _forum_component__WEBPACK_IMPORTED_MODULE_7__["ForumComponent"], View_ForumComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/communication/forum/forum.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/pages/communication/forum/forum.component.scss.shim.ngstyle.js ***!
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
var styles = [".paddingBtn[_ngcontent-%COMP%] {\n  margin-right: 20px; }\n\n@media only screen and (max-width: 600px) {\n  .paddingBtn[_ngcontent-%COMP%] {\n    margin-right: 10px; } }"];



/***/ }),

/***/ "./src/app/pages/communication/forum/forum.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/communication/forum/forum.component.ts ***!
  \**************************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ForumComponent = /** @class */ /*@__PURE__*/ (function () {
    function ForumComponent(api, router, route) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.allForums = [];
    }
    ForumComponent.prototype.ngOnInit = function () {
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.getForums();
        this.getCourses();
    };
    ForumComponent.prototype.getCourses = function () {
        var _this = this;
        this.api.getCourseTD(this.instituteId).subscribe(function (data) {
            _this.courses = data.course;
        }, function (err) { return console.error(err); });
    };
    ForumComponent.prototype.onSelectCourse = function (courseId) {
        this.selectedCourseId = courseId;
        this.getForums();
    };
    ForumComponent.prototype.getForums = function () {
        var _this = this;
        this.api
            .getForumsByInstitute({ instituteId: this.instituteId, courseId: this.selectedCourseId })
            .subscribe(function (res) {
            _this.allForums = res;
            _this.allForums.map(function (myForum) {
                var date = new Date(myForum.date);
                myForum.date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
                return myForum;
            });
        });
    };
    ForumComponent.prototype.comment = function (id) {
        this.router.navigate(["/pages/communication/forum-detail/" + this.instituteId], {
            queryParams: { forumId: id, edit: true },
        });
    };
    ForumComponent.prototype.addForum = function () {
        this.router.navigate(["/pages/communication/add-forum/" + this.instituteId]);
    };
    ForumComponent.prototype.myForum = function () {
        this.router.navigate(["/pages/communication/my-forum/" + this.instituteId]);
    };
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/pages/communication/forum/my-forum/my-forum.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/pages/communication/forum/my-forum/my-forum.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_MyForumComponent, View_MyForumComponent_0, View_MyForumComponent_Host_0, MyForumComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MyForumComponent", function() { return RenderType_MyForumComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyForumComponent_0", function() { return View_MyForumComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyForumComponent_Host_0", function() { return View_MyForumComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyForumComponentNgFactory", function() { return MyForumComponentNgFactory; });
/* harmony import */ var _my_forum_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-forum.component.scss.shim.ngstyle */ "./src/app/pages/communication/forum/my-forum/my-forum.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _my_forum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-forum.component */ "./src/app/pages/communication/forum/my-forum/my-forum.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/auth-services/auth.service */ "./src/app/services/auth-services/auth.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */











var styles_MyForumComponent = [_my_forum_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MyForumComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MyForumComponent, data: {} });

function View_MyForumComponent_3(_l) {
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
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_3 = _v.context.$implicit._id; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_4); });
}
function View_MyForumComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "row mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My Forums"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 11, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("selectedChange" === en)) {
                var pd_0 = (_co.onSelectCourse($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], { status: [0, "status"], fullWidth: [1, "fullWidth"], placeholder: [2, "placeholder"] }, { selectedChange: "selectedChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { customLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
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
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["All"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_MyForumComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_20 = "basic"; var currVal_21 = ""; var currVal_22 = "Select Course"; _ck(_v, 7, 0, currVal_20, currVal_21, currVal_22); var currVal_26 = ""; _ck(_v, 12, 0, currVal_26); var currVal_27 = _co.courses; _ck(_v, 15, 0, currVal_27); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).outline; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).filled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).hero; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).fullWidth; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).isOpen; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).tiny; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).small; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).medium; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).large; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).giant; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).primary; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).info; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).success; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).warning; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).danger; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).basic; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).control; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).rectangle; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).round; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).semiRound; _ck(_v, 5, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).selectedClass; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabledAttribute; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tabindex; _ck(_v, 11, 0, currVal_23, currVal_24, currVal_25); });
}
function View_MyForumComponent_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 14, "td", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "button", [["class", "mr-3 mb-2 btn-yellow"], ["nbButton", ""]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.edit(_v.context.$implicit._id) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 1, "span", [["class", "btnText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Edit "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "span", [["class", "btnIcon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "nb-icon", [["icon", "edit-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "button", [["class", "mb-2"], ["nbButton", ""], ["status", "danger"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.delete(_v.context.$implicit._id, _v.context.index) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { status: [0, "status"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 1, "span", [["class", "btnText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Delete "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 2, "span", [["class", "btnIcon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "nb-icon", [["icon", "trash-2-outline"]], [[8, "innerHTML", 1], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbIconComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 638976, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconLibraries"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null)], function (_ck, _v) { var currVal_37 = "edit-outline"; _ck(_v, 14, 0, currVal_37); var currVal_64 = "danger"; _ck(_v, 16, 0, currVal_64); var currVal_73 = "trash-2-outline"; _ck(_v, 21, 0, currVal_73); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.courseId; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.date; _ck(_v, 6, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).filled; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).outline; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ghost; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).hero; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).fullWidth; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).tabbable; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).tiny; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).small; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).medium; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).large; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).giant; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).primary; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).info; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).success; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).warning; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).danger; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).basic; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).control; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).rectangle; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).round; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).semiRound; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).iconLeft; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).iconRight; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transitions; _ck(_v, 8, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28]); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).html; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).primary; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).info; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).success; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).warning; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).danger; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).basic; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).control; _ck(_v, 13, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).filled; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).outline; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ghost; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).hero; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).fullWidth; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).tabbable; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).tiny; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).small; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).medium; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).large; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).giant; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).primary; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).info; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).success; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).warning; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).danger; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).basic; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).control; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).rectangle; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).round; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).semiRound; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).iconLeft; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).iconRight; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transitions; _ck(_v, 15, 1, [currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63]); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).html; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).primary; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).info; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).success; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).warning; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).danger; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).basic; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).control; _ck(_v, 20, 0, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72); });
}
function View_MyForumComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "table", [["class", "table table-borderless text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyForumComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.myForums; _ck(_v, 11, 0, currVal_0); }, null); }
function View_MyForumComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-5 mb-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Record Found"]))], null, null); }
function View_MyForumComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "nb-card", [["status", "info"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], { status: [0, "status"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 3, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MyForumComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MyForumComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noForums", 2]], 0, 0, null, View_MyForumComponent_6))], function (_ck, _v) { var _co = _v.component; var currVal_20 = "info"; _ck(_v, 1, 0, currVal_20); var currVal_21 = _co.courses; _ck(_v, 5, 0, currVal_21); var currVal_22 = (_co.myForums.length > 0); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10); _ck(_v, 9, 0, currVal_22, currVal_23); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); }); }
function View_MyForumComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "py-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-yellow-black float-right"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.back() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Forum Page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyForumComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.display; _ck(_v, 6, 0, currVal_0); }, null);
}
function View_MyForumComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-my-forum", [], null, null, null, View_MyForumComponent_0, RenderType_MyForumComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _my_forum_component__WEBPACK_IMPORTED_MODULE_7__["MyForumComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MyForumComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-my-forum", _my_forum_component__WEBPACK_IMPORTED_MODULE_7__["MyForumComponent"], View_MyForumComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/communication/forum/my-forum/my-forum.component.scss.shim.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/communication/forum/my-forum/my-forum.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************/
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
var styles = [""];



/***/ }),

/***/ "./src/app/pages/communication/forum/my-forum/my-forum.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/communication/forum/my-forum/my-forum.component.ts ***!
  \**************************************************************************/
/*! exports provided: MyForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyForumComponent", function() { return MyForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth-services/auth.service */ "./src/app/services/auth-services/auth.service.ts");






var MyForumComponent = /** @class */ /*@__PURE__*/ (function () {
    function MyForumComponent(api, router, route, toasterService, location, authService) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.toasterService = toasterService;
        this.location = location;
        this.authService = authService;
        this.myForums = [];
    }
    MyForumComponent.prototype.ngOnInit = function () {
        this.display = false;
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.getMyForums();
        this.getCourses();
    };
    MyForumComponent.prototype.getCourses = function () {
        var _this = this;
        this.api.getCourseTD(this.instituteId).subscribe(function (data) {
            _this.courses = data.course;
            _this.display = true;
        }, function (err) { return console.error(err); });
    };
    MyForumComponent.prototype.onSelectCourse = function (courseId) {
        this.selectedCourseId = courseId;
        this.getMyForums();
    };
    MyForumComponent.prototype.getMyForums = function () {
        var _this = this;
        this.api
            .getMyForum({ createdBy: this.authService.getUser()._id, courseId: this.selectedCourseId })
            .subscribe(function (res) {
            _this.myForums = res;
            _this.myForums.map(function (myForum) {
                var date = new Date(myForum.date);
                myForum.date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
                return myForum;
            });
        });
    };
    MyForumComponent.prototype.edit = function (id) {
        this.router.navigate(["/pages/communication/add-forum/" + this.instituteId], {
            queryParams: { forumId: id, edit: true },
        });
    };
    MyForumComponent.prototype.delete = function (id, index) {
        var _this = this;
        this.api.deleteForum({ _id: id }).subscribe(function () {
            _this.myForums.splice(index, 1);
            _this.showToast('top-right', 'success', 'Forum Deleted Successfully');
        }, function (err) { return console.error(err); });
    };
    MyForumComponent.prototype.showToast = function (position, status, message) {
        this.toasterService.show(status, message, { position: position, status: status });
    };
    MyForumComponent.prototype.back = function () {
        this.location.back();
    };
    return MyForumComponent;
}());



/***/ })

}]);