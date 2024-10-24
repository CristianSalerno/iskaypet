
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PersonalDataFormPage from './pages/PersonalDataPage';
import ReturnSection from './pages/ReturnPage';
import TaskPage from './pages/TaskPage';
import Box from '@mui/material/Box';



function App() {
  return (
    <Router>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Header />
        <Routes>
          <Route path="/personal-data" element={<PersonalDataFormPage />} />
          <Route path="/my-tasks" element={<TaskPage />} />
          <Route path="/returns" element={<ReturnSection />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
