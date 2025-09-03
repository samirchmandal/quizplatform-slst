exports.handler = async (event, context) => {
    const questions = [
  {
    "id": 1,
    "question": "If A and B are two sets, then $A\\cup B=A\\cap B$ iff",
    "options": [
      "$A=B$",
      "$A\\subseteq B$",
      "$B\\subseteq A$",
      "$A\\ne B$"
    ],
    "answer": 0,
    "explanation": "The condition $A \\cup B = A \\cap B$ holds true if and only if sets $A$ and $B$ are identical. Let $x\\in A.$ Then $x\\in A\\subseteq A\\cup B = A\\cap B\\subseteq B.$ So $A\\subseteq B$. Similarly $B\\subseteq A.$ Thus $A=B.$"
  },
  {
    "id": 2,
    "question": "Which one of the following is necessarily an invertible matrix?",
    "options": [
      "A nilpotent matrix",
      "An idempotent matrix",
      "A symmetric matrix",
      "An orthogonal matrix"
    ],
    "answer": 3,
    "explanation": "$A$ is orthogonal, then $A^{-1}=A^T.$"
  },
  {
    "id": 3,
    "question": "If $P(A\\cup B)=\\frac{5}{6}$ , $P(A\\cap B)=\\frac{1}{3}$ and $P(\\overline{A})=\\frac{1}{2}$ then events $A$ and $B$ are",
    "options": [
      "independent",
      "mutually exclusive",
      "exhaustive",
      "both (B) and (C)"
    ],
    "answer": 0,
    "explanation": "Given $P(\\overline{A}) = \\frac{1}{2}$, we know $P(A) = 1 - P(\\overline{A}) = 1 - \\frac{1}{2} = \\frac{1}{2}$. Using the Addition Rule, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, we solve for $P(B)$: $\\frac{5}{6} = \\frac{1}{2} + P(B) - \\frac{1}{3}$, which gives $P(B) = \\frac{2}{3}$. To test for independence, we check if $P(A \\cap B) = P(A) \\times P(B)$. We calculate $P(A) \\times P(B) = \\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$, which is equal to the given $P(A \\cap B)$. Therefore, events $A$ and $B$ are independent."
  },
  {
    "id": 4,
    "question": "The value of $\\int_{-1}^{1}|1+2x|dx$ equals to",
    "options": [
      "$\\frac{3}{2}$",
      "$\\frac{5}{2}$",
      "2",
      "$\\frac{7}{2}$"
    ],
    "answer": 1,
    "explanation": "Put $1+2x=t.$ Then the integral becomes $\\frac{1}{2}\\int_{-1}^3|t|~dt = \\frac{1}{2}[\\int_{-1}^0 (-t)~dt+\\int_0^3 t~dt = \\frac{1}{2}[\\frac{1}{2}+\\frac{9}{2}] = \\frac{5}{2}.$"
  },
  {
    "id": 5,
    "question": "If $p$ and $q$ are roots of the quadratic equation $x^{2}+mx+m^{2}+a=0$ then the value of $p^{2}+q^{2}+pq$ is",
    "options": [
      "0",
      "$a$",
      "$\\pm a^{2}$",
      "$-a$"
    ],
    "answer": 3,
    "explanation": "$p^2+q^2+pq=(p+q)^2-pq.$"
  },
  {
    "id": 6,
    "question": "The locus of point of intersection of two perpendicular tangents to the parabola $y^{2}= 6x$ is",
    "options": [
      "$x+y+\\frac{1}{2}=0$",
      "$x+\\frac{3}{2}=0$",
      "$y+\\frac{1}{2}=0$",
      "$x+y=\\frac{3}{2}$"
    ],
    "answer": 1,
    "explanation": "The locus of point of intersection of perpendicular tangents to a parabola is its directrix."
  },
  {
    "id": 7,
    "question": "If $n(A)=7$ and $n(A\\cap B)=3$, then $n[A\\cap(A\\cap B)^{\\prime}]$ is equal to",
    "options": [
      "2",
      "4",
      "0",
      "1"
    ],
    "answer": 1,
    "explanation": "$A\\cap(A\\cap B)^{\\prime}=A-B.$"
  },
  {
    "id": 8,
    "question": "The function $f(x)=\\cos x -2qx$ is monotonically decreasing for",
    "options": [
      "$q\\le\\frac{1}{2}$",
      "$q\\le2$",
      "$q\\ge\\frac{1}{2}$",
      "$q\\ge2$"
    ],
    "answer": 2,
    "explanation": "$f'(x) = -\\sin x-2q\\le 0\\Rightarrow q\\ge -\\frac{\\sin x}{2}$ for all $x$. Hence $q\\ge \\frac12.$ "
  },
  {
    "id": 9,
    "question": "If $\\alpha$, $\\beta$ and $\\gamma$ are the roots of $x^{3}+2x+1=0$ then the value of $(\\alpha^{2}+1)(\\beta^{2}+1)(\\gamma^{2}+1)$ is equal to",
    "options": [
      "2",
      "$-2$",
      "3",
      "$\\frac{1}{4}$"
    ],
    "answer": 0,
    "explanation": "$x^3+2x+1=0\\Rightarrow x(x^2+1)+x+1=0.$ So $x^2+1= -\\frac{x+1}{x}=-(1+\\frac{1}{x}).$ Thus $(\\alpha^{2}+1)(\\beta^{2}+1)(\\gamma^{2}+1)= - (1+\\frac{1}{\\alpha})(1+\\frac{1}{\\beta})(1+\\frac{1}{\\gamma})$. Now the equation whose roots are $\\frac{1}{\\alpha}, \\frac{1}{\\beta}$ and $\\frac{1}{\\gamma}$ is $x^3+2x^2+1=0.$ Thus $x^3+2x^2+1= (x-\\frac{1}{\\alpha})(x-\\frac{1}{\\beta})(x-\\frac{1}{\\gamma}).$ Putting $x=-1$, we obtain our desired result."
  },
  {
  "id": 10,
  "question": "For a uniformly accelerated motion of a particle of mass $m$ having velocities $u$ and $v$ at the beginning and end of an interval, the work done by the acting forces on it is",
  "options": [
    "$\\frac{1}{2}mv^2 +\\frac{1}{2}mu^2$",
    "$mv - mu$",
    "$\\frac{1}{2}mv^2 -\\frac{1}{2}mu^2$",
    "$\\frac{1}{4}mv^2 + mu^2$"
  ],
  "answer": 2,
  "explanation": "According to the **Work-Energy Theorem**, the net work done by all forces acting on a particle is equal to the change in its kinetic energy. Kinetic energy (K.E.) is defined as $\\frac{1}{2}mv^2$.The change in kinetic energy is the final kinetic energy minus the initial kinetic energy. Therefore, Work done = $\\text{K.E.}_{final} - \\text{K.E.}_{initial} = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2$."
},
  {
  "id": 11,
  "question": "Extreme points of the convex set of all feasible solutions of a LPP are",
  "options": [
    "2",
    "4",
    "infinite",
    "finite"
  ],
  "answer": 3,
  "explanation": "The feasible region of a Linear Programming Problem (LPP) is defined by a finite number of linear inequalities. This region is a convex polygon (or polyhedron in higher dimensions), and its extreme points (also known as vertices or corner points) are the points where the boundary lines intersect. Since the number of constraints and variables is always finite, the number of such intersection points is also finite. The **Fundamental Theorem of Linear Programming** states that if an optimal solution exists, it must occur at one of these extreme points. Therefore, there is a finite number of extreme points."
},
  {
    "id": 12,
    "question": "The modulus and amplitude of $-1 - i$ are",
    "options": [
      "$\\sqrt{2},\\frac{\\pi}{4}$",
      "$\\sqrt{2}, -\\frac{\\pi}{4}$",
      "$\\sqrt{2}, -\\frac{3\\pi}{4}$",
      "$\\sqrt{2},\\frac{3\\pi}{4}$"
    ],
    "answer": 2,
    "explanation": "The point lies in 3rd quadrant."
  },
  {
  "id": 13,
  "question": "The integrating factor for the differential equation $(x + 3)\\frac{dy}{dx} - y = e^{-x}(x + 3)^2$ is",
  "options": [
    "$log(x + 3)$",
    "$(x + 3)^2$",
    "$\\frac{1}{(x+3)^2}$",
    "$\\frac{1}{x+3}$"
  ],
  "answer": 2,
  "explanation": "To find the integrating factor of a first-order linear differential equation, we must first put it in the standard form $\\frac{dy}{dx} + P(x)y = Q(x)$. Dividing the given equation by $(x+3)$, we get $\\frac{dy}{dx} - \\frac{1}{x+3}y = e^{-x}(x + 3)$. Here, $P(x) = -\\frac{1}{x+3}$. The integrating factor (IF) is given by the formula $IF = e^{\\int P(x)dx}$. Calculating the integral: $\\int P(x)dx = \\int -\\frac{1}{x+3}dx = -\\ln|x+3|$. Substituting this back into the formula for the integrating factor: $IF = e^{-\\ln|x+3|} = e^{\\ln(|x+3|^{-1})} = |x+3|^{-1} = \\frac{1}{x+3}$. As we previously divided by $(x+3)$, the integrating factor of the original equation is $\\frac{1}{(x+3)^2}$. Some authors take (D) as correct answer." 
},
  {
    "id": 14,
    "question": "The product of odd and even permutations is",
    "options": [
      "odd",
      "even",
      "odd or even",
      "none of these"
    ],
    "answer": 0,
    "explanation": "Total number of transpositions become odd."
  },
  {
    "id": 15,
    "question": "The second order divided difference of the function $f(x) = \\frac{1}{x}$ with arguments $x_1, x_2, x_3$ is",
    "options": [
      "$-\\frac{1}{x_1x_2x_3}$",
      "$\\frac{1}{x_1x_2x_3}$",
      "$-\\frac{2!}{x_1x_2x_3}$",
      "$-\\frac{3!}{x_1x_2x_3}$"
    ],
    "answer": 1, 
    "explanation": "The second-order divided difference is defined as $f[x_1, x_2, x_3] = \\frac{f[x_2, x_3] - f[x_1, x_2]}{x_3 - x_1}$. We first find the first-order differences for the function $f(x) = \\frac{1}{x}$.\n\n$f[x_1, x_2] = \\frac{f(x_2) - f(x_1)}{x_2 - x_1} = \\frac{\\frac{1}{x_2} - \\frac{1}{x_1}}{x_2 - x_1} = \\frac{\\frac{x_1 - x_2}{x_1x_2}}{x_2 - x_1} = -\\frac{1}{x_1x_2}$. Similarly $f[x_2, x_3] = -\\frac{1}{x_2x_3}$. Now, substitute these into the second-order formula:\n$f[x_1, x_2, x_3] = \\frac{-\\frac{1}{x_2x_3} - (-\\frac{1}{x_1x_2})}{x_3 - x_1} = \\frac{-\\frac{1}{x_2x_3} + \\frac{1}{x_1x_2}}{x_3 - x_1} = \\frac{\\frac{-x_1 + x_3}{x_1x_2x_3}}{x_3 - x_1} = \\frac{x_3 - x_1}{x_1x_2x_3(x_3 - x_1)} = \\frac{1}{x_1x_2x_3}$.",
  },
  {
    "id": 16,
    "question": "Let $W$ be the subspace of the solutions of the system of equations $x - 2y + z = 0$; $2x - 3y + z = 0$ in $R^3$. Then $\\dim(W)$ is",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "The two equatins are independent. Hence $\\dim(W) = 3-2=1.$ "
  },
  {
    "id": 17,
    "question": "A particle is falling from a height $h$. The height of the particle at which the K.E. of the falling particle be equal to one fourth of its potential energy is",
    "options": [
      "$\\frac{2}{5}h$",
      "$\\frac{1}{2}h$",
      "$\\frac{2}{3}h$",
      "$\\frac{4}{5}h$"
    ],
    "answer": 3,
    "explanation": "Let the required height be $x$. Then by conservation of mechanical energy we have $mgx+ \\frac{mgc}{4} = mgh$. Solving we get $x = \\frac{4}{5}h.$"
  },
  {
    "id": 18,
    "question": "Let $S = \\left\\{1-\\frac{(-1)^n}{n} : n \\in \\mathbb{N}\\right\\}$, and $\\alpha$ and $\\beta$ be the infimum and supremum of $S$ respectively. Then the order pair $(\\alpha, \\beta) =$",
    "options": [
      "$(0, -1)$",
      "$(0, 2)$",
      "$(1, 2)$",
      "$(\\frac{1}{2}, 2)$"
    ],
    "answer": 3,
    "explanation": "The terms of the set $S$ depend on whether $n$ is an even or an odd natural number. We can analyze the sequence by splitting it into two cases: **For odd values of $n$:** The term is $1 - \\frac{(-1)^n}{n} = 1 - \\frac{-1}{n} = 1 + \\frac{1}{n}$. This sequence starts at $n=1$ with $1+1=2$, and decreases towards 1 as $n$ increases. The maximum value for this subsequence is 2.  **For even values of $n$:** The term is $1 - \\frac{(-1)^n}{n} = 1 - \\frac{1}{n}$. This sequence starts at $n=2$ with $1 - \\frac{1}{2} = \\frac{1}{2}$, and increases towards 1 as $n$ increases. The minimum value for this subsequence is $\\frac{1}{2}$.\n\nBy comparing the values from both subsequences, the minimum value of the entire set is $\\frac{1}{2}$, and the maximum value is 2. Therefore, the infimum $\\alpha = \\frac{1}{2}$ and the supremum $\\beta = 2$. The ordered pair is $(\\frac{1}{2}, 2)$."
  },
  {
    "id": 19,
    "question": "If $A$ and $B$ are matrices of the same order, then $(AB^t - BA^t)$ is",
    "options": [
      "symmetric",
      "skew symmetric",
      "null matrix",
      "identity matrix"
    ],
    "answer": 1,
    "explanation": "To determine the nature of the matrix $(AB^t - BA^t)$, we check its transpose. Let $C = AB^t - BA^t$. The transpose of this matrix is $C^t = (AB^t - BA^t)^t$. Using the properties of matrix transpose, we know that $(X-Y)^t = X^t - Y^t$ and $(XY)^t = Y^t X^t$. Applying these rules, we get:\n$C^t = (AB^t)^t - (BA^t)^t = (B^t)^t A^t - (A^t)^t B^t= BA^t-AB^t = -C$. Therefore, $C^t = -C$, which is the definition of a skew-symmetric matrix."
  },
  {
    "id": 20,
    "question": "Let $f(x, y) = p^2|xy|$. Then",
    "options": [
      "$f_y(0, 0) = 0$",
      "$f_x(0, 0) = \\sqrt{2}$",
      "$f$ is differentiable at $(0, 0)$.",
      "both $f_x(0, 0)$ and $f_y(0, 0)$ do not exist"
    ],
    "answer": 2,
    "explanation": "To determine the partial derivatives at $(0,0)$, we use the limit definition.\n\n$f_x(0, 0) = \\lim\\limits_{h\\to 0} \\frac{f(0+h, 0) - f(0, 0)}{h} = \\lim\\limits_{h\\to 0} \\frac{p^2|h \\cdot 0| - p^2|0 \\cdot 0|}{h} = \\lim\\limits_{h\\to 0} \\frac{0}{h} = 0$. Similarly $f_y(0, 0) =  0$.  Now for differentiation at $(0,0)$ we need to find $\\lim\\limits_{(h,k)\to (0,0)} \\frac{f(h,k)-f(0,0)-hf_x(0,0)-kf_y(0,0)}{\\sqrt{h^2+k^2}}$. But the expression becomes $\\frac{p^2|hk|}{\\sqrt{h^2+k^2}}\\to 0 \\text{ as} (h,k)\\to (0,0).$ Hence $f$ is differentiable at $(0,0)$."
  },
  {
    "id": 21,
    "question": "In a simplex method, if a column vector corresponding to a non-basic variable $a_j$ enters in the basis, then",
    "options": [
      "$a_j$ can leave the basis in the next iteration",
      "$a_j$ cannot leave the basis in the next iteration",
      "both (A) and (B) are possible",
      "none of the above"
    ],
    "answer": 2,
    "explanation": "In the simplex method, a non-basic variable enters the basis to improve the objective function value. The variable that leaves the basis is determined by the **minimum ratio test** to ensure the new solution remains feasible (i.e., all variables are non-negative). If the minimum ratio test results in a zero value, a **degenerate solution** occurs. In such a case, the variable that just entered can, in fact, be a candidate to leave in the very next iteration, as part of a tie in the minimum ratio test. Therefore, both scenarios are possible depending on whether the solution is degenerate or not."
  },
  {
    "id": 22,
    "question": "Which one of the following is TRUE?",
    "options": [
      "$\\Delta + \\nabla = \\Delta\\nabla$",
      "$\\Delta + \\nabla =\\frac{\\Delta}{\\nabla}+\\frac{\\nabla}{\\Delta}$",
      "$\\Delta + \\nabla =\\frac{\\Delta}{\\nabla}-\\frac{\\nabla}{\\Delta}$",
      "$\\Delta + \\nabla =\\frac{\\nabla}{\\Delta}-\\frac{\\Delta}{\\nabla}$"
    ],
    "answer": 2,
    "explanation": "Note that $\\Delta = E-1$ and $\\nabla = 1-E^{-1}$. So $\\Delta + \\nabla = (E-1)+(1-E^{-1}) = E-E^{-1}.$ Now $\\frac{\\Delta}{\\nabla} = \\frac{E-1}{1-E^{-1}}=\\frac{E(E-1)}{E(1-E^{-1})}= \\frac{E(E-1)}{(E-1)} = E$. Thus $\\frac{\\Delta}{\\nabla}-\\frac{\\nabla}{\\Delta} = E-E^{-1} = \\Delta + \\nabla.$"
  },
  {
    "id": 23,
    "question": "If the equation $|z - z_1|^2 + |z - z_2|^2 = p$, represents the equation of a circle, where $z_1 = 3 + 2i, z_2 = 6 + 2i$ are the extremities of the diameter, then the value of $p$ is",
    "options": [
      "3",
      "9",
      "13",
      "19"
    ],
    "answer": 1,
    "explanation": "To find the value of $p$, we can use the geometric property of a circle. The given equation describes a circle where the points corresponding to $z_1$ and $z_2$ are the endpoints of a diameter. Then $p$ is the square of diameter."
  },
  {
    "id": 24,
    "question": "The events of a card drawn from the pack of 52 cards be an ace and a queen are",
    "options": [
      "independent events",
      "mutually exclusive events",
      "both (A) and (B) are correct",
      "neither (A) nor (B) is correct"
    ],
    "answer": 1,
    "explanation": "Let $A$ be the event that the card drawn is an ace and $B$ be the event that it is a queen. The clearly $A$ and $B$ are mutually exclusive. Hence $P(A\\cap B)=0.$ Thus they can't be independent."
  },
  {
    "id": 25,
    "question": "$G$ be a non-commutative group of order 33 . Then $G$ has at least one element of order",
    "options": [
      "2",
      "5",
      "11",
      "22"
    ],
    "answer": 2,
    "explanation": "Cauchy's theorem says that if $p$ be a prime number such that $p$ divides the order of the group then there is at least one element of order $p$."
  },
  {
    "id": 26,
    "question": "The order and degree of the differential equation $y'' + \\sin (x + y') + 3y = 0$ are respectively",
    "options": [
      "2, 1",
      "2, not defined",
      "not defined, 2",
      "both order and degree can not be defined"
    ],
    "answer": 1,
    "explanation": "The order is defined and it is 2 but because of $\\sin$ degree is not defined."
  },
  {
    "id": 27,
    "question": "A function $f$ is defined on $\\mathbb{R}$ by $f(x) = \\begin{cases} x^2 & \\text{if } x \\le 3 \\\\ ax + b & \\text{if } x > 3 \\end{cases}$. Then, for which values of $a$ and $b$, f'(3) exists?",
    "options": [
      "$a = 6,~ b = -9$",
      "$a = -1, ~b = 9$",
      "$a = 2,~ b = 7$",
      "$a = 4, ~b = 13$"
    ],
    "answer": 0,
    "explanation": "At $x=3$ we must have $2x = a$ or $a = 6$ and for continuity, $9= a(3)+b$ or $b = 9-18=-9.$"
  },
  {
    "id": 28,
    "question": "If $\\vec{a}$, $\\vec{b}$ and $\\vec{c}$ are unit vectors, then $|\\vec{a} - \\vec{b}|^2 + |\\vec{b} - \\vec{c}|^2 + |\\vec{c} - \\vec{a}|^2$ is never greater than",
    "options": [
      "$\\frac{9}{2}$",
      "$\\frac{1}{2}$",
      "6",
      "9"
    ],
    "answer": 3,
    "explanation": "We know that for any vectors $\\vec{x}, \\vec{y}$,\n$$|\\vec{x} - \\vec{y}|^2 = |\\vec{x}|^2 + |\\vec{y}|^2 - 2\\vec{x}\\cdot\\vec{y}.$$\nSince $\\vec{a}, \\vec{b}, \\vec{c}$ are unit vectors ($|\\vec{a}| = |\\vec{b}| = |\\vec{c}| = 1$):\n\n$$|\\vec{a} - \\vec{b}|^2 = 2 - 2\\vec{a}\\cdot\\vec{b},$$\n$$|\\vec{b} - \\vec{c}|^2 = 2 - 2\\vec{b}\\cdot\\vec{c},$$\n$$|\\vec{c} - \\vec{a}|^2 = 2 - 2\\vec{c}\\cdot\\vec{a}.$$\n\nAdding them up:\n$$|\\vec{a} - \\vec{b}|^2 + |\\vec{b} - \\vec{c}|^2 + |\\vec{c} - \\vec{a}|^2 = 6 - 2(\\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a}).$$\n\nNow, since each dot product lies in $[-1,1]$, the minimum possible sum is $-3$. Thus,\n$$\\text{maximum value} = 6 - 2(-3) = 12.$$\nBut this upper bound is not achievable because three unit vectors cannot all be pairwise opposite.\n\nInstead,\n$$(\\vec{a}+\\vec{b}+\\vec{c})^2 \\geq 0 \\;\\; \\Rightarrow \\;\\; 3 + 2(\\vec{a}\\cdot\\vec{b}+\\vec{b}\\cdot\\vec{c}+\\vec{c}\\cdot\\vec{a}) \\geq 0.$$\nSo,\n$$\\vec{a}\\cdot\\vec{b}+\\vec{b}\\cdot\\vec{c}+\\vec{c}\\cdot\\vec{a} \\geq -\\tfrac{3}{2}.$$\n\nHence,\n$$|\\vec{a} - \\vec{b}|^2 + |\\vec{b} - \\vec{c}|^2 + |\\vec{c} - \\vec{a}|^2 \\leq 6 - 2(-\\tfrac{3}{2}) = 9.$$\n\nTherefore, the required expression is never greater than $\\,9.$"
  },
  {
    "id": 29,
    "question": "Consider the equation $x^3-nx+1 = 0, n \\in \\mathbb{N}, n \\ge 3$. Then the",
    "options": [
      "equation has all roots belonging to (0, 1).",
      "equation has exactly one rational root",
      "equation has at least one rational root.",
      "equation has no rational root."
    ],
    "answer": 3,
    "explanation": "Because the leading coefficient and constant term is 1, if there is a rational root, it must be 1 or $-1$. But both of them are not roots. So this equation cannot have a rational root."
  },
  {
    "id": 30,
    "question": "If $u = f(2x - 3y)$, then which one of the following is true?",
    "options": [
      "$3\\frac{\\partial u}{\\partial x} + 2\\frac{\\partial u}{\\partial y} = 0$",
      "$2\\frac{\\partial u}{\\partial x} + 3\\frac{\\partial u}{\\partial y} = 0$",
      "$3\\frac{\\partial u}{\\partial x} - 2\\frac{\\partial u}{\\partial y} = 5$",
      "$2\\frac{\\partial u}{\\partial x} + 3\\frac{\\partial u}{\\partial y} = 1$"
    ],
    "answer": 0,
    "explanation": "Let $z = 2x - 3y$. Then $u = f(z)$. By the chain rule,\n$$\\frac{\\partial u}{\\partial x} = f'(z) \\cdot \\frac{\\partial z}{\\partial x} = f'(z) \\cdot 2 = 2f'(z),$$\n$$\\frac{\\partial u}{\\partial y} = f'(z) \\cdot \\frac{\\partial z}{\\partial y} = f'(z) \\cdot (-3) = -3f'(z).$$\n So $$3\\frac{\\partial u}{\\partial x} + 2\\frac{\\partial u}{\\partial y} = 3(2f'(z)) + 2(-3f'(z)) = 0.$$ \nSo option (A) is correct."
  },
  {
    "id": 31,
    "question": "The value of $\\alpha$ in Rolle's theorem, where $f(x) = \\cos 2x, x \\in [0, \\pi]$, is equal to",
    "options": [
      "0",
      "$\\frac{\\pi}{4}$",
      "$\\pi$",
      "$\\frac{\\pi}{2}$"
    ],
    "answer": 3,
    "explanation": "For Rolle's theorem, $f(x)$ must be continuous on $[0, \\pi]$, differentiable on $(0, \\pi)$, and satisfy $f(0) = f(\\pi)$. Here, $f(x) = \\cos(2x)$ is continuous and differentiable everywhere. We have $f(0) = \\cos 0 = 1$ and $f(\\pi) = \\cos(2\\pi) = 1$, so the conditions hold. Now, $f'(x) = -2\\sin(2x)$. Setting $f'(x) = 0$, we get $\\sin(2x) = 0 \\implies 2x = n\\pi \\implies x = \\tfrac{n\\pi}{2}$. Within $(0, \\pi)$, the solution is $x = \\tfrac{\\pi}{2}$. Hence, $\\alpha = \\tfrac{\\pi}{2}$."
  },
  {
    "id": 32,
    "question": "If $A = \\begin{pmatrix} x & 5 \\\\ 2 & 1 \\end{pmatrix}$ and $A^{-1} = \\begin{pmatrix} \\frac{1}{5} & -1 \\\\ -\\frac{2}{5} & 3 \\end{pmatrix}$, then the value of $x$ is",
    "options": [
      "5",
      "$-5$",
      "10",
      "15"
    ],
    "answer": 3,
    "explanation": "We know that $A \\cdot A^{-1} = I$. Let $A = \\begin{pmatrix} x & 5 \\\\ 2 & 1 \\end{pmatrix}$ and $A^{-1} = \\begin{pmatrix} \\tfrac{1}{5} & -1 \\\\ -\\tfrac{2}{5} & 3 \\end{pmatrix}$. Multiply:\n\n$$A A^{-1} = \\begin{pmatrix} x & 5 \\\\ 2 & 1 \\end{pmatrix} \\begin{pmatrix} \\tfrac{1}{5} & -1 \\\\ -\\tfrac{2}{5} & 3 \\end{pmatrix}= \\begin{pmatrix} \\tfrac{x}{5} - 2 & * \\\\ * & * \\end{pmatrix}.$$\n\nComparing Top-left entry: $\\tfrac{x}{5} - 2 = 1\\Rightarrow x=15.$"
  },
  {
    "id": 33,
    "question": "The singular solution of the differential equation $y = px + e^{-p}, p = \\frac{dy}{dx}$ is",
    "options": [
      "$y = x \\log(x)$",
      "$y = x + e^{-x}$",
      "$y = -x \\log(x) + x$",
      "$y = x \\log(x) - e^{-x}$"
    ],
    "answer": 2,
    "explanation": "The given equation is of Clairaut’s form: $y = px + f(p)$ with $f(p) = e^{-p}$. The general solution is $y = cx + e^{-c}$. For the singular solution, eliminate $c$ using $\\frac{\\partial y}{\\partial c} = 0$: $x - e^{-c} = 0 \\Rightarrow c = -\\log(x)$. Substituting back gives $y = (-\\log(x))x + e^{\\log(x)} = -x \\log(x) + x$. Hence, the singular solution is $y = -x \\log(x) + x$."
  },
  {
    "id": 34,
    "question": "The number of solutions for $x$ in the equation $x^2 + x = 0$ in the ring $\\mathbb{Z}_{12}$ is",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "The equation is $x^2 + x = 0 \\pmod{12}$, or equivalently $x(x+1) \\equiv 0 \\pmod{12}$. This means $12$ must divide $x(x+1)$. Checking each $x = 0, 1, 2, \\dots, 11$: solutions are $x = 0, 3, 8, 11$. Hence, there are 4 solutions in $\\mathbb{Z}_{12}$."
  },
  {
    "id": 35,
    "question": "The area of the first quadrant of the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$, is",
    "options": [
      "$3\\pi$",
      "$4\\pi$",
      "$\\frac{4}{3}\\pi$",
      "$\\frac{1}{3}\\pi$"
    ],
    "answer": 0,
    "explanation": "The given ellipse is $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$, which has semi-major axis $a = 4$ and semi-minor axis $b = 3$. The total area of the ellipse is $\\pi ab = \\pi (4)(3) = 12\\pi$. Since the ellipse is symmetric in all four quadrants, the area in the first quadrant is one-fourth of the total area: $\\tfrac{1}{4}(12\\pi) = 3\\pi$. Hence, the correct option is $3\\pi$."
  },
  {
    "id": 36,
    "question": "Which one of the following is true?",
    "options": [
      "$[\\vec{a} \\times \\vec{b} \\quad \\vec{b} \\times \\vec{c} \\quad \\vec{c} \\times \\vec{a}] = 2[\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]^2$",
      "$[\\vec{a} \\times \\vec{b} \\quad \\vec{b} \\times \\vec{c} \\quad \\vec{c} \\times \\vec{a}] = [\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]^2$",
      "$[\\vec{a} \\times \\vec{b} \\quad \\vec{b} \\times \\vec{c} \\quad \\vec{c} \\times \\vec{a}] = 4[\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]^2$",
      "$[\\vec{a} \\times \\vec{b} \\quad \\vec{b} \\times \\vec{c} \\quad \\vec{c} \\times \\vec{a}] = 2[\\vec{a} \\quad \\vec{b} \\quad \\vec{c}]^4$"
    ],
    "answer": 1,
    "explanation": "Standard result in vector algebra."
  },
  {
    "id": 37,
    "question": "Let $\\sum\\limits_{n=1}^{\\infty} x_n$ be a series of real numbers. Which of the following is TRUE?",
    "options": [
      "If $\\sum\\limits x_n$ is convergent then $\\sum\\limits x_n$ is absolutely convergent",
      "If $\\sum\\limits x_n$ is divergent, then ${x_n}$ does NOT converge to 0 .",
      "If $x_n \\to 0$ then $\\sum\\limits x_n$ is convergent",
      "If $\\sum\\limits x_n$ is convergent then $x_n^2 \\to 0$ as $n \\to \\infty$"
    ],
    "answer": 3,
    "explanation": "The correct statement is option 4: 'If $\\sum x_n$ is convergent then $x_n^2 \\to 0$ as $n \\to \\infty$.' \n\nExplanation of options:\n1. Not true: Convergence of a series does not imply absolute convergence (e.g., the alternating harmonic series converges but is not absolutely convergent).\n2. Not true: A divergent series can have terms tending to zero (e.g., the harmonic series $\\sum 1/n$ diverges, but $1/n \\to 0$).\n3. Not true: If $x_n \\to 0$, the series may still diverge (again, the harmonic series is a counterexample).\n4. True: If $\\sum x_n$ converges, then $x_n \\to 0$, so $x_n^2 \\to 0$ as $n \\to \\infty$."
  },
  {
    "id": 38,
    "question": "The value of $c$ for which the line $2x+y-5z = c, x - 2y + 10z + 5 = 0$ meets the $x$-axis, is",
    "options": [
      "$-10$",
      "$-2$",
      "5",
      "$-3$"
    ],
    "answer": 0,
    "explanation": "To find where a line meets the $x$-axis, we set $y = 0$ and $z = 0.$ \n\nFor the line given by:\n1. $2x + y - 5z = c$, \n2. $x - 2y + 10z + 5 = 0$\n\nSet $y = 0$ and $z = 0$:\n1. $2x + 0 - 5*0 ⇒ 2x = c ⇒ c = 2x$\n2. $x - 2*0 + 10*0 + 5 = x + 5 = 0 ⇒ x = -5$\n\nSubstitute $x = -5$ into $c = 2x$:\n$c = 2 * (-5) = -10.$"
  },
  {
    "id": 39,
    "question": "For any event $E$, the event $E$ and $\\emptyset$ (null event) are",
    "options": [
      "independent",
      "mutually exclusive",
      "(A) is TRUE, but (B) is NOT",
      "Both (A) and (B) are TRUE"
    ],
    "answer": 3,
    "explanation": "Follows from definition of independence, that is, $P(A\\cap B)=P(A)P(B).$"
  },
  {
    "id": 40,
    "question": "A square matrix $M$ is singular if and only if its",
    "options": [
      "eigenvalues are non-zero",
      "columns are linearly independent",
      "rows are linearly independent",
      "columns are linearly dependent"
    ],
    "answer": 3,
    "explanation": "A square matrix is singular if it is not invertible, which happens exactly when its determinant is zero. This is equivalent to saying that its columns (or rows) are linearly dependent. Therefore, the correct condition is that the columns are linearly dependent."
    
  },
  {
    "id": 41,
    "question": "The differential equation whose auxiliary equation has the roots 0, 1, 2, is",
    "options": [
      "$\\frac{d^3y}{dx^3} - 2\\frac{dy}{dx} + y = 0$",
      "$\\frac{d^3y}{dx^3} - 3\\frac{d^2y}{dx^2} + 2\\frac{dy}{dx} = 0$",
      "$\\frac{d^3y}{dx^3} - 2\\frac{d^2y}{dx^2} + 3\\frac{dy}{dx} = 0$",
      "$\\frac{d^3y}{dx^3} + 3\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + y = 0$"
    ],
    "answer": 1,
    "explanation": "The auxiliary equation of a linear differential equation with constant coefficients is obtained by replacing $\\frac{d^n y}{dx^n}$ with $m^n$. \n\nGiven roots: 0, 1, 2. The auxiliary equation is: $ m(m-1)(m-2) = 0 $.\n\nExpanding: $ m(m^2 - 3m + 2) = m^3 - 3m^2 + 2m = 0 $.\n\nThus, the differential equation corresponding to this auxiliary equation is: \n\\[ \\frac{d^3y}{dx^3} - 3\\frac{d^2y}{dx^2} + 2\\frac{dy}{dx} = 0 \\]."
  },
  {
    "id": 42,
    "question": "The centre of the conic $x^2 - 2xy + 8y^2 + x - y + 5 = 0$ is",
    "options": [
      "$(-\\frac{1}{2}, 0)$",
      "$(1, -1)$",
      "$(-\\frac{1}{2}, -\\frac{1}{5})$",
      "$(0, -\\frac{2}{3})$"
    ],
    "answer": 0,
    "explanation": "The general second-degree equation of a conic is given by $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0.$ \n\n The centre can be found by solving any two of the equations $ax+hy+g=0,~ hx+by+f=0$ and $gx+fy+c=0.$ Compare and solve the equations."
  },
  {
    "id": 43,
    "question": "The L.P.P, Max $z = 3x_1 - 5x_2$, subjected to $x_1 + x_2 \\le 2, x_1 - x_2 \\ge 2, x_1, x_2 \\ge 0$ has",
    "options": [
      "no solution",
      "infinite solution",
      "unique solution",
      "unbounded solution"
    ],
    "answer": 2,
    "explanation": "This question is best solved graphically."
  },
  {
    "id": 44,
    "question": "In a group $(G, ∗)$, if $(a ∗ b)^{-1} = a^{-1} ∗ b^{-1}$ for all $a, b \\in G$, then $G$ is",
    "options": [
      "abelian",
      "finite",
      "cyclic",
      "non-abelian"
    ],
    "answer": 0,
    "explanation": "In a group $G$ we know $(ab)^{-1} = b^{-1}a^{-1}$. Hence here we have $a^{-1}b^{-1}= b^{-1}a^{-1}$. Replacing $a^{-1}$ by $a$ and $b^{-1}$ by $b$, we obtain $ab=ba$ for all $a,b\\in G.$ Thus $G$ is abelian."
  },
  {
    "id": 45,
    "question": "If $M = \\max\\limits_{x\\in[0,1]}|f''(x)|$, and $h = x_1 - x_0$, then the maximum error in linear interpolation is given by",
    "options": [
      "$\\frac{h^2M}{2}$",
      "$\\frac{h^2M}{4}$",
      "$\\frac{h^2M}{8}$",
      "$\\frac{h^2M}{12}$"
    ],
    "answer": 2,
    "explanation": "In linear interpolation, the error at a point $x$ between $x_0$ and $x_1$ is given by $E(x) = \\frac{f''(\\xi)}{2}(x - x_0)(x - x_1)$ for some $\\xi \\in [x_0, x_1]$. The maximum of $|(x - x_0)(x - x_1)|$ on $[x_0, x_1]$ occurs at the midpoint $x = \\frac{x_0 + x_1}{2}$, giving $(x - x_0)(x - x_1) = -\\frac{h^2}{4}$. Taking absolute value, the maximum error is $\\frac{M h^2}{8}$."
  },
  {
    "id": 46,
    "question": "If $\\alpha$, $\\beta$, and $\\gamma$ are the roots of the equation $ax^3 + bx^2 - cx + d = 0~(a \\ne 0)$, then $\\sum \\frac{1}{\\alpha}$ is",
    "options": [
      "$\\frac{c}{d}$",
      "$-\\frac{b}{a}$",
      "$-\\frac{a}{d}$",
      "$-\\frac{c}{a}$"
    ],
    "answer": 0,
    "explanation": "The equation whose roots are the reciprocals is found by writing the coefficients in reverse order. So the equation whose roots are $\\frac{1}{\\alpha},\\frac{1}{\\beta},\\frac{1}{\\gamma}$ is $dx^3-cx^2+bx+a=0.$ Thus $\\sum\\frac{1}{\\alpha} = \\frac{c}{d}.$"
  },
  {
    "id": 47,
    "question": "The series $\\sum\\limits_{n=1}^{\\infty} \\frac{n}{e^n}$ is",
    "options": [
      "convergent",
      "divergent",
      "not bounded below",
      "oscillatory"
    ],
    "answer": 0,
    "explanation": "The series $\\sum\\limits_{n=1}^{\\infty} \\frac{n}{e^n}$ is convert because exponential dominates polynomial. Rigorously, we can write $\\frac{n}{e^n} = n (\\frac{1}{e})^n$. Using the ratio test: $\\lim\\limits_{n \\to \\infty} \\frac{(n+1)/e^{n+1}}{n/e^n} = \\lim\\limits_{n \\to \\infty} \\frac{n+1}{n} \\cdot \\frac{1}{e} = \\frac{1}{e} < 1$. Since the ratio is less than 1, the series converges."
  },
  {
    "id": 48,
    "question": "Let $A$ and $B$ be two subspaces of a vector space $V$ . Then",
    "options": [
      "$A \\cap B$ is a subspace of $V$",
      "$A \\cup B$ is a subspace",
      "both $A \\cap B$ and $A \\cup B$ are subspaces of $V$",
      "neither $A \\cap B$ nor $A \\cup B$ is a subspaces of $V$"
    ],
    "answer": 0,
    "explanation": "The intersection of two subspaces $A$ and $B$, denoted $A \\cap B$, is always a subspace of $V$ because it is closed under addition and scalar multiplication. However, the union $A \\cup B$ is generally not a subspace unless one subspace is contained in the other. Hence, only $A \\cap B$ is guaranteed to be a subspace."
  },
  {
    "id": 49,
    "question": "If $\\phi$ satisfies MVT on $[a, a + h], h > 0$, then $\\lim\\limits_{h\\to 0} \\frac{\\phi(a+h)-\\phi(a-h)}{h}$ is equal to",
    "options": [
      "$\\phi(a)$",
      "$\\phi'(a)$",
      "$2\\phi'(a)$",
      "0"
    ],
    "answer": 2,
    "explanation": "By the Mean Value Theorem (MVT), for $h > 0$ there exists $\\xi \\in (a-h, a+h)$ such that $\\phi(a+h) - \\phi(a-h) = 2h \\phi'(\\xi)$. Therefore, $$\\frac{\\phi(a+h) - \\phi(a-h)}{h} = 2\\phi'(\\xi).$$ As $h \\to 0,~\\xi \\to a$. Hence, the limit becomes $2\\phi'(a)$. So the correct answer is option (C): $2\\phi'(a)$."
  },
  {
    "id": 50,
    "question": "The particular integral of the differential equation $(D^2 + 4) y = \\cos 2x, D \\equiv \\frac{d}{dx}$ is",
    "options": [
      "$\\frac{1}{4}(x \\sin 2x)$",
      "$-\\frac{1}{2}(x \\cos 2x)$",
      "$-\\frac{1}{20}(x \\sin 2x)$",
      "$\\frac{1}{20}(x \\cos 2x)$"
    ],
    "answer": 0,
    "explanation": "We want the particular integral (P.I.) of $(D^2 + 4)y = \\cos 2x$. The operator is $D^2 + 4$. For the trial method, P.I. = $\\frac{1}{D^2 + 4}(\\cos 2x)$. Now substitute $D^2 = -(2)^2 = -4$. Thus denominator becomes $D^2 + 4 = -4 + 4 = 0$. Since it vanishes, we use the method of 'resonance' by multiplying by $x$. So trial solution is $y_p = Ax \\sin 2x + Bx \\cos 2x$. Substituting into the equation and comparing, we find $A = \\tfrac{1}{4}, B = 0$. Hence the particular integral is $\\tfrac{1}{4} x \\sin 2x$."
  },
  {
    "id": 51,
    "question": "The Newton-Raphson iterative scheme for finding the square root of 2 is",
    "options": [
      "$x_{n+1} =\\frac{1}{2} \\left(x_n + \\frac{2}{x_n}\\right), n = 0, 1, 2, . . .$",
      "$x_{n+1} = \\frac{1}{\\sqrt{2}} \\left(x_n + \\frac{1}{x_n}\\right), n = 0, 1, 2, . . .$",
      "$x_{n+1} =\\frac{1}{2} \\left(x_n - \\frac{2}{x_n}\\right), n = 0, 1, 2, . . .$",
      "$x_{n+1} =\\frac{1}{4} \\left(x_n + \\frac{2}{x_n}\\right), n = 0, 1, 2, . . .$"
    ],
    "answer": 0,
    "explanation": "The iteration $x_{n+1}= \\phi(x_n)$ is correct if $\\sqrt 2$ is a root of $\\phi(x)=x$ and $|\\phi'(\\sqrt 2)|<1$. Only the first option satisfies $\\phi(x)=x$ at $\\sqrt 2.$"
  },
  {
    "id": 52,
    "question": "Equation $(3a - 2b)x^2 + (c - 2a)y^2 + 2hxy = 0$ represents pair of straight lines which are perpendicular to each other, then $(a - b)$ is equal to",
    "options": [
      "$b + c$",
      "$b - c$",
      "$c - b$",
      "0"
    ],
    "answer": 1,
    "explanation": "We know pair of straight lines given by $Ax^2+2Hxy+By^2=0$ represents perpendicular lines if $A+B=0.$ Hence in our case, $(3a-2b)+(c-2a)=0.$ So $a-b = b-c.$"
  },
  {
    "id": 53,
    "question": "The double limit $\\lim\\limits_{(x,y)\\to(0,0)} \\frac{4xy}{x^2+(y+x)^2}$",
    "options": [
      "exists and equals to 0",
      "exists and equals to 1",
      "exists and equals to 2",
      "does not exist."
    ],
    "answer": 3,
    "explanation": "The double limit does not exist as power in numerator and denominator is same. Rigorously, if $(x,y)\\to (0,0)$ along $y=mx$, then we get different limits for different $m$."
  },
  {
    "id": 54,
    "question": "The number of zero divisors in $(\\mathbb {Z}_{10}, +_{10}, \\times_{10})$ is",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "$\\bar{k}\\in \\{\\bar 1,\\bar 2,\\ldots, \\bar 9\\}$ is a zero divisor in $\\mathbb {Z}_{10}$ if and only if $\\gcd(k,10)>1.$ All the zero divisors are $\\bar{2}, \\bar{4}, \\bar 5, \\bar 6, \\bar 8.$"
  },
  {
    "id": 55,
    "question": "If a particle describes a curve $r = ae^{\\lambda\\theta}$, where $a > 0, \\lambda > 0$, under a central force towards the pole, then the law of force $(P)$ is",
    "options": [
      "$P \\propto\\frac{1}{r^3}$",
      "$P \\propto\\frac{1}{r^2}$",
      "$P \\propto\\frac{1}{r}$",
      "$P \\propto r^3$"
    ],
    "answer": 0,
    "explanation": "The given curve $r = ae^{\\lambda \\theta}$ is an **equangular spiral**. For central force motion, the general law of force is given by: $$F(u) \\propto u^2\\left(u + \\left(\\frac{d^2u}{d\\theta^2}\\right)\\right), \\quad u = \\frac{1}{r}.$$ For an equiangular spiral, the calculation leads to $F(r) \\propto \\frac{1}{r^3}$. Hence, the central force law is inversely proportional to the cube of the distance."
  },
  {
    "id": 56,
    "question": "The series $\\sum\\limits_{n=1}^{\\infty}(-1)^n\\frac{n+1}{n^2}$, is",
    "options": [
      "absolutely convergent",
      "conditionally convergent",
      "converges but not conditionally",
      "divergent"
    ],
    "answer": 1,
    "explanation": "Take absolute values: $|(-1)^n\\frac{n+1}{n^2}|=\\frac{n+1}{n^2}=\\frac{1}{n}+\\frac{1}{n^2}.$ Since $\\sum\\frac{1}{n}$ (the harmonic series) diverges while $\\sum\\frac{1}{n^2}$ converges, their sum $\\sum\\frac{n+1}{n^2}$ diverges. Thus the series is not absolutely convergent. For conditional convergence, set $a_n=\\frac{n+1}{n^2}$. Consider $f(x)=\\frac{x+1}{x^2}=\\frac{1}{x}+\\frac{1}{x^2}$ for $x>0$; $f'(x)=-\\frac{1}{x^2}-\\frac{2}{x^3}<0$, so $a_n$ is positive and monotonically decreasing, and $\\lim\\limits_{n\\to\\infty}a_n=0$. By the Alternating Series (Leibniz) Test, $\\sum(-1)^n a_n$ converges. Combining both facts, the series converges but not absolutely — i.e. it is conditionally convergent."
  },
  {
    "id": 57,
    "question": "If $A$ and $B$ are any events, then the probability that exactly one of them occurs is given by",
    "options": [
      "$P(A) + P(B) + 2P(A \\cap B)$",
      "$P(A) + P(B) - P(A \\cap B)$",
      "$P(A \\cap \\bar{B}) + P(\\bar{A} \\cap B)$",
      "$P(A \\cup \\bar{B}) + P(\\bar{A} \\cup B)$"
    ],
    "answer": 2,
    "explanation": "The probability that exactly one of $A$ and $B$ occurs means either $A$ occurs without $B$, or $B$ occurs without $A$. This is the union of two disjoint events: $(A \\cap \\bar{B})$ and $(\\bar{A} \\cap B)$. Hence, the probability is $P(A \\cap \\bar{B}) + P(\\bar{A} \\cap B)$."
  },
  {
    "id": 58,
    "question": "Which of the following is not a convex set?",
    "options": [
      "$\\{(x, y) : |x| \\le 4, |y| \\le 3\\}$",
      "$\\left\\{ (x, y) : 1 \\le x^2 + y^2 \\le 9\\right\\}$",
      "$\\left\\{ (x, y) : y^2 \\le 4x\\right\\}$",
      "$\\{(x, y) : y = 2x\\}$"
    ],
    "answer": 1,
    "explanation": "A convex set is one in which, for any two points in the set, the entire line segment joining them also lies in the set. \n\n- Option (1) is a rectangle, which is convex. \n- Option (2) describes an annulus (the region between two concentric circles with radii 1 and 3). This is not convex, because if you take one point on the inner circle and another on the opposite side, the line segment between them will pass through the excluded interior region $(x^2 + y^2 < 1).$ \n- Option (3) is a parabola-shaped region that is convex. \n- Option (4) is a straight line, which is convex. \n\nHence, the set in option (2) is not convex."
  },
  {
    "id": 59,
    "question": "Let $A \\in M_2(R)$ such that tr$(A) = -5$ and $\\det(A) = 4.$ Then the characteristic equation of $A^{-1}$ is",
    "options": [
      "$x^2 - 5x + 4 = 0$",
      "$x^2 + 5x + 4 = 0$",
      "$4x^2 - 5x + 1 = 0$",
      "$4x^2 + 5x + 1 = 0$"
    ],
    "answer": 3,
    "explanation": "The characteristic polynomial of $A$ is $p_A(x) = x^2 - (\\text{tr} A)x + \\det(A) = x^2 + 5x + 4$. The eigenvalues of $A$ are the roots of this polynomial. If $\\lambda$ is an eigenvalue of $A$, then $1/\\lambda$ is an eigenvalue of $A^{-1}$. Hence, the characteristic polynomial of $A^{-1}$ is $4x^2 + 5x + 1.$ Therefore, the answer is option (4)."
  },
  {
    "id": 60,
    "question": "The value of the integral $\\int_{1}^{2}\\frac{1}{\\sqrt{(x-1)(2-x)}}dx$ is",
    "options": [
      "$\\pi$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "$4\\pi$"
    ],
    "answer": 0,
    "explanation": "Set $x = 1 + \\sin^2\\theta.$ Then $dx = 2\\sin\\theta\\cos\\theta\\,d\\theta$ and \n$\\sqrt{(x-1)(2-x)} = \\sqrt{\\sin^2\\theta\\cos^2\\theta} = \\sin\\theta\\cos\\theta$ (for $\\theta \\in [0,\\tfrac{\\pi}{2}]$).\nThus the integrand becomes\n$\\frac{1}{\\sin\\theta\\cos\\theta}\\cdot 2\\sin\\theta\\cos\\theta = 2.$\nWhen $x=1, \\sin^2\\theta=0$ so $\\theta=0;$ when $x=2, \\sin^2\\theta=1$ so $\\theta=\\tfrac{\\pi}{2}.$\nTherefore\n\\[\\int_{1}^{2}\\frac{1}{\\sqrt{(x-1)(2-x)}}\\,dx = \\int_{0}^{\\pi/2} 2\\,d\\theta = 2\\cdot\\frac{\\pi}{2} = \\pi.\\]\nSo the value is $\\pi$."
  },    
];
    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
