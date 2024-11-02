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
import {
  StepsForRecording,
  StepforTests,
  StepsforDedup,
} from "../../utils/types";
import CloseIcon from "@mui/icons-material/Close";

const stepsRecord = [
  {
    label: "Auto Generate Test",
    steps: [
      { stepName: "Schema Validation." },
      { stepName: "Generating tests." },
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
    steps: [{ stepName: "Replaying tests" }, { stepName: "Generating report" }],
    stepName: "Get Test Coverage",
  },
];

interface SideBarNormalProps {
  onNext: () => void;
  onReset: () => void;
  stepsForRecording: StepsForRecording;
  stepsForTesting: StepforTests;
  stepsForDedup: StepsforDedup;
  RemoveSideContent: () => void;
  SideBartheme: boolean;
  activeStep: number;
  subStepIndex: number;
  dedupStepIndex: number;
  testSubStepIndex: number;
  expandedSteps: number[];
  setSidebarState: React.Dispatch<
    React.SetStateAction<{
      activeStep: number;
      subStepIndex: number;
      dedupStepIndex: number;
      testSubStepIndex: number;
      expandedSteps: number[];
    }>
  >;
}

export default function SideBarNormal({
  onNext,
  onReset,
  stepsForRecording,
  stepsForTesting,
  stepsForDedup,
  RemoveSideContent,
  SideBartheme,
  activeStep,
  subStepIndex,
  dedupStepIndex,
  testSubStepIndex,
  expandedSteps,
  setSidebarState,
}: SideBarNormalProps) {
  const [subStepCompleted, setSubStepCompleted] = React.useState(false);

  React.useEffect(() => {
    if (activeStep === 0) {
      if (
        subStepIndex >= 0 &&
        subStepIndex < stepsRecord[activeStep].steps.length
      ) {
        const timer = setTimeout(() => {
          if (subStepIndex === 0 && !stepsForRecording.schemaValidation) {
            setSubStepCompleted(false);
          } else if (subStepIndex === 1 && !stepsForRecording.GenerateTest) {
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

        return () => { clearTimeout(timer); };
      }
    } else if (activeStep === 1) {
      if (
        dedupStepIndex >= 0 &&
        dedupStepIndex < stepsRecord[activeStep].steps.length
      ) {
        const timer = setTimeout(() => {
          if (dedupStepIndex === 0 && !stepsForDedup.Dedup) {
            setSubStepCompleted(false);
          } else if (
            dedupStepIndex === 1 &&
            !stepsForDedup.Duplicates_removed
          ) {
            setSubStepCompleted(false);
          } else {
            setSubStepCompleted(true);
            setTimeout(() => {
              setSubStepCompleted(false);
              if (dedupStepIndex + 1 < stepsRecord[activeStep].steps.length) {
                setSidebarState((prevState) => ({
                  ...prevState,
                  dedupStepIndex: dedupStepIndex + 1,
                }));
              } else {
                setSidebarState((prevState) => ({
                  ...prevState,
                  activeStep: prevState.activeStep + 1,
                  dedupStepIndex: -1,
                  expandedSteps: [...prevState.expandedSteps, activeStep + 1],
                }));
              }
            }, 500);
          }
        }, 1000);

        return () => { clearTimeout(timer); };
      }
    } else if (activeStep === 2) {
      if (
        testSubStepIndex >= 0 &&
        testSubStepIndex < stepsRecord[activeStep].steps.length
      ) {
        const timer = setTimeout(() => {
          if (testSubStepIndex === 0 && !stepsForTesting.Replaying_tests) {
            setSubStepCompleted(false);
          } else if (
            testSubStepIndex === 1 &&
            !stepsForTesting.generate_report
          ) {
            setSubStepCompleted(false);
          } else {
            setSubStepCompleted(true);
            setTimeout(() => {
              setSubStepCompleted(false);
              if (testSubStepIndex + 1 < stepsRecord[activeStep].steps.length) {
                setSidebarState((prevState) => ({
                  ...prevState,
                  testSubStepIndex: testSubStepIndex + 1,
                }));
              } else {
                setSidebarState((prevState) => ({
                  ...prevState,
                  activeStep: prevState.activeStep + 1,
                  testSubStepIndex: -1,
                  expandedSteps: [...prevState.expandedSteps, activeStep + 1],
                }));
              }
            }, 500);
          }
        }, 1000);
        localStorage.setItem("one_time", "false");
        return () => { clearTimeout(timer); };
      }
    }
  }, [
    subStepIndex,
    testSubStepIndex,
    dedupStepIndex,
    activeStep,
    stepsForRecording,
    stepsForTesting,
    stepsForDedup,
    setSidebarState,
  ]);

  const handleNext = () => {
    onNext();
    if (activeStep === 0) {
      setSidebarState((prevState) => ({
        ...prevState,
        subStepIndex: 0,
      }));
    } else if (activeStep === 1) {
      setSidebarState((prevState) => ({
        ...prevState,
        dedupStepIndex: 0,
      }));
    } else {
      setSidebarState((prevState) => ({
        ...prevState,
        testSubStepIndex: 0,
      }));
    }
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
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        zIndex: "0",
        width: "100%",
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
            color: "#1f2937",
            fontWeight: "bold",
            m: 0,
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
          onChange={() => { handleAccordionChange(index); }}
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
          className={SideBartheme
              ? "border border-b-1 bg-neutral-200 border-gray-200"
              : "bg-[#171a1e]"}
          disableGutters={true}
          TransitionProps={{ timeout: { appear: 1, enter: 1, exit: 4 } }}
        >
          <AccordionSummary
            expandIcon={
              expandedSteps.includes(index) ? (
                <ExpandMoreIcon className="text-gray-600" />
              ) : index <= activeStep ? (
                <ExpandMoreIcon className="text-gray-700" />
              ) : (
                <LockIcon
                  className={SideBartheme ? "text-secondary-300" : "text-white"}
                />
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              m: 0,
            }}
            className={` ${
              SideBartheme
                ? index <= activeStep
                  ? "bg-white"
                  : "bg-gray-200"
                : index <= activeStep
                ? "bg-[#30363e]"
                : "bg-[#3f4651]"
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
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
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
                    className={(activeStep === 0 && subStepIndex > subIndex) ||
                      (activeStep === 1 && dedupStepIndex > subIndex) ||
                      (activeStep === 2 && testSubStepIndex > subIndex) ||
                      index < activeStep
                        ? "items-center"
                        : "items-center"}
                  >
                    <Box
                      sx={{
                        width: 24,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mr: 1,
                      }}
                    >
                      {((activeStep === 0 && subStepIndex === subIndex) ||
                        (activeStep === 1 && dedupStepIndex === subIndex) ||
                        (activeStep === 2 && testSubStepIndex === subIndex)) &&
                      index === activeStep ? (
                        subStepCompleted ? (
                          <DoneIcon className="font-bold rounded-md p-1 text-accent-100" />
                        ) : (
                          <CircularProgress size={14} />
                        )
                      ) : (activeStep === 0 && subStepIndex > subIndex) ||
                        (activeStep === 1 && dedupStepIndex > subIndex) ||
                        (activeStep === 2 && testSubStepIndex > subIndex) ||
                        index < activeStep ? (
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
                        className={((activeStep === 0 && subStepIndex === subIndex) ||
                            (activeStep === 1 && dedupStepIndex === subIndex) ||
                            (activeStep === 2 &&
                              testSubStepIndex === subIndex)) &&
                          index === activeStep
                            ? subStepCompleted
                              ? SideBartheme
                                ? "text-secondary-300"
                                : "text-gray-300"
                              : SideBartheme
                              ? "text-secondary-500"
                              : "text-gray-100"
                            : (activeStep === 0 && subStepIndex > subIndex) ||
                              (activeStep === 1 && dedupStepIndex > subIndex) ||
                              (activeStep === 2 &&
                                testSubStepIndex > subIndex) ||
                              index < activeStep
                            ? SideBartheme
                              ? "text-secondary-300"
                              : "text-gray-300"
                            : SideBartheme
                            ? "text-secondary-300"
                            : "text-gray-300"}
                      >
                        {subStep.stepName}
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
                    disabled={
                      activeStep === 0
                        ? subStepIndex !== -1
                        : activeStep === 1
                        ? dedupStepIndex !== -1
                        : testSubStepIndex !== -1
                    }
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
          className={SideBartheme ? "bg-white" : "bg-neutral-800"}
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
