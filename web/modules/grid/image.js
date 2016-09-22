import component from '../../component'

@component
export default class Image {
  render() {
    const { src, label } = this.props

    return (
      <image>
        <img src={src || 'crystal.png'} role="presentation" />
        <label>{label || '0.00'}</label>
      </image>
    )
  }
  static style = {
    image: {
      display: 'flex',
      flex: 1,
      flexFlow: 'row',
      minWidth: 150,
      maxWidth: 300,
      height: 240,
      position: 'relative',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      margin: [12, 10],
    },
    img: {
      flex: 1,
      width: '100%',
      height: 'auto',
      overflow: 'hidden',
    },
    label: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      width: '100%',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 23,
      padding: [6, 0]
    },
  }
}
