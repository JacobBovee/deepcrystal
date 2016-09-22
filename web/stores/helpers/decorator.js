import event from 'disposable-event'
import { CompositeDisposable, Disposable, Emitter } from 'sb-event-kit'
import reactStore from './reactStore'

// @withStore decorator
export const withStore = reactStore

// @store decorator
export function store(Store, setDecorator = true) {
  class ProxyStore {
    emitter: Emitter;

    constructor(...parameters) {
      this.emitter = new Emitter()
      this.subscriptions = new CompositeDisposable()
      this.subscriptions.add(this.emitter)
      Store.apply(this, parameters)
    }

    subscribe(subscription) {
      const disposable = new Disposable(() => {
        this.subscriptions.remove(disposable)
        subscription.unsubscribe()
      })
      this.subscriptions.add(disposable)
      return disposable
    }

    dispose() {
      this.subscriptions.dispose()
      if (Store.prototype.dispose) {
        Store.prototype.dispose.call(this)
      }
    }

    addEvent = (...args) => {
      const e = event(...args)
      this.subscriptions.add(e)
      return e
    }
  }

  Object.defineProperty(ProxyStore, 'name', {
    get() {
      return Store.name
    },
  })

  // set static properties
  Object.keys(Store).forEach(staticProp => {
    ProxyStore[staticProp] = Store[staticProp]
  })

  Object.setPrototypeOf(ProxyStore.prototype, Store.prototype)
  if (setDecorator) {
    ProxyStore.provide = reactStore(ProxyStore)
  }

  return ProxyStore
}

store.singleton = (Component, props) => {
  const item = new (store(Component, false))(props)
  Component.prototype.provide = reactStore(item, { singleton: true, Component })
  return item
}
