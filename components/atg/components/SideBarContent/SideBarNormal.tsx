import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import LockIcon from "@mui/icons-material/Lock";
import CircleIcon from "@mui/icons-material/Circle";
import StepsForRecording from "../../StepTypes/types";
import CloseIcon from "@mui/icons-material/Close";

const stepsRecord = [
  {
    label: "Auto Generate Test",
    steps: [
      { stepName: "Recording" },
      { stepName: "Hitting API's" },
      { stepName: "Generating keploy tests" },
    ],
    stepName: "Start Recording",
  },
  {
    label: "Remove Duplicate",
    steps: [
      { stepName: "Starting Deduplication" },
      { stepName: "Duplicates removed" },
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
  RemoveSideContent: () => void;
  SideBartheme: boolean;
  activeStep: number;
  subStepIndex: number;
  expandedSteps: number[];
  setSidebarState: React.Dispatch<
    React.SetStateAction<{
      activeStep: number;
      subStepIndex: number;
      expandedSteps: number[];
    }>
  >;
}

export default function SideBarNormal({
  onNext,
  onReset,
  stepsForRecording,
  RemoveSideContent,
  SideBartheme,
  activeStep,
  subStepIndex,
  expandedSteps,
  setSidebarState,
}: SideBarNormalProps) {
  const [subStepCompleted, setSubStepCompleted] = React.useState(false);

  React.useEffect(() => {
    if (
      subStepIndex >= 0 &&
      subStepIndex < stepsRecord[activeStep].steps.length
    ) {
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
              setSidebarState((prevState) => ({
                ...prevState,
                subStepIndex: subStepIndex + 1,
              }));
            } else {
              setSidebarState((prevState) => ({
                ...prevState,
                activeStep: prevState.activeStep + 1,
                subStepIndex: -1,
                expandedSteps: [...prevState.expandedSteps, activeStep + 1],
              }));
            }
          }, 500);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [subStepIndex, activeStep, stepsForRecording, setSidebarState]);

  const handleNext = () => {
    onNext();
    setSidebarState((prevState) => ({
      ...prevState,
      subStepIndex: 0,
    }));
  };

  const handleAccordionChange = (index: number) => {
    if (expandedSteps.includes(index) || index <= activeStep) {
      setSidebarState((prevState) => ({
        ...prevState,
        expandedSteps: prevState.expandedSteps.includes(index)
          ? prevState.expandedSteps.filter((step) => step !== index)
          : [...prevState.expandedSteps, index],
      }));
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 300,
        overflowY: "auto",
        position: "relative",
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": {
          display: "none", // For Chrome, Safari, and Opera
        },
        zIndex: "0", // Set a lower z-index
      }}
      className={`${
        SideBartheme ? "bg-white" : "bg-[#21252b]"
      } h-full rounded-br-md`}
    >
      <div
        className={`flex items-center h-14 ${
          SideBartheme ? "bg-neutral-200" : "bg-[#171a1e]"
        } justify-between px-3 py-1 sticky top-0 z-10`}
      >
        <Typography
          sx={{
            color: "#1f2937", // Tailwind's gray-700 color
            fontWeight: "bold",
            m: 0, // remove margin
          }}
          className={`${
            SideBartheme ? "text-secondary-300" : "text-white"
          } font-bold`}
        >
          Content
        </Typography>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={RemoveSideContent}
        >
          <CloseIcon />
        </button>
      </div>
      {stepsRecord.map((step, index) => (
        <Accordion
          expanded={expandedSteps.includes(index)}
          key={step.label}
          onChange={() => handleAccordionChange(index)}
          sx={{
            backgroundColor: "#f5f5f5",
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&:last-child": {
              borderBottom: "none",
            },
          }}
          className={`${
            SideBartheme
              ? "border border-b-1 bg-neutral-200 border-gray-200"
              : "bg-[#171a1e]"
          }`}
          disableGutters={true}
          TransitionProps={{ timeout: { appear: 1, enter: 1, exit: 4 } }}
        >
          <AccordionSummary
            expandIcon={
              expandedSteps.includes(index) ? (
                <ExpandMoreIcon className="text-gray-700" />
              ) : index <= activeStep ? (
                <ExpandMoreIcon className="text-gray-700" />
              ) : (
                <LockIcon
                  className={`${
                    SideBartheme ? "text-secondary-300" : "text-white"
                  }`}
                />
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              m: 0, // remove margin
            }}
            className={` ${
              SideBartheme
                ? index <= activeStep
                  ? "bg-white"
                  : "bg-gray-200"
                : index <= activeStep
                ? "bg-neutral-800"
                : "bg-neutral-700"
            }  `}
          >
            <Typography
              className={`${
                SideBartheme ? "text-secondary-300" : "text-gray-300"
              } font-semibold`}
            >
              {step.label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              maxHeight: "400px",
              overflowY: "auto",
              m: 0,
              paddingright: "15px",
              scrollbarWidth: "none", // For Firefox
              "&::-webkit-scrollbar": {
                display: "none", // For Chrome, Safari, and Opera
              },
            }}
          >
            <Box sx={{ mt: 2 }}>
              <Box component="ul" sx={{ listStyleType: "none", pl: 0, ml: 0 }}>
                {step.steps.map((subStep, subIndex) => (
                  <Box
                    component="li"
                    key={subIndex}
                    sx={{ display: "flex", mb: 1 }}
                    className={`${
                      subStepIndex > subIndex || index < activeStep
                        ? "items-center"
                        : "items-center"
                    }`}
                  >
                    <Box
                      sx={{
                        width: 24, // fixed width for icons
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mr: 1,
                      }}
                    >
                      {subStepIndex === subIndex && index === activeStep ? (
                        subStepCompleted ? (
                          <DoneIcon className="font-bold rounded-md p-1 text-accent-100" />
                        ) : (
                          <CircularProgress size={14} />
                        )
                      ) : subStepIndex > subIndex || index < activeStep ? (
                        <DoneIcon className="font-bold rounded-md p-1 text-accent-100" />
                      ) : (
                        <CircleIcon
                          className={`text-xs ${
                            SideBartheme
                              ? "text-secondary-300"
                              : "text-gray-300"
                          } scale-90`}
                        />
                      )}
                    </Box>
                    <Box className="flex flex-col">
                      <Box
                        component="span"
                        sx={{ fontSize: "0.875rem", fontWeight: "normal" }}
                        className={`${
                          subStepIndex === subIndex && index === activeStep
                            ? subStepCompleted
                              ? SideBartheme
                                ? "text-secondary-300"
                                : "text-gray-300"
                              : SideBartheme
                              ? "text-secondary-500"
                              : "text-gray-100"
                            : subStepIndex > subIndex || index < activeStep
                            ? SideBartheme
                              ? "text-secondary-300"
                              : "text-gray-300"
                            : SideBartheme
                            ? "text-secondary-300"
                            : "text-gray-300"
                        }`}
                      >
                        {`${subStep.stepName}`}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            {index === activeStep && (
              <Box
                sx={{ mb: 2 }}
                className="shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]"
              >
                <div className="">
                  <button
                    onClick={handleNext}
                    className="mt-1 mr-1 w-full bg-primary-300 font-semibold text-secondary-300 px-4 py-2 rounded"
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
        <Paper
          square
          elevation={0}
          sx={{ p: 2 }}
          className={`${SideBartheme ? "bg-white" : "bg-neutral-800"}`}
        >
          <Typography
            className={`text-base text-center font-semibold ${
              SideBartheme ? "text-secondary-300" : "text-white"
            }`}
          >
            Would you like to reset?
          </Typography>
          <button
            onClick={onReset}
            className="mt-1 mr-1 w-full bg-primary-300 font-semibold scale-90 px-4 py-2 rounded"
          >
            Reset
          </button>
        </Paper>
      )}
    </Box>
  );
}
