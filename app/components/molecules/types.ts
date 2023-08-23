export interface TabsGroupProps {
  className?: string;
  onTabChange: (tabIndex: number) => void;
  defaultTabIndex?: number;
  selectedIndex: number;
  tabList: TabList[];
}
type TabList = {
  title: string;
  key: string;
  path: string;
};
