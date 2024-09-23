import { useEffect } from 'react';
import { Table as AntdTable } from 'antd';

export function Table() {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
    },
    {
      title: '所属部门',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '职位',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '加入时间',
      dataIndex: 'joinTime',
      key: 'joinTime',
    },
  ];

  const data = [
    {
      name: 'care',
      sex: '男',
      department: 'xxx',
      role: '成员',
      joinTime: '2020-04-01',
    },
  ];

  useEffect(() => {}, []);

  return <AntdTable columns={columns} dataSource={data} size="middle" />;
}
