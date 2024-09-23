import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { authService } from '@api/service';
import { Form, Input, message, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSetRecoilState } from 'recoil';
import { userState } from '@store/index';
import { FormHeader } from './components/formHeader';
import { Params } from '@api/service/base';

export function Login() {
  const setUser = useSetRecoilState(userState);
  const history = useHistory();
  const [loginForm] = Form.useForm();

  useEffect(() => {
    localStorage.clear();
  }, []);

  function onLogin(values: Params) {
    authService
      .login(values)
      .then(res => {
        const { user } = res;
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        message.success('登陆成功');
        history.push('/main/calendar');
      })
      .catch(() => '');
  }

  return (
    <div className="page row_c_c">
      <div className="card pd-h_32" style={{ width: '320px' }}>
        <FormHeader></FormHeader>
        <Form form={loginForm} onFinish={onLogin}>
          <Form.Item name="account" rules={[{ required: true, message: '请输入账号' }]}>
            <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
          </Form.Item>
          <Form.Item className="mg-b_0">
            <Button type="primary" htmlType="submit" block size="large">
              登陆
            </Button>
          </Form.Item>
          <Link to="/auth/register" className="row_c_e mg-t_16">
            <Button className="pd-r_0" type="link">
              去注册
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}
