const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ])
}

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

ReactDOM.render(React.createElement(App), document.getElementById('root'))
