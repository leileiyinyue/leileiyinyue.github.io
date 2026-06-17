// lockScale.js 全局禁用页面缩放 - 全站通用
(function() {
    // 阻止双击放大
    let lastTouchEndTime = 0;
    document.addEventListener('touchend', function(e) {
        const now = Date.now();
        // 300ms内连续两次触摸判定为双击，阻止默认缩放
        if (now - lastTouchEndTime <= 300) {
            e.preventDefault();
        }
        lastTouchEndTime = now;
    }, false);

    // 阻止双指捏合缩放（安卓通用）
    document.addEventListener('touchstart', function(e) {
        // 超过1根手指触摸，拦截缩放手势
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // 拦截Safari苹果浏览器专属缩放手势
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });

    // 禁用窗口缩放快捷键（PC端浏览器Ctrl+/Ctrl-放大缩小）
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
            e.preventDefault();
        }
    });
})();