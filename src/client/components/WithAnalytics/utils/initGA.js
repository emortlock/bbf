import ReactGA from 'react-ga'

const debug = process.env.NODE_ENV === 'development'

export default () => {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize('UA-4371489-1', { debug })
    window.GA_INITIALIZED = true
  }
}
