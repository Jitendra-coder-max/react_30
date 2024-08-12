// import React, { useEffect, useState } from 'react'

// const Para = () => {

//     const initialValue =['Paragraphs are the building blocks of papers.','Many students define paragraphs in terms of length:',
//          'a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.', 'In reality',
//          ' though, the unity and coherence of ideas among sentences is what constitutes a paragraph.',
//           ' A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).',
//             'Length and appearance do not determine whether a section in a paper is a paragraph. ',
//            ' For instance, in some styles of writing, particularly journalistic styles',
//            '  a paragraph can be just one sentence long. Ultimately', 
//             ' a paragraph is a sentence or group of sentences that support one main idea.', 
//            '  In this handout', 
//         'we will refer to this as the “controlling idea,', 
//        ' because it controls what happens in the rest of the paragraph.']

//        const [quotes,setQuotes] = useState(initialValue)

//        const [sentence, setSentence] = useState( localStorage.getItem('selectedQuote'))

// //    const indexQuote =   Math.floor( Math.random()*quotes.length-1)

// //   const quote =   quotes[indexQuote];

// useEffect(()=>{

//     localStorage.setItem('selectedQuote',sentence)

// },[sentence])

//   const handleClick =()=>{

//     const indexQuote =   Math.floor( Math.random()*quotes.length)

//           setSentence([...sentence,quotes[indexQuote]]) // setting quote value in sentense variable

//           console.log(indexQuote)

//   }
                   
//   return (
//     <div>Para
//  <button onClick={handleClick}>Change Quote</button>
//         <h1>{sentence}</h1>
       
//     </div>
//   )
// }

// export default Para



import React, { useEffect, useState } from 'react';

const Para = () => {
  const initialValue = [
    'Paragraphs are the building blocks of papers.',
    'Many students define paragraphs in terms of length:',
    'a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.',
    'In reality, the unity and coherence of ideas among sentences is what constitutes a paragraph.',
    'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).',
    'Length and appearance do not determine whether a section in a paper is a paragraph.',
    'For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.',
    'Ultimately, a paragraph is a sentence or group of sentences that support one main idea.',
    'In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.'
  ];

  const [quotes, setQuotes] = useState(initialValue);
  const [sentence, setSentence] = useState(localStorage.getItem('selectedQuote') || []);

  useEffect(() => {
    localStorage.setItem('selectedQuote', sentence);
  }, [sentence]);

  const handleClick = () => {
    const indexQuote = Math.floor(Math.random() * quotes.length);
    setSentence([...sentence,quotes[indexQuote]]); // setting quote value in sentence variable
    console.log(indexQuote);
  };

  return (
    <div>
      <button onClick={handleClick}>Change Quote</button>
      <h1>{sentence}</h1>
    </div>
  );
};

export default Para;