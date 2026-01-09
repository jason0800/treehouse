import { ReactFlow } from "@xyflow/react";
import Sidebar from "./SideBar";

export default function FlowArea() {
  return (
    <>
        <div style={{ display: 'flex', height: '100vh', width: '100vw'}}>
          <Sidebar/>
          <ReactFlow/>
        </div>
    </>
  ) 
}