import "./4.scss"

import { currentMeme, meme } from "./Display"
import { useEffect, useState } from "react"

import Display from "./Display"
import Header from "../4/Header"
import Interaction from "./Interaction"
import { api_data } from "./api-data"

export default function Four() {
  const testdata = api_data.data.memes
  const data = testdata

  const [currentMeme, setCurrentMeme] = useState<currentMeme>({meme: data[0], topText: "", bottomText: ""})
  const displayNew = () => setCurrentMeme(prevCurrMeme => ({
    ...prevCurrMeme,
    meme: data[Math.floor(Math.random() * data.length)],
  }))

  useEffect(() => displayNew(), [])

  return (
    <div>
      <Header />
      <Interaction getNewMeme={displayNew} />
      {currentMeme !== undefined && <Display data={currentMeme} />}
    </div>
  )
}
