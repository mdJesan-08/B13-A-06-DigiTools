import './App.css'
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import { Suspense, useState } from 'react';

const fetchData = async () =>
{
  const res = await fetch('/data.json');
  return res.json();
}
const promisedData = fetchData();
function App() {
  

  const [cartList, setCartList] = useState([]);

  console.log(promisedData);
  return (
    <div className='container mx-auto'>
      <Hero  cartList={cartList}/>
      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
          <Body productInfo={promisedData}  cartList={cartList} setCartList={setCartList} />
      </Suspense>

      <Footer/>
    </div>
  )
}

export default App
