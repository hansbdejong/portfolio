import React from 'react';
import {
    Typography,
    Link,
    Button
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.css';

const data = [
    {
        title: "Late Summer Frazil Ice-Associated Algal Blooms around Antarctica",
        authors: "Hans B. DeJong, Robert B. Dunbar, and Evan A. Lyons",
        journal: "Geophysical Research Letters",
        year: "2018",
        codeUrl: "https://github.com/hansbdejong/Green-frazil-ice-publication-repository",
        url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017GL075472"
    },
    {
        title: "Air-Sea CO2 Exchange in the Ross Sea, Antarctica",
        authors: "Hans B. DeJong and Robert B. Dunbar",
        journal: "Journal of Geophysical Research Oceans",
        year: "2017",
        codeUrl: "https://github.com/hansbdejong/Air-sea-CO2-exchange-publication-repository",
        url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JC012853"
    },
    {
        title: "Net community production and carbon export during the late summer in the Ross Sea, Antarctica",
        authors: "Hans B. DeJong, Robert B. Dunbar, David A. Koweek, David A. Mucciarone, Sarah K. Bercovici, and Dennis A. Hansell",
        journal: "Global Biogeochemical Cycles",
        year: "2017",
        codeUrl: "https://github.com/hansbdejong/Net-community-production-publication-repository",
        url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016GB005417"

    },
    {
        title: "Dissolved organic carbon in the Ross Sea: Deep enrichment and export",
        authors: "Sarah K. Bercovici, Bruce A. Hubers, Hans B. DeJong, Robert B. Dunbar, and Dennis A. Hansell",
        journal: "Limnology and Oceanography",
        year: "2017",
        url: "https://aslopubs.onlinelibrary.wiley.com/doi/full/10.1002/lno.10592"
    },
    {
        title: "Carbonate saturation state of surface waters in the Ross Sea and Southern Ocean: controls and implications for the onset of aragonite undersaturation",
        authors: "Hans B. DeJong, Robert B. Dunbar, David Mucciarone, and David A. Koweek",
        journal: "Biogeosciences",
        year: "2015",
        codeUrl: "https://github.com/hansbdejong/Ocean-acidification-state-publication-repository",
        url: "https://bg.copernicus.org/articles/12/6881/2015/"
    }
]

function createPubCards() {
    let cards = [];
    for (let i = 0; i < data.length; i++) {
        let card = (
            <div>
                <Typography
                    variant="h5"
                    sx={{ color: '#212529', paddingTop: 4 }}
                >
                    <Link className="my-link" color="#212529" rel="noopener" href={data[i].url} target="_blank" underline="none">
                        {data[i].title}
                    </Link>
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ fontSize: 20 }}
                    color="textSecondary"
                >
                    {data[i].authors}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: 20 }}
                    color="textSecondary"
                >
                    {`${data[i].journal}, ${data[i].year}`}
                </Typography>

             
                    {data[i].codeUrl ? (
                        <Link sx={{ marginRight: 1 }} rel="noopener" href={data[i].codeUrl} target="_blank" underline="none">
                            <Button disableRipple style={{ textTransform: 'none' }}>
                                <GitHubIcon fontSize="medium" />
                                <Typography sx={{ fontSize: 18, paddingLeft: 0.5 }}>GitHub Repo</Typography>
                            </Button>
                        </Link>
                    ) : null}


                    <Link  href={data[i].url} target="_blank" underline="none" >
                        <Button disableRipple
                            style={{ textTransform: 'none', marginLeft: 0 }}
                        >
                            <ArticleIcon fontSize="medium" />
                            <Typography sx={{ fontSize: 18, paddingLeft: 0.5 }}>Publication</Typography>
                        </Button>
                    </Link>
               
            </div>
        )
        cards.push(card);
    }
    return cards;
}


function Publications() {
    return (

        <div style={{ width: "85%", margin: "auto", paddingBottom: "60px" }}>
            <Typography
                variant="h2"
                align='center'
                sx={{ color: '#212529' }}
            >
                Publications
            </Typography>

            {createPubCards()}

        </div>

    );
}

export default Publications;