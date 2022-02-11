const APP_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:4000' : 'https://app.thehandover.com'
const API_URL = 'https://handoverapi.herokuapp.com'

export {API_URL, APP_URL}