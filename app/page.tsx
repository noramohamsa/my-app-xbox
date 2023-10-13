"use client"
import { useState,useEffect } from "react"
import Cell from "./componants/Cell";

const winningCombos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


export default function Home() {
  const [cells,setCells]=useState(["","","","","","","","",""])
  const [go, setGo]=useState('circle')
  const [winningMassage,setWinningMassage]=useState("")
  useEffect(()=>{
    winningCombos.forEach((combo)=>{
    const circleWins =combo.every((cell)=>cells[cell]==="circle")
    const crossWins =combo.every((cell)=>cells[cell]==="cross")
  
if(circleWins){
 setWinningMassage('Circle Wins !')
}else if(crossWins){
  setWinningMassage('Cross Wins !')
}
})
  },[cells])
  // console.log(cells)
  useEffect(()=>{
if (cells.every((cell)=>cell != "")&& !winningMassage){
  setWinningMassage('Draw!')
}
  },[cells,winningMassage])
  return (
    <main className="container" >
      <div className="gameboard">
        
        {cells.map((cell,index)=>(
          <Cell  id={index}
           go={go} 
           setGo={setGo}
            key={index}
          cells={cells}
           setCells={setCells}
            cell={cell} 
            winningMassage={winningMassage}/>
        )

        ) }
      </div>
      <div> {winningMassage}</div>
      
       {!winningMassage && <div>{`its now ${go} turn!`} </div>} 
     
        
    </main>
  )
}
