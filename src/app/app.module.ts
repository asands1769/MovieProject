import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExactTitleSearchComponent } from './exact-title-search/exact-title-search.component';
import { MovieQuizComponent } from './movie-quiz/movie-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    ExactTitleSearchComponent,
    MovieQuizComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
