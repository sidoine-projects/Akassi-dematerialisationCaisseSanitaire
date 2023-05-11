<template>
  <div class="row">
      <div class="col-lg-12 grid-margin">
          <div class="card">
              <div class="card-body">
                  <h4 class="card-title">Liste des actes médicaux</h4>
                  <div class="table-responsive">
                      <table id="order-listing" class="table">
                          <thead>
                              <tr>
                                  <th>#</th>
                                  <th>Réference</th>
                                  <th>Nom</th>
                                  <th>Telephone</th>
                                  <th>Email</th>
                                  <th>Adresse</th>
                                  <th class="text-center">Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>1</td>
                                  <td>Asam</td>
                                  <td>Fati</td>
                                  <td>Consultation</td>
                                  <td>1</td>
                                  <td>1</td>
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