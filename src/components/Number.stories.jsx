import React from 'react'
import NumberButton from './Number'

export default {
  title: 'Components/NumberButton',
  component: NumberButton,
}

const Template = (args) => <NumberButton {...args} />

export const Zero = Template.bind({})
Zero.args = {
  number: 0,
  onPress: (n) => alert(`Número presionado: ${n}`)
}

export const Five = Template.bind({})
Five.args = {
  number: 5,
  onPress: (n) => console.log('Presionado:', n)
}

export const Nine = Template.bind({})
Nine.args = {
  number: 9,
  onPress: (n) => console.log('Presionado:', n)
}