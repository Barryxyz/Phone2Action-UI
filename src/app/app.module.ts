import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './containers/header/header.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { PostSubscribedPageComponent } from './containers/post-subscribed-page/post-subscribed-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PostMessagePageComponent } from './containers/post-message-page/post-message-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionFormComponent,
    HomePageComponent,
    HeaderComponent,
    LoginPageComponent,
    PostSubscribedPageComponent,
    PostMessagePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }