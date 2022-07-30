import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InfoModal from './InfoModal';



export default function NestedModal(props) {
  const {open,handleClose,cid}=props;

  return (
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box>
  
     <InfoModal handleClose={handleClose} cid={cid}></InfoModal>
  </Box>
</Modal>

  );
}