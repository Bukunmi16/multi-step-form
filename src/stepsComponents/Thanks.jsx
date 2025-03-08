import thankYou from "../assets/icon-thank-you.svg"
export default function Thanks(){

    return(
        <section className="thank-you-section">
            <div >
            <img src={thankYou} alt="" />
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription!
                We hope you have fun using our platform. If you need support,
                please feel free to email us at support@loremgaming.com.
            </p>
            </div>
        </section>
    )
}