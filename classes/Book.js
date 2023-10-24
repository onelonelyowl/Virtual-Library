const Media = require('./Media')
class Book extends Media {
    constructor(title, genre, year, author, numPages, rating){
        super(title, genre, year)
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(arr){
        arr.sort((a,b) => {return b.rating - a.rating}) // this probably won't work but something like this maybe
        return arr[0]
    }
    static calculateAverageRating(arr) {
        let ratings = []
        for(const x of arr){
            ratings.push(x.rating)
        }
        return (ratings.reduce((a, b) => a + b) / ratings.length)
    }
}

module.exports = Book;
