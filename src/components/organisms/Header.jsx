import React from 'react';

const Header = () => {
  return (
    <section id="inicio" className="text-center inicio ">
      <div className="jumbotron fondo-imagen p-5">
        <h1 className="display-4"><strong>Creatividad e Innovacion sin fronteras</strong></h1>
        <p className="lead">
          Convierte ideas en realidad con nuestro equipo creativo y logra resultados sorprendentes.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Mas información</a>
      </div>
    </section>
  );
};

export default Header;
