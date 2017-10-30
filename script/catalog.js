var $check = $('.check'),
    $propImg = $('.images'),
    $goodImg = $('.detail-image');

$propImg.on('click', function () {
    var imgUrl = $(this).css('background-image');

    url = findName(imgUrl);
    $goodImg.attr('src', 'img/' + url + '.jpg');

    check = getCheck();
    $(this).append(check);
});
function getCheck() {
    $check.css('display', 'block');
    return $check.detach();
}
function findName(str) {
    start = str.lastIndexOf('/');
    end = str.indexOf('_t.jpg');
    lenght = end - start - 1;
    name = str.substr(++start, lenght);
    return name;
}