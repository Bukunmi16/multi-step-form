import clsx from "clsx"

export default function Step1({currentStep, error, validateStep1, updateFormData, formData, nextStep}) {
    
    // const requiredClassName = clsx(
    //     {required: error.name}
    // )

    function handleClick() {
        if(validateStep1()){
            nextStep()
        }else{
            validateStep1()
        }
    }

    return(
        <section className="step1">
        <h1 className="heading">
        Personal Info
        </h1>

        <p>
        Please provide your name, email, address and phone number.
        </p>
        
        <div className="label-warning">
        <label htmlFor="name" >Name</label>
        { error.name && <span className="required">This field is required</span>}        </div>
        <input 
        className={error.name && "input-required"}
        type="text" 
        required 
        name="name" 
        value={formData.name.length > 0 ? formData.name : ""}
        onChange={(e) => (updateFormData({name: e.target.value}))}
        placeholder="e.g Stephen King"
        />    
        
        <div className="label-warning">
        <label htmlFor="email">Email</label>
        {error.email && <span className="required">This field is required</span>}        </div>
        <input 
        type="email" 
        required 
        className={error.email && "input-required"}
        name="email" 
        value={formData.email.length > 0 ? formData.email : ""}
        // value={formData.email}
        onChange={(e) => (updateFormData({email: e.target.value}))}
        placeholder="e.g stephenking@lorem.com"
        />    
        
        <div className="label-warning">
        <label htmlFor="number">Phone Number</label> 
        {error.number && <span className="required">This field is required</span>}        </div>
        <input 
        type="number"
        className={`${error.name && "input-required"} phone-number-input`}
        required 
        value={formData.number.length > 0 ? formData.number : ""}
        name="number"
        // value={formData.number}
        onChange={(e) => (updateFormData({number: e.target.value}))} 
        placeholder="e.g +1 234 567 890"
        />    

        <div className="form-buttons">
           {currentStep === 1 ? <span></span> : <button className="previous"> Go Back </button>}
            <button className="next" onClick={handleClick}>Next Step</button>
        </div>

        
        </section>
    )   
}