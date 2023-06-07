'use client';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Observation } from '@/model/observation.interface';

const columns: GridColDef[] = [
    { field: 'datetime', headerName: 'Datetime' },
    {
        field: 'location',
        headerName: 'Location',
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.location.longitude}, ${params.row.location.latitude}`,
    },
    { field: 'individuals', headerName: 'Individuals' },
    { field: 'environment', headerName: 'Environment' },
    {
        field: 'temperature',
        headerName: 'Temperature',
        valueGetter: (params: GridValueGetterParams) =>
          `${params.row.temperature}°C`,
    },
    {
        field: 'humidity',
        headerName: 'Humidity',
        valueGetter: (params: GridValueGetterParams) =>
          `${params.row.humidity}%`,
    },
    { field: 'moonPhase', headerName: 'Moon phase' },
    { field: 'weather', headerName: 'Weather' },
    { field: 'note', headerName: 'Note' },
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
                columns={columns}
                rows={observations}
            />
        </section>
    );
}
