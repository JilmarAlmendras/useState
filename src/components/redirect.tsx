import { Image } from "@nextui-org/react";
import DropdownIcon from "./dropdown-icon";

function Redirect() {
  return (
    <div className="flex w-[100px] h-[100px] pt-2 pl-2 pb-2 justify-end rounded cursor-pointer hover:bg-slate-400">
      <div className="flex flex-col justify-center items-center gap-1 w-[60px] h-[90px]">
        <Image
          className="w-12 h-12"
          alt="NextUI hero Image with delay"
          src="/youtube.png"
        />
        <p className="text-white">Youtube</p>
      </div>
      <DropdownIcon />
    </div>
  );
}

export default Redirect;
