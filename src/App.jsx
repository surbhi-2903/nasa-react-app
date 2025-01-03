import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [showModal, setShowModal] = useState(false);
  function handleToggleModal() {
    setShowModal(!showModal);
  }
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      //CACHING THE OBTAINED DATA
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      const getlocalstorage = localStorage.getItem(localKey);
      if (getlocalstorage) {
        const apiData = JSON.parse(getlocalstorage);
        setData(apiData);
        console.log('FETCHED FROM CACHE TODAY')
        return;
      }
      localStorage.clear();
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        localStorage.setItem(localKey, JSON.stringify(apiData));
        console.log('FETCHED FROM API TODAY')
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData();
  }, []);
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i class="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <Sidebar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
