import { React } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './mainPage/MainPage';
import SignUp from './mainPage/SignUp';
import MyPins from './memberPage/MyPins';

import './App.css';

const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          {/* TODO: 아래 element 자리에 '관리자 페이지 컴포넌트'*/}
          <Route path="/adminpage" element={<></>} />
          <Route path="/memberpage" element={<MyPins />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}



export default App;
