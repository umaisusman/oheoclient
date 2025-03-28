import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./career.css";
import OheoHubLanding from "../../LandinPageScreens/onHub/onhub";

const Career = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bootstrap-wrapper">
      {/* Header */}
      <header className="py-3 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="/" className="d-flex align-items-center text-decoration-none">
          <span>Oheo</span>
          </a>
          <nav className="d-none d-md-flex gap-4">
            <a href="/browse" className="text-dark text-decoration-none">Browse</a>
            <a href="/services" className="text-dark text-decoration-none">Services</a>
            <a href="/locations" className="text-dark text-decoration-none">Locations</a>
            <a href="/login" className="text-dark text-decoration-none">Login</a>
          </nav>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="nav-stats container-fluid border-bottom">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 py-2">
              <div className="small-stat">
                <div className="small-stat-icon">🌎</div>
                <div>
                  <small>STATISTIC #1</small>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 py-2">
              <div className="small-stat">
                <div className="small-stat-icon">📈</div>
                <div>
                  <small>STATISTIC #2</small>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 py-2">
              <div className="small-stat">
                <div className="small-stat-icon">🔄</div>
                <div>
                  <small>STATISTIC #3</small>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 py-2">
              <div className="small-stat">
                <div className="small-stat-icon">💼</div>
                <div>
                  <small>STATISTIC #4</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h1 className="display-4 fw-bold mb-4">Not everyone can do this</h1>
              <p className="lead mb-4">
                Oheo is constantly growing and evolving, which lets us design opportunities for
                every stage of your career. Find the right role for your experience, or the one
                that challenges you in exciting new ways.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-black">EXPLORE JOBS</button>
                <button className="btn btn-outline-black">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Section */}
      <section className="gradient-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="display-3 fw-bold mb-0">Make</h2>
              <h2 className="display-3 fw-bold mb-0">commerce</h2>
              <h2 className="display-3 fw-bold mb-0">better</h2>
              <h2 className="display-3 fw-bold mb-0">for</h2>
              <h2 className="display-3 fw-bold">everyone.</h2>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <p className="text-uppercase fw-bold mb-2">ABOUT Oheo</p>
              <h3 className="fw-bold mb-4">Life-defining work for you—and entrepreneurs</h3>
              <p className="mb-4">
                We're building a 100-year company that helps the next generation of entrepreneurs, 
                no matter where they are in their journey. That's why we're on a mission to build 
                the world's most versatile commerce platform.
              </p>
              
              <div className="video-container mb-4">
                <img 
                  src="/lovable-uploads/297c5fce-b9dc-4007-bed4-d093221cf3c5.png" 
                  alt="Shopify Office" 
                  className="img-fluid rounded"
                />
                <div className="play-button">▶</div>
              </div>
              
              <p className="mb-0">
                Our work environment gives you the freedom to do your best work and the support to 
                grow. At Oheo, we're committed to building a diverse and inclusive workplace where 
                everyone feels they belong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Black Section */}
      <section className="black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center mb-5">
              <p className="text-uppercase fw-bold mb-2">MADE TO LAST</p>
              <h2 className="display-5 fw-bold mb-4">It's not where you work, it's where you ship</h2>
              <p>
                We're a digitally-first company where you can work from anywhere. Whether you choose our 
                hub cities or work remotely, you'll be part of a team that's driving millions of merchants worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thinkers Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <p className="text-uppercase fw-bold text-success mb-2">MEET THE TEAM</p>
              <h2 className="display-5 fw-bold mb-4">Independent thinkers who seek good</h2>
              <p>
                Meet the creators, thinkers, and leaders who solve complex problems with simple solutions.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6">
              <div className="video-container">
                <img 
                  src="/lovable-uploads/297c5fce-b9dc-4007-bed4-d093221cf3c5.png" 
                  alt="Mastery" 
                  className="img-fluid rounded"
                />
                <div className="play-button">▶</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold mb-3">Accept our mistakes</h4>
              <p>
                Learning is a process of trial and error. We value accountability and learn from our mistakes.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold mb-3">Think for the long-term</h4>
              <p>
                We're building a 100-year company that helps the next generation of entrepreneurs.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold mb-3">Create confidence</h4>
              <p>
                We provide clarity and guidance to help merchants feel supported on their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2 className="display-5 fw-bold mb-4">Find the right role for you</h2>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-4">
              <div className="job-card">
                <h4 className="fw-bold">Engineering & UX</h4>
                <p>Build the future of commerce.</p>
                <div className="d-flex align-items-center">
                  <small className="text-white me-2">20+ roles</small>
                  <span>→</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="job-card">
                <h4 className="fw-bold">UX</h4>
                <p>Design the world's best tools for entrepreneurs.</p>
                <div className="d-flex align-items-center">
                  <small className="text-white me-2">15+ roles</small>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-4">
              <div className="job-card">
                <h4 className="fw-bold">Data & Analytics</h4>
                <p>Build the future of commerce.</p>
                <div className="d-flex align-items-center">
                  <small className="text-white me-2 ">12+ roles</small>
                  <span>→</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="job-card">
                <h4 className="fw-bold">UX</h4>
                <p>Design the world's best tools for entrepreneurs.</p>
                <div className="d-flex align-items-center">
                  <small className="text-white me-2">8+ roles</small>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="values-card mb-4">
                <div className="values-icon">🚀</div>
                <div>
                  <h5 className="mb-1 fw-bold">Finance</h5>
                  <p className="mb-0">Make commerce better through financial excellence.</p>
                </div>
              </div>
              <div className="values-card mb-4">
                <div className="values-icon">💼</div>
                <div>
                  <h5 className="mb-1 fw-bold">Legal</h5>
                  <p className="mb-0">Protect our merchants and our business.</p>
                </div>
              </div>
              <div className="values-card mb-4">
                <div className="values-icon">🌐</div>
                <div>
                  <h5 className="mb-1 fw-bold">Operations</h5>
                  <p className="mb-0">Empower entrepreneurs through operational excellence.</p>
                </div>
              </div>
              <div className="values-card mb-4">
                <div className="values-icon">🔧</div>
                <div>
                  <h5 className="mb-1 fw-bold">Security</h5>
                  <p className="mb-0">Make commerce secure for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
       <OheoHubLanding />
    </div>
  );
};

export default Career;
