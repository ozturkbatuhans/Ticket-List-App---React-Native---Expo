# Ticket-List-App---React-Native---Expo

## Ticket List App
A React Native mobile application for managing and displaying support tickets with priority levels and status tracking.

## Overview
This project demonstrates fundamental React Native concepts including component architecture, data management, list rendering with FlatList, and dynamic styling. Built with Expo for cross-platform compatibility.

## Features

Display ticket list with title, status, and priority
Color-coded priority badges (Critical, High, Medium, Low)
Status indicators (Open, In Progress, Planned)
Dynamic background colors based on ticket status
Modular component architecture
Responsive UI with styled components

## Technologies Used

React Native
Expo
TypeScript
JavaScript (ES6+)
StyleSheet API

## Project Structure
    TicketApp/
    ├── app/
    │   └── index.tsx          # Main app entry point
    ├── components/
    │   ├── TicketList.js      # List container component
    │   └── TicketItem.js      # Individual ticket display
    ├── data/
    │   └── ticket.ts          # Mock ticket data
    └── package.json

## Installation

Clone the repository:
```
git clone https://github.com/yourusername/ticket-list-app.git
cd ticket-list-app
```

Install dependencies:
```
npm install
```

Start the development server:
```
npx expo start
```

Run on your preferred platform:
```
Press w for web browser
Press a for Android emulator
Press i for iOS simulator
Scan QR code with Expo Go app on your mobile device
```

### Component Architecture

#### TicketList
Main container component that receives ticket data as props and renders a FlatList of TicketItem components.
#### TicketItem
Presentational component that displays individual ticket information including:

Title
Status badge
Priority badge with color coding
Dynamic background based on status

#### Data Structure
Each ticket object contains:

    {
      id: string,
      title: string,
      status: 'Open' | 'In Progress' | 'Planned',
      priority: 'Critical' | 'High' | 'Medium' | 'Low'
    }

### Learning Outcomes
This project covers:

JSX syntax and usage
Functional components
Props and data flow
FlatList implementation
StyleSheet and dynamic styling
Component composition
File organization and imports

Note: This is an educational project created for learning React Native fundamentals.
