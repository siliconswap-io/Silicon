import React, {useState, useEffect} from 'react'

const Progressbar = ({ bgcolor, height }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Logic to update the progress state, for example:
      // Simulating an increase of progress by 10% each second
      setProgress(prevProgress => (prevProgress === 100 ? 0 : prevProgress + 10));
    }, 1000); // 1000 milliseconds = 1 second

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render



  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: '#080A19',
    borderRadius: 34
  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const progresstext = {
    color: '#FFFFFF',
    fontWeight: 700
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  )
}

export default Progressbar; 
