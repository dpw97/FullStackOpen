import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  
  const total = props.parts.reduce((s,p) => s+p.exercises, 0)
  return (
    <div>
      Number of exercises {total}
    </div>
  )
    
  
}

const Content = (props) => {
  return (
    <div>
      {}
      {props.parts.map(part =>
        <div key={part.id}>
          <Part name={part.name} exercises={part.exercises}/>
        </div>)}
      <Total parts={props.parts}/>
    </div>
  )
}
export default Course