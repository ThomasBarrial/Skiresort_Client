import React, { Dispatch, SetStateAction } from 'react'
import { useMutation } from 'react-query'
import { resort } from '../Api/request'
import useModal from '../hook/useModal'
import Modal from './Questions/Modal'

interface IProps {
  oneResort: IResort
  key: number
  setResortId: Dispatch<SetStateAction<number | undefined>>
}

function UniqueResort({ oneResort, key, setResortId }: IProps): JSX.Element {
  const handleClick = () => {
    setResortId(oneResort.Id)
  }
  const { isModal, setIsModal, message, setMessage } = useModal()

  const { mutate, error } = useMutation(() => resort.delete(oneResort.Id), {
    onSuccess: () => {
      setIsModal(true)
      setMessage('Resort succesfuly deleted')
    },
  })

  return (
    <div key={key} className="flex border-b border-darkBlue items-end pb-3">
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
      <p className="font-Anton font-bold text-darkBlue w-full text-2xl mt-10">{oneResort.name}</p>
      <button
        onClick={handleClick}
        className="bg-darkBlue focus:outline-none shadow-buttonShadow text-white font-bold rounded-md h-8 py-1 px-6 mr-10"
      >
        Update
      </button>
      <button
        onClick={() => mutate()}
        className="bg-red-400 focus:outline-none shadow-buttonShadow text-white font-bold rounded-md h-8 py-1 px-6 mr-5 "
      >
        Delete
      </button>
    </div>
  )
}

export default UniqueResort
