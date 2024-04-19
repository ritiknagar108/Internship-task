import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx';
import NavTabs from './components/NavTabs.jsx';
import Card from './components/Card.jsx';
import SideBar from './components/SideBar.jsx';
function App() {

  const styles = {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around', // You can add more flex properties here if required
  };
  return (
    <>
      <NavBar />
      <Banner />
      <NavTabs />
      <div style={styles}>
        <Card />
        <div className='side-Bar'>
          <SideBar />
        </div>

      </div>

    </>
  )
}

export default App
