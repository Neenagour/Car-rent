import { Layout, Row, Col } from "antd";
import "./Footer.css";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="site-footer">
      <div className="footer-inner">
      {/* Top Section */}
      <Row gutter={[32, 32]}>
        {/* Brand */}
        <Col xs={24} sm={24} md={8} className="footer-brand">
          <h2>MORENT</h2>
          <p>
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </p>
        </Col>

        {/* About */}
        <Col xs={12} sm={12} md={5} className="footer-section">
          <h4>About</h4>
          <p>How it works</p>
          <p>Featured</p>
          <p>Partnership</p>
          <p>Business Relation</p>
        </Col>

        {/* Community */}
        <Col xs={12} sm={12} md={5} className="footer-section">
          <h4>Community</h4>
          <p>Events</p>
          <p>Blog</p>
          <p>Podcast</p>
          <p>Invite a friend</p>
        </Col>

        {/* Socials */}
        <Col xs={12} sm={12} md={5} className="footer-section">
          <h4>Socials</h4>
          <p>Discord</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </Col>
      </Row>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom Section */}
      <Row justify="space-between" align="middle" className="footer-bottom">
        <Col>
          <p>©2025 MORENT. All rights reserved</p>
        </Col>

        <Col className="footer-links">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </Col>
      </Row>
      </div>
    </Footer>
  );
};

export default AppFooter;
