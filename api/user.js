import { BASE_PATH } from '../utils/constants'

export async function RegisterAPI(FormData) {
  try {
    const url = `${BASE_PATH}/auth/local/register`
    const params = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(FormData)
    }
    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function LoginApi(formData) {
  try {
    const url = `${BASE_PATH}/auth/local/`
    const params = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }
    const response = await fetch (url, params)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}
