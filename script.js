// local reviews data
const review=[
  {
      id:1,
      name:'Kirti Bajaj',
      job:'Web developer',
      img:
      ' https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
      id:2,
      name:'Aman Sharma',
      job:'Web designer',
      img:
      ' https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
       id:3,
      name:'Harsh Sharma',
      job:'Software Engineer',
      img:
      ' https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      text:
       "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
       id:4,
      name:'Bill gate',
      job:'CEO',
      img:
      ' https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      text:
       "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");
  const random = document.querySelector(".random-btn");
  
  // set starting item
  let current = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = review[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = review[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  next.addEventListener("click", function () {
    current++;
    if (current > review.length - 1) {
      current = 0;
    }
    showPerson(current);
  });
  // show prev person
  prev.addEventListener("click", function () {
    current--;
    if (current < 0) {
      current = review.length - 1;
    }
    showPerson(current);
  });
  // show random person
  random.addEventListener("click", function () {
    console.log("hello");
  
    current = Math.floor(Math.random() * review.length);
    showPerson(current);
  });
  