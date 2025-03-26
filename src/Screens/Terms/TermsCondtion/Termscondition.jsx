
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Termscondition = () => {
  useEffect(() => {
    // Import Bootstrap JavaScript
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  

  return (
    <div>
      {/* Navigation Bar */}
  

      {/* Main Content */}
      <div className="container my-5">
        <div className="row">
          {/* Left Sidebar - Table of Contents */}
          <div className="col-md-3 mb-4">
            <div className="sticky-top pt-3" style={{ top: '20px' }}>
              <div className="border rounded p-3">
                <h6 className="text-uppercase fw-bold">Table of Contents</h6>
                <ol className="ps-3 mb-0 small">
                  <li className="mb-2"><a href="#account-terms" className="text-decoration-none">Account Terms</a></li>
                  <li className="mb-2"><a href="#account-activation" className="text-decoration-none">Account Activation</a></li>
                  <li className="mb-2"><a href="#shopify-rights" className="text-decoration-none">Shopify Rights</a></li>
                  <li className="mb-2"><a href="#your-responsibilities" className="text-decoration-none">Your Responsibilities</a></li>
                  <li className="mb-2"><a href="#payment-of-fees" className="text-decoration-none">Payment of Fees and Taxes</a></li>
                  <li className="mb-2"><a href="#confidentiality" className="text-decoration-none">Confidentiality</a></li>
                  <li className="mb-2"><a href="#limitation-of-liability" className="text-decoration-none">Limitation of Liability and Damages</a></li>
                  <li className="mb-2"><a href="#intellectual-property" className="text-decoration-none">Intellectual Property and Customer Content</a></li>
                </ol>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-md-9">
            <div className="mb-4">
              <span className="text-muted small">Last updated on March 1, 2023</span>
              
              <div className="mt-4">
                <p>Welcome to Shopify! By signing up for a Shopify Account (as defined in Section 1.1) or using any Shopify Services (as defined below), you are agreeing to be bound by the following terms and conditions ("Terms of Service").</p>
                
                <p>As used in these Terms of Service, "we", "us", "our", and "Shopify" means the applicable Shopify Contracting Party (as defined in Section 14 below), "you" means the business on whose behalf you are accessing or using the Service, and "Shopify Services" or "Services" means the services offered by Shopify (including the Shopify User Interface, but excluding Third Party Services) and described in more detail at <a href="https://www.shopify.com/features" className="text-decoration-none">https://shopify.com/features</a>.</p>
                
                <p>Shopify provides a complete commerce platform that enables merchants to build and operate a business across multiple channels (including web, mobile, social media, online marketplaces and in person ("POS")) and service their customers from a single back office (the "Shopify Platform"). From the Shopify admin, merchants can manage products and inventory, process orders and payments, ship orders, create discounts, acquire and market to customers, communicate with customers, view analytics and reports, manage staff, marketing and advertising, and organize finances with existing and potential customers. Any such service offered by Shopify are referred to in these Terms of Service as the "Services". Any new features or tools which are added to the current Services shall be also subject to the Terms of Service. You can review the current version of the Terms of Service at any time at <a href="https://www.shopify.com/legal/terms" className="text-decoration-none">https://shopify.com/legal/terms</a>.</p>
                
                <p>You must read, agree with and accept all of the terms and conditions contained in these Terms of Service, including the <a href="#" className="text-decoration-none">Acceptable Use Policy</a> ("AUP") and <a href="#" className="text-decoration-none">Privacy Policy</a>, and, if applicable, the <a href="#" className="text-decoration-none">Supplementary Terms of Service for E.U. Merchants</a> ("EU Terms"), the Shopify <a href="#" className="text-decoration-none">API License and Terms of Use</a> ("API Terms") and the Shopify <a href="#" className="text-decoration-none">Data Processing Addendum</a> ("DPA") before you may sign up for a Shopify Account or use any Shopify Service.</p>
              </div>
              
              <div className="bg-light p-3 rounded my-4">
                <p className="mb-0"><strong>Technical language is provided for convenience only and appears in bold near each section, but these summaries are not legally binding. Please read the Terms of Service, including any document referred to in these Terms of Service, for the complete picture of your legal requirements. By using any Shopify Service you are agreeing to these terms. Be sure to occasionally check back for updates.</strong></p>
              </div>
              
              <h2 id="account-terms" className="h4 mt-5 mb-3">1. Account Terms</h2>
              
              <ol className="ps-3">
                <li className="mb-3">
                  <p>To access and use the Services, you must register for a Shopify account ("Account"). To complete your Account registration, you must provide us with your full legal name, company information, business address, email address, phone number, and any other information indicated as required. Shopify may reject your application for an Account, or cancel an existing Account, for any reason, at our sole discretion.</p>
                </li>
                
                <li className="mb-3">
                  <p>You must be the age of majority in the jurisdiction where you reside and from which you use the Services to open an Account.</p>
                </li>
                
                <li className="mb-3">
                  <p>You confirm that you are registering an Account and using the Services solely for the purposes of operating a business and not for personal, household or family purposes.</p>
                </li>
                
                <li className="mb-3">
                  <p>You acknowledge that Shopify will use the email address you provide on opening an Account or as updated by you from time to time as the primary method for communication with you. Your email—or "Primary Email Address"—must be capable of both sending and receiving messages. We may monitor the account for verification, risk management, and fraud monitoring purposes. Your email communications with Shopify can only be authenticated if they come from your Primary Email Address.</p>
                </li>
                
                <li className="mb-3">
                  <p>You are responsible for keeping your password secure. Shopify cannot and will not be liable for any loss or damage from your failure to maintain the security of your Account and password. We may require additional security measures at our discretion.</p>
                </li>
                
                <li className="mb-3">
                  <p>Technical support in respect of the Services is only provided to Shopify Users. Questions about the Terms of Service should be sent to Shopify Support.</p>
                </li>
                
                <li className="mb-3">
                  <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Shopify.</p>
                </li>
                
                <li className="mb-3">
                  <p>You agree not to work around, bypass, or circumvent any of the technical limitations of the Services, including to access or attempt to access data outside Shopify's Checkout, use any tool to enable features or functionalities that are otherwise disabled in the Services, or decompile, disassemble or otherwise reverse engineer the Services.</p>
                </li>
                
                <li className="mb-3">
                  <p>You agree not to access the Services or monitor any material or information from the Services using any robot, spider, scraper, or other automated means.</p>
                </li>
                
                <li className="mb-3">
                  <p>You understand that your Materials may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. "Materials" means Your Trademarks, copyright content, any products or services you sell through the Services (including description and price), and any photos, images, videos, graphics, written content, audio files, code, information, or other materials you provide to us or use with the Services.</p>
                </li>
              </ol>
              
              <h2 id="account-activation" className="h4 mt-5 mb-3">2. Account Activation</h2>
              
              <ol className="ps-3">
                <li className="mb-3">
                  <p>Subject to Section 2.1.2, the person signing up for the Service by opening an Account will be the contracting party ("Store Owner") for the purposes of our Terms of Service and will be the person who is authorized to use any corresponding Account we may provide to the Store Owner in connection with the Service. You are responsible for ensuring that the name of the Store Owner (including the legal name of the company that owns the Store, if applicable) is clearly visible on the Store website.</p>
                </li>
                
                <li className="mb-3">
                  <p>If you are signing up for the Services on behalf of your employer, your employer shall be the Store Owner. If you are signing up for the Services on behalf of your employer, then you represent and warrant that you have the authority to bind your employer to our Terms of Service.</p>
                </li>
                
                <li className="mb-3">
                  <p>Your Shopify store can only be associated with one Store Owner. A Store Owner may have multiple Shopify stores. "Store" means the online store or physical retail location(s) for which you subscribe to the Services, whether hosted on Shopify's platform, your own server, or a third party provider.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Termscondition;
