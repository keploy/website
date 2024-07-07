import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import StepsForRecording from "../../StepTypes/types";

const stepsRecord = [
  {
    label: "Auto Generate Test",
    steps: [
      { stepName: "Recording" },
      { stepName: "Hitting API's" },
      { stepName: "Generating Keploy Test Folder" },
      { stepName: "Generating keploy tests" },
    ],
    stepName: "Start Recording",
  },
  {
    label: "Remove Duplicate",
    steps: [
      { stepName: "Starting Deduplication" },
      { stepName: "Hitting API's" },
      { stepName: "Generating Keploy Test Folder" },
      { stepName: "Generating keploy tests" },
    ],
    stepName: "Start Deduplication",
  },
  {
    label: "Test Coverage",
    steps: [
      { stepName: "Recording" },
      { stepName: "Hitting API's" },
      { stepName: "Generating Keploy Test Folder" },
      { stepName: "Generating keploy tests" },
    ],
    stepName: "Get Test Coverage",
  },
];

interface SideBarNormalProps {
  onNext: () => void;
  onReset: () => void;
  stepsForRecording: StepsForRecording;
}

export default function SideBarNormal({
  onNext,
  onReset,
  stepsForRecording,
}: SideBarNormalProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [subStepIndex, setSubStepIndex] = React.useState(-1);
  const [subStepCompleted, setSubStepCompleted] = React.useState(false);
  const [expandedSteps, setExpandedSteps] = React.useState<number[]>([0]);

  React.useEffect(() => {
    if (subStepIndex >= 0 && subStepIndex < stepsRecord[activeStep].steps.length) {
      const timer = setTimeout(() => {
        if (subStepIndex === 0 && !stepsForRecording.starting) {
          setSubStepCompleted(false);
        } else if (subStepIndex === 1 && !stepsForRecording.curlApiHitting) {
          setSubStepCompleted(false);
        } else {
          setSubStepCompleted(true);
          setTimeout(() => {
            setSubStepCompleted(false);
            if (subStepIndex + 1 < stepsRecord[activeStep].steps.length) {
              setSubStepIndex(subStepIndex + 1);
            } else {
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
              setSubStepIndex(-1);
              setExpandedSteps((prevExpanded) => [...prevExpanded, activeStep + 1]);
            }
          }, 500);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [subStepIndex, activeStep, stepsForRecording]);

  const handleNext = () => {
    onNext();
    setSubStepIndex(0);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSubStepIndex(-1);
    setSubStepCompleted(false);
    setExpandedSteps([0]);
    onReset();
  };

  const handleAccordionChange = (index: number) => {
    setExpandedSteps((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((step) => step !== index)
        : [...prevExpanded, index]
    );
  };

  React.useEffect(()=>{
    console.log("substepIndex: ",subStepIndex)
    console.log("substepcompleted: ",subStepCompleted)
    console.log("expandedSteps: ",expandedSteps)
  },[subStepIndex,subStepCompleted,expandedSteps])

  return (
    <Box
      sx={{
        maxWidth: 300,
        backgroundColor: "#f5f5f5",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        height:"70vh",
        overflowY: "auto",
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": {
          display: "none", // For Chrome, Safari, and Opera
        },
      }}
    >
      {stepsRecord.map((step, index) => (
        <Accordion
          expanded={expandedSteps.includes(index)}
          key={step.label}
          onChange={() => handleAccordionChange(index)}
          sx={{ mb: 1, backgroundColor: "#ffffff" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              backgroundColor: "#00163D",
              color: "#ffffff",
              borderRadius: "4px",
            }}
          >
            <Typography>
              {step.label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ maxHeight: "400px", overflowY: "auto" }}>
            <Box sx={{ mt: 2 }}>
              <Box component="ul" sx={{ listStyleType: "none", pl: 0, ml: 0 }}>
                {step.steps.map((subStep, subIndex) => (
                  <Box
                    component="li"
                    key={subIndex}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    {subStepIndex === subIndex && index === activeStep ? (
                      subStepCompleted ? (
                        <>
                          <DoneIcon className="pr-1" sx={{ color: "green" }} />
                          <Box
                            component="span"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mr: 1,
                            }}
                          >
                            {subStep.stepName}
                          </Box>
                        </>
                      ) : (
                        <>
                          <CircularProgress size={14} sx={{ mr: 1 }} />
                          <Box component="span">{subStep.stepName}</Box>
                        </>
                      )
                    ) : subStepIndex > subIndex || index > activeStep ? (
                      <>
                        <DoneIcon className="pr-1" sx={{ color: "green" }} />
                        <Box
                          component="span"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mr: 1,
                          }}
                        >
                          {subStep.stepName}
                        </Box>
                      </>
                    ) : (
                      <Box component="span">{subStep.stepName}</Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
            {index === activeStep && (
              <Box sx={{ mb: 2 }}>
                <div>
                  <button
                    onClick={handleNext}
                    className="mt-1 mr-1 bg-[#00163D] text-primary-50 hover:bg-secondary-300 px-4 py-2 rounded"
                    disabled={subStepIndex !== -1}
                  >
                    {step.stepName}
                  </button>
                </div>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
      {activeStep === stepsRecord.length && (
        <Paper square elevation={0} sx={{ p: 3 }} className=" bg-inherit">
          <Typography>
            All steps completed - Thank you for using Keploy. Click on the reset
            to start again.
          </Typography>
          <button
            onClick={handleReset}
            className="mt-1 mr-1 bg-[#00163D] text-primary-50 hover:bg-secondary-300 px-4 py-2 rounded"
          >
            Reset
          </button>
        </Paper>
      )}
    </Box>
  );
}
