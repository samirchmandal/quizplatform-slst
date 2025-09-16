exports.handler = async (event, context) => {
    const questions = [
  {
    "id": 1,
    "question": "If $|\\vec{a}|=|\\vec{b}|=|\\vec{a}+\\vec{b}|=1$, then $|\\vec{a}-\\vec{b}|$ is equal to:",
    "options": ["$\\sqrt{2}$", "$\\sqrt{3}$", "$2\\sqrt{3}$", "$\\sqrt{5}$"],
    "answer": 1,
    "explanation": "Given $|\\vec{a}|=1$, $|\\vec{b}|=1$, and $|\\vec{a}+\\vec{b}|=1$. We know that $|\\vec{a}+\\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + 2|\\vec{a}||\\vec{b}|\\cos\\theta$. Plugging in the values, we get $1^2 = 1^2 + 1^2 + 2(1)(1)\\cos\\theta$, which simplifies to $1 = 2 + 2\\cos\\theta$. Solving for $\\cos\\theta$, we get $2\\cos\\theta = -1$, so $\\cos\\theta = -1/2$. Now, we want to find $|\\vec{a}-\\vec{b}|$. We know that $|\\vec{a}-\\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 - 2|\\vec{a}||\\vec{b}|\\cos\\theta$. Substituting the given values and the value of $\\cos\\theta$ we just found, we get $|\\vec{a}-\\vec{b}|^2 = 1^2 + 1^2 - 2(1)(1)(-1/2) = 1 + 1 + 1 = 3$. Therefore, $|\\vec{a}-\\vec{b}| = \\sqrt{3}$."
  },
  {
    "id": 2,
    "question": "A function $f:\\mathbb{R}\\rightarrow \\mathbb{R}$ is defined by $f(x)=2x$ for $x \\in \\mathbb{Q}$ and $f(x)=1-x$ for $x \\in \\mathbb{R} - \\mathbb{Q}$. Then",
    "options": ["$f$ is continuous at every point of $\\mathbb{R}.$", "$f$ is continuous at $x=\\frac{1}{2}$", "$f$ is continuous at $x=\\frac{1}{3}$", "$f$ is continuous at $x=0$"],
    "answer": 2,
    "explanation": "For a function to be continuous at a point, the value of the function at that point must equal the limit of the function as it approaches that point. Let the point of continuity be $x=a$. For $x \\in \\mathbb Q$, $f(x)=2x$, and for $x \\in \\mathbb{R} - \\mathbb{Q}$, $f(x)=1-x$. The function is continuous at a point where $2x = 1-x$. Solving for $x$, we get $3x = 1$, which gives $x=\\frac{1}{3}$. So the function is continuous only at $x=\\frac{1}{3}$."
  },
  {
    "id": 3,
    "question": "If two straight lines $\\frac{x-1}{2}=\\frac{y+1}{3}=\\frac{z-1}{4}$ and $\\frac{x-3}{1}=\\frac{y-k}{2}=\\frac{z}{1}$ intersect each other, then the value of $k$ is:",
    "options": ["$\\frac{2}{9}$", "$\\frac{9}{2}$", "9", "$-1$"],
    "answer": 1,
    "explanation": "The two lines are intersecting then they are coplanar. So the triple product of the three vectors, two direction vectors and the vector joining two points on two different lines. This leads to $$\\begin{vmatrix}2&3&4\\\\1&2&1\\\\2&k+1&-1\\end{vmatrix}=0.$$ Solving for $k$ we get $k = \\frac{9}{2}.$"
  },
  {
    "id": 4,
    "question": "The order of the differential equation whose general solution is $y=2ax+a^2$ is:",
    "options": ["1", "2", "3", "undefined"],
    "answer": 0,
    "explanation": "The order of a differential equation is the highest order of the derivative appearing in the equation. To find the differential equation from the general solution $y=2ax+a^2$, we need to eliminate the arbitrary constant '$a$'. First, differentiate the equation with respect to $x$: $y' = \\frac{dy}{dx} = 2a$. From this, we have $a = y'/2$. Substitute this value of '$a$' back into the original equation: $y = 2(y'/2)x + (y'/2)^2$, which simplifies to $4y = 4y'x + (y')^2$. This is the differential equation. The highest order derivative is $y' = \\frac{dy}{dx}$, which is a first derivative. Thus, the order of the differential equation is 1. Note that 2 is the degree."
  },
  {
    "id": 5,
    "question": "The Simpson's 1/3 Rule is applicable when the number of subintervals is:",
    "options": ["Prime", "Odd", "Even", "Multiple of 3"],
    "answer": 2,
    "explanation": "Simpson's 1/3 Rule is a numerical method for approximating a definite integral. This method works by approximating the curve with quadratic segments. To use quadratic segments, you need an even number of subintervals."
  },
  {
    "id": 6,
    "question": "In an examination, 30% of the students failed in Mathematics, 15% failed in Chemistry and 10% failed in both Mathematics and Chemistry. A student is selected at random. If he has failed in Chemistry then the probability that he has passed in Mathematics is:",
    "options": ["$\\frac{1}{2}$", "1", "0", "$\\frac{1}{3}$"],
    "answer": 3,
    "explanation": "Let $M$ be the event that a student failed in Mathematics and $C$ be the event that a student failed in Chemistry. We are given: $P(M) = 30\\% = 0.30, P(C) = 15\\% = 0.15,$ and $P(M \\cap C) = 10\\% = 0.10.$ We need to find the probability that a student passed in Mathematics, given he failed in Chemistry. This can be written as $P(M'|C)$, where $M'$ denotes passing in Mathematics. We know that $P(M'|C) = \\frac{P(M' \\cap C)}{P(C)}= \\frac{P(C) - P(M \\cap C)}{P(C)} = \\frac{0.15-0.10}{0.15}= \\frac{1}{3}$."
  },
  {
    "id": 7,
    "question": "The number of real solutions of the equation $|x|^2 - 3|x| + 2 = 0$ is:",
    "options": ["0", "1", "2", "4"],
    "answer": 3,
    "explanation": "Let $y = |x|$. The equation becomes $y^2 - 3y + 2 = 0$. Factoring the quadratic, we get $(y-1)(y-2)=0$. This gives us two possible values for $y$: $y=1$ and $y=2$. Since $y=|x|$, we have $|x|=1$ or $|x|=2$. For $|x|=1$, the real solutions are $x=1$ and $x=-1$. For $|x|=2$, the real solutions are $x=2$ and $x=-2$. Therefore, there are a total of 4 real solutions."
  },
  {
    "id": 8,
    "question": "The equation $xy - px - qy + pq = 0$ represents:",
    "options": ["an ellipse", "a circle", "a hyperbola", "a pair of straight lines"],
    "answer": 3,
    "explanation": "The given equation is $xy - px - qy + pq = 0$. It can be written as $(x-q)(y-p) = 0$. This equation is satisfied if either $x-q=0$ or $y-p=0$. This gives us two equations for straight lines: $x=q$ and $y=p$. Thus, the equation represents a pair of straight lines.<br> <strong>Alternately,</sstrong> $D= \\begin{vmatrix}0&1/2\\\\1/2&0\\end{vmatrix}=-1/4<0$ and $\\Delta = \\begin{vmatrix}0&1/2&-p/2\\\\1/2&0&-q/2\\\\-p/2&-q/2&pq\\end{vmatrix}.$ Or, $8\\Delta = \\begin{vmatrix}0&1&-p\\\\1&0&-q\\\\-p&-q&2pq\\end{vmatrix}=-pq+pq=0.$ As $\\Delta=0$, it represents a pair of straight lines."
  },
  {
    "id": 9,
    "question": "Two eigenvectors of a square matrix $A$ over a field $F$ corresponding to two distinct eigenvalues of $A$ are always:",
    "options": ["equal", "independent", "dependent", "null"],
    "answer": 1,
    "explanation": "A fundamental theorem in linear algebra states that eigenvectors corresponding to distinct eigenvalues of a matrix are always linearly independent. This is a crucial property used in many applications of linear algebra, such as diagonalization of a matrix."
  },
  {
    "id": 10,
    "question": "Let $f:\\mathbb{R}\\rightarrow \\mathbb{R}$ be defined by $f(x)=x^2$, $x\\in \\mathbb{R}$. Then $f$ is:",
    "options": ["only injective", "only surjective", "both injective and surjective", "neither injective nor surjective"],
    "answer": 3,
    "explanation": "A function is <strong>injective (one-to-one)</strong> if every element in the codomain has at most one pre-image in the domain. For $f(x)=x^2$, we have $f(-2) = (-2)^2 = 4$ and $f(2) = 2^2 = 4$. Since two different domain elements (-2 and 2) map to the same codomain element (4), the function is not injective. A function is <strong>surjective (onto) </strong> if every element in the codomain is mapped to by at least one element in the domain. The codomain is $\\mathbb{R}$, but the range of $f(x)=x^2$ is $[0, \\infty)$, as squares of real numbers are always non-negative. Since negative numbers in the codomain ($\\mathbb{R}$) are not mapped to by any element in the domain, the function is not surjective. Therefore, the function is neither injective nor surjective."
  },
  {
    "id": 11,
    "question": "The variance of 30 observations was found to be 10. If each observation is multiplied by 5, then the new variance of the observations will be:",
    "options": ["50", "15", "250", "150"],
    "answer": 2,
    "explanation": "Let the original set of observations be $x_1, x_2, ..., x_{30}$. The variance is given as $\\sigma^2 = 10$. If each observation is multiplied by a constant $c$, the new observations are $y_i = cx_i$. The new variance, $\\sigma_{new}^2$, is given by the formula $\\sigma_{new}^2 = c^2 \\cdot \\sigma^2$. In this case, $c=5.$ So, the new variance will be $5^2 \\cdot 10 = 25 \\cdot 10 = 250$."
  },
  {
    "id": 12,
    "question": "The series $\\sum\\limits_{n=1}^{\\infty}\\frac{1}{n^p}$ is convergent when:",
    "options": ["$p=0$", "$p<0$", "$p>0$", "$p>1$"],
    "answer": 3,
    "explanation": "The series $\\sum\\limits_{n=1}^{\\infty}\\frac{1}{n^p}$ is known as a $p$-series. According to the $p$-series test, this series converges if and only if $p>1$. It diverges for $p \\le 1$."
  },
  {
    "id": 13,
    "question": "The value of $\\lim\\limits_{(x,y)\\rightarrow(0,0)}\\frac{xy}{x^2+y^2}$ is:",
    "options": ["1", "$\\frac{1}{2}$", "$\\frac{1}{4}$", "does not exist"],
    "answer": 3,
    "explanation": "To determine if the limit exists, we can approach the point (0,0) along different paths. Let's try approaching along the line $y=mx$. Substituting this into the expression, we get $\\frac{xy}{x^2+y^2}=\\frac{x(mx)}{x^2+(mx)^2} = \\frac{m}{1+m^2}$. The value of the limit depends on the value of $m.$ Since the limit is different for different paths, the limit does not exist."
  },
  {
    "id": 14,
    "question": "The equation $x^2+xy+y^2+x+y=1$ represents:",
    "options": ["an ellipse", "a hyperbola", "a parabola", "a pair of straight lines"],
    "answer": 0,
    "explanation": "The general form of a conic section is $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$. For the given equation, $x^2+xy+y^2+x+y-1=0$, we have $a=1, b=1, h=\\frac{1}{2}=g=f, c=-1.$ The discriminant is $D = \\begin{vmatrix} a&h\\\\h&b\\end{vmatrix} = \\begin{vmatrix} 1&\\frac{1}{2}\\\\\\frac{1}{2}&1\\end{vmatrix}= 1-\\frac{1}{4} = \\frac{3}{4}>0.$ Since the discriminant is positive ($D > 0$), the equation represents an ellipse."
  },
  {
    "id": 15,
    "question": "Let $S=\\{(x,y,z)\\in\\mathbb{R}^3:x+y+z=1\\}$ and $T=\\{(x,y,z)\\in\\mathbb{R}^3:x=z=0\\}$. Then:",
    "options": ["$S$ is a subspace of $\\mathbb{R}^3$ but not $T$.", "$T$ is a subspace of $\\mathbb{R}^3$ but not $S$.", "neither $S$ nor $T$ is a subspace of $\\mathbb{R}^3$.", "both $S$ and $T$ are subspaces of $\\mathbb{R}^3$"],
    "answer": 1,
    "explanation": "A non-empty subset of a vector space is a subspace if it is closed under vector addition and scalar multiplication. For $S$, the zero vector (0,0,0) does not satisfy the condition $x+y+z=1.$ Therefore, $S$ is not a subspace. For $T$, any vector in $T$ is of the form $(0,y,0)$. So basically $T$ represents the $y$-axis. Hence it is a subspace of $\\mathbb{R}^3$. Therefore, $T$ is a subspace but $S$ is not."
  },
  {
    "id": 16,
    "question": "An experiment consists in throwing a die 5 times and noting the number of sixes. The experiment was repeated 200 times with the following results: <table class = 'w-full table-auto px-4 lg:table-fixed lg:w-2/3'><tr><td>No of sixes</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><td>Frequency</td><td>58</td><td>86</td><td>40</td><td>14</td><td>2</td><td>0.</td></tr></table> Then the sample mean is:",
    "options": ["1.04", "1.08", "1.05", "0.08"],
    "answer": 1,
    "explanation": "The sample mean is calculated by the formula $\\bar{x} = \\frac{\\sum x_i f_i}{\\sum f_i}$. Here, $x_i$ is the number of sixes and $f_i$ is the frequency. The numerator is $\\sum x_i f_i = (0 \\cdot 58) + (1 \\cdot 86) + (2 \\cdot 40) + (3 \\cdot 14) + (4 \\cdot 2) + (5 \\cdot 0) = 0 + 86 + 80 + 42 + 8 + 0 = 216$. The denominator is the total number of repetitions, $\\sum f_i = 58+86+40+14+2+0 = 200$. Therefore, the sample mean is $\\frac{216}{200} = \\frac{108}{100} = 1.08$."
  },
  {
    "id": 17,
    "question": "Given that $x = A \\cos(pt-\\alpha)$ where $A, p, \\alpha$ are constants, then the false statement is:",
    "options": ["$\\frac{d^2x}{dt^2}=-p^2x$", "$\\frac{d^3x}{dt^3}=-p^2\\frac{dx}{dt}$", "$\\frac{d^2x}{dt^2}=px^2$", "$x=f(t)$ for some function $f$"],
    "answer": 2,
    "explanation": "The given expression is nothing but an equation of SHM. So option (C) must be false. Otherwise we can manually do the calculatons. We are given $x = A \\cos(pt-\\alpha)$. Let's find the derivatives. $\\frac{dx}{dt} = -A\\sin(pt-\\alpha) \\cdot p = -Ap\\sin(pt-\\alpha)$. The second derivative is $\\frac{d^2x}{dt^2} = -Ap\\cos(pt-\\alpha) \\cdot p = -Ap^2\\cos(pt-\\alpha)$. Since $x = A\\cos(pt-\\alpha)$, we have $\\frac{d^2x}{dt^2} = -p^2x$. So option (A) is true. The third derivative is $\\frac{d^3x}{dt^3} = -p^2\\frac{dx}{dt}$. So option (B) is also true. Option (D) is true since $x$ is given as a function of $t$. Option (C) states $\\frac{d^2x}{dt^2}=px^2$. This is not correct from our derivation. The correct relationship is $\\frac{d^2x}{dt^2}=-p^2x$. Therefore, the false statement is (C)."
  },
  {
    "id": 18,
    "question": "The eigenvalues of a real skew symmetric matrix are only:",
    "options": ["real number", "irrational number", "purely imaginary number or zero", "rational number"],
    "answer": 2,
    "explanation": "A real skew-symmetric matrix is a square matrix A such that $A^T = -A$. A theorem in linear algebra states that the eigenvalues of a real skew-symmetric matrix are either zero or purely imaginary. This is because if $\\lambda$ is an eigenvalue of $A$, then $\\bar{\\lambda}$ is an eigenvalue of $A^T$. But as $A^T=-A,$ then $\\bar{\\lambda}=-\\lambda.$ This forces that $\\lambda$ is zero or purely imaginary."
  },
  {
    "id": 19,
    "question": "If $a, b$ are real then the value of $\\tan(i \\log\\frac{a-ib}{a+ib})$ is:",
    "options": ["$\\frac{2ab}{a^2-b^2}$", "$\\frac{ab}{a^2+b^2}$", "$\\frac{ab}{a^2-b^2}$", "$\\frac{2ab}{a^2+b^2}$"],
    "answer": 0,
    "explanation": "Let's first simplify the expression inside the logarithm. We can express the complex number $a+ib$ in polar form as $re^{i\\theta}$, where $r = \\sqrt{a^2+b^2}$ and $\\theta = \\tan^{-1}(b/a)$. Then $a-ib = re^{-i\\theta}$. So, $\\frac{a-ib}{a+ib} = \\frac{re^{-i\\theta}}{re^{i\\theta}} = e^{-2i\\theta}$. Now, let's take the logarithm: $\\log(e^{-2i\\theta}) = -2i\\theta$. The expression becomes $\\tan(i \\cdot (-2i\\theta)) = \\tan(2\\theta)$. We know that $\\tan(2\\theta) = \\frac{2\\tan\\theta}{1-\\tan^2\\theta}$. From the polar form, we have $\\tan\\theta = b/a$. Substituting this, we get $\\frac{2(b/a)}{1-(b/a)^2} = \\frac{2ab}{a^2-b^2}$."
  },
  {
    "id": 20,
    "question": "The set $\\{(x_1,x_2):x_1^2+x_2^2\\le1,x_1,x_2\\ge0\\}$ is:",
    "options": ["a convex set with two extreme points.", "a convex set with infinite number of extreme points.", "a convex set with no extreme point.", "not a convex set."],
    "answer": 1,
    "explanation": "The given set represents the part of the unit disk in the first quadrant, which is a convex shape. An <strong>extreme point</strong> of a convex set is a point that cannot be represented as a convex combination of any other two distinct points in the set. For this quarter-circle shape, the extreme points are not just the two vertices on the axes ((1, 0) and (0, 1)), but all the points on the arc of the circle. Any point on the curved boundary cannot be expressed as a midpoint of two other points on the boundary. Therefore, there are an infinite number of extreme points."
  },
  {
    "id": 21,
    "question": "In an LPP, the decision variables can take:",
    "options": ["any real values.", "integer values only.", "any non-negative real values.", "non-negative integer values only."],
    "answer": 0,
    "explanation": "In a standard Linear Programming Problems (LPP), decision variables ($x_i$'s) are typically assumed to be non-negative real numbers. But in this question it is not mentioned standard LPP and we have seen that decision variable can be unsigned. So correct answer should be any real values."
  },
  {
    "id": 22,
    "question": "For $A=(a_{ij})_{m\\times n},~ m, n > 1,$ if $a_{ij}=1$ for all $i, j$ then $\\text{rank}(A)$ is:",
    "options": ["1", "0", "Number of rows of $A$", "Number of columns of $A$"],
    "answer": 0,
    "explanation": "The rank of a matrix is the maximum number of linearly independent row vectors or column vectors. If every element of the matrix is 1, then all the rows are identical, and all the columns are identical. Therefore, there is only one linearly independent row and one linearly independent column. This means the rank of the matrix is 1."
  },
  {
    "id": 23,
    "question": "In an abelian group, if $o(a)=5$ and $o(b)=7$ then $(ab)^{14}$ is equal to:",
    "options": ["$a$", "$a^{-1}$", "$ab$", "$b$"],
    "answer": 1,
    "explanation": "$o(a)=5$ and $o(b)=7$. Since the group is abelian, we can write $(ab)^{14} = a^{14}b^{14} = a^4$ [because $a^{14}=a^4,~b^{14}= (b^7)^2=e^2=e.$]  $=a^{-1}$."
  },
  {
    "id": 24,
    "question": "The direction cosine of the normal to the plane $Z=5$ is:",
    "options": ["(0, 0, 1)", "(1, 0, 0)", "(0, 1, 0)", "$(\\frac{1}{\\sqrt 2}, \\frac{1}{\\sqrt 2}, 0)$"],
    "answer": 0,
    "explanation": "The equation of a plane is given by $ax+by+cz=d$. The normal vector to the plane is $\\vec{n} = (a, b, c)$. The given plane is $Z=5$, which can be written as $0x+0y+1z=5$. Comparing this with the general form, we have $a=0, b=0, c=1.$ So, the normal vector is $\\vec{n}=(0,0,1).$"
  },
  {
    "id": 25,
    "question": "If we take $\\pi=3.14$ instead of $3.14159$, then the absolute error correct upto 2 significant figures is:",
    "options": ["0.15", "0.00159", "0.015", "0.0016"],
    "answer": 3,
    "explanation": "The absolute error is the difference between the true value and the approximated value. Absolute Error $ = |3.14159 - 3.14| = |0.00159| = 0.00159$. The error is approximately 0.0016 upto 2 significant figures."
  },
  {
    "id": 26,
    "question": "A line $\\frac{x-1}{2}=\\frac{y-2}{2}=\\frac{z-4}{1}$ lies on the plane $ax-3y+5z+d=0$. Then the value of '$a$' is:",
    "options": ["$-1$", "$1$", "$\\frac{1}{2}$", "$3$"],
    "answer": 2,
    "explanation": "For a line to lie on a plane, two conditions must be met: (1) The direction vector of the line must be perpendicular to the normal vector of the plane, and (2) a point on the line must lie on the plane. The direction vector of the line is $\\vec{v}=(2,2,1)$. The normal vector of the plane is $\\vec{n}=(a,-3,5)$. For the vectors to be perpendicular, their dot product must be zero: $\\vec{v} \\cdot \\vec{n} = 0$. So, $(2)(a) + (2)(-3) + (1)(5) = 0$. This gives $2a - 6 + 5 = 0$, which simplifies to $2a-1=0$. Solving for a, we get $a=1/2$. The question only asks for '$a$', so we don't need to check the second condition."
  },
  {
    "id": 27,
    "question": "In Newton Raphson method, if the initial approximation ($x_0$) of a root of the equation $x^2+x-5=0$ is 2 then the next approximation ($x_1$) of the root is:",
    "options": ["$\\frac{11}{5}$", "$\\frac{7}{5}$", "$\\frac{9}{5}$", "$\\frac{13}{5}$"],
    "answer": 2,
    "explanation": "The Newton-Raphson method formula is $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$. We are given $f(x) = x^2+x-5$ and the initial approximation $x_0=2$. First, we find the derivative of $f(x)$: $f'(x) = 2x+1$. Now, we calculate $f(x_0)$ and $f'(x_0)$: $f(x_0) = f(2) = 2^2+2-5 = 1$. $f'(x_0) = f'(2) = 2(2)+1 = 5$. Now, we can find the next approximation $x_1$: $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)} = 2 - \\frac{1}{5} = \\frac{9}{5}.$"
  },
  {
    "id": 28,
    "question": "If $n$ is a positive integer $>1$ and $z$ is a complex number satisfying the equation $z^n=(1+z)^n$, then:",
    "options": ["$\\text{Re}(z)\\le0$", "$\\text{Re}(z)>0$", "$\\text{Re}(z)=1$", "$\\text{Im}(z)=0$"],
    "answer": 0,
    "explanation": "The given equation is $z^n=(1+z)^n$ or $(\\frac{1+z}{z})^n=1.$ Taking the $n$-th root of both sides, we get $\\frac{1+z}{z} = \\omega_k$, where $\\omega_k$ are the $n$-th roots of unity, $\\omega_k = e^{i\\frac{2\\pi k}{n}}$ for $k=0, 1, \\ldots, n-1$. So, $1+\\frac{1}{z} = \\omega_k$ or $z = \\frac{1}{\\omega_k-1}$. Let's find the real part of $z$. For $\\frac{2\\pi k}{n}=\\theta,$ We have $z = \\frac{1}{e^{i\\theta}-1} = \\frac{1}{\\cos\\theta+i\\sin\\theta-1} = \\frac{\\cos\\theta-1-i\\sin\\theta}{((\\cos\\theta-1)-i\\sin\\theta)((\\cos\\theta-1)+i\\sin\\theta)} = \\frac{\\cos\\theta-1-i\\sin\\theta}{(\\cos\\theta-1)^2+\\sin^2\\theta}=\\frac{-2\\sin^2\\frac{\\theta}{2}-2i\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}}{2-2\\cos\\theta}=\\frac{-\\sin^2\\frac{\\theta}{2}-i \\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}}{2\\sin^2\\frac{\\theta}{2}}=-\\frac{1}{2}-i\\frac{1}{2}\\cot\\frac{\\theta}{2}.$ The real part is $\\text{Re}(z) = -\\frac{1}{2}.$"
  },
  {
    "id": 29,
    "question": "If $f:\\mathbb Z\\rightarrow \\mathbb Z$ is defined by $f(n)=(-1)^n$ and $g:\\mathbb Z\\rightarrow \\mathbb Z$ is defined by $g(n)=2n$, then $g\\circ f$ and $f\\circ g$ are respectively:",
    "options": ["$2(-1)^n$ and 1, $n\\in \\mathbb Z$", "1 and $2(-1)^n$, $n\\in \\mathbb Z$", "2 and $(-1)^n$, $n\\in \\mathbb Z$", "1 and $(-1)^n$, $n\\in \\mathbb Z$"],
    "answer": 0,
    "explanation": "The composition of two functions is defined as $(g \\circ f)(x) = g(f(x))$ and $(f \\circ g)(x) = f(g(x))$. For $(g \\circ f)(n) = g(f(n)) = g((-1)^n) = 2(-1)^n$. For $(f \\circ g)(n) = f(g(n)) = f(2n) = (-1)^{2n}=1.$ Therefore, $g \\circ f$ is $2(-1)^n$ and $f \\circ g$ is 1."
  },
  {
    "id": 30,
    "question": "An integrating factor for the differential equation $(x+1)\\frac{dy}{dx}-y=e^{3x}(x+1)^2$ is:",
    "options": ["$\\frac{1}{(1+x)^2}$", "$x+1$", "$\\frac{1}{x^2+1}$","$x^2+1$"],
    "answer": 0,
    "explanation": "First, we rewrite the differential equation in the standard linear form $\\frac{dy}{dx}+P(x)y=Q(x)$. Divide the entire equation by $(x+1)$: $\\frac{dy}{dx} - \\frac{1}{x+1}y = e^{3x}(x+1)$. Here, $P(x) = -\\frac{1}{x+1}$. The integrating factor (I.F.) is given by $\\text{I.F.} = e^{\\int P(x)dx}=e^{\\int -\\frac{1}{x+1}dx}= e^{-\\ln|x+1|}=\\frac{1}{x+1}.$ But initially we multiplied by $\\frac{1}{x+1}.$ So the overall integrating factor is $\\frac{1}{(x+1)^2}$."
  },
  {
    "id": 31,
    "question": "$\\int_{0}^{\\frac{\\pi}{2}}\\frac{\\sin x}{\\sin x + \\cos x}dx=$",
    "options": ["$\\frac{\\pi}{2}$", "$\\frac{\\pi}{4}$", "$\\frac{1}{2}$", "1"],
    "answer": 1,
    "explanation": "Let $I = \\int_{0}^{\\frac{\\pi}{2}}\\frac{\\sin x}{\\sin x + \\cos x}dx$. We use the property of definite integrals that $\\int_{0}^{a}f(x)dx = \\int_{0}^{a}f(a-x)dx$. So, $I = \\int_{0}^{\\frac{\\pi}{2}}\\frac{\\sin(\\frac{\\pi}{2}-x)}{\\sin(\\frac{\\pi}{2}-x)+\\cos(\\frac{\\pi}{2}-x)}dx = \\int_{0}^{\\frac{\\pi}{2}}\\frac{\\cos x}{\\cos x+\\sin x}dx$. Now, we add the two expressions: $2I = \\int_{0}^{\\frac{\\pi}{2}}\\frac{\\sin x}{\\sin x+\\cos x}dx + \\int_{0}^{\\frac{\\pi}{2}}\\frac{\\cos x}{\\cos x+\\sin x}dx = \\int_{0}^{\\frac{\\pi}{2}}\\frac{\\sin x+\\cos x}{\\sin x+\\cos x}dx = \\int_{0}^{\\frac{\\pi}{2}}1 dx = \\frac{\\pi}{2}$. So, $2I=\\frac{\\pi}{2}$, which means $I=\\frac{\\pi}{4}$."
  },
  {
    "id": 32,
    "question": "The curve $\\frac{2}{r}=\\frac{1}{2}+\\frac{1}{4}\\cos\\theta$ represents:",
    "options": ["a parabola", "a hyperbola", "an ellipse", "a straight line"],
    "answer": 2,
    "explanation": "The general polar equation for a conic section is $\\frac{l}{r}=1+e\\cos\\theta$, where $e$ is the eccentricity. Let's rewrite the given equation in this form. First, we need the first term on the right side to be 1. So, we multiply the entire equation by 2: $\\frac{4}{r}=1+\\frac{1}{2}\\cos\\theta$. Comparing this with the standard form, we have $e = 1/2$. Since $e < 1$, the conic section is an ellipse."
  },
  {
    "id": 33,
    "question": "If $A=\\{a,b,c,d\\}$, then the number of non-empty proper subsets of $A$ is:",
    "options": ["14", "15", "16", "17"],
    "answer": 0,
    "explanation": "The number of subsets of a set with $n$ elements is $2^n$. The set $A$ has 4 elements, so the total number of subsets is $2^4 = 16$. A <strong>proper non-empty subset</strong> is any subset except the set itself and the empty set. So we don't count empty-set and $A$ itself. Therefore, the number of non-empty proper subsets is $16-2=14$."
  },
  {
    "id": 34,
    "question": "If $x, y$ are real then the value of $|e^{x+iy}|$ is:",
    "options": ["$e^x$", "$e^{|x|}$", "$e^{\\sqrt{x^2+y^2}}$", "$e^{|x|+|y|}$"],
    "answer": 0,
    "explanation": "We can write the complex number $e^{x+iy}$ as $e^x \\cdot e^{iy}$.  So $|e^{x+iy}| = |e^x||e^{iy}| = |e^x|$, as $|e^{iy}=1.$ But $e^x\\ge 0.$ Thus $|e^{x+iy}|= |e^x|=e^x.$"
  },
  {
    "id": 35,
    "question": "For a rectilinear motion of a particle if an impulse $I$ changes its velocity from $u$ to $v$ and $E$ is the change of kinetic energy, then:",
    "options": ["$E=I(\\frac{2u+3v}{5})$", "$E=I(\\frac{u+v}{2})$", "$E=I(\\frac{u+2v}{3})$", "$E=I(\\frac{u+v}{5})$"],
    "answer": 1,
    "explanation": "Impulse (I) is the change in momentum: $I = \\Delta P = mv - mu = m(v-u).$ Change in kinetic energy is: $E = \\Delta KE = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2 = \\frac{1}{2}m(v^2-u^2) = \\frac{1}{2}m(v-u)(v+u)=\\frac{1}{2}I(v+u)$, as $I = m(v-u).$"
  },
  {
    "id": 36,
    "question": "The set $S=\\{(x,y,z)\\in\\mathbb{R}^3:x^2+y^2=0\\}$ is:",
    "options": ["not a subspace of $\\mathbb{R}^3$", "a subspace of $\\mathbb{R}^3$ and $\\dim(S)=1$", "a subspace of $\\mathbb{R}^3$ and $\\dim(S)=2$", "a subspace of $\\mathbb{R}^2$ and $\\dim(S)=2$"],
    "answer": 1,
    "explanation": "The condition $x^2+y^2=0$ for real numbers $x$ and $y$ implies that $x=0$ and $y=0$. So the set $S$ is given by $S=\\{(0,0,z)\\in\\mathbb{R}^3: z\\in\\mathbb{R}\\}$. This is the $z$-axis in $\\mathbb{R}^3$. The $z$-axis is a line passing through the origin. A line passing through the origin is a subspace. The dimension of a line is 1.  So, $S$ is a subspace of $\\mathbb{R}^3$ of dimension 1."
  },
  {
    "id": 37,
    "question": "If $A$ and $B$ be two $n\\times n$ real square matrices and $\\alpha$ be a real constant then which of the following is true?",
    "options": ["$\\det(\\alpha A+B)=\\alpha \\det A+\\det B$", "$\\det(\\alpha A-B)=\\alpha \\det A-\\det B$", "$\\det(\\alpha A\\cdot B)=\\alpha \\det A\\det B$", "$\\det(\\alpha A\\cdot B)=\\alpha^n\\det A \\det B$"],
    "answer": 3,
    "explanation": "Properties of determinants: 1. $\\det(AB) = \\det(A)\\det(B)$. This is a fundamental property. 2. $\\det(\\alpha A) = \\alpha^n \\det(A)$, where $n$ is the size of the matrix. 3. $\\det(A+B) \\ne \\det(A)+\\det(B),$ in general. The correct statement among the options is thus $\\det(AB)=\\alpha^n\\det A \\det B.$"
  },
  {
    "id": 38,
    "question": "Which of the following functions does not satisfy the conditions of Rolle's theorem in $[-1, 1]$?",
    "options": ["$x^2$", "$\\frac{1}{x^2+4}$", "$\\frac{1}{x}$", "$\\sqrt{x^2+3}$"],
    "answer": 2,
    "explanation": "Rolle's theorem states that if a function $f$ is (1) continuous on a closed interval $[a,b],$ (2) differentiable on the open interval $(a,b),$ and (3) $f(a)=f(b)$, then there exists at least one number $c$ in $(a,b$) such that $f'(c)=0$. Let's check the given functions. For $f(x)=\\frac{1}{x}$, the function is not defined at $x=0,$ which is in the interval $[-1, 1].$ Therefore, the function is not continuous on the closed interval $[-1, 1].$ All other functions are continuous on $[-1, 1]$ and differentiable on $(-1, 1).$"
  },
  {
    "id": 39,
    "question": "Let $(G, \\circ)$ be a group. Define a mapping $f:G\\rightarrow G$ by $f(x)=x^{-1}$, $x\\in G$. Then $f$ is:",
    "options": ["only injective", "only surjective", "not well defined", "bijective"],
    "answer": 3,
    "explanation": "To check for <strong>injective</strong>, assume $f(x) = f(y)$. This means $x^{-1} = y^{-1}$. Taking the inverse of both sides, we get $(x^{-1})^{-1} = (y^{-1})^{-1}$, which simplifies to $x=y$. Thus, $f$ is injective. To check for <strong>surjective</strong>, let $y \\in G$ be an arbitrary element. We need to find an $x$ such that $f(x)=y$. This means $x^{-1}=y$. Taking the inverse of both sides,  $x=y^{-1}$. Since $y$ is in the group $G$, its inverse $y^{-1}$ is also in $G$. So, for every $y$ in $G$, there is an $x$ in $G$ such that $f(x)=y$. Thus, $f$ is surjective. Since $f$ is both injective and surjective, it is bijective."
  },
  {
    "id": 40,
    "question": "If $A$ be a $2\\times2$ non-singular square matrix then $adj(adj A)$ is:",
    "options": ["$A$", "$A^2$", "$A^{-1}$", "$A^{-2}$"],
    "answer": 0,
    "explanation": "For any non-singular square matrix $A$ of order $n$, the formula for $adj(adj A)$ is given by $adj(adj A) = (\\det A)^{n-2}A$. In this case, $n=2.$ So, $adj(adj A) = (\\det A)^{2-2}A = (\\det A)^0 A = 1 \\cdot A = A$. This is a standard result in matrix theory."
  },
  {
    "id": 41,
    "question": "The identity element on the set $\\mathbb Z$ of integers under the binary operation '$*$' defined by $a*b=a+b+1$ for all $a,b\\in\\mathbb{Z}$ is:",
    "options": ["0", "$-1$", "1", "2"],
    "answer": 1,
    "explanation": "The identity element $e$ for a binary operation '$*$' is an element such that for any element $a*e = a=e*a$ for all $a\\in G$. Using the given definition, $a*e = a+e+1$. Setting this equal to $a$, we get $a+e+1 = a\\Rightarrow e = -1.$ We can also check for $e*a = e+a+1 = -1+a+1 = a$. So, the identity element is $-1.$"
  },
  {
    "id": 42,
    "question": "$\\int_{0}^{\\frac{\\pi}{2}}\\sin^5x dx =$",
    "options": ["1", "$\\frac{15}{8}$", "$\\frac{8}{15}$", "$\\frac{8}{15}\\pi$"],
    "answer": 2,
    "explanation": "We can use Gamma and Beta formula. $\\int_{0}^{\\frac{\\pi}{2}} \\sin^5 x dx=\\frac{1}{2}B(3,\\frac{1}{2})=\\frac{1}{2}\\frac{\\Gamma(3)\\Gamma(\\frac{1}{2})}{\\Gamma(\\frac{7}{2})}=\\frac{1}{2}\\frac{2!\\cdot \\Gamma(\\frac{1}{2})}{\\frac52\\frac32\\frac12\\Gamma(\\frac12)}=\\frac{8}{15}.$"
  },
  {
    "id": 43,
    "question": "A function $f:\\mathbb{R}\\rightarrow \\mathbb{R}$ is defined by $f(x)=|x|$. Then:",
    "options": ["$f$ is differentiable at $x=0$", "$f$ is differentiable everywhere on $\\mathbb{R}$", "$f$ is not differentiable only at $x=0$", "$f$ is not differentiable at any point of $\\mathbb{R}$"],
    "answer": 2,
    "explanation": "The function $f(x)=|x|$ is not differentiable at $x=0$. For all other points, the function is a straight line and is differentiable."
  },
  {
    "id": 44,
    "question": "In the ring $(\\mathbb{Q},+,\\cdot)$, which of the following is true?",
    "options": ["only 1 and $-1$ are units.", "each element is unit.", "only non-zero element is unit.", "there is no unit element."],
    "answer": 2,
    "explanation": "A <strong>unit</strong> in a ring with unity (multiplicative identity) is an element that has a multiplicative inverse in the ring. The ring of rational numbers $(\\mathbb{Q}, +, \\cdot)$ has the multiplicative identity 1. Any non-zero rational number $p/q$ has a multiplicative inverse $q/p$ which is also a rational number. The number 0 does not have a multiplicative inverse. Therefore, every non-zero element in the ring of rational numbers is a unit."
  },
  {
    "id": 45,
    "question": "The value of $\\lim\\limits_{n\\rightarrow\\infty}(1+\\frac{1}{n})^{n}$ is:",
    "options": ["a rational number", "an irrational number", "a natural number", "an integer"],
    "answer": 1,
    "explanation": "$\\lim\\limits_{n\\rightarrow\\infty}(1+\\frac{1}{n})^{n}=e.$ The value of $e$ is approximately 2.71828... which is a well-known irrational number."
  },
  {
    "id": 46,
    "question": "Which of the following statements is true?",
    "options": ["Every convergent sequence is bounded.", "Every bounded sequence is convergent.", "An unbounded sequence may be convergent.", "Every monotone sequence is convergent."],
    "answer": 0,
    "explanation": "A fundamental theorem of real analysis states that every convergent sequence is bounded. The converse is not true; a bounded sequence (like $(-1)^n$) may not be convergent. An unbounded sequence cannot be convergent. A monotone sequence (either increasing or decreasing) converges if and only if it is bounded. Therefore, the only true statement among the options is that every convergent sequence is bounded."
  },
  {
    "id": 47,
    "question": "If $f(x)$ is an even function then $\\int_{0}^{x}f(t)dt$ is:",
    "options": ["an even function", "an odd function", "neither even nor odd function", "zero function"],
    "answer": 1,
    "explanation": "Let $g(x) = \\int_{0}^{x}f(t)dt$. Then fundamental theorem of integral calculus says $g'(x)=f(x)$. We know if  $g(x)$ is odd then its derivative is even and vice-versa. So $g$ is an odd function."
  },
  {
    "id": 48,
    "question": "The Trapezoidal rule applied to $\\int_{0}^{2} f(x)dx$ gives the value 4 and Simpson's 1/3 rule gives the value 2. Then $f(1)$ is (Given, $h=$ length of subinterval $= 1$):",
    "options": ["1", "0", "$-1$", "2"],
    "answer": 2,
    "explanation": "Given $h=1$ and the interval is [0, 2], the subintervals are [0, 1] and [1, 2]. The number of subintervals is $n=2.$ The values are at $x_0=0, x_1=1, x_2=2$. The Trapezoidal rule with $n=2$ is $\\int_{0}^{2} f(x)dx \\approx \\frac{h}{2}[f(x_0)+2f(x_1)+f(x_2)]$. So, $4 = \\frac{1}{2}[f(0)+2f(1)+f(2)] \\Rightarrow 8 = f(0)+2f(1)+f(2)$. Simpson's 1/3 rule with $n=2$ is $\\int_{0}^{2} f(x)dx \\approx \\frac{h}{3}[f(x_0)+4f(x_1)+f(x_2)]$. So, $2 = \\frac{1}{3}[f(0)+4f(1)+f(2)] \\Rightarrow 6 = f(0)+4f(1)+f(2)$. We have two equations: (1) $f(0)+2f(1)+f(2) = 8$ and (2) $f(0)+4f(1)+f(2) = 6$. Subtracting equation (1) from equation (2), we get $(f(0)+4f(1)+f(2)) - (f(0)+2f(1)+f(2)) = 6-8$. This simplifies to $2f(1) = -2$, so $f(1)=-1$."
  },
  {
    "id": 49,
    "question": "If pair of lines $x^2 - 2pxy - y^2 = 0$ and $x^2 - 2qxy - y^2 = 0$ be such that each pair bisects the angle between the other pair, then:",
    "options": ["$pq=1$", "$pq=-2$", "$p+q=-1$", "$pq=-1$"],
    "answer": 3,
    "explanation": "The equation of the bisectors of the angles between the pair of lines $ax^2 + 2hxy + by^2 = 0$ is $\\frac{x^2-y^2}{a-b} = \\frac{xy}{h}$. For the first pair of lines, $x^2 - 2pxy - y^2 = 0$, we have $a=1, h=-p, b=-1$. The equation of the bisectors is $\\frac{x^2-y^2}{1-(-1)} = \\frac{xy}{-p} \\Rightarrow \\frac{x^2-y^2}{2} = -\\frac{xy}{p} \\Rightarrow p(x^2-y^2) = -2xy \\Rightarrow px^2+2xy-py^2=0$. This equation represents the second pair of lines, $x^2 - 2qxy - y^2 = 0$. Comparing the coefficients, we have $\\frac{p}{1} = \\frac{2}{-2q} = \\frac{-p}{-1}$. From $\\frac{p}{1} = \\frac{2}{-2q}$, we get $p = -\\frac{1}{q}$, so $pq=-1.$"
  },
  {
    "id": 50,
    "question": "The envelope of the family of straight lines $y = mx+\\sqrt{a^2m^2+b^2}$ ($a, b$ are constants and $m$ is the parameter) is:",
    "options": ["a Circle", "an Ellipse", "a Hyperbola", "a Parabola"],
    "answer": 1,
    "explanation": "The given equation of the family of straight lines is $y = mx+\\sqrt{a^2m^2+b^2}$. We can rewrite this as $y-mx = \\sqrt{a^2m^2+b^2}$. Squaring both sides, we get $(y-mx)^2 = a^2m^2+b^2$. Expanding the left side, we get $y^2 - 2mxy + m^2x^2 = a^2m^2+b^2$. Rearranging, we get $m^2x^2 - a^2m^2 - 2mxy + y^2 - b^2 = 0$, which is $m^2(x^2-a^2) - 2mxy + (y^2-b^2) = 0$. This is a quadratic equation in $m$. For the envelope, the discriminant must be zero. So, $(-2xy)^2 - 4(x^2-a^2)(y^2-b^2) = 0$. Or $x^2y^2 - (x^2y^2-x^2b^2-a^2y^2+a^2b^2) = 0$. This simplifies to $x^2b^2+a^2y^2-a^2b^2=0$. Rearranging, we get $x^2b^2+a^2y^2=a^2b^2$. Dividing by $a^2b^2$, we get $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$. This is the standard equation of an ellipse.<br> <strong>Alternately,</strong> we note that $y = mx+\\sqrt{a^2m^2+b^2}$ is the equation of any tangent of ellipse $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1.$ Hence the envelope is the ellipse."
  },
  {
    "id": 51,
    "question": "The solution (1, 1, 0, 2) to the system <br>$x_1+x_2+x_3=2$, <br> $x_1+x_2-3x_3=2$,<br> $2x_1+4x_2+3x_3-x_4=4$ is:",
    "options": ["A basic feasible solution.", "A basic but not feasible solution.", "A non-degenerate basic feasible solution.", "Not a basic solution."],
    "answer": 3,
    "explanation": "The non-zero variables are $x_1,x_2,x_4.$ The corresponding columns are $\\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix},\\begin{pmatrix}1\\\\1\\\\4\\end{pmatrix}$ and $\\begin{pmatrix}0\\\\0\\\\-1\\end{pmatrix}.$ The matrix by taking these three columns has first two rows are identical, hence singular. Thus the three columns are not linearly independent. Hence the given solution is not a basic one."
  },
  {
    "id": 52,
    "question": "If $f(x)=\\cos^2x+\\sec^2x$ and $x\\in(2n\\pi, (2n+1)\\pi)$ where $n\\in\\mathbb{N}\\cup\\{0\\}$, then which one of the following is always true?",
    "options": ["$f(x)<1$", "$f(x)=1$", "$1 < f(x) < 2$", "$f(x)\\ge2$"],
    "answer": 3,
    "explanation": "$\\cos^2 x \\ge 0$ and $\\sec^2 x \\ge 0$. We can use the AM-GM inequality. For any two positive numbers $a$ and $b$, the arithmetic mean is greater than or equal to the geometric mean, i.e., $\\frac{a+b}{2} \\ge \\sqrt{ab}$. Let $a=\\cos^2x$ and $b=\\sec^2x$. We have $f(x) = \\cos^2x + \\sec^2x\\ge 2\\sqrt{\\cos^2x\\sec^2x} = 2.$  Equality holds when $\\cos^2x = \\sec^2x$, which means $\\cos^4x = 1$. This is true for $x=k\\pi$. But our domain is an open interval. So, equality does not hold, and $f(x) > 2$. Since $f(x) \\ge 2$ is a more general statement and is in the options, this is the correct answer."
  },
  {
    "id": 53,
    "question": "The value of $\\lim\\limits_{n\\rightarrow\\infty}[\\frac{n}{n^2}+\\frac{n}{1^2+n^2}+\\frac{n}{2^2+n^2}+\\frac{n}{3^2+n^2}+\\cdots+\\frac{n}{(n-1)^2+n^2}]$ is:",
    "options": ["$\\frac{\\pi}{4}$", "$\\frac{\\pi}{2}$", "$\\frac{\\pi}{6}$", "1"],
    "answer": 0,
    "explanation": "This limit can be evaluated as a Riemann sum. The expression is $\\lim\\limits_{n\\rightarrow\\infty}\\sum\\limits_{r=0}^{n-1}\\frac{n}{r^2+n^2}= \\lim\\limits_{n\\rightarrow\\infty}\\sum\\limits_{r=0}^{n-1}\\frac{1}{n}\\frac{1}{1+(r/n)^2}$. This is the Riemann sum for the integral $\\int_{0}^{1}\\frac{1}{1+x^2}dx$. The integral is equal to $[\\tan^{-1}x]_{0}^{1} = \\tan^{-1}(1) - \\tan^{-1}(0) = \\frac{\\pi}{4}.$"
  },
  {
    "id": 54,
    "question": "If $n=10, \\Sigma x = 20, \\Sigma x^2 = 200$, then the variance of the associated distribution is:",
    "options": ["4", "16", "9", "3"],
    "answer": 1,
    "explanation": "The formula for variance ($\\sigma^2$) is $\\sigma^2 = \\frac{\\Sigma x^2}{n} - \\left(\\frac{\\Sigma x}{n}\\right)^2$. We are given $n=10$, $\\Sigma x=20$, and $\\Sigma x^2 = 200$. Plugging these values into the formula, we get $\\sigma^2 = \\frac{200}{10} - (\\frac{20}{10})^2 = 20 - (2)^2 = 16$."
  },
  {
    "id": 55,
    "question": "If the radial velocity of a particle is proportional to the transverse velocity, then the path is:",
    "options": ["A conic", "an equiangular spiral", "a cardioide", "a straight line"],
    "answer": 1,
    "explanation": "In polar coordinates, the radial velocity is $\\frac{dr}{dt}$ and the transverse velocity is $r\\frac{d\\theta}{dt}$. The problem states that the radial velocity is proportional to the transverse velocity, so $\\frac{dr}{dt} = k(r\\frac{d\\theta}{dt})$, where $k$ is a constant. We can rewrite this as $\\frac{dr}{r} = k d\\theta$. Integrating both sides, we get $\\int \\frac{dr}{r} = \\int k d\\theta$, which gives $\\ln r = k\\theta + C$. Exponentiating both sides, we get $r = e^{k\\theta+C} = e^C e^{k\\theta}$. Let $A=e^C$. The equation is $r = Ae^{k\\theta}$. This is the equation of an equiangular spiral."
  },
  {
    "id": 56,
    "question": "For what value of $x$ the vectors $x\\hat i-4\\hat j+5\\hat k, \\hat i+2\\hat j+\\hat k$ and $2\\hat i-\\hat j+\\hat k$ are coplanar?",
    "options": ["$\\frac{3}{29}$", "$\\frac{29}{3}$", "$\\frac{20}{3}$", "0"],
    "answer": 1,
    "explanation": "Three vectors are coplanar if their scalar triple product is zero. The scalar triple product of vectors $\\vec{a}=(a_1, a_2, a_3)$, $\\vec{b}=(b_1, b_2, b_3)$, and $\\vec{c}=(c_1, c_2, c_3)$ is given by the determinant of the matrix formed by their components: $\\vec{a}\\cdot(\\vec{b}\\times\\vec{c}) = \\det \\begin{pmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{pmatrix} = 0$. The given vectors are $\\vec{a}=(x,-4,5)$, $\\vec{b}=(1,2,1)$, and $\\vec{c}=(2,-1,1)$. So, we need to solve $\\det \\begin{pmatrix} x & -4 & 5 \\\\ 1 & 2 & 1 \\\\ 2 & -1 & 1 \\end{pmatrix} = 0$. Expanding with respect to first row gives $3x-4-25=0$ or $x=\\frac{29}{3}.$"
  },
  {
    "id": 57,
    "question": "The equations of the straight lines bisecting the angles between the pair of lines $3x^2+xy-2y^2=0$ is:",
    "options": ["$x^2-10xy-y^2=0$", "$x^2+10xy-y^2=0$", "$x^2+10xy+y^2=0$", "$x^2+xy+y^2=0$"],
    "answer": 0,
    "explanation": "The equation of the bisectors of the angles between the pair of lines $ax^2 + 2hxy + by^2 = 0$ is $\\frac{x^2-y^2}{a-b} = \\frac{xy}{h}$. Using this formula, the equation of the bisectors is $\\frac{x^2-y^2}{3-(-2)} = \\frac{xy}{1/2}$. This gives $\\frac{x^2-y^2}{5} = 2xy$. Cross-multiplying, we get $x^2-y^2=10xy$. Rearranging the terms, we get $x^2-10xy-y^2=0$."
  },
  {
    "id": 58,
    "question": "The value of the integral $\\int_{e}^{e^2}\\frac{dx}{x\\log x}$ is:",
    "options": ["1", "$\\log2$", "$2\\log2$", "$\\frac{1}{\\log2}$"],
    "answer": 1,
    "explanation": "To solve the integral $\\int_{e}^{e^2}\\frac{dx}{x\\log x}$, we can use a substitution. Let $u = \\log x$. Then the derivative is $du = \\frac{1}{x}dx$. We also need to change the limits of integration. When $x=e$, $u = \\log e=1$. When $x=e^2$, $u = \\log e^2 = 2$. So the integral becomes $\\int_{1}^{2}\\frac{1}{u}du = [\\log|u|]_{2}^{1} = \\log|2| - \\log|1| =\\log 2.$"
  },
  {
    "id": 59,
    "question": "Let $f(x,y)$ be defined on a domain $D$ in the $xy$-plane and $(a,b)\\in D$. Further, $f_y$ exists in the neighbourhood of $(a,b)$ and $f_{yx}$ is continuous at $(a,b)$. Then ",
    "options": ["$f_{xy}=f_{yx}$ for all $(x,y)\\in D$", "At the point $(a,b)$, $f_{xy} \\ne f_{yx}$", "At the point $(a,b)$, $f_{xy}=f_{yx}$", "At the point $(a,b)$, $f_{xy}$ may not exist."],
    "answer": 2,
    "explanation": "This is an important theorem (either Young's theorem or Schwarz Theorem) in functions of several variable."
  },
  {
    "id": 60,
    "question": "If the roots of the equation $ax^2+bx+c=0$ ($a,b\\ne 0$) are in the ratio $r:1$ then the value of $\\frac{r}{(r+1)^2}$ is:",
    "options": ["$\\frac{bc}{a}$", "$\\frac{ca}{b}$", "$\\frac{ca}{b^2}$", "$\\frac{bc}{a^2}$"],
    "answer": 2,
    "explanation": "Let the roots of the quadratic equation are $\\alpha$ and $r\\alpha$. The sum of the roots is $\\alpha+r\\alpha = -\\frac{b}{a}$, and the product of the roots is $r\\alpha^2 = \\frac{c}{a}$. Substitute the value of $\\alpha$ we get $r(-\\frac{b}{a(r+1)})^2 = \\frac{c}{a}$. This gives $r\\frac{b^2}{a^2(r+1)^2} = \\frac{c}{a}$. So $\\frac{r}{(r+1)^2} = \\frac{ac}{b^2}.$"
  }
];

    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
