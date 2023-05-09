<template>
    <section class="login">
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth">
            <div class="row w-100 flex-grow">
              <div class="col-xl-4 col-lg-6 mx-auto">
                <div class="auth-form-light text-left">
                  <center>
                    <div class="brand-logo">
                      <img class="mt-4" src="../../../assets/images/logo.png" />
                    </div>
                  </center>
  
                  <form class="pt-3">
                    <!-- <div class="form-group">
                      <input type="email" class="form-control form-control-lg" id="exampleInputEmail1"
                        placeholder="Username">
                    </div> -->
  
                    <div class="input-group mb-1 form-group p-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"
                          ><i
                            class="mdi mdi-lock icon-sm text-dark align-middle"
                          ></i
                        ></span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        class="form-control form-control-lg"
                        placeholder="Mot de passe"
                        aria-label="password"
                        id="exampleInputPassword1"
                        aria-describedby="basic-addon1"
                      />
                    </div>
  
                    <div class="input-group mb-0 form-group p-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"
                          ><i
                            class="mdi mdi-lock icon-sm text-dark align-middle"
                          ></i
                        ></span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        class="form-control form-control-lg"
                        placeholder="Confimez mot de passe"
                        aria-label="password"
                        id="exampleInputPassword1"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="mt-0 mb-0 p-3">
                        <router-link to="/auth-pages/login" class="linked">
                            <button type="button" class="connect btn btn-block bg-gradient-success"> Réinitialiser
                            </button>
                        </router-link>
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
    name: "reset",
  };
  </script>
  
  <style>
  .logo-brand {
    display: flex;
    justify-content: space-between;
  }
  
  .logo-brand img {
    margin-left: 0;
    margin-right: 10px;
  }
  
  
  @media screen and (max-height: 767px) {
    #rc-imageselect,
    .g-recaptcha {
      transform: scale(0.57);
      -webkit-transform: scale(0.67);
      transform-origin: 0 0;
      -webkit-transform-origin: 0 0;
    }
  }
  
  .connect {
    font-size: 1.2rem;
    color: #fff;
  }

  .linked:hover {
    text-decoration: none;
  }
  </style>
  