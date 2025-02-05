import Overlays from './Overlays';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Overlays isOpen={isOpen} />
      <div className="bg-gradient-to-r from-[rgba(88,29,252,0.6)] to-[rgba(79,43,186,0.6)] w-full h-full flex items-center justify-left">
        <p className="text-white font-bold ml-5" onClick={() => {}}>
          SMSP
        </p>
      </div>
    </>
  );
};

export default Navbar;
