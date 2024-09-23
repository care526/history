import { useState } from 'react';
import { Input, message, Tooltip } from 'antd';
import { useRecoilState } from 'recoil';
import { organizationState } from '@store/index';
import { organizationService, Organization } from '@api/service/organization';

export function Info() {
  const [organization, setOrganization] = useRecoilState(organizationState);
  const [isShowEditOrgNameInput, setIsShowEditOrgNameInput] = useState(false);
  const [orgIptName, setOrgIptName] = useState('');

  function openEditOrgNameIpt() {
    setIsShowEditOrgNameInput(true);
  }

  function onOrgNameIptChange(e: { target: { value: string } }) {
    const { value } = e.target;
    setOrgIptName(value);
  }

  function onOrgNameIptBlur() {
    setIsShowEditOrgNameInput(false);
    setOrgIptName(organization.name);
  }

  function onEditOrgName() {
    if (!orgIptName.trim()) {
      message.warning('请输入组织名称');
      return;
    }

    const organizationInfo: Organization = {
      id: organization.id,
      owner_id: organization.id,
      name: orgIptName,
    };
    organizationService.edit(organizationInfo).then(() => {
      message.success('编辑成功');
      setOrganization(organizationInfo);
      setIsShowEditOrgNameInput(false);
    });
  }

  return (
    <div className="ant-list ant-list-split mg-h_16">
      <div className="ant-list-item">
        <p>组织名称</p>
        {isShowEditOrgNameInput ? (
          <Tooltip title="点击编辑">
            <Input
              type="text"
              autoFocus
              placeholder="请输入组织名称"
              value={orgIptName}
              style={{ width: '200px' }}
              onChange={onOrgNameIptChange}
              onBlur={onOrgNameIptBlur}
              onPressEnter={onEditOrgName}
            />
          </Tooltip>
        ) : (
          <p className="lh_32" onClick={openEditOrgNameIpt}>
            {organization.name}
          </p>
        )}
      </div>
      <div className="ant-list-item">
        <p>组织Logo</p>
        <img
          width="32"
          height="32"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt=""
        />
      </div>
      <div className="ant-list-item"></div>
    </div>
  );
}
