import React from 'react'
import './homepage.css'

function SpecialsCard(props) {
  return (
    <div className="special_card">
      <img src={props.info.pic} alt="" />
      <div className="special_card_info">
        <h2>{props.info.title}</h2>
        <h3>{props.info.description}</h3>
      </div>
    </div>
  )
}

export default SpecialsCard;
