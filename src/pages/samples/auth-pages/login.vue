<template>
  <div>
    <section class="login">
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth">
            <div class="row w-100 flex-grow">
              <div class="col-xl-4 col-lg-6 mx-auto">
                <div class="auth-form-light text-left">
                  <!-- auth-form-light -->
                  <div class="brand-logo logo-brand p-2">
                    <img
                      class="w-50 ml-n4"
                      src="../../../assets/images/sante.png"
                      style="height: 60% !important"
                    />
                    <img class="w-30" src="../../../assets/images/oms.svg" />
                  </div>
                  <center>
                    <div class="-logo">
                      <img
                        src="../../../assets/images/logopay.png"
                        style="max-width: 100%; height: 100px"
                      />
                    </div>
                  </center>
                  <br />
                  <marquee behavior="alternate">
                    <h4 class="p-3">
                      <span class="texte-bold">Bienvenue sur</span>
                      <span class="text-success bold">MEDPAY</span>
                    </h4>
                  </marquee>

                  <form class="pt-3" @submit.prevent="login">
                    <div class="input-group mb-1 form-group p-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"
                          ><i
                            class="mdi mdi-email icon-sm text-dark align-middle"
                          ></i
                        ></span>
                      </div>
                      <br />
                      <div
                        id="errror"
                        @click="dis()"
                        hidden="true"
                        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                        role="alert"
                      >
                        <strong class="font-bold">Erreur:</strong><br />
                        <span class="block sm:inline" id="info"></span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                          <svg
                            class="fill-current h-6 w-6 text-red-500"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <title>Close</title>
                            <path
                              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        hidden="true"
                        id="process"
                        style="border-top-color: transparent"
                        class="w-20 h-20 border-lg bg-gradient-to-r from-green-500 via-blue-500 to-red-500 mx-auto border-solid rounded-full animate-spin"
                      ></div>
                      <br />
                      <!-- Utilisez user.email au lieu de email -->
                      <input
                        type="email"
                        v-model="user.email"
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
                        v-model="user.password"
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
import { LoginService } from "@/_services";
import axios from "axios";

export default defineComponent({
  name: "ReCaptcha",
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        recaptcha: null,
      },
    };
  },
  mounted() {
    localStorage.setItem("recaptcha", "");
  },
  setup() {
    const siteKey = computed(() => {
      return "6LehRTsmAAAAAHh1FjWgVrKKf9Z_OHjaiUmgeCHb";
    });

    const handleError = () => {
      localStorage.setItem("recaptcha", "");
      document.getElementById("error").hidden = false;
      document.getElementById("info").innerHTML =
        "Erreur de vérification reCAPTCHA";
    };

    const handleSuccess = (response) => {
      console.log(response);
      localStorage.setItem("recaptcha", response);
    };

    return {
      handleSuccess,
      handleError,
      siteKey,
    };
  },
  // methods: {
  //   login() {
  //     if (this.user.email === "") {
  //       document.getElementById("error").hidden = false;
  //       document.getElementById("info").innerHTML =
  //         "Veuillez entrer votre e-mail";
  //     } else if (this.user.password === "") {
  //       document.getElementById("error").hidden = false;
  //       document.getElementById("info").innerHTML =
  //         "Veuillez entrer un mot de passe";
  //     } else if (this.user.recaptchaResponse === null) {
  //       document.getElementById("error").hidden = false;
  //       document.getElementById("info").innerHTML =
  //         "Veuillez certifier que vous êtes humain";
  //     } else if (this.user.password.length < 6) {
  //       document.getElementById("error").hidden = false;
  //       document.getElementById("info").innerHTML =
  //         "Le mot de passe doit contenir au moins 6 caractères";
  //     } else {
  //       document.getElementById("process").hidden = false;
  //       LoginService.login(this.user)
  //         .then((response) => {
  //           document.getElementById("process").hidden = true;

  //           const user = response.data.data.user;
  //           localStorage.setItem("user.id", user.id);
  //           localStorage.setItem("user.nom_utilisater", user.nom_utilisater);
  //           localStorage.setItem("user.nom", user.nom);
  //           localStorage.setItem("user.prenom", user.prenom);
  //           localStorage.setItem("user.role", user.role);
  //           localStorage.setItem("user.telephone", user.telephone);
  //           localStorage.setItem("user.email", user.email);
  //           localStorage.setItem("token", response.data.data.token);

  //           axios.defaults.headers.common[
  //             "Authorization"
  //           ] = `Bearer ${localStorage.getItem("token")}`;

  //           this.$router.push("/");
  //         })
  //         .catch((err) => {
  //           document.getElementById("error").hidden = false;
  //           document.getElementById("info").innerHTML =
  //             "Identifiant ou mot de passe invalide";

  //           document.getElementById("process").hidden = true;

  //           console.log(err);
  //         });
  //     }
  //   },

  //   dis() {
  //     document.getElementById("error").hidden = true;
  //   },
  //   onEvent() {
  //     this.$refs.VueRecaptcha.execute();
  //   },
  // },
  methods: {
    login() {
      if (this.user.email === "") {
        this.showError("Veuillez entrer votre e-mail");
      } else if (this.user.password === "") {
        this.showError("Veuillez entrer un mot de passe");
      } else if (this.user.recaptchaResponse === null) {
        this.showError("Veuillez certifier que vous êtes humain");
      } else if (this.user.password.length < 6) {
        this.showError("Le mot de passe doit contenir au moins 6 caractères");
      } else {
        this.hideError();
        document.getElementById("process").hidden = false;
        LoginService.login(this.user)
          .then((response) => {
            document.getElementById("process").hidden = true;

            // Le reste du code...
          })
          .catch((err) => {
            this.showError("Identifiant ou mot de passe invalide");
            document.getElementById("process").hidden = true;

            console.log(err);
          });
      }
    },
    showError(message) {
      this.errorVisible = true;
      this.errorInfo = message;
    },
    hideError() {
      this.errorVisible = false;
      this.errorInfo = "";
    },
  },
});
</script>
<!-- <script>
import { computed, defineComponent } from "vue";
import { VueRecaptcha } from "vue-recaptcha";
import { LoginService } from "@/_services";

export default defineComponent({
  name: "ReCaptcha",
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        recaptcha: null,
      },
    };
  },
  mounted() {
    localStorage.setItem("recatcha", "");
  },
  setup() {
    const siteKey = computed(() => {
      return "6LehRTsmAAAAAHh1FjWgVrKKf9Z_OHjaiUmgeCHb";
    });

    const handleError = () => {
      localStorage.setItem("recatcha", "");
      document.getElementById("errror").hidden = false;
      document.getElementById("info").innerHTML =
        "Erreur de verification recaptcha ";
    };

    const handleSuccess = () => {
      // Effectuez une validation
      console.log(response);
      localStorage.setItem("recatcha", response);
      // "oui ";
    };

    return {
      handleSuccess,
      handleError,
      siteKey,
    };
  },
  methods: {
    login() {
      if (this.user.email === "") {
        document.getElementById("errror").hidden = false;
        document.getElementById("info").innerHTML =
          "Veuillez entrer votre e-mail";
      } else if (this.user.password === "") {
        document.getElementById("errror").hidden = false;
        document.getElementById("info").innerHTML =
          "Veuillez entrer un mot de passe";
      } else if (this.user.recaptchaResponse === null) {
        document.getElementById("errror").hidden = false;
        document.getElementById("info").innerHTML =
          "Veuillez certifier que vous êtes humain";
      } else if (this.user.password.length < 6) {
        document.getElementById("errror").hidden = false;
        document.getElementById("info").innerHTML =
          "Le mot de passe doit contenir au moins 6 caractères";
      } else {
        document.getElementById("process").hidden = false;
        LoginService.login(this.user)
          .then((response) => {
            document.getElementById("process").hidden = true;

            const user = response.data.data.user;
            localStorage.setItem("user.id", user.id);
            localStorage.setItem("user.nom_utilisater", user.nom_utilisater);
            localStorage.setItem("user.nom", user.nom);
            localStorage.setItem("user.prenom", user.prenom);
            localStorage.setItem("user.role", user.role);
            localStorage.setItem("user.telephone", user.telephone);
            localStorage.setItem("user.email", user.email);
            localStorage.setItem("token", response.data.data.token);

            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${localStorage.getItem("token")}`;

            this.$router.push("/");
          })
          .catch((err) => {
            document.getElementById("errror").hidden = false;
            document.getElementById("info").innerHTML =
              "login ou  mot de passe invalide";

            document.getElementById("process").hidden = true;

            console.log(err);
          });
      }
    },

    dis() {
      document.getElementById("errror").hidden = true;
    },
    onEvent() {
      // when you need a reCAPTCHA challenge
      this.$refs.recaptcha.execute();
    },
  },
});
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
    margin-right: 78px;
  }
}
</style>
