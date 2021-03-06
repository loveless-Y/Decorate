function initFun() {
	var n, t;
	for($("#Mask").height($("body").height()), $(".hot_room ul").css({
			width: $(".hot_room ul li").size() * 400 + "px"
		}), $(".div_caseSlide").css({
			width: $(".div_caseSlide .div_float").size() * 1200 + "px"
		}), $("#JS_side_stage").css({
			width: $("#JS_side_stage").find("td").size() * 100 + "%"
		}), isPlaceholderSupport() || $("input").each(function() {
			typeof $(this).attr("placeholder") == "string" && $(this).val($(this).attr("placeholder"))
		}), n = "", t = 1; t <= $("#JS_side_stage").find("td").size(); t++) n += t == 1 ? '<a class="first current" href="javascript:;"></a>' : '<a href="javascript:;" class=""></a>';
	$("#JS_side_nav").html(n)
}

function isPlaceholderSupport() {
	return "placeholder" in document.createElement("input")
}

function setLirotate(n, t) {
	NowDeg[t] > -90 && (NowDeg[t] -= Speed, NowDeg[t] > -90 ? (n.css({
		transform: "rotateY(" + NowDeg[t] + "deg)",
		"-webkit-transform": "rotateY(" + NowDeg[t] + "deg)"
	}), setTimeout(function() {
		setLirotate(n, t)
	}, 30)) : (NowDeg[t] = -90, n.css({
		transform: "rotateY(" + NowDeg[t] + "deg)",
		"-webkit-transform": "rotateY(" + NowDeg[t] + "deg)"
	}), setLirotate2(n, t)))
}

function setLirotate2(n, t) {
	NowDeg[t] == -90 && (t != 1 && n.find("center").html('<img src="/Images2/Global/FH' + (t + 1) + '.png" />'), n.find("center").html('<img src="/Images2/Global/FF' + (t + 1) + '.png" />'), n.find("i").css({
		color: "#F25618"
	}), n.find(".pb").css({
		color: "white"
	}), n.find(".ps").hide(), n.find(".ph").show(), n.find(".bg").css({
		backgroundColor: "#53575A"
	}), NowDeg[t] = -270), NowDeg[t] -= Speed, NowDeg[t] > -360 ? (n.css({
		transform: "rotateY(" + NowDeg[t] + "deg)",
		"-webkit-transform": "rotateY(" + NowDeg[t] + "deg)"
	}), setTimeout(function() {
		setLirotate2(n, t)
	}, 30)) : (NowDeg[t] = -360, n.css({
		transform: "rotateY(" + NowDeg[t] + "deg)",
		"-webkit-transform": "rotateY(" + NowDeg[t] + "deg)"
	}), RMask2[t] = !1, RWait[t] && (RWait[t] = !1, RMask2[t] = !0, backLirotate(n, t)))
}

function backLirotate(n, t) {
	NowDeg[t] < -270 && (NowDeg[t] += Speed, NowDeg[t] < -270 ? (n.css({
		transform: "rotateY(" + NowDeg[t] + "deg)",
		"-webkit-transform": "rotateY(" + NowDeg[t] + "deg)"
	}), setTimeout(function() {
		backLirotate(n, t)
	}, 30)) : (NowDeg[t] = -270, n.css({
		transform: "rotateY(" + NowDeg[t] + "deg)",
		"-webkit-transform": "rotateY(" + NowDeg[t] + "deg)"
	}), backLirotate2(n, t)))
}

function backLirotate2(n, t) {
	NowDeg[t] == -270 && (t != 1 && n.find("center").html('<img src="/Images2/Global/F' + (t + 1) + '.png" />'), n.find("center").html('<img src="/Images2/Global/F' + (t + 1) + '.png" />'), n.find("i").css({
		color: "#3c3c3c"
	}), n.find(".pb").css({
		color: "#3c3c3c"
	}), n.find(".ph").hide(), n.find(".ps").show(), n.find(".bg").css({
		backgroundColor: "white"
	}), NowDeg[t] = -90), NowDeg[t] += Speed, NowDeg[t] < 0 ? (n.css({
		transform: "rotateY(" + NowDeg[t] + "deg)",
		"-webkit-transform": "rotateY(" + NowDeg[t] + "deg)"
	}), setTimeout(function() {
		backLirotate2(n, t)
	}, 30)) : (NowDeg[t] = 0, n.css({
		transform: "rotateY(" + NowDeg[t] + "deg)",
		"-webkit-transform": "rotateY(" + NowDeg[t] + "deg)"
	}), RMask[t] = !1)
}

function TimeOutCookie() {}

function goTop() {
	$("html,body").animate({
		scrollTop: 0
	}, 300)
}

function RegPhone(n) {
	var t = /^([0-9]{3,4}-)?[0-9]{7,8}$/,
		i = /^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}(-\d{3,4})?$/,
		r = /^((\+?86)|(\(\+86\)))?1\d{10}$/;
	return r.exec(n) || i.exec(n) || t.exec(n) ? !0 : !1
}

function getQueryString(n) {
	var i = new RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i"),
		t = window.location.search.substr(1).match(i);
	return t != null ? unescape(t[2]) : null
}

function replaceParamVal(url, paramName, replaceWith) {
	var oUrl = url,
		re = eval("/(" + paramName + "=)([^&]*)/gi");
	return oUrl.replace(re, paramName + "=" + replaceWith)
}

function setPosition(n) {
	$(n).css({
		position: "absolute",
		left: ($(window).width() - $(n).outerWidth()) / 2,
		top: ($(window).height() - $(n).outerHeight()) / 2 + $(document).scrollTop()
	})
}

function showRegistion(n, t) {
	var i = "popup",
		f = "#?w=630",
		r, u;
	t ? $("#eMail").show() : $("#eMail").hide(), $("#Title").html(n);
	var e = f.split("?"),
		o = e[1].split("&"),
		s = o[0].split("=")[1];
	return $("#" + i).fadeIn().css({
		width: Number(s)
	}).prepend('<a href="javascript:void(0)" class="close" style="right:20px;top:15px;position:absolute;"><img src="/Images2/Global/ClsForm.jpg" class="btn_close" title="Close Window" alt="Close" /></a>'), r = ($("#" + i).height() + 80) / 2, u = ($("#" + i).width() + 80) / 2, $("#" + i).css({
		"margin-top": -r,
		"margin-left": -u
	}), $("body").append('<div id="fade"></div>'), $("#fade").css({
		filter: "alpha(opacity=80)",
		height: $("body").height()
	}).fadeIn(), $("a.close").click(function() {
		$("#fade , .popup_block").fadeOut(function() {
			$("#fade, a.close").remove()
		})
	}), !1
}

function pyRegisterCvt(n) {
	var f = window,
		e = document,
		t = encodeURIComponent,
		i = location.href,
		r = e.referrer,
		o, s = e.cookie,
		h = s.match(/(^|;)\s*ipycookie=([^;]*)/),
		c = s.match(/(^|;)\s*ipysession=([^;]*)/);
	f.parent != f && (o = i, i = r, r = o), u = "//stats.ipinyou.com/cvt?a=" + t("0es.aqs.9yr6dCJUFAskVyWg3TtX-0") + "&c=" + t(h ? h[2] : "") + "&s=" + t(c ? c[2].match(/jump\%3D(\d+)/)[1] : "") + "&u=" + t(i) + "&r=" + t(r) + "&rd=" + +new Date + "&OrderNo=" + t(n) + "&e=", (new Image).src = u
}
var Lang;
(function(n, t) {
	function wu(n) {
		var t = vt[n] = {};
		return i.each(n.split(h), function(n, i) {
			t[i] = !0
		}), t
	}

	function yr(n, r, u) {
		if(u === t && n.nodeType === 1) {
			var f = "data-" + r.replace(su, "-$1").toLowerCase();
			if(u = n.getAttribute(f), typeof u == "string") {
				try {
					u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : hu.test(u) ? i.parseJSON(u) : u
				} catch(e) {}
				i.data(n, r, u)
			} else u = t
		}
		return u
	}

	function ri(n) {
		var t;
		for(t in n)
			if((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
		return !0
	}

	function y() {
		return !1
	}

	function ct() {
		return !0
	}

	function d(n) {
		return !n || !n.parentNode || n.parentNode.nodeType === 11
	}

	function dr(n, t) {
		do n = n[t]; while (n && n.nodeType !== 1);
		return n
	}

	function tu(n, t, r) {
		if(t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
			var u = !!t.call(n, i, n);
			return u === r
		});
		if(t.nodeType) return i.grep(n, function(n) {
			return n === t === r
		});
		if(typeof t == "string") {
			var u = i.grep(n, function(n) {
				return n.nodeType === 1
			});
			if(co.test(t)) return i.filter(t, u, !r);
			t = i.filter(t, u)
		}
		return i.grep(n, function(n) {
			return i.inArray(n, t) >= 0 === r
		})
	}

	function uu(n) {
		var i = yi.split("|"),
			t = n.createDocumentFragment();
		if(t.createElement)
			while(i.length) t.createElement(i.pop());
		return t
	}

	function ff(n, t) {
		return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
	}

	function ou(n, t) {
		if(t.nodeType === 1 && i.hasData(n)) {
			var u, f, o, s = i._data(n),
				r = i._data(t, s),
				e = s.events;
			if(e) {
				delete r.handle, r.events = {};
				for(u in e)
					for(f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
			}
			r.data && (r.data = i.extend({}, r.data))
		}
	}

	function vi(n, t) {
		var r;
		t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && ui.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text), t.removeAttribute(i.expando))
	}

	function et(n) {
		return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
	}

	function pi(n) {
		ui.test(n.type) && (n.defaultChecked = n.checked)
	}

	function nr(n, t) {
		if(t in n) return t;
		for(var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = di.length; i--;)
			if(t = di[i] + r, t in n) return t;
		return u
	}

	function g(n, t) {
		return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
	}

	function sr(n, t) {
		for(var r, o, e = [], f = 0, s = n.length; f < s; f++)(r = n[f], r.style) && (e[f] = i._data(r, "olddisplay"), t ? (!e[f] && r.style.display === "none" && (r.style.display = ""), r.style.display === "" && g(r) && (e[f] = i._data(r, "olddisplay", fr(r.nodeName)))) : (o = u(r, "display"), !e[f] && o !== "none" && i._data(r, "olddisplay", o)));
		for(f = 0; f < s; f++)(r = n[f], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[f] || "" : "none"));
		return n
	}

	function au(n, t, i) {
		var r = pe.exec(t);
		return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
	}

	function or(n, t, r, f) {
		for(var e = r === (f ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + l[e], !0)), f ? (r === "content" && (o -= parseFloat(u(n, "padding" + l[e])) || 0), r !== "margin" && (o -= parseFloat(u(n, "border" + l[e] + "Width")) || 0)) : (o += parseFloat(u(n, "padding" + l[e])) || 0, r !== "padding" && (o += parseFloat(u(n, "border" + l[e] + "Width")) || 0));
		return o
	}

	function er(n, t, r) {
		var f = t === "width" ? n.offsetWidth : n.offsetHeight,
			e = !0,
			o = i.support.boxSizing && i.css(n, "boxSizing") === "border-box";
		if(f <= 0 || f == null) {
			if(f = u(n, t), (f < 0 || f == null) && (f = n.style[t]), lt.test(f)) return f;
			e = o && (i.support.boxSizingReliable || f === n.style[t]), f = parseFloat(f) || 0
		}
		return f + or(n, t, r || (o ? "border" : "content"), e) + "px"
	}

	function fr(n) {
		if(dt[n]) return dt[n];
		var f = i("<" + n + ">").appendTo(r.body),
			t = f.css("display");
		return f.remove(), (t === "none" || t === "") && (p = r.body.appendChild(p || i.extend(r.createElement("iframe"), {
			frameBorder: 0,
			width: 0,
			height: 0
		})), w && p.createElement || (w = (p.contentWindow || p.contentDocument).document, w.write("<!doctype html><html><body>"), w.close()), f = w.body.appendChild(w.createElement(n)), t = u(f, "display"), r.body.removeChild(p)), dt[n] = t, t
	}

	function ii(n, t, r, u) {
		var f;
		if(i.isArray(t)) i.each(t, function(t, i) {
			r || cf.test(n) ? u(n, i) : ii(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
		});
		else if(r || i.type(t) !== "object") u(n, t);
		else
			for(f in t) ii(n + "[" + f + "]", t[f], r, u)
	}

	function ur(n) {
		return function(t, r) {
			typeof t != "string" && (r = t, t = "*");
			var u, o, f, s = t.toLowerCase().split(h),
				e = 0,
				c = s.length;
			if(i.isFunction(r))
				for(; e < c; e++) u = s[e], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), o = n[u] = n[u] || [], o[f ? "unshift" : "push"](r)
		}
	}

	function ot(n, i, r, u, f, e) {
		f = f || i.dataTypes[0], e = e || {}, e[f] = !0;
		for(var o, s = n[f], h = 0, l = s ? s.length : 0, c = n === pt; h < l && (c || !o); h++) o = s[h](i, r, u), typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o), o = ot(n, i, r, u, o, e)));
		return(c || !o) && !e["*"] && (o = ot(n, i, r, u, "*", e)), o
	}

	function ir(n, r) {
		var u, f, e = i.ajaxSettings.flatOptions || {};
		for(u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
		f && i.extend(!0, n, f)
	}

	function io(n, i, r) {
		var o, u, e, s, h = n.contents,
			f = n.dataTypes,
			c = n.responseFields;
		for(u in c) u in r && (i[c[u]] = r[u]);
		while(f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
		if(o)
			for(u in h)
				if(h[u] && h[u].test(o)) {
					f.unshift(u);
					break
				}
		if(f[0] in r) e = f[0];
		else {
			for(u in r) {
				if(!f[0] || n.converters[u + " " + f[0]]) {
					e = u;
					break
				}
				s || (s = u)
			}
			e = e || s
		}
		if(e) return e !== f[0] && f.unshift(e), r[e]
	}

	function oo(n, t) {
		var i, o, r, e, s = n.dataTypes.slice(),
			f = s[0],
			u = {},
			h = 0;
		if(n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
			for(i in n.converters) u[i.toLowerCase()] = n.converters[i];
		for(; r = s[++h];)
			if(r !== "*") {
				if(f !== "*" && f !== r) {
					if(i = u[f + " " + r] || u["* " + r], !i)
						for(o in u)
							if(e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]], i)) {
								i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
								break
							}
					if(i !== !0)
						if(i && n.throws) t = i(t);
						else try {
							t = i(t)
						} catch(c) {
							return {
								state: "parsererror",
								error: i ? c : "No conversion from " + f + " to " + r
							}
						}
				}
				f = r
			}
		return {
			state: "success",
			data: t
		}
	}

	function lr() {
		try {
			return new n.XMLHttpRequest
		} catch(t) {}
	}

	function kf() {
		try {
			return new n.ActiveXObject("Microsoft.XMLHTTP")
		} catch(t) {}
	}

	function cu() {
		return setTimeout(function() {
			v = t
		}, 0), v = i.now()
	}

	function df(n, t) {
		i.each(t, function(t, i) {
			for(var u = (k[t] || []).concat(k["*"]), r = 0, f = u.length; r < f; r++)
				if(u[r].call(n, t, i)) return
		})
	}

	function kr(n, t, r) {
		var e, o = 0,
			l = 0,
			c = it.length,
			f = i.Deferred().always(function() {
				delete h.elem
			}),
			h = function() {
				for(var o = v || cu(), t = Math.max(0, u.startTime + u.duration - o), s = t / u.duration || 0, i = 1 - s, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
				return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
			},
			u = f.promise({
				elem: n,
				props: i.extend({}, t),
				opts: i.extend(!0, {
					specialEasing: {}
				}, r),
				originalProperties: t,
				originalOptions: r,
				startTime: v || cu(),
				duration: r.duration,
				tweens: [],
				createTween: function(t, r) {
					var e = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(e), e
				},
				stop: function(t) {
					for(var i = 0, r = t ? u.tweens.length : 0; i < r; i++) u.tweens[i].run(1);
					return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
				}
			}),
			s = u.props;
		for(he(s, u.opts.specialEasing); o < c; o++)
			if(e = it[o].call(u, n, s, u.opts), e) return e;
		return df(u, s), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(h, {
			anim: u,
			queue: u.opts.queue,
			elem: n
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function he(n, t) {
		var r, f, e, u, o;
		for(r in n)
			if(f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
				u = o.expand(u), delete n[f];
				for(r in u) r in n || (n[r] = u[r], t[r] = e)
			} else t[f] = e
	}

	function ce(n, t, r) {
		var o, u, a, y, s, w, l, e, b, h = this,
			f = n.style,
			p = {},
			v = [],
			c = n.nodeType && g(n);
		r.queue || (e = i._queueHooks(n, "fx"), e.unqueued == null && (e.unqueued = 0, b = e.empty.fire, e.empty.fire = function() {
			e.unqueued || b()
		}), e.unqueued++, h.always(function() {
			h.always(function() {
				e.unqueued--, i.queue(n, "fx").length || e.empty.fire()
			})
		})), n.nodeType === 1 && ("height" in t || "width" in t) && (r.overflow = [f.overflow, f.overflowX, f.overflowY], i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (!i.support.inlineBlockNeedsLayout || fr(n.nodeName) === "inline" ? f.display = "inline-block" : f.zoom = 1)), r.overflow && (f.overflow = "hidden", i.support.shrinkWrapBlocks || h.done(function() {
			f.overflow = r.overflow[0], f.overflowX = r.overflow[1], f.overflowY = r.overflow[2]
		}));
		for(o in t)
			if(a = t[o], uf.exec(a)) {
				if(delete t[o], w = w || a === "toggle", a === (c ? "hide" : "show")) continue;
				v.push(o)
			}
		if(y = v.length, y)
			for(s = i._data(n, "fxshow") || i._data(n, "fxshow", {}), ("hidden" in s) && (c = s.hidden), w && (s.hidden = !c), c ? i(n).show() : h.done(function() {
					i(n).hide()
				}), h.done(function() {
					var t;
					i.removeData(n, "fxshow", !0);
					for(t in p) i.style(n, t, p[t])
				}), o = 0; o < y; o++) u = v[o], l = h.createTween(u, c ? s[u] : 0), p[u] = s[u] || i.style(n, u), u in s || (s[u] = l.start, c && (l.end = l.start, l.start = u === "width" || u === "height" ? 1 : 0))
	}

	function f(n, t, i, r, u) {
		return new f.prototype.init(n, t, i, r, u)
	}

	function tt(n, t) {
		var r, i = {
				height: n
			},
			u = 0;
		for(t = t ? 1 : 0; u < 4; u += 2 - t) r = l[u], i["margin" + r] = i["padding" + r] = n;
		return t && (i.opacity = i.width = n), i
	}

	function br(n) {
		return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
	}
	var wr, nt, r = n.document,
		ae = n.location,
		to = n.navigator,
		pf = n.jQuery,
		ve = n.$,
		vr = Array.prototype.push,
		o = Array.prototype.slice,
		pr = Array.prototype.indexOf,
		le = Object.prototype.toString,
		kt = Object.prototype.hasOwnProperty,
		bt = String.prototype.trim,
		i = function(n, t) {
			return new i.fn.init(n, t, wr)
		},
		rt = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
		se = /\S/,
		h = /\s+/,
		oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ee = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		nu = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ye = /^[\],:{}\s]*$/,
		fe = /(?:^|:|,)(?:\s*\[)+/g,
		re = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		ie = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
		te = /^-ms-/,
		ne = /-([\da-z])/gi,
		gf = function(n, t) {
			return(t + "").toUpperCase()
		},
		ft = function() {
			r.addEventListener ? (r.removeEventListener("DOMContentLoaded", ft, !1), i.ready()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", ft), i.ready())
		},
		fu = {},
		vt, hu, su, b, ut, gr, ni;
	i.fn = i.prototype = {
		constructor: i,
		init: function(n, u, f) {
			var e, o, h, s;
			if(!n) return this;
			if(n.nodeType) return this.context = this[0] = n, this.length = 1, this;
			if(typeof n == "string") {
				if(e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : ee.exec(n), e && (e[1] || !u)) {
					if(e[1]) return u = u instanceof i ? u[0] : u, s = u && u.nodeType ? u.ownerDocument || u : r, n = i.parseHTML(e[1], s, !0), nu.test(e[1]) && i.isPlainObject(u) && this.attr.call(n, u, !0), i.merge(this, n);
					if(o = r.getElementById(e[2]), o && o.parentNode) {
						if(o.id !== e[2]) return f.find(n);
						this.length = 1, this[0] = o
					}
					return this.context = r, this.selector = n, this
				}
				return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
			}
			return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
		},
		selector: "",
		jquery: "1.8.3",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return o.call(this)
		},
		get: function(n) {
			return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
		},
		pushStack: function(n, t, r) {
			var u = i.merge(this.constructor(), n);
			return u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
		},
		each: function(n, t) {
			return i.each(this, n, t)
		},
		ready: function(n) {
			return i.ready.promise().done(n), this
		},
		eq: function(n) {
			return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		slice: function() {
			return this.pushStack(o.apply(this, arguments), "slice", o.call(arguments).join(","))
		},
		map: function(n) {
			return this.pushStack(i.map(this, function(t, i) {
				return n.call(t, i, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: vr,
		sort: [].sort,
		splice: [].splice
	}, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function() {
		var o, e, u, r, s, h, n = arguments[0] || {},
			f = 1,
			l = arguments.length,
			c = !1;
		for(typeof n == "boolean" && (c = n, n = arguments[1] || {}, f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++)
			if((o = arguments[f]) != null)
				for(e in o)(u = n[e], r = o[e], n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
		return n
	}, i.extend({
		noConflict: function(t) {
			return n.$ === i && (n.$ = ve), t && n.jQuery === i && (n.jQuery = pf), i
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(n) {
			n ? i.readyWait++ : i.ready(!0)
		},
		ready: function(n) {
			if(n === !0 ? !--i.readyWait : !i.isReady) {
				if(!r.body) return setTimeout(i.ready, 1);
				(i.isReady = !0, n !== !0 && --i.readyWait > 0) || (nt.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
			}
		},
		isFunction: function(n) {
			return i.type(n) === "function"
		},
		isArray: Array.isArray || function(n) {
			return i.type(n) === "array"
		},
		isWindow: function(n) {
			return n != null && n == n.window
		},
		isNumeric: function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n)
		},
		type: function(n) {
			return n == null ? String(n) : fu[le.call(n)] || "object"
		},
		isPlainObject: function(n) {
			if(!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
			try {
				if(n.constructor && !kt.call(n, "constructor") && !kt.call(n.constructor.prototype, "isPrototypeOf")) return !1
			} catch(u) {
				return !1
			}
			var r;
			for(r in n);
			return r === t || kt.call(n, r)
		},
		isEmptyObject: function(n) {
			var t;
			for(t in n) return !1;
			return !0
		},
		error: function(n) {
			throw new Error(n);
		},
		parseHTML: function(n, t, u) {
			var f;
			return !n || typeof n != "string" ? null : (typeof t == "boolean" && (u = t, t = 0), t = t || r, (f = nu.exec(n)) ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, u ? null : []), i.merge([], (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes)))
		},
		parseJSON: function(t) {
			if(!t || typeof t != "string") return null;
			if(t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
			if(ye.test(t.replace(re, "@").replace(ie, "]").replace(fe, ""))) return new Function("return " + t)();
			i.error("Invalid JSON: " + t)
		},
		parseXML: function(r) {
			var u, f;
			if(!r || typeof r != "string") return null;
			try {
				n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
			} catch(e) {
				u = t
			}
			return(!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r), u
		},
		noop: function() {},
		globalEval: function(t) {
			t && se.test(t) && (n.execScript || function(t) {
				n.eval.call(n, t)
			})(t)
		},
		camelCase: function(n) {
			return n.replace(te, "ms-").replace(ne, gf)
		},
		nodeName: function(n, t) {
			return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(n, r, u) {
			var f, e = 0,
				o = n.length,
				s = o === t || i.isFunction(n);
			if(u) {
				if(s) {
					for(f in n)
						if(r.apply(n[f], u) === !1) break
				} else
					for(; e < o;)
						if(r.apply(n[e++], u) === !1) break
			} else if(s) {
				for(f in n)
					if(r.call(n[f], f, n[f]) === !1) break
			} else
				for(; e < o;)
					if(r.call(n[e], e, n[e++]) === !1) break; return n
		},
		trim: bt && !bt.call("﻿ ") ? function(n) {
			return n == null ? "" : bt.call(n)
		} : function(n) {
			return n == null ? "" : (n + "").replace(oe, "")
		},
		makeArray: function(n, t) {
			var r, u = t || [];
			return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? vr.call(u, n) : i.merge(u, n)), u
		},
		inArray: function(n, t, i) {
			var r;
			if(t) {
				if(pr) return pr.call(t, n, i);
				for(r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
					if(i in t && t[i] === n) return i
			}
			return -1
		},
		merge: function(n, i) {
			var f = i.length,
				u = n.length,
				r = 0;
			if(typeof f == "number")
				for(; r < f; r++) n[u++] = i[r];
			else
				while(i[r] !== t) n[u++] = i[r++];
			return n.length = u, n
		},
		grep: function(n, t, i) {
			var u, f = [],
				r = 0,
				e = n.length;
			for(i = !!i; r < e; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
			return f
		},
		map: function(n, r, u) {
			var f, h, e = [],
				s = 0,
				o = n.length,
				c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
			if(c)
				for(; s < o; s++) f = r(n[s], s, u), f != null && (e[e.length] = f);
			else
				for(h in n) f = r(n[h], h, u), f != null && (e[e.length] = f);
			return e.concat.apply([], e)
		},
		guid: 1,
		proxy: function(n, r) {
			var f, e, u;
			return typeof r == "string" && (f = n[r], r = n, n = f), i.isFunction(n) ? (e = o.call(arguments, 2), u = function() {
				return n.apply(r, e.concat(o.call(arguments)))
			}, u.guid = n.guid = n.guid || i.guid++, u) : t
		},
		access: function(n, r, u, f, e, o, s) {
			var c, l = u == null,
				h = 0,
				a = n.length;
			if(u && typeof u == "object") {
				for(h in u) i.access(n, r, h, u[h], 1, o, f);
				e = 1
			} else if(f !== t) {
				if(c = s === t && i.isFunction(f), l && (c ? (c = r, r = function(n, t, r) {
						return c.call(i(n), r)
					}) : (r.call(n, f), r = null)), r)
					for(; h < a; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
				e = 1
			}
			return e ? n : l ? r.call(n) : a ? r(n[0], u) : o
		},
		now: function() {
			return +new Date
		}
	}), i.ready.promise = function(t) {
		if(!nt)
			if(nt = i.Deferred(), r.readyState === "complete") setTimeout(i.ready, 1);
			else if(r.addEventListener) r.addEventListener("DOMContentLoaded", ft, !1), n.addEventListener("load", i.ready, !1);
		else {
			r.attachEvent("onreadystatechange", ft), n.attachEvent("onload", i.ready);
			var u = !1;
			try {
				u = n.frameElement == null && r.documentElement
			} catch(e) {}
			u && u.doScroll && function f() {
				if(!i.isReady) {
					try {
						u.doScroll("left")
					} catch(n) {
						return setTimeout(f, 50)
					}
					i.ready()
				}
			}()
		}
		return nt.promise(t)
	}, i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(n, t) {
		fu["[object " + t + "]"] = t.toLowerCase()
	}), wr = i(r), vt = {}, i.Callbacks = function(n) {
		n = typeof n == "string" ? vt[n] || wu(n) : i.extend({}, n);
		var f, c, o, l, s, e, r = [],
			u = !n.once && [],
			a = function(t) {
				for(f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && e < s; e++)
					if(r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
						f = !1;
						break
					}
				o = !1, r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
			},
			h = {
				add: function() {
					if(r) {
						var t = r.length;
						(function u(t) {
							i.each(t, function(t, f) {
								var e = i.type(f);
								e === "function" ? (!n.unique || !h.has(f)) && r.push(f) : f && f.length && e !== "string" && u(f)
							})
						})(arguments), o ? s = r.length : f && (l = t, a(f))
					}
					return this
				},
				remove: function() {
					return r && i.each(arguments, function(n, t) {
						for(var u;
							(u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), o && (u <= s && s--, u <= e && e--)
					}), this
				},
				has: function(n) {
					return i.inArray(n, r) > -1
				},
				empty: function() {
					return r = [], this
				},
				disable: function() {
					return r = u = f = t, this
				},
				disabled: function() {
					return !r
				},
				lock: function() {
					return u = t, f || h.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(n, t) {
					return t = t || [], t = [n, t.slice ? t.slice() : t], r && (!c || u) && (o ? u.push(t) : a(t)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!c
				}
			};
		return h
	}, i.extend({
		Deferred: function(n) {
			var u = [
					["resolve", "done", i.Callbacks("once memory"), "resolved"],
					["reject", "fail", i.Callbacks("once memory"), "rejected"],
					["notify", "progress", i.Callbacks("memory")]
				],
				f = "pending",
				r = {
					state: function() {
						return f
					},
					always: function() {
						return t.done(arguments).fail(arguments), this
					},
					then: function() {
						var n = arguments;
						return i.Deferred(function(r) {
							i.each(u, function(u, f) {
								var e = f[0],
									o = n[u];
								t[f[1]](i.isFunction(o) ? function() {
									var n = o.apply(this, arguments);
									n && i.isFunction(n.promise) ? n.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[e + "With"](this === t ? r : this, [n])
								} : r[e])
							}), n = null
						}).promise()
					},
					promise: function(n) {
						return n != null ? i.extend(n, r) : r
					}
				},
				t = {};
			return r.pipe = r.then, i.each(u, function(n, i) {
				var e = i[2],
					o = i[3];
				r[i[1]] = e.add, o && e.add(function() {
					f = o
				}, u[n ^ 1][2].disable, u[2][2].lock), t[i[0]] = e.fire, t[i[0] + "With"] = e.fireWith
			}), r.promise(t), n && n.call(t, t), t
		},
		when: function(n) {
			var t = 0,
				u = o.call(arguments),
				r = u.length,
				e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
				f = e === 1 ? n : i.Deferred(),
				c = function(n, t, i) {
					return function(r) {
						t[n] = this, i[n] = arguments.length > 1 ? o.call(arguments) : r, i === s ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
					}
				},
				s, l, h;
			if(r > 1)
				for(s = new Array(r), l = new Array(r), h = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(c(t, h, u)).fail(f.reject).progress(c(t, l, s)) : --e;
			return e || f.resolveWith(h, u), f.promise()
		}
	}), i.support = function() {
		var u, h, e, c, l, f, o, a, v, s, y, t = r.createElement("div");
		if(t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", h = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !h || !e || !h.length) return {};
		c = r.createElement("select"), l = c.appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], e.style.cssText = "top:1px;float:left;opacity:.5", u = {
			leadingWhitespace: t.firstChild.nodeType === 3,
			tbody: !t.getElementsByTagName("tbody").length,
			htmlSerialize: !!t.getElementsByTagName("link").length,
			style: /top/.test(e.getAttribute("style")),
			hrefNormalized: e.getAttribute("href") === "/a",
			opacity: /^0.5/.test(e.style.opacity),
			cssFloat: !!e.style.cssFloat,
			checkOn: f.value === "on",
			optSelected: l.selected,
			getSetAttribute: t.className !== "t",
			enctype: !!r.createElement("form").enctype,
			html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			boxModel: r.compatMode === "CSS1Compat",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, c.disabled = !0, u.optDisabled = !l.disabled;
		try {
			delete t.test
		} catch(p) {
			u.deleteExpando = !1
		}
		if(!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", y = function() {
				u.noCloneEvent = !1
			}), t.cloneNode(!0).fireEvent("onclick"), t.detachEvent("onclick", y)), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), t.appendChild(f), o = r.createDocumentFragment(), o.appendChild(t.lastChild), u.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, o.removeChild(f), o.appendChild(t), t.attachEvent)
			for(v in {
					submit: !0,
					change: !0,
					focusin: !0
				}) a = "on" + v, s = a in t, s || (t.setAttribute(a, "return;"), s = typeof t[a] == "function"), u[v + "Bubbles"] = s;
		return i(function() {
			var i, t, f, e, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
				o = r.getElementsByTagName("body")[0];
			o && (i = r.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(i, o.firstChild), t = r.createElement("div"), i.appendChild(t), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = t.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", s = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", u.reliableHiddenOffsets = s && f[0].offsetHeight === 0, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = t.offsetWidth === 4, u.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1, n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%", u.boxSizingReliable = (n.getComputedStyle(t, null) || {
				width: "4px"
			}).width === "4px", e = r.createElement("div"), e.style.cssText = t.style.cssText = h, e.style.marginRight = e.style.width = "0", t.style.width = "1px", t.appendChild(e), u.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div></div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = t.offsetWidth !== 3, i.style.zoom = 1), o.removeChild(i), i = t = f = e = null)
		}), o.removeChild(t), h = e = c = l = f = o = t = null, u
	}(), hu = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, su = /([A-Z])/g, i.extend({
		cache: {},
		deletedIds: [],
		uuid: 0,
		expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(n) {
			return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ri(n)
		},
		data: function(n, r, u, f) {
			if(i.acceptData(n)) {
				var s, h, c = i.expando,
					a = typeof r == "string",
					l = n.nodeType,
					o = l ? i.cache : n,
					e = l ? n[c] : n[c] && c;
				if(e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = i.deletedIds.pop() || i.guid++ : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], h == null && (h = s[i.camelCase(r)])) : h = s, h
			}
		},
		removeData: function(n, t, r) {
			if(i.acceptData(n)) {
				var e, o, h, s = n.nodeType,
					u = s ? i.cache : n,
					f = s ? n[i.expando] : i.expando;
				if(u[f]) {
					if(t && (e = r ? u[f] : u[f].data, e)) {
						for(i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), o = 0, h = t.length; o < h; o++) delete e[t[o]];
						if(!(r ? ri : i.isEmptyObject)(e)) return
					}(r || (delete u[f].data, ri(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
				}
			}
		},
		_data: function(n, t, r) {
			return i.data(n, t, r, !0)
		},
		acceptData: function(n) {
			var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
			return !t || t !== !0 && n.getAttribute("classid") === t
		}
	}), i.fn.extend({
		data: function(n, r) {
			var u, s, h, o, l, e = this[0],
				c = 0,
				f = null;
			if(n === t) {
				if(this.length && (f = i.data(e), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
					for(h = e.attributes, l = h.length; c < l; c++) o = h[c].name, o.indexOf("data-") || (o = i.camelCase(o.substring(5)), yr(e, o, f[o]));
					i._data(e, "parsedAttrs", !0)
				}
				return f
			}
			return typeof n == "object" ? this.each(function() {
				i.data(this, n)
			}) : (u = n.split(".", 2), u[1] = u[1] ? "." + u[1] : "", s = u[1] + "!", i.access(this, function(r) {
				if(r === t) return f = this.triggerHandler("getData" + s, [u[0]]), f === t && e && (f = i.data(e, n), f = yr(e, n, f)), f === t && u[1] ? this.data(u[0]) : f;
				u[1] = r, this.each(function() {
					var t = i(this);
					t.triggerHandler("setData" + s, u), i.data(this, n, r), t.triggerHandler("changeData" + s, u)
				})
			}, null, r, arguments.length > 1, null, !1))
		},
		removeData: function(n) {
			return this.each(function() {
				i.removeData(this, n)
			})
		}
	}), i.extend({
		queue: function(n, t, r) {
			var u;
			if(n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
		},
		dequeue: function(n, t) {
			t = t || "fx";
			var r = i.queue(n, t),
				e = r.length,
				u = r.shift(),
				f = i._queueHooks(n, t),
				o = function() {
					i.dequeue(n, t)
				};
			u === "inprogress" && (u = r.shift(), e--), u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f)), !e && f && f.empty.fire()
		},
		_queueHooks: function(n, t) {
			var r = t + "queueHooks";
			return i._data(n, r) || i._data(n, r, {
				empty: i.Callbacks("once memory").add(function() {
					i.removeData(n, t + "queue", !0), i.removeData(n, r, !0)
				})
			})
		}
	}), i.fn.extend({
		queue: function(n, r) {
			var u = 2;
			return typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u ? i.queue(this[0], n) : r === t ? this : this.each(function() {
				var t = i.queue(this, n, r);
				i._queueHooks(this, n), n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
			})
		},
		dequeue: function(n) {
			return this.each(function() {
				i.dequeue(this, n)
			})
		},
		delay: function(n, t) {
			return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
				var r = setTimeout(t, n);
				i.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(n) {
			return this.queue(n || "fx", [])
		},
		promise: function(n, r) {
			var u, e = 1,
				o = i.Deferred(),
				f = this,
				s = this.length,
				h = function() {
					--e || o.resolveWith(f, [f])
				};
			for(typeof n != "string" && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
			return h(), o.promise(r)
		}
	});
	var s, eu, ar, iu = /[\t\r\n]/g,
		bf = /\r/g,
		ue = /^(?:button|input)$/i,
		we = /^(?:button|input|object|select|textarea)$/i,
		fo = /^a(?:rea|)$/i,
		fi = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		ei = i.support.getSetAttribute;
	i.fn.extend({
		attr: function(n, t) {
			return i.access(this, i.attr, n, t, arguments.length > 1)
		},
		removeAttr: function(n) {
			return this.each(function() {
				i.removeAttr(this, n)
			})
		},
		prop: function(n, t) {
			return i.access(this, i.prop, n, t, arguments.length > 1)
		},
		removeProp: function(n) {
			return n = i.propFix[n] || n, this.each(function() {
				try {
					this[n] = t, delete this[n]
				} catch(i) {}
			})
		},
		addClass: function(n) {
			var r, f, o, t, e, u, s;
			if(i.isFunction(n)) return this.each(function(t) {
				i(this).addClass(n.call(this, t, this.className))
			});
			if(n && typeof n == "string")
				for(r = n.split(h), f = 0, o = this.length; f < o; f++)
					if(t = this[f], t.nodeType === 1)
						if(t.className || r.length !== 1) {
							for(e = " " + t.className + " ", u = 0, s = r.length; u < s; u++) e.indexOf(" " + r[u] + " ") < 0 && (e += r[u] + " ");
							t.className = i.trim(e)
						} else t.className = n;
			return this
		},
		removeClass: function(n) {
			var e, r, u, f, s, o, c;
			if(i.isFunction(n)) return this.each(function(t) {
				i(this).removeClass(n.call(this, t, this.className))
			});
			if(n && typeof n == "string" || n === t)
				for(e = (n || "").split(h), o = 0, c = this.length; o < c; o++)
					if(u = this[o], u.nodeType === 1 && u.className) {
						for(r = (" " + u.className + " ").replace(iu, " "), f = 0, s = e.length; f < s; f++)
							while(r.indexOf(" " + e[f] + " ") >= 0) r = r.replace(" " + e[f] + " ", " ");
						u.className = n ? i.trim(r) : ""
					}
			return this
		},
		toggleClass: function(n, t) {
			var r = typeof n,
				u = typeof t == "boolean";
			return i.isFunction(n) ? this.each(function(r) {
				i(this).toggleClass(n.call(this, r, this.className, t), t)
			}) : this.each(function() {
				if(r === "string")
					for(var f, s = 0, o = i(this), e = t, c = n.split(h); f = c[s++];) e = u ? e : !o.hasClass(f), o[e ? "addClass" : "removeClass"](f);
				else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
			})
		},
		hasClass: function(n) {
			for(var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
				if(this[t].nodeType === 1 && (" " + this[t].className + " ").replace(iu, " ").indexOf(i) >= 0) return !0;
			return !1
		},
		val: function(n) {
			var r, u, e, f = this[0];
			return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
				var f, o = i(this);
				this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
					return n == null ? "" : n + ""
				})), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
			})) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, typeof u == "string" ? u.replace(bf, "") : u == null ? "" : u)) : void 0
		}
	}), i.extend({
		valHooks: {
			option: {
				get: function(n) {
					var t = n.attributes.value;
					return !t || t.specified ? n.value : n.text
				}
			},
			select: {
				get: function(n) {
					for(var e, t, o = n.options, r = n.selectedIndex, u = n.type === "select-one" || r < 0, s = u ? null : [], h = u ? r + 1 : o.length, f = r < 0 ? h : u ? r : 0; f < h; f++)
						if(t = o[f], (t.selected || f === r) && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
							if(e = i(t).val(), u) return e;
							s.push(e)
						}
					return s
				},
				set: function(n, t) {
					var r = i.makeArray(t);
					return i(n).find("option").each(function() {
						this.selected = i.inArray(i(this).val(), r) >= 0
					}), r.length || (n.selectedIndex = -1), r
				}
			}
		},
		attrFn: {},
		attr: function(n, r, u, f) {
			var e, o, h, c = n.nodeType;
			if(n && c !== 3 && c !== 8 && c !== 2) {
				if(f && i.isFunction(i.fn[r])) return i(n)[r](u);
				if(typeof n.getAttribute == "undefined") return i.prop(n, r, u);
				if(h = c !== 1 || !i.isXMLDoc(n), h && (r = r.toLowerCase(), o = i.attrHooks[r] || (fi.test(r) ? eu : s)), u !== t) {
					if(u === null) {
						i.removeAttr(n, r);
						return
					}
					return o && "set" in o && h && (e = o.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u)
				}
				return o && "get" in o && h && (e = o.get(n, r)) !== null ? e : (e = n.getAttribute(r), e === null ? t : e)
			}
		},
		removeAttr: function(n, t) {
			var u, f, r, e, o = 0;
			if(t && n.nodeType === 1)
				for(f = t.split(h); o < f.length; o++) r = f[o], r && (u = i.propFix[r] || r, e = fi.test(r), e || i.attr(n, r, ""), n.removeAttribute(ei ? r : u), e && u in n && (n[u] = !1))
		},
		attrHooks: {
			type: {
				set: function(n, t) {
					if(ue.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
					else if(!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
						var r = n.value;
						return n.setAttribute("type", t), r && (n.value = r), t
					}
				}
			},
			value: {
				get: function(n, t) {
					return s && i.nodeName(n, "button") ? s.get(n, t) : t in n ? n.value : null
				},
				set: function(n, t, r) {
					if(s && i.nodeName(n, "button")) return s.set(n, t, r);
					n.value = t
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(n, r, u) {
			var e, f, s, o = n.nodeType;
			if(n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && (e = f.get(n, r)) !== null ? e : n[r]
		},
		propHooks: {
			tabIndex: {
				get: function(n) {
					var i = n.getAttributeNode("tabindex");
					return i && i.specified ? parseInt(i.value, 10) : we.test(n.nodeName) || fo.test(n.nodeName) && n.href ? 0 : t
				}
			}
		}
	}), eu = {
		get: function(n, r) {
			var u, f = i.prop(n, r);
			return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
		},
		set: function(n, t, r) {
			var u;
			return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
		}
	}, ei || (ar = {
		name: !0,
		id: !0,
		coords: !0
	}, s = i.valHooks.button = {
		get: function(n, i) {
			var r;
			return r = n.getAttributeNode(i), r && (ar[i] ? r.value !== "" : r.specified) ? r.value : t
		},
		set: function(n, t, i) {
			var u = n.getAttributeNode(i);
			return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.value = t + ""
		}
	}, i.each(["width", "height"], function(n, t) {
		i.attrHooks[t] = i.extend(i.attrHooks[t], {
			set: function(n, i) {
				if(i === "") return n.setAttribute(t, "auto"), i
			}
		})
	}), i.attrHooks.contenteditable = {
		get: s.get,
		set: function(n, t, i) {
			t === "" && (t = "false"), s.set(n, t, i)
		}
	}), i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function(n, r) {
		i.attrHooks[r] = i.extend(i.attrHooks[r], {
			get: function(n) {
				var i = n.getAttribute(r, 2);
				return i === null ? t : i
			}
		})
	}), i.support.style || (i.attrHooks.style = {
		get: function(n) {
			return n.style.cssText.toLowerCase() || t
		},
		set: function(n, t) {
			return n.style.cssText = t + ""
		}
	}), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
		get: function(n) {
			var t = n.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	})), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function() {
		i.valHooks[this] = {
			get: function(n) {
				return n.getAttribute("value") === null ? "on" : n.value
			}
		}
	}), i.each(["radio", "checkbox"], function() {
		i.valHooks[this] = i.extend(i.valHooks[this], {
			set: function(n, t) {
				if(i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
			}
		})
	});
	var ti = /^(?:textarea|input|select)$/i,
		si = /^([^\.]*|)(?:\.(.+)|)$/,
		be = /(?:^|\s)hover(\.\S+|)\b/,
		yo = /^key/,
		vo = /^(?:mouse|contextmenu)|click/,
		ci = /^(?:focusinfocus|focusoutblur)$/,
		li = function(n) {
			return i.event.special.hover ? n : n.replace(be, "mouseenter$1 mouseleave$1")
		};
	i.event = {
			add: function(n, r, u, f, e) {
				var a, s, v, y, p, o, b, l, w, c, h;
				if(n.nodeType !== 3 && n.nodeType !== 8 && r && u && (a = i._data(n))) {
					for(u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), v = a.events, v || (a.events = v = {}), s = a.handle, s || (a.handle = s = function(n) {
							return typeof i == "undefined" || !!n && i.event.triggered === n.type ? t : i.event.dispatch.apply(s.elem, arguments)
						}, s.elem = n), r = i.trim(li(r)).split(" "), y = 0; y < r.length; y++) p = si.exec(r[y]) || [], o = p[1], b = (p[2] || "").split(".").sort(), h = i.event.special[o] || {}, o = (e ? h.delegateType : h.bindType) || o, h = i.event.special[o] || {}, l = i.extend({
						type: o,
						origType: p[1],
						data: f,
						handler: u,
						guid: u.guid,
						selector: e,
						needsContext: e && i.expr.match.needsContext.test(e),
						namespace: b.join(".")
					}, w), c = v[o], c || (c = v[o] = [], c.delegateCount = 0, h.setup && h.setup.call(n, f, b, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1) : n.attachEvent && n.attachEvent("on" + o, s))), h.add && (h.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
					n = null
				}
			},
			global: {},
			remove: function(n, t, r, u, f) {
				var v, p, e, b, c, w, y, l, h, o, s, a = i.hasData(n) && i._data(n);
				if(a && (l = a.events)) {
					for(t = i.trim(li(t || "")).split(" "), v = 0; v < t.length; v++) {
						if(p = si.exec(t[v]) || [], e = b = p[1], c = p[2], !e) {
							for(e in l) i.event.remove(n, e + t[v], r, u, !0);
							continue
						}
						for(h = i.event.special[e] || {}, e = (u ? h.delegateType : h.bindType) || e, o = l[e] || [], w = o.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, y = 0; y < o.length; y++) s = o[y], (f || b === s.origType) && (!r || r.guid === s.guid) && (!c || c.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(y--, 1), s.selector && o.delegateCount--, h.remove && h.remove.call(n, s));
						o.length === 0 && w !== o.length && ((!h.teardown || h.teardown.call(n, c, a.handle) === !1) && i.removeEvent(n, e, a.handle), delete l[e])
					}
					i.isEmptyObject(l) && (delete a.handle, i.removeData(n, "events", !0))
				}
			},
			customEvent: {
				getData: !0,
				setData: !0,
				changeData: !0
			},
			trigger: function(u, f, e, o) {
				if(!e || e.nodeType !== 3 && e.nodeType !== 8) {
					var w, d, c, h, l, v, a, y, p, k, s = u.type || u,
						b = [];
					if(ci.test(s + i.event.triggered)) return;
					if(s.indexOf("!") >= 0 && (s = s.slice(0, -1), d = !0), s.indexOf(".") >= 0 && (b = s.split("."), s = b.shift(), b.sort()), (!e || i.event.customEvent[s]) && !i.event.global[s]) return;
					if(u = typeof u == "object" ? u[i.expando] ? u : new i.Event(s, u) : new i.Event(s), u.type = s, u.isTrigger = !0, u.exclusive = d, u.namespace = b.join("."), u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, v = s.indexOf(":") < 0 ? "on" + s : "", !e) {
						w = i.cache;
						for(c in w) w[c].events && w[c].events[s] && i.event.trigger(u, f, w[c].handle.elem, !0);
						return
					}
					if(u.result = t, u.target || (u.target = e), f = f != null ? i.makeArray(f) : [], f.unshift(u), a = i.event.special[s] || {}, a.trigger && a.trigger.apply(e, f) === !1) return;
					if(p = [
							[e, a.bindType || s]
						], !o && !a.noBubble && !i.isWindow(e)) {
						for(k = a.delegateType || s, h = ci.test(k + s) ? e : e.parentNode, l = e; h; h = h.parentNode) p.push([h, k]), l = h;
						l === (e.ownerDocument || r) && p.push([l.defaultView || l.parentWindow || n, k])
					}
					for(c = 0; c < p.length && !u.isPropagationStopped(); c++) h = p[c][0], u.type = p[c][1], y = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), y && y.apply(h, f), y = v && h[v], y && i.acceptData(h) && y.apply && y.apply(h, f) === !1 && u.preventDefault();
					return u.type = s, !o && !u.isDefaultPrevented() && (!a._default || a._default.apply(e.ownerDocument, f) === !1) && (s !== "click" || !i.nodeName(e, "a")) && i.acceptData(e) && v && e[s] && (s !== "focus" && s !== "blur" || u.target.offsetWidth !== 0) && !i.isWindow(e) && (l = e[v], l && (e[v] = null), i.event.triggered = s, e[s](), i.event.triggered = t, l && (e[v] = l)), u.result
				}
				return
			},
			dispatch: function(r) {
				r = i.event.fix(r || n.event);
				var e, c, f, l, a, h, v, u, s, g, p = (i._data(this, "events") || {})[r.type] || [],
					w = p.delegateCount,
					k = o.call(arguments),
					d = !r.exclusive && !r.namespace,
					y = i.event.special[r.type] || {},
					b = [];
				if(k[0] = r, r.delegateTarget = this, !y.preDispatch || y.preDispatch.call(this, r) !== !1) {
					if(w && (!r.button || r.type !== "click"))
						for(f = r.target; f != this; f = f.parentNode || this)
							if(f.disabled !== !0 || r.type !== "click") {
								for(a = {}, v = [], e = 0; e < w; e++) u = p[e], s = u.selector, a[s] === t && (a[s] = u.needsContext ? i(s, this).index(f) >= 0 : i.find(s, this, null, [f]).length), a[s] && v.push(u);
								v.length && b.push({
									elem: f,
									matches: v
								})
							}
					for(p.length > w && b.push({
							elem: this,
							matches: p.slice(w)
						}), e = 0; e < b.length && !r.isPropagationStopped(); e++)
						for(h = b[e], r.currentTarget = h.elem, c = 0; c < h.matches.length && !r.isImmediatePropagationStopped(); c++) u = h.matches[c], (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, l = ((i.event.special[u.origType] || {}).handle || u.handler).apply(h.elem, k), l !== t && (r.result = l, l === !1 && (r.preventDefault(), r.stopPropagation())));
					return y.postDispatch && y.postDispatch.call(this, r), r.result
				}
			},
			props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(n, t) {
					return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(n, i) {
					var o, u, f, e = i.button,
						s = i.fromElement;
					return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, u = o.documentElement, f = o.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
				}
			},
			fix: function(n) {
				if(n[i.expando]) return n;
				var f, e, t = n,
					u = i.event.fixHooks[n.type] || {},
					o = u.props ? this.props.concat(u.props) : this.props;
				for(n = i.Event(t), f = o.length; f;) e = o[--f], n[e] = t[e];
				return n.target || (n.target = t.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, u.filter ? u.filter(n, t) : n
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					delegateType: "focusin"
				},
				blur: {
					delegateType: "focusout"
				},
				beforeunload: {
					setup: function(n, t, r) {
						i.isWindow(this) && (this.onbeforeunload = r)
					},
					teardown: function(n, t) {
						this.onbeforeunload === t && (this.onbeforeunload = null)
					}
				}
			},
			simulate: function(n, t, r, u) {
				var f = i.extend(new i.Event, r, {
					type: n,
					isSimulated: !0,
					originalEvent: {}
				});
				u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
			}
		}, i.event.handle = i.event.dispatch, i.removeEvent = r.removeEventListener ? function(n, t, i) {
			n.removeEventListener && n.removeEventListener(t, i, !1)
		} : function(n, t, i) {
			var r = "on" + t;
			n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null), n.detachEvent(r, i))
		}, i.Event = function(n, t) {
			if(!(this instanceof i.Event)) return new i.Event(n, t);
			n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ct : y) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0
		}, i.Event.prototype = {
			preventDefault: function() {
				this.isDefaultPrevented = ct;
				var n = this.originalEvent;
				n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
			},
			stopPropagation: function() {
				this.isPropagationStopped = ct;
				var n = this.originalEvent;
				n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = ct, this.stopPropagation()
			},
			isDefaultPrevented: y,
			isPropagationStopped: y,
			isImmediatePropagationStopped: y
		}, i.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(n, t) {
			i.event.special[n] = {
				delegateType: t,
				bindType: t,
				handle: function(n) {
					var f, e = this,
						r = n.relatedTarget,
						u = n.handleObj,
						o = u.selector;
					return r && (r === e || i.contains(e, r)) || (n.type = u.origType, f = u.handler.apply(this, arguments), n.type = t), f
				}
			}
		}), i.support.submitBubbles || (i.event.special.submit = {
			setup: function() {
				if(i.nodeName(this, "form")) return !1;
				i.event.add(this, "click._submit keypress._submit", function(n) {
					var u = n.target,
						r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
					r && !i._data(r, "_submit_attached") && (i.event.add(r, "submit._submit", function(n) {
						n._submit_bubble = !0
					}), i._data(r, "_submit_attached", !0))
				})
			},
			postDispatch: function(n) {
				n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
			},
			teardown: function() {
				if(i.nodeName(this, "form")) return !1;
				i.event.remove(this, "._submit")
			}
		}), i.support.changeBubbles || (i.event.special.change = {
			setup: function() {
				if(ti.test(this.nodeName)) return(this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
					n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
				}), i.event.add(this, "click._change", function(n) {
					this._just_changed && !n.isTrigger && (this._just_changed = !1), i.event.simulate("change", this, n, !0)
				})), !1;
				i.event.add(this, "beforeactivate._change", function(n) {
					var t = n.target;
					ti.test(t.nodeName) && !i._data(t, "_change_attached") && (i.event.add(t, "change._change", function(n) {
						this.parentNode && !n.isSimulated && !n.isTrigger && i.event.simulate("change", this.parentNode, n, !0)
					}), i._data(t, "_change_attached", !0))
				})
			},
			handle: function(n) {
				var t = n.target;
				if(this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
			},
			teardown: function() {
				return i.event.remove(this, "._change"), !ti.test(this.nodeName)
			}
		}), i.support.focusinBubbles || i.each({
			focus: "focusin",
			blur: "focusout"
		}, function(n, t) {
			var u = 0,
				f = function(n) {
					i.event.simulate(t, n.target, i.event.fix(n), !0)
				};
			i.event.special[t] = {
				setup: function() {
					u++ == 0 && r.addEventListener(n, f, !0)
				},
				teardown: function() {
					--u == 0 && r.removeEventListener(n, f, !0)
				}
			}
		}), i.fn.extend({
			on: function(n, r, u, f, e) {
				var o, s;
				if(typeof n == "object") {
					typeof r != "string" && (u = u || r, r = t);
					for(s in n) this.on(s, r, u, n[s], e);
					return this
				}
				if(u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = y;
				else if(!f) return this;
				return e === 1 && (o = f, f = function(n) {
					return i().off(n), o.apply(this, arguments)
				}, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() {
					i.event.add(this, n, f, u, r)
				})
			},
			one: function(n, t, i, r) {
				return this.on(n, t, i, r, 1)
			},
			off: function(n, r, u) {
				var f, e;
				if(n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
				if(typeof n == "object") {
					for(e in n) this.off(e, r, n[e]);
					return this
				}
				return(r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = y), this.each(function() {
					i.event.remove(this, n, u, r)
				})
			},
			bind: function(n, t, i) {
				return this.on(n, null, t, i)
			},
			unbind: function(n, t) {
				return this.off(n, null, t)
			},
			live: function(n, t, r) {
				return i(this.context).on(n, this.selector, t, r), this
			},
			die: function(n, t) {
				return i(this.context).off(n, this.selector || "**", t), this
			},
			delegate: function(n, t, i, r) {
				return this.on(t, n, i, r)
			},
			undelegate: function(n, t, i) {
				return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
			},
			trigger: function(n, t) {
				return this.each(function() {
					i.event.trigger(n, t, this)
				})
			},
			triggerHandler: function(n, t) {
				if(this[0]) return i.event.trigger(n, t, this[0], !0)
			},
			toggle: function(n) {
				var t = arguments,
					u = n.guid || i.guid++,
					r = 0,
					f = function(u) {
						var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
						return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), t[f].apply(this, arguments) || !1
					};
				for(f.guid = u; r < t.length;) t[r++].guid = u;
				return this.click(f)
			},
			hover: function(n, t) {
				return this.mouseenter(n).mouseleave(t || n)
			}
		}), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
			i.fn[t] = function(n, i) {
				return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
			}, yo.test(t) && (i.event.fixHooks[t] = i.event.keyHooks), vo.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
		}),
		function(n, t) {
			function r(n, t, i, r) {
				i = i || [], t = t || h;
				var e, u, o, f, s = t.nodeType;
				if(!n || typeof n != "string") return i;
				if(s !== 1 && s !== 9) return [];
				if(o = tt(t), !o && !r && (e = wi.exec(n)))
					if(f = e[1]) {
						if(s === 9) {
							if(u = t.getElementById(f), !u || !u.parentNode) return i;
							if(u.id === f) return i.push(u), i
						} else if(t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && hi(t, u) && u.id === f) return i.push(u), i
					} else {
						if(e[2]) return w.apply(i, p.call(t.getElementsByTagName(n), 0)), i;
						if((f = e[3]) && ri && t.getElementsByClassName) return w.apply(i, p.call(t.getElementsByClassName(f), 0)), i
					}
				return bt(n.replace(g, "$1"), t, i, r, o)
			}

			function b(n) {
				return function(t) {
					var i = t.nodeName.toLowerCase();
					return i === "input" && t.type === n
				}
			}

			function ni(n) {
				return function(t) {
					var i = t.nodeName.toLowerCase();
					return(i === "input" || i === "button") && t.type === n
				}
			}

			function y(n) {
				return s(function(t) {
					return t = +t, s(function(i, r) {
						for(var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
					})
				})
			}

			function ft(n, t, i) {
				if(n === t) return i;
				for(var r = n.nextSibling; r;) {
					if(r === t) return -1;
					r = r.nextSibling
				}
				return 1
			}

			function rt(n, t) {
				var o, f, h, s, i, c, l, a = ei[e][n + " "];
				if(a) return t ? 0 : a.slice(0);
				for(i = n, c = [], l = u.preFilter; i;) {
					(!o || (f = di.exec(i))) && (f && (i = i.slice(f[0].length) || i), c.push(h = [])), o = !1, (f = ki.exec(i)) && (h.push(o = new fi(f.shift())), i = i.slice(o.length), o.type = f[0].replace(g, " "));
					for(s in u.filter)(f = et[s].exec(i)) && (!l[s] || (f = l[s](f))) && (h.push(o = new fi(f.shift())), i = i.slice(o.length), o.type = s, o.matches = f);
					if(!o) break
				}
				return t ? i.length : i ? r.error(n) : ei(n, c).slice(0)
			}

			function vt(n, t, i) {
				var r = t.dir,
					u = i && t.dir === "parentNode",
					f = pi++;
				return t.first ? function(t, i, f) {
					while(t = t[r])
						if(u || t.nodeType === 1) return n(t, i, f)
				} : function(t, i, o) {
					if(o) {
						while(t = t[r])
							if((u || t.nodeType === 1) && n(t, i, o)) return t
					} else
						for(var s, h = it + " " + f + " ", c = h + pt; t = t[r];)
							if(u || t.nodeType === 1) {
								if((s = t[e]) === c) return t.sizset;
								if(typeof s == "string" && s.indexOf(h) === 0) {
									if(t.sizset) return t
								} else {
									if(t[e] = c, n(t, i, o)) return t.sizset = !0, t;
									t.sizset = !1
								}
							}
				}
			}

			function wt(n) {
				return n.length > 1 ? function(t, i, r) {
					for(var u = n.length; u--;)
						if(!n[u](t, i, r)) return !1;
					return !0
				} : n[0]
			}

			function d(n, t, i, r, u) {
				for(var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
				return o
			}

			function kt(n, t, i, r, u, f) {
				return r && !r[e] && (r = kt(r)), u && !u[e] && (u = kt(u, f)), s(function(f, e, o, s) {
					var l, c, a, p = [],
						y = [],
						b = e.length,
						k = f || rr(t || "*", o.nodeType ? [o] : o, []),
						v = n && (f || !t) ? d(k, p, n, o, s) : k,
						h = i ? u || (f ? n : b || r) ? [] : e : v;
					if(i && i(v, h, o, s), r)
						for(l = d(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
					if(f) {
						if(u || n) {
							if(u) {
								for(l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
								u(null, h = [], l, s)
							}
							for(c = h.length; c--;)(a = h[c]) && (l = u ? ht.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
						}
					} else h = d(h === e ? h.splice(b, h.length) : h), u ? u(null, e, h, s) : w.apply(e, h)
				})
			}

			function dt(n) {
				for(var s, r, i, o = n.length, h = u.relative[n[0].type], c = h || u.relative[" "], t = h ? 1 : 0, l = vt(function(n) {
						return n === s
					}, c, !0), a = vt(function(n) {
						return ht.call(s, n) > -1
					}, c, !0), f = [function(n, t, i) {
						return !h && (i || t !== ut) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
					}]; t < o; t++)
					if(r = u.relative[n[t].type]) f = [vt(wt(f), r)];
					else {
						if(r = u.filter[n[t].type].apply(null, n[t].matches), r[e]) {
							for(i = ++t; i < o; i++)
								if(u.relative[n[i].type]) break;
							return kt(t > 1 && wt(f), t > 1 && n.slice(0, t - 1).join("").replace(g, "$1"), r, t < i && dt(n.slice(t, i)), i < o && dt(n = n.slice(i)), i < o && n.join(""))
						}
						f.push(r)
					}
				return wt(f)
			}

			function ur(n, t) {
				var f = t.length > 0,
					e = n.length > 0,
					i = function(o, s, c, l, a) {
						var y, b, k, p = [],
							g = 0,
							v = "0",
							nt = o && [],
							tt = a != null,
							rt = ut,
							et = o || e && u.find.TAG("*", a && s.parentNode || s),
							ft = it += rt == null ? 1 : Math.E;
						for(tt && (ut = s !== h && s, pt = i.el);
							(y = et[v]) != null; v++) {
							if(e && y) {
								for(b = 0; k = n[b]; b++)
									if(k(y, s, c)) {
										l.push(y);
										break
									}
								tt && (it = ft, pt = ++i.el)
							}
							f && ((y = !k && y) && g--, o && nt.push(y))
						}
						if(g += v, f && v !== g) {
							for(b = 0; k = t[b]; b++) k(nt, p, s, c);
							if(o) {
								if(g > 0)
									while(v--) !nt[v] && !p[v] && (p[v] = tr.call(l));
								p = d(p)
							}
							w.apply(l, p), tt && !o && p.length > 0 && g + t.length > 1 && r.uniqueSort(l)
						}
						return tt && (it = ft, ut = rt), nt
					};
				return i.el = 0, f ? s(i) : i
			}

			function rr(n, t, i) {
				for(var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
				return i
			}

			function bt(n, t, i, r, f) {
				var o, e, s, c, l, h = rt(n),
					v = h.length;
				if(!r && h.length === 1) {
					if(e = h[0] = h[0].slice(0), e.length > 2 && (s = e[0]).type === "ID" && t.nodeType === 9 && !f && u.relative[e[1].type]) {
						if(t = u.find.ID(s.matches[0].replace(a, ""), t, f)[0], !t) return i;
						n = n.slice(e.shift().length)
					}
					for(o = et.POS.test(n) ? -1 : e.length - 1; o >= 0; o--) {
						if(s = e[o], u.relative[c = s.type]) break;
						if((l = u.find[c]) && (r = l(s.matches[0].replace(a, ""), ct.test(e[0].type) && t.parentNode || t, f))) {
							if(e.splice(o, 1), n = r.length && e.join(""), !n) return w.apply(i, p.call(r, 0)), i;
							break
						}
					}
				}
				return at(n, h)(r, t, f, i, ct.test(n)), i
			}

			function si() {}
			var pt, yt, u, nt, tt, hi, at, lt, k, ut, ui = !0,
				c = "undefined",
				e = ("sizcache" + Math.random()).replace(".", ""),
				fi = String,
				h = n.document,
				o = h.documentElement,
				it = 0,
				pi = 0,
				tr = [].pop,
				w = [].push,
				p = [].slice,
				ht = [].indexOf || function(n) {
					for(var t = 0, i = this.length; t < i; t++)
						if(this[t] === n) return t;
					return -1
				},
				s = function(n, t) {
					return n[e] = t == null || t, n
				},
				ot = function() {
					var n = {},
						t = [];
					return s(function(i, r) {
						return t.push(i) > u.cacheLength && delete n[t.shift()], n[i + " "] = r
					}, n)
				},
				oi = ot(),
				ei = ot(),
				gt = ot(),
				f = "[\\x20\\t\\r\\n\\f]",
				v = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
				nr = v.replace("w", "w#"),
				gi = "([*^$|!~]?=)",
				ii = "\\[" + f + "*(" + v + ")" + f + "*(?:" + gi + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nr + ")|)|)" + f + "*\\]",
				st = ":(" + v + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + ii + ")|[^:]|\\\\.)*|.*))\\)|)",
				ti = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)",
				g = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
				di = new RegExp("^" + f + "*," + f + "*"),
				ki = new RegExp("^" + f + "*([\\x20\\t\\r\\n\\f>+~])" + f + "*"),
				bi = new RegExp(st),
				wi = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
				er = /^:not/,
				ct = /[\x20\t\r\n\f]*[+~]/,
				fr = /:not\($/,
				yi = /h\d/i,
				ai = /input|select|textarea|button/i,
				a = /\\(?!\\)/g,
				et = {
					ID: new RegExp("^#(" + v + ")"),
					CLASS: new RegExp("^\\.(" + v + ")"),
					NAME: new RegExp("^\\[name=['\"]?(" + v + ")['\"]?\\]"),
					TAG: new RegExp("^(" + v.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ii),
					PSEUDO: new RegExp("^" + st),
					POS: new RegExp(ti, "i"),
					CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
					needsContext: new RegExp("^" + f + "*[>+~]|" + ti, "i")
				},
				l = function(n) {
					var t = h.createElement("div");
					try {
						return n(t)
					} catch(i) {
						return !1
					} finally {
						t = null
					}
				},
				ci = l(function(n) {
					return n.appendChild(h.createComment("")), !n.getElementsByTagName("*").length
				}),
				li = l(function(n) {
					return n.innerHTML = "<a href='#'></a>", n.firstChild && typeof n.firstChild.getAttribute !== c && n.firstChild.getAttribute("href") === "#"
				}),
				vi = l(function(n) {
					n.innerHTML = "<select></select>";
					var t = typeof n.lastChild.getAttribute("multiple");
					return t !== "boolean" && t !== "string"
				}),
				ri = l(function(n) {
					return n.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !n.getElementsByClassName || !n.getElementsByClassName("e").length ? !1 : (n.lastChild.className = "e", n.getElementsByClassName("e").length === 2)
				}),
				ir = l(function(n) {
					n.id = e + 0, n.innerHTML = "<a name='" + e + "'></a><div name='" + e + "'></div>", o.insertBefore(n, o.firstChild);
					var t = h.getElementsByName && h.getElementsByName(e).length === 2 + h.getElementsByName(e + 0).length;
					return yt = !h.getElementById(e), o.removeChild(n), t
				});
			try {
				p.call(o.childNodes, 0)[0].nodeType
			} catch(or) {
				p = function(n) {
					for(var t, i = []; t = this[n]; n++) i.push(t);
					return i
				}
			}
			r.matches = function(n, t) {
				return r(n, null, null, t)
			}, r.matchesSelector = function(n, t) {
				return r(t, null, null, [n]).length > 0
			}, nt = r.getText = function(n) {
				var r, i = "",
					u = 0,
					t = n.nodeType;
				if(t) {
					if(t === 1 || t === 9 || t === 11) {
						if(typeof n.textContent == "string") return n.textContent;
						for(n = n.firstChild; n; n = n.nextSibling) i += nt(n)
					} else if(t === 3 || t === 4) return n.nodeValue
				} else
					for(; r = n[u]; u++) i += nt(r);
				return i
			}, tt = r.isXML = function(n) {
				var t = n && (n.ownerDocument || n).documentElement;
				return t ? t.nodeName !== "HTML" : !1
			}, hi = r.contains = o.contains ? function(n, t) {
				var r = n.nodeType === 9 ? n.documentElement : n,
					i = t && t.parentNode;
				return n === i || !!(i && i.nodeType === 1 && r.contains && r.contains(i))
			} : o.compareDocumentPosition ? function(n, t) {
				return t && !!(n.compareDocumentPosition(t) & 16)
			} : function(n, t) {
				while(t = t.parentNode)
					if(t === n) return !0;
				return !1
			}, r.attr = function(n, t) {
				var i, r = tt(n);
				return r || (t = t.toLowerCase()), (i = u.attrHandle[t]) ? i(n) : r || vi ? n.getAttribute(t) : (i = n.getAttributeNode(t), i ? typeof n[t] == "boolean" ? n[t] ? t : null : i.specified ? i.value : null : null)
			}, u = r.selectors = {
				cacheLength: 50,
				createPseudo: s,
				match: et,
				attrHandle: li ? {} : {
					href: function(n) {
						return n.getAttribute("href", 2)
					},
					type: function(n) {
						return n.getAttribute("type")
					}
				},
				find: {
					ID: yt ? function(n, t, i) {
						if(typeof t.getElementById !== c && !i) {
							var r = t.getElementById(n);
							return r && r.parentNode ? [r] : []
						}
					} : function(n, i, r) {
						if(typeof i.getElementById !== c && !r) {
							var u = i.getElementById(n);
							return u ? u.id === n || typeof u.getAttributeNode !== c && u.getAttributeNode("id").value === n ? [u] : t : []
						}
					},
					TAG: ci ? function(n, t) {
						if(typeof t.getElementsByTagName !== c) return t.getElementsByTagName(n)
					} : function(n, t) {
						var f = t.getElementsByTagName(n),
							i, r, u;
						if(n === "*") {
							for(r = [], u = 0; i = f[u]; u++) i.nodeType === 1 && r.push(i);
							return r
						}
						return f
					},
					NAME: ir && function(n, t) {
						if(typeof t.getElementsByName !== c) return t.getElementsByName(name)
					},
					CLASS: ri && function(n, t, i) {
						if(typeof t.getElementsByClassName !== c && !i) return t.getElementsByClassName(n)
					}
				},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(n) {
						return n[1] = n[1].replace(a, ""), n[3] = (n[4] || n[5] || "").replace(a, ""), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
					},
					CHILD: function(n) {
						return n[1] = n[1].toLowerCase(), n[1] === "nth" ? (n[2] || r.error(n[0]), n[3] = +(n[3] ? n[4] + (n[5] || 1) : 2 * (n[2] === "even" || n[2] === "odd")), n[4] = +(n[6] + n[7] || n[2] === "odd")) : n[2] && r.error(n[0]), n
					},
					PSEUDO: function(n) {
						var t, i;
						return et.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[3] : (t = n[4]) && (bi.test(t) && (i = rt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (t = t.slice(0, i), n[0] = n[0].slice(0, i)), n[2] = t), n.slice(0, 3))
					}
				},
				filter: {
					ID: yt ? function(n) {
						return n = n.replace(a, ""),
							function(t) {
								return t.getAttribute("id") === n
							}
					} : function(n) {
						return n = n.replace(a, ""),
							function(t) {
								var i = typeof t.getAttributeNode !== c && t.getAttributeNode("id");
								return i && i.value === n
							}
					},
					TAG: function(n) {
						return n === "*" ? function() {
							return !0
						} : (n = n.replace(a, "").toLowerCase(), function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === n
						})
					},
					CLASS: function(n) {
						var t = oi[e][n + " "];
						return t || (t = new RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && oi(n, function(n) {
							return t.test(n.className || typeof n.getAttribute !== c && n.getAttribute("class") || "")
						})
					},
					ATTR: function(n, t, i) {
						return function(u) {
							var e = r.attr(u, n);
							return e == null ? t === "!=" : t ? (e += "", t === "=" ? e === i : t === "!=" ? e !== i : t === "^=" ? i && e.indexOf(i) === 0 : t === "*=" ? i && e.indexOf(i) > -1 : t === "$=" ? i && e.substr(e.length - i.length) === i : t === "~=" ? (" " + e + " ").indexOf(i) > -1 : t === "|=" ? e === i || e.substr(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD: function(n, t, i, r) {
						return n === "nth" ? function(n) {
							var t, u, f = n.parentNode;
							if(i === 1 && r === 0) return !0;
							if(f)
								for(u = 0, t = f.firstChild; t; t = t.nextSibling)
									if(t.nodeType === 1 && (u++, n === t)) break;
							return u -= r, u === i || u % i == 0 && u / i >= 0
						} : function(t) {
							var i = t;
							switch(n) {
								case "only":
								case "first":
									while(i = i.previousSibling)
										if(i.nodeType === 1) return !1;
									if(n === "first") return !0;
									i = t;
								case "last":
									while(i = i.nextSibling)
										if(i.nodeType === 1) return !1;
									return !0
							}
						}
					},
					PSEUDO: function(n, t) {
						var f, i = u.pseudos[n] || u.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
						return i[e] ? i(t) : i.length > 1 ? (f = [n, n, "", t], u.setFilters.hasOwnProperty(n.toLowerCase()) ? s(function(n, r) {
							for(var u, f = i(n, t), e = f.length; e--;) u = ht.call(n, f[e]), n[u] = !(r[u] = f[e])
						}) : function(n) {
							return i(n, 0, f)
						}) : i
					}
				},
				pseudos: {
					not: s(function(n) {
						var i = [],
							r = [],
							t = at(n.replace(g, "$1"));
						return t[e] ? s(function(n, i, r, u) {
							for(var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
						}) : function(n, u, f) {
							return i[0] = n, t(i, null, f, r), !r.pop()
						}
					}),
					has: s(function(n) {
						return function(t) {
							return r(n, t).length > 0
						}
					}),
					contains: s(function(n) {
						return function(t) {
							return(t.textContent || t.innerText || nt(t)).indexOf(n) > -1
						}
					}),
					enabled: function(n) {
						return n.disabled === !1
					},
					disabled: function(n) {
						return n.disabled === !0
					},
					checked: function(n) {
						var t = n.nodeName.toLowerCase();
						return t === "input" && !!n.checked || t === "option" && !!n.selected
					},
					selected: function(n) {
						return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
					},
					parent: function(n) {
						return !u.pseudos.empty(n)
					},
					empty: function(n) {
						var t;
						for(n = n.firstChild; n;) {
							if(n.nodeName > "@" || (t = n.nodeType) === 3 || t === 4) return !1;
							n = n.nextSibling
						}
						return !0
					},
					header: function(n) {
						return yi.test(n.nodeName)
					},
					text: function(n) {
						var t, i;
						return n.nodeName.toLowerCase() === "input" && (t = n.type) === "text" && ((i = n.getAttribute("type")) == null || i.toLowerCase() === t)
					},
					radio: b("radio"),
					checkbox: b("checkbox"),
					file: b("file"),
					password: b("password"),
					image: b("image"),
					submit: ni("submit"),
					reset: ni("reset"),
					button: function(n) {
						var t = n.nodeName.toLowerCase();
						return t === "input" && n.type === "button" || t === "button"
					},
					input: function(n) {
						return ai.test(n.nodeName)
					},
					focus: function(n) {
						var t = n.ownerDocument;
						return n === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
					},
					active: function(n) {
						return n === n.ownerDocument.activeElement
					},
					first: y(function() {
						return [0]
					}),
					last: y(function(n, t) {
						return [t - 1]
					}),
					eq: y(function(n, t, i) {
						return [i < 0 ? i + t : i]
					}),
					even: y(function(n, t) {
						for(var i = 0; i < t; i += 2) n.push(i);
						return n
					}),
					odd: y(function(n, t) {
						for(var i = 1; i < t; i += 2) n.push(i);
						return n
					}),
					lt: y(function(n, t, i) {
						for(var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
						return n
					}),
					gt: y(function(n, t, i) {
						for(var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
						return n
					})
				}
			}, lt = o.compareDocumentPosition ? function(n, t) {
				return n === t ? (k = !0, 0) : (!n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition : n.compareDocumentPosition(t) & 4) ? -1 : 1
			} : function(n, t) {
				var i;
				if(n === t) return k = !0, 0;
				if(n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
				var e, h, u = [],
					f = [],
					o = n.parentNode,
					s = t.parentNode,
					r = o;
				if(o === s) return ft(n, t);
				if(!o) return -1;
				if(!s) return 1;
				while(r) u.unshift(r), r = r.parentNode;
				for(r = s; r;) f.unshift(r), r = r.parentNode;
				for(e = u.length, h = f.length, i = 0; i < e && i < h; i++)
					if(u[i] !== f[i]) return ft(u[i], f[i]);
				return i === e ? ft(n, f[i], -1) : ft(u[i], t, 1)
			}, [0, 0].sort(lt), ui = !k, r.uniqueSort = function(n) {
				var r, u = [],
					t = 1,
					i = 0;
				if(k = ui, n.sort(lt), k) {
					for(; r = n[t]; t++) r === n[t - 1] && (i = u.push(t));
					while(i--) n.splice(u[i], 1)
				}
				return n
			}, r.error = function(n) {
				throw new Error("Syntax error, unrecognized expression: " + n);
			}, at = r.compile = function(n, t) {
				var r, u = [],
					f = [],
					i = gt[e][n + " "];
				if(!i) {
					for(t || (t = rt(n)), r = t.length; r--;) i = dt(t[r]), i[e] ? u.push(i) : f.push(i);
					i = gt(n, ur(f, u))
				}
				return i
			}, h.querySelectorAll && function() {
				var u, s = bt,
					h = /'|\\/g,
					c = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
					n = [":focus"],
					t = [":active"],
					i = o.matchesSelector || o.mozMatchesSelector || o.webkitMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
				l(function(t) {
					t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || n.push("\\[" + f + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || n.push(":checked")
				}), l(function(t) {
					t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && n.push("[*^$]=" + f + "*(?:\"\"|'')"), t.innerHTML = "<input type='hidden'/>", t.querySelectorAll(":enabled").length || n.push(":enabled", ":disabled")
				}), n = new RegExp(n.join("|")), bt = function(t, i, r, u, f) {
					if(!u && !f && !n.test(t)) {
						var o, l, a = !0,
							c = e,
							y = i,
							v = i.nodeType === 9 && t;
						if(i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
							for(o = rt(t), (a = i.getAttribute("id")) ? c = a.replace(h, "\\$&") : i.setAttribute("id", c), c = "[id='" + c + "'] ", l = o.length; l--;) o[l] = c + o[l].join("");
							y = ct.test(t) && i.parentNode || i, v = o.join(",")
						}
						if(v) try {
							return w.apply(r, p.call(y.querySelectorAll(v), 0)), r
						} catch(b) {} finally {
							a || i.removeAttribute("id")
						}
					}
					return s(t, i, r, u, f)
				}, i && (l(function(n) {
					u = i.call(n, "div");
					try {
						i.call(n, "[test!='']:sizzle"), t.push("!=", st)
					} catch(r) {}
				}), t = new RegExp(t.join("|")), r.matchesSelector = function(f, e) {
					if(e = e.replace(c, "='$1']"), !tt(f) && !t.test(e) && !n.test(e)) try {
						var o = i.call(f, e);
						if(o || u || f.document && f.document.nodeType !== 11) return o
					} catch(s) {}
					return r(e, null, null, [f]).length > 0
				})
			}(), u.pseudos.nth = u.pseudos.eq, u.filters = si.prototype = u.pseudos, u.setFilters = new si, r.attr = i.attr, i.find = r, i.expr = r.selectors, i.expr[":"] = i.expr.pseudos, i.unique = r.uniqueSort, i.text = r.getText, i.isXMLDoc = r.isXML, i.contains = r.contains
		}(n);
	var ao = /Until$/,
		lo = /^(?:parents|prev(?:Until|All))/,
		co = /^.[^:#\[\.,]*$/,
		ai = i.expr.match.needsContext,
		ho = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	i.fn.extend({
		find: function(n) {
			var t, f, o, u, e, r, s = this;
			if(typeof n != "string") return i(n).filter(function() {
				for(t = 0, f = s.length; t < f; t++)
					if(i.contains(s[t], this)) return !0
			});
			for(r = this.pushStack("", "find", n), t = 0, f = this.length; t < f; t++)
				if(o = r.length, i.find(n, this[t], r), t > 0)
					for(u = o; u < r.length; u++)
						for(e = 0; e < o; e++)
							if(r[e] === r[u]) {
								r.splice(u--, 1);
								break
							}
			return r
		},
		has: function(n) {
			var t, r = i(n, this),
				u = r.length;
			return this.filter(function() {
				for(t = 0; t < u; t++)
					if(i.contains(this, r[t])) return !0
			})
		},
		not: function(n) {
			return this.pushStack(tu(this, n, !1), "not", n)
		},
		filter: function(n) {
			return this.pushStack(tu(this, n, !0), "filter", n)
		},
		is: function(n) {
			return !!n && (typeof n == "string" ? ai.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
		},
		closest: function(n, t) {
			for(var r, f = 0, o = this.length, u = [], e = ai.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
				for(r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11;) {
					if(e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
						u.push(r);
						break
					}
					r = r.parentNode
				}
			return u = u.length > 1 ? i.unique(u) : u, this.pushStack(u, "closest", n)
		},
		index: function(n) {
			return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(n, t) {
			var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
				r = i.merge(this.get(), u);
			return this.pushStack(d(u[0]) || d(r[0]) ? r : i.unique(r))
		},
		addBack: function(n) {
			return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
		}
	}), i.fn.andSelf = i.fn.addBack, i.each({
		parent: function(n) {
			var t = n.parentNode;
			return t && t.nodeType !== 11 ? t : null
		},
		parents: function(n) {
			return i.dir(n, "parentNode")
		},
		parentsUntil: function(n, t, r) {
			return i.dir(n, "parentNode", r)
		},
		next: function(n) {
			return dr(n, "nextSibling")
		},
		prev: function(n) {
			return dr(n, "previousSibling")
		},
		nextAll: function(n) {
			return i.dir(n, "nextSibling")
		},
		prevAll: function(n) {
			return i.dir(n, "previousSibling")
		},
		nextUntil: function(n, t, r) {
			return i.dir(n, "nextSibling", r)
		},
		prevUntil: function(n, t, r) {
			return i.dir(n, "previousSibling", r)
		},
		siblings: function(n) {
			return i.sibling((n.parentNode || {}).firstChild, n)
		},
		children: function(n) {
			return i.sibling(n.firstChild)
		},
		contents: function(n) {
			return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
		}
	}, function(n, t) {
		i.fn[n] = function(r, u) {
			var f = i.map(this, t, r);
			return ao.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !ho[n] ? i.unique(f) : f, this.length > 1 && lo.test(n) && (f = f.reverse()), this.pushStack(f, n, o.call(arguments).join(","))
		}
	}), i.extend({
		filter: function(n, t, r) {
			return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
		},
		dir: function(n, r, u) {
			for(var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
			return e
		},
		sibling: function(n, t) {
			for(var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
			return i
		}
	});
	var yi = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		so = / jQuery\d+="(?:null|\d+)"/g,
		gt = /^\s+/,
		wi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		hr = /<([\w:]+)/,
		po = /<tbody/i,
		eo = /<|&#?\w+;/,
		uo = /<(?:script|style|link)/i,
		ro = /<(?:script|object|embed|option|style)/i,
		at = new RegExp("<(?:" + yi + ")[\\s/>]", "i"),
		ui = /^(?:checkbox|radio)$/,
		gi = /checked\s*(?:[^=]|=\s*.checked.)/i,
		no = /\/(java|ecma)script/i,
		ge = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
		e = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		rr = uu(r),
		yt = rr.appendChild(r.createElement("div"));
	e.optgroup = e.option, e.tbody = e.tfoot = e.colgroup = e.caption = e.thead, e.th = e.td, i.support.htmlSerialize || (e._default = [1, "X<div>", "</div>"]), i.fn.extend({
			text: function(n) {
				return i.access(this, function(n) {
					return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
				}, null, n, arguments.length)
			},
			wrapAll: function(n) {
				if(i.isFunction(n)) return this.each(function(t) {
					i(this).wrapAll(n.call(this, t))
				});
				if(this[0]) {
					var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
						for(var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
						return n
					}).append(this)
				}
				return this
			},
			wrapInner: function(n) {
				return i.isFunction(n) ? this.each(function(t) {
					i(this).wrapInner(n.call(this, t))
				}) : this.each(function() {
					var t = i(this),
						r = t.contents();
					r.length ? r.wrapAll(n) : t.append(n)
				})
			},
			wrap: function(n) {
				var t = i.isFunction(n);
				return this.each(function(r) {
					i(this).wrapAll(t ? n.call(this, r) : n)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
				}).end()
			},
			append: function() {
				return this.domManip(arguments, !0, function(n) {
					(this.nodeType === 1 || this.nodeType === 11) && this.appendChild(n)
				})
			},
			prepend: function() {
				return this.domManip(arguments, !0, function(n) {
					(this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(n, this.firstChild)
				})
			},
			before: function() {
				if(!d(this[0])) return this.domManip(arguments, !1, function(n) {
					this.parentNode.insertBefore(n, this)
				});
				if(arguments.length) {
					var n = i.clean(arguments);
					return this.pushStack(i.merge(n, this), "before", this.selector)
				}
			},
			after: function() {
				if(!d(this[0])) return this.domManip(arguments, !1, function(n) {
					this.parentNode.insertBefore(n, this.nextSibling)
				});
				if(arguments.length) {
					var n = i.clean(arguments);
					return this.pushStack(i.merge(this, n), "after", this.selector)
				}
			},
			remove: function(n, t) {
				for(var r, u = 0;
					(r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (!t && r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
				return this
			},
			empty: function() {
				for(var n, t = 0;
					(n = this[t]) != null; t++)
					for(n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
				return this
			},
			clone: function(n, t) {
				return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
					return i.clone(this, n, t)
				})
			},
			html: function(n) {
				return i.access(this, function(n) {
					var r = this[0] || {},
						u = 0,
						f = this.length;
					if(n === t) return r.nodeType === 1 ? r.innerHTML.replace(so, "") : t;
					if(typeof n == "string" && !uo.test(n) && (i.support.htmlSerialize || !at.test(n)) && (i.support.leadingWhitespace || !gt.test(n)) && !e[(hr.exec(n) || ["", ""])[1].toLowerCase()]) {
						n = n.replace(wi, "<$1></$2>");
						try {
							for(; u < f; u++) r = this[u] || {}, r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), r.innerHTML = n);
							r = 0
						} catch(o) {}
					}
					r && this.empty().append(n)
				}, null, n, arguments.length)
			},
			replaceWith: function(n) {
				return d(this[0]) ? this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this : i.isFunction(n) ? this.each(function(t) {
					var r = i(this),
						u = r.html();
					r.replaceWith(n.call(this, t, u))
				}) : (typeof n != "string" && (n = i(n).detach()), this.each(function() {
					var t = this.nextSibling,
						r = this.parentNode;
					i(this).remove(), t ? i(t).before(n) : i(r).append(n)
				}))
			},
			detach: function(n) {
				return this.remove(n, !0)
			},
			domManip: function(n, r, u) {
				n = [].concat.apply([], n);
				var h, o, f, a, e = 0,
					s = n[0],
					c = [],
					l = this.length;
				if(!i.support.checkClone && l > 1 && typeof s == "string" && gi.test(s)) return this.each(function() {
					i(this).domManip(n, r, u)
				});
				if(i.isFunction(s)) return this.each(function(f) {
					var e = i(this);
					n[0] = s.call(this, f, r ? e.html() : t), e.domManip(n, r, u)
				});
				if(this[0]) {
					if(h = i.buildFragment(n, this, c), f = h.fragment, o = f.firstChild, f.childNodes.length === 1 && (f = o), o)
						for(r = r && i.nodeName(o, "tr"), a = h.cacheable || l - 1; e < l; e++) u.call(r && i.nodeName(this[e], "table") ? ff(this[e], "tbody") : this[e], e === a ? f : i.clone(f, !0, !0));
					f = o = null, c.length && i.each(c, function(n, t) {
						t.src ? i.ajax ? i.ajax({
							url: t.src,
							type: "GET",
							dataType: "script",
							async: !1,
							global: !1,
							throws: !0
						}) : i.error("no ajax") : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ge, "")), t.parentNode && t.parentNode.removeChild(t)
					})
				}
				return this
			}
		}), i.buildFragment = function(n, u, f) {
			var o, s, h, e = n[0];
			return u = u || r, u = !u.nodeType && u[0] || u, u = u.ownerDocument || u, n.length === 1 && typeof e == "string" && e.length < 512 && u === r && e.charAt(0) === "<" && !ro.test(e) && (i.support.checkClone || !gi.test(e)) && (i.support.html5Clone || !at.test(e)) && (s = !0, o = i.fragments[e], h = o !== t), o || (o = u.createDocumentFragment(), i.clean(n, u, o, f), s && (i.fragments[e] = h && o)), {
				fragment: o,
				cacheable: s
			}
		}, i.fragments = {}, i.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(n, t) {
			i.fn[n] = function(r) {
				var o, u = 0,
					s = [],
					f = i(r),
					h = f.length,
					e = this.length === 1 && this[0].parentNode;
				if((e == null || e && e.nodeType === 11 && e.childNodes.length === 1) && h === 1) return f[t](this[0]), this;
				for(; u < h; u++) o = (u > 0 ? this.clone(!0) : this).get(), i(f[u])[t](o), s = s.concat(o);
				return this.pushStack(s, n, f.selector)
			}
		}), i.extend({
			clone: function(n, t, r) {
				var f, o, u, e;
				if(i.support.html5Clone || i.isXMLDoc(n) || !at.test("<" + n.nodeName + ">") ? e = n.cloneNode(!0) : (yt.innerHTML = n.outerHTML, yt.removeChild(e = yt.firstChild)), (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
					for(vi(n, e), f = et(n), o = et(e), u = 0; f[u]; ++u) o[u] && vi(f[u], o[u]);
				if(t && (ou(n, e), r))
					for(f = et(n), o = et(e), u = 0; f[u]; ++u) ou(f[u], o[u]);
				return f = o = null, e
			},
			clean: function(n, t, u, f) {
				var h, l, o, k, v, d, s, p, a, g, w, b, y = t === r && rr,
					c = [];
				for(t && typeof t.createDocumentFragment != "undefined" || (t = r), h = 0;
					(o = n[h]) != null; h++)
					if(typeof o == "number" && (o += ""), o) {
						if(typeof o == "string")
							if(eo.test(o)) {
								for(y = y || uu(t), s = t.createElement("div"), y.appendChild(s), o = o.replace(wi, "<$1></$2>"), k = (hr.exec(o) || ["", ""])[1].toLowerCase(), v = e[k] || e._default, d = v[0], s.innerHTML = v[1] + o + v[2]; d--;) s = s.lastChild;
								if(!i.support.tbody)
									for(p = po.test(o), a = k === "table" && !p ? s.firstChild && s.firstChild.childNodes : v[1] === "<table>" && !p ? s.childNodes : [], l = a.length - 1; l >= 0; --l) i.nodeName(a[l], "tbody") && !a[l].childNodes.length && a[l].parentNode.removeChild(a[l]);
								!i.support.leadingWhitespace && gt.test(o) && s.insertBefore(t.createTextNode(gt.exec(o)[0]), s.firstChild), o = s.childNodes, s.parentNode.removeChild(s)
							} else o = t.createTextNode(o);
						o.nodeType ? c.push(o) : i.merge(c, o)
					}
				if(s && (o = s = y = null), !i.support.appendChecked)
					for(h = 0;
						(o = c[h]) != null; h++) i.nodeName(o, "input") ? pi(o) : typeof o.getElementsByTagName != "undefined" && i.grep(o.getElementsByTagName("input"), pi);
				if(u)
					for(w = function(n) {
							if(!n.type || no.test(n.type)) return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n)
						}, h = 0;
						(o = c[h]) != null; h++) i.nodeName(o, "script") && w(o) || (u.appendChild(o), typeof o.getElementsByTagName != "undefined" && (b = i.grep(i.merge([], o.getElementsByTagName("script")), w), c.splice.apply(c, [h + 1, 0].concat(b)), h += b.length));
				return c
			},
			cleanData: function(n, t) {
				for(var f, u, r, e, h = 0, o = i.expando, s = i.cache, c = i.support.deleteExpando, l = i.event.special;
					(r = n[h]) != null; h++)
					if((t || i.acceptData(r)) && (u = r[o], f = u && s[u], f)) {
						if(f.events)
							for(e in f.events) l[e] ? i.event.remove(r, e) : i.removeEvent(r, e, f.handle);
						s[u] && (delete s[u], c ? delete r[o] : r.removeAttribute ? r.removeAttribute(o) : r[o] = null, i.deletedIds.push(u))
					}
			}
		}),
		function() {
			var t, n;
			i.uaMatch = function(n) {
				n = n.toLowerCase();
				var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
				return {
					browser: t[1] || "",
					version: t[2] || "0"
				}
			}, t = i.uaMatch(to.userAgent), n = {}, t.browser && (n[t.browser] = !0, n.version = t.version), n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0), i.browser = n, i.sub = function() {
				function n(t, i) {
					return new n.fn.init(t, i)
				}
				i.extend(!0, n, this), n.superclass = this, n.fn = n.prototype = this(), n.fn.constructor = n, n.sub = this.sub, n.fn.init = function(r, u) {
					return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t)
				}, n.fn.init.prototype = n.fn;
				var t = n(r);
				return n
			}
		}();
	var u, p, w, wt = /alpha\([^)]*\)/i,
		de = /opacity=([^)]*)/,
		ke = /^(top|right|bottom|left)$/,
		wf = /^(none|table(?!-c[ea]).+)/,
		oi = /^margin/,
		pe = new RegExp("^(" + rt + ")(.*)$", "i"),
		lt = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
		pu = new RegExp("^([-+])=(" + rt + ")", "i"),
		dt = {
			BODY: "block"
		},
		bu = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		tr = {
			letterSpacing: 0,
			fontWeight: 400
		},
		l = ["Top", "Right", "Bottom", "Left"],
		di = ["Webkit", "O", "Moz", "ms"],
		sf = i.fn.toggle;
	i.fn.extend({
		css: function(n, r) {
			return i.access(this, function(n, r, u) {
				return u !== t ? i.style(n, r, u) : i.css(n, r)
			}, n, r, arguments.length > 1)
		},
		show: function() {
			return sr(this, !0)
		},
		hide: function() {
			return sr(this)
		},
		toggle: function(n, t) {
			var r = typeof n == "boolean";
			return i.isFunction(n) && i.isFunction(t) ? sf.apply(this, arguments) : this.each(function() {
				(r ? n : g(this)) ? i(this).show(): i(this).hide()
			})
		}
	}), i.extend({
		cssHooks: {
			opacity: {
				get: function(n, t) {
					if(t) {
						var i = u(n, "opacity");
						return i === "" ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: i.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(n, r, u, f) {
			if(n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
				var o, s, e, h = i.camelCase(r),
					c = n.style;
				if(r = i.cssProps[h] || (i.cssProps[h] = nr(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
				if((s = typeof u, s === "string" && (o = pu.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), u != null && (s !== "number" || !isNaN(u))) && (s === "number" && !i.cssNumber[h] && (u += "px"), !e || !("set" in e) || (u = e.set(n, u, f)) !== t)) try {
					c[r] = u
				} catch(l) {}
			}
		},
		css: function(n, r, f, e) {
			var o, c, s, h = i.camelCase(r);
			return r = i.cssProps[h] || (i.cssProps[h] = nr(n.style, h)), s = i.cssHooks[r] || i.cssHooks[h], s && "get" in s && (o = s.get(n, !0, e)), o === t && (o = u(n, r)), o === "normal" && r in tr && (o = tr[r]), f || e !== t ? (c = parseFloat(o), f || i.isNumeric(c) ? c || 0 : o) : o
		},
		swap: function(n, t, i) {
			var u, r, f = {};
			for(r in t) f[r] = n.style[r], n.style[r] = t[r];
			u = i.call(n);
			for(r in t) n.style[r] = f[r];
			return u
		}
	}), n.getComputedStyle ? u = function(t, r) {
		var f, o, s, h, e = n.getComputedStyle(t, null),
			u = t.style;
		return e && (f = e.getPropertyValue(r) || e[r], f === "" && !i.contains(t.ownerDocument, t) && (f = i.style(t, r)), lt.test(f) && oi.test(r) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = e.width, u.width = o, u.minWidth = s, u.maxWidth = h)), f
	} : r.documentElement.currentStyle && (u = function(n, t) {
		var f, u, i = n.currentStyle && n.currentStyle[t],
			r = n.style;
		return i == null && r && r[t] && (i = r[t]), lt.test(i) && !ke.test(t) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i, i = r.pixelLeft + "px", r.left = f, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
	}), i.each(["height", "width"], function(n, t) {
		i.cssHooks[t] = {
			get: function(n, r, f) {
				if(r) return n.offsetWidth === 0 && wf.test(u(n, "display")) ? i.swap(n, bu, function() {
					return er(n, t, f)
				}) : er(n, t, f)
			},
			set: function(n, r, u) {
				return au(n, r, u ? or(n, t, u, i.support.boxSizing && i.css(n, "boxSizing") === "border-box") : 0)
			}
		}
	}), i.support.opacity || (i.cssHooks.opacity = {
		get: function(n, t) {
			return de.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(n, t) {
			var r = n.style,
				u = n.currentStyle,
				e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
				f = u && u.filter || r.filter || "";
			(r.zoom = 1, t >= 1 && i.trim(f.replace(wt, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), u && !u.filter)) || (r.filter = wt.test(f) ? f.replace(wt, e) : f + " " + e)
		}
	}), i(function() {
		i.support.reliableMarginRight || (i.cssHooks.marginRight = {
			get: function(n, t) {
				return i.swap(n, {
					display: "inline-block"
				}, function() {
					if(t) return u(n, "marginRight")
				})
			}
		}), !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, t) {
			i.cssHooks[t] = {
				get: function(n, r) {
					if(r) {
						var f = u(n, t);
						return lt.test(f) ? i(n).position()[t] + "px" : f
					}
				}
			}
		})
	}), i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
		return n.offsetWidth === 0 && n.offsetHeight === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || u(n, "display")) === "none"
	}, i.expr.filters.visible = function(n) {
		return !i.expr.filters.hidden(n)
	}), i.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(n, t) {
		i.cssHooks[n + t] = {
			expand: function(i) {
				for(var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++) f[n + l[r] + t] = u[r] || u[r - 2] || u[0];
				return f
			}
		}, oi.test(n) || (i.cssHooks[n + t].set = au)
	});
	var hf = /%20/g,
		cf = /\[\]$/,
		bi = /\r?\n/g,
		af = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		vf = /^(?:select|textarea)/i;
	i.fn.extend({
		serialize: function() {
			return i.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? i.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || vf.test(this.nodeName) || af.test(this.type))
			}).map(function(n, t) {
				var r = i(this).val();
				return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
					return {
						name: t.name,
						value: n.replace(bi, "\r\n")
					}
				}) : {
					name: t.name,
					value: r.replace(bi, "\r\n")
				}
			}).get()
		}
	}), i.param = function(n, r) {
		var u, f = [],
			e = function(n, t) {
				t = i.isFunction(t) ? t() : t == null ? "" : t, f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
			};
		if(r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
			e(this.name, this.value)
		});
		else
			for(u in n) ii(u, n[u], r, e);
		return f.join("&").replace(hf, "+")
	};
	var a, c, ku = /#.*$/,
		yf = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		of = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		yu = /^(?:GET|HEAD)$/,
		lf = /^\/\//,
		hi = /\?/,
		gu = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		du = /([?&])_=[^&]*/,
		ki = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		cr = i.fn.load,
		pt = {},
		lu = {},
		vu = ["*/"] + ["*"];
	try {
		c = ae.href
	} catch(wo) {
		c = r.createElement("a"), c.href = "", c = c.href
	}
	a = ki.exec(c.toLowerCase()) || [], i.fn.load = function(n, r, u) {
		if(typeof n != "string" && cr) return cr.apply(this, arguments);
		if(!this.length) return this;
		var f, o, s, h = this,
			e = n.indexOf(" ");
		return e >= 0 && (f = n.slice(e, n.length), n = n.slice(0, e)), i.isFunction(r) ? (u = r, r = t) : r && typeof r == "object" && (o = "POST"), i.ajax({
			url: n,
			type: o,
			dataType: "html",
			data: r,
			complete: function(n, t) {
				u && h.each(u, s || [n.responseText, t, n])
			}
		}).done(function(n) {
			s = arguments, h.html(f ? i("<div>").append(n.replace(gu, "")).find(f) : n)
		}), this
	}, i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(n, t) {
		i.fn[t] = function(n) {
			return this.on(t, n)
		}
	}), i.each(["get", "post"], function(n, r) {
		i[r] = function(n, u, f, e) {
			return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
				type: r,
				url: n,
				data: u,
				success: f,
				dataType: e
			})
		}
	}), i.extend({
		getScript: function(n, r) {
			return i.get(n, t, r, "script")
		},
		getJSON: function(n, t, r) {
			return i.get(n, t, r, "json")
		},
		ajaxSetup: function(n, t) {
			return t ? ir(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), ir(n, t), n
		},
		ajaxSettings: {
			url: c,
			isLocal: of.test(a[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": vu
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": n.String,
				"text html": !0,
				"text json": i.parseJSON,
				"text xml": i.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: ur(pt),
		ajaxTransport: ur(lu),
		ajax: function(n, r) {
			function b(n, r, h, c) {
				var l, d, b, tt, p, a = r;
				e !== 2 && (e = 2, k && clearTimeout(k), v = t, it = c || "", f.readyState = n > 0 ? 4 : 0, h && (tt = io(u, f, h)), n >= 200 && n < 300 || n === 304 ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), p && (i.lastModified[o] = p), p = f.getResponseHeader("Etag"), p && (i.etag[o] = p)), n === 304 ? (a = "notmodified", l = !0) : (l = oo(u, tt), a = l.state, d = l.data, b = l.error, l = !b)) : (b = a, (!a || n) && (a = "error", n < 0 && (n = 0))), f.status = n, f.statusText = (r || a) + "", l ? nt.resolveWith(s, [d, a, f]) : nt.rejectWith(s, [f, a, b]), f.statusCode(w), w = t, y && g.trigger("ajax" + (l ? "Success" : "Error"), [f, u, l ? d : b]), rt.fireWith(s, [f, a]), y && (g.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
			}
			var tt, d;
			typeof n == "object" && (r = n, n = t), r = r || {};
			var o, it, p, v, k, c, y, l, u = i.ajaxSetup({}, r),
				s = u.context || u,
				g = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event,
				nt = i.Deferred(),
				rt = i.Callbacks("once memory"),
				w = u.statusCode || {},
				ft = {},
				ut = {},
				e = 0,
				et = "canceled",
				f = {
					readyState: 0,
					setRequestHeader: function(n, t) {
						if(!e) {
							var i = n.toLowerCase();
							n = ut[i] = ut[i] || n, ft[n] = t
						}
						return this
					},
					getAllResponseHeaders: function() {
						return e === 2 ? it : null
					},
					getResponseHeader: function(n) {
						var i;
						if(e === 2) {
							if(!p)
								for(p = {}; i = yf.exec(it);) p[i[1].toLowerCase()] = i[2];
							i = p[n.toLowerCase()]
						}
						return i === t ? null : i
					},
					overrideMimeType: function(n) {
						return e || (u.mimeType = n), this
					},
					abort: function(n) {
						return n = n || et, v && v.abort(n), b(0, n), this
					}
				};
			if(nt.promise(f), f.success = f.done, f.error = f.fail, f.complete = rt.add, f.statusCode = function(n) {
					if(n) {
						var t;
						if(e < 2)
							for(t in n) w[t] = [w[t], n[t]];
						else t = n[f.status], f.always(t)
					}
					return this
				}, u.url = ((n || u.url) + "").replace(ku, "").replace(lf, a[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(h), u.crossDomain == null && (c = ki.exec(u.url.toLowerCase()), u.crossDomain = !(!c || c[1] === a[1] && c[2] === a[2] && (c[3] || (c[1] === "http:" ? 80 : 443)) == (a[3] || (a[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), ot(pt, u, r, f), e === 2) return f;
			y = u.global, u.type = u.type.toUpperCase(), u.hasContent = !yu.test(u.type), y && i.active++ == 0 && i.event.trigger("ajaxStart"), u.hasContent || (u.data && (u.url += (hi.test(u.url) ? "&" : "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (tt = i.now(), d = u.url.replace(du, "$1_=" + tt), u.url = d + (d === u.url ? (hi.test(u.url) ? "&" : "?") + "_=" + tt : ""))), (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o])), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + vu + "; q=0.01" : "") : u.accepts["*"]);
			for(l in u.headers) f.setRequestHeader(l, u.headers[l]);
			if(!u.beforeSend || u.beforeSend.call(s, f, u) !== !1 && e !== 2) {
				et = "abort";
				for(l in {
						success: 1,
						error: 1,
						complete: 1
					}) f[l](u[l]);
				if(v = ot(lu, u, r, f), v) {
					f.readyState = 1, y && g.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (k = setTimeout(function() {
						f.abort("timeout")
					}, u.timeout));
					try {
						e = 1, v.send(ft, b)
					} catch(st) {
						if(!(e < 2)) throw st;
						b(-1, st)
					}
				} else b(-1, "No Transport");
				return f
			}
			return f.abort()
		},
		active: 0,
		lastModified: {},
		etag: {}
	});
	var ru = [],
		tf = /\?/,
		ht = /(=)\?(?=&|$)|\?\?/,
		ef = i.now();
	i.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var n = ru.pop() || i.expando + "_" + ef++;
				return this[n] = !0, n
			}
		}), i.ajaxPrefilter("json jsonp", function(r, u, f) {
			var e, s, o, h = r.data,
				c = r.url,
				l = r.jsonp !== !1,
				a = l && ht.test(c),
				v = l && !a && typeof h == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && ht.test(h);
			if(r.dataTypes[0] === "jsonp" || a || v) return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, s = n[e], a ? r.url = c.replace(ht, "$1" + e) : v ? r.data = h.replace(ht, "$1" + e) : l && (r.url += (tf.test(c) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
				return o || i.error(e + " was not called"), o[0]
			}, r.dataTypes[0] = "json", n[e] = function() {
				o = arguments
			}, f.always(function() {
				n[e] = s, r[e] && (r.jsonpCallback = u.jsonpCallback, ru.push(e)), o && i.isFunction(s) && s(o[0]), o = s = t
			}), "script"
		}), i.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /javascript|ecmascript/
			},
			converters: {
				"text script": function(n) {
					return i.globalEval(n), n
				}
			}
		}), i.ajaxPrefilter("script", function(n) {
			n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
		}), i.ajaxTransport("script", function(n) {
			if(n.crossDomain) {
				var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
				return {
					send: function(f, e) {
						i = r.createElement("script"), i.async = "async", n.scriptCharset && (i.charset = n.scriptCharset), i.src = n.url, i.onload = i.onreadystatechange = function(n, r) {
							(r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
						}, u.insertBefore(i, u.firstChild)
					},
					abort: function() {
						i && i.onload(0, 1)
					}
				}
			}
		}), ut = n.ActiveXObject ? function() {
			for(var n in b) b[n](0, 1)
		} : !1, gr = 0, i.ajaxSettings.xhr = n.ActiveXObject ? function() {
			return !this.isLocal && lr() || kf()
		} : lr,
		function(n) {
			i.extend(i.support, {
				ajax: !!n,
				cors: !!n && "withCredentials" in n
			})
		}(i.ajaxSettings.xhr()), i.support.ajax && i.ajaxTransport(function(r) {
			if(!r.crossDomain || i.support.cors) {
				var u;
				return {
					send: function(f, e) {
						var h, s, o = r.xhr();
						if(r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
							for(s in r.xhrFields) o[s] = r.xhrFields[s];
						r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), !r.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
						try {
							for(s in f) o.setRequestHeader(s, f[s])
						} catch(c) {}
						o.send(r.hasContent && r.data || null), u = function(n, f) {
							var s, a, v, c, l;
							try {
								if(u && (f || o.readyState === 4))
									if(u = t, h && (o.onreadystatechange = i.noop, ut && delete b[h]), f) o.readyState !== 4 && o.abort();
									else {
										s = o.status, v = o.getAllResponseHeaders(), c = {}, l = o.responseXML, l && l.documentElement && (c.xml = l);
										try {
											c.text = o.responseText
										} catch(y) {}
										try {
											a = o.statusText
										} catch(y) {
											a = ""
										}!s && r.isLocal && !r.crossDomain ? s = c.text ? 200 : 404 : s === 1223 && (s = 204)
									}
							} catch(p) {
								f || e(-1, p)
							}
							c && e(s, a, c, v)
						}, r.async ? o.readyState === 4 ? setTimeout(u, 0) : (h = ++gr, ut && (b || (b = {}, i(n).unload(ut)), b[h] = u), o.onreadystatechange = u) : u()
					},
					abort: function() {
						u && u(0, 1)
					}
				}
			}
		});
	var v, st, uf = /^(?:toggle|show|hide)$/,
		rf = new RegExp("^(?:([-+])=|)(" + rt + ")([a-z%]*)$", "i"),
		nf = /queueHooks$/,
		it = [ce],
		k = {
			"*": [function(n, t) {
				var o, s, r = this.createTween(n, t),
					e = rf.exec(t),
					h = r.cur(),
					u = +h || 0,
					f = 1,
					c = 20;
				if(e) {
					if(o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), s !== "px" && u) {
						u = i.css(r.elem, n, !0) || o || 1;
						do f = f || ".5", u /= f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && f !== 1 && --c)
					}
					r.unit = s, r.start = u, r.end = e[1] ? u + (e[1] + 1) * o : o
				}
				return r
			}]
		};
	i.Animation = i.extend(kr, {
		tweener: function(n, t) {
			i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
			for(var r, u = 0, f = n.length; u < f; u++) r = n[u], k[r] = k[r] || [], k[r].unshift(t)
		},
		prefilter: function(n, t) {
			t ? it.unshift(n) : it.push(n)
		}
	}), i.Tween = f, f.prototype = {
		constructor: f,
		init: function(n, t, r, u, f, e) {
			this.elem = n, this.prop = r, this.easing = f || "swing", this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = e || (i.cssNumber[r] ? "" : "px")
		},
		cur: function() {
			var n = f.propHooks[this.prop];
			return n && n.get ? n.get(this) : f.propHooks._default.get(this)
		},
		run: function(n) {
			var t, r = f.propHooks[this.prop];
			return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : f.propHooks._default.set(this), this
		}
	}, f.prototype.init.prototype = f.prototype, f.propHooks = {
		_default: {
			get: function(n) {
				var t;
				return n.elem[n.prop] == null || !!n.elem.style && n.elem.style[n.prop] != null ? (t = i.css(n.elem, n.prop, !1, ""), !t || t === "auto" ? 0 : t) : n.elem[n.prop]
			},
			set: function(n) {
				i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
			}
		}
	}, f.propHooks.scrollTop = f.propHooks.scrollLeft = {
		set: function(n) {
			n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
		}
	}, i.each(["toggle", "show", "hide"], function(n, t) {
		var r = i.fn[t];
		i.fn[t] = function(u, f, e) {
			return u == null || typeof u == "boolean" || !n && i.isFunction(u) && i.isFunction(f) ? r.apply(this, arguments) : this.animate(tt(t, !0), u, f, e)
		}
	}), i.fn.extend({
		fadeTo: function(n, t, i, r) {
			return this.filter(g).css("opacity", 0).show().end().animate({
				opacity: t
			}, n, i, r)
		},
		animate: function(n, t, r, u) {
			var e = i.isEmptyObject(n),
				f = i.speed(t, r, u),
				o = function() {
					var t = kr(this, i.extend({}, n), f);
					e && t.stop(!0)
				};
			return e || f.queue === !1 ? this.each(o) : this.queue(f.queue, o)
		},
		stop: function(n, r, u) {
			var f = function(n) {
				var t = n.stop;
				delete n.stop, t(u)
			};
			return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function() {
				var o = !0,
					t = n != null && n + "queueHooks",
					e = i.timers,
					r = i._data(this);
				if(t) r[t] && r[t].stop && f(r[t]);
				else
					for(t in r) r[t] && r[t].stop && nf.test(t) && f(r[t]);
				for(t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u), o = !1, e.splice(t, 1));
				(o || !u) && i.dequeue(this, n)
			})
		}
	}), i.each({
		slideDown: tt("show"),
		slideUp: tt("hide"),
		slideToggle: tt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(n, t) {
		i.fn[n] = function(n, i, r) {
			return this.animate(t, n, i, r)
		}
	}), i.speed = function(n, t, r) {
		var u = n && typeof n == "object" ? i.extend({}, n) : {
			complete: r || !r && t || i.isFunction(n) && n,
			duration: n,
			easing: r && t || t && !i.isFunction(t) && t
		};
		return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
			i.isFunction(u.old) && u.old.call(this), u.queue && i.dequeue(this, u.queue)
		}, u
	}, i.easing = {
		linear: function(n) {
			return n
		},
		swing: function(n) {
			return .5 - Math.cos(n * Math.PI) / 2
		}
	}, i.timers = [], i.fx = f.prototype.init, i.fx.tick = function() {
		var u, n = i.timers,
			r = 0;
		for(v = i.now(); r < n.length; r++) u = n[r], !u() && n[r] === u && n.splice(r--, 1);
		n.length || i.fx.stop(), v = t
	}, i.fx.timer = function(n) {
		n() && i.timers.push(n) && !st && (st = setInterval(i.fx.tick, i.fx.interval))
	}, i.fx.interval = 13, i.fx.stop = function() {
		clearInterval(st), st = null
	}, i.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, i.fx.step = {}, i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
		return i.grep(i.timers, function(t) {
			return n === t.elem
		}).length
	}), ni = /^(?:body|html)$/i, i.fn.offset = function(n) {
		if(arguments.length) return n === t ? this : this.each(function(t) {
			i.offset.setOffset(this, n, t)
		});
		var u, o, s, h, c, l, a, f = {
				top: 0,
				left: 0
			},
			r = this[0],
			e = r && r.ownerDocument;
		if(e) return(o = e.body) === r ? i.offset.bodyOffset(r) : (u = e.documentElement, i.contains(u, r) ? (typeof r.getBoundingClientRect != "undefined" && (f = r.getBoundingClientRect()), s = br(e), h = u.clientTop || o.clientTop || 0, c = u.clientLeft || o.clientLeft || 0, l = s.pageYOffset || u.scrollTop, a = s.pageXOffset || u.scrollLeft, {
			top: f.top + l - h,
			left: f.left + a - c
		}) : f)
	}, i.offset = {
		bodyOffset: function(n) {
			var t = n.offsetTop,
				r = n.offsetLeft;
			return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0, r += parseFloat(i.css(n, "marginLeft")) || 0), {
				top: t,
				left: r
			}
		},
		setOffset: function(n, t, r) {
			var f = i.css(n, "position");
			f === "static" && (n.style.position = "relative");
			var e = i(n),
				o = e.offset(),
				l = i.css(n, "top"),
				a = i.css(n, "left"),
				v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1,
				u = {},
				s = {},
				h, c;
			v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, o)), t.top != null && (u.top = t.top - o.top + h), t.left != null && (u.left = t.left - o.left + c), "using" in t ? t.using.call(n, u) : e.css(u)
		}
	}, i.fn.extend({
		position: function() {
			if(this[0]) {
				var u = this[0],
					n = this.offsetParent(),
					t = this.offset(),
					r = ni.test(n[0].nodeName) ? {
						top: 0,
						left: 0
					} : n.offset();
				return t.top -= parseFloat(i.css(u, "marginTop")) || 0, t.left -= parseFloat(i.css(u, "marginLeft")) || 0, r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0, r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0, {
					top: t.top - r.top,
					left: t.left - r.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var n = this.offsetParent || r.body; n && !ni.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
				return n || r.body
			})
		}
	}), i.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(n, r) {
		var u = /Y/.test(r);
		i.fn[n] = function(f) {
			return i.access(this, function(n, f, e) {
				var o = br(n);
				if(e === t) return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
				o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
			}, n, f, arguments.length, null)
		}
	}), i.each({
		Height: "height",
		Width: "width"
	}, function(n, r) {
		i.each({
			padding: "inner" + n,
			content: r,
			"": "outer" + n
		}, function(u, f) {
			i.fn[f] = function(f, e) {
				var o = arguments.length && (u || typeof f != "boolean"),
					s = u || (f === !0 || e === !0 ? "margin" : "border");
				return i.access(this, function(r, u, f) {
					var e;
					return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, f, s) : i.style(r, u, f, s)
				}, r, o ? f : t, o, null)
			}
		})
	}), n.jQuery = n.$ = i, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return i
	})
})(window), jQuery.cookie = function(n, t, i) {
		var u, r;
		if(arguments.length > 1 && (t === null || typeof t != "object")) return i = jQuery.extend({}, i), t === null && (i.expires = -1), typeof i.expires == "number" && (u = i.expires, r = i.expires = new Date, r.setDate(r.getDate() + u)), document.cookie = [encodeURIComponent(n), "=", i.raw ? String(t) : encodeURIComponent(String(t)), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("");
		i = t || {};
		var f, o = i.raw ? function(n) {
				return n
			} : decodeURIComponent,
			e = (f = new RegExp("(?:^|; )" + encodeURIComponent(n) + "=([^;]*)").exec(document.cookie)) ? o(f[1]) : null,
			s = window.navigator.userAgent.indexOf("Chrome") !== -1;
		return s && e == null ? t == null ? localStorage.getItem(n) : (localStorage.setItem(n, t), null) : e
	},
	function(n) {
		"use strict";
		typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
	}(function(n) {
		"use strict";
		var t = {
				wheelSpeed: 10,
				wheelPropagation: !1,
				minScrollbarLength: null,
				useBothWheelAxes: !1,
				useKeyboard: !0,
				suppressScrollX: !1,
				suppressScrollY: !1,
				scrollXMarginOffset: 0,
				scrollYMarginOffset: 0,
				includePadding: !1
			},
			i = function() {
				var n = 0;
				return function() {
					var t = n;
					return n += 1, ".perfect-scrollbar-" + t
				}
			}();
		n.fn.perfectScrollbar = function(r, u) {
			return this.each(function() {
				var o = n.extend(!0, {}, t),
					f = n(this);
				if(typeof r == "object" ? n.extend(!0, o, r) : u = r, u === "update") return f.data("perfect-scrollbar-update") && f.data("perfect-scrollbar-update")(), f;
				if(u === "destroy") return f.data("perfect-scrollbar-destroy") && f.data("perfect-scrollbar-destroy")(), f;
				if(f.data("perfect-scrollbar")) return f.data("perfect-scrollbar");
				f.addClass("ps-container");
				var c = n("<div class='ps-scrollbar-x-rail'></div>").appendTo(f),
					l = n("<div class='ps-scrollbar-y-rail'></div>").appendTo(f),
					k = n("<div class='ps-scrollbar-x'></div>").appendTo(c),
					b = n("<div class='ps-scrollbar-y'></div>").appendTo(l),
					tt, nt, s, h, w, d, v, p, it = parseInt(c.css("bottom"), 10),
					et = it === it,
					st = et ? null : parseInt(c.css("top"), 10),
					a, y, g = parseInt(l.css("right"), 10),
					ft = g === g,
					ut = ft ? null : parseInt(l.css("left"), 10),
					ot = f.css("direction") === "rtl",
					e = i(),
					vt = function(n, t) {
						var r = n + t,
							u = h - a,
							i;
						y = r < 0 ? 0 : r > u ? u : r, i = parseInt(y * (d - h) / (h - a), 10), f.scrollTop(i), et ? c.css({
							bottom: it - i
						}) : c.css({
							top: st + i
						})
					},
					at = function(n, t) {
						var r = n + t,
							u = s - v,
							i;
						p = r < 0 ? 0 : r > u ? u : r, i = parseInt(p * (w - s) / (s - v), 10), f.scrollLeft(i), ft ? l.css({
							right: g - i
						}) : l.css({
							left: ut + i
						})
					},
					lt = function(n) {
						return o.minScrollbarLength && (n = Math.max(n, o.minScrollbarLength)), n
					},
					ht = function() {
						var t = {
								width: s,
								display: tt ? "inherit" : "none"
							},
							n;
						t.left = ot ? f.scrollLeft() + s - w : f.scrollLeft(), et ? t.bottom = it - f.scrollTop() : t.top = st + f.scrollTop(), c.css(t), n = {
							top: f.scrollTop(),
							height: h,
							display: nt ? "inherit" : "none"
						}, ft ? n.right = ot ? w - f.scrollLeft() - g - b.outerWidth() : g - f.scrollLeft() : n.left = ot ? f.scrollLeft() + s * 2 - w - ut - b.outerWidth() : ut + f.scrollLeft(), l.css(n), k.css({
							left: p,
							width: v
						}), b.css({
							top: y,
							height: a
						})
					},
					rt = function() {
						s = o.includePadding ? f.innerWidth() : f.width(), h = o.includePadding ? f.innerHeight() : f.height(), w = f.prop("scrollWidth"), d = f.prop("scrollHeight"), !o.suppressScrollX && s + o.scrollXMarginOffset < w ? (tt = !0, v = lt(parseInt(s * s / w, 10)), p = parseInt(f.scrollLeft() * (s - v) / (w - s), 10)) : (tt = !1, v = 0, p = 0, f.scrollLeft(0)), !o.suppressScrollY && h + o.scrollYMarginOffset < d ? (nt = !0, a = lt(parseInt(h * h / d, 10)), y = parseInt(f.scrollTop() * (h - a) / (d - h), 10)) : (nt = !1, a = 0, y = 0, f.scrollTop(0)), y >= h - a && (y = h - a), p >= s - v && (p = s - v), ht()
					},
					yt = function() {
						var t, i;
						k.bind("mousedown" + e, function(n) {
							i = n.pageX, t = k.position().left, c.addClass("in-scrolling"), n.stopPropagation(), n.preventDefault()
						}), n(document).bind("mousemove" + e, function(n) {
							c.hasClass("in-scrolling") && (at(t, n.pageX - i), n.stopPropagation(), n.preventDefault())
						}), n(document).bind("mouseup" + e, function() {
							c.hasClass("in-scrolling") && c.removeClass("in-scrolling")
						}), t = i = null
					},
					pt = function() {
						var t, i;
						b.bind("mousedown" + e, function(n) {
							i = n.pageY, t = b.position().top, l.addClass("in-scrolling"), n.stopPropagation(), n.preventDefault()
						}), n(document).bind("mousemove" + e, function(n) {
							l.hasClass("in-scrolling") && (vt(t, n.pageY - i), n.stopPropagation(), n.preventDefault())
						}), n(document).bind("mouseup" + e, function() {
							l.hasClass("in-scrolling") && l.removeClass("in-scrolling")
						}), t = i = null
					},
					ct = function(n, t) {
						var r = f.scrollTop(),
							i;
						if(n === 0) {
							if(!nt) return !1;
							if(r === 0 && t > 0 || r >= d - h && t < 0) return !o.wheelPropagation
						}
						if(i = f.scrollLeft(), t === 0) {
							if(!tt) return !1;
							if(i === 0 && n < 0 || i >= w - s && n > 0) return !o.wheelPropagation
						}
						return !0
					},
					bt = function() {
						o.wheelSpeed /= 10;
						var n = !1;
						f.bind("mousewheel" + e, function(t, i, r, u) {
							var e = t.deltaX * t.deltaFactor || r,
								s = t.deltaY * t.deltaFactor || u;
							n = !1, o.useBothWheelAxes ? nt && !tt ? (s ? f.scrollTop(f.scrollTop() - s * o.wheelSpeed) : f.scrollTop(f.scrollTop() + e * o.wheelSpeed), n = !0) : tt && !nt && (e ? f.scrollLeft(f.scrollLeft() + e * o.wheelSpeed) : f.scrollLeft(f.scrollLeft() - s * o.wheelSpeed), n = !0) : (f.scrollTop(f.scrollTop() - s * o.wheelSpeed), f.scrollLeft(f.scrollLeft() + e * o.wheelSpeed)), rt(), n = n || ct(e, s), n && (t.stopPropagation(), t.preventDefault())
						}), f.bind("MozMousePixelScroll" + e, function(t) {
							n && t.preventDefault()
						})
					},
					kt = function() {
						var t = !1,
							i;
						f.bind("mouseenter" + e, function() {
							t = !0
						}), f.bind("mouseleave" + e, function() {
							t = !1
						}), i = !1, n(document).bind("keydown" + e, function(r) {
							if(t && !n(document.activeElement).is(":input,[contenteditable]")) {
								var e = 0,
									u = 0;
								switch(r.which) {
									case 37:
										e = -30;
										break;
									case 38:
										u = 30;
										break;
									case 39:
										e = 30;
										break;
									case 40:
										u = -30;
										break;
									case 33:
										u = 90;
										break;
									case 32:
									case 34:
										u = -90;
										break;
									case 35:
										u = -h;
										break;
									case 36:
										u = h;
										break;
									default:
										return
								}
								f.scrollTop(f.scrollTop() - u), f.scrollLeft(f.scrollLeft() + e), i = ct(e, u), i && r.preventDefault()
							}
						})
					},
					dt = function() {
						var n = function(n) {
							n.stopPropagation()
						};
						b.bind("click" + e, n), l.bind("click" + e, function(n) {
							var i = parseInt(a / 2, 10),
								r = n.pageY - l.offset().top - i,
								u = h - a,
								t = r / u;
							t < 0 ? t = 0 : t > 1 && (t = 1), f.scrollTop((d - h) * t)
						}), k.bind("click" + e, n), c.bind("click" + e, function(n) {
							var i = parseInt(v / 2, 10),
								r = n.pageX - c.offset().left - i,
								u = s - v,
								t = r / u;
							t < 0 ? t = 0 : t > 1 && (t = 1), f.scrollLeft((w - s) * t)
						})
					},
					gt = function() {
						var s = function(n, t) {
								f.scrollTop(f.scrollTop() - t), f.scrollLeft(f.scrollLeft() - n), rt()
							},
							i = {},
							u = 0,
							t = {},
							r = null,
							o = !1;
						n(window).bind("touchstart" + e, function() {
							o = !0
						}), n(window).bind("touchend" + e, function() {
							o = !1
						}), f.bind("touchstart" + e, function(n) {
							var t = n.originalEvent.targetTouches[0];
							i.pageX = t.pageX, i.pageY = t.pageY, u = +new Date, r !== null && clearInterval(r), n.stopPropagation()
						}), f.bind("touchmove" + e, function(n) {
							var e, r, h, c, l, f;
							o || n.originalEvent.targetTouches.length !== 1 || (e = n.originalEvent.targetTouches[0], r = {}, r.pageX = e.pageX, r.pageY = e.pageY, h = r.pageX - i.pageX, c = r.pageY - i.pageY, s(h, c), i = r, l = +new Date, f = l - u, f > 0 && (t.x = h / f, t.y = c / f, u = l), n.preventDefault())
						}), f.bind("touchend" + e, function() {
							clearInterval(r), r = setInterval(function() {
								if(Math.abs(t.x) < .01 && Math.abs(t.y) < .01) {
									clearInterval(r);
									return
								}
								s(t.x * 30, t.y * 30), t.x *= .8, t.y *= .8
							}, 10)
						})
					},
					ni = function() {
						f.bind("scroll" + e, function() {
							rt()
						})
					},
					ti = function() {
						f.unbind(e), n(window).unbind(e), n(document).unbind(e), f.data("perfect-scrollbar", null), f.data("perfect-scrollbar-update", null), f.data("perfect-scrollbar-destroy", null), k.remove(), b.remove(), c.remove(), l.remove(), c = l = k = b = tt = nt = s = h = w = d = v = p = it = et = st = a = y = g = ft = ut = ot = e = null
					},
					ii = function(t) {
						f.addClass("ie").addClass("ie" + t);
						var i = function() {
								var t = function() {
										n(this).addClass("hover")
									},
									i = function() {
										n(this).removeClass("hover")
									};
								f.bind("mouseenter" + e, t).bind("mouseleave" + e, i), c.bind("mouseenter" + e, t).bind("mouseleave" + e, i), l.bind("mouseenter" + e, t).bind("mouseleave" + e, i), k.bind("mouseenter" + e, t).bind("mouseleave" + e, i), b.bind("mouseenter" + e, t).bind("mouseleave" + e, i)
							},
							r = function() {
								ht = function() {
									var t = {
											left: p + f.scrollLeft(),
											width: v
										},
										n;
									et ? t.bottom = it : t.top = st, k.css(t), n = {
										top: y + f.scrollTop(),
										height: a
									}, ft ? n.right = g : n.left = ut, b.css(n), k.hide().show(), b.hide().show()
								}
							};
						t === 6 && (i(), r())
					},
					wt = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
					ri = function() {
						var n = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
						n && n[1] === "msie" && ii(parseInt(n[2], 10)), rt(), ni(), yt(), pt(), dt(), wt && gt(), f.mousewheel && bt(), o.useKeyboard && kt(), f.data("perfect-scrollbar", f), f.data("perfect-scrollbar-update", rt), f.data("perfect-scrollbar-destroy", ti)
					};
				return ri(), f
			})
		}
	}), $(function() {
		var o, n, s, t, i, f, r, e, u, h;
		initFun(), $("#TimeClose").click(function() {
			$("#TimeOutLogo").fadeOut()
		}), $.cookie("FloatTimeOut") != 1 && (o = setTimeout(function() {
			var n = new Date,
				t = n.getTime(),
				r = +new Date(n.toLocaleDateString()) - 1,
				u = t - r,
				f = 864e5 - u,
				i = new Date;
			i.setTime(f + t), document.cookie = "FloatTimeOut=1;expires=" + i.toGMTString(), $("#TimeOutLogo").animate({
				left: "50%",
				opacity: "1"
			}, 500, function() {
				setTimeout(function() {
					$("#TimeOutLogo").animate({
						left: "130%",
						opacity: "0"
					}, 500)
				}, 1e4)
			})
		}, 6e4)), $("#rolateul li").hover(function() {
			var n = $(this).index(),
				t = $(this);
			RWait[n] = !1, RMask[n] || (RMask[n] = !0, setLirotate($(this), n))
		}, function() {
			var n = $(this).index(),
				t = $(this);
			RMask2[n] ? RWait[n] = !0 : (RMask2[n] = !0, backLirotate($(this), n))
		}), n = 0, s = setInterval(function() {
			n < $("#productul li").size() - 3 ? n++ : n = 0, $("#productul").animate({
				marginLeft: -n * 407 + "px"
			}, 300)
		}, 7e3), $("#ProLeft").click(function() {
			$("#productul li").size() > 3 && (n > 0 ? n-- : n = $("#productul li").size() - 3, $("#productul").animate({
				marginLeft: -n * 407 + "px"
			}, 300))
		}), $("#ProRight").click(function() {
			$("#productul li").size() > 3 && (n < $("#productul li").size() - 3 ? n++ : n = 0, $("#productul").animate({
				marginLeft: -n * 407 + "px"
			}, 300))
		}), $("#productul li").hover(function() {
			$(this).find(".pMask").fadeOut("fast")
		}, function() {
			$(this).find(".pMask").fadeIn("fast")
		}), $("#slider11 a").hover(function() {
			var n = $(this).index();
			$(this).css({
				backgroundColor: "#EE7700",
				border: "1px solid #EE7700 !important"
			}), $(this).find("span").css({
				color: "white"
			}), document.getElementById("copyurl") ? $(this).find("i").html('<img src="/Images2/Global/Slider' + n + '.png">') : $(this).find("i").html('<img src="/Images2/Global/Slider' + (n + 1) + '.png">')
		}, function() {
			var n = $(this).index();
			$(this).css({
				backgroundColor: "white",
				border: "1px solid #ddd",
				"border-bottom": "1px solid #f8f8f8!important"
			}), $(this).find("span").css({
				color: "#333"
			}), document.getElementById("copyurl") ? n == 0 ? $(this).find("i").html('<img src="/Images2/Global/SliderA0.png">') : n == 1 ? $(this).find("i").html('<img src="/Images2/Global/Slider1.gif">') : n == 2 ? $(this).find("i").html('<img src="/Images2/Global/Slider2.jpg">') : n == 3 && $(this).find("i").html('<img src="/Images2/Global/Slider3.jpg">') : n == 0 ? $(this).find("i").html('<img src="/Images2/Global/Slider1.gif">') : n == 1 ? $(this).find("i").html('<img src="/Images2/Global/Slider2.jpg">') : n == 2 && $(this).find("i").html('<img src="/Images2/Global/Slider3.jpg">')
		}), $("#showForm").click(function() {
			showRegistion("预约装修")
		}), $("#CodeShow").stop(!0, !1).hover(function() {
			$(".jtcode").animate({
				width: "187px"
			}, 300)
		}, function() {
			$(".jtcode").animate({
				width: "0px"
			}, 300)
		}), $(".nav >ul>li").hover(function() {
			var n = $(this).find(".anav").attr("class");
			n.indexOf("dropH") < 0 && (n.indexOf("drop") > 0 ? $(this).find(".anav").attr("class", n + " hover up") : $(this).find(".anav").attr("class", n + " hover")), $(this).find(".dropList").show(), $(this).css({
				backgroundColor: "black",
				color: "#F25618"
			})
		}, function() {
			$(this).find(".anav").removeClass("hover"), $(this).find(".anav").removeClass("up"), $(this).find(".dropList").hide(), $(this).css({
				backgroundColor: "#18171E",
				color: "white"
			})
		}), $(".dropList >ul>li").hover(function() {
			$(this).find("div").css({
				backgroundColor: "black"
			})
		}, function() {
			$(this).find("div").css({
				backgroundColor: "#18171E"
			})
		}), $(".sec_tab li").click(function() {
			$(".sec_tab li").removeClass("a_O"), $(this).attr("class", "a_O"), $("#signWord").html(Lang.p[$(this).index()]), $("#arrow").css({
				left: 43 + $(this).index() * 100 + "px"
			})
		}), t = !1, $(".btnSubmit").click(function() {
			if(!t) {
				var n = $(this).parent("form"),
					i = n.find("input[name='PhoneNumber']").val();
				n.find("input[name='Name']").val() != "" && Number(i) > 0 ? RegPhone(i) ? ($.ajax({
					type: "post",
					url: "/api/RegistrationAPI/Insert",
					data: n.serialize(),
					success: function(n) {
						n.Sucess ? alert("恭喜您，报名成功") : alert("同一手机号码只能领取一次！"), t = !1
					}
				}), pyRegisterCvt(i)) : (alert("请输入正确的电话号码"), t = !1) : (alert("请填写正确的报名信息"), t = !1)
			}
		}), $("#btnSub,#btnSub2").click(function() {
			if(!t) {
				var n = $(this).parent().parent("form"),
					i = n.find("input[name='PhoneNumber']").val();
				n.find("input[name='Name']").val() != "" && Number(i) > 0 ? RegPhone(i) ? ($.ajax({
					type: "post",
					url: "/api/RegistrationAPI/Insert",
					data: n.serialize(),
					success: function(n) {
						n.Sucess ? alert("恭喜您，报名成功") : alert("同一手机号码只能领取一次！"), t = !1
					}
				}), pyRegisterCvt(i)) : (alert("请输入正确的电话号码"), t = !1) : (alert("请填写正确的报名信息"), t = !1)
			}
		}), i = 1, f = $(".hot_room ul li").size(), $("#LeftXQ").click(function() {
			i++, i >= f - 2 && (i = f - 2), $(".hot_room ul").animate({
				marginLeft: -(i - 1) * 400 + "px"
			}, 500)
		}), $("#RightXQ").click(function() {
			i--, i <= 1 && (i = 1), $(".hot_room ul").animate({
				marginLeft: -(i - 1) * 400 + "px"
			}, 500)
		}), r = 1, e = $(".div_caseSlide .div_float").size(), $("#leftAL").click(function() {
			r++, r >= e && (r = e), $(".div_caseSlide").animate({
				marginLeft: -(r - 1) * 1200 + "px"
			}, 800)
		}), $("#rightAL").click(function() {
			r--, r <= 1 && (r = 1), $(".div_caseSlide").animate({
				marginLeft: -(r - 1) * 1200 + "px"
			}, 800)
		}), u = 1, h = setInterval(function() {
			u < $("#SlideHonor p").size() ? u++ : u = 1, $("#SlideHonor").animate({
				marginTop: -(u - 1) * 40 + "px"
			}, 500)
		}, 8e3), $("body,html").scroll(function() {})
	}), $(function() {
		var t, r;
		window._currentWidth = document.body.clientWidth, window.onresize = function() {
			window._currentWidth = document.body.clientWidth, n = 0, t()
		};
		var f = $("#JS_side_stage"),
			s = $("#JS_side_stage a"),
			i = $("#JS_side_nav a"),
			e = $("#JS_side_stage a"),
			o = i.length,
			u = 0,
			n = 0;
		i.on("mouseover", function() {
			n = $(this).index(), r && clearInterval(r), t()
		}).on("mouseout", function() {
			r = setInterval(function() {
				t()
			}, 6e3)
		});
		t = function() {
			$(i.get(u)).removeClass("current"), $(i.get(n)).addClass("current"), f.stop(!0, !1).animate({
				"margin-left": (0 - n) * 100 + "%"
			}, 200), u = n;
			var t = $(e.get(u)),
				r = t.attr("data-bg");
			r && t.css({
				background: "url(" + r + ") center center no-repeat"
			}).removeAttr("data-bg"), n = n >= o - 1 ? 0 : n + 1
		}, r = setInterval(function() {
			t()
		}, 6e3)
	});
var NowDeg = [0, 0, 0, 0, 0],
	Speed = 40,
	RMask = [!1, !1, !1, !1, !1],
	RMask2 = [!0, !0, !0, !0, !0],
	RWait = [!1, !1, !1, !1, !1];
Lang = {
	p: ["免费登记，获得专业设计师详细报价", "在线报名，到店享设计师2选1洽谈特权", "10秒登记，送500元设计费抵用券"]
}