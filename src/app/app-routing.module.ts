import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { TrainingComponent } from './training/training.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: 'Home',
      description: 'Description Meta Tag Content',
      keywords: 'Website development, Digital Marketing, Web Hosting'
    }
  },
  {
    path: 'home', component: HomeComponent,
    data: {
      title: 'Home',
      description: 'Description Meta Tag Content',
      keywords: 'Website development, Digital Marketing, Web Hosting and Solution to your online Business'
    }
  },
  {
    path: 'training', component: TrainingComponent,
    data: {
      title: 'Training',
      description: 'Providing online Training of Java, Spring and Restful ful, AWS and UI Angular ',
      keywords: 'Java, Spring, Web security, Restful API, AWS and Angular Online Training'
    }
  },
  {
    path: 'contactus', component: ContactusComponent,
    data: {
      title: 'Contact Us',
      description: 'Contact Us, Send Email, Call on mobile and Visit in Training Center',
      keywords: 'Contact Us, Send Email, Call on mobile and Visit in Training Center'
    }
  },
  {
    path: 'home/login', component: LoginComponent,
    data: {
      title: 'Sign in',
      description: 'Sign in page',
      keywords: 'Sign in page'
    }
  },
  {
    path: 'home/register', component: RegisterComponent,
    data: {
      title: 'Sign up',
      description: 'Sign up page',
      keywords: 'Sign up page'
    }
  },
  {
    path: 'aboutus', component: AboutusComponent,
    data: {
      title: 'About Us',
      description: 'About Us page',
      keywords: 'Provide Solution to your online Business, Web development, Digital Marketing, Web Hosting'
    }
  }

  // , {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
