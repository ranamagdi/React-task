import React from "react";

function News(){
    return(
        <div>
                <div className="container main-layout">
  
    <section className="border-bottom pb-4 mb-5">
      <div className="row gx-5">
        <div className="col-md-6 mb-4">
          <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
            <img src="images/mother.webp" className="img-fluid" />
            <a href="#">
              <div className="mask"></div>
            </a>
          </div>
        </div>
  
        <div className="col-md-6 mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-4">News of the day</span>
          <h4><strong>The Motherhood Maker</strong></h4>
          <p className="text-muted p_news">
            The Motherhood Maker Program: 5 different sessions to help you navigate the different stages of motherhood Diwan,
             9am to 12pm Price: 85$ per session 150$ for 2 sessions Book 1 session (please write in the notes section in checkout which session you're booking) Book 2 sessions
             There will be a break with light lunch .
          </p>
          <button type="button" className="btn btn-primary mt-3">Read more</button>
        </div>
      </div>
    </section>

    <section>
      <div className="row gx-lg-5">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
         
          <div>
           
            <div className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
              data-mdb-ripple-color="light">
              <img src="images/Awakened.jpg" className="img-fluid image-news" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>  
       
            
            <a href="" className="text-dark text-center">
              <h5>Awakened Relationships Workshop</h5>            
            </a>
            <p className="text-dark text-center p_news">
                Awakened Relationships Workshop with Najla Moussa May 20, 27, Jun 3, 10, 17 Fortune,
                12:30pm - 3:30pm Register through this link Workshop description:
                Awakened Relationships Workshop: Creating the connection you deserve Looking to build a connection 
                with your partner? Interested in strengthening your relationship? Are you trying to break 
                out of toxic relationship patterns.
              </p>    
            </div>
        </div>
  
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        
          <div>
          
            <div className="bg-image hover-overlay shadow-1-strong rounded-5 ripple mb-4"
              data-mdb-ripple-color="light">
              <img src="images/news2.jpg" className="img-fluid image-news"
                alt="Brooklyn Bridge" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
  
         
  
           
            <a href="" className="text-dark text-center">
              <h5>Fiction Writing Masterclass with Mai Serhan</h5> 
            </a>
            <p className="text-dark text-center p_news">
                Fiction Writing Masterclass with Mai Serhan 5 Sessions every Saturday starting 20 May May 20:
                Place May 27: Character Jun 3: Plot & Scene Building Jun 10: Perspective Jun 17: Voice Diwan,
                6:00pm to 9:00pm Register here Details: An intensive workshop that will take you through
                fiction's backdoor to show you how a story. 
              </p>      
                  
          </div>
        
        </div>
  
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
       
          <div>          
            <div className="bg-image hover-overlay shadow-1-strong rounded-5 ripple mb-4"
              data-mdb-ripple-color="light">
              <img src="images/news3.jpg" className="img-fluid image-news"
                alt="Golden Gate National Recreation Area" />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>  
            
            <a href="" className="text-dark text-center">
              <h5>Expat Moms & Kids in USA Meetup</h5> 
            </a>
            <p className="text-dark text-center p_news">
                Expat Moms & Kids in USA Meetup with Rachel Marcelle Saturday,
                20 May Fortune,12 to 1pm Age group 7-14 Book your spot here.
              </p>   
        </div>
      </div>
      </div>
    </section>
    </div>

        </div>
    );
}
export default News;