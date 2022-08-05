// JavaScript: Find a pair of elements from an specified array whose sum equals a specific target number


// Javascript program to check if there exists a pair
// in array whose sum results in x.

// Function to find and print pair
	function chkPair(A , size , x) {
	
		for (i = 0; i < (size - 1); i++) {
			for (j = (i + 1); j < size; j++) {
	
				if (A[i] + A[j] == x) {
					console.log("Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")");

					return true;
				}
			}
		}

		return false;
	}

		let A = [10,20,10,40,50,60,70];
		let x = 50;
		let size = A.length;

		if (chkPair(A, size, x)) {
			console.log("Valid pair exists");
		}
		else {
			console.log("No valid pair exists for " + x);
		}


// This code is contributed by Samim Hossain Mondal.

