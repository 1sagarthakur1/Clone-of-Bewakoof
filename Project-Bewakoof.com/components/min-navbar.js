let minNavbar = () => {
    return`
    <style>
    #t1Container
          {
               display: flex;
               /* justify-content: space-between; */
               border-top: 1px solid gray;
               border-bottom: 1px solid gray;
               padding-bottom: 10px;
               
          }
          #t1img
          {
               height: 27px;
               margin-top: 10px;
               margin-left: 70px;
          }
          #signupLogo
          {
               line-height: 0px;
               /* border: 2px solid red; */
               margin-left: 55%;
               margin-top:25px;
          }
          h3
          {
              
               padding-bottom: 10px;
               border-radius: 10px;
               padding-left: 70px;
               color: #333333;
          }
          </style>

    <!-- this is the implementation of NavBaar section -->
    <div id="t1Container">
         <div>
              <a href="./index.html">

                   <img id="t1img" src="/images/bewakooflogo.png" alt="TopHeading Img">
              </a>
         </div>
         <div id="signupLogo">
              <p style="color: #bdd4e5; font-size: 13px;font-weight: 300; > Signed as</p>
              <h4 style="font-weight: 400; font-size: 15px; ">sagarthakur@gmail.com</h4>
         </div>
    </div>




    `;
}
export default minNavbar;