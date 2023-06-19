import MainContent from "./containers/MainContent";
import Header from "./containers/Header";
import SidePanel from "./containers/SidePanel";
import "./App.css";

const App = () => {
  return (
    <div className='main-container'>
      <section className='left-container'>
        <SidePanel/>
      </section>
      <section className='right-container'>
        <Header/>
        <MainContent/>
      </section>
    </div>
  )
}

export default App;