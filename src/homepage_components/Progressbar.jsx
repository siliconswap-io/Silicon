import React, {useState, useEffect} from 'react'


const Progressbar = () => {

    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

  return (
    <div>
        <div className='progressbar'>
            <div style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: 'blue',
                transition: "width 0.5s"
            }}></div>
            <span>{ filled }%</span>
        </div>
    </div>
  )
}

export default Progressbar