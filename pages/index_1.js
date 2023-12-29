import React, {useEffect, useState, Suspense} from 'react'
/*
const NodeChartDynamic = React.lazy(()=> import('@/components/Graph/Miserables') );
*/
export default function index() {
  const [isLoaded, setIsLoaded]  = useState(false);
  
  useEffect(async () => {
    // Client-side-only code

    setIsLoaded(true)
  })

  return (
    <>
    {isLoaded &&
     <Suspense fallback={<div>Loading...</div>}>
       <NodeChartDynamic />
     </Suspense>
    }
    </>
  )
}