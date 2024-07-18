import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import HomeView from './src/views/HomeView';

function App(): React.JSX.Element {

    return (
        <SafeAreaView style={styles.container}>
            <HomeView />
        </SafeAreaView>
    );
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})