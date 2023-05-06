export const useCustomFetch = (
  request,
  opts = {
    credentials: 'include',
    method: 'GET',
  }
) => {
  const config = useRuntimeConfig()
  opts.credentials = 'include' // cookieは必ず送る
  return useFetch(request, { baseURL: 'http://localhost:8080', ...opts })
}
