<template>
  <section class="tables">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);" class="text-dark font-weight-bold">Trésorerie</a></li>
          <li class="breadcrumb-item active" aria-current="page">Encaissement</li>
          <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Liste</li>
        </ol>
      </nav>
    </div>



    <div class="row">

      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Liste des Encaissements</h4>
            <div class="mx-auto mt-5 mb-5">
              <router-link to="/tresorerie/encaissement">
                <button type="submit" class="btn btn-success mr-2">Ajouter</button>
              </router-link>  
            </div>

            <div class="table-responsive">
              <table id="order-listing" ref="myTable" class="table table-bordered">
                <thead>
                  <tr style="background-color: rgb(216, 218, 216);">
                    <th> #</th>
                    <th> Mode</th>
                    <th>Nom</th>
                    <th>Téléphone</th>
                    <th>Email</th>
                    <th>Motif</th>
                    <th>Montant</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Chèque</td>
                    <td>Fadec Affecté</td>
                    <td>21345678</td>
                    <td>xyz@gmail.com</td>
                    <td>Dons public</td>
                    <td>1 000 000</td>
                    <!-- <td>
                <label class="badge badge-info">Espèce</label>
              </td> -->
                    <td class="text-center">
                      <!-- <button class="btn btn-outline-primary">+</button> -->
                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Détail" variant="success">
                          <i class="mdi  mdi-file-document text-white menu-icon"></i>
                        </b-button>
                      </router-link>

                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Modifier" variant="warning">
                          <i class="mdi mdi mdi-table-edit text-white menu-icon"></i>
                        </b-button>
                      </router-link>
                      <!-- <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Supprimer" variant="danger">
                          <i class="mdi mdi mdi-delete-forever text-white menu-icon"></i>
                        </b-button>
                      </router-link> -->
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
import * as JSZip from '../../../../node_modules/jszip';
window.JSZip = JSZip;
import pdfMake from '../../../../node_modules/pdfmake/build/pdfmake';
import vfsFonts from '../../../../node_modules/pdfmake/build/vfs_fonts';
pdfMake.vfs = vfsFonts.pdfMake.vfs;
import '../../../../node_modules/datatables.net-dt';
import "../../../../node_modules/datatables.net-bs4/js/dataTables.bootstrap4";
import "../../../../node_modules/datatables.net-buttons/js/dataTables.buttons";
import "../../../../node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4";
import FrenchTranslation from '@/assets/datatable/French.json';
import "../../../../node_modules/datatables.net-buttons/js/buttons.html5.js";
import "../../../../node_modules/datatables.net-buttons/js/buttons.print.js";
import "../../../../node_modules/datatables.net-buttons/js/buttons.colVis.js";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.js"; // tres important pour le modal
import "../../../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // tres important pour le modal

require('datatables.net-dt');


const itemsTwo = [
  { Status: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { Status: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  {
    Status: false,
    age: 89,
    first_name: 'Geneva',
    last_name: 'Wilson',
    _rowVariant: 'danger'
  },
  {
    Status: true,
    age: 40,
    first_name: 'Thor',
    last_name: 'Macdonald',
    _cellVariants: { Status: 'success', age: 'info', first_name: 'warning' }
  },
  { Status: false, age: 29, first_name: 'Dick', last_name: 'Dunlap' }
]
export default {
  name: 'patient-create',
  data() {
    return {
      itemsTwo: itemsTwo,
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
      fields: [
        {
          key: 'first_name',
          label: 'Person first name',
          sortable: true
        },
        {
          key: 'last_name',
          label: 'Person last name',
          sortable: true
        },
        {
          key: 'age',
          label: 'Person age',
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          variant: 'success'
        }
      ],
    }
  }, 

  mounted () {
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

  }
}
</script>


<style scoped>
@import "../../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
/* @import '../../../node_modules/datatables.net-dt/css/jquery.dataTables.css'; */

@import "../../../../node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css";

</style>