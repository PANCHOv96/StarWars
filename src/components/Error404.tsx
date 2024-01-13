import { noResult } from '../mocks/not-results'

export function Error404 () {
  return (
        <>
            {noResult?.detail}
        </>
  )
}
