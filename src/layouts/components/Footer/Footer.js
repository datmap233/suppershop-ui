import images from "~/assets/images";
import Button from "~/components/Button";

function Header() {
    return (
        <div className="footer">
            <div className="footer-info">
               <div className="container">
                  <div className="row">
                     <div className="col-md-3">
                        <div className="footer-logo"><Button href="/"><img src={images.logo} alt=""/></Button></div>
                     </div>
                     <div className="col-md-3 col-sm-6">
                        <h4 className="title">Contact <strong>Info</strong></h4>
                        <p>227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh</p>
                        <p>Call Us : 0348 590 300</p>
                        <p>Email : trantan302002@gmail.com</p>
                     </div>
                     <div className="col-md-3 col-sm-6">
                        <h4 className="title">Customer<strong> Support</strong></h4>
                        <ul className="support">
                           <li><a href="/">FAQ</a></li>
                           <li><a href="/">Payment Option</a></li>
                           <li><a href="/">Booking Tips</a></li>
                           <li><a href="/">Infomation</a></li>
                        </ul>
                     </div>
                     <div className="col-md-3">
                        <h4 className="title">Get Our <strong>Newsletter </strong></h4>
                        <p>Lorem ipsum dolor ipsum dolor.</p>
                        <form className="newsletter">
							<input type="text" name="" placeholder="Type your email...."/>
							<input type="submit" value="SignUp" className="button"/>
						</form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    );
}

export default Header;
