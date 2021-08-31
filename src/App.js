import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/navigation.component';
import HomePage from './pages/homepage/homepge.component';
import ContactPage from './pages/contact-page/contact-page.component';

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/contact' component={ContactPage} />
      </Switch>
     </div>
  );
}

export default App;
