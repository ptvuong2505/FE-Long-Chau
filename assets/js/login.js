// Lấy giá trị từ input và gửi request khi bấm nút đăng nhập

document.getElementById('loginButton').addEventListener('click', async function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
        const res = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (res.ok && data.userId) {
            window.location.href = 'index.html'; // Chuyển hướng sang trang chính
        } else {
            alert(data.message || 'Sai tên đăng nhập hoặc mật khẩu');
        }
    } catch (err) {
        alert('Lỗi kết nối tới máy chủ!');
    }
});

// Xử lý hiện/ẩn mật khẩu
const showPasswordCheckbox = document.getElementById('showPassword');
if (showPasswordCheckbox) {
    showPasswordCheckbox.addEventListener('change', function() {
        const passwordInput = document.getElementById('password');
        if (this.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
}