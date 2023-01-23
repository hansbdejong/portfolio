export const datePickerData =
{
    title: "Date Picker",
    paragraphs:
        [
            "I built a date picker using a combination of HTML, CSS, and JavaScript. I did not use any libraries (such as React) for this project. Instead, I wrote a JavaScript DatePicker class that directly manipulates the Document Object Model (DOM) and adds event listeners on DOM elements.  I also used the JavaScript Date object to calculate the day of the week for the first day of a specified month-year, as well as the number of days in that month-year.",
            "The number of rows is not fixed (while most months have 5 weeks, some have 4 or 6 weeks) and some weeks contain days from a different month, which are showed in a dimmed fashion. The date picker also contains controls to change the calendar’s display to the previous or next month."
        ],
    skills:
        [
            "JavaScript",
            "HTML",
            "CSS",
            "Document Object Model",
            "Object Oriented Programming",
            "Event Listeners"
        ],
    images: [
        {
            url: "date/date1.png",
            caption: "Month with exactly four weeks."
        },
        {
            url: "date/date2.png",
            caption: "Month with five weeks with the last week containing days from the next month. Highlights the control to change the calendar’s display to the next month."
        },
        {
            url: "date/date3.png",
            caption: "Month with six weeks with some weeks containing days from the previous or next month."
        },

    ],

    links: [
        { url: "https://youtu.be/09EHAJUzKT8", label: "Video Demo", type: "video" },
    ]

}
