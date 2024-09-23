import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown, Menu, Button, Input, Modal, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { userState, organizationState } from '@store/index';
import { useRecoilValue, useRecoilState } from 'recoil';
import { organizationService } from '@api/service';
import { Organization } from '@api/service/organization';

import './header.scss';

export function Header() {
  const history = useHistory();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const user = useRecoilValue(userState);
  const [organization, setOrganization] = useRecoilState(organizationState);
  const [isShowChooseOrgModal, setIsShowChooseOrgModal] = useState(false);

  useEffect(() => {
    organizationService.list(user.id).then(organizations => {
      setOrganizations(organizations);
      if (!organization.name) setIsShowChooseOrgModal(true);
    });
  }, []);

  function onSelectOrg(organization: Organization) {
    setOrganization(organization);
    setIsShowChooseOrgModal(false);
    history.push('/main/calendar');
  }

  function onSearch() {}

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Button type="link" danger>
          <Link to="/auth/login">退出登陆</Link>
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header row_c_sb pd-r_16">
      <Tooltip title="点击切换组织" placement="right">
        <div className="row-v_c h_50 pd-v_10 cs_p" onClick={() => setIsShowChooseOrgModal(true)}>
          <img
            className="pd-h_13"
            height="30"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt=""
          />
          <span className="fs_20">{organization.name}</span>
        </div>
      </Tooltip>

      <Input.Search
        placeholder="聚合搜索"
        onSearch={onSearch}
        enterButton
        style={{ width: '400px' }}
      />

      <Dropdown overlay={userMenu} placement="bottomRight" arrow>
        <span className="cs_p">
          <span className="pd-r_8">{user.name}</span>
          <DownOutlined />
        </span>
      </Dropdown>

      <Modal
        title="选择组织"
        visible={isShowChooseOrgModal}
        footer={null}
        onCancel={() => setIsShowChooseOrgModal(false)}>
        <div className="row-h_c row-wp_w">
          {organizations.map((org, index) => (
            <div className="column-v_c pd-h_16 cs_p" key={index} onClick={() => onSelectOrg(org)}>
              <img
                width="100"
                height="100"
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                alt=""
              />
              <p className="pd-t_16 fs_24">{org.name}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
