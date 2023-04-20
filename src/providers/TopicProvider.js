import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import GradeIcon from '@mui/icons-material/Grade';
import FunctionsIcon from '@mui/icons-material/Functions';
import SchoolIcon from '@mui/icons-material/School';
export const topicContext = createContext();

const TopicProvider = function TopicProvider(props) {
  const [state, setState] = useState({
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
      axios.get(`/api/topics/${props.id}/stats`),
      axios.get(`/api/topics/${props.id}/cards`),
      axios.get(`/api/topics/${props.id}/cards/quiz`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        loading: false,
        cards: all[1].data,
        quizCards: all[2].data,
        reviews: all[0].data.reviews,
        quizCardsCount: all[2].data.length,
        ease: all[0].data.ease,
        maturityPercentage: Math.ceil(
          all[0].data.cardsStats.mature / all[0].data.cardsStats.total
        ),
        widgets: [
          {
            id: 1,
            text: 'New',
            number: all[0].data.cardsStats.new,
            icon: GradeIcon,
          },
          {
            id: 2,
            text: 'Learning',
            number: all[0].data.cardsStats.learning,
            icon: BorderColorIcon,
          },
          {
            id: 3,
            text: 'Graduated',
            number: all[0].data.cardsStats.graduated,
            icon: SchoolIcon,
          },
          {
            id: 4,
            text: 'Total',
            number: all[0].data.cardsStats.total,
            icon: FunctionsIcon,
          },
        ],
      }));
    });
  }, []);

  const value = { ...state, name: props.name };
  return (
    <topicContext.Provider value={value}>
      {props.children}
    </topicContext.Provider>
  );
};
export default TopicProvider;
