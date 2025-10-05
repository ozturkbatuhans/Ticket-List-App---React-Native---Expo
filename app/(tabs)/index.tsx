import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TicketList from '../../components/TicketList';
import { tickets } from '../../data/tickets';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ticket List</Text>
      </View>
      <TicketList data={tickets} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  }
});