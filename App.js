import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import EmployeeForm from './components/EmployeeScreen';

const EmployeeScreen = () => {
  const [employees, setEmployees] = useState([]);

  const handleFormSubmit = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <View style={styles.screen}>
      <Image style={styles.logo} source={require('./assets/logo_app02.webp')} />
      <Text style={styles.header}>Registro de Funcionários</Text>
      <Image style={styles.image} source={require('./assets/download.png')} />
      <EmployeeForm onSubmit={handleFormSubmit} />
      <FlatList
        data={employees}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Text style={styles.listItem}>{`${item.name} | ${item.age} anos | Cargo: ${item.position}`}</Text>
          </View>
        )}
      />
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
  header: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  listItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
});

export default EmployeeScreen;
