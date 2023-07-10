import React from 'react'

const CardTestimonio = ({textTestimonio,proyect}) => {
  return (
    <div className="col-sm-12 col-md-6 text-center">
      <div className="card">
        <div className="card-body">
          <p className="mt-5 info-cardTestimonio">
            {textTestimonio}
          </p>
          <cite><strong>{proyect}</strong></cite>
        </div>
      </div>
    </div>
  )
}

export default CardTestimonio