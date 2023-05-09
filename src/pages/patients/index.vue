<template>
    <section class="tables">
      <div class="page-header">
        <h3 class="page-title">
          Bootstrap Table
        </h3>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="javascript:void(0);">Tableau de board</a></li>
            <li class="breadcrumb-item active" aria-current="page">Gestion des patients</li>
            <li class="breadcrumb-item active" aria-current="page">Ajouter</li>
          </ol>
        </nav>
      </div>
  
  
  
      <div class="row">
        <!-- <p class="card-description">
                For displaying tabular data. <code>&lt;b-table&gt;</code> supports pagination, filtering, sorting, custom rendering, events, and asynchronous data.
              </p> -->
  
  
        <div class="col-md-6 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Default form</h4>
              <p class="card-description"> Basic form layout </p>
              <form class="forms-sample">
                <div class="form-group">
                  <label for="exampleInputUsername1">Username</label>
                  <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Username">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                  <label for="exampleInputConfirmPassword1">Confirm Password</label>
                  <input type="password" class="form-control" id="exampleInputConfirmPassword1" placeholder="Password">
                </div>
                <div class="form-check form-check-flat form-check-primary">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input"> Remember me </label>
                </div>
                <button type="submit" class="btn btn-gradient-primary mr-2">Submit</button>
                <button class="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Horizontal Form</h4>
              <p class="card-description"> Horizontal form layout </p>
              <form class="forms-sample">
                <div class="form-group row">
                  <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Email</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Username">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="exampleInputEmail2" class="col-sm-3 col-form-label">Email</label>
                  <div class="col-sm-9">
                    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="exampleInputMobile" class="col-sm-3 col-form-label">Mobile</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="exampleInputMobile" placeholder="Mobile number">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Password</label>
                  <div class="col-sm-9">
                    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">Re Password</label>
                  <div class="col-sm-9">
                    <input type="password" class="form-control" id="exampleInputConfirmPassword2" placeholder="Password">
                  </div>
                </div>
                <div class="form-check form-check-flat form-check-primary">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input"> Remember me </label>
                </div>
                <button type="submit" class="btn btn-gradient-primary mr-2">Submit</button>
                <button class="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
  
      </div>
  
  
  
    </section>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'jquery/dist/jquery.min.js';
  //Datatable Modules
  import "datatables.net-dt/js/dataTables.dataTables"
  import "datatables.net-dt/css/jquery.dataTables.min.css"
  //import $ from 'jquery'; 
  //import axios from 'axios';
  const itemsTwo = [
    { Status: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
    { Status: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
    {
      Status: false,
      age: 89,
      first_name: 'Geneva',
      last_name: 'Wilson',
      _rowVariant: 'danger'
    },
    {
      Status: true,
      age: 40,
      first_name: 'Thor',
      last_name: 'Macdonald',
      _cellVariants: { Status: 'success', age: 'info', first_name: 'warning' }
    },
    { Status: false, age: 29, first_name: 'Dick', last_name: 'Dunlap' }
  ]
  export default {
    name: 'patient-create',
    data() {
      return {
        itemsTwo: itemsTwo,
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        fields: [
          {
            key: 'first_name',
            label: 'Person first name',
            sortable: true
          },
          {
            key: 'last_name',
            label: 'Person last name',
            sortable: true
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'success'
          }
        ],
      }
    }
  }
  </script>