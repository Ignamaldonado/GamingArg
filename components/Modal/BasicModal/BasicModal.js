import { Modal, Icon} from 'semantic-ui-react'

export default function BasicModal({showModal, setShowModal, title, children, ...rest}) {

    const onClose = () => setShowModal()

  return (
    <Modal className='basic-modal' open={showModal} onClose={onClose} {...rest}>
        <Modal.Header>
            <span>{title}</span> <Icon name="close" onClick={onClose} color="black"/>   
        </Modal.Header>
        <Modal.Content>
            {children}
        </Modal.Content>
    </Modal>
  )
}
