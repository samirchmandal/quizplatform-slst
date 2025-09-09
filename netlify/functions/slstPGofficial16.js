exports.handler = async (event, context) => {
    const questions = [
  {
    "id": 1,
    "question": "Square of any odd integer is of the form",
    "options": [
      "$2k+1$",
      "$4k+1$",
      "$6k+1$",
      "$8k+1$"
    ],
    "answer": 3,
    "explanation": "Let the odd integer be $2m+1$ for some integer $m$. The square of this integer is $(2m+1)^2 = 4m^2 + 4m + 1 = 4m(m+1) + 1$. Since $m(m+1)$ is always an even integer (product of two consecutive integers), we can write $m(m+1)=2k$ for some integer $k$. Substituting this, we get $(2m+1)^2 = 4(2k) + 1 = 8k+1$."
  },
  {
    "id": 2,
    "question": "For any complex number $z, z\\bar{z}=0$ if and only if",
    "options": [
      "$\\text{Re }(z)=0$",
      "$\\text{Im }(z) =0$",
      "$z+\\bar{z}=0$",
      "$z=0$"
    ],
    "answer": 3,
    "explanation": "For a complex number $z = x+iy$, we have $z\\bar{z} = (x+iy)(x-iy) = x^2+y^2$. The expression $z\\bar{z}$ is also equal to $|z|^2$. Thus, $z\\bar{z} = 0$ implies $x^2+y^2=0$. Since $x$ and $y$ are real numbers, this is true if and only if $x=0$ and $y=0$, which means $z=x+iy=0$. "
  },
  {
    "id": 3,
    "question": "If $m$ and $n$ are not prime to each other, the possible number of common roots of the equations $x^m-1=0, x^n-1=0$ is",
    "options": [
      "more than one",
      "one",
      "0",
      "two"
    ],
    "answer": 0,
    "explanation": "The roots of the equation $x^k-1=0$ are the $k$-th roots of unity. The common roots of $x^m-1=0$ and $x^n-1=0$ are the roots of $x^d-1=0$ where $d = \\gcd(m,n)$. Since $m$ and $n$ are not prime to each other, $\\gcd(m,n) > 1$. Therefore, the equation $x^d-1=0$ has $d$ distinct roots, and since $d>1$, there is more than one common root."
  },
  {
    "id": 4,
    "question": "If $n\\geq 2,$ then the value of $1+\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}$ is",
    "options": [
      "$\\leq \\sqrt{2n-3}$",
      "$>2n$",
      "$>\\frac{2n}{n+1}$",
      "$<\\frac{2n}{n+1}$"
    ],
    "answer": 2,
    "explanation": "Hint: AM $\\ge$ HM for the numbers $1,2,3,\\cdots, n.$ Then we get $\\frac{1+2+3+\\cdots+n}{n}\\ge \\frac{n}{1+\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}}$. Simplifying, $\\frac{n+1}{2}\\ge \\frac{n}{1+\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}}.$ Taking reciprocal and multiplying by 2, $1+\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}\\ge \\frac{2n}{n+1}.$ Hence answer is (C)."
  },
  {
    "id": 5,
    "question": "For any two positive numbers $a$ and $x$, least value of $ax+\\frac{a}{x}$ is",
    "options": [
      "$a^2$",
      "$\\sqrt{2}a^2$",
      "$a$",
      "$2a$"
    ],
    "answer": 3,
    "explanation": "We can use the AM-GM (Arithmetic Mean-Geometric Mean) inequality. For two positive numbers $p$ and $q$, the AM-GM inequality states that $\\frac{p+q}{2} \\geq \\sqrt{pq}$. Equality holds when $p=q$. Let $p=ax$ and $q=\\frac{a}{x}$. Both are positive since $a>0$ and $x>0$. Thus, $\\frac{ax+\\frac{a}{x}}{2} \\geq \\sqrt{(ax)(\\frac{a}{x})}$. This simplifies to $\\frac{ax+\\frac{a}{x}}{2} \\geq \\sqrt{a^2} = a$. Therefore, $ax+\\frac{a}{x} \\geq 2a$. The least value is $2a$."
  },
  {
    "id": 6,
    "question": "If $a,b,c$ are three unequal numbers and $\\begin{vmatrix} 0&x-a&x-b\\\\x+a&0&x-c\\\\x+b&x+c&0 \\end{vmatrix}=0$, then $x$ is equal to",
    "options": [
      "$a$",
      "$0$",
      "$c$",
      "$b$"
    ],
    "answer": 1,
    "explanation": "Let $M$ be the given matrix. We need to find the value of $x$ for which $\\det(M)=0$. Let's test the given options. If $x=0$, the matrix becomes $\\begin{pmatrix} 0&-a&-b\\\\a&0&-c\\\\b&c&0 \\end{pmatrix}$. This is a skew-symmetric matrix. The determinant of an odd-order skew-symmetric matrix is always zero. Thus, $x=0$ is a solution."
  },
  {
    "id": 7,
    "question": "If $I$ be the $2\\times 2$ identity matrix and $A=\\begin{pmatrix} 2&-1\\\\-1&2 \\end{pmatrix},$ then $A^2$ is equal to",
    "options": [
      "$4A-3I$",
      "$3A-4I$",
      "$A-I$",
      "$A+I$"
    ],
    "answer": 0,
    "explanation": "The trace and determinant of $A$ are 4 and 3. Hence the characteristic equation of $A$ is $x^2-4x+3=0.$ By Cayley-Hamilton theorem we obtain $A^2-4A+3I=0$ or $A^2 = 4A-3I.$"
  },
  {
    "id": 8,
    "question": "If $A=\\begin{pmatrix} \\alpha&0\\\\1&1 \\end{pmatrix}, B=\\begin{pmatrix} 1&0\\\\5&1 \\end{pmatrix}$ and $A^2=B$, then value of $\\alpha$ is",
    "options": [
      "1",
      "-1",
      "4",
      "does not exist"
    ],
    "answer": 3,
    "explanation": "We are given that $A^2=B$. Let's compute $A^2$: $A^2 = \\begin{pmatrix} \\alpha&0\\\\1&1 \\end{pmatrix} \\begin{pmatrix} \\alpha&0\\\\1&1 \\end{pmatrix} = \\begin{pmatrix} \\alpha^2+0 & 0+0 \\\\ \\alpha+1 & 0+1 \\end{pmatrix} = \\begin{pmatrix} \\alpha^2 & 0 \\\\ \\alpha+1 & 1 \\end{pmatrix}$. We are given that $A^2=B$, so we have the matrix equation $\\begin{pmatrix} \\alpha^2 & 0 \\\\ \\alpha+1 & 1 \\end{pmatrix} = \\begin{pmatrix} 1&0\\\\5&1 \\end{pmatrix}$. By comparing the corresponding elements, we get two equations: $\\alpha^2 = 1$ and $\\alpha+1 = 5$. From $\\alpha^2 = 1$, we get $\\alpha = \\pm 1$. From $\\alpha+1 = 5$, we get $\\alpha = 4$. Since there is no value of $\\alpha$ that satisfies both conditions simultaneously, the value of $\\alpha$ does not exist."
  },
  {
    "id": 9,
    "question": "If $W$ be a proper subspace of a finite dimensional vector space $V$, then",
    "options": [
      "dim $W \\nless $ dim $V$",
      "dim $W \\nleq $ dim $V$",
      "dim $W \\leq $ dim $V$",
      "dim $W = $ dim $V$"
    ],
    "answer": 2,
    "explanation": "A <strong>proper subspace</strong> $W$ of a vector space $V$ is a subspace that is not equal to $V$ itself. By definition of a subspace, a subspace $W$ of $V$ always has a dimension less than or equal to the dimension of $V$, i.e., $\\dim(W) \\leq \\dim(V)$. Since $W$ is a <em>proper</em> subspace, it is not equal to $V$, which means their dimensions must be strictly unequal, so $\\dim(W) < \\dim(V)$. This implies that $\\dim(W) \\leq \\dim(V)$ is also true."
  },
  {
    "id": 10,
    "question": "The sum of the eigenvalues of the matrix $\\begin{pmatrix} 5&4\\\\1&2 \\end{pmatrix}$ is",
    "options": [
      "2",
      "7",
      "3",
      "1"
    ],
    "answer": 1,
    "explanation": "The sum of the eigenvalues of a matrix is equal to its <strong>trace</strong>, which is the sum of the elements on the main diagonal. Thus the answer is $5+2=7.$"
  },
  {
    "id": 11,
    "question": "The distance between the pair of lines represented by the equation $x^2-6xy+9y^2+3x-9y-4=0$ is",
    "options": [
      "$\\frac{3}{\\sqrt{10}}$",
      "$\\frac{1}{2}$",
      "$\\sqrt{\\frac{5}{2}}$",
      "$\\frac{1}{\\sqrt{10}}$"
    ],
    "answer": 2,
    "explanation": "The given equation is a second-degree equation representing a pair of straight lines. Notice that the quadratic part $x^2-6xy+9y^2$ is a perfect square: $(x-3y)^2$. This indicates that the two lines are parallel. Let's rewrite the equation as $(x-3y)^2 + 3(x-3y) - 4 = 0$. Let $u = x-3y$. The equation becomes $u^2+3u-4=0$. Factoring the quadratic, we get $(u+4)(u-1)=0$. This gives us two separate equations for the lines: $x-3y+4=0$ and $x-3y-1=0$. These are two parallel lines. The distance between two parallel lines $Ax+By+C_1=0$ and $Ax+By+C_2=0$ is given by the formula $d=\\frac{|C_1-C_2|}{\\sqrt{A^2+B^2}}$. For our lines, $A=1, B=-3, C_1=4, C_2=-1$. So the distance is $d=\\frac{|4-(-1)|}{\\sqrt{1^2+(-3)^2}} = \\frac{|5|}{\\sqrt{1+9}} = \\frac{5}{\\sqrt{10}} = \\sqrt{\\frac{5}{2}}$."
  },
  {
    "id": 12,
    "question": "The set of integers $\\mathbb{Z}$ is with respect to addition and multiplication",
    "options": [
      "a ring but not a field",
      "a field but not a ring",
      "a ring and a field",
      "neither a ring nor a field"
    ],
    "answer": 0,
    "explanation": "A <strong>ring</strong> is a set with two binary operations, addition and multiplication, satisfying certain axioms (closure, associativity, identity, inverse for addition, distributivity). The integers $\\mathbb{Z}$ satisfy all these properties. A <strong>field</strong> is a commutative ring where every non-zero element has a multiplicative inverse. In $\\mathbb{Z}$, most elements do not have a multiplicative inverse that is also an integer (e.g., the multiplicative inverse of 2 is $1/2$, which is not in $\\mathbb{Z}$). Thus, $\\mathbb{Z}$ is a ring but not a field."
  },
  {
    "id": 13,
    "question": "Let $g:\\mathbb{R}\\to \\mathbb{R}$ and $h:\\mathbb{R}\\to \\mathbb{R}$ be two given functions and $g(x)=x+3,h(x)=x^2+x-1$. Then $g\\{h(-20)\\}$ is equal to",
    "options": [
      "$382$",
      "$-7123$",
      "$422$",
      "$551$"
    ],
    "answer": 0,
    "explanation": "This is a composite function problem. We first need to find the value of $h(-20)$. $h(-20) = (-20)^2 + (-20) - 1 = 400 - 20 - 1 = 379$. Now we use this result as the input for the function $g$. $g(h(-20)) = g(379)$. Since $g(x)=x+3$, we have $g(379) = 379+3 = 382$."
  },
  {
    "id": 14,
    "question": "A relation $\\rho$ is defined on $\\mathbb{Z}$ so that $\\rho=\\{(a,b)\\in \\mathbb{Z}\\times \\mathbb{Z} : |a-b|\\leq 5\\}.$ Then the relation is",
    "options": [
      "transitive",
      "reflexive and symmetric",
      "transitive but not symmetric",
      "not reflexive"
    ],
    "answer": 1,
    "explanation": "Let's check the properties of the relation $\\rho$:  1. <strong>Reflexive</strong>: A relation is reflexive if for every element $a$, $(a,a)$ is in the relation. For any $a\\in\\mathbb{Z}$, $|a-a| = |0|=0 \\leq 5$. So, $(a,a)\\in\\rho$. The relation is reflexive.  2. <strong>Symmetric</strong>: A relation is symmetric if whenever $(a,b)$ is in the relation, $(b,a)$ is also in the relation. If $(a,b)\\in\\rho$, then $|a-b| \\leq 5$. Since $|a-b|=|b-a|$, it follows that $|b-a| \\leq 5$, so $(b,a)\\in\\rho$. The relation is symmetric.  3. <strong>Transitive</strong>: A relation is transitive if whenever $(a,b)$ and $(b,c)$ are in the relation, $(a,c)$ is also in the relation. Let's find a counterexample. Let $a=1, b=4, c=7$. Then $|a-b|=|1-4|=3\\leq 5$ and $|b-c|=|4-7|=3\\leq 5$. So $(1,4)\\in\\rho$ and $(4,7)\\in\\rho$. However, $|a-c|=|1-7|=6 \\not\\leq 5$. So $(1,7)\\notin\\rho$. The relation is not transitive.  Therefore, the relation is reflexive and symmetric, but not transitive."
  },
  {
    "id": 15,
    "question": "If $|\\vec{\\alpha}|=10, |\\vec{\\beta}|=1,$ and $\\vec{\\alpha}\\cdot\\vec\\beta =6$, then value of $|\\vec{\\alpha}\\times \\vec{\\beta}|$ is",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answer": 3,
    "explanation": "We can use the identity $|\\vec{\\alpha}\\times \\vec{\\beta}|^2 + (\\vec{\\alpha}\\cdot\\vec\\beta)^2 = |\\vec{\\alpha}|^2 |\\vec{\\beta}|^2$. We are given $|\\vec{\\alpha}|=10, |\\vec{\\beta}|=1,$ and $\\vec{\\alpha}\\cdot\\vec\\beta =6$. Substituting these values: $|\\vec{\\alpha}\\times \\vec{\\beta}|^2 + (6)^2 = (10)^2(1)^2$. $|\\vec{\\alpha}\\times \\vec{\\beta}|^2 + 36 = 100$. $|\\vec{\\alpha}\\times \\vec{\\beta}|^2 = 100-36=64$. Taking the square root, $|\\vec{\\alpha}\\times \\vec{\\beta}| = \\sqrt{64}=8$. "
  },
  {
    "id": 16,
    "question": "If $\\sum a_n$ be an infinite series of non-negative terms and $\\varlimsup a_n^{1/n}=p,$ then $\\sum a_n$ is convergent if",
    "options": [
      "$p<1$",
      "$p\\leq 1$",
      "$p>1$",
      "$p=1$"
    ],
    "answer": 0,
    "explanation": "This is a direct application of the <strong>Root Test</strong> (also known as the Cauchy's root test) for convergence of a series. The Root Test states that for a series $\\sum a_n$, let $L = \\limsup_{n\\to\\infty} |a_n|^{1/n}$. The series converges absolutely if $L < 1$ and diverges if $L > 1$. If $L = 1$, the test is inconclusive. In this problem, the terms are non-negative, so $|a_n|=a_n$. Thus, the series converges if $p<1$. "
  },
  {
    "id": 17,
    "question": "If the line $\\frac{x-4}{1}=\\frac{y-2}{1}=\\frac{z-p}{2}$ lies on the plane $2x-4y+z=7$, then the value of $p$ is",
    "options": [
      "$-7$",
      "$1$",
      "$7$",
      "$0$"
    ],
    "answer": 2,
    "explanation": "For the line to lie on the plane, two conditions must be met:  1. Any point on the line must satisfy the plane equation. The point $(4,2,p)$ is on the line. Substituting this into the plane equation: $2(4)-4(2)+p=7$. This simplifies to $8-8+p=7$, which gives $p=7$.  2. The direction vector of the line must be perpendicular to the normal vector of the plane. The direction vector of the line is $\\vec{d} = (1,1,2)$. The normal vector to the plane is $\\vec{n}=(2,-4,1)$. Their dot product must be zero: $\\vec{d}\\cdot\\vec{n} = (1)(2) + (1)(-4) + (2)(1) = 2-4+2=0$. The dot product is zero, so the line is parallel to the plane. The two conditions ensures the line is in the plane. Thus, the value of $p$ is 7."
  },
  {
    "id": 18,
    "question": "A unit normal vector to the surface $2x^2y+3yz=4$ at $(1,-1,-2)$ is",
    "options": [
      "$\\frac{1}{\\sqrt{41}}(4 \\hat{i}+4 \\hat{j}+3 \\hat{k})$",
      "$\\frac{1}{\\sqrt{41}}(4 \\hat{i}+4 \\hat{j}-3 \\hat{k})$",
      "$\\frac{1}{\\sqrt{41}}(-4 \\hat{i}+4 \\hat{j}+3 \\hat{k})$",
      "$\\frac{1}{\\sqrt{41}}(-4 \\hat{i}-4 \\hat{j}+3 \\hat{k})$"
    ],
    "answer": 0,
    "explanation": "A normal vector to a surface given by the equation $F(x,y,z)=c$ at a point $(x_0,y_0,z_0)$ is given by the gradient of the function, $\\nabla F = \\frac{\\partial F}{\\partial x} \\hat{i} + \\frac{\\partial F}{\\partial y} \\hat{j} + \\frac{\\partial F}{\\partial z} \\hat{k}$. Let $F(x,y,z) = 2x^2y+3yz$. The partial derivatives are: $\\frac{\\partial F}{\\partial x} = 4xy$, $\\frac{\\partial F}{\\partial y} = 2x^2+3z$, $\\frac{\\partial F}{\\partial z} = 3y$. Now, we evaluate these at the point $(1,-1,-2)$: $\\frac{\\partial F}{\\partial x}|_{(1,-1,-2)} = 4(1)(-1) = -4$. $\\frac{\\partial F}{\\partial y}|_{(1,-1,-2)} = 2(1)^2+3(-2) = 2-6=-4$. $\\frac{\\partial F}{\\partial z}|_{(1,-1,-2)} = 3(-1)=-3$. So the normal vector is $\\vec{N} = -4\\hat{i}-4\\hat{j}-3\\hat{k}$. To find the unit normal vector, we divide by its magnitude: $|\\vec{N}|=\\sqrt{(-4)^2+(-4)^2+(-3)^2}=\\sqrt{16+16+9}=\\sqrt{41}$. The unit normal vector is $\\hat{n} = \\frac{\\vec{N}}{|\\vec{N}|} = \\frac{1}{\\sqrt{41}}(-4\\hat{i}-4\\hat{j}-3\\hat{k})$. This is not one of the options. However, a unit normal vector can be in either direction. The other direction is $-\\vec{N} = \\frac{1}{\\sqrt{41}}(4\\hat{i}+4\\hat{j}+3\\hat{k})$, which matches option A. "
  },
  {
    "id": 19,
    "question": "If $\\lim\\limits_{x\\to\\infty} \\left[\\frac{x^2+1}{x+1}-ax-b\\right]=0$, then $(a,b)$ is",
    "options": [
      "$(1,1)$",
      "$(2,-1)$",
      "$(1,-1)$",
      "$(1,0)$"
    ],
    "answer": 2,
    "explanation": "We need to evaluate the limit. First, let's combine the terms inside the brackets: $\\frac{x^2+1}{x+1}-ax-b = \\frac{x^2+1-ax(x+1)-b(x+1)}{x+1} = \\frac{x^2+1-ax^2-ax-bx-b}{x+1} = \\frac{(1-a)x^2+(-a-b)x+(1-b)}{x+1}$. For this limit to be 0 as $x\\to\\infty$, the degree of the numerator must be less than the degree of the denominator. The degree of the denominator is 1. The degree of the numerator is 2. To make the limit 0, the coefficient of $x^2$ in the numerator must be 0. So, $1-a=0$, which gives $a=1$. Now the numerator becomes $(-1-b)x+(1-b)$. For the limit to be 0, the coefficient of $x$ must also be 0, because if it's non-zero, the limit would be a finite non-zero value. So, $-a-b = -1-b=0$, which gives $b=-1$. Thus, $(a,b)=(1,-1).$"
  },
  {
    "id": 20,
    "question": "If the two lines $\\frac{x-1}{2}=\\frac{y+1}{3}=\\frac{z-1}{4}$ and $\\frac{x-3}{1}=\\frac{y-k}{2}=\\frac{z}{1}$ intersect each other, then value of $k$ is",
    "options": [
      "$\\frac{2}{9}$",
      "$\\frac{9}{2}$",
      "9",
      "$-1$"
    ],
    "answer": 1,
    "explanation": "The two lines are intersecting then they are coplanar. So the triple product of the three vectors, two direction vectors and the vector joining two points on two different lines. This leads to $$\\begin{vmatrix}2&3&4\\\\1&2&1\\\\2&k+1&-1\\end{vmatrix}=0.$$ Solving for $k$ we get $k = \\frac{9}{2}.$"
  },
  {
    "id": 21,
    "question": "The differential equation of all circles touching $x$-axis at origin is",
    "options": [
      "$(x^2+y^2)y_1=xy$",
      "$(x^2+y^2)y_1=2xy$",
      "$(x^2-y^2)y_1=xy$",
      "$(x^2-y^2)y_1=2xy$"
    ],
    "answer": 3,
    "explanation": "A circle touching the $x$-axis at the origin has its center on the $y$-axis. Let the center be $(0,a)$ and the radius be $|a|$. The equation of such a circle is $(x-0)^2 + (y-a)^2 = a^2$, which simplifies to $x^2+y^2-2ay=0.$ This is the one-parameter family of circles. We need to find the differential equation by eliminating the parameter $a$. From the equation, $a = \\frac{x^2+y^2}{2y}$. Now, differentiate with respect to $x$, we obtain $\\frac{2y(2x+2yy_1)-(x^2+y^2)2y_1}{4y^2}=0.$ From this we obtain, $y_1(y^2-x^2)+2xy=0.$ Or, $(x^2-y^2)y_1=2xy.$ This matches option D."
  },
  {
    "id": 22,
    "question": "If $A_n=\\left(-\\frac{1}{n},\\frac{1}{n}\\right),n\\in \\mathbb{N}$ be a subset of real numbers $\\mathbb{R}$, then the set $\\mathop{\\cap}\\limits_{n=1}^\\infty A_n$ is",
    "options": [
      "not open",
      "$\\emptyset$",
      "closed",
      "both open and closed"
    ],
    "answer": 0,
    "explanation": "The set $A_n$ is the open interval $(-\\frac{1}{n}, \\frac{1}{n})$. We need to find the intersection of all these sets for $n=1,2,3,\\dots$. Let's look at the first few sets: $A_1 = (-1,1)$, $A_2 = (-\\frac{1}{2}, \\frac{1}{2})$, $A_3 = (-\\frac{1}{3}, \\frac{1}{3})$, and so on. As $n$ increases, the intervals get smaller and smaller, always containing the point 0. The intersection of all these intervals is the single point $\\{0\\}$. The set $\\{0\\}$ is a closed set but not open. The correct answer can be both options (A) and (C)."
  },
  {
    "id": 23,
    "question": "Let $N^+$ be the set of positive integers and $ f:N^+\\to N^+$ be a mapping defined by $f(x)=2x,x\\in N^+.$ Then mapping $f$ is",
    "options": [
      "injective",
      "surjective",
      "neither injective nor surjective",
      "bijective"
    ],
    "answer": 0,
    "explanation": "Let's check the properties of the function $f(x)=2x$ with domain and codomain $N^+$ (the set of positive integers $\{1,2,3,\\dots\}$).  1. <strong>Injective (one-to-one)</strong>: A function is injective if for any two distinct elements in the domain, their images are also distinct. If $f(x_1)=f(x_2)$, then $2x_1=2x_2$, which implies $x_1=x_2$. Thus, the function is injective.  2. <strong>Surjective (onto)</strong>: A function is surjective if every element in the codomain is the image of at least one element in the domain. The codomain is $N^+ = \{1,2,3,\\dots\}$. The images of the function are $f(1)=2, f(2)=4, f(3)=6, \\dots$. The set of images is $\{2,4,6,\\dots\}$, which is the set of even positive integers. The element $1$ from the codomain $N^+$ is not in the image set, as there is no positive integer $x$ such that $2x=1$. Thus, the function is not surjective. Since it's injective but not surjective, it is not bijective."
  },
  {
    "id": 24,
    "question": "A particular solution of the differential equation $x^2 \\frac{d^2y^2}{dx^2}-2x(1+x)\\frac{dy}{dx}+2(1+x)y=x^3 \\text{ is}$",
    "options": [
      "$-\\frac{x^2}{2}-\\frac{x}{4}$",
      "$-\\frac{x^2}{2}+\\frac{x}{4}$",
      "$\\frac{x^2}{2}-\\frac{x}{4}$",
      "$\\frac{x^2}{2}+\\frac{x}{4}$"
    ],
    "answer": 0,
    "explanation": "The differential equation is $x^2 y'' - 2x(1+x)y' + 2(1+x)y = x^3$. Let $y=ax^2+bx$ be a particular solution. Then $y'=2ax+b$ and $y''= 2a.$ Putting all these in the given equation we have, $2 a x^2-2x(1+x)(2ax+b)+2(1+x)(ax^2+bx)=x^3.$ Simplifying we get $2ax^2-4ax^2-2bx-4ax^3-2bx^2+2ax^2+2bx+2ax^3+2bx^2=x^3.$ Or, $-2ax^3=x^3$, hence $a=-\\frac{1}{2}.$ We see that $b$ is undetermined. So both options (A) and (B) are true."
  },
  {
    "id": 25,
    "question": "If $\\frac{dp}{dt}=\\frac{1}{2p}$ and $p=1$ when $t=0,$ then $p=3,$ when $t$ is",
    "options": [
      "4",
      "8",
      "1",
      "2"
    ],
    "answer": 1,
    "explanation": "We have a separable differential equation: $\\frac{dp}{dt}=\\frac{1}{2p}$. We can rewrite this as $2p\\,dp = dt$. Integrating both sides: $\\int 2p\\,dp = \\int dt$. This gives $p^2 = t+C$, where $C$ is the constant of integration. We are given the initial condition that $p=1$ when $t=0$. Substitute these values to find that $C=1.$ So the particular solution is $p^2=t+1$. Now we need to find the value of $t$ when $p=3$. Substitute $p=3$ into the equation: $(3)^2 = t+1 \\implies 9=t+1 \\implies t=8$."
  },
  {
    "id": 26,
    "question": "If for a complex number $z$, $|z|-z=1+2i,$ then the value of $z$ is",
    "options": [
      "$2-\\frac{3}{2}i$",
      "$\\frac{3}{2}-2i$",
      "$\\frac{3}{2}+2i$",
      "$\\frac{1}{2}-2i$"
    ],
    "answer": 1,
    "explanation": "Let the complex number be $z=x+iy$, where $x$ and $y$ are real numbers. Then $|z|=\\sqrt{x^2+y^2}$. The given equation is $\\sqrt{x^2+y^2}-(x+iy) = 1+2i$. Comparing the imaginary part we have, $y=-2$. Putting the value of $y$ and comparing the real part we have, $\\sqrt{x^2+4}-x=1.$ This implies $x^2+4=1+x^2+2x.$ Or, $x=\\frac{3}{2}.$ So, the complex number is $z = x+iy = \\frac{3}{2}-2i.$"
  },
  {
    "id": 27,
    "question": "In an LPP degeneracy arises at",
    "options": [
      "first iteration only",
      "final iteration",
      "any iteration",
      "excepting first and second, any other iteration"
    ],
    "answer": 2,
    "explanation": "In a Linear Programming Problem (LPP), degeneracy occurs when a basic feasible solution has a smaller number of non-zero basic variables than the number of constraints. During the simplex method, this can happen at any iteration, not just the first or final one. It typically arises when a basic variable becomes zero in a simplex iteration before it is intended to, which can lead to a sequence of iterations that do not improve the objective function value, a phenomenon called 'cycling'."
  },
  {
    "id": 28,
    "question": "If for any three non-null vectors $\\vec{a},\\vec{b},\\vec{c}, (\\vec{a}\\times \\vec{b})\\times \\vec{c} =\\vec{a}\\times (\\vec{b}\\times \\vec{c})$ then",
    "options": [
      "vector $\\vec{a}$ is perpendicular to $\\vec b\\times \\vec{c}$",
      "$\\vec{a}$ and $\\vec{b}\\times \\vec{c}$ are collinear",
      "vector $\\vec{b}$ is perpendicular to $\\vec a\\times \\vec{c}$",
      "$\\vec{b}$ and $\\vec{a}\\times \\vec{c}$ are parallel."
    ],
    "answer": 3,
    "explanation": "We use the vector triple product expansion formula: $(\\vec{A}\\times \\vec{B})\\times \\vec{C} = (\\vec{A}\\cdot\\vec{C})\\vec{B} - (\\vec{B}\\cdot\\vec{C})\\vec{A}$. So the given equation becomes $(\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{b}\\cdot\\vec{c})\\vec{a} = (\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{a}\\cdot\\vec{b})\\vec{c}$. This gives $(\\vec{b}\\cdot\\vec{c})\\vec{a} = (\\vec{a}\\cdot\\vec{b})\\vec{c}$. This equation states that the vector $\\vec{a}$ is a scalar multiple of vector $\\vec{c}$, unless the coefficients are zero. This means $\\vec{a}$ and $\\vec{c}$ are parallel or collinear."
  },
  {
    "id": 29,
    "question": "The function $f(x)=2x+|x-1|$ at $x=1$ is",
    "options": [
      "differentiable",
      "continuous",
      "not differentiable and has infinite value",
      "minimum in open interval $(0,2)$"
    ],
    "answer": 1,
    "explanation": "Clearly the function is continuous but not differentiable at $x=1.$"
  },
  {
    "id": 30,
    "question": "The eccentricity of the conic $\\frac{3}{r}=4-2\\cos\\theta$ is",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{2}$"
    ],
    "answer": 0,
    "explanation": "The standard polar equation of a conic section is $\\frac{l}{r} = 1-e\\cos\\theta$, where $e$ is the eccentricity. The given equation is $\\frac{3}{r}=4-2\\cos\\theta$. To get it into the standard form, we need to make the first term on the right-hand side equal to 1. We can do this by dividing the entire equation by 4: $\\frac{3/4}{r} = 1 - \\frac{1}{2}\\cos\\theta.$ Comparing this to the standard form $\\frac{l}{r}=1+e\\cos\\theta$, we have $e = \\frac{1}{2}.$"
  },
  {
    "id": 31,
    "question": "If $S=\\{(x,y,z)\\in E^3\\colon x+y+z=0\\}$, then a basis of $S$ is",
    "options": [
      "$\\{(1,1,1),(0,0,0)\\}$",
      "$\\{(1,0,0),(0,1,0)\\}$",
      "$\\{(-1,1,0),(-1,0,1)\\}$",
      "$\\{(0,1,1),(1,0,1)\\}$"
    ],
    "answer": 2,
    "explanation": "The set $S$ is a subspace of $E^3$ (which is $\\mathbb{R}^3$) defined by the single linear equation $x+y+z=0$. This is the equation of a plane passing through the origin. Since it's a plane, its dimension is 2. So, a basis for $S$ should have two linearly independent vectors. Let's check the options. Option A is incorrect as it contains the zero vector and it is not a basis. Option B is incorrect because neither vector satisfies the equation (e.g., $1+0+0=1\\neq 0$). Option D is incorrect because neither vector satisfies the equation (e.g., $0+1+1=2\\neq 0$). Option C: Let's check if the vectors satisfy the equation and are linearly independent. For $(-1,1,0)$: $-1+1+0=0$. It satisfies the equation. For $(-1,0,1)$: $-1+0+1=0$. It satisfies the equation. To check for linear independence, we can see if one is a scalar multiple of the other. Clearly, they are not. They are linearly independent. Thus, the set is a basis for $S$."
  },
  {
    "id": 32,
    "question": "The number of basic variables in any solution of a transportation problem with $m$-origins and $n$-destinations is",
    "options": [
      "$m+n$",
      "minimum $m+n$",
      "at most $m+n+1$",
      "at most $m+n-1$"
    ],
    "answer": 3,
    "explanation": "In a transportation problem with $m$ rows (origins) and $n$ columns (destinations), there are $m+n$ constraints (one for each origin and one for each destination), but since the sum of the origins' supplies must equal the sum of the destinations' demands, one of the constraints is redundant. Therefore, the number of independent constraints is $m+n-1$. A basic feasible solution to a transportation problem has a number of basic variables equal to the number of independent constraints. Thus, the number of basic variables is at most $m+n-1$ for a non-degenerate solution. Degeneracy can occur when the number of basic variables is less than $m+n-1$. Therefore, the number of basic variables is at most $m+n-1$."
  },
  {
    "id": 33,
    "question": "Tangent at which point of the curve $x=ct^3, y=\\frac{c}{t^3}$ is parallel to the line $y=2x-1$?",
    "options": [
      "$t=0$",
      "$t=-\\frac{1}{2^{1/6}}$",
      "$t=1$",
      "at no point"
    ],
    "answer": 3,
    "explanation": "The slope of the tangent to the curve is given by $\\frac{dy}{dx}$. We can find this using the chain rule: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$. We have $x=ct^3$ and $y=c/t^3=ct^{-3}$. Then $\\frac{dx}{dt} = 3ct^2$ and $\\frac{dy}{dt}=-3ct^{-4}$. So, $\\frac{dy}{dx} = \\frac{-3ct^{-4}}{3ct^2} = -t^{-6} = -\\frac{1}{t^6}$. The line $y=2x-1$ has a slope of 2. We need to find $t$ such that the slope of the tangent is 2. So we set $-t^{-6} = 2$, which means $t^{-6}=-2$. This is equivalent to $t^6 = -1/2$. There is no real value of $t$ that satisfies this equation, as an even power of a real number cannot be negative. Therefore, the tangent to the curve is never parallel to the given line. The correct answer is 'at no point'."
  },
  {
    "id": 34,
    "question": "If $f(x)=\\begin{cases} kx(1-x),& 0 < x < 1\\\\ 0, & \\text{otherwise}.\\end{cases}$ is the probability density function of a certain distribution, then value of $k$ is",
    "options": [
      "2",
      "6",
      "4",
      "8"
    ],
    "answer": 1,
    "explanation": "For a function to be a probability density function, the total area under the curve must be equal to 1. This means that the integral of the function over its domain must be 1. $\\int_{-\\infty}^{\\infty} f(x)dx = 1$. In this case, the function is non-zero only for $0< x < 1$. So we need to solve the integral: $\\int_0^1 kx(1-x)dx = 1$. Or, $\\int_0^1 (kx-kx^2)dx = 1$. Or, $k\\left(\\frac{1}{2}-\\frac{1}{3}\\right)=1 \\implies k=6$."
  },
  {
    "id": 35,
    "question": "Taking 1.33 as an approximation to $\\frac{4}{3}$, the percentage error is",
    "options": [
      "0.25",
      "0.37",
      "0.75",
      "0.05"
    ],
    "answer": 0,
    "explanation": "The true value is $\\frac{4}{3}$. The approximate value is $1.33 = \\frac{133}{100}$. Absolute error: $|\\frac{4}{3} - \\frac{133}{100}| = |\\frac{400-399}{300}| = |\\frac{1}{300}| = \\frac{1}{300}$. Relative error: $\\frac{1/300}{4/3} = \\frac{1}{300} \\cdot \\frac{3}{4} = \\frac{1}{400}$. Percentage error: $\\frac{1}{400}\\times 100 = \\frac{1}{4} = 0.25$."
  },
  {
    "id": 36,
    "question": "The moment of inertia of a solid sphere of mass $M$ and radius $a$, about any tangent is",
    "options": [
      "$\\frac{7}{5}Ma^2$",
      "$\\frac23 Ma^2$",
      "$\\frac 53Ma^2$",
      "$\\frac 25 Ma^2$"
    ],
    "answer": 0,
    "explanation": "We can use the <strong>Parallel Axis Theorem</strong>, which states that the moment of inertia about any axis is equal to the moment of inertia about a parallel axis through the center of mass plus the product of the mass and the square of the distance between the two axes. The moment of inertia of a solid sphere about an axis passing through its center is $I_{CM} = \\frac{2}{5}Ma^2$. A tangent to the sphere is a distance $a$ from the center of mass. So, the moment of inertia about the tangent is $I_{tangent} = I_{CM} + M a^2 = \\frac{2}{5}Ma^2 + Ma^2 = (\\frac{2}{5}+1)Ma^2 = \\frac{7}{5}Ma^2$."
  },
  {
    "id": 37,
    "question": "A sphere is rolling down a rough inclined plane. At any instant if $R$ be the normal reaction on it and $F$ be the frictional force, along the plane ($\\mu=$ coefficient of friction) then for limiting equilibrium,",
    "options": [
      "$F >\\mu R$",
      "$F <\\mu R$",
      "$F =\\mu R$",
      "nothing can be said"
    ],
    "answer": 2,
    "explanation": "This question is a bit ambiguous. For an object to be in <strong>limiting equilibrium</strong> on a rough inclined plane, it means it is on the verge of slipping. In this specific situation, the static frictional force $F_s$ has reached its maximum possible value, which is given by $F_{s,max} = \\mu_s R$. So for limiting equilibrium, the frictional force must be equal to this maximum value, i.e., $F = \\mu R$ where $\\mu$ is the coefficient of static friction. However, the question states 'rolling down', which implies movement. If it is rolling, the friction is kinetic friction, and we'd have $F=\\mu_k R$. If it is a dynamic problem (not in equilibrium), the frictional force $F$ can be less than $\\mu R$. For pure rolling, the frictional force is a static friction force, but it does not necessarily have to be at its maximum value. The question specifically says 'limiting equilibrium' which implies the verge of motion. Therefore, the frictional force is at its maximum value, $F = \\mu R$."
  },
  {
    "id": 38,
    "question": "The mean and standard deviation of a Binomial distribution are 4 and $\\sqrt{\\frac{8}{3}}$ respectively. Then value of $n$ and $p$ are",
    "options": [
      "$n=4,p=1$",
      "$n=12,p=\\frac{1}{3}$",
      "$n=6,p=\\frac{2}{3}$",
      "$n=8,p=\\frac{1}{2}$"
    ],
    "answer": 1,
    "explanation": "For a binomial distribution, the mean is $\\mu = np$ and the variance is $\\sigma^2 = np(1-p)$. The standard deviation is $\\sigma = \\sqrt{np(1-p)}$. We are given the mean $\\mu = np = 4$ and the variance $\\sigma^2 = np(1-p)=\\frac{8}{3}$. So we have $(1-p)=\\frac{2}{3}\\Rightarrow p= \\frac{1}{3}.$ Thus $n = 12.$"
  },
  {
    "id": 39,
    "question": "The areal velocity of a particle moving along a plane curve has magnitude",
    "options": [
      "$r\\dot{\\theta}^2$",
      "$r^2\\dot{\\theta}$",
      "$r\\dot{\\theta}$",
      "$\\frac{1}{2}r^2\\dot{\\theta}$"
    ],
    "answer": 3,
    "explanation": "Areal velocity is the rate at which the area is swept out by the radius vector from a fixed origin to the moving particle. In polar coordinates, the area of a small sector swept out by the radius vector $r$ as the angle changes by a small amount $d\\theta$ is approximately a triangle with area $dA=\\frac{1}{2}r(rd\\theta) = \\frac{1}{2}r^2d\\theta$. The areal velocity is the rate of change of area, $\\frac{dA}{dt}$. So, $\\frac{dA}{dt} = \\frac{1}{2}r^2\\frac{d\\theta}{dt} = \\frac{1}{2}r^2\\dot{\\theta}$."
  },
  {
    "id": 40,
    "question": "Which of the following sets is not convex?",
    "options": [
      "$X=\\{(x,y)\\colon x^2+y^2\\geq 5\\}$",
      "$X=\\{(x,y)\\colon |x|\\leq 3,|y|\\leq 2\\}$",
      "$X=\\{(x,y)\\colon 5x-y=4\\}$",
      "$X=\\{(x,y)\\colon 2x-y\\leq 3\\}$"
    ],
    "answer": 0,
    "explanation": "A set is <strong>convex</strong> if for any two points in the set, the line segment connecting them is also entirely contained within the set. Let's analyze the options:  A. $X=\\{(x,y)\\colon x^2+y^2\\geq 5\\}$. This is the region outside or on the circle of radius $\\sqrt{5}$ centered at the origin. Consider the points $(-\\sqrt{5},0)$ and $(\\sqrt{5},0)$, both of which are in the set. The line segment connecting them is the part of the $x$-axis from $-\\sqrt{5}$ to $\\sqrt{5}$. The point $(0,0)$ is on this line segment, but it is not in the set, as $0^2+0^2=0 < 5$. Therefore, the set is not convex.  B. $X=\\{(x,y)\\colon |x|\\leq 3,|y|\\leq 2\\}$. This is a rectangle centered at the origin, with vertices at $(\\pm 3, \\pm 2)$. A rectangle is a convex set.  C. $X=\\{(x,y)\\colon 5x-y=4\\}$. This is a straight line, which is a convex set.  D. $X=\\{(x,y)\\colon 2x-y\\leq 3\\}$. This is a half-plane, which is a convex set.  Therefore, the only set that is not convex is the first one."
  },
  {
    "id": 41,
    "question": "The value of the integral $\\displaystyle \\int_0^\\infty e^{-x^2}dx$ is",
    "options": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\sqrt{\\frac{\\pi}{4}}$",
      "$\\frac{1}{2}\\sqrt{\\frac{\\pi}{4}}$"
    ],
    "answer": 2,
    "explanation": "The integral $\\int_{-\\infty}^{\\infty} e^{-x^2}dx$ is a well-known result called the <strong>Gaussian integral</strong> or <strong>Euler-Poisson integral</strong>, and its value is $\\sqrt{\\pi}$. Since the function $e^{-x^2}$ is an even function (i.e., $f(-x)=f(x)$), the integral from $-\\infty$ to $\\infty$ is twice the integral from 0 to $\\infty$. So, $\\int_0^\\infty e^{-x^2}dx = \\frac{1}{2}\\int_{-\\infty}^{\\infty} e^{-x^2}dx = \\frac{\\sqrt{\\pi}}{2}=\\sqrt{\\frac{\\pi}{4}}.$"
  },
  {
    "id": 42,
    "question": "Angular momentum of a rigid body of mass $M$ about origin is",
    "options": [
      "$Mvp$",
      "$MK^2\\dot{\\theta}$",
      "$Mvp+\\frac{1}{2}MK^2\\dot{\\theta}$",
      "$Mvp+MK^2\\dot{\\theta}$"
    ],
    "answer": 3,
    "explanation": "The angular momentum of a rigid body about a point (origin) is the sum of two components: the angular momentum of the center of mass about the origin, and the angular momentum of the body about its center of mass. The angular momentum of the center of mass about the origin is given by $\\vec{L}_{CM} = \\vec{r}_{CM} \\times M\\vec{v}_{CM}$. The magnitude of this is $Mvp$ where $v$ is the velocity of the center of mass and $p$ is the perpendicular distance from the origin to the line of motion of the center of mass. The angular momentum of the body about its center of mass is given by $I_{CM}\\omega$, where $I_{CM}$ is the moment of inertia about the center of mass and $\\omega$ is the angular velocity. For a rigid body rotating about an axis, $I=MK^2$ where $K$ is the radius of gyration. The angular velocity is $\\omega=\\dot{\\theta}$. So, the total angular momentum is $L = Mvp + MK^2\\dot{\\theta}$. Option D is correct."
  },
  {
    "id": 43,
    "question": "The modulus and amplitude of the complex number $z=1+i\\tan \\frac{3\\pi}{5}$ are",
    "options": [
      "$r=\\sec\\frac{3\\pi}{5},\\theta=\\frac{3\\pi}{5}$",
      "$r=-\\sec\\frac{3\\pi}{5},\\theta=-\\frac{2\\pi}{5}$",
      "$r=-\\sec\\frac{3\\pi}{5},\\theta=\\frac{2\\pi}{5}$",
      "$r=-\\sec\\frac{3\\pi}{5},\\theta=-\\frac{3\\pi}{5}$"
    ],
    "answer": 1,
    "explanation": "For a complex number $z=x+iy$, the modulus is $r=|z|=\\sqrt{x^2+y^2}$ and the amplitude is $\\theta=\\arg(z)=\\tan^{-1}(\\frac{y}{x})$, taking into account the quadrant. Here, $x=1$ and $y=\\tan\\frac{3\\pi}{5}$. The angle $\\frac{3\\pi}{5}$ is in the second quadrant, so $\\tan\\frac{3\\pi}{5}$ is negative. So $y<0$. The complex number $z=1+i\\tan\\frac{3\\pi}{5}$ has a positive real part ($x=1$) and a negative imaginary part. This means the complex number lies in the fourth quadrant. The amplitude should be between $-\\pi/2$ and 0. Let's find the modulus first. $r = \\sqrt{1^2+(\\tan\\frac{3\\pi}{5})^2} = \\sqrt{1+\\tan^2\\frac{3\\pi}{5}} = \\sqrt{\\sec^2\\frac{3\\pi}{5}} = |\\sec\\frac{3\\pi}{5}|$. Since $\\frac{3\\pi}{5}$ is in the second quadrant, $\\sec\\frac{3\\pi}{5}$ is negative. So, $r=|\\sec\\frac{3\\pi}{5}| = -\\sec\\frac{3\\pi}{5}$. This matches options B and C. Let's call the argument $\\alpha.$ Then $\\tan\\alpha = \\tan(\\frac{3\\pi}{5}) = \\tan(-\\frac{2\\pi}{5}).$ As the point is in fourth quadrant, $\\alpha = -\\frac{2\\pi}{5}.$"
  },
  {
    "id": 44,
    "question": "An integrating factor of the differential equation $(2x^2+y^2+x)dx+xydy=0$ is",
    "options": [
      "$\\frac1x$",
      "$e^x$",
      "$\\frac1{xy}$",
      "$x$"
    ],
    "answer": 3,
    "explanation": "The given differential equation is of the form $M(x,y)dx+N(x,y)dy=0$, where $M=2x^2+y^2+x$ and $N=xy$. We first check if the equation is exact: $\\frac{\\partial M}{\\partial y} = 2y$ and $\\frac{\\partial N}{\\partial x} = y$. Since they are not equal, the equation is not exact. We look for an integrating factor. Let's try the form $\\frac{\\frac{\\partial M}{\\partial y}-\\frac{\\partial N}{\\partial x}}{N}$. This is $\\frac{2y-y}{xy} = \\frac{y}{xy} = \\frac{1}{x}$. This is a function of $x$ alone. So the integrating factor is $e^{\\int \\frac{1}{x}dx} = e^{\\ln|x|} = x$."
  },
  {
    "id": 45,
    "question": "If $f(x)=|x|-[x],$ then value of $f(-3.5)$ is",
    "options": [
      "7.5",
      "0.5",
      "$-6.5$",
      "2.5"
    ],
    "answer": 0,
    "explanation": "We need to find the value of $f(-3.5)$. The function is defined as $f(x)=|x|-[x]$. We need to evaluate the two parts. The absolute value is $|-3.5|=3.5$. The floor function (or greatest integer function) $[x]$ gives the greatest integer less than or equal to $x$. For $x=-3.5$, the greatest integer less than or equal to $-3.5$ is $-4$. So, $[-3.5]=-4$. Substituting these values into the function: $f(-3.5) = |-3.5| - [-3.5] = 3.5 - (-4) = 3.5+4=7.5$."
  },
  {
    "id": 46,
    "question": "An impulsive force is a",
    "options": [
      "large force displacing the point of application while acting for a short time",
      "large force acting for any time",
      "small force acting for a short time",
      "large force acting for a short time during which the displacement of point of application is negligible"
    ],
    "answer": 3,
    "explanation": "An <strong>impulsive force</strong> is a very large force acting for a very short duration of time. The key characteristic is that the time interval is so small that the change in position of the body during the application of the force is negligible. This is because the impulse, which is the integral of the force over time, is finite. A short duration and a large force result in a finite impulse. The displacement is not part of the definition of impulse itself ($J = \\int F dt$), which is related to the change in momentum ($J=\\Delta p$). However, the negligible displacement is a key characteristic of the ideal model of an impulsive force, where the force acts instantly. Therefore, option D is the most accurate description."
  },
  {
    "id": 47,
    "question": "The infinite series $\\frac12+\\frac{2}{2^2}+\\frac{3}{2^3}+\\cdots+\\frac{n}{2^n}+\\cdots$ is",
    "options": [
      "divergent",
      "oscillatory",
      "convergent",
      "not bounded"
    ],
    "answer": 2,
    "explanation": "The series is arithmetico-geometric series with common ratio of the geometric part is $\\frac{1}{2} < 1.$ Hence it must be convergent. <br>Rigorously, the given series is $\\sum\\limits_{n=1}^{\\infty} a_n = \\sum\\limits_{n=1}^{\\infty} \\frac{n}{2^n}$. We can use the <strong>Ratio Test</strong> to determine convergence. The Ratio Test states that if $\\lim\\limits_{n\\to\\infty} |\\frac{a_{n+1}}{a_n}| = L$, the series converges if $L<1$, diverges if $L>1$, and the test is inconclusive if $L=1$. Here, $a_n=\\frac{n}{2^n}$. $a_{n+1}=\\frac{n+1}{2^{n+1}}$. The ratio is $|\\frac{a_{n+1}}{a_n}| = |\\frac{(n+1)/2^{n+1}}{n/2^n}| = |\\frac{n+1}{2^{n+1}} \\cdot \\frac{2^n}{n}| = |\\frac{n+1}{n} \\cdot \\frac{2^n}{2^{n+1}}| = |(1+\\frac{1}{n}) \\cdot \\frac{1}{2}|$. Taking the limit as $n\\to\\infty$, we get $L = \\lim\\limits_{n\\to\\infty} |(1+\\frac{1}{n})\\frac{1}{2}| = (1+0)\\frac{1}{2} = \\frac{1}{2}$. Since $L=\\frac{1}{2} < 1$, the series is convergent."
  },
  {
    "id": 48,
    "question": "If a particle moves in a curve $r=ae^\\theta$ with constant angular velocity, its radial acceleration has the value",
    "options": [
      "3",
      "0",
      "$ar^2$",
      "$a^2r$"
    ],
    "answer": 1,
    "explanation": "The radial acceleration in polar coordinates is given by the formula $a_r = \\ddot{r} - r\\dot{\\theta}^2$. We are given the curve $r=ae^\\theta$ and constant angular velocity, which means $\\dot{\\theta} = k$, where $k$ is a constant. Then $\\ddot{\\theta}=0$. We need to find $\\ddot{r}$. First, let's find $\\dot{r}$. Using the chain rule, $\\dot{r} = \\frac{d}{dt}(ae^\\theta) = a e^\\theta \\frac{d\\theta}{dt} = a e^\\theta \\dot{\\theta} = ak e^\\theta$. Now, we find $\\ddot{r} = \\frac{d}{dt}(ak e^\\theta) = ak e^\\theta \\frac{d\\theta}{dt} = ak e^\\theta \\dot{\\theta} = ak e^\\theta k = ak^2 e^\\theta$. Now let's substitute these into the radial acceleration formula: $a_r = \\ddot{r} - r\\dot{\\theta}^2 = ak^2 e^\\theta - (ae^\\theta)k^2 = ak^2e^\\theta - ak^2e^\\theta=0.$"
  },
  {
    "id": 49,
    "question": "If the axes of coordinate are rotated through an angle $45^\\circ$ in the $xy$-plane keeping the origin fixed, the equation $x^2-y^2=a^2$ changes to",
    "options": [
      "$x'^2+y'^2=a^2$",
      "$x'^2+y'^2+x'y'=a^2$",
      "$2x'y'+a^2=0$",
      "$x'y'=a^2$"
    ],
    "answer": 2,
    "explanation": "We can use the rotation formulas for coordinates. If the axes are rotated by an angle $\\theta$ (in this case, $\\theta=45^\\circ$), the new coordinates $(x',y')$ are related to the old coordinates $(x,y)$ by the transformation: $x = x'\\cos\\theta - y'\\sin\\theta$ and $y = x'\\sin\\theta + y'\\cos\\theta$. For $\\theta=45^\\circ$, we have $\\cos 45^\\circ = \\sin 45^\\circ = \\frac{1}{\\sqrt{2}}$. So, $x = \\frac{1}{\\sqrt{2}}(x'-y')$ and $y = \\frac{1}{\\sqrt{2}}(x'+y')$. Now we substitute these into the given equation $x^2-y^2=a^2 \\Rightarrow (\\frac{1}{\\sqrt{2}}(x'-y'))^2 - (\\frac{1}{\\sqrt{2}}(x'+y'))^2 = a^2$. Or, $\\frac{1}{2}(x'-y')^2 - \\frac{1}{2}(x'+y')^2 = a^2$.Or, $\\frac{1}{2}[-4x'y'] = a^2$.Or, $2x'y'+a^2=0 .$"
  },
  {
    "id": 50,
    "question": "For equilibrium of a rigid body under a system of coplanar forces, the principle of Virtual Work is a",
    "options": [
      "necessary condition",
      "sufficient condition",
      "nothing can be said",
      "necessary and sufficient condition"
    ],
    "answer": 3,
    "explanation": "The <strong>Principle of Virtual Work</strong> states that a rigid body is in equilibrium if and only if the total virtual work done by all the forces acting on the body is zero for any arbitrary virtual displacement. Since it's an 'if and only if' statement, it is both a necessary and a sufficient condition for equilibrium. Therefore, option D is the correct answer."
  },
  {
    "id": 51,
    "question": "If $n\\times n$ matrix $A$ has only one non-zero element, rank of $A$ is",
    "options": [
      "1",
      "0",
      "$n$",
      "$n-1$"
    ],
    "answer": 0,
    "explanation": "The <strong>rank</strong> of a matrix is the maximum number of linearly independent rows or columns. It's also the dimension of the column space. A non-zero element implies that the row containing that element is not a zero vector. Similarly, the column containing that element is not a zero vector. All other rows and columns are zero vectors. Therefore, the matrix has exactly one non-zero row and one non-zero column. This means the number of linearly independent rows (and columns) is exactly 1. So the rank of the matrix is 1. For example, a $2\\times 2$ matrix with only one non-zero element could be $\\begin{pmatrix} 1&0\\\\0&0 \\end{pmatrix}$, which has rank 1."
  },
  {
    "id": 52,
    "question": "The degree of precision of Simpson's $\\frac{1}{3}$-rd rule for numerical integration is",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "The <strong>degree of precision</strong> of a numerical integration method (a quadrature rule) is the highest degree of polynomial for which the rule can find the exact value of the integral. Simpson's $\\frac{1}{3}$-rd rule is based on approximating the function with a parabola (a second-degree polynomial). It can exactly integrate polynomials of degree up to 3."
  },
  {
    "id": 53,
    "question": "Product of a matrix and its transpose is always",
    "options": [
      "singular",
      "skew-symmetric",
      "symmetric",
      "may of any type"
    ],
    "answer": 2,
    "explanation": "Let $A$ be a matrix and $A^T$ be its transpose. We want to analyze the product $B=AA^T$. A matrix is <strong>symmetric</strong> if $B=B^T$. Let's find the transpose of $B$: $B^T=(AA^T)^T$. Using the property $(PQ)^T=Q^T P^T$, we get $(AA^T)^T = (A^T)^T A^T = AA^T$. Since $B^T=B$, the matrix $B=AA^T$ is always symmetric. The same holds for the product $A^TA$. The product $AA^T$ is also a square matrix and its determinant is $\\det(AA^T)=\\det(A)\\det(A^T)=\\det(A)^2\\ge 0$. So it is singular only if $\\det(A)=0$."
  },
  {
    "id": 54,
    "question": "If a relative error of the number 2.1356 be $7\\times 10^{-6}$, then number of correct digits in the number is",
    "options": [
      "4",
      "5",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "The absolute error is around $14\\times 10^{-6}=0.14\\times 10^{-4}.$ As $0.14 < 1,$ the number of correct digits after decimal point is 4. Hence in the number correct number of digits is 5."
  },
  {
    "id": 55,
    "question": "If $R$ be a commutative ring, then for any $x\\in R,$",
    "options": [
      "$x^2=x$",
      "$x^2=1$",
      "$x^3=1$",
      "$x^3=x$"
    ],
    "answer": -1,
    "explanation": "This question seems to have a typo or is flawed. A <strong>commutative ring</strong> is a ring in which the multiplication operation is commutative. The set of integers $\\mathbb{Z}$ is a commutative ring. For $x=2$, we have $x^2=4$, $x^3=8$. Neither of the options $x^2=x, x^2=1, x^3=1, x^3=x$ hold true for all $x\\in\\mathbb{Z}$. A ring in which $x^2=x$ for all $x$ is called a <strong>Boolean ring</strong>. An example is the ring of integers modulo 2, $\\mathbb{Z}_2=\\{0,1\\}$, where $0^2=0$ and $1^2=1$. A commutative ring where $x^2=1$ for all non-zero $x$ is not a standard type. $x^3=x$ for all $x$ is a property of a certain class of rings, but not all commutative rings. For example, in $\\mathbb{Z}_3=\\{0,1,2\\}$, $0^3=0$, $1^3=1$, $2^3=8\\equiv 2\\pmod 3$. So $x^3=x$ holds in $\\mathbb{Z}_3$. The question as stated is incorrect for a general commutative ring. It is likely that the question intended to ask about a specific type of commutative ring, or it has a flaw."
  }
];


    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
