// document.addEventListener("DOMContentLoaded", function () {
//     console.log("dom content loaded");
//     const block = document.querySelector("#canvas_container");
//     const parallaxWrapper = document.querySelector("#targetSection");

//     // Calculate the scroll trigger point (e.g., when the block is scrolled out of view)
//     const scrollTriggerPoint = block.offsetTop + block.offsetHeight;

//     // Add a scroll event listener to the window
//     window.addEventListener("scroll", function () {
//         if (window.pageYOffset >= scrollTriggerPoint) {
//             // Enable scrolling for the parallax-wrapper when the block is scrolled out of view
//             parallaxWrapper.style.overflow = "auto";
//         } else {
//             // Disable scrolling for the parallax-wrapper when the block is still in view
//             parallaxWrapper.style.overflow = "hidden";
//         }
//     });
// });

const scrollToSponsor = () => {
  console.log("clicked ...");
  const block = document.querySelector("#canvas_container");
  const scrollTriggerPoint = block.offsetTop + block.offsetHeight;
  window.scrollTo({
    top: scrollTriggerPoint,
    behavior: "smooth",
  });
};
const canvasBtns = document.querySelectorAll(".canvas_btn");

canvasBtns.forEach((btn) => {
  btn.addEventListener("click", scrollToSponsor);
});
