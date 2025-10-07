import React from 'react';
import './privacypolicy.css'; // Import the CSS file
import NavbarRed from './NavbarRed'
import NavbarWhite from './NavbarWhite'
import Footer from './Footer'

const Privacypolicy = () => {
  return (
    <>
    <NavbarRed></NavbarRed>
    <NavbarWhite></NavbarWhite>
    <div className="privacy-container">
      <h2 className="section-heading">Introduction</h2>
      <p className="content">
        This privacy policy (<strong>“Policy”</strong>) sets out how The Souled Store Pvt. Ltd. (<strong>“The Souled Store”</strong>, also identified by <strong>“we”</strong>, <strong>“us”</strong>, or <strong>“our”</strong>) uses and protects any information that you give us when you use this website/mobile application (individually and collectively, <strong>“Platform”</strong>).
      </p>
      <p className="content">
        The Souled Store is committed to ensuring that your privacy is protected. Should we ask you to provide any information by which you can be identified when using this Platform, be rest assured that it will only be used strictly in accordance with this Policy.
      </p>
      <p className="content">
        Please note that our Policy is subject to change at any time, and we may not be able to provide you prior notice. To ensure you are up to date with the Policy, please review this page periodically. This Policy applies to current and former visitors and customers of our Platform. By visiting and/or using our Platform, you are accepting and consenting to the practices described in this Policy.
      </p>

      <h2 className="section-heading">What information do we collect?</h2>
      <p className="content">
        We learn, collect, and store your personal information (that we consider necessary) when you use our Platform. We use this information to provide you with a safe, efficient, smooth, and customised experience, which includes, without limitation, displaying content such as recommended products that might interest you and communicating with you about your orders, new products, and latest promotional offers. This allows us to provide specific services and features that most likely meet your needs, customise our Platform to make your experience safer and easier, and enable third parties to carry out technical, logistical, and other functions on our behalf.
      </p>
      <p className="content">
        <strong>Here are the types of information we gather:</strong>
      </p>
      <p className="content">
        <strong>1) Information you provide us</strong>
        <br />
        We receive and store the information you explicitly provide to us. This includes personal information such as your user name along with your password, your name, address, telephone number, e-mail address and other contact information, date of birth, gender, financial information such as bank account information, credit/debit card or other payment instrument details and any other information that you provide during your time on the Platform. You may choose not to provide certain information, but this could prevent you from taking full advantage of our Platform’s various features.
      </p>
      <p className="content">
        <strong>2) Information collected automatically</strong>
        <br />
        Whenever you interact with our Platform, we automatically receive, record, and analyse information from your browser or device, which includes, without limitation, your IP address, geolocation data, device identification, “cookie” information, the type of browser and/or device you’re using to access our Platform, information about your mobile device, including a unique identifier for your device and purchase history; which we sometimes aggregate with similar information from other customers to create features like recommendations.
      </p>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Privacypolicy;
