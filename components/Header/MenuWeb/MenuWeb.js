import Auth from '../../Auth'
import { Container, Menu , Grid, Icon, Label } from 'semantic-ui-react'
import useActive from '../../../hooks/useActive'
import Link from 'next/link'
import BasicModal from '../../Modal/BasicModal'

export default function MenuWeb() {

    const showModal = useActive()

    const showForm = useActive()

  return (
    <div className='menu'>
        <Container>
            <Grid>
                <Grid.Column width={6} className='menu-left'>
                    <PlatformsMenu />
                </Grid.Column>
                <Grid.Column width={6} className='menu-right'>
                    <MenuOptions  setShowModal={showModal.setTrue}/>
                </Grid.Column>
            </Grid>
        </Container>
        <BasicModal showModal={showModal.active} setShowModal={showModal.setToggle} title={showForm.active ? 'Registrarse' : 'Inicia sesion'} size={'small'}>
            <Auth show={showForm.active} setShowModal={showModal.setToggle} setLogin={showForm.setFalse} setRegister={showForm.setTrue}/>
        </BasicModal>
    </div>
  )
}

function PlatformsMenu() {
    return (
        <>
        <Menu>
            <Link href='playstation'>
                <Menu.Item>
                    Playstation
                </Menu.Item>
            </Link>
            <Link href='xbox'>
                <Menu.Item>
                    Xbox
                </Menu.Item>
            </Link>
            <Link href='switch'>
                <Menu.Item>
                    Switch
                </Menu.Item>
            </Link>
        </Menu>
        </>
    )
}

function MenuOptions({setShowModal}) {
    return (
        <Menu>
            <Menu.Item className='account-menu' onClick={setShowModal}>
                <Icon name='user outline'/>
                Mi cuenta
            </Menu.Item>
        </Menu>
    )
}