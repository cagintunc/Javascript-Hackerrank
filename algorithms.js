const { arrayBuffer } = require("stream/consumers");
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

function staircase(n) {
    // Write your code here
    for(var i = 1; i < n+1; i++) {
        var line = "";
        for(var j=0;j<n-i;j++) {
            line += " ";
        }
        for(;j<n;j++) {
            line += "#";
        }
        console.log(line);
    }
}

function miniMaxSum(arr) {
    // Write your code here
    var min = Number.MAX_SAFE_INTEGER;
    var max = Number.MIN_SAFE_INTEGER;
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum+=arr[i];
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    minn = sum-max;
    maxx = sum-min;
    console.log(minn+" "+maxx);
}

function sockMerchant(n, ar) {
    // Write your code here
    var hashMap = new Map();
    var result = 0;
    for(var i = 0; i < ar.length; i++) {
        if(hashMap.has(ar[i])) {
            hashMap.set(ar[i], hashMap.get(ar[i])+1);
        } else {
            hashMap.set(ar[i],1);
        }
    }
    var keys = Array.from(hashMap.keys());
    for(var i = 0; i < keys.length; i++) {
        var current = hashMap.get(keys[i]);
        result += Math.floor(current/2);
    }
    return result;
}

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if(x1 == x2) {
        return "YES";
    }
    else if(((x1 < x2)&&(v1 <= v2))||((x2 < x1)&&(v2 <= v1))){
        return "NO";
    }
    else {
        return kangaroo(x1+v1, v1, x2+v2, v2);
    }
}

function getTotalX(a, b) {
    // Write your code here
    var max_1 = Number.MIN_SAFE_INTEGER;
    var min_2 = Number.MAX_SAFE_INTEGER;
    var occurrences = 0;
    
    for(var i = 0; i < a.length; i++) {
        var current = a[i];
        if(current > max_1) {
            max_1 = current;
        }
    }
    for(var i = 0; i < b.length; i++) {
        var current = b[i];
        if(current < min_2) {
            min_2 = current;
        }
    }
    for(var i = max_1; i <= min_2; i++) {
        var is_proper = true;
        for(var j = 0; j < a.length; j++) {
            if(i%a[j] != 0) {
                is_proper = false;
                break;
            } 
        }
        for(var j = 0; j < b.length; j++) {
            if(b[j]%i != 0) {
                is_proper = false;
                break;
            }
        }
        if(is_proper) {
            occurrences++;
        }
    }
    return occurrences;
}


function findZigZagSequence(a, n) {
    var mid = Math.floor(n/2);
    for(var i = mid; i > 0; i--) {
        var max = a[i];
        var max_index = i;
        for(var j = i-1; j >= 0; j--) {
            console.log(max + " " + a[j]);
            if(max < a[j]) {
                max_index = j;
                max = a[j];
            }
        }
        var temp = a[i];
        a[i] = max;
        a[max_index] = temp;
    }

    if(n%3 != 0) {
        mid++;
    }
    for(var i = mid; i < a.length-1; i++) {
        var max = a[i];
        var max_index = i;
        for(var j = i+1; j <a.length; j++) {
            if(a[j] > max) {
                max = a[j];
                max_index = j;
            }
        }
        var temp = a[i];
        a[i] = a[max_index];
        a[max_index] = temp;
    }
    return a;
}

function pageCount(n, p) {
    // Write your code here
    var is_odd = n%2 != 0;
    var from_last = 0;
    var min_from_last = 0;
    var from_init = 0;
    var min_from_init = 0;
    var tmp_var = 0;

    if(p == 1) {
        return 0;
    }

    from_init++;

    if (is_odd) {
        tmp_var = 2;
        if((p == n) ||(p == n-1)) {
            return 0;
        }
        from_last++;
    }
    else {
        tmp_var = 1;
        if(p == n) {
            return 0;
        }
        from_last++;
    }
    for(var i = 2; i < n+1; i=i+2) {
        if((p == i) || (p == i+1)) {
            min_from_init = from_init;
            break;
        }
        from_init++;
    }
    for(var i = n-tmp_var; i > 1; i=i-2) {
        if((p == i) ||(p == i-1)) {
            min_from_last = from_last;
            break;
        }
        from_last++;
    }
    return Math.min(from_init, from_last);
}

function towerBreakers(n, m) {
    // Write your code here
    var hashMap = new Map();
    
    for(var i=0;i<n;i++) {
        hashMap.set(i, m);
    }
    var p=0;
    while(true) {
        var is_it_found = false;
        if((p%2 == 0) && (n%2 != 0)) {
            for(var i = 0; i < n; i++) {
                var current = hashMap.get(i);
                if(current > 1) {
                    hashMap.set(i, 1);
                    is_it_found = true;
                    break;
                }
            }
        }
        else {
            for(var i = 0; i < n; i++) {
                var current = hashMap.get(i);
                for(var j = current-1; j > 1; j--) {
                    if(current%j == 0) {
                        is_it_found = true;
                        hashMap.set(i, hashMap.get(i)-j);
                        break;
                    }
                }
                if(is_it_found) {
                    break;
                }
            }
        }
        if(!is_it_found) {
            if(p%2 == 0) {
                return 2;
            }else {
                return 1;
            }
        }
        p++;
    }
}

function caesarCipher(s, k) {
    // Write your code here
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var upper_alphabet = alphabet.toUpperCase();
    if(k >= alphabet.length) {
        k = k%alphabet.length;
    }
    var rotated_alphabet = alphabet.substring(k, s.lenght)+alphabet.substring(0, k);
    var upper_rotated = rotated_alphabet.toUpperCase();

    var result = "";
    for(var i = 0; i <s.length; i++) {
        var char = s.charAt(i);
        if(upper_alphabet.includes(char)) {
            var index = upper_alphabet.indexOf(char);
            result += upper_rotated[index];
        } else if (alphabet.includes(char)){
            var index = alphabet.indexOf(char);
            result += rotated_alphabet[index];
        } else {
            result += char;
        }  
    }
    return result;
}

function maxMin(k, a) {
    var sorted_array = a.sort((a, b) => a-b)
    var minValue = Number.MAX_SAFE_INTEGER;
    for (var i=0; i < sorted_array.length-k+1; i++) {
        var difference = a[i+k-1] - a[i];
        if (minValue > difference) {
            minValue = difference;
        }
    }
    return minValue;
}

function dynamicArray(n, queries) {
    // Write your code here
    var arr = []
    for (var i = 0; i < n; i++) {
        arr.push([])
    }
    var lastAnswer = 0;
    for(var i=0; i < queries.length; i++) {
        var idx;
        current = queries[i];
        if(Number(current[0]) == 1) {
            idx = ((Number(current[1])^lastAnswer)) % n
            arr[idx].push(Number(current[2]))
        } else if(Number(current[0]) == 2) {
            idx = ((Number(current[1])^lastAnswer)) % n
            lastAnswer = arr[idx][Number(current[2]) % arr[idx].length]
            console.log(lastAnswer);
        }
    }
}

function gridChallenge(grid) {
    // Write your code here
    var hashMap = new Map();
    var characters = "abcdefghijklmnopqrstuvwxyz".split("");
    for(var i = 0; i < characters.length; i++) {
        hashMap[characters[i]] = i;
    }
    var new_array = [];
    for(var i=0; i<grid.length; i++) {
        var current = grid[i].split("");
        for(var k = 0; k < current.length-1; k++) {
            var min_index = k;
            var min_val = current[k];
            for(var g = k+1; g <current.length; g++) {
                if (hashMap[min_val] > hashMap[current[g]]) {
                    min_index = g;
                    min_val = current[g];
                }
            }
            current[min_index] = current[k];
            current[k] = min_val;
        }
        new_array.push(current);
    }
    
    var row = 0;
    var col = 0;
    var tmp_array = [];
    for (var i= 0; i < grid[0].length; i++) {
        tmp_array.push("");
    }

    while(row < grid.length) {
        tmp_array[col]= tmp_array[col] + new_array[row][col];
        col = (col+1) % grid[0].length;
        if (col==0) {
            row++;
        }
    }
    for(var row = 0; row < tmp_array.length; row++) {
        for(var col = 0; col <tmp_array[row].length-1; col++) {
            if(hashMap[tmp_array[row][col]] > hashMap[tmp_array[row][col+1]]) {
                return "NO";
            }
        }
    } 
    
    return "YES";
}



function findSubstring(string1, string2) {
    function hash(x) {
        var result = 0;
        for(var i = 0; i < x.length; i++) {
            var pow = x.length-i-1;
            result += map.get(x[i]) * (n ** pow);

        }
        return result;
    }
    
    var map = new Map();
    var n = 1;
    for(var i = 0; i < string1.length; i++) {
        if(!map.has(string1[i])) {
            map.set(string1[i], n);
            n++;
        }
    }

    var target = hash(string1);
    console.log("target: " + target);
    var latest_one = null;
    var tmp = 0;
    var i = 0;
    while(i < string2.length-string1.length+1) {
        var changed = 0;
        if (map.has(string2[i])) {
            console.log("burda111");
            
            if (!latest_one) {
                latest_one = map.get(string2[i]) * (n**pow);
                var t = 0;
                while(t < string1.length) {
                    var pow = string1.length - t - 1;
                    console.log("i:"+i+"  t:"+t+"  element:" + string2[i+t]);
                    if (map.has(string2[i+t])) {
                        tmp += map.get(string2[i+t]) * (n**pow);
                        console.log("tmp[t]: "+tmp);
                        t++;
                    } else {
                        latest_one = null;
                        i = i+t+1;
                        tmp=0;
                        console.log("new i:" + i + " tmp: " + tmp);
                        changed=1;
                        break;
                    }
                }
                console.log("first: "+ tmp);
            } else {
                console.log("burda2");
                if (tmp != 0) {
                    var new_char_index = i+string1.length-1;
                    console.log("new index: " + new_char_index);
                    if (map.has(string2[new_char_index])) {
                        tmp = (tmp - latest_one)* n + map.get(string2[new_char_index]);
                        console.log("sec: " + tmp);
                        latest_one = map.get(string2[i+1]) * (n**pow);
                    } 
                    else {
                        i = new_char_index+1;
                    }
                    
                
                }
                
            }

            if (tmp == target) {
                console.log("found! index="+i);
            }
            
        }
        else {
            console.log("burda222");
            latest_one = null;
        }
        if(!changed) {
            i++;
        } else {
            changed = 0;
        }
        console.log("last one: " + latest_one);
    }
}


function isUnique(x) {
    var myMap = new Map();
    for(var i = 0; i < x.length; i++) {
        if(myMap.has(x[i])) {
            return false;
        } else {
            myMap.set(x[i], 1);
        }
    }
    return true;
}

function isPermutation(string1, string2) {
    var hashMap = new Map();
    var n = 1;
    var target = 0.0;
    if(string1.length != string2.length) {
        return false;
    }
    for(var i = 0; i <string1.length; i++) {
        if(!hashMap.has(string1[i])) {
            hashMap.set(string1[i], n);
            target += 10*n;
            n++;
        } else {
            target += 10*hashMap.get(string1[i]);
        }
    }
    console.log("string1 value: " + target);
    var tmp = 0;
    for(var i = 0; i < string2.length; i++) {
        if(!hashMap.has(string2[i])) {
            return false;
        } else {
            tmp += 10*hashMap.get(string2[i]);
        }
    }
    console.log("string2 value: "+ tmp);
    return tmp == target;
}

function URLify(string) {
    var new_string = "";
    var is_emp_before = false;
    for(var i = 0; i < string.length; i++) {
        if(string[i] === " " && (!is_emp_before)) {
            new_string += "%20";
            is_emp_before = true;
        } else if(string[i] !== " ") {
            new_string += string[i];
            is_emp_before = false;
        } 
    }
    return new_string;
}

function palindromePermutation(string){
    var stack = [];
    var hashMap = new Map();
    var number = 0;
    for(var i=0; i<string.length; i++) {
        if (string[i] !== " ") {
            if(hashMap.has(string[i])) {
                hashMap.set(string[i], hashMap.get(string[i])+1);
            } else {
                hashMap.set(string[i], 1);
            }
            number++;
        }
    }
    
    for (const value of hashMap.values()) {
        if (value % 2 !== 0) {
            stack.push(value);
        }
    }
    return stack.length === 0 || ((stack.length === 1) && (number%2 !== 0));
}

function isOneAway(string1, string2) {
    if(Math.abs(string1.length - string2.length) > 1) {
        return false;
    }
    [string1, string2] = (function f(a, b) {
        if(a.length >= b.length) {
            return [a, b];
        } else {
            return [b, a];
        }
    })(string1, string2);
    
    var stack = [];
    var hash = new Map();
    var difference = 0;
    var previous = null;
    for(var i=0;i<string2.length; i++) {
        stack.push(string2[i]);
        if(!hash.has(string2[i])) {
            hash.set(string2[i], 1);
        }
    }
    var i=0; 
    while(i<string1.length) {
        if(!hash.has(string1[i])) {
            var current = stack.shift();
            difference++;
            if(i+1 < string1.length) {
                if(current == string1[i+1]) {
                   i=i+1; 
                }
            }
        } else {
            if(stack.length > 0) {
                var current = stack.shift();
                if(!(string1[i] === current)) {
                    previous = current;
                    difference++;
                    i--;
                }
            } else {
                break;
            }
        }
        i++;
        
    }
    console.log("difference: " + difference);
    return difference <= 1;
}

function stringCompression(string) {
    var compressed_length = 0;
    var repetition = 1;
    var previous = string[0];
    var compressed_string = "";
    for(var i=1; i<string.length; i++) {
        var current = string[i];
        if(previous === current) {
            repetition += 1;
        }
        else{
            compressed_length+=2;
            compressed_string += string[i-1]+repetition;
            repetition=1;
        }
        previous=current;
    }
    compressed_length+=2;
    compressed_string+= string[string.length-1]+repetition;
    if(compressed_length < string.length) {
        console.log(compressed_string);
    }
    else {
        console.log(string);
    }
}

function rotateMatrix(matrix) {
    var result = new Array(arrayLength=matrix.length);
    
    for(var r=0; r<matrix.length; r++) {
        row = new Array(arrayLength=matrix[r].length);
        for(var c=0; c<matrix[r].length; c++) {
            row[c] = matrix[(matrix.length-1)-c][r];
            
        }
        result.push(row);
    }
    return result;
}

function zeroMatrix(matrix) {
    var hash_c = new Map();
    var result = [];

    for(var r=0; r<matrix.length; r++) {
        var row = new Array(matrix[r].length);
        for(var c=0; c<matrix[r].length; c++) {
            
            if(matrix[r][c] === 0) {
                hash_c.set(c, 0);
                row = new Array(arrayLength=matrix[r].length).fill(0);
                break;
            } else {
                if(hash_c.has(c)) {
                    row[c] = 0;
                }
                else {
                    row[c] = matrix[r][c];
                }
            }
            
        }
        result.push(row);
    }
    for(var i=0; i<result.length; i++) {
        for(var j=0; j<result[i].length; j++) {
            if(hash_c.has(j)) {
                result[i][j] = 0;
            }
        }
    }
    return result;
}

function isSubstring2(string1, string2) {
    class Node {
        constructor(charr, nextt) {
            this.charr = charr;
            this.nextt = nextt;
        }
        next() {
            return this.nextt;
        }
        setNext(node) {
            this.nextt = node;
        }
        
    }
    class StringSub {
        
        constructor(string) {
            this.string = string;
            this.head = null;
            this.end = null;   
            var previous = new Node(null, null);
            for(var i=0; i<string.length; i++) {
                if(i===0) {
                    this.head = new Node(string[i], null);
                    previous = this.head;
                }
                else {
                    previous.setNext(new Node(string[i], null));
                    previous = previous.next();
                }
            }
            this.end = previous;
            this.end.setNext(this.head);
        }

        print() {
            var next = null;
            for(var i=0; i < string1.length; i++) {
                if(i===0) {
                    next = this.head;
                    console.log(next.charr);
                } else {
                    next = next.next();
                    console.log(next.charr);
                }
            }
        }

    }
    var linked_string = new StringSub(string1);
    var head = linked_string.head;
    for(var i=0; i<string2.length; i++) {
        for(var j=0; j<i; j++) {
            head = head.next();
        }
        var n_match = 0;
        for(var j=0; j<string2.length; j++) {
            if(head.charr === string2[j]) {
                head = head.next();
                n_match++;
            } else {
                n_match=0;
                break;
            }
            if(n_match === string1.length) {
                return true;
            }
        }
    }
    return false;
}

class Node {
    construction() {
        this.content = null;
        this.next = null;
    }
    
    setNext(next) {
        this.next = next;
    }
    setContent(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    getNext() {
        return this.next;
    }
}

class LinkedListSingle{
    constructor(list=null) {
        this.head = null;
        this.end = null;
        this.size = 0;

        if(list) {
            var tmp = null;
            for(var i=0; i<list.length; i++) {
                this.push(list[i]);
                this.size++;
            }
        }
    }

    push(content) { // O(1)
        
        if(!this.head) {
            this.head = new Node();
            this.head.setContent(content);
            this.end = this.head;
        } else {
            var newNode = new Node();
            newNode.setContent(content);
            if(this.end) {
                this.end.setNext(newNode);
                this.end = this.end.getNext();
            }
            else {
                this.end = newNode;
            }
            
        }
        this.size++;
    }
  
    dequeue() { // O(1)
        let result = this.head;
        this.head = this.head.getNext();
        this.size--;
        return result;
    }
    display() {
        var tmp = this.head;
        var string = "";
        while(tmp) {
            string+=tmp.getContent()
            tmp = tmp.getNext();
            if(tmp) 
                string+= " -> ";
        }
        return string;
    }

    removeAt(index) {
        var result = null;
        if(index < this.size) {
            var tmp = this.head;
            
            var prev = null;
            var i = 0;
            while(i < index) {
                prev = tmp;
                tmp = tmp.getNext();
                i++;
            }
            if(prev) {
                result = tmp.getContent();
                prev.setNext(tmp.getNext());
            } else {
                result = tmp.getContent();
                this.head = tmp.getNext();
            }
            this.size--;
    
        }
        else {
            console.log("ERROR! Index is out of the list size");
        }
        return result;
    }

    addAt(index, content) {
        var node = new Node();
        node.setContent(content);
        var prev = null;
        var tmp = this.head;
        var i = 0;
        while(i < index) {
            prev = tmp;
            tmp = tmp.getNext();
            i++;
        }
        if(prev) {
            prev.setNext(node);
            node.setNext(tmp);
        } else {
            node.setNext(this.head);
            this.head = node;
        }
        this.size++;
        
    }


    remove(content) { // O(N)
        var result = null;
        var tmp = this.head;
        var prev = null;
        while(tmp) {
            if(tmp.getContent() === content) {
                result = tmp;
                if(!prev) {
                    this.head = tmp.getNext();

                } else {
                    previous.setNext(tmp.getNext());
                }
                break;
            } else {
                tmp = tmp.getNext();
            }
        }
        this.size--;
        return result;
    }
    peek() { // O(1)
        var result = null;
        if(this.end) {
            result = this.end;
        }
        return result;
    }
}

class Stack {
    constructor() {
        this.head = new Node();
    }
    pop() { // O(1)
        if(this.head) {
            var result = this.head.getContent();
            this.head = this.head.getNext();
            return result;
        } else {
            console.log("Stack is empty!");
            return null;
        }
        
    }
    push(content) { // O(1)
        var new_node = new Node();
        new_node.setContent(content);
        new_node.setNext(this.head);
        this.head = new_node;
        
    }
    peek() { 
        return this.head.getContent();
    }
    isEmpty() {
        return this.head === null;
    }

}

class StackWithMin {
    constructor() {
        this.head = null;
        this.min = 100000;
    }
    push(content) { // O(N)
        if(this.head === null) {
            this.head = new Node();
            this.head.setContent(content);
        }
        else {
            var node = new Node();
            node.setContent(content);
            node.setNext(this.head);
            this.head = node;
        }
        if(this.min > content) {
            this.min = content;
        }
    }
    pop() {
        var result = null;
        if(this.head) {
            result = this.head.getContent();
            this.head = this.head.getNext();
            if(this.min == result) {
                var tmp = this.head;
                var new_min = 100000;
                while(tmp) {
                    var current_content = tmp.getContent();
                    if(current_content < new_min) {
                        new_min = current_content;
                    }
                    tmp = tmp.getNext();
                } 
                this.min = new_min;
            }
        } else {
            console.log("Stack is empty!");
        }
        return result;
    }
    peek() {
        return this.head.getContent();
    }
    isEmpty() {
        return this.head === null;
    }

}

function removeDups(list) { // O(N)
    var hash = new Map();
    var head = list.head;
    var prev = null;
    while(head) {
        if(hash.has(head.getContent())) {
            prev.setNext(head.getNext());
        } else {
            hash.set(head.getContent(), 0);
            prev = head;
        }
        head = head.getNext();      
    }
}

function getKLast(list, k) { // O(N)
    var hash = new Map();
    var head = list.head;
    var n = 1;

    while(head) {
        hash.set(n, head);
        head = head.getNext();
        n++;
    }
    return hash.get(n-k);
}

function deleteMiddleNode(node) { // O(N)
    while(node.getNext().getNext()) {
        node.setContent(node.getNext().getContent());
        node = node.getNext();
    }
    node.setContent(node.getNext().getContent());
    node.setNext(null);
} 

function partitionNode(node, partition) { // O(N)
    var left = null;
    var right = null;
    var right_head = right;
    var left_head = left;
    var current = node;

    while(current){
        if(current.getContent() >= partition) {
            if(right) {
                right.setNext(current);
                right = right.getNext();
            } else {
                right = current;
                right_head = right;
            }
        } else {
            if(left) {
                left.setNext(current);
                left = left.getNext();
            } else {
                left = current;
                left_head = left;
            }
        }
        current = current.getNext();
    }
    return [left_head, right_head];
}

function displayNode(node) { // O(N)
    var head = node;
    var results = "";
    while(head) {
        results += head.getContent();
        head = head.getNext();
        if(head) results += " -> "
    }
    console.log(results);
}

function sumListsReverse(number1, number2) { // O(A+B)
    var head = new Node();
    var head_head = head;
    var checksum = 0;
    while(number1 && number2) {
        var a = number1.getContent();
        var b = number2.getContent();
        var sum = a+b+checksum;
        var current = null;
        if(sum > 9) {
            checksum = 1;
            current = sum % 10;
        } else {
            checksum = 0;
            current = sum;
        }
        head.setContent(current);
        head.setNext(new Node());
        head = head.getNext();
        number1 = number1.getNext();
        number2 = number2.getNext();
        
    }
    while(number1) {
        var a = number1.getContent();
        var sum = a + checksum;
        var current = null;
        if(sum > 9) {
            current = sum % 10;
            checksum = 1;
        } else {
            current = sum;
            checksum = 0;
        }
        head.setContent(current);
        number1 = number1.getNext();
        if(number1) {
            head.setNext(new Node());
            head = head.getNext();
        }
        
    }

    while(number2) {
        var a = number2.getContent();
        var sum = a + checksum;
        var current = null;
        if(sum > 9) {
            current = sum % 10;
            checksum = 1;
        } else {
            current = sum;
            checksum = 0;
        }
        head.setContent(current);
        number2 = number2.getNext();
        if(number2) {
            head.setNext(new Node());
            head = head.getNext();
        }
    }
    if(checksum === 1) {
        head.setContent(1);
    }
    return head_head;
}


function sumListsForward(number1, number2) { // O(A+B)
    //2 -> 1 -> 2 -> 3 
    //     3 -> 8 -> 7
    var stack1 = [];
    var stack2 = [];
    var head1 = number1;
    var head2 = number2;
    var reversed1 = new Node();
    var rvs1_head = reversed1;
    var reversed2 = new Node();
    var rvs2_head = reversed2;

    while(head1) {
        stack1.push(head1.getContent());
        head1 = head1.getNext();
    }
    while(head2) {
        stack2.push(head2.getContent());
        head2 = head2.getNext();
    }
    var popped = stack1.pop();
    while(popped) {
        reversed1.setContent(popped);
        popped = stack1.pop();
        if(popped) {
            reversed1.setNext(new Node());
            reversed1 = reversed1.getNext();
        }
    }

    popped = stack2.pop();
    while(popped) {
        reversed2.setContent(popped);
        popped = stack2.pop();
        if(popped) {
            reversed2.setNext(new Node());
            reversed2 = reversed2.getNext();
        }
    }

    var reversed = sumListsReverse(rvs1_head, rvs2_head);
    var stack = [];
    var final_result = new Node();
    var head_final = final_result;

    while(reversed) {
        stack.push(reversed.getContent());
        reversed = reversed.getNext();
    }
    
    popped = stack.pop();
    while(popped) {
        final_result.setContent(popped);
        popped = stack.pop();
        if(popped) {
            final_result.setNext(new Node());
            final_result = final_result.getNext();
        }
    }
    return head_final;
}
function isPalindromeList(list) { // O(N)
    var current = list.head;
    var queue = [];
    var stack = [];
    while(current) {
        var cont = current.getContent()
        queue.push(cont);
        stack.push(cont);
        current = current.getNext();
    }
    while(queue.length > 0 && stack.length > 0) {
        var deq = queue.shift();
        var popped = stack.pop();
        if(deq !== popped) {
            return false;
        }
    }
    return true;
}

function swap(x1, x2) { // O(1)
    var tmp = x1;
    x1 = x2;
    x2 = tmp;
    return x1, x2;
}

function getLongestListFirst(list1, list2) { // O(A+B)
    var len_1 = 0;
    var len_2 = 0;
    var head_1 = list1.head;
    var head_2 = list2.head;
    while(head_1) {
        len_1++;
        head_1 = head_1.getNext();
    }
    while(head_2) {
        len_2++;
        head_2 = head_2.getNext();
    }
    if(len_2 > len_1) {
        list1, list2 = swap(list1, list2);
        len_1, len_2 = len_2, len_1;
    }
    return [list1, list2, len_1, len_2];
}

function getIntersection(list_1, list_2) { // O(A+B)
    var len_1 = 0; 
    var len_2 = 0;
    [list_1, list_2, len_1, len_2] = getLongestListFirst(list_1, list_2);
    var hash = new Map();
    var full_string = "1234567890*-qwertyuopasdfghjklizxcvbnm.,;_-?:"
    var base = full_string.length;
    for(var i=0; i<base;i++) {
        hash.set(full_string[i], i);
    }

    var head_1 = list_1.head;
    var head_2 = list_2.head;
    while(len_1 > len_2) {
        head_1 = head_1.getNext();
        len_1--;
    }
    
    var target_1 = 0;
    var target_2 = 0;
    var index = 0;
    var array_1 = [];
    var array_2 = [];

    while(head_1) {
        var add = (base**(len_1-index))*hash.get(head_1.getContent());
        array_1.push(add);
        target_1 += add;
        head_1 = head_1.getNext();
        index++;
    }
    index = 0;
    while(head_2) {
        var add = (base**(len_2-index))*hash.get(head_2.getContent());
        array_2.push(add);
        target_2 += add;
        head_2 = head_2.getNext();
        index++;
    }
    
    var start = 0;
    var is_found = false;

    for(index=0; index<array_1.length; index++) {
        if(target_1 == target_2) {
            start = index-1;
            is_found = true;
            break;
        }
        var deq1 = array_1[index];
        var deq2 = array_2[index];
        target_1 -= deq1;
        target_2 -= deq2;
    }
    if(!is_found) return null;
    var head2 = list_2.head;
    while(start >= 0) {
        head2 = head2.getNext();
        start--;
    }
    return head2;
}
//0,1,1,2,3,5,
function iterativeFibonnacci(x) { // O(N)
    var stack = new Stack();
    if(x == 0 || x == 1) return x;
    stack.push(0);
    stack.push(1)
    for(var i=2; i<x; i++) {
        var f1 = stack.pop();
        var f2 = stack.peek();
        stack.push(f1);
        stack.push(f1+f2);
    }
    return stack.peek();
}

class StackOfStacks {
    constructor(max) {
        this.max = max;
        this.head = null;
        this.stackOfStack = new Stack();
        this.total_count = 0;
        this.last_stack_count = 0;
        this.stackOfStackCount = 0;
        
    }
    push(content) {
        if(this.head === null)  {
            this.head = new Node();
            this.head.setContent(content);
            this.last_stack_count++;
        } else {
            if(this.last_stack_count === this.max) {
                this.stackOfStack.push(this.head);
                this.stackOfStackCount++;

                this.head = new Node();
                var new_node = new Node();
                new_node.setContent(content);
                new_node.setNext(this.head);
                this.head = new_node;
                this.last_stack_count = 1;
                
                
            } else {
                var new_node = new Node();
                new_node.setContent(content);
                new_node.setNext(this.head);
                this.head = new_node;
                this.last_stack_count++;

            }
        }
        this.total_count++;
    }
    pop() {
        var result = null;
        if(this.total_count === 0) {
            console.log("Stack is empty!");
        } else {
            if(this.last_stack_count === 1) {
                result = this.head.getContent();
                this.head = this.stackOfStack.pop();
                this.stackOfStackCount--;
                this.last_stack_count = this.stackOfStack.last_stack_count;

            } else {
                result = this.head.getContent();
                this.head = this.head.getNext();
                this.last_stack_count--;
            }

            this.total_count--;
        }
        return result;
    }
    popAt(index) {
        var counter = 0;
        var tmp_stack = this.stackOfStack;
        var prev = null;
        var tmp_head = tmp_stack.pop();
        for(;counter < index-1; counter++){
            prev = tmp_head;
            tmp_head = tmp_stack.pop();
            if(!tmp_stack) {
                console.log("Index out of range!");
                return;
            }
                
        }
        var result = null;
        if(prev === null){
            result = tmp_head.getContent();
            tmp_head = tmp_head.getNext();
        } else {
            prev.setNext(tmp_head.getNext());
            result = tmp_head.getContent();
        }
    
        return result;
    }
}

function calculateSolution(expression) {
    var stack_operands = new LinkedListSingle();
    var stack_operators = new LinkedListSingle();
    var index = 0;
    var prev = "";

    while(index < expression.length) {
        if(expression[index] === "/" || expression[index] === "*" || 
            expression[index] === "-" || expression[index] === "+"){
            stack_operators.push(expression[index]);
            stack_operands.push(parseInt(prev));
            
            prev = "";
        } else {
            prev = prev + expression[index];
        }
        index++;
    }
    stack_operands.push(parseInt(prev));
    prev = "";
    
    index = 0;
    var operand_1 = null;
    var operand_2 = null;
    var operator = null;
    while(index < stack_operators.size) {
        operand_2 = stack_operands.removeAt(index+1);
        operand_1 = stack_operands.removeAt(index);
        operator = stack_operators.removeAt(index);

        var result = null;
        if(operator === "/") {
            result = parseFloat(operand_1/operand_2);
            stack_operands.addAt(index, result);
            index--;
        }
        else if(operator === "*") {
            result = parseFloat(operand_1*operand_2); 
            stack_operands.addAt(index, result);
            index--;
        }
        else {
            stack_operands.addAt(index, operand_1);
            stack_operands.addAt(index+1, operand_2);
            stack_operators.addAt(index, operator);
        }
        index++;
        
    } 
    
    index = 0;
    while(index < stack_operators.size) {
        operand_2 = stack_operands.removeAt(index+1);
        operand_1 = stack_operands.removeAt(index);
        operator = stack_operators.removeAt(index);
        
        var result = null;
        if(operator === "+") {
            result = parseFloat(operand_1+operand_2);
            index--;
        } else if(operator === "-") {
            result = parseFloat(operand_1-operand_2);
            index--;
        }
        stack_operands.addAt(index, result);
        index++;
    }
    return stack_operands.removeAt(0);
}


class BinaryTreeNodeSingleLink {
    constructor(content=null, left=null, right=null){
        this.content = content;
        this.left = left;
        this.right = right;
    }
    setLeft(left) {
        this.left = left;
    }
    setRight(right) {
        this.right = right;
    }
    setContent(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    getLeft() {
        return this.left;
    }
    getRight() {
        return this.right;
    }
}

class BinarySearchTree { // Single Linked Node is used
    constructor() {
        this.root = null;
        this.number_of_nodes = 0;
    }
    add(content) {
        var node = new BinaryTreeNodeSingleLink(content=content);
        if(this.root === null) {
            this.root = node;
        } else {
            var tmp = this.root;
            var parent = null;
            while(tmp) {
                parent = tmp;
                if(tmp.getContent() < content) 
                    tmp = tmp.getRight();
                else tmp = tmp.getLeft();
            }
            if(parent.getContent() < content) {
                parent.setRight(node);
            } else {
                parent.setLeft(node);
            }
        }
    }
    inOrder(node=this.root) {
        if(node != null) {
            this.inOrder(node.getLeft());
            console.log(node.getContent());
            this.inOrder(node.getRight());
        }
    }
    pre_order(node=this.root) {
        if(node != null) {
            console.log(node.getContent());
            this.pre_order(node.getLeft());
            this.pre_order(node.getRight());
        }
    }
    post_order(node=this.root) {
        if(node != null) {
            this.post_order(node.getLeft());
            this.post_order(node.getRight());
            console.log(node.getContent());
        }
    }
}

class BinaryTreeNodeDoubleLink {
    constructor(content=null,
        parent=null,
        left=null,
        right=null
    ) {
        this.content = content;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }

    setParent(parent) {
        this.parent = parent;
    }

    setLeft(left) {
        this.left = left;
    }

    setRight(right) {
        this.right = right;
    }

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    getParent() {
        return this.parent;
    }

    getLeft() {
        return this.left;
    }

    getRight() {
        return this.right;
    }

}


class MaxHeap {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(content) {
        if(this.root === null) {
            this.root = new BinaryTreeNodeDoubleLink(content=content);
        } else {
            var new_node = new BinaryTreeNodeDoubleLink(content=content);
            var parent = this.getParentOfFirstSpot(this.root);
            if(!parent.getLeft()) {
                parent.setLeft(new_node);
            } else {
                parent.setRight(new_node);
            }
            new_node.setParent(parent);
            this.bubble_up(new_node);
        }
        this.size++;
    }

    bubble_up(node) {
        var parent = null;
        while(node.getParent()) {
            parent = node.getParent();
            if(parent.getContent() < node.getContent()) {
                var tmp = parent.getContent();
                parent.setContent(node.getContent());
                node.setContent(tmp);
            }
            node = parent;
        }
    }

    getParentOfFirstSpot(root=this.root) {
        var parent = null;
        var tmp = root;
        while(tmp) {
            parent = tmp;
            tmp = tmp.getRight();
        }
        tmp = parent;
        while(tmp) {
            parent = tmp;
            tmp = tmp.getLeft();
        }
        return parent;
    }

    inOrder(root=this.root) {
        if(root === null) {
            return;
        } else {
            this.inOrder(root.getLeft());
            console.log(root.getContent());
            this.inOrder(root.getRight());
        }
    }

    preOrder(root=this.root) {
        if(root === null) {
            return;
        } else {
            console.log(root.getContent());
            this.preOrder(root.getLeft());
            this.preOrder(root.getRight());
        }
    }

}

class MinHeap {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(content) { // O(logN)
        if(this.root === null) {
            this.root = new BinaryTreeNodeDoubleLink(content=content);
        }
        else {
            var new_node = new BinaryTreeNodeDoubleLink(content=content);
            var parent = this.getParentOfFirstSpot(this.root);
            if(parent.getLeft()===null) {
                parent.setLeft(new_node);
            } else {
                parent.setRight(new_node);
            }
            new_node.setParent(parent);
            this.bubble_up(new_node);
            
        }
        this.size++;
    }
    bubble_up(node) {  // O(logN)
        var parent = node.getParent();
        while(parent) {
            if(parent.getContent() > node.getContent()) {
                var tmp = parent.getContent();
                parent.setContent(node.getContent());
                node.setContent(tmp);
                node = parent;
                parent = parent.getParent();
            } else {
                break;
            } 
        }
    }

    getParentOfFirstSpot(tmp) { // O(logN)
        var parent = null;
        while(tmp) {
            parent = tmp;
            tmp = tmp.getRight();
        }
        tmp = parent;
        while(tmp) {
            parent = tmp;
            tmp = tmp.getLeft();
        }
        return parent;
    }
    
    getMin() { // O(1)
        return this.root.getContent();
    }

    bubble_down(node) { // O(logN)
        while(node.getRight()) {
            var left = node.getLeft();
            var right = node.getRight();
            if(left.getContent() >= right.getContent()) {
                if(node.getContent() > right.getContent()) {
                    var tmp = node.getContent();
                    node.setContent(right.getContent());
                    right.setContent(tmp);
                    node = node.getRight();
                } else {
                    return;
                }
            } else {
                if(node.getContent() > left.getContent()) {
                    var tmp = node.getContent();
                    node.setContent(left.getContent());
                    left.setContent(tmp);
                    node = node.getLeft();
                } else {
                    return;
                }
            }
        }
        while(node.getLeft()) {
            
            var left = node.getLeft();
            if(left.getContent() < node.getContent()) {
                var tmp = left.getContent();
                left.setContent(node.getContent());
                node.setContent(tmp);
            }
            node = node.getLeft();
        }
    }

    extractMin() { // O(logN)
        var result = this.root.getContent();
        var last = this.getParentOfFirstSpot(this.root);
        this.root.setContent(last.getContent());
        var parent = last.getParent();
        if(parent.getRight() && parent.getRight().getContent() === last.getContent()) {
            parent.setRight(null);
        } else {
            parent.setLeft(null);
        }
        last.setParent(null);
        
        this.bubble_down(this.root);
        return result;
    }

    postOrder(node=this.root) {
        if(node != null) {
            this.postOrder(node.getLeft());
            this.postOrder(node.getRight());
            console.log(node.getContent());
        }
    }
    

}

var minHeap = new MaxHeap();
minHeap.insert(29);
minHeap.insert(6);
minHeap.insert(30);
minHeap.insert(12);
minHeap.insert(3);
minHeap.preOrder();
//console.log(" ");
//minHeap.extractMin();
//minHeap.preOrder();

//console.log(" ");
//minHeap.extractMin();
//minHeap.postOrder();

//var binaryTree = new BinarySearchTree();
//binaryTree.add(5);
//binaryTree.add(34);
//binaryTree.add(3);
//binaryTree.add(4);
//binaryTree.add(10);

//binaryTree.inOrder();
//binaryTree.pre_order();

//console.log(calculateSolution("12*3+54-4/34"));
//list_1 = new LinkedListSingle(["1","2","9","1","a","8","4","8"]);
//console.log(iterativeFibonnacci(8));
//list_2 = new LinkedListSingle(["1","1","8","4","8"]);
//console.log("Before:");
//
//console.log("After:");
//var result = sumListsForward(list_1.head, list_2.head);
//displayNode(result);
//var node = getIntersection(list_1, list_2);
//if(node) {
  //  displayNode(node);
//}
//console.log("K-th from last: "+getKLast(list, 3).getContent());
//console.log(isSubstring2("waterbottle", "erbottlewat"));
//console.log(zeroMatrix([[0,1,2,5, 11],[1,3,4,5, 3],[6,7,0,8,6], [3,5,5,7,2], [3, 7, 1, 34,-1]]));
//console.log(rotateMatrix([[0,1,2],[3,4,5],[6,7,8]]))
//stringCompression("abbbaaacc");
//console.log(isOneAway("pale", "bale"));
//console.log(palindromePermutation("tactttot coa"));
//console.log(URLify("hello cagin   ben j "));
//console.log(isPermutation("abcdaabc", "cabbadad"));
//console.log(isUnique("as0dfghjl234567890"));
//findSubstring("bb", "abbabbaabbbc");
//console.log(gridChallenge(["nyx",  "ynx","xyt"]));
//dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3],[2, 1, 0],[2, 1, 1]])
//console.log(maxMin(3, [100,200,300,350,400,401,402]));
//console.log(caesarCipher("DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.", 45))
//console.log(towerBreakers(301,611791));
//console.log(pageCount(100, 5));
//console.log(findZigZagSequence([1,5,2,16,3,7, 56], 5));
//console.log(getTotalX([2, 6, 4], [12, 24, 36]));
//console.log(kangaroo(0, 3, 4, 2));
//sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
//miniMaxSum([7, 69, 2, 221, 8974]);
//staircase(4);
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

