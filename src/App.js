import "./App.css";
import { Entry } from "../src/pages/Entry";
import { Dashboard } from "../src/pages/Dashboard";
import { AddTicket } from "../src/pages/AddTicket";
import { TicketList } from "../src/pages/TicketList";
import { TicketPage } from "../src/pages/TicketPage";
import { DefaultLayout } from "./pages/DefaultLayout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const isAuth = true;

  return (
    <div className="App">
      <Router>
        <DefaultLayout>
          <Routes>
            <Route exact path="/" element={<Entry />} />
            <Route
              path="/dashboard"
              element={isAuth ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/addticket"
              element={isAuth ? <AddTicket /> : <Navigate to="/" />}
            />
            <Route
              path="/ticketlist"
              element={isAuth ? <TicketList /> : <Navigate to="/" />}
            />
            <Route
              path="/ticketpage/:tId"
              element={isAuth ? <TicketPage /> : <Navigate to="/" />}
            />
          </Routes>
        </DefaultLayout>
      </Router>
    </div>
  );
}

export default App;
