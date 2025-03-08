export default function Step4({prevStep, setStep, confirm, formData}) {
    
    const addOns = formData.addOns
    
    const totalAddOnCost = addOns.reduce((acc, item) => acc + Number(item.cost), 0)
    const totalCost = totalAddOnCost + Number(formData.plan.cost)
    
    return(
        <section className="step4">
            <h1>Finishing Up</h1>
            <p className="page-instruction">Double-check everything looks okay before confirming</p>
        
        <div className="summary">
        <div className="plan-and-addOns">
        <div className="plan">
        <span className="plan-name">
        {formData.plan.name}
        {formData.duration === "monthly" ? " (Monthly)" : " (Yearly)"}
        
        <span onClick={() => setStep(prevStep => prevStep = 2)}
         className="edit-btn">Change</span>
        </span>
        <span className="plan-cost">
        {
        formData.duration === "monthly" ? `+$${formData.plan.cost}/mo` : `+$${formData.plan.cost}/yr`
        }
        
        </span>
        </div>

        <div className="addOns">
        {
            addOns.map((item, index) => {
                return (
            <span key={index}>
               <p>{item.addOn}</p>
               <p className="prices">{formData.duration === "monthly" ? `+$${item.cost}/mo` : `+$${item.cost}/yr`}</p>
            </span>
            )
            })
        }
        </div>
        
        </div>  
        <div className="total">
        <span>Total (per {formData.duration === "monthly" ? 'month' : 'year'})</span>
        <span className="total-cost">
            {formData.duration === "monthly" ? `+$${totalCost}/mo` : `+$${totalCost}/yr`}
        </span>
        </div>  
        </div>

        <div className="form-buttons">
            <button className="previous" onClick={prevStep}> Go Back </button>
            <button className="confirm" onClick={confirm} >Confirm</button>
        </div>

        </section>
    )
}