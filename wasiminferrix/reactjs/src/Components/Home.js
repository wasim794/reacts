// Contact.js

import React, { Component } from 'react';
import Head from '../Components/Head';
import Footer from '../Components/Footer';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      ress:''
    };
  }



    componentDidMount() {
    fetch("https://carrylush.herokuapp.com/getBannerImages")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.data);
          this.setState({
            isLoaded: true,
            items: result.data,
            ress:result.message
          });

        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

      // second api call HERE

      fetch("https://carrylush.herokuapp.com/getBannerImages")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result.data);
            this.setState({
              isLoaded: true,
              items: result.data,
              ress:result.message
            });

          },

          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
  }


  render() {
    return (
        <div>
          <Head />
                 {/* <div id="preloder">
          <div className="loader" />
        </div> */}
        {/* Header Section Begin */}
        <header className="header-section">
          <div className="header-top">
            <div className="container">
              <div className="ht-left">
                <div className="mail-service">
                  <i className=" fa fa-envelope" />
                  hello.colorlib@gmail.com
                </div>
                <div className="phone-service">
                  <i className=" fa fa-phone" />
                  +65 11.188.888
                </div>
              </div>
              <div className="ht-right">
                <a href="#" className="login-panel"><i className="fa fa-user" />Login</a>
                <div className="lan-selector">
                  <select className="language_drop" name="countries" id="countries" style={{width: '300px'}}>
                    <option value="yt" data-image="img/flag-1.jpg" data-imagecss="flag yt" data-title="English">English</option>
                    <option value="yu" data-image="img/flag-2.jpg" data-imagecss="flag yu" data-title="Bangladesh">German </option>
                  </select>
                </div>
                <div className="top-social">
                  <a href="#"><i className="ti-facebook" /></a>
                  <a href="#"><i className="ti-twitter-alt" /></a>
                  <a href="#"><i className="ti-linkedin" /></a>
                  <a href="#"><i className="ti-pinterest" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="inner-header">
              <div className="row">
                <div className="col-lg-2 col-md-2">
                  <div className="logo">
                    <a href="./index.html">
                      <img src="img/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="advanced-search">
                    <button type="button" className="category-btn">All Categories</button>
                    <div className="input-group">
                      <input type="text" placeholder="What do you need?" />
                      <button type="button"><i className="ti-search" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 text-right col-md-3">
                  <ul className="nav-right">
                    <li className="heart-icon">
                      <a href="#">
                        <i className="icon_heart_alt" />
                        <span>1</span>
                      </a>
                    </li>
                    <li className="cart-icon">
                      <a href="#">
                        <i className="icon_bag_alt" />
                        <span>3</span>
                      </a>
                      <div className="cart-hover">
                        <div className="select-items">
                          <table>
                            <tbody>
                              <tr>
                                <td className="si-pic"><img src="img/select-product-1.jpg" alt="" /></td>
                                <td className="si-text">
                                  <div className="product-selected">
                                    <p>$60.00 x 1</p>
                                    <h6>Kabino Bedside Table</h6>
                                  </div>
                                </td>
                                <td className="si-close">
                                  <i className="ti-close" />
                                </td>
                              </tr>
                              <tr>
                                <td className="si-pic"><img src="img/select-product-2.jpg" alt="" /></td>
                                <td className="si-text">
                                  <div className="product-selected">
                                    <p>$60.00 x 1</p>
                                    <h6>Kabino Bedside Table</h6>
                                  </div>
                                </td>
                                <td className="si-close">
                                  <i className="ti-close" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="select-total">
                          <span>total:</span>
                          <h5>$120.00</h5>
                        </div>
                        <div className="select-button">
                          <a href="#" className="primary-btn view-card">VIEW CARD</a>
                          <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                        </div>
                      </div>
                    </li>
                    <li className="cart-price">$150.00</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <div className="container">
              <div className="nav-depart">
                <div className="depart-btn">
                  <i className="ti-menu" />
                  <span>All departments</span>
                  <ul className="depart-hover">
                    <li className="active"><a href="#">Women’s Clothing</a></li>
                    <li><a href="#">Men’s Clothing</a></li>
                    <li><a href="#">Underwear</a></li>
                    <li><a href="#">Kid's Clothing</a></li>
                    <li><a href="#">Brand Fashion</a></li>
                    <li><a href="#">Accessories/Shoes</a></li>
                    <li><a href="#">Luxury Brands</a></li>
                    <li><a href="#">Brand Outdoor Apparel</a></li>
                  </ul>
                </div>
              </div>
              <nav className="nav-menu mobile-menu">
                <ul>
                  <li className="active"><a href="./index.html">Home</a></li>
                  <li><a href="./shop.html">Shop</a></li>
                  <li><a href="#">Collection</a>
                    <ul className="dropdown">
                      <li><a href="#">Men's</a></li>
                      <li><a href="#">Women's</a></li>
                      <li><a href="#">Kid's</a></li>
                    </ul>
                  </li>
                  <li><a href="./blog.html">Blog</a></li>
                  <li><a href="./contact.html">Contact</a></li>
                  <li><a href="#">Pages</a>
                    <ul className="dropdown">
                      <li><a href="./blog-details.html">Blog Details</a></li>
                      <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                      <li><a href="./check-out.html">Checkout</a></li>
                      <li><a href="./faq.html">Faq</a></li>
                      <li><a href="./register.html">Register</a></li>
                      <li><a href="./login.html">Login</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div id="mobile-menu-wrap" />
            </div>
          </div>
        </header>
        {/* Header End */}
        {/* Hero Section Begin */}
        <section className="hero-section">
          <div className="hero-items">


            <div className="">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">

                    <ul>
                    <li>{this.state.ress}</li>
                    {this.state.items.map(item => (
                      <li key={item.Id}>
                      <img src={item.BannerLink +"/"+ item.BannerImage}/>
                      <span>{item.BannerName}</span>
                      <span>{item.BannerDescription}</span>
                      <span>{item.RecordTime}</span>
                      </li>
                    ))}
                  </ul>
                    <span>Bag,kids</span>
                    <h1>Black friday</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore</p>
                    <a href="#" className="primary-btn">Shop Now</a>
                  </div>
                </div>
                <div className="off-card">
                  <h2>Sale <span>50%</span></h2>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* Hero Section End */}
        {/* Banner Section Begin */}
        <div className="banner-section spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-banner">
                  <img src="img/banner-1.jpg" alt="" />
                  <div className="inner-text">
                    <h4>Men’s</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-banner">
                  <img src="img/banner-2.jpg" alt="" />
                  <div className="inner-text">
                    <h4>Women’s</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-banner">
                  <img src="img/banner-3.jpg" alt="" />
                  <div className="inner-text">
                    <h4>Kid’s</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Section End */}
        {/* Women Banner Section Begin */}
        <section className="women-banner spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="product-large set-bg" data-setbg="img/products/women-large.jpg">
                  <h2>Women’s</h2>
                  <a href="#">Discover More</a>
                </div>
              </div>
              <div className="col-lg-8 offset-lg-1">
                <div className="filter-control">
                  <ul>
                    <li className="active">Clothings</li>
                    <li>HandBag</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                  </ul>
                </div>
                <div className="product-slider owl-carousel">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/women-1.jpg" alt="" />
                      <div className="sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Coat</div>
                      <a href="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $14.00
                        <span>$35.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/women-2.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Shoes</div>
                      <a href="#">
                        <h5>Guangzhou sweater</h5>
                      </a>
                      <div className="product-price">
                        $13.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/women-3.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a href="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/women-4.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a href="#">
                        <h5>Converse Shoes</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Women Banner Section End */}
        {/* Deal Of The Week Section Begin*/}
        <section className="deal-of-week set-bg spad" data-setbg="img/time-bg.jpg">
          <div className="container">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h2>Deal Of The Week</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                  consectetur adipisicing elit </p>
                <div className="product-price">
                  $35.00
                  <span>/ HanBag</span>
                </div>
              </div>
              <div className="countdown-timer" id="countdown">
                <div className="cd-item">
                  <span>56</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>12</span>
                  <p>Hrs</p>
                </div>
                <div className="cd-item">
                  <span>40</span>
                  <p>Mins</p>
                </div>
                <div className="cd-item">
                  <span>52</span>
                  <p>Secs</p>
                </div>
              </div>
              <a href="#" className="primary-btn">Shop Now</a>
            </div>
          </div>
        </section>
        {/* Deal Of The Week Section End */}
        {/* Man Banner Section Begin */}
        <section className="man-banner spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="filter-control">
                  <ul>
                    <li className="active">Clothings</li>
                    <li>HandBag</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                  </ul>
                </div>
                <div className="product-slider owl-carousel">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/man-1.jpg" alt="" />
                      <div className="sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Coat</div>
                      <a href="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $14.00
                        <span>$35.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/man-2.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Shoes</div>
                      <a href="#">
                        <h5>Guangzhou sweater</h5>
                      </a>
                      <div className="product-price">
                        $13.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/man-3.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a href="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/man-4.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a href="#">
                        <h5>Converse Shoes</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="product-large set-bg m-large" data-setbg="img/products/man-large.jpg">
                  <h2>Men’s</h2>
                  <a href="#">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Man Banner Section End */}
        {/* Instagram Section Begin */}
        <div className="instagram-photo">
          <div className="insta-item set-bg" data-setbg="img/insta-1.jpg">
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5><a href="#">colorlib_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="img/insta-2.jpg">
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5><a href="#">colorlib_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="img/insta-3.jpg">
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5><a href="#">colorlib_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="img/insta-4.jpg">
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5><a href="#">colorlib_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="img/insta-5.jpg">
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5><a href="#">colorlib_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="img/insta-6.jpg">
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5><a href="#">colorlib_Collection</a></h5>
            </div>
          </div>
        </div>
        {/* Instagram Section End */}
        {/* Latest Blog Section Begin */}
        <section className="latest-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>From The Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-latest-blog">
                  <img src="img/latest-1.jpg" alt="" />
                  <div className="latest-text">
                    <div className="tag-list">
                      <div className="tag-item">
                        <i className="fa fa-calendar-o" />
                        May 4,2019
                      </div>
                      <div className="tag-item">
                        <i className="fa fa-comment-o" />
                        5
                      </div>
                    </div>
                    <a href="#">
                      <h4>The Best Street Style From London Fashion Week</h4>
                    </a>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-latest-blog">
                  <img src="img/latest-2.jpg" alt="" />
                  <div className="latest-text">
                    <div className="tag-list">
                      <div className="tag-item">
                        <i className="fa fa-calendar-o" />
                        May 4,2019
                      </div>
                      <div className="tag-item">
                        <i className="fa fa-comment-o" />
                        5
                      </div>
                    </div>
                    <a href="#">
                      <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                    </a>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-latest-blog">
                  <img src="img/latest-3.jpg" alt="" />
                  <div className="latest-text">
                    <div className="tag-list">
                      <div className="tag-item">
                        <i className="fa fa-calendar-o" />
                        May 4,2019
                      </div>
                      <div className="tag-item">
                        <i className="fa fa-comment-o" />
                        5
                      </div>
                    </div>
                    <a href="#">
                      <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                    </a>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefit-items">
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-benefit">
                    <div className="sb-icon">
                      <img src="img/icon-1.png" alt="" />
                    </div>
                    <div className="sb-text">
                      <h6>Free Shipping</h6>
                      <p>For all order over 99$</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-benefit">
                    <div className="sb-icon">
                      <img src="img/icon-2.png" alt="" />
                    </div>
                    <div className="sb-text">
                      <h6>Delivery On Time</h6>
                      <p>If good have prolems</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-benefit">
                    <div className="sb-icon">
                      <img src="img/icon-1.png" alt="" />
                    </div>
                    <div className="sb-text">
                      <h6>Secure Payment</h6>
                      <p>100% secure payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Blog Section End */}
        {/* Partner Logo Section Begin */}
        <div className="partner-logo">
          <div className="container">
            <div className="logo-carousel owl-carousel">
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="img/logo-carousel/logo-1.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="img/logo-carousel/logo-2.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="img/logo-carousel/logo-3.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="img/logo-carousel/logo-4.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="img/logo-carousel/logo-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Partner Logo Section End */}
        {/* Footer Section Begin */}
        <Footer />
        </div>
    );
  }
}

export default Home;
