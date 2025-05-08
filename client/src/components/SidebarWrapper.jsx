import { Sidebar, SidebarProvider, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export default function SidebarWrapper() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarMenu>
          {links.map(link => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                isActive={location.pathname === link.href}
                onClick={() => navigate(link.href)}
              >
                {link.title}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </Sidebar>
    </SidebarProvider>
  );
}
