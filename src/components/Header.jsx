import clsx from "clsx"
export default function Header({navigate, submittedData, step}){
   
   console.log(submittedData);
   

    return(
        <header >
        <div className="page-number">
        
        <div className="step">
         <button  disabled={submittedData} style={step === 1 ? {backgroundColor:"hsl(228, 100%, 84%)", color: "hsl(213, 96%, 18%)"} : {backgroundColor:"transparent"}}onClick={() => navigate(1)}>1</button>
         <div className="step-info">
            <span className="step-name">STEP 1</span>
            <span className="action">YOUR INFO</span>
         </div>
        </div>
        
        <div className="step">
         <button disabled={submittedData} style={step === 2 ? {backgroundColor:"hsl(228, 100%, 84%)", color: "hsl(213, 96%, 18%)"} : {backgroundColor:"transparent"}}  onClick={()=> navigate(2)}>2</button>
         <div className="step-info">
            <span className="step-name">STEP 2</span>
            <span className="action">SELECT PLAN</span>
         </div>
        </div>
        
        <div   onClick={()=> navigate(3)} className="step"><button disabled={submittedData} style={step === 3 ? {backgroundColor:"hsl(228, 100%, 84%)", color: "hsl(213, 96%, 18%)"} : {backgroundColor:"transparent"}} >3</button>
         <div className="step-info">
            <span className="step-name">STEP 3</span>
            <span className="action">ADD-ONS</span>
         </div>
        </div>
        
        <div  onClick={()=> navigate(4)} className="step"><button disabled={submittedData} style={step === 4 ? {backgroundColor:"hsl(228, 100%, 84%)", color: "hsl(213, 96%, 18%)"} : {backgroundColor:"transparent"}} >4</button>
         <div className="step-info">
            <span className="step-name">STEP 4</span>
            <span className="action">SUMMARY</span>
         </div>
        </div>

        </div>
           </header>       
    )
}