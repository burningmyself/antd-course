import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  const counter = state[namespace].counter;
  return {
    cardList,
    counter,
  };
};

const mapDispatchToProps=(dispatch)=>{
  return{
    onClickAdd:(newCard)=>{
      const action={
        type:`${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};


@connect(mapStateToProps,mapDispatchToProps)
export default class PuzzleCardsPage extends Component {  
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={()=>this.props.onClickAdd({
            setup:'lorem ipsum dolor sit amet, is '+this.props.counter,
            punchline:`here we use dva, is `+this.props.counter,
          })}>添加卡片</Button>
        </div>
      </div>
    );
  }
  addNewCard = () => {
    this.setState(prevState => {
      const prevCardList = prevState.cardList;
      this.counter += 1;
      const card = {
        id: this.counter,
        setup: 'Lorem ipsum dolor sit amet, counter is' + this.counter,
        punchline: 'sed do eiusmod tempor incididunt, counter is' + this.counter,
      };
      return {
        cardList: prevCardList.concat(card),
      }
    })
  }
}
