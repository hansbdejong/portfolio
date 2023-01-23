export const quaeroData =
{
    title: "Quaero",
    paragraphs:
        [
        "For the course Internet and Web Systems (CIS 555), we implemented a distributed cloud-based search engine that interacts with users via a frontend and returns relevant search results for the users’ queries. This search engine is built using a web server (Spark Java clone), key-value store, distributed analytics engine (Spark clone), web crawler, indexer, and a ranker that incorporates page rank scores, term frequency inverse document frequency (TF-IDF) scores, and phrase match scores. All components were built from scratch using standard Java.",
        "We individually built from scratch the web server, key-value store, distributed analytics engine, crawler, indexer, and page ranker. In a team of four, we then merged our code (choosing the best implementations for each component from different team members) to build our search engine. We deployed our implementations of the web server, key-value store, and distributed analytics engine on multiple Amazon Web Service EC2 instances in order to crawl and index hundreds of thousands of web pages. We then enhanced our ranker and built a frontend, which we also hosted on EC2 instances.",
        "As shown below, our search results were strong. We received full marks for this project as well as the most extra credit points."    
        ],
    skills:
        [
           "Distributed Systems",
           "Web Server",
           "Key-Value Store",
           "Distributed Analytics Engine",
           "AWS",
           "EC2",
           "Web Crawler",
           "Indexer",
           "Page Rank",
           "TF-IDF",
           "DNS",
           "React",
           "HTML",
           "CSS",
           "JavaScript",
           "Multithreading",

        ],
    images: [
        {
            url: "quaero/quaero1.png",
            caption: "Landing page for Quaero"
        },
        {
            url: "quaero/quaero2.png",
            caption: 'Search results for "President of the united states". Phrase matching helped improve our search results.'
        },
        {
            url: "quaero/quaero3.png",
            caption: 'Search results for "climate change".'
        },
        {
            url: "quaero/quaero4.png",
            caption: 'Search results for "Tamil Nadu" The great search results for a more obscure query demonstrates that we have a strong corpus of indexed pages.'
        },
        {
            url: "quaero/quaero5.png",
            caption: 'Search results for "asdf asdf". Our search engine handles situations when there are no matching pages.'
        },
        {
            url: "quaero/quaero6.png",
            caption: 'Search results for "weather 94110". As an additional feature, we used a weather API (visualcrossing) to show the weather forecast.'
        },
    ],

    links: [
        { url: "https://youtu.be/r62S0qtSYWU", label: "Video Demo", type: "video" },
        
    ]

}

