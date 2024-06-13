import {
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

function AddShortcut() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex w-[100px] h-[100px] p-2 justify-center rounded cursor-pointer hover:bg-slate-400">
      <div className="flex flex-col justify-center items-center gap-2 w-full h-[90px]">
        <Button onPress={onOpen}>
          <Image
            className="w-12 h-12"
            alt="NextUI hero Image with delay"
            src="/plus.png"
          />
        </Button>
        <p className="text-white text-sm">Add shortcut</p>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add shortcut
              </ModalHeader>
              <ModalBody>
                <Input isReadOnly type="text" label="Name" variant="bordered" />
                <Input isReadOnly type="text" label="URL" variant="bordered" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddShortcut;
