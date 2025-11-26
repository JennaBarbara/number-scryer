import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import Button from './button'

export default function GameModeSelect(){


  return (
<Menu>
      <MenuButton className="focus-visible:outline-0"><Button size="sm">Game Mode</Button></MenuButton>
      <MenuItems anchor="bottom" className="mt-1 outline-0 border-2 rounded-md bg-stone-200 divide-solid divide-y-2">
        <MenuItem>
          <a className="p-2 block data-focus:bg-white " href="https://jennabarbara.github.io/number-pyle/">
            Number Pyle
          </a>
        </MenuItem>
        <MenuItem>
          <a className="p-2 block data-focus:bg-white" href="https://jennabarbara.github.io/number-pyre/">
             Number Pyre
          </a>
        </MenuItem>
        <MenuItem>
          <a className="p-2 block data-focus:bg-white" href="https://jennabarbara.github.io/number-scryer/">
             Number Scryer
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  
  )
}