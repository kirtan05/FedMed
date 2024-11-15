import React, { useState, useContext } from 'react';
import { Card, StyledBody } from 'baseui/card';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { UserContext } from '../contexts/UserContext';
import api from '../services/api';
import { toaster } from 'baseui/toast';
import { Tooltip } from 'baseui/tooltip';
import { Block } from 'baseui/block';

const SubmitModel = () => {
  const { user } = useContext(UserContext);
  const [walletId, setWalletId] = useState(user.walletId);
  const [hfUrl, setHfUrl] = useState('');
  const [datasetSize, setDatasetSize] = useState('');
    const [clientIndex, setClientIndex] = useState(user.clientIndex);
  const handleSubmit = async () => {
    try {
      const datasetSizeInt = parseInt(datasetSize, 10);
      const clientIndexInt = parseInt(clientIndex,10);
      console.log(clientIndexInt);
      if (isNaN(datasetSizeInt) || datasetSizeInt <= 0) {
        toaster.negative('Dataset size must be a positive integer.', {
          autoHideDuration: 5000, // Disappear after 5 seconds
        });
        return;
      }
  
      const payload = {
        walletid: walletId,
        hf_url: hfUrl,
        dataset_size: datasetSizeInt,
        client_index: clientIndexInt,
      };
  
      await api.post('/submit-model', payload);
  
      toaster.positive('Model submitted successfully!', {
        autoHideDuration: 3000, // Disappear after 3 seconds
      });
    } catch (error) {
      console.error(error);
      toaster.negative('Submission error.', {
        autoHideDuration: 4000, // Disappear after 4 seconds
      });
    }
  };

  return (
    <Card>
      <StyledBody>
        <h2>Submit Trained Model</h2>
        <Block marginBottom="20px">
          <Tooltip content="Your Wallet ID">
            <Input
              value={walletId}
              onChange={(e) => setWalletId(e.target.value)}
              placeholder="Wallet ID"
            />
          </Tooltip>
        </Block>
        <Block marginBottom="20px">
          <Tooltip content="Enter the Hugging Face model URL">
            <Input
              value={hfUrl}
              onChange={(e) => setHfUrl(e.target.value)}
              placeholder="Hugging Face Model URL"
            />
          </Tooltip>
        </Block>
        <Block marginBottom="20px">
          <Tooltip content="Dataset size in bytes">
            <Input
              value={datasetSize}
              onChange={(e) => setDatasetSize(e.target.value)}
              placeholder="Dataset Size (bytes)"
              type="number"
            />
          </Tooltip>
        </Block>

        <Button onClick={handleSubmit}>Submit</Button>
      </StyledBody>
    </Card>
  );
};

export default SubmitModel;
