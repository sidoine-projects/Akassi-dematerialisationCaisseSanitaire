<template>
  <div>
    <section class="login">
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth">
            <div class="row w-100 flex-grow">
              <div class="col-xl-4 col-lg-6 mx-auto">
                <div class="auth-form-light text-left">
                  <div class="brand-logo logo-brand p-2">
                    <img
                      class="w-50 ml-n4"
                      src="../../../assets/images/sante.png"
                      style="height: 60% !important"
                    />
                    <img class="w-30" src="../../../assets/images/oms.svg" />
                  </div>
                  <center>
                    <div class="brand-logo">
                      <img src="../../../assets/images/logo.png" class="w-50" />
                    </div>
                  </center>

                  <marquee behavior="alternate">
                    <h4 class="p-3">Bienvenue sur E-MEDICO</h4>
                  </marquee>

                  <form class="pt-3" @submit="login">
                    <div class="input-group mb-1 form-group p-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"
                          ><i
                            class="mdi mdi-email icon-sm text-dark align-middle"
                          ></i
                        ></span>
                      </div>
                      <!-- Utilisez user.email au lieu de email -->
                      <input
                        type="email"
                        v-model="email"
                        class="form-control form-control-lg"
                        placeholder="Email"
                        aria-label="email"
                        id="exampleInputEmail1"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-0 form-group p-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"
                          ><i
                            class="mdi mdi-lock icon-sm text-dark align-middle"
                          ></i
                        ></span>
                      </div>
                      <!-- Utilisez user.password au lieu de password -->
                      <input
                        type="password"
                        v-model="password"
                        class="form-control form-control-lg"
                        placeholder="Password"
                        aria-label="password"
                        id="exampleInputPassword1"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="recaptcha-container">
                      <VueRecaptcha
                        :sitekey="siteKey"
                        :load-recaptcha-script="true"
                        @verify="handleSuccess"
                        @error="handleError"
                      ></VueRecaptcha>
                    </div>

                    <div class="mt-n2 p-2">
                      <button
                        type="submit"
                        class="connect text-center btn btn-block legend-dots bg-gradient-success"
                      >
                        <i class="mdi"></i>Se connecter
                      </button>
                    </div>
                    <div class="text-right font-weight-light p-4">
                      <router-link
                        to="/auth-pages/forget-password"
                        class="text-info"
                      >
                        Mot de passe oublié ?
                      </router-link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { VueRecaptcha } from "vue-recaptcha";

export default defineComponent({
  name: "ReCaptcha",
  components: {
    VueRecaptcha,
  },
  setup() {
    const siteKey = computed(() => {
      return "6LehRTsmAAAAAHh1FjWgVrKKf9Z_OHjaiUmgeCHb";
    });

    const handleError = () => {
      "Erreur de verification recaptcha ";
    };

    const handleSuccess = () => {
      // Effectuez une validation
      "oui ";
    };

    return {
      handleSuccess,
      handleError,
      siteKey,
    };
  },
});
</script>

<!-- <script>
// import { computed, defineComponent } from "vue";
import { VueRecaptcha } from "vue-recaptcha";

export default defineComponent({
  name: "ReCaptcha",
  components: {
    VueRecaptcha,
  },
  setup() {
    const siteKey = computed(() => {
      return "6LehRTsmAAAAAHh1FjWgVrKKf9Z_OHjaiUmgeCHb";
    });

    const handleError = () => {};

    const handleSuccess = () => {
      // Effectuez une validation
    };

    return {
      handleSuccess,
      handleError,
      siteKey,
    };
   
  },
});
</script> -->
<!-- <script>
import { ref } from "vue";
import { LoginService } from "@/_services";

import { VueRecaptcha } from "vue-recaptcha";

export default {
  name: "login",
  components: {
    VueRecaptcha,
    // VueRecaptcha,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        recaptchaResponse: null,
      },
      recaptchaSiteKey: "6LehRTsmAAAAAHh1FjWgVrKKf9Z_OHjaiUmgeCHb",
    };
  },
  methods: {
    login() {
      LoginService.login(this.user)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response.data);
          this.$router.push("/auth-pages/login");
        });
    },
    onRecaptchaVerified(response) {
      this.user.recaptchaResponse = response;
    },
  },
};
</script> -->

<!-- <script>
import { ref } from "vue";
import { LoginService } from "@/_services";
import ReCaptcha from "@/components/ReCaptcha";

export default {
  name: "login",
  components: {
    ReCaptcha,
  },
  data() {
    user: {
      email: "",
      password: "",
        recaptchaResponse: null,
    },
    const recaptchaSiteKey = "6LehRTsmAAAAAHh1FjWgVrKKf9Z_OHjaiUmgeCHb";

const login = () => {
  LoginService.login(user.value)
    .then((response) => {
      console.log(response.data);
      this.$router.push("/");
    })
    .catch((error) => {
      console.log(error.response.data);
      this.$router.push("/auth-pages/login");
    });
};

const onRecaptchaVerified = (response) => {
  user.value.recaptchaResponse = response;
};

  },
  methods:
     {
      return {
        user,
        recaptchaSiteKey,
        login,
        onRecaptchaVerified,
      };
    },

};
</script> -->
<!-- <script>
import { ref } from "vue";
import { LoginService } from "@/_services";
// import { VueRecaptcha } from "vue-recaptcha";
// import ReCaptcha from "@/components/ReCaptcha";

export default {
  name: "login",

  setup() {
    const user = ref({
      email: "",
      password: "",
      recaptchaResponse: null,
    });

    const recaptchaSiteKey = "6LehRTsmAAAAAHh1FjWgVrKKf9Z_OHjaiUmgeCHb";

    const login = () => {
      LoginService.login(user.value)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response.data);
          this.$router.push("/auth-pages/login");
        });
    };

    const onRecaptchaVerified = (response) => {
      user.value.recaptchaResponse = response;
    };

    return {
      user,
      recaptchaSiteKey,
      login,
      onRecaptchaVerified,
    };
  },
};
</script> -->

<style>
.logo-brand {
  display: flex;
  justify-content: space-between;
}

.logo-brand img {
  margin-left: 0;
  margin-right: 10px;
}

.connect {
  font-size: 1.2rem;
  color: #fff;
}

.underline-none:hover {
  text-decoration: none !important;
}

@media screen and (max-height: 767px) {
  #rc-imageselect,
  /* .g-recaptcha {
    transform: scale(0.6);
    -webkit-transform: scale(0.7);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
  } */
  .recaptcha-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-right: 74px;
  }
}
</style>
