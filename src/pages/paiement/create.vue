<template>
  <section class="container-scroller">
    <div class="page-header">
      <!-- <h3 class="page-title">
        Bootstrap Table
      </h3> -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item "><a href="javascript:void(0);" class="text-success font-weight-bold">Tableau de
              board</a></li>
          <li class="breadcrumb-item active" aria-current="page">Paiement et Facturation</li>
          <li class="breadcrumb-item active" aria-current="page">Ajouter</li>
        </ol>
      </nav>
    </div>



    <div class="row">
      <!-- <p class="card-description">
              For displaying tabular data. <code>&lt;b-table&gt;</code> supports pagination, filtering, sorting, custom rendering, events, and asynchronous data.
            </p> -->


      <div class=" col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ajouter un paiement</h4>
            <p class="card-description"> Ajouter </p>
            <form class="forms-sample ">

              <fieldset class="scheduler-border row col-md-12">
                <legend class="scheduler-border" style="font-size: medium !important;">Infos Patient</legend>

                <div class="control-group p-2 col-md-6">

                  <div class="form-group controls">
                    <label for="exampleFormControlSelect1">Sélectionner un patient</label>
                    <select class="form-control   mb-3 " id="exampleFormControlSelect1">
                      <option value="AL">Adam Akouvi</option>
                      <option value="WY">Sido vinou</option>
                      <option value="WY">Sido Akpa</option>
                      <option value="AM">Paul Sage</option>
                      <option value="CA">Yves wodu</option>
                      <option value="RU">Russia valentine</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Téléphone</label>
                    <input readonly type="email" class="form-control" id="exampleInputEmail1"
                      placeholder="Numéro de téléphone">
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Sexe</label>
                    <input readonly type="password" class="form-control" id="exampleInputPassword1" placeholder="Sexe">
                  </div>




                </div>
                <div class="control-group p-2 col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Age</label>
                    <input readonly type="email" class="form-control" id="exampleInputEmail1" placeholder="Age">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Adresse</label>
                    <input readonly type="email" class="form-control" id="exampleInputEmail1" placeholder="Adresse">
                  </div>

                  <div class="form-group">
                    <label for="exampleInputUsername1">Profession</label>
                    <input readonly type="text" class="form-control" id="exampleInputUsername1" placeholder="Profession">
                  </div>


                </div>
              </fieldset>

              <fieldset class="scheduler-border  row col-md-12">
                <legend class="scheduler-border" style="font-size: medium !important;">Informations Paiement</legend>

                <div class="control-group p-2 col-md-12 ">

                  <div class="form-group mx-auto">
                    <label for="exampleFormControlSelect1">Mode de Paiement</label>
                    <select class="form-control  mb-3 " id="exampleFormControlSelect1">
                      <option value="AL">Espèce</option>
                      <option value="WY">Mobile Money</option>
                      <option value="AM">Moov Money</option>
                      <option value="CA">Carte bancaire</option>
                      <option value="AM">Chèque</option>


                    </select>
                  </div>

                </div>

                <!-- <div class="control-group col-md-12">
                  <div class="row ">

                    <div class="form-group col-md-4">
                      <label for="exampleFormControlSelect1">Actes médicaux</label>
                      <select class="form-control   mb-3 " id="exampleFormControlSelect1">
                        <option value="AL">Consultation</option>
                        <option value="WY">Hospitalisations</option>
                        <option value="AM">Examens médicaux</option>
                        <option value="CA">Transport en ambulance</option>
                        <option value="AM">ventes de produits pharmaceutiques</option>
                      </select>
                    </div>

                    <div class="form-group col-md-2">
                      <label for="exampleInputEmail1">Code</label>
                      <input readonly type="email" value="FD01003" class="form-control" id="exampleInputEmail1"
                        placeholder="Code">
                    </div>
                    <div class="form-group col-md-2">
                      <label for="exampleInputUsername1">prix</label>
                      <input readonly type="text" value="2000" class="form-control" id="exampleInputUsername1"
                        placeholder="prix">
                    </div>
                    <div class="form-group col-md-2">
                      <label for="exampleInputUsername1">Quantité</label>
                      <input type="number" value="1" class="form-control" id="exampleInputUsername1"
                        placeholder="Quantité">
                    </div>
                    <div class="form-group col-md-2">
                      <label for="exampleInputUsername1">Montant</label>
                      <input readonly type="text" value="2000" class="form-control" id="exampleInputUsername1"
                        placeholder="Montant">
                    </div>
                  </div>

                </div> -->

                <div class="control-group col-md-12" id="app">
                  <div class="row " v-for="(form, index) in forms" :key="index">

                    <div class="form-group col-md-4">
                      <label for="exampleFormControlSelect1">Actes médicaux</label>
                      <select class="form-control   mb-3 " id="exampleFormControlSelect1" v-model="form.mode">
                        <option value="AL">Consultation</option>
                        <option value="WY">Hospitalisations</option>
                        <option value="AM">Examens médicaux</option>
                        <option value="CA">Transport en ambulance</option>
                        <option value="AM">ventes de produits pharmaceutiques</option>
                      </select>
                    </div>

                    <div class="form-group col-md-2">
                      <label for="exampleInputEmail1">Code</label>
                      <input readonly type="email" value="FD01003" class="form-control" id="exampleInputEmail1"
                        placeholder="Code" v-model="form.code">
                    </div>
                    <div class="form-group col-md-2">
                      <label for="exampleInputUsername1">prix</label>
                      <input readonly type="text" value="2000" class="form-control" id="exampleInputUsername1"
                        placeholder="prix" v-model="form.prix">
                    </div>
                    <div class="form-group col-md-2">
                      <label for="exampleInputUsername1">Quantité</label>
                      <input type="number" value="1" class="form-control" id="exampleInputUsername1"
                        placeholder="Quantité" v-model="form.quantite">
                    </div>
                    <div class="form-group col-md-2">
                      <label for="exampleInputUsername1">Montant</label>
                      <input readonly type="text" value="2000" class="form-control" id="exampleInputUsername1"
                        placeholder="Montant" v-model="form.montant">
                    </div>
                  </div>

                </div>

                <div class="control-group col-md-12 row">
                  <div class="form-group col-md-4">
                    <b-button size="sm" v-b-tooltip.hover title="Ajouter un acte" variant="success" @click="addForm">
                      <i class="mdi  mdi mdi-plus-box text-white menu-icon"></i>
                    </b-button>
                    <b-button size="sm" v-b-tooltip.hover title="Supprimer" variant="danger"
                      @click.prevent="deleteForm()">
                      <i class="mdi  mdi mdi-close-box text-white menu-icon"></i>
                    </b-button>
                  </div>
                </div>
              </fieldset>

              <!-- 
              <fieldset class="scheduler-border col-md-6">
                <legend class="scheduler-border" style="font-size: medium !important;">Infos Paiement</legend>
                <div class="control-group p-2">


                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Mode de payement</label>
                    <select class="form-control   mb-3 " id="exampleFormControlSelect1">
                      <option value="AL">Espèce</option>
                      <option value="WY">Mobile Money</option>
                      <option value="AM">Moov Money</option>
                      <option value="CA">Carte bancaire</option>
                      <option value="AM">Chèque</option>


                    </select>
                  </div>

                  <div>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                  </div>


                  <div class="form-group form-check">
                    <label for="radio" class="">Choisir un élément </label>

                    <div class="p-3">
                      <input type="checkbox" class="demo2" id="demo2">
                      <label for="demo2" class="mx-3" style="font-size: 1rem;">element 1</label>


                      <input type="checkbox" class="demo2 mx-5" id="demo3">
                      <label for="demo3" style="font-size: 1rem;">element 2</label>

                    </div>

                  </div>


                  <div class="form-group form-check">
                    <label for="radio" class="">Sexe </label>

                    <div class="p-2">
                      <input type="radio" name="demo6" class="demo6 mx-auto form-check-input " id="demo6-a" checked>
                      <label for="demo6-a" class="mx-auto" style="font-size: 1rem;"> Féminin </label>

                      <input type="radio" name="demo6" class="demo6 mx-auto form-check-input " id="demo6-b">
                      <label for="demo6-b" class="mx-3" style="font-size: 1rem;"> Masculin </label>

                    </div>
                  </div>


                </div>
              </fieldset> -->
              <div class="mx-auto text-center ">
                <button type="button" class="btn btn-success mr-2" data-toggle="modal"
                  data-target="#exampleModal">Valider</button>
                <!-- <button class="btn btn-info ">Imprimer</button> -->

              </div>
            </form>
            <!-- <button type="button" class="btn btn-success " data-toggle="modal" data-target="#exampleModal">Enregistrer</button> -->



            <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Afficher le modal
            </button> -->

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">

              <!-- <div class="modal-dialog modal-dialog-centered modal-dialog modal-xl" role="document"> -->
              <div class="modal-dialog modal-dialog-centered modal-dialog modal-xl " role="document">
                <div class="modal-content bg-white">
                  <div class="modal-header">
                    <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body" id="print-section" ref="modalContent">

                    <div class="container-fluid">
                      <div class="row mb-2 mr-0 ml-0 col-sm-12">
                        <div class="col-sm-4">
                          <div class="mx-auto text-center">
                            <img src="@/assets/images/logo-ministere.png" alt="logo"
                              style="margin-left: -70px; width: 65%;">
                            <img src="@/assets/images/oms.svg" alt="logo" class="w-50">

                          </div>
                        </div>
                        <div class="col-sm-4 text-center mt-auto mb-auto">
                          <img src="@/assets/images/logo.png" alt="logo" class="w-50">
                        </div>
                        <div class="col-sm-4 mr-0" style="display: flex;">
                          <div class="col-sm-12" style="display: flex; margin-left: 5rem;">
                            <div>
                              <h3
                                style="margin-top: 5px; text-transform: uppercase; font-size: 0.7rem; font-weight: bold; text-align: right;">
                                Direction gérérale du tresor et de la comptabilité publique</h3>

                              <h4 style="font-size: 0.7em; font-weight: bold; text-align: right;">
                                Tél: 21 30 19 37 - Fax: 21 30 07 58</h4>
                              <h3
                                style="text-transform: uppercase; font-size: 0.6rem; font-weight: bold; text-align: right;">
                                BP : 40 cotonou - route de l'aéroport</h3>
                            </div>
                            <img src="@/assets/images/tresor.png" class="w-25  mt-n1"
                            >
                          </div>

                        </div>
                      </div>

                      <hr style="background-color: rgb(156, 151, 151);" class="mt-n2 ">


                      <div class="row mb-1">
                        <div class="col-sm-6">
                          <h4>Partie versante</h4>
                          <p><strong>{{ client.name }}</strong></p>
                          <p>{{ client.address }}</p>
                          <p>Tél. 67 87 87 90 </p>

                        </div>
                        <div class="col-sm-6 text-right">
                          <h4>Facture N° {{ invoice.number }}</h4>
                          <p> <strong>Date : {{ invoice.date | formatDate }} </strong></p>
                          <p>Hôpital de Zone de KETOU</p>
                          <p>Tél. 68 90 65 45</p>
                        </div>
                      </div>

                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>Mode</th>
                              <th>code</th>
                              <th>Description</th>
                              <th>Quantité</th>
                              <th>Prix unitaire</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in invoice.items" :key="item.id">
                              <td>{{ item.mode }}</td>
                              <td>{{ item.code }}</td>
                              <td>{{ item.description }}</td>
                              <td>{{ item.quantity }}</td>
                              <td>{{ item.price }} FCFA</td>
                              <td>{{ item.total }} FCFA</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colspan="5" class="text-right"><strong>Montant Versé</strong></td>
                              <td><strong>{{ invoice.total }} FCFA</strong></td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>

                      <div class="row mt-1">
                        <div class="col-sm-6">
                          <p>Arrête la présente facture à la somme de : <strong> Cinq mille (5 000) FCFA </strong></p>
                          <img src="@/assets/images/codeQR.png" alt="logo" class="w-50">

                        </div>
                        <div class="col-sm-6 text-right">
                          <p><strong> Le Chef Caissier </strong></p>
                          <img src="@/assets/images/signature.png" alt="logo" class="w-25">
                          <p><strong> Félicien DAGBOGBO </strong></p>


                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>


                    <button type="button" class="btn btn-info" @click="printModal">Imprimer</button>
                  </div>
                </div>
              </div>
            </div>














          </div>

        </div>
      </div>
      <!-- <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Horizontal Form</h4>
            <p class="card-description"> Horizontal form layout </p>
            <form class="forms-sample">
              <div class="form-group row">
                <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Username">
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                  <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email">
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputMobile" class="col-sm-3 col-form-label">Mobile</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="exampleInputMobile" placeholder="Mobile number">
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Password</label>
                <div class="col-sm-9">
                  <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">Re Password</label>
                <div class="col-sm-9">
                  <input type="password" class="form-control" id="exampleInputConfirmPassword2" placeholder="Password">
                </div>
              </div>
              <div class="form-check form-check-flat form-check-primary">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"> Remember me </label>
              </div>
              <button type="submit" class="btn btn-gradient-primary mr-2">Ajouter</button>
              <button class="btn btn-gradient-danger ">Cancel</button>
            </form>
          </div>
        </div>
      </div> -->

    </div>
  </section>
</template>






<script>

import { format } from 'date-fns';

import "../../../node_modules/bootstrap/dist/js/bootstrap.js"; // tres important pour le modal
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // tres important pour le modal


//import '../../assets/vendors/js/vendor.bundle.base.js'
//import '../../assets/vendors/select2/select2.min.js';
//import '../../assets/js/file-upload.js'
//import '../../assets/js/settings.js'
//import '../../assets/js/select2.js'



export default {


  name: 'create-payement',

  data() {
    return {
      //selected: 'A',
      selected: '',
      options: [
        { item: 'F', name: ' Feminin' },
        { item: 'M', name: ' Masculin' },
        //{ item: 'D', name: 'Option C', notEnabled: true },
        // { item: { d: 1 }, name: 'Option D' }       this.forms.push({ mode: '', code: '', prix: '', quantite: '', montant: '' });

      ],

      forms: [
        {
          mode: 'AL',
          quantite: 1,
          code: 'FA56718',
          prix: 1000,
          montant: 1000,

        }
      ],

      showModal: false,

      client: {
        name: 'John Doe',
        address: '123 captown, Stade de l\'amitié ',
        city: 'Cotonou',
        zipCode: '12345',
      },
      invoice: {
        number: '230510406-CS006',
        date: new Date(),
        items: [
          {
            id: 1,
            mode: 'Mobile Money',
            code: 'FA45766',
            description: 'Item 1',
            quantity: 2,
            price: '2 000',
            total: '2 000',
          },
          {
            id: 2,
            mode: 'Mobile Money',
            code: 'FA45761',
            description: 'Item 2',
            quantity: 1,
            price: ' 3 000',
            total: '3 000',
          },
        ],
        total: '5 000',
      },




    }
  },

  methods: {
    addForm() {
      this.forms.push({ mode: '', code: '', prix: '', quantite: '', montant: '' });
    },
    deleteForm() {
      // this.forms.splice(index, 1);
      this.forms.splice(this.forms.length - 1, 1);
    },


    printModal() {
      const modalContent = this.$refs.modalContent;
      const originalContents = document.body.innerHTML;

      // Temporairement remplacer le contenu de la page par le contenu du modal
      document.body.innerHTML = modalContent.innerHTML;

      // Imprimer le contenu
      window.print();

      // Restaurer le contenu original de la page
      document.body.innerHTML = originalContents;
    }

  },

  filters: {
    formatDate(value) {
      return format(value, 'dd/MM/yyyy')
    },
  },


}


</script>

<style scoped>
/* @import "../../assets/vendors/select2/select2.min.css";
@import "../../assets/select2-bootstrap.min.css"; 
/* @import "../../../node_modules/bootstrap/dist/css/bootstrap.css"; */
@import "../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

.modal--fullscreen {
  max-width: 90vw;
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
  content: '';
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
  content: '';
  border: 1px solid #45c28e;
  padding: 0 0.6rem;
  margin-right: 0.3rem;

}

input[type="checkbox"].demo2:checked+label::before {
  background-color: #45c28e;
}

fieldset.scheduler-border {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
}

legend.scheduler-border {
  font-size: 1.2em !important;
  font-weight: bold !important;
  text-align: left !important;
  width: auto;
  padding: 0 10px;
  border-bottom: none;
}


th,
td {
  text-align: center;
}

th {
  background-color: #d6dbd6;
  border: 1px solid #dee2e6;
}

.container-fluid {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
}

h2,
h4 {
  font-weight: bold;
  margin: 0;
}

.mb-4 {
  margin-bottom: 2rem;
}

img {
  max-width: 100%;
}

table {
  margin-bottom: 1rem;
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
}

table td,
table th {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

table th {
  font-weight: bold;
}

table tbody+tbody {
  border-top: 2px solid #ffffff;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.text-right {
  text-align: right;
}

.mt-5 {
  margin-top: 3rem;
}

.text-danger {
  color: #dc3545;
}</style>