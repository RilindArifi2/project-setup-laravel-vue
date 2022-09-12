<template>
    <Front>
        <div class="forbusinesses">
  <div class="for-businesess">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 ">
          <h2 class="text d-flex justify-content-start">Power up your business with <br>the All-In-One platform </h2>
          <p class="paragraph">We are dedicated to creating a level playing field for different brands <br> in expanding their business to reach their potential global markets. </p>
          <div class="row">
            <div class="col-xl-6">
              <!-- {{-- @if(!Auth::check()) --}}
              {{-- <li class="butoni-about nav-link w-100">
                <div class="dropdown">
                  <button class="nav-link01 dropdown" type="button" id="dropdownMenuMenu" data-toggle="dropdown" style="color:#ff2a01" aria-haspopup="true" aria-expanded="false">
                    Create Account
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuMenu">
                    <div class="row">
                      <a type="button" class="dropdown-item btn1-businees border" data-bs-toggle="modal" data-bs-target="#signupModalforusinees">Sign up as Businees</a>
                      <a type="button" class="dropdown-item btn1-businees2 border mt-3" data-bs-toggle="modal" data-bs-target="#signupModalforclient">Sign up as Client</a>
                    </div>
                  </div>
                </div>
              </li>
              @endif -->
            </div>
            <div class="col-xl-6"></div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="image"> <img src="/assets/img/forbusiness.png " alt=""> </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /////////////////Section2///////////// -->
  <div class="business2">
    <div class="container ">
      <div class="row">
        <p class="title-business3">How it works</p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="box1">
            <div class="card-box1">
              <p class="number1"> 01 </p>
              <h5 class="registration">Register</h5>
              <p class="text-box1 ">Fill in your company details!</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="box1">
            <div class="card-box1">
              <p class="number1"> 02 </p>
              <h5 class="registration">Choose your preferred plan</h5>
              <p class="text-box1">Choose one of three packages!</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="box1">
            <div class="card-box1">
              <p class="number1"> 03 </p>
              <h5 class="registration">Verify your account</h5>
              <p class="text-box1">Upload your documents!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //////////Section3/////////// -->
  <div class="business3">
    <div class="container ">
      <div class="row">
        <p class="title-business3">What you get</p>
      </div>
      <div class="row ">
        <div class="col-lg-7 col-ms-7 col-sm-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <p class="number0">01</p>
              <h5 class="p01" >Business Advertising</h5>
              <p class="t01 pt-4">Presentation of your work on a single <br> platform where your business will get the <br> recognition and visibility deserved. </p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <p class="number0">02</p>
              <h5 class="p01 " >Access and Research </h5>
              <p class="t01 pt-4" >In addition to presenting your business, <br> another thing you can take advantage of <br> B2B Online is that you can also access <br>and research the market to find <br> businesses that you are also interested in <br> or need for your business. </p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <p class="number0">03</p>
              <h5 class="p02" >New Opportunities</h5>
              <p class="t01 pt-4" >Through the digital B2B Online Platform, your business will have a significant growth because the opportunities for cooperation and growth of interest are high, thus bringing new customers. </p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <p class="number0">04</p>
              <h5 class="p02 " >Success </h5>
              <p class="t01 pt-4" >Through the opportunities offered by our platform, achieving success will be much easier and faster for you.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-ms-4 col-sm-12">
          <img src="/assets/img/clickusb2b.svg "  alt="" class="img-fluid">
        </div>
      </div>
    </div>
    <!-- ///////////////Section4/////////// -->
    <section id="clients" class="clients section-bg">
      <div class="container ">
        <div class="row">
          <h5 class="title-clients" >Trusted by</h5>
        </div>
        <!-- {{-- <div class="row">
        <h5 class="text-clients"data-aos="zoom-in">Find a company you need</h5>
      </div> --}} -->
        <div class="row">
          <!-- @foreach ($user_promot as $user_promots)
          <div class="col-lg-3 col-md-3  col-sm-12  ">
            <div class=" borderss align-items-center d-flex justify-content-center" >
              <img class="img-fluid" src="../company_image/{{ $user_promots->profile_photo_path }}" alt="" style="width:150px;height:100px">
            </div>
          </div>
          @endforeach -->
        </div>
      </div>
    </section>
  </div>
</div>
    </Front>
</template>
<script>
import Front from '@/Layouts/Front.vue';
export default {
    components: { Front }
}
</script>
<style lang="">

</style>
