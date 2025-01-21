import React, { Suspense } from 'react'

const AsyncComponent = React.lazy(() => import('./MenuListContainer'))

const AsyncMenuListContainer = () => (
  <Suspense fallback={<></>}>
    <AsyncComponent />
  </Suspense>
)

export default AsyncMenuListContainer
