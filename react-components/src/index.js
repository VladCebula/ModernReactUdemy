import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import AppprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <AppprovalCard>
        <div>
          <h4>Hey!</h4>
          Show me what you got!
        </div>
      </AppprovalCard>

      <AppprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timePosted="Today at 16:02"
          text="I am very close"
        />
      </AppprovalCard>

      <AppprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timePosted="Today at 12:53"
          text="I need to succeed"
        />
      </AppprovalCard>

      <AppprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timePosted="Yesterday at 12:19"
          text="I am learning"
        />
      </AppprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
