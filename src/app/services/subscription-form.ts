import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriberInfo } from '../components/models/Subscription.model';

@Injectable({
    providedIn: "root"
})
export class SubscriptionFormService{

    constructor(private fb: FormBuilder){
    }

    createForm(){
        return this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            phoneNumber: ['', [Validators.required, Validators.pattern("^[1-9]{10}$")]]
        })
    }

    generateSubscriptionInfo(form: any): SubscriberInfo{
        let subscriber = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phoneNumber: form.phoneNumber
        }

        return subscriber
    }
}