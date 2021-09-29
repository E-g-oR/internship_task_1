import { postType } from "../../components/ui/Post/Post";
import { POSTS_RECEIVED, POSTS_REQUESTED, POST_ADDED, POST_TOGGLED } from "../action_types";

interface IAction {
   type: string,
   payload?: object | number | string
}
const initialState = {
   fetching: true,
   allPosts: [],
   favoritePosts: []
}
export default function appReducer(state = initialState, action: IAction) {
   switch (action.type) {
      case POSTS_REQUESTED: {
         return {
            ...state,
            fetching: true
         }
      }
      case POSTS_RECEIVED: {
         return {
            ...state,
            fetching: false,
            allPosts: action.payload,
         }
      }
      case POST_ADDED: {
         return {
            ...state,
            allPosts: [
               action.payload,
               ...state.allPosts
            ],

         }
      }
      case POST_TOGGLED: {
         return {
            ...state,
            allPosts: state.allPosts.map((post: postType) => {
               if (post.id !== action.payload) {
                  return post
               }
               return {
                  ...post,
                  isFavorite: !post.isFavorite
               }
            })
         }
      }

      default:
         return state
   }
}