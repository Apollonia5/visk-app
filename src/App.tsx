import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { UserContextProvider } from "./context/Context";
import './styles/main.scss';

import { Header } from "./components/Header/Header";

const App: React.FC = () => (
  <UserContextProvider>
    <Header />
    
    <main>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/newcontact" element={<ContactPage />} />
      </Routes>
    </main>
  </UserContextProvider>
);

export default App;
