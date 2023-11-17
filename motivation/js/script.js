(function () {

    window.addEventListener("load", (e) => {

        let innerCarousel = document.querySelector('.carousel-inner');
        let carouselIndicators = document.querySelector('.carousel-indicators');
        let isFirstSlide = null;
        let slideCounter = 0;

        fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
        .then(response => data=response.json())
        .then( (data) => {
            for(const quote of data){

                // create div for quote
                let newDiv = document.createElement("div");
                let createdDiv = innerCarousel.appendChild(newDiv);
                createdDiv.classList.add('carousel-item');
                if(isFirstSlide === null){
                    createdDiv.classList.add('active');// add active class for first slide
                }

                // blockquote
                let quoteParagraph = createdDiv.appendChild(document.createElement('blockquote'));
                quoteParagraph.appendChild(document.createElement('p')).textContent = quote.quote;
                quoteParagraph.appendChild(document.createElement('p')).textContent = quote.author;

                // create button for indicators
                let newBtn = document.createElement("button");
                let createdBtn = carouselIndicators.appendChild(newBtn);
                setAttributes(createdBtn, {'type': 'button', 'data-bs-target': '#carousel', 'data-bs-slide-to': slideCounter } );
                if(isFirstSlide === null){
                    createdBtn.classList.add('active'); // add active class for first slide
                }

                isFirstSlide = true;
                slideCounter++;
                
            }
        })
        
    });


    function setAttributes(element, attributes) {
        Object.keys(attributes).forEach(attr => {
          element.setAttribute(attr, attributes[attr]);
        });
      }

  })();