import React from 'react'

const Form = () => {
  return (
    <>
      <h3 className="mt-5">
        Suscribete
      </h3>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className='form-control' placeholder='Ingresa tu nombre' />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input type="emial" className='form-control' placeholder='Ingresa tu email' />
        </div>
        <button type='submit' className='btn btn-primary mt-3'> Suscribete </button>
      </form>
    </>
    
  )
}

export default Form