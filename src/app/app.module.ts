import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { QuestionComponent } from './views/question/question.component';
import { QuestionListComponent } from './views/question/question-list/question-list.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
