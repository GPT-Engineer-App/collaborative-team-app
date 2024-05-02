import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Team from './features/Team';
import Member from './features/Member';
import Channel from './features/Channel';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/team" element={<Team />} />
        <Route path="/member" element={<Member />} />
        <Route path="/channel" element={<Channel />} />
      </Routes>
    </Router>
  );
}

export default App;