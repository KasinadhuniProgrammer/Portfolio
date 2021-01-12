import React from 'react';
import './Technical.css';

import Typing from 'react-typing-animation';

function Technical() {
    const NewAnimatedTypingComponent = () => (
        <Typing loop={true}>
          <span>Website coded with React.js</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={64} speed={5}/>
          <span>Email me at skasinad@gmail.com</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={64} speed={5}/>
          <span>Thank you, and best of luck!</span>
          <Typing.Delay ms={5000} />
          <Typing.Backspace count={64} speed={5}/>



        </Typing>
      );


    return (
        <div className="technical">
            <center><h1><NewAnimatedTypingComponent /></h1></center>

            
        </div>
    );

}

export default Technical;