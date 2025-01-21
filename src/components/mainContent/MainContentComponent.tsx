import {
  ICON_BINOCULARS,
  ICON_DOTS_HORIZONTAL,
  ICON_LINK,
  ICON_STAR,
} from '@/constants/iconNames.ts'
import ButtonElement from '@/components/shared/buttonElement/ButtonElement.tsx'
import styles from './MainContentStyles.module.css'

// Простой шаблон, без логики

const MainContentComponent = () => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <div className={styles.updatedInfo}>Updated by You 20 Dec 2024</div>
      <div className={styles.icons}>
        <ButtonElement leftIconName={ICON_STAR} ariaLabel="add-to-favorite" />
        <ButtonElement leftIconName={ICON_BINOCULARS} ariaLabel="watch" />
        <ButtonElement leftIconName={ICON_LINK} ariaLabel="get-page-link" />
        <ButtonElement leftIconName={ICON_DOTS_HORIZONTAL} ariaLabel="additional-menu" />
      </div>
    </div>
    <div className={styles.content}>
      <h1 className={styles.header}>A Mysterious Convergence</h1>
      <p className={styles.paragraph}>
        Here, every shadow seemed to hold its own intent, yet no one dared to linger long enough to
        ask why.
      </p>
      <p className={styles.paragraph}>
        Beyond the horizon lay an endless field of mirrors, each reflecting a world that might never
        exist. Travellers often paused, gazing deeply as if the reflections would reveal their
        innermost secrets. The truth, however, remained elusive, slipping through their grasp like
        grains of sand.
      </p>
      <h2 className={styles.subheader}>An Intriguing Quandary</h2>
      <p className={styles.paragraph}>
        At the heart of the labyrinth stood a clock, ticking backward with an air of defiance. Its
        face bore no numbers, only shifting constellations that seemed to tell a story lost to time.
        Those who dared to watch too long often found themselves forgetting the very reason they had
        come.
      </p>
      <p className={styles.paragraph}>
        Rain fell in patterns too precise to be random, tracing maps that no one could read. The
        ground below shimmered with the faintest hint of laughter, a sound felt rather than heard.
        It was as if the earth itself conspired to keep its secrets, guarding them with a silence
        that spoke volumes.
      </p>
    </div>
  </div>
)

export default MainContentComponent
