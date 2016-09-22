import component from '../../component'
import browser from 'detect-browser'
import { browserHistory } from 'react-router'

const idFn = _ => _

export default function createStoreDecorator(Store, { singleton, Component } = {}) {
  return (config = idFn) => {
    const propGetter = config.getProps || config

    return Child => {
      @component class StoreDecorator {
        componentWillReceiveProps(nextProps) {
          if (this.store.onProps) {
            this.store.onProps(propGetter(nextProps))
          }
        }

        componentDidMount() {
          if (this.store.onMount) {
            this.store.onMount(propGetter(this.props))
          }
          if (this.store.onProps) {
            this.store.onProps(propGetter(this.props))
          }
        }

        componentWillMount() {
          const propName = config.prop || Store.propName || Component.propName

          const store = singleton ? Store : new Store(propGetter(this.props))
          let storeProps

          if (propName) {
            // pass entire store as propName
            storeProps = { [propName]: store }
          }
          else {
            const provideProps = config.provideProps || Store.provideProps || Component && Component.provideProps

            if (provideProps) {
              // fetch individual props off store
              storeProps = provideProps.reduce((acc, cur) => ({ ...acc, [cur]: store[cur] }), {})
            }
          }

          this.store = store
          this.storeProps = storeProps
          this.listenForRoutes()
        }

        listenForRoutes() {
          if (this.store.onRoute) {
            this.historyListener = browserHistory.listen(({ pathname }) => {
              this.store.onRoute(pathname)
            })
          }
        }

        render() {
          return (
            <Child
              {...this.props}
              {...this.storeProps}
            />
          )
        }

        componentWillUnmount() {
          if (this.store && this.store.dispose) {
            this.store.dispose()
          }

          if (this.historyListener) {
            this.historyListener()
          }
        }
      }

      if (browser.name !== 'safari') {
        Object.defineProperty(StoreDecorator, 'name', {
          get() {
            return Store.name || Store.propName
          },
        })
      }

      return StoreDecorator
    }
  }
}
