class Media {
    static ALL_MEDIA = [];
    static totalMediaCount = 0;
    constructor(title, year, genre){
        this.title = title;
        this.genre = genre;
        this.year = year;
        Media.totalMediaCount++
        Media.ALL_MEDIA.push(Media)
    }
    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
}
module.exports = Media;
