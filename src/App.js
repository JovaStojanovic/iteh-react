import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Kontakt from './components/Contact';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";


function App() {
  
  const [cartNum, setCartNum] = useState(0);
  const [proizvodi] = useState([
    {
      id: 1,
      naziv: "PRS SE STANDARD 24",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/SE-ST4TB-PRS-SE-Standard-24-Guitar-Translucent-Blue-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis:  "Signature PRS features, tone and playability in an affordable package — that's the SE Standard 24 electric guitar in a nutshell! This stellar six-string is perfect for players looking to upgrade from their first or second instrument, but it's also a fantastic option for experienced musicians who want an easy-playing, versatile and dependable guitar for the stage, studio or even just the home.",
      cena:4400,
      kolicina: 0,
    },
    {
      id: 2,
      naziv: "PRS SE MARK TREMONTI",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/STTRBL-PRS-SE-Mark-Tremonti-Guitar-Standard-Black-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis:  "Mark Tremonti is one of PRS Guitars' most enduring signature artists. With a relationship that has spanned more than two decades, the Grammy Award-winning Creed and Alter Bridge guitarist has used PRS instruments to power his distinctive drop-tuned riffs and angelic clean melodies on multiple recordings and stages all over the world.",
      cena:4000,
      kolicina: 0

    },
    {
      id: 3,
      naziv: "PRS SE STANDARD 24",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/SE-ST4VC-PRS-SE-Standard-24-Guitar-Vintage-Cherry-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis: "Signature PRS features, tone and playability in an affordable package — that's the SE Standard 24 electric guitar in a nutshell! This stellar six-string is perfect for players looking to upgrade from their first or second instrument, but it's also a fantastic option for experienced musicians who want an easy-playing, versatile and dependable guitar for the stage, studio or even just the home.",
      cena:5000,
      kolicina: 0
    },
    {
      id: 4,
      naziv: "PRS SE 245 STANDARD",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/SE-ST245TS-PRS-SE-245-Standard-Guitar-Tobacco-Sunburst-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis:  "The PRS SE 245 Standard has a classic voice that is eminently recordable and gig-ready, thanks to its 245 S pickups and versatile control layout. Signature PRS appointments include a set Wide Fat Mahogany neck, Rosewood fretboard with bird inlays, and an adjustable Stoptail bridge.",
      cena:3000,
      kolicina: 0,

    },
    {
      id: 5,
       naziv: "PRS SE STANDARD 24",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/SE-ST4TB-PRS-SE-Standard-24-Guitar-Translucent-Blue-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis:  "Signature PRS features, tone and playability in an affordable package — that's the SE Standard 24 electric guitar in a nutshell! This stellar six-string is perfect for players looking to upgrade from their first or second instrument, but it's also a fantastic option for experienced musicians who want an easy-playing, versatile and dependable guitar for the stage, studio or even just the home.",
      cena:4400,
      kolicina: 0,

    },
    {
      id: 6,
      naziv: "PRS SE MARK TREMONTI",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/STTRBL-PRS-SE-Mark-Tremonti-Guitar-Standard-Black-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis:  "Mark Tremonti is one of PRS Guitars' most enduring signature artists. With a relationship that has spanned more than two decades, the Grammy Award-winning Creed and Alter Bridge guitarist has used PRS instruments to power his distinctive drop-tuned riffs and angelic clean melodies on multiple recordings and stages all over the world.",
      cena:4000,
      kolicina: 0
    },
    {
      id: 7,
      naziv: "PRS SE STANDARD 24",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/SE-ST4VC-PRS-SE-Standard-24-Guitar-Vintage-Cherry-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis: "Signature PRS features, tone and playability in an affordable package — that's the SE Standard 24 electric guitar in a nutshell! This stellar six-string is perfect for players looking to upgrade from their first or second instrument, but it's also a fantastic option for experienced musicians who want an easy-playing, versatile and dependable guitar for the stage, studio or even just the home.",
      cena:5000,
      kolicina: 0
    },
    {
      id: 8,
      naziv: "PRS SE 245 STANDARD",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/SE-ST245TS-PRS-SE-245-Standard-Guitar-Tobacco-Sunburst-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis:  "The PRS SE 245 Standard has a classic voice that is eminently recordable and gig-ready, thanks to its 245 S pickups and versatile control layout. Signature PRS appointments include a set Wide Fat Mahogany neck, Rosewood fretboard with bird inlays, and an adjustable Stoptail bridge.",
      cena:3000,
      kolicina: 0,
    },
    {
      id: 9,
      naziv: "PRS SE STANDARD 24",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/SE-ST4TB-PRS-SE-Standard-24-Guitar-Translucent-Blue-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis:  "Signature PRS features, tone and playability in an affordable package — that's the SE Standard 24 electric guitar in a nutshell! This stellar six-string is perfect for players looking to upgrade from their first or second instrument, but it's also a fantastic option for experienced musicians who want an easy-playing, versatile and dependable guitar for the stage, studio or even just the home.",
      cena:4400,
      kolicina: 0,

    },
    {
      id: 10,
      naziv: "PRS SE MARK TREMONTI",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/STTRBL-PRS-SE-Mark-Tremonti-Guitar-Standard-Black-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis:  "Mark Tremonti is one of PRS Guitars' most enduring signature artists. With a relationship that has spanned more than two decades, the Grammy Award-winning Creed and Alter Bridge guitarist has used PRS instruments to power his distinctive drop-tuned riffs and angelic clean melodies on multiple recordings and stages all over the world.",
      cena:4000,
      kolicina: 0
    },
    {
      id: 11,
      naziv: "PRS SE STANDARD 24",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/SE-ST4VC-PRS-SE-Standard-24-Guitar-Vintage-Cherry-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis: "Signature PRS features, tone and playability in an affordable package — that's the SE Standard 24 electric guitar in a nutshell! This stellar six-string is perfect for players looking to upgrade from their first or second instrument, but it's also a fantastic option for experienced musicians who want an easy-playing, versatile and dependable guitar for the stage, studio or even just the home.",
      cena:5000,
      kolicina: 0
    },
    {
      id: 12,
      naziv: "PRS SE 245 STANDARD",
      proizvod: "Electric",
      slika: "https://andertons-productimages.imgix.net/SE-ST245TS-PRS-SE-245-Standard-Guitar-Tobacco-Sunburst-Body.jpg?auto=compress&w=1000&h=1000&auto=format",
      opis:  "The PRS SE 245 Standard has a classic voice that is eminently recordable and gig-ready, thanks to its 245 S pickups and versatile control layout. Signature PRS appointments include a set Wide Fat Mahogany neck, Rosewood fretboard with bird inlays, and an adjustable Stoptail bridge.",
      cena:3000,
      kolicina: 0,
    },

    
    
  ]);

  const [searchProduct, setsearchProduct] = useState(proizvodi[0]);
  
  const [cartProducts, setCartProducts] = useState([]);

  const [totalPrice, settotalPrice] = useState(0);

  const [currentPage, setcuerrentPage] = useState(1);

  const [productsPerPage, setproductsPerPage] = useState(6);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  function osveziUpite(){
    let noviProizvodi=proizvodi.filter((prod)=>prod.kolicina>0);
    setCartProducts(noviProizvodi);
  }

  function detaljnije(product) {
      setsearchProduct(product);
  }

  useEffect(()=>{
    console.log("promena");
  }, [searchProduct]);

  function posaljiUpit(id, kolicina) {

    let num = parseInt(kolicina);
    if(num===0){
      
    }
    else{
      proizvodi.forEach((prod) => {
        if (prod.id === id) {
          if (prod.kolicina === 0) setCartNum(cartNum + 1);
          prod.kolicina = prod.kolicina + num;
          let price=totalPrice+prod.cena*num;
          settotalPrice(price);

        }

      }
      );
      osveziUpite();
    }
  }
  
  function otkaziUpit(id, kolicina) {
    setCartNum(cartNum - 1);
    let num = parseInt(kolicina);
    proizvodi.forEach((prod) => {
      if (prod.id === id) {
        prod.kolicina = prod.kolicina - num;
        let price=totalPrice-prod.cena*num;
        settotalPrice(price);
        console.log(totalPrice);
      }

    }
    );
    osveziUpite();
  }

  function potvrdiPorudzbinu(){
    document.getElementById("uspešno").style.visibility="visible";
    setTimeout(
      function () {
      document.getElementById("uspešno").style.visibility="hidden";
      setCartNum(0);
      proizvodi.forEach((prod)=> prod.kolicina=0);
      settotalPrice(0);
      setCartProducts([]);},3000);
    }
  
  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={<Main />}
            />
         <Route
          path="/proizvodi"
          element = {<Products products={proizvodi} detaljnije={detaljnije} firstProductIndex={firstProductIndex} lastProductIndex={lastProductIndex} productsPerPage={productsPerPage} currentPage={currentPage} setcuerrentPage={setcuerrentPage}/>}
          />  
          <Route
            path="/kontakt" element={<Kontakt />}
            />
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
    );
}

export default App;
