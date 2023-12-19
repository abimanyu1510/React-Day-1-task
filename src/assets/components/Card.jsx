import React from 'react'

function Card(props) {
  return <>
     {
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.title}</h5>
            <h6 className="card-price text-center">{props.cardData.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.features}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.users}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.projects}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData. comunityAccess}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.dataBack}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.support}
                </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.subDomain}
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.status}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
}
  </> 
}

export default Card

