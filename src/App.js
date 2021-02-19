import "./App.css";

import About from "./Component/About";
import Home from "./Component/Home";
import Users from "./Component/Users";

import { Link, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Profile from "./Component/Profile";
import Dashbord from "./Component/Dashbord";

function App() {
  return (
    <div className="App">
      <h2>Workshop Router</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/about/${4}`,
                state: { movie: { name: "zootopia", rate: 5 } },
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* method1:recommended */}
        <Route path="/about/:id" component={About} />
        {/* method2:not recommended */}
        <Route path="/users">
          <Users />
        </Route>
        {/* Method3:recommended */}
        <Route
          path="/profile"
          render={(props) => (
            <div>
              <Navbar {...props} />
              <Profile {...props} />
            </div>
          )}
        />
        <Route path="/dashbord" component={Dashbord} />
      </Switch>
    </div>
  );
}

export default App;
