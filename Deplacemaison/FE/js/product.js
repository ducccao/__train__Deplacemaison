const products = [
  {
    id: 1,
    name: "Carnera",
    sex: "wmns",
    price: 1000,
    src: "./images/5d1c6f8d4cf9cb5e855aa1aa_carnera__wmns-black-p-1080.jpeg"
  },
  {
    id: 2,
    name: "Duran",
    sex: "man",
    price: 1000,
    src: "./images/5d1c6d608da84253fa95bd18_carnera__man-black-p-500.jpeg"
  },
  {
    id: 3,
    name: "Rivolta",
    sex: "",
    price: 1000,
    src: "./images/5d1c71fe2b2ad2131b466c86_rivolta-black.jpg"
  },
  {
    id: 4,
    name: "Garcia",
    sex: "wmns",
    price: 1000,
    src: "./images/5d1c718d8da84280f895e643_garcia__wmns-white-p-800.jpeg"
  },
  {
    id: 3,
    name: "Rivolta",
    sex: "",
    price: 1000,
    src: "./images/5d1c71fe2b2ad2131b466c86_rivolta-black.jpg"
  },
  {
    id: 4,
    name: "Garcia",
    sex: "wmns",
    price: 1000,
    src: "./images/5d1c718d8da84280f895e643_garcia__wmns-white-p-800.jpeg"
  }
];

/* <img
src="./images/5d1c6f8d4cf9cb5e855aa1aa_carnera__wmns-black-p-1080.jpeg"
alt=""
/> */
//log(products);

const productElements = products.map(product => {
  return `
    <div class="product">
      <div class="product-img">
        <img src=${product.src} />
      </div>
      <div class="product-infor" >
        <div class="product-sex"> 
        <div class="sex-content">
        ${product.sex}
        </div>
        <div class="sex-decoration">
        <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 500 218" style="enable-background:new 0 0 500 218;" xml:space="preserve">
        <g>
          <g>
            <path style="fill:#141414;" d="M28.6,154.3l-1,1.8c-1.3-6.5-2.9-12.8-4.6-18.7c1.7-6,3.3-11.1,4.8-15.2c1.4,3.6,2.4,0.9,3.3-8
              c0.3-0.6,0.7-1.7,1.1-3.1c0.6-2.1,1.4-4.2,2.2-6.1c0.4,0.2,0.9,0.7,1.3,0.7c0.5,0,1-0.4,1.4-0.7c1.3-1,2.7-2.5,4.1-3.2
              c2.2-1.1-13-8.8-17.1-13.5c0.2-1.8,0.4-4,0.6-6.7c0.3-2.7,0.6-5.1,0.9-7.2c0.3-2,0.6-4.4,0.9-7.1c0.3-2.7,0.5-5.4,0.8-8
              c0.3-2.7,0.6-5.2,1.1-7.6c0,0,2.4-13,2.4-13c0.3-1.7,8.5-5.1,9.9-5.9c2.5-1.5,5-3,7.6-4.1c9.8-4.2,19.7-5.6,29.7-6.6
              c65.1-6.8,130.2-11.3,195.4-11c28.4,0.2,58.1-3.3,86.7,0.6c17.7,2.4,35.4,4.1,53.1,6.2c15.9,1.9,31.6,6.2,47.5,7.3
              c8,0.5,13.2,12.8,13.9,23.1c0.2,1.1,0.5,3.2,0.9,6.2c0.4,3,0.9,4.8,1.4,5.4c-3.2-1.8-4.8,1.8-4.8,10.7c-0.2,1.8-0.1,5.1,0.1,9.8
              c0.3,4.7,0.3,8.7,0.1,12c-0.2,3.3-0.9,6.1-2.3,8.5c1.2,5.4,1.4,12.3,0.8,20.9c-0.7,8.7-0.8,14.9-0.5,18.8c0.3,3.8,0.5,8,0.5,12.5
              c0,4.4,0,8.9,0,13.3c0,4.5,0.1,8.8,0.2,13c0.5,9.5-0.5,16.1-2.9,19.7c-2.5,3.6-4.7,5.6-6.7,6.2c-8.6,1.8-15,2.7-19.2,2.7
              c-7.8-1.2-16.2-2.6-25.3-4.3c-72.9-14.1-147.1-9.9-220.4-8.3c-9,0.2-18,0.4-27,0.6c-42.8,1.4-76-4.6-99.7-4.5
              c-1.7,0-15.9-11.1-43.5-15.8c0.2-1.9,0.3-5.1,0.5-9.8c0.2-4.8,0.3-8.1,0.5-9.8l0.8,0.9L28.6,154.3z M41.1,153.4l-0.2-1.8l-0.2,2.7
              L41.1,153.4z"/>
          </g>
        </g>
        </svg>
        </div>

         </div>
        <div class="product-name"> ${product.name} </div>
        <div class="product-price">${product.price} VND </div>
      </div>
 
    </div>`;
});

//log(productElements);

// bugs không thể drag
const placeToPutProductDataIn = $("#product-section .owl-carousel ");
placeToPutProductDataIn.append(productElements);
