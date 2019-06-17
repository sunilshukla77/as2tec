import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrainingComponent } from './training/training.component';
import { CourseComponent } from './training/course/course.component';
import { LoginComponent } from './home/login/login.component';
import { As2tecComponent } from './as2tec.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrainingComponent,
    CourseComponent,
    LoginComponent,
    As2tecComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FormsModule],
  bootstrap: [As2tecComponent]
})
export class AppModule { }
