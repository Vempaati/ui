'use client'

import React, { PropsWithChildren } from 'react'

import { customClassSwitcher } from '~/core'

const COMPONENT_NAME = 'Link'

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  alt?: string
  customRootClass?: string
  target: string
}

// TODO: in the previous return value
// return <a href={href} alt={alt} className={`${rootClass} ${className}`} {...props}>{children}</a>;
// 'alt' prop does not exist on an anchor element
const Link = ({
  children,
  href = '#',
  alt,
  customRootClass,
  className,
  target,
  ...props
}: PropsWithChildren<LinkProps>) => {
  const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME)
  return (
    <a
      href={href}
      className={`${rootClass} ${className}`}
      target={target}
      {...props}
    >
      {children}
    </a>
  )
}

Link.displayName = COMPONENT_NAME

export default Link
