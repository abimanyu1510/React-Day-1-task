import React from 'react'
import Card from './assets/components/Card'

function App() {
  const pricingData = [
    {
      title: "FREE",
      price: "$0",
      features:"Single User",
      isFeatures:true,
       users:"5GB Storage",
       isUsers:true,
       dataBack:"Unlimited Public Projects",
       isDataBack:true,
       communityAccess :"Community Access",
       isCommunityAccess:true,
        projects:"Unlimited Private Projects",
        isProjects:false,
        support:"Dedicated Phone Support",
        isSupport:false,
        subDomain:"Free Subdomain",
        isSubDomain:false,
        status:"Monthly Status Reports",
        isStatus:false,
    },
  {
    title: "PLUS",
    price: "$9",
    features:"5 Users",
    isFeatures:true,
     users:"50GB Storage",
     isUsers:true,
     dataBack:"Unlimited Public Projects",
     isDataBack:true,
     communityAccess :"Community Access",
     isCommunityAccess:true,
      projects:"Unlimited Private Projects",
      isProjects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      status:"Monthly Status Reports",
      isStatus:false,
  },
{
  title: "PRO",
      price: "$49",
      features:"Unlimited Users",
      isFeatures:true,
       users:"150GB Storage",
       isUsers:true,
       dataBack:"Unlimited Public Projects",
       isDataBack:true,
       communityAccess :"Community Access",
       isCommunityAccess:true,
        projects:"Unlimited Private Projects",
        isProjects:true,
        support:"Dedicated Phone Support",
        isSupport:true,
        subDomain:"Free Subdomain",
        isSubDomain:true,
        status:"Monthly Status Reports",
        isStatus:true,
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