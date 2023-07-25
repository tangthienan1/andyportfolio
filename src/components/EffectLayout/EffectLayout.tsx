import React, { FC, ReactNode } from 'react'

type EffectLayoutType = {
    children: ReactNode
}

const EffectLayout:FC<EffectLayoutType> = ({children}) => {
  return (
    <div >{children}</div>
  )
}

export default EffectLayout