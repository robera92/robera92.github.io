(function () {
    

    createRows(10,10);

    function createRows(rows = 4, cols = 4){

        var bodyElement = document.querySelector('body');
    
        for (let i = 1; i < rows+1; i++) {
            let newDiv = document.createElement('div');
            let row = bodyElement.appendChild(newDiv);
            row.classList.add('row','row-'+i);
            createColumns(row, cols);
          }
    }

    function createColumns(element, count = 4){
        for (let i = 1; i < count+1; i++) {
            let newDiv = document.createElement('div');
            newDiv.style.backgroundColor = '#'+ randomColor();
            element.appendChild(newDiv).classList.add('col','col-'+i);
        }
    }

    
    for(const element of document.querySelectorAll('.col')){
        element.addEventListener('click', ()=> {
            element.style.backgroundColor = '#'+ randomColor();
        });
    }

    function randomColor(){
        return Math.floor(Math.random()*16777215).toString(16)
    }


  })();