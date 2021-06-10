import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

const backgroundStyle = {
  backgroundImage: `url("https://assets-cdn.123rf.com/index/static/banner/global/101334292.jpg")`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: '50%',
};

const headerStyle = {
  flex: '1 1',
  width: '100%',
  background: 'linear-gradient(rgba(0,0,0,.6),transparent)',
  backgroundSize: '100% 100px',
  backgroundRepeat: 'no-repeat',
}

const arrowDown = {
  position: 'relative',
  top: '-5px',
  content: "",
  display: 'inline-block',
  width: '6px',
  height: '6px',
  borderRight: '0.2em solid white',
  borderTop: '0.2em solid white',
  transform: 'rotate(135deg)',
  marginRight: '0.5em',
  marginLeft: '0.5em',
}

const componentStyle = {
  height: 'auto',
  minHeight: '458px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px 0 rgb(0 0 0 / 20%)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: 500 }}>
          <div style={backgroundStyle}>
            <div style={headerStyle}>
              <header className="Header row no-gutters">
                <div className="col-12" style={{ height: 57, padding: '0 30px'}}>
                  <div style={{
                    height: 57,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    float: 'left',
                    paddingLeft: 20 
                  }}>
                    <div style={{ display: 'inline-block' }}>
                      <a href="/">
                        <img alt="123RF Logo" src="https://assets-cdn.123rf.com/ui-components/assets/images/123rf-logo-white.png" height="24px" width="128px" />
                      </a>
                    </div>
                    <div className="d-xl-inline-block d-lg-inline-block d-none align-middle" style={{ paddingLeft: '1.25rem' }}>
                      <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, textDecoration: 'none', cursor: 'pointer', color: '#fff', marginRight: '1.25rem' }}>Photos</a>
                      <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, textDecoration: 'none', cursor: 'pointer', color: '#fff', marginRight: '1.25rem' }}>Vectors</a>
                      <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, textDecoration: 'none', cursor: 'pointer', color: '#fff', marginRight: '1.25rem' }}>Footage</a>
                      <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, textDecoration: 'none', cursor: 'pointer', color: '#fff', marginRight: '1.25rem' }}>Audio</a>
                      <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, textDecoration: 'none', cursor: 'pointer', color: '#fff', marginRight: '1.25rem' }}>Tools</a>
                    </div>
                  </div>
                  <div style={{
                    height: 57,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    float: 'right'
                  }}>
                    <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, cursor: 'pointer', color: '#fff', marginRight: '1.25rem', fontWeight: 700 }}>Pricing</a>
                    <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, textDecoration: 'none', cursor: 'pointer', color: '#fff', marginRight: '1.25rem' }}>Support</a>
                    <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, textDecoration: 'none', cursor: 'pointer', color: '#fff', marginRight: '1.25rem' }}>EN <span style={arrowDown}></span></a>
                    <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, textDecoration: 'none', cursor: 'pointer', color: '#fff', marginRight: '1.25rem' }}>Login</a>
                    <a href="/" className="text-uppercase spaced mr-20" style={{ opacity: 1, textDecoration: 'none', cursor: 'pointer', color: '#fff', marginRight: '1.25rem', border: '1px solid white', padding: '7px 16px', fontWeight: 700 }}>Sign Up</a>
                  </div>
                </div>
              </header>

              <div style={{ width: '100%'}}>
                <div style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,.75)', width: 675, margin: '0 auto', marginTop: 100 }}>
                  <h1 style={{ fontSize: 32 }}>Millions of Stock Photos and Vectors</h1>
                </div>
                <div style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,.75)', width: 345, margin: '0 auto' }}>
                  <h1 style={{ fontSize: 23 }}>Download Instantly</h1>
                </div>
                <div style={{ width: 675, margin: '0 auto', marginTop: 40 }}>
                  <div className="input-group input-group-lg">
                    <input style={{ padding: 15 }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    <button style={{ fontSize: 14 }} className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All Images</button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/">Action</a></li>
                    </ul>
                    <button style={{ fontSize: 14 }} className="btn btn-warning" type="button">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', backgroundColor: '#333', height: 48, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
            Get 10 FREE Images when you get started on our 1 Month-Free Trial. 
            <button style={{ marginLeft: 50 , fontSize: 14, fontWeight: 700 }} className="btn btn-warning" type="button">START NOW</button>
          </div>
        </div>

        <div style={{ height: 2084, paddingTop: 100 }}>
          <h2 style={{ color: 'black', textAlign: 'center', fontSize: 25, fontWeight: 400, marginBottom: 32 }}>Advanced Features, Seamless Experience</h2>
          <div className="row" style={{ margin: '0 80px' }}>
            <div className="col-4" style={{ padding: 20 }}>
              <div style={componentStyle}>
                  <img src="https://assets-cdn.123rf.com/index/static/assets/corporate-plus.jpg" style={{ width: '100%', height: '100%' }} alt="" />
              </div>
            </div>
            
            <div className="col-4" style={{ padding: 20 }}>
              <div style={componentStyle}>
                <img src="https://assets-cdn.123rf.com/index/static/assets/intelligent.jpg" style={{ width: '100%', height: '100%' }} alt="" />
              </div>
            </div>

            <div className="col-4" style={{ padding: 20 }}>
              <div style={componentStyle}>
                <img src="https://assets-cdn.123rf.com/index/static/assets/bg-remove-image.jpg" style={{ width: '100%', height: '100%' }} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
