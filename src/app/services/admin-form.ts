import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { Message } from '../components/models/Subscription.model';

@Injectable({
    providedIn: "root"
})
export class AdminFormService{
    
    constructor(private fb: FormBuilder){
    }

    createLoginForm(){
        return this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    createMessageForm(){
        return this.fb.group({
            message: ['', Validators.required]
        })
    }

    generateMessage(form: any): Message{
        let message = {
            message: form.message,
        }
        return message
    }
}