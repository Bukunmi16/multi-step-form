import Header from "./Header"
import { useState } from "react"
import Step1 from "../stepsComponents/Step1"
import Step2 from "../stepsComponents/Step2"
import Step3 from "../stepsComponents/Step3"
import Step4 from "../stepsComponents/Step4"
import Thanks from "../stepsComponents/Thanks"
import arcadeImg from "../assets/icon-arcade.svg"
import advancedImg from "../assets/icon-advanced.svg"
import proImg from "../assets/icon-pro.svg"

export default function MultiFormSteps() {
    
    const [formData, setFormData] =useState({
        name: "",
        email: "",
        number: "",
        plan: {
            name: "",
            cost: ""
        },
        duration: "",
        addOns: []
    }) 


    function updateFormData(newData) {
        setFormData((prevData) => ({...prevData, ...newData}))        
    }
    
    // SELECTED PLANS
    const [selectedPlan, setSelectedPlan] = useState({})

    function selectPlan(plan, cost) {
        setSelectedPlan({
            name: plan,
            cost:cost
        })
        // setFormData((prev) => ({...prev, plan: selectPlan}))
        formData.plan.name = plan
        formData.plan.cost = cost 
    }

    console.log(formData);
    
    // STEPS
    const [step, setSteps] = useState(1)

    const [isChecked, setIsChecked] = useState(true)
    isChecked ? formData.duration = "yearly" : formData.duration = "monthly"
        

    //AddOns
    const addOnsList = [
        {
            id: 1,
            addOn: "Online service",
            description: "Access to multiplayer games",
            cost: `${formData.duration === "monthly" ? 1 : 10 }`  
        },
        {
            id: 2,
            addOn: "Larger Storage",
            description: "Extra 1TB of cloud save",
            cost: `${formData.duration === "monthly" ? 2 : 20 }`        
        },
        {
            id: 3,
            addOn: "Customizable profile",
            description: "Custom theme on your profile",
            cost: `${formData.duration === "monthly" ? 5 : 50 }` 
        },
    ]

    // console.log(typeof formData.number);
    


    const [checkedItems, setCheckedItems] = useState({});
  
    const handleCheckboxChange = (event, addOn) => {
      const { name, checked } = event.target;
  


      // Update state
      setCheckedItems((prev) => ({
        ...prev,
        [name]: checked,
      }));
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          addOns: [...prevData.addOns, {addOn:addOn.addOn, cost: addOn.cost}],
        }));
        // console.log("checked");
        };

      if (!checked) {
        setFormData((prevData) => ({
            ...prevData,
            addOns: formData.addOns.filter((item) => item.addOn !== addOn.addOn)
        }))   
        // console.log("unchecked");
      }
}

    

// ERRORS

const [errors, setErrors] = useState({})

const validateStep1 = () => {
    let newErrors = {}
    
    if (step === 1 && formData.name >= 0) {
        newErrors.name = "This field is required"
    }
    if (step === 1 && formData.email >= 0) {
        newErrors.email = "This field is required"
    }
    if (step === 1 && formData.number === '') {
        newErrors.number = "This field is required"
    }
    
    setErrors(newErrors)
    
    return Object.keys(newErrors).length === 0
}

const [errors2, setErrors2] = useState({})

const validateStep2 = () => {
    let step2Error = {}
    // console.log(formData.plan);
    
    if (formData.plan.name === "") {
        step2Error.plan = "Select a Plan"
    }

    setErrors2(step2Error)
    return Object.keys(step2Error).length === 0
}



//NAVIGATION
function navigateHeader(pageNumber) {

    let canNavigate = true

    for (let i = 0; i < pageNumber ; i++) {
        if (i === 1 && validateStep1() === false) {
            canNavigate = false
        }
        if (i === 2 && validateStep2() === false) {
            canNavigate = false
        }
        
    }
    
    if (canNavigate) {
        setSteps(pageNumber) 
        setErrors({})
    }else if (step === 1) {
        validateStep1()
    }else if (step === 2) {
        validateStep2()
    }
}

    function nextStep() {
            setSteps(prevStep => prevStep + 1)
    }

    function prevStep() {
        setSteps(prevStep => prevStep - 1)
    }

    // Game Plans



    const gamePlans = [
        {
            name: "Arcade",
            icon: arcadeImg,
            cost: `${formData.duration === "monthly" ? 9 : 90 }`  
        },
        {
            name: "Advanced",
            icon: advancedImg,
            cost: `${formData.duration === "monthly" ? 12 : 120 }`  
        },
        {
            name: "Pro",
            icon: proImg,
            cost: `${formData.duration === "monthly" ? 15 : 150 }`  
        }
    ]
    
        // FORM SUBMISSION
        
        function handleSubmit(event) {
            event.preventDefault();
            // const form = event.target
            // const data = new FormData(form)
    
            // const submittedData = {}
            // for (let [key, value] of data.entries()){
            //     submittedData[key] = value;
            // }
            // console.log(submittedData);
            
        }
        
       const [submittedData, setSubmittedData] = useState(false)

        function confirm() {
            setSubmittedData(true)         
            setSteps(0)
            console.log(submittedData);
        }

    return( 
        <>
        <Header
        step={step}
        submittedData={submittedData}
        navigate={navigateHeader}
        />
        <form onSubmit={handleSubmit}>
        {step === 1 && 
        <Step1
        error={errors}
        currentStep={step}
        nextStep={nextStep}
        formData={formData}
        validateStep1={validateStep1}
        updateFormData={updateFormData}
        />}

        {step === 2 && 
        <Step2 
        validateStep2={validateStep2}
        errors2={errors2}
        formData={formData}
        duration={formData.duration}
        setChecked={setIsChecked}
        isChecked={isChecked}
        currentStep={step}
        nextStep={nextStep}
        prevStep={prevStep}
        selectPlan={selectPlan}
        selectedPlan={selectedPlan}
        gamePlans={gamePlans}
        />}
        
        {step === 3 &&
        <Step3
        nextStep={nextStep}
        prevStep={prevStep}
        duration={formData.duration}
        addOns={addOnsList}
        chooseAddOn={handleCheckboxChange}
        checkedItems={checkedItems}
        />}
        
        {step === 4 &&
        <Step4
        prevStep={prevStep}
        formData={formData}
        addOnsList={addOnsList}
        setStep={setSteps}
        confirm={confirm}
        />}
        
        {submittedData === true &&
        <Thanks/>
        }
        </form>
            


        </>
    )
}