import React from 'react'
import NavbarWhite from './NavbarWhite'
import NavbarRed from './NavbarRed'
import Footer from './Footer'
import './tandc.css'; 


export default function TandC() {
  return (
    <>
    <NavbarRed></NavbarRed>
    <NavbarWhite></NavbarWhite>
    <div className="terms-container">
      <h2 className="section-heading">TERMS & CONDITIONS</h2>
      <p className="content">
        The domain name www.thesouledstore.com (“Website”) is a site operated by The Souled Store Pvt. Ltd., a company incorporated under laws of India with our registered office at 224 Tantia Jogani Industrial Estate, JR Boricha Marg, Lower Parel (East), Mumbai 400 011 (“Company/The Souled Store”).
      </p>
      <p className="content">
        The Souled Store enables the world's artists to earn money from their artwork by making it immediately and easily available for sale as a variety of products - without giving up control of their rights. We understand the importance of representing one's work with quality and respect, and we also believe it is essential that all The Souled Store users respect copyright. Whether you’re an artist, a customer, or just casually browsing the Website, please respect the copyright of all the works you see or buy on The Souled Store.
      </p>
      <p className="content">
        By using the services on the www.thesouledstore.com, you are agreeing to the following terms of service, conditions, policies, etc. (“Terms of Service”) including those available by hyperlink, with The Souled Store, which may be updated by us from time to time. Please check this page regularly to take notice of any changes we may have made to the Terms of Service.
      </p>
      <p className="content">
        We reserve the right to review and withdraw or amend the services without notice. If you do not agree with its terms, kindly do not use this Website.
      </p>
      <p className="content">
        The Souled Store provides a range of services including but not limited to, enabling you to publish, sell, comment on, promote, and purchase art related products; interact with other members; and receive the benefits of The Souled Store's product production service including payment processing, transaction handling, product manufacturing, packaging, order fulfilment, and customer service.
      </p>

      <h3 className="section-heading">CONTENT & COPYRIGHT POLICY</h3>
      <p className="content">
        You understand that all information, images, pictures, data, text, music, sound, photographs, graphics, video, messages, or other materials, whether publicly posted or privately transmitted, is the exclusive work and property of the person from whom such Content originated. The Souled Store does not claim any permanent ownership of your Content.
      </p>
      <p className="content">
        You retain copyright and any other rights you already hold in Content which you submit, post, upload, display, or sell on or through The Souled Store. When you submit, post, upload, display, or sell Content, you grant The Souled Store a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive (and sub-licensable) license to use and archive the Content in accordance with or as reasonably contemplated by this Agreement.
      </p>
      <p className="content">
        The Souled Store cannot always manually screen Content before it is displayed on the Website, and occasionally members may inadvertently or deliberately submit and display Content that breaches the terms of this Agreement.
      </p>
    </div>
    <Footer></Footer>
    </>
    
  )
}
