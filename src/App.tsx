import * as React from 'react';
import {Provider} from 'react-redux';
import {Container} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {configureStore} from './store';
import {AuthPage} from './pages/auth';
import './app.scss';

const store = configureStore();

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

export const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <div className="app-container">
                <Container classes={{root: 'app-container__content'}} maxWidth="sm">
                    <AuthPage />
                </Container>
            </div>
        </ThemeProvider>
    </Provider>
);
