<template>
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="javascript:void(0);" class="nav-link">
            <div
              class="navbar-brand brand-logo text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"
            >
              <img
                src="@/assets/images/logo.png"
                alt="profile"
                style="width: 100%; height: 100%"
              />
            </div>
          </a>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/dashboard">
            <span class="menu-title">Tableau de board</span>
            <i class="mdi menu-icon special-style-icon"
              ><img
                src="@/assets/images/dashboard.png"
                alt="patient"
                style="width: 1rem; height: 1rem"
              />
            </i>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'ui-basic'">
            <span class="menu-title">Paramètrage</span>
            <i class="menu-arrow"></i>

            <img
              src="@/assets/images/setting.png"
              alt="patient"
              style="width: 1rem; height: 1rem"
            />
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/user/list"
                  >Utilisateurs</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/user/role/list"
                  >Rôle Utilisateur</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/user/role/permissions"
                  >Droits utilisateurs</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/eph/list"
                  >Carte Sanitaire</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/actes-medicaux/list"
                  >Actes médicaux</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/indigence/list"
                  >Indigences</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/assurance/list"
                  >Assurance</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/compagnie/list"
                  >Compagnie</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>

        <li class="nav-item">
          <router-link to="/patients/list" style="text-decoration: none">
            <span class="nav-link" v-b-toggle="'patients'">
              <span class="menu-title">Gestion des patients</span>
              <i class="menu-arrow"></i>
              <img
                src="@/assets/images/patients.png"
                alt="patient"
                style="width: 1rem; height: 1rem"
              />
            </span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            to="/indigence-patient/list-indigence-patient"
            style="text-decoration: none"
          >
            <span class="nav-link" v-b-toggle="'indigence-patients'">
              <span class="menu-title">Indigences Patient</span>
              <i class="menu-arrow"></i>
              <img
                src="@/assets/images/patient.png"
                alt="patient"
                style="width: 1rem; height: 1rem"
              />
            </span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/priseencharge/list" style="text-decoration: none">
            <span class="nav-link" v-b-toggle="'patients'">
              <span class="menu-title">Prise en charge patient</span>
              <i class="menu-arrow"></i>
              <img
                src="@/assets/images/patient.png"
                alt="patient"
                style="width: 1rem; height: 1rem"
              />
            </span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/payement/list" style="text-decoration: none">
            <span class="nav-link" v-b-toggle="'patients'">
              <span class="menu-title">Paiement et <br />Facturation</span>
              <i class="menu-arrow"></i>
              <img
                src="@/assets/images/pay.png"
                alt="patient"
                style="width: 1rem; height: 1rem"
              />
            </span>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'tresorerie'">
            <span class="menu-title">Trésorerie</span>
            <i class="menu-arrow"></i>

            <img
              src="@/assets/images/coins.png"
              alt="sid"
              style="width: 1rem; height: 1rem"
            />
          </span>
          <b-collapse accordion="sidebar-accordion" id="tresorerie">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/tresorerie/list-encaissement"
                  >Encaissement</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tresorerie/list-decaissement"
                  >Décaissement</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/rapport">
            <span class="menu-title">Rapports</span>
            <i class="mdi menu-icon special-style-icon"
              ><img
                src="@/assets/images/report.png"
                alt="Rapports"
                style="width: 1rem; height: 1rem"
              />
            </i>
          </router-link>
        </li>

        <li class="nav-item sidebar-actions">
          <span class="nav-link">
            <button
              class="btn btn-block btn-gradient-danger pt-3 mx-auto text-center"
            >
              <i class="mdi mdi-power text-white"></i> Déconnexion
            </button>
          </span>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      collapses: [{ show: false }, { show: false }, { show: false }],
    };
  },
  methods: {
    collapseAll() {
      var exp_elm = document.getElementsByClassName("show");
      if (exp_elm.length > 0) {
        var elm_id = exp_elm[0].id;
        this.$root.$emit("bv::toggle::collapse", elm_id);
      }
    },
  },
  mounted() {
    const body = document.querySelector("body");
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll(".sidebar .nav-item").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  },
  watch: {
    $route() {
      document.querySelector("#sidebar").classList.toggle("active");
    },
  },
};
</script>

<style>
.special-style-icon {
  color: black !important;
}
</style>
