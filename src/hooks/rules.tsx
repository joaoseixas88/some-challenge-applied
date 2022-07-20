import { api } from "../services/api";
import { CardsResponseProps } from "./CardsContext";

const randomNumber = (min: number, max: number) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

export { randomNumber };

export const getCard = async () => {
  const luckyNumber = randomNumber(1, 10);
  const card = await (await api.get(`pokemon/${randomNumber(1, 25)}`)).data;
  const description = await (
    await api.get(`characteristic/${card.id}`)
  ).data.descriptions[7].description;

  const responseCard = {
    id: card.id,
    name: card.name,
    image_url: card.sprites.other.dream_world.front_default,
    luckyNumber,
    description,
  };

  return responseCard;
};

export const shuffleCards = (cards: CardsResponseProps[]) => {
  const shuffled = cards.reduce((acc: CardsResponseProps[], card) => {
    let randomIndex = randomNumber(0, cards.length - 1);
		if(acc[randomIndex] === undefined){
			acc[randomIndex] = card
			return acc
		} 	
		
		function randomizeAgain(){
			randomIndex = randomNumber(0, cards.length - 1)
			if(acc[randomIndex] === undefined){
				acc[randomIndex] = card
				return acc
			} 	

			randomizeAgain()
		}
		randomizeAgain()

		return acc

    
  }, []);

  return shuffled;
};
