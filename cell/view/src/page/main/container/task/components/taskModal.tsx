import { useState } from 'react';
import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

export function TaskModal() {
  const [isShowModal, setIsShowModal] = useState(!false);
  const [taskForm] = Form.useForm();

  function open(taskId?: Number) {
    setIsShowModal(true);
  }

  function onFinish() {}

  function onModalOk() {}

  function onModalCancel() {
    setIsShowModal(false);
  }

  return (
    <>
      <Button className="pt_a t_8 l_0 zi_2" type="link" onClick={() => setIsShowModal(true)}>
        创建任务
      </Button>
      <Modal
        title="任务"
        width={1000}
        visible={isShowModal}
        onOk={onModalOk}
        onCancel={onModalCancel}>
        <Form className="row-h_sb row-wp_w" form={taskForm} onFinish={onFinish}>
          <Form.Item
            name="name"
            label="任务名称"
            rules={[{ required: true, message: '请输入任务名称' }]}
            style={{ width: 300 }}>
            <Input maxLength={16} />
          </Form.Item>
          <Form.Item
            name="executor_ids"
            label="执行者"
            rules={[{ required: true }]}
            style={{ width: 300 }}>
            <Select mode="tags" style={{ width: '100%' }} placeholder="请选择执行者">
              {['阿斯顿', '气候危', '来看看'].map((name, index) => (
                <Option key={index} value={index}>
                  {name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="executor_ids"
            label="审核者"
            rules={[{ required: true }]}
            style={{ width: 300 }}>
            <Select mode="tags" style={{ width: '100%' }} placeholder="请选择审核者">
              {['阿斯顿', '气候危', '来看看'].map((name, index) => (
                <Option key={index} value={index}>
                  {name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="任务时间"
            name="time"
            rules={[{ required: true, message: '请选择任务时间' }]}>
            <RangePicker showTime />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
