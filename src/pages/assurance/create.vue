<template>
    <section class="container-scroller">
        <div class="page-header">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item ">
                        <a href="javascript:void(0);" class="text-dark font-weight-bold"
                            >Paramétrage
                        </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Assurance
                    </li>
                    <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Ajouter</li>

                </ol>
            </nav>
        </div>

        <div class="row">
            <div class=" col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Ajouter une assurance</h4>
                        <p class="card-description">Ajouter</p>
                        <form @submit="addAssurance" class="forms-sample row" >
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="assuranceName">Nom :</label>
                                    <input
                                        v-model="assuranceName"
                                        type="text"
                                        class="form-control"
                                        id="assuranceName"
                                        placeholder="Nom de l'assurance"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="assurancePercentage">Pourcentage:</label>
                                    <input
                                        v-model="assurancePercentage"
                                        type="text"
                                        class="form-control"
                                        id="assurancePercentage"
                                        placeholder="Pourcentage d'assurance"
                                    />
                                </div>
                                <!-- <div class="form-group">
                                    <label for="assuranceCoverageIndigence">Couverture Indigence :</label>
                                    <input
                                        v-model="assuranceCoverageIndigence"
                                        type="radio"
                                        class="form-control"
                                        id="assuranceCoverageIndigence"
                                        placeholder="Couverture Indigence"
                                    />
                                </div> -->
                                <div class="form-group">
                                <label for="assuranceCompanyId">Compagnie d'assurance :</label>
                                <select id="assuranceCompanyId" v-model="assuranceCompanyId"  class="form-control">
                                  <option value="">Sélectionnez une compagnie</option>
                                  <option v-for="company in companies" :value="company.id">{{ company.name }}</option>
                                </select>
                              </div>

                                
                                
                                <!-- <div class="form-group">
                                    <label for="exampleInputPassword1">Prix</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="25 000"
                                    />
                                </div> -->
                            </div>

                            <div class="mx-auto">
                                <button type="submit" class="btn btn-gradient-success mr-2">Ajouter</button>
                                <button class="btn btn-gradient-danger ">Cancel</button>
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
        { item: "F", name: " Feminin" },
        { item: "M", name: " Masculin" },
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
