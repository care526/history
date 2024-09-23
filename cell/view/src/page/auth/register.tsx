import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { authService } from '@api/service';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormHeader } from './components/formHeader';

export function Register() {
  const history = useHistory();
  const [loginForm] = Form.useForm();

  function onRegister(values: any) {
    authService.register(values).then(() => {
      message.success('注册成功');
      history.replace('/auth/login');
    });
  }

  return (
    <div className="page row_c_c">
      <div className="card pd-h_32" style={{ width: '320px' }}>
        <FormHeader></FormHeader>
        <Form form={loginForm} onFinish={onRegister}>
          <Form.Item name="account" rules={[{ required: true, message: '请输入账号' }]}>
            <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
          </Form.Item>
          <Form.Item className="mg-b_0">
            <Button type="primary" htmlType="submit" block size="large">
              注册
            </Button>
          </Form.Item>
          <Link to="/auth/login" className="row_c_e mg-t_16">
            <Button className="pd-r_0" type="link">
              去登陆
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}
