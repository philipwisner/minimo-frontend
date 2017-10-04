export class User {
  name: string;
  email: string;
  password: string;
  profile_pic: string;
  description: string;
  color_theme: string;
  
  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }

}
