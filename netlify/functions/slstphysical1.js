exports.handler = async (event, context) => {

    const questions = [
  {
    question: "A body starts from rest with uniform acceleration $a$. Its velocity after $n$ seconds is $v$. The displacement of the body in the last 2 seconds is:",
    options: ["$\\frac{2v(n+1)}{n}$", "$\\frac{v(2n+1)}{n}$", "$\\frac{v(n-1)}{n}$", "$\\frac{2v(n-1)}{n}$"],
    answer: 3
  },
  {
    question: "A projectile is fired with a velocity $v_0$ at an angle $\\theta$ with the horizontal. The magnitude of the change in velocity of the particle after it reaches the highest point is:",
    options: ["$ v_0 \\cos\\theta $", "$ v_0 \\sin\\theta $", "$ v_0(1-\\cos\\theta) $", "$ v_0 $"],
    answer: 1
  },
  {
    question: "A particle of mass $m$ is moving in a circular path of radius $r$ with a constant speed $v$. The work done by the centripetal force on the particle is:",
    options: ["mvr", "$ mv^2/r $", "zero", "$ mvr/2 $"],
    answer: 2
  },
  {
    question: "A block of mass $M$ is placed on a rough horizontal surface. A force $F$ is applied to the block at an angle $\\theta$ with the horizontal. If the coefficient of friction is $\\mu$, the minimum force required to move the block is:",
    options: ["$ \\frac{\\mu Mg}{\\cos\\theta - \\mu\\sin\\theta} $", "$ \\frac{\\mu Mg}{\\cos\\theta + \\mu\\sin\\theta} $", "$ \\mu Mg $", "$ \\mu M g(\\cos\\theta - \\sin\\theta) $"],
    answer: 1
  },
  {
    question: "A body of mass $m$ is placed on the top of a hemisphere of radius $R$. The minimum horizontal velocity that must be imparted to the body at the top so that it just leaves the surface is:",
    options: ["$ \\sqrt{gR/2} $", "$ \\sqrt{gR} $", "$ \\sqrt{2gR} $", "$ 2\\sqrt{gR} $"],
    answer: 1
  },
  {
    question: "The ratio of the escape velocity to the orbital velocity for a particle projected from the surface of Earth is:",
    options: ["$ \\sqrt{2} $", "$ 1/\\sqrt{2} $", "2", "1"],
    answer: 0
  },
  {
    question: "A spherical ball of mass $m$ and radius $r$ is falling in a viscous liquid. The viscous force acting on the ball is proportional to:",
    options: ["$r$", "$ r^2 $", "$ 1/r $", "$ 1/r^2 $"],
    answer: 0
  },
  {
    question: "An ideal gas is compressed to half its initial volume by means of several processes. Which of the process results in the maximum work done on the gas?",
    options: ["Isobaric", "Isochoric", "Isothermal", "Adiabatic"],
    answer: 3
  },
  {
    question: "A Carnot engine has an efficiency of 50% when its sink is at a temperature of 300 K. The temperature of the source is:",
    options: ["300 K", "450 K", "600 K", "150 K"],
    answer: 2
  },
  {
    question: "The fundamental frequency of a string stretched between two rigid supports is $f$. If the length of the string is doubled and the tension is quadrupled, the new fundamental frequency will be:",
    options: ["$f$", "$\\frac{f}{2}$", "$2f$", "$4f$"],
    answer: 0
  },
  {
    question: "A sound wave of frequency $f$ is traveling in a medium with speed $v$. If the frequency is doubled, the speed of the wave will be:",
    options: ["$v$", "$2v$", "$v/2$", "$4v$"],
    answer: 0
  },
  {
    question: "The magnifying power of a telescope is 9. When it is adjusted for parallel rays, the distance between the objective and the eyepiece is 20 cm. The focal length of the objective lens is:",
    options: ["9 cm", "18 cm", "20 cm", "11 cm"],
    answer: 1
  },
  {
    question: "A convex lens of focal length $f$ is cut into two halves along its principal axis. The two halves are then separated by a distance $d$. The focal length of each half is:",
    options: ["$f$", "$2f$", "$f/2$", "$4f$"],
    answer: 0
  },
  {
    question: "The resolving power of a microscope is dependent on:",
    options: ["The wavelength of the light used", "The focal length of the objective lens", "The diameter of the objective lens", "All of the above"],
    answer: 3
  },
  {
    question: "Two charges $q_1$ and $q_2$ are separated by a distance $r$. The electrostatic force between them is $F$. If the distance is doubled, the force will be:",
    options: ["$2F$", "$F/2$", "$4F$", "$F/4$"],
    answer: 3
  },
  {
    question: "A parallel plate capacitor has a capacitance $C$. If the distance between the plates is doubled and a dielectric medium of dielectric constant $K$ is introduced, the new capacitance will be:",
    options: ["$2KC$", "$KC/2$", "$C/2K$", "$C/K$"],
    answer: 1
  },
  {
    question: "Potentiometer measures potential more accurately because",
    options: ["it measures potential in the open circuit", "it uses sensitive galvanometer for null deflection", ") it uses high resistance potentiometer wire", "it measures potential in the closed circuit"],
    answer: 0
  },
  {
    question: "A fuse wire is a wire of:",
    options: ["High resistance and high melting point", "High resistance and low melting point", "Low resistance and high melting point", "Low resistance and low melting point"],
    answer: 1
  },
  {
    question: "The magnetic field at the center of a circular coil carrying current is $B$. If the radius of the coil is doubled and the current is halved, the new magnetic field will be:",
    options: ["$B/2$", "$B/4$", "$B$", "$2B$"],
    answer: 1
  },
  {
    question: "A solenoid has $N$ turns and a length $L$. It carries a current $I$. The magnetic field inside the solenoid is:",
    options: ["Directly proportional to $N$", "Directly proportional to $I$", "Inversely proportional to $L$", "All of the above"],
    answer: 3
  },
  {
    question: "A charged particle enters a uniform magnetic field at an angle of $90^\\circ$. The path of the particle will be a:",
    options: ["Straight line", "Circle", "Parabola", "Helix"],
    answer: 1
  },
  {
    question: "A step-up transformer converts:",
    options: ["Low voltage, high current to high voltage, low current", "High voltage, low current to low voltage, high current", "Low voltage, low current to high voltage, high current", "High voltage, high current to low voltage, low current"],
    answer: 0
  },
  {
    question: "A pure inductor of inductance $L$ is connected to an AC source of frequency $f$. The inductive reactance of the inductor is:",
    options: ["$ 2\\pi fL $", "$ 2\\pi f/L $", "$ L/(2\\pi f) $", "$ f/(2\\pi L) $"],
    answer: 0
  },
  {
    question: "A photoelectric cell is a device that converts:",
    options: ["Light energy into electrical energy", "Electrical energy into light energy", "Heat energy into electrical energy", "Electrical energy into mechanical energy"],
    answer: 0
  },
  {
    question: "The de Broglie wavelength of a particle is:",
    options: ["Proportional to its momentum", "Inversely proportional to its momentum", "Proportional to its kinetic energy", "Independent of its momentum"],
    answer: 1
  },
  {
    question: "The half-life of a radioactive substance is $T$. After a time of $2T$, the fraction of the substance remaining will be:",
    options: ["1/2", "1/4", "1/8", "1/16"],
    answer: 1
  },
  {
    question: "A nuclear reactor is a device used to:",
    options: ["Generate electricity from nuclear fission", "Generate electricity from nuclear fusion", "Produce radioactive isotopes", "All of the above"],
    answer: 0
  },
  {
    question: "The depletion region in a $p$-$n$ junction diode is formed due to:",
    options: ["Diffusion of charge carriers", "Drift of charge carriers", "Recombination of charge carriers", "All of the above"],
    answer: 0
  },
  {
    question: "A zener diode is a special type of diode that is designed to operate in:",
    options: ["Forward bias", "Reverse bias", "Both forward and reverse bias", "Neither forward nor reverse bias"],
    answer: 1
  },
  {
    question: "The logic gate that produces a high output only when all of its inputs are high is:",
    options: ["OR gate", "AND gate", "NOT gate", "NAND gate"],
    answer: 1
  },
  {
    question: "The number of moles of water of crystallization in hydrated copper sulfate ($ CuSO_4 \\cdot xH_2O $) is 5. What is the value of $x$?",
    options: ["2", "3", "5", "7"],
    answer: 2
  },
  {
    question: "The number of sigma ($\\sigma$) and pi ($\\pi$) bonds in an acetylene molecule $(C_2H_2)$ are:",
    options: ["2 $\\sigma$, 2 $\\pi$", "3 $\\sigma$, 2 $\\pi$", "2 $\\sigma$, 3 $\\pi$", "3 $\\sigma$, 3 $\\pi$"],
    answer: 1
  },
  {
    question: "Which of the following has the highest bond order?",
    options: ["$ O_2 $", "$ N_2 $", "$ H_2 $", "$ C_2 $"],
    answer: 1
  },
  {
    question: "The correct order of decreasing first ionization energy is:",
    options: ["Li > Be > B > C", "C > Be > B > Li", "B > Be > Li > C", "C > Li > Be > B"],
    answer: 1
  },
  {
    question: "The hybridization of the central atom in $ XeF_4 $ is:",
    options: ["$ sp^3 $", "$ sp^3d $", "$ sp^3d^2 $", "$ sp^2 $"],
    answer: 2
  },
  {
    question: "One would expect proton to have very large",
    options: ["Charge", "Ionization potential", "Hidration energy", "Radius"],
    answer: 2
  },
  {
    question: "The oxidation state of sulfur in $ H_2SO_5 $ (peroxomonosulfuric acid) is:",
    options: ["+4", "+6", "+8", "+2"],
    answer: 1
  },
  {
    question: "The number of unpaired electrons in a $ Fe^{3+} $ ion is:",
    options: ["3", "4", "5", "6"],
    answer: 2
  },
  {
    question: "The most basic among the following is:",
    options: ["$ CH_3NH_2 $", "$ (CH_3)_2NH $", "$ (CH_3)_3N $", "$ NH_3 $"],
    answer: 1
  },
  {
    question: "The correct statement regarding electrophile is:",
    options: ["Electrophile is a negatively charged species and can form a bond by accepting a pair of electrons from another electrophile", "Electrophiles are generally neutral species and can form a bond by accepting a pair of electrons from a nucleophile", "Electrophile can be either neutral or positively charged species and can form a bond by accepting a pair of electrons from a nucleophile", "Electrophile is a negatively charged species and can form a bond by accepting a pair of electrons from a nucleophile"],
    answer: 2
  },
  {
    question: "Which of the following is a primary alcohol?",
    options: ["2-methyl-2-butanol", "3-methyl-2-butanol", "2-methyl-1-butanol", "3-pentanol"],
    answer: 2
  },
  {
    question: "The reaction of an aldehyde with Tollens' reagent gives a silver mirror. This test is used to distinguish aldehydes from:",
    options: ["Ketones", "Alcohols", "Carboxylic acids", "Ethers"],
    answer: 0
  },
  {
    question: "Which of the following is a condensation polymer?",
    options: ["Polyethylene", "Polypropylene", "PVC", "Nylon 6,6"],
    answer: 3
  },
  {
    question: "The compound that gives a positive carbylamine test is:",
    options: ["A primary amine", "A secondary amine", "A tertiary amine", "All of the above"],
    answer: 0
  },
  {
    question: "The number of $d$-electrons in $Fe^{2+} ~(Z = 26)$ is not equal to the number of electrons in which one of the following?",
    options: ["$p$-electrons in $Cl(Z = 17)$", "$d$-electrons in $Fe(Z = 26)$", "$p$-electrons in $Ne(Z = 10)$", "$s$-electrons in $Mg(Z = 12)$"],
    answer: 0
  },
  {
    question: "The acid used to prepare a buffer solution with its conjugate base is:",
    options: ["HCl", "$ H_2SO_4 $", "$ CH_3COOH $", "$ HNO_3 $"],
    answer: 2
  },
  {
    question: "The equilibrium constant for the reaction $ N_2O_4(g) \\rightleftharpoons 2NO_2(g) $ is $K$. The equilibrium constant for the reaction $ 2NO_2(g) \\rightleftharpoons N_2O_4(g) $ is:",
    options: ["$1/K$", "$ K^2 $", "$ 1/\\sqrt{K} $", "$ \\sqrt{K} $"],
    answer: 0
  },
  {
    question: "A first-order reaction has a rate constant of $ 6.93 \\times 10^{-3} s^{-1} $. The half-life of the reaction is:",
    options: ["100 s", "200 s", "50 s", "1000 s"],
    answer: 0
  },
  {
    question: "The change in entropy for an irreversible process in a thermodynamic system is:",
    options: ["Positive", "Negative", "Zero", "Cannot be determined"],
    answer: 0
  },
  {
    question: "The standard electrode potential of a cell is positive. This means that the reaction is:",
    options: ["Spontaneous", "Non-spontaneous", "At equilibrium", "Cannot be determined"],
    answer: 0
  },
  {
    question: "The SI unit of molar conductivity is:",
    options: ["$ S cm^2 mol^{-1} $", "$ S m^2 mol^{-1} $", "$ S cm^{-1} mol^{-1} $", "$ S m^{-1} mol^{-1} $"],
    answer: 1
  },
  {
    question: "The common ion effect is a phenomenon that describes the decrease in the solubility of a sparingly soluble salt when:",
    options: ["A common ion is added to the solution", "The temperature is increased", "The pressure is increased", "The pH of the solution is changed"],
    answer: 0
  },
  {
    question: "The reaction of zinc with methanolic NaOH reduces nitrobenzene to:",
    options: ["Aniline", "Phenylhydroxylamine", "Azobenzene", "p-aminophenol"],
    answer: 1
  },
  {
    question: "The number of atoms in a unit cell of a body-centered cubic (BCC) crystal is:",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "The most stable carbonium ion among the following is:",
    options: ["$ CH_3^+ $", "$ CH_3CH_2^+ $", "$ (CH_3)_2CH^+ $", "$ (CH_3)_3C^+ $"],
    answer: 3
  },
  {
    question: "Which one of the following elements is unable to form an ion?",
    options: ["$Ga$", "$Al$", "$In$", "$B$"],
    answer: 3
  },
  {
    question: "The number of atoms of oxygen in 1 mole of ozone ($ O_3 $) is:",
    options: ["$ 6.022 \\times 10^{23} $", "$ 1.806 \\times 10^{24} $", "$ 3.011 \\times 10^{23} $", "$ 1.204 \\times 10^{24} $"],
    answer: 1
  },
  {
    question: "The empirical formula of a compound is $ CH_2O $. If its molar mass is 180 g/mol, the molecular formula is:",
    options: ["$ C_6H_{12}O_6 $", "$ C_3H_6O_3 $", "$ C_2H_4O_2 $", "$ C_4H_8O_4 $"],
    answer: 0
  },
  {
    question: "The normality of a 0.5 M solution of $ H_2SO_4 $ is:",
    options: ["0.5 N", "1.0 N", "2.0 N", "0.25 N"],
    answer: 1
  },
  {
    question: "The correct order of boiling points for the following compounds is:",
    options: ["Butan-1-ol > Butan-2-ol > Butanal > Butane", "Butan-2-ol > Butan-1-ol > Butanal > Butane", "Butanal > Butan-1-ol > Butan-2-ol > Butane", "Butane > Butanal > Butan-2-ol > Butan-1-ol"],
    answer: 0
  }
];
    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
