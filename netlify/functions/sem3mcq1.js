exports.handler = async (event, context) => {
    const questions = [
    {
        question: "Let $A = \\{1, 2, 3\\}$ and $R$ be a relation on $A$ defined by $R = \\{(1,1), (2,2), (3,3), (1,2), (2,1)\\}$. Which of the following properties does $R$ possess?",
        options: [
            "Reflexive, Symmetric, and Transitive",
            "Reflexive and Symmetric, but not Transitive",
            "Reflexive, Symmetric, and Transitive (Equivalence Relation)",
            "Anti-symmetric and Transitive"
        ],
        answer: 2
    },
    {
        question: "A relation $R$ on the set of integers is defined by $a \\equiv b \\pmod{n}$ (a is congruent to b modulo n). Which of the following properties does this relation always have?",
        options: [
            "Reflexive, Anti-symmetric, Transitive",
            "Symmetric, Anti-symmetric, Transitive",
            "Reflexive, Symmetric, Transitive (Equivalence Relation)",
            "Reflexive and Transitive, but not Symmetric"
        ],
        answer: 2
    },
    {
        question: "Let $A$ be a non-empty set and $R$ be a relation on $A$. If $R$ is both an equivalence relation and a partial order, what can be said about the relation?",
        options: [
            "The set $A$ must be a singleton set.",
            "The relation $R$ must be the empty relation.",
            "The relation $R$ must be the identity relation, $I_A = \\{(a,a) | a \\in A\\}$.",
            "Such a relation cannot exist."
        ],
        answer: 2
    },
    {
        question: "On the set of all subsets of $\\{1, 2, 3\\}$, which of the following relations is a partial order?",
        options: [
            "The relation 'is a subset of'",
            "The relation 'has the same cardinality as'",
            "The relation 'has exactly one element in common with'",
            "The relation 'is a proper subset of'"
        ],
        answer: 0
    },
    {
        question: "Which of the following relations is NOT transitive?",
        options: [
            "The relation 'is a parent of' on the set of all people.",
            "The relation 'is a subset of' on the power set of a set.",
            "The relation 'divides' on the set of positive integers.",
            "The relation '$a \\le b$' on the set of real numbers."
        ],
        answer: 0
    },
    {
        question: "Let $S = \\{a, b, c\\}$. What is the number of reflexive relations on $S$?",
        options: [
            "8",
            "16",
            "32",
            "64"
        ],
        answer: 3
    },
    {
        question: "Let $A$ be a set with $|A|=n$. How many symmetric relations can be defined on $A$?",
        options: [
            "$2^{n(n-1)}$",
            "$2^{n^2}$",
            "$2^{n(n+1)/2}$",
            "$2^{n^2-1}$"
        ],
        answer: 2
    },
    {
        question: "A relation $R$ on the set $A = \\{2, 3, 4, 5\\}$ is defined as $(a,b) \\in R$ if and only if $a$ and $b$ are relatively prime. What properties does this relation have?",
        options: [
            "Symmetric only",
            "Reflexive and Symmetric",
            "Transitive only",
            "Equivalence relation"
        ],
        answer: 0
    },
    {
        question: "Let $R$ be a relation on the set of natural numbers $\\mathbb{N}$ defined by $(x,y) \\in R$ if and only if $x+y$ is an even number. What properties does $R$ have?",
        options: [
            "Reflexive and Symmetric, but not Transitive",
            "Transitive only",
            "Equivalence relation",
            "Partial order"
        ],
        answer: 2
    },
    {
        question: "How many anti-symmetric relations exist on a set with $n=2$ elements?",
        options: [
            "4",
            "8",
            "12",
            "16"
        ],
        answer: 2
    },
    {
        question: "Let $A = \\{1, 2, 3, 4\\}$ and $R$ be a relation on $A$ defined by $(a,b) \\in R$ if and only if $a$ divides $b$. What kind of relation is $R$?",
        options: [
            "Equivalence relation",
            "Partial order",
            "Symmetric relation",
            "Transitive but not anti-symmetric relation"
        ],
        answer: 1
    },
    {
        question: "Consider the set of all students in a class. The relation $R$ is defined as 'has the same height as'. Is this relation an equivalence relation?",
        options: [
            "No, because it is not reflexive.",
            "No, because it is not symmetric.",
            "No, because it is not transitive.",
            "Yes, it is an equivalence relation."
        ],
        answer: 3
    },
    {
        question: "Let $R = \\{(1,1), (2,2), (3,3), (1,2), (2,3)\\}$ be a relation on the set $A = \\{1, 2, 3\\}$. What is the transitive closure of $R$?",
        options: [
            "$\\{(1,1), (2,2), (3,3), (1,2), (2,3)\\}$",
            "$\\{(1,1), (2,2), (3,3), (1,2), (2,3), (1,3)\\}$",
            "$\\{(1,1), (2,2), (3,3), (1,2), (2,1), (1,3)\\}$",
            "$\\{(1,1), (2,2), (3,3), (1,2), (2,3), (3,1), (1,3)\\}$"
        ],
        answer: 1
    },
    {
        question: "Which of the following is a key difference between an equivalence relation and a partial order?",
        options: [
            "A partial order must be reflexive, while an equivalence relation does not have to be.",
            "A partial order is symmetric, while an equivalence relation is anti-symmetric.",
            "A partial order is anti-symmetric, while an equivalence relation is symmetric.",
            "A partial order is transitive, while an equivalence relation does not have to be."
        ],
        answer: 2
    },
    {
        question: "Let $R$ be a relation on the set $A = \\{a, b, c, d\\}$. If $R$ is a partial order, which of the following statements must be true?",
        options: [
            "R is symmetric.",
            "R is not transitive.",
            "If $(a,b) \\in R$ and $(b,a) \\in R$, then $a=b$.",
            "R is not reflexive."
        ],
        answer: 2
    },

    {
        question: "Find $\\lim\\limits_{x \\to 2} (3x^2 - 5x + 1)$",
        options: ["1", "3", "5", "7"],
        answer: 1 // (3 * 2^2 - 5 * 2 + 1 = 12 - 10 + 1 = 3)
    },
    {
        question: "Evaluate $\\lim\\limits_{x \\to 1} \\frac{x^2 + 2x - 3}{x - 1}$",
        options: ["4", "0", "2", "Undefined"],
        answer: 0 // (Factor numerator: (x+3)(x-1)/(x-1) = x+3. Limit = 1+3 = 4)
    },
    {
        question: "What is $\\lim\\limits_{x \\to 0} \\frac{\\sin(4x)}{x}$?",
        options: ["0", "1", "4", "Undefined"],
        answer: 2 // (Using standard limit: lim (sin(ax)/x) = a, so it's 4)
    },
    {
        question: "Find $\\lim\\limits_{x \\to \\infty} e^{-x}$",
        options: ["0", "1", "$\\infty$", "e"],
        answer: 0 // (As x approaches infinity, -x approaches negative infinity, so e^(-x) approaches 0)
    },
    {
        question: "Evaluate $\\lim\\limits_{x \\to 1^+} \\ln(x-1)$",
        options: ["0", "1", "$-\\infty$", "$\\infty$"],
        answer: 2 // (As x approaches 1 from the right, (x-1) approaches 0 from the positive side, so ln(x-1) approaches -infinity)
    },
    {
        question: "What is $\\lim\\limits_{x \\to 0^-} \\frac{|x|}{x}$?",
        options: ["1", "$-1$", "0", "Undefined"],
        answer: 1 // (For x < 0, |x| = -x. So the limit becomes lim (-x/x) = lim (-1) = -1)
    },
    {
        question: "Find $\\lim\\limits_{x \\to 2^+} \\lfloor x \\rfloor$",
        options: ["1", "2", "3", "Undefined"],
        answer: 1 // (As x approaches 2 from the right, x is slightly greater than 2, so the greatest integer less than or equal to x is 2)
    },
    {
        question: "Evaluate $\\lim\\limits_{x \\to 3^-} \\{x\\}$ (fractional part of $x$)",
        options: ["0", "1", "3", "Undefined"],
        answer: 1 // (As x approaches 3 from the left, x is slightly less than 3 (e.g., 2.999...). The fractional part is x - floor(x) = x - 2. So the limit is 3-2 = 1)
    },
    {
        question: "What is $\\lim\\limits_{x \\to \\infty} \\frac{3x^2 + 2x + 1}{x^2 - 4x + 5}$?",
        options: ["0", "1", "3", "$\\infty$"],
        answer: 2 // (Divide numerator and denominator by the highest power of x, x^2. The limit becomes 3/1 = 3)
    },
    {
        question: "Find $\\lim\\limits_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$",
        options: ["0", "1", "$\\frac{1}{2}$", "Undefined"],
        answer: 2 // (This is a standard limit form, equal to 1/2)
    },
    {
        question: "Evaluate $\\lim\\limits_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$",
        options: ["$\\frac{1}{2}$", "$\\frac{1}{4}$", "0", "Undefined"],
        answer: 1 // (Multiply by the conjugate (sqrt(x)+2)/(sqrt(x)+2). This simplifies to 1/(sqrt(x)+2). Limit is 1/(sqrt(4)+2) = 1/4)
    },
    {
        question: "What is $\\lim\\limits_{x \\to 0} (1 + 2x)^{\\frac{1}{x}}$?",
        options: ["e", "$e^2$", "1", "Undefined"],
        answer: 1 // (This is of the form lim (1+ax)^(1/x) = e^a. Here a=2, so the limit is e^2)
    },
    {
        question: "Does $\\lim\\limits_{x \\to 0} \\frac{|x|}{x}$ exist?",
        options: ["Yes, value is 1", "Yes, value is $-1$", "Yes, value is 0", "No"],
        answer: 3 // (The left-hand limit is -1, and the right-hand limit is 1. Since LHL != RHL, the limit does not exist)
    },
    {
        question: "Find $\\lim\\limits_{x \\to \\infty} \\frac{\\sin(x)}{x}$",
        options: ["0", "1", "$\\infty$", "Undefined"],
        answer: 0 // (By the Squeeze Theorem, since -1 <= sin(x) <= 1, then -1/x <= sin(x)/x <= 1/x. As x -> infinity, both -1/x and 1/x approach 0)
    },
    {
        question: "Evaluate $\\lim\\limits_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x}$",
        options: ["0", "1", "$\\frac{1}{2}$", "Undefined"],
        answer: 2 // (Multiply by the conjugate (sqrt(1+x)+1)/(sqrt(1+x)+1). This simplifies to 1/(sqrt(1+x)+1). Limit = 1/(sqrt(1+0)+1) = 1/2)
    },
    {
        question: "If $f(x) = x^3$, what is $\\lim\\limits_{h \\to 0} \\frac{f(2+h) - f(2)}{h}$?",
        options: ["4", "8", "12", "16"],
        answer: 2 // (This is the definition of the derivative of f(x) at x=2. f'(x) = 3x^2, so f'(2) = 3(2^2) = 12)
    },
    {
        question: "Find $\\lim\\limits_{x \\to 0} x \\sin(\\frac{1}{x})$",
        options: ["0", "1", "$\\infty$", "Undefined"],
        answer: 0 // (By the Squeeze Theorem, since -1 <= sin(1/x) <= 1, then -x <= x sin(1/x) <= x for x>0. As x -> 0, both -x and x approach 0)
    }
];
    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
