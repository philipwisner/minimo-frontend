import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Post } from '../models/post';

const apiUrl = environment.apiUrl + '/posts/';

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

  getPostList() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl, options)
      .map((res: Response) => res.json());
  }

  getPostListbyBlog(id: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `blog/${id}`, options)
      .map((res: Response) => res.json());
  }

  getPostListOldest() {
    console.log("oldest service called");
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + 'oldest', options)
      .map((res: Response) => res.json());
  }

  insertNew(post) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl, post, options)
    .map((res: Response) => {
       return res.json()
    })
  }
}
