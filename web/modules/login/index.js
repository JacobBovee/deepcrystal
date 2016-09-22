import component from '../../component'
import Logo from '../../views/logo'
import LoginStore from './store'

@LoginStore.provide()
@component
export default class Login {
  state = {
    buttonHover: false,
  }

  toggleButtonHover = () => {
    this.setState({ buttonHover: !this.state.buttonHover })
  }

  submit = (e) => {
    const { auth } = this.props

    e.preventDefault()
    auth.login(this.refs.username.value, this.refs.password.value)
  }

  render() {
    const { buttonHover } = this.state

    return (
      <login>
        <Logo size={50} />
        <space>
          <label htmlFor="username" style={{ marginTop: -30 }}>Username</label>
          <input ref="username" name="username" type="text" placeholder="Username" />
          <label htmlFor="password" style={{ marginTop: 15 }}>Password</label>
          <input ref="password" name="password" type="password" placeholder="Password" />
          <button onClick={this.submit} $buttonPop={buttonHover} onMouseLeave={this.toggleButtonHover} onMouseOver={this.toggleButtonHover}>Login</button>
        </space>
        <logos>
          <img src="nvidia.png" alt="presentation" />
          <img src="torch-logo.png" alt="presentation" />
        </logos>
      </login>
    )
  }

  static style = {
    login: {
      display: 'flex',
      flex: 1,
      height: '100%',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    space: {
      flex: 1,
      width: '100%',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    label: {
      color: 'rgba(255, 255, 255, 0.7)',
      letterSpacing: 2,
      fontWeight: 100,
      textTransform: 'uppercase',
    },
    input: {
      margin: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 6,
      padding: 3,
      fontSize: 15,
      width: '30%',
      border: [2, 'rgba(0, 0, 0, 0.1)', 'solid'],
      color: 'rgba(255, 255, 255, 0.8)',
      letterSpacing: 2,
    },
    button: {
      backgroundColor: 'rgba(73,206,203,0.4)',
      border: [1, 'rgba(73,206,203,0.2)', 'solid'],
      color: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 5,
      padding: [8, 18],
      fontSize: 14,
      marginTop: 14,
      outline: 0,
    },
    buttonPop: {
      backgroundColor: 'rgba(73,206,203,0.46)',
      border: [1, 'rgba(73,206,203,0.4)', 'solid'],
    },
    logos: {
      display: 'flex',
      flexFlow: 'row',
    },
    img: {
      height: 40,
      padding: 20,
    },
  }
}
