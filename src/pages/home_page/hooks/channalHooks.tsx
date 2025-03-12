import { useQueryClient } from "@tanstack/react-query";
import { useMutateData } from "../../../config/api"
import { FormData } from "../components/AddChannelModal/types"
import { CreateChannelResponse } from "./types"

export const useChannelManager = () => {
  const queryClient = useQueryClient();
  const { mutate, data: addedChannelData, error, status: addingChannel } =
    useMutateData<CreateChannelResponse, FormData>("POST", "/createChanel", {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["channels"] }); // ✅ Only for this mutation
      },
    });
 const addNewChannel = (channelData: FormData) => {
    mutate(channelData)
  }

  return {addNewChannel, addingChannel,  addedChannelData, error, }
}