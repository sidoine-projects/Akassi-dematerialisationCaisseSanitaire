<template>
  <section class="container-scroller">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item ">
            <a href="javascript:void(0);" class="text-dark font-weight-bold">Tableau de board
            </a>
          </li>
          <li class="breadcrumb-item active text-success" aria-current="page">
            Rapport
          </li>

          <!-- <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Ajouter</li> -->

        </ol>
      </nav>
    </div>

    <div class="row">
      <div class=" col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Rapport</h4>
            <form class="forms-sample mt-3 col-md-12  mt-4">
              <div class="row ">
                <div class="form-group col-md-5">
                  <label for="exampleInputUsername1">Date Début</label>
                  <input type="date" class="form-control" id="dateField1" placeholder="Code" :max="today" />
                </div>
                <div class="form-group col-md-5">
                  <label for="exampleInputUsername1">Date Fin</label>
                  <input type="date" class="form-control" id="dateField2" placeholder="Consulation"
                    :max="today" />
                </div>
                <div class="form-group mx-auto mt-4">
                  <button type="submit" class="btn btn-gradient-success ">Filtrer</button>
                </div>

              </div>
            </form>


            <div class="table-responsive mt-4">
              <table ref="myTable" class="table table-bordered ">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Code</th>
                    <th>Actes Médicaux</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                    <th>Montant</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>18/05/2023</td>
                    <td>FA526Y2</td>
                    <td>Consultation</td>
                    <td>2</td>
                    <td>5 000</td>
                    <td>10 000 </td>
                    <td class="text-center">
                      <b-button size="sm" v-b-tooltip.hover title="Détail" variant="info" @click="showDetail">
                        <i class="mdi  mdi-file-document text-white menu-icon"></i>
                      </b-button>


                    </td>

                  </tr>

                  <tr>
                    <td>2</td>
                    <td>18/05/2023</td>
                    <td>FA526Y2</td>
                    <td>Vaccination</td>
                    <td>2</td>
                    <td>3 000</td>
                    <td>6 000</td>
                    <td class="text-center">

                      <b-button size="sm" v-b-tooltip.hover title="Détail" variant="info" @click="showDetail">
                        <i class="mdi  mdi-file-document text-white menu-icon"></i>
                      </b-button>

                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>18/05/2023</td>
                    <td>FA526Y2</td>
                    <td>Vaccination</td>
                    <td>2</td>
                    <td>3 000</td>
                    <td>6 000</td>
                    <td class="text-center">

                      <b-button size="sm" v-b-tooltip.hover title="Détail" variant="info" @click="showDetail">
                        <i class="mdi  mdi-file-document text-white menu-icon"></i>
                      </b-button>

                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>18/05/2023</td>
                    <td>FA526Y2</td>
                    <td>Vaccination</td>
                    <td>2</td>
                    <td>3 000</td>
                    <td>6 000</td>
                    <td class="text-center">

                      <b-button size="sm" v-b-tooltip.hover title="Détail" variant="info" @click="showDetail">
                        <i class="mdi  mdi-file-document text-white menu-icon"></i>
                      </b-button>

                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>18/05/2023</td>
                    <td>FA526Y2</td>
                    <td>Vaccination</td>
                    <td>2</td>
                    <td>3 000</td>
                    <td>6 000</td>
                    <td class="text-center">

                      <b-button size="sm" v-b-tooltip.hover title="Détail" variant="info" @click="showDetail">
                        <i class="mdi  mdi-file-document text-white menu-icon"></i>
                      </b-button>

                    </td>
                  </tr>

              
           
                </tbody>

                <tfoot>
                  <tr class="font-weight-bold" style="background-color: #d4d4d4 ;  font-weight: bold;">
                    <td colspan="6" class="text-right pr-5">
                      Total
                    </td>
                    <td>6 000</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- <div class="mx-auto">
              <b-button size="sm" v-b-tooltip.hover title="Excel" style="background-color: #15976a">Excel
                <i class="mdi  mdi-file-excel text-white menu-icon" style="font-size :20px"> </i>
              </b-button>

              <b-button size="sm" v-b-tooltip.hover title="PDF" style="background-color: #869791 "> PDF
                <i class="mdi  mdi-file-pdf text-white menu-icon " style="font-size :20px"> </i>
              </b-button>


            </div> -->
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
            <h5 class="modal-title" id="showDetailLabel"> Date : 18/05/2023 </h5>
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


            <div class="table-responsive mt-4">
              <table id="order-listing" class="table">
                <thead>
                  <tr>

                    <th>Mode</th>
                    <th>Code</th>
                    <th>Actes Médicaux</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                    <th>Montant</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Espèce</td>
                    <td>FA526Y2</td>
                    <td>Consultation</td>
                    <td>2</td>
                    <td>5 000</td>
                    <td>10 000 </td>


                  </tr>

                </tbody>
              </table>
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

import * as JSZip from '../../../node_modules/jszip';
window.JSZip = JSZip;
import pdfMake from '../../../node_modules/pdfmake/build/pdfmake';
import vfsFonts from '../../../node_modules/pdfmake/build/vfs_fonts';
pdfMake.vfs = vfsFonts.pdfMake.vfs;
import '../../../node_modules/datatables.net-dt';
import "../../../node_modules/datatables.net-bs4/js/dataTables.bootstrap4";
import "../../../node_modules/datatables.net-buttons/js/dataTables.buttons";
import "../../../node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4";
import FrenchTranslation from '@/assets/datatable/French.json';
import "../../../node_modules/datatables.net-buttons/js/buttons.html5.js";
import "../../../node_modules/datatables.net-buttons/js/buttons.print.js";
import "../../../node_modules/datatables.net-buttons/js/buttons.colVis.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js"; // tres important pour le modal
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // tres important pour le modal


require('datatables.net-dt');

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
    
    var currentDate = new Date().toISOString().split("T")[0];
  $("#dateField1, #dateField2").val(currentDate);

  const table = $(this.$refs.myTable).DataTable({      // dom: '<"html5buttons"B>lTfgtip',
      dom: '<"row mb-3"<"col-md-12"B>>' +
        '<"row mb-0"<"col-md-6"l><"col-md-6"f>>' +
        '<"row"<"col-md-12"tr>>' +
        '<"row"<"col-md-6"i><"col-md-6"p>>',
      //  dom: 'Bfrtip',
      //  dom: 'lBfrtip',

      pageLength: 10, // Définir le nombre de résultats par page
      language: FrenchTranslation,
      buttons: [
        {
          extend: "csvHtml5",                    // Extend the excel button
        },
        {
          extend: "excelHtml5",
        },
        {
          extend: 'pdfHtml5',
          // className: 'btn btn-primary',
        },
        { extend: 'print' },
        { extend: 'copy' },
      ],
    });

    table.buttons().container().prependTo('#myTable_wrapper .col-md-6:eq(0)');
  },



};
</script>

<style scoped>
@import "../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
/* @import '../../../node_modules/datatables.net-dt/css/jquery.dataTables.css'; */

@import "../../../node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css";

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
