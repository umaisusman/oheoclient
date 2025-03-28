import { useNavigate } from 'react-router-dom'
import Logo from '../../../images/Logo.png'
import './hub.css'

export default function OheoHubLanding() {
  const navigate = useNavigate()
  const handleAboutClick = () => navigate('/about')
  const handlecareerClick = () => navigate('/career')
  const handleTermsClick = () => navigate('/Terms')
  const handlePrivacyClick = () => navigate('/PrivacyControl')

  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row d-flex justify-content-between text-start">
          
          {/* Column 1 - Oheo */}
          <div className="col-md-4">
            <div className="mb-3">
              <img src={Logo} alt="Oheo" width={50} height={50} className="filter-invert" />
            </div>
            <h5 className="mb-3">Oheo</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none" onClick={handleAboutClick}>About</a></li>
              <li><a href="#" className="text-white text-decoration-none" onClick={handlecareerClick}>Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none" onClick={handleTermsClick}>Terms of Service</a></li>
              <li><a href="#" className="text-white text-decoration-none" onClick={handlePrivacyClick}>Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Investors</a></li>
              <li><a href="#" className="text-white text-decoration-none">Press and Media</a></li>
              <li><a href="#" className="text-white text-decoration-none">Partners</a></li>
              <li><a href="#" className="text-white text-decoration-none">Affiliates</a></li>
              <li><a href="#" className="text-white text-decoration-none">Legal</a></li>
              <li><a href="#" className="text-white text-decoration-none">Service Status</a></li>
            </ul>
          </div>

          {/* Column 2 - Support */}
          <div className="col-md-4">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Merchant Support</a></li>
              <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-white text-decoration-none">Hire a Partner</a></li>
              <li><a href="#" className="text-white text-decoration-none">Oheo Academy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Oheo Community</a></li>
            </ul>
          </div>

          {/* Column 3 - Developers */}
          <div className="col-md-4">
            <h5 className="mb-3">Developers</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Oheo.dev</a></li>
              <li><a href="#" className="text-white text-decoration-none">API Documentation</a></li>
              <li><a href="#" className="text-white text-decoration-none">Dev Degree</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
