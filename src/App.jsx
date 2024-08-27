import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { useSelector } from 'react-redux';
import { selectIsError, selectIsRefreshing } from './redux/auth/authSelectors';
import Loader from './components/Loader/Loader';
import { Suspense } from 'react';

const App = () => {
  const isRefresh = useSelector(selectIsRefreshing);
  const isError = useSelector(selectIsError);
  if (isError) console.log(isError);
  return isRefresh ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
