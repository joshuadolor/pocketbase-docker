import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "~/layouts";
import { AuthProvider } from "~/context/auth.context";
import AuthMiddleware from "./middleware/auth.middleware";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/auth/*" element={<Auth />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
