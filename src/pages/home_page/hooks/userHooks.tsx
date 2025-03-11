import { useDispatch } from "react-redux";
import { useFetchData } from "../../../config/api";
import { AppDispatch } from "../../../store";
import { setCurrentUser } from "../../../store/slices/userSlice";
import { User } from "../../../store/types";

export const useCurrentUser = () => {
   const { data } = useFetchData<User>("currentUser", "/me", {
      suspense: true
    });
    const dispatch = useDispatch<AppDispatch>();
    dispatch(setCurrentUser(data))

    return data;
};

