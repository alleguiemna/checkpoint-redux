import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK} from "../type";

const initialState = {
  taskList: [
    {
      id: 0,
      description: "Learn HTML and CSS ",
      isDone: true,
    },
    {
      id: 1,
      description: "Learn ES6 ",
      isDone: true,
    },
    {
      id: 2,
      description: "Learn node.js",
      isDone: false,
    },
  ],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, payload] };
    case COMPLETE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((todo) => todo.id !== payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload.id ? { ...todo, description: payload.value } : todo
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
