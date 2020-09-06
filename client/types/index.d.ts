import { ContainerState as RecipientsAndOptins } from "../containers/RecipientsAndOptins/types";

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly recipientsAndOptins: RecipientsAndOptins;
}
