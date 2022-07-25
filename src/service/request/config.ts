let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://httpbin.org/get'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org/get'
} else {
  BASE_URL = 'http://httpbin.org/get'
}

export { BASE_URL, TIME_OUT }
