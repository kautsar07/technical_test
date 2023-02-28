import Blog from "./Components/Blog";
import Category from "./Components/Category";
import FavoriteMenu from "./Components/FavoriteMenu";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import WhyChoiceUs from "./Components/WhyChoiceUs";



function App() {
  return (
   <div >
    <Navbar/>
    <Hero/>
    <Category/>
    <WhyChoiceUs/>
    <FavoriteMenu/>
    <Blog/>
   </div>
  );
}

export default App;
