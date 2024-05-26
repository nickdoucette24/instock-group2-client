import { useRef } from 'react';
import './DeleteInventoryModal.scss';

const DeleteInventoryModal = () => {

  const dialogRef = useRef(null);

  const showModal = () => {
    dialogRef.current.showModal();
  }

  return (
    <dialog ref={dialogRef}>
      content
    </dialog>
  );
};

export default DeleteInventoryModal;