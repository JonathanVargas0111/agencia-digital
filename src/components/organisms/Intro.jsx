import React from 'react'

const Intro = () => {
  return (
    <section id='intro' className='intro'>
        <div className='container'>
            <div className="row mt-5 py-5">
              <div className="col-sm-12 col-md-6">
                <h2 className="mt-5 focus-in-expand">
                Agencia digital dedicada a fortalecer e impulsar la presencia en internet de su negocio.
                </h2>
                <p className='mt-5'>
                Nuestra agencia digital se especializa en brindar soluciones completas para mejorar la presencia en línea de su empresa. Nos encargamos de desarrollar estrategias efectivas y personalizadas para alcanzar sus objetivos digitales. Desde el diseño de un sitio web profesional hasta la implementación de estrategias de marketing digital, trabajamos arduamente para asegurar que su empresa se destaque en el mundo digital. Confíe en nosotros para potenciar su presencia digital y alcanzar el éxito.
                </p>
                <button className="btn btn-outline-primary btn-lg text-center">Más Información</button>
              </div>
              <div className="col-sm-12 col-md-6">
                <img src="/public/img/imgSectionIntro.jpg" alt="img intro" className='img-thumbnail img-fluid'/>
              </div>
            </div>
        </div>  
    </section>
  )
}

export default Intro