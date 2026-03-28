window.problemsData = {
    "1_1_1": {
        explanation: "This is a detailed explanation for Hello World. You should always start your programming journey by greeting the world. It brings good karma.",
        java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}",
        cpp: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello World\" << endl;\n    return 0;\n}",
        python: "print(\"Hello World\")",
        js: "console.log(\"Hello World\");",
        screenshots: [
            "assets/ss_1_1_1_1.png",
            "assets/ss_1_1_1_2.png"
        ],
        homework: "Modify the program to print 'Hello Java' instead.",
        funFact: "Hello World was created in 1978 in the book 'The C Programming Language'."
    },
    "1_1_2": {
        explanation: "Printing numbers sequentially. Using loops properly is key.",
        java: "class Solution {\n    public void printNums(int n) {\n        for (int i=1; i<=n; i++) {\n            System.out.println(i);\n        }\n    }\n}",
        cpp: "#include <iostream>\nusing namespace std;\n\nvoid printNums(int n) {\n    for (int i=1; i<=n; i++) {\n        cout << i << endl;\n    }\n}",
        python: "def printNums(n):\n    for i in range(1, n+1):\n        print(i)",
        js: "function printNums(n) {\n    for (let i=1; i<=n; i++) {\n        console.log(i);\n    }\n}",
        screenshots: [
            "assets/ss_1_1_2_1.png",
        ],
        homework: "Try printing the numbers in reverse order.",
        funFact: "Loops can cause infinite execution if the terminating condition is never met! 💀"
    }
    // You can add more problem details below following the same exact format! Just copy-paste and change ID.
};
