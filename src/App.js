import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';

import Footer from './components/Footer';
import GiftCategory from './pages/GiftCategory';
import BirthdayGift from './pages/BirthdayGift';
import WeddingGift from './pages/WeddingGift';
import RosesGift from './pages/RosesGift';
import JewellryGift from './pages/JewellryGift';
import ChrestmasGift from './pages/ChrestmasGift';
import WinterGift from './pages/WinterGift';



import GiftPackge from './pages/GiftPackge';
import BirthdayPackge from './pages/BirthdayPackge';
import WeddingPackge from './pages/WeddingPackge';
import RosesPackge from './pages/RosesPackge';
import JewellryPackge from './pages/JewellryPackge';
import ChrestmasPackge from './pages/ChrestmasPackge';
import WinterPackge from './pages/WinterPackge';




import Giftcake from './pages/Giftcake';
import Birthdaycake from './pages/Birthdaycake';
import Weddingcake from './pages/Weddingcake';
import Chrestmascake from './pages/Chrestmascake';
import Wintercake from './pages/Wintercake';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/gifts' element={<GiftCategory />} />
        <Route path='/birthday-gifts' element={<BirthdayGift />} />
        <Route path='/wedding-gifts' element={<WeddingGift />} />
        <Route path='/roses-gifts' element={<RosesGift />} />
        <Route path='/jewellry-gifts' element={<JewellryGift />} />
        <Route path='/winter-gifts' element={<WinterGift />} />
        <Route path='/christmas-gifts' element={<ChrestmasGift />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/product/:id" component={ProductDetails} />



        <Route path='/giftsPackge' element={<GiftPackge />} />
        <Route path='/birthday-Packge' element={<BirthdayPackge />} />
        <Route path='/wedding-Packge' element={<WeddingPackge />} />
        <Route path='/roses-Packge' element={<RosesPackge />} />
        <Route path='/jewellry-Packge' element={<JewellryPackge />} />
        <Route path='/winter-Packge' element={<WinterPackge />} />
        <Route path='/christmas-Packge' element={<ChrestmasPackge />} />
        <Route path='/cart' element={<Cart/>} />




        <Route path='/giftscake' element={<Giftcake />} />
        <Route path='/birthday-cake' element={<Birthdaycake />} />
        <Route path='/wedding-cake' element={<Weddingcake />} />
        <Route path='/winter-cake' element={<Wintercake />} />
        <Route path='/christmas-cake' element={<Chrestmascake />} />
        <Route path='/cart' element={<Cart/>} />



      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;






