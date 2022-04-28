
// Create a webpage with a 16x16 grid of square divs.
// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
// There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
// float/clear
// inline-block
// flexbox
// CSS Grid

const gridContainer = document.querySelector('#grid-container');

for(let i = 1; i <= 256; i++){ 
   
   // creates a new div referenced in the variable 'div'
   const div = document.createElement('div');
   
   // set an ID and class for each div
   div.setAttribute('id', 'gi' + i );
   div.classList.add('grid-item');

      // adds several style rules
   div.style.cssText = "width: 6.25%;";

   // renders the HTML inside div
   div.innerHTML = 'Div ' + i;                
   
   // append the div to mainContainer
   gridContainer.appendChild(div);

}
