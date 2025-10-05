import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TicketItem = ({ title, status, priority }) => {
  
  const getPriorityColor = () => {
    switch (priority) {
      case 'critical': return '#ff0000';
      case 'high': return '#ff6b6b';
      case 'medium': return '#ffa500';
      case 'low': return '#4caf50';
      default: return '#999';
    }
  };

  
  const getStatusColor = () => {
    switch (status) {
      case 'open': return '#e3f2fd';
      case 'in Progress': return '#fff3e0';
      case 'planned': return '#f3e5f5';
      default: return '#f9f9f9';
    }
  };

  return (
    <View style={[styles.ticketItem, { backgroundColor: getStatusColor() }]}>
      <Text style={styles.ticketTitle}>{title}</Text>
      <View style={styles.metaContainer}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
        <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor() }]}>
          <Text style={styles.priorityText}>{priority}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  ticketTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: '500',
  },
  metaContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  statusBadge: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  priorityBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  priorityText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
});

export default TicketItem;