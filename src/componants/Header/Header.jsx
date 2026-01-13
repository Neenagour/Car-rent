import { Layout, Badge, Avatar } from "antd";
import {
  HeartOutlined,
  BellOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import searchIcon from "../../assets/search-normal.png";
import filterIcon from "../../assets/filter.png";
import "./AppHeader.css";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="site-header">
      <div className="header-inner">
     
      {/* LEFT - LOGO */}
      <Link to="/">
        <h2 className="header-logo">MORENT</h2>
      </Link>

      {/* CENTER - SEARCH */}
      <div className="search-wrapper">
        <span className="search-icon left">
          <img src={searchIcon} alt="search" />
        </span>

        <input
          type="text"
          placeholder="Search something here"
          className="search-input"
        />

        <span className="search-icon right">
          <img src={filterIcon} alt="filter" />
        </span>
      </div>

      {/* RIGHT ICONS */}
      <div className="header-icons">
        <div className="header-right-icons">
          <span className="icon-box">
            <HeartOutlined />
          </span>

          <span className="icon-box">
            <Badge dot>
              <BellOutlined />
            </Badge>
          </span>

          <span className="icon-box">
            <SettingOutlined />
          </span>

          <Avatar size={36} icon={<UserOutlined />} />
        </div>
      </div>
     </div>
    </Header>
  );
};

export default AppHeader;
