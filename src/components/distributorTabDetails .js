
"use client"

import EachDistributorDes from "./eachDistributorDetails"


export default function DistributorTabDetails({staticData}){
    
    return (
        <div>
           {staticData.map((eachDistTab)=>(
            <EachDistributorDes eachDetails={eachDistTab} key={eachDistTab.id}/>
           ))}
        </div>
        
    )
}