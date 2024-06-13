import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

function DropdownIcon() {
  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="/more.png"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="settings">Edit shortcut</DropdownItem>
          <DropdownItem key="team_settings">Remove</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default DropdownIcon;
