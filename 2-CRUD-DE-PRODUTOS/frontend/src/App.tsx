import "./App.css";
import { NavBar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <main className="p-5">
        <NavBar />
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
