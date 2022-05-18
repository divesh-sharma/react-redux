const INCREMENT_LIKES = 'INCREMENT_LIKES';
const DELETE_COURSE = 'DELETE_COURSE';
// action name should be capital
export function IncrementLikes() {
  return { type: INCREMENT_LIKES };
}

export function DeleteCourse() {
  return { type: DELETE_COURSE };
}

export function AddCourse() {
  return { type: 'ADD_NEW_COURSE' };
}

export function DeletePost() {
  return { type: 'DELETE_POST' };
}
