import { useState } from "react"

export default function Step2({prevStep, gamePlans, formData, selectedPlan, errors2, validateStep2, duration, selectPlan, currentStep, setChecked, isChecked, nextStep}) {
    
    
    
    const planElements = gamePlans.map((plan, index) => {
        console.log(plan.icon);
        return(
            
            <button className={selectedPlan.name === plan.name ? "selected-plan" : ""}  onClick={() => selectPlan(plan.name, plan.cost)} key={index}>
            <img src={plan.icon} alt="plan-img" />
            <div className="plan-details">
            <span className="plan-name"  >{plan.name}</span>
            <span className="pricing">{isChecked ? `$${plan.cost}/yr` : `$${plan.cost}/mo`}</span>
            <span className="bonus">{isChecked && "2 months free"}</span>
            </div>
            </button>
        )
    })

    // console.log(duration);

    const selectedColor = {
        color:  "hsl(213, 96%, 18%)"
    }
    const unSelectedColor = {
        color:  "hsl(228, 5.40%, 63.90%)"
    }
    
    function check() {
        setChecked(!isChecked) 
        formData.addOns.map( addOn => {
            if (!isChecked ) {
                addOn.cost = addOn.cost*10
            }else{
                addOn.cost = addOn.cost/10                
            }
        })
            if (!isChecked ) {
                formData.plan.cost = formData.plan.cost*10
            }else{
                formData.plan.cost = formData.plan.cost/10
            }
    }

    const handleClick = () => {
        if (validateStep2()) {
            nextStep()
        }else{
            validateStep2()
        }
    }

    return(
        <section className="step2">
        
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>

        {errors2.plan && <div className="plan-required">Select a Gaming Plan</div>}

        <div className="plans">
        {planElements}
        </div>
        <div className="duration">

        <span style={duration !== "monthly" ?  unSelectedColor : selectedColor} >Monthly</span>

        <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={check}/>
        <span className="slider"></span>
       
        </label>

        <span style={duration !== "yearly" ? unSelectedColor : selectedColor} >Yearly</span>

        </div>

        <div className="form-buttons">
            <button className="previous" onClick={prevStep}> Go Back </button>
            <button className="next" onClick={handleClick}>
                Next Step
            </button>
        </div>
        </section>
    )
}