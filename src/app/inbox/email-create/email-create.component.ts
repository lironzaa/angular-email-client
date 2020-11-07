import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text: '',
    from: `${this.authService.username}@angular-email.com`,
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(email: Email): void {

  }
}
