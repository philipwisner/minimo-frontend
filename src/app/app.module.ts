import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// SERVICES
import { AuthService } from './services/auth.service';
import { RequireAuthService } from './guards/require-auth.service';

// PAGES
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

// COMPONENTS
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
import { PlaygroundComponent } from './components/playground/playground.component';

// ROUTES
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomePageComponent },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
  { path: 'profile/settings', component: SettingsPageComponent },
  { path: 'user/:id', component:  ProfilePageComponent},
  { path: 'user/:id/blogs', component:  ProfilePageComponent},
  { path: 'user/:id/blogs/:id', component:  BlogPageComponent},
  { path: 'profile/:id', component: ProfilePageComponent },
  { path: 'profile/:id/blogs', component: ProfilePageComponent },
  { path: 'profile/:id/blogs/:id', component: BlogPageComponent },
  { path: 'playground', component: PlaygroundComponent },
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
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, RequireAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
