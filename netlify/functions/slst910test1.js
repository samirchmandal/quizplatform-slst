exports.handler = async (event, context) => {
    const questions = [
        {
            question: "Which one of the following is necessarily an invertible matrix?",
            options: ["A nilpotent matrix", "An idempotent matrix", "A symmetric matrix", "An orthogonal matrix"],
            answer: 3
        },
        {
            question: "What is the capital of India",
            options: ["Calcutta", "Mumbai", "New Delhi", "Chennai"],
            answer: 2
        },
        {
            question: "Find $\\int_0^1x^3~dx$",
            options: ["$\\frac{1}{3}$","$\\frac{2}{3}$","$\\frac{1}{5}$","$\\frac{1}{4}$"],
            answer: 3
        }
    ];

    return {
        statusCode: 200,
        body: JSON.stringify(questions),
    };
};
