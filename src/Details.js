import React from 'react'
import pet from '@frontendmasters/pet'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'

class Details extends React.Component {
  state = { loading: true }

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      const { address } = animal.contact
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${address.city}, ${address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      })
      // eslint-disable-next-line
    }, console.error)
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>
    }

    const { animal, breed, location, description, name, media } = this.state
    return (
      <div className='details'>
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
}
