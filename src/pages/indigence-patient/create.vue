<template>
  <section class="container-scroller">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item ">
            <a href="javascript:void(0);" class="text-dark font-weight-bold">Paramétrage
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Indigence Patient
          </li>
          <!-- <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Ajouter</li> -->

        </ol>
      </nav>
    </div>

    <div class="row">
      <div class=" col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ajouter une indigence pour un patient</h4>
            <!-- <p class="card-description">Ajouter</p> -->

            <fieldset class="scheduler-border  col-md-12">
              <legend class="scheduler-border" style="font-size: medium !important;">Informations Patient</legend>
              <form class="row">
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
                    <label for="exampleInputEmail1">Age</label>
                    <input readonly type="email" class="form-control" id="exampleInputEmail1" placeholder="Age">
                  </div>

                </div>
                <div class="control-group p-2 col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Téléphone</label>
                    <input readonly type="email" class="form-control" id="exampleInputEmail1"
                      placeholder="Numéro de téléphone">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">pourcentage (En %)</label>
                    <input readonly type="email" class="form-control" id="exampleInputEmail1"
                      placeholder="pourcentage indigence">
                  </div>

                </div>


                <div class="mx-auto  text-center">
                  <button type="submit" class="btn btn-gradient-success mr-2 ">Valider</button>
                  <!-- <button class="btn btn-gradient-danger ">Cancel</button> -->
                </div>
              </form>

            </fieldset>



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
</style>
