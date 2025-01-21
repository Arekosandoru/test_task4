import { TMenuItem } from '@/app/slices/asideMenuSlice.ts'
import useAppSelector from '@/hooks/state/useAppSelector.ts'

const buildTree = (items: TMenuItem[], parentId: string | null = null): TMenuItem[] =>
  items
    .filter((item) => item.parentId === parentId)
    .map((item) => ({
      ...item,
      children: buildTree(items, item.id),
    }))

const useBuildMenuTree = (): TMenuItem[] => {
  const menuItems = useAppSelector((state) => state.menu.items)

  return buildTree(menuItems) || []
}

export default useBuildMenuTree
