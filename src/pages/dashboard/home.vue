<template>
    <section class="dashboard">
        <div class="page-header">
            <h3 class="page-title">
            </h3>
            <nav aria-label="breadcrumb">
            </nav>
        </div>
        <div class="row">
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card card-img-holder text-black">
                    <img src="@/assets/images/parametrage.png" style="width: 25%;" class="mt-4 ml-auto mr-auto">
                    <div class="card-body">
                        <center>
                            <h2 class="mb-5">Paramétrage</h2>
                        </center>
                        <center>
                            <button class="btn" style="background: #0b5d3f; border-radius: 3rem;">
                                <router-link class="nav-link" style="color: #fff; font-size: 1.1rem;" to="/dashboard">
                                    Acceder au module
                                </router-link>
                            </button>
                        </center>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card card-img-holder text-black">
                    <img src="@/assets/images/patients.png" style="width: 25%;" class="mt-4 ml-auto mr-auto">
                    <div class="card-body">
                        <center>
                            <h2 class="mb-5">Gestion des patients</h2>
                        </center>
                        <center>
                            <button class="btn" style="background: #0b5d3f; border-radius: 3rem;">
                                <router-link class="nav-link" style="color: #fff; font-size: 1.1rem;" to="/patients/list">
                                    Acceder au module
                                </router-link>
                            </button>
                        </center>
                    </div>
                </div>

            </div>
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card card-img-holder text-black">
                    <img src="@/assets/images/actsmedicaux.png" style="width: 25%;" class="mt-4 ml-auto mr-auto">
                    <div class="card-body">
                        <center>
                            <h2 class="mb-5">Actes Médicaux</h2>
                        </center>
                        <center>
                            <button class="btn" style="background: #0b5d3f; border-radius: 3rem;">
                                <router-link class="nav-link" style="color: #fff; font-size: 1.1rem;" to="/actes-medicaux/list">
                                    Acceder au module
                                </router-link>
                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card card-img-holder text-black">
                    <img src="@/assets/images/paiements.png" style="width: 25%;" class="mt-4 ml-auto mr-auto">
                    <div class="card-body">
                        <center>
                            <h2 class="mb-5">Paiements et facturation</h2>
                        </center>
                        <center>
                            <button class="btn" style="background: #0b5d3f; border-radius: 3rem;">
                                <router-link class="nav-link" style="color: #fff; font-size: 1.1rem;" to="/payement/list">
                                    Acceder au module
                                </router-link>
                            </button>
                        </center>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card card-img-holder text-black">
                    <img src="@/assets/images/treasury.png" style="width: 25%;" class="mt-4 ml-auto mr-auto">
                    <div class="card-body">
                        <center>
                            <h2 class="mb-5">Trésorerie</h2>
                        </center>
                        <center>
                            <button class="btn" style="background: #0b5d3f; border-radius: 3rem;">
                                <router-link class="nav-link" style="color: #fff; font-size: 1.1rem;" to="/parametrage">
                                    Acceder au module
                                </router-link>
                            </button>
                        </center>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card card-img-holder text-black">
                    <img src="@/assets/images/reports.png" style="width: 25%;" class="mt-4 ml-auto mr-auto">
                    <div class="card-body">
                        <center>
                            <h2 class="mb-5">Rapports</h2>
                        </center>
                        <center>
                            <button class="btn" style="background: #0b5d3f; border-radius: 3rem;">
                                <router-link class="nav-link" style="color: #fff; font-size: 1.1rem;" to="/parametrage">
                                    Acceder au module
                                </router-link>
                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-md-4 stretch-card grid-margin">
                <div class="card card-img-holder text-black">
                    <img src="@/assets/images/hopital.png" style="width: 25%;" class="mt-4 ml-auto mr-auto">
                    <div class="card-body">
                        <center>
                            <h2 class="mb-5">Gestion des EPHs</h2>
                        </center>
                        <center>
                            <button class="btn" style="background: #0b5d3f; border-radius: 3rem;">
                                <router-link class="nav-link" style="color: #fff; font-size: 1.1rem;" to="/eph/list">
                                    Acceder au module
                                </router-link>
                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "acceuil",
    data() {
        return {
            time1: null,
        };
    },
};
</script>

<style scoped>.text-black:hover {
    transition: 1s;
    background: #a5ddbe;
}</style>
