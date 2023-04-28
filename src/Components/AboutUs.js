import React from 'React';

function AboutUs() {
    return(


        <section>

{/* <!-- Preloader --> */}
        <div class="site-preloader-wrap">
            <div class="cf-loader">
                <div class="loading-spinner"></div>
                <div class="go-rounder"></div>
                <div class="go-rounder another"></div>
                <div class="loader-text">
                    website Loading
                </div>
            </div>
        </div>
        {/* <!-- End Preloader -->
        
        <!-- Start Top Header Area --> */}
        <div class="top-header-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-8">
                        <ul>
                            <li><a href="#"><i class="fa fa-clock-o"></i> Monday - Friday: 7.30am - 5.30pm (CT)</a></li>
                            <li><a href="#"><i class="fa fa-envelope"></i> <span class="__cf_email__" data-cfemail="9deee8ededf2efe9ddedf8e9fef1f4f3f4feb3fef2f0">[email&#160;protected]</span></a></li>
                            <li><a href="#"><i class="fa fa-phone"></i> (224) 228-8475</a></li>
                        </ul>
                    </div>
                    <div class="col-md-12 col-lg-4">
                        <div class="share-icons">
                            <ul>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Start Top Header Area -->
        
        <!-- Start Main Menu Area --> */}
        <div class="main-menu-area">
            <div class="container"> 
                <div class="row"> 
                    <div class="col-lg-3"> 
                        <div class="logo">
                            <a href="index.html"><img src="assets/img/logo.png" alt="Logo"/></a>
                        </div>
                    </div>
                    
                    <div class="col-lg-9"> 
                        <nav class="navbar navbar-expand-lg navbar-light">
                            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav main-menu ms-auto">
                                    <li class="nav-item dropdown active">
                                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home<i class="fa fa-angle-down"></i></a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li class="active">
                                                <a class="dropdown-item" href="index.html">Home default</a>
                                            </li>
                                            {/* <!-- <li>
                                                <a class="dropdown-item" href="index2.html">Home V.1</a>
                                            </li> 
                                            <li>
                                                <a class="dropdown-item" href="index-video-bg.html">Home V.2</a>
                                            </li> -->
                                            <!-- <li>
                                                <a class="dropdown-item" href="index3.html">Home V.3</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="index4.html">Home V.4</a>
                                            </li> --> */}
                                        </ul>
                                    </li> 

                                    <li class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <i class="fa fa-angle-down"></i></a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="testimonials.html">testimonials</a></li>
                                            <li><a class="dropdown-item" href="our-team.html">our team</a></li>
                                            <li><a class="dropdown-item" href="pricing.html">Pricing Table</a></li>
                                            {/* <!-- <li><a class="dropdown-item" href="cooming-soon.html">Cooming Soon</a></li> --> */}
                                            <li><a class="dropdown-item" href="signup.html">Sign up</a></li>
                                            <li><a class="dropdown-item" href="signin.html">Sign in</a></li>
                                            {/* <!-- <li><a class="dropdown-item" href="404.html">404 Not Found</a></li> -->
                                            <!-- <li class="dropdown-menu right-top">
                                                <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Page Two <i class="fa fa-angle-right"></i></a> 
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">Sub Page</a></li>
                                                    <li><a class="dropdown-item" href="#">Sub Two</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Page Three</a></li>
                                            <li><a class="dropdown-item" href="#">Page Four</a></li> --> */}
                                        </ul> 
                                    </li>   
                                    <li class="nav-item">
                                        <a class="nav-link" href="about-us.html">About</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <i class="fa fa-angle-down"></i></a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="single-service.html">BEHAVIOR COUNSELING</a></li>
                                            <li><a class="dropdown-item" href="single-service-bereavement-counseling.html">BEREAVEMENT COUNSELING</a></li>
                                            <li><a class="dropdown-item" href="single-service-general-surgery.html">GENERAL SURGERY</a></li>
                                            <li><a class="dropdown-item" href="single-service-consultations.html">CONSULTATIONS</a></li>
                                            {/* <!-- <li><a class="dropdown-item" href="single-service-cremation-services.html">CREMATION SERVICES</a></li> --> */}
                                            <li><a class="dropdown-item" href="single-service-dagnostic-procedures.html">DIABETES MANAGEMENT</a></li>
                                            <li><a class="dropdown-item" href="single-service-fecal-testing.html">FECAL TESTING</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery <i class="fa fa-angle-down"></i></a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="gallery-v1.html">Gallery V.1</a></li>
                                            {/* <!-- <li><a class="dropdown-item" href="gallery-v2.html">Gallery V.2</a></li> --> */}
                                        </ul>
                                    </li>     
                                    <li class="nav-item">
                                        <a class="nav-link" href="appointment.html">Appointment</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog <i class="fa fa-angle-down"></i></a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                           {/* <!-- <li><a class="dropdown-item" href="blog.html">Blog Full width</a></li> */}
                                                 {/* <li><a class="dropdown-item" href="blog-masonary.html">Blog masonary</a></li>
                                                <li><a class="dropdown-item" href="blog-right-sidebar.html">Right Sidebar</a></li> --> */}
                                                <li class="active"><a class="dropdown-item" href="single-blog-left-sidebar.html">Left Sidebar</a></li>
                                                {/* <!-- <li><a class="dropdown-item" href="single-blog.html">Single Blog V.1</a></li>
                                                <li><a class="dropdown-item" href="single-blog-style2.html">Single Blog V.2</a></li>
                                                <li><a class="dropdown-item" href="single-blog-left-sidebar.html">Single Blog V.3</a></li>  --> */}
                                       </ul> 
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact-us.html">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#search"><i class="fa fa-search"></i></a>
                                    </li>
                                </ul>
                            </div> 
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Main Menu Area -->
        
        <!-- SearchBox Modal --> */}
        <div id="search">
            <button type="button" class="close">×</button>
            <form>
                <input type="search" value="" placeholder="SEARCH KEYWORD(s)" />
                <button type="submit" class="btn theme-btn"><i class="fa fa-search"></i> Search</button>
            </form>
        </div>
        {/* <!-- End SearchBox Modal -->
        
        <!-- Start Homepage Slider --> */}
        <div class="homepage-slides-wrapper">
            {/* <!-- Slider main container --> */}
            <div class="swiper-container swiper1">
                {/* <!-- Additional required wrapper --> */}
                <div class="swiper-wrapper">
                    {/* <!-- Slides --> */}
                    <div class="swiper-slide slide-bg-1">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <h1>Offering high-quality care for your pets!</h1>
                                            <p>Our friendly and experienced staff welcomes you!</p>
                                            <a class="btn theme-btn" href="appointment.html">make an appointment</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="swiper-slide slide-bg-2">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <h1>We treat your pets like our own ones!</h1>
                                            <p>Helping pets live life to the fullest.</p>
                                            <a class="btn theme-btn" href="appointment.html">make an appointment</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="swiper-slide slide-bg-3">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <h1>We really care about your pet's welfare!</h1>
                                            <p>Call to learn more about the services we provide for your pet.</p>
                                            <a class="btn theme-btn" href="appointment.html">make an appointment</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- If we need pagination --> */}
                <div class="swiper-pagination swiper-pagination1"></div>

                {/* <!-- If we need navigation buttons --> */}
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

            </div>
        </div>
        {/* <!-- End Homepage Slider -->
        
        
        <!-- Start Services Area --> */}
        <div class="content-block-area gray-bg">
            <div class="container">
                <div class="row">
                   <div class="col-lg-6 offset-lg-3">
                       <div class="section-title text-center">
                           <h2><span>Our featured</span> services</h2>
                           <div class="car-icon"><img src="assets/img/dog.png" alt="car"/></div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                       </div>
                   </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="featured-boxed text-center">
                           <div class="icon-boxed">
                                <img src="assets/img/Pet-1.png" alt="dog-1"/>
                            </div>
                            <h3>Day Camp</h3>
                            <div class="upper-line"></div>
                            <div class="bottom-line"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="featured-boxed text-center">
                            <div class="icon-boxed">
                                <img src="assets/img/Pet2.png" alt="dog-1"/>
                            </div>
                            <h3>Training</h3>
                            <div class="upper-line"></div>
                            <div class="bottom-line"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="featured-boxed text-center">
                            <div class="icon-boxed">
                                <img src="assets/img/Pet-3.png" alt="dog-1"/>
                            </div>
                            <h3>Grooming</h3>
                            <div class="upper-line"></div>
                            <div class="bottom-line"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="separator-line"></div>
            
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="services-item">
                            <div class="box">
                                <img src="assets/img/services-img-one.jpg" alt="Image"/>
                                <h3>Dog Walking</h3>
                                <div class="box-content">
                                    <h3 class="title">Dog Walking</h3>
                                    <span class="post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                    <ul class="icon">
                                        <li><a class="singleImage" href="assets/img/services-img-one.jpg"><i class="fa fa-search"></i></a></li>
                                        <li><a href="single-service.html"><i class="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="services-item">
                            <div class="box">
                                <img src="assets/img/services-img-two.jpg" alt="Image"/>
                                <h3>Pet Sitting</h3>
                                <div class="box-content">
                                    <h3 class="title">Pet Sitting</h3>
                                    <span class="post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                    <ul class="icon">
                                        <li><a class="singleImage" href="assets/img/services-img-two.jpg"><i class="fa fa-search"></i></a></li>
                                        <li><a href="single-service.html"><i class="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="services-item">
                            <div class="box">
                                <img src="assets/img/services-img-three.jpg" alt="Image"/>
                                <h3>Overnight Care</h3>
                                <div class="box-content">
                                    <h3 class="title">Overnight Care</h3>
                                    <span class="post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                    <ul class="icon">
                                        <li><a class="singleImage" href="assets/img/services-img-three.jpg"><i class="fa fa-search"></i></a></li>
                                        <li><a href="single-service.html"><i class="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                        <div class="services-item">
                            <div class="box">
                                <img src="assets/img/services-img-four.jpg" alt="Image"/>
                                <h3>HEALTH & NUTRITION</h3>
                                <div class="box-content">
                                    <h3 class="title">HEALTH & NUTRITION</h3>
                                    <span class="post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                    <ul class="icon">
                                        <li><a class="singleImage" href="assets/img/services-img-four.jpg"><i class="fa fa-search"></i></a></li>
                                        <li><a href="single-service.html"><i class="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-12 text-center">
                        <a href="services.html" class="btn theme-btn m-t-50">view all services</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Services Area -->
    
        <!-- Start Why Choose Us Area --> */}
        <div class="content-block-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                       <div class="section-title text-center">
                           <h2><span>Why choose</span> us</h2>
                           <div class="car-icon"><img src="assets/img/dog.png" alt="car"/></div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                       </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="boxed-item">
                            <span class="sirial-number">01</span>
                            <span class="single-boxed"><i class="fa fa-volume-control-phone"></i></span>
                            <h3>Fast Response</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>  
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-3">
                        <div class="boxed-item">
                            <span class="sirial-number">02</span>
                            <span class="single-boxed"><i class="fa fa-home"></i></span>
                            <h3>Comfortable Office</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>  
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-3">
                        <div class="boxed-item">
                            <span class="sirial-number">03</span>
                            <span class="single-boxed"><i class="fa fa-cogs"></i></span>
                            <h3>High Quality Equipment</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>  
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-3">
                        <div class="boxed-item">
                            <span class="sirial-number">04</span>
                            <span class="single-boxed"><i class="fa fa-user-md"></i></span>
                            <h3>Very Friendly Staff</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>  
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-12 text-center">
                    <a href="about-us.html" class="btn theme-btn m-t-50">about us</a>
                </div>
            </div>
        </div>
        {/* <!-- End Why Choose Us Area -->
        
        <!-- Start Count-Down Area --> */}
        <div class="count-down-area count-bg jarallax">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="count-down-boxed text-center">
                            <div class="icon-box">
                               <i class="fa fa-smile-o"></i>
                            </div>
                            <span class="count-icon">
                                <span class="count-number counter">12,500</span>
                            </span>
                            <h3 class="count-info">Happy Clients</h3>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="count-down-boxed text-center">
                           <div class="icon-box">
                               <i class="fa fa-building-o"></i>
                            </div>
                            <span class="count-icon">
                                <span class="count-number counter">17,500</span>
                            </span>
                            <h3 class="count-info">Completed Projects</h3>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="count-down-boxed text-center">
                           <div class="icon-box">
                               <i class="fa fa-trophy"></i>
                            </div>
                            <span class="count-icon">
                                <span class="count-number counter">15,500</span>
                            </span>
                            <h3 class="count-info">WINNING AWARD</h3>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="count-down-boxed text-center">
                           <div class="icon-box">
                               <i class="fa fa-clock-o"></i>
                            </div>
                            <span class="count-icon"> 
                                <span class="count-number counter">14,500</span>
                            </span>
                            <h3 class="count-info">Hours Worked</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Count-Down Area -->
        
        <!-- Start Services Area --> */}
        <div class="content-block-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                       <div class="section-title text-center">
                           <h2><span>Special</span> services</h2>
                           <div class="car-icon"><img src="assets/img/dog.png" alt="car"/></div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                       </div>
                    </div>
                </div>
                
                <div class="content service_content">
                    <div class="row">
                      <div class="service_left">
                        <div class="apartment">
                            <a href="#">
                                <div class="service_icon round"></div>
                                <h5 class="wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">Behavior Counseling</h5>
                            </a>
                        </div>
                        <div class="office">
                            <a href="#">
                                <div class="service_icon round"></div>
                                <h5 class="wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">Bereavement Counseling</h5>
                            </a>
                        </div>
                        <div class="move_in_out">
                            <a href="#">
                                <div class="service_icon round"></div>
                                <h5 class="wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">General Surgery</h5>
                            </a>
                        </div>
                      </div>
                      <div class="service_middle round"> 
                        <img class="round" src="assets/img/service.png" alt="" />
                      </div>
                      <div class="service_right">
                        <div class="car_washing">
                            <a href="#">
                              <div class="service_icon round"></div>
                              <h5 class="wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">Diabetes Management</h5></a>
                        </div>
                        <div class="renovation">
                            <a href="#">
                              <div class="service_icon round"></div>
                              <h5 class="wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">Diagnostic Procedures</h5></a>
                        </div>
                        <div class="green_cleaning">
                            <a href="#">
                              <div class="service_icon round"></div>
                              <h5 class="wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">Fecal Testing</h5></a>
                        </div>
                      </div>
                    </div>
                </div>

            </div>
        </div>
        {/* <!-- End Services Area -->
        
        <!-- Start Our testimonials Area --> */}
        <div class="content-block-area gray-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-4">
                        <div class="section-title text-end">
                            <h3>our clients</h3>
                            <h2><span>CLIENTS THAT TRUST</span> OUR SERVICES</h2>
                       </div>
                        <div class="testimonials-car-boxed wow fadeInLeft">
                           <img src="assets/img/testimonial-car.png" alt="Image"/>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4">
                        <div class="testimonial-item">
                            <div class="testimonial-single-item">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to  making it look like readable English.</p>
                                <ul>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                            </div>
                            
                            <div class="quotation-profile">
                                <img src="assets/img/testimonials-1.jpg" alt="Image"/>
                            </div>  
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4">
                        <div class="testimonial-item">
                            <div class="testimonial-single-item">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to  making it look like readable English.</p>
                                <ul>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                            </div>
                            <div class="quotation-profile">
                                <img src="assets/img/31m.jpg" alt="Image"/>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-12 col-lg-8 offset-lg-4 text-center">
                        <a href="#" class="btn theme-btn">see testimonials</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Our testimonials Area -->
        
        <!-- Start Our team Area --> */}
        <div class="content-block-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                       <div class="section-title text-center">
                           <h2><span>our experienced</span> team</h2>
                           <div class="car-icon"><img src="assets/img/dog.png" alt="car"/></div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                       </div>
                    </div>
                </div>
                <div class="row">
                   <div class="col-lg-4 col-md-6">
                        <div class="our-team">
                            <div class="team-image">
                                <img src="assets/img/team-one.jpg" alt="team-one"/>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.
                                </p>
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            <div class="team-info">
                                <h3 class="title">Dr. Steven Smith</h3>
                                <span class="post">Pain Management</span>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="our-team">
                            <div class="team-image">
                                <img src="assets/img/team-two.jpg" alt="team-two"/>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.
                                </p>
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            <div class="team-info">
                                <h3 class="title">Dr. Alex Blackwell</h3>
                                <span class="post">Pet Education</span>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div class="our-team">
                            <div class="team-image">
                                <img src="assets/img/team-three.jpg" alt="team-three"/>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.
                                </p>
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            <div class="team-info">
                                <h3 class="title">Dr. Rachael Haynes</h3>
                                <span class="post">Surgery</span>
                            </div>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
        {/* <!-- End Our team Area --> */}
        
        {/* <!-- Start Appointment Area --> */}
        <div class="content-block-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                       <div class="section-title text-center">
                           <h2><span>request an</span> appointment</h2>
                           <div class="car-icon"><img src="assets/img/dog.png" alt="car"/></div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                       </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-5">
                        <div class="apointment-preview-boxed man-image-bg wow fadeInUp"></div>
                    </div>
                    <div class="col-lg-7">
                        <form class="appointment-form" action="https://templates.envytheme.com/petclinic/default/index.html">
                            <div class="row">
                                <div class="col-lg-6">
                                    <label>Preferred Time Of Day</label>
                                    <select id="Year">
                                        <option value="hide">-- Time Of Day --</option>
                                        <option value="1">Morning</option>
                                        <option value="2">Afternoon</option>
                                        <option value="3">Evening</option>
                                    </select>
                                </div>
                                <div class="col-lg-6">
                                    <label>Patient Type</label>
                                    <select id="selectServices">
                                        <option value="hide">-- Select Type --</option>
                                        <option value="1">New Patient</option>
                                        <option value="2">Current Patient</option>
                                        <option value="3">Returning Patient</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <label>Appointment Date</label>
                                    <input type="text" id="datepicker" name="appointmentDate" placeholder="Appointment Date" required/>
                                </div>
                                <div class="col-lg-6">
                                    <label>Appointment Time</label>
                                    <select id="Time">
                                        <option value="hide">-- Choose --</option>
                                        <option value="2010">09:00AM - 10:00AM</option>
                                        <option value="2011">10:00AM - 11:00AM</option>
                                        <option value="2012">11:00AM - 12:00PM</option>
                                        <option value="2013">12:00PM - 01:00PM</option>
                                        <option value="2014">01:00PM - 02:00PM</option>
                                        <option value="2015">02:00PM - 03:00PM</option>
                                        <option value="2015">03:00PM - 04:00PM</option>
                                        <option value="2015">04:00PM - 05:00PM</option>
                                        <option value="2015">05:00PM - 06:00PM</option>
                                        <option value="2015">06:00PM - 07:00PM</option>
                                        <option value="2015">07:00PM - 08:00PM</option>
                                        <option value="2015">08:00PM - 09:00PM</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                               <div class="col-lg-12">
                                   <p>Contact Details</p>
                               </div>
                                <div class="col-lg-6">
                                    <input type="text" name="yourName" placeholder="Your Name" required/>
                                </div>
                                <div class="col-lg-6">
                                    <input type="email" name="yourEmail" placeholder="Your Email" required/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <input type="text" name="yourPhone" placeholder="Your Phone" required/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <textarea name="yourMessage" id="yourMessage" placeholder="Your Message" required></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <button class="btn theme-btn" type="submit">Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Appointment Area -->
        
        <!-- Start News Area --> */}
        <div class="content-block-area gray-bg">
            <div class="container">
               <div class="row">
                   <div class="col-lg-6 offset-lg-3">
                       <div class="section-title text-center">
                           <h2><span>recent</span> news</h2>
                           <div class="car-icon"><img src="assets/img/dog.png" alt="car"/></div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                       </div>
                   </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="single-blog-item">
                            <a href="#" class="zoomin"><img src="assets/img/blog-item-one.jpg" alt="Image Description"/></a>
                            <div class="blog-item-info">
                                <span class="blog-date">August 20, 2021</span> <div class="separator">|</div> 
                                <a class="blog-tags red" href="#"><i class="fa fa-tag"></i> Day Camp</a>
                                <a href="#"><h3>Blog Title Goes to Here</h3></a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                
                                <div class="row">
                                    <div class="col-7">
                                        <div class="blog-item-profile">
                                            <img src="assets/img/testimonials-1.jpg" alt="Image description"/> <a href="#">anika rimjim</a>
                                        </div>
                                    </div>
                                    <div class="col-5 text-end">
                                        <div class="blog-item-c-v-info">
                                            <span><a href="#"><i class="fa fa-comments-o"> 25</i></a></span>
                                            <span><a href="#"><i class="fa fa-eye"> 520</i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                       
                    <div class="col-md-4">
                        <div class="single-blog-item">
                            <a href="#" class="zoomin"><img src="assets/img/blog-item-two.jpg" alt="Image Description"/></a>
                            <div class="blog-item-info">
                                <span class="blog-date">August 20, 2021</span> <div class="separator">|</div> 
                                <a class="blog-tags green" href="#"><i class="fa fa-tag"></i> Grooming</a>
                                <a href="#"><h3>Blog Title Goes to Here</h3></a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                
                                <div class="row">
                                    <div class="col-7">
                                        <div class="blog-item-profile">
                                            <img src="assets/img/44w.jpg" alt="Image description"/> <a href="#">anika rimjim</a>
                                        </div>
                                    </div>
                                    <div class="col-5 text-end">
                                        <div class="blog-item-c-v-info">
                                            <span><a href="#"><i class="fa fa-comments-o"> 25</i></a></span>
                                            <span><a href="#"><i class="fa fa-eye"> 520</i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="single-blog-item">
                            <a href="#" class="zoomin"><img src="assets/img/blog-item-three.jpg" alt="Image Description"/></a>
                            <div class="blog-item-info">
                                <span class="blog-date">August 20, 2021</span> <div class="separator">|</div> 
                                <a class="blog-tags blue" href="#"><i class="fa fa-tag"></i> Training</a>
                                <a href="#"><h3>Blog Title Goes to Here</h3></a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                
                                <div class="row">
                                    <div class="col-7">
                                        <div class="blog-item-profile">
                                            <img src="assets/img/10m.jpg" alt="Image description"/> <a href="#">anika rimjim</a>
                                        </div>
                                    </div>
                                    <div class="col-5 text-end">
                                        <div class="blog-item-c-v-info">
                                            <span><a href="#"><i class="fa fa-comments-o"> 25</i></a></span>
                                            <span><a href="#"><i class="fa fa-eye"> 520</i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End News Area -->
        
        <!-- Start Our Parners Area --> */}
        <div class="content-block-area">
            <div class="container">
               <div class="row">
                   <div class="col-lg-6 offset-lg-3">
                       <div class="section-title text-center">
                           <h2><span>Our</span> Partner</h2>
                           <div class="car-icon"><img src="assets/img/dog.png" alt="car"/></div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                       </div>
                   </div>
                </div>
                <div class="partner-slides">
                    <div class="single-partner-slide">
                        <a class="partners-logo" href="#"><img src="assets/img/partner-1.png" alt="Image Description"/></a>
                    </div>
                    <div class="single-partner-slide">
                        <a class="partners-logo" href="#"><img src="assets/img/partner-2.png" alt="Image Description"/></a>
                    </div>
                    <div class="single-partner-slide">
                        <a class="partners-logo" href="#"><img src="assets/img/partner-3.png" alt="Image Description"/></a>
                    </div>
                    <div class="single-partner-slide">
                        <a class="partners-logo" href="#"><img src="assets/img/partner-4.png" alt="Image Description"/></a>
                    </div>
                    <div class="single-partner-slide">
                        <a class="partners-logo" href="#"><img src="assets/img/partner-5.png" alt="Image Description"/></a>
                    </div>
                    <div class="single-partner-slide">
                        <a class="partners-logo" href="#"><img src="assets/img/partner-6.png" alt="Image Description"/></a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Our Parners Area -->
        
        <!-- Footer Area --> */}
        <footer class="site-footer">
            {/* <!-- Footer Top Area --> */}
            <div class="footer-top-area">
                <div class="container">
                   <div class="row">
                       <div class="col-md-4">
                            <div class="footer-top-info">
                               <span class="footer-icons"><i class="fa fa-map-o"></i></span> <p>1828 Johns Drive Glenview, IL 60025</p>
                            </div>
                       </div>
                       <div class="col-md-4">
                            <div class="footer-top-info">
                               <span class="footer-icons"><i class="fa fa-clock-o"></i></span> <p>Working Days Monday to Friday</p>
                            </div>
                       </div>
                       <div class="col-md-4">
                            <div class="footer-top-info">
                               <span class="footer-icons"><i class="fa fa-headphones"></i></span> <p>Give us a free call (224) 228-8475</p>
                            </div>
                       </div>
                   </div>
                   <div class="hr-line"></div>
                    <div class="row">
                        <div class="col-lg-4 col-md-12">
                            <div class="footer-wid">
                                <a href="index.html" class="footer-logo"><img src="assets/img/logo.png" alt="logo"/></a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="#" class="link-color">Read More About Us <i class="fa  fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12">
                            <div class="row">
                                <div class="col-md-4 col-lg-4">
                                    <div class="footer-wid footer-menu">
                                        <h3 class="footer-wid-title">Navigation</h3>
                                        <ul>
                                            <li><a href="index.html"><i class="fa  fa-angle-right"></i> home</a></li>
                                            <li><a href="about-us.html"><i class="fa  fa-angle-right"></i> About</a></li>
                                            <li><a href="projects.html"><i class="fa  fa-angle-right"></i> our mission</a></li>
                                            <li><a href="industries.html"><i class="fa  fa-angle-right"></i> services</a></li>
                                            <li><a href="gallery.html"><i class="fa  fa-angle-right"></i> gallery</a></li>
                                            <li><a href="blog.html"><i class="fa  fa-angle-right"></i> blog</a></li>
                                            <li><a href="contact-us.html"><i class="fa  fa-angle-right"></i> contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-md-4 col-lg-4">
                                    <div class="footer-wid footer-menu">
                                        <h3 class="footer-wid-title">Hours of Operation</h3>
                                        <ul>
                                            <li><i class="fa  fa-angle-right"></i> Monday:7:30am - 5:30pm</li>
                                            <li><i class="fa  fa-angle-right"></i> Tuesday:7:30am - 5:30pm</li>
                                            <li><i class="fa  fa-angle-right"></i> Wednesday:7:30am - 5:30pm</li>
                                            <li><i class="fa  fa-angle-right"></i> Thursday:7:30am - 5:30pm</li>
                                            <li><i class="fa  fa-angle-right"></i> Friday:7:30am - 5:30pm</li>
                                            <li><i class="fa  fa-angle-right"></i> Saturday:7:30am - 3:00pm</li>
                                            <li><i class="fa  fa-angle-right"></i> Sunday: Closed</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-md-4 col-lg-4">
                                    <div class="footer-wid map-preview">
                                        <h3 class="footer-wid-title">Get In Touch</h3>
                                        <p>1828 Johns Drive Glenview, IL 60025</p>
                                        <div class="address-info">
                                            <span><i class="fa  fa-phone"></i> (224) 228-8475</span><br></br>
                                            <span><i class="fa  fa-envelope"></i> <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="0a797f7a7a65787e4a7a6f7e69666364636924696567">[email&#160;protected]</a> </span>
                                        </div>
                                        <div class="subscribe">
                                            <form action="https://templates.envytheme.com/petclinic/default/index.html">
                                                <input type="text" placeholder="Type your email" required/>
                                                <button>Subscribe now <i class="fa  fa-paper-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="social-icos">    
                                <ul class="list-inline">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            {/* <!-- Footer Bottom Area --> */}
            <div class="footer-copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-5">
                            &copy; Copyright 2021 All Rights Reserved.
                        </div>
                        <div class="col-lg-6 col-md-7 text-end">
                            <a href="#">Terms & Condition</a> <span class="seprator">|</span> <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div> 
        </footer>

        </section>     
    );
}
export default AboutUs;