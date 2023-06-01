<template>
  <section class="container-scroller">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0);" class="text-dark font-weight-bold"
              >Paramétrage
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Prise en charge des patients
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
            <h4 class="card-title">
              Ajouter une prise en charge pour patients
            </h4>
            <p class="card-description">Ajouter</p>
            <form @submit="addPriseEnCharge" class="forms-sample row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="patientId">Patient :</label>
                  <select
                    id="patientId"
                    v-model="patientId"
                    class="form-control"
                  >
                    <option value="">Sélectionnez une prise en charge</option>
                    <option>
                      <!-- {{ patient.name }} -->
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="assuranceId">Assurance :</label>
                  <select
                    id="assuranceId"
                    v-model="assuranceId"
                    class="form-control"
                  >
                    <option value="">Sélectionnez une assurance</option>
                    <option></option>
                  </select>
                </div>

                <!-- <div class="form-group">
                                    <label for="statut">Statut :</label>
                                    <input
                                        v-model="statut"
                                        type="text"
                                        class="form-control"
                                        id="statut"
                                        placeholder="Statut"
                                    />
                                </div> -->

                <div class="form-group">
                  <label for="pourcentage">Pourcentage en %</label>
                  <input
                    v-model="pourcentage"
                    type="number"
                    class="form-control"
                    id="pourcentage"
                    placeholder="Pourcentage de prise en charge"
                  />
                </div>
                <div class="form-group">
                  <label for="radio" class="">Statut</label>
                  <div class="p-2">
                    <input
                      type="radio"
                      name="demo6"
                      class="demo6 mx-auto form-check-input"
                      id="demo6-a"
                      checked
                    />
                    <label for="demo6-a" class="mx-auto" style="font-size: 1rem"
                      >Privé</label
                    >
                    <input
                      type="radio"
                      name="demo6"
                      class="demo6 mx-auto form-check-input"
                      id="demo6-b"
                    />
                    <label for="demo6-b" class="mx-3" style="font-size: 1rem"
                      >Public</label
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="montant">Montant :</label>
                  <input
                    v-model="montant"
                    type="number"
                    class="form-control"
                    id="montant"
                    placeholder="Entrez le montant"
                  />
                </div>

                <div class="form-group">
                  <label for="dateDebut">Date de début</label>
                  <input
                    type="text"
                    v-model="dateDebut"
                    class="form-control"
                    id="dateDebut"
                    placeholder="date_debut"
                  />
                </div>
                <div class="form-group">
                  <label for="dateFin">Date de fin</label>
                  <input
                    type="text"
                    v-model="dateFin"
                    class="form-control"
                    id="dateFin"
                    placeholder="date_fin"
                  />
                </div>
                <div class="form-group">
                  <label for="Observation">Observation</label>
                  <textarea
                    id="observation"
                    v-model="observation"
                    class="form-control"
                    type="text"
                    placeholder="Donnez une observation"
                  ></textarea>
                  <!-- <input
                                        type="text"
                                        v-model="Observation"
                                        class="form-control"
                                        id="Observation"
                                        placeholder="Donnez une observation"
                                    /> -->
                </div>
              </div>

              <div class="mx-auto">
                <button type="submit" class="btn btn-gradient-success mr-2">
                  Ajouter
                </button>
                <button class="btn btn-gradient-danger">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "@/assets/vendors/mdi/css/materialdesignicons.min.css";

export default {
  name: "create-assurance",

  data() {
    return {
      selected: "",
      options: [
        { item: "Pr", name: " Privé" },
        { item: "Pub", name: " Public" },
      ],
    };
  },
};
</script>

<style>
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
</style>
