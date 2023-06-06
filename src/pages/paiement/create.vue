<template>
  <section class="container-scroller">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0);" class="text-dark font-weight-bold"
              >Tableau de board</a
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Paiement et Facturation
          </li>
          <li
            class="breadcrumb-item active text-success font-weight-bold"
            aria-current="page"
          >
            Ajouter
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ajouter un paiement</h4>

            <form class="forms-sample p-2">
              <!-- <fieldset class="scheduler-border row col-md-12">
                <legend class="scheduler-border" style="font-size: medium !important;">Informations Patient</legend>

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
                    <label for="exampleInputPassword1">Assurance</label>
                    <input readonly type="text" class="form-control" id="exampleInputPassword1" placeholder="Assurance">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">indigence</label>
                    <input readonly type="text" class="form-control" id="exampleInputPassword1" placeholder="indigence">
                  </div>

                </div>
                <div class="control-group p-2 col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Age</label>
                    <input readonly type="email" class="form-control" id="exampleInputEmail1" placeholder="Age">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Sexe</label>
                    <input readonly type="email" class="form-control" id="exampleInputEmail1" placeholder="Adresse">
                  </div>

                  <div class="form-group">
                    <label for="exampleInputUsername1">Montant Assurance</label>
                    <input readonly type="text" class="form-control" id="exampleInputUsername1" placeholder="Montant Assurance">
                  </div>
                  
                  <div class="form-group">
                    <label for="exampleInputUsername1">Montant Indigence</label>
                    <input readonly type="text" class="form-control" id="exampleInputUsername1" placeholder="Montant Indigence<">
                  </div>


                </div>
              </fieldset> -->
              <!-- mon essai -->
              <fieldset class="scheduler-border row col-md-12">
                <legend
                  class="scheduler-border"
                  style="font-size: medium !important"
                >
                  Informations Patient
                </legend>

                <div class="control-group p-2 col-md-6">
                  <div class="form-group controls">
                    <!-- <label for="exampleFormControlSelect1"
                      >Sélectionner un patient</label
                    > -->
                    <option disabled value="Sélectionner un patient">
                      Sélectionner un patient
                    </option>
                    <select
                      v-model="selectedPatient"
                      class="form-control mb-3"
                      id="exampleFormControlSelect1"
                      @change="detail"
                    >
                      <option
                        v-for="patient in patients"
                        :value="patient.id"
                        :key="patient.id"
                      >
                        {{ patient.nom }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Téléphone</label>
                    <input
                      readonly
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      v-model="patient.telephone"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Assurance</label>
                    <input
                      readonly
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Indigence</label>
                    <input
                      readonly
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>

                <div class="control-group p-2 col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Âge</label>
                    <input
                      readonly
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      v-model="patient.age"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Sexe</label>
                    <input
                      readonly
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputUsername1">Montant Assurance</label>
                    <input
                      readonly
                      type="text"
                      class="form-control"
                      id="exampleInputUsername1"
                      v-model="assuranceMontant"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputUsername1">Montant Indigence</label>
                    <input
                      readonly
                      type="text"
                      class="form-control"
                      id="exampleInputUsername1"
                      v-model="assuranceMontantIndigence"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset class="scheduler-border container-fluid col-md-12">
                <legend
                  class="scheduler-border"
                  style="font-size: medium !important"
                >
                  Informations Paiement
                </legend>

                <!-- ----------------------------------pour ajouter dynamiquement une acte médical---------------------------------------------------- -->
                <div class="control-group mt-2 p-2" id="app">
                  <div class="row" v-for="(form, index) in forms" :key="index">
                    <div class="form-group col-md-4">
                      <label for="exampleFormControlSelect1"
                        >Actes médicaux</label
                      >
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        v-model="form.acte"
                        @change="checkreadonly(form)"
                      >
                        <option value="SA">Sélectionner un acte</option>
                        <option value="AL">Consultation</option>
                        <option value="WY">Hospitalisations</option>
                        <option value="AM">Examens médicaux</option>
                        <option value="CA">Transport en ambulance</option>
                        <option value="AV">
                          ventes de produits pharmaceutiques
                        </option>
                        <option value="autre">Autres</option>
                      </select>
                    </div>

                    <div v-if="form.acte === 'autre'" class="col-md-8 mb-2">
                      <label for="exampleInputUsername1">Autre</label>

                      <input
                        type="text"
                        value=""
                        class="form-control"
                        id=""
                        placeholder="Autre"
                        v-model="form.autre"
                      />
                    </div>

                    <div
                      class="form-group"
                      :class="
                        form.acte === 'autre'
                          ? 'col-md-3 mb-2'
                          : 'col-md-2 mb-2'
                      "
                    >
                      <label for="exampleInputEmail1">Code</label>
                      <input
                        type="email"
                        value="FD01003"
                        class="form-control"
                        id="exampleInputEmail1"
                        :readonly="form.readonly"
                        placeholder="Code"
                        v-model="form.code"
                      />
                    </div>

                    <div
                      class="form-group"
                      :class="
                        form.acte === 'autre'
                          ? 'col-md-3 mb-2'
                          : 'col-md-2 mb-2'
                      "
                    >
                      <label for="exampleInputUsername1">Prix</label>
                      <input
                        :readonly="form.readonly"
                        type="text"
                        value="2000"
                        class="form-control"
                        id="exampleInputUsername1"
                        placeholder="prix"
                        v-model="form.prix"
                      />
                    </div>
                    <div
                      class="form-group"
                      :class="
                        form.acte === 'autre'
                          ? 'col-md-3 mb-2'
                          : 'col-md-2 mb-2'
                      "
                    >
                      <label for="exampleInputUsername1">Quantité</label>
                      <input
                        type="number"
                        value="1"
                        class="form-control"
                        id="exampleInputUsername1"
                        placeholder="Quantité"
                        v-model="form.quantite"
                      />
                    </div>
                    <div
                      class="form-group"
                      :class="
                        form.acte === 'autre'
                          ? 'col-md-3 mb-2'
                          : 'col-md-2 mb-2'
                      "
                    >
                      <label for="exampleInputUsername1">Montant</label>
                      <input
                        readonly
                        type="text"
                        value="2000"
                        class="form-control"
                        id="exampleInputUsername1"
                        placeholder="Montant"
                        v-model="form.montant"
                      />
                    </div>

                    <!-- <div class="form-group col-md-1" style="margin-top: 1.7rem;"> -->
                    <div class="form-group col-md-1">
                      <b-button
                        size="sm"
                        v-b-tooltip.hover
                        title="Supprimer"
                        variant="danger"
                        @click.prevent="deleteForm(index)"
                        v-if="forms.length >= 2"
                      >
                        <i
                          class="mdi mdi mdi-close-box text-white menu-icon"
                        ></i>
                      </b-button>
                    </div>
                  </div>
                </div>

                <!-- ----------------------------------pour ajouter dynamiquement une acte médical---------------------------------------------------- -->

                <div class="control-group col-md-12 p-1 mt-n3 row">
                  <div class="form-group ml-4">
                    <b-button
                      size="sm"
                      v-b-tooltip.hover
                      title="Ajouter un acte"
                      variant="success"
                      @click="addForm"
                    >
                      <i class="mdi mdi mdi-plus-box text-white menu-icon"></i>
                    </b-button>
                  </div>
                </div>

                <div class="control-group p-2 col-md-12">
                  <div class="form-group mx-auto">
                    <label for="exampleFormControlSelect1"
                      >Mode de Paiement</label
                    >

                    <select
                      class="form-control mb-3"
                      id="exampleFormControlSelect1"
                      v-model="selectedOption"
                    >
                      <option
                        v-for="option in optionsMode"
                        :key="option.id"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="p-2 container-fluid">
                  <div
                    v-if="selectedOption === 'option2'"
                    class="control-group"
                  >
                    <img
                      src="@/assets/images/mtn.jpg"
                      alt="patient"
                      class="row col-md-12 mx-auto h-25"
                      style="width: 170px"
                    />

                    <div class="p-2 mt-4 row">
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Nom </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Nom"
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Prénom(s) </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Prénom(s)"
                        />
                      </div>
                      <div class="form-group col-md-2">
                        <label for="exampleInputEmail1">Téléphone</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Téléphone"
                        />
                      </div>

                      <div class="form-group col-md-2">
                        <label for="exampleInputUsername1">
                          Montant Total</label
                        >
                        <input
                          readonly
                          type="text"
                          class="form-control"
                          id="exampleInputUsername1"
                          placeholder="Montant total"
                        />
                      </div>

                      <div class="form-group p-2 mx-auto">
                        <button
                          @click="validateData"
                          type="button"
                          class="btn btn-success d-flex mx-auto btn btn-block btn-block text-center"
                        >
                          <i class="mdi mdi-check-circle-outline menu-icon"></i>
                          <span class="text-center ml-1">Valider</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="selectedOption === 'option3'"
                    class="control-group"
                  >
                    <img
                      src="@/assets/images/moov.png"
                      alt="patient"
                      class="row col-md-12 mx-auto h-25"
                      style="width: 180px"
                    />

                    <div class="p-2 mt-4 row">
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Nom </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Nom"
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Prénom(s) </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Prénom(s)"
                        />
                      </div>
                      <div class="form-group col-md-2">
                        <label for="exampleInputEmail1">Téléphone</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Téléphone"
                        />
                      </div>

                      <div class="form-group col-md-2">
                        <label for="exampleInputUsername1">
                          Montant Total</label
                        >
                        <input
                          readonly
                          type="text"
                          class="form-control"
                          id="exampleInputUsername1"
                          placeholder="Montant total"
                        />
                      </div>

                      <div class="form-group mx-auto p-2">
                        <button
                          @click="validateData"
                          type="button"
                          class="btn btn-success d-flex mx-auto btn btn-block text-center btn-block text-center"
                        >
                          <i class="mdi mdi-check-circle-outline menu-icon"></i>
                          <span class="text-center ml-1">Valider</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="selectedOption === 'option1'"
                    class="control-group"
                  >
                    <img
                      src="@/assets/images/mode-espece.png"
                      alt="patient"
                      class="row col-md-12 mx-auto h-25"
                      style="width: 180px"
                    />

                    <div class="p-1 mt-1 row">
                      <div class="form-group col-md-12">
                        <label for="exampleInputUsername1">
                          Montant Total</label
                        >
                        <input
                          readonly
                          type="text"
                          class="form-control"
                          id="exampleInputUsername1"
                          placeholder="Montant total"
                        />
                      </div>

                      <div class="form-group p-4 mx-auto">
                        <button
                          @click="showConfirmationModal"
                          type="button"
                          class="btn btn-success d-flex btn btn-block btn-block text-center"
                        >
                          <i class="mdi mdi-check-circle-outline menu-icon"></i>
                          <span class="text-center ml-1">Valider</span>
                        </button>

                        <!-- <button @click="validationEnCour" type="button"
                          class="btn btn-success col-md-4 btn btn-block btn-block  text-center"><i
                            class="mdi mdi-check-circle-outline menu-icon "></i> <span
                            class="text-center ml-1">cour </span>
                        </button> -->
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="selectedOption === 'option4'"
                    class="control-group"
                  >
                    <img
                      src="@/assets/images/mode-carte.png"
                      alt="patient"
                      class="row col-md-12 mx-auto h-25"
                      style="width: 180px"
                    />

                    <div class="p-2 mt-4 row">
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Nom et Prénom(s)</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Nom et Prénom(s)"
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Téléphone </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Téléphone"
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Email"
                        />
                      </div>

                      <!-- <div class="form-group col-md-3">
                        <label for="exampleInputEmail1">Type Carte</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="UBA">
                      </div> -->

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Numéro Carte</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Numéro Carte"
                        />
                      </div>

                      <!-- <div class="form-group col-md-2">
                        <label for="exampleInputEmail1">Code CVC</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Code CVC">
                      </div> -->

                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Nom Carte </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="VISA"
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label for="exampleInputEmail1">Date Expiration</label>
                        <input
                          type="month"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="MM/AA"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="form-group p-1 text-center mx-auto">
                        <button
                          @click="showConfirmationModal"
                          type="button"
                          class="btn btn-success d-flex btn btn-block btn-block text-center"
                        >
                          <i class="mdi mdi-check-circle-outline menu-icon"></i>
                          <span class="text-center"> Valider</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>

            <div>
              <!-- <button class="btn btn-primary" @click="showConfirmationModal">Valider les données</button> -->

              <div
                class="modal fade"
                id="confirmationModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="confirmationModalLabel1"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="confirmationModalLabel">
                        Confirmation
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Êtes-vous sûr de vouloir valider le paiement ?
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-outline-danger text-dark"
                        data-dismiss="modal"
                      >
                        Non
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-success text-dark"
                        @click="validateData"
                      >
                        Oui
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="modal fade"
                id="confirmationModalpay"
                tabindex="-1"
                role="dialog"
                aria-labelledby="confirmationModalPayLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="confirmationModalPayLabel">
                        Paiement validé avec succès
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body text-center">
                      <img
                        src="@/assets/images/img-valider.png"
                        alt="logo"
                        class="w-50"
                      />
                      <p>Vous avez reçu un paiement de Lalo Dossou !</p>
                    </div>

                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-outline-success text-dark mx-auto mt-n2"
                        @click="ShowFacture"
                      >
                        <i class="mdi mdi mdi-cloud-download"></i> Cliquer ici
                        pour imprimer la facture
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="modal fade"
                id="paiementencour"
                tabindex="-1"
                role="dialog"
                aria-labelledby="paiementencourLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="paiementencourLabel">
                        Paiement en cours de validation
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <!-- 
                    <div class="modal-body text-center">
                      <img src="@/assets/images/Capture.PNG" alt="logo" class="w-50">
                      <p>Paiement en cours de validation ! Veuillez patienter</p>
                    </div> -->

                    <div class="modal-footer"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                class="modal-dialog modal-dialog-centered modal-dialog modal-xl"
                role="document"
              >
                <div class="modal-content bg-white">
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
                  <div class="modal-body" id="print-section" ref="modalContent">
                    <div class="container-fluid">
                      <div class="row mb-2 mr-0 ml-0 col-sm-12">
                        <div class="col-sm-4">
                          <div class="mx-auto text-center">
                            <img
                              src="@/assets/images/logo-ministere.png"
                              alt="logo"
                              style="margin-left: -70px; width: 65%"
                            />
                            <img
                              src="@/assets/images/oms.svg"
                              alt="logo"
                              class="w-50"
                            />
                          </div>
                        </div>
                        <div class="col-sm-4 text-center mt-auto mb-auto">
                          <img
                            src="@/assets/images/logo.png"
                            alt="logo"
                            class="w-50"
                          />
                        </div>
                        <div class="col-sm-4 mr-0" style="display: flex">
                          <div
                            class="col-sm-12"
                            style="display: flex; margin-left: 5rem"
                          >
                            <div>
                              <h3
                                style="
                                  margin-top: 5px;
                                  text-transform: uppercase;
                                  font-size: 0.7rem;
                                  font-weight: bold;
                                  text-align: right;
                                "
                              >
                                Direction gérérale du tresor et de la
                                comptabilité publique
                              </h3>

                              <h4
                                style="
                                  font-size: 0.7em;
                                  font-weight: bold;
                                  text-align: right;
                                "
                              >
                                Tél: 21 30 19 37 - Fax: 21 30 07 58
                              </h4>
                              <h3
                                style="
                                  text-transform: uppercase;
                                  font-size: 0.6rem;
                                  font-weight: bold;
                                  text-align: right;
                                "
                              >
                                BP : 40 cotonou - route de l'aéroport
                              </h3>
                            </div>
                            <img
                              src="@/assets/images/tresor.png"
                              class="w-25 mt-n1"
                            />
                          </div>
                        </div>
                      </div>

                      <hr
                        style="background-color: rgb(156, 151, 151)"
                        class="mt-n2"
                      />

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
                            <strong
                              >Date : {{ invoice.date | formatDate }}
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
                              <th>code</th>
                              <th>Description</th>
                              <th>Quantité</th>
                              <th>Prix unitaire</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in invoice.items" :key="item.id">
                              <!-- <td>{{ item.mode }}</td> -->
                              <td>Mode paiement</td>
                              <td>{{ item.code }}</td>
                              <td>{{ item.description }}</td>
                              <td>{{ item.quantity }}</td>
                              <td>{{ item.price }} FCFA</td>
                              <td>{{ item.total }} FCFA</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colspan="5" class="text-right">
                                <strong>Montant Versé</strong>
                              </td>
                              <td>
                                <strong>{{ invoice.total }} FCFA</strong>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>

                      <div class="row mt-1">
                        <div class="col-sm-6">
                          <p>
                            Arrête la présente facture à la somme de :
                            <strong> Cinq mille (5 000) FCFA </strong>
                          </p>
                          <img
                            src="@/assets/images/codeQR.png"
                            alt="logo"
                            class="w-50"
                          />
                        </div>
                        <div class="col-sm-6 text-right">
                          <p><strong> Le Chef Caissier </strong></p>
                          <img
                            src="@/assets/images/signature.png"
                            alt="logo"
                            class="w-25"
                          />
                          <p><strong> Félicien DAGBOGBO </strong></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <router-link class="" to="">
                      <b-button
                        size="sm"
                        v-b-tooltip.hover
                        title="Whatsapp"
                        variant="success"
                      >
                        <i
                          class="mdi mdi mdi-whatsapp text-white menu-icon"
                        ></i>
                      </b-button>
                    </router-link>
                    <router-link class="" to="">
                      <b-button
                        size="sm"
                        v-b-tooltip.hover
                        title="Email"
                        variant="info"
                      >
                        <i class="mdi mdi mdi-email text-white menu-icon"></i>
                      </b-button>
                    </router-link>
                    <router-link class="" to="">
                      <b-button
                        size="sm"
                        v-b-tooltip.hover
                        title="MMS"
                        variant="primary"
                      >
                        <i
                          class="mdi mdi-message-text text-white menu-icon"
                        ></i>
                      </b-button>
                    </router-link>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Fermer
                    </button>

                    <button
                      type="button"
                      class="btn btn-info"
                      @click="printModal"
                    >
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

import "../../../node_modules/bootstrap/dist/js/bootstrap.js"; // tres important pour le modal
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"; // tres important pour le modal
import { patientService } from "@/_services";

export default {
  name: "create-payement",
  // props: ["id"],
  data() {
    return {
      selectedPatient: null,
      patients: [], // Remplir cette liste avec les patients disponibles
      assuranceMontant: "",
      assuranceMontant: "",
      assuranceMontantIndigence: "",
      assuranceMontantIndigence: "",
      patient: {},
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
        { id: 4, value: "option4", label: "Carte Bancaire" },
      ],
      selected: "",
      options: [
        { item: "F", name: " Feminin" },
        { item: "M", name: " Masculin" },
        //{ item: 'D', name: 'Option C', notEnabled: true },
        // { item: { d: 1 }, name: 'Option D' } this.forms.push({ mode: '', code: '', prix: '', quantite: '', montant: '' });
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

  mounted() {
    patientService.getAllpatients().then((res) => {
      this.patients = res.data.data;
      console.log(this.patients);
    });
  },
  methods: {
    detail(patient) {
      patientService.getPatients(this.patient).then((res) => {
        this.patient = res.data.data;
        this.patient.id = this.id;
        console.log(this.patient);
      });
      // this.id = patient.id;
      // this.nom = patient.nom;
      // this.prenom = patient.prenom;
      // this.age = patient.age;
      // this.adresse = patient.adresse;
      // this.telephone = patient.telephone;
      // this.email = patient.email;
      // this.whatsapp = patient.whatsapp;
      // this.profession = patient.profession;
      // this.sexe = patient.sexe;
      // this.urgencecontact = patient.urgencecontact;
      // this.autre = patient.autre;
      // console.log(this.telephone);
    },
    // getPatientData() {
    //   if (this.selectedPatient) {
    //     this.$nextTick(() => {
    //       this.patientService
    //         .getPatient(this.selectedPatient)
    //         .then((response) => {
    //           const patientData = response.data;
    //           this.patientTelephone = patientData.telephone;
    //           this.patientAssurance = patientData.assurance;
    //           this.patientIndigence = patientData.indigence;
    //           this.patientAge = patientData.age;
    //           this.patientSexe = patientData.sexe;
    //           this.assuranceMontant = patientData.montantAssurance;
    //           this.assuranceMontantIndigence = patientData.montantIndigence;
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });
    //     });
    //   }
    // },

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

    validationEnCour() {
      // Code pour valider les données dans la base de données

      $("#paiementencour").modal("show");
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

<!-- pour moi 
 -->

<!-- <script>
export default {
 
  data() {
    return {
      selectedPatient: null,
      patients: [
        {
          id: 1,
          nom: "Adam Akouvi",
          age: 25,
          telephone: "123456789",
          sexe: "Masculin",
          assuranceId: 1,
        },
        {
          id: 2,
          nom: "Sido Vinou",
          age: 30,
          telephone: "987654321",
          sexe: "Féminin",
          assuranceId: 2,
        },
        // Ajoutez d'autres patients ici avec leurs informations
      ],
      assurances: [
        {
          id: 1,
          nom: "Assurance XYZ",
          montant: 1000,
          indigence: true,
          montantIndigence: 500,
        },
        {
          id: 2,
          nom: "Assurance ABC",
          montant: 1500,
          indigence: false,
          montantIndigence: 0,
        },
        // Ajoutez d'autres assurances ici avec leurs informations
      ],
    };
  },
  computed: {
    selectedPatientIndex() {
      return this.patients.findIndex(
        (patient) => patient.id === this.selectedPatient
      );
    },
    patientTelephone() {
      return this.selectedPatientIndex !== -1
        ? this.patients[this.selectedPatientIndex].telephone
        : "";
    },
    patientAssurance() {
      if (this.selectedPatientIndex !== -1) {
        const assuranceId =
          this.patients[this.selectedPatientIndex].assuranceId;
        const assurance = this.assurances.find(
          (assurance) => assurance.id === assuranceId
        );
        return assurance ? assurance.nom : "";
      }
      return "";
    },
    patientIndigence() {
      if (this.selectedPatientIndex !== -1) {
        const assuranceId =
          this.patients[this.selectedPatientIndex].assuranceId;
        const assurance = this.assurances.find(
          (assurance) => assurance.id === assuranceId
        );
        return assurance ? assurance.indigence : "";
      }
      return "";
    },
    patientAge() {
      return this.selectedPatientIndex !== -1
        ? this.patients[this.selectedPatientIndex].age
        : "";
    },
    patientSexe() {
      return this.selectedPatientIndex !== -1
        ? this.patients[this.selectedPatientIndex].sexe
        : "";
    },
    assuranceMontant() {
      if (this.selectedPatientIndex !== -1) {
        const assuranceId =
          this.patients[this.selectedPatientIndex].assuranceId;
        const assurance = this.assurances.find(
          (assurance) => assurance.id === assuranceId
        );
        return assurance ? assurance.montant : "";
      }
      return "";
    },
    assuranceMontantIndigence() {
      if (this.selectedPatientIndex !== -1) {
        const assuranceId =
          this.patients[this.selectedPatientIndex].assuranceId;
        const assurance = this.assurances.find(
          (assurance) => assurance.id === assuranceId
        );
        return assurance ? assurance.montantIndigence : "";
      }
      return "";
    },
  },
};
</script> -->

<style scoped>
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

input[type="radio"].demo6 + label {
  position: relative;
  padding-left: 1.3rem;
}

input[type="radio"].demo6 + label::before,
input[type="radio"].demo6 + label::after {
  display: block;
  position: absolute;
  box-sizing: border-box;
  content: "";
  border-radius: 1rem;
}

input[type="radio"].demo6 + label::before {
  bottom: 0;
  left: 0;
  border: 1px solid #ccc;
  background-color: #eee;
  width: 1rem;
  height: 1rem;
}

input[type="radio"].demo6 + label::after {
  bottom: 3px;
  left: 3px;
  width: calc(1rem - 6px);
  height: calc(1rem - 6px);
}

input[type="radio"].demo6:checked + label::after {
  background-color: #45c28e;
}

input[type="checkbox"].demo2 {
  display: none;
}

input[type="checkbox"].demo2 + label::before {
  content: "";
  border: 1px solid #45c28e;
  padding: 0 0.6rem;
  margin-right: 0.3rem;
}

input[type="checkbox"].demo2:checked + label::before {
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

table tbody + tbody {
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
