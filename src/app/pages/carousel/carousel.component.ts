import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  products: Product[];

  responsiveOptions;

  constructor(private productService: ProductService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
  }

  ngAfterViewInit(): void {
    const buttonNext = document.getElementsByClassName('p-carousel-next');
    const buttonPrev = document.getElementsByClassName('p-carousel-prev');
    const listaIndicators = document.getElementsByClassName(
      'p-carousel-indicators'
    );
    buttonPrev[0].innerHTML = 'anterior';
    buttonNext[0].innerHTML = 'próximo';

    listaIndicators[0].appendChild(buttonNext[0]);
    listaIndicators[0].insertBefore(
      buttonPrev[0],
      listaIndicators[0].firstChild
    );
  }
}
