<template>
  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img src="../../../assets/images/logo.png">
                </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3">
                  <!-- <div class="form-group">
                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail1"
                      placeholder="Username">
                  </div> -->
    
                  <div class="input-group mb-3 form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1"><i class="mdi mdi-email icon-sm text-dark align-middle"></i></span>
                    </div>
                    <input type="email" name="email" class="form-control form-control-lg" placeholder="Email" aria-label="email" id="exampleInputEmail1"
                      aria-describedby="basic-addon1">
                  </div>

                  <div class="input-group mb-3 form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1"><i class="mdi mdi-account icon-sm text-dark align-middle"></i></span>
                    </div>
                    <input type="password" name="password" class="form-control form-control-lg" placeholder="Password" aria-label="password" id="exampleInputPassword1"
                      aria-describedby="basic-addon1">
                  </div>





                  <div class="mt-3">
                    <router-link class="btn btn-block btn-gradient-success btn-lg font-weight-medium auth-form-btn"
                      to="/">SIGN IN</router-link>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check form-check-flat form-check-success">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input ">
                        Keep me signed in
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <a href="javascript:void(0);" class="auth-link text-black">Forgot password?</a>
                  </div>
                  <div class="mb-2">
                    <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                      <i class="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Don't have an account? <router-link to="/auth-pages/register"
                      class="text-primary">Create</router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'login'
}
</script>
