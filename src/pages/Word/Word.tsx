import React from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  List,
  Segment,
} from 'semantic-ui-react';

import Operation from '../../components/Operation/Operation';
import './Word.css';

const Word = () => {
  const { id, word } = useParams();

  return (
    <Container className="Word">
      <Header as="h3">
        <Header.Content>{ word }</Header.Content>
      </Header>
      <Segment.Group>
        <Segment>
          <Label color="green">读音</Label>
          <Label>英 |ɜːθ|</Label>
          <Label>美 |ɜːrθ|</Label>
          <Operation
            upvote={128}
            downvote={0}
            comment={8}
            username={'bin'}
          />
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment>
          <Label color="teal">定义</Label>
          <Label>noun</Label>
          <span>the world; the planet that we live on. 世界；地球</span>
          <Operation
            upvote={30}
            downvote={0}
            comment={5}
            username={'springuper'}
          />
          <Grid>
            <Grid.Column floated="right" width="15">
              <Segment vertical>
                <Label size="tiny">例</Label>
                <span>the planet Earth 地球这颗行星</span>
                <Operation
                  upvote={128}
                  downvote={0}
                  comment={8}
                  username={'bin'}
                />
              </Segment>
              <Segment vertical>
                <Label size="tiny">例</Label>
                <span>The earth revolves around the sun. 地球绕着太阳转</span>
                <Operation
                  upvote={5}
                  downvote={1}
                  comment={2}
                  username={'guoguo'}
                />
                <Divider horizontal>更多例句</Divider>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <Label color="teal">定义</Label>
          <Label>noun</Label>
          <span>land; the hard surface of the world that is not the sea or the sky; the ground 陆地；地面；大地</span>
          <Operation
            upvote={5}
            downvote={1}
            comment={2}
            username={'guoguo'}
          />
          <Grid>
            <Grid.Column floated="right" width="15">
              <Segment vertical>
                <Label size="tiny">例</Label>
                <span>After a week at sea, it was good to feel the earth beneath our feet again. 出海一周后，重新踏上陆地感到很愉快</span>
                <Operation
                  upvote={30}
                  downvote={0}
                  comment={5}
                  username={'springuper'}
                />
              </Segment>
              <Segment vertical>
                <Label size="tiny">例</Label>
                <span>You could feel the earth shake as the truck came closer. 卡车开近时会感觉到地面在震动。</span>
                <Operation
                  upvote={128}
                  downvote={0}
                  comment={8}
                  username={'bin'}
                />
                <Divider horizontal>更多例句</Divider>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment stacked>
          <span className="Word__more">4 个其它定义</span>
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment>
          <Label color="violet">短语</Label>
          <Label>on earth</Label>
          <span>究竟，到底</span>
          <Operation
            upvote={30}
            downvote={0}
            comment={5}
            username={'springuper'}
          />
        </Segment>
        <Segment>
          <Label color="violet">短语</Label>
          <Label>of the earth</Label>
          <span>俗气的；粗野的</span>
          <Operation
            upvote={128}
            downvote={0}
            comment={8}
            username={'bin'}
          />
          <Grid>
            <Grid.Column floated="right" width="15">
              <Segment vertical>
                <Label size="tiny">例</Label>
                <span>It is the tears of the earth that keep her smiles in bloom. 它是大地的泪点，使她的微笑保持着青春不谢。</span>
                <Operation
                  upvote={128}
                  downvote={0}
                  comment={8}
                  username={'bin'}
                />
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment stacked>
          <span className="Word__more">10 个其它短语</span>
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment>
          <Label color="blue">习语</Label>
          <Label>charge, cost, pay, etc. the ˈearth</Label>
          <span>(BrE) (informal) to charge, etc. a lot of money 收（或花、付）很多钱</span>
          <Operation
            upvote={128}
            downvote={0}
            comment={8}
            username={'bin'}
          />
        </Segment>
        <Segment>
          <Label color="blue">习语</Label>
          <Label>like nothing on earth</Label>
          <span>(informal) very strange</span>
          <Operation
            upvote={30}
            downvote={0}
            comment={5}
            username={'springuper'}
          />
        </Segment>
        <Segment stacked>
          <span className="Word__more">5 个其它习语</span>
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment>
          <Label color="purple">近义词</Label>
          <Label>land</Label>
          <Operation
            upvote={30}
            downvote={0}
            comment={5}
            username={'springuper'}
          />
        </Segment>
        <Segment>
          <Label color="purple">近义词</Label>
          <Label>dirt</Label>
          <Operation
            upvote={30}
            downvote={0}
            comment={5}
            username={'springuper'}
          />
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment>
          <Label color="pink">同根词</Label>
          <Label>earthly</Label>
          <Operation
            upvote={30}
            downvote={0}
            comment={5}
            username={'springuper'}
          />
        </Segment>
        <Segment>
          <Label color="pink">同根词</Label>
          <Label>earthen</Label>
          <Operation
            upvote={30}
            downvote={0}
            comment={5}
            username={'springuper'}
          />
        </Segment>
        <Segment>
          <Label color="pink">同根词</Label>
          <Label>earthborn</Label>
          <Operation
            upvote={30}
            downvote={0}
            comment={5}
            username={'springuper'}
          />
        </Segment>
        <Segment stacked>
          <span className="Word__more">3 个其它同根词</span>
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment>
          <Label color="brown">词源</Label>
          <span>Old English eorthe, of Germanic origin; related to Dutch aarde and German Erde.</span>
          <Operation
            upvote={128}
            downvote={0}
            comment={8}
            username={'bin'}
          />
        </Segment>
      </Segment.Group>
      <Segment basic textAlign="center">
        <Button
          color="teal"
          content="添加项目"
          icon="add"
          labelPosition="left"
        />
        <Button icon="arrow up" />
      </Segment>
    </Container>
  );
};

export default Word;
