import React from 'react'
import './App.css';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

function Card(props) {
  // const profile = testData['']
  return (
    <div>
      <img src={props.profile.avatar_url} style={{ width: '75px' }} alt="profile_pic" />

      <div style={{ display: 'inline-block', marginLeft: '12px' }}>
        <div style={{ fontSize: '125%' }}>{props.profile.name}</div>
        <div>{props.profile.company}</div>
      </div>
    </div>
  )
}

const CardList = (props) => {
  return (
    <div>
      {
        testData.map((e, index) => {
          return (<Card key={index} profile={e} />)

        })
      }
      {/* <Card profile={ testData[1]} />
      <Card profile={ testData[2]} /> */}
    </div>
  )
}

function App() {

  return (
    <div>
      <div className="header" style={{ color: 'darkGray' }}>
        The Github App
      </div>
      <div style={{ margin: '1rem' }}>
        <CardList />
      </div>

    </div>
  );
}

export default App;
