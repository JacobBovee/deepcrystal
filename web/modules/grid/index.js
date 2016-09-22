import component from '../../component'
import Logo from '../../views/logo'
import Image from './image'

@component
export default class ImageGrid {

  render() {

    return (
      <imagegrid>
        <bar>
          <Logo
            style={{
              top: 'auto',
              left: '100px',
              position: 'absolute',
            }}
            size={20}
          />
          <select $first>
            <option value="909">Nothing to sort</option>
          </select>
          <select $last>
            <option value="909">None</option>
          </select>
        </bar>
        <grid>
          <div $row>
            <Image src={'1.jpg'} label={'0.987'} />
            <Image src={'2.jpg'} label={'0.964'} />
            <Image src={'3.jpg'} label={'0.954'} />
            <Image src={'4.jpg'} label={'0.949'} />
          </div>
          <div $row>
            <Image src={'5.jpg'} label={'0.987'} />
            <Image src={'6.jpg'} label={'0.964'} />
            <Image src={'7.jpg'} label={'0.954'} />
            <Image src={'8.jpg'} label={'0.987'} />
          </div>
          <div $row>
            <Image src={'5.jpg'} label={'0.987'} />
            <Image src={'6.jpg'} label={'0.964'} />
            <Image src={'7.jpg'} label={'0.954'} />
            <Image src={'8.jpg'} label={'0.987'} />
          </div>
          <div $row>
            <Image src={'9.jpg'} label={'0.987'} />
            <Image src={'10.jpg'} label={'0.964'} />
            <Image src={'11.jpg'} label={'0.954'} />
            <Image src={'12.jpg'} label={'0.987'} />
          </div>
          <div $row>
            <Image src={'13.jpg'} label={'0.987'} />
            <Image src={'14.jpg'} label={'0.964'} />
            <Image src={'15.jpg'} label={'0.954'} />
            <Image src={'16.jpg'} label={'0.987'} />
          </div>
          <div $row>
            <Image src={'17.jpg'} label={'0.987'} />
            <Image src={'18.jpg'} label={'0.964'} />
            <Image src={'19.jpg'} label={'0.954'} />
            <Image src={'20.jpg'} label={'0.987'} />
          </div>
          <div $row>
            <Image src={'21.jpg'} label={'0.987'} />
            <Image src={'22.jpg'} label={'0.964'} />
            <Image src={'23.jpg'} label={'0.954'} />
            <Image src={'24.jpg'} label={'0.987'} />
          </div>
          <div $row>
            <Image src={'25.jpg'} label={'0.987'} />
            <Image src={'26.jpg'} label={'0.964'} />
            <Image src={'27.jpg'} label={'0.954'} />
            <Image src={'28.jpg'} label={'0.987'} />
          </div>
          <div $row>
            <Image src={'29.jpg'} label={'0.987'} />
            <Image src={'30.jpg'} label={'0.964'} />
            <Image src={'31.jpg'} label={'0.987'} />
            <Image src={'32.jpg'} label={'0.964'} />
          </div>
          <div $row>
            <Image src={'33.jpg'} label={'0.987'} />
            <Image src={'34.jpg'} label={'0.964'} />
            <Image src={'35.jpg'} label={'0.987'} />
            <Image src={'36.jpg'} label={'0.964'} />
          </div>
          <div $row>
            <Image src={'37.jpg'} label={'0.987'} />
          </div>
        </grid>
      </imagegrid>
    )
  }

  static style = {
    bar: {
      display: 'flex',
      flex: 1,
      height: 40,
      width: '100%',
      backgroundColor: '#444',
      borderBottom: [2, 'rgba(0,0,0,0.2)', 'solid'],
      alignItems: 'center',
      justifyContent: 'flex-end',
      top: 0,
      left: 0,
      position: 'fixed',
      zIndex: 9999,
    },
    select: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 4,
      border: [1, 'rgba(0, 0, 0, 0.4)', 'solid'],
      color: 'rgba(0, 0, 0, 0.9)',
      fontSize: 15,
      padding: 2,
      top: 'auto',
      left: '-40px',
      position: 'relative',
      paddingRight: 29,
    },
    first: {
      textAlign: 'center',
    },
    last: {
      justifySelf: 'flex-end',
      marginLeft: '2%',
    },
    imagegrid: {
      flex: 1,
    },
    grid: {
      paddingTop: 40,
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
      overflow: 'scroll',
      flex: 1,
    },
    row: {
      display: 'flex',
      flex: 1,
      width: '100%',
    },
  }
}
