import React from 'react'

export const Card = ({ text, title }) => {
  return (
    <div className="Card">
        <div className='Card-title'>
            {title}
        </div>
        <div className="Card-body">
            {text}
        </div>
    </div>
  )
}
