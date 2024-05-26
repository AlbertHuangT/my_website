// JavaScript 文件，用于添加交互功能

document.addEventListener('DOMContentLoaded', (event) => {
    // 当文档完全加载并解析完成后执行此函数
    console.log('Document fully loaded and parsed');

    // 获取按钮元素
    const button = document.querySelector('button');

    // 添加点击事件监听器
    button.addEventListener('click', () => {
        alert('你好，欢迎访问我的网站！');
    });
});
