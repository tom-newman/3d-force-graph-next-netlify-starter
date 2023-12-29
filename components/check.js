import React from 'react'

import {  ForceGraph3D  } from 'react-force-graph';


// Random data
const N = 30;
const gData = {
  nodes: [...Array(N).keys()].map((i) => ({ id: i })),
  links: [...Array(N).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1))
    }))
};

export default function BasicNodeChart() {
  return (
    <ForceGraph3D
      backgroundColor={"rgba(0,0,0,0)"}
      nodeColor={() => "red"}
      linkColor={() => "blue"}
      graphData={gData}
    />
  );
}