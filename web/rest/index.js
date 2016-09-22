
export default class RestPoints {
  login = async (username, pass) => {
    const headers = new Headers({
      "Content-Type": "application/json",
    })

    const login = {
      method: 'POST',
      mode: 'cors',
      body: `{"username": "${username}", "password": "${pass}"}`,
      headers,
    }

    return await fetch('http://52.53.224.237:5000/auth', login).then(async response => {
      const r = await response.text()
      return JSON.parse(r)
    })
  }

  alive = () => {
    const healthCheck = {
      mode: 'cors',
      method: 'GET',
    }

    return fetch('http://52.53.224.237:5000/healthz', healthCheck).then(async response => {
      const r = await response.text()
      return JSON.parse(r)
    })
  }
}
