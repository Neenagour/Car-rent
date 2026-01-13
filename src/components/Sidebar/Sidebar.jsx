import { Menu, Switch } from "antd";
import {
  DashboardOutlined,
  CarOutlined,
  BarChartOutlined,
  InboxOutlined,
  CalendarOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="section-title">MAIN MENU</p>

      <Menu
        mode="vertical"
        defaultSelectedKeys={["1"]}
        className="custom-menu"
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<CarOutlined />}>
          Car Rent
        </Menu.Item>
        <Menu.Item key="3" icon={<BarChartOutlined />}>
          Insight
        </Menu.Item>
        <Menu.Item key="4" icon={<InboxOutlined />}>
          Inbox
        </Menu.Item>
        <Menu.Item key="5" icon={<CalendarOutlined />}>
          Calendar
        </Menu.Item>
      </Menu>

      <p className="section-title">PREFERENCES</p>

      <Menu mode="vertical" className="custom-menu">
        <Menu.Item key="6" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="7" icon={<QuestionCircleOutlined />}>
          Help & Center
        </Menu.Item>
      </Menu>

      {/* Dark Mode */}
      <div className="dark-mode">
        <span>Dark Mode</span>
        <Switch size="small" defaultChecked />
      </div>

      {/* Logout */}
      <div className="logout">
        <LogoutOutlined />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
