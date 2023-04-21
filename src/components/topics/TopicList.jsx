import React, { useState } from 'react';
import TopicListItem from './TopicListItem';
import { Autocomplete, Grid, InputAdornment, TextField } from '@mui/material';
import AddTopicButton from './AddTopicButton';
import { Search } from '@mui/icons-material';

const TopicList = ({ topics }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // If searchQuery is empty, then the includes() method will return true for every topic's name property,
  // because an empty string is included in every string.
  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      container
      spacing={5}
      sx={{
        bgcolor: '#E9f5ff',
      }}>
      <Grid
        container
        sx={{
          p: '2%',
          width: '40%',
          display: 'block',
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
              variant='filled'
              InputProps={{
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
            />
          )}
        />
      </Grid>
      <Grid container spacing={5}>
        <AddTopicButton />
        {topicListItems}
      </Grid>
    </Grid>
  );
};

export default TopicList;
