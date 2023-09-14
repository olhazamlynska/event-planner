import { Field, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { InputWrap } from './AddEventForm.styled';

const inputIdName = nanoid();
const inputIdDescr = nanoid();
const inputIdLocation = nanoid();
const inputIdDate = nanoid();
const inputIdTime = nanoid();
const inputIdCategory = nanoid();
const inputIdImg = nanoid();
const inputIdPriority = nanoid();

const AddEventForm = () => {
  return (
    <>
      <Formik>
        <form>
          <InputWrap>
            <label htmlFor="name">Title</label>
            <Field id={inputIdName} name="name" type="text" />
          </InputWrap>
          <InputWrap>
            <label htmlFor="description">Description</label>
            <Field id={inputIdDescr} name="description" type="text" />
          </InputWrap>
          <InputWrap>
            <label htmlFor="date">Select date</label>
            <Field id={inputIdDate} name="date" type="date" />
          </InputWrap>
          <InputWrap>
            <label htmlFor="time">Select time</label>
            <Field id={inputIdTime} name="time" type="time" />
          </InputWrap>
          <InputWrap>
            <label htmlFor="locationInfo">Location</label>
            <Field id={inputIdLocation} name="locationInfo" type="text" />
          </InputWrap>
          <InputWrap>
            <label htmlFor="category">Category</label>
            <Field id={inputIdCategory} name="category" type="" />
          </InputWrap>
          <InputWrap>
            <label htmlFor="image">Add picture</label>
            <Field id={inputIdImg} name="image" type="file" />
          </InputWrap>
          <InputWrap>
            <label htmlFor="priority">Priority</label>
            <Field id={inputIdPriority} name="priority" type="text" />
          </InputWrap>
          <button type="submit">Add event</button>
        </form>
      </Formik>
    </>
  );
};
export default AddEventForm;
