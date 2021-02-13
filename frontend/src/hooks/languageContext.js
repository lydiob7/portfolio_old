import React, {useState, useEffect, useContext, createContext} from 'react'

export const LanguageContext = createContext()

export const LanguageContextProvider = props => {

    const english = {
        menu: {
            home: 'Home',
            about: 'About',
            technologies: 'Technologies',
            projects: 'Projects',
            contact: 'Contact'
        },
        theme: 'light/dark',
        titles: {
            about: 'About me',
            technologies: 'Technologies',
            projects: 'Projects',
            contact: 'Get in touch'
        },
        content: {
            hello: 'Hello, I am',
            profession: 'Web Developer',
            download: 'Download Resume',
            more: 'Read more',
            less: 'Hide',
            copyright: 'All rights reserved by Tomás Scattini'
        },
        bio: {
            txt2: 'I am a full stack web developer from Argentina with a background in Popular Music and a nomad soul.',
            txt3: 'I recently graduated from an intensive bootcamp where I improved my developer skills and reinforced my social network.',
            txt4: "I love to put my creativity to test and that's why I deeply enjoy creating new products for the web.",
            txt5: 'I have worked as a Music teacher in my home country for five years until my urge of adventure made me decide to hit the road and travel around the world.',
            txt6: 'That experience made me discover a whole new universe and expanded my perception of life.',
            txt7: 'Today I decide to make a positive change in the world wherever I can, and that is mostly through this powerful tool that is the internet.'
        },
        projects: {
            vagamundos: 'Vagamundos is an interactive game where you can travel the continent with the character of your choosing guessing all the capitals. The game is divided in three levels increasing the difficulty of the tests. Enjoy the world while learning geography! Created fully on plain JavaScript, Html and Css (repository on my GitHub)',
            tierraroja: 'Website for the women clay artists of Misiones, Argentina. In this app, the artists can offer their products and courses to any person with an account. Created with ReactJs, NodeJs, Express, MongoDB and a little magic of AntD and Styled Components (repository on my GitHub)',
            chapati: 'Chapati is a conscious website promoting exchange of experiences and products from a self-sustainable perspective. You will find a virtual space where to offer and find volunteer experiences, as well as to buy and sell craft products. Created with Hbs, NodeJs, Express, MongoDB and Sass (repository on my GitHub)',
            bandaespecia: "This is a website for a music group of La Plata, Argentina. You'll find their music, some pictures and their next events! Created on Html, JavaScript, Css and a little of JQuery (repository on my GitHub)"
        },
        networkError: 'Sorry, you need to be online to contact me!',
        form: {
            subject: 'Subject',
            message: 'Message',
            send: 'Send message',
            thanks: 'Thanks for contacting!',
            thanks2: "I'll be getting back to you shortly",
            sendagain: 'Get in touch again!',
            message1: 'Please input your email!',
            message2: 'Please name your message!',
            message3: 'Please write your message!'
        }
    }

    const spanish = {
        menu: {
            home: 'Inicio',
            about: 'Sobre mi',
            technologies: 'Tecnologías',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        theme: 'claro/oscuro',
        titles: {
            about: 'Sobre mí',
            technologies: 'Tecnologías',
            projects: 'Proyectos',
            contact: 'Contactame'
        },
        content: {
            hello: 'Hola, yo soy',
            profession: 'Desarrollador Web',
            download: 'Descargar CV',
            more: 'Leer más',
            less: 'Ocultar',
            copyright: 'Todos los derechos reservados por Tomás Scattini'
        },
        bio: {
            txt2: 'Soy Desarrollador Web Full Stack de Argentina con un background en Música Popular y un alma nómada.',
            txt3: 'Recientemente me gradué de un bootcamp intensivo en donde desarrollé mis habilidades técnicas y reforcé mi red profesional.',
            txt4: "Disfruto de poner a prueba mi creatividad y es por eso que amo crear nuevos productos para la web.",
            txt5: 'Trabajé como profesor de música en mi país natal por cinco años hasta que mis ansias de aventura me hicieron decidir agarrar la mochila y salir a recorrer el mundo.',
            txt6: 'Esa experiencia me hizo descubrir un universo nuevo y expandió mi percepción de la vida.',
            txt7: 'Hoy decido generar un impacto positivo en el mundo en donde pueda y eso, en este momento de mi vida, es a través de esta poderosa herramienta que es la internet.'
        },
        projects: {
            vagamundos: 'Vagamundos es un juego interactivo en donde podés viajar por el continente americano con el personaje de tu elección adivinando las capitales. El juego se divide en tres niveles cada vez más difíciles. Disfruta del mundo mientras aprendés geografía! Creado integramente en JavaScript simple, Html y Css (repositorio en mi GitHub)',
            tierraroja: 'Página web de las artistas de la cerámica de Misiones, Argentina. En esta app, las artistas puede ofrecer sus productos y cursos a cualquier persona con una cuenta. Creada con ReactJs, NodeJs, Express, MongoDB y un poquito de magia de AntD y Styled Components (repositorio en mi GitHub)',
            chapati: 'Chapati es una página web consciente que promueve intercambios de experiencias y productos desde una perspectiva autosustentable. Vas a encontrar un espacio en donde ofrecer y buscar experiencias de voluntariado, así como también comprar y vender artesanías. Creado con Hbs, NodeJs, Express, MongoDB y Sass (repositorio en mi GitHub)',
            bandaespecia: "Esta es una página web para una banda de música de La Plata, Argentina. Vas a poder encontrar su música original, algunas fotos del conjunto y sus próximas presentaciones! Creado en Html, JavaScript, Css y un poquito de JQuery (repositorio en mi GitHub)"
        },
        networkError: 'Perdón, necesitás internet para contactarme!',
        form: {
            subject: 'Asunto',
            message: 'Mensaje',
            send: 'Enviar mensaje',
            thanks: 'Gracias por contactarte!',
            thanks2: 'Te estaré respondiendo a la brevedad',
            sendagain: 'Contactar de nuevo!',
            message1: 'Por favor ingresá tu casilla de correo!',
            message2: 'Por favor poné un asunto al mensaje!',
            message3: 'Por favor escribí tu mensaje!'
        }
    }

    const [languageCtx, setLanguageCtx] = useState(english)

    const changeLanguage = (lang) => {
        switch (lang) {
            case 'ES':
                setLanguageCtx(spanish)
                break
                default:
                setLanguageCtx(english)
                break
        }
        
    }

    const value = {
        languageCtx, changeLanguage
    }

    return (
        <LanguageContext.Provider {...props} value={value} />
    )
}

export const useContextInfo = () => useContext(LanguageContext)