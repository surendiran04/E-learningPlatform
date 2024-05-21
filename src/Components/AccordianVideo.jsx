import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
    return (
        <div className=' border-black border-2'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"

                >
                    <Typography >Video</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <iframe src="https://www.youtube.com/embed/LfaMVlDaQ24?si=xLtpqc_4Oq1NhZi7" title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                            className='w-full h-96'
                        >

                        </iframe>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}