import React from 'react';
import { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { SearchBar } from 'react-native-elements';


const Searchbar = (props) => {

    const [searchValue, setSearchValue] = useState("")
    
    return(
        <View>
            <SearchBar 
                containerStyle = { styles.container}
                inputContainerStyle={ styles.inputContainer}
                value={ searchValue }
                placeholder="Search the marketplace..."
                onChangeText={ value => setSearchValue(value)}
                returnKeyType= 'search'
                onSubmitEditing={() => props.search(searchValue)}>
            </SearchBar>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white'
    },
    inputContainer: {
        borderRadius: 20,
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#035aa1',
        backgroundColor: 'white'
    },
    container: {
        height: 60,
        backgroundColor: '#96bbff',
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
    }
})

export default Searchbar