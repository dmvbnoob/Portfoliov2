import SidebarWrapper from "@/components/SidebarWrapper";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <SidebarWrapper />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
