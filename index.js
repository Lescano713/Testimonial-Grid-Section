const main = document.getElementById("testimonials-section");

function getElements(callback){
    fetch('data.json')
        .then(response => response.json())
        .then(data =>callback(data.testimonials))
}

getElements(data => {
    data.forEach(element => {
        let section = document.createElement("section");
        section.classList.add("testimonial-container");
        let div = document.createElement("div");
        div.classList.add("student-info")
        let h1 = document.createElement("h1");
        h1.textContent = element.studentName;
        let p = document.createElement("p");
        p.textContent = element.rol;
        div.appendChild(h1);
        div.appendChild(p);
        let bResume = document.createElement("b");
        bResume.textContent = element.resume;
        let qTestimonial = document.createElement("b");
        qTestimonial.textContent = element.testimonial;
        section.appendChild(div)
        section.appendChild(bResume);
        section.appendChild(qTestimonial);
        main.appendChild(section);
    });
}) 