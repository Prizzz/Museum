"use strict";

function galleryRandom() {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const imgSource = shuffle([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  const galleryColumns = document.querySelectorAll(".gallery-column");
  let elems = "";
  let i = 0;
  let column = 0;

  imgSource.forEach((item) => {
    let img = `<img class="gallery-column-img" src="assets/img/gallery/gallery${item}.webp" alt="gallery${item}">`;
    elems += img;
    i++;
    if (i == 4) {
      galleryColumns[column].innerHTML = elems;
      elems = "";
      i = 0;
      column++;
    }
  });
}

function galleryAnim() {
  const animItems = document.querySelectorAll(".gallery-column-img");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i],
          animItemHeight = animItem.offsetHeight,
          animItemOffset = offset(animItem).top,
          animStart = 10;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          scrollY > animItemOffset - animItemPoint &&
          scrollY < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active-anim");
        } else {
          animItem.classList.remove("_active-anim");
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    animOnScroll();
  }
}

galleryRandom();
galleryAnim();
