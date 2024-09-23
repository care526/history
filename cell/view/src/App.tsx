import { ConfigProvider } from 'antd';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Wrong403, Wrong404 } from './page/wrong';
import { Auth } from './page/auth';
import { Layout } from './page/main';
import { RecoilRoot } from 'recoil';

import zhCN from 'antd/lib/locale/zh_CN';

export function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RecoilRoot>
        <HashRouter>
          <Switch>
            <Route path="/auth" component={Auth}></Route>
            <Route path="/main" component={Layout}></Route>
            <Route path="/403" component={Wrong403}></Route>
            <Route path="/404" component={Wrong404}></Route>
            <Redirect to="/auth" />
          </Switch>
        </HashRouter>
      </RecoilRoot>
    </ConfigProvider>
  );
}
