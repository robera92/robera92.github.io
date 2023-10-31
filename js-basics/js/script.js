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


{/* <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Kat pav
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <ul>
                        <li>Knygos info</li>
                    </ul>
                </div>
             </div>
 </div> */}



for(const bookCategory in books){
    createNewAccordionItem(bookCategory);
}



function createNewAccordionItem(bookCategory){

    let allBooksAccordion = document.getElementById('allBooksAccordion');

    // create all required elements here
    let newAccordionItem = document.createElement('div');
    let newH2Item = document.createElement('h2');
    let newAccordionCollapseItem = document.createElement('div');
    let newButtonItem = document.createElement('button');

    // append items here
    let accordionDiv = allBooksAccordion.appendChild(newAccordionItem);
    let h2Item = accordionDiv.appendChild(newH2Item);
    let buttonItem = h2Item.appendChild(newButtonItem);
    let accordionCollapseItem = accordionDiv.appendChild(newAccordionCollapseItem);
    
    
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
    setAttributes(accordionCollapseItem, {'id': '#collapse-'+bookCategory}  );
    accordionCollapseItem.classList.add("accordion-collapse", "collapse");
}


function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }



})();