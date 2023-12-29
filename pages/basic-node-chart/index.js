import React, {useEffect, useState, Suspense} from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
/*
const NodeChartDynamic = React.lazy(()=> import('@components/check'), {
    ssr: false,
    });
*/
import dynamic from "next/dynamic";

const NodeChartDynamic = dynamic(() => import("@components/check"), {
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