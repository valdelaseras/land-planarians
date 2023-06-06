'use client';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Observation } from '@/model/observation.interface';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'isAlive', headerName: 'Alive' },
    {
        field: 'location',
        headerName: 'Location',
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.location.longitude}, ${params.row.location.latitude}`,
    },
    { field: 'quantity', headerName: 'Quantity' },
    { field: 'activity', headerName: 'Activity' },
    { field: 'fluorescence', headerName: 'Fluorescence detected' },
    { field: 'moonPhase', headerName: 'Moon phase' },
    {
        field: 'temperature',
        headerName: 'Temperature',
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.temperature}°C`,
    },
    { field: 'weather', headerName: 'Weather' },
    {
        field: 'humidity',
        headerName: 'Humidity',
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.humidity}%`,
    },
    { field: 'note', headerName: 'Observer note' },
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
