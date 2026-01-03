import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{
         background: "#fff",
  padding: "20px 60px",
  marginTop: 0 }}>
      
      {/* Top Section */}
      <Row gutter={[32, 32]}>
        
        {/* Brand */}
        <Col xs={24} md={8}>
          <h2 style={{ color: '#1677ff', marginBottom: 10 }}>MORENT</h2>
          <p style={{ color: '#777', fontSize: 14 }}>
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </p>
        </Col>

        {/* About */}
        <Col xs={24} md={5}>
          <h4>About</h4>
          <p>How it works</p>
          <p>Featured</p>
          <p>Partnership</p>
          <p>Business Relation</p>
        </Col>

        {/* Community */}
        <Col xs={24} md={5}>
          <h4>Community</h4>
          <p>Events</p>
          <p>Blog</p>
          <p>Podcast</p>
          <p>Invite a friend</p>
        </Col>

        {/* Socials */}
        <Col xs={24} md={5}>
          <h4>Socials</h4>
          <p>Discord</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </Col>
      </Row>

      {/* Divider */}
      <div
        style={{
          margin: '30px 0',
          borderTop: '1px solid #eee'
        }}
      />

      {/* Bottom Section */}
      <Row justify="space-between" align="middle">
        <Col>
          <p style={{ margin: 0, fontSize: 13 }}>
            ©2025 MORENT. All rights reserved
          </p>
        </Col>

        <Col>
          <span style={{ marginRight: 20, fontSize: 13 }}>
            Privacy & Policy
          </span>
          <span style={{ fontSize: 13 }}>
            Terms & Condition
          </span>
        </Col>
      </Row>

    </Footer>
  );
};

export default AppFooter;
