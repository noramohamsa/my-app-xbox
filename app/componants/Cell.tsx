// import React, { useEffect } from 'react'
import { Dispatch ,SetStateAction } from 'react'
type cellProps={
    cells:string[];
    setCells:Dispatch<SetStateAction<string[]>>;
    id:number;
    go:string;
    setGo:Dispatch<SetStateAction<string>>;
    cell:"string";
    winningMassage:"string";
}
 const  Cell = ({go,setGo,id,cells,setCells,cell,winningMassage}:cellProps) => {
    const handelClick =(e)=>{
if(winningMassage){
    return;
}
        const notTaken=!cells[id]
      if (notTaken){
        if (go==="circle"){
            handelCellChange('circle')
            setGo("cross")
        }else if (go==="cross"){
            handelCellChange('cross')
            setGo('circle')
        }
          
      }

      
    }

    const  handelCellChange = (cellToChange:string)=>{
             let copyCells=[...cells];
             copyCells[id]=cellToChange
             setCells(copyCells)
    }
  
  return (
    <div className="square" onClick={handelClick}>
      <div className={cell}>
        {cell ? (cell === "circle"  ? "O" : "X"):""}

      </div>
    </div>
  )
}
export default Cell