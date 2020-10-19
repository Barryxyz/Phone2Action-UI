import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Message, SubscriberInfo } from '../components/models/Subscription.model';

@Injectable({
    providedIn: "root"
})
export class ApiSubscriptionService{
    baseUrl = "http://localhost:8080/subscribers"
    messageUrl = "http://localhost:8080/subscribers/message"

    constructor(private http: HttpClient){
    }

    addSubscriber(subscriber: SubscriberInfo){
        return this.http.post(this.baseUrl, subscriber)
    }

    messageSubscribers(message: Message){
        return this.http.post(this.messageUrl, message)
    }
 
}