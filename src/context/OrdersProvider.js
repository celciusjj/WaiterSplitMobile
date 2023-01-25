import React, { createContext, useState } from 'react'

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);
    const [isModal, setIsModal] = useState(false);
    return (
        <OrdersContext.Provider
            value={{
                orders,
                setOrders,
                isModal,
                setIsModal,
            }}
        >
            {children}
        </OrdersContext.Provider>
    )
}

export {
    OrdersProvider
}

export default OrdersContext;