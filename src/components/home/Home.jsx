import  { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import Slider from './slider/Slider';
import Favourites from './favourites/Favourites';
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <>
    {/* ============= hero section ========== */}
       <div className="">
       <Carousel fade interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://cdn0.weddingwire.in/article/1337/3_2/960/jpg/17331-bridal-jewellery-online-cinnamonpictures-lead.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://images.pexels.com/photos/5759215/pexels-photo-5759215.jpeg?cs=srgb&dl=pexels-varun-118342-5759215.jpg&fm=jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://w0.peakpx.com/wallpaper/519/135/HD-wallpaper-jewelry-hand-ring.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
       </div>

       {/* ========== top 3 colums ================================================================= */}

       <div className="container mt-5 pt-lg-3">
        <div className="row">
          <div className="col-lg-4 col-md-4 mt-lg-5 mt-md-5 mt-sm-2" data-aos="fade-up"  data-aos-duration="3000" >

           <div className="col-img">
            <img src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-02.jpg" alt="picture on girl" className='img-fluid' />
           </div>
           <h4  className='col-heading popins'>
           The Sheen of Shringaar
           </h4>
           <p className='text-muted  col-text montserrat'>
           The ideal embellishment to the bridal glow, we bring to you a collection of striking pieces in gold, handpicked for her special day. Carved meticulously, choose from an alluring assortment of statement sets, royal kadas and ravishing Rani Haars.
           </p>      
          </div>

          <div className="col-lg-4 col-md-4 ">
          <div className="col-img">
            <img src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-03.jpg" alt="picture on girl" className='img-fluid' />
           </div>
           <h4 className='col-heading popins'>
           Paint the town Gold
           </h4>
           <p className='text-muted col-text montserrat'>
           Tradition meets modernity in this stunning selection of sets, crafted with an assurance to stand out among the crowd. Bring home one of these spectacular statement pieces as an essential addition to your jewellery box.
           </p>
            </div>

          <div className="col-lg-4 col-md-4 col-md-4 mt-lg-5 mt-md-5 mt-sm-2" data-aos="fade-up"  data-aos-duration="3000">
          <div className="col-img">
            <img src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-04.jpg" alt="picture on girl" className='img-fluid' />
           </div>
           <h4  className='col-heading popins'>
           The Auspicious and Awe-inspiring
           </h4>
           <p className='text-muted col-text montserrat'>
           As she adorns her attire on her wedding day, we feel honoured to provide the essentials to complete her auspicious ensemble. View our magnificent picks for the most special day of a woman's life.
           </p>
          </div>
        </div>
       </div>

       {/* ========== ENDS top 3 colums ================================================================= */}

       {/* ========== SLICK SLIDER SECTION  STARTS================================================================= */}
       <div className="container">
       <Slider/>
       </div>
       {/* ========== SLICK SLIDER SECTION  ENDS================================================================= */}

       {/* ======== 2 cols section=== */}

       <div className="container mt-5 pt-lg-3 pb-3">
        {/* ======row one ============ */}
        <div className="row">
          <div className="col-lg-6 col-md-6 ">
            <img src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-09.jpg" className='img-fluid' alt="img" />
          </div>
          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center px-5  mt-sm-3 ">
         <div>
         <h4  className='col-heading popins'>
           Neckline Nuances
           </h4>
           <p className='text-muted  col-text montserrat'>
           Stand out subtly with these fine neck pieces in gold, curated with utmost detailing and perfections. With patterns woven to impress and stones engraved to wow, take home these neckline necessities today!
           </p>    
         </div>
          </div>
        </div>

        {/* ======== row two ===== */}
        <div className="row mt-5 pt-lg-5">
          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center px-5  mt-sm-3 ">
          <div>
         <h4  className='col-heading popins'>
         Circle of Life
           </h4>
           <p className='text-muted  col-text montserrat'>
           Charming and colourful adornments meet glittering gold in this collection of  kadas and bangles and rings. Add hues to your hands with these marvelous and magnificent pieces.
           </p>    
         </div>
          </div>
          <div className="col-lg-6 col-md-6  ">
          <img src="https://shamjewellers.com/wp-content/uploads/2018/06/2.jpg" className='img-fluid' alt="img" />
          </div>
        </div>
       </div>

    {/* ============= Favourites================================================
     */}
     <div className="container mt-4 mb-4">
     <h4 className='text-center popins'>Favourites</h4>
      <Favourites/>
     </div>


    {/* ========== bottom 3 colums ================================================================= */}

    <div className="container mt-5 pt-lg-3">
        <div className="row">
          <div className="col-lg-4 col-md-4 mt-lg-5 mt-md-5 mt-sm-2 "  data-aos="fade-up"  data-aos-duration="3000" >

           <div className="col-img">
            <img src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-16.jpg" alt="picture on girl" className='img-fluid' />
           </div>
           <h4  className='col-heading popins'>
           Neckline Nuances
           </h4>
           <p className='text-muted  col-text montserrat'>
           Stand out subtly with these fine neck pieces in gold, curated with utmost detailing and perfections. With patterns woven to impress and stones engraved to wow, take home these neckline necessities today!
           </p>      
          </div>

          <div className="col-lg-4 col-md-4 ">
          <div className="col-img">
            <img src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-17.jpg" alt="picture on girl" className='img-fluid' />
           </div>
           <h4 className='col-heading popins'>
           The Golden Armour  
           </h4>
           <p className='text-muted col-text montserrat'>
           Dressed in his best, he arrives to claim his bride. Select from several bold strings of gold for the groom, chosen for his special day.
           </p>
            </div>

          <div className="col-lg-4 col-md-4 col-md-4 mt-lg-5 mt-md-5 mt-sm-2"  data-aos="fade-up"  data-aos-duration="3000" >
          <div className="col-img">
            <img src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-18.jpg" alt="picture on girl" className='img-fluid' />
           </div>
           <h4  className='col-heading popins'>
           A Glistening Glee
           </h4>
           <p className='text-muted col-text montserrat'>
           As the beauty of the bride's smile is unmatched, we can only try to add glitter to her special day, with exemplary tikkas for her forehead, stunning sets for her neckline and beautiful bangles and karas for her delicate wrists.
           </p>
          </div>
        </div>
       </div>

       {/* ========== ENDS bottom 3 colums ================================================================= */}
    </>
  )
}

export default Home
