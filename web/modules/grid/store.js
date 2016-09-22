import { store, observable, action } from '../../decorators'

@store.singleton()
export default class ImageGridStore {
  static propName = 'image'
  @observable images = []

  @action fetchImages = (file) => {
    console.log('File')
  }
}
