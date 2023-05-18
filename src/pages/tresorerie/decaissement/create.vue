<template>
  <section class="container-scroller">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">

          <li class="breadcrumb-item "><a href="javascript:void(0);" class="text-dark font-weight-bold">Trésorerie</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Décaissement
          </li>
          <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Ajouter</li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class=" col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Enregistrer un décaissement</h4>
            <form class="forms-sample row">

              <fieldset class="scheduler-border container-fluid col-md-12">
                <legend class="scheduler-border mt-5" style="font-size: medium !important;">
                  Informations Décaissement
                </legend>

                <div class="control-group mt-2 p-2" id="app">
                  <div class="row" v-for="(form, index) in forms" :key="index">
                    <div class="form-group col-md-9">
                      <label for="exampleInputEmail1">Motif</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Achat de matériels" />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="exampleInputUsername1">Montant</label>
                      <input type="text" class="form-control" id="exampleInputUsername1" placeholder="100 000" />
                    </div>
              
                  </div>
                </div>

                <div class="form-group">
                  <label>Facture/Référence</label>
                  <input type="file" name="img[]" class="file-upload-default">
                  <div class="input-group col-xs-12">
                    <input type="text" class="form-control file-upload-info" disabled placeholder="Preuve du décaissement">
                    <span class="input-group-append">
                      <button class="file-upload-browse btn btn-gradient-info" type="button">Télécharger</button>
                    </span>
                  </div>
                </div>

                <div class="form-group p-2">
                  <label for="exampleTextarea1">Description</label>
                  <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
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


              </fieldset>
            </form>

            <div>
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
                      Êtes-vous sûr de vouloir valider le décaissement ?
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
                        Décaissement validé avec succès
                      </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body text-center">
                      <img src="@/assets/images/img-valider.png" alt="logo" class="w-50" />
                      <p>Vous venez d'effectuer un décaissement</p>
                    </div>
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
import "../../../assets/js/file-upload.js"; // tres important pour le modal

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
