import axios from 'axios';

const BASE_URL = "http://localhost:3000"
const PLANETS = '/planets/'

const planet = {
  getAll: async function () {
    try {
      const resp = await axios.get(BASE_URL + PLANETS)
      return resp.data.planets
    } catch (e) {
      console.log(e)
    }
  },
  getOne: async function (id) {
    try {
      const resp = await axios.get(BASE_URL + PLANETS + id)
      return resp.data.planet
    } catch (e) {
      console.log(e)
    }
  },
  post: async function (data) {
    try {
      const resp = await axios.post(BASE_URL + PLANETS, data)
      return resp.data.planet
    } catch (e) {
      console.log(e)
    }
  },
  put: async function (id, data) {
    try {
      const resp = await axios.put(BASE_URL + PLANETS + id, data)
      return resp.data.planet
    } catch (e) {
      console.log(e)
    }
  },
  delete: async function (id) {
    try {
      const resp = await axios.delete(BASE_URL + PLANETS + id)
      return resp.data.planet
    } catch (e) {
      console.log(e)
    }
  }
}

export {
  planet
}
