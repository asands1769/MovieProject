import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ExactTitleSearchComponent } from './exact-title-search/exact-title-search.component';
import { MovieQuizComponent } from './movie-quiz/movie-quiz.component';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ExactTitleSearchComponent,
    MovieQuizComponent,
    KeywordSearchComponent
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
