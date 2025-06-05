import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Book,
  Code,
  BookOpen,
  Timer,
  User,
  Menu,
  LayoutDashboard,
  X,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Início",
    icon: LayoutDashboard,
    link: "/",
  },
  {
    title: "Tecnologia",
    icon: Code,
    link: "/technology",
  },
  {
    title: "Treino de Leitura",
    icon: BookOpen,
    link: "/reading-training",
  },
  {
    title: "Timer de Respiração",
    icon: Timer,
    link: "/breathing-timer",
  },
  {
    title: "Avaliações de Livros",
    icon: Book,
    link: "/books",
  },
  {
    title: "Blog Pessoal",
    icon: Pencil,
    link: "/blog",
  },
  {
    title: "Sobre Mim",
    icon: User,
    link: "/about",
  },
];

interface BlogSidebarProps {
  className?: string;
}

export const BlogSidebar = ({ className }: BlogSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Menu toggle button for mobile */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleMobileSidebar}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar para desktop */}
      <div
        className={cn(
          "hidden md:flex flex-col h-screen sticky top-0 bg-background border-r transition-all duration-300 z-40",
          collapsed ? "w-20" : "w-64",
          className
        )}
      >
        <div className="flex justify-between items-center p-4">
          {!collapsed && (
            <h1 className="font-heading font-bold text-xl">Bit & Big Bang</h1>
          )}
          <Button variant="outline" size="icon" onClick={toggleSidebar}>
            {collapsed ? (
              <Menu className="h-5 w-5" />
            ) : (
              <X className="h-5 w-5" />
            )}
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className={cn(
                  "flex items-center rounded-md p-3 text-sm font-medium transition-all hover:bg-muted",
                  collapsed ? "justify-center" : "justify-start"
                )}
              >
                <item.icon
                  className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")}
                />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Sidebar para mobile (overlay) */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className="absolute inset-y-0 left-0 w-3/4 max-w-xs bg-background shadow-lg p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-heading font-bold text-xl">Bit & Big Bang</h1>
            <Button variant="outline" size="icon" onClick={toggleMobileSidebar}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="flex items-center rounded-md p-3 text-sm font-medium hover:bg-muted"
                onClick={() => setMobileOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
