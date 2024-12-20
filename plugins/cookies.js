// plugins/cookies.js
import Cookies from 'js-cookie'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      cookies: Cookies,
    },
  }
})
