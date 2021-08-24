function partition(arr, callback) {
    return arr.reduce(acc, next){
        if (callback(next)) {
            arr[0].push(next);
        } else {
            arr[1].push(next)
        }
        return arr
    }, [[], []])
}