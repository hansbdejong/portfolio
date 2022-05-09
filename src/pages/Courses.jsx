import React from 'react';
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey } from '@mui/material/colors';

const courses = [
    {
        title: "CIS 521 Artificial Intelligence",
        description: "This course investigates algorithms to implement resource-limited knowledge-based agents which sense and act in the world. Topics include, search, machine learning, probabilistic reasoning, natural language processing, knowledge representation and logic. After a brief introduction to the language, programming assignments will be in Python."
    },
    {
        title: "CS 155 Computer and Network Security (Stanford)",
        description: "For juniors, seniors, and first-year graduate students. Principles of computer systems security. Attack techniques and how to defend against them. Topics include: network attacks and defenses, operating system security, application security (web, apps, databases), malware, privacy, and security for mobile devices. Course projects focus on building reliable software."
    },
    {
        title: "CIS 550 Database & Information Systems",
        description: "Structured information is the lifeblood of commerce, government, and science today. This course provides an introduction to the broad field of information management systems, covering a range of topics relating to structured data, from data modeling to logical foundations and popular languages, to system implementations. We will study the relational data model; SQL; database design using the Entity-Relationship model and relational design theory; transactions and updates; efficient storage of data; indexes; query execution and query optimization; and “big data” and NoSQL systems."
    },
    {
        title: "CS 142 Web Applications (Stanford)",
        description: "Concepts and techniques used in constructing interactive web applications. Browser-side web facilities such as HTML, cascading stylesheets, the document object model, and JavaScript frameworks and Server-side technologies such as server-side JavaScript, sessions, and object-oriented databases. Issues in web security and application scalability. New models of web application deployment. "
    },
    {
        title: "CIT 595 Computer Systems Programming",
        description: "This course is a continuation of CIT 593 and introduces students to fundamental concepts in computing systems. The course is divided into two parts. The first half of the course introduces important concepts in modern operating systems: processes, scheduling, caching, and virtual memory. The second half of the course provides an introduction to fundamental concepts in the design and implementation of networked systems, their protocols, and applications. The course will use the C program language, and will develop your knowledge on C system calls, and libraries for process/thread creation and manipulation, synchronization, and network communication."
    },
    {
        title: "CIT 594 Data Structures and Software Design",
        description: "This course focuses on data structures, software design, and advanced Java. The course starts off with an introduction to data structures and basics of the analysis of algorithms. Important data structures covered include arrays, lists, stacks, queues, trees, hash maps, and graphs. The course also focuses on software design and advanced Java topics such as software architectures, design patterns, and concurrency."
    },
    {
        title: "CIT 593 Introduction to Computer Systems",
        description: "This course provides an introduction to fundamental concepts of computer systems and computer architecture. Students learn the C programming language and an instruction set (machine language) as a basis for understanding how computers represent data, process information, and execute programs."
    },
    {
        title: "CIT 592 Mathematical Foundations of Computer Science",
        description: "This course introduces students to math concepts that form the backbone of the majority of computer science. Topics covered include sets, functions, permutations and combinations, discrete probability, expectation, mathematical induction, and graph theory. The goal of the course is to ensure that students are comfortable enough with the math required for most of the CIS electives."
    },
    {
        title: "CIT 591 Introduction to Software Development",
        description: "This course is an introduction to fundamental concepts of programming and computer science for students who have little or no experience in these areas. Includes an introduction to programming using Python, where students are introduced to core programming concepts like data structures, conditionals, loops, variables, and functions. Also provides an introduction to basic data science techniques using Python. The second half of this course is an introduction to object-oriented programming using Java, where students are introduced to polymorphism, inheritance, abstract classes, interfaces, and advanced data structures. Students will also learn how to read and write to files, connect to databases, and use regular expressions to parse text. This course includes substantial programming assignments in both Python and Java, and teaches techniques for test-driven development and debugging code."
    }
]

function createAccordions() {
    let accordions = [];

    for (let i = 0; i < courses.length; i++) {
        let isExpanded = false;
        if (i < 4) {
            isExpanded = true;
        }
        //disableGutters
        let accordion = (
            <Accordion
                sx={{ border: `1px solid ${grey[200]}` }}
                elevation={3} defaultExpanded={isExpanded} >
                <AccordionSummary sx={{}}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h6"
                        sx={{ color: '#212529', fontSize: 18 }}>
                        {courses[i].title}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ color: "#00000099", paddingBottom: 6 }}>
                    {courses[i].description}
                </AccordionDetails>
            </Accordion>
        )
        accordions.push(accordion);
    }
    return accordions;
}


function Courses() {


    return (
        <div style={{ width: "85%", margin: "auto", paddingBottom: "60px" }}>
            <Typography
                variant="h3"
                align='center'
                gutterBottom
                sx={{ color: '#212529', fontWeight: 300 }}
            >
                Courses
            </Typography>

            <Typography
                variant="body1"
                sx={{ color: '#212529', fontSize: "18px" }}
                gutterBottom
            >

                <p>I have thoroughly enjoyed studying Computer Science and have recieved top grades (A/A+) in all courses.</p>
            </Typography>

            {createAccordions()}

        </div >
    );
}

export default Courses;

//<p>I am currently pursuing my masters in Computer and Information Technology (MCIT) at the <span style={{ fontWeight: '600' }}>University of Pennsylvania</span>. I am also taking graduate level computer science courses for credit through <span style={{ fontWeight: '600' }}>Stanford University</span> to strengthen my knowledge and skills.</p>