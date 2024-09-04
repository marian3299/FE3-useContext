import "./App.css";
import Body from "./components/Body";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Body />
      </Layout>
    </>
  );
}

export default App;
