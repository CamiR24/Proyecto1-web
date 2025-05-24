import React from 'react'
import OperationButton from './Operation'

export default {
  title: 'Components/OperationButton',
  component: OperationButton,
}

const Template = (args) => <OperationButton {...args} />

export const Division = Template.bind({})
Division.args = {
  operation: '/',
  onPress: (op) => alert(`Pressed: ${op}`),
  children: '/',
}

export const Modulo = Template.bind({})
Modulo.args = {
  operation: '%',
  onPress: (op) => alert(`Pressed: ${op}`),
  children: '%',
}