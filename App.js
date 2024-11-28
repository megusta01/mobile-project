import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import EmployeeForm from './components/EmployeeScreen';
import EmployeeList from './components/EmployeeList';

const EmployeeScreen = () => {
  const [employees, setEmployees] = useState([]);

  const handleFormSubmit = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <View style={styles.screen}>
      <Image style={styles.logo} source={require('./assets/logo_app02.webp')} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Registro de Funcionários</Text>
        <Image style={styles.image} source={require('./assets/download.png')} />
      </View>
      
      <EmployeeForm onSubmit={handleFormSubmit} />
      <EmployeeList employees={employees} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 25,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20, 
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginRight: 10, 
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default EmployeeScreen;
