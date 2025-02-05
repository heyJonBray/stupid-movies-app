import { useSetAtom } from 'jotai';
import { uiAtom } from '../state';
import Overlays from './Overlays';

const Navbar = () => {
  const setUi = useSetAtom(uiAtom);
  return (
    <>
      <Overlays />
      <div className="bg-gradient-to-r from-[rgba(88,29,252,0.6)] to-[rgba(79,43,186,0.6)] w-full h-full flex items-center justify-left">
        <p
          className="text-white font-bold ml-5"
          onClick={() =>
            setUi((prev) => ({
              ...prev,
              modal: true,
            }))
          }
        >
          SMSP
        </p>
      </div>
    </>
  );
};

export default Navbar;
