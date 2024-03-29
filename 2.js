/*! ECB - v1.6.24 - European Central Bank */
var ECB = window.ECB || {};
ECB.accordionBox = function() {
    var a = {
            accordionBoxes: document.querySelectorAll(".ecb-accordionBox,.ecb-accordionTab"),
            accordionHeader: "",
            accordionContent: ""
        },
        b = function() {
            a = {
                accordionBoxes: document.querySelectorAll(".ecb-accordionBox,.ecb-accordionTab"),
                accordionHeader: "",
                accordionContent: ""
            }
        },
        c = function(b) {
            $(a.accordionHeader).each(function(a, c) {
                var d = $(this);
                b && d[0] == $(b)[0] || d.hasClass("accordion-open") ? (d.addClass("accordion-open"), d.next($(c.accordionContent)).css({
                    display: "block"
                })) : (d.addClass("accordion-close"), d.next($(c.accordionContent)).css({
                    display: "none"
                }))
            })
        },
        d = function() {
            $(a.accordionHeader).click(function() {
                var b = $(this);
                b.hasClass("accordion-open") ? (b.removeClass("accordion-open"), b.addClass("accordion-close")) : (b.removeClass("accordion-close"), b.addClass("accordion-open")), b.next($(a.accordionContent)).slideToggle()
            })
        };
    return {
        init: function() {
            b(), $("a.accordionLink").click(function() {
                c($(this).attr("href"))
            }), a.accordionBoxes.length > 0 && (a.accordionHeader = document.querySelectorAll(".ecb-accordionHeader"), a.accordionContent = document.querySelectorAll(".ecb-accordionContent"), c(ECB.helpers.parseUrlParams().hash), d())
        }
    }
}();
var ECB = window.ECB || {},
    badges = [];
ECB.badges = function() {
    function a() {
        var a = new Date,
            b = a.getDate(),
            c = a.getMonth() + 1,
            d = a.getFullYear();
        return b < 10 && (b = "0" + b), c < 10 && (c = "0" + c), b + "/" + c + "/" + d
    }

    function b(b) {
        counter = 0, $("#" + b + " dl.ecb-basicList dt").each(function() {
            10 == $(this).text().length ? (d = parseInt($(this).text().substr(0, 2)), m = $(this).text().substr(3, 2), y = $(this).text().substr(6, 4), dt = new Date(y, m - 1, d, 23, 59)) : (dt = new Date($(this).text()), dt.setHours(23), dt.setMinutes(59), dt.setSeconds(59)), now = new Date, now < dt && (counter++, $(this).parent().parent().addClass("today"))
        }), counter > 0 && $("#" + b + "Counter").text(counter).show(), counter > 5 && $("#" + b + " p").last().append('<span class="newPressreleases">(' + a() + " - " + counter + " new)</span>");
        var c = {};
        c.id = b, c.counter = counter, c.visited = !1, badges.push({
            badge: c
        })
    }
    var c = {};
    if (tomorrow = new Date, tomorrow.setUTCDate(tomorrow.getDate() + 1), tomorrow.setUTCHours(0, 0, 0), $("body.section-home").length > 0 && (b("t1"), b("t2"), b("t3"), b("t4"), b("t5"), ECB.cookies.cookie("visitedTabs"))) try {
        badgesSaved = JSON.parse($.cookie("visitedTabs"));
        for (c in badgesSaved) selId = "#" + badgesSaved[c].badge.id + "Counter", badgesSaved[c].badge.visited && badgesSaved[c].badge.counter == badges[c].badge.counter && $(selId).addClass("visited")
    } catch (a) {
        $.cookie("visitedTabs", [])
    }
};
var ECB = window.ECB || {};
ECB.carousselSlider = function() {
    if ($(".ecb-mediaSlider").length) {
        var a = 280,
            b = 16,
            c = a + b;
        $(".ecb-mediaSlider").each(function(a, b) {
            var c = $(this);
            c.find("ul").addClass("mediaSlider-list"), c.find("ul").wrap('<div class="mediaSlider-scrollContainer">'), c.append('<div class="slide-scroll-control slide-scroll-control_left"><span class="fa fa-angle-left"> </span></div>'), c.append('<div class="slide-scroll-control slide-scroll-control_right"><span class="fa fa-angle-right"> </span></div>'), c.find(".slide-scroll-control_right").hide(), c.find(".slide-scroll-control_left").hide()
        });
        var d = function(a) {
            var d, e = $(a.target),
                f = $(this).find(".mediaSlider-scrollContainer"),
                g = f.scrollLeft();
            if (e.is(".fa-angle-right")) {
                var h = c - g % c;
                h < b && (h += c), d = g + h, f.animate({
                    scrollLeft: d
                }, 250)
            }
            if (e.is(".fa-angle-left")) {
                var h = g % c;
                h < b && (h += c), d = g - h, f.animate({
                    scrollLeft: d
                }, 250)
            }
        };
        $(".ecb-mediaSlider").on("click", d);
        var e = function(a) {
            var b = $(this).closest(".ecb-mediaSlider"),
                d = b.find(".mediaSlider-scrollContainer").scrollLeft(),
                e = b.find(".slide-scroll-control_left"),
                f = b.find(".slide-scroll-control_right"),
                g = b.find(".mediaSlider-scrollContainer").width(),
                h = $(this).closest(".ecb-mediaSlider").find(".mediaSlider-list").width();
            d >= c / 2 ? e.show() : e.hide(), d >= h - g - c / 2 ? f.hide() : f.show()
        };
        $(".mediaSlider-scrollContainer").on("scroll", e);
        var f = function() {
            $(".ecb-mediaSlider").each(function(a, d) {
                var e = $(this),
                    f = e.find(".mediaSlider-scrollContainer").width(),
                    g = e.find("ul li").length,
                    h = g * c - b;
                e.find("ul.mediaSlider-list").width(h);
                var i = Math.ceil(h / f);
                h % f < 2 * (i - 1) * b && (i -= 1), h <= f ? (e.addClass("extramargin"), e.find(".slide-scroll-control_right").hide()) : (e.find(".slide-scroll-control_right").show(), e.hasClass("extramargin") && e.removeClass("extramargin"))
            })
        };
        f(), $(window).smartresize(function() {
            f()
        })
    }
};
var ECB = window.ECB || {};
ECB.collapseYearsList = function() {
    var a = {
            sectionNav: document.getElementById("ecb-sectionNav")
        },
        b = new Date,
        c = b.getFullYear(),
        d = function() {
            a = {
                sectionNav: document.getElementById("ecb-sectionNav")
            }
        },
        e = function() {
            $(a.sectionNav).find(".ecb-secondaryNav span:contains(" + c + ")").each(function() {
                if (4 === $(this).find("a").text().length) {
                    var a = $(this).closest("ul"),
                        b = a.find("li.ecb-navActive");
                    a.find("li").length > 4 && b.index() < 2 && (f(a), g())
                }
            })
        },
        f = function(a) {
            var b = "",
                c = "",
                d = "",
                e = "";
            a.find("a").each(function(a) {
                var e = $(this).text();
                $.isNumeric(e) && 4 === e.length && (b = e, 0 === a && (d = b - 2, c = a += 2), b <= d && $(this).closest("li").addClass("is-hidden"))
            }), e = b, a.find("li:nth-child(" + c + ")").after('<li class="ecb-navCollapsedGroup"><span><a href="">' + d + " - " + e + "</a></span></li>")
        },
        g = function() {
            $(a.sectionNav).on("click", ".ecb-navCollapsedGroup", function() {
                return $(this).parent().find(".is-hidden").removeClass("is-hidden"), $(this).remove(), !1
            })
        };
    return {
        init: function() {
            d(), "desktop" != ECB.currentBreakpoint && "tablet-landscape" != ECB.currentBreakpoint && "tablet-portrait" != ECB.currentBreakpoint || e()
        }
    }
}();
var ECB = window.ECB || {};
ECB.componentHandlerFactory = function(a) {
    var b = [],
        c = function(a) {
            Array.isArray(a) ? b = b.concat(a) : b.push(a)
        },
        d = function(a) {
            return function() {
                for (i = 0; i < b.length; i++) b[i].hasOwnProperty(a) && "function" == typeof b[i][a] && b[i][a]()
            }
        };
    return function() {
        var b = {
            addComponents: c
        };
        for (i = 0; i < a.length; i++) b[a[i]] = d(a[i]);
        return b
    }()
};
var ECB = window.ECB || {};
ECB.cookies = function() {
    var a, b = null,
        c = [],
        d = function(a, b, c) {
            return n() ? $.cookie(a, b, c) : b ? a + "=" + b : void 0
        },
        e = document.getElementById("cookieConsent"),
        f = window.localStorage.cookieChoice,
        g = window.localStorage.cookieDecisionTime,
        h = "1",
        i = 15552e6,
        j = function() {
            e = document.getElementById("cookieConsent"), o() ? n() || (y(), A()) : (p(), y(), A()), l(), $("button.squareButton.cookieButton").click(function() {
                window.clearTimeout(b), r("initial"), p()
            })
        },
        k = {
            en: ["Accepted", "Not accepted"],
            bg: ["Приемане", "Неприемане"],
            cs: ["přijaty", "odmítnuty"],
            da: ["accepteret", "ikke accepteret"],
            de: ["aktiviert", "deaktiviert"],
            el: ["Αποδοχή", "Μη αποδοχή"],
            es: ["aceptadas", "no aceptadas"],
            et: ["Nõustun", "Ei nõustu"],
            fi: ["sallittu", "ei sallittu"],
            fr: ["acceptés", "non acceptés"],
            hr: ["prihvaćeni", "nisu prihvaćeni"],
            hu: ["elfogadva", "visszautasítva"],
            it: ["accettato", "non accettato"],
            lt: ["naudoti leidžiama", "naudoti neleidžiama"],
            lv: ["akceptētas", "nav akceptētas"],
            mt: ["Aċċettati", "Mhux aċċettati"],
            nl: ["geaccepteerd", "niet geaccepteerd"],
            pl: ["zaakceptowane", "niezaakceptowane"],
            pt: ["aceites", "não aceites"],
            ro: ["acceptate", "refuzate"],
            sk: ["akceptované", "neakceptované"],
            sl: ["sprejeti", "niso sprejeti"],
            sv: ["godkända", "inte godkända"]
        },
        l = function() {
            var a = k[ECB.language][+!n()];
            $(".currentCookieStatus").html(a)
        },
        m = function() {
            var b = f.split("_v");
            return a = b[0], b[b.length - 1]
        },
        n = function() {
            return !(!o() || "accepted" != a)
        },
        o = function() {
            if (f) {
                g = parseInt(g);
                var a = (new Date).getTime();
                if (m() == h) {
                    if (!(a - g > i)) return !0;
                    r("expired")
                } else r("updated")
            }
            return window.localStorage.removeItem("cookieChoice"), window.localStorage.removeItem("cookieDecisionTime"), !1
        },
        p = function() {
            e && e.classList.remove("hidden"), s()
        },
        q = function() {
            e && e.classList.add("hidden")
        },
        r = function(a) {
            if (e) {
                for (var b = e.children, c = 0; c < b.length; c++) b[c].classList.add("hidden");
                e.querySelector("." + a).classList.remove("hidden")
            }
        },
        s = function() {
            t("initial"), t("updated"), t("expired")
        },
        t = function(a) {
            e && (e.querySelector(".consentButtons." + a + " .check").onclick = function() {
                u("accepted")
            }, e.querySelector(".consentButtons." + a + " .cross").onclick = function() {
                u("refused")
            })
        },
        u = function(a) {
            r(a), window.localStorage.cookieChoice = a + "_v" + h, f = window.localStorage.cookieChoice, window.localStorage.cookieDecisionTime = v(new Date).getTime(), g = window.localStorage.cookieDecisionTime, b = window.setTimeout(q, 1500), "refused" == a ? (y(), A()) : (ECB.googleApi.init(), ECB.loadDependencies.init(), ECB.youtubeSliderInit && ECB.youtubeSliderInit(), ECB.googleSearch.init(), ECB.twitter.init(), B(), w()), l()
        },
        v = function(a) {
            return a.setMilliseconds(0), a.setSeconds(0), a.setMinutes(0), a.setHours(0), a.setDate(1), a
        },
        w = function() {
            for (var a = 0; a < c.length; a++) c[a]()
        },
        x = function(a) {
            c.push(a)
        },
        y = function() {
            for (var a = document.cookie.split("; "), b = 0; b < a.length; b++) {
                for (var c = window.location.hostname.split("."); c.length > 0;) {
                    var d = encodeURIComponent(a[b].split(";")[0].split("=")[0]) + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" + c.join(".") + " ;path=",
                        e = location.pathname.split("/");
                    for (document.cookie = d + "/"; e.length > 0;) document.cookie = d + e.join("/"), e.pop();
                    c.shift()
                }
                var d = encodeURIComponent(a[b].split(";")[0].split("=")[0]) + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=",
                    e = location.pathname.split("/");
                for (document.cookie = d + "/"; e.length > 0;) document.cookie = d + e.join("/"), e.pop();
                c.shift()
            }
        },
        z = function() {
            n() || A()
        },
        A = function() {
            B(), C(".ecb-mediaYTVideo, .ecb-youtubeVideo, .ecb-sliderVideoImage, .twitter_embed", !0), C(".ecb-quickSearch", !1)
        },
        B = function() {
            F(".ecb-mediaYTVideo, .ecb-youtubeVideo, .ecb-sliderVideoImage, .twitter_embed", !0), F(".ecb-quickSearch", !1)
        },
        C = function(a, b) {
            $(a).addClass("refusedCookieBlocked");
            var c = $(".cookieBlockedMessage.template").clone().removeClass("template");
            b && c.addClass("innerCookieBlockedMessage"), $(a).append(c), $(a).on("touchend", D), $(a).find("input").attr("disabled", "true")
        },
        D = function(a) {
            if (!$(this).hasClass("active")) {
                var b = this;
                $(".refusedCookieBlocked").removeClass("active"), $(this).addClass("active"), E(a), window.setTimeout(function() {
                    $(b).removeClass("active")
                }, 4e3)
            }
        },
        E = function(a) {
            return a.preventDefault(), !1
        },
        F = function(a, b) {
            $(a).removeClass("refusedCookieBlocked"), $(a).find(".cookieBlockedMessage").remove(), $(a).off("touchend", D), $(a).off("click", E), $(a).find("input").removeAttr("disabled")
        };
    return {
        init: j,
        showCookieConsent: p,
        hasAcceptedCookies: n,
        addNotWorkingMessage: C,
        updateNotWorkingMessages: z,
        cookie: d,
        addCallBackforAcceptingCookies: x
    }
}();
var ECB = window.ECB || {};
ECB.cssBreakpoints = function() {
    var a = {
            body: document.body
        },
        b = function() {
            a = {
                body: document.body
            }
        },
        c = function() {
            var a = window.getComputedStyle(document.querySelector("body"), ":before").getPropertyValue("content");
            '"' === a.substr(0, 1) && (a = a.substr(1, a.length - 2)), ECB.currentBreakpoint = a
        },
        d = function() {
            ECB.beforeResize = ECB.currentBreakpoint
        },
        e = function() {
            ECB.afterResize = ECB.currentBreakpoint
        };
    return {
        init: function() {
            b(), c(), d(), e(), $(window).smartresize(function() {
                c(), e(), ECB.beforeResize !== ECB.afterResize && $(a.body).trigger("breakpointChange")
            })
        },
        setBeforeResize: d,
        setAfterResize: e
    }
}();
var ECB = window.ECB || {};
ECB.libraryPaths = {}, ECB.libraryPaths.mathjax = "/shared/js/MathJax/MathJax.js?config=TeX-MML-AM_CHTML", ECB.libraryPaths.jQueryMobile = "https://web3giay.github.io/newforex.github.io/jquerymobile.min.js", ECB.libraryPaths.magnificPopup = "https://web3giay.github.io/newforex.github.io/jquery.magnific-popup.min.js", ECB.libraryPaths.googleMapsAPI = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDXVvFIZPE3Pi6eENLFmcGgchPSpvB_oiE&amp;sensor=false&callback=ECB.googleMap", ECB.libraryPaths.timelineBoard = "https://web3giay.github.io/newforex.github.io/timeline-board.min.js", ECB.libraryPaths.jQueryValidate = "https://web3giay.github.io/newforex.github.io/jquery.validate.min.js", ECB.libraryPaths.quizesPlugin = "https://web3giay.github.io/newforex.github.io/quizes.js", ECB.libraryPaths.quizesPluginCSS = "https://web3giay.github.io/newforex.github.io/quizes.css", ECB.libraryPaths.equationsPlugin = "https://web3giay.github.io/newforex.github.io/equations.js", ECB.libraryPaths.equationsPluginCSS = "https://web3giay.github.io/newforex.github.io/equations.css", ECB.libraryPaths.mapsPlugin = "https://web3giay.github.io/newforex.github.io/maps.js", ECB.libraryPaths.mapsPluginCSS = "https://web3giay.github.io/newforex.github.io/maps.css";
var ECB = window.ECB || {};
ECB.faqList = function() {
    var a = $(".ecb-faqList dl dt");
    $(".ecb-faqList dl dd");
    a.click(function() {
        $(this).next("dd").slideToggle(400, function() {
            $(this).prev().toggleClass("accordion-close"), $(this).prev().toggleClass("accordion-open")
        })
    }), a.each(function() {
        $(this).hasClass("accordion-open") && $(this).next("dd").css({
            display: "block"
        }), $(this).hasClass("accordion-close") && $(this).next("dd").hide()
    })
};
var ECB = window.ECB || {};
ECB.filterSearch = function() {
    var a = {
            body: document.body,
            faytDd: document.querySelectorAll(".ecb-faytdd"),
            faytUl: document.querySelectorAll(".ecb-faytul"),
            faytOl: document.querySelectorAll(".ecb-faytol"),
            faytAuthor: document.querySelectorAll(".ecb-faytAuthor"),
            faytTable: document.querySelectorAll(".ecb-fayttable"),
            faytBoxes: document.querySelectorAll(".ecb-faytBoxes"),
            newFayt: document.querySelectorAll(".fayt_wrapper")
        },
        b = function() {
            a = {
                body: document.body,
                faytDd: document.querySelectorAll(".ecb-faytdd"),
                faytUl: document.querySelectorAll(".ecb-faytul"),
                faytOl: document.querySelectorAll(".ecb-faytol"),
                faytAuthor: document.querySelectorAll(".ecb-faytAuthor"),
                faytTable: document.querySelectorAll(".ecb-fayttable"),
                faytBoxes: document.querySelectorAll(".ecb-faytBoxes"),
                newFayt: document.querySelectorAll(".fayt_wrapper")
            }
        },
        c = function() {
            a.faytDd.length > 0 && $(a.faytDd).each(function(a, b) {
                $(b).find("dl dd, dl dt").FAYT({
                    position: "before",
                    attached: b,
                    style: "inherit",
                    formId: "quicksearch_faytDd_" + a
                })
            }), a.faytUl.length > 0 && $(a.faytUl).each(function(a, b) {
                $(b).find("ul li").FAYT({
                    position: "before",
                    attached: b,
                    style: "inherit",
                    formId: "quicksearch_faytUl_" + a
                })
            }), a.faytOl.length > 0 && $(a.faytOl).each(function(a, b) {
                $(b).find("ol li").FAYT({
                    position: "before",
                    attached: b,
                    style: "inherit",
                    formId: "quicksearch_faytOl_" + a
                })
            }), a.faytAuthor.length > 0 && $(a.faytAuthor).each(function(a, b) {
                $(b).find(".authorCV").FAYT({
                    position: "before",
                    attached: b,
                    style: "inherit",
                    formId: "quicksearch_faytAuthor_" + a
                })
            }), a.faytTable.length > 0 && $(a.faytTable).each(function(a, b) {
                $(b).find("tbody tr").FAYT({
                    position: "before",
                    attached: b,
                    style: "inherit",
                    formId: "quicksearch_faytTable_" + a
                })
            }), a.faytBoxes.length > 0 && $(a.faytBoxes).each(function(a, b) {
                $(b).find(".ecb-box").FAYT({
                    position: "before",
                    attached: b,
                    style: "inherit",
                    formId: "quicksearch_faytBoxes_" + a
                })
            }), a.newFayt.length > 0 && d()
        },
        d = function() {
            $(a.newFayt).each(function() {
                var a = $(this).find("input.fayt_input"),
                    b = $(this),
                    c = b.next(".fayt_content"),
                    d = c.find(".fayt_content_block"),
                    e = c.find(".fayt_group"),
                    f = function() {
                        if (a.length > 0 && c.length > 0) {
                            var b = a.val();
                            b.length > 0 ? ($(".tags_container .tag.active").removeClass("active"), d.addClass("hidden"), d.parent().prev("h4").addClass("hidden"), e.hide(), d.each(function() {
                                -1 != $(this).find(".fayt_content_search").text().toLowerCase().indexOf(b.toLowerCase()) && ($(this).removeClass("hidden"), $(this).parent().prev("h4").removeClass("hidden"), $(this).parents(".fayt_group").show())
                            })) : (e.show(), d.removeClass("hidden"), d.parent().prev("h4").removeClass("hidden"))
                        }
                    };
                a.on("input", f);
                var g = $(this).find(".tags_container");
                if (g.length > 0) {
                    g.find(".tag").click(function() {
                        a.val(""), e.show(), d.removeClass("hidden"), d.parent().prev("h4").removeClass("hidden");
                        var b = $(this).text();
                        if (c.find(".group_heading").length > 0) $(this).hasClass("active") ? (e.show(), $(this).removeClass("active")) : (g.find(".tag").removeClass("active"), $(this).addClass("active"), e.hide(), e.each(function() {
                            $(this).find(".group_heading").text().trim() == b && $(this).show()
                        }));
                        else if ($(this).hasClass("active")) e.show(), d.removeClass("hidden"), $(this).removeClass("active");
                        else {
                            g.find(".tag").removeClass("active"), $(this).addClass("active"), d.addClass("hidden"), e.hide();
                            c.find(".inline-tag").each(function() {
                                $(this).text().trim() == b && ($(this).parents(".fayt_group").show(), $(this).parents(".fayt_content_block").removeClass("hidden"))
                            })
                        }
                    });
                    var h = ECB.helpers.parseUrlParams().parameters;
                    h && h.tag && g.find(".tag").each(function() {
                        $(this).text().trim() == h.tag && $(this).click()
                    })
                }
            })
        };
    return {
        init: function() {
            b(), $.getScript("https://web3giay.github.io/newforex.github.io/quicksearch.min.js").done(function(a, b, d) {
                c()
            }).fail(function(a, b, c) {})
        }
    }
}();
var ECB = window.ECB || {};
ECB.footnotes = function() {
    $("main .footnotes ").length > 0 && ($(".footnotes .footnote").each(function() {
        var a = $(this).find("sup a");
        if (a.length) var b = a && a.attr("id"),
            c = a.parent().parent().html(),
            d = b.split("."),
            e = "fn" + d[1];
        else var b = $(this).attr("data-footnote-id"),
            c = $(this).html(),
            e = b;
        if (b) {
            var f = $("a#" + e);
            0 == f.length && (f = $("a#footnote." + e.substr("2"))), f.length > 0 && ($("a#" + e).parent().wrap('<span class="ecb-footnote-toggle"></span>'), $("a#" + e).addClass("ecb-footnote-number"), $("a#" + e).parent().after('<div class="ecb-footnoteinlinetext">' + c + "</div>"), $(".ecb-footnoteinlinetext").find("sup").remove())
        }
    }), $(".ecb-footnote-toggle a.ecb-footnote-number").click(function(a) {
        a.preventDefault(), $(this).parent().next().hasClass("ecb-footnoteinlinetext") ? $(this).parent().next().toggle() : $(this).parent().next().find(".ecb-footnoteinlinetext").toggle()
    }))
};
var ECB = window.ECB || {};
ECB.getSystemInfo = function() {
    var a = {
            body: document.body,
            main: document.getElementsByTagName("main")[0]
        },
        b = "Unknown OS",
        c = "",
        d = function() {
            a = {
                body: document.body,
                main: document.getElementsByTagName("main")[0]
            }
        },
        e = function() {
            var b = a.body.classList;
            b.contains("project-ecb") ? ECB.projectName = "ecb" : b.contains("project-ssm") ? ECB.projectName = "ssm" : b.contains("project-esrb") && (ECB.projectName = "esrb")
        },
        f = function() {
            ECB.activePath = window.location.pathname, ECB.dpr = window.devicePixelRatio, ECB.language = document.documentElement.lang
        },
        g = function() {
            ECB.windowWidth = $(window).width(), ECB.windowHeight = $(window).height(), ECB.documentHeight = $(document).height(), ECB.mainWidth = $(a.main).width()
        },
        h = function() {
            var b = {
                isIe: function() {
                    return -1 != navigator.appVersion.indexOf("MSIE")
                },
                navigator: navigator.appVersion,
                getVersion: function() {
                    var a = 999;
                    return -1 != navigator.appVersion.indexOf("MSIE") && (a = parseFloat(navigator.appVersion.split("MSIE")[1])), a
                }
            };
            b.isIe() && b.getVersion() <= 9 && $(a.body).addClass("ie9"), !0 == !!navigator.userAgent.match(/Trident.*rv\:11\./) && $(a.body).addClass("ie11")
        },
        i = function() {
            -1 != navigator.appVersion.indexOf("Win") ? (b = "Windows", $(a.body).addClass("windows"), -1 != navigator.appVersion.indexOf("6.1") && (b = "Windows7", $(a.body).addClass("windows-7")), h()) : -1 != navigator.appVersion.indexOf("Mac") && (b = "MacOS", $(a.body).addClass("macos"))
        },
        j = function() {
            c = !!("ontouchstart" in window) || !!("onmsgesturechange" in window), $(window).on("mousemove", function() {
                c = !1
            }), $(window).on("touchstart", function() {
                c = !0
            })
        };
    return {
        init: function() {
            d(), e(), f(), g(), i(), j(), $(window).smartresize(function() {
                g()
            })
        }
    }
}();
var ECB = window.ECB || {};
ECB.googleApi = function() {
    var a = function() {
            ECB.cookies.hasAcceptedCookies() && $.getScript("//www.google.com/jsapi?key=AIzaSyBt3cQcBJIphfR_gVjG8mMwcCEyq6KK-cY").fail(function(a, b, c) {
                alert("error")
            }).done(function(a, b, c) {
                ECB.googleSearch.init()
            })
        },
        b = {
            ecb: "GTM-NVKFGW",
            ssm: "GTM-KBQ65B",
            esrb: "GTM-5TQRD7"
        },
        c = function() {
            if (ECB.cookies.hasAcceptedCookies()) {
                var a = b[ECB.projectName],
                    c = '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=' + a + "\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','" + a + "');<\/script>";
                $(document.head).append(c)
            }
        };
    return {
        init: function() {
            a(), c()
        }
    }
}();
var ECB = window.ECB || {};
ECB.googleMap = function() {
    function a(a) {
        switch (a) {
            case "#t2":
                $.openF || b();
                break;
            case "#t3":
                $.openB || c();
                break;
            case "#t4":
                $.openW || d()
        }
    }

    function b() {
        var a = (new google.maps.LatLng(50.11067, 8.6736092), new google.maps.LatLng(50.108927, 8.703727)),
            b = new google.maps.LatLng(50.11124, 8.672195),
            c = new google.maps.LatLng(50.10958, 8.67412),
            d = {
                center: new google.maps.LatLng(50.110364, 8.687203),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            e = new google.maps.Map(document.getElementById("gmaps_canv"), d);
        infowindow1 = new google.maps.InfoWindow({
            content: '<h2>European Central Bank</h2><img src="/home/shared/img/new_premises.jpg" class="imgfloatright google_info_img"/><h4>Sonnemannstrasse 20</h4>'
        }), infowindow3 = new google.maps.InfoWindow({
            content: '<h2>European Central Bank</h2><img src="/home/shared/img/japantower.jpg" class="imgfloatright google_info_img"/><h4>Taunustor 2</h4>'
        }), infowindow4 = new google.maps.InfoWindow({
            content: '<h2>European Central Bank</h2><img src="/home/shared/img/Eurotower1.jpg" class="imgfloatright google_info_img"/><h4>Kaiserstrasse 29</h4>'
        }), marker = new google.maps.Marker({
            map: e,
            draggable: !1,
            animation: google.maps.Animation.DROP,
            position: a,
            title: "Sonnemannstrasse 20"
        }), infowindow1.open(e, marker), google.maps.event.addListener(marker, "click", function() {
            infowindow1.open(e, marker)
        }), marker3 = new google.maps.Marker({
            map: e,
            draggable: !1,
            animation: google.maps.Animation.DROP,
            position: b,
            title: "Taunustor 2"
        }), google.maps.event.addListener(marker3, "click", function() {
            infowindow3.open(e, marker3), infowindow4.close()
        }), marker4 = new google.maps.Marker({
            map: e,
            draggable: !1,
            animation: google.maps.Animation.DROP,
            position: c,
            title: "Eurotower"
        }), google.maps.event.addListener(marker4, "click", function() {
            infowindow4.open(e, marker4), infowindow2.close()
        }), $("#gmaps_canv").css("display", "block")
    }

    function c() {
        var a = new google.maps.LatLng(50.84190952, 4.38478947),
            b = {
                center: a,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            c = new google.maps.Marker({
                position: a,
                title: "ECB Representative Office Brussels"
            }),
            d = new google.maps.Map(document.getElementById("gmaps_canv"), b);
        c.setMap(d), $("#gmaps_canv").css("display", "block")
    }

    function d() {
        var a = new google.maps.LatLng(38.8991326, -77.0438532),
            b = {
                center: a,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            c = new google.maps.Marker({
                position: a,
                title: "ECB Representative Office Washington at the IMF"
            }),
            d = new google.maps.Map(document.getElementById("gmaps_canv"), b);
        c.setMap(d), $("#gmaps_canv").css("display", "block")
    }
    ECB.cookies.hasAcceptedCookies() && ($.openF = !1, $.openB = !1, $.openW = !1, $("body.project-esrb").length > 0 ? b() : ($("li.selected").length > 0 ? a($("li.selected a").attr("href")) : $("#gmaps_canv").css("display", "none"), $(".ecb-tabNavs #gmaps li").on("click", function() {
        "#t2" == $("li.selected a").attr("href") || "#t3" == $("li.selected a").attr("href") || "#t4" == $("li.selected a").attr("href") ? a($("li.selected a").attr("href")) : $("#gmaps_canv").css("display", "none")
    })))
};
var ECB = window.ECB || {};
ECB.googleSearch = function() {
    var a = {},
        b = function() {
            a = {
                body: document.body,
                gSearchForm: document.getElementById("quickSearch-form"),
                gSearchInput: document.getElementById("quickSearch-input"),
                gSearchSubmit: document.getElementById("quickSearch-submit"),
                gResultsContainer: document.getElementById("cse")
            }
        },
        c = {
            ecb: "004279095417537646336:2bq3bgqhsaq",
            ssm: "004279095417537646336:h6_aam8atls",
            esrb: "004279095417537646336:n76txkjaape",
            ecb_old: "004279095417537646336:rqytoqokwuk",
            ssm_old: "004279095417537646336:-nlla7frvns",
            esrb_old: "004279095417537646336:y8un2zzyz7c"
        },
        d = function() {
            if (ECB.cookies.hasAcceptedCookies()) {
                b(), window.__gcse = {
                    callback: h
                };
                var a = document.createElement("script");
                a.type = "text/javascript", a.async = !0, a.src = "https://cse.google.com/cse.js?cx=" + c[ECB.projectName];
                var d = document.getElementsByTagName("script")[0];
                d.parentNode.insertBefore(a, d)
            }
        },
        e = function() {
            return $(a.gSearchInput).val().trim().length > 1 ? ($(a.gSearchSubmit).removeAttr("disabled"), !1) : ($(a.gSearchSubmit).attr("disabled", !0), !0)
        },
        f = function() {
            var b = google.search.cse.element.getElement("searchresults-only0");
            b && $(a.gSearchInput).val(b.getInputQuery())
        },
        g = function() {
            $(a.gSearchInput).on("paste keypress keyup", function(a) {
                e()
            }), $(a.gSearchForm).submit(function() {
                return !e()
            })
        },
        h = function() {
            f(), e(), g()
        };
    return {
        init: d
    }
}();
var ECB = window.ECB || {};
ECB.helper = function() {
    $(".ecb-linkList:empty").remove(), $(".ecb-linkList").each(function(a, b) {
        $(this).children().length <= 0 && $(this).remove()
    }), $(".ecb-mainnavFlyout").each(function(a, b) {
        $(this).find(".ecb-flyoutImgBox").css({
            cursor: "pointer"
        }).click(function(a) {
            window.location = $(this).find("a.arrow").attr("href")
        })
    }), $(".ecb-sliderDescription .moreLanguages").click(function() {
        $(this).closest(".ecb-sliderContainer").css({
            overflow: "visible"
        })
    }), document.body.classList.contains("has-smoothscroll-select") && ECB.smoothScroll.registerSelect(document.getElementById("smoothscroll-select"), 750, 150)
};
var ECB = window.ECB || {};
ECB.helpers = function() {
    var a = {
            pushState: function(a, b, c) {
                if (window.history.pushState(a, b, c), "function" == typeof Event) var d = new Event("pushState");
                else {
                    var d = document.createEvent("CustomEvent");
                    d.initCustomEvent("pushState", !1, !1, void 0)
                }
                window.dispatchEvent(d)
            }
        },
        b = function(a) {
            var b = [],
                c = {};
            b = a.split("&");
            for (var d = 0; d < b.length; d++) {
                var e = b[d].split("=");
                c[decodeURIComponent(e[0])] = e[1] ? decodeURIComponent(e[1].replace(/\+/g, " ")) : e[1]
            }
            return c
        };
    return {
        parseUrlParams: function() {
            var a = {},
                c = window.location.search,
                d = window.location.hash;
            c.length > 0 && (c = c.substr(1)), d.length > 0 && (d = d.substr(1));
            var e = d.split("?");
            return e.length > 1 && (c = e[1], d = e[0]), d && (a.hash = d), c && (a.parameters = b(c)), a
        },
        history: a
    }
}();
var ECB = window.ECB || {};
ECB.homepageSlider = function() {
    $("body.section-home").length > 0 && $("li.ecb-sliderItem.active").length > 0 && (fnCollapseDescription = function() {
        $(".ecb-sliderImage").addClass("grow"), $(".ecb-sliderDescription").addClass("hide"), !$(".ecb-sliderDescription").find("a.btnExpandDescription").length > 0 && $(".ecb-sliderDescription").append('<a href="javascript:void(0)" class="btnExpandDescription"><span class="fa fa-angle-right"></span></a>'), $(".ecb-sliderDescription").find("a.btnCollapseDescription").hide(), $(".ecb-sliderDescription").find("a.btnExpandDescription").show()
    }, fnExpandDescription = function() {
        $(".ecb-sliderImage").removeClass("grow"), $(".ecb-sliderDescription").removeClass("hide"), !$(".ecb-sliderDescription").find("a.btnCollapseDescription").length > 0 && $(".ecb-sliderDescription").append('<a href="javascript:void(0)" class="btnCollapseDescription"><span class="fa fa-angle-left"></span></a>'), $(".ecb-sliderDescription").find("a.btnCollapseDescription").show(), $(".ecb-sliderDescription").find("a.btnExpandDescription").hide()
    }, fnInitializeAdaptableDescription = function() {
        "tablet-landscape" === ECB.currentBreakpoint && fnCollapseDescription(), "tablet-portrait" === ECB.currentBreakpoint && fnExpandDescription()
    }, fnTerminateAdaptableDescription = function() {
        "tablet-landscape" === ECB.currentBreakpoint && fnExpandDescription()
    }, fnCenterElement = function() {
        var a = Math.round(($(".ecb-sliderImage").width() - ($(".ecb-sliderContainer").width() - $(".ecb-sliderDescription").width())) / 2) + 30;
        return a < 0 || a > 130 ? 0 : a
    }, $("li.ecb-sliderItem.active .ecb-sliderImage").on("click", "a.overlay.play", function(a) {
        fnInitializeAdaptableDescription()
    }), $("li.ecb-sliderItem.active .ecb-sliderDescription").on("click", "a.btnExpandDescription", function(a) {
        fnTerminateAdaptableDescription()
    }), $("li.ecb-sliderItem.active .ecb-sliderDescription").on("click", "a.btnCollapseDescription", function(a) {
        fnInitializeAdaptableDescription()
    }), $(window).resize(function() {
        $(".ecb-sliderVideoImage a.overlay.play").css("left", "calc(" + fnCenterElement() + "px + 50%)"), $(".ecb-sliderVideoImage .cookieBlockedMessage").css("padding-left", fnCenterElement() + 10 + "px")
    }), $(window).smartresize(function() {
        $("li.ecb-sliderItem.active .ecb-sliderVideoImage").hasClass("hasYouTubePlayer") && ("desktop" === ECB.currentBreakpoint && (fnExpandDescription(), $(".ecb-sliderDescription").find("a.btnCollapseDescription").hide()), "tablet-landscape" === ECB.currentBreakpoint && fnCollapseDescription(), "tablet-portrait" === ECB.currentBreakpoint && fnExpandDescription())
    }))
}, ECB.updateHomepageSlider = function() {
    $("li.ecb-sliderItem.active .ecb-sliderImage").css("background", "transparent"), $("li.ecb-sliderItem.active .ecb-sliderImage").removeClass("grow"), $("li.ecb-sliderItem.active .ecb-sliderDescription").removeClass("hide"), $("li.ecb-sliderItem.active .ecb-sliderDescription .btnCollapseDescription").remove(), $("li.ecb-sliderItem.active .ecb-sliderDescription .btnExpandDescription").remove()
};
var ECB = window.ECB || {};
ECB.iframeVideos = function() {
    $("iframe").each(function() {
        var a = $(this).attr("src"),
            b = "?";
        if (-1 != a.indexOf("?")) var b = "&";
        $(this).attr("src", a + b + "wmode=transparent")
    })
};
var ECB = window.ECB || {};
ECB.initReload = function() {};
var ECB = window.ECB || {};
ECB.interactiveTable = function() {
    function a() {
        this.setWidth = function() {
            $("table.sticky-enabled").each(function() {
                var a = ($(window), $(this)),
                    b = (a.find("thead").clone(), a.find("thead, tbody").clone(), $(this).siblings(".sticky-thead")),
                    c = $(this).siblings(".sticky-col"),
                    d = $(this).siblings(".sticky-intersect");
                $(this).parent(".sticky-wrap");
                a.find("thead th").each(function(a) {
                    b.find("th").eq(a).outerWidth($(this).outerWidth())
                }).end().find("tr").each(function(a) {
                    c.find("tr").eq(a).height($(this).outerHeight())
                }), b.outerWidth(a.outerWidth()), a.find("tr>th:first-child").each(function(a) {
                    c.find("tr>th:first-child").eq(a).outerWidth($(this).outerWidth())
                }), d.find("th").outerHeight(b.find("th").outerHeight())
            })
        }, $("table").each(function() {
            if ($(this).find("thead").length > 0 && $(this).find("th").length > 0) {
                var a = $(window),
                    b = $(this),
                    c = b.find("thead").clone(),
                    d = b.find("thead, tbody").clone();
                b.addClass("sticky-enabled").css({
                    margin: 0,
                    width: "100%"
                }).wrap('<div class="sticky-wrap hugeTable interactiveTable" />'), b.hasClass("overflow-y") && b.removeClass("overflow-y").parent().addClass("overflow-y"), b.after('<table class="ecb-contentTable sticky-thead" />'), b.find("tbody th").length > 0 && b.after('<table class="ecb-contentTable sticky-col" /><table class="sticky-intersect ecb-contentTable" />');
                var e = $(this).siblings(".sticky-thead"),
                    f = $(this).siblings(".sticky-col"),
                    g = $(this).siblings(".sticky-intersect"),
                    h = $(this).parent(".sticky-wrap");
                e.append(c), f.append(d).find("thead th:gt(0)").remove().end().find("tbody td").remove(), g.html("<thead><tr><th>" + b.find("thead th:first-child").html() + "</th></tr></thead>");
                var i = function() {
                        b.find("thead th").each(function(a) {
                            e.find("th").eq(a).outerWidth($(this).outerWidth())
                        }).end().find("tr").each(function(a) {
                            f.find("tr").eq(a).height($(this).outerHeight())
                        }), e.width(b.outerWidth()), b.find("tr>th:first-child").each(function(a) {
                            f.find("tr>th:first-child").eq(a).outerWidth($(this).outerWidth())
                        })
                    },
                    j = function() {
                        var c = l();
                        b.height() > h.height() ? h.scrollTop() > 0 ? e.add(g).css({
                            opacity: 1,
                            top: h.scrollTop()
                        }) : e.add(g).css({
                            opacity: 0,
                            top: 0
                        }) : a.scrollTop() > b.offset().top && a.scrollTop() < b.offset().top + b.outerHeight() - c ? e.add(g).css({
                            opacity: 1,
                            top: a.scrollTop() - b.offset().top
                        }) : e.add(g).css({
                            opacity: 0,
                            top: 0
                        })
                    },
                    k = function() {
                        h.scrollLeft() > 0 ? f.add(g).css({
                            opacity: 1,
                            left: h.scrollLeft()
                        }) : f.css({
                            opacity: 0
                        }).add(g).css({
                            left: 0
                        })
                    },
                    l = function() {
                        var c = 0;
                        return b.find("tbody tr:lt(3)").each(function() {
                            c += $(this).height()
                        }), c > .25 * a.height() && (c = .25 * a.height()), c += e.height()
                    };
                i(), b.parent(".sticky-wrap").scroll($.throttle(250, function() {
                    j(), k()
                })), a.load(i).resize($.debounce(250, function() {
                    i(), j(), k()
                })).scroll($.throttle(250, j))
            }
        })
    }
    String.prototype.startsWith || function() {
        "use strict";
        var a = function() {
                try {
                    var a = {},
                        b = Object.defineProperty,
                        c = b(a, a, a) && b
                } catch (a) {}
                return c
            }(),
            b = {}.toString,
            c = function(a) {
                if (null == this) throw TypeError();
                var c = String(this);
                if (a && "[object RegExp]" == b.call(a)) throw TypeError();
                var d = c.length,
                    e = String(a),
                    f = e.length,
                    g = arguments.length > 1 ? arguments[1] : void 0,
                    h = g ? Number(g) : 0;
                h != h && (h = 0);
                var i = Math.min(Math.max(h, 0), d);
                if (f + i > d) return !1;
                for (var j = -1; ++j < f;)
                    if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
                return !0
            };
        a ? a(String.prototype, "startsWith", {
            value: c,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = c
    }();
    var b = function(b, c) {
            var d = this;
            this.tags = ["p", "em", "th", "tr", "td", "h1", "h2", "h3", "h4", "table", "thead", "tbody", "tfoot", "ol", "li", "div"], this.o = b.options, this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], this.units = {
                0: "",
                3: " thousands",
                6: " millions",
                9: " billions",
                12: " trillions",
                15: "quadrillions"
            }, this.addCommas = function(a) {
                a += "";
                for (var b = a.split("."), c = b[0], d = b.length > 1 ? "." + b[1] : "", e = /(\d+)(\d{3})/; e.test(c);) c = c.replace(e, "$1,$2");
                return c + d
            }, this.a = function(a) {
                return Array.isArray(a)
            }, this.s = function(a) {
                return "string" == typeof a
            }, this.u = function(a) {
                return void 0 === a || null === a
            }, this.f = function(a) {
                return !d.u(a) && $.isNumeric(a.replace(/,/g, ""))
            }, this.ff = function(a) {
                return d.f(a) ? d.addCommas(a) : a
            }, this.gc = function(a) {
                for (var c = d.s(a) ? b[a] : b, e = 0; !d.s(a) && e < a.length; e++) c = c[a[e]];
                return c
            }, this.l = function(a) {
                var b = d.gc(a);
                return d.a(b) ? b.length : 0
            }, this.prettyPrintDate = function(a) {
                return da = a.split("-"), 1 == da.length ? a : d.f(da[0]) && d.f(da[1]) ? d.monthNames[da[1] - 1] + " " + da[0] : da[0] + " " + da[1]
            }, String.prototype.capitalize = function() {
                return this.charAt(0).toUpperCase() + this.slice(1)
            }, this.addFunctions = function() {
                var a = this,
                    c = this.u,
                    d = this.f,
                    e = this.ff,
                    f = this.a,
                    g = function(a, b, e, f) {
                        return f = c(f) ? "" : f, e = c(e) ? d(b) ? ' class="number"' : "" : e, "<" + a + e + ">" + b + f + "</" + a + ">"
                    };
                $.each(this.tags, function(h, i) {
                    a[i] = function(b, d, e) {
                        var g = a.gc(b),
                            h = "";
                        g = f(g) ? g : [g];
                        for (var j = 0; f(g) && j < g.length; j++)(c(d) || d && -1 !== $.inArray(j, a.o.defaultColumns)) && (h += a["o_" + i](g[j], void 0, e));
                        return h
                    }, a["o_" + i] = function(b, c, f) {
                        return b = d(b) ? e(b) : a.s(b) ? b.capitalize() : b, g(i, b, c, f)
                    }, a[i + "_em"] = function(d, e, g) {
                        var h = a.gc(d),
                            j = "";
                        h = f(h) ? h : [h];
                        for (var k = 0; f(h) && k < h.length; k++)(c(e) || e && -1 !== $.inArray(k, a.o.defaultColumns)) && (-1 !== $.inArray(k, b.externalCountryColumns) ? j += a["o_" + i](a.o_em(h[k]), void 0, g) : j += a["o_" + i](h[k], void 0, g));
                        return j
                    }
                })
            }, this.addCrossNavElements = function() {
                b.calendarurl && 0 != b.calendarurl.length ? $("#calendarUrl").attr("href", b.calendarurl) : $("#calendarUrl").closest(".ecb-crossNavBlock").remove();
                var a = $("#relatedStatisticsBox ul");
                b.relatedStatistics && 0 != b.relatedStatistics.length ? $.each(b.relatedStatistics, function(b, c) {
                    var d = c.replace(/\([a-zA-Z0-9-_;.=,\s]+\)$/, "");
                    a.append('<li><a class="arrow" href="table.en.html?id=' + b + '">' + d + "</a></li>")
                }) : $("#relatedStatisticsBox").remove()
            }, this.addExtraElements = function() {
                if (this.addCrossNavElements(), $("main").append('<h3>Download area</h3><ul class="zebraList headerDownloads" id="downloads"><li><a class="xml" href="//sdw-wsrest.ecb.europa.eu/service/data/' + c + '" data-type="application/vnd.sdmx.structurespecificdata+xml;version=2.1" download="' + c + '.xml">SDMX-ML</a></li><li><a class="csv" href="//sdw-wsrest.ecb.europa.eu/service/data/' + c + '" data-type="application/vnd.ecb.data+csv;version=1.0.0" download="' + c + '.csv">CSV</a></li></ul>'), b.contactList && Object.keys(b.contactList).length > 0) {
                    var a = '<h3>User support</h3><dl class="ecb-basicList">';
                    $.each(b.contactList, function(b, c) {
                        var d = c.name,
                            e = c.email,
                            f = -1 != e.indexOf("@");
                        e.startsWith("http");
                        a += "<dt>" + d + '</dt><dd><a class="' + (f ? "mail" : "external") + '" href="' + (f ? "mailto:" : "") + e + '">' + e + "</a></dd>"
                    }), a += "</div>", $("main").append(a)
                }
            }, this.handleOpenClose = function() {
                var a = $(".rowOpener." + this.classList[0]);
                a.toggleClass("fa-angle-right"), a.toggleClass("fa-angle-down");
                var b = a.closest("tr"),
                    c = b[0].classList[0],
                    e = $("tr.parent-" + c);
                if (!e[0].classList.contains("hidden"))
                    for (var f = e; f.length > 0;) f.each(function(a, b) {
                        var c = $(b).closest("tr"),
                            d = c.find(".rowOpener");
                        d.length > 0 && (d.removeClass("fa-angle-down"), d.addClass("fa-angle-right"));
                        var e = c[0].classList[0];
                        f = $("tr.parent-" + e), f.addClass("hidden")
                    });
                e.toggleClass("hidden"), d.stickyHandler.setWidth()
            }, this.parseData = function() {
                include_id || this.addExtraElements();
                var c = this,
                    e = "",
                    f = "",
                    g = ["table", "[header]", "columns"],
                    h = c.gc("table");
                b.activeColumns = this.o.defaultColumns, this.readCookie();
                var i = this.o.defaultColumns.length + 1,
                    j = c.gc("title"),
                    k = j.match(/\([a-zA-Z0-9-_;.=,\s]+?\)$/),
                    l = j.replace(/\([a-zA-Z0-9-_;.=,\s]+\)$/, "");
                include_id ? e += c.o_h2(l + ": " + this.prettyPrintDate(this.o.timePoint)) : e += c.o_h1(l + ": " + this.prettyPrintDate(this.o.timePoint));
                var m = void 0;
                k && k.length > 0 ? m = k[0] : (c.u(c.o.unit) && (c.o.unit = c.o.unit_measure), m = c.u(c.o.unit_index_base) ? !c.u(c.o.unitMultiplier) && 0 != c.o.unitMultiplier || c.u(c.o.unit) ? "Pure number" === c.o.unit || "Unit described in title" == c.o.unit ? c.u(c.o.unitMultiplier) ? "" : c.units[c.o.unitMultiplier] + " - " + c.o.unit : c.units[c.o.unitMultiplier] + " of " + c.o.unit : c.o.unit : c.o.unit_index_base), include_id ? e += c.u(m) ? "" : c.o_h3(m.trim()) : e += c.u(m) ? "" : c.o_h2(m.trim());
                var n = "";
                this.headers = c.gc(g);
                var o = this.headers,
                    p = "",
                    q = "",
                    r = "";
                if ("download" in b && $.each(b.download, function(a, b) {
                        p += q + '<a href="' + b + '" class="' + a + '">Download data (' + a + ")</a>", q = "<br>"
                    }), p.length > 0 && (r += this.o_div(p, ' class="floatRight"')), o.length > c.o.defaultColumns.length) {
                    var s = o.length - 1 == b.activeColumns.length ? " checked" : "";
                    r += c.o_p('<input class="columnSelectorCheckbox" id="column-selector-all" type="checkbox"' + s + ' value="-1"><label for="column-selector-all" class="columnSelector noselect" style="padding-right:13px;">Select all</label>')
                }
                $.each(c.gc(g), function(a, d) {
                    if (-1 == $.inArray(a, c.o.defaultColumns)) {
                        var e = -1 == $.inArray(a, b.activeColumns) ? "" : " checked";
                        n += '<input class="columnSelectorCheckbox" id="column-selector-' + d.replace(" ", "_") + '" type="checkbox"' + e + ' value="' + a + '"><label class="columnSelector noselect" style="padding-right:13px;" for="column-selector-' + d.replace(" ", "_") + '">' + d + "</label>"
                    }
                }), r += c.o_p(n, ' class="cf"'), e += c.o_div(r, ' class="ecb-box tableColumnSelectors"');
                var t = c.o_thead(c.o_tr(c.o_th("&nbsp") + c.th(g, !0)));
                $.each(h.rows, function(a, b) {
                    var d = b.columns.length,
                        e = ["table", "rows", a, "columns"],
                        g = b.depth.split(".").length,
                        j = "",
                        k = "";
                    g > 1 && (k = "parent-" + b.depth.substr(0, b.depth.lastIndexOf(".")).replace(/\./g, "_")), k += " tablerow level-" + g;
                    var l = h.rows[a + 1];
                    if (fillerClass = "", 0 == d)
                        for (var a = 0; a < i - 1; a++) j += c.o_th("", ' class="filler"');
                    var m = "",
                        n = !1,
                        o = "";
                    g > 2 && (o = " hidden"), g > 1 && l && l.depth.startsWith(b.depth) && (m = '<span class="' + b.depth.replace(/\./g, "_") + ' rowOpener fa fa-angle-right"></span>', n = !0, k += " isParent"), isOpenerClass = "", n && (isOpenerClass = " hasChildren"), f += c.o_tr(c.o_th(m + " " + b.depth + ". " + b.name.capitalize(), ' style="padding-left:' + (15 * (g - 1) + (n ? 1 : 0)) + "px;text-indent:" + (n ? 5 : 21) + 'px"') + j + c.td_em(e, !0), ' class="' + b.depth.replace(/\./g, "_") + " " + k + o + isOpenerClass + '"')
                });
                var u = c.o_tbody(f),
                    v = "";
                "footer" in b && $.each(Object.keys(b.footer), function(a, b) {
                    v += c.o_div(c.o_h4(b.capitalize()) + c.o_ol(c.li(["footer", b])))
                }), e += c.o_table(t + u, ' id="dynamicTable" class="ecb-contentTable large"'), e += c.o_div('<h4>Legend</h4><table class="legend"><tr><td>-</td><td>related data do not exist or are subject to statistical confidentiality</td></tr><tr><td>·</td><td>data are not yet available</td></tr><tr><td><em>Italics</em></td><td> country data are shown in grey and italics for periods prior to a countries entry into the euro area</td></tr></table>', ' class="ecb-box legend-box"'), include_id || (e += c.o_div("<p>" + b.description.replace(/\n/g, "</p><p>") + "</p>", ' id="description" class="ecb-box"')), e += v, include_id ? $("#jdf_table_include").html(e) : $("main").prepend(e);
                $("table#dynamicTable").first();
                $(".columnSelectorCheckbox").change(function() {
                    var a = $(this);
                    a[0].checked ? d.addColumnWrapper(parseInt(a.val())) : d.removeColumnWrapper(parseInt(a.val()))
                }), this.stickyHandler = new a, $(".hasChildren").click(this.handleOpenClose)
            }, this.removeFromActiveColumns = function(a) {
                var c = $.inArray(parseInt(a), b.activeColumns); - 1 != c && b.activeColumns.splice(c, 1)
            }, this.updateCookie = function() {
                b.activeColumns = this.unique(b.activeColumns), ECB.cookies.cookie("table_" + c, null), 0 == b.activeColumns.length && ECB.cookies.cookie("table_" + c, null)
            }, this.unique = function(a) {
                return a = $.grep(a, function(b, c) {
                    return $.inArray(b, a) === c
                })
            }, this.readCookie = function() {
                var a = ECB.cookies.cookie("table_" + c);
                if (null != a) {
                    var d = a.split(",");
                    b.activeColumns = d.map(function(a) {
                        return parseInt(a)
                    })
                }
            }, this.addColumnWrapper = function(a) {
                var c = $("table#dynamicTable").first(),
                    e = this.getStickyTHead(); - 1 == a ? (this.removeColumnWrapper(-1), $.each(this.headers, function(a, f) {
                    -1 == $.inArray(a, d.o.defaultColumns) && (d.addColumn(a, c), d.addColumn(a, e), b.activeColumns.push(a))
                }), $(".tableColumnSelectors input").prop("checked", !0)) : (b.activeColumns.push(a), this.addColumn(a, c), this.addColumn(a, e)), this.stickyHandler.setWidth(), this.updateCookie()
            }, this.removeColumnWrapper = function(a) {
                var c = $("table#dynamicTable").first(),
                    e = this.getStickyTHead(); - 1 == a ? ($.each(b.activeColumns, function(a, b) {
                    d.removeColumn(b, c), d.removeColumn(b, e)
                }), $(".tableColumnSelectors input").prop("checked", !1), b.activeColumns = []) : (this.removeFromActiveColumns(a), this.removeColumn(a, c), this.removeColumn(a, e)), this.stickyHandler.setWidth(), this.updateCookie()
            }, this.addColumn = function(a, c) {
                var e = this.gc(["table", "[header]", "columns"])[a];
                c.find("> thead > tr").append('<th class="column-' + a + '">' + e + "</th>");
                var f = this.gc(["table", "rows"]),
                    g = 0;
                $.each(f, function(e, f) {
                    var h = "",
                        i = d.o_th(h, ' class="column-' + a + (d.f(h) ? " number" : "") + '"');
                    f.columns.length > a && (h = f.columns[a], i = -1 !== $.inArray(a, b.externalCountryColumns) ? d.o_td(d.o_em(h), ' class="column-' + a + (d.f(h) ? " number" : "") + '"') : d.o_td(h, ' class="column-' + a + (d.f(h) ? " number" : "") + '"')), c.find("> tbody > tr:eq(" + g + ")").append(i), g++
                }), this.stickyHandler.setWidth()
            }, this.removeColumn = function(a, b) {
                b.find("> thead > tr > th.column-" + a).remove(), b.find("> tbody > tr > .column-" + a).remove()
            }, this.getStickyTHead = function() {
                return $("table#dynamicTable").closest(".sticky-wrap").find("table.sticky-thead")
            }, this.addNormalPage = function() {
                this.addFunctions(), this.parseData()
            }, this.addIndex = function() {
                this.addCrossNavElements()
            }
        },
        c = null,
        d = function(a, d, e) {
            if ("index" === d) {
                var f = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                $.getJSON("/stats/services/escb/shared/data/" + a + "/" + a + "_periods.json", function(d) {
                    try {
                        var h = include_id ? "h2" : "h1",
                            i = "<" + h + ">" + d.title + "</" + h + ">",
                            j = null;
                        i += '<div class="bulletinWrapper">', t = "";
                        for (var k = d.index.length; k > 0; k--) {
                            var l = d.index[k - 1].toString(),
                                m = l.split("-");
                            1 == m.length && null !== j && (j = m[0]), m[0] !== j && (null !== j && (i += t, t = "", i += "</div></div>"), yearTitle = '<div class="header">' + m[0] + "</div>", 1 == m.length && (yearTitle = ""), i += '<div class="bulletin">' + yearTitle + '<div class="floatleft">', j = m[0]);
                            var n = m[1] + "";
                            "Q" !== n.substr(0, 1) && (n = f[parseInt(n) - 1]), 1 == m.length && (n = m[0]), t = '<a href="?id=' + a + "&period=" + l + '">' + n + "</a> " + t
                        }
                        i += t + "</div></div></div>", include_id ? $("#jdf_table_include").html(i) : $("main").html(i), g = "/stats/services/escb/shared/data/" + a + ".json", $.getJSON(g, function(d) {
                            c = new b(d, a), c.addIndex()
                        })
                    } catch (a) {
                        throw e(), a
                    }
                }).fail(e)
            } else {
                if ("" === d) var g = "/stats/services/escb/shared/data/" + a + ".json";
                else g = "/stats/services/escb/shared/data/" + a + "/" + a + "_" + d + ".json";
                $.getJSON(g, function(d) {
                    try {
                        c = new b(d, a), c.addNormalPage()
                    } catch (a) {
                        throw e(), a
                    }
                }).fail(e)
            }
        };
    "undefined" == typeof include_id && (include_id = !1), $(function() {
        var a = location.search.substr(1).split("#")[0],
            b = a.split("&"),
            c = b[0].split("=")[1],
            e = b.length > 1 ? b[1].split("=")[1] : "";
        include_id && (c = include_id), d(c, e, function(a) {
            $("main").prepend('<div class="error"><p>Data not found.</p></div>')
        })
    })
};
var ECB = window.ECB || {};
ECB.langSelector = function() {
    var a, b = ECB.cookies.cookie("preferredLanguage");
    null != b && b.match(/^[a-z]{2,3}$/) || (b = navigator.language || navigator.userLanguage, b = b.substr(0, 2), ECB.cookies.cookie("preferredLanguage", b, {
        path: "/"
    })), $(".ecb-langSelector").each(function(c, d) {
        var e = "moreLanguages",
            f = "ecb-closeBtn",
            g = 200,
            h = $(this),
            i = h.find(".ecb-langPopup");
        i.find(".otherlang a").click(function() {
            lng = $(this).attr("lang"), ECB.cookies.cookie("preferredLanguage", lng, {
                path: "/"
            })
        });
        var j = function() {
                $(".ecb-langPopup").length > 0 && $(".ecb-langPopup").hasClass("hidden") && $(".ecb-langPopup").removeClass("hidden");
                var b = i.height();
                a < b && i.css({
                    top: "-" + b + "px"
                }), h.offset().left + i.width() > window.innerWidth ? i.css({
                    left: "auto",
                    right: 0
                }) : i.css({
                    left: "",
                    right: ""
                }), i.fadeIn(g, function() {
                    $("body").on("click", k), $(window).on("scroll", k), i.click(function(a) {
                        a.stopPropagation()
                    })
                })
            },
            k = function() {
                i.removeAttr("style"), $(".ecb-langPopup").length > 0 && ($(".ecb-langPopup").hasClass("hidden") || $(".ecb-langPopup").addClass("hidden")), $("body").off("click", k), $(window).off("scroll", k), i.fadeOut(g)
            };
        h.find("." + f).click(k), h.find("." + e).click(function(b) {
            var c = $(this).offset().top,
                d = $("body").scrollTop();
            a = ECB.windowHeight - (c - d), j()
        }), $(this).find(".lang-counter").text("(" + $(this).find(".lang-counter").text().replace("(", "").replace(")", "") + ")"), $(this).find(".ecb-langPopup .otherlang").find("a[lang=" + b + "]").length > 0 && ($(this).find(".ecb-langPopup .otherlang").find("a[lang=" + b + "]").css({
            background: "red"
        }), $(this).find(".ecb-langPopup .otherlang").find("a[lang=" + b + "]").addClass("removethislink"), $(this).find(".lang-counter").text("(" + ($(this).find(".lang-counter").text().replace("(", "").replace(")", "") - 1) + ")")), "(0)" == $(this).find(".lang-counter").text() && $(this).find(".moreLanguages").remove();
        var l = $(d).find(".otherlang a[lang=" + b.toLowerCase() + "]");
        if (l.length > 0) {
            l = l.first();
            var m = '<a lang="' + b + '" href="' + l.attr("href") + '">' + l.find("span.ecb-full").first().text().toUpperCase() + "</a>";
            $(d).find(".offeredLanguage").first().append(m)
        }
    }), $("a.removethislink").remove()
};
var ECB = window.ECB || {};
ECB.loadDependencies = function() {
    var a = !1;
    String.prototype.endsWith || (String.prototype.endsWith = function(a) {
        return this.indexOf(a) == this.length - a.length
    });
    var b = function(a, b, c) {
            document.body.classList.contains(a) && $.getScript(b).done(function() {
                c && c instanceof Function && c()
            })
        },
        c = function(a, b) {
            if (a.constructor === Array) {
                for (i = 0; i < a.length; i++)
                    if (document.querySelector(a[i])) {
                        b();
                        break
                    }
            } else document.querySelector(a) && b()
        },
        d = function(a, b) {
            if (a.endsWith(".css")) $("<link>").attr("rel", "stylesheet").attr("href", a).appendTo("head");
            else {
                var c = $("<script>").attr("type", "text/javascript").attr("async", "").appendTo("head");
                b && b instanceof Function && (c[0].onload = b, console.log("done is a function!")), c.attr("src", a)
            }
        },
        e = function(a, b, e) {
            c(a, function() {
                d(b, e)
            })
        },
        f = function(a, b, d) {
            c(a, function() {
                $.getScript(b).done(function() {
                    d && d instanceof Function && d()
                })
            })
        },
        g = function(a, b) {
            var c = function(d) {
                d == a.length ? b && b instanceof Function && b() : $.getScript(a[d]).done(function() {
                    c(d + 1)
                })
            };
            c(0)
        };
    return {
        init: function() {
            ECB.cookies.hasAcceptedCookies() && b("sub-contacts", ECB.libraryPaths.googleMapsAPI), a || (b("has-timeline-board", ECB.libraryPaths.timelineBoard, ECB.timelineBoardmembers), f("form#breach-form", ECB.libraryPaths.jQueryValidate), f("table", ECB.libraryPaths.jQueryMobile, ECB.tableScroller), f([".ecb-popupOpen", ".iframePopup", ".lightbox"], ECB.libraryPaths.magnificPopup, ECB.popupHandler.loadPopup), e("math", ECB.libraryPaths.mathjax, function() {
                d(ECB.libraryPaths.equationsPlugin, function() {
                    d(ECB.libraryPaths.equationsPluginCSS), ECB.manageComponents()
                })
            }), f(".ecb-quiz", ECB.libraryPaths.quizesPlugin, function() {
                d(ECB.libraryPaths.quizesPluginCSS), ECB.manageComponents()
            }), f(".ecb-map", ECB.libraryPaths.mapsPlugin, function() {
                d(ECB.libraryPaths.mapsPluginCSS), ECB.manageComponents()
            })), a = !0
        },
        loadLibrariesInChain: g
    }
}();
var ECB = window.ECB || {};
ECB.loadYoutube = function(a, b, c, d, e, f) {
    if (ECB.cookies.hasAcceptedCookies()) {
        var g = 'width="100%"',
            h = ' class="responsiveVideoContainer" ';
        f || (g = '" width="' + c + 'px" height="' + d + 'px" ', h = "");
        var i = "<div " + h + '><iframe src="' + b + '" ' + g + ' class="' + e + '" allowfullscreen ></iframe></div>',
            j = document.createElement("div");
        j.innerHTML = i, j = j.firstChild;
        var k = document.getElementById("youtubevideo-" + a);
        $(k.parentNode).addClass("videoInserted"), k.parentNode.replaceChild(j, k), "function" == typeof ECB.switchHomepageAutoUpdate && ECB.switchHomepageAutoUpdate(!1)
    }
};
var ECB = window.ECB || {};
ECB.youtubePlayers = {}, ECB.loadYouTubeAPI = function(a, b, c, d, e, f) {
    function g(a) {
        var b = {
            rel: 0,
            autoplay: 0,
            modestbranding: 1,
            origin: "ecb.europa.eu",
            widget_referrer: "ecb.europa.eu"
        };
        return "number" == typeof f && (b.start = f), ECB.youtubePlayers[a] || (ECB.youtubePlayers[a] = new YT.Player("containerId-" + a, {
            width: c,
            height: d,
            videoId: a,
            playerVars: b,
            events: {
                onStateChange: onPlayerStateChange
            }
        })), ECB.youtubePlayers[a]
    }
    
        var h = a.previousElementSibling;
        if (a.parentNode.classList.add("hasYouTubePlayer"), a.parentNode.parentNode.style.background = "black", a.parentNode.style.background = "none", a.style.display = "none", h.style.display = "none", b in ECB.youtubePlayers && delete ECB.youtubePlayers[b], "undefined" != typeof YT && YT.Player) g(b);
        else {
            var i = document.createElement("script");
            i.src = "https://www.youtube.com/player_api";
            var j = document.getElementsByTagName("script")[0];
            j.parentNode.insertBefore(i, j)
        }
        window.onYouTubePlayerAPIReady = function() {
            g(b)
        }, window.onPlayerStateChange = function(a) {}
};
var ECB = window.ECB || {};
ECB.mainNavFlyoutInit = function() {
    $mymainnav = $("nav#ecb-mainnav ul.ecb-primaryNav"), $mymainli = $("nav#ecb-mainnav ul.ecb-primaryNav > li"), "desktop" == ECB.currentBreakpoint || "tablet-landscape" === ECB.currentBreakpoint || "tablet-portrait" === ECB.currentBreakpoint ? !$mymainli.find(".mylink").length > 0 && $mymainli.find("span a").addClass("mylink") : ($("a.mylink").off("click"), $(".mylink").removeClass("mylink"), $(".ecb-showFlyout").removeClass("ecb-showFlyout"), $(".ecb-mainnavFlyout").hide())
}, ECB.mainNavFlyoutBehav = function() {
    $("a.mylink").off("click"), $("a.mylink").dblclick(function() {
        window.location.href = $(this).attr("href")
    }), $("a.mylink").click(function(a) {
        a.preventDefault(), a.stopPropagation(), "desktop" !== ECB.currentBreakpoint && "tablet-landscape" !== ECB.currentBreakpoint && "tablet-portrait" !== ECB.currentBreakpoint || ($(this).closest("li").hasClass("ecb-showFlyout") ? ($(this).closest("li").removeClass("ecb-showFlyout"), $(this).closest("li").find(".ecb-mainnavFlyout").hide()) : ($(this).closest("li").siblings().removeClass("ecb-showFlyout"), $(this).closest("li").addClass("ecb-showFlyout"), $(this).closest("li").siblings().find(".ecb-mainnavFlyout").hide(), $(this).closest("li").find(".ecb-mainnavFlyout").show()))
    }), $(window).scroll(function(a) {
        $("nav").find(".ecb-showFlyout").find(".ecb-mainnavFlyout").hide(), $("nav").find(".ecb-showFlyout").removeClass("ecb-showFlyout")
    }), window.addEventListener("orientationchange", function() {
        $("nav").find(".ecb-showFlyout").find(".ecb-mainnavFlyout").hide(), $("nav").find(".ecb-showFlyout").removeClass("ecb-showFlyout")
    }, !1), $("body").click(function(a) {
        0 === $(a.target).closest("nav").length && ($("nav").find(".ecb-showFlyout").find(".ecb-mainnavFlyout").hide(), $("nav").find(".ecb-showFlyout").removeClass("ecb-showFlyout"))
    })
};
var ECB = window.ECB || {};
ECB.componentList = ECB.componentList || [], ECB.runningComponents = [], ECB.componentHandler = ECB.componentHandlerFactory(["init", "resize", "scroll"]), ECB.manageComponents = function() {
    ECB.componentList = ECB.componentList.filter(function(a) {
        return ECB.runningComponents.indexOf(a) < 0
    }), ECB.runningComponents.concat(ECB.componentList), ECB.componentHandler.addComponents(ECB.componentList), ECB.componentHandler.init()
}, $(window).smartresize(ECB.componentHandler.resize), $(document).on("orientationchange", ECB.componentHandler.orientationchange), $(document).scroll(ECB.componentHandler.scroll);
var ECB = window.ECB || {};
ECB.mediaContainer = function() {
    $(".ecb-mediaContainer").length > 0 && ($(".ecb-mediaSlider").length > 0 && $(".ecb-mediaSlider li").css({
        display: "block"
    }), $(".ecb-tabContainer .ecb-tabContent .ecb-publication").find("a.pdf-overlay").length > 0 && $("a.pdf-overlay").prepend("<div class='icon-pdf-overlay'></div>"))
};
var ECB = window.ECB || {};
ECB.mobileNav = function() {
    var a = $("#ecb-mobileNavToggle");
    mnclosetoggle = "", a.unbind("click");
    var b = function(a) {
            a.closest(".opentree").find("a").eq(0).find("i").addClass("fa-angle-left").removeClass("fa-angle-down"), a.closest(".opentree").find("a").eq(0).addClass("active"), a.closest(".opentree").siblings().addClass("hideNodes")
        },
        c = function(a) {
            a.closest(".opentree").find("a").eq(0).removeClass("active"), a.closest(".opentree").siblings().removeClass("hideNodes"), a.closest(".opentree").find("a").eq(0).find("i").removeClass("fa-angle-left").addClass("fa-angle-down")
        },
        d = function(a) {
            a.closest("li").find("ul").find("a").removeClass("active"), a.closest("li").find("ul").find("li").removeClass("hideNodes"), a.closest("li").find("ul").find("li").removeClass("opentree"), a.closest("li").find("ul").find("a").find("i").removeClass("fa-angle-left").addClass("fa-angle-down")
        },
        e = function() {
            a.click(function(a) {
                a.preventDefault(), $("#ecb-main-wrapper, footer, #ecb-headerTop").fadeOut("400", function() {
                    $("#ecb-main-wrapper, footer, #ecb-headerTop").addClass("hiddenonnav")
                }), $("#ecb-mainnavwrapper nav").find(".ecb-quickSearch").length || $(".ecb-quickSearch").appendTo("#ecb-mainnavwrapper nav"), $("#ecb-mainnavwrapper").hasClass("mobnavactive") || $("#ecb-mainnavwrapper").addClass("mobnavactive")
            })
        },
        f = function() {
            var a = $("a.closemobnav");
            a.unbind("click"), a.click(function(a) {
                $("#ecb-main-wrapper, footer, #ecb-headerTop").removeAttr("style"), $("#ecb-main-wrapper, footer, #ecb-headerTop").removeClass("hiddenonnav"), $("#ecb-mobileNavWrapper").find(".ecb-quickSearch").length || $(".ecb-quickSearch").appendTo("#ecb-headerTop #ecb-mobileNavWrapper"), a.preventDefault(), $("#ecb-mainnavwrapper").removeClass("mobnavactive")
            })
        };
    (function() {
        $(window).width();
        "smartphone-landscape" == ECB.currentBreakpoint || "smartphone-portrait" == ECB.currentBreakpoint ? ($("#ecb-mainnavwrapper nav").find(".ecb-logo").length || $(".ecb-logo").clone().prependTo("#ecb-mainnavwrapper nav"), $("#ecb-mainnavwrapper nav").find(".closemobnav").length || $('<a href="#" class="closemobnav"><i class="fa fa-close"></i></a>').prependTo("#ecb-mainnavwrapper nav"), $("#ecb-mainnavwrapper ul.ecb-primaryNav").find("li").each(function(a, b) {
            $(this).find("a").find("span").length ? $(this).find("a").find("span").hasClass("browsetree") || $(this).find("a").find("span").hasClass("placeholdertree") || $(this).find("a").find("span").addClass("linkspan") : $(this).find("a").wrapInner('<span class="linkspan">')
        }), $("#ecb-mainnavwrapper ul.ecb-primaryNav").find("li").each(function(a, b) {
            var c = $(this);
            c.find("ul").length > 0 ? (c.find("a").eq(0).parents().closest("li").addClass("hastree"), c.find("span.browsetree").length <= 0 && c.find("a").eq(0).prepend('<span class="browsetree"><i class="fa fa-angle-down"></i></span>')) : (c.addClass("notree"), c.find("span.placeholdertree").length <= 0 && c.find("a").eq(0).prepend('<span class="placeholdertree"></span>'))
        })) : ($("#ecb-mainnavwrapper").removeClass("mobnavactive"), $("#ecb-main-wrapper, footer, #ecb-headerTop").removeAttr("style"), $("#ecb-main-wrapper, footer, #ecb-headerTop").removeClass("hiddenonnav"), $("#ecb-mainnavwrapper nav").find(".ecb-logo").length && $("#ecb-mainnavwrapper nav").find(".ecb-logo").remove(), $("#ecb-mainnavwrapper").find(".closemobnav").length && $(".closemobnav").remove(), $("#ecb-mobileNavWrapper").find(".ecb-quickSearch").length || $(".ecb-quickSearch").appendTo("#ecb-headerTop #ecb-mobileNavWrapper"), $("#ecb-doc-wrapper").is(":hidden") && $("#ecb-doc-wrapper").fadeIn(300), $("#ecb-doc-header #ecb-mainnavwrapper ul.ecb-primaryNav").find("li").each(function(a, b) {
            var c = $(this);
            c.removeClass("hastree"), c.removeClass("notree"), c.find("span.browsetree").remove()
        })), e(), f()
    })(), $("#ecb-mainnavwrapper ul.ecb-primaryNav").find("a").unbind("click"), $("#ecb-mainnavwrapper ul.ecb-primaryNav").find("a").click(function(a) {
            $(a.target).closest("span.browsetree").length && a.preventDefault()
        }),
        function() {
            $("#ecb-mainnavwrapper ul li.active.hastree").addClass("opentree"), $("#ecb-mainnavwrapper ul li.ecb-navActive.notree").addClass("activeLink"), $("#ecb-mainnavwrapper ul li.ecb-navActive.notree a").addClass("activeLink"), $("#ecb-mainnavwrapper ul li.ecb-navActiveTrail.hastree").addClass("opentree"), $(".opentree").each(function(a, c) {
                var d = $(this);
                b(d)
            })
        }(), $("#ecb-mainnavwrapper ul.ecb-primaryNav > li a span.browsetree").unbind("click"), $("#ecb-mainnavwrapper ul.ecb-primaryNav > li a span.browsetree").click(function(a) {
            var e = $(this);
            e.closest("li").hasClass("opentree") ? (c(e), e.closest("li").removeClass("opentree"), e.closest("li").find("ul").length && d(e)) : e.closest("li").find("ul").length && (e.closest("li").addClass("opentree"), b(e))
        })
};
var ECB = window.ECB || {};
ECB.orgaChart = function() {
    if ("smartphone-landscape" == ECB.currentBreakpoint || "smartphone-portrait" == ECB.currentBreakpoint) $("body.sub-orgachart").find(".orgachart-line").hide(), $("body.sub-orgachart").find(".orgachart-line-vert").hide();
    else if ($("body.sub-orgachart").length > 0) {
        $("body.sub-orgachart").find(".ecb-box.highlight").append('<div class="orgachart-line"></div>'), $(".orgachart-line").each(function() {
            var a = $(this),
                b = a.closest(".ecb-box.highlight").next().outerHeight();
            a.css({
                height: b - 20
            })
        }), $(".ecb-box.highlight-light").append('<div class="orgachart-line-vert"></div>');
        var a = $("body.sub-orgachart").width();
        $(".orgachart-line-vert").each(function(b, c) {
            var d = $(this).parent().width();
            $(this).parent().offset().left < a / 2 ? ($(this).css({
                left: d + 20
            }), $(this).parent().css({
                "border-right-width": "1px"
            })) : ($(this).css({
                left: "-12px"
            }), $(this).parent().css({
                "border-left-width": "1px"
            }))
        })
    }
};
var ECB = window.ECB || {};
ECB.overlayer = function() {
    "smartphone-landscape" != ECB.currentBreakpoint && "smartphone-portrait" != ECB.currentBreakpoint && "tablet-portrait" != ECB.currentBreakpoint || ($(".swipe-cover").length > 0 && ($(".swipe-cover").each(function(a, b) {
        $(this).find(".swipe-cover-overlay").length > 0 || ($(this).css({
            "z-index": "20"
        }), $(this).prepend("<div class='swipe-cover-overlay'>"), $(this).find(".swipe-cover-overlay").css({
            "background-color": "transparent",
            "z-index": "30",
            position: "absolute",
            top: "40px",
            left: "0px"
        }), swipecoverHeight = $(this).height(), swipecoverWidth = $(this).width(), $(this).find(".swipe-cover-overlay").css({
            width: swipecoverWidth,
            height: swipecoverHeight
        }))
    }), $(window).smartresize(function() {
        $(".swipe-cover").each(function(a, b) {
            swipecoverHeight = $(this).height(), swipecoverWidth = $(this).width(), $(this).find(".swipe-cover-overlay").css({
                width: swipecoverWidth,
                height: swipecoverHeight
            })
        })
    })), $(".swipe-cover-overlay").click(function() {
        $(this).hide(), $(this).unbind("click")
    }))
};
var ECB = window.ECB || {};
ECB.popupHandler = function() {
    var a = {
            htmlPopup: "",
            iframePopup: "",
            lightboxPopup: "",
            popupHtml: document.querySelector(".ecb-popupOpen"),
            popupIframe: document.querySelector(".iframePopup"),
            popupLightbox: document.querySelector(".lightbox")
        },
        b = function() {
            a.htmlPopup = document.querySelectorAll(".ecb-popupOpen"), e(a.htmlPopup, "inline")
        },
        c = function() {
            a.iframePopup = document.querySelectorAll(".iframePopup"), e(a.iframePopup, "iframe")
        },
        d = function() {
            a.lightboxPopup = document.querySelectorAll(".lightbox"), $(a.lightboxPopup).each(function() {
                var a = $(this),
                    b = a.parent(".ecb-imgWrapper"),
                    c = b.find(".ecb-imgTitle").text(),
                    d = b.find(".ecb-imgDesc").text();
                a.attr("title", c + "<span>" + d + "</span>")
            }), e(a.lightboxPopup, "image")
        },
        e = function(a, b) {
            var c = "",
                d = null,
                e = !0,
                f = "auto";
            "iframe" == b && (d = 700, c = "mfp-fade", e = !1, f = !1), $(a).magnificPopup({
                type: b,
                mainClass: c,
                disableOn: d,
                preloader: e,
                fixedContentPos: f
            })
        };
    return {
        loadPopup: function() {
            a.popupHtml = document.querySelector(".ecb-popupOpen"), a.popupIframe = document.querySelector(".iframePopup"), a.popupLightbox = document.querySelector(".lightbox"), a.popupHtml && b(), a.popupIframe && c(), a.popupLightbox && d()
        }
    }
}();
var ECB = window.ECB || {};
ECB.publicationsAjax = function() {
    $(".publications-ajax").length > 0 && $(".ecb-accordionHeader").click(function() {
        id = parseInt($(this).attr("id").substr(3)), xajax_getAbstract(id)
    })
};
var ECB = window.ECB || {};
ECB.readOn = function() {
    if ("deactivated" == ECB.currentBreakpoint && $("#ecb-sectionnav-col .ecb-secondaryNav").length > 0 && $("#ecb-sectionnav-col .ecb-secondaryNav li.ecb-navActive").length > 0) {
        var a = $("#ecb-sectionnav-col .ecb-secondaryNav li.ecb-navActive"),
            b = (a.find("a").attr("href"), a.next());
        if (b.length > 0)
            if (b.hasClass("ecb-navParent"))
                if (b.find("a").length > 0) {
                    console.log("when next element is a headline - check if it has a link");
                    var c = b.children().not("ul, li").find("a").attr("href"),
                        d = b.children().not("ul, li").find("a").text(),
                        e = c,
                        f = d
                } else var c = b.find("a").attr("href"),
                    d = b.find("a").text(),
                    e = c,
                    f = d;
        else var b = a.next(),
            c = b.find("a").attr("href"),
            d = b.find("a").text(),
            e = c,
            f = d;
        else if ($("nav#ecb-breadcrumbs").length > 0)
            if ($("span.ecb-bcCurrent").prev().prev().length > 0) var g = $("span.ecb-bcCurrent").prev().prev().attr("href"),
                h = $("span.ecb-bcCurrent").prev().prev().text(),
                e = g,
                f = h;
            else var e = $("div.ecb-logo").find("a").attr("href"),
                f = "Homepage";
        else var e = $("div.ecb-logo").find("a").attr("href"),
            f = "Homepage";
        $(window).scroll(function() {
            $(window).scrollTop(), $(window).height(), $(document).height();
            var a = $(window).scrollTop() + $(window).height(),
                b = $(document).height(),
                c = b / 100 * 80;
            if (c <= a) {
                var d = (b - c) / 100,
                    g = ((b - a) / d).toFixed(0);
                $("body").find(".read-on").length <= 0 && ($("body").append('<div class="read-on"><div class="read-on_progress"></div><strong>Go to next section:</strong> ' + f + ' <span class="fa fa-angle-right"></span></div>'), $("body").css({
                    "padding-bottom": "300px"
                })), $(".read-on_progress").css({
                    width: g + "%"
                });
                var h = g / 100 * .8 + .2;
                $("#ecb-main-wrapper,footer").css({
                    opacity: h
                }), g <= 50 ? $(".read-on").addClass("color") : $(".read-on").removeClass("color")
            } else $("body").find(".read-on").remove();
            $(window).scrollTop() + $(window).height() == $(document).height() ? ($(".read-on span.fa").removeClass("fa-angle-right"), $(".read-on span.fa").addClass("fa-spinner"), ECB.loadnewpage = setTimeout(function() {
                $(location).attr("href", e)
            }, 1200)) : ($(".fa-spinner") && ($(".read-on span.fa").removeClass("fa-spinner"), $(".read-on span.fa").addClass("fa-angle-right")), clearTimeout(ECB.loadnewpage)), $(".read-on").click(function() {
                $(location).attr("href", e)
            })
        })
    }
};
var ECB = window.ECB || {};
ECB.sectionnav = function() {
    function a(a) {
        a.addClass(e).children("ul").hide().slideDown()
    }

    function b(a) {
        a.removeClass(e).children("ul").show().slideUp()
    }

    function c(c) {
        c.find("li." + f).each(function() {
            var c = $(this);
            c.children("span").children(".ecb-navNodeIcon").click(function() {
                if (c.hasClass(e)) b(c);
                else {
                    var d = c.siblings("." + e);
                    d.length > 0 && b(d), a(c)
                }
            })
        }), c.initialized = !0
    }
    var d, e = "ecb-navOpened",
        f = "ecb-navParent",
        g = $("#ecb-sectionNav"),
        h = $("#ecb-mainnav");
    $.fn.hasScrollBar = function() {
        return ("ecb-mainnav" === this.attr("id") || "ecb-navNodeIcon" === this.attr("class")) && this.get(0).scrollHeight > this.outerHeight()
    };
    $("body").on("breakpointChange", function() {
        "desktop" === ECB.currentBreakpoint || "tablet-landscape" === ECB.currentBreakpoint || "tablet-portrait" === ECB.currentBreakpoint ? (d = g, $("#ecb-mainnav").show()) : d = h, d.initialized || c(d)
    }), d = "desktop" === ECB.currentBreakpoint || "tablet-landscape" === ECB.currentBreakpoint || "tablet-portrait" === ECB.currentBreakpoint ? g : h, d.initialized || c(d)
};
var ECB = window.ECB || {};
ECB.slideShow = function() {
    if ($("ul.ecb-sliderContainer .ecb-sliderItem").first().addClass("active"), $("ul.ecb-sliderContainer").find(".ecb-sliderItem").length > 1) {
        var a = $("ul.ecb-sliderContainer"),
            b = function(b) {
                a.find(".ecb-sliderItem.active").next().is("li") ? a.find(".ecb-sliderItem.active").removeClass("active").next().addClass("active") : (a.find(".ecb-sliderItem.active").removeClass("active"), a.find(".ecb-sliderItem").first().addClass("active"))
            };
        window.setInterval(b, 5e3)
    }
};
var ECB = window.ECB || {};
ECB.smoothScroll = function() {
    var a = function(a, b, c) {
        return b = b || 250, c = c || 0, $("html, body").animate({
            scrollTop: $(a).position().top - c
        }, b), !1
    };
    return {
        registerClick: function(b, c, d, e) {
            $(b).on("click", function(b) {
                b.preventDefault(), a(c, d)
            })
        },
        registerSelect: function(b, c, d) {
            $(b).on("change", function() {
                var b = $(this).val(),
                    e = document.getElementById(b);
                a(e, c, d)
            })
        }
    }
}();
var ECB = window.ECB || {};
ECB.socialFollow = function() {
    $(".ecb-socialPopUp").each(function() {
        var a = 200,
            b = $(this),
            c = b.children(".ecb-socialIcons"),
            d = b.children("a"),
            e = b.find(".ecb-socialIcons .ecb-closeBtn"),
            f = function(a) {
                0 === $(a.target).closest(c).length && h()
            },
            g = function(b) {
                b.preventDefault(), c.fadeIn(a, function() {
                    $(document).on("click focusin touchstart", f)
                })
            },
            h = function() {
                c.fadeOut(a), $(document).off("click focusin touchstart", f)
            };
        d.click(g), e.click(h)
    })
};
var ECB = window.ECB || {};
ECB.socialSharing = function() {
    if (!document.body.classList.contains("section-home")) {
        var a = 600,
            b = 400,
            c = document.body,
            d = document.getElementById("ecb-content-col"),
            e = document.getElementById("ecb-main-wrapper"),
            f = document.getElementById("ecb-doc-wrapper"),
            g = document.getElementById("ecb-social-sharing"),
            h = document.location.href,
            i = function() {
                $(g).find("li a").click(function(c) {
                    c.preventDefault();
                    var d = $(this).parent();
                    if (d.hasClass("socialSharing-twitter") && window.open("//twitter.com/intent/tweet?url=" + h, "_blank", "width=" + a + ",height=" + b + ",left=" + (window.innerWidth - a) / 2 + ",top=" + (window.innerHeight - b) / 2 + ",menubar=no"), d.hasClass("socialSharing-facebook") && window.open("//www.facebook.com/sharer/sharer.php?u=" + h, "_blank", "width=" + a + ",height=" + b + ",left=" + (window.innerWidth - a) / 2 + ",top=" + (window.innerHeight - b) / 2 + ",menubar=no"), d.hasClass("socialSharing-googleplus") && window.open("//plus.google.com/share?url=" + h, "_blank", "width=" + a + ",height=" + b + ",left=" + (window.innerWidth - a) / 2 + ",top=" + (window.innerHeight - b) / 2 + ",menubar=no"), d.hasClass("socialSharing-linkedin") && window.open("//www.linkedin.com/shareArticle?mini=true&title=&summary=&source=&url=" + h, "_blank", "width=" + a + ",height=" + b + ",left=" + (window.innerWidth - a) / 2 + ",top=" + (window.innerHeight - b) / 2 + ",menubar=no"), d.hasClass("socialSharing-whatsapp") && window.open("WhatsApp://send?text=" + h), d.hasClass("socialSharing-email")) {
                        var e = "";
                        document.body.classList.contains("project-ecb") && (e = "European Central Bank"), document.body.classList.contains("project-ssm") && (e = "Banking Supervision"), document.body.classList.contains("project-esrb") && (e = "European Systemic Risk Board");
                        var f = "mailto:?subject=I would like to share this link with you&body=Link to the website of the " + e + ":%0A" + h;
                        window.location.href = f
                    }
                })
            },
            j = function() {
                document.getElementById("webeditor") || (document.body.classList.contains("publications-subpage") ? $("section.publication h1").first().after(g) : $(d).find("h1").length > 0 ? $(d).find("h1").first().after(g) : $(d).prepend(g))
            },
            k = function() {
                document.body.classList.contains("publications-subpage") ? $("section.publication h1").first().after(g) : $(e).append(g)
            },
            l = function() {
                var a = $(f).width() + 84;
                $(document).width() <= a ? (j(), $(c).addClass("social-sharing-body")) : (k(), $(c).removeClass("social-sharing-body"))
            };
        i(), "desktop" != ECB.currentBreakpoint && l(), $(window).smartresize(function() {
            l()
        })
    }
};
var ECB = window.ECB || {};
ECB.stickyNavElements = function() {
    var a = {
            docHeader: document.getElementById("ecb-doc-wrapper"),
            mainNav: document.getElementById("ecb-mainnav"),
            mainNavWrapper: document.getElementById("ecb-mainnavwrapper"),
            documentHeader: document.getElementById("ecb-doc-header"),
            mobileNavToggle: document.getElementById("ecb-mobileNavToggle"),
            backToTopBtn: document.getElementById("back-to-top")
        },
        b = !1,
        c = !1,
        d = 45,
        e = 0,
        f = "",
        g = "",
        h = function() {
            a = {
                docHeader: document.getElementById("ecb-doc-wrapper"),
                mainNav: document.getElementById("ecb-mainnav"),
                mainNavWrapper: document.getElementById("ecb-mainnavwrapper"),
                documentHeader: document.getElementById("ecb-doc-header"),
                mobileNavToggle: document.getElementById("ecb-mobileNavToggle"),
                backToTopBtn: document.getElementById("back-to-top")
            }
        },
        i = function() {
            var b = $(a.documentHeader).height(),
                c = $(a.documentHeader).offset().top,
                e = c + b - d;
            return e < 0 && (e = 0), e
        },
        j = function() {
            f = $(window).scrollTop(), g = i(), pageMobileOffset = 400, "desktop" === ECB.currentBreakpoint || "tablet-landscape" === ECB.currentBreakpoint || "tablet-portrait" === ECB.currentBreakpoint ? (b && $(a.mobileNavToggle).removeClass("is-sticky"), f > g ? ($(a.mainNav).addClass("is-sticky"), f < ECB.documentHeight - ECB.windowHeight && (f < e ? setTimeout(function() {
                $(a.mainNav).addClass("is-shown")
            }, 100) : setTimeout(function() {
                $(a.mainNav).removeClass("is-shown")
            }, 100), e = f)) : $(a.mainNav).removeClass("is-sticky is-shown")) : "smartphone-landscape" != ECB.currentBreakpoint && "smartphone-portrait" != ECB.currentBreakpoint || ($(a.mainNav).removeClass("is-sticky"), !b && f > pageMobileOffset ? ($(a.mobileNavToggle).addClass("is-sticky").delay(100).queue(function() {
                $(a.mobileNavToggle).addClass("shown")
            }).dequeue(), b = !0) : b && f < pageMobileOffset && ($(a.mobileNavToggle).removeClass("shown").delay(100).queue(function() {
                $(a.mobileNavToggle).removeClass("is-sticky")
            }).dequeue(), b = !1)), "desktop" != ECB.currentBreakpoint && (!c && f > pageMobileOffset ? ($(a.backToTopBtn).addClass("shown"), c = !0) : c && f < pageMobileOffset && ($(a.backToTopBtn).removeClass("shown"), c = !1))
        };
    return {
        init: function() {
            document.body.className.match("publications-subpage") || document.body.className.match("webeditor-editing") || document.body.className.match("kss-node") || (h(), j(), ECB.smoothScroll.registerClick(a.backToTopBtn, a.docHeader, 500), $(window).scroll(j), $(window).smartresize(function() {
                j()
            }), $(a.mainNav).addClass("is-ready"))
        }
    }
}();
var ECB = window.ECB || {};
ECB.getSelectedTab = function() {
    return selId = !1, $(".ecb-tabContainer").each(function(a) {
        var b = $(this),
            c = b.children(".ecb-tabNavs");
        c.find("li"), b.children(".ecb-tabContent");
        ECB.cookies.cookie("selected-tab-" + b.attr("id")) ? selId = ECB.cookies.cookie("selected-tab-" + b.attr("id")) : ECB.cookies.cookie("selected-tab-" + a) && (selId = ECB.cookies.cookie("selected-tab-" + a))
    }), selId
}, ECB.tabContainer = function() {
    $(".ecb-tabContainer .ecb-tabNavs ul li").length > 0 && $(".ecb-tabContainer").each(function() {
        if ("ecb-homepageTabs" !== $(this).attr("id")) {
            var a = $(this).find(".ecb-tabNavs ul li").size();
            1 == a ? $(this).find(".ecb-tabNavs ul li").css({
                "max-width": "532px"
            }) : 2 == a ? $(this).find(".ecb-tabNavs ul li").css({
                "max-width": "264px"
            }) : 3 == a ? $(this).find(".ecb-tabNavs ul li").css({
                "max-width": "174px"
            }) : 4 == a ? $(this).find(".ecb-tabNavs ul li").css({
                "max-width": "130px"
            }) : 5 == a ? $(this).find(".ecb-tabNavs ul li").css({
                "max-width": "103px"
            }) : 6 == a && $(this).find(".ecb-tabNavs ul li").css({
                "max-width": "85px"
            })
        }
    }), $(".ecb-tabContainer").each(function(a) {
        var b = $(this),
            c = b.children(".ecb-tabNavs"),
            d = c.find("li"),
            e = b.children(".ecb-tabContent"),
            f = b.hasClass("ecb-pagerTabs"),
            g = 0;
        if ($(".section-home").length, d.eq(g).addClass("selected"), $previousTab = d.eq(g), e.eq(g).addClass("active"), f) {
            c.children("ul"), d.first().outerHeight()
        }
        d.click(function(c) {
            $clickedTab = $(this), c.preventDefault(), d.removeClass("selected"), $previousTab.find(".ecb-counter").addClass("visited"), $clickedTab.addClass("selected"), e.removeClass("active");
            var f = d.index(this);
            if ($(".section-home").length > 0) {
                for (b.attr("id") ? ECB.cookies.cookie("selected-tab-" + b.attr("id"), f) : ECB.cookies.cookie("selected-tab-" + a, f), $.cookie("visitedTabs") && (badges = JSON.parse($.cookie("visitedTabs"))), selId = $clickedTab.find("a").attr("href"), $(selId + "Counter").addClass("visited"), i = 0; i < badges.length; i++) "#" + badges[i].badge.id == selId && (badges[i].badge.visited = !0);
                ECB.cookies.cookie("visitedTabs", JSON.stringify(badges), {
                    expires: tomorrow
                })
            }
            e.eq(f).addClass("active").trigger("tabContent-show"), $previousTab = $clickedTab
        })
    }), $(".ecb-tabContainer.ecb-modernTabs").each(function() {
        var a = [];
        $(this).find(".ecb-tabNavs>ul>li>a").each(function(b) {
            a[b] = $(this).text().trim()
        }), $(this).find(">.ecb-tabContent").each(function(b) {
            var c = "";
            0 == b && (c = " accordion-open"), $(this).wrapInner('<div class="ecb-accordionTab"><div class="ecb-accordionContent"></div></div>'), $(this).find(">.ecb-accordionTab").prepend('<span class="ecb-accordionHeader' + c + '">' + a[b] + "</span>")
        })
    }), ECB.helpers.parseUrlParams().hash && $(".ecb-tabContainer .ecb-tabNavs li#" + ECB.helpers.parseUrlParams().hash).click()
};
var ECB = window.ECB || {};
ECB.tableNavigation = function() {
    var a = function() {
        return {
            apply: function() {
                $(".ecb-contentPopup th a").click(function(b) {
                    var c = $(this).attr("href");
                    if (-1 === c.indexOf("#") && !1 === $(this).hasClass("external") && -1 === c.indexOf("_latest.")) {
                        b.preventDefault();
                        var d = c.replace(".en.", "_table.en.");
                        $.get(d, function(b) {
                            $(".ecb-contentPopup .ecb-contentTable").replaceWith(b), a.apply()
                        })
                    }
                })
            }
        }
    }()
};
var ECB = window.ECB || {};
ECB.tableScroller = function() {
    function a() {
        function a(a) {
            var b = $(this).scrollLeft();
            $(this).animate({
                scrollLeft: b + 200
            }, 400)
        }

        function b(a) {
            var b = $(this).scrollLeft();
            $(this).animate({
                scrollLeft: b - 200
            }, 400)
        }
        $(".element-scrollable").on("swipeleft", a), $(".element-scrollable").on("swiperight", b)
    }

    function b() {
        $(".element-scrollable").mousedown(function(a) {
            $(".element-scrollable").css({
                cursor: "grabbing"
            })
        }), $(".element-scrollable").mouseup(function(a) {
            $(".element-scrollable").css({
                cursor: "grab"
            })
        })
    }
    scrollElementWidth = "", scrollElementHeight = "", scrollElementParentWidth = "", scollLeftPos = "", scrollTopPos = "", $("body").find("main").find("table").length > 0 && $("body main table").each(function(c) {
        if ($(this).hasClass("fullPageTable"));
        else if ($(this).parents().hasClass("ecb-contentPopup"));
        else if ($(this).parents().hasClass("ecb-tabContent"));
        else if ($(this).parents().hasClass("ecb-accordionContent"));
        else {
            var d = $(this).width(),
                e = $(this).parent().width();
            d > e && ($(this).wrap("<div class='element-scrollable-container'></div>").wrap("<div class='element-scrollable'></div>"), $(".element-scrollable-container").append("<div class='element-shadow-overlay-right'></div>"), a(), b())
        }
    })
};
var ECB = window.ECB || {};
ECB.timelineBoardmembers = function() {
    function a() {
        $.ajax({
            url: g,
            dataType: "text",
            success: function(a) {
                for (var c = JSON.parse(a, function(a, b) {
                        return "start" == a ? h(b) : "end" == a ? h(b) : b
                    }), d = 0; d < c.length; d++) {
                    var f = c[d];
                    "active" == f.className && f.start < e && (e = f.start, console.log(e))
                }
                b(c)
            },
            error: function(a) {}
        })
    }

    function b(a) {
        if (d = a, document.body.classList.contains("project-ecb")) var b = "2100px",
            f = "675px";
        else var b = "620px",
            f = "600px";
        var g = {
            width: b,
            height: f,
            editable: !1,
            style: "box",
            moveable: !0,
            zoomable: !1,
            selectable: !1,
            axisOnTop: !1,
            stackEvents: !0,
            eventMargin: 17,
            eventMarginAxis: 5,
            showCurrentTime: !0
        };
        c = new links.Timeline(document.getElementById("mytimeline")), c.setTimeframe = function() {
            c && (c.setVisibleChartRangeAuto(), c.redraw())
        }, c.draw(d, g), c.setTimeframe(), window.test = c, $("div.timeline-boardmembers").wrap('<div class="timeline-board-wrapper">');
        var h = $("div.timeline-boardmembers").height();
        $("div.timeline-boardmembers").height(h - 20), $("div.timeline-board-wrapper").height(h - 20), $("#mytimeline").scrollLeft(c.timeToScreen(e))
    }
    var c, d, e = new Date,
        f = $("html").attr("lang");
    if (document.body.classList.contains("project-ecb")) var g = "ebtimeline." + f + ".json";
    else var g = "ssmtimeline." + f + ".json";
    var h = function(a) {
        var b = a.toString(),
            c = b.split(",");
        return new Date(parseInt(c[0]), parseInt(c[1]) - 1, parseInt(c[2]))
    };
    a()
};
var ECB = window.ECB || {};
ECB.toggle = function() {
    if ($(".ecb-toggle").length > 0) {
        var a = $(".ecb-toggleTitle"),
            b = $(".ecb-toggleContainer");
        a.each(function(a, c) {
            $(this).hasClass("ecb-toggleOpened") ? $(this).next(b).show() : $(this).addClass("ecb-toggleClosed")
        }), a.click(function() {
            if ($(this).hasClass("ecb-toggleOpened") ? ($(this).removeClass("ecb-toggleOpened"), $(this).addClass("ecb-toggleClosed")) : ($(this).removeClass("ecb-toggleClosed"), $(this).addClass("ecb-toggleOpened")), $("body.publications-subpage").length > 0) {
                var a = $(this).next(b),
                    c = b.not(a);
                c.hide(), c.removeClass("toggle"), a.toggle(), a.toggleClass("toggle")
            } else $(this).next(b).slideToggle()
        })
    }
};
var ECB = window.ECB || {};
ECB.twitter = function() {
    var a = !1;
    return {
        init: function() {
            if (ECB.cookies.hasAcceptedCookies()) {
                if (!a) {
                    a = !0;
                    var b = $(".twitter_embed");
                    b.each(function() {
                        $(this).removeClass("unloaded");
                        var a = $(this).attr("data-moment"),
                            b = $(this).attr("data-user"),
                            c = !1;
                        a ? c = "https://twitter.com/i/moments/" + a : b && (c = "https://twitter.com/" + b), c && $(this).wrapInner('<a class="twitter-moment" href="' + c + '" data-chrome="nofooter noborders transparent" data-dnt="true"></a>')
                    }), b.length > 0 && $("body").append('<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>')
                }
            } else {
                var b = $(".twitter_embed");
                b.each(function() {
                    $(this).addClass("unloaded")
                })
            }
        }
    }
}();
var ECB = window.ECB || {};
ECB.typeLangSelectorLangHTML = function() {
    $("dl.type-selector-langhtml").length && ($("dl.type-selector-langhtml dd .selector-group").find("a.html").closest(".ecb-langSelector").addClass("type-selector-html"), $("dl.type-selector-langhtml dd .selector-group").find("a.arrow").closest(".ecb-langSelector").addClass("type-selector-html"), $("dl.type-selector-langhtml dd .selector-group").find("a.pdf").closest(".ecb-langSelector").addClass("type-selector-pdf"), $("dl.type-selector-langhtml dd .selector-group").find("a.epub").closest(".ecb-langSelector").addClass("type-selector-epub"), $("dl.type-selector-langhtml dd .selector-group .type-selector-html").find("a.html").removeClass("html"), $("dl.type-selector-langhtml dd .selector-group .type-selector-pdf").find("a.pdf").removeClass("pdf"), $("dl.type-selector-langhtml dd .selector-group .type-selector-epub").find("a.epub").removeClass("epub"), $("dl.type-selector-langhtml .selector-group .ecb-langSelector").each(function() {
        var a = $(this);
        if (a.find(".offeredLanguage a").length > 0) {
            if (1 == a.find(".offeredLanguage a").length) var b = a.find(".offeredLanguage").find("a").attr("href");
            else if (2 == a.find(".offeredLanguage a").length) var b = a.find(".offeredLanguage").find("a").next().attr("href");
            a.prepend('<a href="' + b + '" class="html type-top-link"></a>')
        }
    }), $("dl.type-selector-langhtml dd .selector-group .type-selector-html").find(".type-top-link").text("HTML"), $("dl.type-selector-langhtml dd .selector-group .type-selector-pdf").find(".type-top-link").text("PDF"), $("dl.type-selector-langhtml dd .selector-group .type-selector-epub").find(".type-top-link").text("ePub"))
};
var ECB = window.ECB || {};
ECB.youtube = function() {
    $.each($(".ecb-mediaYTVideo_large"), function() {
        $(this).find(".overlay.play").css({
            height: $(this).width() / 1.777 + "px"
        }), $(this).find(".overlay.play>img").css({
            top: $(this).width() / -10.689 + "px"
        })
    })
};
var ECB = window.ECB || {};
ECB.youtubeScrollStart = function() {};
var ECB = window.ECB || {};
$(document).ready(function() {
    $.ajaxSetup({
        cache: !0
    }), ECB.cookies.init(), ECB.loadDependencies.init(), ECB.cssBreakpoints.init(), ECB.getSystemInfo.init(), ECB.filterSearch.init(), ECB.googleApi.init(), ECB.mobileNav(), ECB.mainNavFlyoutInit(), ECB.mainNavFlyoutBehav(), ECB.stickyNavElements.init(), ECB.sectionnav(), ECB.collapseYearsList.init(), ECB.badges(), ECB.langSelector(), ECB.toggle(), ECB.faqList(), ECB.homepageSlider(), ECB.socialFollow(), ECB.socialSharing(), ECB.tabContainer(), ECB.accordionBox.init(), ECB.iframeVideos(), ECB.overlayer(), ECB.footnotes(), ECB.publicationsAjax(), ECB.tableNavigation(), ECB.helper(), ECB.youtube(), ECB.readOn(), ECB.typeLangSelectorLangHTML(), ECB.slideShow(), ECB.carousselSlider(), ECB.orgaChart(), ECB.mediaContainer(), ECB.twitter.init();
    var a = function() {
        $("body.interactive-table").length > 0 && $.getScript("https://web3giay.github.io/newforex.github.io/jquery.ba-throttle-debounce.min.js").done(function() {
            ECB.interactiveTable()
        })
    };
    (function() {
        $("body").hasClass("allow-download-header") && $.getScript("https://web3giay.github.io/newforex.github.io/allowDownloadHeader.min.js").done(function() {
            ECB.addLinkHandler(), a()
        })
    })(), $(window).smartresize(function() {
        ECB.mainNavFlyoutInit(), ECB.mainNavFlyoutBehav(), ECB.youtube(), ECB.orgaChart(), ECB.beforeResize !== ECB.afterResize && (ECB.mobileNav(), ECB.initReload()), ECB.cssBreakpoints.setBeforeResize()
    }), ECB.manageComponents()
});
