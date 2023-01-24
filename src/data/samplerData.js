export const samplerData =
{
    title: "Automatic Water Sampler",
    paragraphs:
        [
            "We studied the impact of climate change on coral reefs in the Chagos Archipelago as part of the Bertarelli Program in Marine Science. To monitor coral reef health, we needed to collect water samples above the reef every two hours for days at a time. Rather than stay up all night on rafts, we obtained a grant to design and build a submersible autonomous water sampler.",
            "We also designed and built an autonomous pumping system. Measurements of net community production and net community calcification are used as important indicators of coral reef health. A novel approach is to measure pH and oxygen concentrations at two depths above the reef. To ensure that these measurements are extremely precise, we use a single pH and oxygen sensor, hence the need for a custom pumping system.",
            "In both projects, I worked closely with our research engineer on the hardware components and programmed the microcontroller.",
            "We published our designs in the peer-reviewed journal HardwareX.",
        ],
    skills:
        [
            "Arduino Programming",
            "Scientific Instrumentation",
            "Hardware Design",
            "Hardware Engineering",
            "Prototyping"
        ],
    images: [
        {
            url: "sampler/sampler1.jpg",
            caption: "Automatic water sampler in the lab."
        },
        {
            url: "sampler/sampler2.jpg",
            caption: "Field deployment and testing of the automatic water sampler."
        },
        {
            url: "sampler/sampler3.jpg",
            caption: "Layout of relays, microcontroller, and pinch valves in automatic water sampler."
        },
        {
            url: "sampler/sampler4.jpg",
            caption: "Microcontroller and relays for autonomous pumping system."
        },
        {
            url: "sampler/sampler5.jpg",
            caption: "Field deployment and testing of autonomous pumping system. "
        },

    ],

    links: [
        { url: "https://www.sciencedirect.com/science/article/pii/S2468067221000262#s0055", label: "Sampler Paper", type: "publication" },
        { url: "https://www.sciencedirect.com/science/article/pii/S2468067220300638", label: "AutoPump Paper", type: "publication" },
        { url: "https://github.com/hansbdejong/AutoSampler-publication-repository", label: "Sampler Repo", type: "github" },
        { url: "https://github.com/hansbdejong/AutoPump-publication-repository", label: "AutoPump Repo", type: "github" },
    ]

}
