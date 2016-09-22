import component from '../../component'

@component
export default class Logo {

  render() {
    const { style, size } = this.props

    return (
      <logo style={{ ...style, fontSize: size }}><span $dull>Deep</span><span $colorful>Crystal</span></logo>
    )
  }

  static style = {
    logo: {
      fontFamily: 'Roboto',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      letterSpacing: '3px',
      fontWeight: 400,
      cursor: 'default',
    },
    span: {
      justifyContent: 'center',
    },
    dull: {
      color: 'rgba(255,255,255,0.56)',
    },
    colorful: {
      color: 'rgba(73,206,203,0.56)',
    },
  }
}
