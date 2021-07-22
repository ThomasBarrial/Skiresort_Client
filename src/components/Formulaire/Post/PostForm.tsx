import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { resort } from '../../../Api/request'
import TextAreaInput from './inputs/TextAreaInput'
import TextInput from './inputs/TextInput'

function PostForm() {
  const { register, watch, handleSubmit } = useForm()

  const { mutate } = useMutation(resort.post)

  return (
    <div className="py-5 px-7">
      <h1 className="text-darkBlue font-Open font-bold text-3xl">Create a new resort</h1>
      <form action="" onSubmit={handleSubmit((resortData: IResort) => mutate({ resortData }))}>
        <TextInput label={'Resort Name'} name={'name'} register={register} />
        <TextAreaInput label={'Resort Description'} name={'Description'} register={register} />
        <TextInput label={'Url SiteWeb'} name={'siteWeb'} register={register} />
        <TextInput label={'Url SnowForecast'} name={'condition'} register={register} />
        <TextInput label={'Url Image'} name={'images'} register={register} />
        <label className="flex text-darkBlue font-Open text-xl flex-col mt-5 font-bold">
          Selelect a massif
          <select
            {...register('massifID')}
            className="focus:outline-none h-10 text-white mt-1 bg-darkBlue bg-opacity-50 dark:bg-input shadow-buttonShadow  rounded-md py-1 px-2"
          >
            <option value={1}>Alpes</option>
            <option value={2}>Pyrénnées</option>
          </select>
        </label>
        <label className="flex text-darkBlue font-Open text-xl flex-col mt-5 font-bold">
          Selelect the resort's size
          <select
            {...register('scopeID')}
            className="focus:outline-none h-10 text-white mt-1 bg-darkBlue bg-opacity-50 dark:bg-input shadow-buttonShadow  rounded-md py-1 px-2"
          >
            <option value={1}>Big</option>
            <option value={2}>Small</option>
          </select>
        </label>
        <label className="flex text-darkBlue font-Open text-xl flex-col mt-5 font-bold">
          Select the type of the resort
          <select
            {...register('typeID')}
            className="focus:outline-none h-10 text-white mt-1 bg-darkBlue bg-opacity-50 dark:bg-input shadow-buttonShadow  rounded-md py-1 px-2"
          >
            <option value={1}>Family</option>
            <option value={2}>Athletic</option>
            <option value={3}>festiv</option>
          </select>
        </label>
        <TextInput label={'Altitude'} name={'Altitude'} register={register} />

        <button className="" type="submit">
          ok
        </button>
      </form>
    </div>
  )
}

export default PostForm
