import React, { PropsWithChildren } from 'react'
import Popper from '~/components/tools/Popper/Popper'

// TODO: fix any
export interface DropdownProps extends PropsWithChildren {
  label: string
  list: { value: any; label: string }[]
  selected?: any
  onSelect: () => void
}

const Dropdown = ({ list = [] }: DropdownProps) => {
  const PopElem = () => {
    return (
      <ul className="bg-white px-2 py-2 shadow-lg rounded-md">
        {list.map((item, index) => {
          return <li key={index}>{item.value}</li>
        })}
      </ul>
    )
  }
  return (
    <div className="relative">
      <Popper
        open={false}
        placement="bottom-start"
        popperName="dropdown"
        pop={<PopElem />}
      >
        <span>Dropdown</span>
      </Popper>
    </div>
  )
}

export default Dropdown
