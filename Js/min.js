const productArray = [
  {
    url: "Images//Products//p1.png",
    name: "Syltherine",
    price: "2.500 EGP",
    description: "Stylish cafe chair",
  },
  {
    url: "Images//Products//p2.png",
    name: "Leviosa",
    price: "2.500 EGP",
    description: "Stylish cafe chair",
  },
  {
    url: "Images//Products//p3.png",
    name: "Lolito",
    price: "7.000 EGP",
    description: "Luxury big sofa",
  },
  {
    url: "Images//Products//p4.png",
    name: "Orka",
    price: "1.500 EGP",
    description: "Outdoor bar table and stool",
  },
  {
    url: "Images//Products//p5.png",
    name: "Grifo",
    price: "2.000 EGP",
    description: "Night lamp",
  },
  {
    url: "Images//Products//p6.png",
    name: "Curology",
    price: "3.500 EGP",
    description: "Outdoor bar table and stool",
  },
  {
    url: "Images//Products//p7.png",
    name: "Curology",
    price: "8.500 EGP",
    description: "Cute bed set",
  },
  {
    url: "Images//Products//p8.png",
    name: "Cairokey",
    price: "5.500 EGP",
    description: "Outdoor bar table and stool",
  },
];
$("#product-Looping").html("sadsadasd");
let empty = "";
for (let i = 0; i < productArray.length; i++) {
  empty += `
  <div class="col-6  resize-card col-md-4 col-lg-3 d-flex flex-column">
    <div class="col-color reszie position-relative overflow-hidden">
      <img src="${productArray[i].url}" alt="" class="w-100">
      <p class="fw-bold fs-4 px-3 mb-0 p-edit">${productArray[i].name}</p>
      <span class="text-muted fs-6 px-3 text-">${productArray[i].description}</span>
      <p class="px-3 ">${productArray[i].price}</p>
      <div class="col-share-item w-100 h-100 top-100 position-absolute d-flex flex-column align-items-center justify-content-center ">
        <button type="submit " class="py-3 px-5 border-0 family-font-1 fw-semibold main-color ">Add to Cart</button>
        <div class="icons-product mt-2">
          <a class="curs-poi bi bi-share-fill family-font-1 text-white text-decoration-none fw-semibold"><span class="mx-1">Share</span> </a>
          <a class="curs-poi bi bi-arrow-left-right family-font-1 text-white text-decoration-none fw-semibold"> <span class="mx-1">Compare</span> </a>
          <a class="curs-poi bi bi-heart family-font-1 text-white text-decoration-none fw-semibold"> <span class="mx-1"> Like</span></a>
        </div>
      </div>
    </div>
  </div>
  
  
  
  `;
  $("#product-Looping").html(empty);
}
