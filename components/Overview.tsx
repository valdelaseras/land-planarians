'use client';

import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Observation } from '@/model/observation.interface';
import Box from '@mui/material/Box';
import { Individual } from '@/model/individual.interface';
import { FLUORESCENCE, MOON_PHASE } from '@/model/enums';
import {
    Brightness3Sharp,
    ContrastSharp,
    FluorescentSharp,
    LensOutlined,
    LensSharp,
} from '@mui/icons-material';
import Spinner from '@/components/Spinner';

export function Overview() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([] as Observation[]);
    const [isMobileScreen, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        }

        window.addEventListener('resize', handleResize);

        setIsLoading(true);

        fetch('http://localhost:3000/api/observations')
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));

        // remove the listener as per clean up effect to avoid memory leaks
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileScreen]);

    function handleResize() {
        return setIsMobile(window.innerWidth < 768);
    }

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <DataGrid
                    sx={{ border: 'none', color: 'var(--primary-font-color)' }}
                    className="theme-primary"
                    columns={columns}
                    columnVisibilityModel={{
                        individuals: true,
                        location: true,
                        dateTime: true,
                        environment: !isMobileScreen,
                        temperature: !isMobileScreen,
                        humidity: !isMobileScreen,
                        moonPhase: !isMobileScreen,
                        weather: !isMobileScreen,
                        note: !isMobileScreen,
                    }}
                    rows={data}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0
                            ? 'theme-primary-dark'
                            : 'theme-primary-darker'
                    }
                />
            )}
        </>
    );
}

const individualsColumn = (params: GridRenderCellParams) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                verticalAlign: 'middle',
            }}>
            <span>{params.row.individuals.length}</span>
            {params.row.individuals.map((individual: Individual) => {
                if (individual.fluorescence === FLUORESCENCE.DETECTED) {
                    return (
                        <FluorescentSharp
                            key={individual.id}
                            sx={{
                                color: 'var(--primary-accent-bg-color)',
                            }}
                        />
                    );
                }
            })}
        </Box>
    );
};

const resolveMoonPhaseIcon = (phase: MOON_PHASE) => {
    switch (phase) {
        case MOON_PHASE.NEW_MOON:
            return <LensOutlined />;
        case MOON_PHASE.WAXING_CRESCENT:
            return <Brightness3Sharp />;
        case MOON_PHASE.FIRST_QUARTER:
            return <ContrastSharp sx={{ transform: 'rotate(180deg)' }} />;
        case MOON_PHASE.WAXING_GIBBOUS:
            return <Brightness3Sharp />; // @todo
        case MOON_PHASE.FULL_MOON:
            return <LensSharp />;
        case MOON_PHASE.WANING_GIBBOUS:
            return <Brightness3Sharp />; // @todo
        case MOON_PHASE.THIRD_QUARTER:
            return <ContrastSharp />;
        case MOON_PHASE.WANING_CRESCENT:
            return <Brightness3Sharp sx={{ transform: 'rotate(180deg)' }} />;
    }
};

// @todo: returned date here is 12 hrs ahead of the original date
const formatDate = (dateTime: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
    };

    const formatter = new Intl.DateTimeFormat('en-NZ', options);

    return formatter.format(new Date(dateTime));
};

const columns: GridColDef[] = [
    {
        field: 'individuals',
        headerName: 'Individuals',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            return individualsColumn(params);
        },
    },
    {
        field: 'location',
        headerName: 'Location',
        flex: 1,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.location.longitude}, ${params.row.location.latitude}`,
    },
    {
        field: 'datetime',
        headerName: 'Date',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            return formatDate(params.row.datetime);
        },
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
            return resolveMoonPhaseIcon(params.row.moonPhase);
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
