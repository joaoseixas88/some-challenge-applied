import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from "react";
import { getCard, shuffleCards } from "./rules";

interface CardsContextProviderProps {
  children: ReactNode;
}

export interface CardsResponseProps {
  id: string;
  name: string;
  image_url: string;
  luckyNumber: number;
  description: string;
}

interface CardsContextProps {
  data: CardsResponseProps[];
  loading: boolean;
  handlePushOne: () => void;
	handleShuffleCards: () => void
}

const CardsContext = createContext({} as CardsContextProps);

export function CardsContextProvider({ children }: CardsContextProviderProps) {
  const [cards, setCards] = useState<CardsResponseProps[]>([]);
  const [loading, setLoading] = useState(false);

	const pushFive = () => {		
		
		const card_1 = getCard()
		const card_2 = getCard()
		const card_3 = getCard()
		const card_4 = getCard()
		const card_5 = getCard()		
		Promise.all([card_1,card_2,card_3,card_4, card_5]).then(values => setCards(values))	
		setLoading(false)
	}

	const handleShuffleCards = () =>{
		const shuffled = shuffleCards(cards)
		console.log(cards)
		console.log(shuffled)
		setCards(shuffled)
	}

  const handlePushOne = async () => {
    setLoading(true);
    const card = await getCard()
		setCards([...cards,card])
    setLoading(false);
  };
  
  useEffect(() => {
		setLoading(true)
    pushFive()
  }, []);

  return (
    <CardsContext.Provider value={{ loading, data: cards, handlePushOne, handleShuffleCards }}>
      {children}
    </CardsContext.Provider>
  );
}

export function useCardsContext() {
  const context = useContext(CardsContext);
  return context;
}
