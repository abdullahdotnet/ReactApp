import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/91n7p-j5aqL._SY342_.jpg"
    alt="House of flame and shadows"
  />
)
const Title = () => <h2>House of flame and shadows</h2>
const Author = () => <h4>Sarah j. Maas</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

// function Greeting() {
//   return <h1>my first component</h1>
// }

// nesting
// function Greeting() {
//   return (
//     <div>
//       <Name />
//       <Experience />
//     </div>
//   )
// }

// const Name = () => <h2>Abdullah</h2>
// const Experience = () => {
//   return <h2> 3 years</h2>
//}
// function Greeting() {
//   return (
//     <div>
//       <h1>My First component</h1>
//     </div>
//   )
// }
// function Greeting() {
//   return React.createElement('h1', {}, 'Hello World')
// }

// function Greeting() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   )
// }
