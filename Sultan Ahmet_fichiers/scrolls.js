function common_offsets() {
    $picBlockOffset = [], $textBlockOffset = [], $twpBlockOffset = [], $diamondBlockOffset = [], $ctaBlockOffset = 0, $formBlockOffset = 0, $fullScreenElems = [], $fullScreenOffset = [], $fullScreenOffsetIn = [], $fullScreenOffsetOut = [], 0 != $(".pic_block").length && ($scrollPicBlock = !0, $picBlockLength = $(".pic_block").length, 0 == $picBlockVisible.length && $(".pic_block").each(function (e) {
        $picBlockVisible.push(!1)
    }), $(".pic_block").each(function (e) {
        $picBlockOffset.push($(".pic_block:eq(" + e + ")").position().top - scrollThreshold_1_3)
    })), 0 != $(".text_block").length && ($scrollTextBlock = !0, $textBlockLength = $(".text_block").length, 0 == $textBlockVisible.length && $(".text_block").each(function (e) {
        $textBlockVisible.push(!1)
    }), $(".text_block").each(function (e) {
        $textBlockOffset.push($(".text_block:eq(" + e + ")").position().top - scrollThreshold_1_3)
    })), 0 != $(".text_with_picture").length && ($scrollTwpBlock = !0, $twpBlockLength = $(".text_with_picture").length, 0 == $twpBlockVisible.length && $(".text_with_picture").each(function (e) {
        $twpBlockVisible.push(!1)
    }), $(".text_with_picture").each(function (e) {
        $twpBlockOffset.push($(".text_with_picture:eq(" + e + ")").position().top - scrollThreshold_1_2)
    })), 0 != $(".diamond").length && ($scrollDiamondBlock = !0, $diamondBlockLength = $(".diamond").length, 0 == $diamondBlockVisible.length && $(".diamond").each(function (e) {
        $diamondBlockVisible.push(!1)
    }), $(".diamond").each(function (e) {
        $diamondBlockOffset.push($(".diamond:eq(" + e + ")").position().top - scrollThreshold_1_2)
    })), 0 != $(".fullscreen_pic").length && ($scrollFp = !0, $fpLength = $(".fullscreen_pic").length, $(".fullscreen_pic").each(function (e) {
        autosize($(".fullscreen_pic:eq(" + e + ") > img,.fullscreen_pic:eq(" + e + ") .pic_big img"))
    }), $(".fullscreen_pic").each(function (e) {
        "gallery_container" == $(this).attr("id") ? $fullScreenElems.push($(".fullscreen_pic:eq(" + e + ") .gallery_slider")[0]) : $fullScreenElems.push($(".fullscreen_pic:eq(" + e + ") img")[0]), $fullScreenOffset.push($(".fullscreen_pic:eq(" + e + ")").position().top - windowHeight), $fullScreenOffsetIn.push($(".fullscreen_pic:eq(" + e + ")").position().top - 2 * windowHeight), $fullScreenOffsetOut.push($(".fullscreen_pic:eq(" + e + ")").position().top + 2 * windowHeight + 100)
    })), 0 != $(".contact_form").length && ($scrollFormBlock = !0, $formBlockOffset = $(".contact_form").position().top - scrollThreshold_1_3), 0 != $(".cta").length && ($scrollCtaBlock = !0, $ctaBlockOffset = $("aside").position().top - scrollThreshold_1_5)
}

function common_scroll() {
    if($headerPic){

    if (!$menuBack && pageY > $menuShowPass && ($menuBack = !0, $(".menu_controller").addClass("force_white"),
        $(".menu_controller .vertical").removeClass("no_height"), $(".menu_controller .small_vm").removeClass("top_single")),

    $menuBack && pageY < $menuShowPass && ($menuBack = !1, $(".menu_controller .vertical").addClass("no_height"),
        $(".menu_controller .small_vm").addClass("top_single"), $(".menu_controller").removeClass("force_white")),
    (!$titleVisible && pageY > 140 || !$titleVisible && isHandheld && windowWidth < 960) && ($titleVisible = !0,
        $(".main_title").removeClass("hidden"),

        setTimeout(function () {
        $(".main_title h2").removeClass("top_single"), 0 != $(".main_title .line_set").length && showSingleLine($(".main_title:eq(0) .line_set")), $(".col_text .body_text").removeClass("top_hidden")
    }, 300),

        setTimeout(function () {
        $(".main_title h3").removeClass("top_single")
    }, 500)),

    $altLayout || $parallax && pageY < $headerPass && ($headerPic.style[$$transform[0]] = "translateY(" + pageY / 3 + "px)"),
    $parallax && $scrollFp)

        for (fp = 0; fp < $fpLength; fp++) pageY >= $fullScreenOffsetIn[fp] && pageY <= $fullScreenOffsetOut[fp] &&
        ($fullScreenElems[fp].style[$$transform[0]] = "translate3d(0," + (-windowHeight - ($fullScreenOffset[fp] - windowHeight - pageY) / 2) + "px, 0)");
    $scrollFormBlock && !$formBlockVisible && pageY > $formBlockOffset && ($formBlockVisible = !0, showForm($(".contact_form"))),
    $scrollCtaBlock && !$ctaBlockVisible && pageY > $ctaBlockOffset && ($ctaBlockVisible = !0, showCta($(".cta")))


    }

}

function block_scroll() {
    if ($scrollPicBlock) for (pb = 0; pb < $picBlockLength; pb++) !$picBlockVisible[pb] && pageY > $picBlockOffset[pb] && ($picBlockVisible[pb] = !0, showPicBlock($(".pic_block:eq(" + pb + ")")));
    if ($scrollTextBlock) for (tb = 0; tb < $textBlockLength; tb++) !$textBlockVisible[tb] && pageY > $textBlockOffset[tb] && ($textBlockVisible[tb] = !0, showTextBlock($(".text_block:eq(" + tb + ")")));
    if ($scrollTwpBlock) for (twp = 0; twp < $twpBlockLength; twp++) !$twpBlockVisible[twp] && pageY > $twpBlockOffset[twp] && ($twpBlockVisible[twp] = !0, showTwp($(".text_with_picture:eq(" + twp + ")")));
    if ($scrollDiamondBlock) for (dm = 0; dm < $diamondBlockLength; dm++) !$diamondBlockVisible[dm] && pageY > $diamondBlockOffset[dm] && ($diamondBlockVisible[dm] = !0, showDiamond($(".diamond:eq(" + dm + ")")))
}

function showPicBlock(e) {
    $(".covered .cover, .covered .content", e).removeClass("hidden"), showSingleLine($(".line_set.vertical", e)), setTimeout(function () {
        showSingleLine($(".line_set.horizontal", e))
    }, 500), setTimeout(function () {
        $(".comment_text", e).removeClass("top_hidden")
    }, 1200)
}

function showTextBlock(e) {
    $(".block_title h2,.main_title h2,.block_title h3,.main_title h3", e).removeClass("top_translated").removeClass("top_translated_less").removeClass("top_double"), setTimeout(function () {
        $(".body_text:eq(0)", e).removeClass("top_translated").removeClass("top_translated_less").removeClass("top_single"), $(".two_col_text", e).removeClass("top_translated").removeClass("top_translated_less")
    }, 200), setTimeout(function () {
        $(".body_text:eq(1)", e).removeClass("top_translated").removeClass("top_translated_less").removeClass("top_single")
    }, 400), setTimeout(function () {
        $(".body_text:eq(2)", e).removeClass("top_translated").removeClass("top_translated_less").removeClass("top_single")
    }, 600), setTimeout(function () {
        $(".body_text:eq(3)", e).removeClass("top_translated").removeClass("top_translated_less").removeClass("top_single")
    }, 800), 0 != $(".out_box_container", e.parent()).length && (setTimeout(function () {
        $(".out_box_container .vertical_box:eq(0) .cover,.out_box_container .vertical_box:eq(0) .content", e.parent()).removeClass("hidden")
    }, 600), setTimeout(function () {
        $(".out_box_container .vertical_box:eq(1) .cover,.out_box_container .vertical_box:eq(1) .content", e.parent()).removeClass("hidden")
    }, 800), setTimeout(function () {
        $(".out_box_container .vertical_box:eq(2) .cover,.out_box_container .vertical_box:eq(2) .content", e.parent()).removeClass("hidden")
    }, 1e3), setTimeout(function () {
        $(".out_box_container .comment_text", e.parent()).removeClass("top_hidden")
    }, 1100)), 0 != $(".line_set", e).length && showSingleLine($(".line_set.vertical", e))
}

function showTwp(e) {
    $(".block_title h2,.main_title h2,.block_title h3,.main_title h3", e.parent()).removeClass("top_translated").removeClass("top_translated_less"), $(".twp_picture .cover,.twp_picture .content", e).removeClass("hidden"), setTimeout(function () {
        $(".twp_text .body_text", e).removeClass("top_hidden"), showSingleLine($(".line_set.horizontal", e)), $(".hash_text", e).removeClass("top_single")
    }, 500), setTimeout(function () {
        $(".borders", e).removeClass("hidden_by_scaling_full")
    }, 1e3)
}

function showDiamond(e) {
    e.removeClass("hidden"), $(".d_cover", e).addClass("show"), $("img", e).removeClass("hidden"), $hasContent = $(".diamond_content", e).length > 0, $hasContent && (setTimeout(function () {
        showSingleLine($(".line_set", e))
    }, 600), setTimeout(function () {
        $(".download_label", e).removeClass("top_single")
    }, 1500))
}

function showSingleLine(e) {
    $(".square:not(.shifted)", e).removeClass("hidden_by_scaling_full"), setTimeout(function () {
        $(".square:not(.shifted) .inline", e).removeClass("hidden_by_scaling_full")
    }, 200), setTimeout(function () {
        $(".square.shifted", e).removeClass("hidden_by_scaling_full")
    }, 250), setTimeout(function () {
        $(".square.shifted .inline", e).removeClass("hidden_by_scaling_full")
    }, 450), setTimeout(function () {
        $(".start_square", e).removeClass("hidden_by_scaling_full")
    }, 500), setTimeout(function () {
        $(".line", e).removeClass("hidden")
    }, 450)
}

function showCta(e) {
    $(".rect_pic .cover, .rect_pic .content", e).removeClass("hidden"), setTimeout(function () {
        $(".label_container", e).removeClass("no_height")
    }, 500), setTimeout(function () {
        showSquareLabel(e), $(".labels .out").removeClass("top_translated")
    }, 900)
}

function showForm(e) {
    $(".square.shifted.first", $(".line_set.form")).removeClass("hidden_by_scaling_full"), setTimeout(function () {
        $(".square.shifted.first .inline", $(".line_set.form")).removeClass("hidden_by_scaling_full"), $(".line.first", $(".line_set.form")).removeClass("hidden")
    }, 200), $(".form_title h2").removeClass("top_hidden"), setTimeout(function () {
        $(".start_square.first", $(".line_set.form")).removeClass("hidden_by_scaling_full"), $(".form_title h3").removeClass("top_double")
    }, 350), setTimeout(function () {
        $(".line._2", $(".line_set.form")).removeClass("hidden"), $(".form_container").removeClass("top_double")
    }, 820), setTimeout(function () {
        $(".line._3", $(".line_set.form")).removeClass("hidden")
    }, 1550), setTimeout(function () {
        $(".line._4", $(".line_set.form")).removeClass("hidden")
    }, 2300), setTimeout(function () {
        $(".start_square.last", $(".line_set.form")).removeClass("hidden_by_scaling_full"), $(".square.shifted.last", $(".line_set.form")).removeClass("hidden_by_scaling_full")
    }, 2800), setTimeout(function () {
        $(".square.shifted.last .inline", $(".line_set.form")).removeClass("hidden_by_scaling_full")
    }, 3e3)
}

$picBlockVisible = [], $textBlockVisible = [], $twpBlockVisible = [], $diamondBlockVisible = [], $titleVisible = !1, $formBlockVisible = !1, $ctaBlockVisible = !1, $scrollPicBlock = !1, $scrollTextBlock = !1, $scrollTwpBlock = !1, $scrollFormBlock = !1, $scrollCtaBlock = !1, $scrollDiamondBlock = !1, $scrollFp = !1;


