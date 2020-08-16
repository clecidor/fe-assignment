import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';


type Props = {
    children?: React.ReactNode;
};


const ReduxStore = ({ children } : Props) => (
    <ReduxProvider store={store}>
        {children}
    </ReduxProvider>
);

export default ReduxStore;