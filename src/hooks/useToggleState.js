import React,{ useState } from 'react'

function useToggleState(initialValue=false) {
    const [value,setValue] = useState(initialValue)
    const toggle = () => {
        setValue(!value);
    }

    return [value,toggle];
}

export default useToggleState;
