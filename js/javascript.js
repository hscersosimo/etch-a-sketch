
function createGrid (gridSize){

   const gridContainer = document.querySelector('#grid-container');
      
      // clear any pre-existing content
      gridContainer.innerHTML = "";

      // defines the total amount of grid items
      let gridItems = gridSize * gridSize;

      for(let i = 1; i <= gridItems; i++){ 
         
         // creates a new div referenced in the variable 'div'
         const div = document.createElement('div');
         
         // set an ID and class for each div
         div.setAttribute('id', 'gi' + i );
         div.classList.add('grid-item');

         // defines the widht for each grid item
         let gridItemSize = Math.floor(window.innerWidth / gridSize);
         console.log(gridItemSize);

         div.style.cssText = "width:" + gridItemSize + "px; height:" + gridItemSize +"px;";

         // renders HTML inside div
         //div.innerHTML = i;                
         
         // append the div to mainContainer
         gridContainer.appendChild(div);
     

         // Set up a “hover” effect so that the grid divs change color 
         // when your mouse passes over them, leaving a (pixelated) trail through 
         // your grid like a pen would.
         function changeBackground(){
            div.style.backgroundColor = "blue";
         };
         function restoreBackground(){
            div.style.backgroundColor = "white";
         };
         div.addEventListener('mouseover', function() {
            changeBackground();
            setTimeout(restoreBackground, 200);
         });

      }
   }


// Create a webpage with a 16x16 grid of square divs.
createGrid(10);

// Add a button to the top of the screen that will send the user a popup 
// asking for the number of squares per side for the new grid. 
// Once entered, the existing grid should be removed and a new grid should be generated
// in the same total space as before (e.g. 960px wide) 
// so that you’ve got a new sketch pad. 
// Tip: Set the limit for the user input to a maximum of 100. 
// A larger number of squares results in more computer resources being used, 
// potentially causing delays, freezing, or crashing that we want to prevent.

const gridSizeBtn = document.querySelector('#grid-size-btn');
gridSizeBtn.addEventListener('click', function() {

   let gridSize = prompt('Insert new grid size');
   while (gridSize > 100) {
      alert('Maximum size is 100. Please try again.');
      gridSize = prompt('Insert new grid size');
   }

   createGrid(gridSize);

});





