import { Outlet } from 'react-router-dom';

import Header from './compontents/Header';
import Footer from './compontents/Footer';

function App() {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}

export default App