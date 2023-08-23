"use client";
import React, { useEffect } from "react";
import Tabs from "../components/molecules/Tabs";
import { useRouter, usePathname } from "next/navigation";
import { tablist } from "./mapping";

const MarketPlaceLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    const endPoint = pathname.split("/marketplace/")[1].toUpperCase();
    const i = tablist.findIndex((tab) => tab.key === endPoint);
    setSelectedIndex(i);
  }, [pathname]);

  const onTabChange = (index: number) => {
    setSelectedIndex(index);
    router.push(tablist[index].path);
  };

  return (
    <div>
      <Tabs
        tabList={tablist}
        onTabChange={onTabChange}
        selectedIndex={selectedIndex}
      />
      {children}
    </div>
  );
};

export default MarketPlaceLayout;
