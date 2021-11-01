// store everything in LocalStorage - so when refresh all data will be stored there
import { useEffect, useState } from "react";

const PREFIX = 'whatsapp-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    // useState: to get our value in local storage and put it in our state
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        // JSON.parse(undefined)
        if (jsonValue !== 'undefined' && jsonValue !== null) return JSON.parse(jsonValue)
            // console.log("dit moet iets zijn", jsonValue)
        if (typeof initialValue === "function") {
            return initialValue()
        } else {
            return initialValue
        }
        console.log("hallo!", jsonValue)
    })

    // useEffect: to get our value and save it into localStorage:
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
    return [value, setValue];

    // return []
};

// export default useLocalStorage;