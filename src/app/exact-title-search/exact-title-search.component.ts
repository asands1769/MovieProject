import { Component, Input, OnInit} from '@angular/core';
import { Movies } from '../movies';
@Component({
  selector: 'app-exact-title-search',
  templateUrl: './exact-title-search.component.html',
  styleUrls: ['./exact-title-search.component.css']
})
export class ExactTitleSearchComponent implements OnInit {
  movieSearchList1: Movies[];
  constructor() {
    this.movieSearchList1 = [];
   }
  
  ngOnInit(): void {
  }
  searchMoviesExact(searchValue){
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '548b07248emsh548b3fae0f86878p1bfa94jsn06296714d333',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      let moviesUrl = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchValue}?exact=true&startYear=2000&limit=1`
      window.fetch(moviesUrl, options).then(function (response) {
        response.json().then(function (data){
             let rawMovies = data.results
             for(let i=0; i < rawMovies.length; i++){
              if(rawMovies[i].primaryImage == null){
                let movies = new Movies(rawMovies[i].titleText.text, rawMovies[i].releaseYear.year, "Image not available")
                this.movieSearchList1.push(movies);
              }
              else{
               let movies = new Movies(rawMovies[i].titleText.text, rawMovies[i].releaseYear.year, rawMovies[i].primaryImage.url);
               this.movieSearchList1.push(movies);
              }
           }
           this.populateList();
          let button = document.getElementById("searchButton");
          button.style.visibility = 'hidden';
        }.bind(this));
      }.bind(this));
}

addImages(image){
  if(image != "Image not available"){
    let img = document.createElement("img")
    img.src = image;
    document.body.appendChild(img);
  }
  else{
    let noImg = document.createElement("div");
    noImg.innerHTML = 'No Image Available';
    document.body.appendChild(noImg);
  }
}
addMovieTitle(movieTitle){
    let title = document.createElement("div");
    title.innerHTML = "Title:" + movieTitle;
    document.body.appendChild(title);
}
addReleaseYear(releaseYear){
  let year = document.createElement("div");
  year.innerHTML = "Year:" + releaseYear;
  document.body.appendChild(year);
}
addLists(movie){
    this.addMovieTitle(movie.title);
    this.addReleaseYear(movie.releaseYear);
    this.addImages(movie.imageUrl);
    console.log(movie);
}
populateList(){
   let div = document.getElementById("lists");
   this.movieSearchList1.forEach(movie => 
    this.addLists(movie)) 
}

}
