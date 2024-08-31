import React, { forwardRef, ReactNode, useImperativeHandle, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface ReuseableDialogProps {
  title: string;
  children: ReactNode;
}

export type DialogHandle = {
  open: () => void;
  close: () => void;
};

const ReusableDialog = forwardRef<DialogHandle, ReuseableDialogProps>(({ title, children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="z-[9999] w-[85%] rounded-[5px] border">
        <DialogHeader className="text-gray-600">
          <DialogTitle className="text-primary font-semibold border-b pb-5 text-left">{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
});

export default ReusableDialog;
