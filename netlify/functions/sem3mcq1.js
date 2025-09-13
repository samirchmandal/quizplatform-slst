exports.handler = async (event, context) => {
    const questions = [
  {
    "question": "Let $A = \\{1, 2, 3\\}$ and $R$ be a relation on $A$ defined by $R = \\{(1,1), (2,2), (3,3), (1,2), (2,1)\\}$. Which of the following properties does $R$ possess?",
    "options": [
      "Reflexive, Anti-Symmetric, and Transitive",
      "Reflexive and Symmetric, but not Transitive",
      "Reflexive, Symmetric, and Transitive (Equivalence Relation)",
      "Anti-symmetric and Transitive"
    ],
    "answer": 1,
    "explanation": "To determine the properties of the relation $R$, we check for reflexivity, symmetry, and transitivity. A relation is <strong>reflexive</strong> if for every element '$a$' in the set $A$, the pair $(a, a)$ is in $R$. Since (1, 1), (2, 2), and (3, 3) are all in $R$, the relation is reflexive. A relation is <strong>symmetric</strong> if for every pair $(a, b)$ in $R,$ the pair $(b, a)$ is also in $R$. Since (1, 2) is in $R$ and $(2,1)$ is also in $R$, and the other pairs are symmetric with themselves, the relation is symmetric. A relation is <strong>transitive</strong> if for every pair $(a, b)$ and $(b, c)$ in $R,$ the pair $(a, c)$ is also in $R$. We cann't find any pairs $(a,b)$ and $(b,c)$ such that $(a,c) \\notin R.$ Hence $R$ is transitive. Thus, the relation is reflexive, symmetric, and transitive, making it an equivalence relation."
  },
  {
    "question": "A relation $R$ on the set of integers is defined by $a \\equiv b \\pmod{n}$ ($a$ is congruent to $b$ modulo $n$). Which of the following properties does this relation always have?",
    "options": [
      "Reflexive, Anti-symmetric, Transitive",
      "Symmetric, Anti-symmetric, Transitive",
      "Reflexive, Symmetric, Transitive (Equivalence Relation)",
      "Reflexive and Transitive, but not Symmetric"
    ],
    "answer": 2,
    "explanation": "A relation $a \\equiv b \\pmod{n}$ means that $n$ divides $(a-b)$. This relation is an equivalence relation because it satisfies the three properties: <strong>Reflexivity</strong>: $a-a=0$, and $n$ divides 0, so $a \\equiv a \\pmod{n}$. <strong>Symmetry</strong>: If $n$ divides $(a-b)$, then $a-b = kn$ for some integer $k$. So, $b-a = -kn$, which means $n$ also divides $(b-a)$. Therefore, if $a \\equiv b \\pmod{n}$, then $b \\equiv a \\pmod{n}$. <strong>Transitivity</strong>: If $a \\equiv b \\pmod{n}$ and $b \\equiv c \\pmod{n}$, then $n$ divides $(a-b)$ and $(b-c)$. So $a-b = k_1n$ and $b-c = k_2n$. Adding these, we get $(a-b)+(b-c) = (k_1+k_2)n$, which simplifies to $a-c = (k_1+k_2)n$. Since $k_1+k_2$ is an integer, $n$ divides $(a-c)$. Thus, $a \\equiv c \\pmod{n}$.<br> <strong>Another way</strong> to think that if $n$ divides $(a-b)$ then $a$ and $b$ leave same remainder when divided by $n$. This partitions $\\mathbb{Z}$ into $n$ sets $A_0,A_1,\\ldots, A_{n-1}$ where $A_k$ contains all numbers $x$ that leave remainder $k$ when divided by $n.$ We know that partition gives equivalence relation."
  },
  {
    "question": "Let $A$ be a non-empty set and $R$ be a relation on $A$. If $R$ is both an equivalence relation and a partial order, what can be said about the relation?",
    "options": [
      "The set $A$ must be a singleton set.",
      "The relation $R$ must be the empty relation.",
      "The relation $R$ must be the identity relation, $I_A = \\{(a,a) | a \\in A\\}$.",
      "Such a relation cannot exist."
    ],
    "answer": 2,
    "explanation": "An <strong>equivalence relation</strong> is reflexive, symmetric, and transitive. A <strong>partial order</strong> is reflexive, anti-symmetric, and transitive. For a relation to be both, it must be reflexive, transitive, and both symmetric and anti-symmetric. The only way a relation can be both symmetric (if $(a,b) \\in R$, then $(b,a) \\in R$) and anti-symmetric (if $(a,b) \\in R$ and $(b,a) \\in R$, then $a=b$) is if the only pairs $(a,b)$ for which both $(a,b)$ and $(b,a)$ are in $R$ are those where $a=b$. Since reflexivity requires all pairs of the form $(a,a)$ to be in $R$, the relation must consist of only these pairs. This is the definition of the <strong>identity relation</strong>, $I_A$."
  },
  {
    "question": "On the set of all subsets of $\\{1, 2, 3\\}$, which of the following relations is a partial order?",
    "options": [
      "The relation 'is a subset of'",
      "The relation 'has the same cardinality as'",
      "The relation 'has exactly one element in common with'",
      "The relation 'is a proper subset of'"
    ],
    "answer": 0,
    "explanation": "A partial order requires reflexivity, anti-symmetry, and transitivity. Let's analyze the options. 'Is a subset of' ($\\subseteq$) is <strong>reflexive</strong> ($A \\subseteq A$), <strong>anti-symmetric</strong> (if $A \\subseteq B$ and $B \\subseteq A$, then $A=B$), and <strong>transitive</strong> (if $A \\subseteq B$ and $B \\subseteq C$, then $A \\subseteq C$). Thus, it's a partial order. 'Has the same cardinality as' is an equivalence relation, not a partial order, as it is symmetric but not anti-symmetric (e.g., $\\{1\\}$ and $\\{2\\}$ have the same cardinality, but $\\{1\\} \\neq \\{2\\}$). The other options fail one or more of the properties."
  },
  {
    "question": "Which of the following relations is NOT transitive?",
    "options": [
      "The relation 'is a parent of' on the set of all people.",
      "The relation 'is a subset of' on the power set of a set.",
      "The relation 'divides' on the set of positive integers.",
      "The relation '$a \\le b$' on the set of real numbers."
    ],
    "answer": 0,
    "explanation": "Transitivity means if $(a, b)$ and $(b, c)$ are in the relation, then $(a, c)$ must also be. Let's analyze the options. 'Is a parent of' is <strong>not transitive</strong>. If Alice is a parent of Bob, and Bob is a parent of Charlie, then Alice is not a parent of Charlie; she is a grandparent. 'Is a subset of', 'divides', and '$a \\le b$' are all transitive relations. For example, if $A \\subseteq B$ and $B \\subseteq C$, then $A \\subseteq C$."
  },
  {
    "question": "Let $S = \\{a, b, c\\}$. What is the number of reflexive relations on $S$?",
    "options": [
      "8",
      "16",
      "32",
      "64"
    ],
    "answer": 3,
    "explanation": "A relation on a set with $n$ elements is a subset of the Cartesian product $S \\times S$, which has $n^2$ elements. A relation is <strong>reflexive</strong> if it must contain all pairs of the form $(a, a)$, where $a \\in S$. For a set with $n=3$ elements, these are $(a,a), (b,b), (c,c)$. There are 3 such pairs. The remaining $n^2 - n = 3^2 - 3 = 6$ pairs in $S \\times S$ can either be in the relation or not, giving us $2^{n^2-n}$ choices. For $n=3$, this is $2^{3^2-3} = 2^{9-3} = 2^6 = 64$."
  },
  {
    "question": "Let $A$ be a set with $|A|=n$. How many symmetric relations can be defined on $A$?",
    "options": [
      "$2^{n(n-1)}$",
      "$2^{n^2}$",
      "$2^{n(n+1)/2}$",
      "$2^{n^2-1}$"
    ],
    "answer": 2,
    "explanation": "A relation is <strong>symmetric</strong> if for every pair $(a,b)$ in the relation, the pair $(b,a)$ is also in the relation. The total number of pairs in $A \\times A$ is $n^2$. We can divide these pairs into two groups: the $n$ pairs on the main diagonal of the relation matrix, $(a,a)$, and the $n^2-n$ off-diagonal pairs. For each of the $n$ diagonal pairs, we have 2 choices: either it is in the relation or not. For the $n^2-n$ off-diagonal pairs, we can group them into $(n^2-n)/2$ pairs of the form $\\{(a,b), (b,a)\\}$ where $a \\neq b$. For each of these pairs, we have 2 choices: either both are in the relation, or neither is. The total number of choices is $2^n \\times 2^{(n^2-n)/2} = 2^{n + (n^2-n)/2} = 2^{(2n + n^2 - n)/2} = 2^{(n^2+n)/2} = 2^{n(n+1)/2}$."
  },
  {
    "question": "A relation $R$ on the set $A = \\{2, 3, 4, 5\\}$ is defined as $(a,b) \\in R$ if and only if $a$ and $b$ are relatively prime. What properties does this relation have?",
    "options": [
      "Symmetric only",
      "Reflexive and Symmetric",
      "Transitive only",
      "Equivalence relation"
    ],
    "answer": 0,
    "explanation": "Two integers are relatively prime if their greatest common divisor is 1. Let's check the properties: <strong>Reflexivity</strong>: Is $(a,a)$ in $R$ for all $a \\in A$? For $a=2, \\gcd(2, 2)= 2 ~\\neq 1$. So (2, 2) is not in $R.$ It's not reflexive. <strong>Symmetry</strong>: If $(a,b)$ is in $R$, is $(b,a)$ also in $R$? If $\\gcd(a,b)=1,$ then $\\gcd(b,a)=1.$ So the relation is symmetric. <strong>Transitivity</strong>: If $(a,b)$ and $(b,c)$ are in $R,$ is $(a,c)$ in $R$? Consider $a=2, b=3, c=4, \\gcd(2,3)=1,$ so $(2,3)$ is in $R$. $\\gcd(3,4)=1,$ so (3, 4) is in $R.$ But $\\gcd(2,4)=2 \\neq 1$. So (2, 4) is not in $R.$ The relation is not transitive. Therefore, it is only symmetric."
  },
  {
    "question": "Let $R$ be a relation on the set of natural numbers $\\mathbb{N}$ defined by $(x,y) \\in R$ if and only if $x+y$ is an even number. What properties does $R$ have?",
    "options": [
      "Reflexive and Symmetric, but not Transitive",
      "Transitive only",
      "Equivalence relation",
      "Partial order"
    ],
    "answer": 2,
    "explanation": "A number can be either even or odd. The sum of two numbers is even if they are both even or both odd. The relation essentially groups numbers by their parity. Let's check the properties: <strong>Reflexivity</strong>: For any $x \\in \\mathbb{N}$, $x+x = 2x$, which is always an even number. So $(x,x) \\in R$. It is reflexive. <strong>Symmetry</strong>: If $(x,y) \\in R$, then $x+y$ is even. This implies $y+x$ is also even, so $(y,x) \\in R$. It is symmetric. <strong>Transitivity</strong>: If $(x,y) \\in R$ and $(y,z) \\in R$, then $x+y$ is even and $y+z$ is even. This means $x$ and $y$ have the same parity, and $y$ and $z$ have the same parity. This implies $x$ and $z$ have the same parity, so $x+z$ is also even. Thus, $(x,z) \\in R$. It is transitive. Since the relation is reflexive, symmetric, and transitive, it is an <strong>equivalence relation</strong>."
  },
  {
    "question": "How many anti-symmetric relations exist on a set with $n=2$ elements?",
    "options": [
      "4",
      "8",
      "12",
      "16"
    ],
    "answer": 2,
    "explanation": "Let the set be $A=\\{a,b\\}$. The possible ordered pairs are $(a,a), (a,b), (b,a), (b,b)$. For a relation to be <strong>anti-symmetric</strong>, for every pair $(a,b)$ in the relation where $a \\neq b$, the pair $(b,a)$ must not be in the relation. For the diagonal pairs, $(a,a)$ and $(b,b)$, we have 2 choices for each: either it's in or it's not. That's $2 \\times 2 = 4$ choices. For the off-diagonal pairs, $\\{(a,b),(b,a)\\}$, we have three choices: either include $(a,b)$ only, or include $(b,a)$ only, or include neither. We cannot include both since that would violate the anti-symmetric property (unless $a=b$, but we are considering $a \\neq b$). For a set with $n$ elements, there are $n^2-n$ off-diagonal pairs, which can be grouped into $(n^2-n)/2$ pairs of the form $\\{(a,b), (b,a)\\}$. For each of these, there are 3 choices. So the total number of anti-symmetric relations is $2^n \\times 3^{(n^2-n)/2}$. For $n=2$, this is $2^2 \\times 3^{(2^2-2)/2} = 4 \\times 3^{(4-2)/2} = 4 \\times 3^1 = 12$."
  },
  {
    "question": "Let $A = \\{1, 2, 3, 4\\}$ and $R$ be a relation on $A$ defined by $(a,b) \\in R$ if and only if $a$ divides $b$. What kind of relation is $R$?",
    "options": [
      "Equivalence relation",
      "Partial order",
      "Symmetric relation",
      "Transitive but not anti-symmetric relation"
    ],
    "answer": 1,
    "explanation": "The 'divides' relation on a set of integers is a classic example of a <strong>partial order</strong>. Let's check the properties: <strong>Reflexivity</strong>: For any $a \\in A$, $a$ divides $a$. So it's reflexive. <strong>Anti-symmetry</strong>: If $a$ divides $b$ and $b$ divides $a$, then since $a,b$ are positive, it must be that $a=b$. So it's anti-symmetric. <strong>Transitivity</strong>: If $a$ divides $b$ and $b$ divides $c$, then there exist integers $k_1$ and $k_2$ such that $b=ak_1$ and $c=bk_2$. Substituting the first into the second, we get $c=(ak_1)k_2 = a(k_1k_2)$, so $a$ divides $c$. It is transitive. Since it is reflexive, anti-symmetric, and transitive, it is a partial order."
  },
  {
    "question": "Consider the set of all students in a class. The relation $R$ is defined as 'has the same height as'. Is this relation an equivalence relation?",
    "options": [
      "No, because it is not reflexive.",
      "No, because it is not symmetric.",
      "No, because it is not transitive.",
      "Yes, it is an equivalence relation."
    ],
    "answer": 3,
    "explanation": "An <strong>equivalence relation</strong> must be reflexive, symmetric, and transitive. Let's check the properties for 'has the same height as': <strong>Reflexivity</strong>: Every student has the same height as themselves. So it's reflexive. <strong>Symmetry</strong>: If student A has the same height as student B, then student B has the same height as student A. So it's symmetric. <strong>Transitivity</strong>: If student A has the same height as student B, and student B has the same height as student C, then student A has the same height as student C. So it's transitive. Since it satisfies all three properties, it is an equivalence relation. This relation partitions the class into different groups where in a group all the students have same height."
  },
  {
    "question": "Let $R = \\{(1,1), (2,2), (3,3), (1,2), (2,3)\\}$ be a relation on the set $A = \\{1, 2, 3\\}$. What is the transitive closure of $R$?",
    "options": [
      "$\\{(1,1), (2,2), (3,3), (1,2), (2,3)\\}$",
      "$\\{(1,1), (2,2), (3,3), (1,2), (2,3), (1,3)\\}$",
      "$\\{(1,1), (2,2), (3,3), (1,2), (2,1), (1,3)\\}$",
      "$\\{(1,1), (2,2), (3,3), (1,2), (2,3), (3,1), (1,3)\\}$"
    ],
    "answer": 1,
    "explanation": "The <strong>transitive closure</strong> of a relation $R$ is the smallest transitive relation that contains $R$. It is formed by adding new pairs to $R$ to satisfy the transitivity property. We need to check for any pairs $(a,b)$ and $(b,c)$ that are in $R$, and add the pair $(a,c)$ if it's not already there. In the given relation $R$, we have $(1,2)$ and $(2,3)$. For the relation to be transitive, we must have a path from 1 to 3, which means the pair $(1,3)$ must be included. Adding $(1,3)$ gives us the new set of pairs: $\\{(1,1), (2,2), (3,3), (1,2), (2,3), (1,3)\\}$. All other pairs are either trivial or do not create new transitive pairs. Therefore, the transitive closure is $R \\cup \\{(1,3)\\}$."
  },
  {
    "question": "Which of the following is a key difference between an equivalence relation and a partial order?",
    "options": [
      "A partial order must be reflexive, while an equivalence relation does not have to be.",
      "A partial order is symmetric, while an equivalence relation is anti-symmetric.",
      "A partial order is anti-symmetric, while an equivalence relation is symmetric.",
      "A partial order is transitive, while an equivalence relation does not have to be."
    ],
    "answer": 2,
    "explanation": "Both equivalence relations and partial orders are reflexive and transitive. The key difference lies in the third property: an <strong>equivalence relation</strong> is <strong>symmetric</strong> (if $(a,b) \\in R$, then $(b,a) \\in R$), while a <strong>partial order</strong> is <strong>anti-symmetric</strong> (if $(a,b) \\in R$ and $(b,a) \\in R$, then $a=b$). This difference is fundamental to their use: equivalence relations partition a set into disjoint subsets, while partial orders arrange elements in a hierarchy or ordering."
  },
  {
    "question": "Let $R$ be a relation on the set $A = \\{a, b, c, d\\}$. If $R$ is a partial order, which of the following statements must be true?",
    "options": [
      "R is symmetric.",
      "R is not transitive.",
      "If $(a,b) \\in R$ and $(b,a) \\in R$, then $a=b$.",
      "R is not reflexive."
    ],
    "answer": 2,
    "explanation": "A <strong>partial order</strong> is defined by three properties: <strong>reflexivity</strong>, <strong>anti-symmetry</strong>, and <strong>transitivity</strong>. The statement 'If $(a,b) \\in R$ and $(b,a) \\in R$, then $a=b$' is the definition of <strong>anti-symmetry</strong>. The other options are incorrect. A partial order is not necessarily symmetric and it must be reflexive and transitive."
  },
  {
    "question": "Find $\\lim\\limits_{x \\to 2} (3x^2 - 5x + 1)$",
    "options": [
      "1",
      "3",
      "5",
      "7"
    ],
    "answer": 1,
    "explanation": "The function is a polynomial, which is continuous everywhere. Therefore, we can find the limit by direct substitution. Substitute $x=2$ into the expression: $3(2^2) - 5(2) + 1 = 3(4) - 10 + 1 = 12 - 10 + 1 = 3$."
  },
  {
    "question": "Evaluate $\\lim\\limits_{x \\to 1} \\frac{x^2 + 2x - 3}{x - 1}$",
    "options": [
      "4",
      "0",
      "2",
      "Undefined"
    ],
    "answer": 0,
    "explanation": "Direct substitution results in the indeterminate form $\\frac{0}{0}$. We can factor the numerator to simplify the expression. The numerator $x^2 + 2x - 3$ can be factored into $(x+3)(x-1)$. The expression becomes $\\frac{(x+3)(x-1)}{x-1}$. For $x \\neq 1$, we can cancel the $(x-1)$ terms, leaving $x+3$. The limit as $x \\to 1$ of this simplified expression is $1+3 = 4$."
  },
  {
    "question": "What is $\\lim\\limits_{x \\to 0} \\frac{\\sin(4x)}{x}$?",
    "options": [
      "0",
      "1",
      "4",
      "Undefined"
    ],
    "answer": 2,
    "explanation": "This is a standard trigonometric limit form, $\\lim\\limits_{x \\to 0} \\frac{\\sin(ax)}{x} = a$. In this case, $a=4$, so the limit is 4. Alternatively, you can apply L'Hôpital's rule since direct substitution gives $\\frac{0}{0}$. Differentiating the numerator and denominator gives $\\frac{4\\cos(4x)}{1}$. Substituting $x=0$ gives $4\\cos(0) = 4(1) = 4$."
  },
  {
    "question": "Find $\\lim\\limits_{x \\to \\infty} e^{-x}$",
    "options": [
      "0",
      "1",
      "$\\infty$",
      "e"
    ],
    "answer": 0,
    "explanation": "As $x$ approaches infinity, the exponent $-x$ approaches negative infinity. The graph of $y=e^{-x}$ is an exponential decay curve that approaches the $x$-axis as $x$ increases. Therefore, the limit is 0. "
  },
  {
    "question": "Evaluate $\\lim\\limits_{x \\to 1^+} \\ln(x-1)$",
    "options": [
      "0",
      "1",
      "$-\\infty$",
      "$\\infty$"
    ],
    "answer": 2,
    "explanation": "As $x$ approaches 1 from the right side ($x \\to 1^+$), the argument of the natural logarithm, $(x-1)$, approaches 0 from the positive side. The graph of $y = \\ln(x)$ has a vertical asymptote at $x=0$, and as $x$ approaches 0 from the right, the function value approaches negative infinity. "
  },
  {
    "question": "What is $\\lim\\limits_{x \\to 0^-} \\frac{|x|}{x}$?",
    "options": [
      "1",
      "$-1$",
      "0",
      "Undefined"
    ],
    "answer": 1,
    "explanation": "This is a one-sided limit. The function is defined piecewise. When $x$ is approaching 0 from the left ($x < 0$), the absolute value of $x$, $|x|$, is equal to $-x$. The expression becomes $\\frac{-x}{x} = -1$. The limit of a constant is the constant itself, so the limit is $-1$. "
  },
  {
    "question": "Find $\\lim\\limits_{x \\to 2^+} \\lfloor x \\rfloor$",
    "options": [
      "1",
      "2",
      "3",
      "Undefined"
    ],
    "answer": 1,
    "explanation": "The floor function $\\lfloor x \\rfloor$ gives the greatest integer less than or equal to $x$. As $x$ approaches 2 from the right side ($x \\to 2^+$), $x$ is slightly greater than 2 (e.g., 2.001). The greatest integer less than or equal to such a value is 2. "
  },
  {
    "question": "Evaluate $\\lim\\limits_{x \\to 3^-} \\{x\\}$ (fractional part of $x$)",
    "options": [
      "0",
      "1",
      "3",
      "Undefined"
    ],
    "answer": 1,
    "explanation": "The fractional part function is defined as $\\{x\\} = x - \\lfloor x \\rfloor$. As $x$ approaches 3 from the left ($x \\to 3^-$), $x$ is slightly less than 3 (e.g., 2.999...). For such a value, $\\lfloor x \\rfloor = 2$. So the expression is approximately $x-2$. As $x$ gets arbitrarily close to 3 from the left, this value gets arbitrarily close to $3-2=1$. "
  },
  {
    "question": "What is $\\lim\\limits_{x \\to \\infty} \\frac{3x^2 + 2x + 1}{x^2 - 4x + 5}$?",
    "options": [
      "0",
      "1",
      "3",
      "$\\infty$"
    ],
    "answer": 2,
    "explanation": "This is a limit of a rational function as $x \\to \\infty$. We can compare the degrees of the numerator and the denominator. Since the degree of the numerator (2) is equal to the degree of the denominator (2), the limit is the ratio of the leading coefficients, which is $\\frac{3}{1} = 3$. Alternatively, we can divide both the numerator and denominator by the highest power of $x$, which is $x^2$: $\\lim\\limits_{x \\to \\infty} \\frac{3 + \\frac{2}{x} + \\frac{1}{x^2}}{1 - \\frac{4}{x} + \\frac{5}{x^2}}$. As $x \\to \\infty$, the terms with $x$ in the denominator approach 0, leaving $\\frac{3+0+0}{1-0+0} = 3$."
  },
  {
    "question": "Find $\\lim\\limits_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$",
    "options": [
      "0",
      "1",
      "$\\frac{1}{2}$",
      "Undefined"
    ],
    "answer": 2,
    "explanation": "This is a fundamental trigonometric limit. Direct substitution gives the indeterminate form $\\frac{0}{0}$. We can use L'Hôpital's rule. Differentiating the numerator and denominator gives $\\frac{\\sin(x)}{2x}$. This is still $\\frac{0}{0}$, so we apply L'Hôpital's rule again. Differentiating again gives $\\frac{\\cos(x)}{2}$. Now, substituting $x=0$ gives $\\frac{\\cos(0)}{2} = \\frac{1}{2}$."
  },
  {
    "question": "Evaluate $\\lim\\limits_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "0",
      "Undefined"
    ],
    "answer": 1,
    "explanation": "Direct substitution gives $\\frac{0}{0}$. We can simplify this expression by multiplying the numerator and denominator by the conjugate of the numerator, which is $\\sqrt{x} + 2$. This gives $\\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{(x-4)(\\sqrt{x}+2)} = \\frac{x - 4}{(x-4)(\\sqrt{x}+2)}$. For $x \\neq 4$, we can cancel the $(x-4)$ terms, leaving $\\frac{1}{\\sqrt{x}+2}$. Now, we can find the limit by substitution: $\\frac{1}{\\sqrt{4}+2} = \\frac{1}{2+2} = \\frac{1}{4}$."
  },
  {
    "question": "What is $\\lim\\limits_{x \\to 0} (1 + 2x)^{\\frac{1}{x}}$?",
    "options": [
      "e",
      "$e^2$",
      "1",
      "Undefined"
    ],
    "answer": 1,
    "explanation": "This is a classic limit form for the number $e$. The general form is $\\lim\\limits_{x \\to 0} (1 + ax)^{\\frac{1}{x}} = e^a$. In this case, $a=2$, so the limit is $e^2$. You can also solve this using L'Hôpital's rule by taking the natural logarithm of the expression and evaluating the limit of the logarithm, then exponentiating the result."
  },
  {
    "question": "Does $\\lim\\limits_{x \\to 0} \\frac{|x|}{x}$ exist?",
    "options": [
      "Yes, value is 1",
      "Yes, value is $-1$",
      "Yes, value is 0",
      "No"
    ],
    "answer": 3,
    "explanation": "For a limit to exist at a point, the left-hand limit and the right-hand limit must be equal. The left-hand limit is $\\lim\\limits_{x \\to 0^-} \\frac{|x|}{x} = \\lim\\limits_{x \\to 0^-} \\frac{-x}{x} = -1$. The right-hand limit is $\\lim\\limits_{x \\to 0^+} \\frac{|x|}{x} = \\lim\\limits_{x \\to 0^+} \\frac{x}{x} = 1$. Since the left-hand limit $(-1)$ is not equal to the right-hand limit $(1)$, the limit does not exist."
  },
  {
    "question": "Find $\\lim\\limits_{x \\to \\infty} \\frac{\\sin(x)}{x}$",
    "options": [
      "0",
      "1",
      "$\\infty$",
      "Undefined"
    ],
    "answer": 0,
    "explanation": "We can use the <strong>Squeeze Theorem</strong> to solve this. We know that $-1 \\le \\sin(x) \\le 1$ for all real numbers $x$. Since we are considering the limit as $x \\to \\infty$, we can assume $x>0$. Dividing the inequality by $x$ gives $\\frac{-1}{x} \\le \\frac{\\sin(x)}{x} \\le \\frac{1}{x}$. We know that $\\lim\\limits_{x \\to \\infty} \\frac{-1}{x} = 0$ and $\\lim\\limits_{x \\to \\infty} \\frac{1}{x} = 0$. Since the function $\\frac{\\sin(x)}{x}$ is 'squeezed' between two functions that both approach 0, the limit of $\\frac{\\sin(x)}{x}$ as $x \\to \\infty$ must also be 0."
  },
  {
    "question": "Evaluate $\\lim\\limits_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x}$",
    "options": [
      "0",
      "1",
      "$\\frac{1}{2}$",
      "Undefined"
    ],
    "answer": 2,
    "explanation": "Direct substitution gives $\\frac{0}{0}$. We can multiply the numerator and denominator by the conjugate of the numerator, which is $\\sqrt{1+x} + 1$. This gives $\\frac{(\\sqrt{1+x} - 1)(\\sqrt{1+x} + 1)}{x(\\sqrt{1+x} + 1)} = \\frac{(1+x) - 1}{x(\\sqrt{1+x} + 1)} = \\frac{x}{x(\\sqrt{1+x} + 1)}$. For $x \\neq 0$, we can cancel the $x$ terms, leaving $\\frac{1}{\\sqrt{1+x} + 1}$. Now, substitute $x=0$: $\\frac{1}{\\sqrt{1+0} + 1} = \\frac{1}{1+1} = \\frac{1}{2}$."
  },
  {
    "question": "If $f(x) = x^3$, what is $\\lim\\limits_{h \\to 0} \\frac{f(2+h) - f(2)}{h}$?",
    "options": [
      "4",
      "8",
      "12",
      "16"
    ],
    "answer": 2,
    "explanation": "This is the formal definition of the <strong>derivative</strong> of the function $f(x)$ at the point $x=2$. The derivative of $f(x)=x^3$ is $f'(x) = 3x^2$. To find the value of the limit, we evaluate the derivative at $x=2$: $f'(2) = 3(2^2) = 3(4) = 12$."
  },
  {
    "question": "Find $\\lim\\limits_{x \\to 0} x \\sin(\\frac{1}{x})$",
    "options": [
      "0",
      "1",
      "$\\infty$",
      "Undefined"
    ],
    "answer": 0,
    "explanation": "We can use the <strong>Squeeze Theorem</strong>. We know that the sine function is bounded between -1 and 1: $-1 \\le \\sin(\\frac{1}{x}) \\le 1$. Multiplying by $|x|$ (which is non-negative) gives $-|x| \\le x \\sin(\\frac{1}{x}) \\le |x|$. We know that $\\lim\\limits_{x \\to 0} -|x| = 0$ and $\\lim\\limits_{x \\to 0} |x| = 0$. Since the function $x\\sin(\\frac{1}{x})$ is 'squeezed' between these two functions that both approach 0, its limit must also be 0."
  }
]
    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
