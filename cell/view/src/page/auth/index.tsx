import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './login';
import { Register } from './register';

export function Auth() {
  return (
    <Switch>
      <Route path="/auth/login" component={Login}></Route>
      <Route path="/auth/login" component={Login}></Route>
      <Route path="/auth/register" component={Register}></Route>
      <Redirect to="/auth/login" />
    </Switch>
  );
}
