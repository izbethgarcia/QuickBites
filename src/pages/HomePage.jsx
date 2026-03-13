import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { user, isGuest } = useAuth();

  return (
    <div>
      <Navbar />

      <h1>Welcome to QuickBites</h1>

      {isGuest ? (
        <p>You are browsing as a guest.</p>
      ) : (
        <p>You are logged in as {user?.email}.</p>
      )}

      <p>This is your home page.</p>
    </div>
  );
}

export default HomePage;