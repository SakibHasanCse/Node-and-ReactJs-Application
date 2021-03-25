
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import StudentCreate from './components/students/createStudent'

import SubjectCreate from './components/subjects/createSubject'

console.log(process.env.API)
function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={StudentCreate} />

          <Route path="/subject/:id" exact component={SubjectCreate} />


        </Switch>
      </Router>

    </div>
  );
}

export default App;
