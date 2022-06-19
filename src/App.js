import logo from './logo.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Cards'

function App() {
  let data = [
    {
      title: 'free',
      price: 0,
      desc: [
        {
          content: '10 users included',
        },
        {
          content: '2 GB of storage',
        },
        {
          content: 'Email support',
        },
        {
          content: 'Help center access',
        },
      ],
      btn: [
        {
          btnText: 'Sign up for free',
          btnEff: true,
        },
      ],
    },
    {
      title: 'pro',
      price: 15,
      desc: [
        {
          content: '20 users included',
        },
        {
          content: '10 GB of storage',
        },
        {
          content: 'Priority email support',
        },
        {
          content: 'Help center access',
        },
      ],
      btn: [
        {
          btnText: 'Get started',
          btnEff: false,
        },
      ],
    },
    {
      title: 'enterprise',
      price: 29,
      desc: [
        {
          content: '30 users included',
        },
        {
          content: '15 GB of storage',
        },
        {
          content: 'Phone and email support',
        },
        {
          content: 'Help center access',
        },
      ],
      btn: [
        {
          btnText: 'Contact us',
          btnEff: false,
        },
      ],
    },
  ]
  return (
    <div className='container-fluid'>
      {/* ---------- Navbar ------------ */}
      <header>
        <nav>
          <div className='brand-name'>
            <p>Company name</p>
          </div>
          <div className='links'>
            <ul>
              <li>
                <a href='#'>Features</a>
              </li>
              <li>
                <a href='#'>Enterprise</a>
              </li>
              <li>
                <a href='#'>Support</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li className='sign-up'>
                <a href='#'>Sign up</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* ---------- Main content ------------ */}
      <div className='container'>
        <div className='main-content'>
          <div className='headind-text'>
            <h1 className='display-4'>Pricing</h1>
            <p>
              Quickly build an effective pricing table for your potential
              customers with this
              <br />
              Bootstrap example. It's built with default Bootstrap components
              and utilities with
              <br />
              little customization.
            </p>
          </div>
          <div className='cards-section row'>
            {data.map((item) => {
              return <Card priceCard={item}></Card>
            })}
          </div>
        </div>
        <hr />
        {/* --------- footer --------- */}
        <footer>
          <div className='BS-logo'>
            <img
              src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg'
              width='25'
              height='25'
            ></img>
            <p>&copy; 2017-2018</p>
          </div>
          <div className='footer-data'>
            <div className='features'>
              <h5>Features</h5>
              <ul>
                <li>
                  <a href='#'>Cool stuff</a>
                </li>
                <li>
                  <a href='#'>Random feature</a>
                </li>
                <li>
                  <a href='#'>Team feature</a>
                </li>
                <li>
                  <a href='#'>Stuff for developers</a>
                </li>
                <li>
                  <a href='#'>Another one</a>
                </li>
                <li>
                  <a href='#'>Last time</a>
                </li>
              </ul>
            </div>
            <div className='resources'>
              <h5>Resources</h5>
              <ul>
                <li>
                  <a href='#'>Resource</a>
                </li>
                <li>
                  <a href='#'>Resource name</a>
                </li>
                <li>
                  <a href='#'>Another resource</a>
                </li>
                <li>
                  <a href='#'>Final resource</a>
                </li>
              </ul>
            </div>
            <div className='about'>
              <h5>About</h5>
              <ul>
                <li>
                  <a href='#'>Team</a>
                </li>
                <li>
                  <a href='#'>Locations</a>
                </li>
                <li>
                  <a href='#'>Privacy</a>
                </li>
                <li>
                  <a href='#'>Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
