//スリープが入るかもしれ無い部分のあと全て
function remaining() {
    if(hoge) {
        if(hogeType == "a" && hugaType == "b") {
            location.href = huga.html;
        }
    }
    hogefunc(hoge, huga);
}

if(hoge && !huga) { //2秒待つ場合
    setTimeout(function() {
        location.href = hoge.html;
        remaining();
    }, 2000);
} else { //2秒また無い場合
    remaining();
}
