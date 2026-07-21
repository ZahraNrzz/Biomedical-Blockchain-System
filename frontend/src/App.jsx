import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import DatasetList from "./pages/DatasetList";

import MyRequests from "./pages/MyRequests";

import AdminPanel from "./pages/AdminPanel";

function App(){

    return(

        <BrowserRouter>

            <Navbar/>

            <Routes>

    {/* صفحات عمومی */}
    <Route
        path="/login"
        element={<Login />}
    />

    <Route
        path="/register"
        element={<Register />}
    />

    {/* صفحات محافظت‌شده */}
    <Route
        path="/"
        element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        }
    />

    <Route
        path="/datasets"
        element={
            <ProtectedRoute>
                <DatasetList />
            </ProtectedRoute>
        }
    />

    <Route
        path="/requests"
        element={
            <ProtectedRoute>
                <MyRequests />
            </ProtectedRoute>
        }
    />

    <Route

    path="/admin"

    element={

        <ProtectedRoute adminOnly>

            <AdminPanel/>

        </ProtectedRoute>

    }

/>

</Routes>
        </BrowserRouter>

    )

}

export default App;