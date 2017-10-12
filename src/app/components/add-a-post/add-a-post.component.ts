import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:3000';
const URL = baseUrl + '/posts';

@Component({
  selector: 'app-add-a-post',
  templateUrl: './add-a-post.component.html',
  styleUrls: ['./add-a-post.component.scss']
})
export class AddAPostComponent implements OnInit {
  posts: Object[];
  blogs: Object[];
  addToBlog: boolean;

  formData = {
    postTitle: '',
    postContent: '',
    blogId: '',
  };

  constructor(
    private postService: PostService,
    private router: Router,
    private blogService: BlogService
    ) { }

  ngOnInit() {
    this.blogService.getBlogList()
    .subscribe((data) => {
      this.blogs = data;
    });
  }

  handleCreatePostForm(myForm) {
    this.postService.insertNew(this.formData).subscribe(() => {
      this.router.navigate(['/profile/posts']);
     });
  }
}
