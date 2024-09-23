import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { organizationService, Application as App } from '@api/service/organization';
import { Badge } from 'antd';

export function Application() {
  const history = useHistory();
  const [currentApp, setCurrentApp] = useState<string>('');
  // const [applications, setApplications] = useState<App[]>([]);

  useEffect(() => {
    const { pathname } = history.location;
    const apps = ['calendar', 'task', 'setting'];
    const app = apps.find(app => pathname.indexOf(`/main/${app}`) > -1);
    if (app) setCurrentApp(app);

    // organizationService.applications(1).then(apps => {
    //   setApplications(apps);
    //   const firstAppid = apps[0].app_id;
    //   if (firstAppid) {
    //     history.push(firstAppid);
    //     setCurrentApp(firstAppid);
    //   }
    // });
  }, []);

  return (
    <div className="column-h_sb w_56 cs_p" style={{ borderRight: '1px solid #f0f0f0' }}>
      {/* {applications.map(app => (
        <div className="pd_8" key={app.app_id} onClick={() => setCurrentApp(app.app_id)}>
          <Badge dot={app.app_id === currentApp}>
            <Link to={`/main/${app.app_id}`}>
              <img width="40" height="40" src={app.logo} alt="" />
            </Link>
          </Badge>
        </div>
      ))} */}
      <div>
        <div className="pd_8" key="calendar" onClick={() => setCurrentApp('calendar')}>
          <Badge dot={'calendar' === currentApp}>
            <Link to="/main/calendar">
              <img width="40" height="40" src="https://z3.ax1x.com/2021/07/24/WcnDzT.png" alt="" />
            </Link>
          </Badge>
        </div>
        <div className="pd_8" key="task" onClick={() => setCurrentApp('task')}>
          <Badge dot={'task' === currentApp}>
            <Link to="/main/task">
              <img width="40" height="40" src="https://z3.ax1x.com/2021/07/25/Wcvnu8.png" alt="" />
            </Link>
          </Badge>
        </div>
        <div className="pd_8" key="team" onClick={() => setCurrentApp('team')}>
          <Badge dot={'team' === currentApp}>
            <Link to="/main/team">
              <img width="40" height="40" src="https://z3.ax1x.com/2021/07/31/Wju3pd.png" alt="" />
            </Link>
          </Badge>
        </div>
      </div>
      <div className="pd_8" key="setting" onClick={() => setCurrentApp('setting')}>
        <Badge dot={'setting' === currentApp}>
          <Link to="/main/setting">
            <img width="40" height="40" src="https://z3.ax1x.com/2021/07/24/WcGQFe.png" alt="" />
          </Link>
        </Badge>
      </div>
    </div>
  );
}
