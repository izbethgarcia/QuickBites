import { Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MyRecipesPage from "./pages/MyRecipesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/my-recipes" element={<MyRecipesPage />} />
    </Routes>
  );
}

export default App;