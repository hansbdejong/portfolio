export const flightsData =
{
    title: "Predicting Flight Delays",
    paragraphs:
        [
            "We predicted whether or not a particular flight would be delayed more than 15 minutes using flight, airlines, weather, airports, and plane data (300,000 lines of data). We first merged and cleaned the data using Pandas and encoded categorical data. We then conducted exploratory data analysis to gain insights into the causes of delays.",
            "To predict flight delay, we trained and tuned classification models using cross validation. Models tested include Logistic Regression, Decision Trees, Random Forests, GradientBoosted Trees, AdaBoost, XGBoost, and Neural Networks. We obtained the best results, based on the F1 score, using a Random Forest Classifier with 250 n_estimators and a max depth of 25.",
        ],
    skills:
        [
            "Google Colab",
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Numpy",
            "Scikit-Learn",
            "TensorFlow",
            "Machine Learning",
            "Exploratory Data Analysis",
            "Data Visualization",
        ],
    images: [
        {
            url: "flights/flights1.png",
            caption: "Most flights are delayed less than an hour, with a long tail in the distribution."
        },
        {
            url: "flights/flights2.png",
            caption: "Correlation heat map for continuous variables used in the classification models."
        },
        {
            url: "flights/flights3.png",
            caption: "There seem to be more flight delays during holiday travels."
        },
        {
            url: "flights/flights4.png",
            caption: "The easiest way to avoid flight delays is to depart in the early morning."
        },
        {
            url: "flights/flights5.png",
            caption: "Smaller aircraft tend are more likely to be delayed."
        },
        {
            url: "flights/flights6.png",
            caption: "Not surprisingly, wind speed positively correlates with flight delays."
        },
        {
            url: "flights/flights7.png",
            caption: "There are more flight delays in warmer temperatures when there is less lift. Aircraft need to go faster to take off in warmer temperatures, which increases the spacing between aircraft as they depart."
        },
 

    ],

    links: [
   
    ]

}
