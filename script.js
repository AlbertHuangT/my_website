document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document fully loaded and parsed');

    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = button.getBoundingClientRect();
        const clientX = event.clientX || event.touches[0].clientX;
        const clientY = event.clientY || event.touches[0].clientY;
        ripple.style.left = `${clientX - rect.left}px`;
        ripple.style.top = `${clientY - rect.top}px`;
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 300); // 300ms 后移除波浪效果
    }

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默认的按钮点击行为
            createRipple(e);

            // 立即跳转页面
            const href = this.getAttribute('data-href');
            window.location.href = href;
        });

        button.addEventListener('touchstart', function (e) {
            createRipple(e);
        });
    });
});
