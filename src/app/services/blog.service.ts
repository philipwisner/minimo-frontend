import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Blog } from '../models/blog';


const apiUrl = environment.apiUrl + '/blog/';

@Injectable()
export class BlogService {
  new: any = {};
  blog: Blog;
  private blogChange: Subject<Blog | null> = new Subject();

  // Observable string stream
  blogChange$ = this.blogChange.asObservable();

  constructor(private http: Http) { }

  getBlogUpdates(){
    this.blogChange.subscribe();
  }

  getBlogList(){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl, options)
      .map((res: Response) => res.json());
  }

  getBlog(id: string){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `${id}`, options)
      .map((res: Response) => res.json());
  }

  insertNew(blog) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl, blog, options)
    .map((res: Response) => {
       return res.json()
    })
  }

}
