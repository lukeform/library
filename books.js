
const myLibrary = [];
let userBook;
let bookInfo;

// this is the book constuctor
function Book (title, author, pages, haveRead){

    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.haveRead = haveRead;

    bookInfo = title+author+pages+haveRead;
    console.log(bookInfo);
    return bookInfo;
    


}

// this code takes the user prompt for the book they read and stores it in the library array
const bookButton = document.getElementById("addBook");
bookButton.addEventListener("click", ()=>{

    let userBook = new Book(
        prompt("Title of Book"), 
        prompt("Author"), 
        prompt ("Pages"), 
        prompt("Have you read it?"));

        

    createBookCard();
    // updateLibrary();

    myLibrary.push(userBook);
    //console.log(myLibrary);
    console.log(bookInfo);
    return bookInfo;
    
});

//this code updates the dom with the information from the array. One item = one book card
const createBookCard = (Book) =>{

  const bookDisplay = document.getElementById("main");

    
        const bookCard = document.createElement("div");
        const domTitle = document.createElement("p");
        const domAuthor = document.createElement("p");
        const domPages = document.createElement("p");
        const domHaveRead = document.createElement("p");

        bookCard.classList.add("bookCard");
        domTitle.classList.add("title");
        domAuthor.classList.add("author");
        domPages.classList.add("pages");
        domHaveRead.classList.add("haveRead");

        domTitle.textContent = Book.title;

    



        bookCard.style.backgroundColor = "white";
        bookDisplay.appendChild(bookCard);
        bookCard.appendChild(domTitle);



}






