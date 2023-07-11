import React from 'react'

const Galeria = () => {
  return (
      <section className='galeria' id='galeria'>
        <div className="row mt-5 g-0">
          <div className="col-sm-12 col-md-3">
            <img src="/img/img1-galeria.jpg" alt="" className="img-fluid h-100" />
          </div>
          <div className="col-sm-12 col-md-3">
            <img src="/img/img2-galeria.webp" alt="" className="img-fluid h-100" />
          </div>
          <div className="col-sm-12 col-md-3">
            <img src="/img/img3-galeria.jpg" alt="" className="img-fluid h-100" />
          </div>
          <div className="col-sm-12 col-md-3">
            <img src="/img/img4-galeria.jpg" alt="" className="img-fluid h-100" />
          </div>
        </div>
      </section>
  )
}

export default Galeria