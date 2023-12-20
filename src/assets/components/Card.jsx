import React from 'react'

function Card({cardData}) {
  return <>
     {
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{cardData.title}</h5>
            <h6 className="card-price text-center">{cardData.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={cardData.isFeatures?"":"text-muted"}><span className="fa-li"><i className={cardData.isFeatures?"fas fa-check":"fas fa-times"}></i></span>{cardData.title!=="FREE"?<b>{cardData.features}</b>:<>{cardData.features}</>}</li>
              <li className={cardData.isUsers?"":"text-muted"}><span className="fa-li"><i className={cardData.isUsers?"fas fa-check":"fas fa-times"}></i></span>{cardData.users}</li>
              <li className={cardData.isDataBack?"":"text-muted"}><span className="fa-li"><i className={cardData.isDataBack?"fas fa-check":"fas fa-times"}></i></span>{cardData.dataBack}</li>
              <li className={cardData.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className={cardData.isCommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{cardData. communityAccess}</li>
              <li className={cardData.isProjects?"":"text-muted"}><span className="fa-li"><i className={cardData.isProjects?"fas fa-check":"fas fa-times"}></i></span>{cardData.projects}</li>
              <li className={cardData.isSupport?"":"text-muted"}><span className="fa-li"><i className={cardData.isSupport?"fas fa-check":"fas fa-times"}></i></span>{cardData.support}</li>
              <li className={cardData.isSubDomain?"":"text-muted"}><span className="fa-li"><i className={cardData.isSubDomain?"fas fa-check":"fas fa-times"}></i></span>{cardData.title==="PRO"?<><b>Unlimitted </b> {cardData.subDomain}</>:cardData.subDomain}</li>
              <li className={cardData.isStatus?"":"text-muted"}><span className="fa-li"><i className={cardData.isStatus?"fas fa-check":"fas fa-times"}></i></span>{cardData.status}</li>
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

