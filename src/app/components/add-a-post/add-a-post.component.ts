import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:3000';
const URL = baseUrl + '/posts';

@Component({
  selector: 'app-add-a-post',
  templateUrl: './add-a-post.component.html',
  styleUrls: ['./add-a-post.component.scss']
})
export class AddAPostComponent implements OnInit {
  userData: Object;
  posts: Object[];
  blogs: Object[];

  formData = {
    postTitle: '',
    postContent: '',
  };

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private router: Router,
    private blogService: BlogService
    ) { }

  ngOnInit() {
    this.blogService.getBlogList()
    .subscribe((data) => {
      this.blogs = data;
    });
  }

  private handleCreatePostForm(myForm) {
    this.postService.insertNew(this.formData).subscribe();

    this.postService.getPostList().subscribe((data) => {
      this.posts = data;
      this.router.navigate(['/profile']);
     });
  }

  //Need to make it so that when you select a blog, it saves that blog id to the post collection, if not leave it empty

}
