import { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { organizationService } from '@api/service/organization';
import { useRecoilValue } from 'recoil';
import { organizationState } from '@store/organization.store';

export const AddModal: React.FC<{
  isShow: boolean;
  onClose: () => void;
}> = props => {
  const { isShow, onClose } = props;
  const organization = useRecoilValue(organizationState);
  const [addForm] = Form.useForm<{
    account: string;
  }>();

  function modalOk() {
    addForm.validateFields().then(formValue => {
      organizationService.addMemberByAccount({
        account: formValue.account,
        organization_id: organization.id,
      });
    });
  }

  function modalCancel() {
    onClose();
  }

  return (
    <Modal title="添加成员" visible={isShow} okText="添加" onOk={modalOk} onCancel={modalCancel}>
      <Form form={addForm}>
        <Form.Item name="account" rules={[{ required: true, message: '请输入用户账号' }]}>
          <Input placeholder="请输入用户账号添加" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
