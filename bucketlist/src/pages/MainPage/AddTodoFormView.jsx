/* eslint-disable react/prop-types */
const AddTodoFormView = ({ inputTitle, inputDesc }) => {
  return (
    <form>
      <label htmlFor='todoItem'>
        <input
          type='text'
          id='todoItem'
          placeholder='할 일'
          ref={inputTitle}
          required
        />
      </label>
      <label htmlFor='desc'>
        <input type='text' id='desc' placeholder='상세설명' ref={inputDesc} />
      </label>
    </form>
  );
};

export default AddTodoFormView;
