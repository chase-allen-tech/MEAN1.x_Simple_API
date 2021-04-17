angular.module('photoControllers', ['photoServices'])
.controller('photoCtrl',['$http', '$location', '$timeout', 'Photo',
function($http, $location, $timeout, Photo){
    var app = this;
    app.init = function() {
        console.log("Entered");
        Photo.getPhotos().then(function(res) {
            // console.log(res);
            res_data = res.data.data;
            app.data = [];

            res_data.forEach(item => {
                var m = new Date();
                var datetime = m.getUTCFullYear() +"-"+ (m.getUTCMonth()+1) +"-"+ m.getUTCDate() + "T" + m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds() + "." + m.getUTCMilliseconds();
                app.data.push({
                    userid: item.userid,
                    product_code: item.code,
                    product_name: item.name,
                    product_time: item.time,
                    updated_at: datetime
                })
            });

            console.log(app.data[0]);
        });
    }
    app.init();

    app.save = function() {
        if(!confirm("Are you going to save the modified data?")) return;
        Photo.sendPhotos(app.data).then(function(res) {
            alert("Photos are sent successfully");
        })
    }
}]);
