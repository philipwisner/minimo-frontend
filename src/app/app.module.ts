import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { QuillModule } from 'ngx-quill';

// MAIN APP
import { AppComponent } from './app.component';

// PIPES
import { DatePipe } from '@angular/common';

// SERVICES
import { AuthService } from './services/auth.service';
import { PostService } from './services/posts.service';
import { BlogService } from './services/blog.service';
import { RequireAuthService } from './guards/require-auth.service';

// PAGES
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogHomePageComponent } from './pages/blog-home-page/blog-home-page.component';

// COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialSigninComponent } from './components/social-signin/social-signin.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { AddAPostComponent } from './components/add-a-post/add-a-post.component';
import { AddAPostIconComponent } from './components/add-a-post-icon/add-a-post-icon.component';
import { AddABlogComponent } from './components/add-a-blog/add-a-blog.component';
import { AddABlogIconComponent } from './components/add-a-blog-icon/add-a-blog-icon.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { BlogPostCardComponent } from './components/blog-post-card/blog-post-card.component';

// ROUTES
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomePageComponent },
  { path: 'feed', component: FeedPageComponent },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
  { path: 'profile/settings', component: SettingsPageComponent, canActivate: [ RequireAuthService ]},
  { path: 'profile/posts', component: ProfilePageComponent },
  { path: 'profile/blogs', component: BlogPageComponent },
  { path: 'profile/createpost', component: AddAPostComponent },
  { path: 'profile/createblog', component: AddABlogComponent },
  { path: 'profile/blogs/:id', component: BlogHomePageComponent },

  //WORKING ON
  { path: 'profile/:id/posts', component: ProfilePageComponent },

  // PATHS TO DO
  { path: 'profile/:id/blogs', component: BlogPageComponent },
  { path: 'profile/:id/blogs/:id', component: BlogPageComponent },
  { path: 'profile/:id/blogs/:id/posts', component: BlogHomePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    SettingsPageComponent,
    ProfilePageComponent,
    BlogPageComponent,
    BlogHomePageComponent,
    NavbarComponent,
    SocialSigninComponent,
    ProfileHeaderComponent,
    PostListComponent,
    PostCardComponent,
    BlogListComponent,
    BlogCardComponent,
    BlogHeaderComponent,
    AddAPostComponent,
    AddAPostIconComponent,
    AddABlogComponent,
    AddABlogIconComponent,
    BlogPostListComponent,
    BlogPostCardComponent,
    FeedPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    FileUploadModule,
    QuillModule,
  ],
  providers: [AuthService, RequireAuthService, PostService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
