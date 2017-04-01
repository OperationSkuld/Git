/*! jQuery UI - v1.9.2 - 2014-02-12
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.sortable.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e, t) {
    function i(t, i) {
        var s, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (s = t.parentNode, n = s.name, t.href && n && "map" === s.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && a(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled: "a" === o ? t.href || i: i) && a(t)
    }
    function a(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var s = 0,
    n = /^ui-id-\d+$/;
    e.ui = e.ui || {},
    e.ui.version || (e.extend(e.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function(t, i) {
            return "number" == typeof t ? this.each(function() {
                var a = this;
                setTimeout(function() {
                    e(a).focus(),
                    i && i.call(a)
                },
                t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length) for (var a, s, n = e(this[0]); n.length && n[0] !== document;) {
                if (a = n.css("position"), ("absolute" === a || "relative" === a || "fixed" === a) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                n = n.parent()
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !! e.data(i, t)
            }
        }) : function(t, i, a) {
            return !! e.data(t, a[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var a = e.attr(t, "tabindex"),
            s = isNaN(a);
            return (s || a >= 0) && i(t, !s)
        }
    }), e(function() {
        var t = document.body,
        i = t.appendChild(i = document.createElement("div"));
        i.offsetHeight,
        e.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }),
        e.support.minHeight = 100 === i.offsetHeight,
        e.support.selectstart = "onselectstart" in i,
        t.removeChild(i).style.display = "none"
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"],
    function(i, a) {
        function s(t, i, a, s) {
            return e.each(n,
            function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0,
                a && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var n = "Width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
        r = a.toLowerCase(),
        o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + a] = function(i) {
            return i === t ? o["inner" + a].call(this) : this.each(function() {
                e(this).css(r, s(this, i) + "px")
            })
        },
        e.fn["outer" + a] = function(t, i) {
            return "number" != typeof t ? o["outer" + a].call(this, t) : this.each(function() {
                e(this).css(r, s(this, t, !0, i) + "px")
            })
        }
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    } (e.fn.removeData)),
    function() {
        var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        e.ui.ie = t.length ? !0 : !1,
        e.ui.ie6 = 6 === parseFloat(t[1], 10)
    } (), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
            function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, a) {
                var s, n = e.ui[t].prototype;
                for (s in a) n.plugins[s] = n.plugins[s] || [],
                n.plugins[s].push([i, a[s]])
            },
            call: function(e, t, i) {
                var a, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (a = 0; s.length > a; a++) e.options[s[a][0]] && s[a][1].apply(e.element, i)
            }
        },
        contains: e.contains,
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return ! 1;
            var a = i && "left" === i ? "scrollLeft": "scrollTop",
            s = !1;
            return t[a] > 0 ? !0 : (t[a] = 1, s = t[a] > 0, t[a] = 0, s)
        },
        isOverAxis: function(e, t, i) {
            return e > t && t + i > e
        },
        isOver: function(t, i, a, s, n, r) {
            return e.ui.isOverAxis(t, a, n) && e.ui.isOverAxis(i, s, r)
        }
    }))
})(jQuery); (function(e, t) {
    var i = 0,
    s = Array.prototype.slice,
    a = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch(n) {}
        a(t)
    },
    e.widget = function(i, s, a) {
        var n, r, o, h, l = i.split(".")[0];
        i = i.split(".")[1],
        n = l + "-" + i,
        a || (a = s, s = e.Widget),
        e.expr[":"][n.toLowerCase()] = function(t) {
            return !! e.data(t, n)
        },
        e[l] = e[l] || {},
        r = e[l][i],
        o = e[l][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        },
        e.extend(o, r, {
            version: a.version,
            _proto: e.extend({},
            a),
            _childConstructors: []
        }),
        h = new s,
        h.options = e.widget.extend({},
        h.options),
        e.each(a,
        function(t, i) {
            e.isFunction(i) && (a[t] = function() {
                var e = function() {
                    return s.prototype[t].apply(this, arguments)
                },
                a = function(e) {
                    return s.prototype[t].apply(this, e)
                };
                return function() {
                    var t, s = this._super,
                    n = this._superApply;
                    return this._super = e,
                    this._superApply = a,
                    t = i.apply(this, arguments),
                    this._super = s,
                    this._superApply = n,
                    t
                }
            } ())
        }),
        o.prototype = e.widget.extend(h, {
            widgetEventPrefix: r ? h.widgetEventPrefix: i
        },
        a, {
            constructor: o,
            namespace: l,
            widgetName: i,
            widgetBaseClass: n,
            widgetFullName: n
        }),
        r ? (e.each(r._childConstructors,
        function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o),
        e.widget.bridge(i, o)
    },
    e.widget.extend = function(i) {
        for (var a, n, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++) for (a in r[o]) n = r[o][a],
        r[o].hasOwnProperty(a) && n !== t && (i[a] = e.isPlainObject(n) ? e.isPlainObject(i[a]) ? e.widget.extend({},
        i[a], n) : e.widget.extend({},
        n) : n);
        return i
    },
    e.widget.bridge = function(i, a) {
        var n = a.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r,
            h = s.call(arguments, 1),
            l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r,
            o ? this.each(function() {
                var s, a = e.data(this, n);
                return a ? e.isFunction(a[r]) && "_" !== r.charAt(0) ? (s = a[r].apply(a, h), s !== a && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, n);
                t ? t.option(r || {})._init() : e.data(this, n, new a(r, this))
            }),
            l
        }
    },
    e.Widget = function() {},
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0],
            this.element = e(s),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = e.widget.extend({},
            this.options, this._getCreateOptions(), t),
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            s !== this && (e.data(s, this.widgetName, this), e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument: s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var a, n, r, o = i;
            if (0 === arguments.length) return e.widget.extend({},
            this.options);
            if ("string" == typeof i) if (o = {},
            a = i.split("."), i = a.shift(), a.length) {
                for (n = o[i] = e.widget.extend({},
                this.options[i]), r = 0; a.length - 1 > r; r++) n[a[r]] = n[a[r]] || {},
                n = n[a[r]];
                if (i = a.pop(), s === t) return n[i] === t ? null: n[i];
                n[i] = s
            } else {
                if (s === t) return this.options[i] === t ? null: this.options[i];
                o[i] = s
            }
            return this._setOptions(o),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, a) {
            var n, r = this;
            "boolean" != typeof i && (a = s, s = i, i = !1),
            a ? (s = n = e(s), this.bindings = this.bindings.add(s)) : (a = s, s = this.element, n = this.widget()),
            e.each(a,
            function(a, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = a.match(/^(\w+)\s*(.*)$/),
                u = l[1] + r.eventNamespace,
                c = l[2];
                c ? n.delegate(c, u, h) : s.bind(u, h)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var a, n, r = this.options[t];
            if (s = s || {},
            i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t: this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent) for (a in n) a in i || (i[a] = n[a]);
            return this.element.trigger(i, s),
            !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(t, i) {
        e.Widget.prototype["_" + t] = function(s, a, n) {
            "string" == typeof a && (a = {
                effect: a
            });
            var r, o = a ? a === !0 || "number" == typeof a ? i: a.effect || i: t;
            a = a || {},
            "number" == typeof a && (a = {
                duration: a
            }),
            r = !e.isEmptyObject(a),
            a.complete = n,
            a.delay && s.delay(a.delay),
            r && e.effects && (e.effects.effect[o] || e.uiBackCompat !== !1 && e.effects[o]) ? s[t](a) : o !== t && s[o] ? s[o](a.duration, a.easing, n) : s.queue(function(i) {
                e(this)[t](),
                n && n.call(s[0]),
                i()
            })
        }
    }),
    e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
})(jQuery); (function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }),
    e.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName,
            function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName,
            function(i) {
                return ! 0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i),
                this._mouseDownEvent = i;
                var s = this,
                a = 1 === i.which,
                n = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length: !1;
                return a && !n && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                },
                this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e)
                },
                this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e)
                },
                e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return ! e.ui.ie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return ! 0
        }
    })
})(jQuery); (function(e) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe": i.iframeFix).each(function() {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            e.ui.ddmanager && (e.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            i.containment && this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, i) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var a = this._uiHash();
                if (this._trigger("drag", t, a) === !1) return this._mouseUp({}),
                !1;
                this.position = a.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var i = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped, this.dropped = !1);
            for (var a = this.element[0], s = !1; a && (a = a.parentNode);) a == document && (s = !0);
            if (!s && "original" === this.options.helper) return ! 1;
            if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                var n = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
                function() {
                    n._trigger("stop", t) !== !1 && n._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return ! 1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
            e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            var i = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0;
            return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (i = !0)
            }),
            i
        },
        _createHelper: function(t) {
            var i = this.options,
            a = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
            return a.parents("body").length || a.appendTo("parent" == i.appendTo ? this.element[0].parentNode: i.appendTo),
            a[0] == this.element[0] || /(fixed|absolute)/.test(a.css("position")) || a.css("position", "absolute"),
            a
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left" in t && (this.offset.click.left = t.left + this.margins.left),
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top" in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = ["document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document: window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array) t.containment.constructor == Array && (this.containment = t.containment);
            else {
                var i = e(t.containment),
                a = i[0];
                if (!a) return;
                i.offset();
                var s = "hidden" != e(a).css("overflow");
                this.containment = [(parseInt(e(a).css("borderLeftWidth"), 10) || 0) + (parseInt(e(a).css("paddingLeft"), 10) || 0), (parseInt(e(a).css("borderTopWidth"), 10) || 0) + (parseInt(e(a).css("paddingTop"), 10) || 0), (s ? Math.max(a.scrollWidth, a.offsetWidth) : a.offsetWidth) - (parseInt(e(a).css("borderLeftWidth"), 10) || 0) - (parseInt(e(a).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(a.scrollHeight, a.offsetHeight) : a.offsetHeight) - (parseInt(e(a).css("borderTopWidth"), 10) || 0) - (parseInt(e(a).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relative_container = i
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var a = "absolute" == t ? 1 : -1,
            s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent),
            n = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * a + this.offset.parent.top * a - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()) * a,
                left: i.left + this.offset.relative.left * a + this.offset.parent.left * a - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft()) * a
            }
        },
        _generatePosition: function(t) {
            var i = this.options,
            a = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            s = /(html|body)/i.test(a[0].tagName),
            n = t.pageX,
            r = t.pageY;
            if (this.originalPosition) {
                var o;
                if (this.containment) {
                    if (this.relative_container) {
                        var l = this.relative_container.offset();
                        o = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                    } else o = this.containment;
                    t.pageX - this.offset.click.left < o[0] && (n = o[0] + this.offset.click.left),
                    t.pageY - this.offset.click.top < o[1] && (r = o[1] + this.offset.click.top),
                    t.pageX - this.offset.click.left > o[2] && (n = o[2] + this.offset.click.left),
                    t.pageY - this.offset.click.top > o[3] && (r = o[3] + this.offset.click.top)
                }
                if (i.grid) {
                    var h = i.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                    r = o ? h - this.offset.click.top < o[1] || h - this.offset.click.top > o[3] ? h - this.offset.click.top < o[1] ? h + i.grid[1] : h - i.grid[1] : h: h;
                    var u = i.grid[0] ? this.originalPageX + Math.round((n - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                    n = o ? u - this.offset.click.left < o[0] || u - this.offset.click.left > o[2] ? u - this.offset.click.left < o[0] ? u + i.grid[0] : u - i.grid[0] : u: u
                }
            }
            return {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : a.scrollTop()),
                left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : a.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, a) {
            return a = a || this._uiHash(),
            e.ui.plugin.call(this, t, [i, a]),
            "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")),
            e.Widget.prototype._trigger.call(this, t, i, a)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var a = e(this).data("draggable"),
            s = a.options,
            n = e.extend({},
            i, {
                item: a.element
            });
            a.sortables = [],
            e(s.connectToSortable).each(function() {
                var i = e.data(this, "sortable");
                i && !i.options.disabled && (a.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, n))
            })
        },
        stop: function(t, i) {
            var a = e(this).data("draggable"),
            s = e.extend({},
            i, {
                item: a.element
            });
            e.each(a.sortables,
            function() {
                this.instance.isOver ? (this.instance.isOver = 0, a.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == a.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, s))
            })
        },
        drag: function(t, i) {
            var a = e(this).data("draggable"),
            s = this;
            e.each(a.sortables,
            function() {
                var n = !1,
                r = this;
                this.instance.positionAbs = a.positionAbs,
                this.instance.helperProportions = a.helperProportions,
                this.instance.offset.click = a.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (n = !0, e.each(a.sortables,
                function() {
                    return this.instance.positionAbs = a.positionAbs,
                    this.instance.helperProportions = a.helperProportions,
                    this.instance.offset.click = a.offset.click,
                    this != r && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(r.instance.element[0], this.instance.element[0]) && (n = !1),
                    n
                })),
                n ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                },
                t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = a.offset.click.top, this.instance.offset.click.left = a.offset.click.left, this.instance.offset.parent.left -= a.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= a.offset.parent.top - this.instance.offset.parent.top, a._trigger("toSortable", t), a.dropped = this.instance.element, a.currentItem = a.element, this.instance.fromOutside = a), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), a._trigger("fromSortable", t), a.dropped = !1)
            })
        }
    }),
    e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
            i = e(this).data("draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")),
            t.css("cursor", i.cursor)
        },
        stop: function() {
            var t = e(this).data("draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }),
    e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var a = e(i.helper),
            s = e(this).data("draggable").options;
            a.css("opacity") && (s._opacity = a.css("opacity")),
            a.css("opacity", s.opacity)
        },
        stop: function(t, i) {
            var a = e(this).data("draggable").options;
            a._opacity && e(i.helper).css("opacity", a._opacity)
        }
    }),
    e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("draggable");
            t.scrollParent[0] != document && "HTML" != t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var i = e(this).data("draggable"),
            a = i.options,
            s = !1;
            i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (a.axis && "x" == a.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < a.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + a.scrollSpeed: t.pageY - i.overflowOffset.top < a.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - a.scrollSpeed)), a.axis && "y" == a.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < a.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + a.scrollSpeed: t.pageX - i.overflowOffset.left < a.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - a.scrollSpeed))) : (a.axis && "x" == a.axis || (t.pageY - e(document).scrollTop() < a.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - a.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < a.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + a.scrollSpeed))), a.axis && "y" == a.axis || (t.pageX - e(document).scrollLeft() < a.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - a.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < a.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + a.scrollSpeed)))),
            s !== !1 && e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }),
    e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("draggable"),
            i = t.options;
            t.snapElements = [],
            e(i.snap.constructor != String ? i.snap.items || ":data(draggable)": i.snap).each(function() {
                var i = e(this),
                a = i.offset();
                this != t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: a.top,
                    left: a.left
                })
            })
        },
        drag: function(t, i) {
            for (var a = e(this).data("draggable"), s = a.options, n = s.snapTolerance, r = i.offset.left, o = r + a.helperProportions.width, l = i.offset.top, h = l + a.helperProportions.height, u = a.snapElements.length - 1; u >= 0; u--) {
                var d = a.snapElements[u].left,
                c = d + a.snapElements[u].width,
                p = a.snapElements[u].top,
                m = p + a.snapElements[u].height;
                if (r > d - n && c + n > r && l > p - n && m + n > l || r > d - n && c + n > r && h > p - n && m + n > h || o > d - n && c + n > o && l > p - n && m + n > l || o > d - n && c + n > o && h > p - n && m + n > h) {
                    if ("inner" != s.snapMode) {
                        var f = n >= Math.abs(p - h),
                        g = n >= Math.abs(m - l),
                        v = n >= Math.abs(d - o),
                        y = n >= Math.abs(c - r);
                        f && (i.position.top = a._convertPositionTo("relative", {
                            top: p - a.helperProportions.height,
                            left: 0
                        }).top - a.margins.top),
                        g && (i.position.top = a._convertPositionTo("relative", {
                            top: m,
                            left: 0
                        }).top - a.margins.top),
                        v && (i.position.left = a._convertPositionTo("relative", {
                            top: 0,
                            left: d - a.helperProportions.width
                        }).left - a.margins.left),
                        y && (i.position.left = a._convertPositionTo("relative", {
                            top: 0,
                            left: c
                        }).left - a.margins.left)
                    }
                    var b = f || g || v || y;
                    if ("outer" != s.snapMode) {
                        var f = n >= Math.abs(p - l),
                        g = n >= Math.abs(m - h),
                        v = n >= Math.abs(d - r),
                        y = n >= Math.abs(c - o);
                        f && (i.position.top = a._convertPositionTo("relative", {
                            top: p,
                            left: 0
                        }).top - a.margins.top),
                        g && (i.position.top = a._convertPositionTo("relative", {
                            top: m - a.helperProportions.height,
                            left: 0
                        }).top - a.margins.top),
                        v && (i.position.left = a._convertPositionTo("relative", {
                            top: 0,
                            left: d
                        }).left - a.margins.left),
                        y && (i.position.left = a._convertPositionTo("relative", {
                            top: 0,
                            left: c - a.helperProportions.width
                        }).left - a.margins.left)
                    } ! a.snapElements[u].snapping && (f || g || v || y || b) && a.options.snap.snap && a.options.snap.snap.call(a.element, t, e.extend(a._uiHash(), {
                        snapItem: a.snapElements[u].item
                    })),
                    a.snapElements[u].snapping = f || g || v || y || b
                } else a.snapElements[u].snapping && a.options.snap.release && a.options.snap.release.call(a.element, t, e.extend(a._uiHash(), {
                    snapItem: a.snapElements[u].item
                })),
                a.snapElements[u].snapping = !1
            }
        }
    }),
    e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t = e(this).data("draggable").options,
            i = e.makeArray(e(t.stack)).sort(function(t, i) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
            });
            if (i.length) {
                var a = parseInt(i[0].style.zIndex) || 0;
                e(i).each(function(e) {
                    this.style.zIndex = a + e
                }),
                this[0].style.zIndex = a + i.length
            }
        }
    }),
    e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var a = e(i.helper),
            s = e(this).data("draggable").options;
            a.css("zIndex") && (s._zIndex = a.css("zIndex")),
            a.css("zIndex", s.zIndex)
        },
        stop: function(t, i) {
            var a = e(this).data("draggable").options;
            a._zIndex && e(i.helper).css("zIndex", a._zIndex)
        }
    })
})(jQuery); (function(e) {
    e.widget("ui.droppable", {
        version: "1.9.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var t = this.options,
            i = t.accept;
            this.isover = 0,
            this.isout = 1,
            this.accept = e.isFunction(i) ? i: function(e) {
                return e.is(i)
            },
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            },
            e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [],
            e.ui.ddmanager.droppables[t.scope].push(this),
            t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var t = e.ui.ddmanager.droppables[this.options.scope], i = 0; t.length > i; i++) t[i] == this && t.splice(i, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            "accept" == t && (this.accept = e.isFunction(i) ? i: function(e) {
                return e.is(i)
            }),
            e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var a = i || e.ui.ddmanager.current;
            if (!a || (a.currentItem || a.element)[0] == this.element[0]) return ! 1;
            var s = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope == a.options.scope && t.accept.call(t.element[0], a.currentItem || a.element) && e.ui.intersect(a, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance) ? (s = !0, !1) : undefined
            }),
            s ? !1 : this.accept.call(this.element[0], a.currentItem || a.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(a)), this.element) : !1
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }),
    e.ui.intersect = function(t, i, a) {
        if (!i.offset) return ! 1;
        var s = (t.positionAbs || t.position.absolute).left,
        n = s + t.helperProportions.width,
        r = (t.positionAbs || t.position.absolute).top,
        o = r + t.helperProportions.height,
        l = i.offset.left,
        h = l + i.proportions.width,
        u = i.offset.top,
        d = u + i.proportions.height;
        switch (a) {
        case "fit":
            return s >= l && h >= n && r >= u && d >= o;
        case "intersect":
            return s + t.helperProportions.width / 2 > l && h > n - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && d > o - t.helperProportions.height / 2;
        case "pointer":
            var c = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
            p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
            m = e.ui.isOver(p, c, u, l, i.proportions.height, i.proportions.width);
            return m;
        case "touch":
            return (r >= u && d >= r || o >= u && d >= o || u > r && o > d) && (s >= l && h >= s || n >= l && h >= n || l > s && n > h);
        default:
            return ! 1
        }
    },
    e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var a = e.ui.ddmanager.droppables[t.options.scope] || [],
            s = i ? i.type: null,
            n = (t.currentItem || t.element).find(":data(droppable)").andSelf();
            e: for (var r = 0; a.length > r; r++) if (! (a[r].options.disabled || t && !a[r].accept.call(a[r].element[0], t.currentItem || t.element))) {
                for (var o = 0; n.length > o; o++) if (n[o] == a[r].element[0]) {
                    a[r].proportions.height = 0;
                    continue e
                }
                a[r].visible = "none" != a[r].element.css("display"),
                a[r].visible && ("mousedown" == s && a[r]._activate.call(a[r], i), a[r].offset = a[r].element.offset(), a[r].proportions = {
                    width: a[r].element[0].offsetWidth,
                    height: a[r].element[0].offsetHeight
                })
            }
        },
        drop: function(t, i) {
            var a = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [],
            function() {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (a = this._drop.call(this, i) || a), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            }),
            a
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable",
            function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i),
            e.each(e.ui.ddmanager.droppables[t.options.scope] || [],
            function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var a = e.ui.intersect(t, this, this.options.tolerance),
                    s = a || 1 != this.isover ? a && 0 == this.isover ? "isover": null: "isout";
                    if (s) {
                        var n;
                        if (this.options.greedy) {
                            var r = this.options.scope,
                            o = this.element.parents(":data(droppable)").filter(function() {
                                return e.data(this, "droppable").options.scope === r
                            });
                            o.length && (n = e.data(o[0], "droppable"), n.greedyChild = "isover" == s ? 1 : 0)
                        }
                        n && "isover" == s && (n.isover = 0, n.isout = 1, n._out.call(n, i)),
                        this[s] = 1,
                        this["isout" == s ? "isover": "isout"] = 0,
                        this["isover" == s ? "_over": "_out"].call(this, i),
                        n && "isout" == s && (n.isout = 0, n.isover = 1, n._over.call(n, i))
                    }
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"),
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }
})(jQuery); (function(e) {
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var e = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? "x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, i) {
            "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, i) {
            var s = this;
            if (this.reverting) return ! 1;
            if (this.options.disabled || "static" == this.options.type) return ! 1;
            this._refreshItems(t);
            var a = null;
            if (e(t.target).parents().each(function() {
                return e.data(this, s.widgetName + "-item") == s ? (a = e(this), !1) : undefined
            }), e.data(t.target, s.widgetName + "-item") == s && (a = e(t.target)), !a) return ! 1;
            if (this.options.handle && !i) {
                var n = !1;
                if (e(this.options.handle, a).find("*").andSelf().each(function() {
                    this == t.target && (n = !0)
                }), !n) return ! 1
            }
            return this.currentItem = a,
            this._removeCurrentsFromItems(),
            !0
        },
        _mouseStart: function(t, i, s) {
            var a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", a.cursor)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (var n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this),
            e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options,
                s = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + i.scrollSpeed: t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + i.scrollSpeed: t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed)), t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))),
                s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var a = this.items.length - 1; a >= 0; a--) {
                var n = this.items[a],
                r = n.item[0],
                o = this._intersectsWithPointer(n);
                if (o && n.instance === this.currentContainer && r != this.currentItem[0] && this.placeholder[1 == o ? "next": "prev"]()[0] != r && !e.contains(this.placeholder[0], r) && ("semi-dynamic" == this.options.type ? !e.contains(this.element[0], r) : !0)) {
                    if (this.direction = 1 == o ? "down": "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(t, n),
                    this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var s = this,
                    a = this.placeholder.offset();
                    this.reverting = !0,
                    e(this.helper).animate({
                        left: a.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: a.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    },
                    parseInt(this.options.revert, 10) || 500,
                    function() {
                        s._clear(t)
                    })
                } else this._clear(t, i);
                return ! 1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
            s = [];
            return t = t || {},
            e(i).each(function() {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }),
            !s.length && t.key && s.push(t.key + "="),
            s.join("&")
        },
        toArray: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
            s = [];
            return t = t || {},
            i.each(function() {
                s.push(e(t.item || this).attr(t.attribute || "id") || "")
            }),
            s
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
            i = t + this.helperProportions.width,
            s = this.positionAbs.top,
            a = s + this.helperProportions.height,
            n = e.left,
            r = n + e.width,
            o = e.top,
            h = o + e.height,
            l = this.offset.click.top,
            u = this.offset.click.left,
            c = s + l > o && h > s + l && t + u > n && r > t + u;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width": "height"] > e[this.floating ? "width": "height"] ? c: t + this.helperProportions.width / 2 > n && r > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > o && h > a - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
            s = "y" === this.options.axis || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
            a = i && s,
            n = this._getDragVerticalDirection(),
            r = this._getDragHorizontalDirection();
            return a ? this.floating ? r && "right" == r || "down" == n ? 2 : 1 : n && ("down" == n ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var i = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
            s = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
            a = this._getDragVerticalDirection(),
            n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" == n && s || "left" == n && !s: a && ("down" == a && i || "up" == a && !i)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != e && (e > 0 ? "down": "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != e && (e > 0 ? "right": "left")
        },
        refresh: function(e) {
            return this._refreshItems(e),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var i = [],
            s = [],
            a = this._connectWith();
            if (a && t) for (var n = a.length - 1; n >= 0; n--) for (var r = e(a[n]), o = r.length - 1; o >= 0; o--) {
                var h = e.data(r[o], this.widgetName);
                h && h != this && !h.options.disabled && s.push([e.isFunction(h.options.items) ? h.options.items.call(h.element) : e(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
            }
            s.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var n = s.length - 1; n >= 0; n--) s[n][0].each(function() {
                i.push(this)
            });
            return e(i)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items,
            function(e) {
                for (var i = 0; t.length > i; i++) if (t[i] == e.item[0]) return ! 1;
                return ! 0
            })
        },
        _refreshItems: function(t) {
            this.items = [],
            this.containers = [this];
            var i = this.items,
            s = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : e(this.options.items, this.element), this]],
            a = this._connectWith();
            if (a && this.ready) for (var n = a.length - 1; n >= 0; n--) for (var r = e(a[n]), o = r.length - 1; o >= 0; o--) {
                var h = e.data(r[o], this.widgetName);
                h && h != this && !h.options.disabled && (s.push([e.isFunction(h.options.items) ? h.options.items.call(h.element[0], t, {
                    item: this.currentItem
                }) : e(h.options.items, h.element), h]), this.containers.push(h))
            }
            for (var n = s.length - 1; n >= 0; n--) for (var l = s[n][1], u = s[n][0], o = 0, c = u.length; c > o; o++) {
                var d = e(u[o]);
                d.data(this.widgetName + "-item", l),
                i.push({
                    item: d,
                    instance: l,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i];
                if (s.instance == this.currentContainer || !this.currentContainer || s.item[0] == this.currentItem[0]) {
                    var a = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item;
                    t || (s.width = a.outerWidth(), s.height = a.outerHeight());
                    var n = a.offset();
                    s.left = n.left,
                    s.top = n.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (var i = this.containers.length - 1; i >= 0; i--) {
                var n = this.containers[i].element.offset();
                this.containers[i].containerCache.left = n.left,
                this.containers[i].containerCache.top = n.top,
                this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var i = t.options;
            if (!i.placeholder || i.placeholder.constructor == String) {
                var s = i.placeholder;
                i.placeholder = {
                    element: function() {
                        var i = e(document.createElement(t.currentItem[0].nodeName)).addClass(s || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return s || (i.style.visibility = "hidden"),
                        i
                    },
                    update: function(e, a) { (!s || i.forcePlaceholderSize) && (a.height() || a.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), a.width() || a.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)),
            t.currentItem.after(t.placeholder),
            i.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            for (var i = null,
            s = null,
            a = this.containers.length - 1; a >= 0; a--) if (!e.contains(this.currentItem[0], this.containers[a].element[0])) if (this._intersectsWith(this.containers[a].containerCache)) {
                if (i && e.contains(this.containers[a].element[0], i.element[0])) continue;
                i = this.containers[a],
                s = a
            } else this.containers[a].containerCache.over && (this.containers[a]._trigger("out", t, this._uiHash(this)), this.containers[a].containerCache.over = 0);
            if (i) if (1 === this.containers.length) this.containers[s]._trigger("over", t, this._uiHash(this)),
            this.containers[s].containerCache.over = 1;
            else {
                for (var n = 1e4,
                r = null,
                o = this.containers[s].floating ? "left": "top", h = this.containers[s].floating ? "width": "height", l = this.positionAbs[o] + this.offset.click[o], u = this.items.length - 1; u >= 0; u--) if (e.contains(this.containers[s].element[0], this.items[u].item[0]) && this.items[u].item[0] != this.currentItem[0]) {
                    var c = this.items[u].item.offset()[o],
                    d = !1;
                    Math.abs(c - l) > Math.abs(c + this.items[u][h] - l) && (d = !0, c += this.items[u][h]),
                    n > Math.abs(c - l) && (n = Math.abs(c - l), r = this.items[u], this.direction = d ? "up": "down")
                }
                if (!r && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[s],
                r ? this._rearrange(t, r, null, !0) : this._rearrange(t, null, this.containers[s].element, !0),
                this._trigger("change", t, this._uiHash()),
                this.containers[s]._trigger("change", t, this._uiHash(this)),
                this.options.placeholder.update(this.currentContainer, this.placeholder),
                this.containers[s]._trigger("over", t, this._uiHash(this)),
                this.containers[s].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var i = this.options,
            s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || e("parent" != i.appendTo ? i.appendTo: this.currentItem[0].parentNode)[0].appendChild(s[0]),
            s[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            ("" == s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
            ("" == s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
            s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left" in t && (this.offset.click.left = t.left + this.margins.left),
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top" in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" == t.containment ? document: window).width() - this.helperProportions.width - this.margins.left, (e("document" == t.containment ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
                var i = e(t.containment)[0],
                s = e(t.containment).offset(),
                a = "hidden" != e(i).css("overflow");
                this.containment = [s.left + (parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0) - this.margins.left, s.top + (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0) - this.margins.top, s.left + (a ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, s.top + (a ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" == t ? 1 : -1,
            a = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent),
            n = /(html|body)/i.test(a[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : a.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : a.scrollLeft()) * s
            }
        },
        _generatePosition: function(t) {
            var i = this.options,
            s = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            a = /(html|body)/i.test(s[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var n = t.pageX,
            r = t.pageY;
            if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), i.grid)) {
                var o = this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1];
                r = this.containment ? o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3] ? o - this.offset.click.top < this.containment[1] ? o + i.grid[1] : o - i.grid[1] : o: o;
                var h = this.originalPageX + Math.round((n - this.originalPageX) / i.grid[0]) * i.grid[0];
                n = this.containment ? h - this.offset.click.left < this.containment[0] || h - this.offset.click.left > this.containment[2] ? h - this.offset.click.left < this.containment[0] ? h + i.grid[0] : h - i.grid[0] : h: h
            }
            return {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : s.scrollTop()),
                left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : s.scrollLeft())
            }
        },
        _rearrange: function(e, t, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter: 1;
            var a = this.counter;
            this._delay(function() {
                a == this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, i) {
            this.reverting = !1;
            var s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var a in this._storedCSS)("auto" == this._storedCSS[a] || "static" == this._storedCSS[a]) && (this._storedCSS[a] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !i && s.push(function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }),
            !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || s.push(function(e) {
                this._trigger("update", e, this._uiHash())
            }),
            this !== this.currentContainer && (i || (s.push(function(e) {
                this._trigger("remove", e, this._uiHash())
            }), s.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), s.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (var a = this.containers.length - 1; a >= 0; a--) i || s.push(function(e) {
                return function(t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[a])),
            this.containers[a].containerCache.over && (s.push(function(e) {
                return function(t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[a])), this.containers[a].containerCache.over = 0);
            if (this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "": this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (var a = 0; s.length > a; a++) s[a].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (i || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (var a = 0; s.length > a; a++) s[a].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element: null
            }
        }
    })
})(jQuery);
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
    var n = this,
    t = n._,
    r = {},
    e = Array.prototype,
    u = Object.prototype,
    i = Function.prototype,
    a = e.push,
    o = e.slice,
    c = e.concat,
    l = u.toString,
    f = u.hasOwnProperty,
    s = e.forEach,
    p = e.map,
    h = e.reduce,
    v = e.reduceRight,
    g = e.filter,
    d = e.every,
    m = e.some,
    y = e.indexOf,
    b = e.lastIndexOf,
    x = Array.isArray,
    w = Object.keys,
    _ = i.bind,
    j = function(n) {
        return n instanceof j ? n: this instanceof j ? void(this._wrapped = n) : new j(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j,
    j.VERSION = "1.6.0";
    var A = j.each = j.forEach = function(n, t, e) {
        if (null == n) return n;
        if (s && n.forEach === s) n.forEach(t, e);
        else if (n.length === +n.length) {
            for (var u = 0,
            i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return
        } else for (var a = j.keys(n), u = 0, i = a.length; i > u; u++) if (t.call(e, n[a[u]], a[u], n) === r) return;
        return n
    };
    j.map = j.collect = function(n, t, r) {
        var e = [];
        return null == n ? e: p && n.map === p ? n.map(t, r) : (A(n,
        function(n, u, i) {
            e.push(t.call(r, n, u, i))
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = j.bind(t, e)),
        u ? n.reduce(t, r) : n.reduce(t);
        if (A(n,
        function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u) throw new TypeError(O);
        return r
    },
    j.reduceRight = j.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = j.bind(t, e)),
        u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = j.keys(n);
            i = a.length
        }
        if (A(n,
        function(o, c, l) {
            c = a ? a[--i] : --i,
            u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u) throw new TypeError(O);
        return r
    },
    j.find = j.detect = function(n, t, r) {
        var e;
        return k(n,
        function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }),
        e
    },
    j.filter = j.select = function(n, t, r) {
        var e = [];
        return null == n ? e: g && n.filter === g ? n.filter(t, r) : (A(n,
        function(n, u, i) {
            t.call(r, n, u, i) && e.push(n)
        }), e)
    },
    j.reject = function(n, t, r) {
        return j.filter(n,
        function(n, e, u) {
            return ! t.call(r, n, e, u)
        },
        r)
    },
    j.every = j.all = function(n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u: d && n.every === d ? n.every(t, e) : (A(n,
        function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var k = j.some = j.any = function(n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u: m && n.some === m ? n.some(t, e) : (A(n,
        function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r: void 0
        }), !!u)
    };
    j.contains = j.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : k(n,
        function(n) {
            return n === t
        })
    },
    j.invoke = function(n, t) {
        var r = o.call(arguments, 2),
        e = j.isFunction(t);
        return j.map(n,
        function(n) {
            return (e ? t: n[t]).apply(n, r)
        })
    },
    j.pluck = function(n, t) {
        return j.map(n, j.property(t))
    },
    j.where = function(n, t) {
        return j.filter(n, j.matches(t))
    },
    j.findWhere = function(n, t) {
        return j.find(n, j.matches(t))
    },
    j.max = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
        var e = -1 / 0,
        u = -1 / 0;
        return A(n,
        function(n, i, a) {
            var o = t ? t.call(r, n, i, a) : n;
            o > u && (e = n, u = o)
        }),
        e
    },
    j.min = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
        var e = 1 / 0,
        u = 1 / 0;
        return A(n,
        function(n, i, a) {
            var o = t ? t.call(r, n, i, a) : n;
            u > o && (e = n, u = o)
        }),
        e
    },
    j.shuffle = function(n) {
        var t, r = 0,
        e = [];
        return A(n,
        function(n) {
            t = j.random(r++),
            e[r - 1] = e[t],
            e[t] = n
        }),
        e
    },
    j.sample = function(n, t, r) {
        return null == t || r ? (n.length !== +n.length && (n = j.values(n)), n[j.random(n.length - 1)]) : j.shuffle(n).slice(0, Math.max(0, t))
    };
    var E = function(n) {
        return null == n ? j.identity: j.isFunction(n) ? n: j.property(n)
    };
    j.sortBy = function(n, t, r) {
        return t = E(t),
        j.pluck(j.map(n,
        function(n, e, u) {
            return {
                value: n,
                index: e,
                criteria: t.call(r, n, e, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
            e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return - 1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = E(r),
            A(t,
            function(i, a) {
                var o = r.call(e, i, a, t);
                n(u, o, i)
            }),
            u
        }
    };
    j.groupBy = F(function(n, t, r) {
        j.has(n, t) ? n[t].push(r) : n[t] = [r]
    }),
    j.indexBy = F(function(n, t, r) {
        n[t] = r
    }),
    j.countBy = F(function(n, t) {
        j.has(n, t) ? n[t]++:n[t] = 1
    }),
    j.sortedIndex = function(n, t, r, e) {
        r = E(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    },
    j.toArray = function(n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
    },
    j.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length: j.keys(n).length
    },
    j.first = j.head = j.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : o.call(n, 0, t)
    },
    j.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    },
    j.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    },
    j.rest = j.tail = j.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    },
    j.compact = function(n) {
        return j.filter(n, j.identity)
    };
    var M = function(n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n,
        function(n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n)
        }), r)
    };
    j.flatten = function(n, t) {
        return M(n, t, [])
    },
    j.without = function(n) {
        return j.difference(n, o.call(arguments, 1))
    },
    j.partition = function(n, t) {
        var r = [],
        e = [];
        return A(n,
        function(n) { (t(n) ? r: e).push(n)
        }),
        [r, e]
    },
    j.uniq = j.unique = function(n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? j.map(n, r, e) : n,
        i = [],
        a = [];
        return A(u,
        function(r, e) { (t ? e && a[a.length - 1] === r: j.contains(a, r)) || (a.push(r), i.push(n[e]))
        }),
        i
    },
    j.union = function() {
        return j.uniq(j.flatten(arguments, !0))
    },
    j.intersection = function(n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n),
        function(n) {
            return j.every(t,
            function(t) {
                return j.contains(t, n)
            })
        })
    },
    j.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n,
        function(n) {
            return ! j.contains(t, n)
        })
    },
    j.zip = function() {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r);
        return t
    },
    j.object = function(n, t) {
        if (null == n) return {};
        for (var r = {},
        e = 0,
        u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    },
    j.indexOf = function(n, t, r) {
        if (null == n) return - 1;
        var e = 0,
        u = n.length;
        if (r) {
            if ("number" != typeof r) return e = j.sortedIndex(n, t),
            n[e] === t ? e: -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++) if (n[e] === t) return e;
        return - 1
    },
    j.lastIndexOf = function(n, t, r) {
        if (null == n) return - 1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r: n.length; u--;) if (n[u] === t) return u;
        return - 1
    },
    j.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0),
        r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n,
        n += r;
        return i
    };
    var R = function() {};
    j.bind = function(n, t) {
        var r, e;
        if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n)) throw new TypeError;
        return r = o.call(arguments, 2),
        e = function() {
            if (! (this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R;
            R.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i: u
        }
    },
    j.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            for (var r = 0,
            e = t.slice(), u = 0, i = e.length; i > u; u++) e[u] === j && (e[u] = arguments[r++]);
            for (; r < arguments.length;) e.push(arguments[r++]);
            return n.apply(this, e)
        }
    },
    j.bindAll = function(n) {
        var t = o.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return A(t,
        function(t) {
            n[t] = j.bind(n[t], n)
        }),
        n
    },
    j.memoize = function(n, t) {
        var r = {};
        return t || (t = j.identity),
        function() {
            var e = t.apply(this, arguments);
            return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    },
    j.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        },
        t)
    },
    j.defer = function(n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
    },
    j.throttle = function(n, t, r) {
        var e, u, i, a = null,
        o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading === !1 ? 0 : j.now(),
            a = null,
            i = n.apply(e, u),
            e = u = null
        };
        return function() {
            var l = j.now();
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this,
            u = arguments,
            0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u), e = u = null) : a || r.trailing === !1 || (a = setTimeout(c, f)),
            i
        }
    },
    j.debounce = function(n, t, r) {
        var e, u, i, a, o, c = function() {
            var l = j.now() - a;
            t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u), i = u = null))
        };
        return function() {
            i = this,
            u = arguments,
            a = j.now();
            var l = r && !e;
            return e || (e = setTimeout(c, t)),
            l && (o = n.apply(i, u), i = u = null),
            o
        }
    },
    j.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t: (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    },
    j.wrap = function(n, t) {
        return j.partial(t, n)
    },
    j.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments,
            r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    },
    j.after = function(n, t) {
        return function() {
            return--n < 1 ? t.apply(this, arguments) : void 0
        }
    },
    j.keys = function(n) {
        if (!j.isObject(n)) return [];
        if (w) return w(n);
        var t = [];
        for (var r in n) j.has(n, r) && t.push(r);
        return t
    },
    j.values = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e
    },
    j.pairs = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
        return e
    },
    j.invert = function(n) {
        for (var t = {},
        r = j.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t
    },
    j.functions = j.methods = function(n) {
        var t = [];
        for (var r in n) j.isFunction(n[r]) && t.push(r);
        return t.sort()
    },
    j.extend = function(n) {
        return A(o.call(arguments, 1),
        function(t) {
            if (t) for (var r in t) n[r] = t[r]
        }),
        n
    },
    j.pick = function(n) {
        var t = {},
        r = c.apply(e, o.call(arguments, 1));
        return A(r,
        function(r) {
            r in n && (t[r] = n[r])
        }),
        t
    },
    j.omit = function(n) {
        var t = {},
        r = c.apply(e, o.call(arguments, 1));
        for (var u in n) j.contains(r, u) || (t[u] = n[u]);
        return t
    },
    j.defaults = function(n) {
        return A(o.call(arguments, 1),
        function(t) {
            if (t) for (var r in t) n[r] === void 0 && (n[r] = t[r])
        }),
        n
    },
    j.clone = function(n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({},
        n) : n
    },
    j.tap = function(n, t) {
        return t(n),
        n
    };
    var S = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof j && (n = n._wrapped),
        t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return ! 1;
        switch (u) {
        case "[object String]":
            return n == String(t);
        case "[object Number]":
            return n != +n ? t != +t: 0 == n ? 1 / n == 1 / t: n == +t;
        case "[object Date]":
        case "[object Boolean]":
            return + n == +t;
        case "[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return ! 1;
        for (var i = r.length; i--;) if (r[i] == n) return e[i] == t;
        var a = n.constructor,
        o = t.constructor;
        if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o) && "constructor" in n && "constructor" in t) return ! 1;
        r.push(n),
        e.push(t);
        var c = 0,
        f = !0;
        if ("[object Array]" == u) {
            if (c = n.length, f = c == t.length) for (; c--&&(f = S(n[c], t[c], r, e)););
        } else {
            for (var s in n) if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break;
            if (f) {
                for (s in t) if (j.has(t, s) && !c--) break;
                f = !c
            }
        }
        return r.pop(),
        e.pop(),
        f
    };
    j.isEqual = function(n, t) {
        return S(n, t, [], [])
    },
    j.isEmpty = function(n) {
        if (null == n) return ! 0;
        if (j.isArray(n) || j.isString(n)) return 0 === n.length;
        for (var t in n) if (j.has(n, t)) return ! 1;
        return ! 0
    },
    j.isElement = function(n) {
        return ! (!n || 1 !== n.nodeType)
    },
    j.isArray = x ||
    function(n) {
        return "[object Array]" == l.call(n)
    },
    j.isObject = function(n) {
        return n === Object(n)
    },
    A(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function(n) {
        j["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }),
    j.isArguments(arguments) || (j.isArguments = function(n) {
        return ! (!n || !j.has(n, "callee"))
    }),
    "function" != typeof / . / &&(j.isFunction = function(n) {
        return "function" == typeof n
    }),
    j.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    },
    j.isNaN = function(n) {
        return j.isNumber(n) && n != +n
    },
    j.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    },
    j.isNull = function(n) {
        return null === n
    },
    j.isUndefined = function(n) {
        return n === void 0
    },
    j.has = function(n, t) {
        return f.call(n, t)
    },
    j.noConflict = function() {
        return n._ = t,
        this
    },
    j.identity = function(n) {
        return n
    },
    j.constant = function(n) {
        return function() {
            return n
        }
    },
    j.property = function(n) {
        return function(t) {
            return t[n]
        }
    },
    j.matches = function(n) {
        return function(t) {
            if (t === n) return ! 0;
            for (var r in n) if (n[r] !== t[r]) return ! 1;
            return ! 0
        }
    },
    j.times = function(n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    },
    j.random = function(n, t) {
        return null == t && (t = n, n = 0),
        n + Math.floor(Math.random() * (t - n + 1))
    },
    j.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var T = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    T.unescape = j.invert(T.escape);
    var I = {
        escape: new RegExp("[" + j.keys(T.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + j.keys(T.unescape).join("|") + ")", "g")
    };
    j.each(["escape", "unescape"],
    function(n) {
        j[n] = function(t) {
            return null == t ? "": ("" + t).replace(I[n],
            function(t) {
                return T[n][t]
            })
        }
    }),
    j.result = function(n, t) {
        if (null == n) return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r
    },
    j.mixin = function(n) {
        A(j.functions(n),
        function(t) {
            var r = j[t] = n[t];
            j.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments),
                z.call(this, r.apply(j, n))
            }
        })
    };
    var N = 0;
    j.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t: t
    },
    j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/,
    B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function(n, t, r) {
        var e;
        r = j.defaults({},
        r, j.templateSettings);
        var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
        i = 0,
        a = "__p+='";
        n.replace(u,
        function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(D,
            function(n) {
                return "\\" + B[n]
            }),
            r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"),
            e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"),
            u && (a += "';\n" + u + "\n__p+='"),
            i = o + t.length,
            t
        }),
        a += "';\n",
        r.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a)
        } catch(o) {
            throw o.source = a,
            o
        }
        if (t) return e(t, j);
        var c = function(n) {
            return e.call(this, n, j)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}",
        c
    },
    j.chain = function(n) {
        return j(n).chain()
    };
    var z = function(n) {
        return this._chain ? j(n).chain() : n
    };
    j.mixin(j),
    A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" != n && "splice" != n || 0 !== r.length || delete r[0],
            z.call(this, r)
        }
    }),
    A(["concat", "join", "slice"],
    function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }),
    j.extend(j.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    }),
    "function" == typeof define && define.amd && define("underscore", [],
    function() {
        return j
    })
}).call(this);

eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? "": e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) d[e(c)] = k[c] || e(c);
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1;
    };
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p;
} ('0 2=\'1=\';0 3=\'4=\';', 5, 5, 'var|ZSw5LGEsZSxiLDksZSw5LGEsZSw4LDksZSxhLDksZSw4LDgsZSw5LDgsZSw5LDksZSw4LGEsZSw4LGIsZSw4LDgsZSw5LDgsZSw4LDgsZSw5LDg|cp|rt|NixkLGQsNSw3LGUsNSwwLGYsNSxkLGEsNyw3LDEsNixhLDAsNixjLDksOSw5LDAsNSw1LGMsNSxmLDgsNyw5LDgsNixkLDMsNiw5LDAsNixjLDk'.split('|'), 0, {})); !
function(a, b, c) {
    function d(a) {
        this.title = a.title,
        this.selector = a.selector,
        this.$content = a.$content || null,
        this.$curParent = null
    }
    function e(b, d) {
        var e = b.outerWidth(),
        f = b.outerHeight(),
        g = a(c),
        i = g.height(),
        l = g.width(),
        m = b.find(".jbox-title").outerHeight(),
        n = b.find(".jbox-buttons").outerHeight(),
        o = b.find(".jbox-container"),
        p = h(d);
        if ("auto" == p.width ? (e < p.minWidth && (e = p.minWidth), e > 900 && (e = 900)) : e = p.width, e >= l && (e = l - 50), "auto" == p.height ? (f < p.minHeight && (f = p.minHeight), f >= i && (f = i - 100)) : f = p.height, f >= i && (f = i - 50), o.css("height", f - m - n - parseInt(o.css("paddingTop")) - parseInt(o.css("paddingBottom"))), b.css({
            position: "fixed",
            width: e,
            height: f,
            left: "50%",
            top: "50%",
            marginLeft: -parseInt(e / 2),
            marginTop: -parseInt(f / 2),
            zIndex: 99998
        }), j && 6 >= k) {
            var q = parseInt(g.scrollTop());
            b.css({
                position: "absolute",
                top: i / 2 + q
            })
        }
    }
    function f() {
        a("#jbox-overlay").length < 1 && a("body").append('<div id="jbox-overlay"></div>');
        var b = a("#jbox-overlay"),
        d = a(c),
        e = a("body").height(),
        f = d.height(),
        g = f > e ? f: e;
        if (b.css({
            position: "fixed",
            zIndex: 99997,
            top: "0px",
            left: "0px",
            width: "100%",
            height: g,
            background: "#000",
            opacity: .15
        }), j && 6 >= k) {
            var h = parseInt(d.scrollTop());
            b.css({
                position: "absolute",
                top: h
            })
        }
        b.show()
    }
    function g() {
        a("#jbox-overlay").fadeOut(200)
    }
    function h(b) {
        var c = null,
        d = null,
        e = null;
        return c = a.extend({},
        i, b),
        d = a.extend({},
        i.btnOK, b.btnOK),
        e = a.extend({},
        i.btnCancel, b.btnCancel),
        c.btnOK = d,
        c.btnCancel = e,
        c
    }
    var i = {
        title: "提示",
        width: "auto",
        height: "auto",
        minWidth: 400,
        minHeight: 200,
        content: "",
        onOpen: !1,
        onClosed: !1,
        btnOK: {
            text: "确定",
            show: !0,
            extclass: "btn btn-primary",
            onBtnClick: !1
        },
        btnCancel: {
            text: "取消",
            show: !0,
            extclass: "btn",
            onBtnClick: !1
        }
    },
    j = a.browser.msie,
    k = parseInt(a.browser.version);
    d.prototype.create = function(b, c) {
        var d = this.title,
        h = this.selector,
        i = null,
        j = null;
        this.$content = i = this.$content ? this.$content: a(h);
        try {
            this.$curParent = j = i.parent()
        } catch(k) {}
        var l = a('<div class="jbox"></div>'),
        m = a('<div class="jbox-title"></div>'),
        n = a('<div class="jbox-container"></div>'),
        o = a('<div class="jbox-buttons"></div>');
        if (m.append('<div class="jbox-title-txt">' + d + "</div>", '<a href="javascript:;" class="jbox-close"></a>'), b.btnOK.show) {
            var p = a('<a href="javascript:;" class="jbox-buttons-ok ' + b.btnOK.extclass + '">' + b.btnOK.text + "</a>");
            b.btnOK.onBtnClick && p.click(function() {
                b.btnOK.onBtnClick.call(b.trigger, l)
            }),
            o.append(p)
        }
        if (b.btnCancel.show) {
            var q = a('<a href="javascript:;" class="jbox-buttons-ok ' + b.btnCancel.extclass + '">' + b.btnCancel.text + "</a>");
            q.click(function() {
                b.btnCancel.onBtnClick ? b.btnCancel.onBtnClick.call(b.trigger, l) : l.find(".jbox-close").triggerHandler("click")
            }),
            o.append(q)
        }
        n.append(i),
        b.btnOK.show || b.btnCancel.show ? l.append(m, n, o) : l.append(m, n),
        a("body").append(l),
        e(l, b),
        f(),
        l.find(".jbox-close").one("click",
        function() {
            try {
                i.appendTo(j)
            } catch(a) {}
            return b.onClosed && b.onClosed.call(b.trigger),
            l.remove(),
            g(),
            !1
        }),
        l && c && c.call(b.trigger, l)
    },
    a.fn.jBox = function(b) {
        return this.each(function() {
            var c = a(this),
            e = c.data("rule") || "normal",
            f = h(b ? b: {});
            if (f.trigger = this, "box" == e) c.click(function() {
                var a = new d({
                    title: c.attr("title") || f.title,
                    selector: c.attr("href")
                });
                return a.create(f, f.onOpen),
                !1
            });
            else {
                var g = new d({
                    title: f.title,
                    $content: c
                });
                g.create(f, f.onOpen)
            }
        })
    };
    var l = a.jBox = {};
    l.show = function(a) {
        var b = h(a ? a: {}),
        c = new d({
            title: b.title,
            $content: b.content
        });
        c.create(b, b.onOpen)
    },
    l.reposition = function() {
        a(".jbox").each(function() {
            e(a(this))
        })
    },
    l.showloading = function() {
        var b = a("#jbox-loading");
        if (!b.length > 0) {
            var b = a('<div id="jbox-loading"><i></i></div>');
            a("body").append(b)
        }
        b.fadeIn(200)
    },
    l.hideloading = function() {
        a("#jbox-loading").fadeOut(200)
    },
    l.close = function(b) {
        a(b).find(".jbox-close").triggerHandler("click")
    }
} (jQuery, document, window); !
function(e, t, c) {
    var a = {
        selectMod: 1,
        selectIds: [],
        callback: null
    },
    s = {
        selectGoods: e("#tpl_popup_selectGoods").html()
    },
    n = null,
    l = {},
    i = {
        getItem: "/Design/getItem"
    },
    o = function(t, c, a) {
        e.ajax({
            url: i.getItem + "?v=" + Math.round(100 * Math.random()),
            type: "POST",
            dataType: "json",
            data: a,
            beforeSend: function() {
                e.jBox.showloading()
            },
            success: function(i) {
                if (1 == i.status) {
                    n = i.list;
                    var o = _.template(s.selectGoods, {
                        dataset: i.list,
                        classlists: i.class_lists,
                        page: i.page,
                        formdata: a,
                        selectMod: c.selectMod,
                        selectIds: c.selectIds,
                        curPageCache: l[a.p]
                    }),
                    d = e(o);
                    t.find(".jbox-container").empty().html(d)
                } else HYD.hint("danger", "获取数据失败，" + i.msg),
                e.jBox.close(t);
                e.jBox.hideloading()
            }
        })
    },
    d = function(e) {
        var t = e.attr("href");
        if (t.length) {
            var c = t.split("/"),
            a = c[c.length - 1].replace(/.html/, "");
            return a
        }
    };
    _QV_ = "%E6%9D%AD%E5%B7%9E%E5%90%AF%E5%8D%9A%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%89%88%E6%9D%83%E6%89%80%E6%9C%89",
    e.selectGoods = function(t) {
        var c = e.extend(!0, {},
        a, t);
        n = null,
        l = {},
        e.jBox.show({
            title: "选择商品",
            width: 1e3,
            minHeight: 605,
            content: "",
            onOpen: function(t) {
                o(t, c, {
                    p: 1
                });
                var a = function() {
                    var c = t.find(".paginate a.cur").text(),
                    a = [],
                    s = [];
                    t.find(".j-chkbox:checked").each(function() {
                        var t = e(this),
                        c = t.data("itemid"),
                        l = t.data("index"),
                        i = n[l];
                        a.push(c),
                        s.push(i)
                    }),
                    l[c] = {
                        ids: a,
                        data: s
                    }
                };
                t.on("click", ".paginate a",
                function() {
                    if (!e(this).hasClass("cur")) {
                        a();
                        var s = d(e(this)),
                        n = t.find("input[name=title]").val(),
                        l = t.find("select[name=status]").val(),
                        i = t.find("select[name=class_id]").val();
                        return o(t, c, {
                            p: s,
                            title: n,
                            status: l,
                            class_id: i
                        }),
                        !1
                    }
                }),
                t.on("click", ".j-search",
                function() {
                    var e = t.find("input[name=title]").val(),
                    a = t.find("select[name=status]").val(),
                    s = t.find("select[name=class_id]").val();
                    o(t, c, {
                        p: 1,
                        title: e,
                        status: a,
                        class_id: s
                    })
                }),
                1 == c.selectMod ? t.on("click", ".j-select",
                function() {
                    var a = e(this).data("index");
                    c.callback && c.callback(n[a]),
                    e.jBox.close(t)
                }) : (t.on("click", ".j-select",
                function() {
                    var t = e(this),
                    c = t.siblings(".j-chkbox");
                    t.hasClass("cur") ? (t.removeClass("cur"), c.attr("checked", !1)) : (t.addClass("cur"), c.attr("checked", !0))
                }), t.on("click", ".j-use",
                function() {
                    a();
                    var s = [],
                    n = [];
                    for (var i in l) s = s.concat(l[i].ids),
                    n = n.concat(l[i].data);
                    c.callback && c.callback(n, s),
                    e.jBox.close(t)
                }), t.on("click", ".j-selectAll",
                function() {
                    t.find(".j-select").addClass("cur"),
                    t.find(".j-chkbox").attr("checked", !0)
                }), t.on("click", ".j-selectReverse",
                function() {
                    t.find(".j-select").each(function() {
                        var t = e(this),
                        c = t.siblings(".j-chkbox");
                        t.hasClass("cur") ? (t.removeClass("cur"), c.attr("checked", !1)) : (t.addClass("cur"), c.attr("checked", !0))
                    })
                }), t.on("click", ".j-cancelSelectAll",
                function() {
                    t.find(".j-select").removeClass("cur"),
                    t.find(".j-chkbox").attr("checked", !1)
                }))
            },
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            }
        })
    }
} (jQuery, document, window);
var HYD = HYD ? HYD: {};
HYD.Constant = HYD.Constant ? HYD.Constant: {},
HYD.popbox = HYD.popbox ? HYD.popbox: {},
HYD.linkType = {
    1 : "选择商品",
    2 : "商品分组",
    3 : "专题页面",
    4 : "页面分类",
    5 : "营销活动",
    6 : "店铺主页",
    7 : "会员主页",
    8 : "分销申请",
    9 : "购物车",
    10 : "全部商品",
    12 : "商品分类",
    11 : "自定义链接",
    13 : "我的订单"
},
HYD.getTimestamp = function() {
    var o = new Date;
    return "" + o.getFullYear() + parseInt(o.getMonth() + 1) + o.getDate() + o.getHours() + o.getMinutes() + o.getSeconds() + o.getMilliseconds()
},
HYD.hint = function(o, e, i) {
    if (o && e) {
        var n = $("#tpl_hint").html(),
        c = _.template(n, {
            type: o,
            content: e
        }),
        l = $(c),
        t = 200,
        i = i || 1500;
        $("body").append(l.css({
            opacity: "0",
            zIndex: "999999"
        })),
        l.animate({
            opacity: 1,
            top: 200
        },
        t,
        function() {
            setTimeout(function() {
                l.animate({
                    opacity: 0,
                    top: 600
                },
                t,
                function() {
                    $(this).remove()
                })
            },
            i)
        })
    }
},
HYD.FormShowError = function(o, e, i) {
    o && e && (void 0 == i && (i = !0), o.addClass("error").siblings(".fi-help-text").addClass("error").text(e).show(), i && o.focus(), "select" == o[0].nodeName.toLowerCase() && o.siblings(".select-sim").addClass("error"), o.one("change",
    function() {
        HYD.FormClearError($(this))
    }))
},
HYD.FormClearError = function(o) {
    o && (o.removeClass("error").siblings(".fi-help-text").hide(), "select" == o[0].nodeName.toLowerCase() && o.siblings(".select-sim").removeClass("error"))
},
HYD.showQrcode = function(o) {
    var e = $("#qrcode");
    if (!e.length) {
        var i = _.template($("#tpl_qrcode").html(), {
            src: o
        });
        e = $(i),
        e.click(function() {
            e.fadeOut(300)
        }),
        $("body").append(e)
    }
    e.find("img").attr("src", o),
    e.fadeIn(300)
},
HYD.changeWizardStep = function(o, e) {
    var i = $(o),
    n = i.find(".wizard-item");
    n.removeClass("process complete");
    for (var c = 0; c <= e - 1; c++) n.filter(":eq(" + c + ")").addClass("complete");
    n.filter(":eq(" + e + ")").addClass("process")
},
HYD.autoLocation = function(o, e) {
    if (o) {
        var e = e ? e: 2e3;
        timer = setInterval(function() {
            e <= 1e3 ? (clearInterval(timer), window.location.href = o) : (e -= 1e3, $("#j-autoLocation-second").text(e / 1e3))
        },
        1e3)
    }
},
HYD.ajaxPopTable = function(o) {
    var e, i, n = {
        title: "",
        url: "",
        data: {
            p: 1
        },
        tpl: "",
        onOpen: null,
        onPageChange: null
    },
    c = $.extend(!0, {},
    n, o),
    l = $("<div></div>"),
    t = function(o) {
        var n = c.tpl,
        s = c.url,
        a = function(s) {
            e = s;
            var a = _.template(n, s),
            g = $(a);
            l.empty().append(g),
            l.find(".paginate a:not(.disabled,.cur)").click(function() {
                for (var o = $(this).attr("href"), e = o.split("/"), i = 0; i < e.length; i++) if ("p" == e[i]) {
                    c.data.p = e[i + 1],
                    t();
                    break
                }
                return ! 1
            }),
            o && o(),
            c.onPageChange && c.onPageChange(i, e)
        };
        $.ajax({
            url: s + "?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: c.data,
            success: function(o) {
                1 == o.status ? a(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
            }
        })
    };
    t(function() {
        $.jBox.show({
            title: c.title,
            content: l,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(o) {
                i = o,
                c.onOpen && c.onOpen(o, e)
            }
        })
    })
},
HYD.popbox.ImgPicker = function(o) {
    var e, i = $("#tpl_popbox_ImgPicker").html(),
    n = $(i),
    c = function(o, i) {
        var l = function(o) {
            if (e = o.list, e && e.length) {
                var l = _.template($("#tpl_popbox_ImgPicker_listItem").html(), {
                    dataset: e
                }),
                t = $(l);
                t.filter("li").click(function() {
                    $(this).toggleClass("selected")
                }),
                n.find(".imgpicker-list").empty().append(t);
                var s = o.page,
                a = $(s);
                a.filter("a:not(.disabled,.cur)").click(function() {
                    var o = $(this).attr("href"),
                    e = o.split("/");
                    return e = e[e.length - 1],
                    e = e.replace(/.html/, ""),
                    c(e),
                    !1
                }),
                n.find(".paginate").empty().append(a)
            } else n.find(".imgpicker-list").append("<p class='txtCenter'>对不起，暂无图片</p>");
            i && i()
        };
        $.ajax({
            url: "/Design/getImg?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(o)
            },
            success: function(o) {
                1 == o.status ? l(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
            }
        })
    },
    l = function(e) {
        var i = [];
        n.find("#imgpicker_upload_input").uploadify({
            debug: !1,
            auto: !0,
            formData: {
                PHPSESSID: $.cookie("PHPSESSID")
            },
            width: 60,
            height: 60,
            multi: !0,
            swf: "/Public/plugins/uploadify/uploadify.swf",
            uploader: "/Design/uploadFile",
            buttonText: "+",
            fileSizeLimit: "5MB",
            fileTypeExts: "*.jpg; *.jpeg; *.png; *.gif; *.bmp",
            onSelectError: function(o, e, i) {
                switch (e) {
                case - 100 : HYD.hint("danger", "对不起，系统只允许您一次最多上传10个文件");
                    break;
                case - 110 : HYD.hint("danger", "对不起，文件 [" + o.name + "] 大小超出5MB！");
                    break;
                case - 120 : HYD.hint("danger", "文件 [" + o.name + "] 大小异常！");
                    break;
                case - 130 : HYD.hint("danger", "文件 [" + o.name + "] 类型不正确！")
                }
            },
            onFallback: function() {
                HYD.hint("danger", "您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试。")
            },
            onUploadSuccess: function(o, e, c) {
                var e = $.parseJSON(e),
                l = $("#tpl_popbox_ImgPicker_uploadPrvItem").html(),
                t = n.find(".imgpicker-upload-preview"),
                s = e.file_path;
                i.push(s);
                var a = _.template(l, {
                    url: s
                }),
                g = $(a);
                g.find(".j-imgpicker-upload-btndel").click(function() {
                    var o = n.find(".imgpicker-upload-preview li").index($(this).parent("li"));
                    g.fadeOut(300,
                    function() {
                        i.splice(o, 1),
                        $(this).remove()
                    })
                }),
                t.append(g)
            },
            onUploadError: function(o, e, i, n) {
                HYD.hint("danger", "对不起：" + o.name + "上传失败：" + n)
            }
        }),
        n.find("#j-btn-uploaduse").click(function() {
            o && o(i),
            $.jBox.close(e)
        })
    };
    c(1,
    function() {
        $.jBox.show({
            title: "选择图片",
            content: n,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(i) {
                var c = n.find("#j-btn-listuse");
                c.click(function() {
                    var c = [];
                    n.find(".imgpicker-list li.selected").each(function() {
                        c.push(e[$(this).index()])
                    }),
                    o && o(c),
                    $.jBox.close(i)
                }),
                n.find(".j-initupload").one("click",
                function() {
                    l(i)
                })
            }
        })
    })
},
HYD.popbox.IconPicker = function(o) {
    var e, i = $("#icon_imgPicker").html(),
    n = $(i);
    e = $.browser.chrome ? "body": document.documentElement || document.body,
    $(e).append(n);
    var c = $("#icon_imglist").html(),
    l = {
        style: "style1",
        color: "color0"
    },
    t = function(o) {
        l = o ? o: l;
        var e = _.template(c, {
            data: HYD.popbox.iconimgsrc.data[l.style][l.color]
        });
        n.find(".albums-icon-tab").html(e),
        n.find(".albums-icon-tab").find("li").click(function(o) {
            var e = $(this);
            e.hasClass("selected") || e.addClass("selected").siblings("li").removeClass("selected")
        })
    };
    t(l),
    n.find(".albums-cr-actions").children("a").click(function(o) {
        var e = $(this),
        i = e.data("style");
        l.style = i,
        e.addClass("cur").siblings("a").removeClass("cur"),
        t(l)
    }),
    n.find(".albums-color-tab").find("li").click(function(o) {
        var e = $(this),
        i = e.data("color");
        l.color = i,
        e.addClass("cur").siblings("li").removeClass("cur"),
        t(l),
        "color1" == i && $(".albums-icon-tab").find("li").css({
            background: "#333"
        })
    });
    var s = [];
    n.find("#j-useIcon").click(function(e) {
        var i = n.find(".albums-icon-tab").find("li.selected");
        if (0 == i.length) return HYD.hint("danger", "对不起，请选择一张小图标"),
        !1;
        var c = i.children("img").attr("src");
        c = c.replace("Public", "PublicMob"),
        s.push(c),
        a(),
        o && o(s)
    });
    var a = function() {
        n.remove()
    };
    n.find("#Jclose").click(function(o) {
        a()
    })
},
HYD.popbox.ModulePicker = function(o) {
    var e, i = $("#tpl_popbox_ModulePicker").html(),
    n = $(i),
    c = function(o, i) {
        var l = function(o) {
            if (e = o.list, e && e.length) {
                var l = $("#tpl_popbox_ModulePicker_item").html(),
                t = _.template(l, {
                    dataset: e
                }),
                s = $(t);
                n.find(".modulePicker-list").empty().append(s);
                var a = o.page,
                g = $(a);
                g.filter("a:not(.disabled,.cur)").click(function() {
                    var o = $(this).attr("href"),
                    e = o.split("/");
                    return e = e[e.length - 1],
                    e = e.replace(/.html/, ""),
                    c(e),
                    !1
                }),
                n.find(".paginate").empty().append(g)
            } else n.find(".modulePicker-list").append("<p class='txtCenter'>对不起，暂无自定义模块</p>");
            i && i()
        };
        $.ajax({
            url: "/Design/getModule?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(o)
            },
            success: function(o) {
                1 == o.status ? l(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
            }
        })
    };
    c(1,
    function() {
        $.jBox.show({
            title: "选择自定义模块",
            content: n,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(i) {
                n.on("click", ".j-select",
                function() {
                    var n = $(".modulePicker-list li").index($(this).parent("li"));
                    o && o(e[n]),
                    $.jBox.close(i)
                })
            }
        })
    })
},
HYD.popbox.GoodsAndGroupPicker = function(o, e) {
    var i, n, c = $("#tpl_popbox_GoodsAndGroupPicker").html(),
    l = $(c),
    t = [],
    s = [],
    a = function(o, e) {
        var n = function(o) {
            if (i = o.list, i && i.length) {
                var n = $("#tpl_popbox_GoodsAndGroupPicker_goodsitem").html(),
                c = _.template(n, {
                    dataset: i
                }),
                g = $(c);
                g.find(".j-select").click(function() {
                    var o, e = $(this),
                    n = e.parent("li"),
                    c = n.index(),
                    l = n.data("item"),
                    a = $(".j-verify").val();
                    if (o = "" != a ? a.split(",") : [], n.hasClass("selected")) {
                        if (n.removeClass("selected"), e.removeClass("btn-success").text("选取"), 0 != t.length) for (var g = 0; g < t.length; g++) if (l == t[g].item_id) {
                            t.splice(g, 1);
                            break
                        }
                        if (0 != s.length) for (var g = 0; g < s.length; g++) {
                            var r = s[g];
                            if (l == r) {
                                s.splice(g, 1);
                                break
                            }
                        }
                        if (0 != o.length) {
                            for (var g = 0; g < o.length; g++) {
                                var r = o[g];
                                if (l == r) {
                                    o.splice(g, 1);
                                    break
                                }
                            }
                            a = o.join(","),
                            $(".j-verify").val(a)
                        }
                    } else n.addClass("selected"),
                    e.addClass("btn-success").text("已选"),
                    t.push(i[c]),
                    s.push(l),
                    o.push(l),
                    a = o.join(","),
                    $(".j-verify").val(a)
                }),
                l.find(".gagp-goodslist").empty().append(g);
                var r = o.page,
                p = $(r);
                p.filter("a:not(.disabled,.cur)").click(function() {
                    var o = $(this).attr("href"),
                    e = o.split("/");
                    return e = e[e.length - 1],
                    e = e.replace(/.html/, ""),
                    a(e),
                    !1
                }),
                l.find(".paginate:eq(0)").empty().append(p)
            } else l.find(".gagp-goodslist").append("<p class='txtCenter'>对不起，暂无数据</p>");
            var u = [];
            "" != $(".j-verify").val() ? u = $(".j-verify").val().split(",") : $(".img-list li").not(".img-list-add").each(function(o, e) {
                var i = $(this).data("item");
                u.push(i)
            }),
            l.find("li").each(function(o, e) {
                var i = $(this),
                n = i.data("item");
                $.each(u,
                function(o, e) {
                    n == e && (i.addClass("selected"), i.children(".j-select").addClass("btn-success").text("已选"))
                })
            }),
            e && e()
        };
        $.ajax({
            url: "/Design/getItem?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(o)
            },
            success: function(o) {
                1 == o.status ? n(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
            }
        })
    },
    g = function(o, e) {
        var i = function(o) {
            if (n = o.list, n && n.length) {
                var i = $("#tpl_popbox_GoodsAndGroupPicker_groupitem").html(),
                c = _.template(i, {
                    dataset: n
                }),
                t = $(c);
                l.find(".gagp-grouplist").empty().append(t);
                var s = o.page,
                a = $(s);
                a.filter("a:not(.disabled,.cur)").click(function() {
                    var o = $(this).attr("href"),
                    e = o.split("/");
                    return e = e[e.length - 1],
                    e = e.replace(/.html/, ""),
                    g(e),
                    !1
                }),
                l.find(".paginate").empty().append(a)
            } else l.find(".gagp-grouplist").append("<p class='txtCenter'>对不起，暂无数据</p>");
            var r = $(".badge-success").data("group");
            void 0 != r && l.find(".gagp-grouplist li").each(function(o, e) {
                var i = $(this),
                n = i.data("group");
                r == n && i.find(".j-select").addClass("btn-success").text("已选")
            }),
            e && e()
        };
        $.ajax({
            url: "/Design/getGroup?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(o)
            },
            success: function(o) {
                1 == o.status ? i(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
            }
        })
    },
    r = function(o, i) {
        l.on("click", ".j-btn-goodsuse",
        function() {
            var i = 1;
            e && e(t, i, s),
            $.jBox.close(o)
        })
    },
    p = function(o) {
        var n = 1;
        l.find(".j-btn-goodsuse").remove(),
        l.on("click", ".gagp-goodslist .j-select",
        function() {
            var c = $(".gagp-goodslist li").index($(this).parent("li"));
            e && e(i[c], n),
            $.jBox.close(o)
        })
    },
    u = function(o) {
        var i = 2;
        l.on("click", ".gagp-grouplist .j-select",
        function() {
            var c = $(".gagp-grouplist li").index($(this).parent("li"));
            e && e(n[c], i),
            $.jBox.close(o)
        })
    },
    m = function(o) {
        p(o),
        l.find(".j-tab-group").one("click",
        function() {
            g(1,
            function() {
                u(o)
            })
        })
    };
    switch (o) {
    case "goods":
    case "goodsMulti":
        l.find(".tabs").remove(),
        l.find(".gagp-goodslist").unwrap().unwrap(),
        l.find(".tc[data-index='2']").remove(),
        a(1,
        function() {
            var e = '<span class="fl">选择商品</span><div class="goodsearch"><input type="text" name="title" placeholder="请输入商品名称" /><select class="select small newselect" style="width:90px;"><option value="-1">在售中</option><option value="3">仓库中</option></select><a href="javascript:;" class="btn btn-primary jGetgood"><i class="gicon-search white"></i>查询</a></div>';
            $.jBox.show({
                title: e,
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    if ("goodsMulti" == o) {
                        var n = [];
                        $(".img-list li").not(".img-list-add").each(function(o, e) {
                            var i = $(this).data("item");
                            n.push(i)
                        }),
                        l.find("li").each(function(o, e) {
                            var i = $(this),
                            c = i.data("item");
                            $.each(n,
                            function(o, e) {
                                c == e && (i.addClass("selected"), i.children(".j-select").addClass("btn-success").text("已选"))
                            })
                        }),
                        r(e, n)
                    } else p(e);
                    $(document).on("click", ".jGetgood",
                    function(o) {
                        var e = $(this).siblings("input").val(),
                        n = $(this).siblings("select").val(),
                        c = function(o, a) {
                            o = o ? o: 1;
                            var g = function(o) {
                                if (i = o.list, i && i.length) {
                                    var e = $("#tpl_popbox_GoodsAndGroupPicker_goodsitem").html(),
                                    n = _.template(e, {
                                        dataset: i
                                    }),
                                    g = $(n);
                                    g.find(".j-select").click(function() {
                                        var o, e = $(this),
                                        n = e.parent("li"),
                                        c = n.index(),
                                        l = n.data("item"),
                                        a = $(".j-verify").val();
                                        if (o = "" != a ? a.split(",") : [], n.hasClass("selected")) {
                                            if (n.removeClass("selected"), e.removeClass("btn-success").text("选取"), 0 != t.length) for (var g = 0; g < t.length; g++) if (l == t[g].item_id) {
                                                t.splice(g, 1);
                                                break
                                            }
                                            if (0 != s.length) for (var g = 0; g < s.length; g++) {
                                                var r = s[g];
                                                if (l == r) {
                                                    s.splice(g, 1);
                                                    break
                                                }
                                            }
                                            if (0 != o.length) {
                                                for (var g = 0; g < o.length; g++) {
                                                    var r = o[g];
                                                    if (l == r) {
                                                        o.splice(g, 1);
                                                        break
                                                    }
                                                }
                                                a = o.join(","),
                                                $(".j-verify").val(a)
                                            }
                                        } else n.addClass("selected"),
                                        e.addClass("btn-success").text("已选"),
                                        t.push(i[c]),
                                        s.push(l),
                                        o.push(l),
                                        a = o.join(","),
                                        $(".j-verify").val(a)
                                    }),
                                    l.find(".gagp-goodslist").empty().append(g);
                                    var r = o.page,
                                    p = $(r);
                                    p.filter("a:not(.disabled,.cur)").click(function() {
                                        var o = $(this).attr("href"),
                                        e = o.split("/");
                                        return e = e[e.length - 1],
                                        e = e.replace(/.html/, ""),
                                        c(e),
                                        !1
                                    }),
                                    l.find(".paginate:eq(0)").empty().append(p)
                                } else l.find(".gagp-goodslist").empty().append("<p class='txtCenter'>对不起，暂无数据</p>"),
                                l.find(".paginate").empty();
                                a && a()
                            };
                            $.ajax({
                                url: "/Design/getItem?v=" + Math.round(100 * Math.random()),
                                type: "post",
                                dataType: "json",
                                data: {
                                    p: parseInt(o),
                                    title: e,
                                    status: n
                                },
                                success: function(o) {
                                    1 == o.status ? g(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
                                }
                            })
                        };
                        c()
                    })
                }
            })
        });
        break;
    case "group":
        l.find(".tabs").remove(),
        l.find(".gagp-grouplist").unwrap().unwrap(),
        l.find(".tc[data-index='1']").remove(),
        g(1,
        function() {
            $.jBox.show({
                title: "选择商品分组",
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(o) {
                    u(o)
                }
            })
        });
        break;
    case "all":
        a(1,
        function() {
            $.jBox.show({
                title: "选择商品或商品分组",
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(o) {
                    m(o)
                }
            })
        })
    }
},
HYD.popbox.MgzAndMgzCate = function(o, e) {
    var i, n, c = $("#tpl_popbox_MgzAndMgzCate").html(),
    l = $(c),
    t = function(o, e) {
        var n = function(o) {
            if (i = o.list, i && i.length) {
                var n = $("#tpl_popbox_MgzAndMgzCate_item").html(),
                c = _.template(n, {
                    dataset: i
                }),
                s = $(c);
                s.find(".j-select").click(function() {
                    var o = $(this),
                    e = o.parent("li");
                    e.hasClass("selected") ? (e.removeClass("selected"), o.removeClass("btn-success").text("选取")) : (e.addClass("selected"), o.addClass("btn-success").text("已选"))
                }),
                l.find(".mgz-list-panel1").empty().append(s);
                var a = o.page,
                g = $(a);
                g.filter("a:not(.disabled,.cur)").click(function() {
                    var o = $(this).attr("href"),
                    e = o.split("/");
                    return e = e[e.length - 1],
                    e = e.replace(/.html/, ""),
                    t(e),
                    !1
                }),
                l.find(".paginate").empty().append(g)
            } else l.find(".mgz-list-panel1").empty().append("<p class='txtCenter'>对不起，暂无数据</p>");
            e && e()
        };
        $.ajax({
            url: "/Design/getMagazine?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(o)
            },
            success: function(o) {
                1 == o.status ? n(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
            }
        })
    },
    s = function(o, e) {
        var i = function(o) {
            if (n = o.list, n && n.length) {
                var i = $("#tpl_popbox_MgzAndMgzCate_item").html(),
                c = _.template(i, {
                    dataset: n
                }),
                t = $(c);
                t.find(".j-select").click(function() {
                    var o = $(this),
                    e = o.parent("li");
                    e.hasClass("selected") ? (e.removeClass("selected"), o.removeClass("btn-success").text("选取")) : (e.addClass("selected"), o.addClass("btn-success").text("已选"))
                }),
                l.find(".mgz-list-panel2").empty().append(t);
                var a = o.page,
                g = $(a);
                g.filter("a:not(.disabled,.cur)").click(function() {
                    var o = $(this).attr("href"),
                    e = o.split("/");
                    return e = e[e.length - 1],
                    e = e.replace(/.html/, ""),
                    s(e),
                    !1
                }),
                l.find(".paginate").empty().append(g)
            } else l.find(".mgz-list-panel2").empty().append("<p class='txtCenter'>对不起，暂无数据</p>");
            e && e()
        };
        $.ajax({
            url: "/Design/getMagazineCategory?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(o)
            },
            success: function(o) {
                1 == o.status ? i(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
            }
        })
    },
    a = function(o) {
        l.on("click", ".mgz-list-panel1 .j-select",
        function() {
            var n = $(".mgz-list-panel1 li").index($(this).parent("li"));
            e && e(i[n], 3),
            $.jBox.close(o)
        })
    },
    g = function(o) {
        l.on("click", ".mgz-list-panel2 .j-select",
        function() {
            var i = $(".mgz-list-panel2 li").index($(this).parent("li"));
            e && e(n[i], 4),
            $.jBox.close(o)
        })
    },
    r = function(o) {
        l.on("click", ".j-btn-use",
        function() {
            var i = [],
            c = 4;
            l.find(".mgz-list-panel2 li.selected").each(function() {
                i.push(n[$(this).index()])
            }),
            e && e(i, c),
            $.jBox.close(o)
        })
    },
    p = function(o) {
        a(o),
        l.find(".j-tab-mgzcate").one("click",
        function() {
            s(1,
            function() {
                g(o)
            })
        })
    };
    switch (o) {
    case "mgzCate":
        l.find(".tabs").remove(),
        l.find(".mgz-list-panel2").unwrap().unwrap(),
        l.find(".tc[data-index='1']").remove(),
        l.find(".j-btn-use").remove(),
        s(1,
        function() {
            $.jBox.show({
                title: "选择专题分类",
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(o) {
                    g(o)
                }
            })
        });
        break;
    case "mgzCateMulti":
        l.find(".tabs").remove(),
        l.find(".mgz-list-panel2").unwrap().unwrap(),
        l.find(".tc[data-index='1']").remove(),
        s(1,
        function() {
            $.jBox.show({
                title: "选择专题分类",
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(o) {
                    r(o)
                }
            })
        });
        break;
    case "mgz":
        l.find(".tabs").remove(),
        l.find(".mgz-list-panel1").unwrap().unwrap(),
        l.find(".tc[data-index='2']").remove(),
        l.find(".j-btn-use").remove(),
        t(1,
        function() {
            $.jBox.show({
                title: "选择专题页面",
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(o) {
                    p(o)
                }
            })
        });
        break;
    case "all":
        l.find(".j-btn-use").remove(),
        t(1,
        function() {
            $.jBox.show({
                title: "选择专题页面或者分类",
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(o) {
                    p(o)
                }
            })
        })
    }
    switch (o) {
    case "goods":
    case "goodsMulti":
        l.find(".tabs").remove(),
        l.find(".gagp-goodslist").unwrap().unwrap(),
        l.find(".tc[data-index='2']").remove(),
        showListRender_goods(1,
        function() {
            $.jBox.show({
                title: "选择商品",
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    "goodsMulti" == o ? selectEvent_goods_multi(e) : selectEvent_goods(e)
                }
            })
        });
        break;
    case "group":
        l.find(".tabs").remove(),
        l.find(".gagp-grouplist").unwrap().unwrap(),
        l.find(".tc[data-index='1']").remove(),
        showListRender_group(1,
        function() {
            $.jBox.show({
                title: "选择商品分组",
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(o) {
                    selectEvent_group(o)
                }
            })
        });
        break;
    case "all":
        showListRender_goods(1,
        function() {
            $.jBox.show({
                title: "选择商品或商品分组",
                content: l,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(o) {
                    selectEvent_goodsAndGroup(o)
                }
            })
        })
    }
},
HYD.popbox.GamePicker = function(o, e) {
    var i = $("#tpl_popbox_GamePicker").html(),
    n = $(i),
    c = {
        1 : [],
        2 : [],
        3 : [],
        4 : []
    },
    l = function(o, e, i) {
        var t = function(e) {
            if (c[o] = e.list, c[o] && c[o].length) {
                var t = $("#tpl_popbox_GamePicker_item").html(),
                s = _.template(t, {
                    dataset: c[o]
                }),
                a = $(s);
                a.find(".j-select").click(function() {
                    var o = $(this),
                    e = o.parent("li");
                    e.hasClass("selected") ? (e.removeClass("selected"), o.removeClass("btn-success").text("选取")) : (e.addClass("selected"), o.addClass("btn-success").text("已选"))
                }),
                n.find(".game-list-panel" + o).empty().append(a);
                var g = e.page,
                r = $(g);
                r.filter("a:not(.disabled,.cur)").click(function() {
                    var e = $(this).attr("href"),
                    i = e.split("/");
                    return i = i[i.length - 1],
                    i = i.replace(/.html/, ""),
                    l(o, i),
                    !1
                }),
                n.find(".paginate:eq(" + (o - 1) + ")").empty().append(r)
            } else n.find(".game-list-panel" + o).empty().append("<p class='txtCenter'>对不起，暂无数据</p>");
            i && i(o)
        },
        s = {
            1 : 1,
            2 : 4,
            3 : 3,
            4 : 5
        };
        $.ajax({
            url: "/Design/getGame?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(e),
                type: parseInt(s[o])
            },
            success: function(o) {
                1 == o.status ? t(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
            }
        })
    },
    t = function(o, i) {
        n.on("click", ".game-list-panel" + i + " .j-select",
        function() {
            var n = $(".game-list-panel" + i + " li").index($(this).parent("li"));
            e && e(c[i][n], 5),
            $.jBox.close(o)
        })
    };
    l(1, 1,
    function(o) {
        $.jBox.show({
            title: "选择营销活动",
            content: n,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(e) {
                t(e, o),
                n.find(".j-tab-game").one("click",
                function() {
                    var o = $(this).data("index");
                    l(o, 1,
                    function(o) {
                        t(e, o)
                    })
                })
            }
        })
    })
},
HYD.popbox.dplPickerColletion = function(o) {
    var e = {
        linkType: 1,
        callback: null
    },
    i = $.extend(!0, {},
    e, o);
    switch (parseInt(i.linkType)) {
    case 1:
        $.selectGoods({
            selectMod:
            1,
            callback: function(o) {
                i.callback(o, 1)
            }
        });
        break;
    case 2:
        HYD.popbox.GoodsAndGroupPicker("group", i.callback);
        break;
    case 3:
        HYD.popbox.MgzAndMgzCate("mgz", i.callback);
        break;
    case 4:
        HYD.popbox.MgzAndMgzCate("mgzCate", i.callback);
        break;
    case 5:
        HYD.popbox.GamePicker("all", i.callback);
        break;
    case 6:
        var n = {
            title: "店铺主页",
            link: "/Shop/index"
        };
        i.callback(n, 6);
        break;
    case 7:
        var n = {
            title: "会员主页",
            link: "/User/index"
        };
        i.callback(n, 7);
        break;
    case 8:
        var n = {
            title: "分销申请",
            link: "/User/dist_apply"
        };
        i.callback(n, 8);
        break;
    case 9:
        var n = {
            title: "购物车",
            link: " /Item/cart"
        };
        i.callback(n, 9);
        break;
    case 10:
        var n = {
            title: "全部商品",
            link: " /Item/lists"
        };
        i.callback(n, 10);
        break;
    case 11:
        var n = {
            title: "",
            link: ""
        };
        i.callback(n, 11);
        break;
    case 12:
        var n = {
            title: "商品分类",
            link: "/Item/item_class"
        };
        i.callback(n, 12);
        break;
    case 13:
        var n = {
            title: "我的订单",
            link: "/Order/lists"
        };
        i.callback(n, 13)
    }
},
HYD.ajaxPopTable = function(o) {
    var e, i, n = {
        title: "",
        url: "",
        width: "auto",
        minHeight: "auto",
        data: {
            p: 1
        },
        tpl: "",
        onOpen: null,
        onPageChange: null
    },
    c = $.extend(!0, {},
    n, o),
    l = $("<div></div>"),
    t = function(o) {
        var n = c.tpl,
        s = c.url,
        a = function(s) {
            e = s;
            var a = _.template(n, s),
            g = $(a);
            l.empty().append(g),
            l.find(".paginate a:not(.disabled,.cur)").click(function() {
                for (var o = $(this).attr("href"), e = o.split("/"), i = 0; i < e.length; i++) if ("p" == e[i]) {
                    c.data.p = e[i + 1].replace(/.html/, ""),
                    t();
                    break
                }
                return ! 1
            }),
            o && o(),
            c.onPageChange && c.onPageChange(i, e)
        };
        $.ajax({
            url: s + "?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: c.data,
            success: function(o) {
                1 == o.status ? a(o) : HYD.hint("danger", "对不起，获取数据失败：" + o.msg)
            }
        })
    };
    t(function() {
        $.jBox.show({
            title: c.title,
            width: c.width,
            minHeight: c.minHeight,
            content: l,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(o) {
                i = o,
                c.onOpen && c.onOpen(o, e)
            }
        })
    })
},
HYD.regRules = {
    email: /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i,
    mobphone: /^(1(([35][0-9])|(47)|[8][01236789]))\d{8}$/,
    telphone: /^0\d{2,3}(\-)?\d{7,8}$/,
    integer: /^\d+$/,
    "float": /^[\d]*\.?[\d]+$/
},
HYD.popbox.iconimgsrc = {
    data: {
        style1: {
            color0: ["/Public/images/icon/style1/color0/icon_home.png", "/Public/images/icon/style1/color0/icon_allgoods.png", "/Public/images/icon/style1/color0/icon_newgoods.png", "/Public/images/icon/style1/color0/icon_user.png", "/Public/images/icon/style1/color0/icon_fx.png", "/Public/images/icon/style1/color0/icon_active.png", "/Public/images/icon/style1/color0/icon_hotsale.png", "/Public/images/icon/style1/color0/icon_subject.png", "/Public/images/icon/style1/color0/style1_gz0.png", "/Public/images/icon/style1/color0/style1_shopcar0.png"],
            color1: ["/Public/images/icon/style1/color1/icon_home.png", "/Public/images/icon/style1/color1/icon_allgoods.png", "/Public/images/icon/style1/color1/icon_newgoods.png", "/Public/images/icon/style1/color1/icon_user.png", "/Public/images/icon/style1/color1/icon_fx.png", "/Public/images/icon/style1/color1/icon_active.png", "/Public/images/icon/style1/color1/icon_hotsale.png", "/Public/images/icon/style1/color1/icon_subject.png", "/Public/images/icon/style1/color1/style1_gz1.png", "/Public/images/icon/style1/color1/style1_shopcar1.png"],
            color2: ["/Public/images/icon/style1/color2/icon_home.png", "/Public/images/icon/style1/color2/icon_allgoods.png", "/Public/images/icon/style1/color2/icon_newgoods.png", "/Public/images/icon/style1/color2/icon_user.png", "/Public/images/icon/style1/color2/icon_fx.png", "/Public/images/icon/style1/color2/icon_active.png", "/Public/images/icon/style1/color2/icon_hotsale.png", "/Public/images/icon/style1/color2/icon_subject.png", "/Public/images/icon/style1/color2/style1_gz2.png", "/Public/images/icon/style1/color2/style1_shopcar2.png"],
            color3: ["/Public/images/icon/style1/color3/icon_home.png", "/Public/images/icon/style1/color3/icon_allgoods.png", "/Public/images/icon/style1/color3/icon_newgoods.png", "/Public/images/icon/style1/color3/icon_user.png", "/Public/images/icon/style1/color3/icon_fx.png", "/Public/images/icon/style1/color3/icon_active.png", "/Public/images/icon/style1/color3/icon_hotsale.png", "/Public/images/icon/style1/color3/icon_subject.png", "/Public/images/icon/style1/color3/style1_gz3.png", "/Public/images/icon/style1/color3/style1_shopcar3.png"],
            color4: ["/Public/images/icon/style1/color4/icon_home.png", "/Public/images/icon/style1/color4/icon_allgoods.png", "/Public/images/icon/style1/color4/icon_newgoods.png", "/Public/images/icon/style1/color4/icon_user.png", "/Public/images/icon/style1/color4/icon_fx.png", "/Public/images/icon/style1/color4/icon_active.png", "/Public/images/icon/style1/color4/icon_hotsale.png", "/Public/images/icon/style1/color4/icon_subject.png", "/Public/images/icon/style1/color4/style1_gz4.png", "/Public/images/icon/style1/color4/style1_shopcar4.png"],
            color5: ["/Public/images/icon/style1/color5/icon_home.png", "/Public/images/icon/style1/color5/icon_allgoods.png", "/Public/images/icon/style1/color5/icon_newgoods.png", "/Public/images/icon/style1/color5/icon_user.png", "/Public/images/icon/style1/color5/icon_fx.png", "/Public/images/icon/style1/color5/icon_active.png", "/Public/images/icon/style1/color5/icon_hotsale.png", "/Public/images/icon/style1/color5/icon_subject.png", "/Public/images/icon/style1/color5/style1_gz5.png", "/Public/images/icon/style1/color5/style1_shopcar5.png"],
            color6: ["/Public/images/icon/style1/color6/icon_home.png", "/Public/images/icon/style1/color6/icon_allgoods.png", "/Public/images/icon/style1/color6/icon_newgoods.png", "/Public/images/icon/style1/color6/icon_user.png", "/Public/images/icon/style1/color6/icon_fx.png", "/Public/images/icon/style1/color6/icon_active.png", "/Public/images/icon/style1/color6/icon_hotsale.png", "/Public/images/icon/style1/color6/icon_subject.png", "/Public/images/icon/style1/color6/style1_gz6.png", "/Public/images/icon/style1/color6/style1_shopcar6.png"],
            color7: ["/Public/images/icon/style1/color7/icon_home.png", "/Public/images/icon/style1/color7/icon_allgoods.png", "/Public/images/icon/style1/color7/icon_newgoods.png", "/Public/images/icon/style1/color7/icon_user.png", "/Public/images/icon/style1/color7/icon_fx.png", "/Public/images/icon/style1/color7/icon_active.png", "/Public/images/icon/style1/color7/icon_hotsale.png", "/Public/images/icon/style1/color7/icon_subject.png", "/Public/images/icon/style1/color7/style1_gz7.png", "/Public/images/icon/style1/color7/style1_shopcar7.png"],
            color8: ["/Public/images/icon/style1/color8/icon_home.png", "/Public/images/icon/style1/color8/icon_allgoods.png", "/Public/images/icon/style1/color8/icon_newgoods.png", "/Public/images/icon/style1/color8/icon_user.png", "/Public/images/icon/style1/color8/icon_fx.png", "/Public/images/icon/style1/color8/icon_active.png", "/Public/images/icon/style1/color8/icon_hotsale.png", "/Public/images/icon/style1/color8/icon_subject.png", "/Public/images/icon/style1/color8/style1_gz8.png", "/Public/images/icon/style1/color8/style1_shopcar8.png"]
        },
        style2: {
            color0: ["/Public/images/icon/style2/color0/icon_home.png", "/Public/images/icon/style2/color0/icon_allgoods.png", "/Public/images/icon/style2/color0/icon_newgoods.png", "/Public/images/icon/style2/color0/icon_user.png", "/Public/images/icon/style2/color0/icon_fx.png", "/Public/images/icon/style2/color0/icon_active.png", "/Public/images/icon/style2/color0/icon_hotsale.png", "/Public/images/icon/style2/color0/icon_subject.png", "/Public/images/icon/style2/color0/style2_gz0.png", "/Public/images/icon/style2/color0/style2_shopcar0.png"],
            color1: ["/Public/images/icon/style2/color1/icon_home.png", "/Public/images/icon/style2/color1/icon_allgoods.png", "/Public/images/icon/style2/color1/icon_newgoods.png", "/Public/images/icon/style2/color1/icon_user.png", "/Public/images/icon/style2/color1/icon_fx.png", "/Public/images/icon/style2/color1/icon_active.png", "/Public/images/icon/style2/color1/icon_hotsale.png", "/Public/images/icon/style2/color1/icon_subject.png", "/Public/images/icon/style2/color1/style2_gz1.png", "/Public/images/icon/style2/color1/style2_shopcar1.png"],
            color2: ["/Public/images/icon/style2/color2/icon_home.png", "/Public/images/icon/style2/color2/icon_allgoods.png", "/Public/images/icon/style2/color2/icon_newgoods.png", "/Public/images/icon/style2/color2/icon_user.png", "/Public/images/icon/style2/color2/icon_fx.png", "/Public/images/icon/style2/color2/icon_active.png", "/Public/images/icon/style2/color2/icon_hotsale.png", "/Public/images/icon/style2/color2/icon_subject.png", "/Public/images/icon/style2/color2/style2_gz2.png", "/Public/images/icon/style2/color2/style2_shopcar2.png"],
            color3: ["/Public/images/icon/style2/color3/icon_home.png", "/Public/images/icon/style2/color3/icon_allgoods.png", "/Public/images/icon/style2/color3/icon_newgoods.png", "/Public/images/icon/style2/color3/icon_user.png", "/Public/images/icon/style2/color3/icon_fx.png", "/Public/images/icon/style2/color3/icon_active.png", "/Public/images/icon/style2/color3/icon_hotsale.png", "/Public/images/icon/style2/color3/icon_subject.png", "/Public/images/icon/style2/color3/style2_gz3.png", "/Public/images/icon/style2/color3/style2_shopcar3.png"],
            color4: ["/Public/images/icon/style2/color4/icon_home.png", "/Public/images/icon/style2/color4/icon_allgoods.png", "/Public/images/icon/style2/color4/icon_newgoods.png", "/Public/images/icon/style2/color4/icon_user.png", "/Public/images/icon/style2/color4/icon_fx.png", "/Public/images/icon/style2/color4/icon_active.png", "/Public/images/icon/style2/color4/icon_hotsale.png", "/Public/images/icon/style2/color4/icon_subject.png", "/Public/images/icon/style2/color4/style2_gz4.png", "/Public/images/icon/style2/color4/style2_shopcar4.png"],
            color5: ["/Public/images/icon/style2/color5/icon_home.png", "/Public/images/icon/style2/color5/icon_allgoods.png", "/Public/images/icon/style2/color5/icon_newgoods.png", "/Public/images/icon/style2/color5/icon_user.png", "/Public/images/icon/style2/color5/icon_fx.png", "/Public/images/icon/style2/color5/icon_active.png", "/Public/images/icon/style2/color5/icon_hotsale.png", "/Public/images/icon/style2/color5/icon_subject.png", "/Public/images/icon/style2/color5/style2_gz5.png", "/Public/images/icon/style2/color5/style2_shopcar5.png"],
            color6: ["/Public/images/icon/style2/color6/icon_home.png", "/Public/images/icon/style2/color6/icon_allgoods.png", "/Public/images/icon/style2/color6/icon_newgoods.png", "/Public/images/icon/style2/color6/icon_user.png", "/Public/images/icon/style2/color6/icon_fx.png", "/Public/images/icon/style2/color6/icon_active.png", "/Public/images/icon/style2/color6/icon_hotsale.png", "/Public/images/icon/style2/color6/icon_subject.png", "/Public/images/icon/style2/color6/style2_gz6.png", "/Public/images/icon/style2/color6/style2_shopcar6.png"],
            color7: ["/Public/images/icon/style2/color7/icon_home.png", "/Public/images/icon/style2/color7/icon_allgoods.png", "/Public/images/icon/style2/color7/icon_newgoods.png", "/Public/images/icon/style2/color7/icon_user.png", "/Public/images/icon/style2/color7/icon_fx.png", "/Public/images/icon/style2/color7/icon_active.png", "/Public/images/icon/style2/color7/icon_hotsale.png", "/Public/images/icon/style2/color7/icon_subject.png", "/Public/images/icon/style2/color7/style2_gz7.png", "/Public/images/icon/style2/color7/style2_shopcar7.png"],
            color8: ["/Public/images/icon/style2/color8/icon_home.png", "/Public/images/icon/style2/color8/icon_allgoods.png", "/Public/images/icon/style2/color8/icon_newgoods.png", "/Public/images/icon/style2/color8/icon_user.png", "/Public/images/icon/style2/color8/icon_fx.png", "/Public/images/icon/style2/color8/icon_active.png", "/Public/images/icon/style2/color8/icon_hotsale.png", "/Public/images/icon/style2/color8/icon_subject.png", "/Public/images/icon/style2/color8/style2_gz8.png", "/Public/images/icon/style2/color8/style2_shopcar8.png"]
        },
        style3: {
            color0: ["/Public/images/icon/style3/color0/icon_home.png", "/Public/images/icon/style3/color0/icon_allgoods.png", "/Public/images/icon/style3/color0/icon_newgoods.png", "/Public/images/icon/style3/color0/icon_user.png", "/Public/images/icon/style3/color0/icon_fx.png", "/Public/images/icon/style3/color0/icon_active.png", "/Public/images/icon/style3/color0/icon_hotsale.png", "/Public/images/icon/style3/color0/icon_subject.png", "/Public/images/icon/style3/color0/style3_gz0.png", "/Public/images/icon/style3/color0/style3_shopcar0.png"],
            color1: ["/Public/images/icon/style3/color1/icon_home.png", "/Public/images/icon/style3/color1/icon_allgoods.png", "/Public/images/icon/style3/color1/icon_newgoods.png", "/Public/images/icon/style3/color1/icon_user.png", "/Public/images/icon/style3/color1/icon_fx.png", "/Public/images/icon/style3/color1/icon_active.png", "/Public/images/icon/style3/color1/icon_hotsale.png", "/Public/images/icon/style3/color1/icon_subject.png", "/Public/images/icon/style3/color1/style3_gz1.png", "/Public/images/icon/style3/color1/style3_shopcar1.png"],
            color2: ["/Public/images/icon/style3/color2/icon_home.png", "/Public/images/icon/style3/color2/icon_allgoods.png", "/Public/images/icon/style3/color2/icon_newgoods.png", "/Public/images/icon/style3/color2/icon_user.png", "/Public/images/icon/style3/color2/icon_fx.png", "/Public/images/icon/style3/color2/icon_active.png", "/Public/images/icon/style3/color2/icon_hotsale.png", "/Public/images/icon/style3/color2/icon_subject.png", "/Public/images/icon/style3/color2/style3_gz2.png", "/Public/images/icon/style3/color2/style3_shopcar2.png"],
            color3: ["/Public/images/icon/style3/color3/icon_home.png", "/Public/images/icon/style3/color3/icon_allgoods.png", "/Public/images/icon/style3/color3/icon_newgoods.png", "/Public/images/icon/style3/color3/icon_user.png", "/Public/images/icon/style3/color3/icon_fx.png", "/Public/images/icon/style3/color3/icon_active.png", "/Public/images/icon/style3/color3/icon_hotsale.png", "/Public/images/icon/style3/color3/icon_subject.png", "/Public/images/icon/style3/color3/style3_gz3.png", "/Public/images/icon/style3/color3/style3_shopcar3.png"],
            color4: ["/Public/images/icon/style3/color4/icon_home.png", "/Public/images/icon/style3/color4/icon_allgoods.png", "/Public/images/icon/style3/color4/icon_newgoods.png", "/Public/images/icon/style3/color4/icon_user.png", "/Public/images/icon/style3/color4/icon_fx.png", "/Public/images/icon/style3/color4/icon_active.png", "/Public/images/icon/style3/color4/icon_hotsale.png", "/Public/images/icon/style3/color4/icon_subject.png", "/Public/images/icon/style3/color4/style3_gz4.png", "/Public/images/icon/style3/color4/style3_shopcar4.png"],
            color5: ["/Public/images/icon/style3/color5/icon_home.png", "/Public/images/icon/style3/color5/icon_allgoods.png", "/Public/images/icon/style3/color5/icon_newgoods.png", "/Public/images/icon/style3/color5/icon_user.png", "/Public/images/icon/style3/color5/icon_fx.png", "/Public/images/icon/style3/color5/icon_active.png", "/Public/images/icon/style3/color5/icon_hotsale.png", "/Public/images/icon/style3/color5/icon_subject.png", "/Public/images/icon/style3/color5/style3_gz5.png", "/Public/images/icon/style3/color5/style3_shopcar5.png"],
            color6: ["/Public/images/icon/style3/color6/icon_home.png", "/Public/images/icon/style3/color6/icon_allgoods.png", "/Public/images/icon/style3/color6/icon_newgoods.png", "/Public/images/icon/style3/color6/icon_user.png", "/Public/images/icon/style3/color6/icon_fx.png", "/Public/images/icon/style3/color6/icon_active.png", "/Public/images/icon/style3/color6/icon_hotsale.png", "/Public/images/icon/style3/color6/icon_subject.png", "/Public/images/icon/style3/color6/style3_gz6.png", "/Public/images/icon/style3/color6/style3_shopcar6.png"],
            color7: ["/Public/images/icon/style3/color7/icon_home.png", "/Public/images/icon/style3/color7/icon_allgoods.png", "/Public/images/icon/style3/color7/icon_newgoods.png", "/Public/images/icon/style3/color7/icon_user.png", "/Public/images/icon/style3/color7/icon_fx.png", "/Public/images/icon/style3/color7/icon_active.png", "/Public/images/icon/style3/color7/icon_hotsale.png", "/Public/images/icon/style3/color7/icon_subject.png", "/Public/images/icon/style3/color7/style3_gz7.png", "/Public/images/icon/style3/color7/style3_shopcar7.png"],
            color8: ["/Public/images/icon/style3/color8/icon_home.png", "/Public/images/icon/style3/color8/icon_allgoods.png", "/Public/images/icon/style3/color8/icon_newgoods.png", "/Public/images/icon/style3/color8/icon_user.png", "/Public/images/icon/style3/color8/icon_fx.png", "/Public/images/icon/style3/color8/icon_active.png", "/Public/images/icon/style3/color8/icon_hotsale.png", "/Public/images/icon/style3/color8/icon_subject.png", "/Public/images/icon/style3/color8/style3_gz8.png", "/Public/images/icon/style3/color8/style3_shopcar8.png"]
        }
    }
},
HYD.urgencyPopup = function() {
    var o = $.cookie("urgencyPopup"),
    e = (new Date).getTime(),
    i = 36e5;
    if (o || (o = 0), console.log(o, i, e), 0 == o || parseInt(o) + i < e) {
        $.cookie("urgencyPopup", e, {
            expires: 30,
            path: "/"
        });
        var n = function(o) {
            $.jBox.show({
                title: "提示",
                content: "<p style='font-size:14px;'>" + o + "</p>",
                btnOK: {
                    onBtnClick: function(o) {
                        $.jBox.close(o)
                    }
                },
                btnCancel: {
                    show: !1
                }
            })
        };
        $("#urgency-content").jBox({
            title: "紧急通知",
            onOpen: function(o) {
                o.addClass("jbox-urgencyPopup"),
                $chk = o.find(".j-urgency-checkbox"),
                $btn = o.find(".j-urgency-submit"),
                $btn.click(function() {
                    $chk.is(":checked") ? $.ajax({
                        url: "/Shop/apply_temporary_domain",
                        type: "get",
                        dataType: "json",
                        beforeSend: function() {
                            $.jBox.showloading()
                        },
                        success: function(e) {
                            $.jBox.hideloading(),
                            1 == e.status ? ($.jBox.close(o), HYD.hint("success", "恭喜您，临时域名申请成功！")) : HYD.hint("danger", "对不起，" + e.msg)
                        }
                    }) : n("请先注册域名并提交备案信息!")
                })
            },
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            }
        })
    }
}; !
function(e, t, a) {
    var n = {
        callback: null
    },
    d = {},
    i = {
        width: e(a).width(),
        height: e(a).height()
    },
    s = {
        main: e("#tpl_albums_main").html(),
        overlay: e("#tpl_albums_overlay").html(),
        tree: e("#tpl_albums_tree").html(),
        treeFn: e("#tpl_albums_tree_fn").html(),
        imgs: e("#tpl_albums_imgs").html()
    },
    o = {
        folderID: "",
        moveFolderID: 0,
        imgs: {}
    },
    l = {
        getFolderTree: "/Design/getFolderTree",
        getSubFolderTree: "/Design/getSubFolderTree",
        getImgList: "/Design/getImgList",
        addImg: "/Design/uploadFile/sid/" + e.cookie("shop_id"),
        moveImg: "/Design/moveImg",
        delImg: "/Design/delImg",
        addFolder: "/Design/addFolder",
        renameFolder: "/Design/renameFolder",
        delFolder: "/Design/delFolder",
        moveCateImg: "/Design/moveCateImg",
        renameImg: "/Design/renameImg"
    },
    r = function(t, a, n, d) {
        var i = arguments.callee,
        r = t.find("#j-panelImgs"),
        c = t.find("#j-panelPaginate"),
        u = a >= 0 ? {
            id: a,
            p: n,
            file_name: d
        }: {
            p: n,
            file_name: d
        };
        "undefined" == typeof GLOBAL_NEED_COMPRESS || 0 == GLOBAL_NEED_COMPRESS ? u.need_compress = 0 : u.need_compress = 1,
        e.ajax({
            url: l.getImgList + "?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: u,
            beforeSend: function() {
                r.find(".j-loading").show()
            },
            success: function(n) {
                if (1 == n.status) {
                    o.imgs = _.isArray(n.data) ? n.data: null;
                    var l = e(_.template(s.imgs, {
                        dataset: o.imgs
                    })),
                    u = e(n.page);
                    r.find(".j-loading").hide().end().find("ul,.j-noPic").remove().end().append(l),
                    c.empty().append(u),
                    u.filter("a:not(.disabled,.cur)").click(function() {
                        var n = e(this).attr("href"),
                        s = n.split("/");
                        return s = s[s.length - 1],
                        s = s.replace(/.html/, ""),
                        i(t, a, s, d),
                        !1
                    })
                } else HYD.hint("danger", "对不起，图片获取失败：" + n.msg)
            }
        })
    };
    UpdateSubTreeNums = function(a) {
        if ("undefined" == typeof a) var a = e(t).find(".j-albumsNodes .selected").data("id");
        e.ajax({
            url: "/Design/getAllSubFolderTree?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: {
                id: a
            },
            success: function(a) {
                if (1 == a.status) {
                    var n = a.data.tree,
                    d = e(t).find("#j-panelTree");
                    n.push({
                        id: "-1",
                        picNum: a.data.total
                    },
                    {
                        id: "0",
                        picNum: a.data.nocat_total
                    });
                    var i = function(e) {
                        var t = arguments.callee;
                        _.each(e,
                        function(e) {
                            d.find("dt[data-id=" + e.id + "]").find(".j-num").text(e.picNum),
                            e.subFolder && e.subFolder.length && t(e.subFolder)
                        })
                    };
                    i(n)
                } else console.log("更新文件夹树图片数量失败")
            }
        })
    },
    e.albums = function(a) {
        d = e.extend(!0, {},
        n, a);
        var c = e("#albums"),
        u = e("#albums-overlay");
        if (!c.length) {
            c = e(s.main),
            u = e(s.overlay),
            e("body").append(c.hide(), u.hide());
            var m = c.find("#j-close"),
            f = c.find("#j-addFolder"),
            p = c.find("#j-renameFolder"),
            g = c.find("#j-delFolder"),
            h = c.find("#j-addImg"),
            v = c.find("#j-moveImg"),
            j = c.find("#j-cateImg"),
            b = c.find("#j-delImg"),
            D = c.find("#j-panelTree"),
            I = function() {
                c.fadeOut("fast"),
                u.fadeOut("fast"),
                c.find("#j-panelImgs li").removeClass("selected")
            };
            e.ajax({
                url: l.getFolderTree + "?v=" + Math.round(100 * Math.random()),
                type: "post",
                dataType: "json",
                success: function(t) {
                    if (1 == t.status) {
                        var a = _.template(s.treeFn),
                        n = a({
                            dataset: t.data.tree,
                            templateFn: a
                        }),
                        d = e(_.template(s.tree, {
                            dataset: t.data,
                            nodes: n
                        }));
                        D.empty().append(d),
                        c.find(".j-albumsNodes > dt:first").click()
                    } else HYD.hint("danger", "对不起，文件夹获取失败：" + t.msg)
                }
            }),
            e(t).on("click", ".j-albumsNodes dt",
            function(t) {
                var a = e(this),
                n = a.data("id");
                if (a.parents(".j-albumsNodes").find("dt").removeClass("selected"), a.addClass("selected"), e(t.currentTarget).parents(".j-propagation").length) o.moveFolderID = n;
                else {
                    if (o.folderID == n) return;
                    o.folderID = n;
                    var d = a.data("add"),
                    i = a.data("rename"),
                    s = a.data("del");
                    1 == d ? f.show() : f.hide(),
                    1 == i ? p.show() : p.hide(),
                    1 == s ? g.show() : g.hide(),
                    r(c, o.folderID, 1)
                }
                return ! 1
            });
            var y = function(t, a) {
                e.ajax({
                    url: l.getSubFolderTree + "?v=" + Math.round(100 * Math.random()),
                    type: "post",
                    dataType: "json",
                    data: {
                        id: a
                    },
                    success: function(a) {
                        if (1 == a.status) {
                            var n = _.template(s.treeFn),
                            d = n({
                                dataset: a.data,
                                templateFn: n
                            });
                            $render = e(d),
                            t.parent("dt").siblings("dd").empty().append($render),
                            $render.filter("dl").slideDown(200)
                        }
                    }
                })
            };
            e(t).on("click", ".j-albumsNodes dt i",
            function() {
                var t = e(this),
                a = t.parent("dt").siblings("dd").find(" > dl"),
                n = a.length,
                d = t.parent("dt").data("id");
                return t.hasClass("open") ? (t.removeClass("open"), a.slideUp(200)) : (t.addClass("open"), n ? a.slideDown(200) : y(t, d)),
                !1
            });
            var F = 0;
            c.on("click", "#j-panelImgs li",
            function() {
                return e(this).toggleClass("selected"),
                e(this).find(".img-name-edit").hide(),
                e(this).data("selectindex", F++),
                !1
            }),
            c.on("click", "#j-panelImgs li .albums-edit",
            function() {
                return e(this).children(".img-name-edit").show(),
                !1
            }),
            c.on("click", "#j-useImg",
            function() {
                if (!c.find("#j-panelImgs li.selected").length) return void HYD.hint("warning", "请选择图片！");
                var t = {},
                a = [];
                c.find("#j-panelImgs li.selected").each(function() {
                    t[e(this).data("selectindex")] = o.imgs[e(this).index()].file
                });
                for (var n in t) a.push(t[n]);
                return d.callback && (d.callback(a), I()),
                !1
            }),
            f.click(function() {
                var t = [{
                    id: 0,
                    name: "未命名文件夹",
                    picNum: 0
                }];
                e.ajax({
                    url: l.addFolder + "?v=" + Math.round(100 * Math.random()),
                    type: "post",
                    dataType: "json",
                    data: {
                        name: t.name,
                        parent_id: o.folderID
                    },
                    success: function(a) {
                        if (1 == a.status) {
                            t[0].id = a.data;
                            var n = _.template(s.treeFn, {
                                dataset: t
                            });
                            $render = e(n),
                            D.find("dt[data-id='" + o.folderID + "']").siblings("dd").append($render),
                            $render.css("display", "block"),
                            $render.parent().siblings("dt").find(".icon-folder").addClass("open"),
                            $render.find("dt:first").click(),
                            p.click()
                        } else HYD.hint("danger", "对不起，添加失败：" + a.msg)
                    }
                })
            }),
            p.click(function() {
                var t = D.find("dt[data-id='" + o.folderID + "']"),
                a = t.find(".j-treeShowTxt"),
                n = t.find(".j-ip"),
                d = t.find(".j-loading");
                a.hide(),
                n.show().focus().select(),
                n.blur(function() {
                    var t = e(this).val();
                    e.ajax({
                        url: l.renameFolder + "?v=" + Math.round(100 * Math.random()),
                        type: "post",
                        dataType: "json",
                        data: {
                            name: t,
                            category_img_id: o.folderID
                        },
                        beforeSend: function() {
                            d.css("display", "inline-block")
                        },
                        success: function(e) {
                            1 == e.status ? a.find(".j-name").text(t) : HYD.hint("danger", "对不起，重命名失败：" + e.msg),
                            a.show(),
                            n.hide(),
                            d.hide()
                        }
                    })
                })
            }),
            g.click(function() {
                var t = e("#tpl_albums_delFolder").html(),
                a = e(t),
                n = a.find("input[name=isDelImgs]");
                e.jBox.show({
                    title: "提示",
                    content: a,
                    btnOK: {
                        onBtnClick: function(t) {
                            var a = n.filter(":checked").val();
                            e.ajax({
                                url: l.delFolder + "?v=" + Math.round(100 * Math.random()),
                                type: "post",
                                dataType: "json",
                                data: {
                                    type: a,
                                    id: o.folderID
                                },
                                success: function(e) {
                                    if (1 == e.status) {
                                        UpdateSubTreeNums();
                                        var t = D.find("dt[data-id=" + o.folderID + "]").parent("dl");
                                        t.parent("dd").siblings("dt").click(),
                                        t.remove()
                                    } else HYD.hint("danger", "对不起，删除失败失败：" + e.msg)
                                }
                            }),
                            e.jBox.close(t)
                        }
                    }
                })
            }),
            b.click(function() {
                if (!c.find("#j-panelImgs li.selected").length) return void HYD.hint("warning", "请选择要删除的图片！");
                var t = [];
                c.find("#j-panelImgs li.selected").each(function() {
                    t.push(e(this).data("id"))
                }),
                e.ajax({
                    url: l.delImg + "?v=" + Math.round(100 * Math.random()),
                    type: "post",
                    dataType: "json",
                    data: {
                        file_id: t
                    },
                    success: function(t) {
                        1 == t.status ? (c.find("#j-panelImgs li.selected").fadeOut(300,
                        function() {
                            e(this).remove()
                        }), UpdateSubTreeNums()) : HYD.hint("danger", "对不起，删除失败：" + t.msg)
                    }
                })
            }),
            function() {
                var t = navigator.userAgent.toLowerCase(),
                a = "ipad" == t.match(/ipad/i),
                n = "iphone os" == t.match(/iphone os/i),
                d = "midp" == t.match(/midp/i),
                i = "rv:1.2.3.4" == t.match(/rv:1.2.3.4/i),
                s = "ucweb" == t.match(/ucweb/i),
                u = "android" == t.match(/android/i),
                m = "windows ce" == t.match(/windows ce/i),
                f = "windows mobile" == t.match(/windows mobile/i);
                a || n || d || i || s || u || m || f ? (e("#j-addImg").parent("#addImg_load").addClass("btn btn-success").children(".addImg_load_text").text("上传图片"), e("#j-addImg").change(function() {
                    var t = e(this),
                    a = t.get(0).files[0],
                    n = ((new Date).getTime(), 5242880);
                    if (a.size > n) return void alert("上传的图片不得大于5MB");
                    var d = new XMLHttpRequest,
                    i = new FormData;
                    d.open("POST", l.addImg, !0),
                    e.jBox.showloading("正在上传..."),
                    d.onreadystatechange = function() {
                        if (4 == d.readyState && 200 == d.status) {
                            var t = e.parseJSON(d.responseText);
                            1 == t.status ? (r(c, o.folderID, 1), UpdateSubTreeNums()) : HYD.hint(t.msg),
                            e.jBox.hideloading()
                        }
                    },
                    i.append("Filedata", a),
                    d.send(i)
                })) : h.uploadify({
                    debug: !1,
                    auto: !0,
                    width: 86,
                    height: 28,
                    multi: !0,
                    swf: "/Public/plugins/uploadify/uploadify.swf",
                    uploader: l.addImg,
                    buttonText: "上传图片",
                    fileSizeLimit: "5MB",
                    fileTypeExts: "*.jpg; *.jpeg; *.png; *.gif; *.bmp",
                    onUploadStart: function() {
                        h.uploadify("settings", "formData", {
                            cate_id: o.folderID == -1 ? 0 : o.folderID,
                            PHPSESSID: e.cookie("PHPSESSID")
                        })
                    },
                    onSelectError: function(e, t, a) {
                        switch (t) {
                        case - 100 : HYD.hint("danger", "对不起，系统只允许您一次最多上传10个文件");
                            break;
                        case - 110 : HYD.hint("danger", "对不起，文件 [" + e.name + "] 大小超出5MB！");
                            break;
                        case - 120 : HYD.hint("danger", "文件 [" + e.name + "] 大小异常！");
                            break;
                        case - 130 : HYD.hint("danger", "文件 [" + e.name + "] 类型不正确！")
                        }
                    },
                    onFallback: function() {
                        HYD.hint("danger", "您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试。")
                    },
                    onUploadSuccess: function(e, t, a) {
                        console.log(e, t, a)
                    },
                    onQueueComplete: function(e) {
                        r(c, o.folderID, 1),
                        UpdateSubTreeNums()
                    },
                    onUploadError: function(e, t, a, n) {
                        HYD.hint("danger", "对不起：" + e.name + "上传失败：" + n)
                    }
                })
            } (),
            v.click(function() {
                if (!c.find("#j-panelImgs li.selected").length) return void HYD.hint("warning", "请选择要移动的图片！");
                var t = e("<div class='albums-cl-tree j-albumsNodes j-propagation'></div>");
                t.append(D.find("dd:first").contents().clone()),
                e.jBox.show({
                    title: "请选择移动文件夹",
                    content: t,
                    onOpen: function() {
                        t.find("dt:first").click()
                    },
                    btnOK: {
                        onBtnClick: function(t) {
                            var a = [];
                            c.find("#j-panelImgs li.selected").each(function() {
                                a.push(e(this).data("id"))
                            }),
                            e.ajax({
                                url: l.moveImg + "?v=" + Math.round(100 * Math.random()),
                                type: "post",
                                dataType: "json",
                                data: {
                                    file_id: a,
                                    cate_id: o.moveFolderID
                                },
                                success: function(a) {
                                    if (1 == a.status) {
                                        var n = e(t).find(".j-albumsNodes .selected").data("id");
                                        c.find("#j-panelImgs li.selected").fadeOut(300,
                                        function() {
                                            e(this).remove()
                                        }),
                                        UpdateSubTreeNums(),
                                        UpdateSubTreeNums(n),
                                        HYD.hint("success", "恭喜您，操作成功！")
                                    } else HYD.hint("danger", "对不起，移动失败：" + a.msg)
                                }
                            }),
                            e.jBox.close(t)
                        }
                    }
                })
            }),
            j.click(function() {
                if (!o.folderID) return void HYD.hint("warning", "请选择要移动的分类！");
                var t = e("<div class='albums-cl-tree j-albumsNodes j-propagation'></div>");
                t.append(D.find("dd:first").contents().clone()),
                e.jBox.show({
                    title: "请选择移动文件夹",
                    content: t,
                    onOpen: function() {
                        t.find("dt:first").click()
                    },
                    btnOK: {
                        onBtnClick: function(t) {
                            e.ajax({
                                url: l.moveCateImg + "?v=" + Math.round(100 * Math.random()),
                                type: "post",
                                dataType: "json",
                                data: {
                                    cid: o.folderID,
                                    cate_id: o.moveFolderID
                                },
                                success: function(a) {
                                    if (1 == a.status) {
                                        var n = e(t).find(".j-albumsNodes .selected").data("id");
                                        c.find("#j-panelImgs li.selected").fadeOut(300,
                                        function() {
                                            e(this).remove()
                                        }),
                                        UpdateSubTreeNums(),
                                        UpdateSubTreeNums(n),
                                        HYD.hint("success", "恭喜您，操作成功！")
                                    } else HYD.hint("danger", "对不起，移动失败：" + a.msg)
                                }
                            }),
                            e.jBox.close(t)
                        }
                    }
                })
            }),
            m.click(I)
        }
        c.appendTo("body").fadeIn("fast"),
        u.appendTo("body").fadeIn("fast"),
        c.outerHeight() >= i.height && c.css({
            position: "absolute",
            marginTop: "0",
            top: e(t).scrollTop() + 10
        }),
        c.on("click", ".renameImg",
        function() {
            var t = e(this),
            a = t.closest("li").data("id"),
            n = t.siblings("input.file_name").val();
            return e.ajax({
                url: l.renameImg + "?v=" + Math.round(100 * Math.random()),
                type: "post",
                dataType: "json",
                data: {
                    file_id: a,
                    file_name: n
                },
                success: function(e) {
                    1 == e.status ? (t.closest(".albums-edit").children(".img-name-edit").hide(), t.closest(".albums-edit").children("p").html(n), t.closest(".albums-edit").children("input.file_name").val(n), HYD.hint("success", "恭喜您，操作成功！")) : HYD.hint("danger", "对不起，操作失败")
                }
            }),
            !1
        }),
        c.on("click", ".searchImg",
        function() {
            var t = e(this).prev().val();
            r(c, o.folderID, 1, t)
        })
    }
} (jQuery, document, window),
_QV_ = "%E6%9D%AD%E5%B7%9E%E5%90%AF%E5%8D%9A%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%89%88%E6%9D%83%E6%89%80%E6%9C%89",
HYD.popbox.ImgPicker = function(e) {
    $.albums({
        callback: e
    })
};
jQuery.fn.farbtastic = function(a) {
    $.farbtastic(this, a);
    return this
};
jQuery.farbtastic = function(a, b) {
    var a = $(a).get(0);
    return a.farbtastic || (a.farbtastic = new jQuery._farbtastic(a, b))
};
jQuery._farbtastic = function(a, d) {
    var b = this;
    $(a).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');
    var c = $(".farbtastic", a);
    b.wheel = $(".wheel", a).get(0);
    b.radius = 84;
    b.square = 100;
    b.width = 194;
    if (navigator.appVersion.match(/MSIE [0-6]\./)) {
        $("*", c).each(function() {
            if (this.currentStyle.backgroundImage != "none") {
                var e = this.currentStyle.backgroundImage;
                e = this.currentStyle.backgroundImage.substring(5, e.length - 2);
                $(this).css({
                    backgroundImage: "none",
                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + e + "')"
                })
            }
        })
    }
    b.linkTo = function(e) {
        if (typeof b.callback == "object") {
            $(b.callback).unbind("keyup", b.updateValue)
        }
        b.color = null;
        if (typeof e == "function") {
            b.callback = e
        } else {
            if (typeof e == "object" || typeof e == "string") {
                b.callback = $(e);
                b.callback.bind("keyup", b.updateValue);
                if (b.callback.get(0).value) {
                    b.setColor(b.callback.get(0).value)
                }
            }
        }
        return this
    };
    b.updateValue = function(e) {
        if (this.value && this.value != b.color) {
            b.setColor(this.value)
        }
    };
    b.setColor = function(e) {
        var f = b.unpack(e);
        if (b.color != e && f) {
            b.color = e;
            b.rgb = f;
            b.hsl = b.RGBToHSL(b.rgb);
            b.updateDisplay()
        }
        return this
    };
    b.setHSL = function(e) {
        b.hsl = e;
        b.rgb = b.HSLToRGB(e);
        b.color = b.pack(b.rgb);
        b.updateDisplay();
        return this
    };
    b.widgetCoords = function(i) {
        var g, m;
        var h = i.target || i.srcElement;
        var f = b.wheel;
        if (typeof i.offsetX != "undefined") {
            var l = {
                x: i.offsetX,
                y: i.offsetY
            };
            var j = h;
            while (j) {
                j.mouseX = l.x;
                j.mouseY = l.y;
                l.x += j.offsetLeft;
                l.y += j.offsetTop;
                j = j.offsetParent
            }
            var j = f;
            var k = {
                x: 0,
                y: 0
            };
            while (j) {
                if (typeof j.mouseX != "undefined") {
                    g = j.mouseX - k.x;
                    m = j.mouseY - k.y;
                    break
                }
                k.x += j.offsetLeft;
                k.y += j.offsetTop;
                j = j.offsetParent
            }
            j = h;
            while (j) {
                j.mouseX = undefined;
                j.mouseY = undefined;
                j = j.offsetParent
            }
        } else {
            var l = b.absolutePosition(f);
            g = (i.pageX || 0 * (i.clientX + $("html").get(0).scrollLeft)) - l.x;
            m = (i.pageY || 0 * (i.clientY + $("html").get(0).scrollTop)) - l.y
        }
        return {
            x: g - b.width / 2,
            y: m - b.width / 2
        }
    };
    b.mousedown = function(e) {
        if (!document.dragging) {
            $(document).bind("mousemove", b.mousemove).bind("mouseup", b.mouseup);
            document.dragging = true
        }
        var f = b.widgetCoords(e);
        b.circleDrag = Math.max(Math.abs(f.x), Math.abs(f.y)) * 2 > b.square;
        b.mousemove(e);
        return false
    };
    b.mousemove = function(h) {
        var i = b.widgetCoords(h);
        if (b.circleDrag) {
            var g = Math.atan2(i.x, -i.y) / 6.28;
            if (g < 0) {
                g += 1
            }
            b.setHSL([g, b.hsl[1], b.hsl[2]])
        } else {
            var f = Math.max(0, Math.min(1, -(i.x / b.square) + 0.5));
            var e = Math.max(0, Math.min(1, -(i.y / b.square) + 0.5));
            b.setHSL([b.hsl[0], f, e])
        }
        return false
    };
    b.mouseup = function() {
        $(document).unbind("mousemove", b.mousemove);
        $(document).unbind("mouseup", b.mouseup);
        document.dragging = false
    };
    b.updateDisplay = function() {
        var e = b.hsl[0] * 6.28;
        $(".h-marker", c).css({
            left: Math.round(Math.sin(e) * b.radius + b.width / 2) + "px",
            top: Math.round( - Math.cos(e) * b.radius + b.width / 2) + "px"
        });
        $(".sl-marker", c).css({
            left: Math.round(b.square * (0.5 - b.hsl[1]) + b.width / 2) + "px",
            top: Math.round(b.square * (0.5 - b.hsl[2]) + b.width / 2) + "px"
        });
        $(".color", c).css("backgroundColor", b.pack(b.HSLToRGB([b.hsl[0], 1, 0.5])));
        if (typeof b.callback == "object") {
            $(b.callback).css({
                backgroundColor: b.color,
                color: b.hsl[2] > 0.5 ? "#000": "#fff"
            });
            $(b.callback).each(function() {
                if (this.value && this.value != b.color) {
                    this.value = b.color
                }
            })
        } else {
            if (typeof b.callback == "function") {
                b.callback.call(b, b.color)
            }
        }
    };
    b.absolutePosition = function(f) {
        var g = {
            x: f.offsetLeft,
            y: f.offsetTop
        };
        if (f.offsetParent) {
            var e = b.absolutePosition(f.offsetParent);
            g.x += e.x;
            g.y += e.y
        }
        return g
    };
    b.pack = function(f) {
        var i = Math.round(f[0] * 255);
        var h = Math.round(f[1] * 255);
        var e = Math.round(f[2] * 255);
        return "#" + (i < 16 ? "0": "") + i.toString(16) + (h < 16 ? "0": "") + h.toString(16) + (e < 16 ? "0": "") + e.toString(16)
    };
    b.unpack = function(e) {
        if (e.length == 7) {
            return [parseInt("0x" + e.substring(1, 3)) / 255, parseInt("0x" + e.substring(3, 5)) / 255, parseInt("0x" + e.substring(5, 7)) / 255]
        } else {
            if (e.length == 4) {
                return [parseInt("0x" + e.substring(1, 2)) / 15, parseInt("0x" + e.substring(2, 3)) / 15, parseInt("0x" + e.substring(3, 4)) / 15]
            }
        }
    };
    b.HSLToRGB = function(m) {
        var o, n, e, j, k;
        var i = m[0],
        p = m[1],
        f = m[2];
        n = (f <= 0.5) ? f * (p + 1) : f + p - f * p;
        o = f * 2 - n;
        return [this.hueToRGB(o, n, i + 0.33333), this.hueToRGB(o, n, i), this.hueToRGB(o, n, i - 0.33333)]
    };
    b.hueToRGB = function(f, e, g) {
        g = (g < 0) ? g + 1 : ((g > 1) ? g - 1 : g);
        if (g * 6 < 1) {
            return f + (e - f) * g * 6
        }
        if (g * 2 < 1) {
            return e
        }
        if (g * 3 < 2) {
            return f + (e - f) * (0.66666 - g) * 6
        }
        return f
    };
    b.RGBToHSL = function(m) {
        var i, o, p, j, q, f;
        var e = m[0],
        k = m[1],
        n = m[2];
        i = Math.min(e, Math.min(k, n));
        o = Math.max(e, Math.max(k, n));
        p = o - i;
        f = (i + o) / 2;
        q = 0;
        if (f > 0 && f < 1) {
            q = p / (f < 0.5 ? (2 * f) : (2 - 2 * f))
        }
        j = 0;
        if (p > 0) {
            if (o == e && o != k) {
                j += (k - n) / p
            }
            if (o == k && o != n) {
                j += (2 + (n - e) / p)
            }
            if (o == n && o != e) {
                j += (4 + (e - k) / p)
            }
            j /= 6
        }
        return [j, q, f]
    };
    $("*", c).mousedown(b.mousedown);
    b.setColor("#000000");
    if (d) {
        b.linkTo(d)
    }
};

PCDIY.addModules = {
    content: [{
        type: 4,
        name: "自定义内容"
    },
    {
        type: 5,
        name: "模块"
    }],
    detailContent: [{
        type: 1,
        name: "广告图片"
    }],
    listContent: [{
        type: 1,
        name: "广告图片"
    }]
},
$(function() {
    window.onbeforeunload = function() {
        return "离开页面将会丢失现有未保存的装修数据"
    },
    $.ajaxSetup({
        timeout: 2e4,
        error: function(e, t, i) {
            "timeout" == t && (HYD && HYD.hint ? HYD.hint("warning", "请求超时，请重试！") : alert("请求超时，请重试！"), $.jBox.hideloading())
        }
    });
    var e = $("#j-pageInitData").val(),
    t = $("#j-pageInitData_detail").val(),
    i = $("#j-pageInitData_list").val(),
    n = PCDIY.defaultData,
    a = $("#j-tplID").val(),
    d = $("#j-pageType").val().toLowerCase();
    e = e.length ? $.parseJSON(e) : $.extend(!0, {},
    n),
    t = t.length ? $.parseJSON(t).detailContent: $.extend(!0, {},
    n).detailContent,
    i = i.length ? $.parseJSON(i).listContent: $.extend(!0, {},
    n).listContent,
    e.detailContent = t,
    e.listContent = i;
    var o = {
        diyColControls: $("#tpl_pc_diy_col_controls").html(),
        diyModuleControls: $("#tpl_pc_diy_module_controls").html(),
        diyPopupType1: $("#tpl_pc_diy_popup_type1").html(),
        diyPopupType2: $("#tpl_pc_diy_popup_type2").html(),
        diyPopupType3: $("#tpl_pc_diy_popup_type3").html(),
        diyPopupType4: $("#tpl_pc_diy_popup_type4").html(),
        diyPopupType5: $("#tpl_pc_diy_popup_type5").html()
    },
    l = {
        getTpls: "/Index/listTemplate",
        useTpl: "/Index/switchTemplate",
        savePage: "/Index/saveDesign",
        saveListPage: "/List/saveDesign",
        saveDetailPage: "/Detail/saveDesign"
    },
    s = "";
    switch (d) {
    case "index":
        s = "content";
        break;
    case "list":
        s = "listContent";
        break;
    case "detail":
        s = "detailContent"
    }
    var c = {};
    c.html_encode = function(e) {
        var t = "";
        return 0 == e.length ? "": (t = e.replace(/&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t = t.replace(/>/g, "&gt;"), t = t.replace(/ /g, "&nbsp;"), t = t.replace(/\'/g, "&#39;"), t = t.replace(/\"/g, "&quot;"))
    },
    c.html_decode = function(e) {
        var t = "";
        return 0 == e.length ? "": (t = e.replace(/&amp;/g, "&"), t = t.replace(/&lt;/g, "<"), t = t.replace(/&gt;/g, ">"), t = t.replace(/&nbsp;/g, " "), t = t.replace(/&#39;/g, "'"), t = t.replace(/&quot;/g, '"'))
    },
    c.do_saveHomePage = function(e, t) {
        var i = $.extend(!0, {},
        e); !
        function() {
            i.detailContent && delete i.detailContent,
            i.listContent && delete i.listContent
        } (),
        $.ajax({
            url: l.savePage,
            type: "POST",
            dataType: "json",
            data: {
                tpl_id: a,
                data: JSON.stringify(i)
            },
            beforeSend: function() {
                $.jBox.showloading()
            },
            success: function(e) {
                1 == e.status ? t && t() : HYD.hint("danger", "对不起，保存失败：" + e.msg),
                $.jBox.hideloading()
            }
        })
    },
    c.do_saveListPage = function(e, t) {
        var i = $.extend(!0, {},
        e); !
        function() {
            i.pageinfo && delete i.pageinfo,
            i.header && delete i.header,
            i.footer && delete i.footer,
            i.content && delete i.content,
            i.detailContent && delete i.detailContent
        } (),
        $.ajax({
            url: l.saveListPage,
            type: "POST",
            dataType: "json",
            data: {
                data: JSON.stringify(i)
            },
            success: function(e) {
                1 == e.status ? t && t() : HYD.hint("danger", "对不起，列表页数据保存失败：" + e.msg),
                $.jBox.hideloading()
            }
        })
    },
    c.do_saveDetailPage = function(e, t) {
        var i = $.extend(!0, {},
        e); !
        function() {
            i.pageinfo && delete i.pageinfo,
            i.header && delete i.header,
            i.footer && delete i.footer,
            i.content && delete i.content,
            i.listContent && delete i.listContent
        } (),
        $.ajax({
            url: l.saveDetailPage,
            type: "POST",
            dataType: "json",
            data: {
                data: JSON.stringify(i)
            },
            success: function(e) {
                1 == e.status ? t && t() : HYD.hint("danger", "对不起，详情页数据保存失败：" + e.msg),
                $.jBox.hideloading()
            }
        })
    },
    c.addDiyCtrls = function(t) {
        var i = t.data("mark"),
        n = $(".diy-col[data-mark=" + i + "]").index(t),
        a = t.find(".diy-module"),
        d = {},
        l = e[i][n];
        d.showCtrls = l.showCtrls,
        d.visible = l.visible,
        d.del = l.del,
        d.move = l.move;
        var s = _.template(o.diyColControls, {
            dataset: d
        });
        t.append(s),
        a.length && a.each(function(e, t) {
            $(this).append(o.diyModuleControls).addClass("diy-module-type" + l.modules[e].type),
            (l.modules[e].isSlider || 2 == l.modules[e].type) && $(this).addClass("diy-module-slider")
        })
    },
    c.sortData = function(e, t, i) {
        if (e != t) {
            var n = i.slice(e, e + 1),
            a = i.slice(t, t + 1);
            i[e] = a[0],
            i[t] = n[0]
        }
    },
    c.reRender = function(e, t, i) {
        var n = _.template(o["diyPopupType" + t], i);
        e.find(".jbox-container").empty().append(n)
    },
    c.type1 = function(t, i, n, a, d, l) {
        var s = (t.find(".j-diy-img"), t.find(".j-diy-link"), $.extend(!0, {},
        i).dataset[0]);
        $.jBox.show({
            title: "编辑图片",
            width: 750,
            height: 500,
            content: _.template(o.diyPopupType1, {
                dataset: s
            }),
            onOpen: function(e) {
                e.css("z-index", "99996"),
                $("#jbox-overlay").css("z-index", "99995");
                var t = e.find(".edit-img-panel img");
                e.find(".j-selectImg").click(function() {
                    $.albums({
                        callback: function(e) {
                            var i = e[0];
                            i.indexOf("@!w640") >= 0 && (i = i.replace(/@!w640/, "")),
                            s.img = i,
                            t.attr("src", i)
                        }
                    })
                }),
                e.find(".j-resetImg").click(function() {
                    s.img = s.defaultimg,
                    t.attr("src", s.img)
                })
            },
            btnOK: {
                text: "确定",
                onBtnClick: function(i) {
                    s.link = i.find("input[name=link]").val(),
                    s.title = i.find("input[name=title]").val(),
                    t.find(".j-diy-link").attr("href", s.link),
                    t.find(".j-diy-link").attr("title", s.title),
                    t.find(".j-diy-img").attr("src", s.img),
                    e[a][d].modules[l].dataset[0] = s,
                    $.jBox.close(i)
                }
            },
            btnCancel: {
                show: !1
            }
        })
    },
    c.type2 = function(t, i, n, a, d, o) {
        var l = $.extend(!0, {},
        i);
        $.jBox.show({
            title: "编辑轮播图",
            width: 750,
            height: 500,
            content: "",
            onOpen: function(e) {
                e.css("z-index", "99996"),
                $("#jbox-overlay").css("z-index", "99995"),
                e.addClass("type2");
                var t = 2,
                i = 0,
                a = function() {
                    c.reRender(e, t, {
                        dataset: l.dataset,
                        dataindex: i
                    })
                };
                a();
                var d = e.find(".preview_img");
                e.on("click", ".j-btn-ctrl",
                function() {
                    i = $(this).data("index"),
                    a(),
                    d = e.find(".preview_img")
                }),
                e.on("click", ".j-selectImg",
                function() {
                    $.albums({
                        callback: function(e) {
                            var t = e[0];
                            t.indexOf("@!w640") >= 0 && (t = t.replace(/@!w640/, "")),
                            l.dataset[i].img = t,
                            d.attr("src", t)
                        }
                    })
                }),
                e.on("click", ".j-resetImg",
                function() {
                    l.dataset[i].img = l.dataset[i].defaultimg,
                    d.attr("src", l.dataset[i].img)
                }),
                e.on("change", "input",
                function() {
                    var e = $(this),
                    t = e.val(),
                    n = e.attr("name");
                    l.dataset[i][n] = t
                }),
                e.on("click", ".j-btn-add",
                function() {
                    l.dataset.push({
                        img: n.dataset[0].img,
                        defaultimg: n.dataset[0].defaultimg,
                        size: n.dataset[0].size,
                        link: n.dataset[0].link,
                        title: n.dataset[0].title
                    }),
                    i = l.dataset.length - 1,
                    a(),
                    d = e.find(".preview_img")
                }),
                e.on("click", ".j-btn-del",
                function() {
                    if (1 == l.dataset.length) return void HYD.hint("warning", "为了保证页面的完整性，您至少要保留一张轮播图。");
                    var t = $(this).data("index");
                    l.dataset.splice(t, 1),
                    i = 0,
                    a(),
                    d = e.find(".preview_img")
                })
            },
            btnOK: {
                text: "确定",
                onBtnClick: function(i) {
                    var n = $(".diy-module-slider").index(t),
                    s = "";
                    DiySliders[n] && DiySliders[n].destroySlider();
                    for (var c = t.find(".j-diy-append > *").eq(0), r = 0, p = l.dataset.length; r < p; r++) {
                        var u = c.clone(),
                        f = u.find(".j-diy-img"),
                        m = u.find(".j-diy-link");
                        f.attr("src", l.dataset[r].img),
                        m.attr("href", l.dataset[r].link),
                        m.attr("title", l.dataset[r].title),
                        s += u[0].outerHTML
                    }
                    t.find(".j-diy-append").empty().append(s),
                    DiySliders[n] && DiySliders[n].reloadSlider(),
                    e[a][d].modules[o] = l,
                    $.jBox.close(i)
                }
            },
            btnCancel: {
                show: !1
            }
        })
    },
    c.type3 = function(t, i, n, a, d, o) {
        var l = $.extend(!0, {},
        i);
        $.jBox.show({
            title: "选择商品",
            width: 750,
            height: 500,
            content: "",
            onOpen: function(e) {
                e.css("z-index", "99996"),
                $("#jbox-overlay").css("z-index", "99995"),
                e.addClass("type3");
                var t = 3,
                i = function() {
                    c.reRender(e, t, l)
                };
                i();
                var n = e.find(".preview_img");
                e.find(".j-selectImg").click(function() {
                    $.albums({
                        callback: function(e) {
                            l.img = e[0],
                            n.attr("src", l.img)
                        }
                    })
                }),
                e.find(".j-resetImg").click(function() {
                    l.img = l.defaultimg,
                    n.attr("src", l.img)
                }),
                e.on("change", "input[name=title],input[name=link]",
                function() {
                    var e = $(this),
                    t = e.val(),
                    i = e.attr("name");
                    l[i] = t
                }),
                e.on("click", ".j-addgoods",
                function() {
                    var t = e.find("input[name=goods_ids]").val().split(",");
                    $.selectGoods({
                        selectMod: 2,
                        selectIds: t,
                        callback: function(e, t) {
                            l.dataset = l.dataset.concat(e),
                            l.dataset.length > l.maxlength && 0 != l.maxlength && (l.dataset.length = l.maxlength),
                            i()
                        }
                    })
                }),
                e.on("click", ".j-delgoods",
                function() {
                    var e = $(this).parents("li").index();
                    l.dataset.splice(e, 1),
                    i()
                })
            },
            btnOK: {
                text: "确定",
                onBtnClick: function(i) {
                    if (l.dataset.length < 1) return void i.find(".j-goods-tip").text("为了保证页面的完整性，您至少要选择一个商品。").addClass("colorRed");
                    var n = $(".diy-module-slider").index(t),
                    s = "";
                    l.isSlider && DiySliders[n] && DiySliders[n].destroySlider();
                    for (var c = t.find(".j-diy-append > *").eq(0), r = 0, p = l.dataset.length; r < p; r++) {
                        var u = c.clone(),
                        f = u.find(".j-diy-link"),
                        m = u.find(".j-diy-original_price"),
                        g = u.find(".j-diy-img"),
                        h = u.find(".j-diy-price"),
                        y = u.find(".j-diy-title");
                        f.attr("href", l.dataset[r].link),
                        m.text(l.dataset[r].original_price),
                        l.dataset[r].is_compress ? g.attr("src", l.dataset[r].pic + "300x300") : g.attr("src", l.dataset[r].pic),
                        h.text(l.dataset[r].price),
                        y.text(l.dataset[r].title),
                        s += u[0].outerHTML
                    }
                    t.find(".j-diy-append").empty().append(s);
                    var v = t.parents(".diy-col");
                    v.find(".j-diy-col-title").text(l.title),
                    v.find(".j-diy-col-img").attr("src", l.img),
                    v.find(".j-diy-col-link").attr("href", l.link),
                    l.isSlider && DiySliders[n] && DiySliders[n].reloadSlider(),
                    e[a][d].modules[o] = l,
                    $.jBox.close(i)
                }
            },
            btnCancel: {
                show: !1
            }
        })
    },
    c.type4 = function(t, i, n, a, d, l) {
        var s = null,
        r = $.extend(!0, {},
        i);
        $.jBox.show({
            title: "编辑自定义内容",
            width: 1200,
            content: o.diyPopupType4,
            onOpen: function(e) {
                e.css("z-index", "99996"),
                $("#jbox-overlay").css("z-index", "99995"),
                e.addClass("type4"),
                s = UE.getEditor("j-ueditor"),
                s.ready(function() {
                    s.setContent(c.html_decode(r.dataset[0].fulltext)),
                    s.focus(!0)
                })
            },
            btnOK: {
                text: "确定",
                onBtnClick: function(i) {
                    r.dataset[0].fulltext = c.html_encode(s.getContent()),
                    t.find(".j-fulltext").html(c.html_decode(r.dataset[0].fulltext)),
                    e[a][d].modules[l] = r,
                    $(document).scrollTop(t.offset().top - 50),
                    $.jBox.close(i)
                }
            },
            onClosed: function() {
                s.destroy()
            },
            btnCancel: {
                show: !1
            }
        })
    },
    c.type5 = function(e, t) {
        var i = $.extend(!0, {},
        e),
        n = _.template(o.diyPopupType5, {
            dataset: i
        });
        $.jBox.show({
            title: "添加模板",
            width: 1e3,
            height: 700,
            content: n,
            onOpen: function(e) {
                var i = $(e).find(".j-select-moduleImg .moduleImg-item");
                i.click(function() {
                    $(this).addClass("selected").siblings().removeClass("selected")
                }),
                i.dblclick(function() {
                    var i = $(this).data("k");
                    t && t(i),
                    $.jBox.close(e)
                })
            },
            btnOK: {
                text: "确定",
                onBtnClick: function(e) {
                    var i = $(e).find(".selected").data("k");
                    t && t(i),
                    $.jBox.close(e)
                }
            },
            btnCancel: {
                show: !1
            }
        })
    },
    c.editBarInit = function() {
        var t = e.pageinfo,
        i = _.template($("#tpl_pc_diy_editBar").html(), t),
        o = $(i);
        $("body").append(o),
        o.find(".etp-close").click(function() {
            return $(this).parents(".eb-tool-panel").hide(),
            $(".eb-tool-par").removeClass("active"),
            !1
        }),
        o.find(".j-ebt-hover").hover(function() {
            $(this).find(".eb-tool-panel").show()
        },
        function() {
            $(this).find(".eb-tool-panel").hide()
        });
        var s = !1;
        o.find(".j-ebt-click a.eb-tool-par").click(function() {
            var e = $(this),
            t = function() {
                $(".eb-tool-panel").hide(),
                $(".eb-tool-par").removeClass("active")
            },
            i = function() {
                t(),
                e.addClass("active").siblings(".eb-tool-panel").show()
            };
            return "offcial" == e.data("type") ? s ? i() : $.ajax({
                url: l.getTpls + "?v=" + Math.round(100 * Math.random()),
                type: "GET",
                dataType: "json",
                beforeSend: function() {
                    $.jBox.showloading()
                },
                success: function(e) {
                    if (1 == e.status) {
                        var t = _.template($("#tpl_pc_diy_editBar_tpls").html(), {
                            dataset: e.data,
                            tplID: a
                        }),
                        n = $(t);
                        o.find(".j-tpls").empty().append(n),
                        n.find(".j-activeTpl").click(function() {
                            var e = $(this).data("id");
                            $.jBox.show({
                                title: "提示",
                                content: _.template($("#tpl_jbox_simple").html(), {
                                    content: "更换模板立即生效，是否继续？"
                                }),
                                btnOK: {
                                    onBtnClick: function(t) {
                                        $.ajax({
                                            url: l.useTpl,
                                            type: "GET",
                                            dataType: "json",
                                            data: {
                                                id: e
                                            },
                                            beforeSend: function() {
                                                $.jBox.showloading()
                                            },
                                            success: function(e) {
                                                1 == e.status ? (window.onbeforeunload = null, window.location.reload()) : HYD.hint("danger", "对不起，启用失败：" + e.msg),
                                                $.jBox.hideloading(),
                                                $.jBox.close(t)
                                            }
                                        })
                                    }
                                }
                            })
                        }),
                        s = !0,
                        i()
                    } else HYD.hint("danger", "对不起，删除失败：" + e.msg);
                    $.jBox.hideloading()
                }
            }) : i(),
            !1
        });
        var r = $("#J-color-input"),
        p = $.farbtastic("#J-color-picker",
        function(e) {
            r.val(e).css("backgroundColor", e),
            $("body").css("backgroundColor", e),
            t.color = e
        });
        p.setColor(r.val()),
        r.keyup(function() {
            var e = $(this).val();
            $(this).css("backgroundColor", e),
            p.setColor(e),
            t.color = e
        });
        var u = function() {
            $("body").css({
                "background-image": "url(" + t.img + ")",
                "background-color": t.color,
                "background-position": t.horizontal + " " + t.vertical,
                "background-repeat": t.repeat,
                "background-attachment": t.attachment
            })
        };
        u(),
        o.find(".j-selectBg").click(function() {
            $.albums({
                callback: function(e) {
                    t.img = e[0],
                    o.find("#j-imgPreview").attr("src", t.img),
                    u()
                }
            })
        }),
        o.find(".j-delBg").click(function() {
            t.img = "",
            o.find("#j-imgPreview").attr("src", "/PublicPC/images/diy/diy_nobgimg.png"),
            u()
        }),
        o.find("input").change(function() {
            var e = $(this).attr("name"),
            i = $(this).val();
            t[e] = i,
            u()
        }),
        o.find("#j-savePage").click(function() {
            var t = function() {
                HYD.hint("success", "恭喜，数据保存成功")
            };
            switch (d) {
            case "index":
                c.do_saveHomePage(e, t);
                break;
            case "list":
                c.do_saveHomePage(e),
                c.do_saveListPage(e, t);
                break;
            case "detail":
                c.do_saveHomePage(e),
                c.do_saveDetailPage(e, t)
            }
        }),
        o.find("#j-resetPageData").click(function() {
            $.jBox.show({
                title: "提示",
                content: _.template($("#tpl_jbox_simple").html(), {
                    content: "您将还原到默认数据，是否继续？"
                }),
                btnOK: {
                    onBtnClick: function(e) {
                        $.jBox.close(e);
                        var t = function() {
                            HYD.hint("success", "恭喜，数据还原成功"),
                            setTimeout(function() {
                                window.onbeforeunload = null,
                                window.location.reload()
                            },
                            2e3)
                        };
                        switch (d) {
                        case "index":
                            c.do_saveHomePage(n, t);
                            break;
                        case "list":
                            c.do_saveListPage(n, t);
                            break;
                        case "detail":
                            c.do_saveDetailPage(n, t)
                        }
                    }
                }
            })
        })
    },
    c.reset_move_disable = function() {
        var e = $(".j-sort");
        $(".j-diy-move").removeClass("disable"),
        e.find(".diy-col:first").find(".j-diy-move[data-direction='up']").addClass("disable"),
        e.find(".diy-col:last").find(".j-diy-move[data-direction='down']").addClass("disable")
    },
    c.editBarInit(),
    $(".diy-col").each(function() {
        var e = $(this);
        c.addDiyCtrls(e),
        e.hasClass("pre_hidden") && setTimeout(function() {
            e.addClass("hidden"),
            e.find("> :not('.diy-col-controls')").addClass("hide")
        },
        1)
    }),
    function() {
        var e = $("#tpl_pc_diy_content_actions").html(),
        t = _.template(e, {
            dataset: PCDIY.addModules[s]
        });
        $(".j-sort").append(t)
    } ();
    var r = {
        begin: 0,
        end: 0
    };
    $(".j-sort").sortable({
        revert: !0,
        placeholder: "drag-highlight",
        start: function(e, t) {
            r.begin = $(".diy-col[data-mark=" + s + "]").index(t.item)
        },
        stop: function(t, i) {
            r.end = $(".diy-col[data-mark=" + s + "]").index(i.item);
            var n = e[s];
            c.sortData(r.begin, r.end, n)
        }
    }).disableSelection(),
    $(document).on("click", ".j-diy-add-module",
    function() {
        var t = $(this),
        i = t.parents(".diy-content-actions"),
        a = t.data("type"),
        o = $("#tpl_pc_diy_module_type" + a).html(),
        l = "",
        r = $(".diy-col[data-mark=" + s + "],.diy-content-actions"),
        p = r.index(i),
        u = null;
        if (5 != a) {
            switch (a) {
            case 1:
                if (u = {
                    tplname: "tpl_common_dl_imgad",
                    showCtrls: 1,
                    visible: 1,
                    del: 1,
                    move: 1,
                    modules: [{
                        type: 1,
                        dataset: [{
                            img: "/PublicPC/images/index/tpl40/imgdivitemimg_3.jpg",
                            defaultimg: "/PublicPC/images/index/tpl40/imgdivitemimg_3.jpg",
                            size: "250px*100px",
                            link: "/Index/index",
                            title: ""
                        }]
                    }]
                },
                "detail" == d) {
                    var f = t.parents(".j-sort").data("position");
                    u.position = f
                }
                break;
            case 4:
                u = {
                    tplname: "tpl_common_fulltext",
                    showCtrls: 1,
                    visible: 1,
                    del: 1,
                    move: 1,
                    modules: [{
                        type: 4,
                        dataset: [{
                            fulltext: "&lt;p&gt;『富文本编辑器』&lt;/p&gt;"
                        }]
                    }]
                }
            }
            e[s].splice(p, 0, u),
            l = _.template(o, {
                colData: u,
                contentMark: s
            });
            var m = $(l);
            m.insertBefore(i),
            c.addDiyCtrls(m),
            m.find(".j-diy-edit").click()
        } else {
            for (var g = [], h = [], y = 0, v = n.content.length; y < v; y++) $.inArray(n.content[y].tplname, h) == -1 && (h.push(n.content[y].tplname), g.push(n.content[y]));
            c.type5(g,
            function(t) {
                var n = $.extend(!0, {},
                g[t]);
                n.del = 1,
                e[s].splice(p, 0, n),
                $.ajax({
                    url: "/Index/addModule?v=" + Math.round(100 * Math.random()),
                    type: "post",
                    dataType: "json",
                    data: {
                        newData: n
                    },
                    success: function(e) {
                        if (1 == e.status) {
                            l = e.data;
                            var t = $(l);
                            if (t.insertBefore(i), 1 == t.find(".headerSlider").length) {
                                var n = $(document).find(".headerSlider ul li").eq(0).height();
                                t.find(".headerSlider ul").css({
                                    height: n,
                                    overflow: "hidden"
                                })
                            }
                            c.addDiyCtrls(t)
                        }
                    }
                })
            })
        }
    }),
    $(document).on("click", ".j-diy-edit",
    function() {
        var t = $(this).parents(".diy-module"),
        i = t.parents(".diy-col"),
        a = i.data("mark"),
        d = $(".diy-col[data-mark=" + a + "]").index(i),
        o = i.find(".diy-module").index(t),
        l = e[a][d].modules[o],
        s = null;
        s = n[a][d] ? n[a][d].modules[o] : e[a][d].modules[o],
        c["type" + l.type](t, l, s, a, d, o)
    }),
    c.reset_move_disable(),
    $(document).on("click", ".j-diy-move",
    function() {
        if (!$(this).hasClass("disable")) {
            var t = $(this),
            i = t.parents(".diy-col"),
            n = t.parents(".j-sort"),
            a = t.data("direction"),
            d = n.find(".diy-col").index(i),
            o = 0,
            l = n.find(".diy-col").size();
            switch (a) {
            case "up":
                if (d > 0) {
                    var s = i.prevAll(".diy-col:first");
                    i.insertBefore(s),
                    o = d - 1
                }
                break;
            case "down":
                if (d < l) {
                    var r = i.nextAll(".diy-col:first");
                    i.insertAfter(r),
                    o = d + 1
                }
            }
            c.sortData(d, o, e.content),
            (d <= 1 || d >= l - 1) && c.reset_move_disable()
        }
    }),
    $(document).on("click", ".j-diy-del",
    function() {
        var t = $(this).parents(".diy-col"),
        i = t.data("mark"),
        n = $(".diy-col[data-mark=" + i + "]").index(t);
        $.jBox.show({
            title: "温馨提示",
            content: _.template($("#tpl_jbox_simple").html(), {
                content: "确定删除该模块？"
            }),
            btnOK: {
                onBtnClick: function(a) {
                    t.fadeOut("fast",
                    function() {
                        t.remove()
                    }),
                    e[i].splice(n, 1),
                    $.jBox.close(a)
                }
            }
        })
    }),
    $(document).on("click", ".j-diy-visible",
    function() {
        var t = $(this),
        i = t.parents(".diy-col"),
        n = i.data("mark"),
        a = $(".diy-col[data-mark=" + n + "]").index(i),
        d = i.hasClass("hidden"),
        o = e[n];
        d ? (i.removeClass("hidden"), t.attr("title", "显示").find("i").removeClass("gicon-eye-close").addClass("gicon-eye-open"), i.find("> :not('.diy-col-controls')").removeClass("hide"), o[a].visible = 1) : (i.addClass("hidden"), t.attr("title", "隐藏").find("i").removeClass("gicon-eye-open").addClass("gicon-eye-close"), i.find("> :not('.diy-col-controls')").addClass("hide"), o[a].visible = 0)
    }),
    _QV_ = "%E6%9D%AD%E5%B7%9E%E5%90%AF%E5%8D%9A%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%89%88%E6%9D%83%E6%89%80%E6%9C%89"
});