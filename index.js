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
        section.classList.add(element.studentName.toLowerCase().replace(/ /g, '-'))
        
        let divInfo = document.createElement("div");
        divInfo.classList.add("student-info")
        let divText = document.createElement("div");
        divText.classList.add("text");
        divInfo.appendChild(divText);

        let imageStudent = document.createElement("img");
        imageStudent.src = element.studentImage;
        let h1Name = document.createElement("h1");
        h1Name.textContent = element.studentName;
        let pRol = document.createElement("p");
        pRol.textContent = element.rol;
        divInfo.appendChild(imageStudent);
        divText.appendChild(h1Name);
        divText.appendChild(pRol);
        
        let pResume = document.createElement("p");
        let bResume = document.createElement("b");
        bResume.textContent = element.resume;
        pResume.appendChild(bResume)

        let pTestimonial = document.createElement("p");
        let qTestimonial = document.createElement("q");
        qTestimonial.textContent = element.testimonial;
        pTestimonial.appendChild(qTestimonial);
        
        section.appendChild(divInfo)
        section.appendChild(bResume);
        section.appendChild(qTestimonial);

        section.style.backgroundColor = element.color;
        section.style.color = element.colorFont;
        main.appendChild(section);
    });
}) 