import React from 'react'
import ButtonElement, { BUTTON_SIZE_LG } from '@/components/shared/buttonElement/ButtonElement.tsx'
import { ICON_BURGER, ICON_BURGER_COLLAPSED } from '@/constants/iconNames.ts'
import FadeInOut from '@/components/animations/FadeInOut.tsx'
import styles from './MenuHeaderStyles.module.css'

type TMenuHeaderProps = {
  isAsideExpanded: boolean
  onToggleAside: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

const MenuHeaderComponent = ({ onToggleAside, isAsideExpanded }: TMenuHeaderProps) => (
  <div className={styles.header}>
    <ButtonElement
      onClick={onToggleAside}
      size={BUTTON_SIZE_LG}
      leftIconName={isAsideExpanded ? ICON_BURGER : ICON_BURGER_COLLAPSED}
      ariaLabel="expand-aside"
    />
    <FadeInOut isVisible={isAsideExpanded}>
      <ButtonElement size={BUTTON_SIZE_LG} ariaLabel="company-profile-button">
        <div className={styles.spaceName}>
          <div className={styles.logo}>VA</div>
          <span className={styles.companyName}>ID Software</span>
        </div>
      </ButtonElement>
    </FadeInOut>
  </div>
)

export default MenuHeaderComponent
