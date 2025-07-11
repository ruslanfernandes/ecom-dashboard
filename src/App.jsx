import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import theme from "./theme";
import LoadingSpinner from "./components/LoadingSpinner";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ErrorFallback from "./components/ErrorFallback";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProductManagement = lazy(() => import("./pages/ProductManagement"));

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => setSidebarOpen((open) => !open);
  const handleSidebarClose = () => setSidebarOpen(false);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Topbar onSidebarToggle={handleSidebarToggle} />
          <div className="container-fluid p-3" style={{ minHeight: "90vh" }}>
            <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />

            {/* Suspense Wrapper for Lazy-loaded components */}
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
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
            </Suspense>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
