/**
 * Status of the task/job executing cloud function.
 */
export type InvokeFunctionResponseStatusEnum =
  | "errored"
  | "fulfilled"
  | "in-progress"
  | "pending-evaluation"
  | "rejected";
