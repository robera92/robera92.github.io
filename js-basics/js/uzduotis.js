(function () {

    const all_images = [
        'image-1.jpg', 
        'image-2.jpg', 
        'image-3.jpg', 
        'image-4.jpg', 
        'image-5.jpg', 
        'image-6.jpg', 
        'image-7.jpg', 
        'image-8.jpg', 
        'image-9.jpg', 
        'image-10.jpg', 
        'image-11.jpg', 
        'image-12.jpg', 
        'image-13.jpg', 
        'image-14.jpg', 
        'image-15.jpg', 
        'image-16.jpg', 
        'image-17.jpg', 
        'image-18.jpg'
    ];

    
    document.querySelector('.display-btn').addEventListener('click', (e) =>{
        display_items();
    });

    document.querySelector('.mix-btn').addEventListener('click', (e) =>{
        mix_items();
    });



    document.querySelector('body').addEventListener('click', (e) =>{
        let default_image = 'images/image-default.jpg';

        for(let img of document.querySelectorAll('section img')){
            img.addEventListener('dblclick', (e) =>{
                e.target.src = default_image;
            });
        }
    });

 


    // fucntions

    function display_items(){
        for(const image of all_images){
            create_img(image);
        }
    }

    function mix_items(){

        let get_all_images = document.querySelectorAll('section img');

        for(const image of get_all_images){
            image.src = 'images/'+all_images[Math.floor(Math.random()*all_images.length)];
        }

    }

    function create_img(image, images_section = 'section'){

        let get_images_section = document.querySelector(images_section);
        let new_image = document.createElement('img');

        new_image.src = 'images/' + image;
        new_image.classList.add('img-fluid');
        get_images_section.appendChild(new_image);

    }

  })();