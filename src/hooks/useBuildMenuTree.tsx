import { useDispatch } from 'react-redux'
import { TMenuItem, toggleExpand } from '@/app/slices/asideMenuSlice.ts'
import useAppSelector from '@/hooks/state/useAppSelector.ts'

const buildTree = (items: TMenuItem[], parentId: string | null = null): TMenuItem[] =>
  items
    .filter((item) => item.parentId === parentId)
    .map((item) => ({
      ...item,
      children: buildTree(items, item.id),
    }))

const useBuildMenuTree = (): TMenuItem[] => {
  const dispatch = useDispatch()
  const menuItems = useAppSelector((state) => state.menu.items)

  const handleToggle = (id: string) => {
    dispatch(toggleExpand(id))
  }

  return (buildTree(menuItems) || []).map((item) => {
    if (item.children && item.children.length > 0) {
      return {
        ...item,
        onToggle: handleToggle,
      }
    }

    return item
  })
}

export default useBuildMenuTree
