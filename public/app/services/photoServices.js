angular.module('photoServices', [])
.factory('Photo', [ '$http' ,function($http){
    photoFactory = {};

    photoFactory.getPhotos = function(){
        return $http.get('/api/photo', {});
    };

    photoFactory.sendPhotos = function(payload) {
        return $http.post('/api/photo', payload);
    }

    return photoFactory;
}]);