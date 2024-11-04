import './Contact.css'

export default function Contact(){
    const config={
        Email:'rajaguru246@gmail.com',
        Mobile:'8807409473',
    }
return<section className="contact">
    <h1>Contact</h1>
<div className="contact_container ">
    
    <p className="pb-5">If you want to discuss more, please contact me</p>
    <p className="py-2"><span className="font-bold">Email:</span> {config.Email}</p>
    <p className="pb-2"><span className="font-bold">Mobile:</span> {config.Mobile}</p>


</div>
</section>
}