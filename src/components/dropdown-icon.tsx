import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IconMoreVert } from "./icon-more-vert";

function DropdownIcon() {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <IconMoreVert className="text-white" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="settings">Edit shortcut</DropdownItem>
        <DropdownItem key="team_settings">Remove</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownIcon;
