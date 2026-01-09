import { useState } from "react";

export default function useFlowHandlers() {
    const [sidebarWidth, setSidebarWidth] = useState(210);

    const handleSidebarWidth = (newWidth) => {
        setSidebarWidth(newWidth)
    }

    return {
        sidebarWidth,
        handleSidebarWidth
    }
}