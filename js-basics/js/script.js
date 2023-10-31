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


/* <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Kat pav
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul>
                        <li>Knygos info</li>
                    </ul>
                </div>
              </div>
 </div> */



Object.keys(books).forEach(bookCategory => {

        createNewAccordionItem(bookCategory);

  });



function createNewAccordionItem(item){

    let allBooksAccordion = document.getElementById('allBooksAccordion');

    // create all required elements here
    let newAccordionItem = document.createElement('div');


    // append items here
    let accordionDiv = allBooksAccordion.appendChild(newAccordionItem);

    // add classes or content here
    accordionDiv.classList.add("accordion-item");

}



})();