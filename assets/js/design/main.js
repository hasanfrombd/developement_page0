jQuery(document).ready(function () {

    function initArrows(parentid2) {

        var objRemoteApi = new UERemoteWidgets();

        var options = {};

        if (parentid2)
            options.force_parentid = parentid2;

        objRemoteApi.onWidgetInit("uc_arrow_navigation_elementor_888fe88", function (objWidget) {

            objRemoteApi.setAction("next", ".ue-carousel-next", true);

            objRemoteApi.setAction("prev", ".ue-carousel-prev", true);


        }, options);

    }

    initArrows();

    var objWidget = jQuery("#uc_arrow_navigation_elementor_888fe88");

    var parentid2 = objWidget.data("parentid2");
    if (parentid2)
        initArrows(parentid2);

});

/* Card Carousel scripts: */

jQuery(document).ready(function () {
    function uc_card_carousel_elementor_1b24b7c2_start() {

        var objCarousel = jQuery('#uc_card_carousel_elementor_1b24b7c2');

        function initCarousel() {

            objCarousel.owlCarousel({
                loop: true,
                rtl: false,
                autoplay: true,
                paddingType: "none",
                autoplayHoverPause: true,
                margin: 10,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                nav: false,
                rewindNav: false,
                center: false,
                mouseDrag: true,
                touchDrag: true,
                setActiveClassOnMobile: true,
                changeItemOnClick: false,
                autoplayTimeout: 3000,
                smartSpeed: 1500,
                dots: false,
                shuffle: false,
                scrollToHead: false,
                scrollToHeadOffset: 0,
                mousewheelControl: false,
                responsive: {

                    0: {
                        items: 1,
                        slideBy: 1,
                        scrollToHeadForceOnMobile: false,
                        dotsEach: 1,



                    },
                    768: {
                        items: 2,
                        slideBy: 1,

                        dotsEach: 1,



                    },
                    980: {
                        items: 3,
                        slideBy: 1,


                        dotsEach: 1,



                    }
                }
            });

        }

        initCarousel();

        objCarousel.on("uc_ajax_refreshed", function () {
            objCarousel.trigger('destroy.owl.carousel');
            initCarousel();
        });


        objCarousel.trigger("uc-object-ready");
        jQuery("body").trigger("uc-remote-parent-init", [objCarousel]);


    } if (jQuery("#uc_card_carousel_elementor_1b24b7c2").length) uc_card_carousel_elementor_1b24b7c2_start();
    jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
        if (objPopup.$element.has(jQuery("#uc_card_carousel_elementor_1b24b7c2")).length) uc_card_carousel_elementor_1b24b7c2_start();
    });
});

/* Card Carousel scripts: */

jQuery(document).ready(function () {
    function uc_card_carousel_elementor_620a4e93_start() {

        var objCarousel = jQuery('#uc_card_carousel_elementor_620a4e93');

        function initCarousel() {

            objCarousel.owlCarousel({
                loop: true,
                rtl: false,
                autoplay: true,
                paddingType: "none",
                autoplayHoverPause: true,
                margin: 10,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                nav: false,
                rewindNav: false,
                center: false,
                mouseDrag: true,
                touchDrag: true,
                setActiveClassOnMobile: true,
                changeItemOnClick: false,
                autoplayTimeout: 3000,
                smartSpeed: 1500,
                dots: false,
                shuffle: false,
                scrollToHead: false,
                scrollToHeadOffset: 0,
                mousewheelControl: false,
                responsive: {

                    0: {
                        items: 1,
                        slideBy: 1,
                        scrollToHeadForceOnMobile: false,
                        dotsEach: 1,



                    },
                    768: {
                        items: 2,
                        slideBy: 1,

                        dotsEach: 1,



                    },
                    980: {
                        items: 3,
                        slideBy: 1,


                        dotsEach: 1,



                    }
                }
            });

        }

        initCarousel();

        objCarousel.on("uc_ajax_refreshed", function () {
            objCarousel.trigger('destroy.owl.carousel');
            initCarousel();
        });


        objCarousel.trigger("uc-object-ready");
        jQuery("body").trigger("uc-remote-parent-init", [objCarousel]);


    } if (jQuery("#uc_card_carousel_elementor_620a4e93").length) uc_card_carousel_elementor_620a4e93_start();
    jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
        if (objPopup.$element.has(jQuery("#uc_card_carousel_elementor_620a4e93")).length) uc_card_carousel_elementor_620a4e93_start();
    });
});

/* Card Carousel scripts: */

jQuery(document).ready(function () {
    function uc_card_carousel_elementor_9bcdee7_start() {

        var objCarousel = jQuery('#uc_card_carousel_elementor_9bcdee7');

        function initCarousel() {

            objCarousel.owlCarousel({
                loop: true,
                rtl: false,
                autoplay: true,
                paddingType: "none",
                autoplayHoverPause: true,
                margin: 30,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                nav: false,
                rewindNav: false,
                center: false,
                mouseDrag: true,
                touchDrag: true,
                setActiveClassOnMobile: true,
                changeItemOnClick: false,
                autoplayTimeout: 3000,
                smartSpeed: 1500,
                dots: false,
                shuffle: false,
                scrollToHead: false,
                scrollToHeadOffset: 0,
                mousewheelControl: true,
                responsive: {

                    0: {
                        items: 1,
                        slideBy: 1,
                        scrollToHeadForceOnMobile: false,
                        dotsEach: 1,



                    },
                    768: {
                        items: 2,
                        slideBy: 1,

                        dotsEach: 1,



                    },
                    980: {
                        items: 3,
                        slideBy: 1,


                        dotsEach: 1,



                    }
                }
            });

        }

        initCarousel();

        objCarousel.on("uc_ajax_refreshed", function () {
            objCarousel.trigger('destroy.owl.carousel');
            initCarousel();
        });


        objCarousel.trigger("uc-object-ready");
        jQuery("body").trigger("uc-remote-parent-init", [objCarousel]);


    } if (jQuery("#uc_card_carousel_elementor_9bcdee7").length) uc_card_carousel_elementor_9bcdee7_start();
    jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
        if (objPopup.$element.has(jQuery("#uc_card_carousel_elementor_9bcdee7")).length) uc_card_carousel_elementor_9bcdee7_start();
    });
});

var ElementorProFrontendConfig = { "ajaxurl": "https:\/\/p.codibu.com\/wp-admin\/admin-ajax.php", "nonce": "320b39240e", "urls": { "assets": "https:\/\/p.codibu.com\/wp-content\/plugins\/elementor-pro\/assets\/", "rest": "https:\/\/p.codibu.com\/wp-json\/" }, "shareButtonsNetworks": { "facebook": { "title": "Facebook", "has_counter": true }, "twitter": { "title": "Twitter" }, "linkedin": { "title": "LinkedIn", "has_counter": true }, "pinterest": { "title": "Pinterest", "has_counter": true }, "reddit": { "title": "Reddit", "has_counter": true }, "vk": { "title": "VK", "has_counter": true }, "odnoklassniki": { "title": "OK", "has_counter": true }, "tumblr": { "title": "Tumblr" }, "digg": { "title": "Digg" }, "skype": { "title": "Skype" }, "stumbleupon": { "title": "StumbleUpon", "has_counter": true }, "mix": { "title": "Mix" }, "telegram": { "title": "Telegram" }, "pocket": { "title": "Pocket", "has_counter": true }, "xing": { "title": "XING", "has_counter": true }, "whatsapp": { "title": "WhatsApp" }, "email": { "title": "Email" }, "print": { "title": "Print" } }, "facebook_sdk": { "lang": "en_US", "app_id": "" }, "lottie": { "defaultAnimationUrl": "https:\/\/p.codibu.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json" } };

wp.i18n.setLocaleData({ 'text direction\u0004ltr': ['ltr'] });

var wpcf7_recaptcha = { "sitekey": "6LfltWoiAAAAAPAhX8MK9wPt7qcjMHecbRcYzgIb", "actions": { "homepage": "homepage", "contactform": "contactform" } };

var elementskit = {
    resturl: 'https://p.codibu.com/wp-json/elementskit/v1/',
}

var wpcf7 = { "api": { "root": "https:\/\/p.codibu.com\/wp-json\/", "namespace": "contact-form-7\/v1" } };

window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = 'compiled';

var ekit_config = { "ajaxurl": "https:\/\/p.codibu.com\/wp-admin\/admin-ajax.php", "nonce": "f8deed67ee" };

window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/p.codibu.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.2.2" } };
!function (e, a, t) { var n, r, o, i = a.createElement("canvas"), p = i.getContext && i.getContext("2d"); function s(e, t) { p.clearRect(0, 0, i.width, i.height), p.fillText(e, 0, 0); e = i.toDataURL(); return p.clearRect(0, 0, i.width, i.height), p.fillText(t, 0, 0), e === i.toDataURL() } function c(e) { var t = a.createElement("script"); t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t) } for (o = Array("flag", "emoji"), t.supports = { everything: !0, everythingExceptFlag: !0 }, r = 0; r < o.length; r++)t.supports[o[r]] = function (e) { if (p && p.fillText) switch (p.textBaseline = "top", p.font = "600 32px Arial", e) { case "flag": return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !s("\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"); case "emoji": return !s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff") }return !1 }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]); t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function () { t.DOMReady = !0 }, t.supports.everything || (n = function () { t.readyCallback() }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function () { "complete" === a.readyState && t.readyCallback() })), (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji))) }(window, document, window._wpemojiSettings);

var wpml_cookies = { "wp-wpml_current_language": { "value": "en", "expires": 1, "path": "\/" } };
var wpml_cookies = { "wp-wpml_current_language": { "value": "en", "expires": 1, "path": "\/" } };

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'AW-10951858704');
gtag('config', 'AW-10951858704/OCSxCJuvv9IYEJC0oOYo', {
    'phone_conversion_number': '(201) 283-0510'
});

function setREVStartSize(e) {
    window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
    window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
    try {
        var pw = document.getElementById(e.c).parentNode.offsetWidth,
            newh;
        pw = pw === 0 || isNaN(pw) || (e.l == "fullwidth" || e.layout == "fullwidth") ? window.RSIW : pw;
        e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
        e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
        e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
        e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
        e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
        e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
        e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
        if (e.layout === "fullscreen" || e.l === "fullscreen")
            newh = Math.max(e.mh, window.RSIH);
        else {
            e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
            for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
            e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
            e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
            for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

            var nl = new Array(e.rl.length),
                ix = 0,
                sl;
            e.tabw = e.tabhide >= pw ? 0 : e.tabw;
            e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
            e.tabh = e.tabhide >= pw ? 0 : e.tabh;
            e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
            for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
            sl = nl[0];
            for (var i in nl) if (sl > nl[i] && nl[i] > 0) { sl = nl[i]; ix = i; }
            var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
            newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
        }
        var el = document.getElementById(e.c);
        if (el !== null && el) el.style.height = newh + "px";
        el = document.getElementById(e.c + "_wrapper");
        if (el !== null && el) {
            el.style.height = newh + "px";
            el.style.display = "block";
        }
    } catch (e) {
        console.log("Failure at Presize of Slider:" + e)
    }
    //});
};

var rcewpp = {
    "ajax_url": "https://p.codibu.com/wp-admin/admin-ajax.php",
    "nonce": "2656e00dda",
    "home_url": "https://p.codibu.com/",
    "settings_icon": 'https://p.codibu.com/wp-content/plugins/export-wp-page-to-static-html-pro-premium/admin/images/settings.png',
    "settings_hover_icon": 'https://p.codibu.com/wp-content/plugins/export-wp-page-to-static-html-pro-premium/admin/images/settings_hover.png'
};


jQuery(document).ready(function () {
    function uc_card_carousel_elementor_7cfe86a777_start() {

        var objCarousel = jQuery('#uc_card_carousel_elementor_7cfe86a777');

        function initCarousel() {

            objCarousel.owlCarousel({
                loop: true,
                rtl: false,
                autoplay: true,
                paddingType: "none",
                autoplayHoverPause: false,
                margin: 50,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                nav: false,
                rewindNav: false,
                center: false,
                mouseDrag: true,
                touchDrag: true,
                setActiveClassOnMobile: true,
                changeItemOnClick: false,
                autoplayTimeout: 4000,
                smartSpeed: 4000,
                dots: false,
                shuffle: false,
                scrollToHead: false,
                scrollToHeadOffset: 0,
                mousewheelControl: true,
                responsive: {

                    0: {
                        items: 1,
                        slideBy: 1,
                        scrollToHeadForceOnMobile: false,
                        dotsEach: 1,



                    },
                    768: {
                        items: 2,
                        slideBy: 1,

                        dotsEach: 1,



                    },
                    980: {
                        items: 2,
                        slideBy: 1,


                        dotsEach: 1,



                    }
                }
            });

        }

        initCarousel();

        objCarousel.on("uc_ajax_refreshed", function () {
            objCarousel.trigger('destroy.owl.carousel');
            initCarousel();
        });


        objCarousel.trigger("uc-object-ready");
        jQuery("body").trigger("uc-remote-parent-init", [objCarousel]);


    } if (jQuery("#uc_card_carousel_elementor_7cfe86a777").length) uc_card_carousel_elementor_7cfe86a777_start();
    jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
        if (objPopup.$element.has(jQuery("#uc_card_carousel_elementor_7cfe86a777")).length) uc_card_carousel_elementor_7cfe86a777_start();
    });
});

jQuery(document).ready(function () {
    function uc_card_carousel_elementor_7cfe86a999_start() {

        var objCarousel = jQuery('#uc_card_carousel_elementor_7cfe86a999');

        function initCarousel() {

            objCarousel.owlCarousel({
                loop: true,
                rtl: false,
                autoplay: true,
                paddingType: "none",
                autoplayHoverPause: false,
                margin: 50,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                nav: false,
                rewindNav: false,
                center: false,
                mouseDrag: true,
                touchDrag: true,
                setActiveClassOnMobile: true,
                changeItemOnClick: false,
                autoplayTimeout: 7000,
                smartSpeed: 1000,
                dots: false,
                shuffle: false,
                scrollToHead: false,
                scrollToHeadOffset: 0,
                mousewheelControl: false,
                responsive: {

                    0: {
                        items: 1,
                        slideBy: 1,
                        scrollToHeadForceOnMobile: false,
                        dotsEach: 1,



                    },
                    768: {
                        items: 1,
                        slideBy: 1,

                        dotsEach: 1,



                    },
                    980: {
                        items: 1,
                        slideBy: 1,


                        dotsEach: 1,



                    }
                }
            });

        }

        initCarousel();

        objCarousel.on("uc_ajax_refreshed", function () {
            objCarousel.trigger('destroy.owl.carousel');
            initCarousel();
        });


        objCarousel.trigger("uc-object-ready");
        jQuery("body").trigger("uc-remote-parent-init", [objCarousel]);


    } if (jQuery("#uc_card_carousel_elementor_7cfe86a999").length) uc_card_carousel_elementor_7cfe86a999_start();
    jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
        if (objPopup.$element.has(jQuery("#uc_card_carousel_elementor_7cfe86a999")).length) uc_card_carousel_elementor_7cfe86a999_start();
    });
});