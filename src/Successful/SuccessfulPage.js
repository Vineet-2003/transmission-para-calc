import React from 'react';
import "./SuccessfulPage.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

const SuccessfulPage = () =>{

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

      const round = (number, decimalPlaces) =>{
        const factorOfTen = Math.pow(10, decimalPlaces)
        return Math.round(number * factorOfTen)/factorOfTen
      }
      const cartesian2Polar = (x, y) => {
        console.log("the real is %lf",x);
        console.log("the img is %lf",y);
        var distance = Math.sqrt(x*x + y*y);
        var angle = round((180/Math.PI)*(Math.atan2(y,x)),2) 
        var polarCoor = { distance:distance, angle:angle }
        return polarCoor
    }
      const location = useLocation();
      var object = location.state.result;
      // eslint-disable-next-line use-isnan
      if((object[2] === NaN) && (object[4] === NaN) && (object[6] === NaN) && (object[7] === NaN)){
        return(
          <div>
            <h1>Return to Home page</h1>
            <button><Link to={"/"}>Home Page</Link></button>
          </div>
        )
      }
          else
          {
            return (
            <div className='container'>
            <div className='box' id='box'>
                <div className='user-response'>
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn={"span 12"}>
                          <Box><p className='heading1'>Your response has been record.</p></Box>
                    </Box>
                  </Box>

                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
                      <Box gridColumn={"span 12"} className='sub-box'>
                            <Box><p className='sub-box-heading'>Input Response</p></Box>
                      </Box>
                  </Box>  
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Type of spacing</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{(object[0] === 1)? "Symmetrical spacing" : "Unsymmetrical spacing"}</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Type of model</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{(object[0] === 1)? "Short model" : "Norminal PI model"}</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Diameter of each strand</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[2]} cm</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Number of strands in each sub conductor</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[3]}</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Spacing between the sub-conductors</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[4]} cm</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Number of sub-conductors per bundle</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[5]}</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Spacing between the phase conductors</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[6]*(10**-2)} m</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Length of the line</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[7]} km</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Resistance of the line</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[8]} ohms per km</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Power Frequency</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[9]} Hz</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Nominal System Voltage</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[10] *(10**-3)} kV</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Receiving end load in MW</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[11] * (10**-6)} MW</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Power factor of the receiving end load</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{object[12]} lagging</Box>
                      </Box>
                  </Box>                    
                  {/* output response */}
                    <Box gridColumn={{md:"span 12",xl:"span 12"}} className='sub-box'>
                          <Box><p className='sub-box-heading'>Output Response</p></Box>
                    </Box>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Inductance per phase per km in H/km</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round((object[13]*(10**6)), 4)} mH/km</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Capacitance per phase per km in F/km</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round((object[14]*(10**9)), 4)} uF/km </Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Inductive reactance of the line</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round(object[15], 4)} ohms</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Capacitive reactance of the line</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round((object[16]  * (10**3)), 4)} mOhms</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Charging current drawn from the sending end substation</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round(object[17] * (10**3), 4)} A/km</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>ABCD parameters of the line</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0.5}>
                            <Box gridColumn={{md:"span 6",xl:"span 7"}} className='value'>A = {(object[1] === 1)? (1) : (round(cartesian2Polar(object[18][0][0],object[18][0][1]).distance, 3))}&#8736;{(object[1] === 1)? (0) : (cartesian2Polar(round(object[18][0][0], 2),round(object[18][0][1], 2)).angle)}</Box>
                            <Box gridColumn={{md:"span 6",xl:"span 5"}} className='value'>B = {round(cartesian2Polar(object[18][1][0],object[18][1][1]).distance, 3)}&#8736;{cartesian2Polar(round(object[18][1][0], 2),round(object[18][1][1], 2)).angle}</Box>
                          </Box>
                          <br />
                          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0.5}>
                            <Box gridColumn={{md:"span 6",xl:"span 7"}} className='value'>C = {(object[1] === 1)? (1) : (round(((cartesian2Polar(object[18][2][0],object[18][2][1]).distance) * (10**3)), 3))}{(object[1] === 1)? ("") : ("x 10^-3")}&#8736;{(object[1] === 1)? (0) : (cartesian2Polar(round(object[18][2][0], 2),round(object[18][2][1], 2)).angle)}</Box>
                            <Box gridColumn={{md:"span 6",xl:"span 5"}} className='value'>D = {(object[1] === 1)? (1) : (round(cartesian2Polar(object[18][3][0],object[18][3][1]).distance, 3))}&#8736;{(object[1] === 1)? (0) : (cartesian2Polar(round(object[18][3][0], 2),round(object[18][3][1], 2)).angle)}</Box>
                          </Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Sending end voltage in kV, if the receiving end voltage is maintained at nominal system voltage</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round((cartesian2Polar(object[19][0], object[19][1])).distance *(10**-3), 4)}&#8736; {(cartesian2Polar(object[19][0], object[19][1])).angle} kV</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Sending end current</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round((cartesian2Polar(object[20][0], object[20][1])).distance, 3)}&#8736; {(cartesian2Polar(object[20][0], object[20][1])).angle} A</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Percentage voltage regulation</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round(object[21], 3)} &#37;</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Power loss in the line in MW</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round(object[22] * (10**-6), 3)} MW</Box>
                      </Box>
                  </Box>                    
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn={{md:"span 6",xl:"span 7"}} className='sub-box'>
                          <Box className='box-text'>Transmission efficiency</Box>
                      </Box>
                      <Box gridColumn={{md:"span 6",xl:"span 5"}} className='sub-box'>
                          <Box className="value">{round(object[23],3)} &#37;</Box>
                      </Box>
                  </Box>                   
                </div>
            </div>
            <div className='print'>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0.5}>
                  <Box gridColumn={{md:"span 6",xl:"span 7"}} className='button-box'>
                      <Box className='box-text'><Button variant="contained" color="success" onClick={() => { window.print() }}><p>Print</p></Button></Box>
                  </Box>
                  <Box gridColumn={{md:"span 6",xl:"span 5"}} className='button-box'>
                      <Box className='box-text'><BootstrapButton variant="contained" disableRipple><Link to={"/"} className='link'><p>Home Page</p></Link></BootstrapButton></Box>
                  </Box>
              </Box>
            </div>
        </div>
        )
      }
    }

export default SuccessfulPage ;