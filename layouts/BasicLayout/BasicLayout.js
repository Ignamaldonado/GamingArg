import Header from '../../components/Header'
import { Container } from 'semantic-ui-react'

export default function BasicLayout({ children }) {
  return (
    <Container fluid className="basic-layout">
    <Header />
    <Container className='content'>
    {children}
    </Container>
    </Container>
  )
}
