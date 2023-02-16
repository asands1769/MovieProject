import { Movies } from "./movies";


export class DataStorage {

    searchMovies(searchValue){
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '548b07248emsh548b3fae0f86878p1bfa94jsn06296714d333',
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
          };
          let moviesUrl = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${searchValue}`
          window.fetch(moviesUrl, options).then(function (response) {
            response.json().then(function (data){
              console.log(data)
                 let rawMovies = data.results
                 for(let i=0; i < rawMovies.length; i++){
                 let movies = new Movies(rawMovies[i].titleText.text, rawMovies[i].releaseYear.year, rawMovies[i].primaryImage.url);
                 this.sourceList.push(movies);
                
               }
              this.displayList = this.sourceList.slice(0);
              console.log(this.sourceList);
            }.bind(this));
          }.bind(this));
    }

}