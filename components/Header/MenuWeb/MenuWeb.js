import { Container, Menu , Grid, Icon, Label } from 'semantic-ui-react'
import Link from 'next/link'

export default function MenuWeb() {
  return (
    <div className='menu'>
        <Container>
            <Grid>
                <Grid.Column width={6} className='menu-left'>
                    <PlatformsMenu />
                </Grid.Column>
                <Grid.Column width={6} className='menu-right'>
                    <MenuOptions />
                </Grid.Column>
            </Grid>
        </Container>
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

function MenuOptions() {
    return (
        <Menu>
            <Menu.Item className='account-menu'>
                <Icon name='user outline'/>
                Mi cuenta
            </Menu.Item>
        </Menu>
    )
}