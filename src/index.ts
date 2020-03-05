import Auth, { Headers } from './lib/auth';

class Main {
  private auth: Auth;

  constructor({ name, password }: Headers) {
    this.auth = new Auth({ name, password });
  }
}

export default Main;
