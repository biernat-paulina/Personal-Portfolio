let portfolioInfo = [
    {
        title: 'Miami Headshots',
        category: 'Photography',
        image: 'https://thumb7.shutterstock.com/display_pic_with_logo/3414428/630961697/stock-photo-vertical-portrait-of-female-model-with-creative-art-beauty-makeup-beautiful-woman-face-with-soft-630961697.jpg'
    },
    {
        title: 'Le Peninsula',
        category: 'Hotel',
        image: 'https://thumb7.shutterstock.com/display_pic_with_logo/3414428/630961697/stock-photo-vertical-portrait-of-female-model-with-creative-art-beauty-makeup-beautiful-woman-face-with-soft-630961697.jpg'
    },
    {
        title: 'All Care Medical Sales',
        category: 'Medicine',
        image: 'https://thumb7.shutterstock.com/display_pic_with_logo/3414428/630961697/stock-photo-vertical-portrait-of-female-model-with-creative-art-beauty-makeup-beautiful-woman-face-with-soft-630961697.jpg'
    },
    {
        title: 'Body Code',
        category: 'Fitness',
        image: 'https://thumb7.shutterstock.com/display_pic_with_logo/3414428/630961697/stock-photo-vertical-portrait-of-female-model-with-creative-art-beauty-makeup-beautiful-woman-face-with-soft-630961697.jpg'
    },
    {
        title: 'Frako Concrete Industries',
        category: 'Construction',
        image: 'https://thumb7.shutterstock.com/display_pic_with_logo/3414428/630961697/stock-photo-vertical-portrait-of-female-model-with-creative-art-beauty-makeup-beautiful-woman-face-with-soft-630961697.jpg'
    },
    {
        title: 'Alimentando Cuerpos',
        category: 'Non-profit',
        image: 'https://thumb7.shutterstock.com/display_pic_with_logo/3414428/630961697/stock-photo-vertical-portrait-of-female-model-with-creative-art-beauty-makeup-beautiful-woman-face-with-soft-630961697.jpg'
    },
]

let portfolioSection = document.querySelector('.portfolio-header');

portfolioInfo.forEach((item)=>{
    console.log(item);
    portfolioSection.innerHTML += `<div class="col-md-4 col-sm-6">
                         <figure class="portfolio-item">
                              <img src="${item.image}" alt="">
                                <figcaption>
                                    <h4>${item.title}</h4>
                                    <p>${item.category}</p>
                                 </figcaption>
                        </figure>
                    </div>`;
});

let templateStr = `<div class="col-md-4 col-sm-6">
                         <figure class="portfolio-item">
                              <img src="https://thumb7.shutterstock.com/display_pic_with_logo/3414428/630961697/stock-photo-vertical-portrait-of-female-model-with-creative-art-beauty-makeup-beautiful-woman-face-with-soft-630961697.jpg" alt="">
                                <figcaption>
                                    <h4>Miami Headshot Photos</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                 </figcaption>
                        </figure>
                    </div>`;

const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", event => event.preventDefault());
}


