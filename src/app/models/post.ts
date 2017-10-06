export class Post {
  userId: string;
  blogId: string; //can have none
  postTitle: string;
  postContent: string;
  postDate: Date;

  constructor() {
  }

}

// DISPLAY ALL USER'S POSTS
// get user/:id/post

// DISPLAY ALL USER'S BLOGS
// get user/:id/blog

// DISPLAY ALL USER POSTS
// get user/:id/blog/:id
