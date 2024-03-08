import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Books = [
  {
    title: 'House of flame and shadows',
    author: 'Sarah j. Maas',
    image: './images/newbook.jpg',
    id: 1,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: './images/atomichabits.jpg',
    id: 2,
  },
  {
    title: 'Fourth Wing',
    author: 'Rebecca Yaros',
    image: './images/fourthwing.jpg',
    id: 3,
  },
]
const BookList = () => {
  return (
    <section className="booklist">
      {Books.map((book) => {
        const { title, author, image, id } = book
        return <Book image={image} author={author} title={title} key={id} />
      })}
    </section>
  )
}

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }
const Book = (props) => {
  const { title, author, image } = props
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}
      >
        {author}
      </h4>
    </article>
  )
}
// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/91n7p-j5aqL._SY342_.jpg"
//     alt="House of flame and shadows"
//   />
// )
// const Title = () => <h2>House of flame and shadows</h2>
// const Author = () => (
//   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//     Sarah j. Maas
//   </h4>
// )

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
