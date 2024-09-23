import { Switch, Route } from 'react-router-dom';
import { Header } from './header/header';
import { Application } from './application';
import { Calendar } from './container/calendar';
import { Task } from './container/task';
import { Setting } from './container/setting';

export function Layout() {
  return (
    <div className="page column">
      <Header />
      <div className="row flex1">
        <Application />
        <div style={{ width: 'calc(100vw - 56px)', height: '100%' }}>
          <Switch>
            <Route path="/main/calendar" component={Calendar}></Route>
            <Route path="/main/task" component={Task}></Route>
            <Route path="/main/setting" component={Setting}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
