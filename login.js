/**
 * Hàm kiểm tra đăng nhập.
 * @param {string} username - Tên đăng nhập
 * @param {string} password - Mật khẩu
 * @returns {boolean} - true nếu đúng, ngược lại false
 */
export function login(username, password) {
    return username === 'admin' && password === '123';
}
