import React, { useEffect, useRef, useState } from 'react'
import circli_icon from "./assets/circle.png"
import cross_icon from "./assets/cross.png"
const Homepage = () => {

const [count,setCount] = useState(0);
const [list,setList] = useState([0,0,0,0,0,0,0,0,0]);
const [isWin,setIswin] = useState(false);
const [toggle,setToggle] = useState(0);
const [player,setPlayer] = useState("");

let box1 = useRef(null);
let box2 = useRef(null);
let box3 = useRef(null);
let box4 = useRef(null);
let box5 = useRef(null);
let box6 = useRef(null);
let box7 = useRef(null);
let box8 = useRef(null);
let box9 = useRef(null);

let box_array  = [box1,box2,box3,box4,box5,box6,box7,box8,box9];


function changeValue(target){

    let newArr = [...list];
    const ind = Number(target.id)-1;
    
  if(newArr[ind] === 0){
    if(toggle === 0){
        newArr[ind] = 1;
        setList(newArr)
        setToggle(1);
       target.childNodes[0].src = `${circli_icon}`
    }
    else{
        newArr[ind] = 2;
        setList(newArr)
        setToggle(0)
       target.childNodes[0].src = `${cross_icon}`
    }

      setCount(count+1);
  }
 

}

// useEffect(()=>{
//     function resetGame(){
        
    
//        
//     }

// },[])


useEffect(() => {
    // First row check
    if ((list[0] === list[1] && list[1] === list[2] && list[0] === 1) || (list[0] === list[1] && list[1] === list[2] && list[0] === 2)) {
      if(list[0] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[0] === list[3] && list[3] === list[6] && list[0] === 1) || (list[0] === list[3] && list[3] === list[6] && list[0] === 2)) {

      if(list[3] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[6] === list[7] && list[7] === list[8] && list[6] === 1) || (list[6] === list[7] && list[7] === list[8] && list[6] === 2)) {

      if(list[6] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[2] === list[5] && list[5] === list[8] && list[2] === 1) || (list[2] === list[5] && list[5] === list[8] && list[2] === 2)) {
    
      if(list[2] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[0] === list[4] && list[4] === list[8] && list[0] === 1) || (list[0] === list[4] && list[4] === list[8] && list[0] === 2)) {
 
      if(list[0] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[2] === list[4] && list[4] === list[6] && list[2] === 1) || (list[2] === list[4] && list[4] === list[6] && list[2] === 2)) {

      if(list[2] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[3] === list[4] && list[4] === list[5] && list[3] === 1) || (list[3] === list[4] && list[4] === list[5] && list[3] === 2)) {
 
        if(list[3] === 2) setPlayer("❌");
        else setPlayer("⭕");
        setIswin(true);
    } else if ((list[1] === list[4] && list[4] === list[7] && list[1] === 1) || (list[1] === list[4] && list[4] === list[7] && list[1] === 2)) {

        if(list[1] === 2) setPlayer("❌");
        else setPlayer("⭕");
        setIswin(true);
    }
}, [list]);

  return (
    <div  className='Conatiner'>

     {count===9 ?  <h3 className='Title'>Draw!!</h3>: <h3 className='Title'>Tic Tac Toe</h3> }

      <div className='game-box'>
         <div className="box" ref={box1} id='1'onClick={(e)=>{changeValue(e.target)}}>< img  alt="" /></div>
         <div className="box" ref={box2} id='2'onClick={(e)=>{changeValue(e.target)}}><img alt="" /></div>
         <div className="box" ref={box3} id='3'onClick={(e)=>{changeValue(e.target)}}><img  alt="" /></div>
         <div className="box" ref={box4} id='4'onClick={(e)=>{changeValue(e.target)}}><img alt="" /></div>
         <div className="box" ref={box5} id='5'onClick={(e)=>{changeValue(e.target)}}><img  alt="" /></div>
         <div className="box" ref={box6} id='6'onClick={(e)=>{changeValue(e.target)}}><img alt="" /></div>
         <div className="box" ref={box7} id='7'onClick={(e)=>{changeValue(e.target)}}><img alt="" /></div>
         <div className="box" ref={box8} id='8'onClick={(e)=>{changeValue(e.target)}}><img  alt="" /></div>
         <div className="box" ref={box9} id='9'onClick={(e)=>{changeValue(e.target)}}><img  alt="" /></div>
      </div>
  <div className="reset-button" onClick={()=>{
    const newArr = [0,0,0,0,0,0,0,0,0];
        setList(newArr)
    
        box_array.map((baap)=>{
         baap.current.childNodes[0].src = "";
        })

        setCount(0)
        }}>Reset</div>


   {  isWin &&
    <div className="pop-view">

    <div className="NewBox">
    <div className="winGame">
      <h3 style={{color:"white" , textAlign:"center"}}>Hureyy!! Player{player} won the game</h3>
      </div>

      <div className="reset-button" onClick={()=>{
        const newArr = [0,0,0,0,0,0,0,0,0];
        setList(newArr)
          
        box_array.map((baap)=>{
          baap.current.childNodes[0].src = "";
         })
         
        setCount(0)
        setIswin(false)
        }}>Reset</div>
    </div>
     
   </div>
   }
    </div>
  )
}

export default Homepage
