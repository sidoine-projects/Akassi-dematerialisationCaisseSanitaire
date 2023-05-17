<template>
  <section class="container-scroller">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
       
          <li class="breadcrumb-item "><a href="javascript:void(0);" class="text-dark font-weight-bold">Trésorerie</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Encaissement
          </li>
          <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Ajouter</li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class=" col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ajouter un encaissement</h4>
            <form class="forms-sample">
              <fieldset class="scheduler-border row col-md-12">
                <legend class="scheduler-border" style="font-size: medium !important;">
                  Informations
                </legend>

                <div class="control-group p-2 col-md-6">

                  <div class="form-group">
                    <label for="exampleInputEmail1">Nom (Personne physique ou morale)</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Akasi Group" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="xyz@example.com" />
                  </div>
                </div>
                <div class="control-group p-2 col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Téléphone</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="90909090" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Adresse</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Adresse" />
                  </div>
                </div>
              </fieldset>

              <fieldset class="scheduler-border container-fluid col-md-12">
                <legend class="scheduler-border" style="font-size: medium !important;">
                  Informations d'Encaissement
                </legend>

                <div class="control-group mt-2 p-2" id="app">
                  <div class="row" v-for="(form, index) in forms" :key="index">

                    <div class="form-group col-md-8">
                      <label for="exampleInputEmail1">Libellé</label>
                      <input type="text" class="form-control" id="exampleInputEmail1"
                        placeholder="Motif de l'encaissement" />
                    </div>

                    <div class="form-group col-md-4">
                      <label for="exampleInputUsername1">Montant</label>
                      <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Montant" />
                    </div>

                    <div class="form-group col-md-12">
                      <label for="exampleTextarea1">Description</label>
                      <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                    </div>
                  </div>

                </div>

                <div class="control-group p-2 col-md-12 ">
                  <div class="form-group mx-auto">
                    <label for="exampleFormControlSelect1">Mode d'Encaissement</label>


                    <select class="form-control  mb-3 " id="exampleFormControlSelect1" v-model="selectedOption">
                      <option v-for="option in optionsMode" :key="option.id" :value="option.value">{{ option.label }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="p-2 container-fluid">


                  <div v-if="selectedOption === 'option1'" class="control-group">

                    <img src="@/assets/images/mode-espece.png" alt="patient" class="row col-md-12 mx-auto h-25"
                      style="width:180px;">

                    <div class="p-1 mt-1 row">
                      <!-- <div class="form-group col-md-12 ">
                        <label for="exampleInputUsername1"> Montant Total</label>
                        <input readonly type="text" class="form-control" id="exampleInputUsername1"
                          placeholder="Montant total">
                      </div> -->

                      <div class="form-group  p-4  mx-auto ">
                        <button @click="showConfirmationModal" type="button"
                          class="btn btn-success d-flex btn btn-block  btn-block  text-center "><i
                            class="mdi mdi-check-circle-outline menu-icon "></i> <span
                            class="text-center ml-1">Valider</span>
                        </button>
                      </div>
                    </div>

                  </div>

                  <div v-if="selectedOption === 'option2'" class="control-group">

                    <img src="@/assets/images/mtn.jpg" alt="patient" class="row col-md-12 mx-auto h-25"
                      style="width:170px;">

                    <div class="p-2 mt-2 row">

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Nom </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nom">
                      </div>
                      <div class="form-group col-md-5">
                        <label for="exampleInputEmail1">Prénom(s) </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Prénom(s)">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="exampleInputEmail1">Téléphone</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Téléphone">
                      </div>

                      <div class="form-group mx-auto p-2 ">
                        <button @click="validateData" type="button"
                          class="btn btn-success d-flex mx-auto btn btn-block btn-block  text-center"><i
                            class="mdi mdi-check-circle-outline menu-icon "></i> <span
                            class="text-center ml-1">Valider</span>
                        </button>
                      </div>

                    </div>


                  </div>

                  <div v-if="selectedOption === 'option3'" class="control-group">

                    <img src="@/assets/images/moov.png" alt="patient" class="row col-md-12 mx-auto h-25"
                      style="width:180px;">

                    <div class="p-2 mt-4 row">

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Nom </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nom">
                      </div>
                      <div class="form-group col-md-5">
                        <label for="exampleInputEmail1">Prénom(s) </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Prénom(s)">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="exampleInputEmail1">Téléphone</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Téléphone">
                      </div>


                      <div class="form-group mx-auto p-2 ">
                        <button @click="validateData" type="button"
                          class="btn btn-success d-flex mx-auto btn btn-block text-center btn-block  text-center"><i
                            class="mdi mdi-check-circle-outline menu-icon "></i>
                          <span class="text-center ml-1">Valider</span>
                        </button>
                      </div>

                    </div>
                  </div>
                  <div v-if="selectedOption === 'option4'" class="control-group">

                    <img src="@/assets/images/mode-carte.png" alt="patient" class="row col-md-12 mx-auto h-25"
                      style="width:180px;">


                    <div class="p-2 mt-4 row">

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Nom et Prénom(s)</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nom et Prénom(s)">
                      </div>
                      <div class="form-group col-md-2">
                        <label for="exampleInputEmail1">Téléphone </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Téléphone">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Email">
                      </div>

                      <div class="form-group col-md-3">
                        <label for="exampleInputEmail1">Type Carte</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="UBA">
                      </div>

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Numéro Carte</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Numéro Carte">
                      </div>

                      <div class="form-group col-md-2">
                        <label for="exampleInputEmail1">Code CVC</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Code CVC">
                      </div>

                      <div class="form-group col-md-3">
                        <label for="exampleInputEmail1">Nom carte </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="VISA">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="exampleInputEmail1">Date Expiration</label>
                        <input type="month" class="form-control" id="exampleInputEmail1" placeholder="MM/AA">
                      </div>

                    </div>

                    <div class="row ">

                      <div class="form-group p-1 text-center mx-auto">
                        <button @click="showConfirmationModal" type="button"
                          class="btn btn-success d-flex  btn btn-block btn-block  text-center"><i
                            class="mdi mdi-check-circle-outline menu-icon "></i> <span class="text-center ">
                            Valider</span>
                        </button>
                      </div>
                    </div>


                  </div>

                  <div v-if="selectedOption === 'option5'" class="control-group">

                    <img src="@/assets/images/mode-cheque.png" alt="patient" class="row col-md-12 mx-auto h-25"
                      style="width:180px;">


                    <div class="p-2 row">

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Numéro Chèque</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Numéro Chèque">
                      </div>
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Numéro Compte </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Numéro Compte ">
                      </div>
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Bénéficiaire </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Bénéficiaire">
                      </div>

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Date Emission</label>
                        <input type="month" class="form-control" id="exampleInputEmail1" pattern="\d{4}-\d{2}"
                          placeholder="MM/AAAA">
                      </div>

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Date Paiement</label>
                        <input type="date" class="form-control" id="exampleInputEmail1">
                      </div>

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Banque Emettrice</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="UBA">
                      </div>



                    </div>

                    <div class="row ">

                      <div class="form-group p-1 text-center mx-auto">
                        <button @click="showConfirmationModal" type="button"
                          class="btn btn-success d-flex  btn btn-block btn-block  text-center"><i
                            class="mdi mdi-check-circle-outline menu-icon "></i> <span class="text-center ">
                            Valider</span>
                        </button>
                      </div>
                    </div>




                  </div>


                </div>

                <!-- <div class="form-group col-md-1 ">
                        <button type="button" class="btn btn-success" data-toggle="modal"
                          data-target="#exampleModal">Valider</button>
                      </div> -->
              </fieldset>
            </form>

            <div>
              <!-- <button class="btn btn-primary" @click="showConfirmationModal">Valider les données</button> -->

              <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog"
                aria-labelledby="confirmationModalLabel1" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="confirmationModalLabel">
                        Confirmation
                      </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Êtes-vous sûr de vouloir valider l'encaissement ?
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-danger text-dark" data-dismiss="modal">
                        Non
                      </button>
                      <button type="button" class="btn btn-outline-success text-dark" @click="validateData">
                        Oui
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <!-- <button class="btn btn-primary" @click="showConfirmationModal">Valider les données</button> -->

              <div class="modal fade" id="confirmationModalpay" tabindex="-1" role="dialog"
                aria-labelledby="confirmationModalPayLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="confirmationModalPayLabel">
                        Encaissement validé avec succès
                      </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body text-center">
                      <img src="@/assets/images/img-valider.png" alt="logo" class="w-50" />
                      <p>Vous avez éffectué avec succés un encaissement !</p>
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-success text-dark mx-auto mt-n2" @click="ShowFacture">
                        <i class="mdi  mdi mdi-cloud-download"></i> Cliquer ici
                        pour imprimer la facture
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog modal-xl " role="document">
                <div class="modal-content bg-white">
                  <div class="modal-header">
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
                              style="margin-left: -70px; width: 65%;" />
                            <img src="@/assets/images/oms.svg" alt="logo" class="w-50" />
                          </div>
                        </div>
                        <div class="col-sm-4 text-center mt-auto mb-auto">
                          <img src="@/assets/images/logo.png" alt="logo" class="w-50" />
                        </div>
                        <div class="col-sm-4 mr-0" style="display: flex;">
                          <div class="col-sm-12" style="display: flex; margin-left: 5rem;">
                            <div>
                              <h3
                                style="margin-top: 5px; text-transform: uppercase; font-size: 0.7rem; font-weight: bold; text-align: right;">
                                Direction gérérale du tresor et de la
                                comptabilité publique
                              </h3>

                              <h4 style="font-size: 0.7em; font-weight: bold; text-align: right;">
                                Tél: 21 30 19 37 - Fax: 21 30 07 58
                              </h4>
                              <h3
                                style="text-transform: uppercase; font-size: 0.6rem; font-weight: bold; text-align: right;">
                                BP : 40 cotonou - route de l'aéroport
                              </h3>
                            </div>
                            <img src="@/assets/images/tresor.png" class="w-25  mt-n1" />
                          </div>
                        </div>
                      </div>

                      <hr style="background-color: rgb(156, 151, 151);" class="mt-n2 " />

                      <div class="row mb-1">
                        <div class="col-sm-6">
                          <h4>Partie versante</h4>
                          <p>
                            <strong>{{ client.name }}</strong>
                          </p>
                          <p>{{ client.address }}</p>
                          <p>Tél. 67 87 87 90</p>
                        </div>
                        <div class="col-sm-6 text-right">
                          <h4>Facture N° {{ invoice.number }}</h4>
                          <p>
                            <strong>Date : {{ invoice.date | formatDate }}
                            </strong>
                          </p>
                          <p>Hôpital de Zone de KETOU</p>
                          <p>Tél. 68 90 65 45</p>
                        </div>
                      </div>

                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>Mode</th>
                              <th>Description</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in invoice.items" :key="item.id">
                              <!-- <td>{{ item.mode }}</td> -->
                              <td>Mode paiement</td>
                              <td>{{ item.code }}</td>
                              <td>{{ item.total }} FCFA</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div class="row mt-1">
                        <div class="col-sm-6">
                          <p>
                            Arrête la présente facture à la somme de :
                            <strong> Cinq mille (5 000) FCFA </strong>
                          </p>
                          <img src="@/assets/images/codeQR.png" alt="logo" class="w-50" />
                        </div>
                        <div class="col-sm-6 text-right">
                          <p><strong> Le Chef Caissier </strong></p>
                          <img src="@/assets/images/signature.png" alt="logo" class="w-25" />
                          <p><strong> Félicien DAGBOGBO </strong></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                      Fermer
                    </button>

                    <button type="button" class="btn btn-info" @click="printModal">
                      Imprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import { format } from "date-fns";

import "../../../../node_modules/bootstrap/dist/js/bootstrap.js"; // tres important pour le modal
import "../../../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // tres important pour le modal

export default {
  name: "create-payement",

  data() {
    return {
      form: {
        acte: "",
      },
      //  readonlyoption: 'autre',
      //  isreadonly: true,

      afficherModal: false,
      //selected: 'A',

      selectedOption: "option1",
      optionsMode: [
        { id: 1, value: "option1", label: "Espèce" },
        { id: 2, value: "option2", label: "MTN Mobile Money" },
        { id: 3, value: "option3", label: "Moov Money" },
        { id: 4, value: "option4", label: "Carte bancaire" },
        { id: 5, value: "option5", label: "Chèque" },
      ],
      selected: "",
      options: [
        { item: "F", name: " Feminin" },
        { item: "M", name: " Masculin" },
        //{ item: 'D', name: 'Option C', notEnabled: true },
        // { item: { d: 1 }, name: 'Option D' }       this.forms.push({ mode: '', code: '', prix: '', quantite: '', montant: '' });
      ],

      forms: [
        {
          acte: "AL",
          quantite: 1,
          code: "FA56718",
          prix: 1000,
          montant: 1000,
          readonly: true,
        },
      ],

      showModal: false,

      client: {
        name: "John Doe",
        address: "123 captown, Stade de l'amitié ",
        city: "Cotonou",
        zipCode: "12345",
      },
      invoice: {
        number: "230510406-CS006",
        date: new Date(),
        items: [
          {
            id: 1,
            mode: "Mobile Money",
            code: "FA45766",
            description: "Item 1",
            quantity: 2,
            price: "2 000",
            total: "2 000",
          },
          {
            id: 2,
            mode: "Mobile Money",
            code: "FA45761",
            description: "Item 2",
            quantity: 1,
            price: " 3 000",
            total: "3 000",
          },
        ],
        total: "5 000",
      },
    };
  },

  methods: {
    checkreadonly(form) {
      // console.log(form.acte);
      if (form.acte === "autre") {
        // if (this.forms.some((form) => form.acte === "autre")) {
        form.readonly = false;
      } else {
        form.readonly = true;
      }
    },

    showConfirmationModal() {
      $("#confirmationModal").modal("show");
    },

    validateData() {
      // Code pour valider les données dans la base de données

      $("#confirmationModal").modal("hide");
      $("#confirmationModalpay").modal("show");
    },

    ShowFacture() {
      // Code pour valider les données dans la base de données

      $("#confirmationModal").modal("hide");
      $("#exampleModal").modal("show");
    },

    // confirmationModalpay() {
    //   $('#confirmationModalpay').modal('show');
    // },

    // validateData() {
    //   // Code pour valider les données dans la base de données

    //   $('#confirmationModal').modal('hide');
    // },

    addForm() {
      this.forms.push({
        acte: "SA",
        code: "",
        prix: "",
        quantite: "",
        montant: "",
      });
    },

    deleteForm(index) {
      this.forms.splice(index, 1);
      //this.forms.splice(this.forms.length - 1, 1);
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

      $("#exampleModal").modal("hide");
    },
  },

  filters: {
    formatDate(value) {
      return format(value, "dd/MM/yyyy");
    },
  },
};
</script>

<style scoped>
@import "../../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";



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
  padding: 0.75rem;
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
}
</style>
