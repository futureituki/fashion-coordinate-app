export interface User {
  uid: number
  name: string
  email: string
  image: string
  cordes: Array<{
    title: string
    body: string
    src: string[]
    categories: string[]
  }>
}
