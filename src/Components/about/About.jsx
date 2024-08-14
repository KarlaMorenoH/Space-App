import './About.css'; // Puedes usar este archivo para estilizar tu página

function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                {/* Foto opcional */}
                <img 
                    src="/public/About-react.png" 
                    alt="Karla Moreno" 
                    className="about-photo" 
                />

                {/* Información personal */}
                <h2 className="about-name">Karla Moreno</h2>
                <p className="about-contact">Contacto: karla.moreno3120@gmail.com</p>

                {/* Pequeña descripción */}
                <p className="about-description">
                    Soy una entusiasta del desarrollo web y la ciencia de datos, con experiencia en la industria farmacéutica y proyectos de software. Me apasiona trabajar en proyectos disruptivos y aportar ideas innovadoras para resolver problemas complejos.
                </p>
            </div>
        </div>
    );
}

export default About;


