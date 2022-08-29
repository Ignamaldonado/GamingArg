import { Input } from 'semantic-ui-react'

import Link from 'next/link'

export default function Search() {
  return (
    <Input 
        id='search-game'
        icon={{ name: 'search' }}
        placeholder='busca tu juego'
    />
  )
}
