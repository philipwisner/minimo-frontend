import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Blog } from '../../models/blog';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:3000';
const URL = baseUrl + '/blogs';

@Component({
  selector: 'app-add-a-blog',
  templateUrl: './add-a-blog.component.html',
  styleUrls: ['./add-a-blog.component.scss']
})
export class AddABlogComponent implements OnInit {
  userData: Object;
  blogs: Object[];

  formData = {
    blogName: '',
    blogDescription: '',
  };

  constructor(private blogService: BlogService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  private handleCreateBlogForm(myForm) {
    this.blogService.insertNew(this.formData).subscribe();
    this.blogService.getBlogList().subscribe((data) => {
      this.blogs = data;
     });
     this.router.navigate(['/profile/blogs']);
  }

}
