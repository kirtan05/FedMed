import React, { useContext, useEffect } from 'react';
import { Card, StyledBody } from 'baseui/card';
import { UserContext } from '../contexts/UserContext';
import api from '../services/api';
import { Button } from 'baseui/button';
import { useNavigate } from 'react-router-dom';
import { toaster } from 'baseui/toast';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user balance from backend
    const fetchBalance = async () => {
      try {
        const response = await api.get('/get-balance', {
          params: { client_index: user.clientIndex },
        });
        setUser((prevState) => ({
          ...prevState,
          balance: response.data.balance,
        }));
      } catch (error) {
        console.error('Error fetching balance:', error);
        toaster.negative('Failed to fetch balance.', {autoHideDuration: 3000});
      }
    };

    fetchBalance();
  }, [user.clientIndex, setUser]);

  return (
    <Card>
      <StyledBody>
        <h1>Welcome, {user.walletId}</h1>
        <p>Current Balance: {user.balance} ETH </p>
        <Button onClick={() => navigate('/submit')}>Submit a Trained Model</Button>
      </StyledBody>
    </Card>
  );
};

export default Dashboard;
