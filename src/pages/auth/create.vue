<template>
    <section class="container-scroller">
        <div class="page-header">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item ">
                        <a href="javascript:void(0);" class="text-dark font-weight-bold">Tableau de board
                        </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Gestion des patients
                    </li>
                    <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Ajouter</li>
                </ol>
            </nav>
        </div>

        <div class="row">
            <div class=" col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Ajouter un utilisateur</h4>
                        <form class="forms-sample row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Nom</label>
                                    <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Nom" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Prénom(s)</label>
                                    <input type="text" class="form-control" id="exampleInputUsername1"
                                        placeholder="Prénom" />
                                </div>
                                <!-- <div class="form-group">
                                                            <label for="exampleInputEmail1">Date de naissance</label>
                                                            <input
                                                                type="date"
                                                                class="form-control"
                                                                id="exampleInputEmail1"
                                                                placeholder="01/07/1990"
                                                            />
                                                        </div> -->
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Email</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1"
                                        placeholder="xyz@example.com" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Nom d'utilisateur</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"
                                        placeholder="@caissier" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <!--<div class="form-group">
                                        <label for="exampleFormControlSelect1">Large select</label>
                                        <select
                                            class="form-control   mb-3 "
                                            id="exampleFormControlSelect1"
                                        >
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="AM">America</option>
                                            <option value="CA">Canada</option>
                                            <option value="RU">Russia</option>
                                            <option value="RU">Russia</option>
                                        </select>
                                    </div>-->

                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">Adresse</label>
                                    <input type="text" class="form-control" id="exampleInputConfirmPassword1"
                                        placeholder="Cotonou Sainte Rita C/574 M/DeGaules" />
                                </div>
                                <!-- <div class="form-group">
                                    <label for="exampleInputEmail1">Rôle ou Poste</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        placeholder="Caissier" />
                                </div> -->
                                <div class="form-group">
                                        <label for="exampleFormControlSelect1">Rôle ou Poste</label>
                                        <select
                                            class="form-control   mb-3 "
                                            id="exampleFormControlSelect1"
                                        >
                                            <option value="AL">CAISSIER</option>
                                            <option value="WY">ADMIN</option>
                                
                                        </select>
                                    </div>
                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">Mot de passe</label>
                                    <input type="password" class="form-control" id="exampleInputConfirmPassword1"
                                        placeholder="........." />
                                </div>
                                <!--<div class="form-group form-check">
                                        <label for="radio" class="">Choisir un élément </label>
  
                                            <div class="p-3">
                                            <input type="checkbox" class="demo2" id="demo2" />
                                            <label for="demo2" class="mx-3" style="font-size: 1rem;"
                                            >element 1</label
                                            >
                                                
                                            <input type="checkbox" class="demo2 mx-5" id="demo3" />
                                            <label for="demo3" style="font-size: 1rem;"
                                            >element 2</label
                                            >
                                        </div>
                                    </div>-->
                                <div class="form-group col-md-12 px-0 row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleInputPassword1">Téléphone</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1"
                                            placeholder="98909776" />
                                    </div>
                                    <div class="form-group form-check col-md-6 px-4 mx-auto">
                                        <label for="radio" class="">Sexe</label>
                                        <div class="p-2">
                                            <input type="radio" name="demo6" class="demo6 mx-auto form-check-input "
                                                id="demo6-a" checked />
                                            <label for="demo6-a" class="mx-auto" style="font-size: 1rem;">Féminin</label>
                                            <input type="radio" name="demo6" class="demo6 mx-auto form-check-input "
                                                id="demo6-b" />
                                            <label for="demo6-b" class="mx-3" style="font-size: 1rem;">Masculin</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mx-auto">
                                <button type="submit" class="btn btn-success mr-2">
                                    Ajouter
                                </button>
                                <button class="btn btn-danger ">Cancel</button>
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
    name: "create-patient",

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
