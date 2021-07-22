import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from './inputs/TextInput'

function Formulaire() {
  const { register, watch, setValue } = useForm()
  return (
    <div>
      <form action="">
        <TextInput label={'name'} name={'name'} placeholder={'name'} register={register} />
      </form>
    </div>
  )
}

export default Formulaire
