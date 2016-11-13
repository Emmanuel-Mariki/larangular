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
var core_1 = require('@angular/core');
var Sticky = (function () {
    function Sticky(element) {
        this.element = element;
        this.zIndex = 10;
        this.width = 'auto';
        this.offsetTop = 0;
        this.offsetBottom = 0;
        this.start = 0;
        this.stickClass = 'sticky';
        this.endStickClass = 'sticky-end';
        this.mediaQuery = '';
        this.parentMode = true;
        this.activated = new core_1.EventEmitter();
        this.deactivated = new core_1.EventEmitter();
        this.onScrollBind = this.onScroll.bind(this);
        this.onResizeBind = this.onResize.bind(this);
        this.isStuck = false;
        this.elem = element.nativeElement;
    }
    Sticky.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.onScrollBind);
        window.addEventListener('resize', this.onResizeBind);
    };
    Sticky.prototype.ngAfterViewInit = function () {
        // define scroll container as parent element
        this.container = this.elem.parentNode;
        this.originalCss = {
            zIndex: this.getCssValue(this.elem, 'zIndex'),
            position: this.getCssValue(this.elem, 'position'),
            top: this.getCssValue(this.elem, 'top'),
            right: this.getCssValue(this.elem, 'right'),
            left: this.getCssValue(this.elem, 'left'),
            bottom: this.getCssValue(this.elem, 'bottom'),
            width: this.getCssValue(this.elem, 'width'),
        };
        if (this.width == 'auto') {
            this.width = this.originalCss.width;
        }
        this.defineDimensions();
        this.sticker();
    };
    Sticky.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.onScrollBind);
        window.removeEventListener('resize', this.onResizeBind);
    };
    Sticky.prototype.onScroll = function () {
        this.sticker();
    };
    Sticky.prototype.onResize = function () {
        this.defineDimensions();
        this.sticker();
    };
    Sticky.prototype.defineDimensions = function () {
        var containerTop = this.getBoundingClientRectValue(this.container, 'top');
        this.windowHeight = window.innerHeight;
        this.elemHeight = this.getCssNumber(this.elem, 'height');
        this.containerHeight = this.getCssNumber(this.container, 'height');
        this.containerStart = containerTop + this.scrollbarYPos() - this.offsetTop + this.start;
        if (this.parentMode) {
            this.scrollFinish = this.containerStart - this.start - this.offsetBottom + (this.containerHeight - this.elemHeight);
        }
        else {
            this.scrollFinish = document.body.offsetHeight;
        }
    };
    Sticky.prototype.resetElement = function () {
        this.elem.classList.remove(this.stickClass);
        Object.assign(this.elem.style, this.originalCss);
    };
    Sticky.prototype.stuckElement = function () {
        this.isStuck = true;
        this.elem.classList.remove(this.endStickClass);
        this.elem.classList.add(this.stickClass);
        var elementLeft = this.getBoundingClientRectValue(this.elem, 'left');
        this.elem.style.zIndex = this.zIndex;
        this.elem.style.position = 'fixed';
        this.elem.style.top = this.offsetTop + 'px';
        this.elem.style.right = 'auto';
        this.elem.style.left = elementLeft + 'px';
        this.elem.style.bottom = 'auto';
        this.elem.style.width = this.width;
        this.activated.next(this.elem);
    };
    Sticky.prototype.unstuckElement = function () {
        this.isStuck = false;
        this.elem.classList.add(this.endStickClass);
        this.container.style.position = 'relative';
        this.elem.style.position = 'absolute';
        this.elem.style.top = 'auto';
        this.elem.style.right = 0;
        this.elem.style.left = 'auto';
        this.elem.style.bottom = this.offsetBottom + 'px';
        this.elem.style.width = this.width;
        this.deactivated.next(this.elem);
    };
    Sticky.prototype.matchMediaQuery = function () {
        if (!this.mediaQuery)
            return true;
        return (window.matchMedia('(' + this.mediaQuery + ')').matches ||
            window.matchMedia(this.mediaQuery).matches);
    };
    Sticky.prototype.sticker = function () {
        // check media query
        if (this.isStuck && !this.matchMediaQuery()) {
            this.resetElement();
            return;
        }
        // detecting when a container's height changes
        var currentContainerHeight = this.getCssNumber(this.container, 'height');
        if (currentContainerHeight !== this.containerHeight) {
            this.defineDimensions();
        }
        var position = this.scrollbarYPos();
        // unstick
        if (this.isStuck && (position < this.containerStart || position > this.scrollFinish) || position > this.scrollFinish) {
            this.resetElement();
            if (position > this.scrollFinish)
                this.unstuckElement();
            this.isStuck = false;
        }
        else if (this.isStuck === false && position > this.containerStart && position < this.scrollFinish) {
            this.stuckElement();
        }
    };
    Sticky.prototype.scrollbarYPos = function () {
        return window.pageYOffset || document.documentElement.scrollTop;
    };
    Sticky.prototype.getBoundingClientRectValue = function (element, property) {
        var result = 0;
        if (element.getBoundingClientRect) {
            var rect = element.getBoundingClientRect();
            result = (typeof rect[property] !== 'undefined') ? rect[property] : 0;
        }
        return result;
    };
    Sticky.prototype.getCssValue = function (element, property) {
        var result = '';
        var style = element.currentStyle || window.getComputedStyle(element);
        if (typeof style[property] !== 'undefined') {
            result = style[property];
        }
        else {
            result = style.getPropertyValue(property);
        }
        return result;
    };
    Sticky.prototype.getCssNumber = function (element, property) {
        return parseInt(this.getCssValue(element, property), 10) || 0;
    };
    __decorate([
        core_1.Input('sticky-zIndex'), 
        __metadata('design:type', Number)
    ], Sticky.prototype, "zIndex", void 0);
    __decorate([
        core_1.Input('sticky-width'), 
        __metadata('design:type', String)
    ], Sticky.prototype, "width", void 0);
    __decorate([
        core_1.Input('sticky-offset-top'), 
        __metadata('design:type', Number)
    ], Sticky.prototype, "offsetTop", void 0);
    __decorate([
        core_1.Input('sticky-offset-bottom'), 
        __metadata('design:type', Number)
    ], Sticky.prototype, "offsetBottom", void 0);
    __decorate([
        core_1.Input('sticky-start'), 
        __metadata('design:type', Number)
    ], Sticky.prototype, "start", void 0);
    __decorate([
        core_1.Input('sticky-class'), 
        __metadata('design:type', String)
    ], Sticky.prototype, "stickClass", void 0);
    __decorate([
        core_1.Input('sticky-end-class'), 
        __metadata('design:type', String)
    ], Sticky.prototype, "endStickClass", void 0);
    __decorate([
        core_1.Input('sticky-media-query'), 
        __metadata('design:type', String)
    ], Sticky.prototype, "mediaQuery", void 0);
    __decorate([
        core_1.Input('sticky-parent'), 
        __metadata('design:type', Boolean)
    ], Sticky.prototype, "parentMode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Sticky.prototype, "activated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Sticky.prototype, "deactivated", void 0);
    Sticky = __decorate([
        core_1.Component({
            selector: 'sticky',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Sticky);
    return Sticky;
}());
exports.Sticky = Sticky;
//# sourceMappingURL=ng2-sticky.js.map