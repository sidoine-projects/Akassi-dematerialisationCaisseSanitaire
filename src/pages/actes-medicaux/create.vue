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
                        Gestion des Actes médicaux
                    </li>
                    <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Ajouter</li>

                </ol>
            </nav>
        </div>

        <div class="row">
            <div class=" col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Ajouter un acte médical</h4>
                        <p class="card-description">Ajouter</p>
                        <form class="forms-sample row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Code</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputUsername1"
                                        placeholder="Code"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Libellé</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputUsername1"
                                        placeholder="Consulation"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Description</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Consulation de ......."
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Prix</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="25 000"
                                    />
                                </div>
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
  name: "create-actes-medicaux",

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
