import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { QuestionComponent } from './views/question/question.component';
import { QuestionListComponent } from './views/question/question-list/question-list.component';
import { DataService } from './services/data.service';
import { AddQuestionComponent } from './views/question/add-question/add-question.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionComponent,
    QuestionListComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
