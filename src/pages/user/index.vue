<template>
  <section class="container-scroller">
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
              <table  id="myTable" class="table table-bordered display">
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

            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Nom : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> ALLADEDO</p>
                </div>
              </div>

            </div>

            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Prénom : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> Fati</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Nom d'utilisateur : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> Fati24</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Rôle : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title badge badge-success "> Caissière</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Email : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> fati@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Téléphone : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> 66 78 98 76</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Age : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> 25</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Adresse : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> Cotonou Rue de la Belle</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Profession : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> Etudiante</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Sexe : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> Féminin</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title ">Prénom : </h5>
                </div>
                <div class="col-sm-6 col-md-6  text-left">
                  <p class="modal-title "> Fati</p>
                </div>
              </div>
            </div>


          </div>

          <div class="modal-footer">
            <div class="mx-auto">
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



import $ from 'jquery';

import 'datatables.net/js/jquery.dataTables';


import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.js'
import 'popper.js/dist/umd/popper.js'

import "../../../node_modules/bootstrap/dist/js/bootstrap.js"; // tres important pour le modal
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // tres important pour le modal

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


  mounted() {

  $(this.$refs.myTable).DataTable();


},

  methods: {

    showDetail() {
      $('#showDetail').modal('show');
    },

  }



};
</script>

<style scoped>

@import '../../../node_modules/datatables.net-dt/css/jquery.dataTables.css';

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
