$(document).ready(function () {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            $('[rel="shortcut icon"]').attr('href', "/images/favicon.ico");
            document.title = 'Anh yêu em!';
            clearTimeout(titleTime);
        } else {
            $('[rel="shortcut icon"]').attr('href', "/images/favicon.ico");
            document.title = 'thành_huyền' + OriginTitile;
            titleTime = setTimeout(function () {
                document.title = OriginTitile;
            }, 2000);
        }
    });
})
