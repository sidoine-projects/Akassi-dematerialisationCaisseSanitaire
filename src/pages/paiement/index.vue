<template>
  <section class="tables">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);">Tableau de board</a></li>
          <li class="breadcrumb-item active" aria-current="page">Paiement et facturation</li>
          <li class="breadcrumb-item active" aria-current="page">Ajouter</li>
        </ol>
      </nav>
    </div>



    <div class="row">

      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Liste des 10 dernieres ventes</h4>
            <div class="table-responsive">
              <table id="order-listing" class="table">
                <thead>
                  <tr>
                    <th> #</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Actes médicaux</th>
                    <th>Qte</th>
                    <th>Prix (FCFA)</th>
                    <th>Montant</th>
                    <th>Mode de paiement</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Asam</td>
                    <td>Fati</td>
                    <td>Consultation</td>
                    <td>1</td>
                    <td>1.500</td>
                    <td>1.500 FCFA</td>
                    <td>Espèce</td>
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
                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Supprimer" variant="danger">
                          <i class="mdi mdi mdi-delete-forever text-white menu-icon"></i>
                        </b-button>
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Asam</td>
                    <td>Fati</td>
                    <td>Consultation</td>
                    <td>1</td>
                    <td>1.500</td>
                    <td>1.500 FCFA</td>
                    <td>Espèce</td>
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
                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Supprimer" variant="danger">
                          <i class="mdi mdi mdi-delete-forever text-white menu-icon"></i>
                        </b-button>
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Asam</td>
                    <td>Fati</td>
                    <td>Consultation</td>
                    <td>1</td>
                    <td>1.500</td>
                    <td>1.500 FCFA</td>
                    <td>Espèce</td>
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
                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Supprimer" variant="danger">
                          <i class="mdi mdi mdi-delete-forever text-white menu-icon"></i>
                        </b-button>
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Asam</td>
                    <td>Fati</td>
                    <td>Consultation</td>
                    <td>1</td>
                    <td>1.500</td>
                    <td>1.500 FCFA</td>
                    <td>Espèce</td>
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
                      <router-link class="" to="/">
                        <b-button size="sm" v-b-tooltip.hover title="Supprimer" variant="danger">
                          <i class="mdi mdi mdi-delete-forever text-white menu-icon"></i>
                        </b-button>
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Asam</td>
                    <td>Fati</td>
                    <td>Consultation</td>
                    <td>1</td>
                    <td>1.500</td>
                    <td>1.500 FCFA</td>
                    <td>Espèce</td>
                    <!-- <td>
                <label class="badge badge-info">Espèce</label>
              </td> -->
                    <td class="text-center" style="text-align: center !important;">
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
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';

// import "datatables.net-dt/js/dataTables.dataTables"
// import "datatables.net-dt/css/jquery.dataTables.min.css"
//import $ from 'jquery'; 
//import axios from 'axios';
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
  }
}
</script>