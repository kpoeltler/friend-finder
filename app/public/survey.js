Survey
    .StylesManager
    .applyTheme("default");

var json = {
    questions: [
        {
            type: "matrix",
            name: "Quality",
            title: "Please indicate if you agree or disagree with the following statements",
            columns: [
                {
                    value: 1,
                    text: "Strongly Disagree"
                }, {
                    value: 2,
                    text: "Disagree"
                }, {
                    value: 3,
                    text: "Neutral"
                }, {
                    value: 4,
                    text: "Agree"
                }, {
                    value: 5,
                    text: "Strongly Agree"
                }
            ],
            rows: [
                {
                    value: "q1",
                    text: "I would agree that a graceful way of concluding a friendly dinner, is to split the bill 50/50."
                }, {
                    value: "q2",
                    text: "Most Saturdays, you're out of the house like a weekend warrior. Being active and having a friend who's ready for an outdoor adventure is important to you."
                }, {
                    value: "q3",
                    text: "Perhaps, most weekends you prefer having a few buddies over, to lounge in front of a big flat screen and get stuffed on unhealthy/healthy snacks and liquids."
                }, {
                    value: "q4",
                    text: "On average your weekend plans mostly include, collaborating on a potential multi-million dollar ideas/business, plan/hobbie. Having an ambitious, focused friend may provide the companionship that helps take you straight to the top of life's pyramid."
                },
            {
                    value: "q5",
                    text: "Your wardrobe screams to the rest of the world 'Yeah! I treat myself!' Perhaps, what will make you smile is having a friend who admires and has the funds to splurge on the finer things in life."
                },
                {
                    value: "q6",
                    text: "On average your weekend plans mostly include, collaborating on a potential multi-million dollar ideas/business, plan/hobbie. Having an ambitious, focused friend may provide the companionship that helps take you straight to the top of life's pyramid."
                },
                {
                    value: "q7",
                    text: "My family and work don't leave a lot of free time. That being said, I'm looking for a friend who wants to meet up once a month."
                },
                {
                    value: "q8",
                    text: "I can't wait to spend quality time building a long lasting friendship."
                },
                {
                    value: "q9",
                    text: "I prefer a friend of the opposite sex. You never know where it will lead...perhaps, a new romance."
                },
                
                {
                  
                    value: "q10",
                    text: "I'm not looking for love, I just want to meet a cool democrat."
                
                },
              
                ]
        } 
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
