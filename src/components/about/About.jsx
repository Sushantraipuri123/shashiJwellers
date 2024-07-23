import React from 'react'
import "./About.css"
function About() {
  return (
    <>
      <div className="container-fluid">
        <img src="https://5.imimg.com/data5/SELLER/Default/2021/11/GF/CO/WB/17251528/jewellery-shops-interiors.jpg" alt="our shop" className='img-fluid about-img' />
      </div>

      <div className="container mw-50 mt-4">
        {/* ================row 1================================ */}
        <div className="row">
          <div className="col-lg-3 col-md-3 ">
            <h4 className='text-center popins'>About Us</h4>
          </div>
          <div className="col-lg-9 col-md-3 text-muted col-text montserrat">
            With an intent to bring in fair dealings at the best price in the world of jewellery, Sham Jewellers was born in 1990. The biggest and most distinguished jewellery store in the region , Sham Jewellers proudly presents to its customers a grand variety of the most glorious and chic picks from the jewellery industry, leaving them truly spoilt for choice. Be it basic gold bangles or stellar wedding masterpieces, Sham Jewellers offers a ravishing range of gold, kundan, jadau, meenakari, solitaire, polki and diamond jewellery with the  promise of transparent policies and warm service. Today, after over three decades of its inception, Sham stands synonymous with 100% hallmarked jewellery, 100% transparency in making charges, 100% commitment proved by same buying and selling rate with no overcharge in the name of wastage and 100% return guarantee, cash or exchange. Step into this world of opulence, magnificence and excellence and bedeck yourself with a scintillating sparkle.
          </div>
        </div>

        {/* ================row 2================================ */}
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 ">
            <h4 className='text-center popins'> Contact</h4>
          </div>
          <div className="col-lg-9 col-md-3 text-muted col-text montserrat">
            Telephone: +91 98166 22883<br />
            shashijweller@gmail.com
          </div>
        </div>

         {/* ================row 4================================ */}
         <div className="row mt-5">
          <div className="col-lg-3 col-md-3 ">
            <h4 className='text-center popins'> Address</h4>
          </div>
          <div className="col-lg-9 col-md-3 text-muted col-text montserrat">
          Near Santoshi Mata Mandir, Dari, Dharamshala,<br/>
           Gabli Dar, Himachal Pradesh 176057
          </div>
        </div>

      </div>
    </>
  )
}

export default About
