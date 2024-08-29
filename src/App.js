import Nav from "./Components/Nav";
import Footer from "./Components/footer";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import { CircularProgress ,Pagination} from "@mui/material";
import Cardo from "./Components/Card";
import alanBtn from '@alan-ai/alan-sdk-web';
import FormDialog from "./Components/FormDialog";


export const ThemeContext = createContext(null);

function App() {
  const [Data, setData] = useState([]);
  const [dark, setDark] = useState("dark");
  const [query, setQuery] = useState("india");
  const [sort, setSort]=useState([]);
  const [page, setPage]=useState(0);

  useEffect(() => {
    alanBtn({
        key: 'cb5d5a6eb78a8fd66a6fee08f40f02dc2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          fetchdata(commandData.data);
        }
    });
  }, []);



   useEffect(() => {

    goToNextPage();
    



    

    fetchdata(query);
  }, [page]);

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This provides smooth scrolling
    });
}

// Function to simulate going to the next page
function goToNextPage() {
    // Replace this with the actual logic to navigate to the next page
    // For demonstration purposes, we'll just scroll to the top.
    scrollToTop();
}

  

  const fetchdata = async (e) => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${e}&apiKey=9d2c6e31afac46f181d1a3f4272245f2`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      setData(result.articles);
      setQuery("");
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error as needed
    }
  };
  const fetchsortdata = async (e) => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${e.topic!=="" ?e.topic:query}&from=${e.from}&to=${e.to}&sortBy=${e.sort}&apiKey=9d2c6e31afac46f181d1a3f4272245f2`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      setData(result.articles);
      setQuery("");
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error as needed
    }
  };
  
  
  
  
  
  


  
  


  const newsperpage = 8;
  const pagevisited=page*newsperpage;
  const count=Math.ceil(Data.length/newsperpage)
  


  const display=Data.slice(pagevisited,pagevisited+newsperpage);
  const submit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      fetchdata(query);
      setQuery("");
      
      
      
    }



  }
  const getdata = (d) => {
    fetchdata(d);
  }
  const getsortdata = (d) => {
    fetchsortdata(d);
  }

  const toggletheme = () => {
    setDark((c) => (c === "light" ? "dark" : "light"));
  }

  




  return (
    <ThemeContext.Provider value={{ dark, toggletheme }}>
      <div id={dark}>

        <Nav fordata={getdata} onChange={toggletheme} checked={dark} />

        <section className="sectio">
          <div className="search">
            <input type='text' onKeyPress={submit} value={query} onChange={(e) => { setQuery(e.target.value) }} className="inputsearch" placeholder="Search..."></input>
            

          </div>
         

          <h1>Top headline</h1>
          <FormDialog fordata={getsortdata}/>
          {Data.length>0 ? display.map((news) => (<Cardo key={news.id} data={news}/>)) : <div ><img className="imgo" src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7968.jpg?w=740&t=st=1694082771~exp=1694083371~hmac=9ffe240c2f50ceea61e9f6473aaa2e61a7f017dea7c2ee055c2b91b28efc87bc"/><h5>No Data Found || Try valid input</h5></div>}

          <Pagination className="pages" color={dark==='dark' ? 'primary' :'standard'} count={count-1} onChange={(e,v)=>{setPage(v);}} />



        </section>
      
        
        <Footer fordata={getdata} />


      </div>
    </ThemeContext.Provider>
  );
}

export default App;
