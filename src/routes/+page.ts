import type { AgeEstimate } from '../types/AgeEstimate'
import type { PageLoad } from './$types'

export const prerender = true
export const load: PageLoad = async ({ fetch, url }) => {
  const name = url.searchParams.get('name') ?? ''
  if (name) {
    const nameApi = await fetch(`https://api.agify.io?name=${encodeURI(name)}`)
    const estimatedAge: AgeEstimate = await nameApi.json()
    return estimatedAge
  }
}
