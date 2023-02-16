import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../Movies';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  @Input() movies: Movies[];
  movieSearchList: Movies[];
  constructor() {
    this.movieSearchList = [];
   }

  ngOnInit(): void {
  }
    searchMovies(searchValue){
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '548b07248emsh548b3fae0f86878p1bfa94jsn06296714d333',
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
          };
          let moviesUrl = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchValue}?exact=false&startYear=2000&endYear=2020`
          window.fetch(moviesUrl, options).then(function (response) {
            response.json().then(function (data){
                 let rawMovies = data.results
                 for(let i=0; i < rawMovies.length; i++){
                if(rawMovies[i].primaryImage == null){
                  let movies = new Movies(rawMovies[i].titleText.text, rawMovies[i].releaseYear.year, "Image not available")
                  this.movieSearchList.push(movies);
                }
                else{
                 let movies = new Movies(rawMovies[i].titleText.text, rawMovies[i].releaseYear.year, rawMovies[i].primaryImage.url);
                 this.movieSearchList.push(movies);
                }
                
               }
              console.log(this.movieSearchList);
            }.bind(this));
          }.bind(this));
    }
}
