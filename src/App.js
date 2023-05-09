import './App.css';
import React from 'react';
import AppRoutes from './routes';

function App() {
  return (
    <React.StrictMode>
      {/* <RecoilRoot>
        <ThemeComponent> */}
      <AppRoutes />
      {/* </ThemeComponent>
      </RecoilRoot> */}
    </React.StrictMode>
  );
}

export default App;
