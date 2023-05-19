<template>
    
  <div class="row">
    <div class="page-header">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item ">
                        <a href="javascript:void(0);" class="text-dark font-weight-bold">Paramétrage
                        </a>
                    </li>
                    <li class="breadcrumb-item " aria-current="page">
                        Gestion Carte Sanitaire
                    </li>
                    <li class="breadcrumb-item active text-success font-weight-bold" aria-current="page">Liste</li>

                </ol>
            </nav>
        </div>
      <div class="col-lg-12 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title">Liste des Cartes Sanitaires</h4>
                  <div class="table-responsive">
                      <table id="order-listing" class="table">
                          <thead>
                              <tr>
                                  <th>#</th>
                                  <th>Référence</th>
                                  <th>Nom</th>
                                  <th>Téléphone</th>
                                  <th>Email</th>
                                  <!-- <th>Commune</th> -->
                                  <!-- <th>Arrondissement</th> -->
                                  <th>Quartier</th>
                                  <th>Adresse</th>
                                  <th class="text-center">Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>1</td>
                                  <td>05230902AAAT0001</td>
                                  <td>Hôpitale de Zone</td>
                                  <td>21456789</td>
                                  <td>xyz@gmail.com</td>
                                  <!-- <td>Abomey-Calavi</td> -->
                                  <!-- <td>12ème Arrondissement</td> -->
                                  <td>Arconville</td>
                                  <td>Rue 7 arconville à coté du tribunale de calavi</td>
                                  <td class="text-center">
                                      <router-link class="" to="/">
                                          <b-button
                                              size="sm"
                                              v-b-tooltip.hover
                                              title="Détail"
                                              variant="success"
                                                >
                                              <i
                                                  class="mdi  mdi-file-document text-white menu-icon"
                                              ></i>
                                          </b-button>
                                      </router-link>
                                      <router-link class="" to="/">
                                          <b-button
                                              size="sm"
                                              v-b-tooltip.hover
                                              title="Modifier"
                                              variant="warning"
                                          >
                                              <i
                                                  class="mdi mdi mdi-table-edit text-white menu-icon"
                                              ></i>
                                          </b-button>
                                      </router-link>
                                      <router-link class="" to="/">
                                          <b-button
                                              size="sm"
                                              v-b-tooltip.hover
                                              title="Supprimer"
                                              variant="danger"
                                          >
                                              <i
                                                  class="mdi mdi mdi-delete-forever text-white menu-icon"
                                              ></i>
                                          </b-button>
                                      </router-link>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>