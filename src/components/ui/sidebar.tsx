"use client";

import React from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../shadcn/sidebar";
import { ChevronsUpDown, Inbox, LayoutGridIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/avatar";
import { usePathname } from "next/navigation";

const user = {
  user: {
    name: "MickeyCouvi",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

const items = [
  {
    title: "Dashboard",
    description: "Overview of your account",
    url: "/dashboard/main",
    icon: LayoutGridIcon,
  },
  {
    title: "Counter",
    description: "Manage your inbox",
    url: "/dashboard/counter",
    icon: Inbox,
  },
];

const SidebarNavegation = () => {
  const pathname = usePathname();

  return (
    <div>
      <Sidebar>
        <SidebarHeader className="bg-gray-900 p-6 ">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              <Image
                src="https://img.freepik.com/vector-premium/concepto-logo-fantasma-simple-elegante_116494-149.jpg"
                alt="logo"
                width={100}
                height={100}
                className="relative w-20 h-20 rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                Couvi&apos;s Team
              </h1>
              <p className="text-sm text-white/80 mt-1">Dashboard Principal</p>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="bg-gray-900">
          <SidebarGroup>
            <SidebarGroupLabel className="text-white">
              Dashboard
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem className="text-white" key={item.title}>
                    <SidebarMenuButton
                      asChild
                      size="lg"
                      isActive={pathname === item.url}
                    >
                      <Link
                        href={item.url}
                        className={`flex items-start gap-2 ${
                          pathname === item.url
                            ? "bg-white text-sidebar-accent-foreground"
                            : ""
                        }`}
                      >
                        <item.icon className="mt-0.5" />
                        <div className="flex flex-col text-white">
                          <span>{item.title}</span>
                          {item.description && (
                            <span className="text-xs text-gray-300">
                              {item.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="bg-gray-900">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.user.avatar} alt={user.user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium text-white">
                {user.user.name}
              </span>
              <span className="truncate text-xs text-white/80">
                {user.user.email}
              </span>
            </div>
            <ChevronsUpDown className="ml-auto size-4 text-white" />
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default SidebarNavegation;
