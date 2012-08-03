(function () {
    var startY;
    var clientY;
    var offsetY = 0;
    var scrollJump = 1;
    var scrollRefresh = 5;

    document.addEventListener('mousedown', function (ev) {
        if (ev.button != 1) return;
        startY = ev.screenY;
        clientY = ev.clientY;
        offsetY = 0;
        scrollTimer = setTimeout(function () {
            window.scrollBy(0, scrollJump);
//             console.log("Scroll window by");
//             console.log(scrollJump/10);
            scrollJump = 0;
            scrollTimer = setTimeout(arguments.callee, scrollRefresh);
        }, scrollRefresh);
    }, false);

    document.addEventListener('mousemove', function (ev) {
        if (ev.button != 1) return;
        var currY = ev.screenY;
		offsetY = startY - currY;
		startY = currY
//         console.log(currY);
//         console.log(startY);
//         console.log(offsetY);
//         console.log(startY - currY);
        scrollJump = parseInt(offsetY);
    }, false);

    document.addEventListener('mouseup', function (ev) {
        if (ev.button != 1) return;
        if (scrollTimer) {
            clearTimeout(scrollTimer);
            scrollTimer = null;
        }
    }, false);

function showScrollPicture() {
    }
})();