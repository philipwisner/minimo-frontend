import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  showStyle: false;
  expanded = false;
  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {

  }

  handleExpandConent() {
    this.expanded = !this.expanded;
  }

}
