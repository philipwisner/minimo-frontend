import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Post } from '../models/post';


//LINK IN THE BACKEND TO FIND DATA
const apiUrl = environment.apiUrl + '/posts/';

// add delete and edit api calls
@Injectable()
export class PostService {
  new: any = {};
  post: Post;
  private postChange: Subject<Post | null> = new Subject();

  // Observable string stream
  postChange$ = this.postChange.asObservable();

  constructor(private http: Http) { }

  getPostUpdates(){
    this.postChange.subscribe();
  }

// LIST OF ALL POSTS (GLOBAL)
  getPostList() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl, options)
      .map((res: Response) => res.json());
  }

// LIST OF ALL POSTS (LOGGEN IN)
  getYourPostList() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + 'posts', options)
      .map((res: Response) => res.json());
  }

// LIST OF ALL POSTS (LOGGEN IN) - REVERSE ORDER
  getYourReverseList() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + 'reverse', options)
      .map((res: Response) => res.json());
  }

  // LIST OF ALL POSTS OF A USER (PASS USER ID)
  getPostListbyUser(id: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `user/${id}`, options)
      .map((res: Response) => res.json());
  }

  // LIST OF ALL POSTS THAT BELONG TO SELECTED BLOG (PASS BLOG ID)
  getPostListbyBlog(id: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `blog/${id}`, options)
      .map((res: Response) => res.json());
  }

  // CREATE A NEW POST
  insertNew(post) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl, post, options)
    .map((res: Response) => {
       return res.json()
    })
  }
}
