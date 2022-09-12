<template>
        <header class="companies">
    <div class="companies">
        <div class="container ">
            <div class="intro-text">
                <div class="row d-flex justify-content-between align-items-center  ">
                    <div class="intro-heading col-lg-8 ">
                        <p class="p-companies" >Companies</p>
                    </div>
                    <a class=" logo col-lg-4 ">
                        <img src="/assets/img/clickus.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
        <!-- //////////////////Section1/////////////////// -->
        <div class="section1">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="border-group" >
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-lg-12 col-sm-12 p-5">
                                    <p class="search-keyword pl-2 pt-2">Search by Keywords</p>
                                    <form action="{{ route('companies.index') }}" method="GET">
                                        <input type="text" id="userSearch" name="search_name" placeholder="Company name, keywords" class="w-100">
                                        <p class="search-keyword pt-4 pl-2">Location</p>
                                        <input type="search" name="search_location" id="userLocation" placeholder="Country" class="w-100">
                                        <p class="search-keyword pt-4 pl-2">Category</p>
                                        <select class="category-input w-100 " name="search_category" id="search_category">
                                            <option selected disabled>Choose a category</option>
                                            <!-- @foreach($category as $categorys)
                                            <option value="{{ $categorys->id }}">{{ $categorys->name }}</option>
                                            @endforeach -->
                                        </select>
                                        <!-- {{-- <p class="search-keyword pt-4 pl-2">Company Size</p>
                                                <select class="category-members w-100 " name="search_members" id="search_members">
                                                    <option selected disabled>Select option</option>
                                                    <option value="1<20 ">1-20 members</option>
                                                    <option value="20<40">20-40 members</option>
                                                    <option value="40<60">40-60 members</option>
                                                    <option value="60<80">60-80 members</option>
                                                    <option value="80<100">80-100 members</option>
                                                </select> --}} -->
                                        <button type="submit" class="btn-submit w-100 mt-5">Search</button>
                                        <a href="/companies"> <button type="submit" class="btn-submit w-100 mt-4">Reset</button></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <div class="row">
                            <div class="col-lg-6 col-md-6  col-sm-12 d-flex align-items-end ">
                                <p class="show-all" >Showing <span class="company-size"> 1 - 20 </span> of <span class="company-size"> 5</span> companies</p>
                            </div>
                            <div class="col-lg-6 col-md-6  col-sm-12  ">
                                <div class="row ">
                                    <div class="col-6 ">
                                        <form action="">
                                            <select class="form-select text-center" aria-label="Most Recent" >
                                                <option class="selected" selected>Most Recent</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div class="col-6">
                                        <form action="">
                                            <select class="form-select text-center" aria-label="Show 20" >
                                                <option selected>Show 20</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <!-- @foreach($user as $users)
                            <div class="col-lg-6 col-md-6  col-sm-6   ">
                                <a href="{{ route('companies.show', $users->id) }}" class="d-inline" style="text-decoration:none">
                                    <div class=" borderss" >
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="border1 " style="background-color:#1E802826">
                                                    <img class=" " src="../company_image/{{ $users->profile_photo_path }}" alt="" style="  width:  auto;

                                                    height: auto;" >
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <h2 class="card-eksimor">{{ $users->name }}</h2>
                                                <p class="contry"><span class="mr-2"><img src="/assets/img/location.svg" alt=""></span>
                                                    <span class="">{{ $users->city }} @if(!$users->city == null && !$users->country == null) , @endif
                                                        {{ $users->country }}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            @endforeach -->
                        </div>
                        <div class="mt-5">
                            <!-- {{$user->links()}} -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </header>
</template>
<script>
export default {
    components: {  }
}
</script>
<style lang="">

</style>
