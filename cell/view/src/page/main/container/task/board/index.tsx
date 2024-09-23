import { Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export function Board() {
  const Status = ['规划中', '开发中', '测试中', '已上线'];

  function onDragEnd() {}
  const getItemStyle = (isDragging: boolean, draggableStyle: any) => {
    return {
      userSelect: 'none',

      boxShadow: isDragging ? '0px 0px 4px 0 rgba(0, 0, 0, .1)' : '',

      ...draggableStyle,
    };
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="row">
        {Status.map((i, pindex) => (
          <div className="flex1" key={pindex}>
            <div data-header className="row_c_sb pd-h_8 pd-v_8">
              <div data-left>
                <span className="pd-h_4 br_4 c_f" style={{ background: 'green' }}>
                  {i}
                </span>
                <span className="mg-l_8 c_9">5</span>
              </div>
              <div data-right className="c_6">
                <PlusOutlined />
              </div>
            </div>
            <Droppable droppableId={`list${pindex}`} type="LIST">
              {(provided: any) => (
                <div
                  data-task-list
                  className="pd_8 cs_p"
                  ref={provided.innerRef}
                  {...provided.droppableProps}>
                  {[1, 2, 3].map((i, cindex) => (
                    <Draggable draggableId={`task${pindex}${cindex}`} index={cindex} key={cindex}>
                      {(provided: any, snapshot: any) => (
                        <div
                          data-task-item
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          <Card
                            className="mg-v_4"
                            bodyStyle={{
                              padding: '8px',
                              boxShadow:
                                '0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d',
                              borderRadius: '4px',
                            }}
                            key={cindex}>
                            {i}
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>

      {/* <Droppable droppableId="droppable" type="COLUMN">
        {(provided: any) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {[1, 2, 3, 4, 5, 6].map((i, index) => (
              <Draggable key={index} draggableId={'asdasd' + index} index={index}>
                {(provided: any, snapshot: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    key={index}>
                    asda{i}
                    <p>title{i}</p>
                    <span className="mg_8">ashdkads </span>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable> */}
    </DragDropContext>
  );
}
