# Frontend Mentor - Testimonials grid section solution

<div align="left">
  <a href="https://www.linkedin.com/in/danae-lescano-salvatierra" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"/>
  </a>
  <a href="https://lescano713.github.io/Testimonial-Grid-Section/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Demo&label=&color=6A0DAD&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="demo badge"/>
  </a>
  <a href="https://www.frontendmentor.io/profile/Lescano713" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Frontend%20Mentor&label=&color=ff1538&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="FrontendMentor badge"/>
  </a>
</div>


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./screenshot/desktop.gif)




## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- mobile-first workflow


### What I learned

<p>I learned about the different properties of <code>background-image</code></p>


```css
  .daniel-clifford{
    grid-column: auto / span 2;
    background-image: url('./images/bg-pattern-quotation.svg');
    background-repeat: no-repeat;
    background-position: 90% 10%;
  }
```
<p>I also implemented media queries and grid columns and rows to make the cards responsive on different devices.</p>


```css
    @media (max-width: 1000px) {
        main{
            grid-template-columns: repeat(auto-fit ,minmax(14em,1fr));
            padding: 1.3em 1em ;
        }
    }
    
    @media (max-width: 550px){
      .jeanette-harmon, .jonathan-walters, .kira-whittle{
        grid-column: span 2;
      }
    }

```
<p>I created a Json file to facilitate data entry, dividing the data by studentName, rol, studentImage, resume, testimonial, color, and colorFont. I used colorFont to apply a font color according to each student, which helped me to reduce the amount of CSS needed</p>

```json
 {
    "studentName" : "Jeanette Harmon",
    "rol": "Verified Graduate",
    "studentImage" : "./images/image-jeanette.jpg",
    "resume":"An overall wonderful and rewarding experience",
    "testimonial": "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love." ,
    "color": "hsl(0, 0%, 100%)",
    "colorFont" : "black"
 },
```
```js
        let section = document.createElement("section");
        section.style.backgroundColor = element.color;
        section.style.color = element.colorFont;
        main.appendChild(section);
```

<p>To bring the data from the JSON file, I used the Fetch API and created a function that retrieves the data and creates the respective elements</p>

```js
  function getElements(callback){
      fetch('data.json')
          .then(response => response.json())
          .then(data =>callback(data.testimonials))
  }
```
<p>Then, I created a function that adds the elements to the DOM from the retrieved data.</p>

```js
 function createCards (){
    main.innerHTML = "";
    features.forEach(feature =>{
      //html elements
      })
    }
```



### Continued development

<p>In future development, I plan to focus on several key areas:</p>
<p>- <strong>Advanced CSS Grid Techniques</strong>: Further exploration of complex grid layouts and the use of <code>grid-template-areas</code> for more flexible and maintainable designs.</p>
<p>- <strong>Responsive Design</strong>: Enhancing responsive layouts using media queries to ensure that web applications look great on all devices.</p>
<p>- <strong>JavaScript Best Practices</strong>: Improving JavaScript code readability and performance by refactoring and leveraging ES6 features like template literals and destructuring.</p>
<p>- <strong>Integrating APIs</strong>: Fetching and displaying data from external APIs to create more dynamic and interactive web applications.</p>
<p>These areas will help me build more sophisticated, user-friendly, and performant web applications.</p>


