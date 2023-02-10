import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Kontakt() {
    const form = useRef();

    function showDiv(elementId){
        document.getElementById(elementId).style.visibility="visible";
        setTimeout(function () {
            document.getElementById(elementId).style.visibility="hidden"},4000);
        
    }
    function resetForm(){
        document.getElementById('myform').reset();
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_p6exyq6', 'template_f0k91si', form.current, 'MuDfU0QgYam48ct3-')
        .then((result) => {
            showDiv("porukaUspešno");
            resetForm();

        },
            (error) => {
                showDiv("porukaNeuspešno");
                resetForm();

            });

    }
    return (<>
        <div className='form-div'>

            <form ref={form} id="myform"
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
            >
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Ime"
                        name="name" id="name"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                        placeholder="Poruka"
                        name="message"
                        className=" px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required style={{ width: 300 + "px" }}
                    />
                </div>
                <div className="mb-3 pt-0">
                    <button
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit" value="send" style={{ backgroundColor: "black", height: 50 + "px",border: "none" }}
                    >
                        Posalji
                    </button>
                </div>
            </form> 
          
        </div>  
        <div id="porukaUspešno" style={{visibility:"hidden"}}>
            Uspesno ste nas kontaktirali. Uzvraticemo porukom sto pre!
            </div>
        <div id="porukaNeuspešno" style={{visibility: "hidden"}}>
        Greska! Pokusajte kasnije.
            </div>
        
       
    </>

    );
}

export default Kontakt
