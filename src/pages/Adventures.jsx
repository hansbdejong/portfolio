import React from 'react';
import {
    Typography,
    Divider
} from '@mui/material';

const data = [
    {
        title: "Ross Sea, Antarctica",
        description: "I have been on two research cruises (54 days in 2013, 78 days in 2018) to the Ross Sea, Antarctica. The Ross Sea is considered to be the most pristine marine ecosystem on Earth and is one of the most species-rich areas of the Southern Ocean.",
        url: "https://www.youtube.com/embed/S-ckue2LTs0"
    },
    {
        title: "Chagos Archipelago, Indian Ocean",
        description: "I have been on two research cruises (16 days in 2016, 20 days in 2018) to the Chagos Archipelago, located in the middle of the Indian Ocean. The archipelago consists of 55 tiny islands spread across 640,000 square kilometers of ocean. The following drone footage was filmed by my PhD advisor during one of our expeditions",
        url: "https://www.youtube.com/embed/ixlr6pkU9zY"
    },
    {
        title: "Diving Sudan",
        description: "Sudan has the best diving in the Red Sea. Hammerhead sharks are seen on 40% of dives, including in large schools. They are found at 50 meters depth at the edge of plateaus where the current splits into two, providing cooler oxygenated water.",
        url: "https://www.youtube.com/embed/4c_8_AaNE9k"
    },
    {
        title: "Diving Raja Ampat, Indonesia",
        description: "Raja Ampat’s biodiversity is legendary, with more than 1700 species of fish and 600 species of hard coral (75% of the world's coral species).",
        url: "https://www.youtube.com/embed/qmfHp1EuiEE"
    }
]

function createVideoCards() {
    let cards = [];
    for (let i = 0; i < data.length; i++) {
        let card = (
            <div>
                <Typography
                    variant="h5"
                    sx={{ color: '#212529', paddingTop: 5 }}
                >
                    {data[i].title}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ fontSize: 20, paddingBottom: "20px" }}
                    color="textSecondary"
                >
                    {data[i].description}
                </Typography>

                <div style={{ width: "85%", margin: "auto" }}>
                    <div style={{ position: "relative", paddingBottom: "56.25%" }}>
                        <iframe style={{
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            overflow: "hidden",
                            position: "absolute",
                            border: 0
                        }}
                            title="Ross Sea" src={data[i].url}></iframe>
                    </div>
                </div>

                {i < (data.length - 1) ? <Divider sx={{ borderBottomWidth: 1, paddingBottom: 5 }} /> : null}
            </div>
        )
        cards.push(card);
    }
    return cards;
}


function Adventures() {
    return (
        <div style={{ width: "85%", margin: "auto", paddingBottom: "60px" }}>
            <Typography
                variant="h2"
                align='center'
                sx={{ color: '#212529' }}
            >
                Adventures
            </Typography>

            {createVideoCards()}

        </div >
    );
}

export default Adventures;