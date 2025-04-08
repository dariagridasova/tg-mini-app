import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Form />} />
        <Route path={'form'} element={<ProductList />} />
        {/* <Route path={'form'} element={<Form />} /> */}
      </Routes>
    </div>
  );
}

export default App;
