export class User {
  name: string;
  email: string;
  password: string;
  description: string;
  profilePhoto: string;
  colorTheme: string;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }

}
