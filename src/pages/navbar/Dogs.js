import React from "react";
import data from '../../data.json'

const bookData = data.Travel?.map( (record) => {
    return (
      <>
      <h1>{record.bookTitle}</h1>
      <p>{record.bookDescription}</p>
      </>
    )
})

const Dogs = () => {
    return (
        <div>
            <h1>Dogs</h1>
            <div>
                {bookData}
            </div>
        </div>
    )
}

export default Dogs;