import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import 'antd/es/calendar/style';

const AntdCalendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export function Calendar() {
  function dateCellRender(value: any) {
    // console.log(value.date());
    return (
      <div>
        <p className="c_9">ahsdad</p>
      </div>
    );
  }
  function monthCellRender() {
    return <div>asd</div>;
  }

  return (
    <div className="pd-h_16">
      <AntdCalendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>
  );
}
