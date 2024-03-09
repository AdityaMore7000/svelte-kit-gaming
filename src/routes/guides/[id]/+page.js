import { error } from '@sveltejs/kit'
export async function load({ params, fetch }) {
  const {id} = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const guide = await res.json()
    if (res.ok) {
      return {
        guide
    }
  }
    return error(res.status,{message: guide.message})
}