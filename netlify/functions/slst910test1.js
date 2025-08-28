exports.handler = async (event, context) => {
    const questions = [
    {
        question: "The principal value of $(-i)^i$ is",
        options: [
            "$e^{\\frac{\\pi}{2}}$",
            "$e^{-\\frac{\\pi}{2}}$",
            "$e^{\\frac{\\pi}{2}}i$",
            "$e^{-\\frac{\\pi}{2}}i$"
        ],
        answer: 0
    },
    
    {
        question: "The equation $x^3 - 6x^2 + 9x + k = 0$ will have three distinct real roots if",
        options: [
            "$-4 < k < 0$",
            "$-5 < k < 0$",
            "$0 < k < 4$",
            "$-3 < k < 3$"
        ],
        answer: 0
    },

    {
        question: "If $\\alpha, \\beta, \\gamma$ are the roots of $x^3 - px^2 + qx - r = 0$, then the value of $(\\alpha+\\beta)(\\beta+\\gamma)(\\gamma+\\alpha)$ is",
        options: [
            "$pq-r$",
            "$pr-q$",
            "$p^2q-r$",
            "$r-pq$"
        ],
        answer: 0
    },
    {
        question: "For all real values of $\\theta$, the matrix $\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}$ is",
        options: [
            "singular",
            "symmetric",
            "Hermitian",
            "orthogonal"
        ],
        answer: 3
    },
    {
        question: "Under multiplication $C[a,b]$, the set of all real valued functions on $[a,b]$ is",
        options: [
            "only semigroup",
            "monoid but not a group",
            "group",
            "not a semigroup"
        ],
        answer: 2
    },
    {
        question: "The quadratic form $2x_1^2 + x_2^2 + 3x_3^2 - 2x_1x_2 + 4x_2x_3$ is",
        options: [
            "positive definite",
            "positive semi-definite",
            "indefinite",
            "negative definite"
        ],
        answer: 2
    },
    {
        question: "Which of the following is a generator of the cyclic group $\\mathbb{Z}_6$ under addition modulo 6?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 3
    },
    {
        question: "The mapping $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^3 - x$ is",
        options: [
            "one-one but not onto",
            "one-one and onto",
            "onto but not one-one",
            "neither one-one nor onto"
        ],
        answer: 2
    },
    {
        question: "If $f: \\mathbb{R} \\to \\mathbb{R}$ is a mapping defined by $f(x) = x^2 - 5$, $x \\in \\mathbb{R}$, then the value of $f^{-1}(4)$ is",
        options: [
            "3",
            "$-3$",
            "$-3$ and 3",
            "9"
        ],
        answer: 2
    },
    {
        question: "For points on the conic $\\frac{5}{r} = 2 - \\cos\\theta$, the minimum radius vector is",
        options: [
            "5",
            "$\\frac{5}{3}$",
            "$\\frac{5}{2}$",
            "10"
        ],
        answer: 1
    },
    {
        question: "If the straight line $2x - y = k$ be normal to the parabola $y^2 = 8x$, then the value of $k$ is",
        options: [
            "24",
            "$20$",
            "$-24$",
            "$-20$"
        ],
        answer: 0
    },
    {
        question: "Co-ordinates of the pole of the straight line $x - 3y + 6 = 0$ with respect to the parabola $y^2 = 12x$ is",
        options: [
            "(18,6)",
            "(6, 18)",
            "(3, 6)",
            "(6, 3)"
        ],
        answer: 1
    },
    {
        question: "If the straight lines $\\frac{x-1}{2} = \\frac{y-2}{k} = \\frac{z-3}{1}$ and $\\frac{x-4}{1} = \\frac{y-1}{2} = \\frac{z-5}{3}$ be coplanar, then",
        options: [
            "$k=1$",
            "$k=2$",
            "$k=3$",
            "$k=-1$"
        ],
        answer: 3
    },
    {
        question: "In the equation of the plane $ax+by+cz+d=0$, if $a=c=0$, then the normal to the plane is",
        options: [
            "parallel to $x$-axis",
            "parallel to $z$-axis",
            "not parallel to any axis",
            "parallel to $y$-axis"
        ],
        answer: 3
    },
    {
        question: "The equation of the plane equidistant from the planes $x+2y-2z+1=0$ and $x+2y-2z-5=0$ is",
        options: [
            "$x+2y-2z-2=0$",
            "$x+2y-2z+2=0$",
            "$x+2y-2z-3=0$",
            "$x+2y-2z+3=0$"
        ],
        answer: 0
    },
    {
        question: "For three non-null vectors $\\vec{a}, \\vec{b}, \\vec{c}$ if $(\\vec{a} \\times \\vec{b}) \\times \\vec{c} = \\vec{a} \\times (\\vec{b} \\times \\vec{c})$, then",
        options: [
            "$\\vec{a}$ and $\\vec{b}$ are parallel",
            "$\\vec{b}$ and $\\vec{c}$ are parallel",
            "$\\vec{a}$ and $\\vec{c}$ are parallel or $\\vec{b}$ is perpendicular to the plane of $\\vec{a}$ and $\\vec{c}$",
            "$\\vec{a}$ and $\\vec{c}$ are perpendicular"
        ],
        answer: 2
    },
    {
        question: "Projection of the vector $\\vec{a} = 2\\hat{i} - \\hat{j} + 3\\hat{k}$ on $\\vec{b} = \\hat{i} + 2\\hat{j} - \\hat{k}$ is",
        options: [
            "$\\frac{3}{\\sqrt{6}}$",
            "$\\frac{3}{\\sqrt{14}}$",
            "$\\frac{2}{\\sqrt{14}}$",
            "$\\frac{2}{\\sqrt{6}}$"
        ],
        answer: 0
    },
    {
        question: "Value of $\\lim\\limits_{n \\to \\infty} \\frac{5^{n+1}+2^{n+1}}{5^n+2^n}$ is",
        options: [
            "0",
            "1",
            "2",
            "5"
        ],
        answer: 3
    },
    {
        question: "If $f(x) = x^{n+1}, n$ being a positive integer and if ' represents derivative with respect to $x$, then $f(0) + \\frac{f'(0)}{1!} + \\frac{f''(0)}{2!} + \\cdots + \\frac{f^{(n+1)}(0)}{(n+1)!}$ has value",
        options: [
            "0",
            "1",
            "$2^{n+1}$",
            "$n!$"
        ],
        answer: 1
    },
    {
        question: "Value of $\\lim\\limits_{n \\to \\infty} \\frac{1^9+2^9+3^9+\\cdots+n^9}{n^{10}}$ is",
        options: [
            "1",
            "$\\frac{1}{9}$",
            "$\\frac{1}{10}$",
            "0"
        ],
        answer: 2
    },
    {
        question: "Which of the following is true for the function $f(x) = |x^2 - 1|$ at $x=1$?",
        options: [
            "Differentiable",
            "Not continuous",
            "Continuous but not differentiable",
            "Neither continuous nor differentiable"
        ],
        answer: 2
    },
    {
        question: "For the function $x = e^{y+e^{y+\\cdots \\text{ to } \\infty}}$, $x > 0$, the value of $\\frac{dy}{dx}$ is",
        options: [
            "$\\frac{1-x}{x}$",
            "$\\frac{1+x}{x}$",
            "$\\frac{x}{1+x}$",
            "$\\frac{x}{1-x}$"
        ],
        answer: 0
    },
    {
        question: "For which value of $x$, the series $1 + \\frac{x}{1} + \\frac{x^2}{2} + \\frac{x^3}{3} + \\cdots$, $x > 0$ is divergent?",
        options: [
            "$x < 1$",
            "$x = 1$",
            "$0 < x < 1$",
            "$x \\leq 1$"
        ],
        answer: 1
    },
    {
        question: "The value of $\\int_{-\\pi}^{\\pi} \\frac{\\sin^2 x}{1+e^x} dx$ is",
        options: [
            "$\\pi$",
            "$\\frac{\\pi}{2}$",
            "$\\pi^2$",
            "0"
        ],
        answer: 1
    },
    {
        question: "If a function $f$ be continuous at $x=2$ and $\\lim\\limits_{h \\to 0} \\frac{f(2+h)}{h} = 7$, then the value of $f(2)$ is",
        options: [
            "0",
            "7",
            "5",
            "2"
        ],
        answer: 0
    },
    {
        question: "In a given interval, a function $f(x)$ has a local maximum at $c$. Which of the following statements is always true?",
        options: [
            "$f(c)$ is the absolute maximum of the function in the interval.",
            "$f'(c) = 0$.",
            "$f(c)$ is greater than $f(x)$ for all $x$ in a neighborhood of $c$.",
            "$f''(c) < 0$."
        ],
        answer: 2
    },
    {
        question: "The angle between the two curves $x^2 = y$ and $y^2 = x$ at their point of intersection other than the origin is",
        options: [
            "$\\tan^{-1} (3/5)$",
            "$\\tan^{-1} (4/3)$",
            "$\\tan^{-1} (1/2)$",
            "$\\pi/4$"
        ],
        answer: 0
    },
   
    {
        question: "Value of $\\int_{0}^{3} [|x-1| + |x-2|] dx$ is",
        options: [
            "3",
            "5.5",
            "5",
            "6"
        ],
        answer: 2
    },
    {
        question: "Singular solution of the differential equation $y = px - \\sin p$, where $p = \\frac{dy}{dx}$ is",
        options: [
            "$y = x \\arccos x x + \\sqrt{1-x^2}$",
            "$y = x \\arcsin p - \\sin p$",
            "$y = x \\arccos x - \\sqrt{1-x^2}$",
            "$y^2 = x^2 \\sin^2 x$"
        ],
        answer: 0
    },
    {
        question: "Value of $\\iint_R xy \\, dxdy$ over the region $R$ formed by the lines $y=x$, $y=2x$ and $x=1$ is",
        options: [
            "$\\frac{3}{4}$",
            "$\\frac{1}{2}$",
            "$\\frac{3}{8}$",
            "1"
        ],
        answer: 2
    },
    {
        question: "The general solution of the differential equation $x^2 \\frac{d^2y}{dx^2} - 2x \\frac{dy}{dx} + 2y = x^3$ is",
        options: [
            "$c_1 x + c_2 x^2 + x^3$",
            "$c_1 x + c_2 x^2 + \\frac{x^3}{2}$",
            "$c_1 x + c_2 x^2 + \\frac{x^3}{3}$",
            "$c_1 x + c_2 x^2 + \\frac{x^3}{5}$"
        ],
        answer: 1
    },
 
    {
        question: "If the relation between displacement, velocity and time at any instant of a particle moving in a straight line be $s = \\frac{1}{2}v^2$, where symbols have usual meaning, then the acceleration of the particle will be",
        options: [
            "proportional to $s$",
            "proportional to $v$",
            "constant",
            "inversely proportional to $v$"
        ],
        answer: 2
    },
   
    {
        question: "If $K$ be the kinetic energy of a particle of mass $m$, then its momentum $P$ is",
        options: [
            "$\\sqrt{2mK}$",
            "$\\sqrt{mK}$",
            "$2mK$",
            "$mK^2$"
        ],
        answer: 0
    },
    {
        question: "Relation between distance from origin $x$ and velocity $v$ of a particle moving in a straight line is given by $v^2 = 4 - 2x - x^2$. Then the centre of the simple harmonic motion of the particle with respect to origin is",
        options: [
            "ahead by a distance of 1 unit",
            "behind by a distance of 1 unit",
            "at the origin",
            "ahead by a distance of 2 units"
        ],
        answer: 1
    },
   
    {
        question: "Which of the following is a convex set?",
        options: [
            "$\\{(x, y) : x^2 + y^2 \\geq 4\\}$",
            "$\\{(x, y) : x \\geq 0, y \\geq 0, xy \\leq 1\\}$",
            "$\\{(x, y) : y \\geq x^2\\}$", 
            "$\\{(x, y) : x+y\\leq 2\\}\\cup\\{(x, y) : y\\leq 0\\}$"
        ],
        answer: 2
    },
    {
        question: "In a balanced transportation problem with $m$ origins and $n$ destinations, if the number of allocated cells in a feasible solution is $m+n-1$, then the solution is",
        options: [
            "degenerate",
            "non-degenerate",
            "optimal",
            "not feasible"
        ],
        answer: 1
    },
    {
        question: "If a relative error of the number $3.12356$ be $1 \\times 10^{-4}$, then the number of significant digits in the number is",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: 3
    },
    {
        question: "If the matrix $\\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 3 & k \\end{pmatrix}$ has rank 2, then the value of $k$ is",
        options: [
            "4",
            "5",
            "6",
            "0"
        ],
        answer: 1
    },
    {
        question: "If for two unit vectors $\\vec{u}$ and $\\vec{v}$, $|\\vec{u} - \\vec{v}| = \\sqrt{2}$, then the value of $|\\vec{u} + \\vec{v}|$ is",
        options: [
            "0",
            "1",
            "$\\sqrt{2}$",
            "2"
        ],
        answer: 2
    },
    {
        question: "The mean deviation about the mean of the numbers $1, 2, 3, 4, 5$ is",
        options: [
            "1",
            "1.2",
            "1.5",
            "2"
        ],
        answer: 1
    },
    {
        question: "$\\int_{0}^{2\\pi} |\\sin x| dx$ is",
        options: [
            "0",
            "1",
            "2",
            "4"
        ],
        answer: 3
    },
    {
        question: "If the equation of the line $x - y + 1 = 0$ is transformed to $Y = C$ when the coordinate axes are rotated through an angle $\\theta$, then $\\theta$ has value",
        options: [
            "$\\frac{\\pi}{4}$",
            "$-\\frac{\\pi}{4}$",
            "$\\frac{\\pi}{6}$",
            "$-\\frac{\\pi}{3}$"
        ],
        answer: 0
    },
    {
        question: "The probability of solving a problem by 3 students A, B and C are $\\frac{1}{3}, \\frac{1}{4}$ and $\\frac{1}{5}$ respectively. The probability that the problem is solved by exactly one of them is",
        options: [
            "$\\frac{2}{5}$",
            "$\\frac{13}{30}$",
            "$\\frac{3}{4}$",
            "$\\frac{2}{3}$"
        ],
        answer: 1
    },
    {
        question: "If the standard deviation (S.D.) of the numbers $1, 2, x$ is $\\sqrt{2}$, then the value of $x$ is",
        options: [
            "0",
            "5",
            "0 and 5 both",
            "1 and 3 both"
        ],
        answer: 2
    },
   
    {
        question: "Area above $x$-axis enclosed by the parabola $y^2 = 4x$ and the circle $x^2 + y^2 = 8x$ is",
        options: [
            "$\\frac{8\\pi}{3} - \\frac{4\\sqrt{3}}{3}$",
            "$4\\pi - \\frac{32}{3}$",
            "$4\\pi + \\frac{32}{3}$",
            "$\\frac{8\\pi}{3} + \\frac{4\\sqrt{3}}{3}$"
        ],
        answer: 1
    },
    {
        question: "For a complex number $z$, the number of solutions of the equation $z^4 = \\bar{z}$ is",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        answer: 3
    },
    
    {
        question: "The value of $\\lim\\limits_{x \\to 0} \\frac{\\sin x - x}{x^3}$ is",
        options: [
            "$\\frac{1}{6}$",
            "$-\\frac{1}{6}$",
            "0",
            "1"
        ],
        answer: 1
    },
    {
        question: "The maximum value of the function $f(x) = x^3 - 12x$ in the interval $[-3, 2]$ is",
        options: [
            "16",
            "0",
            "11",
            "12"
        ],
        answer: 0
    },
    {
        question: "The radius of convergence of the power series $\\sum\\limits_{n=0}^\\infty \\frac{x^n}{n!}$ is",
        options: [
            "0",
            "1",
            "$\\infty$",
            "$e$"
        ],
        answer: 2
    },
    {
        question: "If $u = \\log(\\frac{x^2+y^2}{x+y})$, then $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y}$ is equal to",
        options: [
            "$u$",
            "0",
            "1",
            "$\\log u$"
        ],
        answer: 2
    },
    {
        question: "The integral $\\int_0^\\infty x^3 e^{-x} dx$ has the value",
        options: [
            "1",
            "2",
            "6",
            "24"
        ],
        answer: 2
    },
    {
        question: "The differential equation $(2x+y)dx + (x+2y)dy = 0$ is",
        options: [
            "exact",
            "linear",
            "homogeneous",
            "both (A) and (C)"
        ],
        answer: 3
    },
    {
        question: "The characteristic roots of the matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ are",
        options: [
            "0, 0",
            "1, 0",
            "1, 1",
            "$i, -i$"
        ],
        answer: 2
    },
    {
        question: "If $A$ is a $3 \\times 3$ matrix with $|A|=5$, then $|2A|$ is",
        options: [
            "10",
            "20",
            "40",
            "25"
        ],
        answer: 2
    },
    {
        question: "The number of positive divisors of $120$ is",
        options: [
            "12",
            "14",
            "16",
            "18"
        ],
        answer: 2
    },
    {
        question: "The value of $\\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\frac{1}{3\\cdot 4} + \\cdots$ is",
        options: [
            "0",
            "1",
            "2",
            "$\\infty$"
        ],
        answer: 1
    },
    {
        question: "If $f(x) = \\begin{cases} x \\sin(1/x) & x \\neq 0 \\\\ 0 & x = 0 \\end{cases}$, then at $x=0$, $f(x)$ is",
        options: [
            "continuous and differentiable",
            "continuous but not differentiable",
            "not continuous",
            "differentiable but not continuous"
        ],
        answer: 1
    },
    {
        question: "The equation of the tangent to the curve $y^2=4ax$ at the point $(at^2, 2at)$ is",
        options: [
            "$y = tx + at^2$",
            "$ty = x + at^2$",
            "$y = \\frac{x}{t} + at$",
            "$ty = x - at^2$"
        ],
        answer: 1
    },
 
    {
        question: "The minimum value of $f(x) = x^2 + \\frac{2}{x}$ for $x > 0$ is",
        options: [
            "2",
            "3",
            "4",
            "1"
        ],
        answer: 1
    },
    {
        question: "If $P(A|B) = P(A)$ then $A$ and $B$ are",
        options: [
            "mutually exclusive events",
            "independent events",
            "dependent events",
            "complementary events"
        ],
        answer: 1
    },
    
];
    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
