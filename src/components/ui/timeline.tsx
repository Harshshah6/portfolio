import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AlternateTimeline() {
    return (
        <Timeline position="alternate">
            {
                TimelineItems.map((item) => (
                    <TimelineItem key={item.title}>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent >
                            <h1 className='text-lg font-bold'>{item.date}</h1>
                            <p className='text-base text-secondary-foreground/50'>{item.title}</p>
                            <p>{item.description}</p>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    );
}


const TimelineItems = [
    {
        "title": "DEGREE",
        "date": "2024 - present",
        "description": "Persuing BCA (Bachelor of Computer Applications).",
    },
    {
        "title": "PUC",
        "date": "2022 - 2024",
        "description": "Completed PU Board with distinction.",
    },
    {
        "title": "SSLC",
        "date": "2022",
        "description": "Completed SSLC with first class.",
    },
];
