$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows :false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $(document).ready(function(){
    $("#btn-scroll").click(function(){
      window.scrollTo(0,0);
    });
  });
 

  const navLinks = document.querySelectorAll('.nav-link');

  // Add an event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove the background color and border radius from all links
      navLinks.forEach(otherLink => {
        otherLink.style.backgroundColor = '';
        otherLink.style.borderRadius = '';
      });
  
      // Change the background color to red and add border radius to the clicked link
      link.style.backgroundColor = 'orangered';
      link.style.borderRadius = '5px';
    });
  });


