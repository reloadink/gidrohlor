export async function onRequest({ request }) {
  const url = new URL(request.url)

  const proxyUrl = 'https://chestieludini.pro'
  const backendUrl = `${proxyUrl}${url.pathname}`

  const headers = new Headers(request.headers)
  headers.set('IP', headers.get('CF-Connecting-IP'))

  const response = await fetch(backendUrl, {
    method: request.method,
    headers: headers,
    body: request.body,
  })

  return response
}
