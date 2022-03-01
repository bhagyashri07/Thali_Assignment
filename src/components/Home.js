import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()


  return (


    <>



      <div >
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://weekendspecial.co.za/wp-content/uploads/2019/11/thali-thali-cat-pic-1.jpg" className="carousal-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Are You Hungry?</h5>
                <h1> Don't Wait !! </h1>
                <p>Let Start to Order Food Now.....</p>
                <button className="slider-btn" onClick={() => { navigate("/Menu") }}>Check Out Menu</button>

              </div>
            </div>
            <div className="carousel-item">
              <img src="http://dosaking.net/wp-content/uploads/2014/05/dk-header-fileminimizer.jpg" className="carousal-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 >Try Out</h5>
                <h1>Special Thali</h1>
                <p>Nothing Brings People Together Like Good Food.</p>
                <button className="slider-btn" onClick={() => { navigate("/Menu") }}>Check Out Menu</button>

              </div>
            </div>
            <div className="carousel-item">
              <img src="https://static.wixstatic.com/media/2d2f62_874e5e2ea68b40708dde67d4450e0c61~mv2_d_4697_3411_s_4_2.jpg/v1/fill/w_980,h_712,al_c,q_85,usm_0.66_1.00_0.01/2d2f62_874e5e2ea68b40708dde67d4450e0c61~mv2_d_4697_3411_s_4_2.jpg" className="carousal-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">

                <h1> Taste In Each Bite</h1>
                <p>Fill Your Empty Stomach With Declicious Food.</p>
                <button className="slider-btn" onClick={() => { navigate("/Menu") }}>Check Out Menu</button>

              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <footer>
        <div className="footer">
          <div className='footer-title'>
            <h1>Follow Us</h1>

            <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square1-512.png"
              alt="img" style={{ maxWidth: '50px', maxHeight: '50px', marginLeft: "20px" }}></img>
            <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-square1-512.png"
              alt="img" style={{ maxWidth: '50px', maxHeight: '50px', marginLeft: "20px" }}></img>
            <img src="https://th.bing.com/th/id/R.46a2efda87fd8b08c2ca22b79bd52251?rik=wlJG9X1j1Y2d3w&riu=http%3a%2f%2fwww.kaneroe.org%2fwp-content%2fuploads%2f2018%2f02%2ftwitter-icon-square-logo-preview.png&ehk=hbJdB4HyDABEoHh3BcQyzS8RQh2A%2fJnq5pyeJeE7oDg%3d&risl=&pid=ImgRaw&r=0"
              alt="img" style={{ maxWidth: '50px', maxHeight: '50px', marginLeft: "20px" }}></img>
            <img src="https://static.4kdownload.com/main/img/logo/youtube-square-800.e86ced36314c.png"
              alt="img" style={{ maxWidth: '50px', maxHeight: '50px', marginLeft: "20px" }}></img>
            <img src="https://wallpapercave.com/wp/wp2860517.jpg"
              alt="img" style={{ maxWidth: '50px', maxHeight: '50px', marginLeft: "20px" }}></img>

            <div className='footer-sub'>
              <h5> @2019,All Right Reserved </h5>

            </div>
          </div>
        </div>


      </footer>
    </>


  )
}

export default Home