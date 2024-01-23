/* eslint-disable @typescript-eslint/no-unused-vars */
import { NodeProps, Handle, Position, NodeResizer } from "reactflow";

export function Square({selected}: NodeProps){
  return(
    <div className="bg-violet-500 h-full w-full rounded min-w-[200px] min-h-[200px]">
      <NodeResizer 
        minWidth={200} 
        minHeight={200}
        isVisible={selected}
        lineClassName="border-blue-400" 
        handleClassName="h-3 w-3 rounded bg-white border-blue-400 " />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 h-3 w-3 bg-blue-500/80"
      />
      <Handle 
        id="left" 
        type="source" 
        position={Position.Left}
        className="-left-5 h-3 w-3 bg-blue-500/80"
      />
      <Handle 
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 h-3 w-3 bg-blue-500/80"
      />
      <Handle 
        id="bottom" 
        type="source" 
        position={Position.Bottom}
        className="-bottom-5 h-3 w-3 bg-blue-500/80"
      />
    </div>
  )
}
