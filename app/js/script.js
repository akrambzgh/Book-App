let addButton = document.querySelector(".add");
let booksList = document.querySelector(".books-list");

// All Inputs
let nameInput = document.querySelector("#name-input");
let priceInput = document.querySelector("#price-input");
let autherInput = document.querySelector(".auther");
let catigoryInput = document.querySelector(".catigory");

addButton.addEventListener("click", addBook);

function addBook() {
    // Create Elements
    let { item1, item2, item3, item4, mainDiv } = createElements();
    function createElements() {
        let item1 = document.createElement("li");
        let item2 = document.createElement("li");
        let item3 = document.createElement("li");
        let item4 = document.createElement("li");
        
        // Main Div
        let mainDiv = document.createElement("div");
        
        // Class
        // Main Div
        mainDiv.classList.add("book");
        // Items
        item1.classList.add("item");
        item2.classList.add("item");
        item3.classList.add("item");
        item4.classList.add("item");
        return { item1, item2, item3, item4, mainDiv };
    }

    // Values
    item1.textContent = `The Name Is : ${nameInput.value}`;
    item2.textContent = `The Price Is : ${priceInput.value}`;
    item3.textContent = `The Auther Is : ${autherInput.value}`;
    item4.textContent = `The Catigory Is : ${catigoryInput.value}`;

    // Append Childs
    function appendElements() {
        mainDiv.appendChild(item1);
        mainDiv.appendChild(item2);
        mainDiv.appendChild(item3);
        mainDiv.appendChild(item4);
        
        // To The Main List
        booksList.appendChild(mainDiv);
    }
    appendElements();

    // Empty Inputs
    function emptyInputs() {
        nameInput.value = "";
        priceInput.value = "";
        autherInput.value = "";
        catigoryInput.value = "";
    }
    emptyInputs();
}
