import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const SearchBarExample = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Pineapple' },
    ]);

    const handleSearch = (text) => {
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setData(filteredData);
    };

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
                placeholder="Search"
                onChangeText={handleSearch}
                value={searchQuery}
            />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
};

export default SearchBarExample;
