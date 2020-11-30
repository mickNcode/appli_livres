export class Book {
  constructor (title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
     this.pages = pages;
    this.currentPage = 1;
    this.read = false;
  }
  readBook (page) {
    if  ( (page < 1) || (page > this.pages)) {
      return 0;
    }
    else if ( (page >= 1) && ( page < this.pages )) {
      this.currentPage = page;
      return 1;
    }
    else if ( page === this.pages) {
      this.currentPage = page;
      this.read = true;
      return 1;    
    }
  }
};
const livre1 = new Book ( "Premier livre",
                        "micka",
                        "C'est le premier livre ",
                        325, 0, false);
const livre2 = new Book ( "Deuxième livre",
                            "micka",
                            "C'est le deuxième livre",
                            186, 0, false);
const livre3 = new Book ( "Troisième livre",
                            "micka",
                            "C'est le dernier livre",
                            188, 0, false);
 
 
export const books = [livre1, livre2, livre3];
