import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { admin } from 'src/app/components/models/admin.model';
import { AdminFormService } from 'src/app/services/admin-form';
import { ApiSubscriptionService } from 'src/app/services/api-subscription.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  formControls: { [key: string]: FormControl}

  messageForm: FormGroup
  messageFormControls: { [key: string]: FormControl}

  messageSubmitted
  loginSubmitted = false
  isAdmin = false
  wrongCrendentials = false
  constructor(private adminFormService: AdminFormService, private apiSubscriptionService: ApiSubscriptionService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.adminFormService.createLoginForm()
    this.formControls = this.form.controls as { [key: string]: FormControl}

    this.messageForm = this.adminFormService.createMessageForm()
    this.messageFormControls = this.messageForm.controls as { [key: string]: FormControl}
  }

  login(){
    this.loginSubmitted = true
    if(this.form.valid){
      if (this.form.get('username').value != admin.username || this.form.get('password').value != admin.password){
        this.wrongCrendentials = true
      }
      else{
        this.isAdmin = true
      }
    }
  }

  send(){
    console.log(this.form.value)
    this.messageSubmitted = true
    if(this.messageForm.valid){
      let message = this.adminFormService.generateMessage(this.messageForm.value)
      this.apiSubscriptionService.messageSubscribers(message).subscribe(() => {
        this.form.reset()
        this.router.navigate(['/postMessage'])
      })

    }
  }
}
