document.addEventListener('DOMContentLoaded', function() {
    // Sample JSON data (replace this with your actual data)
    var jsonData = [
      {
        title: 'Eiffel Tower Painting',
        imgSrc: 'assets/img/portfolio/portfolio-1.jpg',
        category: 'product',
        description: 'This art piece uses a meticulous blend of traditional techniques and contemporary creativity to craft this art piece. The result is a symphony of colors that effortlessly blend and flow, creating a harmonious visual melody that resonates with every observer',
      },
      // Add more items as needed
    ];

    var portfolioGrid = document.getElementById('portfolio');

    // Loop through the JSON data and create HTML elements
    jsonData.forEach(function(itemData) {
      var item = document.createElement('div');
      //item.className = 'col-lg-4 col-md-6 portfolio-item filter-' + itemData.category.toLowerCase();
      item.className = 'col-lg-4 col-md-6 portfolio-item ' + itemData.category.toLowerCase();

      var portfolioWrap = document.createElement('div');
      portfolioWrap.className = 'portfolio-wrap';

      var img = document.createElement('img');
      img.src = itemData.imgSrc;
      img.className = 'img-fluid';
      img.alt = '';

      var portfolioInfo = document.createElement('div');
      portfolioInfo.className = 'portfolio-info';
      
      var h4 = document.createElement('h4');
      h4.textContent = itemData.title;

      var p = document.createElement('p');
      p.textContent = itemData.category;

      var portfolioLinks = document.createElement('div');
      portfolioLinks.className = 'portfolio-links';
      
      var a1 = document.createElement('a');
      a1.href = itemData.imgSrc;
      a1.setAttribute('data-gallery', 'portfolioGallery');
      a1.className = 'portfolio-lightbox';
      a1.title = itemData.title;
      var i1 = document.createElement('i');
      i1.className = 'bx bx-plus';
      a1.appendChild(i1);

      var a2 = document.createElement('a');
      a2.href = './portfolio-details.html';
      a2.className = 'portfolio-details-lightbox';
      a2.setAttribute('data-glightbox', 'type: external');
      a2.title = 'Portfolio Details';
      var i2 = document.createElement('i');
      i2.className = 'bx bx-link';
      a2.appendChild(i2);

      // Append elements
      portfolioLinks.appendChild(a1);
      portfolioLinks.appendChild(a2);
      portfolioInfo.appendChild(h4);
      portfolioInfo.appendChild(p);
      portfolioInfo.appendChild(portfolioLinks);
      portfolioWrap.appendChild(img);
      portfolioWrap.appendChild(portfolioInfo);
      item.appendChild(portfolioWrap);
      // debugger;
      portfolioGrid.appendChild(item);
    });

    // Initialize GLightbox after dynamically generating portfolio items
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });

    const portfolioDetailsLightbox = GLightbox({
        selector: '.portfolio-details-lightbox',
        width: '90%',
        height: '90vh'
    });
});
