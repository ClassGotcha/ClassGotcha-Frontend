<template>
   <div id="page-top">
   <div class="navbar-wrapper" >
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
         <div class="container">
            <div class="navbar-header">
               <!--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  </button>-->
               <router-link class="navbar-brand" :to="{name:'landing'}"> ClassGotcha Career </router-link>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
               <ul class="nav navbar-nav navbar-right">
                  <li><a class="page-scroll" href="#aboutus">About Us</a></li>
                  <li><a class="page-scroll" href="#positions">Positions</a></li>
                  <!--<li><a class="page-scroll" href="#timeline">Timeline</a></li>-->
                  <li><a class="page-scroll" href="#benefits">Benefits</a></li>                  
                  <li><a class="page-scroll" href="#contactus">Contact</a></li>
               </ul>
            </div>
         </div>
      </nav>
   </div>
   <div id="inSlider" class="carousel carousel-fade" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
         <div class="item active">
            <div class="container">
               <div class="carousel-caption">
                  <h1>
                     WE are hiring ! <br>
                  </h1>
                  <h2>
                     <b>Help us make college life easier.</b>
                  </h2>
                  <br>
                  <p>
                     <a href="mailto:team@classgotcha.com"  class="btn btn-lg btn-primary">APPLY NOW</a>
                  </p>
               </div>
            </div>
            <div class="header-back one"></div>
         </div>
      </div>
   </div>
   <section id="aboutus" class="features">
      <div class="container">
      <div class="row">
         <div class="col-lg-12 text-center">
            <div class="navy-line"></div>
            <h1>About Us</h1>
         </div>
      </div>
      <br>
   </section>
   <section  class="container features">


      <div class="row features-block">


         <div class="col-lg-5  features-text">
            <small>CLASSGOTCHA</small>
            <h1>What is ClassGotcha</h1>
            <p>ClassGotcha is a growing educational tech start-up that provides a 
               progressive solution to help college students to organize, 
               communicate and share learning materials at one place. <br>
         </div>


         <div class="col-lg-7  text-right wow fadeInRight animated">
            <img  src="~img/landing/logo_jobs.png" alt="dashboard" class="img-responsive shadow pull-right">
         </div>


      </div>


      <div class="row features-block">


         <div class="col-lg-5  features-text">
            <small>CLASSGOTCHA</small>
            <h1>Awards</h1>
            <p>  We won the
               <a href="http://news.psu.edu/story/408165/2016/05/05/academics/penn-state-students-win-co-sponsored-edtech-challenge-hackpsu">
               EdTech Challenge</a> in HackPSU 2016, sponsored by <a href="https://coil.psu.edu/"> COIL and newly </a>
               enrolled in <a href="http://launchbox.psu.edu/launchbox-startups/">LanchBox 2017 Spring cohort</a>.
            </p>
         </div>


         <div class="col-lg-7 text-right wow fadeInLeft animated">
                  <img  src="~img/jobs/logos.png" alt="dashboard" class="img-responsive shadow pull-right">
         </div>
      </div>
   </section>
<section id="positions" class="gray-section team">
   <div class="container">
      <div class="row m-b-lg">
         <div class="col-lg-12 text-center">
            <div class="navy-line"></div>
            <h1>Positions Opening</h1>
         </div>
      </div>
      <div class="row m-b">
        <div class=" col-lg-4">
            <div class="widget navy-bg p-lg text-center">
            <a style="color:#ffffff" href="static/others/frontend.pdf">
               <div class="m-b-md">
                  <i class="fa fa-code fa-4x"></i>
                  <h1 class="m-xs">Web Developer - Frontend</h1>
                  <br>
                  <h3 class="font-bold no-margins">
                     > Click to see detail
                  </h3>
               </div>
               </a>
            </div>
         </div>
         <div class=" col-lg-4">
            <div class="widget navy-bg p-lg text-center">
            <a style="color:#ffffff" href="static/others/backend.pdf">
            
               <div class="m-b-md">
                  <i class="fa fa-terminal fa-4x"></i>

                  <h1 class="m-xs">Web Developer - Backend</h1>
                  <br>
                  <h3 class="font-bold no-margins">
                     > Click to see detail
                  </h3>
               </div>
               </a>
            </div>
         </div>
         <div class="col-lg-4">
            <div class="widget navy-bg p-lg text-center">
            <a style="color:#ffffff" href="static/others/marketing.pdf">
            
               <div class="m-b-md">
                  <i class="fa fa-laptop fa-4x"></i>
                  <h1 class="m-xs">Marketing / Advertising</h1>
                  <br>
                  <h3 class="font-bold no-margins">
                     > Click to see detail
                  </h3>
               </div>
               </a>
            </div>
         </div>
      </div>
   </div>
</section>
<section id="benefits" class="team">
   <div class="container">
      <div class="row m-b-lg">
         <div class="col-lg-12 text-center">
            <div class="navy-line"></div>
            <h1>Benefits</h1>
         </div>
      </div>
      <div class="row">
            <div class="col-lg-10 col-lg-offset-1 features-text">
                <p>You will be working with a group of experts varied from technology 
                to business and law, who you can learn from and build long-term 
                connection with. By working for an innovative start-up company 
                like us, your role is important and irreplaceable.
                 Meanwhile, you will be working closely with every core 
                  member in team ClassGotcha where you will feel a strong 
                  sense of belonging.</p>
            
            </div></div>
<div class="row">
            <div class="col-lg-10 col-lg-offset-1 features-text">
                <h2>For Programmers</h2>
                <i class="fa fa-code big-icon pull-left"></i>
<p>Your work and your contribution will be fully reflected on the progress of 
the company, what you code and create will significantly benefit college 
students around you.</p>
        
</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 features-text">
                <h2>For Marketing / Advertising </h2>
                <i class="fa fa-laptop big-icon pull-left"></i>
                <p>Your decision in marketing strategies might influence the progress of the whole company. The Challenging role will offer you a precious opportunity in researching for marketing models and put your ideas into practice. </p>
            </div>
        </div>
   </div>
</section>
 
<section id="contact" class="gray-section contact">
   <div class="container">
                  <div class="row m-b-lg">
                    <div class="col-lg-12 text-center">
                        <div class="navy-line"></div>
                        <h1>Contact Us</h1>
                        <p>Have questions? Just let us know.</p>
                    </div>
                </div>
      <div class="row m-b-lg">
                    <div class="col-lg-3 col-lg-offset-3">
                        <address>
                            <h3><span class="navy">ClassGotcha</span></h3>
                            Launch Box<br/>
                            State College, PA 16803<br/>
                            <abbr title="Email"><i class="fa fa-envelope"></i></abbr> :  Team@classgotcha.com
                        </address>
                    </div>
                    <div class="col-lg-4">
                        <p class="text-color">         ClassGotcha is a growing educational tech start-up that provides a progressive solution to help college students to organize, communicate and share learning materials at one place. We won the EdTech Challenge in HackPSU 2016, sponsored by COIL and newly enrolled in LanchBox 2017 Spring cohort.           
        </p>
                    </div>
                </div>
         


         

      </div>
      <div class="row">
         <div class="col-lg-12 text-center">
            <a href="mailto:team@classgotcha.com" class="btn btn-primary">Send us mail</a>
            <p class="m-t-sm">
               Or follow us on social platform
            </p>
            <ul class="list-inline social-icon">
               <li><a href="http://www.facebook.com/classgotcha"><i class="fa fa-facebook"></i></a>
               </li>
               <li><a href="https://www.linkedin.com/company/classgotcha"><i class="fa fa-linkedin"></i></a>
               </li>
            </ul>
         </div>
      </div>
      <div class="row">
         <div class="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
            <p><strong>&copy; 2017 ClassGotcha Team</strong><br/> 
               All rights reserved - <a>Terms of Use</a> - <a>Privacy</a> - <router-link :to="{name:'jobs'}">Career</router-link>
            </p>
         </div>
      </div>
   </div>
</section>
   </div>
</template>
<script>
    export default {
        name: 'LandingPage',
        mounted() {
            document.getElementsByTagName("body")[0].style['background-color'] = "#fff"
            /* global $:true */

            $(document).ready(function() {

                $('body').scrollspy({
                    target: '.page-scroll',
                    offset: 80
                })

                // Page scrolling feature
                setTimeout($('a.page-scroll').bind('click', function(event) {
                    var link = $(this)
                    $('html, body').stop().animate({
                        scrollTop: $(link.attr('href')).offset().top - 50
                    }, 500)
                    event.preventDefault()
                    $("#navbar").collapse('hide')
                }), 250)

            })


            const docElem = document.documentElement
            const header = document.querySelector('.navbar-default')
            let didScroll = false
            const changeHeaderOn = 200

            function init() {
                window.addEventListener('scroll', function(event) {
                    if (!didScroll) {
                        didScroll = true
                        setTimeout(scrollPage, 250)
                    }
                }, false)
            }

            function scrollPage() {
                var sy = scrollY()
                if (sy >= changeHeaderOn) {
                    $(header).addClass('navbar-scroll')
                } else {
                    $(header).removeClass('navbar-scroll')
                }
                didScroll = false
            }

            function scrollY() {
                return window.pageYOffset || docElem.scrollTop
            }

            init()

        }
    }

</script>
<style scoped>
    span.navy {
        color: #1ab394;
    }
    
    p.text-color {
        color: #676a6c;
    }
    
    a.navy-link {
        color: #1ab394;
        text-decoration: none;
    }
    
    a.navy-link:hover {
        color: #179d82;
    }
    
    section p {
        color: #333;
        font-size: 14px;
    }
    
    address {
        font-size: 13px;
    }
    
    h1 {
        margin-top: 10px;
        font-size: 30px;
        font-weight: 200;
    }
    
    .navy-line {
        width: 60px;
        height: 1px;
        margin: 60px auto 0;
        border-bottom: 2px solid #1ab394;
    }
    
    .gray-line {
        width: 60px;
        height: 1px;
        margin: 60px auto 0;
        border-bottom: 2px solid #aeaeae;
    }
    
    .navbar-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 200;
    }
    
    .navbar-wrapper>.container {
        padding-right: 0;
        padding-left: 0;
    }
    
    .navbar-wrapper .navbar {
        padding-right: 15px;
        padding-left: 15px;
    }
    
    .navbar-default.navbar-scroll {
        background-color: #fff;
        border-color: #fff;
        padding: 15px 0;
    }
    
    .navbar-default {
        background-color: transparent;
        border-color: transparent;
        transition: all 0.3s ease-in-out 0s;
    }
    
    .navbar-default .nav li a {
        color: #fff;
        font-family: 'Open Sans', helvetica, arial, sans-serif;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 14px;
    }
    
    .nav>li.active {
        border: none;
        background: inherit;
    }
    
    .navbar-nav>li>a {
        padding-top: 25px;
        border-top: 6px solid transparent;
    }
    
    .navbar-default .navbar-nav>.active>a,
    .navbar-default .navbar-nav>.active>a:hover {
        background: transparent;
        color: #fff;
        border-top: 6px solid #1ab394;
    }
    
    .navbar-default .navbar-nav>li>a:hover,
    .navbar-default .navbar-nav>li>a:focus {
        color: #1ab394;
        background: inherit;
    }
    
    .navbar-default .navbar-nav>.active>a:focus {
        background: transparent;
        color: #fff;
    }
    
    .navbar-default .navbar-nav>.active>a:focus {
        background: transparent;
        color: #ffffff;
    }
    
    .navbar-default.navbar-scroll .navbar-nav>.active>a:focus {
        background: transparent;
        color: inherit;
    }
    
    .navbar-scroll.navbar-default .nav li a {
        color: #676a6c;
    }
    
    .navbar-scroll.navbar-default .nav li a:hover {
        color: #1ab394;
    }
    
    .navbar-wrapper .navbar.navbar-scroll {
        padding-top: 0;
        padding-bottom: 0;
        border-bottom: 1px solid #e7eaec;
        border-radius: 0;
    }
    
    .nav>li.active {
        border: none;
        background: inherit;
    }
    
    .nav>li>a {
        padding: 25px 10px 15px 10px;
    }
    
    .navbar-scroll .navbar-nav>li>a {
        padding: 20px 10px;
    }
    
    .navbar-default .navbar-nav>.active>a,
    .navbar-default .navbar-nav>.active>a:hover {
        border-top: 6px solid #1ab394;
    }
    
    .navbar-fixed-top {
        border: none !important;
    }
    
    .navbar-fixed-top.navbar-scroll {
        border-bottom: 1px solid #e7eaec !important;
    }
    
    .navbar-default .navbar-brand {
        font-size: 20px;
        color: #e7eaec;
        display: block;
        border-radius: 0 0 5px 5px;
        font-weight: 700;
        transition: all 0.3s ease-in-out 0s;
    }
    
    .navbar.navbar-scroll .navbar-brand {
        margin-top: 15px;
        border-radius: 5px;
        font-size: 20px;
        padding: 10px;
        height: auto;
        color: #1ab394;
        display: block;
        border-radius: 0 0 5px 5px;
        font-weight: 700;
        transition: all 0.3s ease-in-out 0s;
    }
    
    .header-back {
        height: 470px;
        width: 100%;
    }
    
    .header-back.one {
        background: url('../../static/img/landing/header_two.jpg') 50% 0 no-repeat;
    }
    
    .header-back.two {
        background: url('../../static/img/landing/header_two.jpg') 50% 0 no-repeat;
    }
    
    .carousel {
        height: 470px;
    }
    
    .carousel-caption {
        z-index: 10;
    }
    
    .carousel .item {
        height: 470px;
        background-color: #777;
    }
    
    .carousel-inner>.item>img {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        height: 470px;
    }
    
    .carousel-fade .carousel-inner .item {
        opacity: 0;
        -webkit-transition-property: opacity;
        transition-property: opacity;
    }
    
    .carousel-fade .carousel-inner .active {
        opacity: 1;
    }
    
    .carousel-fade .carousel-inner .active.left,
    .carousel-fade .carousel-inner .active.right {
        left: 0;
        opacity: 0;
        z-index: 1;
    }
    
    .carousel-fade .carousel-inner .next.left,
    .carousel-fade .carousel-inner .prev.right {
        opacity: 1;
    }
    
    .carousel-fade .carousel-control {
        z-index: 2;
    }
    
    .carousel-control.left,
    .carousel-control.right {
        background: none;
    }
    
    .carousel-control {
        width: 6%;
    }
    
    .carousel-inner .container {
        position: relative;
    }
    
    .carousel-inner {
        overflow: visible;
    }
    
    .carousel-caption {
        position: absolute;
        top: 100px;
        left: 0;
        bottom: auto;
        right: auto;
        text-align: left;
    }
    
    .carousel-caption {
        position: absolute;
        top: 100px;
        left: 0;
        bottom: auto;
        right: auto;
        text-align: left;
    }
    
    .carousel-caption.blank {
        top: 140px;
    }
    
    .carousel-image {
        position: absolute;
        right: 10px;
        top: 150px;
    }
    
    .carousel-indicators {
        padding-right: 60px;
    }
    
    .carousel-caption h1 {
        font-weight: 700;
        font-size: 38px;
        text-transform: uppercase;
        text-shadow: none;
        letter-spacing: -1.5px;
    }
    
    .carousel-caption p {
        font-weight: 700;
        text-transform: uppercase;
        text-shadow: none;
    }
    
    .caption-link {
        color: #fff;
        margin-left: 10px;
        text-transform: capitalize;
        font-weight: 400;
    }
    
    .caption-link:hover {
        text-decoration: none;
        color: inherit;
    }
    
    .services {
        padding-top: 60px;
    }
    
    .services h2 {
        font-size: 20px;
        letter-spacing: -1px;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .features-block {
        margin-top: 40px;
    }
    
    .features-text {
        margin-top: 40px;
    }
    
    .features small {
        color: #1ab394;
    }
    
    .features h2 {
        font-size: 18px;
        margin-top: 5px;
    }
    
    .features-text-alone {
        margin: 40px 0;
    }
    
    .features-text-alone h1 {
        font-weight: 200;
    }
    
    .features-icon {
        color: #1ab394;
        font-size: 40px;
    }
    
    .navy-section {
        margin-top: 60px;
        background: #1ab394;
        color: #fff;
        padding: 20px 0;
    }
    
    .gray-section {
        background: #f4f4f4;
        margin-top: 60px;
    }
    
    .team-member {
        text-align: center;
    }
    
    .team-member img {
        margin: auto;
    }
    
    .social-icon a {
        background: #1ab394;
        color: #fff;
        padding: 4px 8px;
        height: 28px;
        width: 28px;
        display: block;
        border-radius: 50px;
    }
    
    .social-icon a:hover {
        background: #179d82;
    }
    
    .img-small {
        height: 88px;
        width: 88px;
    }
    
    .pricing-plan {
        margin: 20px 30px 0 30px;
        border-radius: 4px;
    }
    
    .pricing-plan.selected {
        transform: scale(1.1);
        background: #f4f4f4;
    }
    
    .pricing-plan li {
        padding: 10px 16px;
        border-top: 1px solid #e7eaec;
        text-align: center;
        color: #aeaeae;
    }
    
    .pricing-plan .pricing-price span {
        font-weight: 700;
        color: #1ab394;
    }
    
    li.pricing-desc {
        font-size: 13px;
        border-top: none;
        padding: 20px 16px;
    }
    
    li.pricing-title {
        background: #1ab394;
        color: #fff;
        padding: 10px;
        border-radius: 4px 4px 0 0;
        font-size: 22px;
        font-weight: 600;
    }
    
    .testimonials {
        padding-top: 80px;
        padding-bottom: 90px;
        background-color: #1ab394;
        background-image: url('../../static/img/landing/avatar_all.png');
    }
    
    .big-icon {
        font-size: 56px !important;
    }
    
    .features .big-icon {
        color: #1ab394 !important;
    }
    
    .contact {
        background-image: url('../../static/img/landing/word_map.png');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        margin-top: 60px;
    }
    
    section.timeline {
        padding-bottom: 30px;
    }
    
    section.comments {
        padding-bottom: 80px;
    }
    
    .comments-avatar {
        margin-top: 25px;
        margin-left: 22px;
        margin-bottom: 25px;
    }
    
    .comments-avatar .commens-name {
        font-weight: 600;
        font-size: 14px;
    }
    
    .comments-avatar img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin-right: 10px;
    }
    
    .bubble {
        position: relative;
        height: 120px;
        padding: 20px;
        background: #FFFFFF;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        font-style: italic;
        font-size: 14px;
    }
    
    .bubble:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 15px 14px 0;
        border-color: #FFFFFF transparent;
        display: block;
        width: 0;
        z-index: 1;
        bottom: -15px;
        left: 30px;
    }
    
    .btn-primary.btn-outline:hover,
    .btn-success.btn-outline:hover,
    .btn-info.btn-outline:hover,
    .btn-warning.btn-outline:hover,
    .btn-danger.btn-outline:hover {
        color: #fff;
    }
    
    .btn-primary {
        background-color: #1ab394;
        border-color: #1ab394;
        color: #FFFFFF;
        font-size: 14px;
        padding: 10px 20px;
        font-weight: 600;
    }
    
    .btn-primary:hover,
    .btn-primary:focus,
    .btn-primary:active,
    .btn-primary.active,
    .open .dropdown-toggle.btn-primary {
        background-color: #179d82;
        border-color: #179d82;
        color: #FFFFFF;
    }
    
    .btn-primary:active,
    .btn-primary.active,
    .open .dropdown-toggle.btn-primary {
        background-image: none;
    }
    
    .btn-primary.disabled,
    .btn-primary.disabled:hover,
    .btn-primary.disabled:focus,
    .btn-primary.disabled:active,
    .btn-primary.disabled.active,
    .btn-primary[disabled],
    .btn-primary[disabled]:hover,
    .btn-primary[disabled]:focus,
    .btn-primary[disabled]:active,
    .btn-primary.active[disabled],
    fieldset[disabled] .btn-primary,
    fieldset[disabled] .btn-primary:hover,
    fieldset[disabled] .btn-primary:focus,
    fieldset[disabled] .btn-primary:active,
    fieldset[disabled] .btn-primary.active {
        background-color: #1dc5a3;
        border-color: #1dc5a3;
    }
    
    .shadow {
        -webkit-box-shadow: 10px 10px 55px -1px rgba(0, 0, 0, 0.69);
        -moz-box-shadow: 10px 10px 55px -1px rgba(0, 0, 0, 0.69);
        box-shadow: 10px 10px 55px -1px rgba(0, 0, 0, 0.69);
    }
    
    @media (min-width: 768px) {
        {
            /* Navbar positioning foo */
            /* The navbar becomes detached from the top, so we round the corners */
            /* Bump up size of carousel content */
        }
        .navbar-wrapper {
            margin-top: 20px;
        }
        .navbar-wrapper .container {
            padding-right: 15px;
            padding-left: 15px;
        }
        .navbar-wrapper .navbar {
            padding-right: 0;
            padding-left: 0;
        }
        .navbar-wrapper .navbar {
            border-radius: 4px;
        }
        .carousel-caption p {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 1.4;
        }
        .featurette-heading {
            font-size: 50px;
        }
    }
    
    @media (max-width: 992px) {
        .carousel-image {
            display: none;
        }
    }
    
    @media (max-width: 768px) {
        .carousel-caption,
        .carousel-caption.blank {
            left: 5%;
            top: 80px;
        }
        .carousel-caption h1 {
            font-size: 28px;
        }
        .navbar.navbar-scroll .navbar-brand {
            margin-top: 6px;
        }
        .navbar-default {
            background-color: #fff;
            border-color: #fff;
            padding: 15px 0;
        }
        .navbar-default .navbar-nav>.active>a:focus {
            background: transparent;
            color: inherit;
        }
        .navbar-default .nav li a {
            color: #676a6c;
        }
        .navbar-default .nav li a:hover {
            color: #1ab394;
        }
        .navbar-wrapper .navbar {
            padding-top: 0;
            padding-bottom: 5px;
            border-bottom: 1px solid #e7eaec;
            border-radius: 0;
        }
        .nav>li>a {
            padding: 25px 10px 15px 10px;
        }
        .navbar-nav>li>a {
            padding: 20px 10px;
        }
        .navbar .navbar-brand {
            margin-top: 6px;
            border-radius: 5px;
            font-size: 12px;
            padding: 10px;
            height: auto;
        }
        .navbar-wrapper .navbar {
            padding-left: 15px;
            padding-right: 5px;
        }
        .navbar-default .navbar-nav>.active>a,
        .navbar-default .navbar-nav>.active>a:hover {
            color: inherit;
        }
        .carousel-control {
            display: none;
        }
    }
    
    @media (min-width: 992px) {
        .featurette-heading {
            margin-top: 120px;
        }
    }
    
    @media (max-width: 768px) {
        .navbar .navbar-header {
            display: block;
            float: none;
        }
        .navbar .navbar-header .navbar-toggle {
            background-color: #ffffff;
            padding: 9px 10px;
            border: none;
        }
    }

</style>
