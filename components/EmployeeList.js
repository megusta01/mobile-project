import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const EmployeeList = ({ employees }) => {
  return (
    <FlatList
      data={employees}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>
            {`${item.name} | ${item.age} anos | Cargo: ${item.position}`}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
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

export default EmployeeList;
