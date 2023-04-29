import React from "react";
import "./parameter.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const Parameters = () => {
  var object = {};
  const navigate = useNavigate();
  const spacing = [{ label: "Symmetrical spacing" },{ label: "Unsymmetrical spacing" }];
  const model = [{ label: "Short Model" }, { label: "Norminal Pi Model" }];
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  return (
    <div id="parameter">
      <div className="heading">
        <h1>List of Parameters</h1>
      </div>
      <div className="model">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 12",
              md: "span 7",
              xl: "span 11",
            }}
          >
            <Box>
              <p className="box-heading">Select the type of spacing</p>
            </Box>
          </Box>
          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 12",
              md: "span 5",
              xl: "span 1",
            }}
          >
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={spacing}
                sx={{ width: { xs: 200, sm: 200, md: 200, xl: 350 } }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="type of spacing"
                    name="type-of-spacing"
                  />
                )}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
          className="padding-top-heading"
        >
          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 12",
              md: "span 7",
              xl: "span 11",
            }}
          >
            <Box>
              <p className="box-heading">Select the type of model</p>
            </Box>
          </Box>
          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 12",
              md: "span 5",
              xl: "span 1",
            }}
          >
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={model}
                sx={{ width: { xs: 200, sm: 200, md: 200, xl: 350 } }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="type of model"
                    name="type-of-model"
                  />
                )}
              />
            </Box>
          </Box>
        </Box>
      </div>
      <div className="phy_para">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <Box>
              <p className="box-heading">Select physical parameters</p>
            </Box>
          </Box>
        </Box>
        <div className="padding-side">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 11",
              }}
            >
              <Box>
                <p className="phy-sub-heading">Diameter of each strand</p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 1",
              }}
            >
              <Box>
                <FormControl
                  sx={{ m: 1, width: { xs: 200, sm: 200, md: 200, xl: 300 } }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "diameter of strand",
                      "typeof" : "number",
                    }}
                    name="dia-strand"
                    typeof="number"
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 9",
              }}
            >
              <Box>
                <p className="phy-sub-heading padding-top-sub-heading">
                  Number of strands in each sub conductor
                </p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 3",
              }}
              className="padding-top-sub-heading"
            >
              <Box>
                <Slider
                  aria-label="Number of strands in each sub conductor"
                  defaultValue={5}
                  valueLabelDisplay="auto"
                  marks
                  min={1}
                  max={50}
                  name="Number-of-strands"
                />
              </Box>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 11",
              }}
            >
              <Box>
                <p className="phy-sub-heading">Spacing between the sub-conductors</p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 1",
              }}
            >
              <Box>
                <FormControl
                  sx={{ m: 1, width: { xs: 200, sm: 200, md: 200, xl: 300 } }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "diameter of strand",
                    }}
                    name="spacing-subConductor"
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 9",
              }}
            >
              <Box>
                <p className="phy-sub-heading padding-top-sub-heading">
                  Number of sub-conductors per bundle
                </p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 3",
              }}
              className="padding-top-sub-heading"
            >
              <Box>
                <Slider
                  aria-label="Temperature"
                  defaultValue={5}
                  valueLabelDisplay="auto"
                  marks
                  min={1}
                  max={8}
                  name="number-subConductor-bundle"
                />
              </Box>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 11",
              }}
            >
              <Box>
                <p className="phy-sub-heading">
                  Spacing between the phase conductors
                </p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 1",
              }}
            >
              <Box>
                <FormControl
                  sx={{ m: 1, width: { xs: 200, sm: 200, md: 200, xl: 300 } }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">m</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "Spacing between the phase conductors",
                    }}
                    name="spacing-phaseConductor"
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 11",
              }}
            >
              <Box>
                <p className="phy-sub-heading">Length of the line</p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 1",
              }}
            >
              <Box>
                <FormControl
                  sx={{ m: 1, width: { xs: 200, sm: 200, md: 200, xl: 300 } }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">Km</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "Length of the line",
                    }}
                    name="length-line"
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
        </div>
      </div>

      <div className="elec_para">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <Box>
              <p className="box-heading">Select electrical parameters</p>
            </Box>
          </Box>
        </Box>
        <div className="padding-side">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 11",
              }}
            >
              <Box>
                <p className="phy-sub-heading">Resistance of the line per km</p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 1",
              }}
            >
              <Box>
                <FormControl
                  sx={{ m: 1, width: { xs: 200, sm: 200, md: 200, xl: 300 } }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">ohms per km</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "resistance of the line per km",
                    }}
                    name="resistance-line"
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 11",
              }}
            >
              <Box>
                <p className="phy-sub-heading">Power Frequency</p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 1",
              }}
            >
              <Box>
                <FormControl
                  sx={{ m: 1, width: { xs: 200, sm: 200, md: 200, xl: 300 } }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">Hz</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "power frequency",
                    }}
                    name="freq"
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 11",
              }}
            >
              <Box>
                <p className="phy-sub-heading">Nominal System Voltage</p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 1",
              }}
            >
              <Box>
                <FormControl
                  sx={{ m: 1, width: { xs: 200, sm: 200, md: 200, xl: 300 } }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">kV</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "nominal system voltage",
                    }}
                    name="voltage"
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 11",
              }}
            >
              <Box>
                <p className="phy-sub-heading">Receiving end load in MW</p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 1",
              }}
            >
              <Box>
                <FormControl
                  sx={{ m: 1, width: { xs: 200, sm: 200, md: 200, xl: 300 } }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">MW</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "receiving end load in MW",
                    }}
                    name="power"
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 7",
                xl: "span 11",
              }}
            >
              <Box>
                <p className="phy-sub-heading">
                  Power factor of the receiving end load
                </p>
              </Box>
            </Box>
            <Box
              gridColumn={{
                xs: "span 12",
                sm: "span 12",
                md: "span 5",
                xl: "span 1",
              }}
            >
              <Box>
                <FormControl
                  sx={{ m: 1, width: { xs: 200, sm: 200, md: 200, xl: 300 } }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">lagging</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "Power factor of the receiving end load",
                    }}
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
      <div className="submit">
        <ColorButton variant="contained" type="submit" onClick={onHandle}>
          <p>
            <span className="link">Submit</span>
          </p>
        </ColorButton>
      </div>
    </div>
  );

  // All calculation in Javascript
  function onHandle(e) {
    e.preventDefault();
    const input = document.querySelectorAll("input");
    let i = 0;
    input.forEach((element) => {
      object[i++] = element.value;
    });
  
    const typeSpacing = ((object[0] === "Symmetrical spacing")? 1 : 0);
    const typeModel = ((object[1] === "Short Model")? 1 : 0);
    const diaStrand = parseFloat(object[2], 10) ;
    const numStrand = parseFloat(object[3], 10);
    const spacingSubCond = parseFloat(object[4], 10);
    const numSubCond = parseFloat(object[5], 10);
    const spacingPhaseCond = parseFloat(object[6], 10) * (10**2); // converted m to cm 
    const length = parseFloat(object[7], 10);
    const resistance = parseFloat(object[8], 10);
    const totalResistance = resistance*length; // total resistance in ohms
    const freq = parseFloat(object[9], 10);
    const volt = parseFloat(object[10], 10)* (10**3); //converted kV to V 
    const recePower = parseFloat(object[11], 10) * (10**6); //converted to MW to W
    const powerFactor = parseFloat(object[12], 10);
    
    // calculate no of layers in each sub conductor
    let layer = (3+Math.pow((9+12*(numStrand -1)), 0.5))/2 ;

    // calculate radius of each sub-conductor
    let radSubCond = (2*layer -1)* diaStrand/2;

    // calculate the GMD of sub-conductor
    let sgmd;
    switch (numSubCond) {
        case 1:
            sgmd = radSubCond;
            break;
        case 2:
            sgmd = (radSubCond*spacingSubCond)**(1/2);
            break;
        case 3:
            sgmd = (radSubCond*(spacingSubCond)**2)**(1/3);
            break;
        case 4:
            sgmd = (2*Math.sin((Math.PI/180)*90/2)*radSubCond*(spacingSubCond)**3)**(1/4);
            break;
        case 5:
            sgmd = (radSubCond*((spacingSubCond)**4)*((2*Math.sin((Math.PI/180)*108/2))**2))**(1/5);
            break;
        case 6:
            sgmd = (2*radSubCond*(spacingSubCond**5)*((2*Math.sin((Math.PI/180)*120/2))**2))**(1/6);
            break;
        case 7:
            sgmd = (radSubCond*(spacingSubCond**6)*((2*Math.sin((Math.PI/180)*128.57/2))**2)*((1+2*Math.cos((Math.PI/180)*(180-128.5)))**2))**(1/7);
            break;
        case 8:
            sgmd = (radSubCond*(spacingSubCond**7)*((2*Math.sin((Math.PI/180)*135/2))**2)*((1+Math.cos((Math.PI/180)*22.5))**2)*(2*(Math.sin((Math.PI/180)*(135/2)) + Math.sin((Math.PI/180)*(90 - 73.5)))))**(1/8);
            break;
        default:
            break;
    }
   //calculate the MGMD of phase conductor 
    let mgmd;
    switch (typeSpacing) {
      case 1:
        mgmd = spacingPhaseCond;
        break;
      case 0:
        mgmd = (2*spacingPhaseCond**3)**(1/3);
        break;
    
      default:
        break;
    }

    // calculate Inductance and Capacitance per phase
    let ind = (2*10**-7)*Math.log(mgmd/(sgmd*(0.7788**(1/numSubCond)))); // henry per m
    let cap = ((2*Math.PI*8.85*(10**-12))/Math.log(mgmd/(sgmd))); // F per m
    let totalCap = cap*length*(10**3); 
    // calculate Reactance 
    let reaInd = (2*Math.PI*freq*ind)*length*(10**3) ; // omhs 
    let reaCap = (1/2*Math.PI*freq*totalCap); // omhs 
  
    // calculate charging current 
    let chargingCurrent = (volt/(3**0.5))*(2*Math.PI*freq*cap) ; // amp per metre
  
    // calculate ABCD parameters
    let ABCD;
    let Y = (2*Math.PI*freq*cap)*(length*10**3);
    switch (typeModel) {
      case 1:
        // short model
        ABCD = {
          0: 1,
          1: [totalResistance, reaInd],
          2: 0,
          3: 1,
        }
        break;
  
      case 0:
        // norminal pi model
        ABCD = {
          0: [1+(Y*reaInd/2), - totalResistance*(Y/2)],
          1: [totalResistance, reaInd],
          2: [-(totalResistance*(Y**2))/4, -(((reaInd*(Y**2))/4) + (Y))],
          3: [1+(Y*reaInd/2), - totalResistance*(Y/2)],
        }
        break;
    
      default:
        break;
    }
  
    // calculate the receiving end current
    let ir = recePower/((3**0.5)*volt*powerFactor); //magnitude 
    let Ir = [ir*powerFactor, ir*((1-(powerFactor**2))**0.5)]; //in complex form
  
    // calculate the sending end voltage
    let Vs;
    let Z = [totalResistance, reaInd];
    switch (typeModel) {
      case 1:
        // short model
        Vs = [volt+((Z[0]*Ir[0]) - (Z[1]*Ir[1])), (Z[0]*Ir[1]) + (Z[1]*Ir[0])];
        break;
  
      case 0:
        // norminal pi model
        Vs = [(ABCD[0][0]*volt) + ((Z[0]*Ir[0]) - (Z[1]*Ir[1])), (ABCD[0][1]*volt) + (Z[0]*Ir[1]) + (Z[1]*Ir[0])];
        break;
    
      default:
        break;
    } 
  
    // calculate the sending end current
    let Is;
    switch (typeModel) {
      case 1:
        // short model
        Is = Ir;
        break;
      case 0:
        // morminal pi model
        Is = [(ABCD[2][0]*volt) + (ABCD[0][0]*Ir[0]) - (ABCD[0][1]*Ir[1]), (ABCD[2][1]*volt) + (ABCD[0][0]*Ir[1]) + (ABCD[0][1]*Ir[0])];
        break;
    
      default:
        break;
    } 
  
    let VR;
    switch (typeModel) {
      case 1:
        // short model
        VR = (((((Vs[0]**2 + Vs[1]**2)**0.5)) - (volt))/(volt))*100;
        break;
  
      case 0:
        // norminal pi model
        VR = (((((Vs[0]**2 + Vs[1]**2)**0.5)/((ABCD[0][0]**2 + ABCD[0][1]**2)**0.5)) - (volt)) /(volt))*100;
        break;
  
      default:
        break;
    }
  
    // calculate sending end power
    let Ps;
    switch(typeModel){
      case 1:
        // short model
        Ps = (3**0.5)*((Vs[0]**2 + Vs[1]**2)**0.5)*((Is[0]**2 + Is[1]**2)**0.5)*Math.cos((Math.PI/180)*(Math.atan(Vs[1]/Vs[0])) - (Math.atan(Is[1]/Is[0])));
        break;
      case 0:
          // norminal PI model
          Ps = (3**0.5)*((Vs[0]**2 + Vs[1]**2)**0.5)*((Is[0]**2 + Is[1]**2)**0.5)*Math.cos((Math.PI/180)*(Math.atan(Vs[1]/Vs[0])) - (Math.atan(Is[1]/Is[0])));
          break;  
      default:
          break;
    }
  
    // calculate total losses in system
    let tLosses = Ps - recePower;
    
    // calculate efficiency of the system
    let efficiency = (recePower/Ps) * 100;
    
    // storing the variable in an object
    object[i++] = ind;
    object[i++] = cap;
    object[i++] = reaInd;
    object[i++] = reaCap;
    object[i++] = chargingCurrent;
    object[i++] = ABCD;
    object[i++] = Vs;
    object[i++] = Is;
    object[i++] = VR;
    object[i++] = tLosses;
    object[i++] = efficiency;
    let j = 0;
    object[j++] = typeSpacing;
    object[j++] = typeModel;
    object[j++] = diaStrand;
    object[j++] = numStrand;
    object[j++] = spacingSubCond;
    object[j++] = numSubCond;
    object[j++] = spacingPhaseCond;
    object[j++] = length;
    object[j++] = resistance;
    object[j++] = freq;
    object[j++] = volt;
    object[j++] = recePower;
    object[j++] = powerFactor;
    navigate("/Successful", {state: {result : object}})
  }
};

export default Parameters;


