import { useEffect, useState } from "react";
import { parseCookies, setCookie } from 'nookies'

const useLocalStorage = (key: string, initialState: any) => {
	const [state, setState] = useState(
		() => {
			const storage = parseCookies()
			return storage ? storage : initialState
		}
	)

	useEffect(() => {
		setCookie(null, key, state)
		
	},[key, state])

	return [state, setState]  
 
};

export { useLocalStorage };
