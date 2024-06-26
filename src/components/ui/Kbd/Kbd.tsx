'use client'

import React, { PropsWithChildren } from 'react'
import { customClassSwitcher } from '~/core'

const COMPONENT_NAME = 'Kbd'

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  customRootClass?: string
}

const Kbd = ({
  children,
  customRootClass,
  className,
  ...props
}: PropsWithChildren<KbdProps>) => {
  const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME)
  return (
    <kbd className={`${rootClass} ${className}`} {...props}>
      {children}
    </kbd>
  )
}

export default Kbd
