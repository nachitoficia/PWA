if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("./cache.js")
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }