import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@shadcn/components/ui/dialog';
import { useState } from 'react';

export function DialogImg({ src }: { src: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="cursor-pointer rounded-sm border ">
        <img src={src} alt="profile" />
      </DialogTrigger>
      <DialogContent
        className="p-0 overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(false)}
        closeButton={false}
      >
        <div>
          <img src={src} alt="profile" className="w-full" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
