import React from 'react'
import { Bookmark } from "lucide-react";
import "../Card.css"

function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <div className="logo">
        <img src={props.brandLogo} alt='' />
      </div>
      <button>Save <Bookmark /> </button>
      </div>
      <div className="center">
        <h3>{props.companyName} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div className='tag'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>{props.pay}</h4>
          <p>{props.location}</p>
        </div>
          <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card;