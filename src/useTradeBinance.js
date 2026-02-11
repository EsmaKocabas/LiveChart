import React from 'react'

export function useTradeBinance() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
        ws.onmessage = (event) => {
            const trade = JSON.parse(event.data);
            setData((prev) => {
                const newPoint = {
                    time: new Date(trade.T).toLocaleTimeString(),
                    price: Number(trade.p),
                };
                return [...prev, newPoint];
            });
            setLoading(false);
        };
        return () => ws.close();
    }, []);

    return { data, loading, error };
}

export default useTradeBinance