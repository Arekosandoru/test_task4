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

/*
Вопросы которые возникли:
- какие тайминги у анимаций
- до конца не понятна логика центрирования текста в main компоненте, отступы отличаются в презентации и дизайнах
- как должен выглядеть процесс создания новых документов, дизайнов для этого нет
- какие есть ограничения при создании документа: длина названия, могут ли имени документов повторятся, какая максимальная возможная вложенность
Комментарии:
- у меня нет dev режима в figma, прошу не судить верстку строго
- раньше не работал с framer motion библиотекой, не знаю всех best practices, прошу не судить строго
*/
