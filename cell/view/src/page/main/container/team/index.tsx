import { Menu as AntdMenu } from 'antd';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Link as LinkList } from './link/list';

export function Setting() {
  const menus = [
    {
      path: '/main/setting/info',
      name: '信息',
    },
  ];
  return (
    <div className="row" style={{ height: '100%' }}>
      <AntdMenu
        style={{ width: '88px' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline">
        {menus.map((menuItem, index) => (
          <AntdMenu.Item key={index + 1}>
            <Link to={menuItem.path}>{menuItem.name}</Link>
          </AntdMenu.Item>
        ))}
      </AntdMenu>
      <div className="flex1">
        <Switch>
          <Route path="/main/team/link" component={LinkList}></Route>
          <Redirect to="/main/team/link" />
        </Switch>
      </div>
    </div>
  );
}
