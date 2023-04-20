import { useState } from "react";
import axios from "axios";
import sra from "../helpers/sra/sra";

export default function useApplicationData() {
  /* state */
  const [state, setState] = useState({
    topic: {
      id: "8e3399e6-1d94-11ec-9621-0242ac130002",
      userId: "f1bdf45e-1b1c-11ec-9621-0242ac130002",
      name: "JavaScript",
      created_at: "2021-09-21T20:16:50.000Z",
      updated_at: "2021-09-21T20:16:50.000Z",
      max_cards: 5,
      image_url: null
      },
    cards: [],
  });
 
  /* get flashcards for a given topic */
  const getFlashcards = (id) => {
    console.log('fetching cards')
    return axios
      .get(`/api/topics/${id}/cards`)
      .then((res) => {
        setState({ ...state, cards: res.data });
        return res.data;
      })
      .catch((e) => {
        console.log("error retrieving flashcards:", e);
      });
  }; 

  /* add new review for a card */
  const addReview = (topic, card, selection) => {
    const updatedCard = sra(selection, card);
    // console.log('updatedCard:', updatedCard);

    return axios
      .patch(`/api/topics/${topic.id}/cards/${card.id}`, {
        review: { response: selection, date: new Date() },
        status: updatedCard.status,
        ease_factor: updatedCard.ease_factor,
        interval: updatedCard.interval,
        due_at: updatedCard.due_at,
      })
      .then((res) => {
        setState({
          ...state,
          cards: state.cards.map((card) =>
            card.id === res.data.id ? res.data : card
          ),
        });
        return res.data;
      })
      .catch((e) => {
        console.log("error retrieving flashcards:", e);
      });
  };


  return { state, getFlashcards, addReview };
}
