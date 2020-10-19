import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiSubscriptionService } from 'src/app/services/api-subscription.service';
import { SubscriptionFormService } from 'src/app/services/subscription-form';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.sass']
})
export class SubscriptionFormComponent implements OnInit {

  form: FormGroup
  formControls: { [key: string]: FormControl}
  submitted = false
  constructor(private subsscriptionFormService: SubscriptionFormService, private apiSubscriptionService: ApiSubscriptionService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.subsscriptionFormService.createForm()
    this.formControls = this.form.controls as { [key: string]: FormControl}
  }

  subscribe(){
    this.submitted = true
    if(this.form.valid){
      let subscriber = this.subsscriptionFormService.generateSubscriptionInfo(this.form.value)
      this.apiSubscriptionService.addSubscriber(subscriber).subscribe(() => {
        this.form.reset()
        this.router.navigate(['/postSubscribe'])
      })
    }
  }


}
