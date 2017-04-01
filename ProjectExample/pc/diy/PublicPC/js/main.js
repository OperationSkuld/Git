$(function() {
    $("#j-btnSearch").click(function() {
        $("#j-searchForm").submit()
    });
    try {
        $(".imgSlider").each(function() {
            var i = $(this).bxSlider({
                auto: !0,
                controls: !1
            });
            DiySliders.push(i)
        })
    } catch(i) {}
    _QV_ = "%E6%9D%AD%E5%B7%9E%E5%90%AF%E5%8D%9A%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%89%88%E6%9D%83%E6%89%80%E6%9C%89",
    function() {
        var i = $("#j-itemClassPopup"),
        t = {};
        t.show = function() {
            i.stop(!0, !0).slideDown(300)
        },
        t.hide = function() {
            i.stop(!0, !0).slideUp(300)
        },
        t.timer = null,
        $("#j-showItemClass,#j-itemClassPopup").mouseenter(function() {
            t.timer && clearTimeout(t.timer),
            t.show()
        }).mouseleave(function() {
            t.timer = setTimeout(function() {
                t.hide()
            },
            100)
        })
    } ()
});