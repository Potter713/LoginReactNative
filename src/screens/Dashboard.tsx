import React, { memo, useState, useEffect } from 'react';
import Background from '../components/Background';
import { Navigation } from '../types';

import { Title } from 'react-native-paper';
import { DataTable } from 'react-native-paper';

import api from '../config/api.js';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('companies');
      setData(response.data.companies);
    }
    fetchData();
  }, []);

  return (
    <Background>

      <Title>Universidades</Title>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title numeric>Boos</DataTable.Title>
        </DataTable.Header>

        {data.map(company => (
          <DataTable.Row key={company._id}>
            <DataTable.Cell>{company.name}</DataTable.Cell>
            <DataTable.Cell numeric>{company.adminNick}</DataTable.Cell>
          </DataTable.Row>
        ))}

      </DataTable>

    </Background>
  );
}

export default memo(Dashboard);
