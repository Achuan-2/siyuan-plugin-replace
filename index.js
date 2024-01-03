'use strict';
var he = Object.defineProperty;
var _e = (t, e, n) =>
    e in t ? he(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var W = (t, e, n) => (_e(t, typeof e != 'symbol' ? e + '' : e, n), n);
Object.defineProperties(exports, {
    __esModule: { value: !0 },
    [Symbol.toStringTag]: { value: 'Module' },
});
const b = require('siyuan');
function V() {}
function ne(t) {
    return t();
}
function J() {
    return Object.create(null);
}
function S(t) {
    t.forEach(ne);
}
function le(t) {
    return typeof t == 'function';
}
function ie(t, e) {
    return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
function ge(t) {
    return Object.keys(t).length === 0;
}
function g(t, e) {
    t.appendChild(e);
}
function M(t, e, n) {
    t.insertBefore(e, n || null);
}
function v(t) {
    t.parentNode && t.parentNode.removeChild(t);
}
function me(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function y(t) {
    return document.createElement(t);
}
function K(t) {
    return document.createTextNode(t);
}
function w() {
    return K(' ');
}
function k(t, e, n, l) {
    return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function c(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function pe(t) {
    return t === '' ? null : +t;
}
function be(t) {
    return Array.from(t.childNodes);
}
function q(t, e) {
    (e = '' + e), t.data !== e && (t.data = e);
}
function D(t, e) {
    t.value = e ?? '';
}
function Q(t, e, n) {
    for (let l = 0; l < t.options.length; l += 1) {
        const i = t.options[l];
        if (i.__value === e) {
            i.selected = !0;
            return;
        }
    }
    (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ye(t) {
    const e = t.querySelector(':checked');
    return e && e.__value;
}
function ke(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
    const i = document.createEvent('CustomEvent');
    return i.initCustomEvent(t, n, l, e), i;
}
let O;
function P(t) {
    O = t;
}
function Y() {
    if (!O) throw new Error('Function called outside component initialization');
    return O;
}
function ve(t) {
    Y().$$.on_mount.push(t);
}
function we(t) {
    Y().$$.on_destroy.push(t);
}
function Se() {
    const t = Y();
    return (e, n, { cancelable: l = !1 } = {}) => {
        const i = t.$$.callbacks[e];
        if (i) {
            const a = ke(e, n, { cancelable: l });
            return (
                i.slice().forEach(o => {
                    o.call(t, a);
                }),
                !a.defaultPrevented
            );
        }
        return !0;
    };
}
const $ = [],
    U = [];
let B = [];
const X = [],
    Me = Promise.resolve();
let R = !1;
function Ee() {
    R || ((R = !0), Me.then(oe));
}
function H(t) {
    B.push(t);
}
const F = new Set();
let E = 0;
function oe() {
    if (E !== 0) return;
    const t = O;
    do {
        try {
            for (; E < $.length; ) {
                const e = $[E];
                E++, P(e), $e(e.$$);
            }
        } catch (e) {
            throw (($.length = 0), (E = 0), e);
        }
        for (P(null), $.length = 0, E = 0; U.length; ) U.pop()();
        for (let e = 0; e < B.length; e += 1) {
            const n = B[e];
            F.has(n) || (F.add(n), n());
        }
        B.length = 0;
    } while ($.length);
    for (; X.length; ) X.pop()();
    (R = !1), F.clear(), P(t);
}
function $e(t) {
    if (t.fragment !== null) {
        t.update(), S(t.before_update);
        const e = t.dirty;
        (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(H);
    }
}
function xe(t) {
    const e = [],
        n = [];
    B.forEach(l => (t.indexOf(l) === -1 ? e.push(l) : n.push(l))), n.forEach(l => l()), (B = e);
}
const z = new Set();
let Te;
function x(t, e) {
    t && t.i && (z.delete(t), t.i(e));
}
function A(t, e, n, l) {
    if (t && t.o) {
        if (z.has(t)) return;
        z.add(t),
            Te.c.push(() => {
                z.delete(t), l && (n && t.d(1), l());
            }),
            t.o(e);
    } else l && l();
}
function I(t) {
    t && t.c();
}
function T(t, e, n, l) {
    const { fragment: i, after_update: a } = t.$$;
    i && i.m(e, n),
        l ||
            H(() => {
                const o = t.$$.on_mount.map(ne).filter(le);
                t.$$.on_destroy ? t.$$.on_destroy.push(...o) : S(o), (t.$$.on_mount = []);
            }),
        a.forEach(H);
}
function C(t, e) {
    const n = t.$$;
    n.fragment !== null &&
        (xe(n.after_update),
        S(n.on_destroy),
        n.fragment && n.fragment.d(e),
        (n.on_destroy = n.fragment = null),
        (n.ctx = []));
}
function Ce(t, e) {
    t.$$.dirty[0] === -1 && ($.push(t), Ee(), t.$$.dirty.fill(0)),
        (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ae(t, e, n, l, i, a, o, u = [-1]) {
    const s = O;
    P(t);
    const r = (t.$$ = {
        fragment: null,
        ctx: [],
        props: a,
        update: V,
        not_equal: i,
        bound: J(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (s ? s.$$.context : [])),
        callbacks: J(),
        dirty: u,
        skip_bound: !1,
        root: e.target || s.$$.root,
    });
    o && o(r.root);
    let m = !1;
    if (
        ((r.ctx = n
            ? n(t, e.props || {}, (_, f, ...h) => {
                  const d = h.length ? h[0] : f;
                  return (
                      r.ctx &&
                          i(r.ctx[_], (r.ctx[_] = d)) &&
                          (!r.skip_bound && r.bound[_] && r.bound[_](d), m && Ce(t, _)),
                      f
                  );
              })
            : []),
        r.update(),
        (m = !0),
        S(r.before_update),
        (r.fragment = l ? l(r.ctx) : !1),
        e.target)
    ) {
        if (e.hydrate) {
            const _ = be(e.target);
            r.fragment && r.fragment.l(_), _.forEach(v);
        } else r.fragment && r.fragment.c();
        e.intro && x(t.$$.fragment), T(t, e.target, e.anchor, e.customElement), oe();
    }
    P(s);
}
class se {
    $destroy() {
        C(this, 1), (this.$destroy = V);
    }
    $on(e, n) {
        if (!le(n)) return V;
        const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return (
            l.push(n),
            () => {
                const i = l.indexOf(n);
                i !== -1 && l.splice(i, 1);
            }
        );
    }
    $set(e) {
        this.$$set &&
            !ge(e) &&
            ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
}
function Z(t, e, n) {
    const l = t.slice();
    return (l[15] = e[n][0]), (l[7] = e[n][1]), l;
}
function Be(t) {
    let e, n, l, i, a, o, u;
    return {
        c() {
            (e = y('div')),
                (n = y('input')),
                c(n, 'class', 'b3-slider fn__size200'),
                c(n, 'id', 'fontSize'),
                c(n, 'min', (l = t[6].min)),
                c(n, 'max', (i = t[6].max)),
                c(n, 'step', (a = t[6].step)),
                c(n, 'type', 'range'),
                c(e, 'class', 'b3-tooltips b3-tooltips__n'),
                c(e, 'aria-label', t[0]);
        },
        m(s, r) {
            M(s, e, r),
                g(e, n),
                D(n, t[0]),
                o ||
                    ((u = [k(n, 'change', t[13]), k(n, 'input', t[13]), k(n, 'change', t[9])]),
                    (o = !0));
        },
        p(s, r) {
            r & 64 && l !== (l = s[6].min) && c(n, 'min', l),
                r & 64 && i !== (i = s[6].max) && c(n, 'max', i),
                r & 64 && a !== (a = s[6].step) && c(n, 'step', a),
                r & 33 && D(n, s[0]),
                r & 33 && c(e, 'aria-label', s[0]);
        },
        d(s) {
            s && v(e), (o = !1), S(u);
        },
    };
}
function Ve(t) {
    let e,
        n,
        l,
        i = Object.entries(t[5]),
        a = [];
    for (let o = 0; o < i.length; o += 1) a[o] = ee(Z(t, i, o));
    return {
        c() {
            e = y('select');
            for (let o = 0; o < a.length; o += 1) a[o].c();
            c(e, 'class', 'b3-select fn__flex-center fn__size200'),
                c(e, 'id', 'iconPosition'),
                t[0] === void 0 && H(() => t[12].call(e));
        },
        m(o, u) {
            M(o, e, u);
            for (let s = 0; s < a.length; s += 1) a[s] && a[s].m(e, null);
            Q(e, t[0], !0), n || ((l = [k(e, 'change', t[12]), k(e, 'change', t[9])]), (n = !0));
        },
        p(o, u) {
            if (u & 32) {
                i = Object.entries(o[5]);
                let s;
                for (s = 0; s < i.length; s += 1) {
                    const r = Z(o, i, s);
                    a[s] ? a[s].p(r, u) : ((a[s] = ee(r)), a[s].c(), a[s].m(e, null));
                }
                for (; s < a.length; s += 1) a[s].d(1);
                a.length = i.length;
            }
            u & 33 && Q(e, o[0]);
        },
        d(o) {
            o && v(e), me(a, o), (n = !1), S(l);
        },
    };
}
function Ae(t) {
    let e, n, l, i;
    return {
        c() {
            (e = y('button')),
                (n = K(t[0])),
                c(e, 'class', 'b3-button b3-button--outline fn__flex-center fn__size200'),
                c(e, 'id', t[3]);
        },
        m(a, o) {
            M(a, e, o), g(e, n), l || ((i = k(e, 'click', t[8])), (l = !0));
        },
        p(a, o) {
            o & 1 && q(n, a[0]), o & 8 && c(e, 'id', a[3]);
        },
        d(a) {
            a && v(e), (l = !1), i();
        },
    };
}
function Ie(t) {
    let e, n, l;
    return {
        c() {
            (e = y('input')),
                c(e, 'class', 'b3-text-field fn__flex-center fn__size200'),
                c(e, 'id', t[3]),
                c(e, 'placeholder', t[4]);
        },
        m(i, a) {
            M(i, e, a),
                D(e, t[0]),
                n || ((l = [k(e, 'input', t[11]), k(e, 'change', t[9])]), (n = !0));
        },
        p(i, a) {
            a & 8 && c(e, 'id', i[3]),
                a & 16 && c(e, 'placeholder', i[4]),
                a & 33 && e.value !== i[0] && D(e, i[0]);
        },
        d(i) {
            i && v(e), (n = !1), S(l);
        },
    };
}
function Le(t) {
    let e, n, l;
    return {
        c() {
            (e = y('input')),
                c(e, 'class', 'b3-switch fn__flex-center'),
                c(e, 'id', t[3]),
                c(e, 'type', 'checkbox');
        },
        m(i, a) {
            M(i, e, a),
                (e.checked = t[0]),
                n || ((l = [k(e, 'change', t[10]), k(e, 'change', t[9])]), (n = !0));
        },
        p(i, a) {
            a & 8 && c(e, 'id', i[3]), a & 33 && (e.checked = i[0]);
        },
        d(i) {
            i && v(e), (n = !1), S(l);
        },
    };
}
function ee(t) {
    let e,
        n = t[7] + '',
        l,
        i;
    return {
        c() {
            (e = y('option')), (l = K(n)), (e.__value = i = t[15]), (e.value = e.__value);
        },
        m(a, o) {
            M(a, e, o), g(e, l);
        },
        p(a, o) {
            o & 32 && n !== (n = a[7] + '') && q(l, n),
                o & 32 && i !== (i = a[15]) && ((e.__value = i), (e.value = e.__value));
        },
        d(a) {
            a && v(e);
        },
    };
}
function Pe(t) {
    let e, n, l, i, a, o, u, s, r;
    function m(h, d) {
        if (h[1] === 'checkbox') return Le;
        if (h[1] === 'input') return Ie;
        if (h[1] === 'button') return Ae;
        if (h[1] === 'select') return Ve;
        if (h[1] == 'slider') return Be;
    }
    let _ = m(t),
        f = _ && _(t);
    return {
        c() {
            (e = y('label')),
                (n = y('div')),
                (l = K(t[2])),
                (i = w()),
                (a = y('div')),
                (o = K(t[7])),
                (u = w()),
                (s = y('span')),
                (r = w()),
                f && f.c(),
                c(a, 'class', 'b3-label__text'),
                c(n, 'class', 'fn__flex-1'),
                c(s, 'class', 'fn__space'),
                c(e, 'class', 'fn__flex b3-label');
        },
        m(h, d) {
            M(h, e, d),
                g(e, n),
                g(n, l),
                g(n, i),
                g(n, a),
                g(a, o),
                g(e, u),
                g(e, s),
                g(e, r),
                f && f.m(e, null);
        },
        p(h, [d]) {
            d & 4 && q(l, h[2]),
                d & 128 && q(o, h[7]),
                _ === (_ = m(h)) && f
                    ? f.p(h, d)
                    : (f && f.d(1), (f = _ && _(h)), f && (f.c(), f.m(e, null)));
        },
        i: V,
        o: V,
        d(h) {
            h && v(e), f && f.d();
        },
    };
}
function Ke(t, e, n) {
    let { type: l } = e,
        { title: i } = e,
        { text: a } = e,
        { settingKey: o } = e,
        { settingValue: u } = e,
        { placeholder: s = '' } = e,
        { options: r = {} } = e,
        { slider: m = { min: 0, max: 100, step: 1 } } = e;
    const _ = Se();
    function f() {
        _('clicked');
    }
    function h() {
        _('changed', { key: o, value: u });
    }
    function d() {
        (u = this.checked), n(0, u), n(5, r);
    }
    function j() {
        (u = this.value), n(0, u), n(5, r);
    }
    function fe() {
        (u = ye(this)), n(0, u), n(5, r);
    }
    function de() {
        (u = pe(this.value)), n(0, u), n(5, r);
    }
    return (
        (t.$$set = p => {
            'type' in p && n(1, (l = p.type)),
                'title' in p && n(2, (i = p.title)),
                'text' in p && n(7, (a = p.text)),
                'settingKey' in p && n(3, (o = p.settingKey)),
                'settingValue' in p && n(0, (u = p.settingValue)),
                'placeholder' in p && n(4, (s = p.placeholder)),
                'options' in p && n(5, (r = p.options)),
                'slider' in p && n(6, (m = p.slider));
        }),
        [u, l, i, o, s, r, m, a, f, h, d, j, fe, de]
    );
}
class L extends se {
    constructor(e) {
        super(),
            ae(this, e, Ke, Pe, ie, {
                type: 1,
                title: 2,
                text: 7,
                settingKey: 3,
                settingValue: 0,
                placeholder: 4,
                options: 5,
                slider: 6,
            });
    }
}
function Oe(t) {
    let e, n, l, i, a, o, u, s, r, m, _, f, h;
    return (
        (i = new L({
            props: {
                type: 'checkbox',
                title: 'Checkbox',
                text: 'This is a checkbox',
                settingKey: 'Checkbox',
                settingValue: !0,
            },
        })),
        i.$on('changed', t[0]),
        (o = new L({
            props: {
                type: 'input',
                title: 'Input',
                text: 'This is an input',
                settingKey: 'Input',
                settingValue: '',
                placeholder: 'Input something',
            },
        })),
        o.$on('changed', t[1]),
        (s = new L({
            props: {
                type: 'button',
                title: 'Button',
                text: 'This is a button',
                settingKey: 'Button',
                settingValue: 'Click me',
            },
        })),
        s.$on('clicked', t[2]),
        (m = new L({
            props: {
                type: 'select',
                title: 'Select',
                text: 'This is a select',
                settingKey: 'Select',
                settingValue: 'left',
                options: { left: 'Left', center: 'Center', right: 'Right' },
            },
        })),
        m.$on('changed', t[3]),
        (f = new L({
            props: {
                type: 'slider',
                title: 'Slide',
                text: 'This is a slide',
                settingKey: 'Slide',
                settingValue: 50,
                slider: { min: 0, max: 100, step: 1 },
            },
        })),
        f.$on('changed', t[4]),
        {
            c() {
                (e = y('div')),
                    (n = y('div')),
                    (n.innerHTML = `<div class="fn_flex-1"><h4>This setting panel is provided by a svelte component</h4> 
            <div class="b3-label__text"><span class="fn__flex-1">See:
                    <pre style="display: inline">/lib/setting-pannel.svelte</pre></span></div></div>`),
                    (l = w()),
                    I(i.$$.fragment),
                    (a = w()),
                    I(o.$$.fragment),
                    (u = w()),
                    I(s.$$.fragment),
                    (r = w()),
                    I(m.$$.fragment),
                    (_ = w()),
                    I(f.$$.fragment),
                    c(n, 'data-type', 'Header'),
                    c(n, 'class', 'fn__flex b3-label'),
                    c(e, 'class', 'config__tab-container');
            },
            m(d, j) {
                M(d, e, j),
                    g(e, n),
                    g(e, l),
                    T(i, e, null),
                    g(e, a),
                    T(o, e, null),
                    g(e, u),
                    T(s, e, null),
                    g(e, r),
                    T(m, e, null),
                    g(e, _),
                    T(f, e, null),
                    (h = !0);
            },
            p: V,
            i(d) {
                h ||
                    (x(i.$$.fragment, d),
                    x(o.$$.fragment, d),
                    x(s.$$.fragment, d),
                    x(m.$$.fragment, d),
                    x(f.$$.fragment, d),
                    (h = !0));
            },
            o(d) {
                A(i.$$.fragment, d),
                    A(o.$$.fragment, d),
                    A(s.$$.fragment, d),
                    A(m.$$.fragment, d),
                    A(f.$$.fragment, d),
                    (h = !1);
            },
            d(d) {
                d && v(e), C(i), C(o), C(s), C(m), C(f);
            },
        }
    );
}
function ze(t) {
    return (
        ve(() => {
            b.showMessage('Setting panel opened');
        }),
        we(() => {
            b.showMessage('Setting panel closed');
        }),
        [
            o => {
                b.showMessage(`Checkbox changed: ${o.detail.key} = ${o.detail.value}`);
            },
            o => {
                b.showMessage(`Input changed: ${o.detail.key} = ${o.detail.value}`);
            },
            () => {
                b.showMessage('Button clicked');
            },
            o => {
                b.showMessage(`Select changed: ${o.detail.key} = ${o.detail.value}`);
            },
            o => {
                b.showMessage(`Slide changed: ${o.detail.key} = ${o.detail.value}`);
            },
        ]
    );
}
class qe extends se {
    constructor(e) {
        super(), ae(this, e, ze, Oe, ie, {});
    }
}
async function G(t, e) {
    let n = await b.fetchSyncPost(t, e);
    return n.code === 0 ? n.data : null;
}
async function De(t, e, n) {
    return G('/api/block/appendBlock', { dataType: t, data: e, parentID: n });
}
async function He(t) {
    return G('/api/block/deleteBlock', { id: t });
}
async function je(t, e) {
    return G('/api/attr/setBlockAttrs', { id: t, attrs: e });
}
const te = 'menu-config',
    N = '​';
let re;
class Fe extends b.Plugin {
    constructor() {
        super(...arguments);
        W(this, 'isMobile');
    }
    async onload() {
        (this.data[te] = { readonlyText: 'Readonly' }),
            console.log('loading plugin-sample', this.i18n),
            (re = this.addFloatLayer);
        const n = b.getFrontend();
        (this.isMobile = n === 'mobile' || n === 'browser-mobile'),
            console.log(this.i18n.helloPlugin),
            this.eventBus.on('loaded-protyle', this.memoMain),
            this.addCommand({
                langKey: 'addMemo',
                hotkey: '',
                langText: 'add memo',
                editorCallback: l => {
                    replaceSelectedText(l);
                },
            });
    }
    onLayoutReady() {
        this.loadData(te), console.log(`frontend: ${b.getFrontend()}; backend: ${b.getBackend()}`);
    }
    onunload() {
        console.log(this.i18n.byePlugin),
            b.showMessage('Goodbye SiYuan Plugin'),
            console.log('onunload');
    }
    openDIYSetting() {
        let n = new b.Dialog({
                title: 'SettingPannel',
                content: '<div id="SettingPanel"></div>',
                width: '600px',
                destroyCallback: i => {
                    console.log('destroyCallback', i), l.$destroy();
                },
            }),
            l = new qe({ target: n.element.querySelector('#SettingPanel') });
    }
    memoMain({ detail: n }) {
        let l = n;
        Ne(l);
    }
}
function Ne(t) {
    // 添加按钮
    if (t.toolbar.element.querySelector('[data-type="quote"]')) return;
    const e = document.createElement('button');
    e.setAttribute('class', 'protyle-toolbar__item b3-tooltips b3-tooltips__n'),
        e.setAttribute('data-type', 'quote'),
        e.setAttribute('aria-label', '添加直角引号'),
        (e.innerHTML =
            '<svg t="1704251848221" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9759" width="16" height="16"><path d="M248.7 259.4c-10.8 0-19.5 8.7-19.5 19.5v465.3c0 10.8 8.7 19.5 19.5 19.5h6.3c3.3 0 6.5-0.8 9.2-2.3l0.8-499.2c-2.9-1.8-6.4-2.8-10-2.8h-6.3z" fill="#2c2c2c" p-id="9760"></path><path d="M915.7 931L759.3 775.1c-2.8-2.8-6.6-4.4-10.6-4.4l-454.5 0.5 0.9-533.6c0-4-1.6-7.8-4.4-10.6L134.1 70.6c-4.3-4.3-10.7-5.6-16.3-3.2-5.6 2.3-9.3 7.8-9.3 13.9v860.5c0 8.3 6.7 15 15 15h781.6c6.1 0 11.5-3.7 13.9-9.3 2.3-5.7 1-12.2-3.3-16.5z m-175.5-4.3l0.2-51.3c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.2 51.3h-17.6l0.1-31.6c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 31.6H685l0.1-31.6c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 31.7h-17.6l0.1-31.7c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 31.7h-17.6l0.1-31.7c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 31.8h-17.6l0.2-51.5c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.2 51.6h-17.6l0.1-31.9c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 31.9H547l0.1-31.9c0-2.8-2.2-5-5-5s-5 2.2-5 5L537 927h-17.6l0.1-32c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32h-17.6l0.1-32c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32.1H464l0.2-51.8c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.2 51.9h-17.6l0.1-32.1c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32.2h-17.6l0.1-32.2c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32.2h-17.6l0.1-32.3c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32.3h-17.6l0.1-32.3c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32.4H326l0.2-52.1c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.2 52.1h-17.6l0.1-32.4c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32.5h-17.6l0.1-32.5c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32.5h-17.6l0.1-32.5c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32.6h-17.6l0.1-32.6c0-2.8-2.2-5-5-5s-5 2.2-5 5l-0.1 32.6h-17.8l0.3-52.4c0-2.8-2.2-5-5-5-2.7 0-5 2.2-5 5l-0.3 52.4h-39.1V792.7l51.3 0.2c2.8 0 5-2.2 5-5s-2.2-5-5-5l-51.3-0.2v-17.6l31.6 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-31.6-0.1v-17.6l31.6 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-31.7-0.1v-17.6l31.7 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-31.7-0.1v-17.6l31.7 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-31.8-0.1v-17.6l51.5 0.2c2.8 0 5-2.2 5-5s-2.2-5-5-5l-51.6-0.2v-17.6l31.9 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-31.9-0.1v-17.6l31.9 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-31.9-0.1v-17.6l32 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32-0.1v-17.6l32 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32.1-0.1v-17.6l51.8 0.2c2.8 0 5-2.2 5-5s-2.2-5-5-5l-51.9-0.2v-17.6l32.1 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32.2-0.1v-17.6l32.2 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32.2-0.1v-17.6l32.3 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32.3-0.1v-17.6l32.3 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32.4-0.1v-17.6l52.1 0.2c2.8 0 5-2.2 5-5s-2.2-5-5-5l-52.1-0.2v-17.6l32.4 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32.5-0.1V323l32.5 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32.5-0.1v-17.6l32.5 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32.6-0.1v-17.6l32.6 0.1c2.8 0 5-2.2 5-5s-2.2-5-5-5l-32.6-0.1V240l52.4 0.3c2.7 0 5-2.2 5-5s-2.2-5-5-5l-52.4-0.3V117.4L265 243.8v18.4l-0.8 499.2v24.8c0 4 1.6 7.8 4.4 10.6 2.8 2.8 6.6 4.4 10.6 4.4l463.3-0.5 126.3 125.9H740.2z" fill="#2c2c2c" p-id="9761"></path></svg>'),
        t.toolbar.element.append(e),
        e.addEventListener('click', () => {
            replaceSelectedText(t);
        });
}
async function replaceSelectedText(protyle) {
    const range = protyle.toolbar.range;
    let selectText = protyle.toolbar.range.toString();
    const replaceText = `「${selectText}」`;
    const textNode = document.createTextNode(replaceText);
    // 替换前存储，方便撤回
    protyle.toolbar.setInlineMark(protyle, 'clear', 'toolbar');
    // 替换文本
    range.deleteContents();
    range.insertNode(textNode);
    // 默认加粗
    protyle.toolbar.setInlineMark(protyle, 'strong', 'range');
    // range.collapse(false); // pass false, the range will collapse to its end point.
    protyle.toolbar.element.classList.add('fn__none'); // close toolbar
}
function ue(t) {
    let e;
    t != null && (e = t),
        e === null &&
            (e = document.querySelector(
                '.card__block.fn__flex-1.protyle:not(.fn__none) .protyle-wysiwyg.protyle-wysiwyg--attr'
            )),
        e === null &&
            (e = document.querySelector(
                '.fn__flex-1.protyle:not(.fn__none) .protyle-wysiwyg.protyle-wysiwyg--attr'
            ));
    let n = document.createEvent('HTMLEvents');
    n.initEvent('input', !0, !1), e.dispatchEvent(n);
}

exports.default = Fe;
exports.saveViaTransaction = ue;
