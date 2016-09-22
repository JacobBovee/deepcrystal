import component from '../../component'
import Logo from '../../views/logo'
import FileDrop from 'react-file-drop'
import Loading from '../../views/loading'

@component
export default class Drop {
  state = {
    loading: false,
  }

  handleFileDrop = (file, e) => {
    this.setState({ loading: true })
    console.log('File is', file)
    setTimeout(() => { window.location.pathname = '/grid' }, 6000)
  }

  target = () => {
    console.log('target')
  }

  render() {
    const { loading } = this.state

    return (
      <div $primary className="my-uploader">
        <Logo size={50} />
        <div $secondary>
          <span $hide={!loading}>
            <Loading />
          </span>
          <span $hide={loading}>
            <img src="zip-light.png" alt="Drag your zip to upload to Deep Crystal" $mainZip />
            <h2>Drag your zip to upload to Deep Crystal</h2>
          </span>
        </div>
        {!loading &&
          <FileDrop frame={window} onDrop={this.handleFileDrop}>
            <img className="zip-file" src="zip.png" alt="Drop and upload to Deep Crystal" $dropZip />
            <dropZone>
              <h1>Drop and upload to Deep Crystal</h1>
            </dropZone>
          </FileDrop>
        }
      </div>
    )
  }

  static style = {
    primary: {
      width: '100%',
      minHeight: '100%',
      padding: 0,
      margin: 0,
      justifyContent: 'center',
      display: 'flex',
      flexFlow: 'column',
    },
    dropZone: {
      width: '80%',
      height: '33%',
      top: '40%',
      left: '10%',
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      border: [1, 'rgba(0, 0, 0, 0.8)', 'dashed'],
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    h1: {
      fontFamily: 'Roboto',
      fontSize: '4vw',
      alignItems: 'center',
      color: 'white',
      letterSpacing: '1px',
      padding: ['10%', 0],
    },
    dropZip: {
      width: '20%',
      position: 'fixed',
      top: '24%',
      left: '40%',
      zIndex: 999,
    },
    secondary: {
      display: 'flex',
      flex: 2,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexFlow: 'column',
      textAlign: 'center',
    },
    mainZip: {
      width: '30%',
      marginTop: 70,
      maxWidth: '240px',
      opacity: 0.3,
    },
    h2: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontSize: 35,
      letterSpacing: '2px',
      fontWeight: 100,
      color: 'rgba(255, 255, 255, 0.56)',
      width: '70%',
      paddingTop: '10%',
      margin: 'auto',
      lineHeight: 1.4,
      textShadow: '-1px 0 rgba(0, 0, 0, 0.2), 0 1px rgba(0, 0, 0, 0.2), 1px 0 rgba(0, 0, 0, 0.2), 0 -1px rgba(0, 0, 0, 0.2)',
    },
    hide: {
      display: 'none',
    },
  }
}
