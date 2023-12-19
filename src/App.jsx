import React from 'react'
import Card from './assets/components/Card'

function App() {
  const pricingData = [
    {
      title: "Free",
      price: "$0",
      features:"Single User",
       users:"5GB Storage",
       dataBack:"Unlimited Public Projects",
       comunityAccess :"Community Access",
        projects:"Unlimited Private Projects",
        support:"Dedicated Phone Support",
        subDomain:"Free Subdomain",
        status:"Monthly Status Reports"
    },
  {
    title: "Plus",
    price: "$9",
    features:"Single User",
     users:"5GB Storage",
     dataBack:"Unlimited Public Projects",
     comunityAccess :"Community Access",
      projects:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subDomain:"Free Subdomain",
      status:"Monthly Status Reports"
  },
{
  title: "Pro",
  price: "$49",
  features:"Single User",
   users:"5GB Storage",
   dataBack:"Unlimited Public Projects",
   comunityAccess :"Community Access",
    projects:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subDomain:"Free Subdomain",
    status:"Monthly Status Reports"
}]
  return <>
   <section className="pricing py-5">
  <div className="container">
    <div className="row">
   
        { pricingData.map((e,i)=>{
            return <Card cardData={e} key={i}/>
          })
        }
  </div>
  </div>
  </section>
  </>
}

export default App