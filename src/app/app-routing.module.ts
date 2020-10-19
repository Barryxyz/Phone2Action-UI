import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { PostMessagePageComponent } from './containers/post-message-page/post-message-page.component';
import { PostSubscribedPageComponent } from './containers/post-subscribed-page/post-subscribed-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'postSubscribe', component: PostSubscribedPageComponent},
  {path: 'postMessage', component: PostMessagePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
