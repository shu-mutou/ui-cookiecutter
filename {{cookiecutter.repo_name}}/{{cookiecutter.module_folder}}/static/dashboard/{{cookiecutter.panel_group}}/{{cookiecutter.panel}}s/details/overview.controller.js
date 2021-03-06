/*
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function() {
  "use strict";

  angular
    .module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s')
    .controller('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.OverviewController', controller);

  controller.$inject = [
    '$scope',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.resourceType',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.events',
    'horizon.framework.conf.resource-type-registry.service'
  ];

  function controller(
    $scope,
    resourceType,
    events,
    registry
  ) {
    var ctrl = this;
    ctrl.{{cookiecutter.panel}} = {};

    $scope.context.loadPromise.then(onGet{{cookiecutter.panel_func}});

    function onGet{{cookiecutter.panel_func}}({{cookiecutter.panel}}) {
      ctrl.{{cookiecutter.panel}} = {{cookiecutter.panel}}.data;
    }
  }
})();
