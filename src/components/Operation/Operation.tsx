import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Grid,
  Icon,
  Label,
  List,
} from 'semantic-ui-react';

import './Operation.css';

interface OperationProps {
  upvote: number;
  downvote: number;
  comment: number;
  username: string;
  date?: number;
}

const Operation: React.FC<OperationProps> = (props) => {
  const { upvote, downvote, comment, username } = props;

  return (
    <div className="Operation">
      <List divided horizontal>
        <List.Item><Icon name="thumbs up" />{upvote}</List.Item>
        {downvote === 0 ? null : (<List.Item><Icon name="thumbs down" />{downvote}</List.Item>)}
        <List.Item><Icon name="comment" />{comment}</List.Item>
        <List.Item>{username}</List.Item>
      </List>
    </div>
  );
};

export default Operation;
