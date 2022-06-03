<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <div
        class="
      sidebar-brand-wrapper
      d-none d-lg-flex
      align-items-center
      justify-content-center
      fixed-top
    ">
        <a class="sidebar-brand brand-logo" href="index.html"><img
                src="{{ asset('backend/assets/images/faces/face15.jpg') }}" alt="logo" /></a>
        <a class="sidebar-brand brand-logo-mini" href="index.html"><img
                src="{{ asset('backend/assets/images/faces/face15.jpg') }}" alt="logo" /></a>
    </div>
    <ul class="nav">
        <li class="nav-item profile">
            {{-- <nav class="col-xs-12 header-item mx-auto col-md-12 clock-wapper">
              <h6 id="demo"></h6>
           </nav> --}}
            <div class="profile-desc">
                <div class="profile-pic">
                    <div class="count-indicator">
                        {{-- <img class="img-xs rounded-circle"
                            src="{{ asset('storage/settings/' . $adminInfo->image->title) }}" alt="" /> --}}

                        <span class="count bg-success"></span>
                    </div>
                    <div class="profile-name">
                        {{-- <h5 class="my-2 font-weight-normal mx-2 ">{{ $adminInfo->name }}</h5> --}}
                        <span class="mx-2 ">Admin Panel</span>
                    </div>
                </div>
                <a href="#" id="profile-dropdown" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></a>
                <div class="
                            dropdown-menu dropdown-menu-right
                            sidebar-dropdown
                            preview-list
                        "
                    aria-labelledby="profile-dropdown">

                    <div class="dropdown-divider"></div>


                </div>
            </div>
        </li>
        {{-- <li class="nav-item nav-category">
            <span class="nav-link">دسترسی ها</span>
        </li> --}}

        <li class="nav-item menu-items mt-4">
            <a class="nav-link" href="{{ route('players.index') }}">
                <span class="menu-icon mx-2 ">
                    <i class="fa fa-users text-success"></i>
                </span>
                <span class="menu-title">Players</span>
            </a>
        </li>




    </ul>
</nav>
