/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    let res= arr.length-1;
        return arr[res]
};

 const arr = [1, 2, 3];
 arr.last(); // 3