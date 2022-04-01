import { useEffect, useState } from 'react';

const useVagetables = () => {
    const [vagetables, setVagetables] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setVagetables(data))
    }, []);


    return [vagetables, setVagetables];
};

export default useVagetables;