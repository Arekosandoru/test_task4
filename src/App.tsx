import '@/app.css'
import '@/index.css'
import AppLayout from '@/layout/appLayout/AppLayout.tsx'
import AsideContainer from '@/containers/aside/AsideContainer.tsx'
import MainContainer from '@/containers/main/MainContainer.tsx'
import GlobalModalsContainer from '@/containers/globalModals/GlobalModalsContainer.tsx'

const App = () => (
  <AppLayout>
    <AsideContainer />
    <MainContainer />
    <GlobalModalsContainer />
  </AppLayout>
)

export default App
