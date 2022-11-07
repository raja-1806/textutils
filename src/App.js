
import About from './component/About';
import Navbar from './component/Navbar'
// import Textform from './component/Textform'

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About" />
      {/* <Textform heading="Enter your text below to analyze" /> */}
      <About />
    </>
  );
}

export default App;
