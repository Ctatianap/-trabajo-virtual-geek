'use strict'


const newParagraph = "Maecenas sit amet diam faucibus, posuere nisi condimentum, congue ante. Donec id purus eleifend, imperdiet est et, sollicitudin magna. Suspendisse turpis lectus, bibendum a purus sit amet, fringilla feugiat purus. Sed scelerisque magna lectus, nec dignissim nulla vulputate eget. Fusce dapibus libero ante, eget pharetra nunc maximus non. Nulla ipsum dui, iaculis vitae leo ac, cursus fringilla urna. In ultricies auctor urna, et bibendum nisl congue sit amet.";

document.getElementById("paragraph").addEventListener("mouseover", () =>{ 
  document.getElementById("new-paragraph").innerHTML = newParagraph; 
})


