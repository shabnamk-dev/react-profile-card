import profilePic from './assets/image.png'
function Card(){
    return(
        <body>
            <div className="card">
            <img className="card-Img" src={profilePic} alt="Profile Picture"></img>
            <h2 className='card-title'>Shabnam Khan</h2>
            <p className='card-text'>I'm a Bsc. Computer Science Graduate and I love designing extra-ordinary websites.</p>
            <button className='buttons' onClick={()=>
                window.location.href='mailto:shabnamk1003@gmail.com'}>Contact me</button>
            <button className='buttons' onClick={()=>
                window.open("https://github.com/shabnamk-dev")}>GitHub</button>
        </div>
        </body>
        
    );
}

export default Card