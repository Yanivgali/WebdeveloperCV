import About from './components/AboutMe/aboutme';
import Info from './components/Info/info';
import style from './App.module.css';
function App() {
  return (
      <div className={style.continer}>
          <About />
          <Info/>
    </div>
  );
}

export default App;
