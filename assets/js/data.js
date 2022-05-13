
const langEl = document.querySelector('.langWrap');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

const link = document.querySelectorAll('.language');
const titleEl = document.querySelector('.title2');
const paragraph1 = document.querySelector('.paragraph1');
const paragraph2 = document.querySelector('.paragraph2');
const paragraph3 = document.querySelector('.paragraph3');
const exp1 = document.querySelector('.exp1');
const exp2 = document.querySelector('.exp2');
const exp3 = document.querySelector('.exp3');
const footer = document.querySelector('.footerdata');
const other = document.querySelector('.other');

link.forEach(el => {
    el.addEventListener('click', () => {

        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        console.log(langEl, el);
        //el.style.backgroundColor

        const attr = el.getAttribute('language');
        about.textContent = data[attr].about;
        projects.textContent = data[attr].projects;
        contact.textContent = data[attr].contact;
        titleEl.textContent = data[attr].title2;
        paragraph1.textContent = data[attr].paragraph1;
        paragraph2.textContent = data[attr].paragraph2;
        paragraph3.textContent = data[attr].paragraph3;
        exp1.textContent = data[attr].exp1;
        exp2.textContent = data[attr].exp2;
        exp3.textContent = data[attr].exp3;
        footer.textContent = data[attr].footerdata;
        other.textContent = data[attr].other;


    });
});

var data = {

    "en":{
        "about":"ABOUT",
        "projects":"PROJECTS",
        "contact":"CONTACT",
        "title2":"Software Developer",
        "paragraph1":"Hi, I'm Fermin. I build apps and websites.",       
        "paragraph2":"My main interests are: NodeJS Backend development, REST API's, Microservices, UI/UX Design.",
        "paragraph3":"I am currently studying the last semester of Computer Engineering.",
        "exp1":"Professional training platform in the Esports industry. Offers learning videos and professional coaching.",
        "exp2":"Ecommerce oriented to the sale of cakes and desserts.",
        "exp3":"Application focused on offer and consume professional services.",
        "other":"Other recent work ⬇",
        "footerdata":"Made with 💝 and ☕"
    },
    "es":{
        "about":"ACERCA ",
        "projects":"PROYECTOS",
        "contact":"CONTACTO",
        "title2":"Desarrollador de Software",
        "paragraph1":"Hola, soy Fermín. Construyo aplicaciones y sitios web.",       
        "paragraph2":"Mis intereses principales son: NodeJS Backend development, API’s REST, Microservicios, UI/UX Design.",
        "paragraph3":"Actualmente estoy cursando el último semestre de Ingeniería en Informática.",
        "exp1":"Plataforma de formación profesional en la industria de los Esports. Ofrece videos de aprendizaje y entrenamiento profesional.",
        "exp2":"Ecommerce orientado a la venta de tortas y postres.",
        "exp3":"Aplicación enfocada a ofrecer y consumir servicios profesionales.",
        "other":"Otros trabajos recientes ⬇",
        "footerdata":"Hecho con 💝 y ☕"
    }

}