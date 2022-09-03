import { BASE_PATH } from '../utils/constants'

export async function RegisterAPI(FormData) {
  try {
    const url = `${BASE_PATH}/auth/local/register`
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(FormData)
    }
    const response = await fetch(url, params)
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.log(error)
    return null
  }
}
