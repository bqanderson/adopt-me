import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Fiona',
      animal: 'Dog',
      breed: 'Apple head chihuahua',
    }),
    React.createElement(Pet, {
      name: 'Sammy',
      animal: 'Dog',
      breed: 'Dear head chihuahua',
    }),
    React.createElement(Pet, {
      name: 'Dionk',
      animal: 'Cat',
      breed: 'Mixed',
    }),
  ])
}

render(React.createElement(App), document.getElementById('root'))
