import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Email } from './onboard/email';
import { Password } from './onboard/password';
import { Country } from './onboard/country';
import { FirstName } from './onboard/FirstName';
import { LastName } from './onboard/lastName';

import { store } from './onboard/redux/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Summary } from './onboard/summary';

const queryClient = new QueryClient();

const App = () => {
 
  return (
    
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Email />} />
            <Route path="/firstname" element={<FirstName />} />
            <Route path="/lastname" element={<LastName />} />
            <Route path="/country" element={<Country />} />
            <Route path="/password" element={<Password />} />
            <Route path="/summary" element={<Summary/>}/>
          </Routes>
        </Router>
        </QueryClientProvider>
      </Provider>
    
  );
};

export default App;
