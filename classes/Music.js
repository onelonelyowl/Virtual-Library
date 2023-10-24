const Media = require("./Media")

class Music extends Media {
    constructor(title, year, genre, artist, length){
        super(title, year, genre)
        this.artist = artist;
        this.length = length;
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }
    static shortestAlbum(arr){
        arr.sort((a,b) => {return a.length - b.length}) // this probably won't work but something like this maybe
        return arr[0]
    }
}
// don't change below
module.exports = Music;
