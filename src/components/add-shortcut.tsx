import { Image } from "@nextui-org/react";

function AddShortcut() {
  return (
    <div className="flex w-[100px] h-[100px] p-2 justify-center rounded cursor-pointer hover:bg-slate-400">
      <div className="flex flex-col justify-center items-center gap-2 w-full h-[90px]">
        <Image
          className="w-12 h-12"
          alt="NextUI hero Image with delay"
          src="/plus.png"
        />
        <p className="text-white text-sm">Add shortcut</p>
      </div>
    </div>
  );
}

export default AddShortcut;
