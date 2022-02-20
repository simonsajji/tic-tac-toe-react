

class App extends React.Component {

    constructor(){
        super();
        this.state={
            counter:0,
        }
    }

    resetGame=()=>{
        this.setState((prevState)=>{
            return{
                counter:0,

            }
        });

        window.location.reload();

    }



    checkGameStatus=(val)=>{

        let item1=document.getElementById("0");
        let item2=document.getElementById("1");
        let item3=document.getElementById("2");
        let item4=document.getElementById("3");
        let item5=document.getElementById("4");
        let item6=document.getElementById("5");
        let item7=document.getElementById("6");
        let item8=document.getElementById("7");
        let item9=document.getElementById("8");
        

       

        let id=parseInt(val.target.id)
        if(this.state.counter >6){
            alert("DRAW MATCH");
        }

        //  X part

        if(val.target.innerHTML=="X"){

            console.log(id)
            if(id==0 || item1.innerHTML=="X"){
                if(item2.innerHTML=="X" && item3.innerHTML=="X" ){
                    alert("Player X has won !!");

                }
                else if(item4.innerHTML=="X" && item7.innerHTML=="X"){
                    alert("Player X has won !!");

                }

                // Diagonals

                else if(item5.innerHTML=="X" && item9.innerHTML=="X"){

                    alert("Player X has won !!");

                }
                
                

            }
            if(id==1 || item2.innerHTML=="X"){
                if(item1.innerHTML=="X" && item3.innerHTML=="X" ){
                    alert("Player X has won !!");

                }
                else if(item5.innerHTML=="X" && item8.innerHTML=="X"){
                    alert("Player X has won !!");

                }
                

            }
            if(id==2 || item3.innerHTML=="X"){
                if(item1.innerHTML=="X" && item2.innerHTML=="X" ){
                    alert("Player X has won !!");

                }
                else if(item6.innerHTML=="X" && item9.innerHTML=="X"){
                   alert("Player X has won !!");

                }

                // Diagonals

                else if(item5.innerHTML=="X" && item7.innerHTML=="X"){

                    alert("Player X has won !!");

                }
                

            }




        }

        // Y part

        else if(val.target.innerHTML=="O"){
            console.log(id);
            if(id==0 || item1.innerHTML=="O"){
                if(item1.innerHTML=="O" && item2.innerHTML=="O" ){
                    alert("Player O has won !!");


                }
                else if(item4.innerHTML=="O" && item7.innerHTML=="O"){
                    alert("Player O has won !!");

                }

                // Diagonals

                else if(item5.innerHTML=="O" && item9.innerHTML=="O"){

                    alert("Player O has won !!");

                }
                

            }
            if(id==1 || item2.innerHTML=="O"){
                if(item1.innerHTML=="O" && item3.innerHTML=="O" ){
                    alert("Player O has won !!");

                }
                else if(item5.innerHTML=="O" && item8.innerHTML=="O"){
                   alert("Player O has won !!");

                }
                

            }
            if(id==2 || item3.innerHTML=="O"){
                if(item1.innerHTML=="O" && item2.innerHTML=="O" ){
                   alert("Player O has won !!");

                }
                else if(item6.innerHTML=="O" && item9.innerHTML=="O"){
                    alert("Player O has won !!");

                }

                // Diagonals

                else if(item5.innerHTML=="O" && item7.innerHTML=="O"){

                    alert("Player O has won !!");

                }


                

            }



        }
    }

    updateVal=(e)=>{

        if(document.getElementById("player2").classList.contains("hidden")){
            e.target.innerHTML="X";
            this.setState((prevState)=>{
                return{
                    counter:prevState.counter +1,

                }
            })

             
            

            e.target.style.color="#a12016";
            document.getElementById("player1").classList.add("hidden");
            document.getElementById("player2").classList.remove("hidden");
            console.log(e.target.parentNode)

            this.checkGameStatus(e);


        }
        else{
            e.target.innerHTML="O";
            this.setState((prevState)=>{
                return{
                    counter:prevState.counter +1,

                }
                
            })

            e.target.style.color="blue";
            document.getElementById("player2").classList.add("hidden");
            document.getElementById("player1").classList.remove("hidden");
            this.checkGameStatus(e);
            console.log(e.target.parentNode)

        }

        

    }

    
    render() {



       
        
        return (
            <div className="container">

                

                <div className="flex1">
                    <div className="players">
                        <span id="player1">Player X</span> 
                        <span id="player2" className="hidden">Player O</span> 
                    </div>

                    <div className="buttons">
                        <input id="reset_btn"type="submit"value="NEW GAME" onClick={this.resetGame}/>
                    </div>
                    
                </div>
                <div className="box">

                    
                    <div className="items" id="0" onClick={this.updateVal}></div>
                    <div className="items" id="1" onClick={this.updateVal}></div>
                    <div className="items" id="2" onClick={this.updateVal}></div>
                    <div className="items" id="3"  onClick={this.updateVal}></div>
                    <div className="items" id="4" onClick={this.updateVal}></div>
                    <div className="items" id="5" onClick={this.updateVal}></div>
                    <div className="items" id="6" onClick={this.updateVal}></div>
                    <div className="items" id="7" onClick={this.updateVal}></div>
                    <div className="items" id="8" onClick={this.updateVal}></div>




                    
                    

                </div>

                

               
            </div>
        );
    }
}

