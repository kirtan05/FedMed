// src/components/History.jsx
import React, { useEffect, useState } from 'react';
import { Card, StyledBody } from 'baseui/card';
import { Table } from 'baseui/table';
import api from '../services/api';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch history data (Mock API Call)
    api.get('/history').then(response => {
      setHistory(response.data);
    });
  }, []);

  return (
    <Card>
      <StyledBody>
        <h2>Model Submission History</h2>
        <Table
          columns={['Date', 'Model', 'Status']}
          data={history.map(item => [item.date, item.model, item.status])}
        />
      </StyledBody>
    </Card>
  );
};

export default History;