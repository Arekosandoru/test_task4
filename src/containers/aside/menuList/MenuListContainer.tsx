import useAppSelector from '@/hooks/state/useAppSelector.ts'
import useBuildMenuTree from '@/hooks/useBuildMenuTree.tsx'
import { MenuComponent } from '@/components/aside'

const MenuListContainer = () => {
  const { isExpanded } = useAppSelector((state) => state.aside)
  const items = useBuildMenuTree()

  return <MenuComponent items={items} isAsideExpanded={isExpanded} />
}

export default MenuListContainer
