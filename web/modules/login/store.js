import { store, observable, action } from '../../decorators'
import RestPoints from '../../rest'

const rest = new RestPoints()
@store.singleton
export default class LoginStore {
  static propName = 'auth'
  @observable attempt = true

  @action
  login = async (username, password) => {
    window.location.pathname = "/drop"
    const success = await rest.login(username, password)
    if (success.auth === 'success') {
      localStorage.setItem('username', username)
      window.location.pathname = "/drop"
    }
    else this.attempt = false
  }
}
