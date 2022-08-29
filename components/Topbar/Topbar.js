import { Container, Grid } from 'semantic-ui-react'
import Search from '../Search/Search'
import Link from 'next/link'

export default function Topbar() {
  return (
    <div className='top-bar'>
      <Container>
        <Grid className='top-bar'>
          <Grid.Column width={8} className='top-bar-left'>
              <Link href='/'>
              <a><h2 className='logo'>gaming<span>ARG</span></h2></a>
              </Link>
          </Grid.Column>
          <Grid.Column width={8} className='top-bar-right'>
              <Search />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}
