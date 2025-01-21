import React, { PropsWithChildren } from 'react'
import styles from './MainLayoutStyles.module.css'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <main className={styles.main}>{children}</main>
)

export default MainLayout
