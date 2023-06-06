<template>
  <section class="tables">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0);" class="text-dark font-weight-bold"
              >Tableau de board</a
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Gestion des Patients
          </li>
          <li
            class="breadcrumb-item active text-success font-weight-bold"
            aria-current="page"
          >
            Liste
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Liste des Patients</h4>
            <div class="mx-auto mt-5 mb-5">
              <router-link to="/patients/create">
                <button type="submit" class="btn btn-success mr-2">
                  Ajouter
                </button>
              </router-link>
            </div>
            <div class="table-responsive">
              <table
                id="order-listing"
                ref="myTable"
                class="table table-bordered"
              >
                <thead>
                  <tr style="background-color: rgb(216, 218, 216)">
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prénom(s)</th>
                    <th>Age</th>
                    <th>Téléphone</th>
                    <th>Adresse</th>
                    <th>Sexe</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(patient, index) in patients" :key="patient.id">
                    <td>{{ patient.id }}</td>
                    <td>{{ patient.nom }}</td>
                    <td>{{ patient.prenom }}</td>
                    <td>{{ patient.age }}</td>
                    <td>{{ patient.telephone }}</td>
                    <td>{{ patient.adresse }}</td>
                    <td>{{ patient.sexe }}</td>
                    <td class="text-center">
                      <b-button
                        @click="detail(patient)"
                        size="sm"
                        v-b-tooltip.hover
                        title="Détail"
                        variant="info"
                      >
                        <i
                          class="mdi mdi-file-document text-white menu-icon"
                        ></i>
                      </b-button>

                      <b-button
                        @click="update(patient.id)"
                        size="sm"
                        v-b-tooltip.hover
                        title="Modifier"
                        variant="warning"
                      >
                        <i
                          class="mdi mdi mdi-table-edit text-white menu-icon"
                        ></i>
                      </b-button>

                      <b-button
                        @click="supprimer(index)"
                        size="sm"
                        v-b-tooltip.hover
                        title="Supprimer"
                        variant="danger"
                      >
                        <i
                          class="mdi mdi mdi-delete-forever text-white menu-icon"
                        ></i>
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="showDetail"
      tabindex="-1"
      role="dialog"
      aria-labelledby="showDetailLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="alert alert-success" role="alert">
            <p class="text-center">
              Informations concernant le patient {{ this.id }}
            </p>
          </div>
          <div class="modal-body">
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Nom :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.nom }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Prénom :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.prenom }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Age :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.age }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Adresse :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.adresse }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Email :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.email }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Téléphone :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.telephone }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Numéro Whatsapp :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.whatsapp }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Numéro d'Urgence :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.urgencecontact }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Profession :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.profession }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Sexe :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title">{{ this.sexe }}</p>
                </div>
              </div>
            </div>
            <div class="row text-center mx-auto">
              <div class="col-sm-12 d-flex">
                <div class="col-sm-6 text-right">
                  <h5 class="modal-title">Autres Informations :</h5>
                </div>
                <div class="col-sm-6 col-md-6 text-left">
                  <p class="modal-title mx-auto">{{ this.autre }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <div class="mx-auto">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";

import * as JSZip from "../../../node_modules/jszip";
window.JSZip = JSZip;
import pdfMake from "../../../node_modules/pdfmake/build/pdfmake";
import vfsFonts from "../../../node_modules/pdfmake/build/vfs_fonts";
pdfMake.vfs = vfsFonts.pdfMake.vfs;
import "../../../node_modules/datatables.net-dt";
import "../../../node_modules/datatables.net-bs4/js/dataTables.bootstrap4";
import "../../../node_modules/datatables.net-buttons/js/dataTables.buttons";
import "../../../node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4";
import FrenchTranslation from "@/assets/datatable/French.json";
import "../../../node_modules/datatables.net-buttons/js/buttons.html5.js";
import "../../../node_modules/datatables.net-buttons/js/buttons.print.js";
import "../../../node_modules/datatables.net-buttons/js/buttons.colVis.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js"; // tres important pour le modal
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // tres important pour le modal

require("datatables.net-dt");


import { patientService } from "@/_services";


export default {
  name: "patients",
  data() {
    return {
      patients: [],
      table: null,
      nom: "",
      prenom: "",
      age: "",
      adresse: "",
      telephone: "",
      email: "",
      whatsapp: "",
      profession: "",
      sexe: "",
      urgencecontact: "",
      autre: "",
      id: "",
      // nom, prenom, age, adresse, telephone, email, whatsapp, profession, sexe, urgencecontact, autre,
    };
  },
  mounted() {
    patientService.getPatient(this.id).then((res) => {
      this.patient = res.data.data;
      this.patient.id = this.id;
    });
    patientService.getAllpatients().then((res) => {
      this.patients = res.data.data;
      
      this.$nextTick(() => {
        const table = $(this.$refs.myTable).DataTable({
          // dom: '<"html5buttons"B>lTfgtip',
          dom:
            '<"row mb-3"<"col-md-12"B>>' +
            '<"row mb-0"<"col-md-6"l><"col-md-6"f>>' +
            '<"row"<"col-md-12"tr>>' +
            '<"row"<"col-md-6"i><"col-md-6"p>>',

          // dom: 'Bfrtip',
          pageLength: 10, // Définir le nombre de résultats par page
          language: FrenchTranslation,

          buttons: [
            {
              extend: "csvHtml5", // Extend the excel button
            },
            {
              extend: "excelHtml5",
            },
            {
              extend: "pdfHtml5",
              // className: 'btn btn-primary',
            },
            { extend: "print" },
            { extend: "copy" },
          ],
        });
      });
      table.buttons().container().prependTo("#myTable_wrapper .col-md-6:eq(0)");
    });
  },
  methods: {
    detail(patient) {
      this.id = patient.id;
      this.nom = patient.nom;
      this.prenom = patient.prenom;
      this.age = patient.age;
      this.adresse = patient.adresse;
      this.telephone = patient.telephone;
      this.email = patient.email;
      this.whatsapp = patient.whatsapp;
      this.profession = patient.profession;
      this.sexe = patient.sexe;
      this.urgencecontact = patient.urgencecontact;
      this.autre = patient.autre;
      $("#showDetail").modal("show");
    },
    update(id) {
      this.$router.push("/patients/update/" + id);
    },
    supprimer(index) {
      console.log(index);
      patientService
        .deletePatient(this.patients[index].id)
        .then((res) => {
          this.patients.splice(index, 1);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import "../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
@import "../../../node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css";
</style>
