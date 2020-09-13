import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { Product } from './product';

describe('DataService Tests', () => {

  let productService: ProductService;
  let httpTestingController: HttpTestingController;

  let testProducts: Product[] =[
    {
      id: 1,
      productName: 'Platinum Card',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2020',
      description: 'Maximum Rewards',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
      tags: ['rake', 'leaf', 'yard', 'home']
    },
    {
      id: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2020',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png'
    },
    {
      id: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2020',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
      tags: ['tools', 'hammer', 'construction']
    },
    {
      id: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2020',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: 'assets/images/saw.png'
    },
    {
      id: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2018',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: 'assets/images/xbox-controller.png'
    }
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductService ]
    });

    productService = TestBed.get(ProductService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should GET all products', () => {
    productService.getProducts()
      .subscribe((data: Product[]) => {
        expect(data.length).toBe(3);
      });

    let booksRequest: TestRequest = httpTestingController.expectOne('/api/products');
    expect(booksRequest.request.method).toEqual('GET');

    booksRequest.flush(testProducts);
  });

  it('should return a Error', () => {

    productService.getProducts()
      .subscribe(
        (data: Product[]) => fail('this should have been an error')

      );

    let booksRequest: TestRequest = httpTestingController.expectOne('/api/products');

    booksRequest.flush('error', {
      status: 500,
      statusText: 'Server Error'
    });

  });

});
