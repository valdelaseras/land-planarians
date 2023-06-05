import ObservationService from '@/services/observation.service'

export default async function Observations() {
    const service = new ObservationService()
    const observations = await service.getAll()

    return (
        <section id="observations">
            <h2>Observations</h2>

            <ul>
                {observations.map((observation) => (
                    <li key={observation.id}>
                        <span>id: {observation.id}</span>
                        <span>alive: {observation.isAlive}</span>
                        <span>quantity: {observation.quantity}</span>
                        <span>temperature: {observation.temperature}C</span>
                        <span>weather: {observation.weather}</span>
                        <span>humidity: {observation.humidity}%</span>
                        <span>fluorescence: {observation.fluorescence}</span>
                        <span>note: {observation.note}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
