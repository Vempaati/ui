'use client'

import React, { PropsWithChildren } from 'react'

import { customClassSwitcher } from '~/core'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: string
  customRootClass?: string
}

export interface HeadingType {
  label: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const RENDER_AS_ENUMS = [
  {
    label: 'H1',
    tag: 'h1'
  },
  {
    label: 'H2',
    tag: 'h2'
  },
  {
    label: 'H3',
    tag: 'h3'
  },
  {
    label: 'H4',
    tag: 'h4'
  },
  {
    label: 'H5',
    tag: 'h5'
  },
  {
    label: 'H6',
    tag: 'h6'
  }
] as HeadingType[]

const Heading = ({
  children,
  as,
  customRootClass = '',
  className = '',
  ...props
}: PropsWithChildren<HeadingProps>) => {
  const rootClass = customClassSwitcher(customRootClass, as || 'h1')

  const item = RENDER_AS_ENUMS.find((item) => item.tag === as)
  if (as && item) {
    const { tag: Tag } = item
    return (
      <Tag className={`${rootClass} ${className}`} {...props}>
        {children}
      </Tag>
    )
  }
  return (
    <h1 className={`${rootClass} ${className}`} {...props}>
      {children}
    </h1>
  )
}
Heading.displayName = 'Heading'

export default Heading
