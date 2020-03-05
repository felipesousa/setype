import Main from './';
import Auth from './lib/auth';

describe('Core', () => {
  describe('::Instance', () => {
    let instance: Main;

    beforeEach(() => {
      instance = new Main({
        name: 'name',
        password: 123456,
      });
    });

    test('should be a instance of Main', () => {
      expect(instance).toBeInstanceOf(Main);
    });

    test('should has a auth property with the headers', () => {
      expect(instance['auth']).toBeInstanceOf(Auth);
      expect(instance['auth']).toEqual({
        headers: {
          name: 'name',
          password: 123456,
          valid: true,
        },
      });
    });
  });
});
