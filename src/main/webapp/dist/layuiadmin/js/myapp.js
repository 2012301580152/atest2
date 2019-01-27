(function () {
    G = {};
    G.groupBy = function (array, f) {
        var groups = {};
        array.forEach( function( o ) {
            group = JSON.stringify( f(o) );
            groups[group] = groups[group] || [];
            groups[group].push( o );
        });
        return Object.keys(groups).map( function( group ) {
            return groups[group];
        });
    };

    G.groupBy2 = function (array, listgroup) {
        var map = {};
        var tempmap = map;
        for(var i = 0; i < array.length; i++){
            for (var j = 0; j < listgroup.length; j++) {
                for(var n = 0; n < j; n++){

                    if(tempmap[listgroup[n]]==undefined){
                        tempmap.put(array[i][listgroup[n]],null);
                    }
                    tempmap = map[array[i][listgroup[n]]]
                }
            }
        }
    };

    Array.prototype.in_array = function(e) {
        for(i=0;i<this.length;i++) {
            if(this[i] == e)
                return true;
        }
        return false;
    };

    G.success = function (data, target) {
        var str = angular.toJson(data, true);   // 用angular的格式化json的方法，更为清晰
        target = str;
        console.log(target);
    };
    G.error =  function error(response){
        console.log("请求失败");
    };



})();