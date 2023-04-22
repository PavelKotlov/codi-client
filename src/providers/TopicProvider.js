import { useState, useEffect, createContext } from "react";
import axios from "axios";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import GradeIcon from "@mui/icons-material/Grade";
import FunctionsIcon from "@mui/icons-material/Functions";
import SchoolIcon from "@mui/icons-material/School";
import { useParams } from "react-router-dom";
import sra from "../helpers/sra/sra";

export const topicContext = createContext();

const TopicProvider = function TopicProvider(props) {
  const { topic_id } = useParams();
  const [state, setState] = useState({
    topic_id,
    topic: {},
    loading: true,
    cards: [],
    quizCards: [],
    widgets: [],
    maturityPercentage: 0,
    reviews: [],
    ease: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/topics/${topic_id}/stats`),
      axios.get(`/api/topics/${topic_id}/cards`),
      axios.get(`/api/topics/${topic_id}/cards/quiz`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        loading: false,
        topic: all[0].data.topic,
        cards: all[1].data.cards,
        quizCards: all[2].data.cards,
        reviews: all[0].data.reviews,
        quizCardsCount: all[2].data.cards.length,
        ease: all[0].data.ease,
        maturityPercentage: Math.ceil(
          all[0].data.cardsStats.mature / all[0].data.cardsStats.total
        ),
        widgets: [
          {
            id: 1,
            text: "New",
            number: all[0].data.cardsStats.new,
            icon: GradeIcon,
          },
          {
            id: 2,
            text: "Learning",
            number: all[0].data.cardsStats.learning,
            icon: BorderColorIcon,
          },
          {
            id: 3,
            text: "Graduated",
            number: all[0].data.cardsStats.graduated,
            icon: SchoolIcon,
          },
          {
            id: 4,
            text: "Total",
            number: all[0].data.cardsStats.total,
            icon: FunctionsIcon,
          },
        ],
      }));
    });
  }, []);

  const addReview = (topic, card, selection) => {
    const updatedCard = sra(selection, card);

    return axios
      .patch(`/api/topics/${topic.id}/cards/${card.id}`, {
        review: { response: selection },
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
        console.log("error", e);
      });
  };

  const editCard = async (card, updates) => {
    const response = await axios.patch(
      `/api/topics/${card.topicId}/cards/${card.id}`,
      {
        front: updates.front,
        back: updates.back,
        tags: updates.tags,
      }
    );

    setState({
      ...state,
      cards: state.cards.map((card) =>
        card.id === response.data.id ? response.data : card
      ),
    });
  };

  const addCard = async (card) => {
    console.log("Here is the added card info", card);
    const response = await axios.post(`/api/topics/${card.topicId}/cards`, {
      front: card.front,
      back: card.back,
      type: card.type,
      tags: card.tags,
      note: card.note,
      auto: card.auto,
    });

    if (Array.isArray(response.data)) {
      setState({
        ...state,
        cards: [...state.cards, ...response.data],
      });
    } else {
      setState({
        ...state,
        cards: [...state.cards, response.data],
      });
    }
  };

  const value = { ...state, addReview, editCard, addCard };

  return (
    <topicContext.Provider value={value}>
      {props.children}
    </topicContext.Provider>
  );
};
export default TopicProvider;
