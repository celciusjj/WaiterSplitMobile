import React from 'react';
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import Checks from "./components/Checks";
import { OrdersProvider } from './context/OrdersProvider';
import { View } from 'react-native';

const App = () => {
    return (
        <OrdersProvider>
            <Header />
            <Checks />
            <ModalForm />
        </OrdersProvider>
    );
};


export default App;
