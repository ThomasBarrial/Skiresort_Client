import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import { resort } from '../../../Api/request'
import useModal from '../../../hook/useModal'
import Modal from '../../Questions/Modal'
import TextAreaInput from './inputs/TextAreaInput'
import TextInput from './inputs/TextInput'

function PostForm({ resortId }: { resortId?: number }) {
  const { register, handleSubmit, setValue } = useForm()
  console.log(resortId)
  const { isModal, setIsModal, message, setMessage } = useModal()
  const history = useHistory()

  const { data } = useQuery<IResort>(['resort', resortId], () => resort.getOne(resortId as number), {
    enabled: Boolean(resortId),
    onSuccess: data => {
      setValue('name', data.name)
      setValue('Description', data.Description)
      setValue('siteWeb', data.siteWeb)
      setValue('condition', data.condition)
      setValue('images', data.images)
      setValue('massifID', data.massifID)
      setValue('scopeID', data.scopeID)
      setValue('typeID', data.typeID)
      setValue('Altitude', data.Altitude)
    },
  })

  const { mutate: postResort, error: postError } = useMutation(resort.post, {
    onSuccess: () => {
      setIsModal(true)
      setMessage('the resort was succesfully upload')
    },
  })

  const { mutate: updateResort, error: putError } = useMutation(resort.put, {
    onSuccess: data => {
      setIsModal(true)
      setMessage('the resort was succesfully update')
      setValue('name', data.name)
      setValue('Description', data.Description)
      setValue('siteWeb', data.siteWeb)
      setValue('condition', data.condition)
      setValue('images', data.images)
      setValue('massifID', data.massifID)
      setValue('scopeID', data.scopeID)
      setValue('typeID', data.typeID)
      setValue('Altitude', data.Altitude)
    },
  })

  const onSubmit = (resortData: IResort) => {
    if (!resortId) return postResort({ resortData })
    updateResort({ id: resortId, resortData })
  }

  const error = postError || putError

  return (
    <div className="py-5 px-7">
      {isModal && (
        <Modal
          title="Every things geos well"
          buttons={
            !error
              ? [{ text: 'ok', handleClick: () => window.location.reload() }]
              : [{ text: 'New try', handleClick: () => setIsModal(false) }]
          }
        >
          {message}
        </Modal>
      )}
      <h1 className="text-darkBlue font-Open font-bold text-3xl">
        {resortId ? `Update ${data?.name}` : 'Create a new resort'}
      </h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <TextInput label={'Resort Name'} name={'name'} register={register} />
        <TextAreaInput label={'Resort Description'} name={'Description'} register={register} />
        <TextInput label={'Url SiteWeb'} name={'siteWeb'} register={register} />
        <TextInput label={'Url SnowForecast'} name={'condition'} register={register} />
        <TextInput label={'Url Image'} name={'images'} register={register} />
        <label className="flex text-darkBlue font-Open text-xl flex-col mt-5 font-bold">
          Select a massif
          <select
            {...register('massifID')}
            className="focus:outline-none h-10 text-white mt-1 bg-darkBlue bg-opacity-50 dark:bg-input shadow-buttonShadow  rounded-md py-1 px-2"
          >
            <option value={1}>Alpes</option>
            <option value={2}>Pyrénnées</option>
          </select>
        </label>
        <label className="flex text-darkBlue font-Open text-xl flex-col mt-5 font-bold">
          Select the resort's size
          <select
            {...register('scopeID')}
            className="focus:outline-none h-10 text-white mt-1 bg-darkBlue bg-opacity-50 dark:bg-input shadow-buttonShadow  rounded-md py-1 px-2"
          >
            <option value={1}>Big</option>
            <option value={3}>Small</option>
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

        <button
          className="bg-darkBlue w-6/12 mt-5 focus:outline-none shadow-buttonShadow text-white font-bold rounded-md h-8 py-1 px-6 mr-10"
          type="submit"
        >
          ok
        </button>
      </form>
    </div>
  )
}

export default PostForm
