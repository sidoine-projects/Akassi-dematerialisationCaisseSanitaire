<template>
    <section class="container-scroller">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Jquery-toast styles</h4>
                        <p class="card-description mb-0"> Click on the below buttons for notifications in different styles.
                        </p>
                        <p class="card-description"> The <code>icon</code> property can be used to specify the predefined
                            types of toasts - success, info, warning and danger </p>
                        <div class="template-demo d-lg-flex justify-content-between">
                            <button type="button" class="btn btn-gradient-success btn-fw"
                                @click="afficherToast">Success</button>



                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                        <h4 class="card-title">Ajouter un patient</h4>
                        <form class="forms-sample row" @submit.prevent="store">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Nom</label>
                                    <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Nom"
                                        v-model="patient.nom" />
                                    <ul v-for="nom in errorNom" :key="nom">
                                        <li class="text-danger">{{ nom }}</li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Prénom(s)</label>
                                    <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Prénom"
                                        v-model="patient.prenom" />
                                    <ul v-for="prenom in errorPrenom" :key="prenom">
                                        <li class="text-danger">{{ prenom }}</li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Age</label>
                                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="67"
                                        v-model="patient.age" />
                                    <ul v-for="age in errorAge" :key="age">
                                        <li class="text-danger">{{ age }}</li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Adresse</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"
                                        placeholder="Cotonou Sainte Rita C/574 M/DeGaules" v-model="patient.adresse" />
                                    <ul v-for="adresse in errorAdresse" :key="adresse">
                                        <li class="text-danger">{{ adresse }}</li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Email</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1"
                                        placeholder="xyz@example.com" v-model="patient.email" />
                                    <ul v-for="email in errorEmail" :key="email">
                                        <li class="text-danger">{{ email }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">Conctact</label>
                                    <input type="text" class="form-control" id="exampleInputConfirmPassword1"
                                        placeholder="90098989" v-model="patient.telephone" />
                                    <ul v-for="telephone in errorTelephone" :key="telephone">
                                        <li class="text-danger">{{ telephone }}</li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">Numéro Whatsapp</label>
                                    <input type="text" class="form-control" id="exampleInputConfirmPassword1"
                                        placeholder="90098989" v-model="patient.whatsapp" />
                                    <ul v-for="whatsapp in errorWhatsapp" :key="whatsapp">
                                        <li class="text-danger">{{ whatsapp }}</li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Conctact d'Urgence</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="90989098"
                                        v-model="patient.urgencecontact" />
                                    <ul v-for="urgencecontact in errorUrgenceContact" :key="urgencecontact">
                                        <li class="text-danger">{{ urgencecontact }}</li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">Profession</label>
                                    <input type="text" class="form-control" id="exampleInputConfirmPassword1"
                                        placeholder="Comptable" v-model="patient.profession" />
                                    <ul v-for="profession in errorProfession" :key="profession">
                                        <li class="text-danger">{{ profession }}</li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">Autres informations</label>
                                    <input type="text" class="form-control" id="exampleInputConfirmPassword1" placeholder=""
                                        v-model="patient.autre" />
                                </div>
                                <div class="form-group form-check">
                                    <label for="radio" class="">Sexe</label>
                                    <ul v-for="sexe in errorSexe" :key="sexe">
                                        <li class="text-danger">{{ sexe }}</li>
                                    </ul>
                                    <div class="p-2">
                                        <input type="radio" name="demo6" class="demo6 mx-auto form-check-input" id="demo6-a"
                                            checked value="Feminin" v-model="patient.sexe" />
                                        <label for="demo6-a" class="mx-auto" style="font-size: 1rem;">Féminin</label>
                                        <input type="radio" name="demo6" class="demo6 mx-auto form-check-input" id="demo6-b"
                                            value="Masculin" v-model="patient.sexe" />
                                        <label for="demo6-b" class="mx-3" style="font-size: 1rem;">Masculin</label>
                                    </div>

                                </div>
                            </div>

                            <div class="mx-auto">
                                <button type="submit" class="btn btn-success mr-2">Ajouter</button>
                                <button class="btn btn-danger">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { patientService } from '@/_services';
import { useToast, POSITION } from 'vue-toastification';


export default {

    name: "create-patient",


    data() {
        return {
            selected: "",

            patient: {
                id: '',
                nom: '',
                prenom: '',
                age: '',
                adresse: '',
                telephone: '',
                email: '',
                whatsapp: '',
                profression: '',
                sexe: [
                    { item: "F", name: " Feminin" },
                    { item: "M", name: " Masculin" },
                ],
                urgencecontact: '',
                autre: ''
            },
            wrong: '',
            errorNom: [],
            errorPrenom: [],
            errorAge: [],
            errorAdresse: [],
            errorTelephone: [],
            errorEmail: [],
            errorWhatsapp: [],
            errorProfession: [],
            errorSexe: [],
            errorUrgenceContact: [],
            errorautre: []

        };
    },



    methods: {
        afficherToast() {
            // this.$toast.success('Enregistrement effctué avec succès !');
            this.$toast.success('Enregistrement effctué avec succès !', {
                position: POSITION.TOP_RIGHT,
                timeout: 3000,
                bodyStyle: {
                    borderRadius: '10px',
                    backgroundColor: '#f0f0f0',
                    color: '#333',
                    fontWeight: 'bold',
                    // Ajoutez d'autres styles personnalisés selon vos besoins
                },
            });
        },


        store() {
            patientService.addPatients(this.patient)
                .then(res => {
                    this.$router.push('/patients/list');
                })
                .catch(err => {
                    let $faute = err.response.data.errors;
                    console.log($faute);
                    let size = Object.keys($faute).length;
                    console.log(size);
                    this.wrong = size;
                    console.log(this.errorNom);
                    console.log(this.errorAdresse);

                    if (this.wrong > 0) {
                        this.errorNom = $faute.nom;
                        this.errorPrenom = $faute.prenom;
                        this.errorAge = $faute.age;
                        this.errorAdresse = $faute.adresse;
                        this.errorTelephone = $faute.telephone;
                        this.errorEmail = $faute.email;
                        this.errorWhatsapp = $faute.whatsapp;
                        this.errorProfession = $faute.profession;
                        this.errorSexe = $faute.sexe;
                        this.errorUrgenceContact = $faute.urgencecontact;
                        this.errorautre = $faute.autre;

                        if (this.errorNom && this.errorPrenom && this.errorAge && this.errorAdresse && this.errorTelephone && this.errorEmail && this.errorWhatsapp && this.errorProfession && this.errorSexe && this.errorUrgenceContact && this.errorautre) {
                            this.$router.push('/patients/create');
                        }
                    }
                });
        },
    },








};
</script>
<!-- <script src="@/assets/js/toastDemo.js"></script> -->

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
