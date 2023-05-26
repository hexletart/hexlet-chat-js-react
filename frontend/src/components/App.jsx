import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import { PageOne } from './Pages';
import MainPage from './MainPage';

function ProfilePage() {
  // Get the userId param from the URL.
  const userId = useRoutes();
  console.log(userId, '!!!!!!!!!!!!!!!!!!!!!');
  // ...
}

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<div>No page is selected.</div>} />
        <Route path="one" element={<PageOne />} />
        <Route path="two" element={<ProfilePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
