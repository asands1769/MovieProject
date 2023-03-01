import { Component, OnInit } from '@angular/core';
import { QuizMovies } from '../QuizMovies';
@Component({
  selector: 'app-movie-quiz',
  templateUrl: './movie-quiz.component.html',
  styleUrls: ['./movie-quiz.component.css']
})
export class MovieQuizComponent implements OnInit {
  questionNumber: number;
  quizScore: number;
  movieQuestions: QuizMovies[];
  movieQuizList: QuizMovies[];
  movieQuizListOriginal: QuizMovies[];
  randomSelector: number;
  optionsSelected: number;
  testFinished: boolean;

  constructor() {
    this.movieQuizListOriginal = [];
    this.movieQuizList = [];
    this.movieQuestions = [];
    this.questionNumber = 0;
    this.testFinished = false;
    this.quizScore = 0;
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
    let moviesUrl = 'https://imdb-top-100-movies.p.rapidapi.com/'
    window.fetch(moviesUrl, options).then(function (response) {
      response.json().then(function (data){
          console.log(data);
           let rawMovies = data;
           for(let i=0; i < rawMovies.length; i++){
             let movies = new QuizMovies(rawMovies[i].title, rawMovies[i].description, rawMovies[i].director);
             this.movieQuizList.push(movies);
         }
         this.movieQuizListOriginal = this.movieQuizList;
         console.log(this.movieQuizList)
         console.log(this.movieQuizListOriginal)
         this.getQuizQuestions();
      }.bind(this));
    }.bind(this));
}
getQuizQuestions(){  
    if(this.movieQuestions.length == 0){
    for(let i=0; i < 10; i++){
      let randomNumber = Math.floor(Math.random()*90);
      this.movieQuestions.push(this.movieQuizList[randomNumber]);
      this.movieQuizList.splice(randomNumber, 1);
    }
    console.log(this.movieQuizList);
    console.log(this.movieQuestions);
    }
    this.populateQuizQuestions();
}

populateQuizQuestions(){
  document.getElementById("startButton").style.visibility = "hidden";
  document.getElementById("buttons").style.visibility = "visible";
  let answer0 = document.getElementById("answer0");
  let answer1 = document.getElementById("answer1");
  let answer2 = document.getElementById("answer2");
  let answer3 = document.getElementById("answer3");
  let question = document.getElementById("Question");
  answer0.style.width = "800px";
  answer1.style.width = "800px";
  answer2.style.width = "800px";
  answer3.style.width = "800px";
  this.randomSelector = Math.floor(Math.random()*4)
  question.innerHTML = "Which of the following movies match this description: \n" + this.movieQuestions[this.questionNumber].description;
  answer0.innerHTML = this.movieQuizList[Math.floor(Math.random()*80)].title;
  answer1.innerHTML = this.movieQuizList[Math.floor(Math.random()*80)].title;
  answer2.innerHTML = this.movieQuizList[Math.floor(Math.random()*80)].title;
  answer3.innerHTML = this.movieQuizList[Math.floor(Math.random()*80)].title;
  document.getElementById("answer" + this.randomSelector).innerHTML = this.movieQuestions[this.questionNumber].title;
  this.questionNumber++;
}
gradeQuizQuestions(){
  if(this.randomSelector == this.optionsSelected){
         this.quizScore++;
     }
  if(this.questionNumber >= 10){
        this.testFinished = true;
     }
     else{
      this.populateQuizQuestions();
     }
    
}

clicked1(){
  this.optionsSelected = 0;
  this.gradeQuizQuestions();
}
clicked2(){
  this.optionsSelected = 1;
  this.gradeQuizQuestions();
}
clicked3(){
  this.optionsSelected = 2;
  this.gradeQuizQuestions();
}
clicked4(){
  this.optionsSelected = 3;
  this.gradeQuizQuestions();
}
tryAgain(){
  this.movieQuestions.length = 0;
  this.questionNumber = 0;
  this.quizScore = 0;
  this.testFinished = false;
  this.movieQuizList.length = 0;
  this.movieQuizListOriginal.length = 0;
  this.getTopRatedMovies();
}
}
