import { Menu as AntdMenu } from 'antd';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Info } from './info';
import { Members } from './member/list';
import { Positions } from './position/list';
import { Teams } from './team/list';
import { Announcements } from './announcement/list';

export function Setting() {
  const menus = [
    {
      path: '/main/setting/info',
      name: '信息',
    },
    {
      path: '/main/setting/members',
      name: '成员',
    },
    {
      path: '/main/setting/positions',
      name: '职位',
    },
    {
      path: '/main/setting/teams',
      name: '团队',
    },
    {
      path: '/main/setting/announcements',
      name: '公告',
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
          <Route path="/main/setting/info" component={Info}></Route>
          <Route path="/main/setting/members" component={Members}></Route>
          <Route path="/main/setting/positions" component={Positions}></Route>
          <Route path="/main/setting/teams" component={Teams}></Route>
          <Route path="/main/setting/announcements" component={Announcements}></Route>
          <Redirect to="/main/setting/info" />
        </Switch>
      </div>
    </div>
  );
}
