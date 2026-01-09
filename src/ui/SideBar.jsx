import { useState } from 'react';
import { Save, ChevronDown, ChevronRight, SquareArrowOutUpRight, Plus, PlusCircleIcon } from 'lucide-react';

export default function Sidebar() {
  // const [structuresIndex, setstructuresIndex] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  // const isDragging = useRef(false);

  // useEffect(() => {
  //   scanSavedStructures().then((res) => {
  //     setstructuresIndex(res);
  //   });
  // }, [scanSavedStructures]);

  // Mouse event handlers for drag resizing
  // function onMouseDown(e) {
  //   isDragging.current = true;
  //   e.preventDefault();
  // }

  // const onMouseMove = useCallback((e) => {
  //   if (!isDragging.current) return;
  //   const newWidth = e.clientX;
  //   handleSidebarWidth(newWidth);
  // }, [handleSidebarWidth])

  // const onMouseUp = useCallback(() => {
  //   isDragging.current = false;
  // }, [])

  // useEffect(() => {
  //   console.log("in useEffect in sidebar")

  //   window.addEventListener('mousemove', onMouseMove);
  //   window.addEventListener('mouseup', onMouseUp);
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //     window.removeEventListener('mouseup', onMouseUp);
  //   };
  // }, [onMouseMove, onMouseUp]);

  return (
    <div className="sidebar" style={{ width: 210 }} onClick={()=>console.log("clicked")}>
      <button onClick={()=>console.log("Create a new structure!!!")} className="sidebar-button">
        <PlusCircleIcon size={18} />
        New structure
      </button>
      <button onClick={() => console.log("Save a structure!!")} className="sidebar-button save-button">
        <Save size={18} />
        Save structure
      </button>
      <button onClick={() => console.log("Export a structure!!")} className="sidebar-button save-button">
        <SquareArrowOutUpRight size={18} />
        Export structure
      </button>

      <div className="saved-structures">
        <button onClick={() => setCollapsed(!collapsed)} className="saved-structures-toggle">
          <span className="toggle-icon">
            {collapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
            Structures
          </span>
        </button>

        {!collapsed && (
          <div className="saved-structures-list">
            {/* {structuresIndex.length === 0 && (
              <div className="saved-structures-empty">No saved structures</div>
            )}
            {structuresIndex.map((structure) => (
              <div
                key={structure.id}
                onClick={() => handleLoadStructure(structure.file)}
                onContextMenu={(e) => handleStructureContextMenu(e, structure.file, viewportRef)}
                className="saved-structure-item"
              >
                {structure.structureName}
              </div>
            ))} */}
            <div className="saved-structures-empty">No saved structures</div>
          </div>
        )}
      </div>

      {/* Drag handle */}
      <div
        className="drag-handle"
        // onMouseDown={onMouseDown}
        title="Drag to resize sidebar"
        onDoubleClick={() => console.log("clicked")} // Reset width on double-click
      />
    </div>
  );
}

// handleSelectFolder,
// handleSaveStructure,
// handleLoadStructure,
// handleSidebarWidth,
// handleStructureContextMenu,
// handleCloseContextMenu,
// scanSavedStructures,
// nodes,
// edges,
// sidebarWidth,
// viewportRef,