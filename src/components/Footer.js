import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links-div link-img'>
            <img src={"./bosta.webp"}  alt='bosta' className='logo_bosta'/>
          </div>

          <div className='sb_footer-links-div'>
            <h4>Products</h4>
            <a href='https://bosta.co/en-eg/solutions'>
              <p>Solutions</p>
            </a>
            <a href='https://bosta.co/en-eg/mobile'>
              <p>Mobile App</p>
            </a>
            <a href='https://bosta.co/en-eg/dashboard'>
              <p>Dashboard</p>
            </a>
          </div>

          <div className='sb_footer-links-div'>
            <h4>Integrations</h4>
            <a href='https://bosta.co/en-eg/merged-integrations?plugin=shopify'>
              <p>Shopify</p>
            </a>
            <a href='https://bosta.co/en-eg/merged-integrations?plugin=woocommerce'>
              <p>WooCommerce</p>
            </a>
            <a href='https://bosta.co/en-eg/integrations'>
              <p>Custom APIs</p>
            </a>
          </div>

          <div className='sb_footer-links-div'>
            <h4>Use Cases</h4>
            <a href='https://bosta.co/en-eg/smes'>
              <p>SMEs</p>
            </a>
            <a href='https://bosta.co/en-eg/business'>
              <p>Businesses</p>
            </a>
          </div>
          
          <div className='sb_footer-links-div'>
            <h4>Company</h4>
            <a href='https://bosta.co/en-eg/about'>
              <p>About us</p>
            </a>
            <a href='https://bosta.co/en-eg/careers'>
              <p>Careers</p>
            </a>
            <a href='https://bosta.co/en-eg/pricing'>
              <p>Pricing</p>
            </a>
            <a href='https://bosta.co/en-eg/faq'>
              <p>FAQ</p>
            </a>
            <a href='https://bosta.co/en-eg/contact-shipping-sales'>
              <p>Help Center</p>
            </a>
          </div>

          <div className='sb_footer-links-div'>
            <a href='https://bosta.co/en-eg/about'>
              <h4>Track Shipment</h4>
            </a>
          </div>
        
        </div>

      </div>

    </div>
   
  )
}

export default Footer