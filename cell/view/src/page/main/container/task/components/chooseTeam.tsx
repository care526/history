import { Select } from 'antd';

export function ChooseTeam() {
  function onChangeTeam() {}

  return (
    <Select
      className="pt_a t_8 r_16 zi_2"
      defaultValue="lucy1"
      style={{ width: 120 }}
      onChange={onChangeTeam}>
      <Select.Option value="lucy1">Web团队</Select.Option>
      <Select.Option value="lucy2">服务端</Select.Option>
    </Select>
  );
}
