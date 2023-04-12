const subjects = [
    {
        //Computer Science General
        question: "What is the primary function of a compiler?",
        answers: [ 
            { text: "To translate high-level programming languages into machine code", correct: true},
            { text: "To translate machine code into high-level programming languages", correct: false},
            { text: "To debug code", correct: false},
            { text: "To optimize code for faster execution", correct: false},
        ],

        question: "Which data structure is best suited for implementing a stack?",
        answers: [
            { text: "Array", correct: false},
            { text: "Linked List", correct: true },
            { text: "Queue", correct: false},
            { text: "Tree", correct: false},
        ],

        question: "Which of the following is NOT a type of loop?",
        answers: [
            { text: "While loop", correct: false},
            { text: "For loop", correct: false},
            { text: "Do-while loop", correct: false},
            { text: "Switch loop", correct: true},
        ],

        question: "Which sorting algorithm has the worst time complexity?",
        answers: [
            { text: "Bubble sort", correct: true},
            { text: "Insertion sort", correct: false},
            { text: "Selection sort", correct: false},
            { text: "Quick sort", correct: false},
        ],

        question: "Which of the following is NOT an example of a network protocol?",
        answers: [
            { text: "TCP/IP", correct: false},
            { text: "HTTP", correct: false},
            { text: "FTP", correct: false},
            { text: "HTML", correct: true},
        ],

        question: "Which of the following data structures is used to implement a priority queue?",
        answers: [
            { text: "Stack", correct: false},
            { text: "Queue", correct: false},
            { text: "Tree", correct: true},
            { text: "Hash Table", correct: false},
        ],

        question: "What is the difference between a binary tree and a binary search tree?",
        answers: [
            { text: "A binary tree can have duplicate values, while a binary search tree cannot", correct: false},
            { text: "A binary search tree has the property that the left child is always less than the parent, while the right child is always greater than the parent", correct: true},
            { text: "A binary tree is always balanced, while a binary search tree is not", correct: false},
            { text: "A binary search tree is a type of binary tree", correct: false},
        ],

        question: "What is the difference between an interpreter and a compiler?",
        answers: [
            { text: "An interpreter translates code into machine code, while a compiler executes code directly", correct: false},
            { text: "A compiler translates code into machine code, while an interpreter executes code directly", correct: true},
            { text: "An interpreter is faster than a compiler", correct: false},
            { text: "A compiler is easier to use than an interpreter", correct: false},
        ],

        question: "What is an API?",
        answers: [
            { text: "An acronym for \"Application Performance Interface\"", correct: false},
            { text: "A type of programming language", correct: false},
            { text: "A set of functions and procedures that allow the creation of applications that access the features or data of an operating system, application, or other service", correct: true},
            { text: "A database management system", correct: false},
        ],

        question: "Which of the following is NOT a fundamental data type in Python?",
        answers: [
            { text: "Integer", correct: false},
            { text: "Float", correct: false},
            { text: "String", correct: false},
            { text: "Complex", correct: true},
        ],

        question: "Which of the following is an example of a non-deterministic algorithm?",
        answers: [
            { text: "Dijkstra's algorithm", correct: false},
            { text: "Prim's algorithm", correct: false},
            { text: "Kruskal's algorithm", correct: false},
            { text: "Monte Carlo algorithm", correct: true},
        ],

        question: "Which of the following is NOT a type of database normalization?",
        answers: [
            { text: "First normal form", correct: false},
            { text: "Second normal form", correct: false},
            { text: "Third normal form", correct: false},
            { text: "Fourth normal form", correct: true},
        ],

        question: "Which of the following algorithms is used to find the longest common subsequence of two strings?",
        answers: [
            { text: "Breadth-first search", correct: false},
            { text: "Depth-first search", correct: false},
            { text: "Dijkstra's algorithm", correct: false},
            { text: "Longest Common Subsequence algorithm", correct: true},
        ],

        question: "Which of the following is a property of a recursive function?",
        answers: [
            { text: "It must have a base case", correct: true},
            { text: "It must have a loop", correct: false},
            { text: "It must have a return statement", correct: false},
            { text: "It must have an iterative counterpart", correct: false},
        ],

        question: "Which of the following is NOT a type of machine learning?",
        answers: [
            { text: "Supervised learning", correct: false},
            { text: "Unsupervised learning", correct: false},
            { text: "Reinforcement learning", correct: false},
            { text: "Parallel learning", correct: true},
        ]
    },
    {
        //Engineering
        question: "What is the term used to describe the ratio of output power to input power in an electrical circuit?",
        answers: [
            { text: "Current", correct: false},
            { text: "Resistance", correct: false},
            { text: "Voltage", correct: false},
            { text: "Efficiency", correct: true},
        ],

        question: "What is the term used to describe the ratio of force to area in a mechanical system?",
        answers: [
            { text: "Velocity", correct: false},
            { text: "Acceleration", correct: false},
            { text: "Pressure", correct: true},
            { text: "Torque",correct: false},
        ],

        question: "What is the process called when a solid changes directly to a gas without going through the liquid phase?",
        answers: [
            { text: "Sublimation", correct: true},
            { text: "Melting", correct: false},
            { text: "Evaporation", correct: false},
            { text: "Condensation",correct: false},
        ],

        question: "What is the process called when a liquid changes to a gas?",
        answers: [
            { text: "Sublimation", correct: false},
            { text: "Melting", correct: false},
            { text: "Evaporation", correct: true},
            { text: "Condensation", correct: false},
        ],

        question: "What is the unit used to measure force in the International System of Units (SI)?",
        answers: [
            { text: "Joule", correct: false},
            { text: "Newton", correct: true},
            { text: "Watt", correct: false},
            { text: "Ampere", correct: false},
        ],

        question: "What is the term used to describe the amount of energy stored in a material when it is deformed?",
        answers: [
            { text: "Strain", correct: false},
            { text: "Stress", correct: false},
            { text: "Torsion", correct: false},
            { text: "Elasticity", correct: true},
        ],

        question: "Which law states that the total pressure of a gas mixture is equal to the sum of the partial pressures of each component in the mixture?",
        answers: [
            { text: "Boyle's law", correct: false},
            { text: "Charles's law", correct: false},
            { text: "Avogadro's law", correct: false},
            { text: "Dalton's law", correct: true},
        ],

        question: "What is the process called when a gas changes directly to a solid without going through the liquid phase?",
        answers: [
            { text: "Condensation", correct: false},
            { text: "Freezing", correct: false},
            { text: "Deposition", correct: true},
            { text: "Vaporization",correct: false},
        ],

        question: "What is the term used to describe the ratio of the actual mechanical advantage of a machine to its theoretical mechanical advantage?",
        answers: [
            { text: "Efficiency", correct: true},
            { text: "Power", correct: false},
            { text: "Work", correct: false},
            { text: "Friction", correct: false},
        ],

        question: "What is the term used to describe the amount of heat required to raise the temperature of one gram of a substance by one degree Celsius?",
        answers: [
            { text: "Heat Capacity", correct: false},
            { text: "Enthalpy", correct: false},
            { text: "Entropy", correct: false},
            { text: "Specific heat capacity", correct: true},
        ],

        question: "What is the term used to describe the bending of light as it passes through a medium with a varying refractive index?",
        answers: [
            { text: "Diffraction", correct: false},
            { text: "Dispersion", correct: false},
            { text: "Interference", correct: false},
            { text: "Refraction", correct: true},
        ],
        question: "Which thermodynamic process occurs when heat is added to a system and work is done by the system on its surroundings?",
        answers: [
            { text: "Isobaric process", correct: false},
            { text: "Isothermal process", correct: false},
            { text: "Adiabatic process", correct: true},
            { text: "Isochoric process", correct: false},
        ],
        question: "What is the term used to describe the tendency of a force to rotate an object about an axis?",
        answers: [
            { text: "Torque", correct: true},
            { text: "Energy", correct: false},
            { text: "Power", correct: false},
            { text: "Work", correct: false},
        ],
        question: "What is the term used to describe the rate of change of angular velocity with respect to time?",
        answers: [
            { text: "Angular displacement", correct: false},
            { text: "Angular velocity", correct: false},
            { text: "Angular acceleration", correct: true},
            { text: "Linear accelration", correct: false},
        ],
        question: "What is the term used to describe the resistance of a fluid to flow?",
        answers: [
            { text: "Viscosity", correct: true},
            { text: "Tensile strength", correct: false}, 
            { text: "Surface tension", correct: false},
            { text: "Cohesion", correct: false},
        ]
    },
    {
        //Physics
        question: "What is the term used to describe the amount of matter in an object?",
        answers: [
            { text: "Weight", correct: false},
            { text: "Mass", correct: true},
            { text: "Volume", correct: false},
            { text: "Density", correct: false},
        ],

        question: "What is the term used to describe the amount of work done on an object per unit of time?",
        answers: [
            { text: "Work", correct: false},
            { text: "Power", correct: true},
            { text: "Energy", correct: false},
            { text: "Force", correct: false},
        ],

        question: "What is the term used to describe the force that opposes motion between two surfaces in contact?",
        answers: [
            { text: "Friction", correct: true},
            { text: "Gravity", correct: false},
            { text: "Inertia", correct: false},
            { text: "Acceleration", correct: false},
        ],

        question: "What is the term used to describe the transfer of thermal energy from one object to another due to a difference in temperature?",
        answers: [
            { text: "Convection", correct: false},
            { text: "Radiation", correct: false},
            { text: "Conduction", correct: true},
            { text: "Expansion", correct: false},
        ],

        question: "What is the term used to describe the amount of matter in a given volume of a substance?",
        answers: [
            { text: "Mass", correct: false},
            { text: "Density", correct: true},
            { text: "Volume", correct: false},
            { text: "Weight", correct: false},
        ],

        question: "What is the term used to describe the force required to accelerate an object with mass?",
        answers: [
            { text: "Inertia", correct: false},
            { text: "Friction", correct: false},
            { text: "Gravity", correct: false},
            { text: "Force", correct: true},
        ],

        question: "What is the term used to describe the energy stored in an object due to its position or configuration?",
        answers: [
            { text: "Kinetic Energy", correct: false},
            { text: "Potential Energy", correct: true},
            { text: "Mechanical Energy", correct: false},
            { text: "Thermal Energy", correct: false},
        ],

        question: "What is the term used to describe the change in position of an object over time?",
        answers: [
            { text: "Velocity", correct: true},
            { text: "Acceleration", correct: false},
            { text: "Speed", correct: false},
            { text: "Momentum", correct: false},
        ],

        question: "What is the term used to describe the resistance of an object to changes in its motion?",
        answers: [
            { text: "Inertia", correct: true},
            { text: "Momentum", correct: false},
            { text: "Velocity", correct: false},
            { text: "Acceleration", correct: false},
        ],

        question: "What is the term used to describe the force of attraction between two objects with mass?",
        answers: [
            { text: "Friction", correct: false},
            { text: "Gravity", correct: true},
            { text: "Inertia", correct: false},
            { text: "Acceleration", correct: false},
        ],

        question: "What is the term used to describe the tendency of a force to rotate an object around an axis?",
        answers: [
            { text: "Torque", correct: true},
            { text: "Kinetic Energy", correct: false},
            { text: "Angular momentum", correct: false},
            { text: "Centripetal force", correct: false},
        ],

        question: "What is the term used to describe the ratio of the velocity of an object to the speed of sound in the surrounding medium?",
        answers: [
            { text: "Match number", correct: true},
            { text: "Reynolds number", correct: false},
            { text: "Froude number", correct: false},
            { text: "Weber number", correct: false},
        ],

        question: "What is the term used to describe the bending of light when it passes through a medium of different density?",
        answers: [
            { text: "Reflection", correct: false},
            { text: "Refraction", correct: true},
            { text: "Diffraction", correct: false},
            { text: "Interference", correct: false},
        ],

        question: "What is the term used to describe the resistance of a fluid to flow?",
        answers: [
            { text: "Viscosity", correct: true},
            { text: "Inertia", correct: false},
            { text: "Buoyancy", correct: false},
            { text: "Turbulence", correct: false},
        ],

        question: "What is the term used to describe the force per unit area acting on a surface?",
        answers: [
            { text: "Pressure", correct: true},
            { text: "Temperature", correct: false},
            { text: "Volume", correct: false},
            { text: "Heat", correct: false},
        ]   
    },
    {
        //Chemistry
        question: "What is the chemical symbol for oxygen?",
        answers: [
            { text: "N", correct: false},
            { text: "O", correct: true},
            { text: "H", correct: false},
            { text: "C", correct: false},
        ],

        question: "What is the process of converting a liquid to a gas called?",
        answers: [
            { text: "Freezing", correct: false},
            { text: "Boiling", correct: true},
            { text: "Melting", correct: false},
            { text: "Condensation", correct: false},
        ],

        question: "What is the term used to describe the smallest unit of an element that retains the chemical properties of that element?",
        answers: [
            { text: "Atom", correct: true},
            { text: "Molecule", correct: false},
            { text: "Compound", correct: false},
            { text: "Ion", correct: false},
        ],
        
        question: "What is the term used to describe a substance that cannot be broken down into simpler substances by chemical means?",
        answers: [
            { text: "Element", correct: true},
            { text: "Compound", correct: false},
            { text: "Molecule", correct: false},
            { text: "Ion", correct: false},
        ],

        question: "What is the term used to describe a substance composed of two or more elements in a fixed proportion?",
        answers: [
            { text: "Compound", correct: true},
            { text: "Mixture", correct: false},
            { text: "Element", correct: false},
            { text: "Solution", correct: false},
        ],

        question: "What is the term used to describe the amount of solute present in a given amount of solvent or solution?",
        answers: [
            { text: "Molarity", correct: false},
            { text: "Molality", correct: false},
            { text: "Concentration", correct: true},
            { text: "Dilution", correct: false},
        ],

        question: "What is the term used to describe the energy required to remove an electron from an atom or ion in the gaseous state?",
        answers: [
            { text: "Ionization energy", correct: true},
            { text: "Electron affinity", correct: false},
            { text: "Electronegativity", correct: false},
            { text: "Bond dissociation energy", correct: false},
        ],

        question: "What is the term used to describe a reaction in which two or more substances combine to form a single product?",
        answers: [
            { text: "Synthesis", correct: true},
            { text: "Decomposotion", correct: false},
            { text: "Combustion", correct: false},
            { text: "Acid-base reaction", correct: false},
        ],

        question: "What is the term used to describe a solution in which the concentration of the solute is higher than its solubility at a given temperature?",
        answers: [
            { text: "Saturated solution", correct: false},
            { text: "Unsaturated solution", correct: false},
            { text: "Supersaturated solution", correct: true},
            { text: "Concentrated solution", correct: false},
        ],

        question: "What is the term used to describe the quantity of heat required to raise the temperature of one gram of a substance by one degree Celsius?",
        answers: [
            { text: "Specific heat capacity", correct: true},
            { text: "Heat of fusion", correct: false},
            { text: "Heat of vaporization", correct: false},
            { text: "Heat of reaction", correct: false},
        ],

        question: "What is the term used to describe the phenomenon in which a reaction proceeds in such a way that a product of the reaction is able to catalyze the reaction itself?",
        answers: [
            { text: "Autocatalysis", correct: true},
            { text: "Heterocatalysis", correct: false},
            { text: "Enzymatic catalysis", correct: false},
            { text: "Photochemical catalysis", correct: false},
        ],

        question: "What is the term used to describe the quantity of an ion in solution that reacts completely with one mole of another ion in a chemical reaction?",
        answers: [
            { text: "Normality", correct: true},
            { text: "Molarity", correct: false},
            { text: "Molality", correct: false},
            { text: "Concentration", correct: false},
        ],

        question: "What is the term used to describe a substance that can accept a pair of electrons from a Lewis base?",
        answers: [
            { text: "Lewis acid", correct: true},
            { text: "Lewis base", correct: false},
            { text: "Bronsted-Lowry acid", correct: false},
            { text: " Bronsted-Lowry base", correct: false},
        ],

        question: "What is the term used to describe the force per unit area exerted by a gas on a surface?",
        answers: [
            { text: "Pressure", correct: true},
            { text: "Temperature", correct: false},
            { text: "Volume", correct: false},
            { text: "Density", correct: false},
        ],

        question: "What is the term used to describe a reaction in which a single reactant is converted into multiple products?",
        answers: [
            { text: "Disproportionation", correct: false},
            { text: "Redox reaction", correct: false},
            { text: "Metathesis reaction", correct: true},
            { text: "Polymerization", correct: false},
        ]
    },
    {
        //Biology
        question: "What is the process by which cells use glucose to produce ATP, the energy currency of the cell?",
        answers: [
            { text: "Photosynthesis", correct: false},
            { text: "Respiration", correct: true},
            { text: "Fermentation", correct: false},
            { text: "Biosynthesis", correct: false},
        ],

        question: "Which organelle is responsible for packaging and distributing proteins in the cell?",
        answers: [
            { text: "Mitochondria", correct: false},
            { text: "Golgi apparatus", correct: true},
            { text: "Endoplasmic reticulum", correct: false},
            { text: "Lysosome", correct: false},
        ],

        question: "What is the term used to describe the smallest unit of life that can carry out all of the functions necessary for life?",
        answers: [
            { text: "Molecule", correct: false},
            { text: "Cell", correct: true},
            { text: "Tissue", correct: false},
            { text: "Organ", correct: false},
        ],

        question: "What is the term used to describe the process by which genetic information is passed from parent to offspring?",
        answers: [
            { text: "Meiosis", correct: false},
            { text: "Mitosis", correct: false},
            { text: "Replication", correct: false},
            { text: "Inheritance", correct: true},
        ],

        question: "Which macromolecule is responsible for storing genetic information in cells?",
        answers: [
            { text: "Carbohydrates", correct: false},
            { text: "Lipids", correct: false},
            { text: "Proteins", correct: false},
            { text: "Nucleic acids", correct: true},
        ],
        
        question: "What is the name of the process by which plants use sunlight, water, and carbon dioxide to produce glucose and oxygen?",
        answers: [
            { text: "Respiration", correct: false},
            { text: "Photosynthesis", correct: true},
            { text: "Fermentation", correct: false},
            { text: "Digestion", correct: false},
        ],

        question: "Which organelle is responsible for converting light energy into chemical energy during photosynthesis?",
        answers: [
            { text: "Chloroplasts", correct: true},
            { text: "Mitochondria", correct: false},
            { text: "Endoplasmic reticulum", correct: false},
            { text: "Nucleus", correct: false},
        ],

        question: "Which type of tissue is responsible for transmitting electrical signals throughout the body?",
        answers: [
            { text: "Epithelial tissue", correct: false},
            { text: "Muscle tissue", correct: false},
            { text: "Nervous tissue", correct: true},
            { text: "Connective tissue", correct: false},
        ],

        question: "What is the name of the process by which DNA is used to make RNA?",
        answers: [
            { text: "Replication", correct: false},
            { text: "Transcription", correct: true},
            { text: "Translation", correct: false},
            { text: "Mutation", correct: false},
        ],

        question: "What is the name of the process by which the genetic material from two different parents combines to produce a new individual?",
        answers: [
            { text: "Mitosis", correct: false},
            { text: "Meiosis", correct: false},
            { text: "Fertilization", correct: true},
            { text: "Replication", correct: false},
        ],

        question: "What is the difference between facilitated diffusion and active transport?",
        answers: [
            { text: "Facilitated diffusion requires energy while active transport does not", correct: false},
            { text: " Facilitated diffusion moves molecules against their concentration gradient while active transport moves molecules with their concentration gradient", correct: false},
            { text: " Facilitated diffusion is a type of passive transport while active transport is a type of active transport", correct: true},
        ],

        question: "What are the three stages of cellular respiration and where do they occur in the cell?",
        answers: [
            { text: "Glycolysis in the cytoplasm, the Krebs cycle in the mitochondria, and oxidative phosphorylation in the cytoplasm", correct: false},
            { text: "Glycolysis in the mitochondria, the Krebs cycle in the cytoplasm, and oxidative phosphorylation in the mitochondria", correct: false},
            { text: "Glycolysis in the cytoplasm, the Krebs cycle in the mitochondria, and oxidative phosphorylation in the mitochondria", correct: true},
        ],

        question: "What is the function of ribosomes in the cell?",
        answers: [
            { text: "To synthesize proteins", correct: true},
            { text: "To produce ATP", correct: false},
            { text: "To store genetic information", correct: false},
        ],

        question: "What is the difference between mitosis and meiosis?",
        answers: [
            { text: "Mitosis produces haploid cells while meiosis produces diploid cells", correct: false},
            { text: " Mitosis involves one division while meiosis involves two divisions", correct: false},
            { text: " Mitosis produces genetically identical daughter cells while meiosis produces genetically diverse daughter cells", correct: true},
        ],

        question: "What is the central dogma of molecular biology?",
        answers: [
            { text: "DNA is transcribed into RNA which is then translated into protein", correct: true},
            { text: "RNA is transcribed into DNA which is then translated into protein", correct: false},
            { text: " Protein is transcribed into RNA which is then translated into DNA", correct: false},
        ]
    },
    {
        //Maths
        question: "What is the value of x in the equation 3x + 5 = 14?",
        answers: [
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "6", correct: false},
            { text: "9", correct: false},
        ],

        question: "What is the slope of a horizontal line?",
        answers: [
            { text: "0", correct: true},
            { text: "1", correct: false},
            { text: "-1", correct: false},
            { text: "Undefined", correct: false},
        ],

        question: "What is the value of pi (π) to two decimal places?",
        answers: [
            { text: "3.14", correct: true},
            { text: "3.15", correct: false},
            { text: "3.16", correct: false},
            { text: "3.17", correct: false},
        ],

        question: "What is the square root of 49?",
        answers: [
            { text: "4", correct: false},
            { text: "5", correct: false},
            { text: "6", correct: false},
            { text: "7", correct: true},
        ],

        question: "What is the sum of the interior angles of a triangle?",
        answers: [
            { text: "90 degrees", correct: false},
            { text: "180 degrees", correct: true},
            { text: "270 degrees", correct: false},
            { text: "360 degrees", correct: false},
        ],

        question: "A store is having a 20% off sale on all items. If a $50 item is on sale, what is the sale price?",
        answers: [
            { text: "$10", correct: false},
            { text: "$20", correct: false},
            { text: "$30", correct: false},
            { text: "$40", correct: true},
        ],

        question: "The sum of three consecutive even integers is 132. What is the largest of the three integers?",
        answers: [
            { text: "40", correct: false},
            { text: "42", correct: false},
            { text: "44", correct: false},
            { text: "46", correct: true},
        ],

        question: "If x + y = 12 and x - y = 4, what is the value of x?",
        answers: [
            { text: "8", correct: true},
            { text: "10", correct: false},
            { text: "12", correct: false},
            { text: "16", correct: false},
        ],

        question: "What is the slope of a line perpendicular to a line with slope 3/5?",
        answers: [
            { text: "-3/5", correct: false},
            { text: "-5/3", correct: true},
            { text: "3/5", correct: false},
            { text: "5/3", correct: false},
        ],

        question: "Let P be a point outside a circle with center O and radius 6. A tangent line to the circle through P intersects a radius drawn from O at point A. If the length of AP is 8, what is the area of the circle? (Round your answer to the nearest hundredth)",
        answers: [
            { text: "113.10", correct: true},
            { text: "125.66", correct: false},
            { text: "144.00", correct: false},
            { text: "201.06", correct: false},
        ],

        question: "lim x--> 2 (x^2 - 4)(x - 2)",
        answers: [
            { text: "0", correct: false},
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "Does not exist", correct: false},
        ],

        question: "What is the equation of the line passing through the points (2, 3) and (4, 7)?",
        answers: [
            { text: "y = 2x + 1", correct: false},
            { text: "y = 4x - 5", correct: true},
            { text: "y = 2x + 5", correct: false},
            { text: "y = 4x - 1", correct: false},
        ],

        question: "What is the derivative of $f(x) = 2x^3 - 4x + 1$",
        answers: [
            { text: "f'(x) = 6x - 4", correct: false},
            { text: "f'(x) = 6x^2 - 4", correct: true},
            { text: "f'(x) = 6x^2 - 4x", correct: false},
            { text: "f'(x) = 6x^2 - 4x + 1", correct: false}, 
        ],

        question:  "What is the solution to the equation x^2 + 5x + 6 = 0",
        answers: [
            { text: "x = -6 or x = -1", correct: false},
            { text: "x = -2 or x = -3", correct: true},
            { text: "x = -6 or x = -2", correct: false},
            { text: "x = -4 or x = -2", correct: false},
        ],

        question: "What is the value of sin(60°)?",
        answers: [
            { text: "1/2", correct: false},
            { text: "√3/2", correct: true},
            { text: "1", correct: false},
            { text: "0", correct: false},
        ]
    },
    {
        //English
        question: "Which of the following is a noun?",
        answers: [
            { text: "Run", correct: false},
            { text: "Quickly", correct: false},
            { text: "House", correct: true},
            { text: "Beautifully", correct: false},
        ],

        question: "Which sentence is written correctly?",
        answers: [  
            { text: "Their going to the park later.", correct: false},
            { text: "There going to the park later.", correct: false},
            { text: "They're going to the park later.", correct: true},
            { text: "Theres going to the park later.", correct: false},
        ],

        question: "Which word is a synonym for \"happy\"?",
        answers: [
            { text: "Sad", correct: false},
            { text: "Joyful", correct: true},
            { text: "Angry", correct: false},
            { text: "Depressed", correct: false},
        ],

        question: "Which sentence is written in the past tense?",
        answers: [
            { text: "I am going to the store.", correct: false},
            { text: "I go to the store.", correct: false},
            { text: "I will go to the store.", correct: false},
            { text: "I went to the store.", correct: true},
        ],

        question: "Which sentence is an example of a question?",
        answers: [
            { text: "The sun is shining.", correct: false},
            { text: "She sings beautifully.", correct: false},
            { text: "Are you going to the party tonight?", correct: true},
            { text: "They always dance together.", correct: false},
        ],

        question: "Which of the following sentences contains a dangling modifier?",
        answers: [
            { text: "After finishing his homework, the TV was turned on", correct: false},
            { text: "The car that was parked in front of the building was mine", correct: false},
            { text: "Looking out the window, the sun was shining brightly", correct: true},
            { text: "Walking down the street, the flowers caught her eye", correct: false},
        ],

        question: "Which of the following sentences is written in the passive voice?",
        answers: [
            { text: "The dog chased the cat", correct: false},
            { text: "The cat was chased by the dog", correct: true},
            { text: "I wrote a letter to my friend", correct: false},
            { text: "My friend received my letter", correct: false},
        ],

        question: "Which of the following words is a synonym for \"ubiquitous\"?",
        answers: [
            { text: "rare", correct: false},
            { text: "prevalent", correct: true},
            { text: "obscure", correct: false},
            { text: "scarce", correct: false},
        ],

        question: "Which of the following sentences contains a dependent clause?",
        answers: [
            { text: "The dog barked at the mailman", correct: false},
            { text: "While I was cooking dinner, the phone rang", correct: true},
            { text: "She sings beautifully", correct: false},
            { text: "The sun was setting over the horizon", correct: false},
        ],

        question: "Which of the following is an example of a hyperbole?",
        answers: [
            { text: "The book was so boring, I fell asleep after one page", correct: true},
            { text: "The room was as dark as a cave", correct: false},
            { text: "The flowers swayed gently in the breeze", correct: false},
            { text: "The rain tapped on the window pane", correct: false},
        ],

        question: "Which of the following is an example of an oxymoron?",
        answers: [
            { text: "jumbo shrimp", correct: true},
            { text: "pretty ugly", correct: false},
            { text: "silent scream", correct: false},
            { text: "virtual reality", correct: false},
        ],

        question: "Which of the following sentences is written in the subjunctive mood?",
        answers: [
            { text: "If I were you, I would take that job", correct: true},
            { text: "She is going to the store", correct: false},
            { text: "He asked me if I had finished the project", correct: false},
            { text: " I wish I could have gone to the concert", correct: false},
        ],

        question: "Which of the following is an example of metonymy?",
        answers: [
            { text: "The pen is mightier than the sword", correct: false},
            { text: "The White House announced a new policy", correct: true},
            { text: "All hands on deck!", correct: false},
            { text: "The Crown refused to negotiate", correct: false},
        ],

        question: "Which of the following is an example of anaphora?",
        answers: [
            { text: "She walked to the store. She bought some milk. She came back home", correct: false},
            { text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...", correct: true},
            { text: "The sky was blue, and the grass was green", correct: false},
            { text: "He sang a song, and she danced to it", correct: false},
        ],

        question: "Which of the following is an example of a syllogism?",
        answers: [
            { text: "All dogs are animals. Charlie is a dog. Therefore, Charlie is an animal", correct: true},
            { text: "She is good at math. Therefore, she will be a great scientist", correct: false},
            { text: "He is a vegetarian. Therefore, he does not eat meat", correct: false},
            { text: "It rained yesterday. Therefore, it will rain today", correct: false},
        ],
    },
    {
        //Accounting and Finance
        question: "Which financial statement reports a company's revenues and expenses?",
        answers: [
            { text: "Balance sheet", correct: false},
            { text: "Income statement", correct: true},
            { text: "Cash flow statement", correct: false},
            { text: "Statement of retained earnings", correct: false},
        ],

        question: "What is the purpose of a journal entry?",
        answers: [
            { text: "To record the details of a business transaction in the accounting system", correct: true},
            { text: "To prepare financial statements", correct: false},
            { text: "To calculate the company's tax liability", correct: false},
            { text: "To communicate with external stakeholders", correct: false},
        ],

        question: "Which accounting equation is correct?",
        answers: [
            { text: "Assets = Liabilities - Equity", correct: false},
            { text: "Assets + Equity = Liabilities", correct: false},
            { text: "Assets - Liabilities = Equity", correct: true},
            { text: " Liabilities - Equity = Assets", correct: false},
        ],

        question: "What is the difference between accounts receivable and accounts payable?",
        answers: [
            { text: "Accounts receivable is money owed to the company, while accounts payable is money the company owes to others", correct: true},
            { text: "Accounts payable is money owed to the company, while accounts receivable is money the company owes to others", correct: false},
            { text: "Accounts receivable and accounts payable are the same thing", correct: false},
            { text: "None of the above", correct: false},
        ],

        question: "What is the purpose of an audit?",
        answers: [
            { text: "To ensure the accuracy and completeness of a company's financial statements", correct: true},
            { text: "To prepare tax returns for the company", correct: false},
            { text: "To review employee performance", correct: false},
            { text: "To evaluate the company's marketing strategy", correct: false},
        ],

        question: "Which of the following is NOT a type of financial statement?",
        answers:[
            { text: "Balance sheet", correct: false},
            { text: "Income statement", correct: false},
            { text: "Cash flow statement", correct: false},
            { text: "Sales statement", correct: true},
        ],

        question: "Which accounting method recognizes revenues and expenses when they are earned or incurred, regardless of when they are received or paid?",
        answers:[
            { text: "Accrual accounting", correct: true},
            { text: "Cash accounting", correct: false},
            { text: "Deferred accounting", correct: false},
            { text: "Liability accounting", correct: false},
        ],

        question: "What is the primary purpose of a bank reconciliation?",
        answers:[
            { text: "To ensure that all bank transactions are recorded in the company's accounting system", correct: false},
            { text: "To identify any discrepancies between the company's accounting records and the bank's records", correct: true},
            { text: "To calculate the company's net income for the period", correct: false},
            { text: "To track the company's inventory levels", correct: false},
        ],

        question: "What is the difference between accounts receivable and accounts payable?",
        answers:[
            { text: "Accounts receivable is money owed to the company, while accounts payable is money the company owes to others", correct: true},
            { text: "Accounts receivable is money the company owes to others, while accounts payable is money owed to the company", correct: false},
            { text: "Accounts receivable represents assets on the balance sheet, while accounts payable represents liabilities", correct: false},
            { text: "Accounts receivable represents liabilities on the balance sheet, while accounts payable represents assets", correct: false},
        ],

        question: "Which of the following financial ratios measures a company's ability to pay off its short-term debt?",
        answers:[
            { text: "Debt-to-equity ratio", correct: false},
            { text: "Current ratio", correct: true},
            { text: "Gross margin ratio", correct: false},
            { text: "Return on equity ratio", correct: false},
        ],

        question: "Which of the following methods of inventory valuation assumes that the last items purchased are the first items sold?",
        answers: [
            { text: "LIFO (Last-in, first-out)", correct: true},
            { text: "FIFO (First-in, first-out)", correct: false},
            { text: "Average cost", correct: false},
            { text: "Specific identification", correct: false},
        ],

        question: "Which of the following financial statements is used to calculate a company's return on investment (ROI)?",
        answers: [
            { text: "Income statement", correct: true},
            { text: "Balance sheet", correct: false},
            { text: "Cash flow statement", correct: false},
            { text: "Statement of retained earnings", correct: false},
        ],

        question: "Which of the following financial ratios measures a company's ability to meet its long-term debt obligations?",
        answers: [
            { text: "Debt-to-equity ratio", correct: false},
            { text: "Quick ratio", correct: false},
            { text: "Return on investment (ROI) ratio", correct: false},
            { text: "Times interest earned ratio", correct: true},
        ],

        question: "Which of the following methods of depreciation charges the same amount of depreciation expense each year of the asset's useful life?",
        answers: [
            { text: "Straight-line depreciation", correct: true},
            { text: "Double-declining balance depreciation", correct: false},
            { text: "Units of production depreciation", correct: false},
            { text: "MACRS (Modified Accelerated Cost Recovery System) depreciation", correct: false},
        ],

        question: "Which of the following financial statements is used to calculate a company's gross profit margin?",
        answers: [
            { text: "Income statement", correct: true},
            { text: "Balance sheet", correct: false},
            { text: "Cash flow statement", correct: false},
            { text: "Statement of retained earnings", correct: false},
        ]
    },
    {
        //Artificial Intelligence
        question: "Which of the following is NOT a type of artificial intelligence?",
        answers: [
            { text: "Machine learning", correct: false},
            { text: "Natural language processing", correct: false},
            { text: "Robotics", correct: false},
            { text: "Data visualization", correct: true},
        ],

        question: "What is the difference between supervised and unsupervised learning?",
        answers: [
            { text: "Supervised learning is when the machine is given labelled data to learn from, while unsupervised learning is when the machine is not given any labels", correct: true},
            { text: "Supervised learning is when the machine learns on its own without any guidance, while unsupervised learning is when the machine is given a set of specific instructions to follow", correct: false},
            { text: "Supervised learning is when the machine is given unstructured data to learn from, while unsupervised learning is when the machine is given structured data", correct: false},
            { text: "There is no difference between supervised and unsupervised learning.", correct: false},
        ],

        question: "Which of the following is an example of a natural language processing task?",
        answers: [
            { text: "Classifying images", correct: false},
            { text: "Identifying fraudulent transactions", correct: false},
            { text: "Predicting stock prices", correct: false},
            { text: "Recognizing speech patterns", correct: true},
        ],

        question: "What is a neural network?",
        answers: [
            { text: "A type of computer hardware used in artificial intelligence", correct: false},
            { text: "A type of software that can learn from data", correct: true},
            { text: "A type of algorithm used in data analysis", correct: false},
            { text: "A type of database used to store large amounts of data", correct: false},
        ],

        question: "What is the purpose of reinforcement learning?",
        answers: [
            { text: "To learn from labelled data", correct: false},
            { text: "To learn from unstructured data", correct: false},
            { text: "To optimize a machine's decision-making process through trialand-error", correct: true},
            { text: "To analyse large datasets and identify patterns", correct: false},
        ],

        question: "What is the difference between classification and regression in machine learning?",
        answers: [
            { text: "Classification is the process of predicting a categorical label, while regression is the process of predicting a continuous value", correct: true},
            { text: "Classification is the process of predicting a continuous value, while regression is the process of predicting a categorical label", correct: false},
            { text: "Classification and regression are the same process, but with different names", correct: false},
            { text: "Classification is the process of identifying patterns in data, while regression is the process of transforming data into a more usable format", correct: false},
        ],

        question: "What is the difference between overfitting and underfitting in machine learning?",
        answers: [
            { text: "Overfitting occurs when a model is too complex and learns the noise in the training data, while underfitting occurs when a model is too simple and does not capture the underlying patterns in the data", correct: true},
            { text: "Overfitting occurs when a model is too simple and does not capture the underlying patterns in the data, while underfitting occurs when a model is too complex and learns the noise in the training data", correct: false},
            { text: "Overfitting and underfitting are the same thing, but with different names", correct: false},
            { text: "Overfitting occurs when a model is too complex and captures the underlying patterns in the data, while underfitting occurs when a model is too simple and captures only the noise in the data", correct: false},
        ],

        question: "What is the difference between a generative model and a discriminative model in machine learning?",
        answers: [
            { text: "A generative model generates new data, while a discriminative model discriminates between different classes of data", correct: false},
            { text: "A generative model discriminates between different classes of data, while a discriminative model generates new data", correct: false},
            { text: "A generative model and a discriminative model are the same thing, but with different names", correct: false},
            { text: "A generative model generates new data based on the underlying distribution of the data, while a discriminative model learns the boundary between different classes of data", correct: true},
        ],

        question: "What is the purpose of a convolutional neural network (CNN) in computer vision?",
        answers: [
            { text: "To learn features of images by convolving filters over the image and down-sampling the result", correct: true},
            { text: "To classify images by comparing them to a database of pre-existing images", correct: false},
            { text: "To generate new images by sampling from a learned distribution", correct: false},
            { text: "To segment images into regions with different semantic meanings", correct: false},
        ],

        question: "What is the difference between a decision tree and a random forest in machine learning?",
        answers: [
            { text: "A decision tree is a single tree-like model, while a random forest is an ensemble of many decision trees", correct: true},
            { text: "A decision tree is an ensemble of many random forests, while a random forest is a single tree-like model", correct: false},
            { text: "A decision tree and a random forest are the same thing, but with different names", correct: false},
            { text: "A decision tree and a random forest are both single tree-like models, but the random forest is trained using random subsets of the data", correct: false},
        ],

        question: "What is the difference between a Boltzmann machine and a Hopfield network in neural networks?",
        answers: [
            { text: "Boltzmann machines are unsupervised learning models, while Hopfield networks are supervised learning models", correct: false},
            { text: "Boltzmann machines are feedforward neural networks, while Hopfield networks are recurrent neural networks", correct: true},
            { text: "Boltzmann machines are used for regression problems, while Hopfield networks are used for classification problems", correct: false},
            { text: "Boltzmann machines and Hopfield networks are the same thing, but with different names", correct: false},
        ],

        question: "What is the difference between a Markov decision process (MDP) and a Partially observable Markov decision process (POMDP) in reinforcement learning?",
        answers: [
            { text: "MDPs assume that the current state of the environment is fully observable, while POMDPs assume that the current state is partially observable", correct: true},
            { text: "MDPs are used for continuous action spaces, while POMDPs are used for discrete action spaces", correct: false},
            { text: "MDPs use model-based methods, while POMDPs use model-free methods", correct: false},
            { text: "MDPs and POMDPs are the same thing, but with different names", correct: false},
        ],

        question: "What is the difference between a convolutional neural network (CNN) and a recurrent neural network (RNN) in deep learning?",
        answers: [
            { text: "CNNs are used for image and video processing, while RNNs are used for natural language processing", correct: false},
            { text: "CNNs use convolutional layers for feature extraction, while RNNs use recurrent layers for temporal processing", correct: true},
            { text: "CNNs are supervised learning models, while RNNs are unsupervised learning models", correct: false},
            { text: "CNNs and RNNs are the same thing, but with different names", correct: false},
        ],

        question: "What is the difference between a support vector machine (SVM) and a decision tree in machine learning?",
        answers: [
            { text: "SVMs are used for regression problems, while decision trees are used for classification problems", correct: false},
            { text: "SVMs use decision boundaries to separate different classes, while decision trees use a hierarchical tree structure to make decisions", correct: true},
            { text: "SVMs are unsupervised learning models, while decision trees are supervised learning models", correct: false},
            { text: "SVMs and decision trees are the same thing, but with different names", correct: false},
        ],

        question: "What is the difference between a long-term and short-term memory in neural networks?",
        answers: [ 
            { text: "Long-term memory is used for storing data over an extended period of time, while shortterm memory is used for storing data for a short period of time", correct: true},
            { text: "Long-term memory is used for unsupervised learning, while short-term memory is used for supervised learning", correct: false},
            { text: "Long-term memory refers to the structure of a neural network, while short-term memory refers to the activation of neurons", correct: false},
            { text: "Long-term memory and short-term memory are the same thing, but with different names", correct: false},
        ]
    }
]   