(function () {

let books = {
    grozine:
    [
        {
            isbn: 9786090157442,
            yearReleased: 2023,
            title: 'Kakė Makė ir koncerto diena',
            pageCount: 40
        },
        {
            isbn: 9786094842788,
            yearReleased: 2021,
            title: 'BALTARAGIO MALŪNAS',
            pageCount: 240
        },
        {
            isbn: 9789955388241,
            yearReleased: 2021,
            title: 'Ana Frank dienoraštis',
            pageCount: 344
        },
        {
            isbn: 9786094796500,
            yearReleased: 2021,
            title: 'Altorių šešėly',
            pageCount: 716
        },
        {
            isbn: 9786090157152,
            yearReleased: 2023,
            title: 'Stiklo sostas',
            pageCount: 512
        }
    ],
    moksline:[
        {
            isbn: 9786094940439,
            yearReleased: 2023,
            title: 'Penkios neįtikėtinos emocinio atsigavimo istorijos',
            pageCount: 40
        },
        {
            isbn: 9786094443176,
            yearReleased: 2022,
            title: 'ITIN JAUTRUS ASMUO: kaip gyvuoti, kai pasaulis tave stelbia',
            pageCount: 352
        },
        {
            isbn: 9786099566382,
            yearReleased: 2019,
            title: 'TIKROJI DAKTARŲ ISTORIJA',
            pageCount: 456
        },
        {
            isbn: 9786094380051,
            yearReleased: 2019,
            title: 'Geros nuotaikos vadovas',
            pageCount: 384
        },
        {
            isbn: 9786094797644,
            yearReleased: 2023,
            title: 'Draugai, meilė ir tas didelis baisus dalykas',
            pageCount: 300
        }
    ],
    sveikata: [
        {
            isbn: 9786090153451,
            yearReleased: 2022,
            title: 'Trauma nematoma epidemija: trauminės patirtys, kaip jas įveikti ir išgyti',
            pageCount: 240
        },
        {
            isbn: 9786098247862,
            yearReleased: 2023,
            title: 'Pavojingos gydytojų klaidos',
            pageCount: 256
        }
    ]
};



for(const bookCategory in books){
    createNewAccordionItem(bookCategory);
}


// define functions

function createNewAccordionItem(bookCategory){

    let allBooksAccordion = document.getElementById('allBooksAccordion');

    // create all required elements here
    let newAccordionItem = document.createElement('div');
    let newH2Item = document.createElement('h2');
    let newAccordionCollapseItem = document.createElement('div');
    let newButtonItem = document.createElement('button');
    let newAccordionBodyItem = document.createElement('div');

    // append items here
    let accordionDiv = allBooksAccordion.appendChild(newAccordionItem);
    let h2Item = accordionDiv.appendChild(newH2Item);
    let buttonItem = h2Item.appendChild(newButtonItem);
    let accordionCollapseItem = accordionDiv.appendChild(newAccordionCollapseItem);
    let accordionBodyItem = accordionCollapseItem.appendChild(newAccordionBodyItem);
    
    // add classes or content here
    accordionDiv.classList.add("accordion-item");
    h2Item.classList.add("accordion-header");
    buttonItem.classList.add("accordion-button","collapsed");
    setAttributes(buttonItem,
         {'type': 'button', 'data-bs-toggle': 'collapse', 'data-bs-target': '#collapse-'+bookCategory,
         'aria-expanded': 'false', 'aria-controls': 'collapseThree'}
     );
    buttonItem.textContent = 'Kategorija: ' + bookCategory + ' (Viso knygu: '+ books[bookCategory].length + ')';
    // <div id="collapseThree" class="accordion-collapse collapse">
    setAttributes(accordionCollapseItem, {'id': 'collapse-'+bookCategory}  );
    accordionCollapseItem.classList.add("accordion-collapse", "collapse");

    accordionBodyItem.classList.add("accordion-body");

    setAccordionBodyContent(accordionBodyItem, bookCategory);

}


function setAccordionBodyContent(element, booksKey){

    // create all required elements here
    let newUnorderedListItem = document.createElement('ul');
    let newListItem = document.createElement('li');
    let newLineItem = document.createElement('hr');

    books[booksKey].forEach((bookElement) =>  {

        for (const property in bookElement) {

            var unorderedListItem = newUnorderedListItem.appendChild(newListItem.cloneNode());
            
            let bookElementText = bookElement[property];

                switch (property) {
                    case 'isbn':
                        bookElementText = 'ISBN: ' + bookElementText;
                    break;
                    case 'yearReleased':
                        bookElementText = bookElementText == '2023' ? bookElementText + ' (Nauja knyga)' : bookElementText;
                    break;
                    case 'title':
                        bookElementText = 'Pavadinimas: ' + bookElementText;
                    break;
                    case 'pageCount':
                        bookElementText = 'Puslapiai: ' + bookElementText;
                    break;
                }
            
              unorderedListItem.textContent = bookElementText;

            }
        
            unorderedListItem.appendChild(newLineItem.cloneNode());
            
    });

    element.appendChild(newUnorderedListItem);

}



function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

// testinam

// todo list app
// inputas ivedimui darbo pavadinima
// mygtukas pridet
// ivestas darbas pridededamas i ul lista
// mygtukas pasalinti pasalinimas paskutinis

let todoList = document.querySelector('ul.todo-list');

document.querySelector('form.todo').addEventListener('submit', (e) => {
    e.preventDefault();

    let todoInput = document.querySelector('input[name="todo-value"]');
    
    let todoListItem = document.createElement('li');

    if(todoInput.value.length > 0){
        todoListItem.textContent = todoInput.value;
        todoList.appendChild(todoListItem);
        todoInput.value = '';
        todoInput.focus();
    }

});



document.querySelector('form.todo').addEventListener('reset', (e) => {
    e.preventDefault();

    if(todoList.lastChild !== null){
        todoList.lastChild.remove();
    }

});


})();