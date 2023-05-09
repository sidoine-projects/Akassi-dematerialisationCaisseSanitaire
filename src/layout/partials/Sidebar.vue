<template>
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="javascript:void(0);" class="nav-link">
            <!-- <div class="nav-profile-image navbar-brand brand-logo">
              <img src="@/assets/images/logo-ministere.PNG" alt="profile">
              <span class="login-status online"></span>
            </div> -->
            <div
              class=" navbar-brand brand-logo text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
              <img src="@/assets/images/logo.png" alt="profile" style="width: 100%; height:100%;">
            </div>
            <!-- <div class="nav-profile-text d-flex flex-column">
              <span class="font-weight-bold mb-2">David Grey. H</span>
              <span class="text-secondary text-small">Project Manager</span>
            </div>
            <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i> -->
          </a>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/dashboard">
            <span class="menu-title">Tableau de board</span>
            <i class="mdi  menu-icon special-style-icon"><img src="@/assets/images/dashboard.png" alt="patient"
                style="width: 1rem; height: 1rem; ">
            </i>

          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'ui-basic'">
            <span class="menu-title">Paramètrage</span>

            <i class="menu-arrow"></i>
            <!-- <i class="mdi mdi-settings menu-icon" style="width: 1rem; height: 1rem;"></i> -->

            <img src="@/assets/images/setting.png" alt="patient" style="width: 1rem; height: 1rem; ">

          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/buttons/">Gestion des utilisateurs</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/dropdowns/">Droits utilisateurs</router-link>
              </li>

              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/dropdowns/"> Gestion des Actes medicaux</router-link>
              </li> -->
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/typography/">Carte Sanitaire</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'patients'">
            <span class="menu-title">Gestion des patients</span>
            <i class="menu-arrow"></i>
            <!-- <i class="mdi  mdi-account-multiple-plus menu-icon"></i> -->
            <img src="@/assets/images/patient.png" alt="patient" style="width: 1rem; height: 1rem; ">


          </span>
          <b-collapse accordion="sidebar-accordion" id="patients">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/patients/create">Ajouter</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/patients/index">Liste</router-link>
              </li>


            </ul>
          </b-collapse>
        </li>
                
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'actes'">
            <span class="menu-title">Actes medicaux</span>
            <i class="menu-arrow"></i>
            <!-- <i class="mdi mdi-chart-bar menu-icon"></i> -->
            <i class="mdi  menu-icon special-style-icon"><img src="@/assets/images/public-service.png" alt="sid"
                style="width: 1rem; height: 1rem; "></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="actes">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Ajouter</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Liste</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>

        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'paiement'">
            <span class="menu-title">Paiement et Facturation</span>
            <i class="menu-arrow"></i>
            <!-- <i class="mdi mdi-chart-bar menu-icon"></i> -->
            <i class="mdi  menu-icon special-style-icon"><img src="@/assets/images/pay.png" alt="sid"
                style="width: 1rem; height: 1rem; "></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="paiement">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Paiement</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Factures</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        
        
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'charts-dropdown'">
            <span class="menu-title">Trésorerie</span>
            <i class="menu-arrow"></i>
            <!-- <i class="mdi mdi-chart-bar menu-icon"></i> -->
            <img src="@/assets/images/coins.png" alt="sid" style="width: 1rem; height: 1rem;">
          </span>
          <b-collapse accordion="sidebar-accordion" id="charts-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Encaissement</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Décaissement</router-link>
              </li>
       
            </ul>
          </b-collapse>
        </li>
        <!-- <li class="nav-item">
          <span class="nav-link" v-b-toggle="'rapports'">
            <span class="menu-title">Rapports</span>
            <i class="menu-arrow"></i>
            <i class="mdi  mdi-file-document menu-icon"></i>
            <img src="@/assets/images/report.png" alt="patient" style="width: 1rem; height: 1rem; ">

          </span>
          <b-collapse accordion="sidebar-accordion" id="rapports">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Chart js</router-link>
              </li>
            </ul>
          </b-collapse>
        </li> -->
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/charts/chartjs/">
            <span class="menu-title">Rapports</span>
            <i class="mdi  menu-icon special-style-icon"><img src="@/assets/images/report.png" alt="Rapports"
                style="width: 1rem; height: 1rem; ">
            </i>

          </router-link>
        </li>
     
        <!-- <li class="nav-item">
          <span class="nav-link" v-b-toggle="'table-dropdown'">
            <span class="menu-title">Tables</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-table-large menu-icon"></i>
         

          </span>
          <b-collapse accordion="sidebar-accordion" id="table-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/tables/basic-tables/">Basic Table</router-link>
              </li>
            </ul>
          </b-collapse>
        </li> -->
        <!-- <li class="nav-item">
          <span class="nav-link" v-b-toggle="'user-page-dropdown'">
            <span class="menu-title">User Pages</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-lock menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="user-page-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="/auth-pages/login/">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="/auth-pages/register/">Register</router-link>
              </li>
            </ul>
          </b-collapse>
        </li> -->
        <!-- <li class="nav-item">
          <span class="nav-link" v-b-toggle="'error-page-dropdown'">
            <span class="menu-title">Error pages</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-security menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="error-page-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="/error-pages/error-404/">404</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="/error-pages/error-500/">500</router-link>
              </li>
            </ul>
          </b-collapse>
        </li> -->
        <!-- <li class="nav-item">
          <span class="nav-link" v-b-toggle="'icons-dropdown'">
            <span class="menu-title">Icons</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-contacts menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="icons-dropdown">
            <ul class="nav flex-column sub-menu">
               <li class="nav-item">
                <router-link class="nav-link" to="/icons/mdi-icons/">MDI</router-link>
              </li>
            </ul>
          </b-collapse>
        </li> -->
        <!-- <li class="nav-item">
          <a class="nav-link" target="_blank" href="http://www.bootstrapdash.com/demo/purple-free-vue/documentation/documentation.html">
            <span class="menu-title">Documentation</span>
            <i class="menu-icon mdi mdi-file-document-outline"></i>
          </a>
        </li> -->
        <li class="nav-item sidebar-actions">
          <span class="nav-link">
            <!-- <div class="border-bottom">
              <h6 class="font-weight-normal mb-3">Déconnexion</h6>
            </div> -->
            <button class="btn btn-block btn-gradient-danger mt-4  text-center"><i class="mdi mdi-power text-white "></i> Déconnexion</button>

            <!-- <div class="mt-4">
              <div class="border-bottom">
                <p class="text-secondary">Categories</p>
              </div>
              <ul class="gradient-bullet-list mt-4">
                <li>Free</li>
                <li>Pro</li>
              </ul>
            </div> -->
          </span>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      collapses: [
        { show: false },
        { show: false },
        { show: false }
      ]
    }
  },
  methods: {
    collapseAll() {
      var exp_elm = document.getElementsByClassName("show");
      if (exp_elm.length > 0) {
        var elm_id = exp_elm[0].id;
        this.$root.$emit("bv::toggle::collapse", elm_id);
      }
    }
  },
  mounted() {
    const body = document.querySelector('body')
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open')
        }
      })
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open')
        }
      })
    })
  },
  watch: {
    $route() {
      document.querySelector('#sidebar').classList.toggle('active');
    }
  }
}
</script>

<style>
.special-style-icon {
  color: black !important;
}
</style>