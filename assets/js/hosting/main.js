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
};

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'AW-10951858704');
gtag('config', 'AW-10951858704/OCSxCJuvv9IYEJC0oOYo', {
    'phone_conversion_number': '(201) 283-0510'
});
// id='wpml-cookie-js-extra'
var wpml_cookies = { "wp-wpml_current_language": { "value": "en", "expires": 1, "path": "\/" } };
var wpml_cookies = { "wp-wpml_current_language": { "value": "en", "expires": 1, "path": "\/" } };
//
var rcewpp = {
    "ajax_url": "https://p.codibu.com/wp-admin/admin-ajax.php",
    "nonce": "2656e00dda",
    "home_url": "https://p.codibu.com/",
    "settings_icon": 'https://p.codibu.com/wp-content/plugins/export-wp-page-to-static-html-pro-premium/admin/images/settings.png',
    "settings_hover_icon": 'https://p.codibu.com/wp-content/plugins/export-wp-page-to-static-html-pro-premium/admin/images/settings_hover.png'
};
//
window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/p.codibu.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.2.2" } };
!function (e, a, t) { var n, r, o, i = a.createElement("canvas"), p = i.getContext && i.getContext("2d"); function s(e, t) { p.clearRect(0, 0, i.width, i.height), p.fillText(e, 0, 0); e = i.toDataURL(); return p.clearRect(0, 0, i.width, i.height), p.fillText(t, 0, 0), e === i.toDataURL() } function c(e) { var t = a.createElement("script"); t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t) } for (o = Array("flag", "emoji"), t.supports = { everything: !0, everythingExceptFlag: !0 }, r = 0; r < o.length; r++)t.supports[o[r]] = function (e) { if (p && p.fillText) switch (p.textBaseline = "top", p.font = "600 32px Arial", e) { case "flag": return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !s("\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"); case "emoji": return !s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff") }return !1 }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]); t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function () { t.DOMReady = !0 }, t.supports.everything || (n = function () { t.readyCallback() }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function () { "complete" === a.readyState && t.readyCallback() })), (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji))) }(window, document, window._wpemojiSettings);
//
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = 'compiled';
// id='contact-form-7-js-extra'
var wpcf7 = { "api": { "root": "https:\/\/p.codibu.com\/wp-json\/", "namespace": "contact-form-7\/v1" } };
// id='mfn-scripts-js-extra'
var mfn = { "mobileInit": "1240", "parallax": "translate3d", "responsive": "1", "sidebarSticky": "", "lightbox": { "disable": false, "disableMobile": false, "title": false }, "slider": { "blog": 0, "clients": 0, "offer": 0, "portfolio": 0, "shop": 0, "slider": 0, "testimonials": 0 }, "livesearch": { "minChar": 3, "loadPosts": 10, "translation": { "pages": "Pages", "categories": "Categories", "portfolio": "Portfolio", "post": "Posts", "products": "Products" } }, "accessibility": { "translation": { "headerContainer": "Header container", "toggleSubmenu": "Toggle submenu" } }, "home_url": "", "home_url_lang": "https:\/\/p.codibu.com", "site_url": "https:\/\/p.codibu.com" };
// id='elementskit-framework-js-frontend-js-after'
var elementskit = {
    resturl: 'https://p.codibu.com/wp-json/elementskit/v1/',
}
// id='wpcf7-recaptcha-js-extra'
var wpcf7_recaptcha = { "sitekey": "6LfltWoiAAAAAPAhX8MK9wPt7qcjMHecbRcYzgIb", "actions": { "homepage": "homepage", "contactform": "contactform" } };
// id='wp-i18n-js-after'
wp.i18n.setLocaleData({ 'text direction\u0004ltr': ['ltr'] });
// id='elementor-pro-frontend-js-before'
var ElementorProFrontendConfig = { "ajaxurl": "https:\/\/p.codibu.com\/wp-admin\/admin-ajax.php", "nonce": "320b39240e", "urls": { "assets": "https:\/\/p.codibu.com\/wp-content\/plugins\/elementor-pro\/assets\/", "rest": "https:\/\/p.codibu.com\/wp-json\/" }, "shareButtonsNetworks": { "facebook": { "title": "Facebook", "has_counter": true }, "twitter": { "title": "Twitter" }, "linkedin": { "title": "LinkedIn", "has_counter": true }, "pinterest": { "title": "Pinterest", "has_counter": true }, "reddit": { "title": "Reddit", "has_counter": true }, "vk": { "title": "VK", "has_counter": true }, "odnoklassniki": { "title": "OK", "has_counter": true }, "tumblr": { "title": "Tumblr" }, "digg": { "title": "Digg" }, "skype": { "title": "Skype" }, "stumbleupon": { "title": "StumbleUpon", "has_counter": true }, "mix": { "title": "Mix" }, "telegram": { "title": "Telegram" }, "pocket": { "title": "Pocket", "has_counter": true }, "xing": { "title": "XING", "has_counter": true }, "whatsapp": { "title": "WhatsApp" }, "email": { "title": "Email" }, "print": { "title": "Print" } }, "facebook_sdk": { "lang": "en_US", "app_id": "" }, "lottie": { "defaultAnimationUrl": "https:\/\/p.codibu.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json" } };
// id='elementor-frontend-js-before'
var elementorFrontendConfig = { "environmentMode": { "edit": false, "wpPreview": false, "isScriptDebug": false }, "i18n": { "shareOnFacebook": "Share on Facebook", "shareOnTwitter": "Share on Twitter", "pinIt": "Pin it", "download": "Download", "downloadImage": "Download image", "fullscreen": "Fullscreen", "zoom": "Zoom", "share": "Share", "playVideo": "Play Video", "previous": "Previous", "next": "Next", "close": "Close", "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right", "a11yCarouselPrevSlideMessage": "Previous slide", "a11yCarouselNextSlideMessage": "Next slide", "a11yCarouselFirstSlideMessage": "This is the first slide", "a11yCarouselLastSlideMessage": "This is the last slide", "a11yCarouselPaginationBulletMessage": "Go to slide" }, "is_rtl": false, "breakpoints": { "xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "responsive": { "breakpoints": { "mobile": { "label": "Mobile Portrait", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": { "label": "Mobile Landscape", "value": 880, "default_value": 880, "direction": "max", "is_enabled": false }, "tablet": { "label": "Tablet Portrait", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": { "label": "Tablet Landscape", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": false }, "laptop": { "label": "Laptop", "value": 1366, "default_value": 1366, "direction": "max", "is_enabled": false }, "widescreen": { "label": "Widescreen", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } } }, "version": "3.15.3", "is_static": false, "experimentalFeatures": { "e_dom_optimization": true, "e_optimized_assets_loading": true, "e_optimized_css_loading": true, "additional_custom_breakpoints": true, "e_swiper_latest": true, "theme_builder_v2": true, "landing-pages": true, "page-transitions": true, "notes": true, "loop": true, "form-submissions": true, "e_scroll_snap": true }, "urls": { "assets": "https:\/\/p.codibu.com\/wp-content\/plugins\/elementor\/assets\/" }, "swiperClass": "swiper", "settings": { "page": [], "editorPreferences": [] }, "kit": { "active_breakpoints": ["viewport_mobile", "viewport_tablet"], "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description" }, "post": { "id": 492, "title": "Website%20AWS%20Hosting%20Services%20in%20USA%20%7C%20Codibu", "excerpt": "", "featuredImage": false } };	
// id='elementskit-elementor-js-extra'
var ekit_config = { "ajaxurl": "https:\/\/p.codibu.com\/wp-admin\/admin-ajax.php", "nonce": "f8deed67ee" };
// id='unlimited-elements-scripts'
jQuery(document).ready(function () {
    function initArrows(parentid2) {
        var objRemoteApi = new UERemoteWidgets();
        var options = {};
        if (parentid2)
            options.force_parentid = parentid2;
        objRemoteApi.onWidgetInit("uc_arrow_navigation_elementor_275a03a", function (objWidget) {
            objRemoteApi.setAction("next", ".ue-carousel-next", true);
            objRemoteApi.setAction("prev", ".ue-carousel-prev", true);
        }, options);
    }
    initArrows();
    var objWidget = jQuery("#uc_arrow_navigation_elementor_275a03a");
    var parentid2 = objWidget.data("parentid2");
    if (parentid2)
        initArrows(parentid2);

});
jQuery(document).ready(function () {
    function uc_card_carousel_elementor_787fe63_start() {
        var objCarousel = jQuery('#uc_card_carousel_elementor_787fe63');
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
    } if (jQuery("#uc_card_carousel_elementor_787fe63").length) uc_card_carousel_elementor_787fe63_start();
    jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
        if (objPopup.$element.has(jQuery("#uc_card_carousel_elementor_787fe63")).length) uc_card_carousel_elementor_787fe63_start();
    });
});
jQuery(document).ready(function () {
    function uc_card_carousel_elementor_f05b259_start() {
        var objCarousel = jQuery('#uc_card_carousel_elementor_f05b259');
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

    } if (jQuery("#uc_card_carousel_elementor_f05b259").length) uc_card_carousel_elementor_f05b259_start();
    jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
        if (objPopup.$element.has(jQuery("#uc_card_carousel_elementor_f05b259")).length) uc_card_carousel_elementor_f05b259_start();
    });
});
jQuery(document).ready(function () {
    function uc_card_carousel_elementor_e856607_start() {
        var objCarousel = jQuery('#uc_card_carousel_elementor_e856607');
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

    } if (jQuery("#uc_card_carousel_elementor_e856607").length) uc_card_carousel_elementor_e856607_start();
    jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
        if (objPopup.$element.has(jQuery("#uc_card_carousel_elementor_e856607")).length) uc_card_carousel_elementor_e856607_start();
    });
});
//
jQuery(document).ready(function () {
    function uc_card_carousel_elementor_7cfe86a666_start() {

        var objCarousel = jQuery('#uc_card_carousel_elementor_7cfe86a666');

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


    } if (jQuery("#uc_card_carousel_elementor_7cfe86a666").length) uc_card_carousel_elementor_7cfe86a666_start();
    jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
        if (objPopup.$element.has(jQuery("#uc_card_carousel_elementor_7cfe86a666")).length) uc_card_carousel_elementor_7cfe86a666_start();
    });
});