const formFields = [
  {
    label: 'First Name:',
    type: 'name',
    name: 'firstName',
    mandatory: true,
  },
  {
    label: 'Last Name:',
    type: 'name',
    name: 'lastName',
    mandatory: true,
  },
  {
    label: 'Email:',
    type: 'email',
    name: 'email',
    mandatory: true,
  },
  {
    label: 'Phone Number:',
    type: 'tel',
    name: 'phoneNumber',
    mandatory: false,
  },
];

export default formFields;
