import React, {useEffect, useState, Suspense} from 'react'
import dynamic from "next/dynamic";

const NodeChartDynamic = dynamic(() => import("@components/miserables"), {
ssr: false,
});


export default function index() {
  const [isLoaded, setIsLoaded]  = useState(false);
  

  return (
    <>
    {
     <Suspense fallback={<div>Loading...</div>}>
       <NodeChartDynamic />
     </Suspense>
    }
    </>
  )
}