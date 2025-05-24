import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button
}

export const TextoSimple = () => (
  <Button className='typewriter-key' onClick={() => alert('¡Click!')}>Click aquí</Button>
)

export const ConClaseExtra = () => (
  <Button className='typewriter-key' onClick={() => console.log('Botón especial')}>
    Especial
  </Button>
)
