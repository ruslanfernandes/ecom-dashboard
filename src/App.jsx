import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductManagement from "./pages/ProductManagement";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => setSidebarOpen((open) => !open);
  const handleSidebarClose = () => setSidebarOpen(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar onSidebarToggle={handleSidebarToggle}  />
        <div className="container-fluid p-3" style={{ minHeight: '90vh' }}>
        <Sidebar open={sidebarOpen} onClose={handleSidebarClose}  />
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route
              path="*"
              element={
                <div className="text-center mt-5">
                  <h2>404 - Page Not Found</h2>
                </div>
              }
            />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
