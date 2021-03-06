/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  'use strict';

  angular
    .module('horizon.app.core.openstack-service-api')
    .factory('horizon.app.core.openstack-service-api.{{cookiecutter.api_module}}', API);

  API.$inject = [
    'horizon.framework.util.http.service',
    'horizon.framework.widgets.toast.service',
    'horizon.framework.util.i18n.gettext'
  ];

  function API(apiService, toastService, gettext) {
    var service = {
      get{{cookiecutter.panel_func}}: get{{cookiecutter.panel_func}},
      get{{cookiecutter.panel_func}}s: get{{cookiecutter.panel_func}}s,
      create{{cookiecutter.panel_func}}: create{{cookiecutter.panel_func}},
      update{{cookiecutter.panel_func}}: update{{cookiecutter.panel_func}},
      delete{{cookiecutter.panel_func}}: delete{{cookiecutter.panel_func}},
    };

    return service;

    ///////////////
    // {{cookiecutter.panel_func}}s //
    ///////////////

    function get{{cookiecutter.panel_func}}(id) {
      return apiService.get('/api/{{cookiecutter.api_module}}/{{cookiecutter.panel}}s/' + id)
        .error(function() {
          var msg = gettext('Unable to retrieve the {{cookiecutter.panel_func}} with id: %(id)s.');
          toastService.add('error', interpolate(msg, {id: id}, true));
        });
    }

    function get{{cookiecutter.panel_func}}s() {
      return apiService.get('/api/{{cookiecutter.api_module}}/{{cookiecutter.panel}}s/')
        .error(function() {
          toastService.add('error', gettext('Unable to retrieve the {{cookiecutter.panel_func}}s.'));
        });
    }

    function create{{cookiecutter.panel_func}}(params) {
      return apiService.put('/api/{{cookiecutter.api_module}}/{{cookiecutter.panel}}s/', params)
        .error(function() {
          var msg = gettext('Unable to create the {{cookiecutter.panel_func}} with name: %(name)s');
          toastService.add('error', interpolate(msg, { name: params.name }, true));
        });
    }

    function update{{cookiecutter.panel_func}}(id, params) {
      return apiService.post('/api/{{cookiecutter.api_module}}/{{cookiecutter.panel}}s/' + id, params)
        .error(function() {
          var msg = gettext('Unable to update the {{cookiecutter.panel_func}} with id: %(id)s');
          toastService.add('error', interpolate(msg, { id: params.id }, true));
        });
    }

    function delete{{cookiecutter.panel_func}}(id, suppressError) {
      var promise = apiService.delete('/api/{{cookiecutter.api_module}}/{{cookiecutter.panel}}s/', [id]);
      return suppressError ? promise : promise.error(function() {
        var msg = gettext('Unable to delete the {{cookiecutter.panel_func}} with id: %(id)s');
        toastService.add('error', interpolate(msg, { id: id }, true));
      });
    }
  }
}());
