import React,{useState} from 'react'
import {Dropdown as Drop,DropdownMenu,DropdownItem,DropdownToggle} from 'reactstrap'

function Dropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  return (
    <Drop
      isOpen={dropdownOpen}
      toggle={() => setDropdownOpen(!dropdownOpen)}
      className ="mr-2"
    >
      <DropdownToggle caret>Filtrar</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Los mas nuevos primero</DropdownItem>
        <DropdownItem>Los mas viejos primero</DropdownItem>
      </DropdownMenu>
    </Drop>
  );
}

export default Dropdown
