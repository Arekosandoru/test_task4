import React, { PropsWithChildren } from 'react'
import styles from './AppLayoutStyles.module.css'

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default AppLayout
