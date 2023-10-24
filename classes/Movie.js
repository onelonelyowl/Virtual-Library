const Media = require("./Media")
class Movie extends Media {
    constructor(title, genre, year, director, duration, rating){
        super(title, genre, year)
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static longestMovie(arr){
        arr.sort((a,b) => {return b.duration - a.duration}) // this probably won't work but something like this maybe
        return arr[0]
    }
    static calculateAverageRating(arr) {
        let ratings = []
        for(const x in arr){
            ratings.push(x.rating)
        }
        return (ratings.reduce((a, b) => a + b) / ratings.length)
    }
}

module.exports = Movie;