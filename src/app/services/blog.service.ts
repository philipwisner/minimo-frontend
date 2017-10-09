import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Blog } from '../models/blog';


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
    console.log("HELLOO")
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get('http://localhost:3000/blog/', options)
      .map((res: Response) => res.json());
  }

  insertNew(blog) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post('http://localhost:3000/blog', blog, options)
    .map((res: Response) => {
       return res.json()
    })
  }

}
