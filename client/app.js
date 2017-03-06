/*
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/
'use strict';

var angular = require('angular');
/* Define the module once and only once... */
var app = angular.module('local_aprs_client', ['ngMaterial']);

/* External devDependencies */
require('angular-material');
require('angular-animate');
require('angular-aria');

/* App modules */
require('./main');

/* Manually bootstrap the app. */
angular
  .element( document )
  .ready( function() {
    app
      .run(()=>{
        console.log("Running the 'local_aprs_client'.");
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'local_aprs_client' ]);
  });