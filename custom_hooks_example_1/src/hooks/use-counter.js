import {useEffect, useState} from 'react';

const useCounter = (moveForward = true)=>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        
        if(moveForward){
            setCounter((prevCounter) => prevCounter + 1);
        }
        else{
            setCounter((prevCounter) => prevCounter - 1);
        }

        }, 1000);

        return () => clearInterval(interval);
    }, [moveForward]);

    return counter;
}

export default useCounter;