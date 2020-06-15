module.exports = {

    chapter: [
        // a workbook has many chapters, each chapter has some lessons that they might try to teach. 
        {
            // chapter name
            name: "Self Care",
            lessons: [ 
                { 
                    // name of the lesson
                    name: "Self Care Buckets",
                    // length of the lesson
                    time: "7-10 minutes",
                    // array of  intro statements
                    intro: ["Taking time out of your day to focus on you is essential", "This underlies healthy living"], 
                    // array of questions with details associated with those questions. 
                    core: [
                        { question: "How do you fill your social bucket?", details:"This has to do with the people around you and the connections you have with them. Sometimes you need to connect with people more and sometimes these connections can be too much!" }
                    ],
                    // addtional information statements 
                    footnote: ["It is important to record how often you do this for", "try to keep a journal going."]
                },
            ]
        }, 
    ]
}