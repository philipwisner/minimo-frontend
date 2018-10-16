import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

//LINK IN THE BACKEND TO FIND DATA
const apiUrl = environment.apiUrl + '/auth';

@Injectable()
export class AuthService {
  private initialized: boolean;
  private user: User;
  private userChange: Subject<User | null> = new Subject();

  // Observable string stream
  userChange$ = this.userChange.asObservable();

  constructor(private http: Http) {}

  private setUser(user: User = null) {
    this.user = user;
    this.userChange.next(user);
  }

  // GET LOGGED IN USER
  getUser(): User {
    return this.user;
  }

  signup(user: User) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + "/signup", user, options).map(res => {
      let user = new User(res.json());
      this.setUser(user);
      return user;
    });
  }

  login(user: User) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + "/login", user, options).map(res => {
      let user = new User(res.json());
      this.setUser(user);
      return user;
    });
  }

  google() {
    console.log('running auth/google function');
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + "/google", options).map(res => {
      let user = new User(res.json());
      this.setUser(user);
      return user;
    });
  }

  logout() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + "/logout", {}, options).map(res => {
      this.setUser();
      return null;
    });
  }

  //CHECK IF LOGGED IN
  me() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + "/me", options).map(
      res => {
        let user = new User(res.json());
        this.setUser(user);
        return user;
      },
      err => {
        if (err.status === 404) {
          this.setUser();
        }
      }
    );
  }

  //INITIALIZE SESSION
  initialize() {
    if (!this.initialized) {
      this.initialized = true;
      this.me().subscribe();
    }
  }

  //EDIT USER INFO (PIC & DESCRIPTION)
  updateUser(user: User) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.put(apiUrl + "/me", user, options).map((res: Response) => {
      let user = new User(res.json());
      this.setUser(user);
      return user;
    });
  }
}
