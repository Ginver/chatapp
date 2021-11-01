// store everything in LocalStorage - so when refresh all data will be stored there
import { useEffect, useState } from "react";

const PREFIX = 'chatapp-'

function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    // useState: to get our value in local storage and put it in our state
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === "function") {
            return initialValue()
        } else {
            return initialValue
        }
    })

    // useEffect: to get our value and save it into localStorage:
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
    return [value, setValue];

};

export default useLocalStorage;