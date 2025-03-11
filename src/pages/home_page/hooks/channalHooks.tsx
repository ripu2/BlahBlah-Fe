import { useMutateData } from "../../../config/api"
import { FormData } from "../components/AddChannelModal/types"
import { CreateChannelResponse } from "./types"

export const useChannelManager = () => {
  const {mutate, data: addedChannelData, error, isLoading: addingChannel} = useMutateData<CreateChannelResponse, FormData>('POST', '/createChanel')
  const addNewChannel = (channelData: FormData) => {
    mutate(channelData)
  }

  return {addNewChannel, addingChannel, addedChannelData, error}
}