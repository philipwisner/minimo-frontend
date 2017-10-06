import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  new: any = {};

  constructor(private http: Http) { }

  getPostList(){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get('http://localhost:3000/posts/', options)
      .map((res: Response) => res.json());
  }

  insertNew(post) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post('http://localhost:3000/posts', post, options)
    .map((res: Response) => {
       return res.json()
    })
  }
}
