import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "001",
    creator: "sunny",
    create_date: new Date().toISOString(),
    content: "I sent you a instagram message regarding this lease",
    postId: "01",
  },
  {
    id: "002",
    creator: "Emily",
    create_date: new Date().toISOString(),
    content: "Does the rent including internet",
    postId: "01",
  },
  {
    id: "002",
    creator: "Emily",
    create_date: new Date().toISOString(),
    content: "Does the rent including internet",
    postId: "02",
  },
];

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentAdded:{
      reducer(state, action){
        state.push(action.payload)
      },
      prepare(creator,content,postId){
        return{
          payload:{
            id: nanoid(),
            creator,
            create_date : new Date().toISOString(),
            content,
            postId
          }
        }
      }
    }
  },
});
export  const {commentAdded} = commentSlice.actions
export default commentSlice.reducer;
