import { useState } from "react";

//components
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";


import Lottie from "lottie-react";
import LoadingAnimation from "./assets/lottie_animations/loading.json";

const gradient = "bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500";
const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [isReady, setIsReady] = useState(false);
  const [navbartransparency, setNavbartransparency] = useState(true);
  if (!isReady) {
    return (
      <div
        onClick={() => {
          setIsReady(true);
        }}
        className="bg-white h-[100vh] w-[100vw] justify-center items-center flex flex-col"
      >
        <div className="w-48">
          <Lottie loop={true} animationData={LoadingAnimation}></Lottie>
        </div>
        <p className="text-black text-4xl ">FinshOt</p>
      </div>
    ); 
  }
  return (
    <div
      className={`${gradient} w-[100vw] h-[100vh]`}
      onScroll={() => {
        alert("1")
        setNavbartransparency(false);
      }}
    >
      <Navbar transparency={navbartransparency}></Navbar>
      {currentPage === "landing" && <Landing></Landing>}
      {currentPage==='home' && <Landing></Landing>}
      {
        ()=>{
          switch(currentPage){
            case 'landing':
              return <Landing changePage={setCurrentPage}></Landing>
            case 'home':
              return <Home></Home>
            default:
              return <Landing></Landing>
          }
        }
      }
      <Footer></Footer>
    </div>
  );
};
export default App;