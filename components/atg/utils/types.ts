export  interface StepsForRecording {
  schemaValidation: boolean;
  GenerateTest: boolean;
};

export  interface StepsforDedup {
  Dedup:boolean;
  Duplicates_removed:boolean;
};

export  interface StepforTests {
  Replaying_tests:boolean;
  generate_report:boolean
};