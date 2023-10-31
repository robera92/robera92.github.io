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
}


Object.keys(books).forEach(bookCategory => {
    console.log(`Kategorija: ${bookCategory} (${books[bookCategory].length} knygu)`);

    books[bookCategory].forEach(book => {
        console.log('ISBN: ' + book.isbn);
        let yearReleasedPrint = book.yearReleased == 2023 ? book.yearReleased + ' (Nauja knyga)' : book.yearReleased;
        console.log('Leidimas: ' + yearReleasedPrint);
        console.log('Pavadinimas: ' + book.title);
        console.log('Puslapių skaičius: ' + book.pageCount);
        console.log('----------------------------------');
      });

      console.log('///////// Kategorijos pabaiga ///////////');
        
  });