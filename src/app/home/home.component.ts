import { Component } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngAfterViewInit() {
    (function ($) {
      $(document).ready(function () {
        $('.top-nav-carousel').owlCarousel({
          loop:false,
          margin:0,
          nav:false,
          dots: false,
          responsive:{
              0:{
                  items:4
              },
              600:{
                  items:3
              },
              1024:{
                  items: 4
              },
              1200:{
                  items:5
              },
              1300:{
                  items:6
              },
              1400:{
                  items:8
              }
          }
      })
      
      $('.sports-carousel').owlCarousel({
          loop:false,
          margin:0,
          nav:false,
          dots: false,
          responsive:{
              0:{
                  items:3
              },
              500:{
                  items:4
              },
              1024:{
                  items: 6
              },
              1200:{
                  items:6
              },
              1300:{
                  items:6
              },
              1400:{
                  items:6
              }
          }
      })
      
      $('.premium-carousel').owlCarousel({
          loop:false,
          margin:10,
          nav:false,
          dots: false,
          responsive:{
              0:{
                  items:3
              },
              600:{
                  items:3
              },
              1024:{
                  items: 3
              },
              1200:{
                  items:3
              },
              1300:{
                  items:3
              },
              1400:{
                  items:3
              }
          }
      })
      
      $('.inplay-carousel-mobile').owlCarousel({
          loop:false,
          margin:20,
          nav:false,
          dots: false,
          responsive:{
              0:{
                  items:5
              },
              500:{
                  items:6
              },
              1024:{
                  items: 3
              },
              1200:{
                  items:3
              },
              1300:{
                  items:3
              },
              1400:{
                  items:3
              }
          }
      })
      
      $('.popular-carousel-mobile').owlCarousel({
          loop:false,
          margin:10,
          nav:false,
          dots: false,
          responsive:{
              0:{
                  items:4
              },
              500:{
                  items:5
              }
          }
      })
      }); //end document ready
    })(jQuery);
  }
}
