export default function ({ store, redirect}) {
    if (!store.state.authenticated.user) {
        return redirect('/')
    }
  }