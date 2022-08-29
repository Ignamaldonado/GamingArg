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
                    <h2>usuario</h2>
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
                <Menu.Item as='a'>
                    Playstation
                </Menu.Item>
            </Link>
            <Link href='xbox'>
                <Menu.Item as='a'>
                    Xbox
                </Menu.Item>
            </Link>
            <Link href='switch'>
                <Menu.Item as='a'>
                    Switch
                </Menu.Item>
            </Link>
        </Menu>
        </>
    )
}