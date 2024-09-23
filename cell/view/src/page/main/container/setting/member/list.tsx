import { useState, useEffect } from 'react';
import { Table, Form, Input, DatePicker, Button } from 'antd';
import { organizationService, Member } from '@api/service/organization';
import { useRecoilValue } from 'recoil';
import { organizationState } from '@store/index';
import { AddModal } from './components/addModal';

export function Members() {
  const organization = useRecoilValue(organizationState);
  const [members, setMembers] = useState<Member[]>([]);
  const [isShowAddModal, setIsShowAddModal] = useState(false);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    // {
    //   title: '性别',
    //   dataIndex: 'sex',
    //   key: 'sex',
    // },
    // {
    //   title: '所属部门',
    //   dataIndex: 'department',
    //   key: 'department',
    // },
    // {
    //   title: '职位',
    //   dataIndex: 'role',
    //   key: 'role',
    // },
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
    },
    {
      title: '加入时间',
      dataIndex: 'register_time',
      key: 'register_time',
    },
  ];

  useEffect(() => {
    organizationService.members(organization.id).then(members => setMembers(members));
  }, []);

  return (
    <div className="pd-h_16">
      <Form className="search-area">
        <div className="row row-wp_w">
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="性别"
            name="sex"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="所属部门"
            name="name1"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="职位"
            name="sex1"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="加入时间"
            name="sex2"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <DatePicker.RangePicker className="time-picker" />
          </Form.Item>
        </div>
        <div className="row_c_e">
          <Button type="link" onClick={() => setIsShowAddModal(true)}>
            添加
          </Button>
          <Button type="primary">查询</Button>
        </div>
      </Form>
      <AddModal isShow={isShowAddModal} onClose={() => setIsShowAddModal(false)} />
      <Table columns={columns} dataSource={members} size="middle" />
    </div>
  );
}
