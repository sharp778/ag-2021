console.log("hey");

let acc = document.getElementsByClassName("accordion");

// console.log(acc);

var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("text-blue-500");

    let panel = this.nextElementSibling;
    let plusSign = this.children[1];
    // console.log(plusSign.children[0]);
    // console.log(panel.style);
    // console.log(this.children);
    if (panel.classList.contains("h-0")) {
      panel.classList.remove("h-0");
      panel.classList.add("h-24");

      plusSign.children[0].classList.add("rotate-45");
    } else {
      panel.classList.add("h-0");
      panel.classList.remove("h-24");

      plusSign.children[0].classList.remove("rotate-45");
    }

    // if (panel.classList.contains("hidden")) {
    //   panel.classList.remove("hidden");
    //   panel.classList.add("block");
    // } else {
    //   panel.classList.remove("block");
    //   panel.classList.add("hidden");
    // }
  });
}

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("loaded");

//   const headings = document.querySelectorAll("#content h3");
//   console.log(headings);
//   let tableOfContentInner = "";
//   if (headings && headings.length) {
//     headings.forEach((heading, i) => {
//       tableOfContentInner += `<li><a href="#section_${i}">${heading.textContent}</a></li>`;
//       const originalHeadingContent = heading.innerHTML;
//       const anchor = `<a class="offset-anchor" id="section_${i}"></a>`;
//       // add the anchor to the <h3> tag
//       heading.innerHTML = anchor + originalHeadingContent;
//     });

//     const tableOfContent = `<ol>${tableOfContentInner}</ol>`;
//     // add the generated table of contents to the dive
//     document.querySelector("#table-of-content").innerHTML += tableOfContent;
//   }
// });

var pageLocation = window.location.pathname;

if (pageLocation.includes("solutions")) {
  var navbar = document.getElementById("table-of-contents");

  var sticky = navbar.offsetTop;
  window.onscroll = function () {
    myFunction();
  };
}

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stickyness");
  } else {
    navbar.classList.remove("stickyness");
  }
}

const navHeaders = document.getElementsByClassName("nav-header");
const homepageBanners = document.getElementsByClassName("homepage-banner");
let homepageBanner = homepageBanners[0];
let navHeader = navHeaders[0];

const sectionOneOptions = {
  // rootMargin: "100px 0px 0px 0px",
};
const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navHeader.classList.add("bg-white");
        navHeader.classList.add("shadow-md");
        navHeader.classList.add("text-pink-600");
        navHeader.classList.remove("text-gray-50");
        navHeader.classList.remove("bg-black");
      } else {
        navHeader.classList.remove("bg-white");
        navHeader.classList.remove("text-pink-600");
        navHeader.classList.add("text-gray-50");
        navHeader.classList.add("bg-black");
      }
    });
  },
  sectionOneOptions
);

// sectionOneObserver.observe(homepageBanner);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
