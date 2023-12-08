import React, { useEffect, useState } from 'react'
import circli_icon from "./assets/circle.png"
import cross_icon from "./assets/cross.png"
const Homepage = () => {

const [count,setCount] = useState(0);
const [list,setList] = useState([0,0,0,0,0,0,0,0,0]);
const [isWin,setIswin] = useState(false);
const [toggle,setToggle] = useState(0);
const [player,setPlayer] = useState("");

function changeValue(index){

    let newArr = [...list];
    const ind = Number(index)-1;
    
  if(newArr[ind] === 0){
    if(toggle === 0){
        newArr[ind] = 1;
        setList(newArr)
        setToggle(1);
        document.getElementById(`${index}`).childNodes[0].src = `${circli_icon}`
    }
    else{
        newArr[ind] = 2;
        setList(newArr)
        setToggle(0)
        document.getElementById(`${index}`).childNodes[0].src = `${cross_icon}`
    }

   
      console.log( document.getElementById(`${index}`).childNodes[0])

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
      console.log(1, 'hiee');
      if(list[0] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[0] === list[3] && list[3] === list[6] && list[0] === 1) || (list[0] === list[3] && list[3] === list[6] && list[0] === 2)) {
      console.log(2, 'hiee');
      if(list[3] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[6] === list[7] && list[7] === list[8] && list[6] === 1) || (list[6] === list[7] && list[7] === list[8] && list[6] === 2)) {
      console.log(3, 'hiee');
      if(list[6] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[2] === list[5] && list[5] === list[8] && list[2] === 1) || (list[2] === list[5] && list[5] === list[8] && list[2] === 2)) {
      console.log(4, 'hiee');
      if(list[2] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[0] === list[4] && list[4] === list[8] && list[0] === 1) || (list[0] === list[4] && list[4] === list[8] && list[0] === 2)) {
      console.log(5, 'hiee');
      if(list[0] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[2] === list[4] && list[4] === list[6] && list[2] === 1) || (list[2] === list[4] && list[4] === list[6] && list[2] === 2)) {
      console.log(6, 'hiee');
      if(list[2] === 2) setPlayer("❌");
      else setPlayer("⭕");
      setIswin(true);
    } else if ((list[3] === list[4] && list[4] === list[5] && list[3] === 1) || (list[3] === list[4] && list[4] === list[5] && list[3] === 2)) {
        console.log(6, 'hiee');
        if(list[3] === 2) setPlayer("❌");
        else setPlayer("⭕");
        setIswin(true);
    } else if ((list[1] === list[4] && list[4] === list[7] && list[1] === 1) || (list[1] === list[4] && list[4] === list[7] && list[1] === 2)) {
        console.log(6, 'hiee');
        if(list[1] === 2) setPlayer("❌");
        else setPlayer("⭕");
        setIswin(true);
    }
}, [list]);

{console.log(isWin,'kkkkk')}
  return (
    <div  className='Conatiner'>

{console.log(count,'count hai')}
     {count===9 ?  <h3 className='Title'>Draw!!</h3>: <h3 className='Title'>Tic Tac Toe</h3> }

      <div className='game-box'>
         <div className="box"  id='1'onClick={(e)=>{changeValue(e.target.id)}}><img  alt="" /></div>
         <div className="box"  id='2'onClick={(e)=>{changeValue(e.target.id)}}><img alt="" /></div>
         <div className="box"  id='3'onClick={(e)=>{changeValue(e.target.id)}}><img  alt="" /></div>
         <div className="box"  id='4'onClick={(e)=>{changeValue(e.target.id)}}><img alt="" /></div>
         <div className="box" id='5'onClick={(e)=>{changeValue(e.target.id)}}><img  alt="" /></div>
         <div className="box"  id='6'onClick={(e)=>{changeValue(e.target.id)}}><img alt="" /></div>
         <div className="box"  id='7'onClick={(e)=>{changeValue(e.target.id)}}><img alt="" /></div>
         <div className="box"  id='8'onClick={(e)=>{changeValue(e.target.id)}}><img  alt="" /></div>
         <div className="box" id='9'onClick={(e)=>{changeValue(e.target.id)}}><img  alt="" /></div>
      </div>
  <div className="reset-button" onClick={()=>{
    const newArr = [0,0,0,0,0,0,0,0,0];
        setList(newArr)
        let allBox = document.getElementsByClassName("game-box");
        let imagesBox = allBox[0].childNodes

        imagesBox.forEach((img) =>{
            img.childNodes[0].src = "";
        })
        setCount(0)
        console.log(imagesBox,'ppppppppppp')
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
        let allBox = document.getElementsByClassName("game-box");
        let imagesBox = allBox[0].childNodes

        imagesBox.forEach((img) =>{
            img.childNodes[0].src = "";
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
