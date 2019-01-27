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

    }
})();