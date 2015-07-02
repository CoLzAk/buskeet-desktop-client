(function() {

    'use strict';

    angular.module('myApp').factory('UserFactory', userFactory);

    userFactory.$inject = ['$http', 'jwtHelper', 'store'];

    function userFactory($http, jwtHelper, store) {
        var user = {};

        return {
            get: get,
            set: set,
            isAuthenticated: isAuthenticated,
            login: login,
            logout: logout,
            getUser: getUser
            //register: register
        };

        function get(attr) {
            return user[attr];
        }

        function set(attr, value) {
            user[attr] = value;
        }

        function isAuthenticated() {
            return !!store.get('token');
            //return !!store.get('token') && !jwtHelper.isTokenExpired(store.get('token'));
        }

        function login() {
            user.set('id', 1);
            user.set('username', 'colzak');

            store.set('user', user);
            store.set('token', 'ThisIsTheGodDamToken');
            //$http
            //    .post('http://www.buskeet.com/api/login_check', credentials, { ignoreAuthModule: true })
            //    .success(function(data, status, headers, config) {
            //        store.set('token', data.token);
            //
            //        user.info = data.data;
            //        user.authenticated = true;
            //        store.set('user', user.info);
            //        $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;  // Step 1
            //        authService.loginConfirmed(data, function(config) {  // Step 2 & 3
            //            config.headers.Authorization = 'Bearer ' + data.token;
            //            return config;
            //        });
            //    })
            //    .error(function(data, status, headers, config) {
            //        $rootScope.$broadcast('event:auth-login-failed', status);
            //        return data;
            //    })
            //;
        }

        function logout() {
            //delete $http.defaults.headers.common.Authorization;
            store.remove('user');
            store.remove('token');
        }

        function getUser() {
            return user;
        }
        //return {
        //    getToken: function() {
        //        return store.get('token');
        //    },
        //    getId: function() {
        //        return store.get('id');
        //    },
        //    getPermissions: function() {
        //        return store.get('permissions');
        //    },
        //    getUsername: function() {
        //        return store.get('username');
        //    },
        //    getRoles: function() {
        //        return store.get('roles');
        //    },
        //    getProfile: function() {
        //        return store.get('profile');
        //    },
        //    setToken: function(token) {
        //        store.set('token', token);
        //    },
        //    setId: function(id) {
        //        store.set('id', id);
        //    },
        //    setPermissions: function(permissions) {
        //        store.set('permissions', permissions);
        //    },
        //    setUsername: function(username) {
        //        store.set('username', username);
        //    },
        //    setRoles: function(roles) {
        //        store.set('roles', roles);
        //    },
        //    setProfile: function(profile) {
        //        store.set('profile', profile);
        //    },
        //    hasPermission: function(permission) {
        //        for(var i = 0; i < this.getPermissions().length;i++) {
        //            if (this.getPermissions()[i] == permission) {
        //                return true;
        //            }
        //        }
        //
        //        return false
        //    },
        //    hasRole: function(role) {
        //        for(var i = 0; i < this.getRoles().length;i++) {
        //            if (this.getRoles()[i] == role) {
        //                return true;
        //            }
        //        }
        //
        //        return false
        //    },
        //    isAuthenticated: function() {
        //        return !!store.get('token') && !jwtHelper.isTokenExpired(store.get('token'));
        //    },
        //    invalidate: function() {
        //        delete $http.defaults.headers.common.Authorization;
        //        store.remove('id');
        //        store.remove('username');
        //        store.remove('token');
        //        store.remove('role');
        //        store.remove('profile');
        //    }
        //};
    }

})();