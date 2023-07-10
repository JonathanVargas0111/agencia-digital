import React from 'react'
import CardTestimonio from '../molecules/CardTestimonio'

const Testimonio = () => {
  return (
    <section id='testimonio'>
      <div className="container p-5">
        <h1 className="text-center mt-5">
          Testimonios
        </h1>
        <div className="row mt-5">
          <CardTestimonio
            textTestimonio={"La agencia digital transformó nuestra tienda de tenis en un éxito online. ¡Ventas récord!"}
            proyect={"Store-shop"}
         />
        <CardTestimonio
          textTestimonio={"Gracias a la agencia digital, nuestro emprendimiento despegó. Resultados asombrosos en poco tiempo"}
          proyect={"CreaTech"}
        />
        </div>
      </div>
    </section>
  )
}

export default Testimonio