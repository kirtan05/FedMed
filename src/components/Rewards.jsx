// src/components/Rewards.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Card, StyledBody } from 'baseui/card';
import { Button } from 'baseui/button';
import WithdrawModal from './WithdrawModal';
import { UserContext } from '../contexts/UserContext';
import api from '../services/api';
import { toaster } from 'baseui/toast';
const Rewards = () => {
  const { user, setUser } = useContext(UserContext);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);


  useEffect(() => {
    // Fetch user balance from backend
    const fetchRewards = async () => {
      try {
        const response = await api.get('/get-reward', {
          params: { client_index: user.clientIndex },
        });
        console.log(response)
        setUser((prevState) => ({
          ...prevState,
         rewards: response.data.reward,
        }));
      } catch (error) {
        console.error('Error fetching reward:', error);
        toaster.negative('Failed to fetch reward.', {autoHideDuration: 3000});
      }
    };

    fetchRewards();
  }, [user.clientIndex, setUser]);

  return (
    <Card>
      <StyledBody>
        <h2>Your Rewards</h2>
        <p>Current Rewards: {user.rewards} Tokens</p>
        <Button onClick={() => setIsWithdrawOpen(true)}>Withdraw</Button>
        <WithdrawModal isOpen={isWithdrawOpen} onClose={() => setIsWithdrawOpen(false)} />
      </StyledBody>
    </Card>
  );
};

export default Rewards;