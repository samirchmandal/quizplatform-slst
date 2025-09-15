exports.handler = async (event, context) => {
    const questions = [
  {
    "id": 1,
    "question": "If a plane has intercepts $l, m, n$ on the axes and be at a distance '$p$' from the origin, then",
    "options": [
      "$l^2+m^2+n^2=p^2$",
      "$l^{-2}+m^{-2}+n^{-2}=p^2$",
      "$l^{-2}+m^{-2}+n^{-2}=p^{-2}$",
      "$l^2+m^2+n^2=p^{-2}$"
    ],
    "answer": 2,
    "explanation": "The equation of a plane with intercepts $l, m, n$ is $\\frac{x}{l} + \\frac{y}{m} + \\frac{z}{n} = 1.$  For the plane $\\frac{x}{l} + \\frac{y}{m} + \\frac{z}{n} - 1=0$, the distance from the origin is $p = \\frac{|-1|}{\\sqrt{\\frac{1}{l^2} +  \\frac{1}{m^2} + \\frac{1}{n^2}}}$ which simplifies to  $l^{-2}+m^{-2}+n^{-2}=p^{-2}$."
  },
  
  {
    "id": 2,
    "question": "Which of the following statements is false?",
    "options": [
      "The arbitrary union of open sets is open.",
      "The arbitrary union of closed sets is closed.",
      "The arbitrary intersection of closed sets is closed.",
      "The finite intersection of closed sets is closed."
    ],
    "answer": 1,
    "explanation": "The arbitrary union of closed sets is not always closed. For example, consider the sets $A_n = [\\frac{1}{n}, 1]$ for $n=1, 2, 3, ...$ The union of these sets is $(0, 1],$ which is not a closed set."
  },
  {
    "id": 3,
    "question": "Let $A=\\begin{pmatrix}1&-1&0\\\\ 1&2&-1\\\\ 3&2&-2\\end{pmatrix}$. Then the eigenvalues of $A$ are",
    "options": [
      "$1, 1, 1$",
      "$-1, -1, 1$",
      "$1, 1, -1$",
      "$-1, -1, -1$"
    ],
    "answer": 2,
    "explanation": "Let us match the sum of the eigenvalues to the trace which is 1."
  },
  {
    "id": 4,
    "question": "The vector equation $\\vec{r}=\\vec{a}+t\\vec{b}$ ($t,$ a parameter; $\\vec{a}$, $\\vec{b}$ constant vectors), represents",
    "options": [
      "a straight line passing through points having position vectors $\\vec{a}$ and $\\vec{b}$",
      "a straight line passing through point $\\vec{a}$ and parallel to $\\vec{b}$",
      "a straight line passing through point $\\vec{a}$ and perpendicular to $\\vec{b}$",
      "a straight line perpendicular to both $\\vec{a}$ and $\\vec{b}$"
    ],
    "answer": 1,
    "explanation": "The vector equation $\\vec{r}=\\vec{a}+t\\vec{b}$ represents a straight line. The term $\\vec{a}$ gives a position vector of a point on the line, and the term $t\\vec{b}$ gives the direction of the line. Therefore, the line passes through the point with position vector $\\vec{a}$ and is parallel to the vector $\\vec{b}$."
  },
  {
    "id": 5,
    "question": "The rank of the matrix $\\begin{pmatrix}2&1&4&3\\\\ 3&2&6&9\\\\ 1&1&2&6\\end{pmatrix}$ is",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "The rank of a matrix is the number of linearly independent rows or columns. We can find the rank by performing row operations to reduce the matrix to row-echelon form. The number of non-zero rows is the rank. The third row can be obtained from the first two rows ($R_3 = R_2 - R_1$), indicating linear dependence.  Whereas first two rows are not multiple of each other. The rank is therefore 2."
  },
  {
    "id": 6,
    "question": "Let $A$ be a real square matrix of order 3. Then which of the following statements is always true?",
    "options": [
      "$tr(AA^T)=0$",
      "$tr(AA^T)\\ge0$",
      "$tr(AA^T)\\le0$",
      "$tr(AA^T)\\ne0$"
    ],
    "answer": 1,
    "explanation": "The trace of a matrix is the sum of its diagonal elements. For any real square matrix $A,$ the trace of the product $AA^T$ is the sum of the squares of all the elements of $A.$ Since the elements are real, the sum of their squares is always greater than or equal to zero. Thus, $tr(AA^T) \\ge 0$."
  },
  {
    "id": 7,
    "question": "Due to application of the force $\\vec{F}=3\\vec{i}+2\\vec{j}+4\\vec{k}$ a particle changes its position from the point $\\vec{r_1} = \\vec{i}+\\vec{j}+\\vec{k}$ to the point $\\vec{r_2} = 2\\vec{i}-3\\vec{j}+4\\vec{k}$. The work done by the force is",
    "options": [
      "7 unit",
      "5 unit",
      "0 unit",
      "2 unit"
    ],
    "answer": 0,
    "explanation": "Work done is given by the dot product of the force and the displacement vector,  $W =\\vec{F} \\cdot \\vec{d}$. The displacement vector is $\\vec{d} = \\vec{r_2} - \\vec{r_1} = (2-1)\\vec{i} + (-3-1)\\vec{j} + (4-1)\\vec{k} = \\vec{i} - 4\\vec{j} + 3\\vec{k}$. Work done $W =(3\\vec{i}+2\\vec{j}+4\\vec{k}) \\cdot (\\vec{i}-4\\vec{j}+3\\vec{k}) = 3(1) + 2(-4) + 4(3) = 3 - 8 + 12 = 7$."
  },
  {
    "id": 8,
    "question": "Let $f(x,y)=x^5y^2 \\tan^{-1}(\\frac{y}{x})$. Then $x\\frac{\\partial f}{\\partial x}+y\\frac{\\partial f}{\\partial y}$ equals to",
    "options": [
      "$2f(x,y)$",
      "$7f(x,y)$",
      "$3f(x,y)$",
      "$5f(x,y)$"
    ],
    "answer": 1,
    "explanation": "This is a homogeneous function of degree 7. Using Euler's theorem for homogeneous functions, if a function $f(x, y)$ is homogeneous of degree $n,$ then $x\\frac{\\partial f}{\\partial x}+y\\frac{\\partial f}{\\partial y} = nf(x, y)$. Here the degree is $5+2=7.$ So, the result is $7f(x,y)$."
  },
  {
    "id": 9,
    "question": "Let $\\{x_n\\}_{1}^{\\infty}$ be a convergent sequence of real numbers. Then the sequence $\\{x_n\\}_{1}^{\\infty}$ is",
    "options": [
      "bounded.",
      "unbounded.",
      "bounded below but unbounded above.",
      "bounded above but unbounded below."
    ],
    "answer": 0,
    "explanation": "By a fundamental theorem in real analysis, every convergent sequence of real numbers is bounded. This means there exist real numbers $M$ and $m$ such that $m \\le x_n \\le M$ for all $n.$"
  },
  {
    "id": 10,
    "question": "The operation $\\text{div}(\\vec{r})$ gives",
    "options": [
      "3",
      "0",
      "$\\vec{r}$",
      "$3\\vec{r}$"
    ],
    "answer": 0,
    "explanation": "The position vector is $\\vec{r} = x\\vec{i} + y\\vec{j} + z\\vec{k}$. The divergence operator is $\\text{div} = \\nabla \\cdot = (\\frac{\\partial}{\\partial x}\\vec{i} + \\frac{\\partial}{\\partial y}\\vec{j} + \\frac{\\partial}{\\partial z}\\vec{k}) \\cdot$. The divergence of $\\vec{r}$ is $\\text{div}(\\vec{r}) = \\frac{\\partial}{\\partial x}(x) + \\frac{\\partial}{\\partial y}(y) + \\frac{\\partial}{\\partial z}(z) = 1 + 1 + 1 = 3$."
  },
  {
    "id": 11,
    "question": "Which of the following sets is not countable?",
    "options": [
      "$\\{\\frac{1}{n}:n\\in\\mathbb{N}\\}$",
      "$\\mathbb{Z}$",
      "$\\{\\sqrt{x}:x\\in(0,1)\\}$",
      "$\\{x\\in\\mathbb{R}:\\sin x=0\\}$"
    ],
    "answer": 2,
    "explanation": "A set is countable if its elements can be put into a one-to-one correspondence with the set of natural numbers. The set of integers $(\\mathbb{Z})$ and the set of roots of $\\sin x = 0$ (which are multiples of $\\pi$) are countable. The set $\\{\\frac{1}{n}:n\\in\\mathbb{N}\\}$ is also countable. However, the interval $(0, 1)$ is uncountable, and since the function $f(x) = \\sqrt{x}$ is a bijection from $(0, 1)$ to $(0, 1),$ the set of square roots of numbers in $(0, 1)$ is also uncountable."
  },
  {
    "id": 12,
    "question": "The function $y=|x-2025|$, $x\\in\\mathbb{R}$ is continuous",
    "options": [
      "only at $x=2025$.",
      "everywhere except at $x=2025$.",
      "only at $x=0$.",
      "everywhere."
    ],
    "answer": 3,
    "explanation": "The absolute value function is continuous everywhere. The function $y=|x-2025|$ is a composition of a continuous function $(y = |u|)$ and a continuous function $(u = x - 2025),$ so it is continuous everywhere."
  },
  {
    "id": 13,
    "question": "Consider the statement 'For each $n,$ there exists an abelian group of order $n$'. In this statement $n$ is",
    "options": [
      "any positive integer.",
      "only a prime number.",
      "only an even integer.",
      "only an odd integer."
    ],
    "answer": 0,
    "explanation": "For any positive integer $n,$ we can always construct an abelian group of order $n.$ The simplest example is the cyclic group $\\mathbb{Z}_n$ under addition modulo $n,$ which is always abelian."
  },
  {
    "id": 14,
    "question": "The minimum value of $3x+2y$ when $x, y$ are positive real numbers satisfying the condition $x^2y^3=48$ is",
    "options": [
      "10",
      "5",
      "$\\frac{48}{5}$",
      "$\\frac{5}{48}$"
    ],
    "answer": 0,
    "explanation": "We can use weighted AM-GM inequality. We use <br> \
    $\\frac{2(\\frac{3x}{2})+3(\\frac{2y}{3})}{5}\\geq \\sqrt[5]{(\\frac{3x}{2})^2(\\frac{2y}{3})^3}$. <br> Or, $3x+2y\\geq 5 \\cdot \\sqrt[5]{\\frac{2\\times 48}{3}}= 10.$"
  },
  {
    "id": 15,
    "question": "$\\lim\\limits_{n\\rightarrow\\infty}\\left(1+\\frac{1}{2n}\\right)^{3n}$ is equal to",
    "options": [
      "$e^{2/3}$",
      "$e^{3/2}$",
      "$e$",
      "0"
    ],
    "answer": 1,
    "explanation": "The limit is in the form of $\\lim\\limits_{x\\rightarrow\\infty}(1+\\frac{k}{x})^{x} = e^k$. In this case, we have $\\lim\\limits_{n\\rightarrow\\infty}(1+\\frac{1}{2n})^{3n} = \\lim\\limits_{n\\rightarrow\\infty}((1+\\frac{1}{2n})^{2n})^{\\frac{3}{2}}$. The inner limit is of the form $\\lim\\limits_{x\\rightarrow\\infty}(1+\\frac{1}{x})^{x} = e$, so the total limit is $e^{3/2}$."
  },
  {
    "id": 16,
    "question": "In a simplex method, if there is a tie in selecting the departing vectors, the next solution is bound to be",
    "options": [
      "optimal",
      "infeasible",
      "non-degenerate",
      "degenerate"
    ],
    "answer": 3,
    "explanation": "In the simplex method, a tie in the ratio test for selecting the departing variable indicates that the current basic feasible solution is degenerate. This means one or more basic variables have a value of zero."
  },
  {
    "id": 17,
    "question": "$\\Delta^{10}[(1-ax)(1-bx^2)(1-cx^3)(1-dx^4)]$ has the value",
    "options": [
      "$0$",
      "$1$",
      "$abcd$",
      "$10! abcd$"
    ],
    "answer": 3,
    "explanation": "The expression is a polynomial of degree $1+2+3+4 = 10$. The operator $\\Delta$ is the forward difference operator. The tenth forward difference of a tenth-degree polynomial with a leading coefficient is a constant. The value of $\\Delta^n [P(x)]$ for a polynomial of degree $n$ is $n!a_n$. Here the polynomial is of degree 10. The coefficient of $x^{10}$ is $(-a)(-b)(-c)(-d) = abcd$. So $\\Delta^{10}f(x) = 10! abcd$."
  },
  {
    "id": 18,
    "question": "If $G$ be a group of order $p^2$ where $p$ is a prime, then $G$ must",
    "options": [
      "be a cyclic group.",
      "be a non-commutative group.",
      "be a commutative group.",
      "have an element of order 2."
    ],
    "answer": 2,
    "explanation": "A group of order $p^2$, where $p$ is a prime, is always an abelian (commutative) group."
  },
  {
    "id": 19,
    "question": "The order of convergence of Newton-Raphson method is",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "The Newton-Raphson method for finding roots of a function has a quadratic order of convergence, which means the number of correct decimal places doubles with each iteration, assuming the initial guess is close enough to the root."
  },
  {
    "id": 20,
    "question": "For all $\\alpha, \\beta$ in a Euclidean space V",
    "options": [
      "$(\\alpha,\\beta)=0$ implies $||\\alpha+\\beta||=||\\alpha-\\beta||$ but not conversely.",
      "$||\\alpha+\\beta||=||\\alpha-\\beta||$ implies $(\\alpha,\\beta)=0$ but not conversely.",
      "$||\\alpha+\\beta||=||\\alpha-\\beta||$ implies and implied by $(\\alpha,\\beta)=0$.",
      "The relations $||\\alpha+\\beta||=||\\alpha-\\beta||$ and $(\\alpha,\\beta)=0$ are independent."
    ],
    "answer": 2,
    "explanation": "The relation $||\\alpha+\\beta||=||\\alpha-\\beta||$ is equivalent to $(\\alpha+\\beta, \\alpha+\\beta) = (\\alpha-\\beta, \\alpha-\\beta)$, which simplifies to $(\\alpha,\\alpha) + 2(\\alpha,\\beta) + (\\beta,\\beta) = (\\alpha,\\alpha) - 2(\\alpha,\\beta) + (\\beta,\\beta)$, which in turn simplifies to $4(\\alpha,\\beta) = 0$, or $(\\alpha,\\beta)=0$. Thus, they are equivalent."
  },
  {
    "id": 21,
    "question": "The value of $\\int_{-1}^{3}|x|dx$ has been evaluated numerically by Trapezoidal and Simpson's $\\frac{1}{3}$ rule, taking equal sub-intervals. Then",
    "options": [
      "Trapezoidal rule gives the better result than Simpson's $\\frac{1}{3}$ rule.",
      "Simpson's $\\frac{1}{3}$ rule gives the better result than Trapezoidal rule.",
      "Both the rules give better result.",
      "The results of these two methods cannot be compared."
    ],
    "answer": 3,
    "explanation": "The integral $\\int_{-1}^{3}|x|dx = \\int_{-1}^{0}-x dx + \\int_{0}^{3}x dx = [-\\frac{x^2}{2}]_{-1}^{0} + [\\frac{x^2}{2}]_{0}^{3} = (0 - (-\\frac{1}{2})) + (\\frac{9}{2} - 0) = \\frac{1}{2} + \\frac{9}{2} = 5$. If we take number of intervals, $n=2$ then Simpson's $\\frac{1}{3}$ rule gives the value $5.33$ whereas Trapezoidal gives 6, so here Simpsons $\\frac{1}{3}$ rule wins. Now if $n=4$, then Simpson's $\\frac{1}{3}$ rule gives the value $4.67$ whereas Trapezoidal gives 5, so here Trapezoidal rule wins. In conclusion, we say they cannot be compared."
  },
  {
    "id": 22,
    "question": "Let $f(x)=\\begin{cases}\\phantom{oo}x,&x\\in\\mathbb{Q}\\\\ 2-x, &x\\in\\mathbb{R}\\backslash\\mathbb{Q}\\end{cases}$. Then $\\lim\\limits_{x\\rightarrow c}f(x)$ exists",
    "options": [
      "for all values of $c\\in \\mathbb{R}$",
      "for $c\\ne 1$.",
      "for $c=1$ only.",
      "for no values of $c$."
    ],
    "answer": 2,
    "explanation": "For the limit to exist at a point $c$, the function must approach the same value from both rational and irrational numbers. This happens only when $x = 2-x$, which gives $x=1.$ At any other point, the function will approach two different values from rational and irrational numbers."
  },
  {
    "id": 23,
    "question": "The K.E. of a body rotating about an axis is",
    "options": [
      "$\\frac{1}{2}MK^2\\dot{\\theta}^2$",
      "$MK^2\\dot{\\theta}^2$",
      "$\\frac{1}{3}MK^2\\dot{\\theta}^2$",
      "$MK^2\\dot{\\theta}$"
    ],
    "answer": 0,
    "explanation": "The kinetic energy of a rotating body is given by K.E. $= \\frac{1}{2}I\\omega^2$, where $I$ is the moment of inertia and $\\omega$ is the angular velocity. The moment of inertia is $I = MK^2$ where $K$ is the radius of gyration. The angular velocity is $\\omega = \\dot{\\theta}$. Substituting these values, we get K.E. $= \\frac{1}{2}MK^2\\dot{\\theta}^2$."
  },
  {
    "id": 24,
    "question": "The value of $\\begin{vmatrix}a^2&a&1\\\\ b^2&b&1\\\\ c^2&c&1\\end{vmatrix};~ a, b, c\\in\\mathbb{R}$ is",
    "options": [
      "$(a-b)(b-c)(c-a)$",
      "$-(a-b)(b-c)(c-a)$",
      "$(a-b)(b+c)(c-a)$",
      "$-(a-b)(b+c)(c-a)$"
    ],
    "answer": 1,
    "explanation": "This is a Vandermonde determinant. The value of this determinant is $-(a-b)(b-c)(c-a)$."
  },
  {
    "id": 25,
    "question": "A relation $\\rho$ on $\\mathbb Z$ defined by $a\\rho b~ (a, b\\in \\mathbb Z)$ holds if and only if $a-b < 3$. Then",
    "options": [
      "$\\rho$ is only reflexive.",
      "$\\rho$ is reflexive and symmetric.",
      "$\\rho$ is reflexive and transitive.",
      "$\\rho$ is an equivalence relation."
    ],
    "answer": 0,
    "explanation": "The relation is reflexive because $a-a=0<3$. It is not symmetric because if $a-b<3$, then $b-a$ is not necessarily less than 3 (e.g., if $a=5, b=2,$ then $5-2=3$ is not $<3$, but $2-5=-3<3$). It is not transitive because if $a-b<3$ and $b-c<3$, then $a-c=(a-b)+(b-c)$ is not necessarily less than 3 (e.g., if $a=5, b=3, c=1,$ then $5-3=2<3$ and $3-1=2<3$, but $5-1=4$ is not $<3$). Therefore, $\\rho$ is only reflexive."
  },
  {
    "id": 26,
    "question": "If $x^3+3px+q~(p,q\\in\\mathbb{R})$ has a factor of the form $(x-\\alpha)^2$, then",
    "options": [
      "$p^2+4q=0$",
      "$p^2+4q^3=0$",
      "$q^2+4p^3=0$",
      "$q^2+4p=0$"
    ],
    "answer": 2,
    "explanation": "If $(x-\\alpha)^2$ is a factor, then $\\alpha$ is a repeated root. This means that $f(\\alpha)=0$ and $f'(\\alpha)=0$. $f(x) = x^3+3px+q=0 \\implies \\alpha^3+3p\\alpha+q=0$. $f'(x)=3x^2+3p=0 \\implies 3\\alpha^2+3p=0 \\implies \\alpha^2=-p$. Substituting $\\alpha^2=-p$ into the first equation, we get $\\alpha(-p)+3p\\alpha+q=0 \\implies 2p\\alpha+q=0 \\implies \\alpha = -\\frac{q}{2p}.$ Squaring this, we get $\\alpha^2=\\frac{q^2}{4p^2}$. Since $\\alpha^2=-p$, we have $-p = \\frac{q^2}{4p^2}$, which gives $q^2+4p^3=0.$"
  },
  {
    "id": 27,
    "question": "The 3rd central moment for Normal distribution $N(\\mu,\\sigma)$ is",
    "options": [
      "$3\\sigma^3$",
      "$2\\sigma^3$",
      "$\\sigma^3$",
      "0"
    ],
    "answer": 3,
    "explanation": "The third central moment measures the skewness of a distribution. A normal distribution is symmetric about its mean, so its third central moment is always zero."
  },
  {
    "id": 28,
    "question": "The area of the region bounded by $x=\\pm1$, $y=0$ and $y=x^2$ is",
    "options": [
      "$\\frac{1}{3}$ square unit",
      "$\\frac{2}{3}$ square unit",
      "1 square unit",
      "2 square unit"
    ],
    "answer": 1,
    "explanation": "The area is given by the definite integral of the function from $x=-1$ to $x=1.$ The function is $y=x^2$ and the lower boundary is $y=0.$ So the area is $\\int_{-1}^{1}x^2 dx$. Since $x^2$ is an even function, this is equal to $2\\int_{0}^{1}x^2 dx = \\frac{2}{3}.$"
  },
  {
    "id": 29,
    "question": "Let $y_1(x)$ and $y_2(x)$ be two solutions of $\\frac{dy}{dx}=x$ with the initial conditions $y_1(0)=0$ and $y_2(0)=1$. Then",
    "options": [
      "$y_1$ and $y_2$ will intersect at the origin.",
      "$y_1$ and $y_2$ will intersect at (0, 1).",
      "$y_1$ and $y_2$ will intersect at (1, 0).",
      "$y_1$ and $y_2$ will never intersect."
    ],
    "answer": 3,
    "explanation": "Integrating $\\frac{dy}{dx}=x$ gives $y = \\frac{x^2}{2} + C$. For $y_1(x)$, using the initial condition $y_1(0)=0$, we get $0 = 0 + C$, so $C=0$. Thus $y_1(x) = \\frac{x^2}{2}$. For $y_2(x)$, using the initial condition $y_2(0)=1$, we get $1 = 0 + C$, so $C=1$. Thus $y_2(x) = \\frac{x^2}{2} + 1$. The two functions are $y_1(x) = \\frac{x^2}{2}$ and $y_2(x) = \\frac{x^2}{2}+1$. Since they differ by a constant, they are parallel parabolas and will never intersect."
  },
  {
    "id": 30,
    "question": "Let $A=\\{1,1+\\frac{1}{1!},1+\\frac{1}{1!}+\\frac{1}{2!},1+\\frac{1}{1!}+\\frac{1}{2!}+\\frac{1}{3!},\\cdots\\}$. The supremum of $A$",
    "options": [
      "is an irrational number.",
      "is a rational number.",
      "does not exist.",
      "is an integer."
    ],
    "answer": 0,
    "explanation": "The set $A$ is a sequence of partial sums of the series $\\sum\\limits\\limits_{n=0}^{\\infty}\\frac{1}{n!}$, which converges to the value of Euler's number, $e$. Since the terms are all positive, the sequence is strictly increasing, and its limit is its supremum. The number $e$ is a well-known irrational number."
  },
  {
    "id": 31,
    "question": "If $A$ contains 2 elements and $B$ contains 4 elements, then the power set of $A\\times B$ will contain",
    "options": [
      "$2^6$ elements",
      "$2^{2^3}$ elements",
      "$2^{3^2}$ elements",
      "$3^{2^2}$ elements"
    ],
    "answer": 1,
    "explanation": "The number of elements in the Cartesian product $A \\times B$ is the product of the number of elements in $A$ and $B,$ which is $2 \\times 4 = 8=2^3$. The number of elements in the power set of a set with $n$ elements is $2^n$. So, the power set of $A \\times B$ will contain $2^8 = 2^{2^3}$ elements."
  },
  {
    "id": 32,
    "question": "If each proper subgroup of a group is commutative, then the group",
    "options": [
      "is always commutative.",
      "is always cyclic.",
      "is of prime order.",
      "may not be a commutative group."
    ],
    "answer": 3,
    "explanation": "A group whose proper subgroups are all commutative may not be commutative itself. For example, the symmetric group $S_3$ has order 6. Its proper subgroups are all cyclic (and therefore abelian), but $S_3$ itself is non-abelian."
  },
  {
    "id": 33,
    "question": "The equation of the straight line through the point $(\\alpha, \\beta, \\gamma)$ which is parallel to $z$-axis is",
    "options": [
      "$\\frac{x-\\alpha}{0}=\\frac{y-\\beta}{0}=\\frac{z-\\gamma}{1}$",
      "$\\frac{x-\\alpha}{1}=\\frac{y-\\beta}{1}=\\frac{z-\\gamma}{0}$",
      "$\\frac{x-\\alpha}{1}=\\frac{y-\\beta}{1}=\\frac{z-\\gamma}{1}$",
      "$\\frac{x-\\alpha}{1}=\\frac{y-\\beta}{0}=\\frac{z-\\gamma}{1}$"
    ],
    "answer": 0,
    "explanation": "A line parallel to the $z$-axis has a direction vector of $(0,0,1)$. The equation of a line passing through a point $(\\alpha, \\beta, \\gamma)$ with a direction vector $(0, 0, 1)$ is $\\frac{x-\\alpha}{0}=\\frac{y-\\beta}{0}=\\frac{z-\\gamma}{1}.$"
  },
  {
    "id": 34,
    "question": "If $J_n=\\int_{0}^{\\frac{\\pi}{4}}\\tan^n x dx$ where $n\\in\\mathbb{N}-\\{1\\}$, then",
    "options": [
      "$J_n+J_{n-2}=\\frac{-1}{n-1}$",
      "$J_n-J_{n-2}=\\frac{1}{n-1}$",
      "$J_n+J_{n-2}=\\frac{1}{n-1}$",
      "$J_n-J_{n-2}=\\frac{-1}{n-1}$"
    ],
    "answer": 2,
    "explanation": "Consider $J_n+J_{n-2} = \\int_{0}^{\\frac{\\pi}{4}}\\tan^n x dx + \\int_{0}^{\\frac{\\pi}{4}}\\tan^{n-2} x dx = \\int_{0}^{\\frac{\\pi}{4}}\\tan^{n-2} x (\\tan^2 x + 1) dx = \\int_{0}^{\\frac{\\pi}{4}}\\tan^{n-2} x \\sec^2 x dx$. Let $u = \\tan x$, then $du = \\sec^2 x dx$. The limits of integration become $u=0$ and $u=1.$ The integral is $\\int_{0}^{1}u^{n-2} du =  \\frac{1}{n-1}.$"
  },
  {
    "id": 35,
    "question": "The line segment $x+2y=1~ (0\\le x\\le1)$ is revolved about $x$-axis through $360^{\\circ}$. Then the volume of the solid generated is",
    "options": [
      "$\\frac{\\pi}{6}$ cubic unit",
      "$\\frac{\\pi}{12}$ cubic unit",
      "$\\frac{\\pi}{8}$ cubic unit",
      "$\\frac{\\pi}{10}$ cubic unit"
    ],
    "answer": 1,
    "explanation": "The volume of a solid of revolution about the $x$-axis is given by $V = \\pi \\int_{a}^{b}y^2 dx$. From the equation of the line, we have $2y = 1-x$, so $y = \\frac{1-x}{2}$. $y^2 = \\frac{(1-x)^2}{4}$. The volume is $V = \\pi \\int_{0}^{1}\\frac{(1-x)^2}{4} dx = \\frac{\\pi}{4} \\int_{0}^{1}(1-2x+x^2) dx = \\frac{\\pi}{4} [x - x^2 + \\frac{x^3}{3}]_{0}^{1} = \\frac{\\pi}{4} (1-1+\\frac{1}{3}) = \\frac{\\pi}{12}$.<br><br> \
    <strong>Alternately,</strong> the solid generated is a conic with radius $r=\\frac{1}{2}$ and height $h=1$. So its volume is given by $V= \\frac{1}{3}\\pi r^2h = \\frac{\\pi}{12}.$"
  },
  {
    "id": 36,
    "question": "The value of $\\int_{0}^{\\pi}\\frac{x\\sin x}{1+\\cos^2 x}dx$ is",
    "options": [
      "0",
      "$1$",
      "$\\frac{\\pi^2}{4}$",
      "$\\frac{\\pi^2}{2}$"
    ],
    "answer": 2,
    "explanation": "Use the property $\\int_{0}^{a}f(x)dx = \\int_{0}^{a}f(a-x)dx$. Let $I = \\int_{0}^{\\pi}\\frac{x\\sin x}{1+\\cos^2 x}dx$. Then $I = \\int_{0}^{\\pi}\\frac{(\\pi-x)\\sin (\\pi-x)}{1+\\cos^2 (\\pi-x)}dx = \\int_{0}^{\\pi}\\frac{(\\pi-x)\\sin x}{1+\\cos^2 x}dx$. Adding the two expressions for $I,$ we get $2I = \\int_{0}^{\\pi}\\frac{\\pi\\sin x}{1+\\cos^2 x}dx = \\pi\\int_{0}^{\\pi}\\frac{\\sin x}{1+\\cos^2 x}dx$. Let $u=\\cos x$, then $du = -\\sin x dx$. The limits become $1$ to $-1.$ Hence $2I = \\pi\\int_{1}^{-1}\\frac{-du}{1+u^2} = \\pi\\int_{-1}^{1}\\frac{du}{1+u^2} = \\pi[\\tan^{-1}u]_{-1}^{1} = \\pi(\\tan^{-1}(1)-\\tan^{-1}(-1)) = \\pi(\\frac{\\pi}{4}-(-\\frac{\\pi}{4})) = \\pi(\\frac{\\pi}{2}) = \\frac{\\pi^2}{2}$. So $I = \\frac{\\pi^2}{4}$."
  },
  {
    "id": 37,
    "question": "Let $V$ be a real vector space with $(\\alpha, \\beta, \\gamma)$ as a basis and let $S=\\{\\alpha+\\beta+\\gamma,\\beta+\\gamma,\\gamma\\}$. Then",
    "options": [
      "$S$ is linearly dependent.",
      "$S$ is linearly independent but $L(S)\\ne V.$",
      "$S$ is a basis of $V.$",
      "$L(S)$ is not a subset of $V.$"
    ],
    "answer": 2,
    "explanation": "Since $S$ has the same number of elements as the basis for $V,$ we only need to check if $S$ is linearly independent. Consider $c_1(\\alpha+\\beta+\\gamma) + c_2(\\beta+\\gamma) + c_3(\\gamma) = 0$. This can be rewritten as $c_1\\alpha + (c_1+c_2)\\beta + (c_1+c_2+c_3)\\gamma = 0$. Since $(\\alpha, \\beta, \\gamma)$ is a basis, they are linearly independent, so the coefficients must be zero: $c_1=0$, $c_1+c_2=0$, $c_1+c_2+c_3=0$. This implies $c_1=c_2=c_3=0$. Thus $S$ is linearly independent, and since it has the same number of elements as the basis for $V,$ it is also a basis for $V.$"
  },
  {
    "id": 38,
    "question": "The probability of getting the $r$-th success at the $n$-th trial of a Bernouli trial $B(n,p)$ is",
    "options": [
      "${}^{n}C_r p^r q^{n-r}$",
      "${}^{n-1}C_{r-1} p^r q^{n-r}$",
      "${}^{n-1}C_{r-1} p^{r-1} q^{n-r}$",
      "${}^{n-1}C_{r-1} p^{r} q^{n-r-1}$"
    ],
    "answer": 1,
    "explanation": "To have the $r$-th success on the $n$-th trial, we must have had $r-1$ successes in the previous $n-1$ trials, and the $n$-th trial must be a success. The probability of having $r-1$ successes in $n-1$ trials is given by the binomial distribution as ${}^{n-1}C_{r-1} p^{r-1} q^{(n-1)-(r-1)} = {}^{n-1}C_{r-1} p^{r-1} q^{n-r}$. The probability of a success on the $n$-th trial is $p.$ So the total probability is (${}^{n-1}C_{r-1} p^{r-1} q^{n-r}) \\cdot p = {}^{n-1}C_{r-1} p^r q^{n-r}.$"
  },
  {
    "id": 39,
    "question": "The number of generators of the group $(\\mathbb{Z}_{100},+)$ of integers modulo $100$ is",
    "options": [
      "$9$",
      "$40$",
      "$12$",
      "$8$"
    ],
    "answer": 1,
    "explanation": "The number of generators of a cyclic group of order $n$ is given by Euler's totient function $\\phi(n)$. Here $n=100$. Thus $\\phi(100) = \\phi(2^2 \\cdot 5^2) = 2^2\\cdot 5^2\\cdot\\frac{1}{2}\\cdot \\frac{4}{5} = 40.$"
  },
  {
    "id": 40,
    "question": "If a particle moves on a plane such that its radial and cross radial velocities are equal, then its path will be",
    "options": [
      "circle",
      "straight line",
      "equiangular spiral",
      "ellipse"
    ],
    "answer": 2,
    "explanation": "Radial velocity is $\\dot{r}$ and cross-radial velocity is $r\\dot{\\theta}$. If they are equal, then $\\dot{r} = r\\dot{\\theta}$. This is a separable differential equation: $\\frac{dr}{r} = d\\theta$. Integrating both sides gives $\\ln r = \\theta + C$, which can be written as $r = e^{\\theta+C} = e^C e^{\\theta} = A e^{\\theta}$, where $A=e^C$. This is the polar equation of an equiangular spiral."
  },
  {
    "id": 41,
    "question": "Let $f_n(x)=x^n$, $x\\in[0,1]$ and $n\\in\\mathbb{N}$. Then",
    "options": [
      "$\\{f_n\\}_{n=1}^{\\infty}$ is not pointwise convergent on $[0, 1]$.",
      "$\\{f_n\\}_{n=1}^{\\infty}$ is pointwise convergent but not uniformly convergent on $[0, 1]$.",
      "$\\{f_n\\}_{n=1}^{\\infty}$ is uniformly convergent on $[0, 1]$.",
      "$\\{f_n\\}_{n=1}^{\\infty}$ is convergent only for $x=0$."
    ],
    "answer": 1,
    "explanation": "The sequence is pointwise convergent to the function $f(x) = 0$ for $x \\in [0,1)$ and $f(1)=1$. The limit function is not continuous. A sequence of continuous functions that converges uniformly must have a continuous limit function. Since the limit function is not continuous, the convergence is not uniform."
  },
  {
    "id": 42,
    "question": "The linear map $T:\\mathbb{R}^3\\rightarrow\\mathbb{R}^3$ is defined by $T(x,y,z)=(x-y,x+2y,y+3z)$, $(x,y,z)\\in\\mathbb{R}^3$. Then rank of $T$ is",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "answer": 3,
    "explanation": "The matrix representation of the linear transformation $T$ is $A = \\begin{pmatrix}1&-1&0\\\\ 1&2&0\\\\ 0&1&3\\end{pmatrix}$. To find the rank, we can find the determinant. $\\det(A) = 9 \\ne 0$. Since the determinant is non-zero, the matrix is non-singular, and its rank is equal to its dimension, which is $3.$"
  },
  {
    "id": 43,
    "question": "The pole of the plane $lx+my+nz=p$ with respect to the sphere $x^2+y^2+z^2=a^2$ is",
    "options": [
      "$(al^2,am^2,an^2)$",
      "$(la^2,ma^2,na^2)$",
      "$(\\frac{la^2}{p},\\frac{ma^2}{p},\\frac{na^2}{p})$",
      "$(lpa^2,mpa^2,npa^2)$"
    ],
    "answer": 2,
    "explanation": "The polar plane of a point $(x_1,y_1,z_1)$ with respect to the sphere $x^2+y^2+z^2=a^2$ is given by $xx_1+yy_1+zz_1=a^2$. Comparing this to the given plane $lx+my+nz=p$, we can find the coordinates of the pole. The equations are proportional, so $\\frac{x_1}{l}=\\frac{y_1}{m}=\\frac{z_1}{n}=\\frac{a^2}{p}$. From this, we can solve for $x_1, y_1, z_1$ and get $x_1=\\frac{la^2}{p}$, $y_1=\\frac{ma^2}{p}$, $z_1=\\frac{na^2}{p}$."
  },
  {
    "id": 44,
    "question": "Let $f$ be a bounded function on $[a, b]$ and $P_1$ be a partition of $[a, b].$ If $P_2$ be a refinement of $P_1$, then",
    "options": [
      "$L(P_1;f)\\le L(P_2;f)$",
      "$U(P_2;f)\\le L(P_1;f)$",
      "$U(P_1;f)\\le U(P_2;f)$",
      "$L(P_2;f)\\ge U(P_1;f)$"
    ],
    "answer": 0,
    "explanation": "For a refinement of a partition, the lower Darboux sum will always be greater than or equal to the lower Darboux sum of the original partition. This is because adding a point to a subinterval will cause the infimum of the function to increase or stay the same. Therefore, $L(P_1;f)\\le L(P_2;f)$. Similarly, the upper Darboux sum for the refinement will be less than or equal to the upper Darboux sum of the original partition."
  },
  {
    "id": 45,
    "question": "Which of the following statements is false?",
    "options": [
      "Every cyclic group is commutative.",
      "Every group of prime order is cyclic.",
      "There exists a group of order 4 which is commutative but not cyclic.",
      "Every group of order 4 is cyclic."
    ],
    "answer": 3,
    "explanation": "The statement 'Every group of order 4 is cyclic' is false. The Klein four-group, $K_4 = \\{e, a, b, c\\}$ with $a^2=b^2=c^2=e$ and $ab=ba=c$, is an example of a group of order 4 that is commutative but not cyclic. Every element has order 2, so there is no generator of order 4."
  },
  {
    "id": 46,
    "question": "If $A$ be real matrix of order $3$ with det $A = 9,$ then det (adj $A$) equals to",
    "options": [
      "$18$",
      "$81$",
      "$9$",
      "$-81$"
    ],
    "answer": 1,
    "explanation": "For a square matrix $A$ of order $n$, we have the property $\\det(\\text{adj } A) = (\\det A)^{n-1}$. In this case, $n=3$ and det $A = 9.$ So, $\\det(\\text{adj }A) = (9)^{3-1} = 9^2 = 81.$"
  },
  {
    "id": 47,
    "question": "Let $A$ be a $3\\times3$ real matrix with eigenvalues $1, -1, 3.$ Then",
    "options": [
      "$A^2+A$ is non-singular.",
      "$A^2-A$ is non-singular.",
      "$A^2+3A$ is non-singular.",
      "$A^2-3A$ is non-singular."
    ],
    "answer": 3,
    "explanation": "If $\\lambda$ is an eigenvalue of $A,$ then $P(\\lambda)$ is an eigenvalue of the matrix $P(A)$ where $P$ is a polynomial. For the matrix $A^2-3A$, the eigenvalues will be $\\lambda^2-3\\lambda$. For the eigenvalues of $A~ (1, -1, 3),$ the eigenvalues of $A^2-3A$ are: $1^2-3(1) = 1-3=-2$, $(-1)^2-3(-1)=1+3=4$, and $3^2-3(3)=9-9=0$. Since one of the eigenvalues is 0, the matrix $A^2-3A$ is singular (not non-singular). Similarly $(-1)^2+(-1)=0$ is an eigenvalue of $A^2+A,~ 1^2-1=0$ is an eigenvalue of $A^2-A.$ Thus these are not non-singular. So only non-singluar matrix is $A^2+3A.$"
  },
  {
    "id": 48,
    "question": "Let $A$ be a set of 3 elements and $B$ be a set of 4 elements. Then the total number of mappings from $A$ to $B$ is",
    "options": [
      "$3^4$",
      "$4^3$",
      "12",
      "6"
    ],
    "answer": 1,
    "explanation": "For each element in set $A,$ there are 4 choices for its image in set $B.$ Since there are 3 elements in $A,$ the total number of mappings is $4 \\times 4 \\times 4 = 4^3.$"
  },
  {
    "id": 49,
    "question": "The value of $\\frac{1}{2}\\int_{0}^{\\infty}x^7e^{-\\sqrt{x}}dx$ is",
    "options": [
      "$\\frac{15!}{2}$",
      "$\\frac{16!}{2}$",
      "$2\\times15!$",
      "$15!$"
    ],
    "answer": 3,
    "explanation": "Let $u = \\sqrt{x}$, then $x=u^2$ and $dx=2u du$. The integral becomes $\\frac{1}{2}\\int_{0}^{\\infty}(u^2)^7e^{-u}(2u du) = \\int_{0}^{\\infty}u^{14}e^{-u}(u du) = \\int_{0}^{\\infty}u^{15}e^{-u}du$. This is the definition of the Gamma function, $\\Gamma(16)$. Since 16 is an integer, $\\Gamma(16) = 15!$."
  },
  {
    "id": 50,
    "question": "The asymptotes of the curve $x^2-y^2=a^2$ are",
    "options": [
      "$y=\\pm x$",
      "$y=\\pm2x$",
      "$y=\\pm3x$",
      "$x=0, y=0$"
    ],
    "answer": 0,
    "explanation": "The equation of the curve is a hyperbola. The asymptotes are found by setting the terms of the highest degree to zero, which is $x^2-y^2=0$, or $(x-y)(x+y)=0$. This gives the two asymptotes $y=x$ and $y=-x$, or simply $y=\\pm x$."
  },
  {
    "id": 51,
    "question": "The radius of convergence of the power series $\\sum\\limits_{n=1}^{\\infty}\\frac{n^n}{n!}x^n$ is",
    "options": [
      "$e$",
      "$\\frac{1}{e}$",
      "$e^2$",
      "0"
    ],
    "answer": 1,
    "explanation": "Using the ratio test, the radius of convergence $R$ is given by $\\frac{1}{R} = \\lim\\limits_{n\\rightarrow\\infty} |\\frac{a_{n+1}}{a_n}| = \\lim\\limits_{n\\rightarrow\\infty} |\\frac{(n+1)^{n+1}/(n+1)!}{n^n/n!}| = \\lim\\limits_{n\\rightarrow\\infty} \\frac{(n+1)^{n+1}n!}{(n+1)!n^n} = \\lim\\limits_{n\\rightarrow\\infty} \\frac{(n+1)(n+1)^n}{(n+1)n!} \\frac{n!}{n^n} = \\lim\\limits_{n\\rightarrow\\infty} \\frac{(n+1)^n}{n^n} = \\lim\\limits_{n\\rightarrow\\infty} (\\frac{n+1}{n})^n = \\lim\\limits_{n\\rightarrow\\infty} (1+\\frac{1}{n})^n = e$. So $\\frac{1}{R} = e$, which means $R = \\frac{1}{e}$."
  },
  {
    "id": 52,
    "question": "The series of function $\\sum\\limits_{n=1}^{\\infty}\\frac{\\sin nx}{n^2}$, $x\\in\\mathbb{R}$ is uniformly convergent",
    "options": [
      "for all $x\\in\\mathbb{R}$.",
      "only for $x=0$.",
      "only for $x\\in[-1,1]$.",
      "only for $x\\in\\{-1,1\\}$."
    ],
    "answer": 0,
    "explanation": "The series is uniformly convergent for all $x\\in\\mathbb{R}$. We can use the Weierstrass M-test. We have $|\\frac{\\sin nx}{n^2}| \\le \\frac{|\\sin nx|}{n^2} \\le \\frac{1}{n^2}$. The series $\\sum\\limits_{n=1}^{\\infty}\\frac{1}{n^2}$ is a $p$-series with $p=2 > 1,$ so it is convergent. By the M-test, the series $\\sum\\limits_{n=1}^{\\infty}\\frac{\\sin nx}{n^2}$ is uniformly and absolutely convergent for all $x\\in\\mathbb{R}.$"
  },
  {
    "id": 53,
    "question": "The digit in the unit place of $3^{100}$ is",
    "options": [
      "1",
      "3",
      "0",
      "9"
    ],
    "answer": 0,
    "explanation": "The unit digits of powers of 3 follow a cycle: $3^1=3, 3^2=9, 3^3=27(\\text{unit digit 7}), 3^4=81(\\text{unit digit 1}), 3^5=243(\\text{unit digit 3})$, etc. The cycle is 3, 9, 7, 1. The length of the cycle is 4. To find the unit digit of $3^{100}$, we find the remainder of 100 divided by 4, which is 0. Since the remainder is 0, the unit digit is the same as the last term of the cycle, which is 1."
  },
  {
    "id": 54,
    "question": "The pair of straight lines $x^2-2pxy-y^2=0$ and $x^2-2qxy-y^2=0$ be such that each pair bisects the angles between the other pair, then",
    "options": [
      "$pq=1$",
      "$pq=-1$",
      "$p+q=1$",
      "$p+q=-1$"
    ],
    "answer": 1,
    "explanation": "The equation of the bisectors of the angles between the pair of lines $ax^2 + 2hxy + by^2 = 0$ is $\\frac{x^2-y^2}{a-b} = \\frac{xy}{h}$. For the first pair of lines, $x^2 - 2pxy - y^2 = 0$, we have $a=1, h=-p, b=-1$. The equation of the bisectors is $\\frac{x^2-y^2}{1-(-1)} = \\frac{xy}{-p} \\Rightarrow \\frac{x^2-y^2}{2} = -\\frac{xy}{p} \\Rightarrow p(x^2-y^2) = -2xy \\Rightarrow px^2+2xy-py^2=0$. This equation represents the second pair of lines, $x^2 - 2qxy - y^2 = 0$. Comparing the coefficients, we have $\\frac{p}{1} = \\frac{2}{-2q} = \\frac{-p}{-1}$. From $\\frac{p}{1} = \\frac{2}{-2q}$, we get $p = -\\frac{1}{q}$, so $pq=-1.$"
  },
  {
    "id": 55,
    "question": "The principal value of argument $z$ where $z=1+\\tan\\frac{3\\pi}{5}$ is",
    "options": [
      "$-\\frac{2\\pi}{5}$",
      "$\\frac{2\\pi}{5}$",
      "$\\frac{\\pi}{5}$",
      "$-\\frac{\\pi}{5}$"
    ],
    "answer": 0,
    "explanation": "For a complex number $z=x+iy$, the modulus is $r=|z|=\\sqrt{x^2+y^2}$ and the amplitude is $\\theta=\\arg(z)=\\tan^{-1}(\\frac{y}{x})$, taking into account the quadrant. Here, $x=1$ and $y=\\tan\\frac{3\\pi}{5}$. The angle $\\frac{3\\pi}{5}$ is in the second quadrant, so $\\tan\\frac{3\\pi}{5}$ is negative. So $y<0$. The complex number $z=1+i\\tan\\frac{3\\pi}{5}$ has a positive real part ($x=1$) and a negative imaginary part. This means the complex number lies in the fourth quadrant. The amplitude should be between $-\\pi/2$ and 0. Let's call the argument $\\alpha.$ Then $\\tan\\alpha = \\tan(\\frac{3\\pi}{5}) = \\tan(-\\frac{2\\pi}{5}).$ As the point is in fourth quadrant, $\\alpha = -\\frac{2\\pi}{5}.$"
  },
  {
    "id": 56,
    "question": "The ring $(\\mathbb{Z}_{n}, +, \\cdot)$ is an integral domain if and only if",
    "options": [
      "$n$ is a prime.",
      "$n$ is an integer.",
      "$n$ is a multiple of 2 only.",
      "$n$ is a multiple of 3 only."
    ],
    "answer": 0,
    "explanation": "A commutative ring with unity is an integral domain if it has no zero divisors. The ring $(\\mathbb{Z}_{n}, +, \\cdot)$ is an integral domain if and only if $n$ is a prime number. This is because if $n$ is composite, say $n=ab$ where $a$ and $b$ are non-zero, then in $\\mathbb{Z}_n$, we have $[a][b]=[ab]=[n]=[0]$, so $a$ and $b$ are zero divisors. If $n$ is prime, there are no zero divisors."
  },
  {
    "id": 57,
    "question": "The M.I. of a hollow sphere about a diameter is",
    "options": [
      "$\\frac{1}{3}Ma^2$",
      "$\\frac{1}{2}Ma^2$",
      "$\\frac{2}{3}Ma^2$",
      "$\\frac{2}{5}Ma^2$"
    ],
    "answer": 2,
    "explanation": "The moment of inertia (M.I.) of a hollow sphere of mass $M$ and radius $a$ about a diameter is $\\frac{2}{3}Ma^2$. The moment of inertia of a solid sphere about a diameter is $\\frac{2}{5}Ma^2.$"
  },
  {
    "id": 58,
    "question": "If $\\sum\\limits_{n=1}^{\\infty}a_n ~(a_n>0)$ is convergent, then",
    "options": [
      "$\\sum\\limits_{n=1}^{\\infty}\\frac{a_n}{a_{n}+1}$ is convergent.",
      "$\\sum\\limits_{n=1}^{\\infty}\\frac{a_n}{a_{n}+1}$ is divergent.",
      "$\\sum\\limits_{n=1}^{\\infty}\\frac{a_n}{a_{n}+1}$ oscillates infinitely.",
      "no definite conclusion can be made regarding the convergence of $\\sum\\limits_{n=1}^{\\infty}\\frac{a_n}{a_{n}+1}$."
    ],
    "answer": 0,
    "explanation": "Since $\\frac{a_n}{a_{n}+1}\\le a_n$, by comparison test $\\sum \\frac{a_n}{a_{n}+1}$ is convergent."
  },
  {
    "id": 59,
    "question": "If the solution of the primal of an LPP be optimal, then the dual solution is",
    "options": [
      "optimal.",
      "feasible but not optimal.",
      "not optimal.",
      "unbounded."
    ],
    "answer": 0,
    "explanation": "According to the Duality Theorem in linear programming, if the primal problem has an optimal solution, then its dual problem also has an optimal solution, and the optimal values of their objective functions are equal."
  },
  {
    "id": 60,
    "question": "Perpendiculars $PL, PM, PN$ are drawn from the point $P(a, b, c)$ to the co-ordinate planes. The equation of the plane $LMN$ is",
    "options": [
      "$\\frac{x}{a}+\\frac{y}{b}+\\frac{z}{c}=1$",
      "$\\frac{x}{a}+\\frac{y}{b}+\\frac{z}{c}=2$",
      "$\\frac{x}{a}+\\frac{y}{b}+\\frac{z}{c}=0$",
      "$\\frac{x}{a}+\\frac{y}{b}+\\frac{z}{c}=3$"
    ],
    "answer": 1,
    "explanation": "The perpendiculars from $P(a,b,c)$ to the coordinate planes are $PL$ on the $xy$-plane, $PM$ on the $yz$-plane, and $PN$ on the $zx$-plane. The points $L, M, N$ are $(a,b,0), (0,b,c), (a,0,c)$ respectively. The equation of a plane passing through these three points can be found from the given options as $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 2.$"
  }
];

    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
