import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload.js';

const URL = environment.apiUrl + '/auth/upload';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  @Input() userId;
  apiUrl = environment.apiUrl;
  userData: Object;
  user: User;
  editUser: User;

  saving: boolean;
  subscriptions = [];


  public uploader: FileUploader = new FileUploader({url: URL})
    feedback: string;

  constructor(private auth: AuthService, private router: Router) { }

  setUser(user) {
    this.user = this.auth.getUser();
    if (this.user) {
      this.editUser = new User(this.user);
    }
  }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

   this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

    this.setUser(this.auth.getUser());
    this.editUser = new User(this.user);
    let subscription = this.auth.userChange$.subscribe((user) => this.setUser(user))
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private submit() {
      this.saving = true;
      this.auth.updateUser(this.editUser).subscribe(() => {
        this.saving = false;
        this.router.navigate(['/profile']);
      });
    }

    handleUpdateUserForm(myForm) {
      const files = this.uploader.getNotUploadedItems();
      if (files.length) {
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = (item, response) => {
          let data = JSON.parse(response);
          this.editUser.profilePhoto = data.userFileName;
          this.submit();
        };
      }
      else {
        this.submit();
      }
    }

}
