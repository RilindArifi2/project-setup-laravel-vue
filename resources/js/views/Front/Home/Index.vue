<template>
        <header class="home">
            <div class="container">
                <div class="">
                    <div class="row d-flex justify-content-between align-items-center " style="padding-bottom:50px;">
                        <div class=" col-lg-6">
                            <span class="business" >Let your business be seen worldwide!</span>
                        </div>
                        <a class="  col-lg-4 logo">
                            <div class="">
                                <img src="/assets/img/clickus.svg" alt="">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- //////dropdown-home//////////////// -->
            <div class="container">
                <div class="row m-2">
                    <div class="dropdown-search ">
                        <form action="{{ route('search_company') }}" method="GET" class="m-0">
                            <div class="row d-flex justify-content-center m-2">
                                <div
                                    class="col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center category-all ">

                                    <img src="/assets/img/search-img1.svg" class="input-line d-inline" alt="">
                                    <input type="text" name="search_name" class="search-input" id="userInput"
                                        placeholder="Company name, keywords" required>
                                </div>
                                <div
                                    class="col-sm-12 col-md-5 col-lg-5 col-xl-5 d-flex align-items-center category-all">
                                    <div class="vr"></div>
                                    <div class="myg-native-select myg-native-select--with-icon d-flex">
                                        <img src="/assets/img/input-line.svg"
                                            class="input-line d-inline material-icons myg-native-select__icon" alt="">
                                        <select class="category-left " name="search_category" id="userInput">
                                            <img src="/assets/img/input-line.svg" class="input-line d-inline" alt="">
                                            <option selected disabled>Choose category</option>
                                            <!-- @foreach ($category_search as $categorys)
                                    <option value="{{ $categorys->id }}">{{ $categorys->name }}</option>
                                    @endforeach -->
                                        </select>

                                    </div>

                                </div>

                                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-center align-items-center">
                                    <!-- @auth -->
                                    <button type="submit" class="butonn w-100 ">Serach</button>
                                    <!-- @endauth -->

                                    <!-- @guest
                            <button type="button" class="butonn  w-100 " data-bs-toggle="modal" data-bs-target="#loginModal">@lang('home.kerko')</button>
                            @endguest -->
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="img">
                <div class="shadow_back">
                    <div class="about2">
                        <div class="container-about ">
                            <div class="container mt-0">
                                <div class="row">
                                    <div class="col-3">
                                        <!-- {{-- <div class="vr"></div> --}} -->
                                        <!-- <p class="number">{{count($company)}}</p> -->
                                        <p class="paragraph-about">Businesses</p>
                                    </div>
                                    <div class="col-3">
                                        <span class="hr-number">
                                            <!-- <p class="number">{{count($clients)}}</p> -->
                                            <p class="paragraph-about">Individuals</p>
                                        </span>
                                    </div>
                                    <div class="col-3">
                                        <span class="hr-number">
                                            <!-- <p class="number">{{ $products }}</p> -->
                                            <p class="paragraph-about">Products</p>
                                        </span>
                                    </div>
                                    <div class="col-3">
                                        <span class="hr-number">
                                            <p class="number">N/A</p>
                                            <p class="paragraph-about">Revenue</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div>
                    <div style="margin-bottom:50px">
                        <a class=" logo1 " href="">
                            <img src="/assets/img/clickus-flower-home.svg" alt="">
                        </a>
                        <div class="text-category text-center" >Explore by category</div>
                    </div>
                </div>
                <!-- ////////////////////Card Section///////////////// -->
                <div class="container mt-0 ">
                    <div class="row">
                        <!-- @foreach ($category as $categorys) -->
                        <div class="col-sm-12 col-lg-4 col-md-4  col-xl-4">
                            <form action="{{ route('search_company') }}" method="GET">
                                <div class="card">
                                    <!-- @csrf -->
                                    <input type="hidden" name="search_category" id=""
                                        value="">
                                    <!-- @auth -->
                                    <button type="submit">
                                        <div class="card-body">
                                            <p class="card-text img-icon">
                                                <img src="/icon_category/" alt="">
                                            </p>
                                            <h5 class="card-title"> </h5>
                                        </div>
                                    </button>
                                </div>
                                <!-- @endauth
                            @guest -->
                                <!-- <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
                                <div class="card-body">
                                    <p class="card-text img-icon">
                                        <img src="../icon_category/{{ $categorys->icon }}" alt="">
                                    </p>
                                    <h5 class="card-title">{{ $categorys->name }} </h5>
                                </div>
                            </button>
                            @endguest -->
                            </form>
                        </div>
                    </div>
                    <!-- @endforeach -->
                    <div class="show-done">
                        <button class="m-0" id="load_more">
                            <div class="box-down">
                                <p class="hidden-paragraph m-3">Expand Categories</p>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            &nbsp;<i class="fa-solid fa-up-to-line"></i>
                        </button>
                        <button class="mt-3" id="load_more_hidden">
                            <div class="box-hidden">
                                <p class="hidden-paragraph">Hidden Categories</p>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            &nbsp;<i class="fa-solid fa-down-from-line"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- ///////////Section3//////////////// -->
            <div class="section31 " id="official_partnership">
                <div class="container ">
                    <div class="row  ">
                        <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12 ">
                            <h2 class="text-category text-center" id="fficial_partnership"
                                style="padding:50px">Official Partnership</h2>
                        </div>
                        <!-- @foreach ($user_promot as $user_promots) -->

                        <div class="col-6 col-md-3 col-lg-3 col-xl-3">
                            <div class=" borderss align-items-center d-flex justify-content-center">
                                <img src="/company_image/" alt="" style="max-height:150px; height:125px; width:150px ">
                            </div>
                        </div>

                        <!-- @endforeach -->
                    </div>
                    <!-- {{-- <div class="row  mt-4">
                        <div class="col-lg-3 col-md-3  col-sm-12">
                            <a href="">
                                <div class="borderss align-items-center d-flex justify-content-center">
                                    <img class="img-fluid" src="/assets/img/ms-h.svg" width="100px" height="100px"
                                        alt="">
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-3  col-sm-12 ">
                            <a href="">
                                <div class="borderss align-items-center d-flex justify-content-center   ">
                                    <img class="" src="/assets/img/meka-h.svg" width="100px" height="100px" alt="">
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-3  col-sm-12 ">
                            <a href="">
                                <div class=" borderss align-items-center d-flex justify-content-center   ">
                                    <img class="" src="/assets/img/golden-h.svg" width="100px" height="100px" alt="">
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-3  col-sm-12  ">
                            <a href="">
                                <div class=" borderss align-items-center d-flex justify-content-center   ">
                                    <img class="img-fluid" src="/assets/img/vita-h.svg" width="100px" height="100px"
                                        alt="">
                                </div>
                            </a>
                        </div>
                    </div> --}} -->
                </div>
            </div>
            <!-- //////////////////////Section4/////////////////////////////////// -->
            <div class="section4">

                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-12 col-md-6 col-xl-6 ">
                            <div class="textsection4 text-left" style="position: absolute;z-index: 999;">
                                <h2 class="h2section4 text-left " >Why choose ClickusB2B</h2>
                                <p class=" m-0"><span class="psection4 ">ClickusB2B is a form of
                                        transaction between businesses, such as one involving a manufacturer and
                                        wholesaler, or a wholesaler and a retailer. In this case, through ClickusB2B the
                                        development of your business will be much easier, because we do the presentation
                                        of all businesses on a single platform.</span> <br>
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-sm-12 col-lg-12 col-md-6 col-xl-6 d-flex align-items-center justify-content-center ">
                            <img src="/assets/img/home-clickus.svg" class="img-flowers-home" alt="">
                            <div class="flowers-group"> </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- /////////////////////////////Section5////////////////////// -->
            <div class="section5">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12 group-section5">
                            <div class="text-category text-center">Relevant package available at a
                                click</div>

                            <p class="paragraph55" > Do more of what works, drive predictable results
                                and
                                optimize your entire revenue operation with a package that is right for your business.
                            </p>

                            <div class="row pb-4">
                                <div class=" col-lg-4 col-md-4 col-xl-4">
                                </div>
                                <div class=" col-lg-4 col-md-4 col-xl-4 d-flex justify-content-center">
                                    <p id="secondary_content3">Monthly</p>
                                    <p id="main_content3">Monthly</p>
                                    <p class="monthly">
                                        <label class="switch">
                                            <input type="checkbox" hidden="hidden" id="username"
                                                class="checkbox-switch">
                                            <label class="switch" for="username"></label>
                                        </label>
                                    </p>
                                    <p id="secondary_content2">Yearly</p>
                                    <p id="main_content2">Yearly</p>
                                    <p class="discount">Two Months Free</p>
                                </div>
                                <div class=" col-lg-4 col-md-4 col-xl-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="package-available">
                    <div class="row">
                        <div class="col-sm-12 col-xl-4 col-lg-4 col-md-12 mt-auto">
                            <div class="featured" >
                                <h2 id="secondary_content" style="display: block;">&euro;30<span
                                        class="euro">&nbsp;00</span> <span> / mo.</span></h2>
                                <h2 id="main_content">&euro;300<span class="euro">&nbsp;00</span> <span> / yo.</span>
                                </h2>
                                <h3 class="basic">Basic plan</h3>
                                <div class="packge-details  ml-4 ">
                                    <p class="beforee ml-4">Admin Dashboard</p>
                                    <p class="beforee ml-4">Up to 20 Products</p>
                                    <p class="beforee ml-4">B2B Live Chat</p>
                                    <p class="beforee ml-4">Customer Support (09:00-18:00)</p>
                                    <p class="beforee  d-flex align-items-center ml-4 ">Advanced reporting and analytics
                                    </p>
                                </div>
                                <div>
                                    <!-- @auth
                                    <button type="button" id="subsrcribe_basic" class="butoni nav-link  w-100 mt-2" to="# ">Subscribe</button>
                                @endauth -->
                                    <!-- @guest -->
                                    <a type="button" class="butoni nav-link mt-2" data-bs-toggle="modal"
                                        data-bs-target="#loginModal">Subscribe</a>
                                    <!-- @endguest -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-xl-4 col-lg-4 col-md-12  mt-auto">
                            <div class="featured center-featured">
                                <h2 id="secondary_content1">&euro;50<span class="euro">&nbsp;00</span> <span> /
                                        mo.</span></h2>
                                <h2 id="main_content1">&euro;500<span class="euro">&nbsp;00</span> <span> / yo.</span>
                                </h2>
                                <h3 class="basic">Advanced Plan</h3>
                                <div class="packge-details ml-4 ">
                                    <p class="beforee ml-4">Admin Dashboard</p>
                                    <p class="beforee ml-4">Up to 50 Products</p>
                                    <p class="beforee ml-4">B2B Live Chat</p>
                                    <p class="beforee ml-4">B2C Live Chat</p>
                                    <p class="beforee ml-4">Customer Support 24/7 </p>
                                    <p class="beforee ml-4">Legal Advices</p>
                                    <p class="beforee  d-flex align-items-center ml-4 ">Advanced reporting and analytics
                                    </p>
                                    <p class="beforee  d-flex align-items-center ml-4 ">S E O Basic</p>
                                </div>
                                <div class="">
                                    <!-- @auth
                                    <button type="button" class="butoni nav-link  w-100 mt-2" id="subsrcribe_advanced">Subscribe</button>
                                @endauth
                                @guest -->
                                    <a type="button" class="butoni nav-link mt-2" data-bs-toggle="modal"
                                        data-bs-target="#loginModal">Subscribe</a>
                                    <!-- @endguest -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-xl-4 col-lg-4 col-md-12  mt-auto">
                            <div class="featured">
                                <h2 class="">&nbsp;</h2>
                                <h3 class="customized-plan ml-4">Customized Plan</h3>
                                <div class="packge-details ml-4">
                                    <p class="beforee ml-4 ">Unlock full access to ClickusB2B Contact Sales Departament
                                        to provide you with detailed Services.</p>
                                </div>
                                <div class="">
                                    <!-- @auth
                            <button type="submit" class="butoni nav-link send-request  w-100 mt-2" to="#">Send Request</button>
                        @endauth
                        @guest -->
                                    <a type="button" class="butoni nav-link send-request" data-bs-toggle="modal"
                                        data-bs-target="#loginModal">Send Request</a>
                                    <!-- @endguest -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <!-- ///////////////// -->
                <!-- ///Pay for mobile// -->
                <div class="package-available-mobile">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="col-sm-12 col-xl-4 col-lg-4 col-md-12 mt-auto">
                                    <div class="featured" >
                                        <h2 id="secondary_content4" style="display: block;">&euro;30<span
                                                class="euro">&nbsp;00</span> <span> / mo.</span></h2>
                                        <h2 id="main_content4">&euro;300<span class="euro">&nbsp;00</span> <span> /
                                                yo.</span>
                                        </h2>
                                        <h3 class="basic">Basic plan</h3>
                                        <div class="packge-details  ml-4 ">
                                            <p class="beforee ml-4">Admin Dashboard</p>
                                            <p class="beforee ml-4">Up to 20 Products</p>
                                            <p class="beforee ml-4">B2B Live Chat</p>
                                            <p class="beforee ml-4">Customer Support (09:00-18:00)</p>
                                            <p class="beforee  d-flex align-items-center ml-4 ">Advanced reporting and
                                                analytics </p>
                                        </div>
                                        <div>
                                            <!-- @auth
                                            <button type="button" id="subsrcribe_basic" class="butoni nav-link  w-100 mt-2" to="# ">Subscribe</button>
                                        @endauth
                                        @guest -->
                                            <a type="button" class="butoni nav-link mt-2" data-bs-toggle="modal"
                                                data-bs-target="#loginModal">Subscribe</a>
                                            <!-- @endguest -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="col-sm-12 col-xl-4 col-lg-4 col-md-12  mt-auto">
                                    <div class="featured center-featured" >
                                        <h2 id="secondary_content5">&euro;50<span class="euro">&nbsp;00</span> <span> /
                                                mo.</span></h2>
                                        <h2 id="main_content5">&euro;500<span class="euro">&nbsp;00</span> <span> /
                                                yo.</span>
                                        </h2>
                                        <h3 class="basic">Advanced Plan</h3>
                                        <div class="packge-details ml-4 ">
                                            <p class="beforee ml-4">Admin Dashboard</p>
                                            <p class="beforee ml-4">Up to 50 Products</p>
                                            <p class="beforee ml-4">B2B Live Chat</p>
                                            <p class="beforee ml-4">B2C Live Chat</p>
                                            <p class="beforee ml-4">Customer Support 24/7 </p>
                                            <p class="beforee ml-4">Legal Advices</p>
                                            <p class="beforee  d-flex align-items-center ml-4 ">Advanced reporting and
                                                analytics </p>
                                            <p class="beforee  d-flex align-items-center ml-4 ">S E O Basic</p>
                                        </div>
                                        <div class="">
                                            <!-- @auth
                                            <button type="button" class="butoni nav-link  w-100 mt-2" id="subsrcribe_advanced">Subscribe</button>
                                        @endauth
                                        @guest -->
                                            <a type="button" class="butoni nav-link mt-2" data-bs-toggle="modal"
                                                data-bs-target="#loginModal">Subscribe</a>
                                            <!-- @endguest -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="col-sm-12 col-xl-4 col-lg-4 col-md-12  mt-auto">
                                    <div class="featured" >
                                        <h2 class="">&nbsp;</h2>
                                        <h3 class="customized-plan ml-4">Customized Plan</h3>
                                        <div class="packge-details ml-4">
                                            <p class="beforee ml-4 ">Unlock full access to ClickusB2B Contact sales
                                                department to provide you with detailed Services.</p>
                                        </div>
                                        <div class="">
                                            <!-- @auth
                                    <button type="submit" class="butoni nav-link send-request  w-100 mt-2" to="#">Send Request</button>
                                @endauth -->
                                            <!-- @guest -->
                                            <a type="button" class="butoni nav-link send-request" data-bs-toggle="modal"
                                                data-bs-target="#loginModal">Send Request</a>
                                            <!-- @endguest -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon prev" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                            data-slide="next">
                            <span class="carousel-control-next-icon next" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
</template>
<script>
export default {
}
</script>
<style>

</style>
