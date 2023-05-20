<template>
  <section class="tables">

    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);" class="text-dark font-weight-bold">Tableau de
              board</a></li>
          <li class="breadcrumb-item active" aria-current="page">Utilisateurs</li>
          <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Liste</li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Liste des Utilisateurs</h4>
            <div class="table-responsive ">
              <table id="order-listing" class="table">
                <thead>
                  <tr style="background-color: rgb(216, 218, 216);">
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prénom(s)</th>
                    <th>Rôle ou poste</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Sexe</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>AKPAGNJUIOSN </td>
                    <td>Fatimatou </td>
                    <td>Caissière</td>
                    <td>xyz@example.com</td>
                    <td>67 89 09 78</td>

                    <td>Féminin</td>
                    <td class="text-center">
                
                        <b-button size="sm" v-b-tooltip.hover title="Détail" variant="success" @click="showDetail">
                          <i class="mdi  mdi-file-document text-white menu-icon"></i>
                        </b-button>
                  
                  
                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Modifier" variant="warning">
                          <i class="mdi mdi mdi-table-edit text-white menu-icon"></i>
                        </b-button>
                      </router-link>
                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Supprimer" variant="danger">
                          <i class="mdi mdi mdi-delete-forever text-white menu-icon"></i>
                        </b-button>
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>ABALLO </td>
                    <td>Fati </td>
                    <td>Admin</td>
                    <td>xyz@example.com</td>
                    <td>67 89 09 78</td>

                    <td>Féminin</td>
                    <td class="text-center">
                      <b-button size="sm" v-b-tooltip.hover title="Détail" variant="success" @click="showDetail">
                        <i class="mdi  mdi-file-document text-white menu-icon"></i>
                      </b-button>
                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Modifier" variant="warning">
                          <i class="mdi mdi mdi-table-edit text-white menu-icon"></i>
                        </b-button>
                      </router-link>
                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Supprimer" variant="danger">
                          <i class="mdi mdi mdi-delete-forever text-white menu-icon"></i>
                        </b-button>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>



  </section>
</template>


<script>


import $ from 'jquery';

import "../../../node_modules/bootstrap/dist/js/bootstrap.js"; // tres important pour le modal
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // tres important pour le modal

export default {
  name: "user-list",

  data() {
    return {
      selected: "",
      options: [
        { item: "F", name: " Feminin" },
        { item: "M", name: " Masculin" },
      ],
    };
  },


  methods: {

    showDetail() {
      $('#showDetail').modal('show');
    },

  }



};
</script>

<style scoped>
@import "../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

table {
  border-collapse: collapse;
  width: 100%;
}

th {
  background-color: #d4d4d4;
  font-weight: bold;
}

th,
td {
  border: 1px solid rgb(139, 139, 139);
  padding: 8px;
  text-align: left;
}


</style>
