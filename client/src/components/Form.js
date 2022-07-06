import React from 'react'
import { Input } from './Input'
import './Form.css'

export const Form = () => {
  return (
    <form className="place-form">
      <Input         
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title." />
    </form>
  )
}
