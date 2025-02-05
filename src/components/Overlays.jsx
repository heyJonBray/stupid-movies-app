import { createPortal } from 'react-dom';
import { useAtom } from 'jotai';
import { uiAtom } from '../state';
import Modal from './Modal';

const mountElement = document.getElementById('overlays');

const Overlays = () => {
  const { ui } = useAtom(uiAtom);
  return createPortal(<>{ui.modal && <Modal />}</>, mountElement);
};

export default Overlays;
