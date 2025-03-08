import clsx from "clsx"
export default function Step3({prevStep, checkedItems, chooseAddOn, nextStep, duration, addOns }) {
    
    const addOnElements = addOns.map((addOn, index) => {
        
        const checkboxClassName = clsx(
        {checked: checkedItems[addOn.addOn]},
        "add-on-elements"
        )
        
        
        return(
        <div  key={index} className={checkboxClassName}>
        <input id={index} name={addOn.addOn} checked={checkedItems[addOn.addOn || false]} className="checkbox" onChange={(event) => chooseAddOn(event, addOn)}  type="checkbox" value={addOn.addOn}/> 
        <span className="add-on-description">
        <p className="add-on">{addOn.addOn}</p>
        <span>{addOn.description}</span>
        </span>
        
        <span className="cost-duration">
        {duration === "monthly" ? `$${addOn.cost}/mo` : `$${addOn.cost}/yr`}
        </span>
        </div>
        )
    })

    return(
        <section className="step3">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        
        <div className="checkboxList">
        {addOnElements}
        </div>

        <div className="form-buttons">
            <button className="previous" onClick={prevStep}> Go Back </button>
            <button className="next" type="button" onClick={nextStep}>
                Next Step
            </button>
        </div>
        </section>
    )
}