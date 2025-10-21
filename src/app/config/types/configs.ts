import { Model } from "./models";
import { Workflow } from "./workflows";

export type ConfigA = {
  model: Model;
};

export type ConfigB = {
  variables: Record<string, string>;
  workflow: Workflow;
};

export type Config = {
  a: ConfigA;
  b: ConfigB;
};
