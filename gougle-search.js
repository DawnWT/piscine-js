const queryServers = async (serverName, q) => {
  return await Promise.race([getJSON(`/${serverName}?q=${q}`), getJSON(`/${serverName}_backup?q=${q}`)])
}

const gougleSearch = async (q) => {
  const timeout = new Promise((res) => { setTimeout(res, 80, 'timeout') })
  const res = await Promise.all([queryServers('web', q), queryServers('image', q), queryServers('video', q), timeout])

  return {
    web: res[0],
    image: res[1],
    video: res[2]
  }
}