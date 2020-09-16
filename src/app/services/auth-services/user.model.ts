export class User {
  constructor(
    // tslint:disable-next-line: variable-name
    public _id: string,
    public name: string,
    public email: string,
    public phone: string,
    public role: string,
    public eduAtlasId: string,
    // tslint:disable-next-line: variable-name
    private _token: string,
    // tslint:disable-next-line: variable-name
    private _tokenExpirationDate: Date,
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
