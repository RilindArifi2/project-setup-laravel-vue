<template>
<nav class="navbar navbar-expand-lg  fixed-top " id="mainNav">
        <div class="container ">
            <a class="navbar-brand " href="/"><img src="/assets/img/logo-navbar1.svg" alt="logo" class="mobile-logo" width="111px"></a>
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars"></i> </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase">
                     <li class="nav-item ">
                        <router-link to="/" class="nav-link">HOME</router-link>
                    </li>
                   <li class="nav-item">
                        <router-link to="/companies"  class="nav-link ">COMPANIES</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/"  class="nav-link   ">ABOUT US</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/"  class="nav-link ">HOW IT WORKS</router-link>
                    </li>
                     <!-- <li class="nav-item">
                        <a href="/company_dashboard" class="nav-link  switch-to-businesses switch-to-business" style="color:white">SWITCH
                            TO BUSINESSES</a>
                    </li> -->
                    <li class="nav-item signup_end">
                        <div class="dropdown">
                            <button class="nav-router-link01 dropdown" type="button" id="dropdownMenuMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SIGN UP
                            </button>
                            <div class="dropdown-menu sign-up" aria-labelledby="dropdownMenuMenu">
                                <div class="row">
                                    <a type="button" class="dropdown-item btn1-businees border" data-bs-toggle="modal" data-bs-target="#signupModalforusinees">Sign up as Businees</a>

                                    <a type="button" class="dropdown-item btn1-businees2 border mt-3" data-bs-toggle="modal" data-bs-target="#signupModalforclient">Sign up as
                                        Client</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item login_end">
                        <button type="button" class="login2" data-bs-toggle="modal" data-bs-target="#loginModal">LOG IN</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

        <router-view />

    <div class="footer-all">
        <div class="container mt-0">
            <div class="row">
                <div class="col-4">
                    <p class="connect-d d-flex align-items-center h-100"><span> <img src="/assets/img/icon-nike.svg" class="icon-size-footer" alt="" /></span><span class="nike-icon">Verified businesses</span> </p>
                </div>
                <div class="col-4">
                    <p class="connect-d d-flex align-items-center  justify-content-center h-100"><span> <img src="/assets/img/vrctor-md.svg" alt="" class="icon-size-footer" /></span><span class="nike-icon">Safe and
                            Secure</span></p>
                </div>
                <div class="col-4">
                    <p class="connect-d d-flex align-items-center justify-content-center h-100" style="color:#5e6168">
                        <span> <img src="/assets/img/mobile-tel.svg" alt="" class="icon-size-footer" /></span><span class="nike-icon">Customer support</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-all-one">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <p class="connect-d d-flex align-items-center h-100 m-0"><span> <img src="/assets/img/icon-nike.svg" class="icon-size-footer" alt="" /></span><span class="nike-icon m-4">Verified businesses</span> </p>
                </div>
                <div class="carousel-item">
                    <p class="connect-d d-flex align-items-center  justify-content-center h-100 m-0"><span> <img src="/assets/img/vrctor-md.svg" alt="" class="icon-size-footer" /></span><span class="nike-icon m-4">Safe and Secure</span></p>
                </div>
                <div class="carousel-item">
                    <p class="connect-d d-flex align-items-center justify-content-center h-100 m-0">
                        <span> <img src="/assets/img/mobile-tel.svg" alt="" class="icon-size-footer" /></span><span class="nike-icon m-4">Customer support</span>
                    </p>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon " aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>




    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-5 col-sm-12">
                    <div class="mobile-logo-footer">
                        <img src="/assets/img/logo.svg" alt=""  />
                    </div>
                    <div class="footer-p pt-5">Clickusb2b.com is owned by CLICKUS L.L.C.

                        <br><br>CLICKUS LLC is a limited company registered in Rep. of Kosovo under Company Number
                        811586885. <a href="https://arbk.rks-gov.net/page.aspx?id=1,38,218493" target="_blank">Link</a><br>
                        Registered office: Rep. of Kosovo. Fushë Kosovë, St. Nëna Tereza "Jehona", Obj.2, Rep. of
                        Kosovo.
                    </div>
                    <hr class="hr-footer" style="background-color:#5E6168;height:2px">
                </div>
                <div class="col-lg-2 col-md-2 col-xl-3 col-sm-12 pt-2">
                    <div class="p-footer">Company</div>
                    <div class="row pt-5 footer-mobile1">
                        <div class="col-lg-4">
                            <a href="/aboutus" class="footer-p">About us</a>
                            <a href="#" class="footer-p">Careers</a>
                            <a href="/contactus" class="footer-p">Contact us</a>
                            <p class="footer-p">Leave Feedback!</p>
                        </div>
                        <!-- <div class="col-lg-8 pl-5">

                        </div> -->
                    </div>
                </div>
                <div class="col-lg-2 col-md-2  col-xl-3 col-sm-12 pt-2">
                    <div class="p-footer">Documentation</div>
                    <div class="row pt-5 footer-mobile1">
                        <div class="col-lg-4">
                            <a href="/terms_conditions" class="footer-p">Terms of Service</a>
                            <a href="/terms_conditions" class="footer-p">Privacy Policy</a>
                            <p class="footer-p">Investor Relations</p>
                            <p class="footer-p">Cookies</p>
                        </div>
                        <!-- <div class="col-lg-8 pl-5">

                        </div> -->
                    </div>
                </div>
                <div class="col-lg-2 col-md-2 col-xl-2 col-sm-12 pt-2">
                    <div class="p-footer">Resources</div>
                    <div class="row pt-5 footer-mobile1">
                        <div class="col-lg-4">
                            <p class="footer-p">Blog</p>
                            <p class="footer-p">FAQ</p>
                            <p class="footer-p">Newsletter</p>
                            <a class="footer-p" href="#official_partnership">Partners</a>
                        </div>
                        <!-- <div class="col-lg-8 pl-5">

                        </div> -->
                    </div>
                </div>
                <hr class="hr-footer" style="background-color:#5E6168;height:2px">
            </div>

            <div class="footer-all-text">
                <div class="row py-5">
                    <div class="col-lg-4 col-md-4 col-sm-12 footer-2"><span class="all-right">All Rights
                            Reserved 2022</span></div>
                    <div class="col-lg-4 col-md-4 col-sm-12 ">
                        <div class="row">
                            <div class=" col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center ">
                                <p class="footer-2">Powerd by:</p>
                                <div class="ml-2">
                                    <a href="https://clickus.io/" target="_blank"> <img src="/assets/img/clickuslogo.svg" alt="" width="80" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
                                <p class="footer-21">FOLLOW US ON</p>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 d-flex image-icon-mobile">
                                <a class=" mb-2" href="https://www.facebook.com/clickusb2b" target="_blank">
                                    <!-- <img src="/assets/img/fb.svg" style="width:30px" /> -->
                                    <div class="fb-mobile"></div>
                                </a>
                                <a class=" mb-2 ml-1" href="https://www.linkedin.com/company/clickusb2b/" target="_blank">
                                    <!-- <img src="/assets/img/ln.svg" style="width:30px" /> -->
                                    <div class="in-mobile"></div>
                                </a>
                                <a class=" mb-2 ml-1" href="https://www.instagram.com/clickusb2b/" target="_blank">
                                    <!-- <img src="/assets/img/ig.svg" style="width:30px" /> -->
                                    <div class="ig-mobile"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-all-text-mobile">
                <div class="row py-5">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="row">

                            <p class="footer-21 mb-4">FOLLOW US ON</p>

                            <div class="col-lg-6 col-md-6 col-sm-6 d-flex image-icon-mobile mb-4">
                                <a href="https://www.facebook.com/clickusb2b" target="_blank">
                                    <div class="fb-mobile"></div>
                                </a>
                                <a  href="https://www.linkedin.com/company/clickusb2b/" target="_blank">
                                    <div class="in-mobile"></div>
                                </a>
                                <a href="https://www.instagram.com/clickusb2b/" target="_blank">
                                    <div class="ig-mobile"></div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 footer-2 mb-4"><span class="all-right ">All Rights
                                    Reserved 2022</span>
                            </div>
                            <div class=" col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center ">
                                <p class="footer-2">Powerd by:</p>
                                <div class="ml-2">
                                    <a href="https://clickus.io/" target="_blank"> <img src="/assets/img/clickuslogo.svg" alt="" width="80" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- {{-- Modal Login --}} -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title login-title text-center w-100">Login in to ClickusB2B</h4>
                    <span id="help"></span>
                    <button type="button" class="btn btn-secondary button-modal" data-bs-dismiss="modal"> <img src="/assets/img/delete.svg" alt=""></button>
                </div>
                <form method="POST" action="{{route('login_user')}}" id="login_form">
                    <div class="modal-body-nav ">
                        <div class="md-form mb-4">
                            <label class="email-all" for="email">Email</label>
                            <input type="text" id="email" name="email" class="form-control email-login border-0">
                            <span class="text-danger error-text email_error"></span>
                        </div>
                        <div class="md-form">
                            <label class="email-all " for="password">Password</label>
                            <div class="input-container">
                                <input type="password" id="password" class="password-email-change" name="password">
                                <span class="eye-holder-changepasww">
                                    <i class="fa fa-eye-slash" id="changeeye" ></i>
                                </span>
                            </div>
                            <span class="text-danger error-text password_error"></span>
                        </div>
                        <div class="form mt-4">
                            <div class="row  d-flex justify-content-around">
                                <div class="col-6">
                                    <input class="form-check-input" name="remember" type="checkbox" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <span class="remember_me">Remember me</span>
                                    </label>
                                </div>
                                <a href="{{ route('password.request') }}" class="col-6" style="text-decoration:none"><span class="forget_pasw">Forgot password?</span></a>
                            </div>
                        </div>
                        <div class="login-button">
                            <button class="btn btn-default w-100 login222">Log in</button>
                        </div>
                        <div class="row">
                            <div class="already-account">
                                <div class="col-12 d-flex justify-content-center">
                                    <p><span class="acc">Don’t have an account?</span></p>

                                    <div class="col-3 ">
                                        <div class="dropdown ">
                                            <button class=" dropdown ml-3 forget_pasw" type="button" id="dropdownMenuMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sign up
                                            </button>
                                            <div class="dropdown-menu sign-up" aria-labelledby="dropdownMenuMenu">

                                                <div class="row">
                                                    <a type="button" class="dropdown-item btn1-businees border" data-bs-toggle="modal" data-bs-target="#signupModalforusinees">Sign up as Businees</a>

                                                    <a type="button" class="dropdown-item btn1-businees2 border mt-3" data-bs-toggle="modal" data-bs-target="#signupModalforclient">Sign up as
                                                        Client</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="or-padding">
                            <div class="row d-flex justify-content-center  ">
                                <div class="col-5 d-flex justify-content-end">
                                    <hr class="hr-width">
                                </div>
                                <div class="col-1 text-center"><span class="or">or</span></div>
                                <div class="col-5 d-flex justify-content-start">
                                    <hr class="hr-width">
                                </div>
                            </div>
                        </div>
                        <div class="row flex-row">
                            <div class="col-6">
                                <p class="btn-gmail">
                                    <img src="/assets/img/icon-gmail.svg" class="d-inline img-gmail-logo mr-2" alt="">
                                    <a href="{{ url('auth/google') }}"> Log in via Gmail</a>
                                </p>
                            </div>
                            <div class="col-6">
                                <p class="btn-facebook" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Coming soon">
                                    <img src="/assets/img/icon-fb.svg" class="d-inline img-gmail-logo mr-2" alt="">
                                    <span class="img-gmail-logo">
                                        <!-- {{-- <a href="{{'auth/facebook/redirect'}}"> Log in via Facebook</a> --}} -->
                                        <a>Log in via Facebook</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- {{-- Modal SignupModalforusinees --}} -->
    <div class="modal fade" id="signupModalforusinees" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title signup-business w-100">Sign up as Business</h4>
                    <button type="button" class="btn btn-secondary button-modal" onclick="reset_error()" data-bs-dismiss="modal"> <img src="/assets/img/delete.svg" alt="">
                    </button>
                </div>
                <form method="POST" action="{{ route('signup_business') }}" enctype="multipart/form-data" id="signup_bussines_form">
                    @csrf
                    <div class="">
                        <div class="modal-body-nav ">
                            <div class="row mb-4">
                                <div class="col-6">
                                    <label class="email-all" for="email">First Name</label>
                                    <input type="text" id="email" name="first_name" class="form-control email-login border-0" value="{{ old('first_name') }}" autocomplete="email">
                                    <span class="text-danger error-text first_name_error" id="error_signup_bussiness"></span>
                                </div>
                                <div class="col-6">
                                    <label class="email-all" for="email">Last Name</label>
                                    <input type="text" id="email" name="last_name" class="form-control email-login border-0" value="{{ old('last_name') }}">
                                    <span class="text-danger error-text last_name_error" id="error_signup_bussiness"></span>
                                </div>
                            </div>
                            <div class="md-form mb-4">
                                <label class="email-all" for="email">Email</label>
                                <input type="text" id="email" name="email" class="form-control email-login border-0" placeholder="Your email address" value="{{ old('email') }}">
                                <span class="text-danger error-text email_error" id="error_signup_bussiness"></span>
                            </div>
                            <div class="md-form mb-4">
                                <label class="email-all " for="change_password">Password</label>

                                <div class="input-container">
                                    <input type="password" id="change_password" name="password" class="form-control password-email">
                                    <span class="eye-holder-password">
                                        <i class="fa fa-eye-slash" id="changeeye1"></i>
                                    </span>
                                </div>
                                <span class="text-danger error-text password_error" id="error_signup_bussiness"></span>
                            </div>
                            <div class="md-form mb-4">
                                <label class="email-all " for="change_password1">Re- type Password</label>
                                <div class="input-container">
                                    <input type="password" id="change_password1" name="password_confirmation" class="form-control password-email">
                                    <span class="eye-holder-password">
                                        <i class="fa fa-eye-slash" id="changeeye2"></i>
                                    </span>
                                </div>
                                <span class="text-danger error-text password_confirmation_error" id="error_signup_bussiness"></span>
                            </div>
                            <div class="blockui-animation-container ">
                                <span class="text-semibold "></span>
                            </div>
                            <button type="submit" class="btn btn-default w-100 signup_businees" id="submit_signup_bussines">Sign up</button>
                            <div class="mt-3">
                                <input type="checkbox" name="Accepted_Terms&Conditions">&nbsp;
                                <span class="p-signup-business signup-businees-padding"> By signing up you confirm that you accept our </span>
                                <a href="/terms_conditions" class="p-signup-business-span"> Terms of Service</a>
                                and <span class="p-signup-business-span">Privacy Policy.</span>
                            </div>


                            <div class="signup-gmail">
                                <div class="row d-flex justify-content-center  ">
                                    <div class="col-5">
                                        <hr class="hr-width">
                                    </div>
                                    <div class="col-1 text-center"><span class="or">or</span>
                                    </div>
                                    <div class="col-5">
                                        <hr class="hr-width">
                                    </div>
                                </div>
                            </div>
                            <div class="row flex-row mb-4">
                                <div class="col-6">
                                    <span class="btn-gmail"><img src="/assets/img/icon-gmail.svg" class="d-inline img-gmail-logo mr-2" alt=""><span class="gmail-text"><a href="{{ url('auth/google') }}"> Sign up via Gmail</a></span></span>
                                </div>
                                <div class="col-6">
                                    <!-- {{-- <span class="btn-facebook"><img src="/assets/img/icon-fb.svg"  class="d-inline img-gmail-logo" alt=""><span class="img-gmail-logo"><a href="{{ 'auth/facebook/redirect' }}">Sign up via Facebook</a></span></span> --}} -->
                                    <span class="btn-facebook"><img src="/assets/img/icon-fb.svg" class="d-inline img-gmail-logo mr-2" alt=""><span class="img-gmail-logo "><a data-bs-toggle="tooltip" data-bs-placement="top" title="Coming soon">Sign up via Facebook</a></span></span>
                                </div>
                            </div>
                            <hr class="w-100  ">
                            <div class="row">
                                <div class="col-12 d-flex justify-content-center">
                                    <p><span class="acc">Already have an account?</span></p>
                                    <div class="col-2">
                                        <button type="button"><span class="forget_pasw ml-3">Log in</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- {{-- Modal SignupModalforclient --}} -->
    <div class="modal fade" id="signupModalforclient" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Sign up as Client</h4>
                    <button type="button" class="btn btn-secondary button-modal" data-bs-dismiss="modal"> <img src="/assets/img/delete.svg" alt="">
                    </button>
                </div>
                <form action="{{ route('signup_client') }}" method="POST" id="signup_client_form">
                    <div class="">
                        <div class="modal-body-nav ">
                            <div class="row mb-4">
                                <div class="col-6">
                                    <label class="email-all" for="email">First Name</label>
                                    <input type="text" name="first_name" id="email" class="form-control email-login border-0" autocomplete="first_name" autofocus>

                                </div>
                                <div class="col-6">
                                    <label class="email-all" for="email">Last Name</label>
                                    <input type="text" id="email" name="last_name" class="form-control email-login border-0" placeholder="" autocomplete="email" autofocus>

                                </div>
                            </div>
                            <div class="md-form mb-4">
                                <label class="email-all" for="email">Email</label>
                                <input type="text" id="email" name="email" class="form-control email-login border-0" placeholder="Your email address"  autocomplete="email" autofocus>

                            </div>
                            <div class="md-form mb-4">
                                <label class="email-all " for="change_password2">Password</label>
                                <div class="input-container">
                                    <input type="password" id="change_password2" name="password" class="form-control password-email" autocomplete="current-password" placeholder="">
                                    <!-- <span class="eye-holder-password">
                                        <i class="fa fa-eye-slash" id="changeeye3" onclick="changepassword3()"></i>
                                    </span> -->
                                </div>
                                <span class="text-danger error-text password_error" id="error_signup_client"></span>
                            </div>
                            <div class="md-form mb-4">
                                <label class="email-all " for="change_password4">Re- type Password</label>
                                <div class="input-container">
                                    <input type="password" id="change_password4" name="password_confirmation" class="form-control password-email" autocomplete="current-password" placeholder="">
                                    <!-- <span class="eye-holder-password">
                                        <i class="fa fa-eye-slash" id="changeeye4" onclick="changepassword4()"></i>
                                    </span> -->
                                </div>
                                <span class="text-danger error-text password_confirmation_error" id="error_signup_client"></span>
                            </div>
                            <!-- {{-- <div class="row mb-4">
                                <label class="email-all" for="change_password4">Promo Code (optional)</label>
                                    <div class="col-6">
                                    <input type="text" id="change_password4" name="affiliate_promocode" class="form-control password-email">
                                </div>
                            </div> --}} -->
                            <div class="md-form mb-4">
                                <label class="email-all " for="change_password4">Promo Code (optional)</label>
                                <div class="input-container">
                                    <input type="text" id="change_password4" name="affiliate_promocode" class="form-control password-email">
                                </div>
                            </div>
                            <div class="blockui-animation-container">
                                <span class="text-semibold"></span>
                            </div>
                            <button id="submit_signup_client " data-animation="fadeInDown" name="submit" class="btn btn-default mb-3 w-100 signup_client">Sign up</button>
                            <div class="mt-3">
                                <input type="checkbox" name="Accepted_Terms&Conditions">&nbsp;
                                <span class="p-signup-business signup-businees-padding"> By signing up you confirm that you accept our </span>
                                <a href="/terms_conditions" class="p-signup-business-span"> Terms of Service</a>
                                and <span class="p-signup-business-span">Privacy Policy.</span>
                            </div>
                            <div class="row d-flex justify-content-center  line-hr">
                                <div class="col-5">
                                    <hr class="hr-width">
                                </div>
                                <div class="col-1 text-center"><span class="or">or</span>
                                </div>
                                <div class="col-5">
                                    <hr class="hr-width">
                                </div>
                            </div>
                            <div class="row flex-row">
                                <div class="col-6">
                                    <span class="btn-gmail"><img src="/assets/img/icon-gmail.svg" class="d-inline img-gmail-logo mr-2" alt=""><span class="gmail-text"><a href="{{ url('auth/google') }}"> Sign up via Gmail</a></span></span>
                                </div>
                                <div class="col-6 ">
                                    <span type="hidden" class="btn-facebook">
                                        <img src="/assets/img/icon-fb.svg" class="d-inline img-gmail-logo mr-2" alt="">
                                        <span class="img-gmail-logo">
                                            <!-- {{-- <a href="{{ 'auth/facebook/redirect' }}"> Sign up via Facebook</a> --}} -->
                                        </span><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Coming soon"> Sign up via Facebook</a>
                                    </span>
                                </div>
                            </div>
                            <hr class="w-100">
                            <div class="row">
                                <div class="col-12 d-flex justify-content-center">
                                    <p><span class="acc">Already have an account?</span></p>
                                    <div class="col-3">
                                        <button type="button"><span class="forget_pasw ml-3">Log in</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- {{-- Modal Pay basic plan --}} -->
    <div class="modal fade" id="basic_plan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content px-0 pb-5 pt-0">
                <div class="card text-center">
                    <h4 id="secondary_content1_basic">&euro;30<span class="euro">&nbsp;00</span> <span> / mo.</span></h4>
                    <h4 id="main_content1_basic">&euro;300<span class="euro">&nbsp;00</span> <span> / yo.</span></h4>
                    <p>Basic Plan</p>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="value">
                        <img src="{{ asset('assets/img/bank.svg') }}" class="pt-5" width="150" height="150"  alt="">
                    </div>
                </div>
                <div class="modal-header text-center">
                    <h5 class="modal-title login-title text-center w-100">Make your bank transfer</h5>
                    <span id="help"></span>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="alert alert-success text-center w-50 " id="success" style="display: none;">
                        Your request has been completed &nbsp; <i class="fa-solid fa-check"></i>
                    </div>
                </div>
                <form method="POST" action="{{ route('subsription.store') }}" enctype="multipart/form-data" id="form_basic_plan">
                    <div class="modal-body-nav ">
                        <input type="hidden" id="basic_plan_monthly" name="total">
                        <input type="hidden" id="basic_now_date" name="start_date">
                        <input type="hidden" id="basic_expire_date" name="expiry_date">
                        <div class="row" id="input-disabled">
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Beneficiary name:</h6>
                                <p class="paragraf">Your official registered compnay name</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="beneficiary_name" value="CLICKUS LLC" class="form-control">
                                <!-- <button type="button" onclick="copyFunction();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>

                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Beneficiary address:</h6>
                                <p class="paragraf">The address of the beneficiary</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="beneficiary_address" value="Rr. Hysen Xhakolli, FusheKosove 12000" class="form-control">
                                <!-- <button type="button" onclick="copyFunction2();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>

                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">IBAN:</h6>
                                <p class="paragraf">Enter the digits of your IBAN</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="iban" name="iban" value="LT173500010015469675" class="form-control">
                                <!-- <button type="button" onclick="copyFunction3();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">SWIFT/BIC:</h6>
                                <p class="paragraf">Fill the form on your right side</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="swift" value="EVIULT2VXXX" class="form-control">
                                <!-- <button type="button" onclick="copyFunction4();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Bank name:</h6>
                                <p class="paragraf">The name of the bank</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="bank_name" value="Paysera LT, UAB" class="form-control">
                                <!-- <button type="button" onclick="copyFunction5();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Bank address:</h6>
                                <p class="paragraf">Your official registered compnay name</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="bank_address" value="Pilaitės pr. 16, Vilnius, LT-04352, Lithuania" class="form-control" >
                                <!-- <button type="button" onclick="copyFunction6();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Referenc code:</h6>
                                <p class="paragraf">Reference code</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="referenc_code_basic" value="{{ Auth::id() }}" class="form-control" >
                                <!-- <button type="button" onclick="copyFunction7();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br><br>
                            <div class="login-button text-end">
                                <button type="button" class="button-info" onclick="reset_form();" data-bs-dismiss="modal">Cancel</button>
                                <button class="button">I`ve Paid</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- {{-- Modal Pay advanced plan --}} -->
    <div class="modal fade" id="advanced_plan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content px-0 pb-5 pt-0">
                <div class="card text-center">
                    <h4 id="secondary_content1_advc">&euro;50<span class="euro">&nbsp;00</span> <span> / mo.</span></h4>
                    <h4 id="main_content1_advc">&euro;500<span class="euro">&nbsp;00</span> <span> / yo.</span></h4>
                    <p>Advanced Plan</p>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="value">
                        <img src="/assets/img/bank.svg'" class="pt-5" width="150" height="150"  alt="">
                    </div>
                </div>
                <div class="modal-header text-center">
                    <h5 class="modal-title text-center w-100">Make your bank transfer</h5>
                    <span id="help"></span>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="alert alert-success text-center w-50 " id="success_advc" style="display: none;">
                        Your request has been completed &nbsp; <i class="fa-solid fa-check"></i>
                    </div>
                </div>
                <form method="POST" action="{{ route('subsription.store') }}" enctype="multipart/form-data" id="form_advanced_plan">
                    <div class="modal-body-nav ">
                        <input type="hidden" id="advc_plan_monthly" name="total">
                        <input type="hidden" id="advc_now_date" name="start_date">
                        <input type="hidden" id="advc_expire_date" name="expiry_date">
                        <div class="row" id="input-disabled">
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Beneficiary name:</h6>
                                <p class="paragraf">Your official registered compnay name</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="beneficiary_name_advc" value="CLICKUS LLC" class="form-control">
                                <!-- <button type="button" onclick="copyFunction8();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>

                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Beneficiary address:</h6>
                                <p class="paragraf">The address of the beneficiary</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="beneficiary_address_advc" value="Rr. Hysen Xhakolli, FusheKosove 12000" class="form-control">
                                <!-- <button type="button" onclick="copyFunction9();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>

                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">IBAN:</h6>
                                <p class="paragraf">Enter the digits of your IBAN</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="iban_advc" name="iban_advc" value="LT173500010015469675" class="form-control">
                                <!-- <button type="button" onclick="copyFunction10();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">SWIFT/BIC:</h6>
                                <p class="paragraf">Fill the form on your right side</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="swift_advc" value="EVIULT2VXXX" class="form-control">
                                <!-- <button type="button" onclick="copyFunction11();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Bank name:</h6>
                                <p class="paragraf">The name of the bank</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="bank_name_advc" value="Paysera LT, UAB" class="form-control">
                                <!-- <button type="button" onclick="copyFunction12();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Bank address:</h6>
                                <p class="paragraf">Your official registered compnay name</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="bank_address_advc" value="Pilaitės pr. 16, Vilnius, LT-04352, Lithuania" class="form-control" >
                                <!-- <button type="button"  class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h6 class="fw-bold">Referenc code:</h6>
                                <p class="paragraf">Write a reference code</p>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 buttonIn">
                                <input type="text" id="referenc_code_advc" value="{{ Auth::id() }}" class="form-control" >
                                <!-- <button type="button" onclick="copyFunction14();" class="btn-mycompany"><img src="{{ asset('assets/img/copy_text.svg') }}" alt=""></button> -->
                            </div><br><br><br>
                            <div class="login-button text-end">
                                <button type="button" class="button-info" data-bs-dismiss="modal">Cancel</button>
                                <button class="button">I`ve Paid</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
    components: {},
}
</script>
<style>

</style>
