exports.handler = async (event, context) => {
    const questions = [
  {
    "id": 1,
    "question": "Principal value of $i^i$ is",
    "options": [
      "$e^{\\frac{\\pi}{2}}$",
      "$e^{-\\frac{\\pi}{2}}$",
      "$e^{i\\frac{\\pi}{2}}$",
      "$e^{-i\\frac{\\pi}{2}}$"
    ],
    "answer": 1,
    "explanation": "$i^i = \\exp(i \\text{Log } i)$. Now $\\text{Log } i = \\log 1 + i(2n\\pi + \\frac{\\pi}{2}), n \\in \\mathbb{Z}$. The principal argument of $i$ is $\\frac{\\pi}{2}$. Therefore principal value of $i^i$ is $\\exp(i.i\\frac{\\pi}{2}) = e^{-\\frac{\\pi}{2}}$."
  },
  {
    "id": 2,
    "question": "The three equations $-2x+y+z=\\alpha, \\:x-2y+z=\\beta, \\:x+y-2z=\\gamma$ will have no common solution if",
    "options": [
      "$\\alpha+\\beta+\\gamma\\neq 0$",
      "$\\alpha+\\beta+\\gamma = 0$",
      "$\\alpha=-1,\\beta=-1,\\gamma =2$",
      "$\\alpha-\\beta+\\gamma =1.$"
    ],
    "answer": 0,
    "explanation": "Adding these three equations we get, $\\alpha+\\beta+\\gamma=0$. Therefore, if $\\alpha+\\beta+\\gamma\\neq 0$, then no common solution is possible."
  },
  {
    "id": 3,
    "question": "The equation $x^3-3x+k=0$ will have three distinct real roots if",
    "options": [
      "$-3 < k < 2$",
      "$-1 < k < 3$",
      "$-2 < k < 2$",
      "$0 < k < 2$"
    ],
    "answer": 2,
    "explanation": "Let us consider the standard cubic equation $x^3+3Hx+G=0$. Then <br><strong>Case 1: $G^2+4H^3>0$:</strong> One real root and two complex roots. <br><strong>Case 2: $G^2+4H^3<0$:</strong> Three real and distinct roots. <br><strong>Case 3: $G^2+4H^3=0$:</strong> At least two equal real roots. <br> <strong>Subcase: Additionally, $H=0$.</strong> Three equal roots. For the equation $x^3-3x+k=0$, $H=-1$ and $G=k$. So $G^2+4H^3= k^2-4$. So for real and distinct roots, we need $k^2-4<0 \\implies -2< k < 2$.<br> <strong>Alternately,</strong> let $f(x)=x^3-3x+k.$ Then $f'(x) = 3x^2-3.$ Thus $f'(x)=0$ at $x=1,-1.$ For distinct roots of $f(x)$, it has local maximum at $x=-1$ and local minimum at $x=1$ and $f(-1)>0$ and $f(1)<0.$ This two inequalities lead to $-2 < k < 2.$"
  },
  {
    "id": 4,
    "question": "If $a+ib=\\frac{c+i}{d+i}$, where $a,b,c,d \\in \\mathbb{R}$, then $a^2+b^2$ has value",
    "options": [
      "$\\frac{c^2+1}{d^2+1}$",
      "$-c^2$",
      "$i$",
      "$1$"
    ],
    "answer": 0,
    "explanation": "Use the fact that $|\\frac{z_1}{z_2}|^2=\\frac{|z_1|^2}{|z_2|^2}$. Then we get, $a^2+b^2=|a+ib|^2 = |\\frac{c+i}{d+i}|^2 = \\frac{|c+i|^2}{|d+i|^2} = \\frac{c^2+1}{d^2+1}$."
  },
  {
    "id": 5,
    "question": "If $\\begin{vmatrix} \\alpha & \\alpha^2 & \\alpha^3+1\\\\ \\beta & \\beta^2 & \\beta^3+1 \\\\ \\gamma & \\gamma^2 & \\gamma^3+1  \\end{vmatrix} = 0$, where three vectors $(1,\\alpha,\\alpha^2),(1,\\beta,\\beta^2)$ and $(1,\\gamma,\\gamma^2)$ are non-coplanar, the value of $\\alpha\\beta\\gamma$ is",
    "options": [
      "0",
      "$-1$",
      "1",
      "2"
    ],
    "answer": 1,
    "explanation": "<bR>$\\begin{vmatrix} \\alpha & \\alpha^2 & \\alpha^3+1 \\\\ \\beta & \\beta^2 & \\beta^3+1 \\\\ \\gamma & \\gamma^2 & \\gamma^3+1 \\end{vmatrix}$ <br> $= \\begin{vmatrix} \\alpha & \\alpha^2 & \\alpha^3 \\\\ \\beta & \\beta^2 & \\beta^3 \\\\ \\gamma & \\gamma^2 & \\gamma^3  \\end{vmatrix} + \\begin{vmatrix} \\alpha & \\alpha^2 & 1 \\\\ \\beta & \\beta^2 & 1 \\\\ \\gamma & \\gamma^2 & 1 \\end{vmatrix} $ <br> $ =\\alpha \\beta \\gamma \\begin{vmatrix} 1 & \\alpha & \\alpha^2 \\\\  1 & \\beta & \\beta^2 \\\\ 1 & \\gamma & \\gamma^2 \\end{vmatrix} + \\begin{vmatrix}  1 & \\alpha & \\alpha^2 \\\\ 1 & \\beta & \\beta^2 \\\\ 1 & \\gamma & \\gamma^2 \\end{vmatrix}$ <br> $ =(1+\\alpha\\beta\\gamma) \\begin{vmatrix} 1 & \\alpha & \\alpha^2 \\\\ 1 & \\beta & \\beta^2 \\\\ 1 & \\gamma & \\gamma^2 \\end{vmatrix}.$ So using the hypothesis, $\\alpha\\beta\\gamma=-1$."
  },
  {
    "id": 6,
    "question": "For all real values of $\\theta$, the matrix $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta  \\end{pmatrix}$ is",
    "options": [
      "singular",
      "symmetric",
      "diagonal",
      "orthogonal"
    ],
    "answer": 3,
    "explanation": "The given matrix is known as rotation matrix. If we denote this matrix by $R(\\theta)$ then we have $R(\\theta+\\phi) = R(\\theta)R(\\phi)$ and $R(0)=I.$ Also note that $R(\\theta)^t= R(-\\theta)=R(\\theta)^{-1}$. Thus $R(\\theta)$ is always orthogonal."
  },
  {
    "id": 7,
    "question": "Under ordinary multiplication the generators of the cyclic group $\{1,-1,i,-i\}$ are",
    "options": [
      "$1,-1$",
      "$1,i$",
      "$i,-i$",
      "$-1,-i$"
    ],
    "answer": 2,
    "explanation": "It is easy to verify that $i$ and $-i$ have order 4 under multiplication. So the generators are $i$ and $-i$."
  },
  {
    "id": 8,
    "question": "The quadratic form $y_1^2+2y_2^2+2y_3^2+2y_1y_2-4y_2y_3-2y_3y_1$ is",
    "options": [
      "positive definite",
      "positive semi-definite",
      "indefinite",
      "negative definite"
    ],
    "answer": 1,
    "explanation": "The corresponding real symmetric matrix is $A = \\begin{pmatrix} 1 & 1 & -1 \\\\ 1 & 2 & -2\\\\ -1 & -2 & 2 \\end{pmatrix}$. The $1\\times 1$ principal minor is $1 >0$. The $2\\times 2$ principal minor is $\\begin{vmatrix} 1&1\\\\ 1&2 \\end{vmatrix}=2-1=1>0$. Now the third principal minor is simply det $A$. If one observes closely then he/she can see that the last two rows are linearly dependent. Hence det $A=0$. Therefore the matrix is positive semi-definite matrix."
  },
  {
    "id": 9,
    "question": "(Same as Question 7, I created similar one): The number of generators of $(\\mathbb{Z}_{10},+)$ is",
    "options": ["1", "4", "5", "6"],
    "answer": 1,
    "explanation": "Number of generators of $\\mathbb{Z}_n$ is given by $\\phi(n).$ Here $\\phi(10) = 4.$"
  },
  {
    "id": 10,
    "question": "The mapping $f:\\mathbb{N}\\rightarrow \\mathbb{N}$ defined by $f(n)=n+2, \\:n \\in \\mathbb{N}$ is",
    "options": [
      "one-one but not onto",
      "one-one and onto",
      "none of these",
      "onto only"
    ],
    "answer": 0,
    "explanation": "Clearly the map is one-one. 1 has no pre-image in $\\mathbb{N}$ because $n+2=1$ has solution $n=-1$ but $-1\\notin \\mathbb{N}$. Therefore it is one-one but not onto."
  },
  {
    "id": 11,
    "question": "$f:\\mathbb{R}\\rightarrow \\mathbb{R}$ is a mapping defined by $f(x)=x^2+1, \\:x \\in \\mathbb{R}$. Then value of $f^{-1}(10)$ is",
    "options": [
      "11",
      "3",
      "$-3$ and $3$",
      "9"
    ],
    "answer": 2,
    "explanation": "$x^2+1=10$ has two solutions, namely $-3 \\text{ and }3.$ Hence the correct option is C."
  },
  {
    "id": 12,
    "question": "For points on the conic $\\frac{13}{r}=\\sqrt{5}-2\\cos\\theta$, minimum radius vector is",
    "options": [
      "$\\frac{13}{2+\\sqrt{5}}$",
      "$2+\\sqrt{5}$",
      "$\\frac{13}{\\sqrt{5}-2}$",
      "$\\frac{13}{\\sqrt{5}}$"
    ],
    "answer": 0,
    "explanation": "Here minimizing $r$ is equivalent to maximizing $\\frac{13}{r}$. Therefore, let us write $f(\\theta)=\\sqrt{5}-2\\cos\\theta$. Now $ f(\\theta)$ is maximum if $\\cos\\theta$ is minimum, that is, $-1$. So putting $\\cos\\theta =-1$ we obtain, $r =\\frac{13}{\\sqrt{5}+2}$."
  },
  {
    "id": 13,
    "question": "If the straight line $x+y=k$ be normal to the parabola $y^2=12x$ then the value of $k$ is",
    "options": [
      "3",
      "$-9$",
      "$-3$",
      "9"
    ],
    "answer": 3,
    "explanation": "The slope of the given line is $-1$. Therefore the slope of the tangent is $1.$ Now differentiating the given equation $y^2 =12x$ we get, $2yy'=12$. Putting $y'=1$ we get $y=6.$ Now putting $y=6$ in the given equation, we get $x=3$. Therefore the given line $x+y=k$ passes through the point $(3,6)$. Therefore $k=3+6=9$."
  },
  {
    "id": 14,
    "question": "Co-ordinates of the pole of the straight line $2x-5y-4=0$ with respect to the parabola $y^2=8x$ is",
    "options": [
      "$(-2,10)$",
      "$(4,\\frac{5}{2})$",
      "$(-2,\\frac{5}{2})$",
      "$(2,10)$"
    ],
    "answer": 0,
    "explanation": "Let the pole be $(a,b)$. Then the polar be $by=4(x+a)$ [Remember the shortcut technique for tangents, chord of contact and polar, all are same] or, $4x-by+4a=0$. Comparing this equation with the given equation of the polar, we get, $b=10, a=-2$. Therefore, the pole is $(-2,10)$."
  },
  {
    "id": 15,
    "question": "If the straight lines $\\frac{x-2}{1}=\\frac{y-3}{1}=\\frac{z-4}{-k}$ and $\\frac{x-1}{k}=\\frac{y-4}{2}=\\frac{z-5}{1}$ be coplanar, then",
    "options": [
      "$k=0 \\text{ or } -3$",
      "$k=3 \\text{ or } -3$",
      "$k=1 \\text{ or } -1$",
      "$k=1 \\text{ or } -3$"
    ],
    "answer": 0,
    "explanation": "Remember three vectors $\\vec{a},\\vec{b},\\vec{c}$ are coplanar if and only if $\\vec{a}\\cdot(\\vec{b}\\times\\vec{c})=0$. If the two lines $\\frac{x-x_1}{l_1}=\\frac{y-y_1}{m_1}=\\frac{z-z_1}{n_1}$ and $\\frac{x-x_2}{l_2}=\\frac{y-y_2}{m_2}=\\frac{z-z_2}{n_2}$ are coplanar, then the line joining $(x_1,y_1,z_1) \\text{ and } (x_2,y_2,z_2)$ lies on the plane containing the given lines. Therefore, three vectors $(l_1,m_1,n_1),(l_2,m_2,n_2)$ and $(x_1-x_2,y_1-y_2,z_1-z_2)$ have triple product zero. So, we get, $\\begin{vmatrix} -1&1&1\\\\ 1&1&-k\\\\ k&2&1 \\end{vmatrix}=0$. Solving, we get $k=0,-3$."
  },
  {
    "id": 16,
    "question": "In the equation of the plane $ax+by+cz+d=0$, if $a=b=0,$ then normal to the plane is",
    "options": [
      "parallel to $x$-axis",
      "parallel to $z$-axis",
      "not parallel to any axis",
      "parallel to $y$-axis"
    ],
    "answer": 1,
    "explanation": "If we put $a=b=0,$ then the equation of the plane becomes, $0x+0y+cz+d=0$. Therefore the direction ratios of the normal to the plane are $[0,0,c]$. So clearly, the normal is parallel to $z$-axis."
  },
  {
    "id": 17,
    "question": "The equation of the parallel plane equidistant from the planes $$2x-y+3z+7=0 \\text{ and } 2x-y+3z-19=0 \\text{ is }$$",
    "options": [
      "$2x-y+3z+13=0$",
      "$2x-y+3z-13=0$",
      "$2x-y+3z-6=0$",
      "$2x-y+3z+6=0$"
    ],
    "answer": 2,
    "explanation": "The equation of the parallel plane equidistant from $ax+by+cz+d_1=0 $ and $ax+by+cz+d_2=0$ is $ax+by+cz+\\frac{d_1+d_2}{2}=0$. Therefore, in this question, $d=\\frac{7-19}{2}=-6$. Hence the correct answer is C."
  },
  {
    "id": 18,
    "question": "For three non-null vectors $\\vec{a},\\vec{b},\\vec{c}$ if $(\\vec{a}\\times \\vec{b})\\times \\vec{c}=\\vec{a}\\times(\\vec{b}\\times\\vec{c})$, then",
    "options": [
      "vector $\\vec{b}$ is parallel to the planes of $\\vec{a}$ and $\\vec{c}$",
      "$\\vec{a}$ and $\\vec{c}$ are perpendicular to each other",
      "$\\vec{a}$ and $\\vec{c}$ are parallel to each other or $\\vec{b}$ is perpendicular to the planes of $\\vec{a}$ and $\\vec{c}$",
      "$\\vec{b}$ is parallel to the vector $\\vec{a}$."
    ],
    "answer": 2,
    "explanation": "We have, $(\\vec{a}\\times \\vec{b})\\times \\vec{c}=\\vec{a}\\times(\\vec{b}\\times\\vec{c}) \\implies -\\vec{c}\\times(\\vec{a}\\times \\vec{b})=\\vec{a}\\times(\\vec{b}\\times\\vec{c}) \\implies -\\{(\\vec{b}\\cdot\\vec{c})\\vec{a}-(\\vec{a}\\cdot\\vec{c})\\vec{b}\\}=(\\vec{a}\\cdot\\vec{c})\\vec{b}-(\\vec{a}\\cdot\\vec{b})\\vec{c} \\implies (\\vec{b}\\cdot\\vec{c})\\vec{a}=(\\vec{a}\\cdot\\vec{b})\\vec{c}$. Thus, if $\\vec{b}$ is not perpendicular to the planes of $\\vec{a}$ and $\\vec{c}$, then $\\vec{a}$ and $\\vec{c}$ are parallel. Hence correct option is C."
  },
  {
    "id": 19,
    "question": "Projection of the vector $\\vec{a}=\\hat{i}-2\\hat{j}+\\hat{k}$ on $\\vec{b}=4\\hat{i}-4\\hat{j}+7\\hat{k}$ is",
    "options": [
      "$\\frac{1}{3}$",
      "$\\frac{19}{9}$",
      "$\\frac{19\\sqrt{6}}{9}$",
      "2"
    ],
    "answer": 1,
    "explanation": "We know, projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{\\vec{a}\\cdot\\vec{b}}{\\|\\vec{b}\\|}$, where $\\|\\vec{b}\\|=\\sqrt{\\vec{b}\\cdot\\vec{b}}$. Now it is easy to calculate and see that the answer is $\\frac{19}{9}$ $\\rightarrow$ B."
  },
  {
    "id": 20,
    "question": "Value of $\\lim\\limits_{n\\rightarrow\\infty}\\frac{2^{n+1}+3^{n+1}}{2^n+3^n}$",
    "options": [
      "0",
      "1",
      "3",
      "2"
    ],
    "answer": 2,
    "explanation": "Here, we will use the fact, that, if $|r|<1$, then $r^n\\rightarrow 0$ as $n\\rightarrow \\infty$. Dividing by $3^n$ both the numerator and denominator, we can write $\\frac{2^{n+1}+3^{n+1}}{2^n+3^n}=\\frac{2\\cdot\\left(\\frac{2}{3}\\right)^n+3}{\\left(\\frac{2}{3}\\right)^n+1}.$ Now $\\left(\\frac{2}{3}\\right)^n$ goes to zero. Hence the required limit is 3."
  },
  {
    "id": 21,
    "question": "If $ f(x)=x^n, n$ being a positive integer and if '$'$' represents derivative with respect to $x$, then $f(1)+\\frac{f'(1)}{1!}+\\frac{f''(1)}{2!}+\\cdots+\\frac{f^{(n)}(1)}{n!} \\text{ has value }$",
    "options": [
      "1",
      "$\\left(\\frac{1}{2}\\right)^n$",
      "$2^n$",
      "$3^n$"
    ],
    "answer": 2,
    "explanation": "We use the Taylor's expansion at $x=1$. We can write $f(x)=f(1)+\\frac{f'(1)}{1!}(x-1)+\\frac{f''(1)}{2!}(x-1)^2+\\cdots$. As our function is $x^n$, the $(n+1)$-th onward derivatives are zero. Thus, putting $x=2$, we can get, $f(2)=2^n= f(1)+\\frac{f'(1)}{1!}+\\frac{f''(1)}{2!}+\\cdots+\\frac{f^{(n)}(1)}{n!}$"
  },
  {
    "id": 22,
    "question": "value of $\\lim\\limits_{n\\rightarrow\\infty}\\frac{1^{10}+2^{10}+3^{10}+\\cdots+n^{10}}{n^{11}}$ is",
    "options": [
      "1",
      "$\\frac{1}{11}$",
      "2",
      "11."
    ],
    "answer": 1,
    "explanation": "$\\lim\\limits_{n\\rightarrow\\infty}\\frac{1^{10}+2^{10}+3^{10}+\\cdots+n^{10}}{n^{11}}$ <br> $=\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{n}\\sum\\limits_{r = 1}^n \\left(\\frac{r}{n}\\right)^{10}$<br> $=\\int\\limits_{0}^{1}x^{10}\\;dx =\\left[\\frac{x^{11}}{11}\\right]_0^1=\\frac{1}{11}$"
  },
  {
    "id": 23,
    "question": "Which of the following is true for the function $f(x)=|x-1|$ at $x=1$?",
    "options": [
      "Continuous but nothing can be said about differentiability",
      "Not continuous",
      "Differentiable",
      "Continuous but not differentiable"
    ],
    "answer": 3,
    "explanation": "The right and left derivative of $f$ at $x=1$ do not match. Thus, the function is continuous but not differentiable."
  },
  {
    "id": 24,
    "question": "For the function $x=e^{y+e^{y+\\cdots \\text{ to }\\infty}},\\:x>0$ value of $y'(1)$ is",
    "options": [
      "0",
      "1",
      "$\\frac{1}{2}$",
      "2"
    ],
    "answer": 0,
    "explanation": "From the expression, we can write, $x=e^{y+x}$. Putting $x=1$ we get, $1=e^{y+1}$. This implies $y(1)=-1$. Now differentiating with respect to $x$, we get, $1=(y'+1)e^{y+x}$. Now putting $x=1 \\text{ and }y=-1$ we have, $y'(1)=0$."
  },
  {
    "id": 25,
    "question": "For which value of $x$, the series $x+\\frac{x^2}{2}+\\frac{x^3}{3}+\\cdots+\\frac{x^n}{n},\\:x>0$ is divergent?",
    "options": [
      "$x<1$",
      "$x\\geq 1$",
      "$0 < x < \\frac{1}{2}$",
      "$\\frac{1}{2}\\leq x < 1$"
    ],
    "answer": 1,
    "explanation": "The question is slightly wrong here, as the given series is a finite series and it converges for all $x$. So the question setter meant the series $\\sum\\limits_{n=1}^\\infty \\frac{x^n}{n}$. The radius of convergence can be easily calculated as 1. Therefore, the series diverges for $x\\geq 1$."
  },
  {
    "id": 26,
    "question": "The value of $\\int_{-\\pi}^{\\pi} \\frac{\\cos^2 x\\,dx}{1+a^x}\\:(a>0)$ is",
    "options": [
      "$\\frac{\\pi}{a}$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "$a\\pi$"
    ],
    "answer": 2,
    "explanation": "Let $I=\\int_{-\\pi}^{\\pi} \\frac{\\cos^2 x\\,dx}{1+a^x}=\\int_{-\\pi}^{\\pi} \\frac{\\cos^2 y\\,dy}{1+a^y}.$ Now putting, $y=-x$, we get $dy =-dx$ and $ y$ will run from $\\pi $ to $-\\pi$. Therefore, $I=-\\int_{\\pi}^{-\\pi}\\frac{\\cos^2 y\\,dy}{1+a^{-y}}=\\int_{-\\pi}^{\\pi}\\frac{a^y\cos^2 y\\,dy}{a^y+1}.$ Thus, adding the two integrals, we get $2I=\\int_{-\\pi}^{\\pi} \\cos^2y~ dy=\\pi.$ So, $I=\\frac{\\pi}{2}$."
  },
  {
    "id": 27,
    "question": "If a function $f$ be differentiable at $x=1$ and $\\lim\\limits_{h\\rightarrow 0} \\frac{1}{h}f(1+h)=5$, the value of $f'(1) $ is",
    "options": [
      "4",
      "6",
      "3",
      "5"
    ],
    "answer": 3,
    "explanation": "As, $f$ is differentiable, $\\lim\\limits_{h\\rightarrow 0} \\frac{1}{h}(f(1+h)-f(1))$ exists. According to the question, $\\lim\\limits_{h\\rightarrow 0} \\frac{1}{h}f(1+h)=5$. Subtracting, we can say, that $\\lim\\limits_{h\\rightarrow 0} \\frac{f(1)}{h}$ exists and it forces that $f(1)=0$. Therefore, $f'(1)= \\lim\\limits_{h\\rightarrow 0} \\frac{1}{h}(f(1+h)-f(1))=\\lim\\limits_{h\\rightarrow 0} \\frac{1}{h}f(1+h)=5$."
  },
  {
    "id": 28,
    "question": "In a given interval maximum value of a function at a point",
    "options": [
      "is greater than the minimum value at any other point",
      "is always positive",
      "may be less than the minimum value at any other point",
      "cannot be equal to any minimum value"
    ],
    "answer": 3,
    "explanation": "Look at the picture below. In the figure, maximum value at $a$ is less than minimum value at $b$.<br><img src='graph_slst.png' class = 'mx-auto' alt='maximum and minimum' height='153px' width = '243px'>"
  },
  {
    "id": 29,
    "question": "The angle between the two curves $x^2=4y$ and $y^2=4x$ at their point of intersection other than the origin is",
    "options": [
      "$\\tan^{-1}\\frac{1}{2}$",
      "$\\frac{\\pi}{2}$",
      "$\\tan^{-1}\\frac{3}{2}$",
      "$\\tan^{-1}\\frac{3}{4}$"
    ],
    "answer": 3,
    "explanation": "The two parabolas $x^2=4y$ and $y^2=4x$ intersect at $(0,0)$ and $(4,4)$. Now differentiating $x^2=4y$, we get, $4y' = 2x$. So at $(4,4)$, slope of the tangent, $m_1=\\frac{2\\cdot 4}{4}=2$. Similarly, for the second parabola, the slope at $(4,4)$ is $m_2=\\frac{4}{2\\times 4}=\\frac{1}{2}.$ Now let the curves make angle $\\theta$ at $(4,4)$. Then $\\tan\\theta=\\frac{m_1-m_2}{1+m_1m_2}=\\frac{2-\\frac{1}{2}}{1+1}=\\frac{3}{4}$."
  },
  {
    "id": 30,
    "question": "The domain of definition of the function $f(x)=\\sqrt{\\log_e\\frac{5x-x^2}{4}}$ is",
    "options": [
      "$0 < x < 5$",
      "$1\\leq x\\leq 4$",
      "$1 < x < 5$",
      "$0 < x < 4$"
    ],
    "answer": 1,
    "explanation": "We know the domain of the function $\\sqrt{x}$ is $\\{x\\in \\mathbb{R}:\\:x\\geq 0\\}$. Therefore we need, $\\log_e\\frac{5x-x^2}{4}\\geq 0$. Now we know $\\log_e x\\geq 0 \\Leftrightarrow x\\geq 1$. Therefore we need, $\\frac{5x-x^2}{4}\\geq 1 \\Leftrightarrow 5x-x^2-4\\geq 0 \\Leftrightarrow x^2-5x+4\\leq 0 \\Leftrightarrow (x-1)(x-4)\\leq 0 \\Leftrightarrow 1\\leq x\\leq 4$."
  },
  {
    "id": 31,
    "question": "Value of $\\int_2^4\\big[|x-1|+|x-3|\\big]dx$ is",
    "options": [
      "5",
      "3",
      "10",
      "2"
    ],
    "answer": 0,
    "explanation": "$\\int_2^4[|x-1|+|x-3|]dx$<br> $= \\int_2^3[|x-1|+|x-3|]dx+\\int_3^4[|x-1|+|x-3|]dx $<br>$= \\int_2^3[x-1+3-x]dx+\\int_3^4[x-1+x-3]dx $ <br> $= \\int_2^3 2dx+\\int_3^4 (2x-4)dx $<br>$ =2[x]_2^3 + [x^2-4x]_3^4 $<br>$=2(3-2) + ((16-16)-(9-12)) $<br>$= 2+(0-(-3))=2+3=5.$"
  },
  {
    "id": 32,
    "question": "Singular solution of the differential equation $(y+1)p-p^2x+2=0$, where $p=\\frac{dy}{dx}$ is",
    "options": [
      "$(y+1)^2=4x$",
      "$(y+1)^2+4x=0$",
      "$y^2=-4x$",
      "$(y+1)^2=-8x$"
    ],
    "answer": 3,
    "explanation": "We have to eliminate $p$. We can make the $p$-discriminant to be zero. Thus the singular solution is, $(y+1)^2=4(-x)\\times 2=-8x$."
  },
  {
    "id": 33,
    "question": "Value of $\\iint \\sqrt{4x^2-y^2}\\;dxdy$ over the region formed by the lines $y=0,x=1,y=x$ is",
    "options": [
      "$\\frac{1}{2\\sqrt{3}}$",
      "$\\frac{\\pi}{9}+\\frac{1}{2\\sqrt{3}}$",
      "$\\frac{1}{2}-\\frac{\\pi}{9}$",
      "$\\frac{1}{2\\sqrt{3}}+\\frac{\\pi}{6}$"
    ],
    "answer": 1,
    "explanation": "The required integral is <br>  $I=\\int_{x=0}^1\\int_{y=0}^x \\sqrt{4x^2-y^2}\\;dydx$ <br>\
     $=\\int_{x=0}^{1}\\left[\\frac{y}{2}\\sqrt{4x^2-y^2}+\\frac{4x^2}{2}\\sin^{-1}\\Big(\\frac{y}{2x}\\Big)\\right]^{x}_{0}dx$<br>\
     $=\\int_0^1 \\left(\\frac{x}{2}\\sqrt{3} x+2x^2 \\sin^{-1}\\Big(\\frac{1}{2}\\Big)\\right)dx$<br>\
     $=\\int_0^1 \\left(\\frac{\\sqrt{3}}{2}+2\\times\\frac{\\pi}{6}\\right)x^2dx$ <br>\
     $=\\left(\\frac{\\sqrt{3}}{2}+\\frac{\\pi}{3}\\right)\\frac{1}{3}=\\frac{1}{2\\sqrt{3}}+\\frac{\\pi}{9}.$"
  },
  {
    "id": 34,
    "question": "The general solution of the differential equation $x^2\\frac{d^2y}{dx^2}-4x\\frac{dy}{dx}+6y=6x^5$ is",
    "options": [
      "$c_1x^2+c_2x^3+e^{5x}$",
      "$c_1e^{2x}+c_2e^{3x}+x^5$",
      "$c_1x^2+c_2x^3+x^5$",
      "$c_1x^2+c_2x^3+\\frac{1}{2}e^{5x}$"
    ],
    "answer": 2,
    "explanation": "Just use the transformation $x=e^t$ or $t=\\log x$. Let $\\theta$ denotes the operator $\\frac{d}{dt}$. Then we need to replace $xD$ by $\\theta$ and $x^2D^2$ by $\\theta(\\theta-1).$ Thus the given differential equation becomes $\\theta(\\theta-1)y-4\\theta y+6 y=6e^{5t} \\Leftrightarrow \\theta^2 y -5\\theta y+6y =6e^{5t} \\Leftrightarrow(\\theta-2)(\\theta-3)y=6e^{5t}$. Clearly the C.F. is $y=c_1e^{2t}+c_2e^{3t}$ and P.I. is given by $y_p= \\frac{6e^{5t}}{(5-2)(5-3)}=e^{5t}$. Putting $e^t =x$, we get the solution $y=c_1x^2+c_2x^3+x^5$."
  },
  {
    "id": 35,
    "question": "$f(x)$ is a quadratic polynomial in $x$, where $f(1)=f(-1)$ and three numbers $a, b,c$ are in A.P. Then the three numbers $f'(a),f'(b),f'(c)$ will form a/an",
    "options": [
      "A.P.",
      "G.P.",
      "H.P.",
      "none of these"
    ],
    "answer": 0,
    "explanation": "For example take $f(x)=x^2$. Then we see that the answer is A.P."
  },
  {
    "id": 36,
    "question": "If the relation between displacement, velocity and time at any instant of a particle moving in a straight line be $s=\\frac{1}{2}vt$, where symbols having usual meaning, then the acceleration of the particle will be",
    "options": [
      "proportional to $s$",
      "proportional to $v$",
      "inversely proportional to $t$",
      "constant"
    ],
    "answer": 3,
    "explanation": "$s=\\frac{1}{2}vt \\implies s=\\frac{1}{2}\\frac{ds}{dt}t \\implies \\frac{ds}{s}=\\frac{2dt}{t} \\implies (\\text{Solving})\\: s =ct^2 \\implies (\\text{Twice differentiating with respect to } t)\\: \\frac{d^2s}{dt^2}=2c.$ Thus <em>acceleration</em> is constant."
  },
  {
    "id": 37,
    "question": "If for a particle moving in a plane, magnitudes of radial and cross-radial velocities be same, then the particle describes a curve which is a",
    "options": [
      "parabola",
      "circle",
      "equi-angular spiral",
      "hyperbola"
    ],
    "answer": 2,
    "explanation": "According to question, $\\dot{r}=r\\dot{\\theta}$. Solving we get, $r=ce^{\\theta}$. This is an equation of equi-angular spiral"
  },
  {
    "id": 38,
    "question": "For a particle moving in a plane if tangential and normal components of accelerations are equal in magnitude then the velocity of the particle is",
    "options": [
      "proportional to $e^\\psi$",
      "proportional to $e^{-\\psi}$",
      "constant",
      "proportional to $s$"
    ],
    "answer": 0,
    "explanation": "We know tangential and normal accelerations are given by $v\\frac{dv}{ds}$ and $\\frac{v^2}{\\rho}$ where $\\rho = \\frac{ds}{d\\psi}$. According to the question we get, $v\\frac{dv}{ds}=\\frac{v^2}{\\rho} \\implies v\\frac{dv}{ds}=v^2 \\frac{d\\psi}{ds} \\implies dv=v d\\psi$. (Solving)\: $v=ce^\\psi$."
  },
  {
    "id": 39,
    "question": "If $P$ be the momentum of a particle of mass $m$, then its K.E. is",
    "options": [
      "$mP$",
      "$\\frac{1}{2}\\frac{P^2}{m}$",
      "$\\frac{1}{2}mP^2$",
      "$\\frac{P^2}{m}$"
    ],
    "answer": 1,
    "explanation": "We know momentum $P=mv$ and kinetic energy $K=\\frac{1}{2}mv^2=\\frac{1}{2}\\frac{m^2v^2}{m}=\\frac{1}{2}\\frac{P^2}{m}$."
  },
  {
    "id": 40,
    "question": "Relation between distance from origin $x$ and velocity $v$ of a particle moving in a straight line is given by $v^2=2-x-x^2$. Then centre of the simple harmonic motion of the particle with respect to origin is",
    "options": [
      "behind a distance of 1 unit",
      "ahead by a distance of $\\frac{1}{2}$ unit",
      "behind a distance by $\\frac{1}{2}$ unit",
      "ahead by a distance of 2 units"
    ],
    "answer": 2,
    "explanation": "Differentiating, we see that $2v\\frac{dv}{dx}=-1-2x = -2(x+\\tfrac{1}{2}).$ Hence the center behind a distance by $\\frac{1}{2}$ unit."
  },
  {
    "id": 41,
    "question": "If a particle be projected vertically upwards with a velocity $u$ in a medium of air resistance proportional to the square of the velocity and if $V$ be the terminal velocity, then greatest height attained by the particle is",
    "options": [
      "$\\frac{2g}{V^2}\\log\\left(1+\\frac{V^2}{u^2}\\right)$",
      "$\\frac{V^2}{2g}\\log\\left(1+\\frac{u^2}{V^2}\\right)$",
      "$\\frac{V^2}{2g}\\log\\frac{V^2}{V^2+u^2}$",
      "$\\frac{V^2}{g}\\log\\left(1+\\frac{V^2}{u^2}\\right)$"
    ],
    "answer": 1,
    "explanation": "If the particle is going downward then only terminal velocity occurs. The equation of motion in downward is $m\\frac{dv}{dt} = mg - kv^2.$ So terminal velocity is attained when net force is zero. So $mg = kV^2.$ Or, $k = \\frac{mg}{V^2}.$ In upward motion, total force acting on the particle is: $F = ma = m\\frac{dv}{dt} = -mg - kv^2 = -mg\\left(1 + \\frac{v^2}{V^2}\\right).$ Writing acceleration as $v\\frac{dv}{dx}$ we obtain the equation of motion as $v\\frac{dv}{dx}=-g\\left(1 + \\frac{v^2}{V^2}\\right).$ Separating the variables and integrating, we solve for the height $H$ by integrating from the initial velocity $u$ to a final velocity of 0 (at the peak height) and from a position of 0 to $H$. $$\\int_0^H dy = -\\int_u^0 \\frac{v}{g\\left(1 + \\frac{v^2}{V^2}\\right)} dv$$ Substitute $v^2 = z$, then $2vdv = dz$. So $$H = -\\frac{V^2}{2g}\\int_{u^2}^{0}\\frac{dz}{V^2+z}=-\\frac{V^2}{2g}\\log_e{\\frac{V^2}{u^2+V^2}}.$$ Therefore $H=\\frac{V^2}{2g}\\log_e{(\\frac{u^2+V^2}{V^2})} = \\frac{V^2}{2g}\\log_e(1+\\frac{u^2}{V^2}).$"
  },
  {
    "id": 42,
    "question": "Which of the following is not a convex set?",
    "options": [
      "$X_1=\\{(x,y):x\\leq y\\}$",
      "$X_2=\\{\\left(x,y\\right):\\frac{x^2}{a^2}+\\frac{y^2}{b^2}\\leq 1\\}$",
      "$X_3=\\{(x,y):x\\geq 2,y\\leq 1,x,y\\geq 0\\}$",
      "$X_4=\\{(x,y):x^2\\geq y\\}$"
    ],
    "answer": 3,
    "explanation": "Hint: Draw the corresponding sets and see that (D) is not convex."
  },
  {
    "id": 43,
    "question": "In a balanced transportation problem with $m$ origins and $n$ destinations the number of occupied cells in any optimal solution is",
    "options": [
      "$>m+n-1$",
      "$\\leq m+n-1$",
      "$=m+n-1$",
      "$=m+n$"
    ],
    "answer": 1,
    "explanation": "In a transportation problem with $m$ rows (origins) and $n$ columns (destinations), there are $m+n$ constraints (one for each origin and one for each destination), but since the sum of the origins' supplies must equal the sum of the destinations' demands, one of the constraints is redundant. Therefore, the number of independent constraints is $m+n-1$. An optimal solution is a basic feasible solution. A basic feasible solution to a transportation problem has a number of basic variables equal to the number of independent constraints. Thus, the number of basic variables is at most $m+n-1$ for a non-degenerate solution. Degeneracy can occur when the number of basic variables is less than $m+n-1$. Therefore, the number of occupied cells is at most $m+n-1$."
  },
  {
    "id": 44,
    "question": "If the relative error of the number 2.1356 be $7\\times 10^{-6}$, then number of correct digits in the number is",
    "options": [
      "5",
      "6",
      "4",
      "7"
    ],
    "answer": 4,
    "explanation": "Absolute error is approx $15\\times 10^{-6}=0.15\\times 10^{-4}$. Thus 4 digits are correct after decimal point. Hence total number of correct digits is 5."
  },
  {
    "id": 45,
    "question": "If the matrix $\\begin{pmatrix} 2 & 1 & 4\\\\ 1 & x & 2\\\\ 4 & 0 & x+2 \\end{pmatrix}$ has rank 2, then values of $x$ are",
    "options": [
      "6 and $\\frac{1}{2}$",
      "3 and 1",
      "$\\frac{1}{2}$ and 1",
      "6 and 3"
    ],
    "answer": 0,
    "explanation": "Hint: As the rank is 2, determinant must be zero. Answer is (A)."
  },
  {
    "id": 46,
    "question": "If for two unit vectors $\\hat{u}$ and $\\hat{v}$, $|\\hat{u}+\\hat{v}|=1,$ then the value of $|\\hat{u}-\\hat{v} |$ is",
    "options": [
      "1",
      "3",
      "$\\sqrt{3}$",
      "2"
    ],
    "answer": 2,
    "explanation": "Hint: Use dot product, note that $|\\hat{u}|^2 =\\hat{u}\\cdot \\hat{u}$. From first relation, find $\\hat{u}\\cdot\\hat{v}$ then use that. Answer is $\\sqrt{3}$."
  },
  {
    "id": 47,
    "question": "The mean deviation about the median of the numbers $8, 15,53,49,19,62,7,16,95,77$ is",
    "options": [
      "23.7",
      "22.3",
      "27.3",
      "27"
    ],
    "answer": 3,
    "explanation": "First we need to write the numbers in ascending order and they are $7, 8, 15, 16, 19, 49, 53, 62, 77, 95$. There are total 10 numbers. Hence the median is 5 and 6-th numbers' average. So median is $\\frac{19+49}{2}=34$. Thus mean deviation is $(|7-34|+|8-34|+|15-34|+|16-34|+|19-34|+|49-34|+|53-34|+|62-34|+|77-34|+|95-34|)/10 = (27+26+19+18+15+15+19+28+43+61)/10 = 271/10 = 27.1$."
  },
  {
    "id": 48,
    "question": "$\\int_{0}^\\pi |\\cos x|dx $ is",
    "options": [
      "0",
      "1",
      "$-1$",
      "2"
    ],
    "answer": 3,
    "explanation": "Hint: Imagine the graph. $\\int_{0}^\\pi |\\cos x|dx=\\int_0^\\frac{\\pi}{2}\\cos xdx -\\int_{\\frac{\\pi}{2}}^\\pi \\cos xdx=[\\sin x]_0^{\\pi/2} - [\\sin x]_{\\pi/2}^\\pi = (1-0)-(0-1)=2$."
  },
  {
    "id": 49,
    "question": "If the equation of the line $x+\\sqrt{3}y+12=0$ reduce to the form $x=k$ when the coordinate axes are rotated thorough an angle $\\theta$, then $\\theta$ has value",
    "options": [
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{2\\pi}{3}$"
    ],
    "answer": 1,
    "explanation": "The line is parallel to $y=-\\frac{1}{\\sqrt{3}}x.$ The angle of inclination is $-30^\\circ$ or $150^\\circ$. Now if the line is parallel to $y$-axis, then new $x$-axis would make $150^\\circ-90^\\circ=60^\\circ$ to the original $x$-axis. Hence the value of $\\theta$ is $\\frac{\\pi}{3}.$ <br><strong>Using Transformation formula:</strong> We have $\\begin{pmatrix} x\\\\ y \\end{pmatrix}=\\begin{pmatrix} \\cos\\theta &-\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}\\begin{pmatrix} x'\\\\ y' \\end{pmatrix}.$ Thus the equation $x+\\sqrt{3}y+12=0$ transforms to $(\\cos\\theta x'-y'\\sin\\theta)+\\sqrt{3}(\\sin\\theta x'+\\cos\\theta y')+12=0$. Now coefficient of $y'$ must be zero. That is, $-\\sin\\theta +\\sqrt{3}\\cos\\theta=0 \\implies \\sin\\theta = \\sqrt{3}\\cos\\theta \\implies \\tan\\theta =\\sqrt3\\implies \\theta = \\frac{\\pi}{3}.$ "
  },
  {
    "id": 50,
    "question": "The probability of solving a problem by 3 students $A,B$ and $C$ are $\\frac12,\\frac13$ and $\\frac{1}{4}$ respectively. The probability that the problem be solved is",
    "options": [
      "$\\frac{5}{12}$",
      "$\\frac{3}{8}$",
      "$\\frac{3}{4}$",
      "1"
    ],
    "answer": 2,
    "explanation": "Probability that the problem is not solved is $P(A^cB^cC^c)=\\frac{1}{2}\\cdot\\frac{2}{3}\\cdot\\frac{3}{4}=\\frac{1}{4}$. Hence the probability that the problem is solved is $1-\\frac{1}{4}=\\frac{3}{4}$."
  },
 {
  "id": 51,
  "question": "If S.D. $=3.5$ for the numbers $2,3,2y$ and $11$; then the value of $y$ is [Original question was wrong, so I corrected it]",
  "options": [
   "3 and $\\frac{1}{3}$",
   "3 and 1",
   "$-3$ and $\\frac{3}{7}$",
   "3 and $\\frac{7}{3}$"
  ],
  "answer": 3,
  "explanation": "Let the numbers be $x_1, x_2, x_3, x_4$. The mean is $\\bar{x} = \\frac{2+3+2y+11}{5} = \\frac{16+2y}{4}$. Variance is given by $\\sigma^2 = \\frac{1}{n}\\sum(x_i-\\bar{x})^2 = \\frac{1}{n}\\sum x_i^2 - (\\bar x)^2$. We are given $\\sigma = 3.5.$ So $\\sigma^2 = (\\frac{7}{2})^2=\\frac{49}{4}$. Thus $\\sigma^2 = \\frac{1}{4}[4+9+4y^2+121]-(\\frac{8+y}{2})^2=\\frac{49}{4}.$ Simplifying we get $134+4y^2-(8+y)^2=49.$ Or, $3y^2-16y+21=0.$ Solving we get $y=\\frac{16\\pm \\sqrt{256-252}}{6}=3,\\frac{7}{3}.$"
 },
 {
  "id": 52,
  "question": "If ratio of two roots of $x^3-9x^2+14x+24=0$ be $3:2$, the roots are",
  "options": [
   "$1,4,6$",
   "$1,4,-6$",
   "$-1,-4,-6$",
   "$-1,4,6$"
  ],
  "answer": 3,
  "explanation": "We observe that sum of the roots is 9. Only correct option is D."
 },
 {
  "id": 53,
  "question": "Area above $x$-axis enclosed by the parabola $y^2=ax$ and the circle $x^2+y^2=2ax,\\:a>0$ is",
  "options": [
   "$(\\frac{\\pi}{4}-\\frac{2}{3})a^2$",
   "$\\frac{\\pi}{4}a^2$",
   "$(\\frac{\\pi}{4}+\\frac{2}{3})a^2$",
   "$(\\frac{\\pi}{2}+\\frac{2}{3})a^2$"
  ],
  "answer": 0,
  "explanation": "The circle can be written as $x^2-2ax+a^2+y^2=a^2$ or $(x-a)^2+y^2=a^2.$ Let us draw the figure<br>\
  <img class ='mx-auto' src = 'parabola_circle.png' alt = 'parabola-circle image height = '226px' width = '299px'/> <br>\
   Area of blue portion is <br>\
   $\\frac{2}{3}\\times \\text{rectangle} = \\frac{2}{3}a^2.$ Therefore, required area (red portion) is $\\frac{\\pi}{4}a^2-\\frac{2}{3}a^2=\\left(\\frac{\\pi}{4}-\\frac{2}{3}\\right)a^2$. "
 },
 {
  "id": 54,
  "question": "For a complex number $z$, the number of solutions of the equation $z^2=\\bar{z}$ is",
  "options": [
   "1",
   "3",
   "4",
   "2"
  ],
  "answer": 2,
  "explanation": "First taking modulus on both sides, we have $|z^2|=|\\bar{z}|$ implies $|z|=0$ or 1. Thus one solution is 0. If $|z|=1$, then $\\bar{z}=\\frac{1}{z}.$ Then from the given equation we have, $z^2=\\frac{1}{z}$. Hence $z^3=1$. Thus $z=1,\\omega,\\omega^2$. Hence total number of solution is 4. (C)."
 },
 {
  "id": 55,
  "question": "In the families with two children, assume that probability is same for a child to be a boy or a girl. Such a family is chosen at random and is found to have a boy. What is the probability of having another boy?",
  "options": [
   "$\\frac{1}{2}$",
   "$\\frac{2}{3}$",
   "$\\frac{1}{3}$",
   "$\\frac{3}{4}$"
  ],
  "answer": 2,
  "explanation": "The sample space is $\\{BB,BG,GB\\}$ Hence the required event is $\\{BB\\}$. Thus the required probability is $\\frac{1}{3}$."
 }
];

    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
