import React from 'react'
import { BsFillBrushFill } from 'react-icons/bs';
import { FaBullhorn } from 'react-icons/fa';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import CardSerivces from '../molecules/CardSerivces';

const Servicios = () => {
  return (
    <section id='servicios'>
      <div className="container">
        <h1 className="text-center mt-5">
          Nuestros Servicios
        </h1>
        <div className="row mt-5">
          <CardSerivces
            title={"Diseño"}
            icon={<BsFillBrushFill />}
            info={"Crea una experiencia visual cautivadora y funcional para tu marca con nuestro servicio de diseño."}
          />
          <CardSerivces
            title={"SEO"}
            icon={<BsFillArrowRightCircleFill />}
            info={"Impulsa tu visibilidad en línea y aumenta el tráfico orgánico con nuestra estrategia de SEO."}
          />
          <CardSerivces
            title={"Marketing"}
            icon={<FaBullhorn />}
            info={"Convierte clientes potenciales en clientes satisfechos a través de nuestras tácticas de marketing digital eficaces."}
          />
        </div>
      </div>
    </section>
  )
}

export default Servicios