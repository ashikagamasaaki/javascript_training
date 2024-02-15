// foreach
var foreach_data = [2,3,4,5]
foreach_data.forEach(function(value, index, array){
    console.log(value * value)
});


// map
var map_data = [2,3,4,5]
var map_result = map_data.map(function(value, index, array){
    return value * value;
})
console.log(map_result)


// some
var some_data = [2,4,7,8,16,25]
var some_result = some_data.some(function(value, index, array){
    return value % 3 == 0;
})

if(some_result){
    console.log('3の倍数が見つかりました。')
} else {
    console.log('3の倍数が見つかりませんでした。')
}


// filter
var filter_data = [4,9,16,25]
var filter_result = filter_data.filter(function(value, index, array){
    return value % 2 == 0;
})
console.log(filter_result)


// sort
var sort_data = [5,25,10]
console.log(sort_data.sort())
console.log(sort_data.sort(function(x, y){
    return x - y;
}))