var kthSmallest = function(matrix, k) {
    var len = matrix.length;
    var start = matrix[0][0];
    var end = matrix[len-1][len-1];
    
    while(start < end) {
        var mid = Math.floor(start + (end - start) / 2);
        var middle = search(matrix, mid);
        
        if(k > middle) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    
    return start;
};

function search(matrix, target) {
    var n = matrix.length;
    var row = n - 1;
    var col = 0;
    var count = 0;
    
    while(row >= 0 && col < n) {
        if(matrix[row][col] <= target) {
            count += row + 1;
            col++;
        } else {
            row--;
        }
    }
    
    return count;
}