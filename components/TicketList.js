import React from "react";
import { FlatList } from "react-native";
import TicketItem from "./TicketItem";

const TicketList = (props) => {
     return (
        <FlatList
            data={props.data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TicketItem 
                    title={item.title}
                    status={item.status}
                    priority={item.priority}
                />
            )}
        />
    );
}

export default TicketList;