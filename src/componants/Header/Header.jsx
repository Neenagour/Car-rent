import { Layout, Input, Badge, Avatar } from "antd";
import {
  HeartOutlined,
  BellOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";


const { Header } = Layout;
const { Search } = Input;

const AppHeader = () => {
  return (
    <Header
      style={{
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        height: 72,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      {/* LEFT - LOGO */}
      <h2 style={{ margin: 0, color: "#1677ff", fontWeight: 700 }}>
        MORENT
      </h2>

      {/* CENTER - SEARCH */}
      <Search
        placeholder="Search something here"
        allowClear
        style={{
          maxWidth: 400,
          width: "100%",
          margin: "0 24px",
        }}
      />

      {/* RIGHT - ICONS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <HeartOutlined style={{ fontSize: 20 }} />

        <Badge dot>
          <BellOutlined style={{ fontSize: 20 }} />
        </Badge>

        <SettingOutlined style={{ fontSize: 20 }} />

        <Avatar
          size={36}
          icon={<UserOutlined />}
          style={{ cursor: "pointer" }}
        />
      </div>
    </Header>
  );
};

export default AppHeader;

// import { Layout } from "antd";

// const { Header } = Layout;

// const AppHeader = () => {
//   return (
//     <Header
//       style={{
//         height: 72,
//         position: "fixed",
//         top: 0,
//         width: "100%",
//         zIndex: 1000,
//         background: "#fff",
//         borderBottom: "1px solid #eee",
//         display: "flex",
//         alignItems: "center",
//         padding: "0 40px",
//       }}
//     >
//       <h2 style={{ color: "#3563E9" }}>MORENT</h2>
//     </Header>
//   );
// };

// export default AppHeader;
