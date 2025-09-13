exports.handler = async (event, context) => {
     const questions = [
  {
    "id": 1,
    "question": "Which of the following is NOT a convex set? ",
    "options": [
      "$U=\\left\\{(u, v) \\in \\mathbb{R}^{2}:|u| \\leq 3,|v| \\leq 5\\right\\}$",
      "$U=\\left\\{(u, v) \\in \\mathbb{R}^{2}: u \\geq 1, v \\leq 4\\right\\}$",
      "$U=\\{(u, v) \\in \\mathbb{R}^{2}:-2 u+v \\leq 2\\}\\cup \\{(u,v)\\in \\mathbb{R}^2: u-3 v \\geq 3\\}$",
      "$U=\\left\\{(u, v) \\in \\mathbb{R}^{2}: u+v=-2\\right\\}$"
    ],
    "answer": 2,
    "explanation": "A set is convex if for any two points in the set, the line segment connecting them is also entirely contained within the set. The union of two disjoint or non-overlapping convex sets is not necessarily convex."
  },
  {
    "id": 2,
    "question": "Find the limit of the sequence $x_n = \\frac{2^n}{n!}$ as $n\\to \\infty$",
    "options": [
      "0",
      "1",
      "$\\infty$",
      "$e$"
    ],
    "answer": 0,
    "explanation": "We can use the ratio test for sequences. $\\lim\\limits_{n\\to\\infty} \\frac{x_{n+1}}{x_n} = \\lim\\limits_{n\\to\\infty} \\frac{2^{n+1}/(n+1)!}{2^n/n!} = \\lim\\limits_{n\\to\\infty} \\frac{2}{n+1} = 0$. Since the limit is less than 1, the sequence converges to 0."
  },
  {
    "id": 3,
    "question": "The particular integral of the differential equation $y^{\\prime \\prime}+y=x^{3}$ is",
    "options": [
      "$x^{4}+x^{3}-3 x$",
      "$x^{3}-6 x$",
      "$x^{3}+6 x$",
      "$x^{3}-6 x^{2}+3 x$"
    ],
    "answer": 1,
    "explanation": "We can assume a particular solution of the form $y_p = Ax^3+Bx^2+Cx+D$. Substituting this into the differential equation gives $y_p'' = 6Ax+2B$. So, $6Ax+2B+Ax^3+Bx^2+Cx+D = x^3$. Comparing coefficients, we get $A=1, B=0, C= -6, D=0.$ Thus, the particular integral is $y_p = x^3 - 6x$."
  },
  {
    "id": 4,
    "question": "If the sum of the external forces acting on a system of particles be zero in any direction, then the total momentum of the system in that direction",
    "options": [
      "remains zero during the motion",
      "remains constant during the motion",
      "is proportional to the force",
      "is proportional to the velocity"
    ],
    "answer": 1,
    "explanation": "This is a direct application of the principle of conservation of momentum. If the net external force on a system is zero, the total linear momentum of the system remains constant."
  },
  {
    "id": 5,
    "question": "If $1, \\omega$, and $\\omega^{2}$ are cube root of unity, then for any positive integer $n$ (not divisible by 3), the value of $1+\\omega^{n}+\\omega^{2 n}$ is equal to",
    "options": [
      "0",
      "1",
      "3",
      "$-1$"
    ],
    "answer": 0,
    "explanation": "Since $n$ is not divisible by 3, $\\omega^n \\neq 1$. The sum of the roots of unity is zero, i.e., $1+\\omega+\\omega^2=0$. Similarly, for any integer $n$ not divisible by 3, the terms $1, \\omega^n, \\omega^{2n}$ are the three distinct cube roots of unity. Thus, their sum is also 0."
  },
  {
    "id": 6,
    "question": "For what values of $m$, the transformation $x=-x^{\\prime}+3, y=m y^{\\prime}+2$ is a rigid motion?  ",
    "options": [
      "1",
      "$-1$",
      "0",
      "2"
    ],
    "answer": 1,
    "explanation": "A rigid motion preserves distances. The transformation matrix is given by $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & m \\end{pmatrix} \\begin{pmatrix} x' \\\\ y' \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$. For a rigid motion, the linear part of the transformation must be an orthogonal matrix.Noting that the columns of an orthogonal matrix must be unit vectors, we have $m^2=1$, so $m=\\pm 1$. Since $-1$ is an option, it is a valid answer for a rigid motion (including reflections)."
  },
  {
    "id": 7,
    "question": "Which one of the following is not true?",
    "options": [
      "Every cyclic group is abelian  ",
      "Every group of odd order is cyclic   ",
      "The order of a cyclic group and that of its generating element are same  ",
      "Every subgroup of a cyclic group is cyclic"
    ],
    "answer": 1,
    "explanation": "A group of odd order is not necessarily cyclic. For example, a group of order 9 may not be cyclic. The other options are all true properties of cyclic groups."
  },
  {
    "id": 8,
    "question": "Given $\\vec{p}=\\hat{i}+\\hat{j}-\\hat{k}, \\vec{q}=-\\hat{i}+2 \\hat{j}+\\hat{k}$, $\\vec{r}=-\\hat{i}+2 \\hat{j}-\\hat{k}$, a unit vector perpendicular to both $\\vec{p}+\\vec{q}$ and $\\vec{q}+\\vec{r}$ is",
    "options": [
      "$\\hat{i}$",
      "$\\hat{j}$",
      "$\\hat{k}$",
      "$\\hat{i}-\\hat{j}+\\hat{k}$"
    ],
    "answer": 2,
    "explanation": "First, find the vectors $\\vec{p}+\\vec{q}$ and $\\vec{q}+\\vec{r}$. We have $\\vec{p}+\\vec{q} = (1-1)\\hat{i}+(1+2)\\hat{j}+(-1+1)\\hat{k} = 3\\hat{j}$. Also, $\\vec{q}+\\vec{r} = (-1-1)\\hat{i}+(2+2)\\hat{j}+(1-1)\\hat{k} = -2\\hat{i}+4\\hat{j}$.  Clearly, $\\hat{k}$ is perpendicular to both."
  },
  {
    "id": 9,
    "question": "If $\\int_{0}^{1} \\frac{d x}{\\sqrt{1-x^{2}}}=2 k \\pi$, then the value of $k$ is",
    "options": [
      "1",
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "2"
    ],
    "answer": 2,
    "explanation": "The integral is a standard one, $\\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin(x)$. So, $\\int_{0}^{1} \\frac{d x}{\\sqrt{1-x^{2}}} = [\\arcsin(x)]_0^1 = \\arcsin(1) - \\arcsin(0) = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$. We are given that this is equal to $2k\\pi$. So, $2k\\pi = \\frac{\\pi}{2}$. This means $k = \\frac{1}{4}$."
  },
  {
    "id": 10,
    "question": "Let $A \\in M_{3}(\\mathbb{R})$, the set of all $3 \\times 3$ matrices over $\\mathbb{R}$, be symmetric matrix. Which of the following can be the characteristic values of $A$ ?  ",
    "options": [
      "$1, i,-i$",
      "$1,0,-1$",
      "$0,1-i, i$",
      "$1-i, 1+i, 1$"
    ],
    "answer": 1,
    "explanation": "A fundamental property of real symmetric matrices is that all their eigenvalues are real. This eliminates options that contain complex eigenvalues. Options (A), (C), and (D) all have non-real eigenvalues. Only option (B) has all real eigenvalues."
  },
  {
    "id": 11,
    "question": "Value of $\\int_{0}^{2} e^{x} d x$ by Simpson's-1/3 rule if $e=2.72, e^{2}=7.39$, is  ",
    "options": [
      "4.613",
      "9.364",
      "6.892",
      "6.423"
    ],
    "answer": 3,
    "explanation": "$\\int_a^b f(x)dx \\approx \\frac{h}{3}[f(a)+4f(\\frac{a+b}{2})+f(b)]$. Here, $a=0, b=2$, so $h = \\frac{b-a}{2} = 1$. The midpoint is $\\frac{0+2}{2}=1$. So we need to evaluate $f(0)=e^0=1$, $f(1)=e^1=e=2.72$, and $f(2)=e^2=7.39$. The integral is approximately $\\frac{1}{3}[f(0)+4f(1)+f(2)] = \\frac{1}{3}[1+4(2.72)+7.39] = \\frac{1}{3}[1+10.88+7.39] = \\frac{1}{3}[19.27] \\approx 6.423$."
  },
  {
    "id": 12,
    "question": "If the roots of quadratic equation $a x^{2}+b x+c=0$ are equal in magnitude and opposite in sign then  ",
    "options": [
      "$a=0$",
      "$c=0$",
      "$b=0$",
      "$a=c$"
    ],
    "answer": 2,
    "explanation": "Let the roots be $\\alpha$ and $-\\alpha$. The sum of the roots is $\\alpha + (-\\alpha) = 0$. For the quadratic equation $ax^2+bx+c=0$, the sum of the roots is given by $-\\frac{b}{a}$. Thus, $-\\frac{b}{a} = 0$, which implies $b=0$."
  },
  {
    "id": 13,
    "question": "The family of straight lines passing through the origin is represented by the differential equation  ",
    "options": [
      "$y d x+x d y=0$",
      "$x d x+y d y=0$",
      "$x d y-y d x=0$",
      "$x d x-y d y=0$"
    ],
    "answer": 2,
    "explanation": "The equation of a family of straight lines passing through the origin is $y=cx$, where $c$ is a constant. Differentiating this with respect to $x$, we get $\\frac{dy}{dx}=c$. From the first equation, $c=\\frac{y}{x}$. Substituting this into the differentiated equation, we get $\\frac{dy}{dx}=\\frac{y}{x}$. Rearranging gives $xdy-ydx=0$."
  },
  {
    "id": 14,
    "question": "In case of throwing of an ordinary die, the set of events $\\{1\\},\\{2\\},\\{3\\},\\{4\\},\\{5\\},\\{6\\}$ are  ",
    "options": [
      "mutually exclusive",
      "exhaustive",
      "both (A) and (B)",
      "neither (A) nor (B)"
    ],
    "answer": 2,
    "explanation": "The events are mutually exclusive because only one outcome can occur at a time (you can't roll both a 1 and a 2). The events are also exhaustive because they cover all possible outcomes of rolling a die (the union of the events is the entire sample space)."
  },
  {
    "id": 15,
    "question": "$f(x)= \\begin{cases}x+1 & \\text { if } 0 \\leq x < 1, \\\\ 3-x & \\text { if } 1 \\leq x \\leq 2 \\end{cases}.$\nThen $f$ is",
    "options": [
      "not continuous at $x=1$",
      "not derivable at $x=1$",
      "derivable at $x=1$",
      "nowhere derivable"
    ],
    "answer": 1,
    "explanation": "First, check for continuity at $x=1$. The left-hand limit is $\\lim\\limits_{x\\to 1^-} (x+1) = 1+1=2$. The right-hand limit is $\\lim\\limits_{x\\to 1^+} (3-x) = 3-1=2$. The function value at $x=1$ is $f(1) = 3-1=2$. Since the left limit, right limit, and function value are all equal, the function is continuous at $x=1$. Now, check for differentiability. The left-hand derivative is $\\lim\\limits_{h\\to 0^-} \\frac{f(1+h)-f(1)}{h} = \\lim\\limits_{h\\to 0^-} \\frac{(1+h)+1-2}{h} = \\lim\\limits_{h\\to 0^-} \\frac{h}{h} = 1$. The right-hand derivative is $\\lim\\limits_{h\\to 0^+} \\frac{f(1+h)-f(1)}{h} = \\lim\\limits_{h\\to 0^+} \\frac{3-(1+h)-2}{h} = \\lim\\limits_{h\\to 0^+} \\frac{-h}{h} = -1$. Since the left-hand and right-hand derivatives are not equal, the function is not derivable at $x=1$."
  },
  {
    "id": 16,
    "question": "A subspace of the vector space $V_{3}(\\mathbb{R})$ among the following is",
    "options": [
      "$\\{(x, y, z): x y<0\\}$",
      "$\\{(x, y, z): y<0\\}$",
      "$\\left\\{(x, y, z): x^{2}+y^{2}+z^{2} \\leq 1\\right\\}$",
      "$\\{(x, y, z): y+z=0\\}$"
    ],
    "answer": 3,
    "explanation": "Clearly the set in option D is a plane passing through origin and thus it is a subspace."
  },
  {
    "id": 17,
    "question": "If $|\\vec{a}|=|\\vec{b}|=|\\vec{a}-\\vec{b}|=2$, then $|\\vec{a}+\\vec{b}|$ is equal to",
    "options": [
      "4",
      "$3 \\sqrt{2}$",
      "$2 \\sqrt{3}$",
      "$\\sqrt{11}$"
    ],
    "answer": 2,
    "explanation": "We are given that $|\\vec{a}|=2$, $|\\vec{b}|=2$, and $|\\vec{a}-\\vec{b}|=2$. We know that $|\\vec{a}-\\vec{b}|^2 = (\\vec{a}-\\vec{b})\\cdot (\\vec{a}-\\vec{b}) = |\\vec{a}|^2+|\\vec{b}|^2-2\\vec{a}\\cdot\\vec{b}$. Substituting the given values, $2^2 = 2^2+2^2-2\\vec{a}\\cdot\\vec{b}$, which simplifies to $4 = 4+4-2\\vec{a}\\cdot\\vec{b}$. This gives $2\\vec{a}\\cdot\\vec{b}=4$, or $\\vec{a}\\cdot\\vec{b}=2$. Now we want to find $|\\vec{a}+\\vec{b}|$. We have $|\\vec{a}+\\vec{b}|^2 = (\\vec{a}+\\vec{b})\\cdot (\\vec{a}+\\vec{b}) = |\\vec{a}|^2+|\\vec{b}|^2+2\\vec{a}\\cdot\\vec{b}$. Substituting the known values, $|\\vec{a}+\\vec{b}|^2 = 2^2+2^2+2(2) = 4+4+4=12$. So, $|\\vec{a}+\\vec{b}|=\\sqrt{12}=2\\sqrt{3}$."
  },
  {
    "id": 18,
    "question": "Under addition and multiplication modulo 3 , the set $\\{0,1,2\\}$ forms",
    "options": [
      "an integral domain but not a field",
      "a field",
      "a ring but not an integral domain",
      "a non-commutative ring"
    ],
    "answer": 1,
    "explanation": "$\\mathbb{Z}_n$ is a field iff $n$ is prime. In this question $n=3.$"
  },
  {
    "id": 19,
    "question": "The complex number $z=x+i y$ which satisfy the equation $\\left|\\frac{z-5 i}{z+5 i}\\right|=1$ lie on",
    "options": [
      "the $y$-axis",
      "the $x$-axis",
      "a circle through the origin",
      "a parabola"
    ],
    "answer": 1,
    "explanation": "The given equation is $\\left|\\frac{z-5 i}{z+5 i}\\right|=1$. This can be written as $|z-5i| = |z+5i|$. Geometrically, this equation represents the set of all points $z$ in the complex plane that are equidistant from the points $5i$ and $-5i$. The locus of points equidistant from two fixed points is the perpendicular bisector of the line segment connecting them. The points $5i$ and $-5i$ lie on the imaginary axis (the $y$-axis), so their perpendicular bisector is the real axis (the $x$-axis). See the graph below <br> \
   <img src = 'complex-line.png' width = '283px' alt = 'Complex line'/>"
  },
  {
    "id": 20,
    "question": "Which one of the following is not correct?",
    "options": [
      "$\\Delta^{n}=(1-E)^{n}$",
      "$E^{-1}=1-\\nabla$",
      "$\\Delta^{m}=E^{m} \\nabla^{m}$",
      "$\\nabla . E=E-1$"
    ],
    "answer": 0,
    "explanation": "The correct relationship is $\\Delta = E-1$. So $\\Delta^n = (E-1)^n$, not $(1-E)^n$ in general, as it would flip the sign for odd $n$. The other options are correct. $E^{-1}$ is the backward shift operator, $1-\\nabla$ is also the backward shift operator, so $E^{-1} = 1-\\nabla$ and $\\nabla = 1-E^{-1}$. We can show $\\Delta = \\nabla E$ and thus $\\Delta^m = (\\nabla E)^m = \\nabla^m E^m$ since the operators commute."
  },
  {
    "id": 21,
    "question": "The series $1-\\frac{1}{2}+\\frac{1}{3}-\\frac{1}{4}+\\ldots$",
    "options": [
      "is divergent",
      "converges to zero",
      "converges to $\\log 2$",
      "converges to $-\\log 2$"
    ],
    "answer": 2,
    "explanation": "This is a well-known result from the Taylor series expansion of $\\log(1+x)$. The Taylor series for $\\log(1+x)$ about $x=0$ is given by $\\log(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\ldots$. This expansion is valid for $-1 < x \\leq 1$. If we substitute $x=1$, we get the given series: $\\log(1+1) = \\log(2) = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\ldots$."
  },
  {
    "id": 22,
    "question": "The value of $\\lambda$ for which the differential equation $\\left(x y^{2}+\\lambda x^{2} y\\right) d x+(x+y) x^{2} d y=0$ is exact, is",
    "options": [
      "3",
      "2",
      "$-1$",
      "1"
    ],
    "answer": 0,
    "explanation": "A differential equation of the form $M(x,y)dx + N(x,y)dy = 0$ is exact if $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$. Here, $M = xy^2 + \\lambda x^2 y$ and $N = (x+y)x^2 = x^3+x^2y$. We have $\\frac{\\partial M}{\\partial y} = 2xy + \\lambda x^2$. And $\\frac{\\partial N}{\\partial x} = 3x^2+2xy$. For the equation to be exact, we must have $\\lambda = 3$."
  },
  {
    "id": 23,
    "question": "If $x^{2}+a x+b=0$ and $x^{2}+b x+a=0$ have a common root $\\alpha,(a \\neq b)$, then",
    "options": [
      "$a+b+1=0$",
      "$a+b=1$",
      "$a+1=0$",
      "$a^{2}+b^{2}=1$"
    ],
    "answer": 0,
    "explanation": "Since $\\alpha$ is a common root, it must satisfy both equations: $\\alpha^2+a\\alpha+b=0$ and $\\alpha^2+b\\alpha+a=0$. Subtracting the second equation from the first, we get $(a-b)\\alpha + (b-a)=0$. Since $a \\neq b$, we can divide by $(a-b)$ to get $\\alpha-1=0$, which implies $\\alpha=1$. Now, substitute $\\alpha=1$ into either of the original equations. Using the first equation: $1^2+a(1)+b=0$, which gives $1+a+b=0$, or $a+b+1=0$."
  },
  {
    "id": 24,
    "question": "Value of the integral $\\int_{-1}^{1}([x]-x) d x$, where $[x]$ is the greatest integer not greater than $x$, is equal to  ",
    "options": [
      "1",
      "$-1$",
      "2",
      "0"
    ],
    "answer": 1,
    "explanation": "We can split the integral based on the definition of the greatest integer function: $\\int_{-1}^{1}([x]-x) d x = \\int_{-1}^{0}([x]-x) d x + \\int_{0}^{1}([x]-x) d x$. In the interval $[-1, 0)$, $[x]=-1$, and in the interval $[0, 1)$, $[x]=0$. So the integral becomes $\\int_{-1}^{0}(-1-x) d x + \\int_{0}^{1}(0-x) d x$. The first part is $[ -x - \\frac{x^2}{2} ]_{-1}^0 = (0-0) - ( -(-1) - \\frac{(-1)^2}{2} ) = -(1-\\frac{1}{2}) = -\\frac{1}{2}$. The second part is $[-\\frac{x^2}{2}]_0^1 = (-\\frac{1^2}{2}) - (-\\frac{0^2}{2}) = -\\frac{1}{2}$. Summing the two parts, we get $-\\frac{1}{2} + (-\\frac{1}{2}) = -1$."
  },
  {
    "id": 25,
    "question": "Let $H$ be a subgroup of $G$ and $K$ be normal subgroup of $G$. Then which one of the following is true?",
    "options": [
      "$H K$ is normal subgroup of $G$",
      "$K H$ is normal subgroup of $G$",
      "$H \\cap K$ is normal subgroup of $G$",
      "$H K=K H$"
    ],
    "answer": 3,
    "explanation": "If $H$ is a subgroup and $K$ is a normal subgroup of a group $G$, then the product set $HK$ is a subgroup of $G$. Furthermore, it can be shown that $HK = KH$. The product $HK$ is a subgroup, but it is not necessarily a normal subgroup of $G.$"
  },
  {
    "id": 26,
    "question": "Let $S_{n}: \\mathbb{N} \\rightarrow \\mathbb{R}$ be defined by $S_{n}=\\sin \\left(\\frac{n \\pi}{2}\\right), n \\in \\mathbb{N}$. Then the range of $\\left\\{S_{n}\\right\\}$ is",
    "options": [
      "$\\{-1,1\\}$",
      "$\\left\\{-1,0, \\frac{1}{\\sqrt{2}}, 1\\right\\}$",
      "$\\{0,1\\}$",
      "$\\{-1,0,1\\}$"
    ],
    "answer": 3,
    "explanation": "Let's list the first few terms of the sequence: For $n=1$, $S_1 = \\sin(\\pi/2) = 1$. For $n=2$, $S_2 = \\sin(\\pi) = 0$. For $n=3$, $S_3 = \\sin(3\\pi/2) = -1$. For $n=4$, $S_4 = \\sin(2\\pi) = 0$. For $n=5$, $S_5 = \\sin(5\\pi/2) = 1$. The sequence of values repeats as $1, 0, -1, 0, 1, 0, -1, 0, \\ldots$. The set of all values that the sequence takes is $\\{-1, 0, 1\\}$."
  },
  {
    "id": 27,
    "question": "If $u(x)$ and $v(x)$ are two solutions of the differential equation $a x^{2} \\frac{d^{2} y}{d x^{2}}+b x \\frac{d y}{d x}+y=2 e^{x}$, then $v(x)-u(x)$ is the solution of",
    "options": [
      "$a x^{2} \\frac{d^{2} y}{d x^{2}}+b x \\frac{d y}{d x}+y=2 e^{x}$",
      "$a x^{2} \\frac{d^{2} y}{d x^{2}}+y=0$",
      "$a x^{2} \\frac{d^{2} y}{d x^{2}}+b x \\frac{d y}{d x}+y=0$",
      "$a x^{2} \\frac{d^{2} y}{d x^{2}}+b x \\frac{d y}{d x}=2 e^{x}$"
    ],
    "answer": 2,
    "explanation": "Let the differential operator be $L = a x^{2} \\frac{d^{2}}{d x^{2}}+b x \\frac{d}{d x}+1$. The given equation is $Ly = 2e^x$. We are given that $u(x)$ and $v(x)$ are solutions, so $Lu = 2e^x$ and $Lv = 2e^x$. We want to find the equation satisfied by $w(x) = v(x)-u(x)$. Since the operator $L$ is linear, we have $Lw = L(v-u) = Lv - Lu = 2e^x - 2e^x = 0$. So, $v(x)-u(x)$ is a solution to the homogeneous equation $a x^{2} \\frac{d^{2} y}{d x^{2}}+b x \\frac{d y}{d x}+y=0$."
  },
  {
    "id": 28,
    "question": "The equation of the plane passing through the points $(1,-3,4)$ and $(4,3,1)$ and parallel to $y$-axis is",
    "options": [
      "$2 x+3 z=5$",
      "$x-z=2$",
      "$y=5$",
      "$x+z=5$"
    ],
    "answer": 3,
    "explanation": "A plane parallel to the $y$-axis has a normal vector that is perpendicular to the $y$-axis, i.e., its $y$-component is 0. The equation of such a plane is of the form $Ax+Cz=D$. Checking the options we see that the equation of option D satisfies the given points."
  },
  {
    "id": 29,
    "question": "If $z=\\frac{\\sqrt{3}-i}{\\sqrt{3}+i}$. Then principal $\\arg (z)$ is",
    "options": [
      "$-\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{3}$",
      "$-\\frac{\\pi}{6}$",
      "$\\frac{2 \\pi}{3}$"
    ],
    "answer": 0,
    "explanation": "We can find the argument by simplifying it or using a theorem. The theorem says $\\arg \\frac{z_1}{z_2} = \\arg(z_1)-\\arg(z_2)\\pm 2k\\pi.$ Here $\\arg(z_1)  = \\arg(\\sqrt{3}-i) = -\\frac{\\pi}{6}$ and $\\arg(\\sqrt{3}+i) = \\frac{\\pi}{6}.$ So $\\arg(\\frac{z_1}{z_2}) = -\\frac{\\pi}{3}.$ Here $k=0.$"
  },
  {
    "id": 30,
    "question": "If $a, b, c$ are integers and $a+c=b$, then equation $a x^{2}-b x+c=0$ has",
    "options": [
      "equal roots",
      "imaginary roots",
      "irrational roots",
      "rational roots"
    ],
    "answer": 3,
    "explanation": "A quadratic equation has rational roots if its discriminant is a perfect square. The discriminant is $\\Delta = (-b)^2 - 4(a)(c) = b^2 - 4ac$. We are given $b=a+c$. Substitute this into the discriminant: $\\Delta = (a+c)^2 - 4ac = a^2+2ac+c^2-4ac = a^2-2ac+c^2 = (a-c)^2$. Since $a$ and $c$ are integers, $(a-c)$ is an integer, so $(a-c)^2$ is a perfect square. Therefore, the roots are rational."
  },
  {
    "id": 31,
    "question": "If in the Mean Value Theorem, $f(h)=f(0)+h f^{\\prime}(\\theta h), 0<\\theta<1$, where the function $f: \\mathbb{R} \\rightarrow \\mathbb{R}$ is given by $f(x)=\\cos x$, then $\\lim\\limits_{h \\rightarrow 0} \\theta$ is equal to",
    "options": [
      "1",
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{\\sqrt{2}}$."
    ],
    "answer": 1,
    "explanation": "We are given $f(x)=\\cos x$, so $f'(x)=-\\sin x$. The Mean Value Theorem states $f(h)-f(0)=h f'(\\theta h)$. Substituting our function, we get $\\cos(h) - \\cos(0) = h(-\\sin(\\theta h))$. This gives $\\cos(h)-1=-h\\sin(\\theta h)$. For small $h$, we can use the Taylor series expansions: $\\cos(h) \\approx 1 - \\frac{h^2}{2}$ and $\\sin(\\theta h) \\approx \\theta h$. Substituting these, we get $(1-\\frac{h^2}{2}) - 1 \\approx -h(\\theta h)$, which simplifies to $-\\frac{h^2}{2} \\approx -\\theta h^2$. Dividing by $-h^2$, we get $\\frac{1}{2} \\approx \\theta$. Taking the limit as $h\\to 0$, we get $\\lim\\limits_{h\\to 0} \\theta = \\frac{1}{2}$."
  },
  {
    "id": 32,
    "question": "The path of projectile in vacuum is a",
    "options": [
      "Circle",
      "Straight line",
      "Parabola",
      "Ellipse"
    ],
    "answer": 2,
    "explanation": "In a vacuum, the only force acting on a projectile is gravity. So our standard theory applies and it is well known that the equation of projectile is a parabola."
  },
  {
    "id": 33,
    "question": "The equation $x^{2}+4 x y+4 y^{2}-2 x-4 y+2 a=0$ represents a pair of parallel lines if  ",
    "options": [
      "$a=\\frac{1}{2}$",
      "$a <\\frac{1}{2}$",
      "$a >\\frac{1}{2}$",
      "$a < 1$"
    ],
    "answer": 1,
    "explanation": "A general second-degree equation $Ax^2+2Hxy+By^2+2Gx+2Fy+C=0$ represents a pair of straight lines if $\\Delta = \\begin{vmatrix} A & H & G \\\\ H & B & F \\\\ G & F & C \\end{vmatrix} =0$ and $D=\\begin{vmatrix} A & H \\\\ H & B \\end{vmatrix}\\leq 0.$ For parallel lines we need $D=0.$ Here $A=1, H=2, B=4, G=-1, F=-2, C=2a$. Substituting these into the determinant formula, we have $\\Delta = \\begin{vmatrix} 1 & 2 & -1 \\\\ 2 & 4 & -2 \\\\ -1 & -2 & 2a \\end{vmatrix}= 0$. Now $D=\\begin{vmatrix} 1 & 2\\\\ 2 & 4\\end{vmatrix}=0.$ Now we need to check for real lines. Let us rewrite the given equation as $(x+2y-1)^2=1-2a.$ Thus it represents real lines if $1-2a >0$ or $a < \\frac{1}{2}.$"
  },
  {
    "id": 34,
    "question": "The order of the permutation $\\left(\\begin{array}{cccccccc}1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ 4 & 1 & 5 & 6 & 3 & 2 & 8 & 7\\end{array}\\right)$ in $S_{8}$ is",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "answer": 0,
    "explanation": "To find the order of a permutation, we first decompose it into disjoint cycles. The given permutation is $(1 \\to 4 \\to 6 \\to 2 \\to 1)$ and $(3 \\to 5 \\to 3)$ and $(7 \\to 8 \\to 7)$. The disjoint cycles are $(1,4,6,2)$, $(3,5)$, and $(7,8)$. The lengths of these cycles are 4, 2, and 2 respectively. The order of the permutation is the least common multiple (LCM) of the lengths of its disjoint cycles. So, order = LCM(4, 2, 2) = 4."
  },
  {
    "id": 35,
    "question": "The length of Cartesian subtangent of the curve $y=e^{-3 x}$ is",
    "options": [
      "$\\frac{1}{e}$",
      "$e^{-3}$",
      "3",
      "$\\frac{1}{3}$"
    ],
    "answer": 3,
    "explanation": "The length of the Cartesian subtangent is given by the formula $S_t = |\\frac{y}{y'}|$. First, find the derivative of the curve $y=e^{-3x}$. We have $y' = \\frac{dy}{dx} = -3e^{-3x}$. So, the length of the subtangent is $|\\frac{y}{y'}| = |\\frac{e^{-3x}}{-3e^{-3x}}| = |-\\frac{1}{3}| = \\frac{1}{3}$."
  },
  {
    "id": 36,
    "question": "Given that $A=\\left[a_{i j}\\right]$ is a square matrix of order $3 \\times 3$ and $|A|=-13$, then the value of $\\sum\\limits_{i=1}^{3} a_{i 2} A_{i 2}$, where $A_{i j}$ denotes the cofactor of element $a_{i j}$ is",
    "options": [
      "0",
      "$-13$",
      "$-39$",
      "$-26$"
    ],
    "answer": 1,
    "explanation": "This is a direct application of the cofactor expansion formula for the determinant of a matrix. The determinant of a matrix $A$ is the sum of the products of the elements of any row or column with their corresponding cofactors. The expression $\\sum\\limits_{i=1}^{3} a_{i 2} A_{i 2}$ is the cofactor expansion along the second column of the matrix $A$. By definition, this sum is equal to the determinant of the matrix $A$, which is given as $|A|=-13$."
  },
  {
    "id": 37,
    "question": "A point moves in a straight line so that its distance $s$ from a fixed point at any time $t$ is proportional to $t^{n}$. If $v$ be the velocity and $f$ be the acceleration at any time $t$, then which of the following is true?  ",
    "options": [
      "$v^{2}=n f s$",
      "$n v^{2}=(n-1) f s$",
      "$(n-1) v^{2}=n f s$",
      "$v^{2}=(n-1) f s$"
    ],
    "answer": 2,
    "explanation": "We are given that $s=kt^n$ for some constant $k$. The velocity is $v = \\frac{ds}{dt} = knt^{n-1}$. The acceleration is $f = \\frac{dv}{dt} = kn(n-1)t^{n-2}$. We want to find a relationship between $s, v, f$. From the velocity and acceleration equations, we can express $t^{n-1}$ and $t^{n-2}$ in terms of $v$ and $f$. We have $t^{n-1} = \\frac{v}{kn}$ and $t^{n-2} = \\frac{f}{kn(n-1)}$. We also know that $t^{n-1} = t \\cdot t^{n-2}$, so $\\frac{v}{kn} = t \\cdot \\frac{f}{kn(n-1)}$. This gives $t = \\frac{v(n-1)}{f}$. Now, we can substitute this expression for $t$ back into the equation for $s$: $s = k t^n = k (\\frac{v(n-1)}{f})^n = k \\frac{v^n(n-1)^n}{f^n}$. This does not immediately give one of the options. Let's try a different approach. We have $v^2 = (knt^{n-1})^2 = k^2n^2t^{2n-2}$. Also, $fs = (kn(n-1)t^{n-2})(kt^n) = k^2n(n-1)t^{2n-2}$. Comparing $v^2$ and $fs$, we see that $v^2 = \\frac{k^2n^2t^{2n-2}}{k^2n(n-1)t^{2n-2}} fs = \\frac{n}{n-1}fs$. Rearranging this gives $(n-1)v^2=nfs$."
  },
  {
    "id": 38,
    "question": "Let $A$ be an open set and $B$ be a closed set. Then",
    "options": [
      "$A \\cap B$ be closed and $A \\cup B$ be open",
      "$A \\cap B$ be open and $A \\cup B$ be closed",
      "both $A \\cup B$ and $A \\cap B$ are closed sets",
      "None of the above"
    ],
    "answer": 3,
    "explanation": "Let's consider some examples. Let $A=(0,2)$ and $B=[1,3]$. $A$ is open, $B$ is closed. $A \\cap B = (0,2) \\cap [1,3] = [1,2)$. This set is neither open nor closed. $A \\cup B = (0,2) \\cup [1,3] = (0,3]$. This set is neither open nor closed. Therefore, none of the options are guaranteed to be true. The intersection of an open set and a closed set is not necessarily open or closed, and the union of an open set and a closed set is not necessarily open or closed."
  },
  {
    "id": 39,
    "question": "A particle describes a plane curve under an acceleration which is always directed towards a fixed point i.e., under the action of a central force $F$ per unit mass, then which of the following is not true?<br> (notations bear their usual meaning)",
    "options": [
      "$\\frac{d^{2} u}{d \\theta^{2}}+u=\\frac{F}{h^{2} u^{2}}$",
      "$h=r^{2} \\theta$",
      "$h=v p$",
      "$\\frac{h^{2}}{p^{3}} \\frac{d r}{d p}=F$"
    ],
    "answer": 3,
    "explanation": "A central force implies that the angular momentum is conserved. The angular momentum per unit mass is given by $h = r^2 \\dot{\\theta}$ where $\\dot{\\theta}$ is the angular velocity. The velocity is also given by $v=\\frac{h}{p}$ where $p$ is the perpendicular distance from the pole to the tangent. So $h=vp$ is correct. The first option is the differential equation of the orbit in polar coordinates. The fourth option, $\\frac{h^{2}}{p^{3}} \\frac{d r}{d p}=F$, is not a standard relation and is incorrect. The correct relation between force and the pedal equation is $F = \\frac{h^2}{p^3} \\frac{dp}{dr}$."
  },
  {
    "id": 40,
    "question": "The variance of the distribution, $n=10$, $\\sum x=30, \\sum x^{2}=400$ is",
    "options": [
      "15.5",
      "1",
      "37",
      "31"
    ],
    "answer": 3,
    "explanation": "The formula for variance is $\\sigma^2 = \\frac{1}{n}\\sum x^2 - (\\bar{x})^2$, where $\\bar{x} = \\frac{\\sum x}{n}$. We are given $n=10$, $\\sum x=30$, and $\\sum x^2=400$. First, find the mean: $\\bar{x} = \\frac{30}{10} = 3$. Now, calculate the variance: $\\sigma^2 = \\frac{400}{10} - (3)^2 = 40-9=31$."
  },
  {
    "id": 41,
    "question": "The number of values of $k$ for which the equation $x^{3}-3 x+2 k=0$ has a double root is",
    "options": [
      "1",
      "2",
      "3",
      "infinite"
    ],
    "answer": 1,
    "explanation": "A polynomial has a double root at a value $x_0$ if both $P(x_0)=0$ and $P'(x_0)=0$. Let $P(x) = x^3-3x+2k$. Then $P'(x)=3x^2-3$. Setting $P'(x)=0$, we get $3(x^2-1)=0$, which gives $x=\\pm 1$. Now, we check these values in $P(x)=0$ to find the corresponding values of $k$. Case 1: $x=1$. $P(1) = 1^3-3(1)+2k=0 \\implies 1-3+2k=0 \\implies -2+2k=0 \\implies k=1$. Case 2: $x=-1$. $P(-1)=(-1)^3-3(-1)+2k=0 \\implies -1+3+2k=0 \\implies 2+2k=0 \\implies k=-1$. So there are two distinct values of $k$, namely $k=1$ and $k=-1$, for which the equation has a double root."
  },
  {
    "id": 42,
    "question": "For what values of $a$, the following system has non-trivial solution? $x+y+3 z=0,4 x+3 y+8 z=0,2 x+y+a z=0$.",
    "options": [
      "5",
      "$-3$",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "A homogeneous system of linear equations has a non-trivial solution if and only if the determinant of the coefficient matrix is zero. The coefficient matrix is $A = \\begin{pmatrix} 1 & 1 & 3 \\\\ 4 & 3 & 8 \\\\ 2 & 1 & a \\end{pmatrix}$. We need to find $a$ such that $\\det(A)=0$. Using cofactor expansion along the first row: $\\det(A) = 1(3a-8) - 1(4a-16) + 3(4-6) = 3a-8-4a+16+3(-2) = -a+8-6 = -a+2$. Setting the determinant to zero, we get $-a+2=0$, which gives $a=2$."
  },
  {
    "id": 43,
    "question": "If $I_{n}=\\int e^{-x} x^{n} d x$, then",
    "options": [
      "$I_{n}+n I_{n-1}=e^{-x} x^{n}$ ",
      "$I_{n}-I_{n-1}=n e^{-x} x^{n+1}$  ",
      "$I_{n}+I_{n-1}=-e^{-x} x^{n+1}$",
      "$I_{n}-n I_{n-1}=-e^{-x} x^{n}$"
    ],
    "answer": 3,
    "explanation": "We use integration by parts for the integral $I_n = \\int x^n e^{-x} dx$. Let $u=x^n$ and $dv=e^{-x}dx$. Then $du=nx^{n-1}dx$ and $v=-e^{-x}$. Using the formula $\\int u dv = uv - \\int v du$, we get $I_n = x^n(-e^{-x}) - \\int (-e^{-x})(nx^{n-1})dx = -x^n e^{-x} + n \\int x^{n-1}e^{-x}dx$. The last integral is $I_{n-1}$. So, we have $I_n = -x^n e^{-x} + n I_{n-1}$. Rearranging the terms, we get $I_n - nI_{n-1} = -x^n e^{-x}$."
  },
  {
    "id": 44,
    "question": "Under matrix addition and multiplication, the set $\\left\\{\\left(\\begin{array}{cc}a & b \\\\ -b & a\\end{array}\\right): a, b \\in \\mathbb{R}\\right\\}$ is",
    "options": [
      "a ring but not an integral domain ",
      "an integral domain but not a field  ",
      "a commutative ring without unity  ",
      "a field"
    ],
    "answer": 3,
    "explanation": "This set of matrices is isomorphic to the set of complex numbers $\\mathbb{C}$. The matrix $\\begin{pmatrix} a & b \\\\ -b & a \\end{pmatrix}$ corresponds to the complex number $a+ib$. The addition of matrices corresponds to the addition of complex numbers, and the multiplication of matrices corresponds to the multiplication of complex numbers. Since the complex numbers form a field, this set of matrices also forms a field under the given operations. The identity matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ corresponds to the complex number $1+0i=1$, which is the multiplicative identity. The inverse of $\\begin{pmatrix} a & b \\\\ -b & a \\end{pmatrix}$ is $\\frac{1}{a^2+b^2}\\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}$, which exists for all non-zero matrices in the set."
  },
  {
    "id": 45,
    "question": "A particle describes an equiangular spiral $r=a e^{\\theta}$ in such a manner that its acceleration has no radial components, then its angular velocity is",
    "options": [
      "proportional to $r$",
      "constant",
      "proportional to $r^{2}$",
      "proportional to $\\frac{1}{r}$"
    ],
    "answer": 1,
    "explanation": "The radial component of acceleration is given by $a_r = \\ddot{r} - r\\dot{\\theta}^2$. We are given that $a_r=0$, so $\\ddot{r} = r\\dot{\\theta}^2$. For the equiangular spiral $r=ae^{\\theta}$, we have $\\dot{r} = a e^{\\theta} \\dot{\\theta} = r\\dot{\\theta}$ and $\\ddot{r} = \\dot{r}\\dot{\\theta} + r\\ddot{\\theta} = (r\\dot{\\theta})\\dot{\\theta} + r\\ddot{\\theta} = r\\dot{\\theta}^2+r\\ddot{\\theta}$. Substituting this into the radial acceleration equation, we get $r\\dot{\\theta}^2+r\\ddot{\\theta} = r\\dot{\\theta}^2$. This implies $r\\ddot{\\theta}=0$. Since $r \\neq 0$, we have $\\ddot{\\theta}=0$. This means the angular velocity $\\dot{\\theta}$ is a constant."
  },
  {
    "id": 46,
    "question": "If $\\sum x_{n}^{2}$ and $\\sum y_{n}^{2}$ be both convergent series, then $\\sum x_{n} y_{n}$ is",
    "options": [
      "conditionally convergent ",
      "absolutely convergent ",
      "not convergent  ",
      "not bounded"
    ],
    "answer": 1,
    "explanation": "This is a result of the Cauchy-Schwarz inequality for series. The Cauchy-Schwarz inequality states that for two series $\\sum a_n^2$ and $\\sum b_n^2$, we have $(\\sum |a_n b_n|)^2 \\leq (\\sum a_n^2)(\\sum b_n^2)$. If $\\sum x_n^2$ and $\\sum y_n^2$ are both convergent, then they are finite, so their product is finite. This means that $(\\sum |x_n y_n|)^2$ is finite, which implies that $\\sum x_n y_n$ is absolutely convergent."
  },
  {
    "id": 47,
    "question": "Consider a L.P.P:<br> \nMax $z=11 x_{1}+2 x_{2}$,<br> \nsubjected to <br> $4 x_{1}+x_{2} \\leq 8$,<br> \n $x_{1}+3 x_{2} \\geq 6$,<br> \n $x_{1}, x_{2} \\geq 0$. <br> \nThe problem has",
    "options": [
      "no feasible solution  ",
      "no solution  ",
      "unbounded solution ",
      "unique optimal solution"
    ],
    "answer": 3,
    "explanation": "Because it has just 2 variables, you can do graphical solution. See the feasible area and objective function in the graph below. <br> \
    <img src = 'lpp-image.png' width = '202px' alt = 'LPP image'/>"
  },
  {
    "id": 48,
    "question": "If the lines $2 x+2=y-3=4 z-4$ and $\\frac{x+1}{k}=\\frac{y+5}{2}=\\frac{z-3}{4}$ are perpendicular, then the value of $k$ is",
    "options": [
      "$-6$",
      "$-12$",
      "7",
      "$-\\frac{1}{2}$"
    ],
    "answer": 0,
    "explanation": "Two lines are perpendicular if the dot product of their direction vectors is zero. The first line's equation can be rewritten in the standard symmetric form: $2(x+1) = y-3 = 4(z-1)$. Dividing by 4 to make the denominators integers, we get $\\frac{x+1}{2} = \\frac{y-3}{4} = \\frac{z-1}{1}$. The direction vector for this line is $\\vec{d_1} = \\langle 2, 4, 1 \\rangle$. The second line is already in standard form: $\\frac{x+1}{k}=\\frac{y+5}{2}=\\frac{z-3}{4}$. The direction vector for this line is $\\vec{d_2} = \\langle k, 2, 4 \\rangle$. For the lines to be perpendicular, $\\vec{d_1} \\cdot \\vec{d_2} = 0$. So, $(2)(k)+(4)(2)+(1)(4) = 0$. This gives $2k+8+4=0$, which simplifies to $2k+12=0$, so $k=-6$."
  },
  {
    "id": 49,
    "question": "The probability that a non-leap year selected at random will contain 53 Mondays is",
    "options": [
      "$\\frac{6}{7}$",
      "$\\frac{2}{7}$",
      "$\\frac{3}{7}$",
      "$\\frac{1}{7}$"
    ],
    "answer": 3,
    "explanation": "A non-leap year has 365 days. $365 = 52 \\times 7 + 1$. This means a non-leap year contains exactly 52 full weeks and 1 extra day. The 52 weeks guarantee 52 Mondays. The probability of having 53 Mondays depends on what day of the week that extra day is. The extra day can be any of the 7 days of the week, with equal probability. For the year to have 53 Mondays, the extra day must be a Monday. The probability of this is $\\frac{1}{7}.$"
  },
  {
    "id": 50,
    "question": "The degree of homogeneity of $f(x, y)=\\frac{y}{x}+\\log \\left(\\frac{y}{x}\\right)$ is ",
    "options": [
      "0",
      "1",
      "2",
      "$\\frac{1}{2}$"
    ],
    "answer": 0,
    "explanation": "A function $f(x,y)$ is homogeneous of degree $k$ if $f(tx,ty)=t^k f(x,y)$. Let's test the given function. $f(tx,ty) = \\frac{ty}{tx} + \\log(\\frac{ty}{tx}) = \\frac{y}{x} + \\log(\\frac{y}{x})$. Since this is equal to the original function $f(x,y)$, we have $f(tx,ty)=t^0 f(x,y)$, so the degree of homogeneity is 0."
  },
  {
    "id": 51,
    "question": "The eigenvalues of a $3 \\times 3$ matrix $P$ are 3, 1, and $-2$, then $6 P^{-1}$ equals to ",
    "options": [
      "$5 I-2 P+P^{2}$",
      "$5 I-2 P-P^{2}$",
      "$5 I+2 P-P^{2}$",
      "$5 I+2 P+P^{2}$"
    ],
    "answer": 2,
    "explanation": "The characteristic equation of a matrix $P$ is given by $\\det(P-\\lambda I)=0$. The eigenvalues are the roots of this equation. For a $3\\times 3$ matrix with eigenvalues 3, 1, and $-2$, the characteristic polynomial is $p(\\lambda) = (\\lambda-3)(\\lambda-1)(\\lambda+2) = \\lambda^3-2\\lambda^2-5\\lambda+6$. By the Cayley-Hamilton theorem, a matrix satisfies its own characteristic equation, so $P^3-2P^2-5P+6I=0$. We want to find $6P^{-1}$. From the characteristic equation, we have $6I = -P^3+2P^2+5P$. Multiplying by $P^{-1}$, we get $6P^{-1} = -P^2+2P+5I = 5I+2P-P^2.$"
  },
  {
    "id": 52,
    "question": "The envelopes of the family of straight lines $y=(m-1) x+\\frac{1}{m}, m$ is a parameter, is",
    "options": [
      "$x^{2}+y^{2}=4 y$",
      "$(x+y)^{2}=4 x$",
      "$(x-y)^{2}=4 x y$",
      "$y^{2}=4 x$"
    ],
    "answer": 1,
    "explanation": "To find the envelope, we can either differentiate the given equation with respect to the parameter $m$ and solve for $m$, then substitute it back into the original equation, or rewrite the equation as a quadratic in $m$ and make the discriminant <em>zero</em>. Let's use the first method. The equation is $y=(m-1)x+1/m$. Differentiating with respect to $m$: $0 = x - \\frac{1}{m^2}$. This gives $m^2 = \\frac{1}{x}$, so $m=\\frac{1}{\\sqrt{x}}$. Substituting this back into the original equation: $y = (\\frac{1}{\\sqrt{x}}-1)x+\\sqrt{x} = \\sqrt{x}-x+\\sqrt{x} = 2\\sqrt{x}-x$ or $(x+y)^2 = 4x.$"
  },
  {
    "id": 53,
    "question": "If a particle moves with constant angular velocity about a point $\\mathrm{O}$ in its plane of motion, then the cross-radial acceleration is proportional to its",
    "options": [
      "constant velocity  ",
      "angular velocity   ",
      "radial velocity    ",
      "cross-radial velocity"
    ],
    "answer": 2,
    "explanation": "The radial velocity is $\\dot{r}$ and the cross-radial velocity is $r\\dot{\\theta}$. The cross-radial acceleration is given by $a_{\\theta} = \\frac{1}{r}\\frac{d}{dt}(r^2\\dot{\\theta}) = \\frac{1}{r}(2r\\dot{r}\\dot{\\theta}+r^2\\ddot{\\theta}) = 2\\dot{r}\\dot{\\theta}+r\\ddot{\\theta}$. We are given that the angular velocity $\\dot{\\theta}$ is constant, so $\\ddot{\\theta}=0$. The cross-radial acceleration becomes $a_{\\theta} = 2\\dot{r}\\dot{\\theta}$. Since $\\dot{\\theta}$ is constant, the cross-radial acceleration is proportional to the radial velocity $\\dot{r}$. So, the answer is 'radial velocity'."
  },
  {
    "id": 54,
    "question": "The rate of convergence of the Newton-Raphson method: $x_{n+1}=x_{n}-\\frac{f\\left(x_{n}\\right)}{f^{\\prime}\\left(x_{n}\\right)}, n=0,1,2, \\ldots$, is",
    "options": [
      "linear",
      "quadratic",
      "cubic",
      "zero"
    ],
    "answer": 1,
    "explanation": "The Newton-Raphson method is a root-finding algorithm that uses the tangent line to approximate the root. Its rate of convergence is typically quadratic. This means that the number of correct decimal places in the approximation roughly doubles with each iteration, provided the initial guess is sufficiently close to the root."
  },
  {
    "id": 55,
    "question": "10 is the mean of a set of 7 observations and 5 is the mean of another set of $k$ observations. If the mean of those two sets taking together is 8.5, then the value of $k$ is",
    "options": [
      "6",
      "5",
      "12",
      "3"
    ],
    "answer": 3,
    "explanation": "Let the first set of observations be $x_1, \\ldots, x_7$ and the second set be $y_1, \\ldots, y_k$. We are given that the mean of the first set is 10, so $\\frac{\\sum\\limits_{i=1}^7 x_i}{7} = 10$, which implies $\\sum\\limits_{i=1}^7 x_i = 70$. We are also given that the mean of the second set is 5, so $\\frac{\\sum\\limits_{j=1}^k y_j}{k} = 5$, which implies $\\sum\\limits_{j=1}^k y_j = 5k$. The total number of observations is $7+k$. The mean of the combined set is 8.5, so $\\frac{\\sum\\limits x_i + \\sum\\limits y_j}{7+k} = 8.5$. Substituting the sums, we get $\\frac{70+5k}{7+k}=8.5$. Multiplying by the denominator gives $70+5k = 8.5(7+k) = 59.5+8.5k$. Rearranging the terms, we get $70-59.5 = 8.5k-5k$, which simplifies to $10.5 = 3.5k$. Dividing by 3.5, we get $k = 3$."
  },
  {
    "id": 56,
    "question": "The moment of inertia of a uniform disc of radius $a$ and mass $M$ about a line perpendicular to the plane and touching its boundary is",
    "options": [
      "$Ma^2$",
      "$2Ma^2$",
      "$\\frac{3}{2}Ma^2$",
      "$\\frac{4}{3}Ma^2$"
    ],
    "answer": 2,
    "explanation": "The moment of inertia of a uniform disc of mass $M$ and radius $a$ about an axis perpendicular to the plane and passing through its center is $I_c = \\frac{1}{2}Ma^2$. We want to find the moment of inertia about a parallel axis that touches the boundary. We can use the parallel axis theorem, which states that $I = I_c + Md^2$, where $d$ is the distance between the two axes. In this case, the distance is the radius of the disc, so $d=a$. Therefore, $I = \\frac{1}{2}Ma^2 + M(a)^2 = \\frac{1}{2}Ma^2+Ma^2 = \\frac{3}{2}Ma^2$."
  },
  {
    "id": 57,
    "question": "Number of real $3\\times 3$ matrices $A$ such that $\\text{adj}(A) = \\begin{pmatrix} 1&3&-4\\\\-2&2&-2\\\\1&-3&4 \\end \{pmatrix}$, is",
    "options": [
      "0",
      "1",
      "2",
      "infinite"
    ],
    "answer": 2,
    "explanation": "Let $B = \\text{adj}(A) = \\begin{pmatrix} 1&3&-4\\\\-2&2&-2\\\\1&-3&4 \\end \{pmatrix}$. We know that $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$. So, $A = \\det(A) (\\text{adj}(A))^{-1}$. We also know that $\\det(\\text{adj}(A)) = (\\det(A))^{n-1}$, where $n$ is the order of the matrix. Here $n=3$, so $\\det(B) = (\\det(A))^2$. First, let's find the determinant of $B$: $\\det(B) = 2+18-16 = 4$. So, $(\\det(A))^2 = 4$, which means $\\det(A) = \\pm 2$. Now, we can find $A$ from the formula $A = \\det(A)(\\text{adj}(A))^{-1} = \\det(A) B^{-1}$. As there are two values of $\\det A.$ the number of such matrices is 2."
  },
  {
    "id": 58,
    "question": "The degree of precision of Trapezoidal rule of integration is",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "The degree of precision of a numerical integration method is the degree of the highest-degree polynomial for which the method gives an exact result. The Trapezoidal rule approximates the integral of a function by the area of a trapezoid.  Since it is exact for linear polynomials but not for quadratic polynomials, its degree of precision is 1."
  },
  {
    "id": 59,
    "question": "Value of $\\int_{0}^{1} \\frac{x e^{x}}{(x+1)^{2}} d x$ is",
    "options": [
      "$\\frac{e}{2}$",
      "$\\frac{e-2}{2}$",
      "$e^{2}-e$",
      "$\\frac{e^{2}}{4}-\\frac{e}{2}$"
    ],
    "answer": 1,
    "explanation": "We can rewrite the integrand as $\\frac{x e^x}{(x+1)^2} = \\frac{(x+1-1)e^x}{(x+1)^2} = e^x \\frac{x+1-1}{(x+1)^2} = e^x(\\frac{1}{x+1}-\\frac{1}{(x+1)^2})$. We can use the integration by parts formula $\\int u'v dx = uv - \\int uv' dx$. Let $v=\\frac{e^x}{x+1}$. Then $v' = \\frac{e^x(x+1)-e^x}{(x+1)^2} = \\frac{e^x(x+1-1)}{(x+1)^2} = \\frac{xe^x}{(x+1)^2}$. So the original integrand is the derivative of $\\frac{e^x}{x+1}$. Therefore, $\\int_{0}^{1} \\frac{x e^{x}}{(x+1)^{2}} d x = [\\frac{e^x}{x+1}]_0^1 = \\frac{e^1}{1+1} - \\frac{e^0}{0+1} = \\frac{e}{2}-\\frac{1}{1} = \\frac{e}{2}-1 = \\frac{e-2}{2}$."
  },
  {
    "id": 60,
    "question": "Number of positive real root of the equation $x^3+2x^2-2x-1=0$ is",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "We can use Descartes' Rule of Signs to find the number of possible positive real roots. The number of positive real roots is equal to the number of sign changes in the polynomial $P(x) = x^3+2x^2-2x-1$ or is less than this number by an even integer. The signs of the coefficients are $(+ + - -)$. There is only one sign change, from the second term to the third. So there is exactly one positive real root. "
  }
];
    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
