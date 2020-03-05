import Auth from './auth';

describe('Auth', () => {
  describe('::Instance', () => {
    let auth: Auth;

    beforeAll(() => {
      auth = new Auth({
        name: 'name',
        password: 123456,
      });
    });

    test('should be a instance of Auth ', () => {
      expect(auth).toBeInstanceOf(Auth);
    });

    test('should set the headers when initialize a new instance', () => {
      expect(auth['headers']).toEqual({
        name: 'name',
        password: 123456,
        valid: true,
      });
    });
  });
});
