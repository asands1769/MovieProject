import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'app-movie-quiz',
  templateUrl: './movie-quiz.component.html',
  styleUrls: ['./movie-quiz.component.css']
})
export class MovieQuizComponent implements OnInit {

  movieSearchList2: Movies[];
  constructor() {
    this.movieSearchList2 = [];
   }
  
  ngOnInit(): void {
  }
  getTopRatedMovies(){


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '548b07248emsh548b3fae0f86878p1bfa94jsn06296714d333',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };
    
    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}
populateQuiz(){

}

}
