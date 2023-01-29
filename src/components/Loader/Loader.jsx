import React from 'react'
import { RaceBy } from '@uiball/loaders'
import "./loader.css"


function Loader() {
  return (
<div className="cargando" aling="center">
<RaceBy 
 size={250}
 lineWeight={10}
 speed={1.4} 
 color="blue" 
/>
</div>)}

export default Loader
