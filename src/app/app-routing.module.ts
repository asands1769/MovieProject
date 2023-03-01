import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExactTitleSearchComponent } from "./exact-title-search/exact-title-search.component";
import { MovieQuizComponent } from "./movie-quiz/movie-quiz.component";

const routes: Routes = [
    {path: 'TitleSearch', component: ExactTitleSearchComponent},
    {path: 'Quiz', component: MovieQuizComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }