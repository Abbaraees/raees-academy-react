export default class RaeesAcademyApiClient {
  constructor() {
    this.base_url = 'http://127.0.0.1:5000'
  }

  async request(options) {
    let query = new URLSearchParams(options.query || {}).toString()

    if (query != '') {
      query = '?' + query
    }

    let response 

    try {
      response = await fetch(this.base_url + options.url + query, {
        method: options.method,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        body: options.body ? JSON.stringify(options.body) : null
      })
      
    } catch (error) {
      response = {
        ok: false,
        status: 500,
        json: async () => { return {
          code: 500,
          message: 'The server is unresponsive',
          description: error.toString()
        }}
      }
    }

    return {
      ok: response.ok,
      status: response.status,
      body: response.status != 204 ? await response.json() : null
    }
  }

  get(url, query, options) {
    return this.request({method: 'GET', url, query, ...options})
  }

  post(url, body, options) {
    return this.request({method: 'POST', url, body, ...options})
  }

  put(url, body, options) {
    return this.request({method: 'PUT', url, body, ...options})
  }

  delete(url, options) {
    return this.request({method: 'DELETE', url, ...options})
  }
}