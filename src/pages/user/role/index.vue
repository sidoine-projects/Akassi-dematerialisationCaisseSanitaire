<template>
  <section class="container-scroller">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);" class="text-dark font-weight-bold">Paramètre</a></li>
          <li class="breadcrumb-item active" aria-current="page">Rôle Utilisateurs</li>
          <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Liste</li>
        </ol>
      </nav>
    </div>


    <div class="row">
      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Liste des Rôles Utilisateurs</h4>
            <div class="table-responsive mt-3">
              <table id="order-listing" class="table">
                <thead>
                  <tr style="background-color: rgb(216, 218, 216);">
                    <th>#</th>
                    <th>Rôle</th>
                    <th>Description</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Admin </td>
                    <td>Admin a accès à toutes les fonctionnalités de la plateforme</td>

                    <td class="text-center">

                      <!-- <b-button size="sm" v-b-tooltip.hover title="Détail" variant="success" @click="showDetail">
                        <i class="mdi  mdi-file-document text-white menu-icon"></i>
                      </b-button> -->


                      <b-button size="sm" v-b-tooltip.hover title="Modifier" variant="warning" @click="showDetail">
                        <i class="mdi mdi mdi-table-edit text-white menu-icon"></i>
                      </b-button>


                      <b-button size="sm" v-b-tooltip.hover title="Supprimer" variant="danger">
                        <i class="mdi mdi mdi-delete-forever text-white menu-icon"></i>
                      </b-button>

                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Caissier </td>
                    <td>Le caissier gère les opérations de caisse </td>

                    <td class="text-center">
                      <!-- <b-button size="sm" v-b-tooltip.hover title="Détail" variant="success" >
                        <i class="mdi  mdi-file-document text-white menu-icon"></i>
                      </b-button> -->

                      <b-button size="sm" v-b-tooltip.hover title="Modifier" variant="warning" @click="showDetail">
                        <i class="mdi mdi mdi-table-edit text-white menu-icon"></i>
                      </b-button>

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


    <!-- modal pour les detailsde chaque ligne -->
    <div class="modal fade " id="showDetail" tabindex="-1" role="dialog" aria-labelledby="showDetailLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="showDetailLabel"> Détail :</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body ">

            <form class="forms-sample row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleInputUsername1">Rôle</label>
                  <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Rôle" />
                </div>
                <div class="form-group">
                  <label for="exampleInputUsername1">Description</label>
                  <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>

                </div>

              </div>

            </form>


          </div>

          <div class="modal-footer">
            <div class="mx-auto">
              <button type="submit" class="btn btn-success mr-2">
                Ajouter
              </button>

              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>


            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal pour les detailsde chaque ligne -->
  </section>
</template>






<script>
import "@/assets/vendors/mdi/css/materialdesignicons.min.css";

import $ from 'jquery';

import "../../../../node_modules/bootstrap/dist/js/bootstrap.js"; // tres important pour le modal
import "../../../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // tres important pour le modal

export default {
  name: "create-actes-medicaux",

  data() {
    return {
      today: new Date().toISOString().split('T')[0],
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

  },





};
</script>

<style scoped>
@import "../../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

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

select {
  cursor: pointer;
  height: 43px !important;
}

input[type="radio"].demo6 {
  display: none;
}

input[type="radio"].demo6+label {
  position: relative;
  padding-left: 1.3rem;
}

input[type="radio"].demo6+label::before,
input[type="radio"].demo6+label::after {
  display: block;
  position: absolute;
  box-sizing: border-box;
  content: "";
  border-radius: 1rem;
}

input[type="radio"].demo6+label::before {
  bottom: 0;
  left: 0;
  border: 1px solid #ccc;
  background-color: #eee;
  width: 1rem;
  height: 1rem;
}

input[type="radio"].demo6+label::after {
  bottom: 3px;
  left: 3px;
  width: calc(1rem - 6px);
  height: calc(1rem - 6px);
}

input[type="radio"].demo6:checked+label::after {
  background-color: #45c28e;
}

input[type="checkbox"].demo2 {
  display: none;
}

input[type="checkbox"].demo2+label::before {
  content: "";
  border: 1px solid #45c28e;
  padding: 0 0.6rem;
  margin-right: 0.3rem;
}

input[type="checkbox"].demo2:checked+label::before {
  background-color: #45c28e;
}
</style>
