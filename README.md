# Frontend Mentor - Testimonials grid section solution

# Frontend Mentor - Recipe page solution

<div align="left">
  <a href="https://www.linkedin.com/in/danae-lescano-salvatierra" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"/>
  </a>
  <a href="https://lescano713.github.io/Card-Feature-Section/" target="_blank">
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

<p>I learned about the use of grid areas, using span to organize the elements according to the design</p>


```css
    .supervisor{
      grid-column: span 1/2;
    }
    .supervisor, .calculator{
      align-self: flex-start;
      grid-row:span 2/4;
    }
    .calculator{
      grid-column: span 1/4;
    }
```
<p>Also I implemented media queries and grid to make the cards responsive on different devices.</p>

```css
    @media (max-width: 850px) {
      main{
          grid-template-columns: repeat(auto-fit ,minmax(13em,1fr)) ;
          grid-gap: 20px 50px;
          grid-template-rows: auto;
          width: 90dvw;
          .feature-container{
              grid-column: unset;
              grid-row: unset;
              max-height: 10em;
          }
      }
    }
```
<p>To add more cards without writing the elements directly in the html I facilitated the entry of data using objects and arrays, dividing it by name, color, paragraph and image</p>

```js
 const features =[{
        name: "Supervisor",
        color: "hsl(180, 62%, 55%)",
        paragraph: "Monitors activity to identify project roadblocks",
        img: './images/icon-supervisor.svg',
    },]

```
<p>Then, I created a function that adds the elements in the DOM from the entered data.</p>

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


