export interface Headers {
  name: string;
  password: number;
}

type HeadersT = {
  name: string;
  password: number;
  valid: boolean;
};

class Auth {
  protected headers: HeadersT;

  constructor(headers: Headers) {
    this.headers = this.setHeaders(headers);
  }

  private setHeaders({ name, password }: Headers): HeadersT {
    return {
      name,
      password,
      valid: true,
    };
  }
}

export default Auth;
