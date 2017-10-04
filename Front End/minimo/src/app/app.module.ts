import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SocialSigninComponent } from './components/social-signin/social-signin.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { AddAPostComponent } from './components/add-a-post/add-a-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
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
    NavbarComponent,
    LoginFormComponent,
    SignupFormComponent,
    SocialSigninComponent,
    ProfileSettingsComponent,
    ProfileHeaderComponent,
    PostListComponent,
    PostCardComponent,
    BlogListComponent,
    BlogCardComponent,
    BlogHeaderComponent,
    AddAPostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
