/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section'); // Declaring variable to to select the sections.
let sectionsCount = sections.length; // Getting the count of dections up to date.

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 



function createLi(){
    // Loop over the count of sections whatever it is.
    for (let i = 0; i < sectionsCount; i++){

        // Getting the ul Element to use it later.
        let ul = document.getElementById("navbar__list");

        // Creating the li items and store in variable.
        let newLI = document.createElement('li');

        // Setting Class for the li items that we will use later.
        newLI.setAttribute('class','newlist');  

        // Appending Textnode in the new li items that store the word section based on the number of each section.
        let secName = document.createTextNode(`Section ${i + 1}`);
        let a = document.createElement('a');
        
        // Here I am making a link to the sections by using the href with value of the ID section names.
        a.href = `#section${i + 1}`;
        a.appendChild(secName);

        // Removing the a tag auto underline.
        a.style.cssText = 'text-decoration: none';
        newLI.appendChild(a);

        // Appending the li items in the ul.
        ul.appendChild(newLI);
        
        // Styling the Section words to be appropriate based on the project.
        newLI.style.cssText = 'margin-right: 10px; position: relative; right: 30px; padding: 10px 0 10px 0;'
        newLI.style.cursor = 'pointer';
        
    }

}
createLi();


// Check if section is active at viewport, checked MDN in the below part for help understanding the function used below:
function checkViewPort(element){
    let rect = element.getBoundingClientRect();
    return (rect.top); // always if section in the view port then its top distance will must be greater than 0.
}

// add or remove active class based on the rect output from this function getBoundingClientRect().
function ActiveSectionAmendment() {
    for (section of sections){
        if(checkViewPort(section) >= 0){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
        }
        }else{
            section.classList.remove('your-active-class');
        }
    }
}


// Adding event to apply this function based on the scroll.
document.addEventListener('scroll', ActiveSectionAmendment);

// Below code is mine but I was reading from outer recources to grasp the idea.
//Below code for getting botton class
let btn = document.querySelector(".btn_scroll");

// Function to make the button appear after scrolling with 1000px
window.onscroll = function() {scrollingFunc()};

function scrollingFunc() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




