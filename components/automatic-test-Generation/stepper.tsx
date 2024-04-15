import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Generate Test \n Cases",
  "Test Coverage",
  "Remove Duplicate",
];
type HorizontalLinearStepperProps = {
  children: React.ReactNode[];
};

export default function HorizontalLinearStepper({
  children
}: HorizontalLinearStepperProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [ChildrenIndex,setChildrenIndex] = React.useState(0);
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    setChildrenIndex(ChildrenIndex+1);
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {  
    if(ChildrenIndex!=0){
      setChildrenIndex(ChildrenIndex-1);
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //Not handling skip here
  // const handleSkip = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setChildrenIndex(0);
    setActiveStep(0);
  };
  const ChildrenArray = React.Children.toArray(children);
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <p className="text-white font-headingProgress">{label}</p>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className=" max-h-screen-md">
      {ChildrenArray[ChildrenIndex]}
      </div>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <button
              onClick={handleReset}
              className="bg-gray-700 p-2 rounded text-slate-200 hover:bg-slate-200 hover:text-gray-700 duration-200"
            >
              Reset
            </button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
      
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              className="bg-gray-700 p-2 rounded text-slate-200 hover:bg-slate-200 hover:text-gray-700 duration-200"
            >
               &lt;-back
            </button>
            <Box sx={{ flex: "1 1 auto" }} />
            <button
              onClick={handleNext}
              className="bg-gray-700 p-2 rounded text-slate-200 hover:bg-slate-200 hover:text-gray-700 duration-200"
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next->"}
            </button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
