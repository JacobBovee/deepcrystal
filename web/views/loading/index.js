import component from '../../component'

@component
export default class Loading {

  render() {
    return (
      <loading>
        <img src="loader-1.svg" alt="loading" />
      </loading>
    )
  }

  static style = {
    loading: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  }
}
