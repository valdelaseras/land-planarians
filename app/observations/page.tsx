'use client';
import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Observation } from '@/model/observation.interface';
import { Individual } from '@/model/individual.interface';
import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MOON_PHASE } from '@/model/enums';
import {
    Brightness3Sharp,
    ContrastSharp,
    LensOutlined,
    LensSharp,
} from '@mui/icons-material';

const columns: GridColDef[] = [
    {
        field: 'individuals',
        headerName: 'Individuals',
        minWidth: 200,
        maxWidth: 200,
        renderCell: (params: GridRenderCellParams) => {
            return row(params);
        },
    },
    {
        field: 'datetime',
        headerName: 'Datetime',
        flex: 1,
    },
    {
        field: 'location',
        headerName: 'Location',
        flex: 1,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.location.longitude}, ${params.row.location.latitude}`,
    },
    {
        field: 'environment',
        headerName: 'Environment',
        flex: 1,
    },
    {
        field: 'temperature',
        headerName: 'Temperature',
        flex: 1,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.temperature}°C`,
    },
    {
        field: 'humidity',
        headerName: 'Humidity',
        flex: 1,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.humidity}%`,
    },
    {
        field: 'moonPhase',
        headerName: 'Moon phase',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    {resolveMoonPhaseIcon(params.row.moonPhase)}
                </Box>
            );
        },
    },
    {
        field: 'weather',
        headerName: 'Weather',
        flex: 1,
    },
    {
        field: 'note',
        headerName: 'Note',
        flex: 1,
    },
];

export default function Observations() {
    const [observations, setObservations] = useState([] as Observation[]);

    useEffect(() => {
        fetch('http://localhost:3000/api/observations')
            .then((response) => response.json())
            .then((result) => setObservations(result));
    }, []);

    return (
        <section id="observations">
            <h2>Observations</h2>
            <DataGrid
                className="theme-primary"
                density="compact"
                rowHeight={300}
                columns={columns}
                rows={observations}
            />
        </section>
    );
}

const row = (params: GridRenderCellParams) => {
    return (
        // if there are more than 1 individuals, need some visual feedback to indicate
        // scrolling possibility ( other than the X scroll bar )
        <Box sx={{ display: 'flex', gap: 1, overflowX: 'scroll' }}>
            {params.row.individuals.map((individual: Individual) => {
                return card(individual);
            })}
        </Box>
    );
};

const card = (individual: Individual) => {
    return (
        <Card
            className="theme-secondary"
            key={individual.id}
            sx={{
                display: 'inline-block',
                minWidth: 180,
                maxWidth: 180,
                height: 190,
            }}>
            {/*<CardActionArea>*/}
            {/*<CardMedia*/}
            {/*  component="img"*/}
            {/*  height="140"*/}
            {/*  image="/static/images/cards/contemplative-reptile.jpg"*/}
            {/*  alt="green iguana"*/}
            {/*/>*/}
            <CardContent>
                <Typography
                    component="p"
                    sx={{ mb: 2 }}>
                    {/*`${individual.phylum}, ${individual.species}`*/}
                    Taxa
                </Typography>
                <ul>
                    <li>
                        <Typography component="span">Status:</Typography>
                        <Typography component="span">{individual.status}</Typography>
                    </li>
                    <li>
                        <Typography component="span">Activity:</Typography>
                        <Typography component="span">{individual.activity}</Typography>
                    </li>
                    <li>
                        <Typography component="span">Fluorescence:</Typography>
                        <Typography component="p">{individual.fluorescence}</Typography>
                    </li>
                </ul>
            </CardContent>
            {/*</CardActionArea>*/}
        </Card>
    );
};

const resolveMoonPhaseIcon = (phase: MOON_PHASE) => {
    switch (phase) {
        case MOON_PHASE.NEW_MOON:
            return <LensOutlined/>;
        case MOON_PHASE.WAXING_CRESCENT:
            return <Brightness3Sharp/>;
        case MOON_PHASE.FIRST_QUARTER:
            return <ContrastSharp sx={{ transform: 'rotate(180deg)' }} />;
        case MOON_PHASE.WAXING_GIBBOUS:
            return <Brightness3Sharp/>; // @todo
        case MOON_PHASE.FULL_MOON:
            return <LensSharp/>;
        case MOON_PHASE.WANING_GIBBOUS:
            return <Brightness3Sharp/>; // @todo
        case MOON_PHASE.THIRD_QUARTER:
            return <ContrastSharp/>;
        case MOON_PHASE.WANING_CRESCENT:
            return <Brightness3Sharp sx={{ transform: 'rotate(180deg)' }} />;
    }
};
