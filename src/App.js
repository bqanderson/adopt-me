import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1 id='somthing-important'>Adopt Me!</h1>
      <Pet name='Fiona' animal='Dog' breed='Apple head chihuahua' />
      <Pet name='Sammy' animal='Dog' breed='Deer head chihuahua' />
      <Pet name='Dionk' animal='Cat' breed='Mixed' />
    </div>
  )
}

render(<App />, document.getElementById('root'))
