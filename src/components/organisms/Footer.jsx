import React from 'react'
import { IoMdPin } from 'react-icons/io';
import {BsFillTelephoneFill} from 'react-icons/bs'
import Form from '../molecules/Form';

const Footer = () => {
  return (
    <section id='footer' className='footer'>
        <div className="container py-3">
            <div className="row mt-5">
              <div className="col-sm-12 col-md-4 text-center text-white">
                <h3 className="mt-5">
                  Nosotros
                </h3>
                <p className='mt-5'>
                Somos una agencia digital apasionada que impulsa el éxito de las marcas a través de estrategias digitales innovadoras.
                </p>
              </div>
              <div className="col-sm-12 col-md-4 text-center text-white">
                <h3 className="mt-5">
                  Contáctenos
                </h3>
                <p className='mt-5'>
                  <IoMdPin/>  Calle 86a #94 Bogotá/Colombia
                </p>
                <p>
                  <BsFillTelephoneFill/>  565555555
                </p>
              </div>
              <div className="col-sm-12 col-md-4 text-center text-white">
                <Form Form></Form>         
              </div>
            </div>           

            <div className="row mt-5">
              <div className="col-sm-12 col-md-12 text-center text-white">
                <p>@2023 devjonathanvargas. Todos los derechos reservados</p>
              </div>
            </div>   
            
        </div>

    </section>
  )
}

export default Footer