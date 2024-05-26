document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document fully loaded and parsed');

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默认的按钮点击行为

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = this.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            this.appendChild(ripple);

            // 延迟页面跳转
            const href = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            setTimeout(() => {
                window.location.href = href;
            }, 300); // 300ms 的延迟

            setTimeout(() => {
                ripple.remove();
            }, 300); // 300ms 后移除波浪效果
        });
    });
});
