import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import BG4 from '../../Assets/Modal.png'

interface Iprops {
  title: string
  buttons: IButton[]
  children: React.ReactNode
}

interface IButton {
  text: string
  handleClick?: (closeModal: () => void) => void
  backgroundColor?: string
  textColor?: string
}

function Modal({ title, buttons, children }: Iprops): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleClose = (): void => setIsOpen(false)
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="flex bg-white bg-opacity-80 justify-center items-center fixed inset-0"
    >
      <Dialog.Overlay className="fixed inset-0 z-50 " />

      <div
        className="p-5 w-6/12 shadow-buttonShadow  flex flex-col justify-start z-50 text-black bg-white rounded-md break-all"
        style={{
          backgroundImage: `url(${BG4})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
        }}
      >
        <Dialog.Title className="sm:text-2xl text-lg mb-1 font-bold">{title}</Dialog.Title>

        {children && <div className="mb-6 text-base">{children}</div>}

        <div className="flex">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`focus:outline-none h-8 px-6 ${index === 0 ? 'mr-2' : 'mx-2'} ${
                button.backgroundColor || 'text-white bg-darkBlue shadow-buttonShadow'
              } rounded-sm`}
              onClick={() => (button.handleClick ? button.handleClick(handleClose) : handleClose())}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </Dialog>
  )
}

export default Modal
