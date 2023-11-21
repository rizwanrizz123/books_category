import React from 'react'
import './View.css'
import { Button } from 'react-bootstrap'

function Viewbook() {
  return (
    <div>
        <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="https://cdn2.penguin.com.au/covers/original/9781785151552.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <h3>Treasure Island</h3>
          <p>RL Stevenson</p>
          <p>Treasure Island (originally titled The Sea Cook: A Story for Boys) is an adventure novel by Scottish author Robert Louis Stevenson, telling a story of "buccaneers and buried gold". It is considered a coming-of-age story and is noted for its atmosphere, characters, and action.

          The novel was originally serialised from 1881 to 1882 in the children's magazine Young Folks, under the title Treasure Island or the Mutiny of the Hispaniola, credited to the pseudonym "Captain George North". It was first published as a book on 14 November 1883 by Cassell & Co. It has since become one of the most often dramatized and adapted of all novels, in numerous media.</p><br />

          <p>
            Language : English
          </p>
          <p>
            Book Length : 236 pages
          </p>
          <Button>Add to Cart</Button>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Viewbook