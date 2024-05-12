import { Dialog, DialogContent } from "@/components/ui/dialog";
import { UIModalProps } from "@/interfaces/widgetInterfaces";

export function UIModal({ isOpen, onClose, children }: UIModalProps) {
  return (
    <Dialog onOpenChange={onClose} open={isOpen} modal>
      <DialogContent className="sm:max-w-[525px] text-black">{children}</DialogContent>
    </Dialog>
  );
}

export default UIModal;
