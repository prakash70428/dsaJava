window.problemsData = {
    // -------------------------------------------------------------
    // CHAPTER 1.1: Getting Started
    // -------------------------------------------------------------

    "1_1_1": {
        explanation: `In this problem, you are required to print a simple message "Hello, World!" to the standard output. This is usually the first program you write in any language to verify that your environment is set up correctly.`,
        explanationList: [
            "Understand the main method which serves as the entry point of the program.",
            "Learn how to use standard output streams (e.g., System.out.println).",
            "Familiarize yourself with basic syntax like semicolons and curly braces."
        ],
        io: [
            { input: "No Input", output: `"Hello World"` }
        ],
        constraints: ["Output must exactly match the required string casing."],
        java: `class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World" << endl;\n    return 0;\n}`,
        python: `print("Hello World")`,
        js: `console.log("Hello World");`,
        screenshots: [
            "assets/ss_1_1_1_1.png"
        ],
        homework: "✏️ 1. Modify the program to print your own name instead of 'Hello World' on a new line.\n✏️ 2. Try to print multiple lines of text using a single print statement.",
        youtubeId: "UmnCZ7-9yJU",
        funFact: "The 'Hello World' program was created in 1978 in the famous book 'The C Programming Language' by Brian Kernighan and Dennis Ritchie. 🌍"
    },

    "1_1_2": {
        explanation: "In this problem, you need to calculate and print the sum of two integer variables. It introduces the concept of storing values in memory and applying basic arithmetic operations.",
        explanationList: [
            "Declare variables with appropriate data types (e.g., int).",
            "Use the addition arithmetic operator (+) to calculate the sum.",
            "Print the result concatenated with a readable message."
        ],
        io: [
            { input: "a = 10, b = 20", output: "30", explanation: "10 + 20 gives 30." }
        ],
        constraints: [
            "-10^4 <= a, b <= 10^4",
            "Result should fit within standard integer limits."
        ],
        java: `class Solution {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        int sum = a + b;\n        System.out.println("The sum is: " + sum);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    cout << "The sum is: " << (a + b) << endl;\n    return 0;\n}`,
        python: `a = 10\nb = 20\nprint(f"The sum is: {a + b}")`,
        js: `let a = 10;\nlet b = 20;\nconsole.log("The sum is: " + (a + b));`,
        screenshots: [
            "assets/ss_1_1_2_1.png"
        ],
        homework: "✏️ 1. Write a program that takes three numbers, multiplies them completely, and prints the final product.\n✏️ 2. Find the difference between a and b.",
        youtubeId: "VbMJWQgeGus",
        funFact: "At the hardware level, computers use binary logic gates (like XOR and AND gates inside an ALU) to compute the sum of two numbers incredibly fast! ⚡"
    },

    "1_1_3": {
        explanation: "You are given a person's age as an integer. Your task is to check whether the person is eligible to vote. A person is considered eligible if their age is 18 or greater.",
        explanationList: [
            "Learn how to use Conditional Statements (if-else).",
            "Understand relational operators like >= (greater than or equal to).",
            "Construct logic based on boolean values (true/false) to branch code execution."
        ],
        io: [
            { input: "age = 20", output: "Eligible to Vote", explanation: "20 is greater than or equal to 18." },
            { input: "age = 16", output: "Not Eligible", explanation: "16 is strictly less than 18." }
        ],
        constraints: ["0 <= age <= 120"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int age = 20;\n        if (age >= 18) {\n            System.out.println("Eligible to Vote");\n        } else {\n            System.out.println("Not Eligible");\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 20;\n    if (age >= 18) {\n        cout << "Eligible to Vote" << endl;\n    } else {\n        cout << "Not Eligible" << endl;\n    }\n    return 0;\n}`,
        python: `age = 20\nif age >= 18:\n    print("Eligible to Vote")\nelse:\n    print("Not Eligible")`,
        js: `let age = 20;\nif (age >= 18) {\n    console.log("Eligible to Vote");\n} else {\n    console.log("Not Eligible");\n}`,
        screenshots: [
            "assets/ss_1_1_3_1.png"
        ],
        homework: "✏️ 1. Use the modulo operator (%) to check whether a given number is Even or Odd.\n✏️ 2. Write a program to check if a person is a senior citizen (Age >= 60).",
        youtubeId: "vBmwzED01p4",
        funFact: "Did you know? The youngest voting age in the world is 16, which is used in countries like Brazil, Austria, and Argentina! 🗳️"
    },

    "1_1_4": {
        explanation: "You are given three distinct integer numbers. Your task is to find and print the largest number among them. This introduces compound conditional logic.",
        explanationList: [
            "Use Logical AND (&&) to combine multiple relational checks.",
            "Compare the first number against BOTH the second and third numbers simultaneously.",
            "Repeat using else-if for the second number, falling back to the third number in the else block."
        ],
        io: [
            { input: "a = 15, b = 42, c = 7", output: "42", explanation: "42 is strictly greater than both 15 and 7." },
            { input: "a = -5, b = -10, c = -2", output: "-2", explanation: "-2 is the largest negative number." }
        ],
        constraints: ["-10^9 <= a, b, c <= 10^9", "Assume all three numbers can be distinct or equal."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int a = 15, b = 42, c = 7;\n        if (a >= b && a >= c) {\n            System.out.println(a);\n        } else if (b >= a && b >= c) {\n            System.out.println(b);\n        } else {\n            System.out.println(c);\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 42, c = 7;\n    if (a >= b && a >= c) cout << a << endl;\n    else if (b >= a && b >= c) cout << b << endl;\n    else cout << c << endl;\n    return 0;\n}`,
        python: `a, b, c = 15, 42, 7\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)`,
        js: `let a = 15, b = 42, c = 7;\nif (a >= b && a >= c) console.log(a);\nelse if (b >= a && b >= c) console.log(b);\nelse console.log(c);`,
        screenshots: ["assets/ss_1_1_4_1.png"],
        homework: "✏️ 1. Write a program to find the SMALLEST of three numbers.\n✏️ 2. Write a program to find the middle number (the median) out of 3 distinct numbers.",
        youtubeId: "dummyVideoId4",
        funFact: "Real World: Database search engines use highly optimized tree structures (like B-Trees) heavily reliant on comparators like these to route gigantic datasets efficiently! 🌲"
    },

    "1_1_5": {
        explanation: "You are given the marks of a student. Your task is to determine the grade of the student based on specific ranges. For example, if marks > 90, grade is 'A', etc.",
        explanationList: [
            "Use else-if ladders to check multiple conditions sequentially.",
            "Understand the flow of execution: once a true condition is found, the rest are skipped.",
            "Always include a fallback 'else' block for edge cases."
        ],
        io: [
            { input: "marks = 85", output: `"Grade B"`, explanation: "85 falls in the 80 to 90 bracket." },
            { input: "marks = 40", output: `"Fail"`, explanation: "Marks less than 50 are usually failing." }
        ],
        constraints: ["0 <= marks <= 100"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int marks = 85;\n        if (marks > 90) {\n            System.out.println("Grade A");\n        } else if (marks > 80) {\n            System.out.println("Grade B");\n        } else if (marks > 70) {\n            System.out.println("Grade C");\n        } else {\n            System.out.println("Fail");\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int marks = 85;\n    if (marks > 90) cout << "Grade A" << endl;\n    else if (marks > 80) cout << "Grade B" << endl;\n    else if (marks > 70) cout << "Grade C" << endl;\n    else cout << "Fail" << endl;\n    return 0;\n}`,
        python: `marks = 85\nif marks > 90:\n    print("Grade A")\nelif marks > 80:\n    print("Grade B")\nelif marks > 70:\n    print("Grade C")\nelse:\n    print("Fail")`,
        js: `let marks = 85;\nif (marks > 90) console.log("Grade A");\nelse if (marks > 80) console.log("Grade B");\nelse if (marks > 70) console.log("Grade C");\nelse console.log("Fail");`,
        screenshots: ["assets/ss_1_1_5_1.png"],
        homework: "✏️ 1. Ask for 5 subject marks, calculate average, and then assign a grade.\n✏️ 2. Try doing this using a switch-case statement by doing integer division (marks/10).",
        youtubeId: "dummyVideoId5",
        funFact: "Real World: Schools and universities use automated batch processing systems built on these exact if-else logic trees to generate millions of report cards simultaneously! 🏫"
    },

    "1_1_6": {
        explanation: "Given an integer N, count the number of digits present in N. For example, 1234 has 4 digits. It forms the basis of number extraction.",
        explanationList: [
            "Use a while loop that continues as long as N > 0.",
            "Divide N by 10 (N = N / 10) in each iteration to strip off the last digit.",
            "Maintain a counter to track how many times the loop runs."
        ],
        io: [
            { input: "N = 12345", output: "5", explanation: "There are 5 digits in 12345." },
            { input: "N = 7", output: "1", explanation: "Only a single digit is present." }
        ],
        constraints: ["0 <= N <= 10^9", "Time Complexity should be O(log10(N))"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 12345;\n        int count = 0;\n        while (n != 0) {\n            n /= 10;\n            count++;\n        }\n        System.out.println(count);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 12345, count = 0;\n    while (n != 0) {\n        n /= 10;\n        count++;\n    }\n    cout << count << endl;\n    return 0;\n}`,
        python: `n = 12345\ncount = 0\nwhile n != 0:\n    n //= 10\n    count += 1\nprint(count)`,
        js: `let n = 12345;\nlet count = 0;\nwhile (n !== 0) {\n    n = Math.floor(n / 10);\n    count++;\n}\nconsole.log(count);`,
        screenshots: ["assets/ss_1_1_6_1.png"],
        homework: "✏️ 1. Try finding number of digits using Math.log10(N) approach in O(1) time.\n✏️ 2. Write a program to count how many ZEROES exist in a number.",
        youtubeId: "dummyVideoId6",
        funFact: "Real World: Credit Card companies use exact length digit counts (e.g. 16 for Visa) to validate card authenticity before even hitting the payment gateway network! 💳"
    },

    "1_1_7": {
        explanation: "Given an integer N, print all its digits individually from left to right (front to back) on new lines.",
        explanationList: [
            "First, calculate the divisor needed to extract the leftmost digit (e.g. 10^(count-1)).",
            "Use N / div to get the first digit, print it.",
            "Use N % div to remove that digit from N.",
            "Reduce the divisor by dividing it by 10, repeat until divisor becomes 0."
        ],
        io: [
            { input: "N = 657843", output: "6\n5\n7\n8\n4\n3" }
        ],
        constraints: ["1 <= N <= 10^9", "Important: Avoid converting the number to a string first!"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 657843;\n        int div = 1;\n        int temp = n;\n        while (temp >= 10) {\n            div *= 10;\n            temp /= 10;\n        }\n        while (div > 0) {\n            int q = n / div;\n            System.out.println(q);\n            n %= div;\n            div /= 10;\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 657843;\n    int div = 1, temp = n;\n    while (temp >= 10) {\n        div *= 10;\n        temp /= 10;\n    }\n    while (div > 0) {\n        cout << (n / div) << endl;\n        n %= div;\n        div /= 10;\n    }\n    return 0;\n}`,
        python: `n = 657843\ndiv = 1\ntemp = n\nwhile temp >= 10:\n    div *= 10\n    temp //= 10\nwhile div > 0:\n    print(n // div)\n    n %= div\n    div //= 10`,
        js: `let n = 657843;\nlet div = 1;\nlet temp = n;\nwhile(temp >= 10){\n    div *= 10;\n    temp = Math.floor(temp / 10);\n}\nwhile(div > 0){\n    console.log(Math.floor(n / div));\n    n %= div;\n    div = Math.floor(div / 10);\n}`,
        screenshots: ["assets/ss_1_1_7_1.png"],
        homework: "✏️ 1. Print all digits purely in reverse (from right to left).\n✏️ 2. Write a program to sum up all the digits individually.",
        youtubeId: "dummyVideoId7",
        funFact: "Real World: Barcode scanners work conceptually identical to this! They read patterns sequentially front-to-back to extract the underlying product code digit by digit! 🛒"
    },

    "1_1_8": {
        explanation: "Rotate a number N by K positions to the right. If K is negative, rotate to the left. A rotation means digits falling off one end get attached to the other end.",
        explanationList: [
            "Find the number of digits in N (let's say len).",
            "Handle edge cases for K by doing K = K % len (and if K < 0, add len).",
            "Split the number into two parts: a multiplier and a divisor using Math pow(10, K).",
            "Compute new number: (rem * multiplier) + quotient."
        ],
        io: [
            { input: "N = 562984, K = 2", output: "845629", explanation: "'84' goes strictly from the end to the front." },
            { input: "N = 562984, K = -1", output: "629845", explanation: "'5' goes from front to end (left rotation)." }
        ],
        constraints: ["0 <= N <= 10^9", "-10^9 <= K <= 10^9"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 562984, k = 2;\n        int temp = n, len = 0;\n        while(temp > 0){ temp/=10; len++; }\n        k = k % len;\n        if(k < 0) k += len;\n        int div = (int)Math.pow(10, k);\n        int mult = (int)Math.pow(10, len - k);\n        int rem = n % div;\n        int q = n / div;\n        int ans = (rem * mult) + q;\n        System.out.println(ans);\n    }\n}`,
        cpp: `#include <iostream>\n#include<cmath>\nusing namespace std;\n\nint main() {\n    int n = 562984, k = 2;\n    int temp = n, len = 0;\n    while(temp > 0){ temp/=10; len++; }\n    k = k % len;\n    if(k < 0) k += len;\n    int div = pow(10, k);\n    int mult = pow(10, len - k);\n    int ans = (n % div) * mult + (n / div);\n    cout << ans << endl;\n    return 0;\n}`,
        python: `n = 562984\nk = 2\ntemp, length = n, 0\nwhile temp > 0:\n    temp //= 10\n    length += 1\nk = k % length\nif k < 0:\n    k += length\ndiv = 10**k\nmult = 10**(length - k)\nans = (n % div) * mult + (n // div)\nprint(ans)`,
        js: `let n = 562984, k = 2;\nlet temp = n, len = 0;\nwhile(temp > 0){ temp = Math.floor(temp/10); len++; }\nk = k % len;\nif(k < 0) k += len;\nlet div = Math.pow(10, k);\nlet mult = Math.pow(10, len - k);\nlet ans = (n % div) * mult + Math.floor(n / div);\nconsole.log(ans);`,
        screenshots: ["assets/ss_1_1_8_1.png"],
        homework: "✏️ 1. Try rotating a given Array by K positions instead of a Number.\n✏️ 2. Form the inverse of a number based on positions.",
        youtubeId: "dummyVideoId8",
        funFact: "Real World: Cryptography uses extensive bit and byte rotation natively inside hardware (like SHA-256) to completely obscure network requests and passwords securely! 🔐"
    },

    "1_1_9": {
        explanation: "Calculate the Greatest Common Divisor (GCD) and Least Common Multiple (LCM) of two numbers. Use the Euclidean division algorithm for perfect O(log(min(a,b))) complexity.",
        explanationList: [
            "While one number % other is not zero, keep updating dividend with divisor and divisor with remainder.",
            "When remainder hits 0, the last divisor is the GCD.",
            "Calculate LCM extremely fast using mathematical relation: LCM = (n1 * n2) / GCD."
        ],
        io: [
            { input: "a = 36, b = 24", output: "GCD = 12\nthe LCM is = 72" }
        ],
        constraints: ["1 <= a, b <= 10^9"],
        java: `class Solution {\n    public static void main(String[] args) {\n        long n1 = 36, n2 = 24;\n        long o1 = n1, o2 = n2;\n        while(n1 % n2 != 0){\n            long rem = n1 % n2;\n            n1 = n2;\n            n2 = rem;\n        }\n        long gcd = n2;\n        long lcm = (o1 * o2) / gcd;\n        System.out.println("GCD = " + gcd + "\\nLCM = " + lcm);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    long n1 = 36, n2 = 24;\n    long o1 = n1, o2 = n2;\n    while(n1 % n2 != 0){\n        long rem = n1 % n2;\n        n1 = n2;\n        n2 = rem;\n    }\n    long lcm = (o1 * o2) / n2;\n    cout << "GCD = " << n2 << "\\nLCM = " << lcm << endl;\n    return 0;\n}`,
        python: `n1, n2 = 36, 24\no1, o2 = n1, n2\nwhile n1 % n2 != 0:\n    n1, n2 = n2, n1 % n2\ngcd = n2\nlcm = (o1 * o2) // gcd\nprint(f"GCD = {gcd}\\nLCM = {lcm}")`,
        js: `let n1 = 36, n2 = 24;\nlet o1 = n1, o2 = n2;\nwhile(n1 % n2 !== 0){\n    let rem = n1 % n2;\n    n1 = n2;\n    n2 = rem;\n}\nlet gcd = n2;\nlet lcm = (o1 * o2) / gcd;\nconsole.log("GCD = " + gcd + "\\nLCM = " + lcm);`,
        screenshots: ["assets/ss_1_1_9_1.png"],
        homework: "✏️ 1. Write an algorithm to find the GCD of 3 integers simultaneously.\n✏️ 2. Write a program to check if two integers are co-primes (LCM is multiplied version).",
        youtubeId: "dummyVideoId9",
        funFact: "Real World: The Euclidean algorithm is one of the oldest algorithms in recorded history (300 BC). It forms the foundational bedrock of RSA public-key encryption protecting your internet traffic today! 📡"
    },

    "1_1_10": {
        explanation: "Check if a given integer is a Palindrome perfectly without converting it to a string. A palindrome number reads the same forwards and backwards.",
        explanationList: [
            "Store a copy of the original number.",
            "Iterate a while loop to extract the last digit (n % 10).",
            "Build a reversed number: reversed = (reversed * 10) + digit.",
            "At the end, check if reversed == original_copy."
        ],
        io: [
            { input: "N = 121", output: "true" },
            { input: "N = -121", output: "false", explanation: "-121 reversed is 121-, so not palindrome." }
        ],
        constraints: ["-2^31 <= N <= 2^31 - 1"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 121;\n        if(n < 0) { System.out.println("false"); return; }\n        int temp = n;\n        int reversed = 0;\n        while(temp != 0){\n            int digit = temp % 10;\n            reversed = reversed * 10 + digit;\n            temp /= 10;\n        }\n        System.out.println(n == reversed);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 121;\n    if(n < 0) { cout << "false"; return 0; }\n    int temp = n, reversed = 0;\n    while(temp != 0){\n        int digit = temp % 10;\n        reversed = reversed * 10 + digit;\n        temp /= 10;\n    }\n    cout << (n == reversed ? "true" : "false") << endl;\n    return 0;\n}`,
        python: `n = 121\nif n < 0:\n    print("false")\nelse:\n    temp, reversed_num = n, 0\n    while temp != 0:\n        digit = temp % 10\n        reversed_num = reversed_num * 10 + digit\n        temp //= 10\n    print("true" if n == reversed_num else "false")`,
        js: `let n = 121;\nif(n < 0) { console.log(false); } else {\n    let temp = n, reversed = 0;\n    while(temp > 0){\n        reversed = reversed * 10 + (temp % 10);\n        temp = Math.floor(temp / 10);\n    }\n    console.log(n === reversed);\n}`,
        screenshots: ["assets/ss_1_1_10_1.png"],
        homework: "✏️ 1. Write an algorithm to reverse a 32-bit Integer and handle potential integer overflows carefully.\n✏️ 2. Write an algorithm to check if a String is a perfect Palindrome.",
        youtubeId: "dummyVideoId10",
        funFact: "Real World: Many biological DNA sequences contain palindromic base-pair structures that act as critical markers for restriction mapping enzymes to cut DNA! 🧬"
    },

    "1_1_11": {
        explanation: "Check whether a given N is an Armstrong Number. An Armstrong number of 3 digits is a number where the sum of cubes of its digits is equal to the number itself.",
        explanationList: [
            "Store a copy of the original number so you can compare the sum later.",
            "Extract every single digit one by one.",
            "Multiply the digit by itself three times (cube) and add to sum.",
            "Compare sum against original_copy."
        ],
        io: [
            { input: "N = 153", output: "true", explanation: "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153." },
            { input: "N = 123", output: "false", explanation: "1^3 + 2^3 + 3^3 = 36 != 123." }
        ],
        constraints: ["0 <= N <= 10^9", "If number length is K, do Math.pow(digit, K) for the generalized version."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 153;\n        int sum = 0, temp = n;\n        while(temp > 0){\n            int digit = temp % 10;\n            sum += (digit * digit * digit);\n            temp /= 10;\n        }\n        if(sum == n) System.out.println("true");\n        else System.out.println("false");\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 153;\n    int sum = 0, temp = n;\n    while(temp > 0){\n        int digit = temp % 10;\n        sum += (digit * digit * digit);\n        temp /= 10;\n    }\n    if(sum == n) cout << "true";\n    else cout << "false";\n    return 0;\n}`,
        python: `n = 153\nsum_val = 0\ntemp = n\nwhile temp > 0:\n    digit = temp % 10\n    sum_val += (digit ** 3)\n    temp //= 10\nprint("true" if sum_val == n else "false")`,
        js: `let n = 153;\nlet sum = 0, temp = n;\nwhile(temp > 0){\n    let digit = temp % 10;\n    sum += (digit * digit * digit);\n    temp = Math.floor(temp / 10);\n}\nconsole.log(sum === n);`,
        screenshots: ["assets/ss_1_1_11_1.png"],
        homework: "✏️ 1. Expand the code to dynamically check powers of the length of the string instead of just exactly cubing. (Narcissistic Number).\n✏️ 2. Write a code to print all Armstrong numbers between 1 and 500.",
        youtubeId: "dummyVideoId11",
        funFact: "Real World: Armstrong numbers (also called Narcissistic numbers) don't have massive direct engineering usage, but they form fantastic computational benchmarking tests for raw CPU algorithmic testing! 💻"
    },

    // -------------------------------------------------------------
    // CHAPTER 1.2: Patterns
    // -------------------------------------------------------------

    "1_2_1": {
        explanation: "Print a solid square pattern of size N x N using stars (*). This helps you understand nested loop fundamentals.",
        explanationList: [
            "Use an outer loop to track the number of rows.",
            "Use an inner loop to print stars across each column on the current row.",
            "Print a newline after each inner loop finishes."
        ],
        io: [{ input: "N = 3", output: "***\n***\n***" }],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public void printSquare(int n) {\n        for(int i=0; i<n; i++) {\n            for(int j=0; j<n; j++) {\n                System.out.print("*");\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void printSquare(int n) {\n    for(int i=0; i<n; i++) {\n        for(int j=0; j<n; j++) {\n            cout << "*";\n        }\n        cout << endl;\n    }\n}`,
        python: `def printSquare(n):\n    for i in range(n):\n        print("*" * n)`,
        js: `function printSquare(n) {\n    for(let i=0; i<n; i++) {\n        let row = "";\n        for(let j=0; j<n; j++) row += "*";\n        console.log(row);\n    }\n}`,
        screenshots: [],
        homework: "✏️ Try to print a hollow square pattern where only the borders have stars.",
        youtubeId: "",
        funFact: "Nested loops cause algorithmic complexity to multiply. An N x N loop is exactly O(N^2) Time Complexity! ⏱️"
    },

    "1_2_2": {
        explanation: "Print a Right-Angled Triangle pattern of stars. The number of stars in each row equals the row number.",
        explanationList: [
            "The outer loop runs from 1 to N.",
            "The inner loop runs from 1 up to the current row number 'i'.",
            "This gives precisely 1 star on row 1, 2 on row 2, etc."
        ],
        io: [{ input: "N = 3", output: "*\n**\n***" }],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public void printTriangle(int n) {\n        for(int i=1; i<=n; i++) {\n            for(int j=1; j<=i; j++) System.out.print("*");\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void printTriangle(int n) {\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=i; j++) cout << "*";\n        cout << endl;\n    }\n}`,
        python: `def printTriangle(n):\n    for i in range(1, n+1):\n        print("*" * i)`,
        js: `function printTriangle(n) {\n    for(let i=1; i<=n; i++) {\n        console.log("*".repeat(i));\n    }\n}`,
        screenshots: [],
        homework: "✏️ Modify it to print the same triangle on the right side instead of the left.",
        youtubeId: "",
        funFact: "This triangle pattern logic is the identical looping mechanism used to traverse the lower half of any 2D Matrix diagonally! 📐"
    },

    "1_2_3": {
        explanation: "Print an Inverted Right-Angled Triangle. The first row has N stars, and the last row has 1 star.",
        explanationList: [
            "Start the outer loop from N down to 1.",
            "The inner loop goes from 1 to the current outer loop value."
        ],
        io: [{ input: "N = 3", output: "***\n**\n*" }],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public void printInverted(int n) {\n        for(int i=n; i>=1; i--) {\n            for(int j=1; j<=i; j++) System.out.print("*");\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void printInverted(int n) {\n    for(int i=n; i>=1; i--) {\n        for(int j=1; j<=i; j++) cout << "*";\n        cout << endl;\n    }\n}`,
        python: `def printInverted(n):\n    for i in range(n, 0, -1):\n        print("*" * i)`,
        js: `function printInverted(n) {\n    for(let i=n; i>=1; i--) {\n        console.log("*".repeat(i));\n    }\n}`,
        screenshots: [],
        homework: "✏️ Can you print an inverted right-aligned triangle by adding spaces before the stars?",
        youtubeId: "",
        funFact: "The sum of elements in an inverted triangle of size N is given by the formula (N * (N + 1)) / 2."
    },

    "1_2_4": {
        explanation: "Print a Half Pyramid using Numbers instead of stars. Each row `i` should contain numbers from `1` to `i`.",
        explanationList: [
            "Same logic as Pattern 2, but instead of printing '*', print the inner loop variable `j`.",
            "Formatting correctly is crucial so numbers don't stick."
        ],
        io: [{ input: "N = 3", output: "1\n1 2\n1 2 3" }],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public void printNumberPyramid(int n) {\n        for(int i=1; i<=n; i++) {\n            for(int j=1; j<=i; j++) System.out.print(j + " ");\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void printNumberPyramid(int n) {\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=i; j++) cout << j << " ";\n        cout << endl;\n    }\n}`,
        python: `def printNumberPyramid(n):\n    for i in range(1, n+1):\n        for j in range(1, i+1):\n            print(j, end=" ")\n        print()`,
        js: `function printNumberPyramid(n) {\n    for(let i=1; i<=n; i++) {\n        let row = "";\n        for(let j=1; j<=i; j++) row += j + " ";\n        console.log(row.trim());\n    }\n}`,
        screenshots: [],
        homework: "✏️ Change the code to print the exact same number across the entire row (e.g., 2 2 for row 2).",
        youtubeId: "",
        funFact: "Number pyramids fundamentally test your understanding of variable scopes inside nested iterations."
    },

    "1_2_5": {
        explanation: "Print an inverted Half Pyramid with Numbers. The 1st row will have 1 to N, the 2nd row 1 to N-1, etc.",
        explanationList: [
            "Combine the inverted loop logic of Pattern 3 with the number printing of Pattern 4."
        ],
        io: [{ input: "N = 3", output: "1 2 3\n1 2\n1" }],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public void invertedNumPyramid(int n) {\n        for(int i=n; i>=1; i--) {\n            for(int j=1; j<=i; j++) System.out.print(j + " ");\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void invertedNumPyramid(int n) {\n    for(int i=n; i>=1; i--) {\n        for(int j=1; j<=i; j++) cout << j << " ";\n        cout << endl;\n    }\n}`,
        python: `def invertedNumPyramid(n):\n    for i in range(n, 0, -1):\n        for j in range(1, i+1):\n            print(j, end=" ")\n        print()`,
        js: `function invertedNumPyramid(n) {\n    for(let i=n; i>=1; i--) {\n        let row = [];\n        for(let j=1; j<=i; j++) row.push(j);\n        console.log(row.join(" "));\n    }\n}`,
        screenshots: [],
        homework: "✏️ Try to make it print N down to 1 instead of 1 to N on the first row.",
        youtubeId: "",
        funFact: "Reversing iterators is a very common technique when iterating arrays backwards in modern algorithms."
    },

    "1_2_6": {
        explanation: "Print Floyd's Triangle. It's a triangle where numbers are printed consecutively starting from 1 to whatever the current block is.",
        explanationList: [
            "Use an external variable `count` initialized to 1.",
            "Run the standard right triangle loops, but inside the inner loop, print `count` and increment it."
        ],
        io: [{ input: "N = 3", output: "1\n2 3\n4 5 6" }],
        constraints: ["1 <= N <= 50"],
        java: `class Solution {\n    public void floydsTriangle(int n) {\n        int count = 1;\n        for(int i=1; i<=n; i++) {\n            for(int j=1; j<=i; j++) {\n                System.out.print(count + " ");\n                count++;\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void floydsTriangle(int n) {\n    int count = 1;\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=i; j++) cout << count++ << " ";\n        cout << endl;\n    }\n}`,
        python: `def floydsTriangle(n):\n    count = 1\n    for i in range(1, n+1):\n        for j in range(1, i+1):\n            print(count, end=" ")\n            count += 1\n        print()`,
        js: `function floydsTriangle(n) {\n    let count = 1;\n    for(let i=1; i<=n; i++) {\n        let row = "";\n        for(let j=1; j<=i; j++) {\n            row += count + " ";\n            count++;\n        }\n        console.log(row.trim());\n    }\n}`,
        screenshots: [],
        homework: "✏️ Write the Fibonacci series directly in a Floyd's Triangle shape.",
        youtubeId: "",
        funFact: "Robert Floyd, the namesake of this triangle, won the Turing Award in 1978 for designing efficient parsing methodologies! 🧠"
    },

    "1_2_7": {
        explanation: "Print a 0-1 Triangle. The cells at even positions (row index + col index) have 1, and odd positions have 0.",
        explanationList: [
            "We loop row 'i' from 1 to N, col 'j' from 1 to i.",
            "If (i + j) % 2 == 0, print '1', else print '0'."
        ],
        io: [{ input: "N = 3", output: "1\n0 1\n1 0 1" }],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public void zeroOneTriangle(int n) {\n        for(int i=1; i<=n; i++) {\n            for(int j=1; j<=i; j++) {\n                if((i+j) % 2 == 0) System.out.print("1 ");\n                else System.out.print("0 ");\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void zeroOneTriangle(int n) {\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=i; j++) {\n            if((i+j)%2 == 0) cout << "1 ";\n            else cout << "0 ";\n        }\n        cout << endl;\n    }\n}`,
        python: `def zeroOneTriangle(n):\n    for i in range(1, n+1):\n        for j in range(1, i+1):\n            if (i+j) % 2 == 0:\n                print("1", end=" ")\n            else:\n                print("0", end=" ")\n        print()`,
        js: `function zeroOneTriangle(n) {\n    for(let i=1; i<=n; i++) {\n        let row = "";\n        for(let j=1; j<=i; j++) {\n            row += ((i+j)%2 === 0) ? "1 " : "0 ";\n        }\n        console.log(row.trim());\n    }\n}`,
        screenshots: [],
        homework: "✏️ Predict how this logic relates to the coloring of a chessboard. Can you print a full N x N matrix resembling a chessboard?",
        youtubeId: "",
        funFact: "The (row+col)%2 logic is heavily used in Pathfinding algorithms to detect cell polarity on 2D maps!"
    },

    "1_2_8": {
        explanation: "Butterfly Pattern (Advanced). A symmetrical pattern resembling a butterfly's wings using stars and spaces. Top half and bottom half mirror each other.",
        explanationList: [
            "The top half scales stars 1 to N, with spaces 2*(N-i) in between.",
            "The bottom half reverses the top half exactly, from row N down to 1."
        ],
        io: [{ input: "N = 3", output: "*    *\n**  **\n******\n******\n**  **\n*    *" }],
        constraints: ["1 <= N <= 50"],
        java: `class Solution {\n    public void butterfly(int n) {\n        for(int i=1; i<=n; i++) {\n            for(int j=1; j<=i; j++) System.out.print("*");\n            for(int j=1; j<=2*(n-i); j++) System.out.print(" ");\n            for(int j=1; j<=i; j++) System.out.print("*");\n            System.out.println();\n        }\n        for(int i=n; i>=1; i--) {\n            for(int j=1; j<=i; j++) System.out.print("*");\n            for(int j=1; j<=2*(n-i); j++) System.out.print(" ");\n            for(int j=1; j<=i; j++) System.out.print("*");\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void butterfly(int n) {\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=i; j++) cout << "*";\n        for(int j=1; j<=2*(n-i); j++) cout << " ";\n        for(int j=1; j<=i; j++) cout << "*";\n        cout << endl;\n    }\n    for(int i=n; i>=1; i--) {\n        for(int j=1; j<=i; j++) cout << "*";\n        for(int j=1; j<=2*(n-i); j++) cout << " ";\n        for(int j=1; j<=i; j++) cout << "*";\n        cout << endl;\n    }\n}`,
        python: `def butterfly(n):\n    for i in range(1, n+1):\n        print("*"*i + " "*(2*(n-i)) + "*"*i)\n    for i in range(n, 0, -1):\n        print("*"*i + " "*(2*(n-i)) + "*"*i)`,
        js: `function butterfly(n) {\n    for(let i=1; i<=n; i++) {\n        console.log("*".repeat(i) + " ".repeat(2*(n-i)) + "*".repeat(i));\n    }\n    for(let i=n; i>=1; i--) {\n        console.log("*".repeat(i) + " ".repeat(2*(n-i)) + "*".repeat(i));\n    }\n}`,
        screenshots: [],
        homework: "✏️ Modify it to print a hollow butterfly where only the wings' edges are stars.",
        youtubeId: "",
        funFact: "Symmetrical operations like these reflect the concept of 'Divide and Conquer' visually—splitting logic down the middle!"
    },

    "1_2_9": {
        explanation: "Solid Rhombus Pattern. A shifted square where the right skew causes it to look like a leaning rhombus.",
        explanationList: [
            "We have N rows.",
            "Each row has exactly (N - row_number) spaces followed by N stars."
        ],
        io: [{ input: "N = 3", output: "  ***\n ***\n***" }],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public void solidRhombus(int n) {\n        for(int i=1; i<=n; i++) {\n            for(int j=1; j<=n-i; j++) System.out.print(" ");\n            for(int j=1; j<=n; j++) System.out.print("*");\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void solidRhombus(int n) {\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=n-i; j++) cout << " ";\n        for(int j=1; j<=n; j++) cout << "*";\n        cout << endl;\n    }\n}`,
        python: `def solidRhombus(n):\n    for i in range(1, n+1):\n        print(" "*(n-i) + "*"*n)`,
        js: `function solidRhombus(n) {\n    for(let i=1; i<=n; i++) {\n        console.log(" ".repeat(n-i) + "*".repeat(n));\n    }\n}`,
        screenshots: [],
        homework: "✏️ Print a Hollow Rhombus (only border stars).",
        youtubeId: "",
        funFact: "The Rhombus uses affine transformations in spatial mapping. Leaning shapes require calculating spatial matrix offsets! 💎"
    },

    "1_2_10": {
        explanation: "Diamond Pattern (Advanced). A fully mirrored diamond shaped using stars. This tests absolute mastery over loops and logic combining.",
        explanationList: [
            "Top half: For row 1 to N, print (N-i) spaces, then (2*i - 1) stars.",
            "Bottom half: Exactly mirror the top half looping from N down to 1."
        ],
        io: [{ input: "N = 2", output: " *\n***\n***\n *" }],
        constraints: ["1 <= N <= 50"],
        java: `class Solution {\n    public void diamond(int n) {\n        for(int i=1; i<=n; i++) {\n            for(int j=1; j<=n-i; j++) System.out.print(" ");\n            for(int j=1; j<=2*i-1; j++) System.out.print("*");\n            System.out.println();\n        }\n        for(int i=n; i>=1; i--) {\n            for(int j=1; j<=n-i; j++) System.out.print(" ");\n            for(int j=1; j<=2*i-1; j++) System.out.print("*");\n            System.out.println();\n        }\n    }\n}`,
        cpp: `void diamond(int n) {\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=n-i; j++) cout << " ";\n        for(int j=1; j<=2*i-1; j++) cout << "*";\n        cout << endl;\n    }\n    for(int i=n; i>=1; i--) {\n        for(int j=1; j<=n-i; j++) cout << " ";\n        for(int j=1; j<=2*i-1; j++) cout << "*";\n        cout << endl;\n    }\n}`,
        python: `def diamond(n):\n    for i in range(1, n+1):\n        print(" "*(n-i) + "*"*(2*i-1))\n    for i in range(n, 0, -1):\n        print(" "*(n-i) + "*"*(2*i-1))`,
        js: `function diamond(n) {\n    for(let i=1; i<=n; i++) {\n        console.log(" ".repeat(n-i) + "*".repeat(2*i-1));\n    }\n    for(let i=n; i>=1; i--) {\n        console.log(" ".repeat(n-i) + "*".repeat(2*i-1));\n    }\n}`,
        screenshots: [],
        homework: "✏️ Modify it so the center row doesn't get repeated twice. A perfect odd-rowed diamond.",
        youtubeId: "",
        funFact: "Diamonds are essentially isometric views of standard arrays. Finding intersections relies on exactly this logic in ancient 2D games! 🎮"
    }
};
