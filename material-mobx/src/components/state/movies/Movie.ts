
export class Movie {
  // tslint:disable-next-line:variable-name
  constructor(private _id: string, private _title: string) {

  }

  get title() {
    return this._title;
  }

  get id() {
    return this._id;
  }
}