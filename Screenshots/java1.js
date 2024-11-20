const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password_input');
const repeat_password_input = document.getElementById('repeat_password_input');
const error_message = document.getElementById('error-message');
let shop = document.getElementById('prodetails');

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    });
}
let shopItemData =[
    {
    id:"1",
    name:"Aromatica Rosemary Active V",
    price:84000,
    desc:" Витамин Актайв V, LPP уургийн найрлага, Хар Хоолны Комплекс болон ментолтой энэхүү тэжээллэг үсний тоник нь хуйхыг тайвшруулж, сэргээхээс гадна үсний угийг бэхжүүлж, уян хатан чанарыг нэмэгдүүлдэг.",
    img: "40.jpg"
}
];

let basket = [{
    id:"real",
    Item:1
}];
let generateShop =()=>{
    return (shop.innerHTML = shopItemData
    .map((x) =>{
        let {id,name,price}=x;
            return `
   <div class="single-pro-image">
        <img src="14.jpg" width="100%" id="Mainimg" alt="">

        <div class="small-img-group">
          <div class="small-img-col">
            <img src="36.jpg" width="100%" class="small-img" alt="">
          </div>
          <div class="small-img-col">
            <img src="37.jpg" width="100%" class="small-img" alt="">
          </div>
          <div class="small-img-col">
            <img src="38.jpg" width="100%" class="small-img" alt="">
          </div>
          <div class="small-img-col">
            <img src="14.jpg" width="100%" class="small-img" alt="">
          </div>
       </div>
      </div>
      <div class="single-pro-details">
        <h6>Home / Toner</h6>
        <h4>Advannced Snail 96 Mucin Power Essence</h4>
        <h1>₮36000</h1>
        <select>
          <option> Toner</option>
          <option> Gel Cleanser </option>
          <option> Eye Cream </option>
          <option> Sheet Mask </option>
          <option> Intensive Ceam </option>
        </select>
       <button class="normal"><i onclick="increment(${id})" class="fa-solid fa-plus"></i>
        <div id=${id} class="quantity">0 Сагсанд хийх</div>
        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
        </button>
        <h4>Бүтээгдэхүүний мэдээлэл</h4>
        <span>96% арьс арчилгааны найрлагатай, арьсыг сэргээх найрлагатай эмгэн хумсны шүүрлийн шүүлтүүрээр баяжуулсан
          Арьсанд хурдан шингэж, дотроосоо байгалийн гэрэлтсэн байдлыг өгөх хөнгөн жинтэй эссенц. Энэхүү эссенц нь арьсыг чийгшүүлж, өдрийн турш гэрэлтүүлэх тэжээллэг, бага өдөөлттэй шүүлтүүртэй эмгэн хумсны шүүрлээс бүтсэн.
          😊</span>
      </div>
        
    `;
}).join(""));
};
generateShop();

let increment =(id)=>{console.log(id)};
let decrement =(id)=>{console.log(id)};

let update =()=>{};