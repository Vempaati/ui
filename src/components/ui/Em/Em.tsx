'use client'

import React, { PropsWithChildren } from 'react'
import { customClassSwitcher } from '~/core'

const COMPONENT_NAME = 'Em'

export interface EmProps extends PropsWithChildren {
  customRootClass?: string
  className?: string
}

const Em = ({ children, customRootClass, className, ...props }: EmProps) => {
  const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME)
  return (
    <em className={`${rootClass} ${className}`} {...props}>
      {children}
    </em>
  )
}

Em.displayName = COMPONENT_NAME

export default Em
