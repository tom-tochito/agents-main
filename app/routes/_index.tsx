import { redirect } from 'react-router'
import type { LoaderFunction } from 'react-router'

export const loader: LoaderFunction = async () => {
  return redirect('/agents')
}