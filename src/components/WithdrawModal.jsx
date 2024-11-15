// src/components/WithdrawModal.jsx
import React, { useContext } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'baseui/modal';
import { Button } from 'baseui/button';
import { UserContext } from '../contexts/UserContext';
import api from '../services/api';
import { toaster } from 'baseui/toast';

const WithdrawModal = ({ isOpen, onClose }) => {
  const { user, setUser } = useContext(UserContext);

  const handleWithdraw = async () => {
    try {
        const response = await api.get('/withdraw', {
            params: { client_index: user.clientIndex },
          });
      setUser((prevState) => ({ ...prevState, rewards: 0 }));
      toaster.positive('Withdrawal successful!', {autoHideDuration: 3000});
      onClose();
    } catch (error) {
      toaster.negative('Withdrawal failed.', {autoHideDuration: 3000});
    }
  };
  

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalHeader>Withdraw Rewards</ModalHeader>
      <ModalBody>
        Are you sure you want to withdraw {user.rewards} Tokens?
      </ModalBody>
      <ModalFooter>
        <Button kind="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleWithdraw}>Confirm</Button>
      </ModalFooter>
    </Modal>
  );
};

export default WithdrawModal;