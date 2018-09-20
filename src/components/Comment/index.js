import React from 'react';

const Comment = ({ name, body }) => {
  const shortName = name.split(' ');
  const first = shortName[0];
  const last = shortName[1];

  // sets the first and last name of the author
  const full = last
    ? first.charAt(0).toUpperCase() +
      first.slice(1) +
      ' ' +
      last.charAt(0).toUpperCase() +
      last.slice(1)
    : first.charAt(0).toUpperCase() + first.slice(1);

  return (
    <div style={{ borderBottom: '1px solid #eee' }}>
      <p className="my-4">
        <b>{full}</b>
      </p>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
