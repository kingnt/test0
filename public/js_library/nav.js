var ht = new Array();
var id = 0;
var init = function () {
    ht[0] = $('#head').height() - $('#nav').height();
    id = 0;
    $('.mydiv').each(function () {
        ht[++id] = $(this).height();
    });
    for (var i = 1; i < id; i++) ht[i] += ht[i - 1];
    //for (var i = 0; i < id; i++)
    console.log('ht[0] = ' + ht[0]);
    ht[id] = $(window).height();
}
init();
$(window).resize(function () {
    init();
});
var cnt = 0;
$(document).scroll(function () {
    var cur = $(document).scrollTop();
    if (cur < ht[0]) {
        for (var j = 0; j < id; j++) if (j != i) $("#pill" + j).removeClass("active");
    }
    else {
        for (var i = 0; i < id; i++) {
            if (cur >= ht[i] && cur < ht[i + 1]) {
                // console.log('now at div' + i);
                $("#pill" + i).addClass("active");
                for (var j = 0; j < id; j++) if (j != i) $("#pill" + j).removeClass("active");
            }
        }
    }
});
