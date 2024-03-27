import constants from "../Utils/constants";

const initialState = {
  isgetTodayEventDataLoading: false,
  isgetTodayPlacementDataLoading: false,
  todayPlacementdata: [],
  todayEventdata: [],
};

export const timeFrameDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_TODAY_PLACEMENT_DRIVE_REQUEST:
      return {
        ...state,
        isgetTodayPlacementDataLoading: true,
      };
    case constants.GET_TODAY_PLACEMENT_DRIVE_SUCCESS:
      return {
        ...state,
        isgetTodayPlacementDataLoading: false,
        todayPlacementdata: action.payload,
      };
    case constants.GET_TODAY_PLACEMENT_DRIVE_FAILURE:
      return {
        ...state,
        isgetTodayPlacementDataLoading: false,
      };
    case constants.GET_TODAY_EVENT_REQUEST:
      return {
        ...state,
        isgetTodayEventDataLoading: true,
      };
    case constants.GET_TODAY_EVENT_SUCCESS:
      return {
        ...state,
        isgetTodayEventDataLoading: false,
        todayEventdata: action.payload,
      };
    case constants.GET_TODAY_EVENT_FAILURE:
      return {
        ...state,
        isgetTodayEventDataLoading: false,
      };
    default:
      return state;
  }
};
