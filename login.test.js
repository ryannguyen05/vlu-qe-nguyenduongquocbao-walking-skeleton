import { login } from './login.js';
describe('Kiểm tra hàm login()', () => {
    test('Trả về true khi user="admin" và pass="123"', () => {
        expect(login('admin', '123')).toBe(true);
    });
    test('Trả về false khi sai username', () => {
        expect(login('user', '123')).toBe(false);
    });
    test('Trả về false khi sai password', () => {
        expect(login('admin', 'wrong')).toBe(false);
    });
    test('Trả về false khi cả hai đều sai', () => {
        expect(login('abc', 'xyz')).toBe(false);
    });
    test('Trả về false khi username rỗng', () => {
        expect(login('', '123')).toBe(false);
    });
    test('Trả về false khi password rỗng', () => {
        expect(login('admin', '')).toBe(false);
    });
    test('Trả về false khi cả hai rỗng', () => {
        expect(login('', '')).toBe(false);
    });
    test('Phân biệt chữ hoa chữ thường (case-sensitive)', () => {
        expect(login('Admin', '123')).toBe(false);
        expect(login('admin', '123')).toBe(true);
    });
});
