'use client'

import React, { PropsWithChildren } from 'react'

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {}

const Code = ({ children }: PropsWithChildren<CodeProps>) => {
  return <code className="rui-code-root">{children}</code>
}

export default Code
