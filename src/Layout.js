import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Video from './Video';
import Marketplace from './Marketplace';
import Groups from './Groups';
import Gaming from './Gaming';
import More from './More';

function Layout() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/video" component={Video} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/groups" component={Groups} />
      <Route path="/gaming" component={Gaming} />
      <Route path="/more" component={More} />
    </Router>
  );
}

export default Layout;
