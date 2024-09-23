import { Tabs } from 'antd';
import { Gantt } from './gantt';
import { Board } from './board';
import { Table } from './table';
import { ChooseTeam, TaskModal } from './components';

export function Task() {
  function callback(key: string) {
    // console.log(key);
  }

  return (
    <div className="column pt_r" style={{ height: '100%' }}>
      <TaskModal />
      <ChooseTeam />
      <Tabs defaultActiveKey="1" centered animated onChange={callback}>
        <Tabs.TabPane className="mg_0" tab="列表" key="1">
          <Table />
        </Tabs.TabPane>
        <Tabs.TabPane tab="看板" key="2">
          <Board />
        </Tabs.TabPane>
        <Tabs.TabPane tab="甘特图" key="3">
          <Gantt />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
