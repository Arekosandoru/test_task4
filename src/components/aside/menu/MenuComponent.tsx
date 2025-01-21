import cn from 'classnames'
import { TMenuItem } from '@/app/slices/asideMenuSlice.ts'
import { MenuItemComponent } from '@/components/aside'
import styles from './MenuStyles.module.css'

type TMenuComponent = {
  items: TMenuItem[]
  isAsideExpanded: boolean
}

const MenuComponent = ({ items, isAsideExpanded }: TMenuComponent) => {
  return (
    <div
      className={cn(styles.menuContainer, {
        [styles.noHover]: !isAsideExpanded,
      })}
    >
      {items.map((item) => (
        <MenuItemComponent {...item} key={item.id} isAsideExpanded={isAsideExpanded} />
      ))}
    </div>
  )
}

export default MenuComponent
