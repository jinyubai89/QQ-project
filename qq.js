document.addEventListener('DOMContentLoaded', function () {
    // 歌单推荐轮播
    const plTrack = document.getElementById('pl-track');
    const plPrev = document.getElementById('pl-prev');
    const plNext = document.getElementById('pl-next');

    if (plTrack && plPrev && plNext) {
        const cards = plTrack.querySelectorAll('.card');
        const totalCards = cards.length;
        const visibleCount = 5; // 一排显示 5 张
        let plIndex = 0;

        function getStepWidth() {
            if (!cards.length) return 0;
            const card = cards[0];
            const style = getComputedStyle(plTrack);
            const gap = parseInt(style.gap) || 20;
            return card.offsetWidth + gap;
        }

        function movePlaylist(dir) {
            plIndex = Math.max(0, Math.min(plIndex + dir, totalCards - visibleCount));
            const step = getStepWidth();
            plTrack.style.transform = `translateX(-${plIndex * step}px)`;
        }

        plPrev.addEventListener('click', () => movePlaylist(-1));
        plNext.addEventListener('click', () => movePlaylist(1));
    }

    // 新歌首发轮播
    const nsTrack = document.getElementById('ns-track');
    const nsPrev = document.getElementById('ns-prev');
    const nsNext = document.getElementById('ns-next');

    if (nsTrack && nsPrev && nsNext) {
        const songItems = nsTrack.querySelectorAll('.song-item');
        const totalItems = songItems.length;
        const visibleCount = 3; // 视口内大约显示 3 个
        let nsIndex = 0;

        function getSongStepWidth() {
            if (!songItems.length) return 0;
            const item = songItems[0];
            const style = getComputedStyle(nsTrack);
            const gap = parseInt(style.gap) || 20;
            return item.offsetWidth + gap;
        }

        function moveNewSongs(dir) {
            nsIndex = Math.max(0, Math.min(nsIndex + dir, totalItems - visibleCount));
            const step = getSongStepWidth();
            nsTrack.style.transform = `translateX(-${nsIndex * step}px)`;
        }

        nsPrev.addEventListener('click', () => moveNewSongs(-1));
        nsNext.addEventListener('click', () => moveNewSongs(1));
    }
});