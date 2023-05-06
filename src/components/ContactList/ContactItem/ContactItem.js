import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { DeleteButton, ListItem } from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteBtnClick }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  return (
    <ListItem>
      {name}: {number}
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};
