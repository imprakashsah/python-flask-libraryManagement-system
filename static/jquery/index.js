console.log("this is index.js");

// constructor
function Book(name, author, isbn, type) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.type = type;
}

//display contructor
function Display() {

}

// Add method to display prototype
Display.prototype.add = function(book){
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiSrting = `<tr> 
                        <td>${book.name}</td>   
                        <td>${book.author}</td>  
                        <td>${book.isbn}</td>  
                        <td>${book.type}</td>  
                    </tr>`;
    tableBody.innerHTML +=   uiSrting;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//implement the validate function
Display.prototype.validate = function(book){
   if (book.name.length<2 || book.name.author<2 || book.name.isbn<10)
   {
      return false
   } 
   else{
        return true;
   }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>MESSAGE !</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                          </div>`;
                          setTimeout(function(){
                            message.innerHTML = ''
                          }, 2000 );
                        



    }


// Add submit event listner to AddBook
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted library Form');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('bookauthor').value;
    let isbn = document.getElementById('bookisbn').value;
    let type;

    let mca = document.getElementById('mca');
    let bca = document.getElementById('bca');
    if (mca.checked) {
        type= mca.value;
    }
    else if (bca.checked) {
        type= bca.value;
    }
    let book = new Book(name, author, isbn, type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){

        display.add(book);
        display.clear(book);
        display.show('success', 'Your Book is add successfully');
    }
    else{
        display.show('danger', 'Sorry you cannot add this book. ');
    }
    
    e.preventDefault();
}

