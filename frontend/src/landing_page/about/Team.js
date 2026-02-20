import React from 'react'

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-3 mt-5' >
                <h1 className='fs-1 text-center'>People</h1>
            </div>
            <div className='row p-5' style={{lineHeight:"1.8", fontSize:"1.1em"}}>
                <div className='col-6 p-5 text-center'>
                    <img src='media/images/ritik res.jpg' alt='Make the website persom image' style={{ height:"400px",width:"400px", borderRadius:"50%", objectFit:"cover"}}/>
                <h4 className='mt-4'>Ritik Pandey</h4>
                <h5>Creator</h5>
                </div>
                <div className='col-6 ' style={{padding:"7%"}}>
                   <p>Ritik founded this platform with the goal of building clean, functional, and user-friendly websites. 
                      What started as a passion for web technologies has grown into a commitment to creating simple and 
                      effective digital experiences.
                    </p>
                    <p>He focuses on modern web development and continuously works on improving design, performance, 
                        and usability.
                    </p>
                    <p>Exploring new technologies and building projects is his zen.</p>
                    <p>Connect on <a href='https://github.com/RitikPandey278' style={{textDecoration:"none"}}>GitHub</a> / <a href='https://www.linkedin.com/in/ritik-pandey-44221a28a/' style={{textDecoration:"none"}}>LinkedIn</a>  / <a href='https://eloquent-kheer-ed98a8.netlify.app/' style={{textDecoration:"none"}}>Portfolio</a></p>
                </div> 
            </div>
        </div>
     );
}

export default Team;