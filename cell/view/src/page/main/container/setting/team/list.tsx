import { Empty, Button } from 'antd';

export function Teams() {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={
        <span>
          暂无团队,
          <Button type="link" className="pd_0">
            去创建
          </Button>
        </span>
      }></Empty>
  );
}
