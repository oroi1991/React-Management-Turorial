import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/people',
    'name':'Timon',
    'birthday':'96112',
    'gender':'남자',
    'job':'개발자'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/people',
    'name':'홍길동',
    'birthday':'54112',
    'gender':'여자',
    'job':'개발자'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/people',
    'name':'나예술',
    'birthday':'80012',
    'gender':'남자',
    'job':'디자이너'
  }
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          )
        })
      }
    </div>
  );
}

export default App;
