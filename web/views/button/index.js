import component from '../../component'

@component
export default class Button {

  render() {
    const { children } = this.props

    return (
      <button>{children}</button>
    )
  }

  static style = {
    button: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  }
}
