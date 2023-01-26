import React from "react";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import Checks from "./components/Checks";
import { OrdersProvider } from "./context/OrdersProvider";
import AddProductsButton from "./components/AddProductsButton";

const App = () => {
    return (
        <OrdersProvider>
            <Header />
            <Checks />
            <ModalForm />
            <AddProductsButton />
        </OrdersProvider>
    );
};


export default App;
