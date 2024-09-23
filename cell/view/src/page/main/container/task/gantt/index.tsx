import { useEffect, useRef } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

export function Gantt() {
  const ganttRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gantt.init(ganttRef.current as HTMLDivElement);
    return () => {};
  });

  return <div style={{ height: '100%' }} ref={ganttRef}></div>;
}
