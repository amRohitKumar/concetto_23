const scrollToSponsor = () => {
  // console.log("clicked ...");
  const block = document.querySelector("#canvas_container");
  const scrollTriggerPoint = block.offsetTop + block.offsetHeight;
  window.scrollTo({
    top: scrollTriggerPoint,
    behavior: "smooth",
  });
};

export default scrollToSponsor;
