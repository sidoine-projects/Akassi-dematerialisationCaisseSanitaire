<template>
  <section class="container-scroller">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);" class="text-dark font-weight-bold">Paramètre</a></li>
          <li class="breadcrumb-item active" aria-current="page">Droits Utilisateurs</li>
          <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Liste</li>
        </ol>
      </nav>
    </div>


    <div class="row">
      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Droits des Utilisateurs</h4>

            <form class="forms-sample ">
              <div class="col-md-10 mx-auto row mt-4">



                <div class="form-group  col-md-10  ">
                  <label for="exampleFormControlSelect1">Sélectionner un Rôle</label>
                  <select class="form-control   mb-3 " id="exampleFormControlSelect1">
                    <option value="AL">Admin</option>
                    <option value="WY">Caisser</option>
                    <option value="WY">Directeur Général</option>
                    <option value="AM">Trésorier</option>
                  </select>
                </div>


                <div class="form-group  mx-auto p-1 mt-3">
                  <b-button class="" v-b-tooltip.hover title="Ajouter un acte" variant="success"> Valider

                  </b-button>

                </div>


              </div>

            </form>



            <div class="table-responsive col-md-10 mx-auto mt-1">
              <table id="order-listing" class="table">
                <thead>
                  <tr style="background-color: rgb(216, 218, 216);">
                    <th>~#</th>
                    <th>Permissions</th>
                    <th class="text-center mx-auto pb-4 pl-4 pr-0">
                      <input type="checkbox" class="form-check-input" id="checkAll">

                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Créer utilisateur </td>

                    <td class="text-center mx-auto pb-4 pl-4 pr-0">
                      <input type="checkbox" class="form-check-input item">
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Modifier utilisateur </td>

                    <td class="text-center mx-auto pb-4 pl-4 pr-0">
                      <input type="checkbox" class="form-check-input item">
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Créer un Acte medical </td>

                    <td class="text-center mx-auto pb-4 pl-4 pr-0">
                      <input type="checkbox" class="form-check-input item">
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Modifier un acte médical </td>

                    <td class="text-center mx-auto pb-4 pl-4 pr-0">
                      <input type="checkbox" class="form-check-input item">
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
  </section>
</template>






<script>

import $ from 'jquery';

import "@/assets/vendors/js/vendor.bundle.base.js";
import "@/assets/js/off-canvas.js";
import "@/assets/js/hoverable-collapse.js";
import "@/assets/js/misc.js";
import "@/assets/js/settings.js";
import "@/assets/js/todolist.js";
import "@/assets/js/jquery.cookie.js";


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
  
  mounted() {

    $(document).ready(function () {
      // Écouteur d'événement pour la case à cocher "Tout cocher"
      $('#checkAll').change(function () {
        $('.item').prop('checked', this.checked);
      });

      // Écouteur d'événement pour les cases à cocher des éléments de la liste
      $('.item').change(function () {
        // Vérifier si tous les éléments sont cochés ou non
        var allChecked = $('.item:checked').length === $('.item').length;
        $('#checkAll').prop('checked', allChecked);
      });
    });

  },


};

</script>

<style scoped>
/* @import "@/assets/css/demo_1/style.css";
@import "@/assets/vendors/css/vendor.bundle.base.css"; */

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
