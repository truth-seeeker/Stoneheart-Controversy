/** biome-ignore-all lint/complexity/useOptionalChain: <explanation> */
(function (be, ve) {
	if (typeof exports == "object" && typeof module !== "undefined") {
		module.exports = ve();
	} else if (typeof define == "function" && define.amd) {
		define(ve);
	} else {
		(be =
			typeof globalThis !== "undefined" ? globalThis : be || self).bootstrap =
			ve();
	}
})(this, function () {
	"use strict";

	const be = "transitionend";
	const ve = (i) => {
		let e = i.getAttribute("data-bs-target");
		if (!e || e === "#") {
			let t = i.getAttribute("href");
			if (!t || (!t.includes("#") && !t.startsWith("."))) {
				return null;
			}
			if (t.includes("#") && !t.startsWith("#")) {
				t = `#${t.split("#")[1]}`;
			}
			e = t && t !== "#" ? t.trim() : null;
		}
		return e;
	};
	const Qt = (i) => {
		const e = ve(i);
		if (e && document.querySelector(e)) {
			return e;
		} else {
			return null;
		}
	};
	const J = (i) => {
		const e = ve(i);
		if (e) {
			return document.querySelector(e);
		} else {
			return null;
		}
	};
	const Ut = (i) => {
		i.dispatchEvent(new Event(be));
	};
	const ee = (i) =>
		!!i &&
		typeof i == "object" &&
		(i.jquery !== undefined && (i = i[0]), i.nodeType !== undefined);
	const oe = (i) =>
		ee(i)
			? i.jquery
				? i[0]
				: i
			: typeof i == "string" && i.length > 0
				? document.querySelector(i)
				: null;
	const ye = (i) => {
		if (!ee(i) || i.getClientRects().length === 0) {
			return false;
		}
		const e = getComputedStyle(i).getPropertyValue("visibility") === "visible";
		const t = i.closest("details:not([open])");
		if (!t) {
			return e;
		}
		if (t !== i) {
			const n = i.closest("summary");
			if ((n && n.parentNode !== t) || n === null) {
				return false;
			}
		}
		return e;
	};
	const re = (i) =>
		!i ||
		i.nodeType !== Node.ELEMENT_NODE ||
		!!i.classList.contains("disabled") ||
		(i.disabled !== undefined
			? i.disabled
			: i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false");
	const Gt = (i) => {
		if (!document.documentElement.attachShadow) {
			return null;
		}
		if (typeof i.getRootNode == "function") {
			const e = i.getRootNode();
			if (e instanceof ShadowRoot) {
				return e;
			} else {
				return null;
			}
		}
		if (i instanceof ShadowRoot) {
			return i;
		} else if (i.parentNode) {
			return Gt(i.parentNode);
		} else {
			return null;
		}
	};
	const Ve = () => {};
	const Zt = () =>
		window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
			? window.jQuery
			: null;
	const gt = [];
	const W = () => document.documentElement.dir === "rtl";
	const F = (i) => {
		var e;
		e = () => {
			const t = Zt();
			if (t) {
				const n = i.NAME;
				const s = t.fn[n];
				t.fn[n] = i.jQueryInterface;
				t.fn[n].Constructor = i;
				t.fn[n].noConflict = () => {
					t.fn[n] = s;
					return i.jQueryInterface;
				};
			}
		};
		if (document.readyState === "loading") {
			if (!gt.length) {
				document.addEventListener("DOMContentLoaded", () => {
					for (const t of gt) {
						t();
					}
				});
			}
			gt.push(e);
		} else {
			e();
		}
	};
	const te = (i) => {
		if (typeof i == "function") {
			i();
		}
	};
	const Jt = (i, e, t = true) => {
		if (!t) {
			te(i);
			return;
		}
		const n =
			((r) => {
				if (!r) {
					return 0;
				}
				let { transitionDuration: a, transitionDelay: c } =
					window.getComputedStyle(r);
				const d = Number.parseFloat(a);
				const u = Number.parseFloat(c);
				if (d || u) {
					a = a.split(",")[0];
					c = c.split(",")[0];
					return (Number.parseFloat(a) + Number.parseFloat(c)) * 1000;
				} else {
					return 0;
				}
			})(e) + 5;
		let s = false;
		const o = ({ target: r }) => {
			if (r === e) {
				s = true;
				e.removeEventListener(be, o);
				te(i);
			}
		};
		e.addEventListener(be, o);
		setTimeout(() => {
			if (!s) {
				Ut(e);
			}
		}, n);
	};
	const mt = (i, e, t, n) => {
		const s = i.length;
		let o = i.indexOf(e);
		if (o === -1) {
			if (!t && n) {
				return i[s - 1];
			} else {
				return i[0];
			}
		} else {
			o += t ? 1 : -1;
			if (n) {
				o = (o + s) % s;
			}
			return i[Math.max(0, Math.min(o, s - 1))];
		}
	};
	const Mn = /[^.]*(?=\..*)\.|.*/;
	const Hn = /\..*/;
	const $n = /::\d+$/;
	const _t = {};
	let ei = 1;
	const ti = {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
	};
	const Bn = new Set([
		"click",
		"dblclick",
		"mouseup",
		"mousedown",
		"contextmenu",
		"mousewheel",
		"DOMMouseScroll",
		"mouseover",
		"mouseout",
		"mousemove",
		"selectstart",
		"selectend",
		"keydown",
		"keypress",
		"keyup",
		"orientationchange",
		"touchstart",
		"touchmove",
		"touchend",
		"touchcancel",
		"pointerdown",
		"pointermove",
		"pointerup",
		"pointerleave",
		"pointercancel",
		"gesturestart",
		"gesturechange",
		"gestureend",
		"focus",
		"blur",
		"change",
		"reset",
		"select",
		"submit",
		"focusin",
		"focusout",
		"load",
		"unload",
		"beforeunload",
		"resize",
		"move",
		"DOMContentLoaded",
		"readystatechange",
		"error",
		"abort",
		"scroll",
	]);
	function ii(i, e) {
		return (e && `${e}::${ei++}`) || i.uidEvent || ei++;
	}
	function ni(i) {
		const e = ii(i);
		i.uidEvent = e;
		_t[e] = _t[e] || {};
		return _t[e];
	}
	function si(i, e, t = null) {
		return Object.values(i).find(
			(n) => n.callable === e && n.delegationSelector === t,
		);
	}
	function oi(i, e, t) {
		const n = typeof e == "string";
		const s = n ? t : e || t;
		let o = ai(i);
		if (!Bn.has(o)) {
			o = i;
		}
		return [n, s, o];
	}
	function ri(i, e, t, n, s) {
		if (typeof e != "string" || !i) {
			return;
		}
		let [o, r, a] = oi(e, t, n);
		var g;
		if (e in ti) {
			g = r;
			r = function (p) {
				if (
					!p.relatedTarget ||
					(p.relatedTarget !== p.delegateTarget &&
						!p.delegateTarget.contains(p.relatedTarget))
				) {
					return g.call(this, p);
				}
			};
		}
		const c = ni(i);
		const d = (c[a] ||= {});
		const u = si(d, r, o ? t : null);
		if (u) {
			u.oneOff = u.oneOff && s;
			return;
		}
		const h = ii(r, e.replace(Mn, ""));
		const b = o
			? (function (f, g, p) {
					return function m(T) {
						const k = f.querySelectorAll(g);
						for (let { target: y } = T; y && y !== this; y = y.parentNode) {
							for (const A of k) {
								if (A === y) {
									vt(T, {
										delegateTarget: y,
									});
									if (m.oneOff) {
										l.off(f, T.type, g, p);
									}
									return p.apply(y, [T]);
								}
							}
						}
					};
				})(i, t, r)
			: (function (f, g) {
					return function p(m) {
						vt(m, {
							delegateTarget: f,
						});
						if (p.oneOff) {
							l.off(f, m.type, g);
						}
						return g.apply(f, [m]);
					};
				})(i, r);
		b.delegationSelector = o ? t : null;
		b.callable = r;
		b.oneOff = s;
		b.uidEvent = h;
		d[h] = b;
		i.addEventListener(a, b, o);
	}
	function bt(i, e, t, n, s) {
		const o = si(e[t], n, s);
		if (o) {
			i.removeEventListener(t, o, Boolean(s));
			delete e[t][o.uidEvent];
		}
	}
	function Wn(i, e, t, n) {
		const s = e[t] || {};
		for (const o of Object.keys(s)) {
			if (o.includes(n)) {
				const r = s[o];
				bt(i, e, t, r.callable, r.delegationSelector);
			}
		}
	}
	function ai(i) {
		i = i.replace(Hn, "");
		return ti[i] || i;
	}
	const l = {
		on(i, e, t, n) {
			ri(i, e, t, n, false);
		},
		one(i, e, t, n) {
			ri(i, e, t, n, true);
		},
		off(i, e, t, n) {
			if (typeof e != "string" || !i) {
				return;
			}
			const [s, o, r] = oi(e, t, n);
			const a = r !== e;
			const c = ni(i);
			const d = c[r] || {};
			const u = e.startsWith(".");
			if (o === undefined) {
				if (u) {
					for (const h of Object.keys(c)) {
						Wn(i, c, h, e.slice(1));
					}
				}
				for (const h of Object.keys(d)) {
					const b = h.replace($n, "");
					if (!a || e.includes(b)) {
						const f = d[h];
						bt(i, c, r, f.callable, f.delegationSelector);
					}
				}
			} else {
				if (!Object.keys(d).length) {
					return;
				}
				bt(i, c, r, o, s ? t : null);
			}
		},
		trigger(i, e, t) {
			if (typeof e != "string" || !i) {
				return null;
			}
			const n = Zt();
			let s = null;
			let o = true;
			let r = true;
			let a = false;
			if (e !== ai(e) && n) {
				s = n.Event(e, t);
				n(i).trigger(s);
				o = !s.isPropagationStopped();
				r = !s.isImmediatePropagationStopped();
				a = s.isDefaultPrevented();
			}
			let c = new Event(e, {
				bubbles: o,
				cancelable: true,
			});
			c = vt(c, t);
			if (a) {
				c.preventDefault();
			}
			if (r) {
				i.dispatchEvent(c);
			}
			if (c.defaultPrevented && s) {
				s.preventDefault();
			}
			return c;
		},
	};
	function vt(i, e) {
		for (const [t, n] of Object.entries(e || {})) {
			try {
				i[t] = n;
			} catch {
				Object.defineProperty(i, t, {
					configurable: true,
					get: () => n,
				});
			}
		}
		return i;
	}
	const ae = new Map();
	const yt = {
		set(i, e, t) {
			if (!ae.has(i)) {
				ae.set(i, new Map());
			}
			const n = ae.get(i);
			if (n.has(e) || n.size === 0) {
				n.set(e, t);
			} else {
				console.error(
					`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`,
				);
			}
		},
		get: (i, e) => (ae.has(i) && ae.get(i).get(e)) || null,
		remove(i, e) {
			if (!ae.has(i)) {
				return;
			}
			const t = ae.get(i);
			t.delete(e);
			if (t.size === 0) {
				ae.delete(i);
			}
		},
	};
	function li(i) {
		if (i === "true") {
			return true;
		}
		if (i === "false") {
			return false;
		}
		if (i === Number(i).toString()) {
			return Number(i);
		}
		if (i === "" || i === "null") {
			return null;
		}
		if (typeof i != "string") {
			return i;
		}
		try {
			return JSON.parse(decodeURIComponent(i));
		} catch {
			return i;
		}
	}
	function wt(i) {
		return i.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
	}
	const ie = {
		setDataAttribute(i, e, t) {
			i.setAttribute(`data-bs-${wt(e)}`, t);
		},
		removeDataAttribute(i, e) {
			i.removeAttribute(`data-bs-${wt(e)}`);
		},
		getDataAttributes(i) {
			if (!i) {
				return {};
			}
			const e = {};
			const t = Object.keys(i.dataset).filter(
				(n) => n.startsWith("bs") && !n.startsWith("bsConfig"),
			);
			for (const n of t) {
				let s = n.replace(/^bs/, "");
				s = s.charAt(0).toLowerCase() + s.slice(1, s.length);
				e[s] = li(i.dataset[n]);
			}
			return e;
		},
		getDataAttribute: (i, e) => li(i.getAttribute(`data-bs-${wt(e)}`)),
	};
	class Pe {
		static get Default() {
			return {};
		}
		static get DefaultType() {
			return {};
		}
		static get NAME() {
			throw new Error(
				'You have to implement the static method "NAME", for each component!',
			);
		}
		_getConfig(e) {
			e = this._mergeConfigObj(e);
			e = this._configAfterMerge(e);
			this._typeCheckConfig(e);
			return e;
		}
		_configAfterMerge(e) {
			return e;
		}
		_mergeConfigObj(e, t) {
			const n = ee(t) ? ie.getDataAttribute(t, "config") : {};
			return {
				...this.constructor.Default,
				...(typeof n == "object" ? n : {}),
				...(ee(t) ? ie.getDataAttributes(t) : {}),
				...(typeof e == "object" ? e : {}),
			};
		}
		_typeCheckConfig(e, t = this.constructor.DefaultType) {
			for (const s of Object.keys(t)) {
				const o = t[s];
				const r = e[s];
				const a = ee(r)
					? "element"
					: (n = r) == null
						? `${n}`
						: Object.prototype.toString
								.call(n)
								.match(/\s([a-z]+)/i)[1]
								.toLowerCase();
				if (!new RegExp(o).test(a)) {
					throw new TypeError(
						`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${o}".`,
					);
				}
			}
			var n;
		}
	}
	class K extends Pe {
		constructor(e, t) {
			super();
			if ((e = oe(e))) {
				this._element = e;
				this._config = this._getConfig(t);
				yt.set(this._element, this.constructor.DATA_KEY, this);
			}
		}
		dispose() {
			yt.remove(this._element, this.constructor.DATA_KEY);
			l.off(this._element, this.constructor.EVENT_KEY);
			for (const e of Object.getOwnPropertyNames(this)) {
				this[e] = null;
			}
		}
		_queueCallback(e, t, n = true) {
			Jt(e, t, n);
		}
		_getConfig(e) {
			e = this._mergeConfigObj(e, this._element);
			e = this._configAfterMerge(e);
			this._typeCheckConfig(e);
			return e;
		}
		static getInstance(e) {
			return yt.get(oe(e), this.DATA_KEY);
		}
		static getOrCreateInstance(e, t = {}) {
			return (
				this.getInstance(e) || new this(e, typeof t == "object" ? t : null)
			);
		}
		static get VERSION() {
			return "5.2.3";
		}
		static get DATA_KEY() {
			return `bs.${this.NAME}`;
		}
		static get EVENT_KEY() {
			return `.${this.DATA_KEY}`;
		}
		static eventName(e) {
			return `${e}${this.EVENT_KEY}`;
		}
	}
	const Ke = (i, e = "hide") => {
		const n = i.NAME;
		l.on(
			document,
			`click.dismiss${i.EVENT_KEY}`,
			`[data-bs-dismiss="${n}"]`,
			function (s) {
				if (["A", "AREA"].includes(this.tagName)) {
					s.preventDefault();
				}
				if (re(this)) {
					return;
				}
				const o = J(this) || this.closest(`.${n}`);
				i.getOrCreateInstance(o)[e]();
			},
		);
	};
	class je extends K {
		static get NAME() {
			return "alert";
		}
		close() {
			if (l.trigger(this._element, "close.bs.alert").defaultPrevented) {
				return;
			}
			this._element.classList.remove("show");
			const e = this._element.classList.contains("fade");
			this._queueCallback(() => this._destroyElement(), this._element, e);
		}
		_destroyElement() {
			this._element.remove();
			l.trigger(this._element, "closed.bs.alert");
			this.dispose();
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = je.getOrCreateInstance(this);
				if (typeof e == "string") {
					if (t[e] === undefined || e.startsWith("_") || e === "constructor") {
						throw new TypeError(`No method named "${e}"`);
					}
					t[e](this);
				}
			});
		}
	}
	Ke(je, "close");
	F(je);
	const ci = '[data-bs-toggle="button"]';
	class Me extends K {
		static get NAME() {
			return "button";
		}
		toggle() {
			this._element.setAttribute(
				"aria-pressed",
				this._element.classList.toggle("active"),
			);
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = Me.getOrCreateInstance(this);
				if (e === "toggle") {
					t[e]();
				}
			});
		}
	}
	l.on(document, "click.bs.button.data-api", ci, (i) => {
		i.preventDefault();
		const e = i.target.closest(ci);
		Me.getOrCreateInstance(e).toggle();
	});
	F(Me);
	const _ = {
		find: (i, e = document.documentElement) =>
			[].concat(...Element.prototype.querySelectorAll.call(e, i)),
		findOne: (i, e = document.documentElement) =>
			Element.prototype.querySelector.call(e, i),
		children: (i, e) => [].concat(...i.children).filter((t) => t.matches(e)),
		parents(i, e) {
			const t = [];
			let n = i.parentNode.closest(e);
			while (n) {
				t.push(n);
				n = n.parentNode.closest(e);
			}
			return t;
		},
		prev(i, e) {
			let t = i.previousElementSibling;
			while (t) {
				if (t.matches(e)) {
					return [t];
				}
				t = t.previousElementSibling;
			}
			return [];
		},
		next(i, e) {
			let t = i.nextElementSibling;
			while (t) {
				if (t.matches(e)) {
					return [t];
				}
				t = t.nextElementSibling;
			}
			return [];
		},
		focusableChildren(i) {
			const e = [
				"a",
				"button",
				"input",
				"textarea",
				"select",
				"details",
				"[tabindex]",
				'[contenteditable="true"]',
			]
				.map((t) => `${t}:not([tabindex^="-"])`)
				.join(",");
			return this.find(e, i).filter((t) => !re(t) && ye(t));
		},
	};
	const Fn = {
		endCallback: null,
		leftCallback: null,
		rightCallback: null,
	};
	const zn = {
		endCallback: "(function|null)",
		leftCallback: "(function|null)",
		rightCallback: "(function|null)",
	};
	class Xe extends Pe {
		constructor(e, t) {
			super();
			this._element = e;
			if (e && Xe.isSupported()) {
				this._config = this._getConfig(t);
				this._deltaX = 0;
				this._supportPointerEvents = Boolean(window.PointerEvent);
				this._initEvents();
			}
		}
		static get Default() {
			return Fn;
		}
		static get DefaultType() {
			return zn;
		}
		static get NAME() {
			return "swipe";
		}
		dispose() {
			l.off(this._element, ".bs.swipe");
		}
		_start(e) {
			if (this._supportPointerEvents) {
				if (this._eventIsPointerPenTouch(e)) {
					this._deltaX = e.clientX;
				}
			} else {
				this._deltaX = e.touches[0].clientX;
			}
		}
		_end(e) {
			if (this._eventIsPointerPenTouch(e)) {
				this._deltaX = e.clientX - this._deltaX;
			}
			this._handleSwipe();
			te(this._config.endCallback);
		}
		_move(e) {
			this._deltaX =
				e.touches && e.touches.length > 1
					? 0
					: e.touches[0].clientX - this._deltaX;
		}
		_handleSwipe() {
			const e = Math.abs(this._deltaX);
			if (e <= 40) {
				return;
			}
			const t = e / this._deltaX;
			this._deltaX = 0;
			if (t) {
				te(t > 0 ? this._config.rightCallback : this._config.leftCallback);
			}
		}
		_initEvents() {
			if (this._supportPointerEvents) {
				l.on(this._element, "pointerdown.bs.swipe", (e) => this._start(e));
				l.on(this._element, "pointerup.bs.swipe", (e) => this._end(e));
				this._element.classList.add("pointer-event");
			} else {
				l.on(this._element, "touchstart.bs.swipe", (e) => this._start(e));
				l.on(this._element, "touchmove.bs.swipe", (e) => this._move(e));
				l.on(this._element, "touchend.bs.swipe", (e) => this._end(e));
			}
		}
		_eventIsPointerPenTouch(e) {
			return (
				this._supportPointerEvents &&
				(e.pointerType === "pen" || e.pointerType === "touch")
			);
		}
		static isSupported() {
			return (
				"ontouchstart" in document.documentElement ||
				navigator.maxTouchPoints > 0
			);
		}
	}
	const He = "next";
	const we = "prev";
	const Ae = "left";
	const Ye = "right";
	const At = "slid.bs.carousel";
	const hi = "carousel";
	const Qe = "active";
	const qn = {
		ArrowLeft: Ye,
		ArrowRight: Ae,
	};
	const Rn = {
		interval: 5000,
		keyboard: true,
		pause: "hover",
		ride: false,
		touch: true,
		wrap: true,
	};
	const Vn = {
		interval: "(number|boolean)",
		keyboard: "boolean",
		pause: "(string|boolean)",
		ride: "(boolean|string)",
		touch: "boolean",
		wrap: "boolean",
	};
	class Ee extends K {
		constructor(e, t) {
			super(e, t);
			this._interval = null;
			this._activeElement = null;
			this._isSliding = false;
			this.touchTimeout = null;
			this._swipeHelper = null;
			this._indicatorsElement = _.findOne(
				".carousel-indicators",
				this._element,
			);
			this._addEventListeners();
			if (this._config.ride === hi) {
				this.cycle();
			}
		}
		static get Default() {
			return Rn;
		}
		static get DefaultType() {
			return Vn;
		}
		static get NAME() {
			return "carousel";
		}
		next() {
			this._slide(He);
		}
		nextWhenVisible() {
			if (!document.hidden && ye(this._element)) {
				this.next();
			}
		}
		prev() {
			this._slide(we);
		}
		pause() {
			if (this._isSliding) {
				Ut(this._element);
			}
			this._clearInterval();
		}
		cycle() {
			this._clearInterval();
			this._updateInterval();
			this._interval = setInterval(
				() => this.nextWhenVisible(),
				this._config.interval,
			);
		}
		_maybeEnableCycle() {
			if (this._config.ride) {
				if (this._isSliding) {
					l.one(this._element, At, () => this.cycle());
				} else {
					this.cycle();
				}
			}
		}
		to(e) {
			const t = this._getItems();
			if (e > t.length - 1 || e < 0) {
				return;
			}
			if (this._isSliding) {
				l.one(this._element, At, () => this.to(e));
				return;
			}
			const n = this._getItemIndex(this._getActive());
			if (n !== e) {
				this._slide(e > n ? He : we, t[e]);
			}
		}
		dispose() {
			if (this._swipeHelper) {
				this._swipeHelper.dispose();
			}
			super.dispose();
		}
		_configAfterMerge(e) {
			e.defaultInterval = e.interval;
			return e;
		}
		_addEventListeners() {
			if (this._config.keyboard) {
				l.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e));
			}
			if (this._config.pause === "hover") {
				l.on(this._element, "mouseenter.bs.carousel", () => this.pause());
				l.on(this._element, "mouseleave.bs.carousel", () =>
					this._maybeEnableCycle(),
				);
			}
			if (this._config.touch && Xe.isSupported()) {
				this._addTouchEventListeners();
			}
		}
		_addTouchEventListeners() {
			for (const t of _.find(".carousel-item img", this._element)) {
				l.on(t, "dragstart.bs.carousel", (n) => n.preventDefault());
			}
			this._swipeHelper = new Xe(this._element, {
				leftCallback: () => this._slide(this._directionToOrder(Ae)),
				rightCallback: () => this._slide(this._directionToOrder(Ye)),
				endCallback: () => {
					if (this._config.pause === "hover") {
						this.pause();
						if (this.touchTimeout) {
							clearTimeout(this.touchTimeout);
						}
						this.touchTimeout = setTimeout(
							() => this._maybeEnableCycle(),
							500 + this._config.interval,
						);
					}
				},
			});
		}
		_keydown(e) {
			if (/input|textarea/i.test(e.target.tagName)) {
				return;
			}
			const t = qn[e.key];
			if (t) {
				e.preventDefault();
				this._slide(this._directionToOrder(t));
			}
		}
		_getItemIndex(e) {
			return this._getItems().indexOf(e);
		}
		_setActiveIndicatorElement(e) {
			if (!this._indicatorsElement) {
				return;
			}
			const t = _.findOne(".active", this._indicatorsElement);
			t.classList.remove(Qe);
			t.removeAttribute("aria-current");
			const n = _.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
			if (n) {
				n.classList.add(Qe);
				n.setAttribute("aria-current", "true");
			}
		}
		_updateInterval() {
			const e = this._activeElement || this._getActive();
			if (!e) {
				return;
			}
			const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
			this._config.interval = t || this._config.defaultInterval;
		}
		_slide(e, t = null) {
			if (this._isSliding) {
				return;
			}
			const n = this._getActive();
			const s = e === He;
			const o = t || mt(this._getItems(), n, s, this._config.wrap);
			if (o === n) {
				return;
			}
			const r = this._getItemIndex(o);
			const a = (h) =>
				l.trigger(this._element, h, {
					relatedTarget: o,
					direction: this._orderToDirection(e),
					from: this._getItemIndex(n),
					to: r,
				});
			if (a("slide.bs.carousel").defaultPrevented || !n || !o) {
				return;
			}
			const c = Boolean(this._interval);
			this.pause();
			this._isSliding = true;
			this._setActiveIndicatorElement(r);
			this._activeElement = o;
			const d = s ? "carousel-item-start" : "carousel-item-end";
			const u = s ? "carousel-item-next" : "carousel-item-prev";
			o.classList.add(u);
			n.classList.add(d);
			o.classList.add(d);
			this._queueCallback(
				() => {
					o.classList.remove(d, u);
					o.classList.add(Qe);
					n.classList.remove(Qe, u, d);
					this._isSliding = false;
					a(At);
				},
				n,
				this._isAnimated(),
			);
			if (c) {
				this.cycle();
			}
		}
		_isAnimated() {
			return this._element.classList.contains("slide");
		}
		_getActive() {
			return _.findOne(".active.carousel-item", this._element);
		}
		_getItems() {
			return _.find(".carousel-item", this._element);
		}
		_clearInterval() {
			if (this._interval) {
				clearInterval(this._interval);
				this._interval = null;
			}
		}
		_directionToOrder(e) {
			if (W()) {
				if (e === Ae) {
					return we;
				} else {
					return He;
				}
			} else if (e === Ae) {
				return He;
			} else {
				return we;
			}
		}
		_orderToDirection(e) {
			if (W()) {
				if (e === we) {
					return Ae;
				} else {
					return Ye;
				}
			} else if (e === we) {
				return Ye;
			} else {
				return Ae;
			}
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = Ee.getOrCreateInstance(this, e);
				if (typeof e != "number") {
					if (typeof e == "string") {
						if (
							t[e] === undefined ||
							e.startsWith("_") ||
							e === "constructor"
						) {
							throw new TypeError(`No method named "${e}"`);
						}
						t[e]();
					}
				} else {
					t.to(e);
				}
			});
		}
	}
	l.on(
		document,
		"click.bs.carousel.data-api",
		"[data-bs-slide], [data-bs-slide-to]",
		function (i) {
			const e = J(this);
			if (!e || !e.classList.contains(hi)) {
				return;
			}
			i.preventDefault();
			const t = Ee.getOrCreateInstance(e);
			const n = this.getAttribute("data-bs-slide-to");
			if (n) {
				t.to(n);
				t._maybeEnableCycle();
				return;
			} else if (ie.getDataAttribute(this, "slide") === "next") {
				t.next();
				t._maybeEnableCycle();
				return;
			} else {
				t.prev();
				t._maybeEnableCycle();
				return;
			}
		},
	);
	l.on(window, "load.bs.carousel.data-api", () => {
		const i = _.find('[data-bs-ride="carousel"]');
		for (const e of i) {
			Ee.getOrCreateInstance(e);
		}
	});
	F(Ee);
	const Et = "show";
	const Ue = "collapse";
	const Ge = "collapsing";
	const Ct = '[data-bs-toggle="collapse"]';
	const Kn = {
		parent: null,
		toggle: true,
	};
	const Xn = {
		parent: "(null|element)",
		toggle: "boolean",
	};
	class Ce extends K {
		constructor(e, t) {
			super(e, t);
			this._isTransitioning = false;
			this._triggerArray = [];
			const n = _.find(Ct);
			for (const s of n) {
				const o = Qt(s);
				const r = _.find(o).filter((a) => a === this._element);
				if (o !== null && r.length) {
					this._triggerArray.push(s);
				}
			}
			this._initializeChildren();
			if (!this._config.parent) {
				this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
			}
			if (this._config.toggle) {
				this.toggle();
			}
		}
		static get Default() {
			return Kn;
		}
		static get DefaultType() {
			return Xn;
		}
		static get NAME() {
			return "collapse";
		}
		toggle() {
			if (this._isShown()) {
				this.hide();
			} else {
				this.show();
			}
		}
		show() {
			if (this._isTransitioning || this._isShown()) {
				return;
			}
			let e = [];
			if (this._config.parent) {
				e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
					.filter((s) => s !== this._element)
					.map((s) =>
						Ce.getOrCreateInstance(s, {
							toggle: false,
						}),
					);
			}
			if (
				(e.length && e[0]._isTransitioning) ||
				l.trigger(this._element, "show.bs.collapse").defaultPrevented
			) {
				return;
			}
			for (const s of e) {
				s.hide();
			}
			const t = this._getDimension();
			this._element.classList.remove(Ue);
			this._element.classList.add(Ge);
			this._element.style[t] = 0;
			this._addAriaAndCollapsedClass(this._triggerArray, true);
			this._isTransitioning = true;
			const n = `scroll${t[0].toUpperCase() + t.slice(1)}`;
			this._queueCallback(
				() => {
					this._isTransitioning = false;
					this._element.classList.remove(Ge);
					this._element.classList.add(Ue, Et);
					this._element.style[t] = "";
					l.trigger(this._element, "shown.bs.collapse");
				},
				this._element,
				true,
			);
			this._element.style[t] = `${this._element[n]}px`;
		}
		hide() {
			if (
				this._isTransitioning ||
				!this._isShown() ||
				l.trigger(this._element, "hide.bs.collapse").defaultPrevented
			) {
				return;
			}
			const e = this._getDimension();
			this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`;
			this._element.classList.add(Ge);
			this._element.classList.remove(Ue, Et);
			for (const t of this._triggerArray) {
				const n = J(t);
				if (n && !this._isShown(n)) {
					this._addAriaAndCollapsedClass([t], false);
				}
			}
			this._isTransitioning = true;
			this._element.style[e] = "";
			this._queueCallback(
				() => {
					this._isTransitioning = false;
					this._element.classList.remove(Ge);
					this._element.classList.add(Ue);
					l.trigger(this._element, "hidden.bs.collapse");
				},
				this._element,
				true,
			);
		}
		_isShown(e = this._element) {
			return e.classList.contains(Et);
		}
		_configAfterMerge(e) {
			e.toggle = Boolean(e.toggle);
			e.parent = oe(e.parent);
			return e;
		}
		_getDimension() {
			if (this._element.classList.contains("collapse-horizontal")) {
				return "width";
			} else {
				return "height";
			}
		}
		_initializeChildren() {
			if (!this._config.parent) {
				return;
			}
			const e = this._getFirstLevelChildren(Ct);
			for (const t of e) {
				const n = J(t);
				if (n) {
					this._addAriaAndCollapsedClass([t], this._isShown(n));
				}
			}
		}
		_getFirstLevelChildren(e) {
			const t = _.find(":scope .collapse .collapse", this._config.parent);
			return _.find(e, this._config.parent).filter((n) => !t.includes(n));
		}
		_addAriaAndCollapsedClass(e, t) {
			if (e.length) {
				for (const n of e) {
					n.classList.toggle("collapsed", !t);
					n.setAttribute("aria-expanded", t);
				}
			}
		}
		static jQueryInterface(e) {
			const t = {};
			if (typeof e == "string" && /show|hide/.test(e)) {
				t.toggle = false;
			}
			return this.each(function () {
				const n = Ce.getOrCreateInstance(this, t);
				if (typeof e == "string") {
					if (n[e] === undefined) {
						throw new TypeError(`No method named "${e}"`);
					}
					n[e]();
				}
			});
		}
	}
	l.on(document, "click.bs.collapse.data-api", Ct, function (i) {
		if (
			i.target.tagName === "A" ||
			(i.delegateTarget && i.delegateTarget.tagName === "A")
		) {
			i.preventDefault();
		}
		const e = Qt(this);
		const t = _.find(e);
		for (const n of t) {
			Ce.getOrCreateInstance(n, {
				toggle: false,
			}).toggle();
		}
	});
	F(Ce);
	var I = "top";
	var H = "bottom";
	var $ = "right";
	var N = "left";
	var Ze = "auto";
	var Te = [I, H, $, N];
	var he = "start";
	var Oe = "end";
	var di = "clippingParents";
	var Tt = "viewport";
	var xe = "popper";
	var ui = "reference";
	var Ot = Te.reduce(function (i, e) {
		return i.concat([e + "-" + he, e + "-" + Oe]);
	}, []);
	var xt = [].concat(Te, [Ze]).reduce(function (i, e) {
		return i.concat([e, e + "-" + he, e + "-" + Oe]);
	}, []);
	var fi = "beforeRead";
	var gi = "afterRead";
	var mi = "beforeMain";
	var bi = "afterMain";
	var vi = "beforeWrite";
	var wi = "afterWrite";
	var Ai = [fi, "read", gi, mi, "main", bi, vi, "write", wi];
	function Q(i) {
		if (i) {
			return (i.nodeName || "").toLowerCase();
		} else {
			return null;
		}
	}
	function z(i) {
		if (i == null) {
			return window;
		}
		if (i.toString() !== "[object Window]") {
			var e = i.ownerDocument;
			return (e && e.defaultView) || window;
		}
		return i;
	}
	function de(i) {
		return i instanceof z(i).Element || i instanceof Element;
	}
	function q(i) {
		return i instanceof z(i).HTMLElement || i instanceof HTMLElement;
	}
	function kt(i) {
		return (
			typeof ShadowRoot !== "undefined" &&
			(i instanceof z(i).ShadowRoot || i instanceof ShadowRoot)
		);
	}
	const Lt = {
		name: "applyStyles",
		enabled: true,
		phase: "write",
		fn: function (i) {
			var e = i.state;
			Object.keys(e.elements).forEach(function (t) {
				var n = e.styles[t] || {};
				var s = e.attributes[t] || {};
				var o = e.elements[t];
				if (q(o) && Q(o)) {
					Object.assign(o.style, n);
					Object.keys(s).forEach(function (r) {
						var a = s[r];
						if (a === false) {
							o.removeAttribute(r);
						} else {
							o.setAttribute(r, a === true ? "" : a);
						}
					});
				}
			});
		},
		effect: function (i) {
			var e = i.state;
			var t = {
				popper: {
					position: e.options.strategy,
					left: "0",
					top: "0",
					margin: "0",
				},
				arrow: {
					position: "absolute",
				},
				reference: {},
			};
			Object.assign(e.elements.popper.style, t.popper);
			e.styles = t;
			if (e.elements.arrow) {
				Object.assign(e.elements.arrow.style, t.arrow);
			}
			return function () {
				Object.keys(e.elements).forEach(function (n) {
					var s = e.elements[n];
					var o = e.attributes[n] || {};
					var r = Object.keys(
						e.styles.hasOwnProperty(n) ? e.styles[n] : t[n],
					).reduce(function (a, c) {
						a[c] = "";
						return a;
					}, {});
					if (q(s) && Q(s)) {
						Object.assign(s.style, r);
						Object.keys(o).forEach(function (a) {
							s.removeAttribute(a);
						});
					}
				});
			};
		},
		requires: ["computeStyles"],
	};
	function U(i) {
		return i.split("-")[0];
	}
	var ue = Math.max;
	var Je = Math.min;
	var ke = Math.round;
	function Dt() {
		var i = navigator.userAgentData;
		if (i != null && i.brands) {
			return i.brands
				.map(function (e) {
					return e.brand + "/" + e.version;
				})
				.join(" ");
		} else {
			return navigator.userAgent;
		}
	}
	function Ei() {
		return !/^((?!chrome|android).)*safari/i.test(Dt());
	}
	function Le(i, e = false, t = false) {
		var n = i.getBoundingClientRect();
		var s = 1;
		var o = 1;
		if (e && q(i)) {
			s = (i.offsetWidth > 0 && ke(n.width) / i.offsetWidth) || 1;
			o = (i.offsetHeight > 0 && ke(n.height) / i.offsetHeight) || 1;
		}
		var r = (de(i) ? z(i) : window).visualViewport;
		var a = !Ei() && t;
		var c = (n.left + (a && r ? r.offsetLeft : 0)) / s;
		var d = (n.top + (a && r ? r.offsetTop : 0)) / o;
		var u = n.width / s;
		var h = n.height / o;
		return {
			width: u,
			height: h,
			top: d,
			right: c + u,
			bottom: d + h,
			left: c,
			x: c,
			y: d,
		};
	}
	function St(i) {
		var e = Le(i);
		var t = i.offsetWidth;
		var n = i.offsetHeight;
		if (Math.abs(e.width - t) <= 1) {
			t = e.width;
		}
		if (Math.abs(e.height - n) <= 1) {
			n = e.height;
		}
		return {
			x: i.offsetLeft,
			y: i.offsetTop,
			width: t,
			height: n,
		};
	}
	function Ci(i, e) {
		var t = e.getRootNode && e.getRootNode();
		if (i.contains(e)) {
			return true;
		}
		if (t && kt(t)) {
			var n = e;
			do {
				if (n && i.isSameNode(n)) {
					return true;
				}
				n = n.parentNode || n.host;
			} while (n);
		}
		return false;
	}
	function ne(i) {
		return z(i).getComputedStyle(i);
	}
	function Yn(i) {
		return ["table", "td", "th"].indexOf(Q(i)) >= 0;
	}
	function le(i) {
		return ((de(i) ? i.ownerDocument : i.document) || window.document)
			.documentElement;
	}
	function et(i) {
		if (Q(i) === "html") {
			return i;
		} else {
			return i.assignedSlot || i.parentNode || (kt(i) ? i.host : null) || le(i);
		}
	}
	function Ti(i) {
		if (q(i) && ne(i).position !== "fixed") {
			return i.offsetParent;
		} else {
			return null;
		}
	}
	function $e(i) {
		var e = z(i);
		for (var t = Ti(i); t && Yn(t) && ne(t).position === "static"; ) {
			t = Ti(t);
		}
		if (
			t &&
			(Q(t) === "html" || (Q(t) === "body" && ne(t).position === "static"))
		) {
			return e;
		} else {
			return (
				t ||
				(function (n) {
					var s = /firefox/i.test(Dt());
					if (/Trident/i.test(Dt()) && q(n) && ne(n).position === "fixed") {
						return null;
					}
					var o = et(n);
					for (
						kt(o) && (o = o.host);
						q(o) && ["html", "body"].indexOf(Q(o)) < 0;
					) {
						var r = ne(o);
						if (
							r.transform !== "none" ||
							r.perspective !== "none" ||
							r.contain === "paint" ||
							["transform", "perspective"].indexOf(r.willChange) !== -1 ||
							(s && r.willChange === "filter") ||
							(s && r.filter && r.filter !== "none")
						) {
							return o;
						}
						o = o.parentNode;
					}
					return null;
				})(i) ||
				e
			);
		}
	}
	function It(i) {
		if (["top", "bottom"].indexOf(i) >= 0) {
			return "x";
		} else {
			return "y";
		}
	}
	function Be(i, e, t) {
		return ue(i, Je(e, t));
	}
	function Oi(i) {
		return Object.assign(
			{},
			{
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
			i,
		);
	}
	function xi(i, e) {
		return e.reduce(function (t, n) {
			t[n] = i;
			return t;
		}, {});
	}
	const ki = {
		name: "arrow",
		enabled: true,
		phase: "main",
		fn: function (i) {
			var e;
			var O;
			var C;
			var t = i.state;
			var n = i.name;
			var s = i.options;
			var o = t.elements.arrow;
			var r = t.modifiersData.popperOffsets;
			var a = U(t.placement);
			var c = It(a);
			var d = [N, $].indexOf(a) >= 0 ? "height" : "width";
			if (o && r) {
				C = t;
				var u = Oi(
					typeof (O =
						typeof (O = s.padding) == "function"
							? O(
									Object.assign({}, C.rects, {
										placement: C.placement,
									}),
								)
							: O) != "number"
						? O
						: xi(O, Te),
				);
				var h = St(o);
				var b = c === "y" ? I : N;
				var f = c === "y" ? H : $;
				var g =
					t.rects.reference[d] +
					t.rects.reference[c] -
					r[c] -
					t.rects.popper[d];
				var p = r[c] - t.rects.reference[c];
				var m = $e(o);
				var T = m ? (c === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0;
				var v = T / 2 - h[d] / 2 + (g / 2 - p / 2);
				var w = Be(u[b], v, T - h[d] - u[f]);
				t.modifiersData[n] = (((e = {})[c] = w), (e.centerOffset = w - v), e);
			}
		},
		effect: function (i) {
			var e = i.state;
			var t = i.options.element;
			var n = t === undefined ? "[data-popper-arrow]" : t;
			if (
				n != null &&
				(typeof n != "string" || (n = e.elements.popper.querySelector(n))) &&
				Ci(e.elements.popper, n)
			) {
				e.elements.arrow = n;
			}
		},
		requires: ["popperOffsets"],
		requiresIfExists: ["preventOverflow"],
	};
	function De(i) {
		return i.split("-")[1];
	}
	var Qn = {
		top: "auto",
		right: "auto",
		bottom: "auto",
		left: "auto",
	};
	function Li(i) {
		var e;
		var t = i.popper;
		var n = i.popperRect;
		var s = i.placement;
		var o = i.variation;
		var r = i.offsets;
		var a = i.position;
		var c = i.gpuAcceleration;
		var d = i.adaptive;
		var u = i.roundOffsets;
		var h = i.isFixed;
		var b = r.x;
		var f = b === undefined ? 0 : b;
		var g = r.y;
		var p = g === undefined ? 0 : g;
		var m =
			typeof u == "function"
				? u({
						x: f,
						y: p,
					})
				: {
						x: f,
						y: p,
					};
		f = m.x;
		p = m.y;
		var T = r.hasOwnProperty("x");
		var k = r.hasOwnProperty("y");
		var y = N;
		var A = I;
		var v = window;
		if (d) {
			var w = $e(t);
			var E = "clientHeight";
			var O = "clientWidth";
			if (
				w === z(t) &&
				ne((w = le(t))).position !== "static" &&
				a === "absolute"
			) {
				E = "scrollHeight";
				O = "scrollWidth";
			}
			if (s === I || ((s === N || s === $) && o === Oe)) {
				A = H;
				p -=
					(h && w === v && v.visualViewport ? v.visualViewport.height : w[E]) -
					n.height;
				p *= c ? 1 : -1;
			}
			if (s === N || ((s === I || s === H) && o === Oe)) {
				y = $;
				f -=
					(h && w === v && v.visualViewport ? v.visualViewport.width : w[O]) -
					n.width;
				f *= c ? 1 : -1;
			}
		}
		var C;
		var Y;
		var R;
		var j;
		var L = Object.assign(
			{
				position: a,
			},
			d && Qn,
		);
		var B =
			u === true
				? ((R = (Y = {
						x: f,
						y: p,
					}).y),
					(j = window.devicePixelRatio || 1),
					{
						x: ke(Y.x * j) / j || 0,
						y: ke(R * j) / j || 0,
					})
				: {
						x: f,
						y: p,
					};
		f = B.x;
		p = B.y;
		return Object.assign(
			{},
			L,
			c
				? (((C = {})[A] = k ? "0" : ""),
					(C[y] = T ? "0" : ""),
					(C.transform =
						(v.devicePixelRatio || 1) <= 1
							? "translate(" + f + "px, " + p + "px)"
							: "translate3d(" + f + "px, " + p + "px, 0)"),
					C)
				: (((e = {})[A] = k ? p + "px" : ""),
					(e[y] = T ? f + "px" : ""),
					(e.transform = ""),
					e),
		);
	}
	const Nt = {
		name: "computeStyles",
		enabled: true,
		phase: "beforeWrite",
		fn: function (i) {
			var e = i.state;
			var t = i.options;
			var n = t.gpuAcceleration;
			var s = n === undefined || n;
			var o = t.adaptive;
			var r = o === undefined || o;
			var a = t.roundOffsets;
			var c = a === undefined || a;
			var d = {
				placement: U(e.placement),
				variation: De(e.placement),
				popper: e.elements.popper,
				popperRect: e.rects.popper,
				gpuAcceleration: s,
				isFixed: e.options.strategy === "fixed",
			};
			if (e.modifiersData.popperOffsets != null) {
				e.styles.popper = Object.assign(
					{},
					e.styles.popper,
					Li(
						Object.assign({}, d, {
							offsets: e.modifiersData.popperOffsets,
							position: e.options.strategy,
							adaptive: r,
							roundOffsets: c,
						}),
					),
				);
			}
			if (e.modifiersData.arrow != null) {
				e.styles.arrow = Object.assign(
					{},
					e.styles.arrow,
					Li(
						Object.assign({}, d, {
							offsets: e.modifiersData.arrow,
							position: "absolute",
							adaptive: false,
							roundOffsets: c,
						}),
					),
				);
			}
			e.attributes.popper = Object.assign({}, e.attributes.popper, {
				"data-popper-placement": e.placement,
			});
		},
		data: {},
	};
	var tt = {
		passive: true,
	};
	const Pt = {
		name: "eventListeners",
		enabled: true,
		phase: "write",
		fn: function () {},
		effect: function (i) {
			var e = i.state;
			var t = i.instance;
			var n = i.options;
			var s = n.scroll;
			var o = s === undefined || s;
			var r = n.resize;
			var a = r === undefined || r;
			var c = z(e.elements.popper);
			var d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
			if (o) {
				d.forEach(function (u) {
					u.addEventListener("scroll", t.update, tt);
				});
			}
			if (a) {
				c.addEventListener("resize", t.update, tt);
			}
			return function () {
				if (o) {
					d.forEach(function (u) {
						u.removeEventListener("scroll", t.update, tt);
					});
				}
				if (a) {
					c.removeEventListener("resize", t.update, tt);
				}
			};
		},
		data: {},
	};
	var Un = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom",
	};
	function it(i) {
		return i.replace(/left|right|bottom|top/g, function (e) {
			return Un[e];
		});
	}
	var Gn = {
		start: "end",
		end: "start",
	};
	function Di(i) {
		return i.replace(/start|end/g, function (e) {
			return Gn[e];
		});
	}
	function jt(i) {
		var e = z(i);
		return {
			scrollLeft: e.pageXOffset,
			scrollTop: e.pageYOffset,
		};
	}
	function Mt(i) {
		return Le(le(i)).left + jt(i).scrollLeft;
	}
	function Ht(i) {
		var e = ne(i);
		return /auto|scroll|overlay|hidden/.test(
			e.overflow + e.overflowY + e.overflowX,
		);
	}
	function Si(i) {
		if (["html", "body", "#document"].indexOf(Q(i)) >= 0) {
			return i.ownerDocument.body;
		} else if (q(i) && Ht(i)) {
			return i;
		} else {
			return Si(et(i));
		}
	}
	function We(i, e) {
		var t;
		if (e === undefined) {
			e = [];
		}
		var n = Si(i);
		var s = n === ((t = i.ownerDocument) == null ? undefined : t.body);
		var o = z(n);
		var r = s ? [o].concat(o.visualViewport || [], Ht(n) ? n : []) : n;
		var a = e.concat(r);
		if (s) {
			return a;
		} else {
			return a.concat(We(et(r)));
		}
	}
	function $t(i) {
		return Object.assign({}, i, {
			left: i.x,
			top: i.y,
			right: i.x + i.width,
			bottom: i.y + i.height,
		});
	}
	function Ii(i, e, t) {
		if (e === Tt) {
			return $t(
				(function (n, s) {
					var o = z(n);
					var r = le(n);
					var a = o.visualViewport;
					var c = r.clientWidth;
					var d = r.clientHeight;
					var u = 0;
					var h = 0;
					if (a) {
						c = a.width;
						d = a.height;
						var b = Ei();
						if (b || (!b && s === "fixed")) {
							u = a.offsetLeft;
							h = a.offsetTop;
						}
					}
					return {
						width: c,
						height: d,
						x: u + Mt(n),
						y: h,
					};
				})(i, t),
			);
		} else if (de(e)) {
			(o = Le((n = e), false, t === "fixed")).top = o.top + n.clientTop;
			o.left = o.left + n.clientLeft;
			o.bottom = o.top + n.clientHeight;
			o.right = o.left + n.clientWidth;
			o.width = n.clientWidth;
			o.height = n.clientHeight;
			o.x = o.left;
			o.y = o.top;
			return o;
		} else {
			return $t(
				(function (n) {
					var s;
					var o = le(n);
					var r = jt(n);
					var a = (s = n.ownerDocument) == null ? undefined : s.body;
					var c = ue(
						o.scrollWidth,
						o.clientWidth,
						a ? a.scrollWidth : 0,
						a ? a.clientWidth : 0,
					);
					var d = ue(
						o.scrollHeight,
						o.clientHeight,
						a ? a.scrollHeight : 0,
						a ? a.clientHeight : 0,
					);
					var u = -r.scrollLeft + Mt(n);
					var h = -r.scrollTop;
					if (ne(a || o).direction === "rtl") {
						u += ue(o.clientWidth, a ? a.clientWidth : 0) - c;
					}
					return {
						width: c,
						height: d,
						x: u,
						y: h,
					};
				})(le(i)),
			);
		}
		var n;
		var o;
	}
	function Ni(i) {
		var e;
		var t = i.reference;
		var n = i.element;
		var s = i.placement;
		var o = s ? U(s) : null;
		var r = s ? De(s) : null;
		var a = t.x + t.width / 2 - n.width / 2;
		var c = t.y + t.height / 2 - n.height / 2;
		switch (o) {
			case I:
				e = {
					x: a,
					y: t.y - n.height,
				};
				break;
			case H:
				e = {
					x: a,
					y: t.y + t.height,
				};
				break;
			case $:
				e = {
					x: t.x + t.width,
					y: c,
				};
				break;
			case N:
				e = {
					x: t.x - n.width,
					y: c,
				};
				break;
			default:
				e = {
					x: t.x,
					y: t.y,
				};
		}
		var d = o ? It(o) : null;
		if (d != null) {
			var u = d === "y" ? "height" : "width";
			switch (r) {
				case he:
					e[d] = e[d] - (t[u] / 2 - n[u] / 2);
					break;
				case Oe:
					e[d] = e[d] + (t[u] / 2 - n[u] / 2);
			}
		}
		return e;
	}
	function Se(i, e = {}) {
		var P;
		var R;
		var j;
		var S;
		var x;
		var M;
		var V;
		var G;
		var Z;
		var D;
		var n = e.placement;
		var s = n === undefined ? i.placement : n;
		var o = e.strategy;
		var r = o === undefined ? i.strategy : o;
		var a = e.boundary;
		var c = a === undefined ? di : a;
		var d = e.rootBoundary;
		var u = d === undefined ? Tt : d;
		var h = e.elementContext;
		var b = h === undefined ? xe : h;
		var f = e.altBoundary;
		var g = f !== undefined && f;
		var p = e.padding;
		var m = p === undefined ? 0 : p;
		var T = Oi(typeof m != "number" ? m : xi(m, Te));
		var y = i.rects.popper;
		var A = i.elements[g ? (b === xe ? ui : xe) : b];
		P = de(A) ? A : A.contextElement || le(i.elements.popper);
		j = u;
		S = r;
		G =
			(R = c) === "clippingParents"
				? ((M = We(et((x = P)))),
					de(
						(V =
							["absolute", "fixed"].indexOf(ne(x).position) >= 0 && q(x)
								? $e(x)
								: x),
					)
						? M.filter(function (ce) {
								return de(ce) && Ci(ce, V) && Q(ce) !== "body";
							})
						: [])
				: [].concat(R);
		D = (Z = [].concat(G, [j])).reduce(
			function (x, M) {
				var V = Ii(P, M, S);
				x.top = ue(V.top, x.top);
				x.right = Je(V.right, x.right);
				x.bottom = Je(V.bottom, x.bottom);
				x.left = ue(V.left, x.left);
				return x;
			},
			Ii(P, Z[0], S),
		);
		D.width = D.right - D.left;
		D.height = D.bottom - D.top;
		D.x = D.left;
		D.y = D.top;
		var v = D;
		var w = Le(i.elements.reference);
		var E = Ni({
			reference: w,
			element: y,
			strategy: "absolute",
			placement: s,
		});
		var O = $t(Object.assign({}, y, E));
		var C = b === xe ? O : w;
		var L = {
			top: v.top - C.top + T.top,
			bottom: C.bottom - v.bottom + T.bottom,
			left: v.left - C.left + T.left,
			right: C.right - v.right + T.right,
		};
		var B = i.modifiersData.offset;
		if (b === xe && B) {
			var Y = B[s];
			Object.keys(L).forEach(function (P) {
				var R = [$, H].indexOf(P) >= 0 ? 1 : -1;
				var j = [I, H].indexOf(P) >= 0 ? "y" : "x";
				L[P] += Y[j] * R;
			});
		}
		return L;
	}
	const Pi = {
		name: "flip",
		enabled: true,
		phase: "main",
		fn: function (i) {
			var e = i.state;
			var t = i.options;
			var n = i.name;
			if (!e.modifiersData[n]._skip) {
				var s = t.mainAxis;
				var o = s === undefined || s;
				var r = t.altAxis;
				var a = r === undefined || r;
				var c = t.fallbackPlacements;
				var d = t.padding;
				var u = t.boundary;
				var h = t.rootBoundary;
				var b = t.altBoundary;
				var f = t.flipVariations;
				var g = f === undefined || f;
				var p = t.allowedAutoPlacements;
				var m = e.options.placement;
				var T = U(m);
				var k =
					c ||
					(T !== m && g
						? (function (x) {
								if (U(x) === Ze) {
									return [];
								}
								var M = it(x);
								return [Di(x), M, Di(M)];
							})(m)
						: [it(m)]);
				for (
					var y = [m].concat(k).reduce(function (x, M) {
							return x.concat(
								U(M) === Ze
									? (function Zn(i, e = {}) {
											var s = e.boundary;
											var o = e.rootBoundary;
											var r = e.padding;
											var a = e.flipVariations;
											var c = e.allowedAutoPlacements;
											var d = c === undefined ? xt : c;
											var u = De(e.placement);
											var h = u
												? a
													? Ot
													: Ot.filter(function (g) {
															return De(g) === u;
														})
												: Te;
											var b = h.filter(function (g) {
												return d.indexOf(g) >= 0;
											});
											if (b.length === 0) {
												b = h;
											}
											var f = b.reduce(function (g, p) {
												g[p] = Se(i, {
													placement: p,
													boundary: s,
													rootBoundary: o,
													padding: r,
												})[U(p)];
												return g;
											}, {});
											return Object.keys(f).sort(function (g, p) {
												return f[g] - f[p];
											});
										})(e, {
											placement: M,
											boundary: u,
											rootBoundary: h,
											padding: d,
											flipVariations: g,
											allowedAutoPlacements: p,
										})
									: M,
							);
						}, []),
						A = e.rects.reference,
						v = e.rects.popper,
						w = new Map(),
						E = true,
						O = y[0],
						C = 0;
					C < y.length;
					C++
				) {
					var L = y[C];
					var B = U(L);
					var Y = De(L) === he;
					var P = [I, H].indexOf(B) >= 0;
					var R = P ? "width" : "height";
					var j = Se(e, {
						placement: L,
						boundary: u,
						rootBoundary: h,
						altBoundary: b,
						padding: d,
					});
					var S = P ? (Y ? $ : N) : Y ? H : I;
					if (A[R] > v[R]) {
						S = it(S);
					}
					var G = it(S);
					var Z = [];
					if (o) {
						Z.push(j[B] <= 0);
					}
					if (a) {
						Z.push(j[S] <= 0, j[G] <= 0);
					}
					if (
						Z.every(function (x) {
							return x;
						})
					) {
						O = L;
						E = false;
						break;
					}
					w.set(L, Z);
				}
				if (E) {
					for (
						var Ie = function (x) {
								var M = y.find(function (V) {
									var ce = w.get(V);
									if (ce) {
										return ce.slice(0, x).every(function (ut) {
											return ut;
										});
									}
								});
								if (M) {
									O = M;
									return "break";
								}
							},
							D = g ? 3 : 1;
						D > 0 && Ie(D) !== "break";
						D--
					);
				}
				if (e.placement !== O) {
					e.modifiersData[n]._skip = true;
					e.placement = O;
					e.reset = true;
				}
			}
		},
		requiresIfExists: ["offset"],
		data: {
			_skip: false,
		},
	};
	function ji(
		i,
		e,
		t = {
			x: 0,
			y: 0,
		},
	) {
		return {
			top: i.top - e.height - t.y,
			right: i.right - e.width + t.x,
			bottom: i.bottom - e.height + t.y,
			left: i.left - e.width - t.x,
		};
	}
	function Mi(i) {
		return [I, $, H, N].some(function (e) {
			return i[e] >= 0;
		});
	}
	const Hi = {
		name: "hide",
		enabled: true,
		phase: "main",
		requiresIfExists: ["preventOverflow"],
		fn: function (i) {
			var e = i.state;
			var t = i.name;
			var n = e.rects.reference;
			var s = e.rects.popper;
			var o = e.modifiersData.preventOverflow;
			var r = Se(e, {
				elementContext: "reference",
			});
			var a = Se(e, {
				altBoundary: true,
			});
			var c = ji(r, n);
			var d = ji(a, s, o);
			var u = Mi(c);
			var h = Mi(d);
			e.modifiersData[t] = {
				referenceClippingOffsets: c,
				popperEscapeOffsets: d,
				isReferenceHidden: u,
				hasPopperEscaped: h,
			};
			e.attributes.popper = Object.assign({}, e.attributes.popper, {
				"data-popper-reference-hidden": u,
				"data-popper-escaped": h,
			});
		},
	};
	const $i = {
		name: "offset",
		enabled: true,
		phase: "main",
		requires: ["popperOffsets"],
		fn: function (i) {
			var e = i.state;
			var n = i.name;
			var s = i.options.offset;
			var o = s === undefined ? [0, 0] : s;
			var r = xt.reduce(function (u, h) {
				f = e.rects;
				g = o;
				p = U((b = h));
				m = [N, I].indexOf(p) >= 0 ? -1 : 1;
				k =
					(k = (T =
						typeof g == "function"
							? g(
									Object.assign({}, f, {
										placement: b,
									}),
								)
							: g)[0]) || 0;
				y = ((y = T[1]) || 0) * m;
				u[h] =
					[N, $].indexOf(p) >= 0
						? {
								x: y,
								y: k,
							}
						: {
								x: k,
								y,
							};
				return u;
				var b;
				var f;
				var g;
				var p;
				var m;
				var T;
				var k;
				var y;
			}, {});
			var a = r[e.placement];
			var d = a.y;
			if (e.modifiersData.popperOffsets != null) {
				e.modifiersData.popperOffsets.x += a.x;
				e.modifiersData.popperOffsets.y += d;
			}
			e.modifiersData[n] = r;
		},
	};
	const Bt = {
		name: "popperOffsets",
		enabled: true,
		phase: "read",
		fn: function (i) {
			var e = i.state;
			e.modifiersData[i.name] = Ni({
				reference: e.rects.reference,
				element: e.rects.popper,
				strategy: "absolute",
				placement: e.placement,
			});
		},
		data: {},
	};
	const Bi = {
		name: "preventOverflow",
		enabled: true,
		phase: "main",
		fn: function (i) {
			var Yt;
			var jn;
			var e = i.state;
			var t = i.options;
			var n = i.name;
			var s = t.mainAxis;
			var o = s === undefined || s;
			var r = t.altAxis;
			var a = r !== undefined && r;
			var b = t.tether;
			var f = b === undefined || b;
			var g = t.tetherOffset;
			var p = g === undefined ? 0 : g;
			var m = Se(e, {
				boundary: t.boundary,
				rootBoundary: t.rootBoundary,
				padding: t.padding,
				altBoundary: t.altBoundary,
			});
			var T = U(e.placement);
			var k = De(e.placement);
			var y = !k;
			var A = It(T);
			var v = A === "x" ? "y" : "x";
			var w = e.modifiersData.popperOffsets;
			var E = e.rects.reference;
			var O = e.rects.popper;
			var C =
				typeof p == "function"
					? p(
							Object.assign({}, e.rects, {
								placement: e.placement,
							}),
						)
					: p;
			var L =
				typeof C == "number"
					? {
							mainAxis: C,
							altAxis: C,
						}
					: Object.assign(
							{
								mainAxis: 0,
								altAxis: 0,
							},
							C,
						);
			var B = e.modifiersData.offset
				? e.modifiersData.offset[e.placement]
				: null;
			var Y = {
				x: 0,
				y: 0,
			};
			if (w) {
				if (o) {
					var R = A === "y" ? I : N;
					var j = A === "y" ? H : $;
					var S = A === "y" ? "height" : "width";
					var G = w[A];
					var Z = G + m[R];
					var Ie = G - m[j];
					var D = f ? -O[S] / 2 : 0;
					var x = k === he ? E[S] : O[S];
					var M = k === he ? -O[S] : -E[S];
					var V = e.elements.arrow;
					var ce =
						f && V
							? St(V)
							: {
									width: 0,
									height: 0,
								};
					var ut = e.modifiersData["arrow#persistent"]
						? e.modifiersData["arrow#persistent"].padding
						: {
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
							};
					var Cn = ut[R];
					var Tn = ut[j];
					var ft = Be(0, E[S], ce[S]);
					var Fs = y
						? E[S] / 2 - D - ft - Cn - L.mainAxis
						: x - ft - Cn - L.mainAxis;
					var zs = y
						? -E[S] / 2 + D + ft + Tn + L.mainAxis
						: M + ft + Tn + L.mainAxis;
					var Kt = e.elements.arrow && $e(e.elements.arrow);
					var On = B?.[A] ?? 0;
					var Rs = G + zs - On;
					var xn = Be(
						f
							? Je(
									Z,
									G +
										Fs -
										On -
										(Kt
											? A === "y"
												? Kt.clientTop || 0
												: Kt.clientLeft || 0
											: 0),
								)
							: Z,
						G,
						f ? ue(Ie, Rs) : Ie,
					);
					w[A] = xn;
					Y[A] = xn - G;
				}
				if (a) {
					var _e = w[v];
					var pt = v === "y" ? "height" : "width";
					var Ln = _e + m[A === "x" ? I : N];
					var Dn = _e - m[A === "x" ? H : $];
					var Xt = [I, N].indexOf(T) !== -1;
					var Sn = B?.[v] ?? 0;
					var In = Xt ? Ln : _e - E[pt] - O[pt] - Sn + L.altAxis;
					var Nn = Xt ? _e + E[pt] + O[pt] - Sn - L.altAxis : Dn;
					var Pn =
						f && Xt
							? (jn = Be(In, _e, (Yt = Nn))) > Yt
								? Yt
								: jn
							: Be(f ? In : Ln, _e, f ? Nn : Dn);
					w[v] = Pn;
					Y[v] = Pn - _e;
				}
				e.modifiersData[n] = Y;
			}
		},
		requiresIfExists: ["offset"],
	};
	function Jn(i, e, t = false) {
		var n;
		var s;
		var h;
		var b;
		var f;
		var g;
		var o = q(e);
		var r =
			q(e) &&
			((b = (h = e).getBoundingClientRect()),
			(f = ke(b.width) / h.offsetWidth || 1),
			(g = ke(b.height) / h.offsetHeight || 1),
			f !== 1 || g !== 1);
		var a = le(e);
		var c = Le(i, r, t);
		var d = {
			scrollLeft: 0,
			scrollTop: 0,
		};
		var u = {
			x: 0,
			y: 0,
		};
		if (o || (!o && !t)) {
			if (Q(e) !== "body" || Ht(a)) {
				d =
					(n = e) !== z(n) && q(n)
						? {
								scrollLeft: (s = n).scrollLeft,
								scrollTop: s.scrollTop,
							}
						: jt(n);
			}
			if (q(e)) {
				(u = Le(e, true)).x += e.clientLeft;
				u.y += e.clientTop;
			} else if (a) {
				u.x = Mt(a);
			}
		}
		return {
			x: c.left + d.scrollLeft - u.x,
			y: c.top + d.scrollTop - u.y,
			width: c.width,
			height: c.height,
		};
	}
	function es(i) {
		var e = new Map();
		var t = new Set();
		var n = [];
		function s(o) {
			t.add(o.name);
			[]
				.concat(o.requires || [], o.requiresIfExists || [])
				.forEach(function (r) {
					if (!t.has(r)) {
						var a = e.get(r);
						if (a) {
							s(a);
						}
					}
				});
			n.push(o);
		}
		i.forEach(function (o) {
			e.set(o.name, o);
		});
		i.forEach(function (o) {
			if (!t.has(o.name)) {
				s(o);
			}
		});
		return n;
	}
	var Wi = {
		placement: "bottom",
		modifiers: [],
		strategy: "absolute",
	};
	function Fi() {
		for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) {
			e[t] = arguments[t];
		}
		return !e.some(function (n) {
			return !n || typeof n.getBoundingClientRect != "function";
		});
	}
	function nt(i = {}) {
		var t = i.defaultModifiers;
		var n = t === undefined ? [] : t;
		var s = i.defaultOptions;
		var o = s === undefined ? Wi : s;
		return function (r, a, c = o) {
			var d;
			var u;
			var h = {
				placement: "bottom",
				orderedModifiers: [],
				options: Object.assign({}, Wi, o),
				modifiersData: {},
				elements: {
					reference: r,
					popper: a,
				},
				attributes: {},
				styles: {},
			};
			var b = [];
			var f = false;
			var g = {
				state: h,
				setOptions: function (m) {
					var T = typeof m == "function" ? m(h.options) : m;
					p();
					h.options = Object.assign({}, o, h.options, T);
					h.scrollParents = {
						reference: de(r)
							? We(r)
							: r.contextElement
								? We(r.contextElement)
								: [],
						popper: We(a),
					};
					var k;
					var y;
					var v;
					var w;
					k = [].concat(n, h.options.modifiers);
					y = k.reduce(function (v, w) {
						var E = v[w.name];
						v[w.name] = E
							? Object.assign({}, E, w, {
									options: Object.assign({}, E.options, w.options),
									data: Object.assign({}, E.data, w.data),
								})
							: w;
						return v;
					}, {});
					v = Object.keys(y).map(function (v) {
						return y[v];
					});
					w = es(v);
					var A = Ai.reduce(function (E, O) {
						return E.concat(
							w.filter(function (C) {
								return C.phase === O;
							}),
						);
					}, []);
					h.orderedModifiers = A.filter(function (v) {
						return v.enabled;
					});
					h.orderedModifiers.forEach(function (v) {
						var E = v.options;
						var C = v.effect;
						if (typeof C == "function") {
							var L = C({
								state: h,
								name: v.name,
								instance: g,
								options: E === undefined ? {} : E,
							});
							b.push(L || function () {});
						}
					});
					return g.update();
				},
				forceUpdate: function () {
					if (!f) {
						var m = h.elements;
						var T = m.reference;
						var k = m.popper;
						if (Fi(T, k)) {
							h.rects = {
								reference: Jn(T, $e(k), h.options.strategy === "fixed"),
								popper: St(k),
							};
							h.reset = false;
							h.placement = h.options.placement;
							h.orderedModifiers.forEach(function (C) {
								return (h.modifiersData[C.name] = Object.assign({}, C.data));
							});
							for (var y = 0; y < h.orderedModifiers.length; y++) {
								if (h.reset !== true) {
									var A = h.orderedModifiers[y];
									var v = A.fn;
									var w = A.options;
									if (typeof v == "function") {
										h =
											v({
												state: h,
												options: w === undefined ? {} : w,
												name: A.name,
												instance: g,
											}) || h;
									}
								} else {
									h.reset = false;
									y = -1;
								}
							}
						}
					}
				},
				update:
					((d = function () {
						return new Promise(function (m) {
							g.forceUpdate();
							m(h);
						});
					}),
					function () {
						u ||= new Promise(function (m) {
							Promise.resolve().then(function () {
								u = undefined;
								m(d());
							});
						});
						return u;
					}),
				destroy: function () {
					p();
					f = true;
				},
			};
			if (!Fi(r, a)) {
				return g;
			}
			function p() {
				b.forEach(function (m) {
					return m();
				});
				b = [];
			}
			g.setOptions(c).then(function (m) {
				if (!f && c.onFirstUpdate) {
					c.onFirstUpdate(m);
				}
			});
			return g;
		};
	}
	var ts = nt();
	var is = nt({
		defaultModifiers: [Pt, Bt, Nt, Lt],
	});
	var Wt = nt({
		defaultModifiers: [Pt, Bt, Nt, Lt, $i, Pi, Bi, ki, Hi],
	});
	const zi = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				popperGenerator: nt,
				detectOverflow: Se,
				createPopperBase: ts,
				createPopper: Wt,
				createPopperLite: is,
				top: I,
				bottom: H,
				right: $,
				left: N,
				auto: Ze,
				basePlacements: Te,
				start: he,
				end: Oe,
				clippingParents: di,
				viewport: Tt,
				popper: xe,
				reference: ui,
				variationPlacements: Ot,
				placements: xt,
				beforeRead: fi,
				read: "read",
				afterRead: gi,
				beforeMain: mi,
				main: "main",
				afterMain: bi,
				beforeWrite: vi,
				write: "write",
				afterWrite: wi,
				modifierPhases: Ai,
				applyStyles: Lt,
				arrow: ki,
				computeStyles: Nt,
				eventListeners: Pt,
				flip: Pi,
				hide: Hi,
				offset: $i,
				popperOffsets: Bt,
				preventOverflow: Bi,
			},
			Symbol.toStringTag,
			{
				value: "Module",
			},
		),
	);
	const qi = "dropdown";
	const ns = "ArrowUp";
	const Ri = "ArrowDown";
	const Vi = "click.bs.dropdown.data-api";
	const Ki = "keydown.bs.dropdown.data-api";
	const Fe = "show";
	const fe = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
	const ss = `${fe}.show`;
	const st = ".dropdown-menu";
	const os = W() ? "top-end" : "top-start";
	const rs = W() ? "top-start" : "top-end";
	const as = W() ? "bottom-end" : "bottom-start";
	const ls = W() ? "bottom-start" : "bottom-end";
	const cs = W() ? "left-start" : "right-start";
	const hs = W() ? "right-start" : "left-start";
	const ds = {
		autoClose: true,
		boundary: "clippingParents",
		display: "dynamic",
		offset: [0, 2],
		popperConfig: null,
		reference: "toggle",
	};
	const us = {
		autoClose: "(boolean|string)",
		boundary: "(string|element)",
		display: "string",
		offset: "(array|string|function)",
		popperConfig: "(null|object|function)",
		reference: "(string|element|object)",
	};
	class X extends K {
		constructor(e, t) {
			super(e, t);
			this._popper = null;
			this._parent = this._element.parentNode;
			this._menu =
				_.next(this._element, st)[0] ||
				_.prev(this._element, st)[0] ||
				_.findOne(st, this._parent);
			this._inNavbar = this._detectNavbar();
		}
		static get Default() {
			return ds;
		}
		static get DefaultType() {
			return us;
		}
		static get NAME() {
			return qi;
		}
		toggle() {
			if (this._isShown()) {
				return this.hide();
			} else {
				return this.show();
			}
		}
		show() {
			if (re(this._element) || this._isShown()) {
				return;
			}
			const e = {
				relatedTarget: this._element,
			};
			if (!l.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
				this._createPopper();
				if (
					"ontouchstart" in document.documentElement &&
					!this._parent.closest(".navbar-nav")
				) {
					for (const t of [].concat(...document.body.children)) {
						l.on(t, "mouseover", Ve);
					}
				}
				this._element.focus();
				this._element.setAttribute("aria-expanded", true);
				this._menu.classList.add(Fe);
				this._element.classList.add(Fe);
				l.trigger(this._element, "shown.bs.dropdown", e);
			}
		}
		hide() {
			if (!re(this._element) && this._isShown()) {
				this._completeHide({
					relatedTarget: this._element,
				});
			}
		}
		dispose() {
			if (this._popper) {
				this._popper.destroy();
			}
			super.dispose();
		}
		update() {
			this._inNavbar = this._detectNavbar();
			if (this._popper) {
				this._popper.update();
			}
		}
		_completeHide(e) {
			if (!l.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented) {
				if ("ontouchstart" in document.documentElement) {
					for (const t of [].concat(...document.body.children)) {
						l.off(t, "mouseover", Ve);
					}
				}
				if (this._popper) {
					this._popper.destroy();
				}
				this._menu.classList.remove(Fe);
				this._element.classList.remove(Fe);
				this._element.setAttribute("aria-expanded", "false");
				ie.removeDataAttribute(this._menu, "popper");
				l.trigger(this._element, "hidden.bs.dropdown", e);
			}
		}
		_getConfig(e) {
			if (
				typeof (e = super._getConfig(e)).reference == "object" &&
				!ee(e.reference) &&
				typeof e.reference.getBoundingClientRect != "function"
			) {
				throw new TypeError(
					`${qi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
				);
			}
			return e;
		}
		_createPopper() {
			if (zi === undefined) {
				throw new TypeError(
					"Bootstrap's dropdowns require Popper (https://popper.js.org)",
				);
			}
			let e = this._element;
			if (this._config.reference === "parent") {
				e = this._parent;
			} else if (ee(this._config.reference)) {
				e = oe(this._config.reference);
			} else if (typeof this._config.reference == "object") {
				e = this._config.reference;
			}
			const t = this._getPopperConfig();
			this._popper = Wt(e, this._menu, t);
		}
		_isShown() {
			return this._menu.classList.contains(Fe);
		}
		_getPlacement() {
			const e = this._parent;
			if (e.classList.contains("dropend")) {
				return cs;
			}
			if (e.classList.contains("dropstart")) {
				return hs;
			}
			if (e.classList.contains("dropup-center")) {
				return "top";
			}
			if (e.classList.contains("dropdown-center")) {
				return "bottom";
			}
			const t =
				getComputedStyle(this._menu)
					.getPropertyValue("--bs-position")
					.trim() === "end";
			if (e.classList.contains("dropup")) {
				if (t) {
					return rs;
				} else {
					return os;
				}
			} else if (t) {
				return ls;
			} else {
				return as;
			}
		}
		_detectNavbar() {
			return this._element.closest(".navbar") !== null;
		}
		_getOffset() {
			const { offset: e } = this._config;
			if (typeof e == "string") {
				return e.split(",").map((t) => Number.parseInt(t, 10));
			} else if (typeof e == "function") {
				return (t) => e(t, this._element);
			} else {
				return e;
			}
		}
		_getPopperConfig() {
			const e = {
				placement: this._getPlacement(),
				modifiers: [
					{
						name: "preventOverflow",
						options: {
							boundary: this._config.boundary,
						},
					},
					{
						name: "offset",
						options: {
							offset: this._getOffset(),
						},
					},
				],
			};
			if (this._inNavbar || this._config.display === "static") {
				ie.setDataAttribute(this._menu, "popper", "static");
				e.modifiers = [
					{
						name: "applyStyles",
						enabled: false,
					},
				];
			}
			return {
				...e,
				...(typeof this._config.popperConfig == "function"
					? this._config.popperConfig(e)
					: this._config.popperConfig),
			};
		}
		_selectMenuItem({ key: e, target: t }) {
			const n = _.find(
				".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
				this._menu,
			).filter((s) => ye(s));
			if (n.length) {
				mt(n, t, e === Ri, !n.includes(t)).focus();
			}
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = X.getOrCreateInstance(this, e);
				if (typeof e == "string") {
					if (t[e] === undefined) {
						throw new TypeError(`No method named "${e}"`);
					}
					t[e]();
				}
			});
		}
		static clearMenus(e) {
			if (e.button === 2 || (e.type === "keyup" && e.key !== "Tab")) {
				return;
			}
			const t = _.find(ss);
			for (const n of t) {
				const s = X.getInstance(n);
				if (!s || s._config.autoClose === false) {
					continue;
				}
				const o = e.composedPath();
				const r = o.includes(s._menu);
				if (
					o.includes(s._element) ||
					(s._config.autoClose === "inside" && !r) ||
					(s._config.autoClose === "outside" && r) ||
					(s._menu.contains(e.target) &&
						((e.type === "keyup" && e.key === "Tab") ||
							/input|select|option|textarea|form/i.test(e.target.tagName)))
				) {
					continue;
				}
				const a = {
					relatedTarget: s._element,
				};
				if (e.type === "click") {
					a.clickEvent = e;
				}
				s._completeHide(a);
			}
		}
		static dataApiKeydownHandler(e) {
			const t = /input|textarea/i.test(e.target.tagName);
			const n = e.key === "Escape";
			const s = [ns, Ri].includes(e.key);
			if ((!s && !n) || (t && !n)) {
				return;
			}
			e.preventDefault();
			const o = this.matches(fe)
				? this
				: _.prev(this, fe)[0] ||
					_.next(this, fe)[0] ||
					_.findOne(fe, e.delegateTarget.parentNode);
			const r = X.getOrCreateInstance(o);
			if (s) {
				e.stopPropagation();
				r.show();
				r._selectMenuItem(e);
				return;
			}
			if (r._isShown()) {
				e.stopPropagation();
				r.hide();
				o.focus();
			}
		}
	}
	l.on(document, Ki, fe, X.dataApiKeydownHandler);
	l.on(document, Ki, st, X.dataApiKeydownHandler);
	l.on(document, Vi, X.clearMenus);
	l.on(document, "keyup.bs.dropdown.data-api", X.clearMenus);
	l.on(document, Vi, fe, function (i) {
		i.preventDefault();
		X.getOrCreateInstance(this).toggle();
	});
	F(X);
	const Xi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
	const Yi = ".sticky-top";
	const ot = "padding-right";
	const Qi = "margin-right";
	class Ft {
		constructor() {
			this._element = document.body;
		}
		getWidth() {
			const e = document.documentElement.clientWidth;
			return Math.abs(window.innerWidth - e);
		}
		hide() {
			const e = this.getWidth();
			this._disableOverFlow();
			this._setElementAttributes(this._element, ot, (t) => t + e);
			this._setElementAttributes(Xi, ot, (t) => t + e);
			this._setElementAttributes(Yi, Qi, (t) => t - e);
		}
		reset() {
			this._resetElementAttributes(this._element, "overflow");
			this._resetElementAttributes(this._element, ot);
			this._resetElementAttributes(Xi, ot);
			this._resetElementAttributes(Yi, Qi);
		}
		isOverflowing() {
			return this.getWidth() > 0;
		}
		_disableOverFlow() {
			this._saveInitialAttribute(this._element, "overflow");
			this._element.style.overflow = "hidden";
		}
		_setElementAttributes(e, t, n) {
			const s = this.getWidth();
			this._applyManipulationCallback(e, (o) => {
				if (o !== this._element && window.innerWidth > o.clientWidth + s) {
					return;
				}
				this._saveInitialAttribute(o, t);
				const r = window.getComputedStyle(o).getPropertyValue(t);
				o.style.setProperty(t, `${n(Number.parseFloat(r))}px`);
			});
		}
		_saveInitialAttribute(e, t) {
			const n = e.style.getPropertyValue(t);
			if (n) {
				ie.setDataAttribute(e, t, n);
			}
		}
		_resetElementAttributes(e, t) {
			this._applyManipulationCallback(e, (n) => {
				const s = ie.getDataAttribute(n, t);
				if (s !== null) {
					ie.removeDataAttribute(n, t);
					n.style.setProperty(t, s);
				} else {
					n.style.removeProperty(t);
				}
			});
		}
		_applyManipulationCallback(e, t) {
			if (ee(e)) {
				t(e);
			} else {
				for (const n of _.find(e, this._element)) {
					t(n);
				}
			}
		}
	}
	const Gi = "mousedown.bs.backdrop";
	const fs = {
		className: "modal-backdrop",
		clickCallback: null,
		isAnimated: false,
		isVisible: true,
		rootElement: "body",
	};
	const ps = {
		className: "string",
		clickCallback: "(function|null)",
		isAnimated: "boolean",
		isVisible: "boolean",
		rootElement: "(element|string)",
	};
	class Zi extends Pe {
		constructor(e) {
			super();
			this._config = this._getConfig(e);
			this._isAppended = false;
			this._element = null;
		}
		static get Default() {
			return fs;
		}
		static get DefaultType() {
			return ps;
		}
		static get NAME() {
			return "backdrop";
		}
		show(e) {
			if (!this._config.isVisible) {
				te(e);
				return;
			}
			this._append();
			this._getElement().classList.add("show");
			this._emulateAnimation(() => {
				te(e);
			});
		}
		hide(e) {
			if (this._config.isVisible) {
				this._getElement().classList.remove("show");
				this._emulateAnimation(() => {
					this.dispose();
					te(e);
				});
			} else {
				te(e);
			}
		}
		dispose() {
			if (this._isAppended) {
				l.off(this._element, Gi);
				this._element.remove();
				this._isAppended = false;
			}
		}
		_getElement() {
			if (!this._element) {
				const e = document.createElement("div");
				e.className = this._config.className;
				if (this._config.isAnimated) {
					e.classList.add("fade");
				}
				this._element = e;
			}
			return this._element;
		}
		_configAfterMerge(e) {
			e.rootElement = oe(e.rootElement);
			return e;
		}
		_append() {
			if (this._isAppended) {
				return;
			}
			const e = this._getElement();
			this._config.rootElement.append(e);
			l.on(e, Gi, () => {
				te(this._config.clickCallback);
			});
			this._isAppended = true;
		}
		_emulateAnimation(e) {
			Jt(e, this._getElement(), this._config.isAnimated);
		}
	}
	const Ji = ".bs.focustrap";
	const en = "backward";
	const gs = {
		autofocus: true,
		trapElement: null,
	};
	const ms = {
		autofocus: "boolean",
		trapElement: "element",
	};
	class tn extends Pe {
		constructor(e) {
			super();
			this._config = this._getConfig(e);
			this._isActive = false;
			this._lastTabNavDirection = null;
		}
		static get Default() {
			return gs;
		}
		static get DefaultType() {
			return ms;
		}
		static get NAME() {
			return "focustrap";
		}
		activate() {
			if (!this._isActive) {
				if (this._config.autofocus) {
					this._config.trapElement.focus();
				}
				l.off(document, Ji);
				l.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e));
				l.on(document, "keydown.tab.bs.focustrap", (e) =>
					this._handleKeydown(e),
				);
				this._isActive = true;
			}
		}
		deactivate() {
			if (this._isActive) {
				this._isActive = false;
				l.off(document, Ji);
			}
		}
		_handleFocusin(e) {
			const { trapElement: t } = this._config;
			if (e.target === document || e.target === t || t.contains(e.target)) {
				return;
			}
			const n = _.focusableChildren(t);
			if (n.length === 0) {
				t.focus();
			} else if (this._lastTabNavDirection === en) {
				n[n.length - 1].focus();
			} else {
				n[0].focus();
			}
		}
		_handleKeydown(e) {
			if (e.key === "Tab") {
				this._lastTabNavDirection = e.shiftKey ? en : "forward";
			}
		}
	}
	const nn = "hidden.bs.modal";
	const sn = "show.bs.modal";
	const on = "modal-open";
	const zt = "modal-static";
	const _s = {
		backdrop: true,
		focus: true,
		keyboard: true,
	};
	const bs = {
		backdrop: "(boolean|string)",
		focus: "boolean",
		keyboard: "boolean",
	};
	class pe extends K {
		constructor(e, t) {
			super(e, t);
			this._dialog = _.findOne(".modal-dialog", this._element);
			this._backdrop = this._initializeBackDrop();
			this._focustrap = this._initializeFocusTrap();
			this._isShown = false;
			this._isTransitioning = false;
			this._scrollBar = new Ft();
			this._addEventListeners();
		}
		static get Default() {
			return _s;
		}
		static get DefaultType() {
			return bs;
		}
		static get NAME() {
			return "modal";
		}
		toggle(e) {
			if (this._isShown) {
				return this.hide();
			} else {
				return this.show(e);
			}
		}
		show(e) {
			if (
				!this._isShown &&
				!this._isTransitioning &&
				!l.trigger(this._element, sn, {
					relatedTarget: e,
				}).defaultPrevented
			) {
				this._isShown = true;
				this._isTransitioning = true;
				this._scrollBar.hide();
				document.body.classList.add(on);
				this._adjustDialog();
				this._backdrop.show(() => this._showElement(e));
			}
		}
		hide() {
			if (this._isShown && !this._isTransitioning) {
				if (!l.trigger(this._element, "hide.bs.modal").defaultPrevented) {
					this._isShown = false;
					this._isTransitioning = true;
					this._focustrap.deactivate();
					this._element.classList.remove("show");
					this._queueCallback(
						() => this._hideModal(),
						this._element,
						this._isAnimated(),
					);
				}
			}
		}
		dispose() {
			for (const e of [window, this._dialog]) {
				l.off(e, ".bs.modal");
			}
			this._backdrop.dispose();
			this._focustrap.deactivate();
			super.dispose();
		}
		handleUpdate() {
			this._adjustDialog();
		}
		_initializeBackDrop() {
			return new Zi({
				isVisible: Boolean(this._config.backdrop),
				isAnimated: this._isAnimated(),
			});
		}
		_initializeFocusTrap() {
			return new tn({
				trapElement: this._element,
			});
		}
		_showElement(e) {
			if (!document.body.contains(this._element)) {
				document.body.append(this._element);
			}
			this._element.style.display = "block";
			this._element.removeAttribute("aria-hidden");
			this._element.setAttribute("aria-modal", true);
			this._element.setAttribute("role", "dialog");
			this._element.scrollTop = 0;
			const t = _.findOne(".modal-body", this._dialog);
			if (t) {
				t.scrollTop = 0;
			}
			this._element.classList.add("show");
			this._queueCallback(
				() => {
					if (this._config.focus) {
						this._focustrap.activate();
					}
					this._isTransitioning = false;
					l.trigger(this._element, "shown.bs.modal", {
						relatedTarget: e,
					});
				},
				this._dialog,
				this._isAnimated(),
			);
		}
		_addEventListeners() {
			l.on(this._element, "keydown.dismiss.bs.modal", (e) => {
				if (e.key === "Escape") {
					if (this._config.keyboard) {
						e.preventDefault();
						this.hide();
						return;
					} else {
						this._triggerBackdropTransition();
						return;
					}
				}
			});
			l.on(window, "resize.bs.modal", () => {
				if (this._isShown && !this._isTransitioning) {
					this._adjustDialog();
				}
			});
			l.on(this._element, "mousedown.dismiss.bs.modal", (e) => {
				l.one(this._element, "click.dismiss.bs.modal", (t) => {
					if (this._element === e.target && this._element === t.target) {
						if (this._config.backdrop !== "static") {
							if (this._config.backdrop) {
								this.hide();
							}
						} else {
							this._triggerBackdropTransition();
						}
					}
				});
			});
		}
		_hideModal() {
			this._element.style.display = "none";
			this._element.setAttribute("aria-hidden", true);
			this._element.removeAttribute("aria-modal");
			this._element.removeAttribute("role");
			this._isTransitioning = false;
			this._backdrop.hide(() => {
				document.body.classList.remove(on);
				this._resetAdjustments();
				this._scrollBar.reset();
				l.trigger(this._element, nn);
			});
		}
		_isAnimated() {
			return this._element.classList.contains("fade");
		}
		_triggerBackdropTransition() {
			if (l.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
				return;
			}
			const e =
				this._element.scrollHeight > document.documentElement.clientHeight;
			const t = this._element.style.overflowY;
			if (t !== "hidden" && !this._element.classList.contains(zt)) {
				if (!e) {
					this._element.style.overflowY = "hidden";
				}
				this._element.classList.add(zt);
				this._queueCallback(() => {
					this._element.classList.remove(zt);
					this._queueCallback(() => {
						this._element.style.overflowY = t;
					}, this._dialog);
				}, this._dialog);
				this._element.focus();
			}
		}
		_adjustDialog() {
			const e =
				this._element.scrollHeight > document.documentElement.clientHeight;
			const t = this._scrollBar.getWidth();
			const n = t > 0;
			if (n && !e) {
				const s = W() ? "paddingLeft" : "paddingRight";
				this._element.style[s] = `${t}px`;
			}
			if (!n && e) {
				const s = W() ? "paddingRight" : "paddingLeft";
				this._element.style[s] = `${t}px`;
			}
		}
		_resetAdjustments() {
			this._element.style.paddingLeft = "";
			this._element.style.paddingRight = "";
		}
		static jQueryInterface(e, t) {
			return this.each(function () {
				const n = pe.getOrCreateInstance(this, e);
				if (typeof e == "string") {
					if (n[e] === undefined) {
						throw new TypeError(`No method named "${e}"`);
					}
					n[e](t);
				}
			});
		}
	}
	l.on(
		document,
		"click.bs.modal.data-api",
		'[data-bs-toggle="modal"]',
		function (i) {
			const e = J(this);
			if (["A", "AREA"].includes(this.tagName)) {
				i.preventDefault();
			}
			l.one(e, sn, (n) => {
				if (!n.defaultPrevented) {
					l.one(e, nn, () => {
						if (ye(this)) {
							this.focus();
						}
					});
				}
			});
			const t = _.findOne(".modal.show");
			if (t) {
				pe.getInstance(t).hide();
			}
			pe.getOrCreateInstance(e).toggle(this);
		},
	);
	Ke(pe);
	F(pe);
	const ln = "showing";
	const hn = ".offcanvas.show";
	const dn = "hidePrevented.bs.offcanvas";
	const un = "hidden.bs.offcanvas";
	const vs = {
		backdrop: true,
		keyboard: true,
		scroll: false,
	};
	const ys = {
		backdrop: "(boolean|string)",
		keyboard: "boolean",
		scroll: "boolean",
	};
	class se extends K {
		constructor(e, t) {
			super(e, t);
			this._isShown = false;
			this._backdrop = this._initializeBackDrop();
			this._focustrap = this._initializeFocusTrap();
			this._addEventListeners();
		}
		static get Default() {
			return vs;
		}
		static get DefaultType() {
			return ys;
		}
		static get NAME() {
			return "offcanvas";
		}
		toggle(e) {
			if (this._isShown) {
				return this.hide();
			} else {
				return this.show(e);
			}
		}
		show(e) {
			if (
				!this._isShown &&
				!l.trigger(this._element, "show.bs.offcanvas", {
					relatedTarget: e,
				}).defaultPrevented
			) {
				this._isShown = true;
				this._backdrop.show();
				if (!this._config.scroll) {
					new Ft().hide();
				}
				this._element.setAttribute("aria-modal", true);
				this._element.setAttribute("role", "dialog");
				this._element.classList.add(ln);
				this._queueCallback(
					() => {
						if (!this._config.scroll || !!this._config.backdrop) {
							this._focustrap.activate();
						}
						this._element.classList.add("show");
						this._element.classList.remove(ln);
						l.trigger(this._element, "shown.bs.offcanvas", {
							relatedTarget: e,
						});
					},
					this._element,
					true,
				);
			}
		}
		hide() {
			if (this._isShown) {
				if (!l.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) {
					this._focustrap.deactivate();
					this._element.blur();
					this._isShown = false;
					this._element.classList.add("hiding");
					this._backdrop.hide();
					this._queueCallback(
						() => {
							this._element.classList.remove("show", "hiding");
							this._element.removeAttribute("aria-modal");
							this._element.removeAttribute("role");
							if (!this._config.scroll) {
								new Ft().reset();
							}
							l.trigger(this._element, un);
						},
						this._element,
						true,
					);
				}
			}
		}
		dispose() {
			this._backdrop.dispose();
			this._focustrap.deactivate();
			super.dispose();
		}
		_initializeBackDrop() {
			const e = Boolean(this._config.backdrop);
			return new Zi({
				className: "offcanvas-backdrop",
				isVisible: e,
				isAnimated: true,
				rootElement: this._element.parentNode,
				clickCallback: e
					? () => {
							if (this._config.backdrop !== "static") {
								this.hide();
							} else {
								l.trigger(this._element, dn);
							}
						}
					: null,
			});
		}
		_initializeFocusTrap() {
			return new tn({
				trapElement: this._element,
			});
		}
		_addEventListeners() {
			l.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
				if (e.key === "Escape") {
					if (this._config.keyboard) {
						this.hide();
					} else {
						l.trigger(this._element, dn);
					}
				}
			});
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = se.getOrCreateInstance(this, e);
				if (typeof e == "string") {
					if (t[e] === undefined || e.startsWith("_") || e === "constructor") {
						throw new TypeError(`No method named "${e}"`);
					}
					t[e](this);
				}
			});
		}
	}
	l.on(
		document,
		"click.bs.offcanvas.data-api",
		'[data-bs-toggle="offcanvas"]',
		function (i) {
			const e = J(this);
			if (["A", "AREA"].includes(this.tagName)) {
				i.preventDefault();
			}
			if (re(this)) {
				return;
			}
			l.one(e, un, () => {
				if (ye(this)) {
					this.focus();
				}
			});
			const t = _.findOne(hn);
			if (t && t !== e) {
				se.getInstance(t).hide();
			}
			se.getOrCreateInstance(e).toggle(this);
		},
	);
	l.on(window, "load.bs.offcanvas.data-api", () => {
		for (const i of _.find(hn)) {
			se.getOrCreateInstance(i).show();
		}
	});
	l.on(window, "resize.bs.offcanvas", () => {
		for (const i of _.find("[aria-modal][class*=show][class*=offcanvas-]")) {
			if (getComputedStyle(i).position !== "fixed") {
				se.getOrCreateInstance(i).hide();
			}
		}
	});
	Ke(se);
	F(se);
	const ws = new Set([
		"background",
		"cite",
		"href",
		"itemtype",
		"longdesc",
		"poster",
		"src",
		"xlink:href",
	]);
	const As = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
	const Es =
		/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
	const Cs = (i, e) => {
		const t = i.nodeName.toLowerCase();
		if (e.includes(t)) {
			return (
				!ws.has(t) || Boolean(As.test(i.nodeValue) || Es.test(i.nodeValue))
			);
		} else {
			return e.filter((n) => n instanceof RegExp).some((n) => n.test(t));
		}
	};
	const fn = {
		"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
		a: ["target", "href", "title", "rel"],
		area: [],
		b: [],
		br: [],
		col: [],
		code: [],
		div: [],
		em: [],
		hr: [],
		h1: [],
		h2: [],
		h3: [],
		h4: [],
		h5: [],
		h6: [],
		i: [],
		img: ["src", "srcset", "alt", "title", "width", "height"],
		li: [],
		ol: [],
		p: [],
		pre: [],
		s: [],
		small: [],
		span: [],
		sub: [],
		sup: [],
		strong: [],
		u: [],
		ul: [],
	};
	const Ts = {
		allowList: fn,
		content: {},
		extraClass: "",
		html: false,
		sanitize: true,
		sanitizeFn: null,
		template: "<div></div>",
	};
	const Os = {
		allowList: "object",
		content: "object",
		extraClass: "(string|function)",
		html: "boolean",
		sanitize: "boolean",
		sanitizeFn: "(null|function)",
		template: "string",
	};
	const xs = {
		entry: "(string|element|function|null)",
		selector: "(string|element)",
	};
	class ks extends Pe {
		constructor(e) {
			super();
			this._config = this._getConfig(e);
		}
		static get Default() {
			return Ts;
		}
		static get DefaultType() {
			return Os;
		}
		static get NAME() {
			return "TemplateFactory";
		}
		getContent() {
			return Object.values(this._config.content)
				.map((e) => this._resolvePossibleFunction(e))
				.filter(Boolean);
		}
		hasContent() {
			return this.getContent().length > 0;
		}
		changeContent(e) {
			this._checkContent(e);
			this._config.content = {
				...this._config.content,
				...e,
			};
			return this;
		}
		toHtml() {
			const e = document.createElement("div");
			e.innerHTML = this._maybeSanitize(this._config.template);
			for (const [s, o] of Object.entries(this._config.content)) {
				this._setContent(e, o, s);
			}
			const t = e.children[0];
			const n = this._resolvePossibleFunction(this._config.extraClass);
			if (n) {
				t.classList.add(...n.split(" "));
			}
			return t;
		}
		_typeCheckConfig(e) {
			super._typeCheckConfig(e);
			this._checkContent(e.content);
		}
		_checkContent(e) {
			for (const [t, n] of Object.entries(e)) {
				super._typeCheckConfig(
					{
						selector: t,
						entry: n,
					},
					xs,
				);
			}
		}
		_setContent(e, t, n) {
			const s = _.findOne(n, e);
			if (s) {
				if ((t = this._resolvePossibleFunction(t))) {
					if (ee(t)) {
						this._putElementInTemplate(oe(t), s);
					} else if (this._config.html) {
						s.innerHTML = this._maybeSanitize(t);
					} else {
						s.textContent = t;
					}
				} else {
					s.remove();
				}
			}
		}
		_maybeSanitize(e) {
			if (this._config.sanitize) {
				return (function (t, n, s) {
					if (!t.length) {
						return t;
					}
					if (s && typeof s == "function") {
						return s(t);
					}
					const o = new window.DOMParser().parseFromString(t, "text/html");
					const r = [].concat(...o.body.querySelectorAll("*"));
					for (const a of r) {
						const c = a.nodeName.toLowerCase();
						if (!Object.keys(n).includes(c)) {
							a.remove();
							continue;
						}
						const d = [].concat(...a.attributes);
						const u = [].concat(n["*"] || [], n[c] || []);
						for (const h of d) {
							if (!Cs(h, u)) {
								a.removeAttribute(h.nodeName);
							}
						}
					}
					return o.body.innerHTML;
				})(e, this._config.allowList, this._config.sanitizeFn);
			} else {
				return e;
			}
		}
		_resolvePossibleFunction(e) {
			if (typeof e == "function") {
				return e(this);
			} else {
				return e;
			}
		}
		_putElementInTemplate(e, t) {
			if (this._config.html) {
				t.innerHTML = "";
				t.append(e);
				return;
			}
			t.textContent = e.textContent;
		}
	}
	const Ls = new Set(["sanitize", "allowList", "sanitizeFn"]);
	const qt = "fade";
	const rt = "show";
	const gn = "hide.bs.modal";
	const at = "hover";
	const Ds = {
		AUTO: "auto",
		TOP: "top",
		RIGHT: W() ? "left" : "right",
		BOTTOM: "bottom",
		LEFT: W() ? "right" : "left",
	};
	const Ss = {
		allowList: fn,
		animation: true,
		boundary: "clippingParents",
		container: false,
		customClass: "",
		delay: 0,
		fallbackPlacements: ["top", "right", "bottom", "left"],
		html: false,
		offset: [0, 0],
		placement: "top",
		popperConfig: null,
		sanitize: true,
		sanitizeFn: null,
		selector: false,
		template:
			'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		title: "",
		trigger: "hover focus",
	};
	const Is = {
		allowList: "object",
		animation: "boolean",
		boundary: "(string|element)",
		container: "(string|element|boolean)",
		customClass: "(string|function)",
		delay: "(number|object)",
		fallbackPlacements: "array",
		html: "boolean",
		offset: "(array|string|function)",
		placement: "(string|function)",
		popperConfig: "(null|object|function)",
		sanitize: "boolean",
		sanitizeFn: "(null|function)",
		selector: "(string|boolean)",
		template: "string",
		title: "(string|element|function)",
		trigger: "string",
	};
	class ge extends K {
		constructor(e, t) {
			if (zi === undefined) {
				throw new TypeError(
					"Bootstrap's tooltips require Popper (https://popper.js.org)",
				);
			}
			super(e, t);
			this._isEnabled = true;
			this._timeout = 0;
			this._isHovered = null;
			this._activeTrigger = {};
			this._popper = null;
			this._templateFactory = null;
			this._newContent = null;
			this.tip = null;
			this._setListeners();
			if (!this._config.selector) {
				this._fixTitle();
			}
		}
		static get Default() {
			return Ss;
		}
		static get DefaultType() {
			return Is;
		}
		static get NAME() {
			return "tooltip";
		}
		enable() {
			this._isEnabled = true;
		}
		disable() {
			this._isEnabled = false;
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled;
		}
		toggle() {
			if (this._isEnabled) {
				this._activeTrigger.click = !this._activeTrigger.click;
				if (this._isShown()) {
					this._leave();
				} else {
					this._enter();
				}
			}
		}
		dispose() {
			clearTimeout(this._timeout);
			l.off(this._element.closest(".modal"), gn, this._hideModalHandler);
			if (this._element.getAttribute("data-bs-original-title")) {
				this._element.setAttribute(
					"title",
					this._element.getAttribute("data-bs-original-title"),
				);
			}
			this._disposePopper();
			super.dispose();
		}
		show() {
			if (this._element.style.display === "none") {
				throw new Error("Please use show on visible elements");
			}
			if (!this._isWithContent() || !this._isEnabled) {
				return;
			}
			const e = l.trigger(this._element, this.constructor.eventName("show"));
			const t = (
				Gt(this._element) || this._element.ownerDocument.documentElement
			).contains(this._element);
			if (e.defaultPrevented || !t) {
				return;
			}
			this._disposePopper();
			const n = this._getTipElement();
			this._element.setAttribute("aria-describedby", n.getAttribute("id"));
			const { container: s } = this._config;
			if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
				s.append(n);
				l.trigger(this._element, this.constructor.eventName("inserted"));
			}
			this._popper = this._createPopper(n);
			n.classList.add(rt);
			if ("ontouchstart" in document.documentElement) {
				for (const o of [].concat(...document.body.children)) {
					l.on(o, "mouseover", Ve);
				}
			}
			this._queueCallback(
				() => {
					l.trigger(this._element, this.constructor.eventName("shown"));
					if (this._isHovered === false) {
						this._leave();
					}
					this._isHovered = false;
				},
				this.tip,
				this._isAnimated(),
			);
		}
		hide() {
			if (
				this._isShown() &&
				!l.trigger(this._element, this.constructor.eventName("hide"))
					.defaultPrevented
			) {
				this._getTipElement().classList.remove(rt);
				if ("ontouchstart" in document.documentElement) {
					for (const e of [].concat(...document.body.children)) {
						l.off(e, "mouseover", Ve);
					}
				}
				this._activeTrigger.click = false;
				this._activeTrigger.focus = false;
				this._activeTrigger.hover = false;
				this._isHovered = null;
				this._queueCallback(
					() => {
						if (!this._isWithActiveTrigger()) {
							if (!this._isHovered) {
								this._disposePopper();
							}
							this._element.removeAttribute("aria-describedby");
							l.trigger(this._element, this.constructor.eventName("hidden"));
						}
					},
					this.tip,
					this._isAnimated(),
				);
			}
		}
		update() {
			if (this._popper) {
				this._popper.update();
			}
		}
		_isWithContent() {
			return Boolean(this._getTitle());
		}
		_getTipElement() {
			this.tip ||= this._createTipElement(
				this._newContent || this._getContentForTemplate(),
			);
			return this.tip;
		}
		_createTipElement(e) {
			const t = this._getTemplateFactory(e).toHtml();
			if (!t) {
				return null;
			}
			t.classList.remove(qt, rt);
			t.classList.add(`bs-${this.constructor.NAME}-auto`);
			const n = ((s) => {
				do {
					s += Math.floor(Math.random() * 1000000);
				} while (document.getElementById(s));
				return s;
			})(this.constructor.NAME).toString();
			t.setAttribute("id", n);
			if (this._isAnimated()) {
				t.classList.add(qt);
			}
			return t;
		}
		setContent(e) {
			this._newContent = e;
			if (this._isShown()) {
				this._disposePopper();
				this.show();
			}
		}
		_getTemplateFactory(e) {
			if (this._templateFactory) {
				this._templateFactory.changeContent(e);
			} else {
				this._templateFactory = new ks({
					...this._config,
					content: e,
					extraClass: this._resolvePossibleFunction(this._config.customClass),
				});
			}
			return this._templateFactory;
		}
		_getContentForTemplate() {
			return {
				".tooltip-inner": this._getTitle(),
			};
		}
		_getTitle() {
			return (
				this._resolvePossibleFunction(this._config.title) ||
				this._element.getAttribute("data-bs-original-title")
			);
		}
		_initializeOnDelegatedTarget(e) {
			return this.constructor.getOrCreateInstance(
				e.delegateTarget,
				this._getDelegateConfig(),
			);
		}
		_isAnimated() {
			return (
				this._config.animation || (this.tip && this.tip.classList.contains(qt))
			);
		}
		_isShown() {
			return this.tip && this.tip.classList.contains(rt);
		}
		_createPopper(e) {
			const t =
				typeof this._config.placement == "function"
					? this._config.placement.call(this, e, this._element)
					: this._config.placement;
			const n = Ds[t.toUpperCase()];
			return Wt(this._element, e, this._getPopperConfig(n));
		}
		_getOffset() {
			const { offset: e } = this._config;
			if (typeof e == "string") {
				return e.split(",").map((t) => Number.parseInt(t, 10));
			} else if (typeof e == "function") {
				return (t) => e(t, this._element);
			} else {
				return e;
			}
		}
		_resolvePossibleFunction(e) {
			if (typeof e == "function") {
				return e.call(this._element);
			} else {
				return e;
			}
		}
		_getPopperConfig(e) {
			const t = {
				placement: e,
				modifiers: [
					{
						name: "flip",
						options: {
							fallbackPlacements: this._config.fallbackPlacements,
						},
					},
					{
						name: "offset",
						options: {
							offset: this._getOffset(),
						},
					},
					{
						name: "preventOverflow",
						options: {
							boundary: this._config.boundary,
						},
					},
					{
						name: "arrow",
						options: {
							element: `.${this.constructor.NAME}-arrow`,
						},
					},
					{
						name: "preSetPlacement",
						enabled: true,
						phase: "beforeMain",
						fn: (n) => {
							this._getTipElement().setAttribute(
								"data-popper-placement",
								n.state.placement,
							);
						},
					},
				],
			};
			return {
				...t,
				...(typeof this._config.popperConfig == "function"
					? this._config.popperConfig(t)
					: this._config.popperConfig),
			};
		}
		_setListeners() {
			const e = this._config.trigger.split(" ");
			for (const t of e) {
				if (t === "click") {
					l.on(
						this._element,
						this.constructor.eventName("click"),
						this._config.selector,
						(n) => {
							this._initializeOnDelegatedTarget(n).toggle();
						},
					);
				} else if (t !== "manual") {
					const n = this.constructor.eventName(
						t === at ? "mouseenter" : "focusin",
					);
					const s = this.constructor.eventName(
						t === at ? "mouseleave" : "focusout",
					);
					l.on(this._element, n, this._config.selector, (o) => {
						const r = this._initializeOnDelegatedTarget(o);
						r._activeTrigger[o.type === "focusin" ? "focus" : at] = true;
						r._enter();
					});
					l.on(this._element, s, this._config.selector, (o) => {
						const r = this._initializeOnDelegatedTarget(o);
						r._activeTrigger[o.type === "focusout" ? "focus" : at] =
							r._element.contains(o.relatedTarget);
						r._leave();
					});
				}
			}
			this._hideModalHandler = () => {
				if (this._element) {
					this.hide();
				}
			};
			l.on(this._element.closest(".modal"), gn, this._hideModalHandler);
		}
		_fixTitle() {
			const e = this._element.getAttribute("title");
			if (e) {
				if (
					!this._element.getAttribute("aria-label") &&
					!this._element.textContent.trim()
				) {
					this._element.setAttribute("aria-label", e);
				}
				this._element.setAttribute("data-bs-original-title", e);
				this._element.removeAttribute("title");
			}
		}
		_enter() {
			if (this._isShown() || this._isHovered) {
				this._isHovered = true;
			} else {
				this._isHovered = true;
				this._setTimeout(() => {
					if (this._isHovered) {
						this.show();
					}
				}, this._config.delay.show);
			}
		}
		_leave() {
			if (!this._isWithActiveTrigger()) {
				this._isHovered = false;
				this._setTimeout(() => {
					if (!this._isHovered) {
						this.hide();
					}
				}, this._config.delay.hide);
			}
		}
		_setTimeout(e, t) {
			clearTimeout(this._timeout);
			this._timeout = setTimeout(e, t);
		}
		_isWithActiveTrigger() {
			return Object.values(this._activeTrigger).includes(true);
		}
		_getConfig(e) {
			const t = ie.getDataAttributes(this._element);
			for (const n of Object.keys(t)) {
				if (Ls.has(n)) {
					delete t[n];
				}
			}
			e = {
				...t,
				...(typeof e == "object" && e ? e : {}),
			};
			e = this._mergeConfigObj(e);
			e = this._configAfterMerge(e);
			this._typeCheckConfig(e);
			return e;
		}
		_configAfterMerge(e) {
			e.container = e.container === false ? document.body : oe(e.container);
			if (typeof e.delay == "number") {
				e.delay = {
					show: e.delay,
					hide: e.delay,
				};
			}
			if (typeof e.title == "number") {
				e.title = e.title.toString();
			}
			if (typeof e.content == "number") {
				e.content = e.content.toString();
			}
			return e;
		}
		_getDelegateConfig() {
			const e = {};
			for (const t in this._config) {
				if (this.constructor.Default[t] !== this._config[t]) {
					e[t] = this._config[t];
				}
			}
			e.selector = false;
			e.trigger = "manual";
			return e;
		}
		_disposePopper() {
			if (this._popper) {
				this._popper.destroy();
				this._popper = null;
			}
			if (this.tip) {
				this.tip.remove();
				this.tip = null;
			}
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = ge.getOrCreateInstance(this, e);
				if (typeof e == "string") {
					if (t[e] === undefined) {
						throw new TypeError(`No method named "${e}"`);
					}
					t[e]();
				}
			});
		}
	}
	F(ge);
	const Ns = {
		...ge.Default,
		content: "",
		offset: [0, 8],
		placement: "right",
		template:
			'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
		trigger: "click",
	};
	const Ps = {
		...ge.DefaultType,
		content: "(null|string|element|function)",
	};
	class lt extends ge {
		static get Default() {
			return Ns;
		}
		static get DefaultType() {
			return Ps;
		}
		static get NAME() {
			return "popover";
		}
		_isWithContent() {
			return this._getTitle() || this._getContent();
		}
		_getContentForTemplate() {
			return {
				".popover-header": this._getTitle(),
				".popover-body": this._getContent(),
			};
		}
		_getContent() {
			return this._resolvePossibleFunction(this._config.content);
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = lt.getOrCreateInstance(this, e);
				if (typeof e == "string") {
					if (t[e] === undefined) {
						throw new TypeError(`No method named "${e}"`);
					}
					t[e]();
				}
			});
		}
	}
	F(lt);
	const _n = "click.bs.scrollspy";
	const ze = "active";
	const js = {
		offset: null,
		rootMargin: "0px 0px -25%",
		smoothScroll: false,
		target: null,
		threshold: [0.1, 0.5, 1],
	};
	const Ms = {
		offset: "(number|null)",
		rootMargin: "string",
		smoothScroll: "boolean",
		target: "element",
		threshold: "array",
	};
	class qe extends K {
		constructor(e, t) {
			super(e, t);
			this._targetLinks = new Map();
			this._observableSections = new Map();
			this._rootElement =
				getComputedStyle(this._element).overflowY === "visible"
					? null
					: this._element;
			this._activeTarget = null;
			this._observer = null;
			this._previousScrollData = {
				visibleEntryTop: 0,
				parentScrollTop: 0,
			};
			this.refresh();
		}
		static get Default() {
			return js;
		}
		static get DefaultType() {
			return Ms;
		}
		static get NAME() {
			return "scrollspy";
		}
		refresh() {
			this._initializeTargetsAndObservables();
			this._maybeEnableSmoothScroll();
			if (this._observer) {
				this._observer.disconnect();
			} else {
				this._observer = this._getNewObserver();
			}
			for (const e of this._observableSections.values()) {
				this._observer.observe(e);
			}
		}
		dispose() {
			this._observer.disconnect();
			super.dispose();
		}
		_configAfterMerge(e) {
			e.target = oe(e.target) || document.body;
			e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin;
			if (typeof e.threshold == "string") {
				e.threshold = e.threshold.split(",").map((t) => Number.parseFloat(t));
			}
			return e;
		}
		_maybeEnableSmoothScroll() {
			if (this._config.smoothScroll) {
				l.off(this._config.target, _n);
				l.on(this._config.target, _n, "[href]", (e) => {
					const t = this._observableSections.get(e.target.hash);
					if (t) {
						e.preventDefault();
						const n = this._rootElement || window;
						const s = t.offsetTop - this._element.offsetTop;
						if (n.scrollTo) {
							n.scrollTo({
								top: s,
								behavior: "smooth",
							});
							return;
						}
						n.scrollTop = s;
					}
				});
			}
		}
		_getNewObserver() {
			return new IntersectionObserver((t) => this._observerCallback(t), {
				root: this._rootElement,
				threshold: this._config.threshold,
				rootMargin: this._config.rootMargin,
			});
		}
		_observerCallback(e) {
			const t = (r) => this._targetLinks.get(`#${r.target.id}`);
			const n = (r) => {
				this._previousScrollData.visibleEntryTop = r.target.offsetTop;
				this._process(t(r));
			};
			const s = (this._rootElement || document.documentElement).scrollTop;
			const o = s >= this._previousScrollData.parentScrollTop;
			this._previousScrollData.parentScrollTop = s;
			for (const r of e) {
				if (!r.isIntersecting) {
					this._activeTarget = null;
					this._clearActiveClass(t(r));
					continue;
				}
				const a =
					r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
				if (o && a) {
					n(r);
					if (!s) {
						return;
					}
				} else if (!o && !a) {
					n(r);
				}
			}
		}
		_initializeTargetsAndObservables() {
			this._targetLinks = new Map();
			this._observableSections = new Map();
			const e = _.find("[href]", this._config.target);
			for (const t of e) {
				if (!t.hash || re(t)) {
					continue;
				}
				const n = _.findOne(t.hash, this._element);
				if (ye(n)) {
					this._targetLinks.set(t.hash, t);
					this._observableSections.set(t.hash, n);
				}
			}
		}
		_process(e) {
			if (this._activeTarget !== e) {
				this._clearActiveClass(this._config.target);
				this._activeTarget = e;
				e.classList.add(ze);
				this._activateParents(e);
				l.trigger(this._element, "activate.bs.scrollspy", {
					relatedTarget: e,
				});
			}
		}
		_activateParents(e) {
			if (e.classList.contains("dropdown-item")) {
				_.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(ze);
			} else {
				for (const t of _.parents(e, ".nav, .list-group")) {
					for (const n of _.prev(
						t,
						".nav-link, .nav-item > .nav-link, .list-group-item",
					)) {
						n.classList.add(ze);
					}
				}
			}
		}
		_clearActiveClass(e) {
			e.classList.remove(ze);
			const t = _.find("[href].active", e);
			for (const n of t) {
				n.classList.remove(ze);
			}
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = qe.getOrCreateInstance(this, e);
				if (typeof e == "string") {
					if (t[e] === undefined || e.startsWith("_") || e === "constructor") {
						throw new TypeError(`No method named "${e}"`);
					}
					t[e]();
				}
			});
		}
	}
	l.on(window, "load.bs.scrollspy.data-api", () => {
		for (const i of _.find('[data-bs-spy="scroll"]')) {
			qe.getOrCreateInstance(i);
		}
	});
	F(qe);
	const Hs = "ArrowLeft";
	const vn = "ArrowRight";
	const $s = "ArrowUp";
	const yn = "ArrowDown";
	const ct = "active";
	const Rt = "show";
	const An =
		'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
	const Vt = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${An}`;
	class me extends K {
		constructor(e) {
			super(e);
			this._parent = this._element.closest(
				'.list-group, .nav, [role="tablist"]',
			);
			if (this._parent) {
				this._setInitialAttributes(this._parent, this._getChildren());
				l.on(this._element, "keydown.bs.tab", (t) => this._keydown(t));
			}
		}
		static get NAME() {
			return "tab";
		}
		show() {
			const e = this._element;
			if (this._elemIsActive(e)) {
				return;
			}
			const t = this._getActiveElem();
			const n = t
				? l.trigger(t, "hide.bs.tab", {
						relatedTarget: e,
					})
				: null;
			if (
				!l.trigger(e, "show.bs.tab", {
					relatedTarget: t,
				}).defaultPrevented &&
				(!n || !n.defaultPrevented)
			) {
				this._deactivate(t, e);
				this._activate(e, t);
			}
		}
		_activate(e, t) {
			if (e) {
				e.classList.add(ct);
				this._activate(J(e));
				this._queueCallback(
					() => {
						if (e.getAttribute("role") === "tab") {
							e.removeAttribute("tabindex");
							e.setAttribute("aria-selected", true);
							this._toggleDropDown(e, true);
							l.trigger(e, "shown.bs.tab", {
								relatedTarget: t,
							});
						} else {
							e.classList.add(Rt);
						}
					},
					e,
					e.classList.contains("fade"),
				);
			}
		}
		_deactivate(e, t) {
			if (e) {
				e.classList.remove(ct);
				e.blur();
				this._deactivate(J(e));
				this._queueCallback(
					() => {
						if (e.getAttribute("role") === "tab") {
							e.setAttribute("aria-selected", false);
							e.setAttribute("tabindex", "-1");
							this._toggleDropDown(e, false);
							l.trigger(e, "hidden.bs.tab", {
								relatedTarget: t,
							});
						} else {
							e.classList.remove(Rt);
						}
					},
					e,
					e.classList.contains("fade"),
				);
			}
		}
		_keydown(e) {
			if (![Hs, vn, $s, yn].includes(e.key)) {
				return;
			}
			e.stopPropagation();
			e.preventDefault();
			const t = [vn, yn].includes(e.key);
			const n = mt(
				this._getChildren().filter((s) => !re(s)),
				e.target,
				t,
				true,
			);
			if (n) {
				n.focus({
					preventScroll: true,
				});
				me.getOrCreateInstance(n).show();
			}
		}
		_getChildren() {
			return _.find(Vt, this._parent);
		}
		_getActiveElem() {
			return this._getChildren().find((e) => this._elemIsActive(e)) || null;
		}
		_setInitialAttributes(e, t) {
			this._setAttributeIfNotExists(e, "role", "tablist");
			for (const n of t) {
				this._setInitialAttributesOnChild(n);
			}
		}
		_setInitialAttributesOnChild(e) {
			e = this._getInnerElement(e);
			const t = this._elemIsActive(e);
			const n = this._getOuterElement(e);
			e.setAttribute("aria-selected", t);
			if (n !== e) {
				this._setAttributeIfNotExists(n, "role", "presentation");
			}
			if (!t) {
				e.setAttribute("tabindex", "-1");
			}
			this._setAttributeIfNotExists(e, "role", "tab");
			this._setInitialAttributesOnTargetPanel(e);
		}
		_setInitialAttributesOnTargetPanel(e) {
			const t = J(e);
			if (t) {
				this._setAttributeIfNotExists(t, "role", "tabpanel");
				if (e.id) {
					this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`);
				}
			}
		}
		_toggleDropDown(e, t) {
			const n = this._getOuterElement(e);
			if (!n.classList.contains("dropdown")) {
				return;
			}
			const s = (o, r) => {
				const a = _.findOne(o, n);
				if (a) {
					a.classList.toggle(r, t);
				}
			};
			s(".dropdown-toggle", ct);
			s(".dropdown-menu", Rt);
			n.setAttribute("aria-expanded", t);
		}
		_setAttributeIfNotExists(e, t, n) {
			if (!e.hasAttribute(t)) {
				e.setAttribute(t, n);
			}
		}
		_elemIsActive(e) {
			return e.classList.contains(ct);
		}
		_getInnerElement(e) {
			if (e.matches(Vt)) {
				return e;
			} else {
				return _.findOne(Vt, e);
			}
		}
		_getOuterElement(e) {
			return e.closest(".nav-item, .list-group-item") || e;
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = me.getOrCreateInstance(this);
				if (typeof e == "string") {
					if (t[e] === undefined || e.startsWith("_") || e === "constructor") {
						throw new TypeError(`No method named "${e}"`);
					}
					t[e]();
				}
			});
		}
	}
	l.on(document, "click.bs.tab", An, function (i) {
		if (["A", "AREA"].includes(this.tagName)) {
			i.preventDefault();
		}
		if (!re(this)) {
			me.getOrCreateInstance(this).show();
		}
	});
	l.on(window, "load.bs.tab", () => {
		for (const i of _.find(
			'.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]',
		)) {
			me.getOrCreateInstance(i);
		}
	});
	F(me);
	const ht = "show";
	const dt = "showing";
	const Bs = {
		animation: "boolean",
		autohide: "boolean",
		delay: "number",
	};
	const Ws = {
		animation: true,
		autohide: true,
		delay: 5000,
	};
	class Re extends K {
		constructor(e, t) {
			super(e, t);
			this._timeout = null;
			this._hasMouseInteraction = false;
			this._hasKeyboardInteraction = false;
			this._setListeners();
		}
		static get Default() {
			return Ws;
		}
		static get DefaultType() {
			return Bs;
		}
		static get NAME() {
			return "toast";
		}
		show() {
			if (!l.trigger(this._element, "show.bs.toast").defaultPrevented) {
				this._clearTimeout();
				if (this._config.animation) {
					this._element.classList.add("fade");
				}
				this._element.classList.remove("hide");
				this._element.classList.add(ht, dt);
				this._queueCallback(
					() => {
						this._element.classList.remove(dt);
						l.trigger(this._element, "shown.bs.toast");
						this._maybeScheduleHide();
					},
					this._element,
					this._config.animation,
				);
			}
		}
		hide() {
			if (this.isShown()) {
				if (!l.trigger(this._element, "hide.bs.toast").defaultPrevented) {
					this._element.classList.add(dt);
					this._queueCallback(
						() => {
							this._element.classList.add("hide");
							this._element.classList.remove(dt, ht);
							l.trigger(this._element, "hidden.bs.toast");
						},
						this._element,
						this._config.animation,
					);
				}
			}
		}
		dispose() {
			this._clearTimeout();
			if (this.isShown()) {
				this._element.classList.remove(ht);
			}
			super.dispose();
		}
		isShown() {
			return this._element.classList.contains(ht);
		}
		_maybeScheduleHide() {
			if (this._config.autohide) {
				if (!this._hasMouseInteraction && !this._hasKeyboardInteraction) {
					this._timeout = setTimeout(() => {
						this.hide();
					}, this._config.delay);
				}
			}
		}
		_onInteraction(e, t) {
			switch (e.type) {
				case "mouseover":
				case "mouseout":
					this._hasMouseInteraction = t;
					break;
				case "focusin":
				case "focusout":
					this._hasKeyboardInteraction = t;
			}
			if (t) {
				this._clearTimeout();
				return;
			}
			const n = e.relatedTarget;
			if (this._element !== n && !this._element.contains(n)) {
				this._maybeScheduleHide();
			}
		}
		_setListeners() {
			l.on(this._element, "mouseover.bs.toast", (e) =>
				this._onInteraction(e, true),
			);
			l.on(this._element, "mouseout.bs.toast", (e) =>
				this._onInteraction(e, false),
			);
			l.on(this._element, "focusin.bs.toast", (e) =>
				this._onInteraction(e, true),
			);
			l.on(this._element, "focusout.bs.toast", (e) =>
				this._onInteraction(e, false),
			);
		}
		_clearTimeout() {
			clearTimeout(this._timeout);
			this._timeout = null;
		}
		static jQueryInterface(e) {
			return this.each(function () {
				const t = Re.getOrCreateInstance(this, e);
				if (typeof e == "string") {
					if (t[e] === undefined) {
						throw new TypeError(`No method named "${e}"`);
					}
					t[e](this);
				}
			});
		}
	}
	Ke(Re);
	F(Re);
	return {
		Alert: je,
		Button: Me,
		Carousel: Ee,
		Collapse: Ce,
		Dropdown: X,
		Modal: pe,
		Offcanvas: se,
		Popover: lt,
		ScrollSpy: qe,
		Tab: me,
		Toast: Re,
		Tooltip: ge,
	};
});
