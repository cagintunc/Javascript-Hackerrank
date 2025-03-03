const { boolean } = require("webidl-conversions");

function plusMinus(arr) {
    var zero = 0.0
    var minus = 0.0
    var plus = 0.0
    for(i in arr) {
        if(arr[i] < 0) {
            minus++;
        }
        else if(arr[i] == 0) {
            zero++;
        } else if(arr[i] >0) {
            plus++;
        }
    }
    console.log((plus/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
    console.log((minus/arr.length).toFixed(6))
}

function minMax(arr) {
    var maxSum = Number.MIN_SAFE_INTEGER;
    var minSum = Number.MAX_SAFE_INTEGER;
    for(let i=0; i < arr.length; i++) {
        var sum = 0;
        for(let j=0; j<arr.length; j++) {
            if(j != i) {
                sum += arr[j];
            }
        }
        if (maxSum < sum) {
            maxSum = sum;
        }
        if (minSum > sum) {
            minSum = sum;
        }
    }
    console.log("%f %f", minSum, maxSum);
}

function timeConversion(s) {
    var s_split = s.split(":");
    var isAM = s[s.length-2] + s[s.length-1] == "AM";
    var hour = "";
    var min = "";
    var second = "";
    if (isAM) {
        if(s_split[0] == "12") {
            hour = "00";
        } else {
            hour = s_split[0];
        }
        min = s_split[1];
        second = s_split[2].split("AM")[0];
    }
    else {
        if (s_split[0] == "12") {
            hour = s_split[0];
        } else {
            hour = (Number(s_split[0])+12).toString();
        }
        min = s_split[1];
        second = s_split[2].split("PM")[0];
    }
    return hour+":"+min+":"+second;
}

function matchingStrings(strings, queries) {
    // Write your code here
    var result = []
    for(var i = 0; i<queries.length; i++) {
        var number = 0
        for(var j = 0; j < strings.length; j++) {
            if (queries[i] == strings[j]) {
                number++;
            }
        }
        result.push(number);
    }
    return result;
}

function lonelyinteger(a) {
    // Write your code here
    for(var i = 0; i < a.length; i++){
        var is_found = false;
        for(var j = i+1; j < a.length; j++) {
            if(a[i] == a[j]) {
                a = a.filter(num => num != a[i]);
                is_found = true;
                i--;
            }
        }
        if(!is_found) {
            return a[i];
        }
    }
}


function flippingBits(n) {
    // Write your code here
    var unflipped = "";
    var flipped = "";
    var division = 3;
    var remain = 0;
    var result = 0;

    while(division >= 2) {
        division = Math.floor(n/2);
        remain = n%2;
        unflipped = remain.toString() + unflipped;
        n = division;
    }
    unflipped = division.toString() + unflipped;
    for(var i = 0; i < unflipped.length; i++) {
        if(unflipped[i] == "1") {
            flipped = "0" + flipped;
        } else {
            flipped = "1" + flipped;
        }
    }
    for(; i< 32; i++) {
        flipped = flipped + "1";
    }
    for(i=31; i>=0; i--) {
        if(flipped[i] == "1") {
            result += 2**i;
        }
    }
    return result;
}

function diagonalDifference(arr) {
    // Write your code here
    var left = 0;
    var right = 0;
    var len = arr.length;
    for(var i = 0; i < len; i++) {
        left += arr[i][i];
        right += arr[i][len-i-1];
    }
    return Math.abs(left-right);
}

function countingSort(arr) {
    // Write your code here
    var result = [];
    var hashMap = new Map();
    var maxVal = -1;
    for(var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if(maxVal < element) {
            maxVal = element;
        }
        if(hashMap.has(element)) {
            hashMap.set(element, hashMap.get(element)+1);
        } else {
            hashMap.set(element, 1);
        }
    }
    for(i = 0; i <= 100; i++) {
        if(hashMap.has(i)) {
            result.push(hashMap.get(i));
        } else {
            result.push(0);
        }
    }
    return result;
}

function pangrams(s) {
    // Write your code here
    s = s.toLowerCase();
    var hashMap = new Map();
    if(s.length < 26) {
        return "not pangram";
    }
    for(var i=0; i<s.length;i++) {
        if(!hashMap.has(s[i])) {
            hashMap.set(s[i], 1);
        }
    }
    
    if(hashMap.size == 27) {
        return "pangram";
    } else {
        return "not pangram";
    }
}

function twoArrays(k, A, B) {
    // Write your code here
    var tmp = [];
    for(var i = 0; i<A.length; i++) {
        tmp.push(A[i]);
    }
    tmp.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    while(tmp.length > 0) {
        var smaller = tmp.pop();
        var larger = B.pop();
        if (!(smaller+larger >= k)) {
            return "NO";
        }
    }
    if(!((B.length == 0) && (tmp.length == 0))) {
        return "NO";
    }
    return "YES";
}

function birthday(s, d, m) {
    // Write your code here
    var combinations = 0;
    var j = -1;
    var queue = [];
    var sum = 0;
    for(var i=0; i<s.length-m+1; i++) {
        if(s[i] <= d) {
            if(j == -1) {
                for(j=i; j < m+i; j++) {
                    queue.push(s[j]);
                    sum = sum + s[j];
                }j--;
            } else {
                var deleted = queue.shift();
                sum = sum - deleted;
                j++;
                queue.push(s[j]);
                sum = sum + s[j];
            }
            if(sum == d) {
                combinations++;
            }
        
        }
    }
    return combinations;
}

function stringXOR(s, t) {
    var result = "";
    for(var i = 0; i<s.length; i++) {
        if(s[i] == t[i]) {
            result = result + "0";
        } else {
            result = result + "1";
        }
    }
    return result;
}

function findMedian(arr) {
    // Write your code here
    arr.sort((a,b) => a-b);
    var len = arr.length;
    var medium_index = Math.floor(len/2);
    return arr[medium_index];
}

function flippingMatrix(matrix) {
    // Write your code here
    var sum = 0;
    for(var row=0; row<matrix.length/2; row++) {
        for(var col=0; col<matrix[0].length/2; col++) {
            sum += Math.max(
                matrix[row][col],
                matrix[matrix.length-row-1][col],
                matrix[row][matrix[0].length-col-1],
                matrix[matrix.length-row-1][matrix[0].length-col-1]
            );
        }
    }
    return sum;
}


//console.log(flippingMatrix([[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]]))
//console.log(findMedian([2,6,3,8,3,9,10]));
//minMax([1, 2, 0, -2, -2]);
//plusMinus([1, 2, 0, -2, -2])
//timeConversion("12:45:00AM");
//console.log(matchingStrings(["ab", "abc", "abcc", "bc", "abcc", "bccd"],
  //  ["ab", "bh", "bc", "abcc"]
//));
//console.log(lonelyinteger([1,1,2,3,3,4,2,5, 10, 5, 10]));
//console.log(flippingBits(1));
//console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]));
//console.log(countingSort([1, 2, 1, 3, 4,3, 5,12, 4]));
//console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
//console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));
//console.log(birthday([2,2,1,3,2,2,1,1], 4, 3));
//console.log(stringXOR("01011101","00101100"));

