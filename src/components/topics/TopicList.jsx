import React, { useContext, useState } from 'react';
import TopicListItem from './TopicListItem';
import { Autocomplete, Grid, InputAdornment, TextField } from '@mui/material';
import AddTopicButton from './AddTopicButton';
import { Search } from '@mui/icons-material';
import Backdrop from '@mui/material/Backdrop';
import TopicForm from '../settings/TopicForm';
import { UserContext } from '../../providers/UserProvider';

const TopicList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const { topics } = useContext(UserContext);

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onOpen = () => {
    setOpen(!open);
  };

  const topicListItems = filteredTopics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        id={topic.id}
        name={topic.name}
        image_url={topic.image_url}
      />
    );
  });

  return (
    <Grid
      className='topics-container'
      container
      sx={{
        flowDirection: 'column',
        height: '100vh',
        px: '2%',
        paddingTop: '8%',
        width: '65%',
        margin: '0 auto',
      }}>
      {/*search bar*/}
      <Grid
        container
        className='topics-search-container'
        sx={{
          width: '20%',
          display: 'block',
          position: 'absolute',
          padding: 1,
        }}>
        <Autocomplete
          options={topics}
          getOptionLabel={(topic) => topic.name}
          onInputChange={(event, newInputValue) => {
            setSearchQuery(newInputValue);
          }}
          clearOnBlur={false}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search Topics'
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: 2,
              }}
              variant='filled'
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search
                      sx={{
                        color: 'gray.500',
                        marginRight: '5px',
                        marginBottom: '7px',
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: 'primaryCodi.dark' },
              }}
            />
          )}
        />
      </Grid>
      {/*Add topic button + topic list*/}
      <Grid
        container
        sx={{
          overflow: 'auto',
          maxHeight: 595,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          marginTop: 13,
        }}
        className='topics-list-container'>
        <AddTopicButton onOpen={onOpen} />
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            bgcolor: 'rgba(0, 0, 0, 0.8)',
          }}
          open={open}>
          <TopicForm onOpen={onOpen} />
        </Backdrop>
        {topicListItems}
      </Grid>
    </Grid>
  );
};

export default TopicList;
