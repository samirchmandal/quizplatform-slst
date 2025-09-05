exports.handler = async (event, context) => {
    const questions = [
        {id: 1,
        question: "The principal value of $(-i)^i$ is",
        options: [
            "$e^{\\frac{\\pi}{2}}$",
            "$e^{-\\frac{\\pi}{2}}$",
            "$e^{\\frac{\\pi}{2}}i$",
            "$e^{-\\frac{\\pi}{2}}i$"
        ],
        answer: 0,
        explanation: "$(-i)^i = \\exp(i\\log(-i))= \\exp(i(i\\frac{-\\pi}{2}))=e^{\\frac{\\pi}{2}}.$",
    },
    {
        id: 2,
        question: "The equation $x^3 - 6x^2 + 9x + k = 0$ will have three distinct real roots if",
        options: [
            "$-4 < k < 0$",
            "$-5 < k < 0$",
            "$0 < k < 4$",
            "$-3 < k < 3$"
        ],
        answer: 0,
        explanation: "Let $f(x)=x^3-6x^2+9x+k.$ Then $f'(x)=3(x-1)(x-3)$, so local max at $x=1$ and local min at $x=3.$ For three distinct real roots, the local max must be above the $x$-axis and the local min below it: $f(1)>0$ and $f(3)<0.$ Compute $f(1)=1-6+9+k=4+k$ and $f(3)=27-54+27+k=k.$ Thus $4+k>0$ and $k<0.$ So $-4 < k < 0.$"
    },
    {
        id: 3,
        question: "If $\\alpha, \\beta, \\gamma$ are the roots of $x^3 - px^2 + qx - r = 0$, then the value of $(\\alpha+\\beta)(\\beta+\\gamma)(\\gamma+\\alpha)$ is",
        options: [
            "$pq-r$",
            "$pr-q$",
            "$p^2q-r$",
            "$r-pq$"
        ],
        answer: 0,
        explanation: "Let $\\alpha+\\beta+\\gamma=p.$ Then $(\\alpha+\\beta)(\\beta+\\gamma)(\\gamma+\\alpha)=(p-\\alpha)(p-\\beta)(p-\\gamma).$ Also we get $x^3 - px^2 + qx - r = (x-\\alpha)(x-\\beta)(x-\\gamma).$ So putting $x=p$ we get our desired value."
    },
    {
        id: 4,
        question: "For all real values of $\\theta$, the matrix $\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}$ is",
        options: [
            "singular",
            "symmetric",
            "Hermitian",
            "orthogonal"
        ],
        answer: 3,
        explanation: "The given matrix is known as rotation matrix. If we denote this matrix by $R(\\theta)$ then we have $R(\\theta+\\phi) = R(\\theta)R(\\phi)$ and $R(0)=I.$ Also note that $R(\\theta)^t= R(-\\theta)=R(\\theta)^{-1}$. Thus $R(\\theta)$ is always orthogonal." 
    },
    {
        id: 5,
        question: "Under multiplication $C[a,b]$, the set of all real valued functions on $[a,b]$ is",
        options: [
            "only semigroup",
            "monoid but not a group",
            "group",
            "not a semigroup"
        ],
        answer: 1,
        explanation: "The constant function 1 works as the multiplicative identity. Consider the function $f(x) = \\begin{cases}0& \\text{if }a\\le x< \\frac{a+b}{2} \\\\ 2x-a-b & \\text{if } \\frac{a+b}{2} \\le x \\le b   \\end{cases}.$ Then this function does not have any multiplicative inverse, thus $C[a,b]$ is only monoid but not a group."
    },
    {
        id: 6,
        question: "The quadratic form $2x_1^2 + x_2^2 + 3x_3^2 - 2x_1x_2 + 4x_2x_3$ is",
        options: [
            "positive definite",
            "positive semi-definite",
            "indefinite",
            "negative definite"
        ],
        answer: 2,
        explanation: "The quadratic form corresponds to the symmetric matrix \n$$A = \\begin{bmatrix} 2 & -1 & 0 \\\\ -1 & 1 & 2 \\\\ 0 & 2 & 3 \\end{bmatrix}.$$ To determine definiteness, we check eigenvalues or leading principal minors. The leading minors are: \n$\\Delta_1 = 2 > 0$, \n$\\Delta_2 = \\det \\begin{bmatrix} 2 & -1 \\\\ -1 & 1 \\end{bmatrix} = 1 > 0$, \n$\\Delta_3 = \\det(A) = -5 < 0$. \n Hence the quadratic form is <span class ='font-bold'>indefinite </span>."
    },
    {
        id: 7,
        question: "Which of the following is a generator of the cyclic group $\\mathbb{Z}_6$ under addition modulo 6?",
        options: [
            "$\\bar 2$",
            "$\\bar 3$",
            "$\\bar 4$",
            "$\\bar 5$"
        ],
        answer: 3,
        explanation: "$\\bar k$ is a generator in $\\mathbb {Z}_n$ if and only if $\\gcd(k,n) =1.$ Thus $\\bar {5}$ is a generator of $\\mathbb{Z}_6.$"
    },
    {
        id: 8,
        question: "The mapping $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^3 - x$ is",
        options: [
            "one-one but not onto",
            "one-one and onto",
            "onto but not one-one",
            "neither one-one nor onto"
        ],
        answer: 2,
        explanation: "The function $f(x) = x^3 - x$ is not one-one since it fails the horizontal line test: for example, $f(0) = f(1) = f(-1) = 0$. However, as $x \\to \\infty$, $f(x) \\to \\infty$ and as $x \\to -\\infty$, $f(x) \\to -\\infty$. By continuity, every real value is attained, so the function is onto. Therefore, the correct option is 'onto but not one-one'."
    },
    {
    id: 9,
    question: "If $f: \\mathbb{R} \\to \\mathbb{R}$ is a mapping defined by $f(x) = x^2 - 5$, $x \\in \\mathbb{R}$, then the value of $f^{-1}(4)$ is",
    options: [
        "3",
        "$-3$",
        "$-3$ and 3",
        "9"
    ],
    answer: 2,
    explanation: "We want $f^{-1}(4)$, which means solving $f(x) = 4$. Since $f(x) = x^2 - 5$, we set $x^2 - 5 = 4$. Thus, $x^2 = 9 \\implies x = \\pm 3$. Therefore, $f^{-1}(4) = \\{-3, 3\\}$. Hence the correct answer is option 2."
},
{
    id: 10,
    question: "For points on the conic $\\frac{5}{r} = 2 - \\cos\\theta$, the minimum radius vector is",
    options: [
        "5",
        "$\\frac{5}{3}$",
        "$\\frac{5}{2}$",
        "10"
    ],
    answer: 1,
    explanation: "We have $\\tfrac{5}{r} = 2 - \\cos\\theta \\implies r = \\tfrac{5}{2 - \\cos\\theta}$. The radius vector $r$ is minimum when the denominator $(2 - \\cos\\theta)$ is maximum. Since $\\cos\\theta \\in [-1,1]$, maximum denominator $= 2 - (-1) = 3$. Thus, minimum $r = \\tfrac{5}{3}$."
},
{
    "id": 11,
    "question": "If the straight line $2x - y = k$ be normal to the parabola $y^2 = 8x$, then the value of $k$ is",
    "options": [
        "24",
        "$20$",
        "$-24$",
        "$-20$"
    ],
    "answer": 0,
    "explanation": "The slope of the normal is 2. So slope of tangent must be $-\\frac{1}{2}.$ From the equation of the parabola $y^2=8x.$ Differentiating wrt $x$, we obtain $y'y = 4.$ or $y' = \\frac{4}{y}.$ Equating this with $-\\frac{1}{2}$ we get $y= - 8.$ So the point on the parabola must be $(8,-8).$ The normal should pass through this point. Hence $k = 24.$"
},
{
    "id": 12,
    "question": "Co-ordinates of the pole of the straight line $x - 3y + 6 = 0$ with respect to the parabola $y^2 = 12x$ is",
    "options": [
        "(18,6)",
        "(6, 18)",
        "(3, 6)",
        "(6, 3)"
    ],
    "answer": 1,
    "explanation": "Suppose the pole is at $(h,k).$ Then the polar should be $ky - 6(x+ h)=0.$ or $x-\\frac{k}{6}y+h=0.$ -> this is the shorcut technique for tangent, polar, chord of contact. Comparing it with the given equation of polar we see $k=18, h=6.$ Thus the pole is at $(6,18)$." 
},
{
    "id": 13,
    "question": "If the straight lines $\\frac{x-1}{2} = \\frac{y-2}{k} = \\frac{z-3}{1}$ and $\\frac{x-4}{1} = \\frac{y-1}{2} = \\frac{z-5}{3}$ be coplanar, then",
    "options": [
        "$k=1$",
        "$k=2$",
        "$k=3$",
        "$k=-1$"
    ],
    "answer": 3,
    "explanation": "Two lines are coplanar if the <span class = 'font-bold'> scalar triple product </span> of the direction vector of the first line, the direction vector of the second line, and the vector connecting a point on the first line to a point on the second line is zero. The first line have direction vector $\\vec{d_1} = (2, k, 1)$ and a point $P_1 = (1, 2, 3).$ The second line have direction vector $\\vec{d_2} = (1, 2, 3)$ and a point $P_2 = (4, 1, 5).$ Vector connecting points: $P_1P_2 = (4-1, 1-2, 5-3) = (3, -1, 2).$  Coplanarity condition: $[\\vec d_1, \\vec d_2, P_1P_2] = 0.$ \n\nCompute the determinant: $$\\begin{vmatrix} 2 &   k &  1 \\\\ 1 &  2 &  3 \\\\ 3 & -1 &  2 \\end{vmatrix}= 7 + 7k.$$ Set equal to $0: 7 + 7k = 0 ⇒ k = -1.$"
},
{
    id: 14,
    question: "In the equation of the plane $ax+by+cz+d=0$, if $a=c=0$, then the normal to the plane is",
    options: [
        "parallel to $x$-axis",
        "parallel to $z$-axis",
        "not parallel to any axis",
        "parallel to $y$-axis"
    ],
    answer: 3,
    explanation: "The general equation of a plane is $ax + by + cz + d = 0$, where the normal vector to the plane is $(a, b, c)$. Here, $a = 0$ and $c = 0$, so the normal vector becomes $(0, b, 0)$, which is along the $y$-axis. Hence, the normal to the plane is parallel to the $y$-axis."
},
{
    "id": 15,
    "question": "The equation of the plane equidistant from the planes $x+2y-2z+1=0$ and $x+2y-2z-5=0$ is",
    "options": [
        "$x+2y-2z-2=0$",
        "$x+2y-2z+2=0$",
        "$x+2y-2z-3=0$",
        "$x+2y-2z+3=0$"
    ],
    "answer": 0,
    "explanation": "For planes with the same normal vector, the plane equidistant from them is parallel and its constant term is the average of the constants of the given planes. The given planes are $x + 2y - 2z + 1 = 0$ and $x + 2y - 2z - 5 = 0.$ Average constant $= \\frac{1 + (-5)}{2} = -2.$ Hence, the plane equidistant from them is $x + 2y - 2z - 2 = 0.$"
},
{
    "id": 16,
    "question": "For three non-null vectors $\\vec{a}, \\vec{b}, \\vec{c}$ if $(\\vec{a} \\times \\vec{b}) \\times \\vec{c} = \\vec{a} \\times (\\vec{b} \\times \\vec{c})$, then",
    "options": [
        "$\\vec{a}$ and $\\vec{b}$ are parallel",
        "$\\vec{b}$ and $\\vec{c}$ are parallel",
        "$\\vec{a}$ and $\\vec{c}$ are parallel or $\\vec{b}$ is perpendicular to the plane of $\\vec{a}$ and $\\vec{c}$",
        "$\\vec{a}$ and $\\vec{c}$ are perpendicular"
    ],
    "answer": 2,
    "explanation": "Using the vector triple product identity: $(\\vec{a} \\times \\vec{b}) \\times \\vec{c} = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{b} \\cdot \\vec{c})\\vec{a}$ and $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$. Equating these gives $(\\vec{b} \\cdot \\vec{c})\\vec{a} = (\\vec{a} \\cdot \\vec{b})\\vec{c}$. This is satisfied if either $\\vec{a}$ and $\\vec{c}$ are parallel, or if $\\vec{b}$ is perpendicular to the plane containing $\\vec{a}$ and $\\vec{c}$."
},
{
    "id": 17,
    "question": "Projection of the vector $\\vec{a} = 2\\hat{i} - \\hat{j} + 3\\hat{k}$ on $\\vec{b} = \\hat{i} + 2\\hat{j} - \\hat{k}$ is",
    "options": [
        "$\\frac{3}{\\sqrt{6}}$",
        "$\\frac{3}{\\sqrt{14}}$",
        "$\\frac{2}{\\sqrt{14}}$",
        "$\\frac{2}{\\sqrt{6}}$"
    ],
    "answer": 0,
    "explanation": "The projection of vector $\\vec{a}$ on $\\vec{b}$ is given by $\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$. First, calculate the dot product: $\\vec{a} \\cdot \\vec{b} = (2)(1) + (-1)(2) + (3)(-1) = 2 - 2 - 3 = -3$. Next, calculate the magnitude of $\\vec{b}$: $|\\vec{b}| = \\sqrt{1^2 + 2^2 + (-1)^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6}$. Therefore, the projection is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{-3}{\\sqrt{6}}$. Taking absolute value (length of projection), we get $\\frac{3}{\\sqrt{6}}$."
},
{
    "id": 18,
    "question": "Value of $\\lim\\limits_{n \\to \\infty} \\frac{5^{n+1}+2^{n+1}}{5^n+2^n}$ is",
    "options": [
        "0",
        "1",
        "2",
        "5"
    ],
    "answer": 3,
    "explanation": "Divide numerator and denominator by $5^n: ~\\frac{5^{n+1}+2^{n+1}}{5^n+2^n} = \\frac{5*5^n + 2*2^n}{5^n + 2^n} = \\frac{5 + 2*(2/5)^n}{1 + (2/5)^n} $. As $n → ∞, (2/5)^n → 0.$ So the limit is $\\frac{5+0}{1+0} = 5$."
},
{
    "id": 19,
    "question": "If $f(x) = x^{n+1}, n$ being a positive integer and if ' represents derivative with respect to $x$, then $f(0) + \\frac{f'(0)}{1!} + \\frac{f''(0)}{2!} + \\cdots + \\frac{f^{(n+1)}(0)}{(n+1)!}$ has value",
    "options": [
        "0",
        "1",
        "$2^{n+1}$",
        "$n!$"
    ],
    "answer": 1,
    "explanation": "We are asked to evaluate the sum $f(0) + \\frac{f'(0)}{1!} + \\frac{f''(0)}{2!} + \\cdots + \\frac{f^{(n+1)}(0)}{(n+1)!}$ for $f(x) = x^{n+1}$. As $f^{(k)}(x)=0~\\forall k\\ge n+2$, we have by Maclaurin's expansion $f(x) = f(0) + \\frac{f'(0)}{1!}x + \\frac{f''(0)}{2!}x^2 + \\cdots + \\frac{f^{(n+1)}(0)}{(n+1)!}x^{n+1}.$ Now putting $x=1$ we get our required value. Hence required expression is $f(1)=1.$"
},
{
    "id": 20,
    "question": "Value of $\\lim\\limits_{n \\to \\infty} \\frac{1^9+2^9+3^9+\\cdots+n^9}{n^{10}}$ is",
    "options": [
        "1",
        "$\\frac{1}{9}$",
        "$\\frac{1}{10}$",
        "0"
    ],
    "answer": 2,
    "explanation": "We know that $\\frac{1^9 + 2^9 + \\cdots + n^9}{n^{10}} = \\frac{1}{n}\\sum\\limits_{r=1}^n (\\frac{r}{n})^n.$ As $n\\to \\infty$ this converges to $\\int_0^1 x^n~dx = \\frac{1}{10}.$"
},
{
    "id": 21,
    "question": "Which of the following is true for the function $f(x) = |x^2 - 1|$ at $x=1$?",
    "options": [
        "Differentiable",
        "Not continuous",
        "Continuous but not differentiable",
        "Neither continuous nor differentiable"
    ],
    "answer": 2,
    "explanation": "The function $f(x) = |x^2 - 1|$ can be written in $(0.5,1.5)$ as $f(x) = |x-1|(1+x).$ At $x=1$, $f(x)$ is continuous because the left-hand and right-hand limits equal $f(1) = 0$. However, the derivative from the left is $f'_-(1) = -2$ and from the right is $f'_+(1) = 2$, so the derivative does not exist. Hence, it is continuous but not differentiable at $x=1$."
},
{
    "id": 22,
    "question": "For the function $x = e^{y+e^{y+\\cdots \\text{ to } \\infty}}$, $x > 0$, the value of $\\frac{dy}{dx}$ is",
    "options": [
        "$\\frac{1-x}{x}$",
        "$\\frac{1+x}{x}$",
        "$\\frac{x}{1+x}$",
        "$\\frac{x}{1-x}$"
    ],
    "answer": 0,
    "explanation": "We have $x = e^{y+e^{y+\\cdots}}$. Notice that the infinite tower structure means $x = e^{y+x}$. Taking natural log, $\\ln x = y + x$. Hence $y = \\ln x - x$. Differentiating w.r.t $x$: $\\frac{dy}{dx} = \\frac{1}{x} - 1 = \\frac{1-x}{x}$. Therefore, the correct option is $\\frac{1-x}{x}$."
},
{
    "id": 23,
    "question": "For which value of $x$, the series $1 + \\frac{x}{1} + \\frac{x^2}{2} + \\frac{x^3}{3} + \\cdots$, $x > 0$ is divergent?",
    "options": [
        "$x < 1$",
        "$x = 1$",
        "$0 < x < 1$",
        "$x \\leq 1$"
    ],
    "answer": 1,
    "explanation": "The given series is $\\sum\\limits_{n=0}^{\\infty} \\frac{x^n}{n}$ (with $n$ starting from 1 in the denominator). Its radius of convergence is 1. Hence it converges for $|x|<1.$ When $x = 1$, the series becomes $1 + \\frac{1}{1} + \\frac{1}{2} + \\frac{1}{3} + \\cdots$, which is the harmonic series and diverges. Hence, the series diverges for $x = 1$."
},
{
    "id": 24,
    "question": "The value of $\\int_{-\\pi}^{\\pi} \\frac{\\sin^2 x}{1+e^x} dx$ is",
    "options": [
        "$\\pi$",
        "$\\frac{\\pi}{2}$",
        "$\\pi^2$",
        "0"
    ],
    "answer": 1,
    "explanation": "Let $I = \\int_{-\\pi}^{\\pi} \\frac{\\sin^2 x}{1+e^x} dx$. Consider substitution $x \\mapsto -x$: \n\n$I = \\int_{-\\pi}^{\\pi} \\frac{\\sin^2 (-x)}{1+e^{-x}} dx = \\int_{-\\pi}^{\\pi} \\frac{\\sin^2 x}{1+e^{-x}} dx$. \n\nNow add both integrals: \n$2I = \\int_{-\\pi}^{\\pi} \\sin^2 x \\left( \\frac{1}{1+e^x} + \\frac{1}{1+e^{-x}} \\right) dx$. \n\nSince $\\frac{1}{1+e^x} + \\frac{1}{1+e^{-x}} = 1$, we get \n$2I = \\int_{-\\pi}^{\\pi} \\sin^2 x \\, dx$. \n\nThus $2I = \\pi$ and $I = \\frac{\\pi}{2}$. "
},
{
    "id": 25,
    "question": "If a function $f$ be continuous at $x=2$ and $\\lim\\limits_{h \\to 0} \\frac{f(2+h)}{h} = 7$, then the value of $f(2)$ is",
    "options": [
        "0",
        "7",
        "5",
        "2"
    ],
    "answer": 0,
    "explanation": "We are given $\\lim\\limits_{h \\to 0} \\frac{f(2+h)}{h} = 7$. For existence of this limit, this has to be $\\frac{0}{0}$ form. Thus we must have $\\lim\\limits_{h\\to 0} f(2+h)=0.$ As $f$ is continuous at $2$, it implies $f(2)=0.$"
},
{
    "id": 26,
    "question": "In a given interval, a function $f(x)$ has a local maximum at $c$. Which of the following statements is always true?",
    "options": [
        "$f(c)$ is the absolute maximum of the function in the interval.",
        "$f'(c) = 0$.",
        "$f(c)$ is greater than $f(x)$ for all $x$ in a neighborhood of $c$.",
        "$f''(c) < 0$."
    ],
    "answer": 2,
    "explanation": "At a local maximum $c$, the function $f(c)$ is greater than or equal to $f(x)$ for all $x$ in some neighborhood around $c$. This is the definition of a local maximum. The derivative may not exist at $c.$  Absolute maximum is also not guaranteed, since the function may achieve a larger value elsewhere in the interval."
},
{
    "id": 27,
    "question": "The angle between the two curves $x^2 = y$ and $y^2 = x$ at their point of intersection other than the origin is",
    "options": [
        "$\\tan^{-1} (3/4)$",
        "$\\tan^{-1} (4/3)$",
        "$\\tan^{-1} (1/2)$",
        "$\\pi/4$"
    ],
    "answer": 0,
    "explanation": "The curves intersect at the origin (0, 0) and at (1, 1). At (1, 1), slope of $x^2=y$ is $dy/dx = 2x = 2$, and slope of $y^2=x$ is $dy/dx = 1/(2y) = 1/2$. The angle $θ$ between the curves is given by $\\tan θ = |(m_1 - m_2)/(1+m_1 m_2)| = |(2 - 1/2)/(1 + 2 \\cdot 1/2)| = |(3/2)/2| = 3/4$. Hence $θ = \\tan^{-1}(3/4)$."
},
{
    "id": 28,
    "question": "Value of $\\int_{0}^{3} [|x-1| + |x-2|] dx$ is",
    "options": [
        "3",
        "5.5",
        "5",
        "6"
    ],
    "answer": 2,
    "explanation": "We split the integral at $x=1$ and $x=2$ where the absolute value changes. For $0 ≤ x < 1,$ expression $= 3-2x;$ integral $= 2.$ For $1 ≤ x < 2,$ expression $= 1;$ integral $= 1.$ For $2 ≤ x ≤ 3,$ expression $= 2x-3;$ integral $= 2.$ Adding gives $2+1+2 = 5.$"
},
{
    "id": 29,
    "question": "Singular solution of the differential equation $y = px - \\sin p$, where $p = \\frac{dy}{dx}$ is",
    "options": [
        "$y = x \\arccos x + \\sqrt{1-x^2}$",
        "$y = x \\arcsin p - \\sin p$",
        "$y = x \\arccos x - \\sqrt{1-x^2}$",
        "$y^2 = x^2 \\sin^2 x$"
    ],
    "answer": 2,
    "explanation": "We have $y = px - \\sin p$, with $p = \\frac{dy}{dx}$. Differentiating w.r.t. $p$ gives $\\frac{dy}{dp} = x - \\cos p$. For the singular solution, we require $\\frac{dy}{dp} = 0 \\implies x = \\cos p$. Substituting $x = \\cos p$ into $y = px - \\sin p$, we get $y = p \\cos p - \\sin p$. Eliminating $p$ using $x = \\cos p \\implies p = \\arccos x$, the equation becomes $y = x \\arccos x - \\sqrt{1-x^2}$. Thus the singular solution is $y = x \\arccos x - \\sqrt{1-x^2}$, which matches option (C)."
},
{
    "id": 30,
    "question": "Value of $\\iint_R xy \\, dxdy$ over the region $R$ formed by the lines $y=x$, $y=2x$ and $x=1$ is",
    "options": [
        "$\\frac{3}{4}$",
        "$\\frac{1}{2}$",
        "$\\frac{3}{8}$",
        "1"
    ],
    "answer": 2,
    "explanation": "The region $R$ is bounded by $y=x$, $y=2x$, and $x=1$. For $0 \\leq x \\leq 1$, $y$ ranges from $x$ (lower curve) to $2x$ (upper curve). Hence,\n\\[\nI = \\int_{x=0}^1 \\int_{y=x}^{2x} xy \\, dy \\, dx.\n\\]\nFirst integrate with respect to $y$:\n\\[\n\\int_x^{2x} xy \\, dy = x \\cdot \\frac{y^2}{2} \\Big|_x^{2x} = x \\cdot \\frac{(2x)^2 - x^2}{2} = x \\cdot \\frac{4x^2 - x^2}{2} = x \\cdot \\frac{3x^2}{2} = \\frac{3}{2} x^3.\n\\]\nNow integrate with respect to $x$:\n\\[\nI = \\int_0^1 \\frac{3}{2} x^3 \\, dx = \\frac{3}{2} \\cdot \\frac{x^4}{4} \\Big|_0^1 = \\frac{3}{8}.\n\\]\nThus, the correct value is $\\tfrac{3}{8}$."
},
{
    "id": 31,
    "question": "The general solution of the differential equation $x^2 \\frac{d^2y}{dx^2} - 2x \\frac{dy}{dx} + 2y = x^3$ is",
    "options": [
        "$c_1 x + c_2 x^2 + x^3$",
        "$c_1 x + c_2 x^2 + \\frac{x^3}{2}$",
        "$c_1 x + c_2 x^2 + \\frac{x^3}{3}$",
        "$c_1 x + c_2 x^2 + \\frac{x^3}{5}$"
    ],
    "answer": 1,
    "explanation": "This is a Cauchy–Euler equation. For the homogeneous part, we try $y = x^m$. Substituting gives $m(m-1) - 2m + 2 = 0 \\implies m^2 - 3m + 2 = 0 \\implies m=1,2$. Thus, the complementary solution is $y_c = c_1 x + c_2 x^2$. For the particular solution, assume $y_p = Ax^3$. Substituting: $x^2(6Ax) - 2x(3Ax^2) + 2(Ax^3) = (6A - 6A + 2A)x^3 = 2Ax^3$. Equating with RHS $x^3$, we get $2A = 1 \\implies A = \\tfrac{1}{2}$. Therefore, $y = c_1 x + c_2 x^2 + \\tfrac{x^3}{2}$."
},
{
    "id": 32,
    "question": "If the relation between displacement, velocity and time at any instant of a particle moving in a straight line be $s = \\frac{1}{2}v^2$, where symbols have usual meaning, then the acceleration of the particle will be",
    "options": [
        "proportional to $s$",
        "proportional to $v$",
        "constant",
        "inversely proportional to $v$"
    ],
    "answer": 2,
    "explanation": "We are given $s = \\tfrac{1}{2}v^2$. Differentiating both sides with respect to $s$: \n$ 1= v\\frac{dv}{ds}.$ \nSo, $a=1$, where $a = v\\tfrac{dv}{ds},$ is acceleration. Hence, the acceleration is constant."
},
{
    "id": 33,
    "question": "If $K$ be the kinetic energy of a particle of mass $m$, then its momentum $P$ is",
    "options": [
        "$\\sqrt{2mK}$",
        "$\\sqrt{mK}$",
        "$2mK$",
        "$mK^2$"
    ],
    "answer": 0,
    "explanation": "Kinetic energy is given by $K = \\tfrac{1}{2} m v^2$. The momentum is $P = mv$. Substituting $v = \\sqrt{2K/m}$, we get $P = m \\sqrt{2K/m} = \\sqrt{2mK}$. Hence, the correct answer is option (A)."
},
{
    "id": 34,
    "question": "Relation between distance from origin $x$ and velocity $v$ of a particle moving in a straight line is given by $v^2 = 4 - 2x - x^2$. Then the centre of the simple harmonic motion of the particle with respect to origin is",
    "options": [
        "ahead by a distance of 1 unit",
        "behind by a distance of 1 unit",
        "at the origin",
        "ahead by a distance of 2 units"
    ],
    "answer": 1,
    "explanation": "We have $v^2 = 4 - 2x - x^2 = -(x^2 + 2x - 4)$. Rearranging gives $v^2 = -(x^2 + 2x + 1 - 5) = 5 - (x+1)^2$. This is of the form $v^2 = \\omega^2(A^2 - (x-x_0)^2)$, which corresponds to simple harmonic motion about $x_0 = -1$. Thus, the centre of SHM is 1 unit behind the origin. <br> Or, we can differentiate wrt $x$ and get $2v\\frac{dv}{dx}= -2-2x= -2(x+1)$ or $\\ddot{x}=-(x+1).$ Comparing this with $\\ddot{x}=-\\omega^2(x-x_0)$, we see the centre is at $-1$ and $\\omega= 1.$"
},
{
    "id": 35,
    "question": "Which of the following is a convex set?",
    "options": [
        "$\\{(x, y) : x^2 + y^2 \\geq 4\\}$",
        "$\\{(x, y) : x \\geq 0, y \\geq 0, xy \\leq 1\\}$",
        "$\\{(x, y) : y \\geq x^2\\}$",
        "$\\{(x, y) : x+y\\leq 2\\}\\cup\\{(x, y) : y\\leq 0\\}$"
    ],
    "answer": 2,
    "explanation": "A convex set must contain the line segment between any two points in it. The set $y \\geq x^2$ represents the region above a parabola, which is convex. Other options either represent non-convex regions or unions that break convexity."
},
{
    "id": 36,
    "question": "In a balanced transportation problem with $m$ origins and $n$ destinations, if the number of allocated cells in a feasible solution is $m+n-1$, then the solution is",
    "options": [
        "degenerate",
        "non-degenerate",
        "optimal",
        "not feasible"
    ],
    "answer": 1,
    "explanation": "In a transportation problem, a non-degenerate basic feasible solution must have exactly $m+n-1$ allocations. Therefore, the solution is non-degenerate."
},
{
    "id": 37,
    "question": "If a relative error of the number $3.12356$ be $1 \\times 10^{-4}$, then the number of significant digits in the number is",
    "options": [
        "1",
        "2",
        "3",
        "4"
    ],
    "answer": 3,
    "explanation": "Relative error $= \\frac{\\Delta x}{x}$. If relative error $=10^{-4}$, then absolute error is approximately $3\\times 10^{-4}=0.3\\times 10^{-3}$. Thus after decimal point, 3 digits are correct. Hence number of significant figures is 4."
},
{
    "id": 38,
    "question": "If the matrix $\\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 3 & k \\end{pmatrix}$ has rank 2, then the value of $k$ is",
    "options": [
        "4",
        "5",
        "6",
        "0"
    ],
    "answer": 1,
    "explanation": "For rank 2, the determinant must vanish. Expanding gives $|A| = k-5 = 0 \\implies k=5$. Hence $k=5$."
},
{
    "id": 39,
    "question": "If for two unit vectors $\\vec{u}$ and $\\vec{v}$, $|\\vec{u} - \\vec{v}| = \\sqrt{2}$, then the value of $|\\vec{u} + \\vec{v}|$ is",
    "options": [
        "0",
        "1",
        "$\\sqrt{2}$",
        "2"
    ],
    "answer": 2,
    "explanation": "We have $|u-v|^2 = |u|^2+|v|^2-2u\\cdot v = 2-2u\\cdot v$. Given $=2$, so $u\\cdot v=0$. Then $|u+v|^2=2+2u\\cdot v=2$. Thus $|u+v|=\\sqrt{2}$."
},
{
    "id": 40,
    "question": "The mean deviation about the mean of the numbers $1, 2, 3, 4, 5$ is",
    "options": [
        "1",
        "1.2",
        "1.5",
        "2"
    ],
    "answer": 1,
    "explanation": "Mean $=3$. Deviations $=2,1,0,1,2$. Mean deviation $=\\frac{6}{5}=1.2$."
},
{
    "id": 41,
    "question": "$\\int_{0}^{2\\pi} |\\sin x| dx$ is",
    "options": [
        "0",
        "1",
        "2",
        "4"
    ],
    "answer": 3,
    "explanation": "Over $[0,\\pi]$, $\\sin x \\geq 0$, integral $=2$. Over $[\\pi,2\\pi]$, $|\\sin x|= -\\sin x$, integral $=2$. Total $=4$."
},
{
    "id": 42,
    "question": "If the equation of the line $x - y + 1 = 0$ is transformed to $Y = C$ when the coordinate axes are rotated through an angle $\\theta$, then $\\theta$ has value",
    "options": [
        "$\\frac{\\pi}{4}$",
        "$-\\frac{\\pi}{4}$",
        "$\\frac{\\pi}{6}$",
        "$-\\frac{\\pi}{3}$"
    ],
    "answer": 0,
    "explanation": "The line $x-y+1=0$ has slope 1. Rotating axes by $\\pi/4$ makes the line parallel to new $X$-axis, i.e., equation $Y=C$."
},
{
    "id": 43,
    "question": "The probability of solving a problem by 3 students A, B and C are $\\frac{1}{3}, \\frac{1}{4}$ and $\\frac{1}{5}$ respectively. The probability that the problem is solved by exactly one of them is",
    "options": [
        "$\\frac{2}{5}$",
        "$\\frac{13}{30}$",
        "$\\frac{3}{4}$",
        "$\\frac{2}{3}$"
    ],
    "answer": 1,
    "explanation": "Probability exactly one solves  $P(AB'C'+A'BC'+A'B'C)=\\frac{1}{3}\\cdot\\frac{3}{4}\\cdot\\frac{4}{5}+\\frac{2}{3}\\cdot\\frac{1}{4}\\cdot\\frac{4}{5}+\\frac{2}{3}\\cdot\\frac{3}{4}\\cdot\\frac{1}{5}=\\frac{13}{30}$."
},
{
    "id": 44,
    "question": "If the standard deviation (S.D.) of the numbers $1, 2, x$ is $\\sqrt{\\frac{2}{3}}$, then the value of $x$ is",
    "options": [
        "0",
        "3",
        "0 and 3 both",
        "1 and 5 both"
    ],
    "answer": 2,
    "explanation": "Let mean $\\bar x=\\frac{1+2+x}{3}$. Using $\\sigma^2=\\frac{\\sum x_i^2}{3}-\\bar{x}^2$ and equating to $\\frac{2}{3}$, solving gives $x=0$ or $3.$"
},
{
    "id": 45,
    "question": "Area above $x$-axis enclosed by the parabola $y^2 = 4x$ and the circle $x^2 + y^2 = 8x$ is",
    "options": [
        "$\\frac{8\\pi}{3} - \\frac{4\\sqrt{3}}{3}$",
        "$4\\pi - \\frac{32}{3}$",
        "$4\\pi + \\frac{32}{3}$",
        "$\\frac{8\\pi}{3} + \\frac{4\\sqrt{3}}{3}$"
    ],
    "answer": 1,
    "explanation": "Circle equation: $(x-4)^2+y^2=16$. Intersection with parabola gives bounded region. Evaluating integrals yields required area $=4\\pi-\\tfrac{32}{3}$. Or, use the shortcut to find the area under a parabola is equal to 2-3rd of the corresponding rectangle."
},
{
    "id": 46,
    "question": "For a complex number $z$, the number of solutions of the equation $z^4 = \\bar{z}$ is",
    "options": [
        "3",
        "4",
        "5",
        "6"
    ],
    "answer": 3,
    "explanation": "Taking modulus we get $|z|^4 = |z|$. This implies $|z|=0$ or $|z|=1.$ Clearly, $z=0$ is a solution. Now if $|z|=1$, then $\\bar z = \\frac{1}{z}.$ Then the equation becomes $z^5=1.$ It has total 5 solutions. Hence taking 0 also we have 6 solutions in total."
},
{
    "id": 47,
    "question": "The value of $\\lim\\limits_{x \\to 0} \\frac{\\sin x - x}{x^3}$ is",
    "options": [
        "$\\frac{1}{6}$",
        "$-\\frac{1}{6}$",
        "0",
        "1"
    ],
    "answer": 1,
    "explanation": "Using expansion $\\sin x=x-\\tfrac{x^3}{6}+o(x^3)$. Numerator $=-x^3/6+o(x^3)$. Divide by $x^3$: limit $=-1/6$."
},
{
    "id": 48,
    "question": "The maximum value of the function $f(x) = x^3 - 12x$ in the interval $[-3, 2]$ is",
    "options": [
        "16",
        "0",
        "11",
        "12"
    ],
    "answer": 0,
    "explanation": "Critical points: $f'(x)=3x^2-12=0\\implies x=\\pm2$. On $[-3,2]$: $f(-3)=-27+36=9$, $f(2)=-16$, $f(-2)=-8+24=16$. Max $=16$."
},
{
    "id": 49,
    "question": "The radius of convergence of the power series $\\sum\\limits_{n=0}^\\infty \\frac{x^n}{n!}$ is",
    "options": [
        "0",
        "1",
        "$\\infty$",
        "$e$"
    ],
    "answer": 2,
    "explanation": "Using ratio test: $\\lim \\frac{a_{n+1}}{a_n}=\\lim\\frac{x}{n+1}=0$. Series converges for all $x$, so radius of convergence $=\\infty$. Also note that the series is nothing but the expansion of $e^x$ which is valid for all $x\\in \\mathbb R.$"
},
{
    "id": 50,
    "question": "If $u = \\log(\\frac{x^2+y^2}{x+y})$, then $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y}$ is equal to",
    "options": [
        "$u$",
        "0",
        "1",
        "$\\log u$"
    ],
    "answer": 2,
    "explanation": "By Euler’s theorem for homogeneous functions: Numerator $x^2+y^2$ degree 2, denominator $x+y$ degree 1. So $u=\\log(f)$ where $f$ is homogeneous of degree 1. Hence $x u_x+y u_y=1$."
},
{
    "id": 51,
    "question": "The integral $\\int_0^\\infty x^3 e^{-x} dx$ has the value",
    "options": [
        "1",
        "2",
        "6",
        "24"
    ],
    "answer": 2,
    "explanation": "This is Gamma function $\\Gamma(4)=3!=6$."
},
{
    "id": 52,
    "question": "The differential equation $(2x+y)dx + (x+2y)dy = 0$ is",
    "options": [
        "exact",
        "linear",
        "homogeneous",
        "both (A) and (C)"
    ],
    "answer": 3,
    "explanation": "$M(x,y)=2x+y$, $N(x,y)=x+2y$. Check exactness: $M_y=1$, $N_x=1$. So exact. Also $\\frac{M}{N}=\\frac{2x+y}{x+2y}$ is homogeneous. Hence both."
},
{
    "id": 53,
    "question": "The characteristic roots of the matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ are",
    "options": [
        "0, 0",
        "1, 0",
        "1, 1",
        "$i, -i$"
    ],
    "answer": 2,
    "explanation": "Characteristic polynomial $(1-\\lambda)^2=0$. So roots are $1,1$."
},
{
    "id": 54,
    "question": "If $A$ is a $3 \\times 3$ matrix with $|A|=5$, then $|2A|$ is",
    "options": [
        "10",
        "20",
        "40",
        "25"
    ],
    "answer": 2,
    "explanation": "For an $n\\times n$ matrix, $|kA|=k^n|A|$. Here $n=3$, $k=2$. So $|2A|=2^3\\cdot5=40$."
},
{
    "id": 55,
    "question": "The number of positive divisors of $120$ is",
    "options": [
        "12",
        "14",
        "16",
        "18"
    ],
    "answer": 2,
    "explanation": "Prime factorization $120=2^3\\cdot3^1\\cdot5^1$. Number of divisors $(3+1)(1+1)(1+1)=16$."
},
{
    "id": 56,
    "question": "The value of $\\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\frac{1}{3\\cdot 4} + \\cdots$ is",
    "options": [
        "0",
        "1",
        "2",
        "$\\infty$"
    ],
    "answer": 1,
    "explanation": "Telescoping: $\\frac{1}{n(n+1)}=\\frac{1}{n}-\\frac{1}{n+1}$. Series sums to 1."
},
{
    "id": 57,
    "question": "If $f(x) = \\begin{cases} x \\sin(1/x) & x \\neq 0 \\\\ 0 & x = 0 \\end{cases}$, then at $x=0$, $f(x)$ is",
    "options": [
        "continuous and differentiable",
        "continuous but not differentiable",
        "not continuous",
        "differentiable but not continuous"
    ],
    "answer": 1,
    "explanation": "As $x\\to0$, $|x\\sin(1/x)|\\leq|x|\\to0$, so continuous. Derivative limit doesn’t exist due to oscillation. So continuous but not differentiable."
},
{
    "id": 58,
    "question": "The equation of the tangent to the curve $y^2=4ax$ at the point $(at^2, 2at)$ is",
    "options": [
        "$y = tx + at^2$",
        "$ty = x + at^2$",
        "$y = \\frac{x}{t} + at$",
        "$ty = x - at^2$"
    ],
    "answer": 1,
    "explanation": "General tangent: $ty=x+at^2$. So answer is $ty=x+at^2$."
},
{
    "id": 59,
    "question": "The minimum value of $f(x) = x^2 + \\frac{2}{x}$ for $x > 0$ is",
    "options": [
        "2",
        "3",
        "4",
        "1"
    ],
    "answer": 1,
    "explanation": "Derivative: $f'(x)=2x-2/x^2=0 \\implies x^3=1 \\implies x=1$. Then $f(1)=3$. Second derivative $>0$, so min=3."
},
{
    "id": 60,
    "question": "If $P(A|B) = P(A)$ then $A$ and $B$ are",
    "options": [
        "mutually exclusive events",
        "independent events",
        "dependent events",
        "complementary events"
    ],
    "answer": 1,
    "explanation": "Condition $P(A|B)=P(A)$ defines independence. Hence $A$ and $B$ are independent."
}
];

    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
