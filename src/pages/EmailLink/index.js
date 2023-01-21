import React from 'react';


export default function EmailLink() {

 
  return (
    <div className='app'>
        <div className='main_email'>
            <div className='logo_email'>
                <img src="/assets/images/logo.png" alt="logo" />
            </div>
            <article>
                <p className='name_email'>Hi - Sam</p>
                <p className='subtext'>Vestibulum blandit viverra convallis</p>
                <div className='btn'>
                <button className='btn_email'>Reset</button>                    
                </div>
                <p className='main_text'>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue. Etiam non rutrum metus. In varius sit amet lorem tempus sagittis. Cras sed maximus enim, vel ultricies tortor. Pellentesque consectetur tellus ornare felis porta dapibus. Etiam eget viverra ipsum, ac posuere massa.</p>
                <p className='email_page_support'>Click here For support - <span>cvjuryhelpdesk</span></p>
            </article>
       </div>
    </div>  
  );
  }