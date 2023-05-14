import React from "react";

function Contact(){
    return(
        <div>

<div className="contact mb-4">
        
    <h2 className="text-light">Contact us</h2>
  
    <p className="text-cente text-light">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="mb-4 container">   
          <form id="contact-form">               
                <div className="row">                    
                    <div className="col-md-6 ">
                        <div className="md-form mb-4">
                            <input type="text" id="name" name="name" placeholder="Your name" className="form-control"/>                           
                        </div>
                    </div>                 

           
                    <div className="col-md-6">
                        <div className="md-form mb-4">
                            <input type="text" id="email" name="email" placeholder="Your email" className="form-control"/>
                           
                        </div>
                    </div>         

                </div>
            
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-4">
                            <input type="text" id="subject" name="subject" placeholder="Subject" className="form-control"/>
                          
                        </div>
                    </div>
                </div>
         

             
                <div className="row">

               
                    <div className="col-md-12">

                        <div className="md-form mb-4">
                            <textarea type="text" id="message" name="message" placeholder="Your message" rows="2" className="form-control md-textarea"></textarea>
                          
                        </div>

                    </div>
                </div>         

            </form>

            <div className="text-center text-md-left pb-4">
                <a className="btn btn-primary">Send</a>
            </div>          
   

    </div>
      </div>

      <div className="status container">
        <div className="text-center ">
         <ul className="list-unstyled row">
        <li className="col-lg-4 col-sm-12"><i className="fas fa-map-marker-alt fa-2x mt-4"></i>
            <p>San Francisco, CA 94126, USA</p>
        </li>

        <li className="col-lg-4 col-sm-12"><i className="fas fa-phone mt-4 fa-2x"></i>
            <p>+ 01 234 567 89</p>
        </li>

        <li className="col-lg-4 col-sm-12"><i className="fas fa-envelope mt-4 fa-2x"></i>
            <p>contact@Fortune.com</p>
        </li>
    </ul>
</div>
    </div>



        </div>
    )
}
export default Contact;