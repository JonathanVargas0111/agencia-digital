import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';



const CardSerivces = ({title, icon,info}) => {
  return (
    <div className="col-sm-12 col-md-4 text-center">
            <h2 className="mt-5">
              <i className="fas">
                {icon}
              </i>
              <br />
              {title}
            </h2>
            <p className='mt-5 cardService-info'>
              {info}
            </p>
            <br />
            <button className="btn btn-info text-center mb-5">
              Ver mas
              <i className='mx-2'>
                <BsFillArrowRightCircleFill />
              </i>
            </button>
          </div>
  )
}

export default CardSerivces